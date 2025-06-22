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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    const form = e.target as HTMLFormElement
    const formData = new FormData(form)
    
    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString()
      })
      
      if (response.ok) {
        // Redirect to success page
        window.location.href = '/success'
      } else {
        alert('There was an error submitting the form. Please try again.')
      }
    } catch (error) {
      alert('There was an error submitting the form. Please try again.')
    }
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
      
      
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-white via-mono-25 to-white pt-32 pb-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-accent-cool-100/20 to-accent-cool-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-mono-100/30 to-mono-50/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-5xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-accent-cool-50 border border-accent-cool-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-accent-cool-500 rounded-full mr-3 animate-pulse"></span>
              <span className="text-accent-cool-700 text-sm font-medium">Get Started Today</span>
            </div>
            
            <h1 className="mb-6 font-display font-extralight tracking-tighter">
              Let's Build Your
              <span className="block text-gradient-cool font-light mt-2">AI-Powered Future Together</span>
            </h1>
            
            <p className="text-large mb-8 max-w-3xl mx-auto leading-relaxed text-mono-700">
              Connect with our fractional CFOs, CTOs, CMOs, and COOs who specialize in AI automation. 
              Transform your operations with leaders who implement, not just advise.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="py-12">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-5 gap-16">
              {/* Contact Info Sidebar */}
              <div className="lg:col-span-2">
                <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-8 shadow-premium sticky top-32">
                  <h2 className="text-2xl font-display font-light tracking-tight text-mono-900 mb-6">
                    Why Connect With Us?
                  </h2>
                  
                  <div className="space-y-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-cool-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-accent-cool-600 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-medium text-mono-900 mb-2">AI Implementation Experts</h3>
                        <p className="text-mono-600 text-sm leading-relaxed">
                          Our fractional leaders don't just strategize—they build and deploy AI solutions.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-cool-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-accent-cool-500 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-medium text-mono-900 mb-2">24-Hour Response</h3>
                        <p className="text-mono-600 text-sm leading-relaxed">
                          We respond to all inquiries within one business day.
                        </p>
                      </div>
                    </div>
                    
                    <div className="flex items-start space-x-4">
                      <div className="w-12 h-12 bg-accent-cool-100 rounded-xl flex items-center justify-center flex-shrink-0">
                        <div className="w-6 h-6 bg-accent-cool-400 rounded-full"></div>
                      </div>
                      <div>
                        <h3 className="font-medium text-mono-900 mb-2">Start in 2 Weeks</h3>
                        <p className="text-mono-600 text-sm leading-relaxed">
                          From first call to active engagement in just 14 days.
                        </p>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 pt-8 border-t border-mono-200">
                    <h3 className="font-medium text-mono-900 mb-4">What Happens Next?</h3>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-accent-cool-600 font-semibold text-sm">
                          1
                        </div>
                        <p className="text-mono-600 text-sm">30-minute discovery call</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-accent-cool-600 font-semibold text-sm">
                          2
                        </div>
                        <p className="text-mono-600 text-sm">Custom AI roadmap proposal</p>
                      </div>
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-accent-cool-600 font-semibold text-sm">
                          3
                        </div>
                        <p className="text-mono-600 text-sm">Begin implementation</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="lg:col-span-3">
                <div className="bg-white rounded-3xl p-8 shadow-glass border border-mono-100">
                  <h2 className="text-2xl font-display font-light tracking-tight text-mono-900 mb-6">
                    Schedule Your Free Consultation
                  </h2>
                  
                  <form 
                    name="contact"
                    method="POST"
                    action="/success"
                    data-netlify="true"
                    onSubmit={handleSubmit} 
                    className="space-y-6"
                  >
                    <input type="hidden" name="form-name" value="contact" />
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
                          className="w-full px-5 py-3 border border-mono-200 rounded-xl focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent transition-all"
                          placeholder="John Smith"
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
                          className="w-full px-5 py-3 border border-mono-200 rounded-xl focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent transition-all"
                          placeholder="john@company.com"
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
                          className="w-full px-5 py-3 border border-mono-200 rounded-xl focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent transition-all"
                          placeholder="Acme Corp"
                        />
                      </div>
                      
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
                          className="w-full px-5 py-3 border border-mono-200 rounded-xl focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent transition-all"
                          placeholder="+1 (555) 123-4567"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="service" className="block text-sm font-medium text-mono-700 mb-2">
                        Which fractional role interests you most?
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-mono-200 rounded-xl focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent transition-all appearance-none bg-white"
                      >
                        <option value="">Select a role</option>
                        <option value="fractional-cfo">Fractional CFO + AI</option>
                        <option value="fractional-cto">Fractional CTO + AI</option>
                        <option value="fractional-cmo">Fractional CMO + AI</option>
                        <option value="fractional-coo">Fractional COO + AI</option>
                        <option value="multiple">Multiple Roles</option>
                        <option value="unsure">Not Sure Yet</option>
                      </select>
                    </div>
                    
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-mono-700 mb-2">
                        Tell us about your current challenges and AI goals
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        rows={5}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-3 border border-mono-200 rounded-xl focus:ring-2 focus:ring-accent-cool-600 focus:border-transparent transition-all resize-none"
                        placeholder="What operational challenges are you facing? What would you like to automate? What are your growth goals?"
                      />
                    </div>
                    
                    <div className="pt-4">
                      <button
                        type="submit"
                        className="w-full btn-accent hover-scale text-lg py-4"
                      >
                        Schedule Free Consultation
                      </button>
                      <p className="text-center text-sm text-mono-500 mt-4">
                        No commitment required. 30-minute call to explore how we can help.
                      </p>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Indicators */}
      <section className="py-12 bg-mono-50">
        <div className="container">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-display font-light tracking-tight text-mono-900 text-center mb-8">
              Trusted by Growth-Focused Companies
            </h2>
            
            <div className="grid md:grid-cols-4 gap-8 mb-12">
              <div className="text-center">
                <div className="text-4xl font-extralight text-accent-cool-600 mb-3">200+</div>
                <p className="text-mono-600">Successful Engagements</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-accent-cool-600 mb-3">95%</div>
                <p className="text-mono-600">Client Success Rate</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-accent-cool-600 mb-3">3-5x</div>
                <p className="text-mono-600">Average ROI</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-extralight text-accent-cool-600 mb-3">50%</div>
                <p className="text-mono-600">Cost Reduction</p>
              </div>
            </div>
            
            {/* FAQ Section */}
            <div className="bg-white rounded-3xl p-8 shadow-glass">
              <h3 className="text-2xl font-display font-light tracking-tight text-mono-900 text-center mb-8">
                Common Questions
              </h3>
              
              <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
                {[
                  {
                    question: "What makes your fractional leaders different?",
                    answer: "Our fractional CFOs, CTOs, CMOs, and COOs are AI implementation experts. They don't just advise—they build and deploy automation solutions that transform your operations."
                  },
                  {
                    question: "How quickly can we see results?",
                    answer: "Most clients see initial automation wins within 4-6 weeks. Significant operational improvements typically emerge within 3 months."
                  },
                  {
                    question: "What's the minimum engagement?",
                    answer: "We typically start with 3-month engagements, with most clients extending to 6-12 months as they see the value of ongoing AI implementation."
                  },
                  {
                    question: "Do you work with our existing team?",
                    answer: "Absolutely. Our fractional leaders integrate seamlessly with your team, transferring AI knowledge and building lasting capabilities."
                  }
                ].map((faq, index) => (
                  <div key={index}>
                    <h4 className="font-medium text-mono-900 mb-3">{faq.question}</h4>
                    <p className="text-mono-600 leading-relaxed">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}