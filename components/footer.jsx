import Link from "next/link"
import { Phone, Mail, MapPin, Facebook, Instagram, Twitter, Linkedin } from "lucide-react"
import AnimationWrapper from "./animation-wrapper"
import StaggeredChildren from "./staggered-children"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <AnimationWrapper animation="animate-slide-up" threshold={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">Arro Construction LLC</h3>
              <p className="mb-4">Award-winning home remodeling services tailored to your vision and budget.</p>
              <div className="flex space-x-4">
                <a href="#" className="text-white hover:text-[rgb(var(--primary))] transition-colors">
                  <Facebook size={20} className="hover:animate-pulse" />
                </a>
                <a href="#" className="text-white hover:text-[rgb(var(--primary))] transition-colors">
                  <Instagram size={20} className="hover:animate-pulse" />
                </a>
                <a href="#" className="text-white hover:text-[rgb(var(--primary))] transition-colors">
                  <Twitter size={20} className="hover:animate-pulse" />
                </a>
                <a href="#" className="text-white hover:text-[rgb(var(--primary))] transition-colors">
                  <Linkedin size={20} className="hover:animate-pulse" />
                </a>
              </div>
            </div>
          </AnimationWrapper>

          {/* Quick Links */}
          <AnimationWrapper animation="animate-slide-up" delay={0.2} threshold={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <StaggeredChildren baseAnimation="animate-fade-in" staggerDelay={0.1} initialDelay={0.3} threshold={0.1}>
                <ul className="space-y-2">
                  <li>
                    <Link href="/" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link href="/services" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Services
                    </Link>
                  </li>
                  <li>
                    <Link href="/projects" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Projects
                    </Link>
                  </li>
                  <li>
                    <Link href="/about" className="hover:text-[rgb(var(--primary))] transition-colors">
                      About
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Contact
                    </Link>
                  </li>
                </ul>
              </StaggeredChildren>
            </div>
          </AnimationWrapper>

          {/* Services */}
          <AnimationWrapper animation="animate-slide-up" delay={0.4} threshold={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">Our Services</h3>
              <StaggeredChildren baseAnimation="animate-fade-in" staggerDelay={0.1} initialDelay={0.3} threshold={0.1}>
                <ul className="space-y-2">
                  <li>
                    <Link href="/services#kitchen" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Kitchen Remodeling
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#bathroom" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Bathroom Renovation
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#basement" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Full Home Remodel
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#additions" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Home Additions
                    </Link>
                  </li>
                  <li>
                    <Link href="/services#outdoor" className="hover:text-[rgb(var(--primary))] transition-colors">
                      Outdoor Living
                    </Link>
                  </li>
                </ul>
              </StaggeredChildren>
            </div>
          </AnimationWrapper>

          {/* Contact Info */}
          <AnimationWrapper animation="animate-slide-up" delay={0.6} threshold={0.1}>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Us</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <MapPin className="mr-2 mt-1 flex-shrink-0" size={18} />
                  <span>123 Construction Ave, Building City, ST 12345</span>
                </li>
                <li className="flex items-center">
                  <Phone className="mr-2 flex-shrink-0" size={18} />
                  <a href="tel:+15551234567" className="hover:text-[rgb(var(--primary))] transition-colors">
                    (555) 123-4567
                  </a>
                </li>
                <li className="flex items-center">
                  <Mail className="mr-2 flex-shrink-0" size={18} />
                  <a
                    href="mailto:info@arroconstruction.com"
                    className="hover:text-[rgb(var(--primary))] transition-colors"
                  >
                    info@arroconstruction.com
                  </a>
                </li>
              </ul>
            </div>
          </AnimationWrapper>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center">
          <p>&copy; {new Date().getFullYear()} Arro Construction LLC. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
