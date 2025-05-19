"use client"

import { useEffect, useRef, useState } from "react"

export default function AnimationWrapper({
  children,
  animation = "fade-in",
  duration = 0.8,
  delay = 0,
  threshold = 0.1,
  once = true,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          if (once) {
            observer.unobserve(entry.target)
          }
        } else if (!once) {
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -100px 0px",
      },
    )

    const currentRef = ref.current
    if (currentRef) {
      observer.observe(currentRef)
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef)
      }
    }
  }, [threshold, once])

  const animationClass = isVisible ? animation : ""
  const style = {
    opacity: isVisible ? 1 : 0,
    transition: `all ${duration}s ease-out ${delay}s`,
  }

  return (
    <div ref={ref} className={animationClass} style={style}>
      {children}
    </div>
  )
}
