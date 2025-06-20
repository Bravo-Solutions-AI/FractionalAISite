'use client'

import { useState } from 'react'
import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    title: '',
    phone: '',
    service: '',
    message: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your interest! We will get back to you within 24 hours.')
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-mono-50 pt-40 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display font-extralight tracking-tighter text-mono-900 mb-6">
              Let's
              <span className="text-gradient-cool"> Discuss Your AI Needs</span>
            </h1>
            <p className="text-xl text-mono-600 leading-relaxed">
              Schedule a consultation with our fractional AI executives to explore how we can 
              accelerate your AI transformation and drive measurable business results.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <h2 className="text-2xl font-display font-extralight tracking-tighter text-mono-900 mb-8">Schedule a Consultation</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-mono-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-mono-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="company" className="block text-sm font-medium text-mono-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      required
                      value={formData.company}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-mono-700 mb-2">
                      Your Title
                    </label>
                    <input
                      type="text"
                      id="title"
                      name="title"
                      value={formData.title}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-mono-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-mono-700 mb-2">
                      Service of Interest
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      <option value="fractional-cto">Fractional CTO Services</option>
                      <option value="fractional-cdo">Fractional Chief Data Officer</option>
                      <option value="ai-strategy">AI Strategy & Implementation</option>
                      <option value="customer-service">Customer Service Automation</option>
                      <option value="general-consultation">General Consultation</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-mono-700 mb-2">
                    Tell us about your AI needs and objectives
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent"
                    placeholder="Describe your current challenges, AI objectives, and how we might help..."
                  />
                </div>
                
                <button
                  type="submit"
                  className="w-full btn-accent"
                >
                  Schedule Consultation
                </button>
              </form>
            </div>
            
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-display font-extralight tracking-tighter text-mono-900 mb-8">Get in Touch</h2>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-lg font-display font-light tracking-tight text-mono-900 mb-4">Response Time</h3>
                  <p className="text-mono-600">
                    We respond to all inquiries within 24 hours. For urgent matters, 
                    please call us directly.
                  </p>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-light tracking-tight text-mono-900 mb-4">Consultation Process</h3>
                  <div className="space-y-3">
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent-cool-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        1
                      </div>
                      <div>
                        <h4 className="font-medium text-mono-900">Initial Call (30 minutes)</h4>
                        <p className="text-mono-600 text-sm">Understand your challenges and objectives</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent-cool-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        2
                      </div>
                      <div>
                        <h4 className="font-medium text-mono-900">Assessment & Proposal</h4>
                        <p className="text-mono-600 text-sm">Customized approach and engagement model</p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-3">
                      <div className="w-6 h-6 bg-accent-cool-600 text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0 mt-0.5">
                        3
                      </div>
                      <div>
                        <h4 className="font-medium text-mono-900">Engagement Planning</h4>
                        <p className="text-mono-600 text-sm">Define scope, timeline, and success metrics</p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-display font-light tracking-tight text-mono-900 mb-4">Industries We Serve</h3>
                  <div className="grid grid-cols-2 gap-2 text-sm text-mono-600">
                    <div>• Healthcare</div>
                    <div>• Financial Services</div>
                    <div>• Manufacturing</div>
                    <div>• Technology</div>
                    <div>• Retail</div>
                    <div>• Professional Services</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-mono-50 py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="space-y-8">
              {[
                {
                  question: "What is a fractional AI executive?",
                  answer: "A fractional AI executive is a senior-level AI leader who works with your organization part-time, providing strategic guidance and hands-on implementation expertise without the cost of a full-time executive hire."
                },
                {
                  question: "How does the engagement model work?",
                  answer: "Our engagements are typically structured as monthly retainers ranging from 1-3 days per week, depending on your needs. We work closely with your team and can scale up or down based on project requirements."
                },
                {
                  question: "What size companies do you work with?",
                  answer: "We primarily work with mid-market companies ($10M-$100M revenue) and growth-stage startups, though we also engage with larger enterprises on specific AI initiatives."
                },
                {
                  question: "How quickly can you start?",
                  answer: "Most engagements can begin within 2-3 weeks of initial consultation, depending on scope and team availability."
                }
              ].map((faq, index) => (
                <div key={index} className="bg-white p-6 rounded-lg">
                  <h3 className="text-lg font-display font-light tracking-tight text-mono-900 mb-3">{faq.question}</h3>
                  <p className="text-mono-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}