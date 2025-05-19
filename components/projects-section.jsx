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

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  // If limit is provided, only show that many projects
  const displayedProjects = limit ? filteredProjects.slice(0, limit) : filteredProjects

  return (
    <section className="section">
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

        <StaggeredChildren baseAnimation="animate-zoom-in" staggerDelay={0.15} threshold={0.1}>
          <div className="project-grid">
            {displayedProjects.map((project) => (
              <div key={project.id} className="project-card">
                <Image src={project.image || "/placeholder.svg"} alt={project.title} width={600} height={400} />
                <div className="project-overlay">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{project.title}</h3>
                    <p className="text-sm mb-3">{project.category}</p>
                    <p>{project.description}</p>
                  </div>
                </div>
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
