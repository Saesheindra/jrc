import { useEffect, useRef, useState } from 'react'

// Performance detection
const isMobile = () => typeof window !== 'undefined' && (window.innerWidth < 768 || /Android|iPhone|iPad|iPod|Opera Mini|IEMobile|WPDesktop/i.test(navigator.userAgent))
const prefersReducedMotion = () => typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

function createBeam(width, height, hueRange = { start: 190, range: 70 }) {
  const angle = -35 + Math.random() * 10
  return {
    x: Math.random() * width * 1.5 - width * 0.25,
    y: Math.random() * height * 1.5 - height * 0.25,
    width: 60 + Math.random() * 60,
    length: height * 2.5,
    angle: angle,
    speed: 0.4 + Math.random() * 0.6,
    opacity: 0.15 + Math.random() * 0.15,
    hue: hueRange.start + Math.random() * hueRange.range,
    pulse: Math.random() * Math.PI * 2,
    pulseSpeed: 0.015 + Math.random() * 0.02,
  }
}

export function BeamsBackground({
  className = '',
  intensity = 'strong',
  hueRange = { start: 190, range: 70 },
  children,
}) {
  const canvasRef = useRef(null)
  const wrapperRef = useRef(null)
  const beamsRef = useRef([])
  const animationFrameRef = useRef(0)
  const lastTimeRef = useRef(0)
  const isVisibleRef = useRef(true)
  const [reduceAnimations, setReduceAnimations] = useState(false)

  // Reduced beam count for performance
  const BEAM_COUNT = 10

  const opacityMap = {
    subtle: 0.5,
    medium: 0.7,
    strong: 0.85,
  }

  // Check for mobile/reduced motion preference
  useEffect(() => {
    const checkPerformance = () => {
      setReduceAnimations(isMobile() || prefersReducedMotion())
    }
    checkPerformance()
    window.addEventListener('resize', checkPerformance)
    return () => window.removeEventListener('resize', checkPerformance)
  }, [])

  useEffect(() => {
    const canvas = canvasRef.current
    const wrapper = wrapperRef.current
    if (!canvas || !wrapper) return

    // Skip animation entirely on mobile - show static gradient
    if (reduceAnimations) {
      const ctx = canvas.getContext('2d')
      if (!ctx) return
      const rect = wrapper.getBoundingClientRect()
      canvas.width = rect.width
      canvas.height = rect.height
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`

      // Draw static gradient
      const gradient = ctx.createLinearGradient(0, 0, rect.width, rect.height)
      gradient.addColorStop(0, `hsla(${hueRange.start}, 80%, 50%, 0.1)`)
      gradient.addColorStop(0.5, `hsla(${hueRange.start + hueRange.range/2}, 80%, 60%, 0.15)`)
      gradient.addColorStop(1, `hsla(${hueRange.start + hueRange.range}, 80%, 50%, 0.1)`)
      ctx.fillStyle = gradient
      ctx.fillRect(0, 0, rect.width, rect.height)
      return
    }

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    // Intersection Observer - pause when off-screen
    const observer = new IntersectionObserver(
      (entries) => {
        isVisibleRef.current = entries[0].isIntersecting
      },
      { threshold: 0.1 }
    )
    observer.observe(wrapper)

    const updateCanvasSize = () => {
      const dpr = Math.min(window.devicePixelRatio, 2)
      const rect = wrapper.getBoundingClientRect()
      canvas.width = rect.width * dpr
      canvas.height = rect.height * dpr
      canvas.style.width = `${rect.width}px`
      canvas.style.height = `${rect.height}px`
      ctx.setTransform(1, 0, 0, 1, 0, 0)
      ctx.scale(dpr, dpr)

      beamsRef.current = Array.from({ length: BEAM_COUNT }, () =>
        createBeam(rect.width, rect.height, hueRange)
      )
    }

    updateCanvasSize()
    window.addEventListener('resize', updateCanvasSize)

    function resetBeam(beam, index, totalBeams) {
      const rect = wrapper.getBoundingClientRect()
      const column = index % 3
      const spacing = rect.width / 3

      beam.y = rect.height + 100
      beam.x = column * spacing + spacing / 2 + (Math.random() - 0.5) * spacing * 0.5
      beam.width = 80 + Math.random() * 80
      beam.speed = 0.3 + Math.random() * 0.3
      beam.hue = hueRange.start + (index * hueRange.range) / totalBeams
      beam.opacity = 0.12 + Math.random() * 0.08
      return beam
    }

    function drawBeam(ctx, beam) {
      ctx.save()
      ctx.translate(beam.x, beam.y)
      ctx.rotate((beam.angle * Math.PI) / 180)

      const pulsingOpacity = beam.opacity * (0.85 + Math.sin(beam.pulse) * 0.15) * opacityMap[intensity]

      const gradient = ctx.createLinearGradient(0, 0, 0, beam.length)
      gradient.addColorStop(0, `hsla(${beam.hue}, 85%, 65%, 0)`)
      gradient.addColorStop(0.15, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
      gradient.addColorStop(0.5, `hsla(${beam.hue}, 85%, 70%, ${pulsingOpacity})`)
      gradient.addColorStop(0.85, `hsla(${beam.hue}, 85%, 65%, ${pulsingOpacity * 0.5})`)
      gradient.addColorStop(1, `hsla(${beam.hue}, 85%, 65%, 0)`)

      ctx.fillStyle = gradient
      ctx.fillRect(-beam.width / 2, 0, beam.width, beam.length)
      ctx.restore()
    }

    // Frame throttling - target 24fps for smooth but efficient animation
    const targetFPS = 24
    const frameInterval = 1000 / targetFPS

    function animate(currentTime) {
      animationFrameRef.current = requestAnimationFrame(animate)

      // Skip if not visible
      if (!isVisibleRef.current) return

      // Frame throttling
      const deltaTime = currentTime - lastTimeRef.current
      if (deltaTime < frameInterval) return
      lastTimeRef.current = currentTime - (deltaTime % frameInterval)

      const rect = wrapper.getBoundingClientRect()
      ctx.clearRect(0, 0, rect.width, rect.height)

      const totalBeams = beamsRef.current.length
      beamsRef.current.forEach((beam, index) => {
        beam.y -= beam.speed
        beam.pulse += beam.pulseSpeed

        if (beam.y + beam.length < -100) {
          resetBeam(beam, index, totalBeams)
        }

        drawBeam(ctx, beam)
      })
    }

    animationFrameRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('resize', updateCanvasSize)
      observer.disconnect()
      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity, hueRange, reduceAnimations])

  return (
    <div ref={wrapperRef} className={`beams-background-wrapper ${className}`}>
      <canvas
        ref={canvasRef}
        className="beams-canvas"
        style={{ filter: reduceAnimations ? 'none' : 'blur(20px)' }}
      />

      <div
        className="beams-overlay"
        style={{ opacity: 0.08 }}
      />

      <div className="beams-content">
        {children}
      </div>
    </div>
  )
}

export default BeamsBackground
