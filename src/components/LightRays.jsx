import { useEffect, useRef, useState } from 'react'
import './LightRays.css'

export default function LightRays({
  raysOrigin = 'top-center',
  raysColor = '#fdfcfc',
  raysSpeed = 1,
  lightSpread = 0.7,
  rayLength = 3,
  pulsating = false,
  fadeDistance = 1,
  saturation = 1,
  followMouse = false,
  mouseInfluence = 0.1,
  noiseAmount = 0,
  distortion = 0
}) {
  const containerRef = useRef(null)
  const [mousePos, setMousePos] = useState({ x: 0.5, y: 0 })

  useEffect(() => {
    if (!followMouse) return

    const handleMouseMove = (e) => {
      if (!containerRef.current) return
      const rect = containerRef.current.getBoundingClientRect()
      const x = (e.clientX - rect.left) / rect.width
      const y = (e.clientY - rect.top) / rect.height
      setMousePos({ x, y })
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [followMouse])

  const getOriginPosition = () => {
    const baseX = 50
    const baseY = 0

    if (followMouse) {
      const offsetX = (mousePos.x - 0.5) * mouseInfluence * 100
      return { x: baseX + offsetX, y: baseY }
    }

    return { x: baseX, y: baseY }
  }

  const origin = getOriginPosition()
  const spread = lightSpread * 60
  const animationDuration = 4 / raysSpeed

  const rays = Array.from({ length: 12 }, (_, i) => {
    const angle = -spread + (spread * 2 * i) / 11
    const length = rayLength * 100
    const delay = i * 0.15
    const opacity = 0.15 + Math.random() * 0.1

    return (
      <div
        key={i}
        className={`light-ray ${pulsating ? 'pulsating' : ''}`}
        style={{
          '--ray-angle': `${angle}deg`,
          '--ray-length': `${length}%`,
          '--ray-color': raysColor,
          '--ray-opacity': opacity * saturation,
          '--ray-delay': `${delay}s`,
          '--animation-duration': `${animationDuration}s`,
          '--fade-distance': fadeDistance,
          left: `${origin.x}%`,
          top: `${origin.y}%`,
        }}
      />
    )
  })

  return (
    <div ref={containerRef} className="light-rays-container">
      <div className="light-rays-glow" style={{
        '--glow-color': raysColor,
        left: `${origin.x}%`,
        top: `${origin.y}%`,
      }} />
      {rays}
    </div>
  )
}
