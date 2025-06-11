import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import AnimationWrapper from "./animation-wrapper"
import StaggeredChildren from "./staggered-children"

const services = [
  {
    id: "kitchen",
    title: "Kitchen Remodeling",
    description:
      "Create the heart of your home with custom cabinetry, modern appliances, and thoughtful design that blends functionality with style.",
    image: "/modern-kitchen-remodeling.png",
  },
  {
    id: "bathroom",
    title: "Bathroom Renovation",
    description:
      "Transform your bathroom into a luxurious spa-like retreat with modern fixtures, elegant tilework, and efficient layouts that maximize your space.",
    image: "/luxury-bathroom-renovation.png",
  },
  { 
    id: "basement",
    title: "Full Home Remodel",
    description:
      "Transform your home with our full remodeling services—seamless upgrades, custom layouts, and quality finishes tailored to your lifestyle.",
    image: "/finished-basement-entertainment.png",
  },
  {
    id: "additions",
    title: "Home Additions",
    description:
      "Expand your living space with custom home additions that seamlessly integrate with your existing structure and increase your home's value.",
    image: "/placeholder.svg?height=600&width=800&query=home addition construction",
  },
  {
    id: "outdoor",
    title: "Outdoor Living",
    description:
      "Create beautiful outdoor spaces with custom decks, patios, and landscaping that extend your living area and enhance your lifestyle.",
    image: "/placeholder.svg?height=600&width=800&query=outdoor deck and patio",
  },
  {
    id: "whole-home",
    title: "Whole Home Renovation",
    description:
      "Completely transform your existing home with comprehensive renovations that modernize, optimize, and beautify your entire living space.",
    image: "/placeholder.svg?height=600&width=800&query=whole home renovation",
  },
]

export default function ServicesSection({ limit = 3 }) {
  // If limit is provided, only show that many services
  const displayedServices = limit ? services.slice(0, limit) : services

  return (
    <section className="section bg-gray-50">
      <div className="container">
        <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Our Remodeling Services</h2>
            <p className="text-gray-600">
              We offer comprehensive remodeling services to transform any area of your home with quality craftsmanship
              and attention to detail.
            </p>
          </div>
        </AnimationWrapper>

        <StaggeredChildren baseAnimation="animate-slide-up" staggerDelay={0.15} threshold={0.1}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedServices.map((service) => (
              <div key={service.id} className="service-card">
                <div className="relative h-64 mb-4 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="rounded-lg object-cover"
                  />
                </div>
                <h3>{service.title}</h3>
                <p className="text-gray-600 mb-4">{service.description}</p>
                <Link href={`/services#${service.id}`} className="learn-more">
                  Learn More <ArrowRight size={16} />
                </Link>
              </div>
            ))}
          </div>
        </StaggeredChildren>

        {limit && (
          <AnimationWrapper animation="animate-fade-in" delay={0.5} threshold={0.2}>
            <div className="text-center mt-12">
              <Link href="/services" className="btn btn-outline">
                View All Services
              </Link>
            </div>
          </AnimationWrapper>
        )}
      </div>
    </section>
  )
}
