"use client"

import { useEffect, useRef, useState, Children, cloneElement } from "react"

export default function StaggeredChildren({
  children,
  baseAnimation = "fade-in",
  staggerDelay = 0.15,
  initialDelay = 0,
  threshold = 0.1,
}) {
  const [isVisible, setIsVisible] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.unobserve(entry.target)
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
  }, [threshold])

  const childrenArray = Children.toArray(children)

  return (
    <div ref={ref}>
      {childrenArray.map((child, index) => {
        const delay = initialDelay + index * staggerDelay

        return cloneElement(child, {
          key: index,
          className: `${child.props.className || ""} ${isVisible ? baseAnimation : ""}`,
          style: {
            ...child.props.style,
            opacity: isVisible ? 1 : 0,
            transform: isVisible ? "translateY(0)" : "translateY(20px)",
            transition: `all 0.6s ease-out ${delay}s`,
          },
        })
      })}
    </div>
  )
}
