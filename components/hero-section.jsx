"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowDown } from "lucide-react"
import AnimationWrapper from "./animation-wrapper"

export default function HeroSection() {
  const videoRef = useRef(null)

  // Simple function to scroll to the next section
  const scrollToNextSection = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    })
  }

  // Effect to handle video playback
  useEffect(() => {
    // Simple approach - just try to play the video when component mounts
    const videoElement = videoRef.current

    if (videoElement) {
      // Function to attempt video play
      const attemptPlay = () => {
        videoElement.play().catch((err) => {
          console.log("Video play failed, will retry once:", err)
          // Try once more after a delay
          setTimeout(() => {
            videoElement.play().catch((err) => {
              console.log("Video play failed again:", err)
            })
          }, 1000)
        })
      }

      // Try to play when loaded
      videoElement.addEventListener("loadeddata", attemptPlay)

      // Also try to play after a timeout in case the event doesn't fire
      const playTimeout = setTimeout(attemptPlay, 2000)

      return () => {
        videoElement.removeEventListener("loadeddata", attemptPlay)
        clearTimeout(playTimeout)
      }
    }
  }, [])

  return (
    <section className="relative h-screen flex items-center overflow-hidden">
      {/* Video Background - Using a more direct approach */}
      <div className="absolute inset-0 z-0">
        {/* Fallback image that shows while video loads or if video fails */}
        <Image src="/hero-placeholder.png" alt="Modern interior design" fill priority className="object-cover" />

        {/* Video element with poster attribute set to the same image */}
        <video
          ref={videoRef}
          autoPlay
          playsInline
          muted
          loop
          poster="/hero-placeholder.png"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ zIndex: 1 }}
        >
          {/* Using the exact source tag format requested */}
          <source src="/house-remodeling.webm" type="video/webm" />
          {/* Adding WebM as a fallback */}
          <source src="/videos/house-remodeling-new.webm" type="video/webm" />
          Your browser does not support the video tag.
        </video>
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-10"></div>

      {/* Content */}
      <div className="container relative z-10 text-white">
        <div className="max-w-3xl">
          <AnimationWrapper animation="animate-slide-down" delay={0.3}>
            <div className="text-reveal mb-6">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
                <span className="inline-block pb-1">Transform Your Living Space</span>
              </h1>
            </div>
          </AnimationWrapper>

          <AnimationWrapper animation="animate-slide-up" delay={0.6}>
            <p className="text-lg md:text-xl mb-8 max-w-2xl">
              Award-winning home remodeling services tailored to your vision and budget. From concept to completion, we
              bring your dreams to life.
            </p>
          </AnimationWrapper>

          <AnimationWrapper animation="animate-fade-in" delay={0.9}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn btn-primary py-4 px-8 text-lg animate-pulse"
                style={{ backgroundColor: "rgb(45, 118, 147)" }}
              >
                Get a Free Consultation
              </Link>
              <Link href="/projects" className="btn btn-secondary py-4 px-8 text-lg border-2">
                View Our Projects
              </Link>
            </div>
          </AnimationWrapper>
        </div>
      </div>

      {/* Scroll Indicator */}
      <AnimationWrapper animation="animate-fade-in" delay={1.2}>
        <div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white animate-bounce z-10"
          onClick={scrollToNextSection}
        >
          <div className="w-10 h-10 rounded-full border-2 border-white flex items-center justify-center">
            <ArrowDown size={16} />
          </div>
        </div>
      </AnimationWrapper>
    </section>
  )
}
