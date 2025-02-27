"use client"

import { Canvas, useFrame } from "@react-three/fiber"
import { Stars } from "@react-three/drei"
import { useRef } from "react"
import type { Group } from "three"

function RotatingStars() {
  const starsRef = useRef<Group>(null)

  useFrame(() => {
    if (starsRef.current) {
      starsRef.current.rotation.x += 0.0001
      starsRef.current.rotation.y += 0.0001
    }
  })

  return (
    <group ref={starsRef}>
      <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
    </group>
  )
}

export function SpaceBackground() {
  return (
    <div className="fixed inset-0 -z-10">
      <Canvas camera={{ position: [0, 0, 1] }}>
        <RotatingStars />
      </Canvas>
    </div>
  )
}

