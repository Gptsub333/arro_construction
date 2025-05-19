import ContactForm from "@/components/contact-form"
import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="pt-32 pb-16 bg-gray-900 text-white">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="mb-6">Contact Us</h1>
            <p className="text-xl text-gray-300">
              Ready to start your project? Contact us today for a free consultation and quote. We're here to answer your
              questions and help bring your vision to life.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information and Form */}
      <section className="section">
        <div className="container">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="mb-6">Get In Touch</h2>
              <p className="text-gray-600 mb-8">
                Fill out the form below to request a free consultation. We'll get back to you within 24 hours to discuss
                your project.
              </p>

              <ContactForm />
            </div>

            <div>
              <div className="bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Contact Information</h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <MapPin className="text-[rgb(var(--primary))] mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Our Office</h4>
                      <p className="text-gray-600">
                        123 Construction Ave
                        <br />
                        Building City, ST 12345
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Phone className="text-[rgb(var(--primary))] mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Phone</h4>
                      <p className="text-gray-600">
                        <a href="tel:+15551234567" className="hover:text-[rgb(var(--primary))]">
                          (555) 123-4567
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-[rgb(var(--primary))] mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Email</h4>
                      <p className="text-gray-600">
                        <a href="mailto:info@arroconstruction.com" className="hover:text-[rgb(var(--primary))]">
                          info@arroconstruction.com
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Clock className="text-[rgb(var(--primary))] mr-4 mt-1" size={24} />
                    <div>
                      <h4 className="font-bold mb-1">Business Hours</h4>
                      <p className="text-gray-600">
                        Monday - Friday: 8am - 5pm
                        <br />
                        Saturday: 9am - 2pm
                        <br />
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-gray-50 rounded-lg p-8">
                <h3 className="text-xl font-bold mb-6">Service Areas</h3>
                <p className="text-gray-600 mb-4">We proudly serve the following areas:</p>
                <ul className="space-y-2 text-gray-600">
                  <li>• Building City</li>
                  <li>• Renovation Town</li>
                  <li>• Construction Heights</li>
                  <li>• Remodel Village</li>
                  <li>• Design Springs</li>
                  <li>• And surrounding areas</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
