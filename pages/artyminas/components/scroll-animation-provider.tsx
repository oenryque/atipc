"use client"

import { useEffect, type ReactNode } from "react"

interface ScrollAnimationProviderProps {
  children: ReactNode
}

export default function ScrollAnimationProvider({ children }: ScrollAnimationProviderProps) {
  useEffect(() => {
    const handleScroll = () => {
      const animatedElements = document.querySelectorAll(
        ".animate-on-scroll, .staggered-item, .slide-in-left, .slide-in-right, .zoom-in",
      )

      animatedElements.forEach((element, index) => {
        const elementTop = element.getBoundingClientRect().top
        const elementVisible = 150

        if (elementTop < window.innerHeight - elementVisible) {
          // For staggered animations, add a delay based on the index
          if (element.classList.contains("staggered-item")) {
            setTimeout(
              () => {
                element.classList.add("visible")
              },
              100 * (index % 5),
            ) // Reset the counter every 5 items
          } else {
            element.classList.add("visible")
          }
        }
      })
    }

    // Run once on load
    handleScroll()

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return <>{children}</>
}

