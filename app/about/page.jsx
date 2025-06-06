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
      <section className="section bg-gray-50">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div className="relative h-[202px] w-[500px] rounded-lg overflow-hidden">
                <Image src="/p1.png" alt="Our Story" fill className="object cover" />
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

      <StaggeredChildren baseAnimation="animate-slide-up" staggerDelay={0.2} threshold={0.1}>
      {/* Leadership Profile */}
      <section className="section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <AnimationWrapper animation="animate-slide-right" threshold={0.2}>
              <div className="relative h-[545px] w-[550px] rounded-lg overflow-hidden">
                <Image
                  src="/p2.png"
                  alt="Ari Rozen - Founder, ARRO Construction"
                  fill
                  className="object-cover"
                />
              </div>
            </AnimationWrapper>
            <div>
              <AnimationWrapper animation="animate-slide-left" threshold={0.2}>
                <h2 className="text-3xl font-bold mb-2">Ari Rozen</h2>
                <h3 className="text-xl text-[rgb(var(--primary))] font-semibold mb-6">Founder, ARRO Construction</h3>

                <div className="space-y-4 text-gray-600">
                  <p>
                    Ari leads ARRO Construction with over a decade of experience in residential and multifamily
                    construction, bringing a strong foundation in field operations, project management, and client
                    service. As founder, Ari oversees the company's day-to-day operations, long-term strategy, and
                    commitment to delivering high-quality remodeling and renovation services across Central Texas and
                    Florida.
                  </p>

                  <p>
                    Ari began his construction career as a field engineer and advanced into a superintendent role, where
                    he managed large-scale multifamily developments and oversaw teams through complex buildouts from the
                    ground up. Ari brings a hands-on approach while delivering projects on time and with integrity. In
                    2022, he launched ARRO Construction with a focus on quality craftsmanship, clear communication, and
                    customer satisfaction.
                  </p>

                  <p>
                    Since founding the company, Ari has expanded ARRO's portfolio to include full home remodels,
                    accessory dwelling unit (ADU) conversions, and value-add renovations for homeowners, investors, and
                    property managers. His leadership style blends technical expertise with a personal, solutions-driven
                    approach to project delivery.
                  </p>

                  <p>
                    Ari is committed to building lasting client relationships, mentoring the next generation of
                    tradespeople, and contributing to the long-term improvement of the communities ARRO serves.
                  </p>
                </div>
              </AnimationWrapper>
            </div>
          </div>
        </div>
      </section>
       </StaggeredChildren>

       <section className="section bg-gray-50">
        <div className="container">
          <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="mb-4">CORE VALUES (STRONG)</h2>
            </div>
          </AnimationWrapper>

          <StaggeredChildren baseAnimation="animate-slide-up" staggerDelay={0.1} threshold={0.1}>
            <div className="max-w-4xl mx-auto space-y-8">
              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">S – Solve Problems with Purpose</h3>
                <p className="text-gray-600">Approach challenges creatively and deliver meaningful solutions.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">T – Team First</h3>
                <p className="text-gray-600">Prioritize collaboration, support, and shared success.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">R – Resilient in Adversity</h3>
                <p className="text-gray-600">Adapt, persevere, and thrive under pressure.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">O – Operate with Excellence</h3>
                <p className="text-gray-600">Maintain high standards and attention to detail in every task.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">N – Nurture Growth</h3>
                <p className="text-gray-600">Invest in learning, development, and empowering others.</p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-200">
                <h3 className="text-xl font-bold mb-2 text-[rgb(var(--primary))]">G – Go Above and Beyond</h3>
                <p className="text-gray-600">Exceed expectations and deliver exceptional value.</p>
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
