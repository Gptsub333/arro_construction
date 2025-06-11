"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import AnimationWrapper from "./animation-wrapper"

const testimonials = [
  {
    id: 1,
    name: "Sarah Johnson",
    location: "Seattle, WA",
    quote:
      "Arro Construction transformed our outdated kitchen into a stunning, functional space that has become the heart of our home. Their attention to detail and craftsmanship exceeded our expectations.",
    image: "/person-girl-1.webp",
    rating: 5,
  },
  {
    id: 2,
    name: "Michael Chen",
    location: "Bellevue, WA",
    quote:
      "We hired Arro for our bathroom renovation and couldn't be happier with the results. The team was professional, punctual, and kept us informed throughout the entire process.",
    image: "/person-man-1.webp",
    rating: 5,
  },
  {
    id: 3,
    name: "Emily Rodriguez",
    location: "Tacoma, WA",
    quote:
      "Our basement finishing project was completed on time and on budget. The Arro team provided creative solutions to maximize our space and the quality of work is outstanding.",
    image: "/person-girl-1.webp",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)

  const nextTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsAnimating(false)
    }, 500)

    return () => clearTimeout(timer)
  }, [currentIndex])

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      nextTestimonial()
    }, 8000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="section bg-gray-900 text-white">
      <div className="container">
        <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">What Our Clients Say</h2>
            <p className="text-gray-300">
              Don't just take our word for it. Hear from our satisfied clients about their experience working with Arro
              Construction.
            </p>
          </div>
        </AnimationWrapper>

        <AnimationWrapper animation="animate-zoom-in" threshold={0.2}>
          <div className="relative max-w-4xl mx-auto">
            <div className="overflow-hidden">
              <div
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((testimonial) => (
                  <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                    <div className="bg-gray-800 rounded-lg p-8 text-center">
                      <div className="flex justify-center mb-6">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                        ))}
                      </div>
                      <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
                      <div className="flex items-center justify-center">
                        <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                          <Image
                            src={testimonial.image || "/placeholder.svg"}
                            alt={testimonial.name}
                            fill
                            className="object-cover"
                          />
                        </div>
                        <div className="text-left">
                          <h4 className="font-bold">{testimonial.name}</h4>
                          <p className="text-gray-400">{testimonial.location}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <button
              className="absolute top-1/2 left-0 -translate-y-1/2 -translate-x-4 bg-[rgb(var(--primary))] rounded-full p-2 text-white animate-pulse"
              onClick={prevTestimonial}
              disabled={isAnimating}
            >
              <ChevronLeft size={24} />
            </button>

            <button
              className="absolute top-1/2 right-0 -translate-y-1/2 translate-x-4 bg-[rgb(var(--primary))] rounded-full p-2 text-white animate-pulse"
              onClick={nextTestimonial}
              disabled={isAnimating}
            >
              <ChevronRight size={24} />
            </button>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-[rgb(var(--primary))] w-6" : "bg-gray-600"
                  }`}
                  onClick={() => {
                    if (!isAnimating) {
                      setIsAnimating(true)
                      setCurrentIndex(index)
                    }
                  }}
                />
              ))}
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
