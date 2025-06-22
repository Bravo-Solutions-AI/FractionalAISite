import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const leadership = [
  {
    name: "Dr. Sarah Kim",
    role: "Fractional CFO + AI Practice Lead",
    background: "Former CFO & Chief AI Officer at Fortune 500",
    credentials: "MBA Harvard, MS Data Science Stanford",
    experience: "Built AI-powered finance systems saving $50M+ annually",
    expertise: ["Financial AI Automation", "Predictive Analytics", "Risk Modeling"]
  },
  {
    name: "Marcus Chen", 
    role: "Fractional CTO + AI Engineering Lead",
    background: "Former CTO at multiple AI-first startups",
    credentials: "MS Computer Science, MIT",
    experience: "Deployed 100+ production AI systems",
    expertise: ["AI Infrastructure", "Automation Architecture", "Dev Team AI Training"]
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Fractional CMO + AI Marketing Lead", 
    background: "Former CMO & Head of Marketing AI at Tech Unicorns",
    credentials: "PhD Marketing Analytics, Wharton",
    experience: "Automated marketing ops for 50+ companies",
    expertise: ["Marketing Automation", "AI Personalization", "Predictive Customer Analytics"]
  }
]

const values = [
  {
    title: "Implementation Over Strategy",
    description: "We don't just create AI roadmaps—we build and deploy the solutions. Your fractional leader rolls up their sleeves and implements alongside your team."
  },
  {
    title: "Dual Expertise Required",
    description: "Every fractional leader must excel in their C-suite role AND have hands-on AI implementation experience. No exceptions."
  },
  {
    title: "Automation First",
    description: "We measure success by how much manual work we eliminate. Every engagement targets specific processes for AI automation."
  },
  {
    title: "Tools You Own",
    description: "All AI systems and automations we build belong to you. No vendor lock-in, no ongoing licensing fees—just solutions that work."
  }
]

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-mono-50 pt-40 pb-16">
        <div className="container">
          <div className="max-w-4xl">
            <h1 className="mb-6 font-display font-extralight tracking-tighter text-mono-900">
              About
              <span className="block text-gradient-cool font-light mt-2">Fractional AI Partners</span>
            </h1>
            <p className="text-large text-mono-700 leading-relaxed max-w-3xl">
              We're fractional CFOs, CTOs, CMOs, and COOs who don't just advise—we implement. 
              Our leaders combine C-suite expertise with hands-on AI implementation skills, building 
              automation solutions that transform how your business operates.
            </p>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <h2 className="text-3xl font-semibold text-primary-900 mb-6">Our Mission</h2>
              <p className="text-lg text-primary-600 leading-relaxed mb-8">
                To provide fractional C-suite leaders who bring AI implementation expertise. While traditional 
                fractional CFOs provide financial analysis, ours also build AI-powered forecasting systems. 
                Where typical CTOs plan tech strategy, ours implement AI automation across your stack.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary-900 mb-6">Our Approach</h2>
              <p className="text-lg text-primary-600 leading-relaxed">
                Every fractional leader comes with an AI implementation team. Your fractional CFO doesn't just 
                analyze finances—they deploy AI tools for automated reporting and predictive analytics. Your 
                fractional CTO builds AI-first architectures and automates your development workflows.
              </p>
            </div>
            
            <div className="bg-gray-50 p-8 rounded-lg">
              <h3 className="text-xl font-semibold text-primary-900 mb-6">By the Numbers</h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary-900">50+</div>
                  <div className="text-primary-600">Enterprise Clients</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary-900">$50M+</div>
                  <div className="text-primary-600">Value Created</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary-900">95%</div>
                  <div className="text-primary-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-semibold text-primary-900">100+</div>
                  <div className="text-primary-600">AI Systems Deployed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team */}
      <section className="bg-gray-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-primary-900 mb-4">Leadership Team</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              Our partners bring decades of experience from leading technology companies and research institutions.
            </p>
          </div>
          
          <div className="space-y-12">
            {leadership.map((leader, index) => (
              <div key={index} className="bg-white rounded-lg p-8 shadow-sm">
                <div className="grid md:grid-cols-3 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-primary-900 mb-2">{leader.name}</h3>
                    <p className="text-lg text-primary-600 font-medium mb-4">{leader.role}</p>
                    <p className="text-primary-700 mb-2">{leader.background}</p>
                    <p className="text-primary-600 text-sm">{leader.credentials}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-3">Experience</h4>
                    <p className="text-primary-700">{leader.experience}</p>
                  </div>
                  
                  <div>
                    <h4 className="font-semibold text-primary-900 mb-3">Areas of Expertise</h4>
                    <div className="space-y-1">
                      {leader.expertise.map((area, areaIndex) => (
                        <div key={areaIndex} className="flex items-center space-x-2">
                          <div className="w-1.5 h-1.5 bg-primary-900 rounded-full"></div>
                          <span className="text-primary-700">{area}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-semibold text-primary-900 mb-4">Our Values</h2>
            <p className="text-xl text-primary-600 max-w-2xl mx-auto">
              The principles that guide our approach to AI consulting and client relationships.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8">
            {values.map((value, index) => (
              <div key={index} className="p-6">
                <h3 className="text-xl font-semibold text-primary-900 mb-4">{value.title}</h3>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gray-50 py-20">
        <div className="container text-center">
          <div className="max-w-2xl mx-auto">
            <h2 className="text-3xl font-semibold text-primary-900 mb-6">
              Ready to Work Together?
            </h2>
            <p className="text-xl text-primary-600 mb-8">
              Let's discuss how our fractional leaders can bring both C-suite expertise and AI implementation to transform your operations.
            </p>
            <a href="/contact" className="btn-primary">
              Schedule a Consultation
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}