"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import AnimationWrapper from "./animation-wrapper"
import StaggeredChildren from "./staggered-children"

const projects = [
  {
    id: 1,
    title: "Georgetown",
    location: "Georgetown",
    category: "Kitchen Remodel, Home Remodel",
    description:
      "Complete renovation of the kitchen, including new cabinetry, countertops, lighting, and flooring to modernize the space.",
    image: "/p3.png",
  },
  {
    id: 2,
    title: "Austin",
    location: "Austin",
    category: "Home Remodel, Kitchen Remodel, Deck Repair, Apartment Water Damage Restoration",
    description:
      "Full interior remodel featuring updated stairs, flooring, paint, and improved layout for better functionality.",
    image: "/p4.png",
  },
  {
    id: 3,
    title: "Buda",
    location: "Buda",
    category: "Attached Detached Unit-ADU Remodel",
    description:
      "Renovated existing ADU to improve livability and design, including new finishes, fixtures, and mechanical upgrades.",
    image: "/p5.png",
  },
  {
    id: 4,
    title: "San Antonio",
    location: "San Antonio",
    category: "Breezeway Solid Stain Install",
    description:
      "Applied solid stain to apartment breezeways for improved appearance and long-term protection against weathering and foot traffic.",
    image: "/placeholder.svg?height=600&width=800",
  },
]

export default function ProjectsSection({ limit }) {
  const [activeCategory, setActiveCategory] = useState("All")

  // Set default limit if not provided
  const projectLimit = limit || 4

  // Get unique categories and locations
  const categories = ["All", ...new Set(projects.map((project) => project.category))]
  const locations = ["All Locations", ...new Set(projects.map((project) => project.location))]

  // Filter projects based on active category
  const filteredProjects =
    activeCategory === "All" ? projects : projects.filter((project) => project.category === activeCategory)

  const displayedProjects = projectLimit ? filteredProjects.slice(0, projectLimit) : filteredProjects

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

        {!projectLimit && (
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <div className="mb-2 flex flex-wrap gap-2">
                  {project.category.split(", ").map((cat, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-100 rounded-full px-3 py-1 text-xs font-semibold text-gray-700"
                    >
                      {cat.trim()}
                    </span>
                  ))}
                </div>
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-600 mb-4 line-clamp-3">{project.description}</p>
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

        {projectLimit && (
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
