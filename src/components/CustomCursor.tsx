import { useEffect, useState } from 'react'

export function CustomCursor() {
  const [position, setPosition] = useState({ x: -40, y: -40 })
  const [isActive, setIsActive] = useState(false)

  useEffect(() => {
    const moveCursor = (event: PointerEvent) => {
      if (event.pointerType !== 'mouse') {
        return
      }

      setPosition({ x: event.clientX, y: event.clientY })
    }

    const activate = (event: PointerEvent) => {
      if (event.pointerType === 'mouse') {
        setIsActive(true)
      }
    }

    const deactivate = () => setIsActive(false)

    window.addEventListener('pointermove', moveCursor)
    document.addEventListener('pointerover', activate)
    document.addEventListener('pointerout', deactivate)

    return () => {
      window.removeEventListener('pointermove', moveCursor)
      document.removeEventListener('pointerover', activate)
      document.removeEventListener('pointerout', deactivate)
    }
  }, [])

  return (
    <span
      className={`custom-cursor ${isActive ? 'is-active' : ''}`}
      style={{ transform: `translate3d(${position.x}px, ${position.y}px, 0)` }}
      aria-hidden="true"
    />
  )
}
