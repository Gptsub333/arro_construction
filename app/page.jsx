import HeroSection from "@/components/hero-section"
import ServicesSection from "@/components/services-section"
import ProjectsSection from "@/components/projects-section"
import TestimonialsSection from "@/components/testimonials-section"
import CTASection from "@/components/cta-section"
import Image from "next/image"
import Link from "next/link"
import { CheckCircle, Award, Clock, Users } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"
import StaggeredChildren from "@/components/staggered-children"

export default function Home() {
  return (
    <>
      <HeroSection />

      {/* About Section */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800&query=construction worker in modern home"
                  alt="About Arro Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>

            <div>
              <AnimationWrapper animation="animate-slide-left" threshold={0.2}>
                <h2 className="mb-6">Crafting Beautiful Spaces Since 2005</h2>
                <p className="text-gray-600 mb-6">
                  At Arro Construction, we believe that your home should be a reflection of your unique style and needs.
                  With over 15 years of experience in the industry, we've built a reputation for exceptional
                  craftsmanship, attention to detail, and customer satisfaction.
                </p>
                <p className="text-gray-600 mb-8">
                  Our team of skilled professionals is dedicated to bringing your vision to life, from concept to
                  completion. We handle every aspect of your project with care and precision, ensuring a seamless
                  experience and stunning results.
                </p>
              </AnimationWrapper>

              <StaggeredChildren baseAnimation="animate-fade-in" staggerDelay={0.15} initialDelay={0.3} threshold={0.2}>
                <div className="grid grid-cols-2 gap-6">
                  <div className="flex items-start">
                    <CheckCircle className="text-[rgb(var(--primary))] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-bold mb-1">Quality Materials</h4>
                      <p className="text-sm text-gray-600">We use only the finest materials for lasting results.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Award className="text-[rgb(var(--primary))] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-bold mb-1">Award Winning</h4>
                      <p className="text-sm text-gray-600">Recognized for excellence in home remodeling.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="text-[rgb(var(--primary))] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-bold mb-1">On-Time Delivery</h4>
                      <p className="text-sm text-gray-600">We respect your time and stick to our schedules.</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Users className="text-[rgb(var(--primary))] mr-3 mt-1" size={20} />
                    <div>
                      <h4 className="text-lg font-bold mb-1">Expert Team</h4>
                      <p className="text-sm text-gray-600">Skilled professionals with years of experience.</p>
                    </div>
                  </div>
                </div>
              </StaggeredChildren>

              <AnimationWrapper animation="animate-fade-in" delay={0.8} threshold={0.2}>
                <div className="mt-8">
                  <Link href="/about" className="btn btn-outline">
                    Learn More About Us
                  </Link>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>

      <ServicesSection limit={3} />

      <ProjectsSection limit={4} />

      {/* Process Section */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Our Process</h2>
              <p className="text-gray-600">
                We follow a streamlined process to ensure your project runs smoothly from start to finish.
              </p>
            </div>
          </AnimationWrapper>

          <StaggeredChildren baseAnimation="animate-slide-up" staggerDelay={0.2} threshold={0.2}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  1
                </div>
                <h3 className="text-xl font-bold mb-2">Consultation</h3>
                <p className="text-gray-600">
                  We meet to discuss your vision, needs, and budget to create a customized plan.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  2
                </div>
                <h3 className="text-xl font-bold mb-2">Design</h3>
                <p className="text-gray-600">Our designers create detailed plans and 3D renderings of your project.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  3
                </div>
                <h3 className="text-xl font-bold mb-2">Construction</h3>
                <p className="text-gray-600">Our skilled team brings your design to life with quality craftsmanship.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md text-center">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  4
                </div>
                <h3 className="text-xl font-bold mb-2">Completion</h3>
                <p className="text-gray-600">We conduct a final walkthrough to ensure your complete satisfaction.</p>
              </div>
            </div>
          </StaggeredChildren>
        </div>
      </section>

      <TestimonialsSection />

      <CTASection />
    </>
  )
}
