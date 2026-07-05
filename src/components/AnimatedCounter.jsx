import { useEffect, useState, useRef, useCallback } from 'react'

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '' }) {
  const [count, setCount] = useState(0)
  const [hasAnimated, setHasAnimated] = useState(false)
  const ref = useRef(null)

  const animateCount = useCallback(() => {
    const startTime = Date.now()
    const endValue = parseInt(end)

    const animate = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / duration, 1)

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3)

      setCount(Math.floor(easeOut * endValue))

      if (progress < 1) {
        requestAnimationFrame(animate)
      }
    }

    requestAnimationFrame(animate)
  }, [end, duration])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting && !hasAnimated) {
          setHasAnimated(true)
          animateCount()
        }
      },
      { threshold: 0.3 }
    )

    if (ref.current) {
      observer.observe(ref.current)
    }

    return () => observer.disconnect()
  }, [hasAnimated, animateCount])

  return (
    <span ref={ref}>
      {prefix}{count}{suffix}
    </span>
  )
}

export default AnimatedCounter
