"use client"

import { useEffect, useRef, useMemo } from "react"
import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { PerspectiveCamera, OrbitControls, Sparkles, Environment } from "@react-three/drei"
import * as THREE from "three"

interface DNAHelix {
  position: number
  basePair: string
  x: number
  y: number
  z: number
}

function DNAHelix() {
  const meshRef = useRef<THREE.Group>(null)
  const particlesRef = useRef<THREE.Points>(null)
  const helixRef = useRef<THREE.Line>(null)

  // Generate DNA helix structure
  const dnaStructure = useMemo(() => {
    const points: DNAHelix[] = []
    const turns = 10
    const pointsPerTurn = 8
    const totalPoints = turns * pointsPerTurn
    const radius = 2.5
    const height = 15

    const basePairs = ["A-T", "T-A", "G-C", "C-G"]

    for (let i = 0; i < totalPoints; i++) {
      const t = i / totalPoints
      const angle = t * Math.PI * 2 * turns
      const y = (t - 0.5) * height

      points.push({
        position: i,
        basePair: basePairs[i % 4],
        x: Math.cos(angle) * radius,
        y: y,
        z: Math.sin(angle) * radius,
      })
    }
    return points
  }, [])

  // Create enhanced particle system
  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const particleCount = 150
    const positions = new Float32Array(particleCount * 3)
    const colors = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 25
      positions[i + 1] = (Math.random() - 0.5) * 25
      positions[i + 2] = (Math.random() - 0.5) * 25

      // Alternate between cyan and purple particles
      if (Math.random() > 0.5) {
        colors[i] = 0.02
        colors[i + 1] = 0.72
        colors[i + 2] = 0.77 // Cyan
      } else {
        colors[i] = 0.55
        colors[i + 1] = 0.32
        colors[i + 2] = 0.97 // Purple
      }
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    geometry.setAttribute("color", new THREE.BufferAttribute(colors, 3))
    return { geometry }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.003
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.25
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0003
      particlesRef.current.rotation.x += 0.0001
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 1; i < positions.length; i += 3) {
        positions[i] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.008
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={meshRef}>
      {/* Left strand of helix */}
      <group>
        {dnaStructure.map((point, i) => (
          <mesh key={`left-${i}`} position={[point.x * 0.8, point.y, point.z * 0.8]}>
            <sphereGeometry args={[0.18, 24, 24]} />
            <meshStandardMaterial
              color={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissive={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissiveIntensity={1.2}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Right strand of helix */}
      <group>
        {dnaStructure.map((point, i) => (
          <mesh key={`right-${i}`} position={[-point.x * 0.8, point.y, -point.z * 0.8]}>
            <sphereGeometry args={[0.18, 24, 24]} />
            <meshStandardMaterial
              color={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissive={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissiveIntensity={1.2}
              roughness={0.3}
              metalness={0.5}
            />
          </mesh>
        ))}
      </group>

      {/* Connecting base pairs with thicker lines */}
      <group>
        {dnaStructure.map((point, i) => (
          <line key={`pair-${i}`} position={[0, point.y, 0]}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([point.x * 0.8, 0, point.z * 0.8, -point.x * 0.8, 0, -point.z * 0.8])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"} linewidth={3} fog={false} />
          </line>
        ))}
      </group>

      {/* Enhanced glowing particles system */}
      <points ref={particlesRef} geometry={particles.geometry}>
        <pointsMaterial
          size={0.12}
          sizeAttenuation={true}
          transparent={true}
          opacity={0.7}
          emissive="#06b6d4"
          emissiveIntensity={0.8}
          vertexColors={true}
          fog={false}
        />
      </points>

      {/* Multiple sparkle layers for depth */}
      <Sparkles count={150} scale={10} size={1.5} speed={1.2} color="#06b6d4" opacity={0.4} />
    </group>
  )
}

function DNAVisualization() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 14)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <>
      <DNAHelix />
      <Environment preset="night" />

      {/* Enhanced dynamic lighting setup (use react-three-fiber intrinsic light primitives) */}
      <pointLight position={[12, 8, 10]} intensity={2.5} color="#06b6d4" distance={60} decay={2} />
      <pointLight position={[-12, -8, -10]} intensity={2} color="#8b5cf6" distance={60} decay={2} />
      <pointLight position={[0, 15, 8]} intensity={1.5} color="#06b6d4" distance={50} decay={2} />
      <pointLight position={[0, -15, -8]} intensity={1.2} color="#a78bfa" distance={50} decay={2} />

      <ambientLight intensity={0.5} color="#1e293b" />
    </>
  )
}

export default function DNA3DScene({ isPlaying, isMuted }: { isPlaying: boolean; isMuted: boolean }) {
  return (
    <Canvas
      className="w-full h-full"
      gl={{
        antialias: true,
        alpha: true,
        pixelRatio: Math.min(window.devicePixelRatio, 2),
      }}
    >
      <PerspectiveCamera makeDefault position={[0, 0, 14]} fov={55} />
      <DNAVisualization />
      <OrbitControls
        autoRotate={isPlaying}
        autoRotateSpeed={2.5}
        enableZoom={true}
        enablePan={true}
        maxDistance={35}
        minDistance={5}
        dampingFactor={0.08}
        enableDamping={true}
      />
    </Canvas>
  )
}
