import { useRef, useEffect } from 'react'
import { Canvas, useFrame, useThree } from '@react-three/fiber'
import * as THREE from 'three'

// Aurora shader material - Slow flowing teal/cyan colors
const AuroraShader = () => {
  const { scene, size } = useThree()
  const materialRef = useRef()

  useEffect(() => {
    const geometry = new THREE.PlaneGeometry(200, 200)
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        resolution: { value: new THREE.Vector2(size.width, size.height) }
      },
      vertexShader: `
        varying vec2 vUv;
        void main() {
          vUv = uv;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec2 resolution;
        varying vec2 vUv;

        // Simplex noise functions
        vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec2 mod289(vec2 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
        vec3 permute(vec3 x) { return mod289(((x*34.0)+1.0)*x); }

        float snoise(vec2 v) {
          const vec4 C = vec4(0.211324865405187, 0.366025403784439,
                             -0.577350269189626, 0.024390243902439);
          vec2 i  = floor(v + dot(v, C.yy));
          vec2 x0 = v - i + dot(i, C.xx);
          vec2 i1;
          i1 = (x0.x > x0.y) ? vec2(1.0, 0.0) : vec2(0.0, 1.0);
          vec4 x12 = x0.xyxy + C.xxzz;
          x12.xy -= i1;
          i = mod289(i);
          vec3 p = permute(permute(i.y + vec3(0.0, i1.y, 1.0)) + i.x + vec3(0.0, i1.x, 1.0));
          vec3 m = max(0.5 - vec3(dot(x0,x0), dot(x12.xy,x12.xy), dot(x12.zw,x12.zw)), 0.0);
          m = m*m;
          m = m*m;
          vec3 x = 2.0 * fract(p * C.www) - 1.0;
          vec3 h = abs(x) - 0.5;
          vec3 ox = floor(x + 0.5);
          vec3 a0 = x - ox;
          m *= 1.79284291400159 - 0.85373472095314 * (a0*a0 + h*h);
          vec3 g;
          g.x  = a0.x  * x0.x  + h.x  * x0.y;
          g.yz = a0.yz * x12.xz + h.yz * x12.yw;
          return 130.0 * dot(m, g);
        }

        void main() {
          vec2 uv = vUv;

          // VERY SLOW flowing aurora patterns
          float flow1 = snoise(vec2(uv.x * 1.5 + time * 0.02, uv.y * 0.4 + time * 0.015));
          float flow2 = snoise(vec2(uv.x * 1.2 + time * 0.018, uv.y * 0.6 + time * 0.012));
          float flow3 = snoise(vec2(uv.x * 2.0 + time * 0.025, uv.y * 0.3 + time * 0.02));

          // Elegant slow streaky patterns
          float streaks = sin((uv.x + flow1 * 0.25) * 4.0 + time * 0.05) * 0.5 + 0.5;
          streaks *= sin((uv.y + flow2 * 0.15) * 6.0 + time * 0.04) * 0.5 + 0.5;

          // Combine flows for aurora effect
          float aurora = (flow1 + flow2 + flow3) * 0.33 + 0.5;
          aurora = pow(aurora, 1.6);

          // Beautiful teal/cyan/emerald color palette
          vec3 darkBase = vec3(0.02, 0.04, 0.06);
          vec3 deepTeal = vec3(0.0, 0.12, 0.18);
          vec3 teal = vec3(0.0, 0.35, 0.45);
          vec3 cyan = vec3(0.15, 0.55, 0.65);
          vec3 brightCyan = vec3(0.3, 0.75, 0.85);
          vec3 emerald = vec3(0.1, 0.6, 0.45);

          // Create flowing color transitions
          vec3 color = darkBase;

          // Add deep teal flows
          float tealFlow = smoothstep(0.2, 0.55, aurora + streaks * 0.15);
          color = mix(color, deepTeal, tealFlow);

          // Add teal mid-tones
          float midFlow = smoothstep(0.35, 0.7, aurora + flow1 * 0.25);
          color = mix(color, teal, midFlow * 0.75);

          // Add cyan highlights
          float cyanFlow = smoothstep(0.55, 0.8, streaks + aurora * 0.35);
          color = mix(color, cyan, cyanFlow * 0.6);

          // Add bright cyan accents
          float brightFlow = smoothstep(0.7, 0.9, streaks + flow2 * 0.25);
          color = mix(color, brightCyan, brightFlow * 0.45);

          // Add emerald accents for depth
          float emeraldFlow = smoothstep(0.65, 0.88, flow3 + streaks * 0.12);
          color = mix(color, emerald, emeraldFlow * 0.35);

          // Subtle grain texture
          float noise = snoise(uv * 60.0) * 0.012;
          color += noise;

          // Soft vignette effect
          float vignette = 1.0 - smoothstep(0.4, 1.0, length(uv - 0.5) * 1.1);
          color *= 0.75 + vignette * 0.25;

          gl_FragColor = vec4(color, 1.0);
        }
      `,
      side: THREE.DoubleSide
    })

    materialRef.current = material

    const mesh = new THREE.Mesh(geometry, material)
    mesh.position.z = -50
    scene.add(mesh)

    return () => {
      scene.remove(mesh)
      geometry.dispose()
      material.dispose()
    }
  }, [scene, size])

  useFrame((state) => {
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime
    }
  })

  return null
}

// Very gentle camera movement
const CameraController = () => {
  const { camera } = useThree()

  useFrame((state) => {
    const time = state.clock.elapsedTime
    // Very slow, subtle movement
    camera.position.x = Math.sin(time * 0.015) * 1.5
    camera.position.y = Math.cos(time * 0.02) * 1
    camera.position.z = 30
    camera.lookAt(0, 0, -30)
  })

  return null
}

// Main Aurora Background Component
const AuroraBackground = ({ className = '', style = {} }) => {
  return (
    <div
      className={`aurora-canvas-container ${className}`}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
        ...style
      }}
    >
      <Canvas
        camera={{ position: [0, 0, 30], fov: 75 }}
        gl={{
          antialias: true,
          alpha: false,
          powerPreference: "high-performance"
        }}
        style={{ background: '#050a0d' }}
      >
        <AuroraShader />
        <CameraController />
        <ambientLight intensity={0.4} />
        <pointLight
          position={[20, 20, 10]}
          intensity={0.3}
          color="#00cccc"
          distance={100}
          decay={2}
        />
        <pointLight
          position={[-20, -10, 5]}
          intensity={0.25}
          color="#00aa88"
          distance={80}
          decay={2}
        />
      </Canvas>
    </div>
  )
}

export default AuroraBackground
