"use client"

import { useState } from "react"
import Image from "next/image"
import ProjectsSection from "@/components/projects-section"
import CTASection from "@/components/cta-section"

// Static images for each location (15 images each)
const locationImages = {
  georgetown: [
    { id: 1, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0009.webp", alt: "Georgetown project image 1" },
    { id: 2, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0010.webp", alt: "Georgetown project image 2" },
    { id: 3, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0011.webp", alt: "Georgetown project image 3" },
    { id: 4, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0012.webp", alt: "Georgetown project image 4" },
    { id: 5, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0013.webp", alt: "Georgetown project image 5" },
    { id: 6, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0014.webp", alt: "Georgetown project image 6" },
    { id: 7, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0015.webp", alt: "Georgetown project image 7" },
    { id: 8, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0016.webp", alt: "Georgetown project image 8" },
    { id: 9, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0017.webp", alt: "Georgetown project image 9" },
    { id: 10, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0018.webp", alt: "Georgetown project image 10" },
    { id: 11, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0019.webp", alt: "Georgetown project image 11" },
    { id: 12, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0020.webp", alt: "Georgetown project image 12" },
    { id: 13, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0021.webp", alt: "Georgetown project image 13" },
    { id: 14, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0022.webp", alt: "Georgetown project image 14" },
    { id: 15, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0023.webp", alt: "Georgetown project image 15" },
    { id: 16, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0025.webp", alt: "Georgetown project image 16" },
    { id: 17, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0026.webp", alt: "Georgetown project image 17" },
    { id: 18, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0027.webp", alt: "Georgetown project image 18" },
    { id: 19, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0028.webp", alt: "Georgetown project image 19" },
    { id: 20, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0029.webp", alt: "Georgetown project image 20" },
    { id: 21, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0030.webp", alt: "Georgetown project image 21" },
    { id: 22, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0031.webp", alt: "Georgetown project image 22" },
    { id: 23, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0032.webp", alt: "Georgetown project image 23" },
    { id: 24, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0033.webp", alt: "Georgetown project image 24" },
    { id: 25, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0034.webp", alt: "Georgetown project image 25" }
  ],
  austin: [
    { id: 1, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "Austin project image 1" },
    { id: 2, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0037.webp", alt: "Austin project image 2" },
    { id: 3, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0040.webp", alt: "Austin project image 3" },
    { id: 4, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0039.webp", alt: "Austin project image 4" },
    { id: 5, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0040.webp", alt: "Austin project image 5" },
    { id: 6, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0041.webp", alt: "Austin project image 6" },
    { id: 7, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0042.webp", alt: "Austin project image 7" },
  ],
  buda: [
    { id: 1, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0044.webp", alt: "Buda project image 1" },
    { id: 2, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0045.webp", alt: "Buda project image 2" },
    { id: 3, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0046.webp", alt: "Buda project image 3" },
    { id: 4, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0047.webp", alt: "Buda project image 4" },
    { id: 5, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0048.webp", alt: "Buda project image 5" },
    { id: 6, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0049.webp", alt: "Buda project image 6" },
    { id: 7, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0050.webp", alt: "Buda project image 7" },
    { id: 8, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0051.webp", alt: "Buda project image 8" },
    { id: 9, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0052.webp", alt: "Buda project image 9" },
    { id: 10, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0053.webp", alt: "Buda project image 10" },
    { id: 11, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0054.webp", alt: "Buda project image 11" },
    { id: 12, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0055.webp", alt: "Buda project image 12" },
    { id: 13, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0056.webp", alt: "Buda project image 13" },
    { id: 14, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0057.webp", alt: "Buda project image 14" },
    { id: 15, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0058.webp", alt: "Buda project image 15" },
    { id: 16, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0059.webp", alt: "Buda project image 16" },
    { id: 17, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0060.webp", alt: "Buda project image 17" },
    { id: 18, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0061.webp", alt: "Buda project image 18" },
    { id: 19, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0062.webp", alt: "Buda project image 19" },
    { id: 20, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0063.webp", alt: "Buda project image 20" },
    { id: 21, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0064.webp", alt: "Buda project image 21" },
    { id: 22, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0065.webp", alt: "Buda project image 22" }
  ],
  sanantonio: [
    { id: 1, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0063.webp", alt: "San Antonio project image 1" },
    { id: 2, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "San Antonio project image 2" },
    { id: 5, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0044.webp", alt: "San Antonio project image 5" },
    { id: 6, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "San Antonio project image 6" },
    { id: 7, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0039.webp", alt: "San Antonio project image 7" },
    { id: 8, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "San Antonio project image 8" },
    { id: 9, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0039.webp", alt: "San Antonio project image 9" },
    { id: 10, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0044.webp", alt: "San Antonio project image 10" },
    { id: 11, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0044.webp", alt: "San Antonio project image 11" },
    { id: 12, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "San Antonio project image 12" },
    { id: 13, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0044.webp", alt: "San Antonio project image 13" },
    { id: 14, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "San Antonio project image 14" },
    { id: 15, src: "/ilovepdf_pages-to-jpg/WEBSITE NOTES-compressed_page-0036.webp", alt: "San Antonio project image 15" }
  ]
}

function LocationSection({ title, description, images, locationKey }) {
  const [showAllImages, setShowAllImages] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <section className="section">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="mb-4">{title} Projects</h2>
          <p className="text-gray-600">{description}</p>
        </div>

        {!showAllImages ? (
          // Single image view
          <div className="max-w-2xl mx-auto">
            <div className="relative h-96 rounded-lg overflow-hidden mb-6">
              <Image
                src={images[0].src || "/placeholder.svg"}
                alt={images[0].alt}
                loading="lazy"
                fill
                className="object-cover"
              />
            </div>
            <div className="text-center">
              <button
                onClick={() => setShowAllImages(true)}
                className="bg-[rgb(var(--primary))] text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-colors"
              >
                View All Images ({images.length})
              </button>
            </div>
          </div>
        ) : (
          // Gallery view
          <div className="max-w-6xl mx-auto">
            {/* Main image with navigation */}
            <div className="relative mb-8">
              <div className="relative h-96 md:h-[500px] rounded-lg overflow-hidden">
                <Image
                  src={images[currentImageIndex].src || "/placeholder.svg"}
                  alt={images[currentImageIndex].alt}
                  loading="lazy"
                  fill
                  className="object-cover"
                />
                
                {/* Navigation buttons */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                </button>
                
                <button
                  onClick={nextImage}
                  className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>

                {/* Image counter */}
                <div className="absolute bottom-4 right-4 bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                  {currentImageIndex + 1} / {images.length}
                </div>
              </div>
            </div>

            {/* Thumbnail grid */}
            <div className="grid grid-cols-5 md:grid-cols-8 lg:grid-cols-10 gap-2 mb-6">
              {images.map((image, index) => (
                <button
                  key={image.id}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative h-16 rounded overflow-hidden border-2 transition-colors ${
                    currentImageIndex === index 
                      ? 'border-[rgb(var(--primary))]' 
                      : 'border-gray-200 hover:border-gray-400'
                  }`}
                >
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    loading="lazy"
                    fill
                    className="object-cover"
                  />
                </button>
              ))}
            </div>

            {/* Close gallery button */}
            <div className="text-center">
              <button
                onClick={() => {
                  setShowAllImages(false)
                  setCurrentImageIndex(0)
                }}
                className="bg-gray-600 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Close Gallery
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default function ProjectsPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Our Projects</h1>
            <p className="text-xl text-gray-300">
              Browse our portfolio of completed projects to see the quality and craftsmanship we bring to every home.
              From kitchens and bathrooms to whole home renovations, we take pride in our work.
            </p>
          </div>
        </div>
      </section>

      {/* Projects Gallery */}
      <ProjectsSection />

      {/* Georgetown Projects */}
      <LocationSection
        title="Georgetown"
        description="Explore our completed projects in Georgetown, featuring kitchen remodels and full home renovations that showcase our commitment to quality craftsmanship."
        images={locationImages.georgetown}
        locationKey="georgetown"
      />

      {/* Austin Projects */}
      <LocationSection
        title="Austin"
        description="Discover our diverse Austin portfolio including home remodels, kitchen upgrades, deck repairs, and water damage restoration projects."
        images={locationImages.austin}
        locationKey="austin"
      />

      {/* Buda Projects */}
      <LocationSection
        title="Buda"
        description="See our specialized ADU remodeling work in Buda, transforming existing structures into beautiful, functional living spaces."
        images={locationImages.buda}
        locationKey="buda"
      />

      {/* San Antonio Projects */}
      <LocationSection
        title="San Antonio"
        description="View our commercial and residential projects in San Antonio, including specialized staining and restoration services."
        images={locationImages.sanantonio}
        locationKey="sanantonio"
      />

      {/* Featured Project */}
      <section className="section bg-gray-50">
        <div className="container">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="mb-4">Featured Project</h2>
            <p className="text-gray-600">Take a closer look at one of our most impressive transformations.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-2 gap-4">
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/modern-home-construction.png"
                    alt="Before"
                    loading="lazy"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2">Before</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/open-concept-living-kitchen.png"
                    alt="After"
                    loading="lazy"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[rgb(var(--primary))] text-white px-4 py-2">After</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/bathroom-remodeling.webp"
                    alt="Before"
                    loading="lazy"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2">Before</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <Image
                    src="/finished-basement-entertainment.png"
                    alt="After"
                    loading="lazy"
                    width={300}
                    height={300}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[rgb(var(--primary))] text-white px-4 py-2">After</div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold mb-4">Complete Home Transformation</h3>
              <p className="text-gray-600 mb-4">
                We converted a detached garage into a beautifully finished 1-bedroom, 1-bathroom accessory dwelling unit (ADU) to create a private living space for our client's father-in-law. This full-scope remodel included structural modifications, new utilities, insulation, HVAC, drywall, custom cabinetry, flooring, and interior finishes. The result is a fully self-contained, comfortable home that blends functionality, style, and independence-perfectly tailored to meet the family's needs.
              </p>
              <div className="space-y-6 mb-8">
                <div>
                  <h4 className="font-bold mb-2">Project Scope:</h4>
                  <ul className="list-disc pl-5 text-gray-600 space-y-1">
                    <li>Framing and layout modifications to accomodate living, kitchen, and bathroom areas</li>
                    <li>Full electrical and plumbing installation, including new sub-panel and sewer tie-in</li>
                    <li>HVAC system installation for year-round climate control</li>
                    <li>Insulation, drywall, and interior wall finishes</li>
                    <li>Custom kitchen cabinetry and bathroom vanity installation</li>
                    <li>Flooring throughout living spaces and wet areas</li>
                    <li>Interior/exterior paint, trim, and finish carpentry</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Timeline:</h4>
                  <p className="text-gray-600">3 months from start to completion</p>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Client Feedback:</h4>
                  <p className="text-gray-600 italic">
                    "Arro Construction exceeded our expectations in every way. They transformed our outdated home into a
                    modern, functional space that we love coming home to every day. The team was professional, the work
                    was high-quality, and they finished on time and on budget."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}