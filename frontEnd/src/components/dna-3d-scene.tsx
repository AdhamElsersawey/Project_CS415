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

  // Generate DNA helix structure
  const dnaStructure = useMemo(() => {
    const points: DNAHelix[] = []
    const turns = 8
    const pointsPerTurn = 10
    const totalPoints = turns * pointsPerTurn
    const radius = 2
    const height = 12

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

  // Create particle system
  const particles = useMemo(() => {
    const geometry = new THREE.BufferGeometry()
    const particleCount = 200
    const positions = new Float32Array(particleCount * 3)

    for (let i = 0; i < particleCount * 3; i += 3) {
      positions[i] = (Math.random() - 0.5) * 20
      positions[i + 1] = (Math.random() - 0.5) * 20
      positions[i + 2] = (Math.random() - 0.5) * 20
    }

    geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3))
    return { geometry }
  }, [])

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.002
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.3) * 0.3
    }

    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.0001
      const positions = particlesRef.current.geometry.attributes.position.array as Float32Array
      for (let i = 0; i < positions.length; i += 3) {
        positions[i + 1] += Math.sin(state.clock.elapsedTime * 0.5 + i) * 0.01
      }
      particlesRef.current.geometry.attributes.position.needsUpdate = true
    }
  })

  return (
    <group ref={meshRef}>
      {/* Left strand of helix */}
      <group>
        {dnaStructure.map((point, i) => (
          <sphere key={`left-${i}`} args={[0.15, 16, 16]} position={[point.x * 0.8, point.y, point.z * 0.8]}>
            <meshStandardMaterial
              color={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissive={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissiveIntensity={0.8}
            />
          </sphere>
        ))}
      </group>

      {/* Right strand of helix */}
      <group>
        {dnaStructure.map((point, i) => (
          <sphere key={`right-${i}`} args={[0.15, 16, 16]} position={[-point.x * 0.8, point.y, -point.z * 0.8]}>
            <meshStandardMaterial
              color={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissive={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"}
              emissiveIntensity={0.8}
            />
          </sphere>
        ))}
      </group>

      {/* Connecting base pairs */}
      <group>
        {dnaStructure.map((point, i) => (
          <line key={`pair-${i}`}>
            <bufferGeometry>
              <bufferAttribute
                attach="attributes-position"
                count={2}
                array={new Float32Array([point.x * 0.8, point.y, point.z * 0.8, -point.x * 0.8, point.y, -point.z * 0.8])}
                itemSize={3}
              />
            </bufferGeometry>
            <lineBasicMaterial color={point.basePair === "A-T" ? "#06b6d4" : "#8b5cf6"} linewidth={2} />
          </line>
        ))}
      </group>

      {/* Glowing particles */}
      <points ref={particlesRef} geometry={particles.geometry}>
        <pointsMaterial
          size={0.1}
          color="#06b6d4"
          sizeAttenuation
          transparent
          opacity={0.6}
          emissive="#06b6d4"
          emissiveIntensity={0.5}
        />
      </points>

      {/* Ambient glow effect */}
      <Sparkles count={100} scale={15} size={3} speed={1} color="#06b6d4" opacity={0.3} />
    </group>
  )
}

function DNAVisualization() {
  const { camera } = useThree()

  useEffect(() => {
    camera.position.set(0, 0, 12)
    camera.lookAt(0, 0, 0)
  }, [camera])

  return (
    <>
      <DNAHelix />
      <Environment preset="night" />

      {/* Dynamic lighting */}
      <pointLight position={[10, 10, 10]} intensity={2} color="#06b6d4" distance={50} decay={2} />
      <pointLight position={[-10, -10, -10]} intensity={1.5} color="#8b5cf6" distance={50} decay={2} />
      <pointLight position={[0, 0, 15]} intensity={1} color="#06b6d4" distance={50} decay={2} />

      <ambientLight intensity={0.4} color="#1e293b" />
    </>
  )
}

export default function DNA3DScene({ isPlaying, isMuted }: { isPlaying: boolean; isMuted: boolean }) {
  return (
    <Canvas className="w-full h-screen" gl={{ antialias: true, alpha: true }}>
      <PerspectiveCamera makeDefault position={[0, 0, 12]} fov={50} />
      <DNAVisualization />
      <OrbitControls
        autoRotate={isPlaying}
        autoRotateSpeed={2}
        enableZoom
        enablePan
        maxDistance={30}
        minDistance={5}
      />
    </Canvas>
  )
}
