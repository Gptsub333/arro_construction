import Image from "next/image"
import CTASection from "@/components/cta-section"
import { CheckCircle, Award, Clock, Users, Star } from "lucide-react"
import AnimationWrapper from "@/components/animation-wrapper"
import StaggeredChildren from "@/components/staggered-children"

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6 animate-slide-down">About Arro Construction</h1>
            <p className="text-xl text-gray-300 animate-slide-up">
              We're a team of passionate professionals dedicated to transforming homes with exceptional craftsmanship
              and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div className="relative h-[500px] rounded-lg overflow-hidden">
                <Image
                  src="/placeholder.svg?height=1000&width=800&query=construction worker in modern home"
                  alt="Our Story"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>
            <div>
              <AnimationWrapper animation="animate-slide-left" threshold={0.2}>
                <h2 className="mb-6">Our Story</h2>
                <p className="text-gray-600 mb-4">
                  Founded in 2005, Arro Construction began with a simple mission: to provide high-quality home
                  remodeling services with integrity, transparency, and exceptional craftsmanship. What started as a
                  small team of dedicated professionals has grown into a full-service remodeling company with a
                  reputation for excellence.
                </p>
                <p className="text-gray-600 mb-4">
                  Our founder, John Arro, began his career as a carpenter and quickly developed a passion for
                  transforming homes. After years of working for other construction companies, he decided to start his
                  own business with a focus on quality, communication, and customer satisfaction.
                </p>
                <p className="text-gray-600 mb-8">
                  Today, we continue to uphold these values in every project we undertake. Our team has grown, but our
                  commitment to excellence remains the same. We take pride in our work and strive to exceed our clients'
                  expectations on every project.
                </p>
              </AnimationWrapper>
              <StaggeredChildren baseAnimation="animate-fade-in" staggerDelay={0.15} initialDelay={0.3} threshold={0.2}>
                <div className="flex flex-wrap gap-4">
                  <div className="flex items-center">
                    <Star className="text-[rgb(var(--primary))] mr-2" size={20} />
                    <span className="font-bold">15+ Years Experience</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-[rgb(var(--primary))] mr-2" size={20} />
                    <span className="font-bold">500+ Projects Completed</span>
                  </div>
                  <div className="flex items-center">
                    <Star className="text-[rgb(var(--primary))] mr-2" size={20} />
                    <span className="font-bold">100% Client Satisfaction</span>
                  </div>
                </div>
              </StaggeredChildren>
            </div>
          </div>
        </div>
      </section>

      {/* Our Team */}
      <section className="section bg-gray-50">
        <div className="container">
          <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Meet Our Team</h2>
              <p className="text-gray-600">
                Our team of experienced professionals is dedicated to bringing your vision to life with quality
                craftsmanship and attention to detail.
              </p>
            </div>
          </AnimationWrapper>

          <StaggeredChildren baseAnimation="animate-slide-up" staggerDelay={0.2} threshold={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=800&width=600&query=professional construction manager portrait"
                    alt="John Arro"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">John Arro</h3>
                  <p className="text-[rgb(var(--primary))] mb-4">Founder & CEO</p>
                  <p className="text-gray-600">
                    With over 20 years of experience in the construction industry, John leads our team with a passion
                    for quality and customer satisfaction.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=800&width=600&query=female interior designer professional"
                    alt="Sarah Johnson"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Sarah Johnson</h3>
                  <p className="text-[rgb(var(--primary))] mb-4">Lead Designer</p>
                  <p className="text-gray-600">
                    Sarah brings creativity and innovation to every project, helping clients visualize and achieve their
                    dream spaces.
                  </p>
                </div>
              </div>

              <div className="bg-white rounded-lg overflow-hidden shadow-md transform transition-all duration-300 hover:scale-105">
                <div className="relative h-80">
                  <Image
                    src="/placeholder.svg?height=800&width=600&query=construction project manager professional"
                    alt="Michael Chen"
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-1">Michael Chen</h3>
                  <p className="text-[rgb(var(--primary))] mb-4">Project Manager</p>
                  <p className="text-gray-600">
                    Michael ensures that every project runs smoothly, on time, and on budget, with clear communication
                    throughout the process.
                  </p>
                </div>
              </div>
            </div>
          </StaggeredChildren>
        </div>
      </section>

      {/* Our Values */}
      <section className="section">
        <div className="container">
          <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">Our Values</h2>
              <p className="text-gray-600">
                These core principles guide everything we do and ensure that we deliver exceptional results on every
                project.
              </p>
            </div>
          </AnimationWrapper>

          <StaggeredChildren baseAnimation="animate-zoom-in" staggerDelay={0.15} threshold={0.1}>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center mb-4">
                  <CheckCircle size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Quality</h3>
                <p className="text-gray-600">
                  We never compromise on quality. From materials to craftsmanship, we ensure everything meets our high
                  standards.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center mb-4">
                  <Users size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Integrity</h3>
                <p className="text-gray-600">
                  We operate with honesty and transparency in all our dealings, building trust with our clients.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center mb-4">
                  <Clock size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Reliability</h3>
                <p className="text-gray-600">
                  We deliver on our promises, completing projects on time and within budget, with no surprises.
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md transform transition-all duration-300 hover:-translate-y-2">
                <div className="w-16 h-16 bg-[rgb(var(--primary))] text-white rounded-full flex items-center justify-center mb-4">
                  <Award size={32} />
                </div>
                <h3 className="text-xl font-bold mb-2">Excellence</h3>
                <p className="text-gray-600">
                  We strive for excellence in everything we do, constantly improving our skills and processes.
                </p>
              </div>
            </div>
          </StaggeredChildren>
        </div>
      </section>

      <CTASection />
    </>
  )
}
