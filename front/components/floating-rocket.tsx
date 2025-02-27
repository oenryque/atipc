"use client"

import { useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useAnimation } from "framer-motion"

export function FloatingRocket() {
  const rocketRef = useRef<HTMLDivElement>(null)
  const controls = useAnimation()

  useEffect(() => {
    const animateRocket = async () => {
      while (true) {
        await controls.start({
          y: [0, -20, 0],
          rotate: [0, 5, -5, 0],
          transition: {
            duration: 5,
            ease: "easeInOut",
            times: [0, 0.25, 0.75, 1],
          },
        })
      }
    }
    animateRocket()
  }, [controls])

  return (
    <div className="w-full h-[500px] relative">
      <motion.div
        ref={rocketRef}
        animate={controls}
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
      >
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-y113l1ianHxMeauMoQAbzdU7w7dOu7.png"
          alt="Rocket"
          width={200}
          height={200}
          className="w-auto h-auto"
        />
      </motion.div>
    </div>
  )
}

