import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  {
    title: "Fractional CTO Services",
    description: "Strategic technology leadership to guide your AI transformation and technical roadmap.",
    capabilities: [
      "AI strategy development and execution",
      "Technology architecture design", 
      "Team leadership and mentoring",
      "Vendor evaluation and management",
      "Risk assessment and mitigation",
      "Board-level technology reporting"
    ],
    engagementModel: "Part-time executive role, typically 1-3 days per week",
    idealFor: "Growing companies needing senior technology leadership without full-time executive cost"
  },
  {
    title: "Fractional Chief Data Officer",
    description: "Data strategy and AI implementation leadership to unlock the value of your organization's data.",
    capabilities: [
      "Data strategy and governance",
      "AI/ML implementation roadmap",
      "Data infrastructure optimization",
      "Analytics team building",
      "Compliance and data privacy",
      "ROI measurement and reporting"
    ],
    engagementModel: "Strategic consulting with hands-on implementation support",
    idealFor: "Organizations with significant data assets seeking to implement AI-driven insights"
  },
  {
    title: "AI Strategy & Implementation",
    description: "End-to-end AI transformation consulting from strategy through deployment.",
    capabilities: [
      "AI opportunity assessment",
      "Business case development",
      "Implementation planning",
      "Solution architecture",
      "Team training and enablement",
      "Change management"
    ],
    engagementModel: "Project-based engagements from 3-12 months",
    idealFor: "Companies beginning their AI journey or scaling existing AI capabilities"
  },
  {
    title: "Customer Service Automation",
    description: "Specialized AI-powered customer service solutions to improve efficiency and satisfaction.",
    capabilities: [
      "Intelligent chatbot development",
      "Customer intent analysis",
      "Automated ticket routing",
      "Knowledge base optimization",
      "Performance analytics",
      "Human-AI workflow design"
    ],
    engagementModel: "Implementation projects with ongoing optimization support",
    idealFor: "Service-focused businesses looking to scale customer support operations"
  }
]

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-mono-50 pt-40 pb-16">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="mb-6 font-display font-extralight tracking-tighter text-mono-900">
              Fractional Executive Services
              <span className="block text-gradient-cool font-light mt-2">Enhanced with AI</span>
            </h1>
            <p className="text-large text-mono-700 leading-relaxed max-w-3xl">
              Access senior AI leadership and specialized expertise through our fractional executive services. 
              Get the strategic guidance and hands-on implementation you need, when you need it.
            </p>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-12">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-12 pb-12 border-b border-mono-200 last:border-b-0">
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-display font-light tracking-tight text-mono-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-mono-600 leading-relaxed font-light">
                    {service.description}
                  </p>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-lg font-medium text-mono-900 mb-4">Key Capabilities</h3>
                      <ul className="space-y-2">
                        {service.capabilities.map((capability, capIndex) => (
                          <li key={capIndex} className="flex items-start space-x-3">
                            <div className="w-1.5 h-1.5 bg-accent-cool-600 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-mono-600 font-light">{capability}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="text-lg font-medium text-mono-900 mb-4">Engagement Model</h3>
                      <p className="text-mono-600 font-light mb-6">{service.engagementModel}</p>
                      
                      <h3 className="text-lg font-medium text-mono-900 mb-4">Ideal For</h3>
                      <p className="text-mono-600 font-light">{service.idealFor}</p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Overview */}
      <section className="bg-mono-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 font-display font-extralight tracking-tighter text-mono-900">Our Approach</h2>
            <p className="text-large text-mono-700 max-w-3xl mx-auto leading-relaxed">
              We follow a structured methodology to ensure successful outcomes for every engagement.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Discovery", description: "Understanding your business, challenges, and objectives" },
              { step: "02", title: "Strategy", description: "Developing comprehensive AI strategy and implementation roadmap" },
              { step: "03", title: "Implementation", description: "Hands-on execution with your team and stakeholders" },
              { step: "04", title: "Optimization", description: "Continuous improvement and knowledge transfer" }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-cool-600 text-white rounded-2xl flex items-center justify-center text-lg font-light mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-lg font-medium text-mono-900 mb-3">{phase.title}</h3>
                <p className="text-mono-600 font-light text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 font-display font-extralight tracking-tighter text-mono-900">
              Ready to Get Started?
            </h2>
            <p className="text-large text-mono-700 mb-12 leading-relaxed">
              Schedule a consultation to discuss your AI needs and learn how our fractional executive services can help.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-accent hover-scale text-lg px-10 py-5">
                Schedule Consultation
              </a>
              <a href="/case-studies" className="btn-secondary hover-scale text-lg px-10 py-5">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}