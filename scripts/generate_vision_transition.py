from __future__ import annotations

from pathlib import Path
from typing import Iterable

from PIL import Image, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "src" / "assets"
OUT = ASSET_DIR / "vision-transition.webp"

WIDTH = 960
HEIGHT = 540
FRAME_MS = 38
APPROACH_FRAMES = 37
HOLD_FRAMES = 52
REVEAL_FRAMES = 36
FRAME_COUNT = APPROACH_FRAMES + HOLD_FRAMES + REVEAL_FRAMES


def ease_in_out(t: float) -> float:
    return t * t * (3 - 2 * t)


def ease_out(t: float) -> float:
    return 1 - (1 - t) ** 3


def clamp(value: float, low: float = 0, high: float = 1) -> float:
    return max(low, min(value, high))


def fit_image(image: Image.Image, width: int, height: int) -> Image.Image:
    scale = min(width / image.width, height / image.height)
    size = (round(image.width * scale), round(image.height * scale))
    return image.resize(size, Image.Resampling.LANCZOS)


def cover_image(image: Image.Image, width: int, height: int) -> Image.Image:
    scale = max(width / image.width, height / image.height)
    size = (round(image.width * scale), round(image.height * scale))
    image = image.resize(size, Image.Resampling.LANCZOS)
    left = (image.width - width) // 2
    top = (image.height - height) // 2
    return image.crop((left, top, left + width, top + height))


def paste_center(canvas: Image.Image, image: Image.Image, center: tuple[int, int], alpha: float = 1) -> None:
    layer = image
    if alpha < 1:
        layer = image.copy()
        opacity = layer.getchannel("A").point(lambda value: round(value * alpha))
        layer.putalpha(opacity)

    x = round(center[0] - layer.width / 2)
    y = round(center[1] - layer.height / 2)
    canvas.alpha_composite(layer, (x, y))


def tilt_shell_toward_viewer(shell_layer: Image.Image, amount: float) -> Image.Image:
    if amount <= 0:
        return shell_layer

    height_scale = 1 - 0.085 * amount
    width_scale = 1 + 0.018 * amount
    tilted = shell_layer.resize(
        (round(shell_layer.width * width_scale), round(shell_layer.height * height_scale)),
        Image.Resampling.LANCZOS,
    )
    return tilted.filter(ImageFilter.UnsharpMask(radius=0.7, percent=18, threshold=3))


def composite_frame(
    shell: Image.Image,
    pov: Image.Image,
    index: int,
) -> Image.Image:
    approach_progress = clamp(index / (APPROACH_FRAMES - 1))
    hold_index = index - APPROACH_FRAMES
    hold_progress = clamp(hold_index / (HOLD_FRAMES - 1))
    reveal_index = index - APPROACH_FRAMES - HOLD_FRAMES
    reveal = ease_in_out(clamp(reveal_index / (REVEAL_FRAMES - 1)))
    settle = ease_out(hold_progress)
    lift = ease_in_out(approach_progress)
    approach_tilt = ease_in_out(clamp((approach_progress - 0.46) / 0.34)) * (1 - reveal)

    frame = Image.new("RGBA", (WIDTH, HEIGHT), (255, 255, 255, 0))

    shell_scale = 0.72 + 1.96 * lift + 0.018 * settle * (1 - reveal)
    shell_w = round(WIDTH * shell_scale)
    shell_layer = fit_image(shell, shell_w, round(shell_w * shell.height / shell.width)).convert("RGBA")
    shell_layer = tilt_shell_toward_viewer(shell_layer, approach_tilt)
    blur = reveal * 4.2
    if blur > 0:
        shell_layer = shell_layer.filter(ImageFilter.GaussianBlur(blur))

    shell_y = round(HEIGHT + 90 - lift * 560 + 18 * approach_tilt + 8 * settle * (1 - reveal))
    paste_center(frame, shell_layer, (WIDTH // 2, shell_y), alpha=max(0, 1 - reveal * 0.92))

    pov_alpha = reveal
    if pov_alpha > 0:
        pov_layer = cover_image(pov, WIDTH, HEIGHT).convert("RGBA")
        if reveal < 0.28:
            pov_layer = pov_layer.filter(ImageFilter.GaussianBlur((0.28 - reveal) * 10))
        paste_center(frame, pov_layer, (WIDTH // 2, HEIGHT // 2), alpha=pov_alpha)

    return frame


def save_webp(frames: Iterable[Image.Image]) -> None:
    frames = list(frames)
    frames[0].save(
        OUT,
        save_all=True,
        append_images=frames[1:],
        duration=FRAME_MS,
        loop=1,
        quality=80,
        method=4,
    )


def main() -> None:
    shell = Image.open(ASSET_DIR / "vision-pro-shell.png").convert("RGBA")
    shell_bounds = shell.getbbox()
    if shell_bounds:
        shell = shell.crop(shell_bounds)
    pov = Image.open(ASSET_DIR / "vision-pov-frame.png").convert("RGB")
    frames = [composite_frame(shell, pov, index) for index in range(FRAME_COUNT)]
    save_webp(frames)
    print(f"Wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
