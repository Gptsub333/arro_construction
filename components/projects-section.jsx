"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimationWrapper from "./animation-wrapper"
import StaggeredChildren from "./staggered-children"

const projects = [
  {
    id: 1,
    title: "Modern Kitchen Transformation",
    category: "Kitchen",
    description: "Complete renovation of an outdated kitchen into a modern, functional space.",
    image: "/placeholder.svg?height=600&width=800&query=modern kitchen renovation after",
  },
  {
    id: 2,
    title: "Luxury Master Bathroom",
    category: "Bathroom",
    description: "Spa-like master bathroom with custom tile work and premium fixtures.",
    image: "/placeholder.svg?height=600&width=800&query=luxury bathroom with walk-in shower",
  },
  {
    id: 3,
    title: "Open Concept Living Space",
    category: "Whole Home",
    description: "Removal of walls to create a spacious, open-concept living area.",
    image: "/placeholder.svg?height=600&width=800&query=open concept living room and kitchen",
  },
  {
    id: 4,
    title: "Entertainment Basement",
    category: "Basement",
    description: "Finished basement with home theater and game room.",
    image: "/placeholder.svg?height=600&width=800&query=basement home theater and game room",
  },
  {
    id: 5,
    title: "Outdoor Living Oasis",
    category: "Outdoor",
    description: "Custom deck and patio with outdoor kitchen and fire pit.",
    image: "/placeholder.svg?height=600&width=800&query=outdoor patio with kitchen and fire pit",
  },
  {
    id: 6,
    title: "Second Story Addition",
    category: "Additions",
    description: "Addition of a second story with three bedrooms and two bathrooms.",
    image: "/placeholder.svg?height=600&width=800&query=home with second story addition",
  },
]

export default function ProjectsSection({ limit = 3 }) {
  const [activeCategory, setActiveCategory] = useState("All")

  const categories = ["All", ...new Set(projects.map((project) => project.category))]
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Recent Projects</h2>
            <p className="text-gray-600">
              Browse our portfolio of completed projects to see the quality and craftsmanship we bring to every home.
            </p>
          </div>
        </AnimationWrapper>

        {!limit && (
          <AnimationWrapper animation="animate-slide-up" threshold={0.2}>
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    activeCategory === category
                      ? "bg-[rgb(var(--primary))] text-white"
                      : "bg-gray-200 hover:bg-gray-300"
                  }`}
                  onClick={() => setActiveCategory(category)}
                >
                  {category}
                </button>
              ))}
            </div>
          </AnimationWrapper>
        )}

        <StaggeredChildren baseAnimation="animate-slide-up" staggerDelay={0.15} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedProjects.map((project) => (
  <div key={project.id} className="bg-white rounded-lg shadow p-4 hover:shadow-md transition duration-300">
    <div className="relative h-64 mb-4 overflow-hidden">
      <Image
        src={project.image || "/placeholder.svg"}
        alt={project.title}
        fill
        className="rounded-lg object-cover"
      />
    </div>
    <h3 className="text-lg font-semibold">{project.title}</h3>
    <p className="text-sm text-gray-500 mb-1">{project.category}</p>
    <p className="text-gray-600 mb-4">{project.description}</p>
    <Link
      href={`/projects`}
      className="text-sm text-[rgb(var(--primary))] font-medium inline-flex items-center hover:underline"
    >
      Learn More <span className="ml-1">→</span>
    </Link>
  </div>
))}

          </div>
        </StaggeredChildren>

        {limit && (
          <AnimationWrapper animation="animate-fade-in" delay={0.5} threshold={0.2}>
            <div className="text-center mt-12">
              <Link href="/projects" className="btn btn-outline">
                View All Projects
              </Link>
            </div>
          </AnimationWrapper>
        )}
      </div>
    </section>
  )
}
