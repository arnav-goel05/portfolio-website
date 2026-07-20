import { useEffect, useRef } from 'react'

export function CustomCursor() {
  const cursorRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const cursor = cursorRef.current
    const precisePointer = window.matchMedia('(hover: hover) and (pointer: fine)')
    if (!cursor || !precisePointer.matches) return

    let frame = 0
    let x = -40
    let y = -40

    const draw = () => {
      cursor.style.transform = `translate3d(${x}px, ${y}px, 0)`
      frame = 0
    }
    const move = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') return
      x = event.clientX
      y = event.clientY
      cursor.classList.add('is-active')
      if (!frame) frame = requestAnimationFrame(draw)
    }
    const hide = () => cursor.classList.remove('is-active')

    window.addEventListener('pointermove', move, { passive: true })
    document.documentElement.addEventListener('pointerleave', hide)
    return () => {
      window.removeEventListener('pointermove', move)
      document.documentElement.removeEventListener('pointerleave', hide)
      if (frame) cancelAnimationFrame(frame)
    }
  }, [])

  return <span ref={cursorRef} className="custom-cursor" aria-hidden="true" />
}
