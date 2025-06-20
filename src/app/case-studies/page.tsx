import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const caseStudies = [
  {
    title: "Healthcare System AI Transformation",
    client: "Major Regional Healthcare Network",
    industry: "Healthcare",
    challenge: "Manual patient diagnosis and treatment planning consuming excessive clinical time, leading to delayed care and physician burnout.",
    solution: "Implemented fractional CTO and Chief Data Officer roles to lead AI transformation initiative, including diagnostic assistance AI and automated treatment protocol recommendations.",
    implementation: [
      "6-month fractional CTO engagement for strategic oversight",
      "AI-powered diagnostic imaging analysis system", 
      "Clinical decision support tools integration",
      "Staff training and change management program",
      "Regulatory compliance and data governance framework"
    ],
    results: [
      "40% reduction in diagnosis time",
      "25% improvement in treatment accuracy",
      "$2.5M annual cost savings", 
      "92% physician satisfaction with AI tools",
      "Successful regulatory audit compliance"
    ],
    testimonial: {
      quote: "The fractional AI leadership model was perfect for our organization. We got world-class expertise without the full-time executive cost, and the results exceeded our expectations.",
      author: "Dr. Michael Chen",
      title: "Chief Medical Officer"
    }
  },
  {
    title: "Financial Services Customer Intelligence", 
    client: "Regional Banking Institution",
    industry: "Financial Services",
    challenge: "Reactive customer service model resulting in high churn rates and missed cross-selling opportunities, with no unified view of customer interactions.",
    solution: "Deployed fractional Chief Data Officer to implement comprehensive customer intelligence platform with AI-powered service automation and predictive analytics.",
    implementation: [
      "9-month fractional CDO engagement",
      "Customer 360 data platform development",
      "AI-powered chatbot for customer service",
      "Predictive analytics for risk assessment",
      "Automated marketing campaign optimization"
    ],
    results: [
      "35% reduction in customer churn",
      "60% improvement in cross-selling success",
      "$4.2M increase in annual revenue",
      "80% of customer inquiries automated",
      "50% faster loan approval process"
    ],
    testimonial: {
      quote: "Having a fractional CDO allowed us to transform our data capabilities rapidly. The expertise and strategic guidance were invaluable for our digital transformation.",
      author: "Sarah Rodriguez",
      title: "Chief Executive Officer"
    }
  },
  {
    title: "Manufacturing Quality Optimization",
    client: "Aerospace Components Manufacturer", 
    industry: "Manufacturing",
    challenge: "Quality control processes relying on manual inspection, resulting in defect rates above industry standards and costly rework cycles.",
    solution: "Fractional CTO services to implement AI-powered quality control systems with computer vision and predictive maintenance capabilities.",
    implementation: [
      "12-month fractional CTO engagement",
      "Computer vision quality inspection system",
      "Predictive maintenance AI platform",
      "Supply chain optimization algorithms",
      "Real-time production monitoring dashboard"
    ],
    results: [
      "70% reduction in defect rates",
      "30% decrease in maintenance costs",
      "$3.8M annual savings from improved efficiency",
      "99.5% quality compliance rate",
      "25% improvement in production throughput"
    ],
    testimonial: {
      quote: "The fractional model gave us access to AI expertise we couldn't have afforded full-time. The transformation of our quality processes has been remarkable.",
      author: "James Wilson",
      title: "VP of Operations"
    }
  }
]

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-mono-50 pt-40 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display font-extralight tracking-tighter text-mono-900 mb-6">
              Client
              <span className="text-gradient-cool"> Success Stories</span>
            </h1>
            <p className="text-xl text-mono-600 leading-relaxed">
              Real-world examples of how our fractional AI executive services have driven 
              measurable business transformation across industries.
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-20">
            {caseStudies.map((study, index) => (
              <div key={index} className="bg-white">
                {/* Case Study Header */}
                <div className="border-b border-gray-200 pb-8 mb-8">
                  <div className="flex flex-wrap items-center gap-4 mb-4">
                    <span className="bg-mono-100 text-mono-700 px-3 py-1 rounded-full text-sm font-medium">
                      {study.industry}
                    </span>
                    <span className="text-mono-500">•</span>
                    <span className="text-mono-600">{study.client}</span>
                  </div>
                  <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 mb-4">
                    {study.title}
                  </h2>
                </div>

                {/* Challenge & Solution */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-xl font-display font-light tracking-tight text-mono-900 mb-4">The Challenge</h3>
                    <p className="text-mono-600 leading-relaxed">{study.challenge}</p>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-light tracking-tight text-mono-900 mb-4">Our Solution</h3>
                    <p className="text-mono-600 leading-relaxed">{study.solution}</p>
                  </div>
                </div>

                {/* Implementation & Results */}
                <div className="grid lg:grid-cols-2 gap-12 mb-12">
                  <div>
                    <h3 className="text-xl font-display font-light tracking-tight text-mono-900 mb-4">Implementation</h3>
                    <ul className="space-y-2">
                      {study.implementation.map((item, itemIndex) => (
                        <li key={itemIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent-cool-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-mono-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-light tracking-tight text-mono-900 mb-4">Results</h3>
                    <ul className="space-y-2">
                      {study.results.map((result, resultIndex) => (
                        <li key={resultIndex} className="flex items-start space-x-3">
                          <div className="w-1.5 h-1.5 bg-accent-cool-600 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-mono-700 font-medium">{result}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Testimonial */}
                <div className="bg-mono-50 p-8 rounded-lg">
                  <blockquote className="text-lg text-mono-700 italic mb-4">
                    "{study.testimonial.quote}"
                  </blockquote>
                  <div className="flex items-center">
                    <div>
                      <div className="font-semibold text-mono-900">{study.testimonial.author}</div>
                      <div className="text-mono-600">{study.testimonial.title}</div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served */}
      <section className="bg-mono-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 mb-4">Industries We Serve</h2>
            <p className="text-xl text-mono-600 max-w-2xl mx-auto">
              Our fractional AI executives have deep expertise across key industry verticals.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "Healthcare & Life Sciences",
              "Financial Services", 
              "Manufacturing",
              "Technology",
              "Retail & E-commerce",
              "Professional Services",
              "Energy & Utilities",
              "Government & Public Sector"
            ].map((industry, index) => (
              <div key={index} className="bg-white p-6 rounded-lg text-center">
                <h3 className="font-display font-light tracking-tight text-mono-900">{industry}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 mb-6">
              Ready to Create Your Success Story?
            </h2>
            <p className="text-xl text-mono-600 mb-8">
              Let's discuss how our fractional AI executive services can drive similar results for your organization.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="btn-accent">
                Schedule Consultation
              </a>
              <a href="/services" className="btn-secondary">
                Explore Services
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}