import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'

// Generate array of client logo paths (excluding problematic ones: 15, 44, 57)
const excludedLogos = [15, 44, 57]
const clientLogos = Array.from({ length: 70 }, (_, i) => i + 1)
  .filter(n => !excludedLogos.includes(n))
  .map(n => `/assets/clients/client-${String(n).padStart(2, '0')}.png`)

export default function ClientGlobe() {
  const containerRef = useRef(null)
  const canvasRef = useRef(null)
  const [fallback, setFallback] = useState(false)
  const [grabbing, setGrabbing] = useState(false)

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return

    // Check for reduced motion preference
    const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches

    let renderer
    try {
      renderer = new THREE.WebGLRenderer({
        canvas: canvasRef.current,
        antialias: true,
        alpha: true
      })
    } catch {
      setFallback(true)
      return
    }

    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(46, 1, 0.1, 100)
    camera.position.z = 8.4

    const group = new THREE.Group()
    scene.add(group)

    // Faint inner gold wireframe sphere
    const wireGeo = new THREE.IcosahedronGeometry(2.55, 1)
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0xD4AF37,
      wireframe: true,
      transparent: true,
      opacity: 0.07
    })
    const wire = new THREE.Mesh(wireGeo, wireMat)
    group.add(wire)

    // Logo sprites on a fibonacci sphere
    const loader = new THREE.TextureLoader()
    const N = clientLogos.length
    const R = 3.05
    const GA = Math.PI * (3 - Math.sqrt(5)) // Golden angle

    const sprites = []

    clientLogos.forEach((uri, i) => {
      const y = 1 - (i / (N - 1)) * 2
      const rad = Math.sqrt(1 - y * y)
      const th = GA * i

      const tex = loader.load(uri, () => {
        // Make all logos fill a uniform square size
        // This ensures all logos appear at consistent size on the globe
        const uniformSize = 0.72
        sprite.scale.set(uniformSize, uniformSize, 1)
        sprite.userData.baseX = uniformSize
        sprite.userData.baseY = uniformSize
      })
      tex.minFilter = THREE.LinearFilter
      tex.magFilter = THREE.LinearFilter

      const mat = new THREE.SpriteMaterial({ map: tex, transparent: true })
      const sprite = new THREE.Sprite(mat)

      sprite.position.set(
        Math.cos(th) * rad * R,
        y * R,
        Math.sin(th) * rad * R
      )
      // Uniform square scale for all logos
      sprite.scale.set(0.72, 0.72, 1)
      sprite.userData.baseX = 0.72
      sprite.userData.baseY = 0.72

      group.add(sprite)
      sprites.push(sprite)
    })

    // State
    let targetRX = 0.12
    let targetRY = 0
    let curRX = 0.12
    let curRY = 0
    let autoSpin = reduceMotion ? 0 : 0.0024
    let dragging = false
    let lastX = 0
    let lastY = 0
    let running = true

    // Size function
    function size() {
      const w = containerRef.current.clientWidth
      const h = containerRef.current.clientHeight
      renderer.setSize(w, h, false)
      camera.aspect = w / h
      camera.updateProjectionMatrix()
      camera.position.z = w < 640 ? 10.6 : 8.4
    }
    size()
    window.addEventListener('resize', size)

    // Pointer events
    const handlePointerMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect()
      if (dragging) {
        targetRY += (e.clientX - lastX) * 0.0052
        targetRX += (e.clientY - lastY) * 0.0032
        lastX = e.clientX
        lastY = e.clientY
      } else {
        const nx = (e.clientX - rect.left) / rect.width - 0.5
        const ny = (e.clientY - rect.top) / rect.height - 0.5
        targetRX = 0.12 + ny * 0.5
        autoSpin = reduceMotion ? 0 : 0.0024 + nx * 0.004
      }
      targetRX = Math.max(-0.9, Math.min(0.9, targetRX))
    }

    const handlePointerDown = (e) => {
      dragging = true
      lastX = e.clientX
      lastY = e.clientY
      setGrabbing(true)
    }

    const handlePointerUp = () => {
      dragging = false
      setGrabbing(false)
    }

    const handlePointerLeave = () => {
      if (!dragging) {
        targetRX = 0.12
        autoSpin = reduceMotion ? 0 : 0.0024
      }
    }

    containerRef.current.addEventListener('pointermove', handlePointerMove)
    containerRef.current.addEventListener('pointerdown', handlePointerDown)
    window.addEventListener('pointerup', handlePointerUp)
    containerRef.current.addEventListener('pointerleave', handlePointerLeave)

    // Hover highlight
    const ray = new THREE.Raycaster()
    const m2 = new THREE.Vector2(-2, -2)

    const handleRayMove = (e) => {
      const rect = canvasRef.current.getBoundingClientRect()
      m2.x = ((e.clientX - rect.left) / rect.width) * 2 - 1
      m2.y = -((e.clientY - rect.top) / rect.height) * 2 + 1
    }
    containerRef.current.addEventListener('pointermove', handleRayMove)

    // Intersection observer
    const observer = new IntersectionObserver(
      (entries) => {
        running = entries[0].isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(containerRef.current)

    // Animation loop
    let drawn = false
    function loop() {
      requestAnimationFrame(loop)
      if (!running && drawn) return

      targetRY += autoSpin
      curRX += (targetRX - curRX) * 0.06
      curRY += (targetRY - curRY) * 0.06
      group.rotation.x = curRX
      group.rotation.y = curRY

      // Raycaster highlight
      ray.setFromCamera(m2, camera)
      const hits = ray.intersectObjects(sprites)
      sprites.forEach((s) => {
        const isHovered = hits.length && hits[0].object === s
        const scaleMultiplier = isHovered ? 1.3 : 1
        const targetX = (s.userData.baseX || 0.7) * scaleMultiplier
        const targetY = (s.userData.baseY || 0.7) * scaleMultiplier
        s.scale.x += (targetX - s.scale.x) * 0.12
        s.scale.y += (targetY - s.scale.y) * 0.12
      })

      renderer.render(scene, camera)
      drawn = true
    }
    loop()

    // Cleanup
    return () => {
      window.removeEventListener('resize', size)
      window.removeEventListener('pointerup', handlePointerUp)
      observer.disconnect()
      renderer.dispose()
      wireGeo.dispose()
      wireMat.dispose()
    }
  }, [])

  if (fallback) {
    return (
      <div className="logo-fallback fallback-on">
        {clientLogos.map((logo, i) => (
          <img key={i} src={logo} alt="JRC client logo" />
        ))}
      </div>
    )
  }

  return (
    <div className="globe-stage" ref={containerRef}>
      <canvas
        ref={canvasRef}
        id="globeCanvas"
        className={grabbing ? 'grabbing' : ''}
        aria-label="Interactive globe of JRC client logos"
      />
      <div className="globe-hint">Drag to spin · Move to explore</div>
    </div>
  )
}
