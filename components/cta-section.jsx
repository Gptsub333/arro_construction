import Link from "next/link"
import AnimationWrapper from "./animation-wrapper"

export default function CTASection() {
  return (
    <section className="section bg-[rgb(var(--primary))] text-white">
      <div className="container">
        <AnimationWrapper animation="animate-fade-in" threshold={0.2}>
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="mb-6 animate-pulse">Ready to Transform Your Home?</h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Contact us today for a free consultation and quote. Let's bring your vision to life with our expert
              craftsmanship and attention to detail.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/contact" className="btn bg-white text-[rgb(var(--primary))] hover:bg-gray-100">
                Get a Free Quote
              </Link>
              <Link href="/projects" className="btn btn-secondary">
                View Our Projects
              </Link>
            </div>
          </div>
        </AnimationWrapper>
      </div>
    </section>
  )
}
