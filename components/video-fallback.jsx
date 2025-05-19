"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

export default function VideoFallback({ src, poster, className }) {
  const [videoFailed, setVideoFailed] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Create a video element to test if the video can be loaded
    const testVideo = document.createElement("video")

    testVideo.addEventListener("canplay", () => {
      setIsLoading(false)
      setVideoFailed(false)
    })

    testVideo.addEventListener("error", () => {
      console.error("Video failed to load, using fallback image")
      setVideoFailed(true)
      setIsLoading(false)
    })

    // Set a timeout in case the video takes too long to load
    const timeoutId = setTimeout(() => {
      if (isLoading) {
        console.warn("Video loading timeout, using fallback image")
        setVideoFailed(true)
        setIsLoading(false)
      }
    }, 10000) // 10 second timeout

    testVideo.src = src
    testVideo.load()

    return () => {
      clearTimeout(timeoutId)
      testVideo.remove()
    }
  }, [src, isLoading])

  if (videoFailed) {
    return (
      <div className={`${className} relative`}>
        <Image src={poster || "/placeholder.svg"} alt="Video fallback" fill className="object-cover" priority />
      </div>
    )
  }

  if (isLoading) {
    return (
      <div className={`${className} bg-gray-900 flex items-center justify-center`}>
        <div className="loading-spinner"></div>
      </div>
    )
  }

  return null
}
