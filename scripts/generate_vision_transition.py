from __future__ import annotations

from pathlib import Path
from typing import Iterable

from PIL import Image, ImageDraw, ImageFilter


ROOT = Path(__file__).resolve().parents[1]
ASSET_DIR = ROOT / "src" / "assets"
OUT = ASSET_DIR / "vision-transition.webp"

WIDTH = 960
HEIGHT = 540
FRAME_COUNT = 72
FRAME_MS = 38


def ease_in_out(t: float) -> float:
    return t * t * (3 - 2 * t)


def ease_out(t: float) -> float:
    return 1 - (1 - t) ** 3


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


def make_grid_background() -> Image.Image:
    bg = Image.new("RGBA", (WIDTH, HEIGHT), "#ffffff")
    draw = ImageDraw.Draw(bg, "RGBA")
    for x in range(0, WIDTH + 1, 72):
        draw.line((x, 0, x, HEIGHT), fill=(10, 25, 47, 13), width=1)
    for y in range(0, HEIGHT + 1, 72):
        draw.line((0, y, WIDTH, y), fill=(10, 25, 47, 11), width=1)

    draw.ellipse((WIDTH * 0.58, HEIGHT * 0.16, WIDTH * 1.08, HEIGHT * 0.72), fill=(198, 70, 61, 22))
    draw.rectangle((0, 0, WIDTH, HEIGHT), outline=None)
    return bg.filter(ImageFilter.GaussianBlur(2.4))


def rounded_panel(size: tuple[int, int], radius: int, alpha: int) -> Image.Image:
    panel = Image.new("RGBA", size, (255, 255, 255, 0))
    draw = ImageDraw.Draw(panel, "RGBA")
    draw.rounded_rectangle((2, 2, size[0] - 2, size[1] - 2), radius=radius, fill=(255, 255, 255, alpha))
    draw.rounded_rectangle(
        (2, 2, size[0] - 2, size[1] - 2),
        radius=radius,
        outline=(255, 255, 255, min(210, alpha + 45)),
        width=2,
    )
    return panel


def draw_assessment_panel(frame: Image.Image, progress: float, alpha: float) -> None:
    panel_w = round(WIDTH * 0.58)
    panel_h = round(HEIGHT * 0.31)
    panel = rounded_panel((panel_w, panel_h), 30, round(118 * alpha))
    panel = panel.filter(ImageFilter.GaussianBlur(0.15))
    draw = ImageDraw.Draw(panel, "RGBA")

    for x in range(70, panel_w - 70, 26):
        draw.line((x, 44, x, panel_h - 48), fill=(255, 255, 255, round(36 * alpha)), width=1)
    for y in range(44, panel_h - 48, 26):
        draw.line((70, y, panel_w - 70, y), fill=(255, 255, 255, round(38 * alpha)), width=1)

    cx, cy = panel_w // 2, panel_h // 2
    arc_box = (cx - 58, cy - 58, cx + 58, cy + 58)
    draw.arc(arc_box, -100, round(-100 + 300 * progress), fill=(255, 255, 255, round(230 * alpha)), width=8)
    draw.text((cx, cy - 4), f"{round(36 + progress * 62)}%", fill=(255, 255, 255, round(230 * alpha)), anchor="mm")
    draw.text((cx, cy + 28), "Loading assessment", fill=(255, 255, 255, round(190 * alpha)), anchor="mm")

    start = (round(panel_w * 0.22), round(panel_h * 0.68))
    end = (round(panel_w * 0.78), round(panel_h * 0.38))
    mid = (round(start[0] + (end[0] - start[0]) * progress), round(start[1] + (end[1] - start[1]) * progress))
    draw.line((start, mid), fill=(255, 255, 255, round(170 * alpha)), width=3)
    for point, color in [(start, (102, 113, 125)), (end, (198, 70, 61)), (mid, (8, 22, 38))]:
        draw.ellipse((point[0] - 10, point[1] - 10, point[0] + 10, point[1] + 10), fill=(*color, round(210 * alpha)))

    x = round((WIDTH - panel_w) / 2)
    y = round(HEIGHT * 0.31)
    frame.alpha_composite(panel, (x, y))


def composite_frame(
    shell: Image.Image,
    pov: Image.Image,
    background: Image.Image,
    index: int,
) -> Image.Image:
    t = index / (FRAME_COUNT - 1)
    lift = ease_in_out(min(t / 0.72, 1))
    reveal = ease_out(max((t - 0.52) / 0.48, 0))

    frame = background.copy()
    overlay = Image.new("RGBA", (WIDTH, HEIGHT), (255, 255, 255, round(24 + 56 * t)))
    frame.alpha_composite(overlay)

    vignette = Image.new("RGBA", (WIDTH, HEIGHT), (0, 0, 0, 0))
    draw = ImageDraw.Draw(vignette, "RGBA")
    draw.ellipse((-210, -170, WIDTH + 210, HEIGHT + 260), outline=(8, 22, 38, round(42 * t)), width=150)
    frame.alpha_composite(vignette.filter(ImageFilter.GaussianBlur(36)))

    shell_scale = 0.72 + 1.96 * lift
    shell_w = round(WIDTH * shell_scale)
    shell_layer = fit_image(shell, shell_w, round(shell_w * shell.height / shell.width)).convert("RGBA")
    blur = 0 if t < 0.66 else (t - 0.66) * 12
    if blur > 0:
        shell_layer = shell_layer.filter(ImageFilter.GaussianBlur(blur))

    shell_y = round(HEIGHT + 90 - lift * 560)
    paste_center(frame, shell_layer, (WIDTH // 2, shell_y), alpha=max(0, 1 - reveal * 0.92))

    panel_alpha = min(1, max(0, (t - 0.14) / 0.24)) * max(0, 1 - reveal * 1.4)
    if panel_alpha > 0.02:
        draw_assessment_panel(frame, lift, panel_alpha)

    pov_alpha = reveal
    if pov_alpha > 0:
        pov_layer = cover_image(pov, WIDTH, HEIGHT).convert("RGBA")
        pov_layer = pov_layer.resize((round(WIDTH * (1 + reveal * 0.18)), round(HEIGHT * (1 + reveal * 0.18))), Image.Resampling.LANCZOS)
        pov_layer = pov_layer.crop(
            (
                (pov_layer.width - WIDTH) // 2,
                (pov_layer.height - HEIGHT) // 2,
                (pov_layer.width + WIDTH) // 2,
                (pov_layer.height + HEIGHT) // 2,
            )
        )
        if reveal < 0.28:
            pov_layer = pov_layer.filter(ImageFilter.GaussianBlur((0.28 - reveal) * 10))
        paste_center(frame, pov_layer, (WIDTH // 2, HEIGHT // 2), alpha=pov_alpha)

    return frame.convert("RGB")


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
    background = make_grid_background()
    frames = [composite_frame(shell, pov, background, index) for index in range(FRAME_COUNT)]
    save_webp(frames)
    print(f"Wrote {OUT.relative_to(ROOT)} ({OUT.stat().st_size:,} bytes)")


if __name__ == "__main__":
    main()
