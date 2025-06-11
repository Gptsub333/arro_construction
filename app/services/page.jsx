import ServicesSection from "@/components/services-section"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import AnimationWrapper from "@/components/animation-wrapper"

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-slide-down">Our Services</h1>
            <p className="text-xl text-gray-300 animate-slide-up">
              We offer a comprehensive range of home remodeling services to transform your living spaces. From kitchens
              and bathrooms to whole home renovations, our team delivers exceptional results.
            </p>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <ServicesSection />

      {/* Service Details */}
      <section className="section" id="kitchen">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div>
                <h2 className="mb-4">Kitchen Remodeling</h2>
                <p className="text-gray-600 mb-4">
                  The kitchen is the heart of your home, and our kitchen remodeling services are designed to create a
                  space that is both beautiful and functional. Whether you're looking for a complete renovation or a
                  simple update, our team will work with you to design a kitchen that meets your needs and reflects your
                  style.
                </p>
                <p className="text-gray-600 mb-6">Our kitchen remodeling services include:</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Custom cabinetry and countertops</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Island design and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Lighting design and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Flooring installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Appliance selection and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Plumbing and electrical work</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Quote
                </Link>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="animate-slide-left" threshold={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/kitchen-remodeling.webp"
                  alt="Kitchen Remodeling"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="section bg-gray-50" id="bathroom">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div className="order-2 md:order-1">
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image
                    src="/bathroom-remodeling.webp"
                    alt="Bathroom Renovation"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="animate-slide-left" threshold={0.2}>
              <div className="order-1 md:order-2">
                <h2 className="mb-4">Bathroom Renovation</h2>
                <p className="text-gray-600 mb-4">
                  Transform your bathroom into a luxurious spa-like retreat with our bathroom renovation services. We
                  specialize in creating beautiful, functional bathrooms that maximize space and provide a relaxing
                  environment for your daily routine.
                </p>
                <p className="text-gray-600 mb-6">Our bathroom renovation services include:</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Custom shower and tub installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Vanity design and installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Tile work and flooring</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Lighting and fixture installation</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Plumbing and electrical work</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Accessibility modifications</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Quote
                </Link>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <section className="section" id="basement">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div>
                <h2 className="mb-4">Full Home remodel</h2>
                <p className="text-gray-600 mb-4">
                  Transform your entire living space with our comprehensive full home remodeling services. From concept to completion, we manage every detail - including structural modifications, layout changes, and high-end finishes to deliver a seamless renovation experience. Whether you're updating an older home or reimagining your current layout, we ensure quality craftsmanship, clear communication, and a result that reflects your lifestyle and vision.
                </p>
                <p className="text-gray-600 mb-6">Our full home remodels typically include:</p>
                <ul className="space-y-2 mb-8">
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Interior and exterior painting</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Flooring installation (hardwood, tile, vinyl, etc)</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Drywall installation and repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Custom built-ins and repair</span>
                  </li>
                  <li className="flex items-start">
                    <span className="text-[rgb(var(--primary))] mr-2">•</span>
                    <span>Kitchen and bathroom upgrades</span>
                  </li>
                </ul>
                <Link href="/contact" className="btn btn-primary">
                  Get a Free Quote
                </Link>
              </div>
            </AnimationWrapper>
            <AnimationWrapper animation="animate-slide-left" threshold={0.2}>
              <div>
                <div className="relative h-[500px] rounded-lg overflow-hidden">
                  <Image src="/finished-basement-entertainment.png" alt="Basement Finishing" fill className="object-cover" />
                </div>
              </div>
            </AnimationWrapper>
          </div>
        </div>
      </section>

      <CTASection />
    </>
  )
}
