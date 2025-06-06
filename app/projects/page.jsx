import ProjectsSection from "@/components/projects-section"
import CTASection from "@/components/cta-section"

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
                  <img
                    src="/placeholder.svg?height=600&width=400&query=kitchen before renovation"
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2">Before</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=400&query=modern kitchen after renovation"
                    alt="After"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-[rgb(var(--primary))] text-white px-4 py-2">After</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=400&query=bathroom before renovation"
                    alt="Before"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute bottom-0 left-0 bg-black bg-opacity-70 text-white px-4 py-2">Before</div>
                </div>
                <div className="relative h-64 rounded-lg overflow-hidden">
                  <img
                    src="/placeholder.svg?height=600&width=400&query=modern bathroom after renovation"
                    alt="After"
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
