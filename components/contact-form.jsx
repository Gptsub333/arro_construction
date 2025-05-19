"use client"

import { useState } from "react"

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [formStatus, setFormStatus] = useState({
    submitted: false,
    success: false,
    message: "",
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    // Simulate form submission
    setFormStatus({
      submitted: true,
      success: true,
      message: "Thank you for your message! We will contact you shortly.",
    })

    // Reset form after successful submission
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: "",
    })

    // In a real application, you would send the form data to your backend
    // fetch('/api/contact', {
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json',
    //   },
    //   body: JSON.stringify(formData),
    // })
    // .then(response => response.json())
    // .then(data => {
    //   setFormStatus({
    //     submitted: true,
    //     success: true,
    //     message: 'Thank you for your message! We will contact you shortly.'
    //   });
    // })
    // .catch(error => {
    //   setFormStatus({
    //     submitted: true,
    //     success: false,
    //     message: 'There was an error submitting your form. Please try again.'
    //   });
    // });
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      {formStatus.submitted && formStatus.success ? (
        <div className="text-center py-8">
          <div className="text-green-600 text-5xl mb-4">✓</div>
          <h3 className="text-2xl font-bold mb-2">Thank You!</h3>
          <p className="text-gray-600">{formStatus.message}</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label htmlFor="name" className="form-label">
                Full Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="form-label">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="phone" className="form-label">
                Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="form-input"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="service" className="form-label">
                Service Interested In
              </label>
              <select
                id="service"
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="form-input"
                required
              >
                <option value="">Select a Service</option>
                <option value="Kitchen Remodeling">Kitchen Remodeling</option>
                <option value="Bathroom Renovation">Bathroom Renovation</option>
                <option value="Basement Finishing">Basement Finishing</option>
                <option value="Home Additions">Home Additions</option>
                <option value="Outdoor Living">Outdoor Living</option>
                <option value="Whole Home Renovation">Whole Home Renovation</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div className="form-group md:col-span-2">
              <label htmlFor="message" className="form-label">
                Project Details
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="form-textarea"
                required
              ></textarea>
            </div>
          </div>

          <div className="mt-6">
            <button type="submit" className="btn btn-primary w-full">
              Submit Request
            </button>
          </div>
        </form>
      )}
    </div>
  )
}
