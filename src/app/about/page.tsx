import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const leadership = [
  {
    name: "Dr. Sarah Kim",
    role: "Founder & Managing Partner",
    background: "Former Chief AI Officer at Google Cloud",
    credentials: "PhD in Machine Learning, Stanford University",
    experience: "15+ years in enterprise AI",
    expertise: ["AI Strategy", "Executive Leadership", "Technology Transformation"]
  },
  {
    name: "Marcus Chen", 
    role: "Partner, Engineering",
    background: "Former Principal Engineer at Amazon AI",
    credentials: "MS Computer Science, MIT",
    experience: "12+ years scaling AI systems",
    expertise: ["ML Engineering", "System Architecture", "Team Building"]
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Partner, Research & Innovation", 
    background: "Former Senior Scientist at Facebook AI Research",
    credentials: "PhD in Natural Language Processing, CMU",
    experience: "50+ published research papers",
    expertise: ["AI Research", "NLP", "Innovation Strategy"]
  }
]

const values = [
  {
    title: "Executive Excellence",
    description: "We bring senior-level expertise and strategic thinking to every engagement, ensuring decisions are made at the appropriate level."
  },
  {
    title: "Results-Driven",
    description: "Our success is measured by your business outcomes. We focus on delivering measurable value and sustainable competitive advantages."
  },
  {
    title: "Knowledge Transfer",
    description: "We build capabilities within your organization, ensuring long-term success and independence in AI initiatives."
  },
  {
    title: "Industry Focus",
    description: "Deep expertise in specific verticals allows us to understand your unique challenges and regulatory requirements."
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
              We are senior AI executives and practitioners who have built and scaled AI capabilities 
              at the world's leading technology companies. Now we bring that expertise directly to your organization.
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
                To democratize access to world-class AI leadership and expertise, enabling organizations 
                of all sizes to successfully implement and scale artificial intelligence capabilities.
              </p>
              
              <h2 className="text-3xl font-semibold text-primary-900 mb-6">Our Approach</h2>
              <p className="text-lg text-primary-600 leading-relaxed">
                We serve as your fractional AI executives, providing strategic guidance, hands-on implementation, 
                and organizational development. Our team integrates seamlessly with your leadership to drive 
                successful AI transformation.
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
              Let's discuss how our fractional AI executive services can accelerate your AI transformation.
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