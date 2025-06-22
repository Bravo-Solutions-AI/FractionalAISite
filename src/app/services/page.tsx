import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const services = [
  {
    title: "Fractional CFO + AI Implementation",
    description: "Get a CFO who doesn't just analyze finances—they build AI systems that automate your financial operations.",
    capabilities: [
      "Deploy AI-powered financial forecasting that updates in real-time",
      "Build automated reporting dashboards that save 20+ hours weekly",
      "Implement intelligent expense management with anomaly detection",
      "Create predictive cash flow models with 95%+ accuracy",
      "Automate compliance monitoring and risk assessment",
      "Set up AI-driven investment analysis and portfolio optimization"
    ],
    engagementModel: "Part-time CFO (1-3 days/week) + dedicated AI implementation team",
    idealFor: "Companies wanting financial leadership that modernizes operations through automation"
  },
  {
    title: "Fractional CTO + AI Engineering",
    description: "A CTO who architects your tech strategy AND implements AI solutions across your entire technology stack.",
    capabilities: [
      "Build AI-powered development workflows that ship code 3x faster",
      "Implement automated testing and deployment pipelines",
      "Deploy intelligent monitoring systems that predict outages",
      "Create AI code review tools that improve quality",
      "Set up automated security scanning and remediation",
      "Develop custom AI tools specific to your tech needs"
    ],
    engagementModel: "Strategic CTO leadership + hands-on AI engineering team",
    idealFor: "Tech companies ready to transform development with AI-first practices"
  },
  {
    title: "Fractional CMO + Marketing Automation",
    description: "Marketing leadership that implements AI to personalize customer experiences and automate campaigns at scale.",
    capabilities: [
      "Deploy AI content generation systems for consistent messaging",
      "Build automated customer segmentation and targeting",
      "Implement predictive lead scoring that doubles conversion",
      "Create personalization engines for omnichannel campaigns",
      "Automate social media management and optimization",
      "Set up AI-driven SEO and SEM optimization tools"
    ],
    engagementModel: "Part-time CMO with dedicated marketing automation specialists",
    idealFor: "Businesses ready to scale marketing through AI-powered automation"
  },
  {
    title: "Fractional COO + Operations AI",
    description: "Operations leadership that deploys AI to streamline workflows, optimize supply chains, and eliminate inefficiencies.",
    capabilities: [
      "Implement AI-powered process optimization across departments",
      "Build intelligent workflow automation systems",
      "Deploy predictive maintenance to reduce downtime 60%+",
      "Create AI supply chain optimization tools",
      "Automate quality control with computer vision",
      "Develop resource allocation algorithms that cut costs 30%+"
    ],
    engagementModel: "COO expertise combined with operations automation team",
    idealFor: "Companies seeking operational transformation through AI automation"
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
              Fractional Leaders Who
              <span className="block text-gradient-cool font-light mt-2">Implement AI Solutions</span>
            </h1>
            <p className="text-large text-mono-700 leading-relaxed max-w-3xl">
              Unlike traditional fractional executives who only advise, our leaders come with AI implementation 
              teams. They don't just create strategies—they build and deploy automation solutions that 
              transform how your business operates.
            </p>
          </div>
        </div>
      </section>

      {/* Key Differentiator */}
      <section className="py-12 bg-white">
        <div className="container">
          <div className="bg-gradient-to-br from-accent-cool-50 to-white rounded-3xl p-12 shadow-glass max-w-5xl mx-auto">
            <h2 className="text-2xl font-display font-light tracking-tight text-mono-900 mb-8 text-center">
              The Fractional AI Partners Difference
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <div className="w-8 h-8 bg-accent-cool-600 rounded-lg"></div>
                </div>
                <h3 className="font-medium text-mono-900 mb-2">Traditional Fractional</h3>
                <p className="text-mono-600 text-sm">Provides analysis and recommendations</p>
              </div>
              <div className="flex items-center justify-center">
                <div className="text-3xl text-accent-cool-600">→</div>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-cool-600 rounded-2xl flex items-center justify-center mx-auto mb-4 shadow-md">
                  <div className="w-8 h-8 bg-white rounded-lg"></div>
                </div>
                <h3 className="font-medium text-mono-900 mb-2">Our Fractional + AI</h3>
                <p className="text-mono-600 text-sm">Implements AI solutions that work 24/7</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Details */}
      <section className="py-20">
        <div className="container">
          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                  <h2 className="text-2xl font-display font-light tracking-tight text-mono-900 mb-4">
                    {service.title}
                  </h2>
                  <p className="text-mono-600 leading-relaxed font-light mb-6">
                    {service.description}
                  </p>
                  <div className="bg-mono-50 rounded-xl p-6">
                    <h3 className="text-sm font-medium text-mono-900 mb-2">Engagement Model</h3>
                    <p className="text-mono-600 font-light text-sm mb-4">{service.engagementModel}</p>
                    
                    <h3 className="text-sm font-medium text-mono-900 mb-2">Ideal For</h3>
                    <p className="text-mono-600 font-light text-sm">{service.idealFor}</p>
                  </div>
                </div>
                
                <div className="lg:col-span-2">
                  <div className="bg-white rounded-2xl p-8 shadow-glass border border-mono-100">
                    <h3 className="text-lg font-medium text-mono-900 mb-6">What We Actually Build & Deploy</h3>
                    <div className="grid md:grid-cols-2 gap-x-8 gap-y-4">
                      {service.capabilities.map((capability, capIndex) => (
                        <div key={capIndex} className="flex items-start space-x-3">
                          <div className="w-5 h-5 bg-accent-cool-100 rounded-lg flex items-center justify-center flex-shrink-0 mt-0.5">
                            <div className="w-2 h-2 bg-accent-cool-600 rounded-full"></div>
                          </div>
                          <span className="text-mono-600 font-light text-sm leading-relaxed">{capability}</span>
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

      {/* Implementation Process */}
      <section className="bg-mono-50 py-20">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 font-display font-extralight tracking-tighter text-mono-900">
              From Strategy to Live AI Systems
            </h2>
            <p className="text-large text-mono-700 max-w-3xl mx-auto leading-relaxed">
              Our fractional leaders follow a proven process to deliver both executive guidance and working AI solutions.
            </p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { 
                step: "Week 1", 
                title: "Assess & Plan", 
                description: "Your fractional leader evaluates current operations and identifies AI automation opportunities" 
              },
              { 
                step: "Week 2-4", 
                title: "Build & Test", 
                description: "Our AI team develops initial automation solutions while your leader refines strategy" 
              },
              { 
                step: "Week 4-8", 
                title: "Deploy & Scale", 
                description: "AI systems go live, automating manual tasks while your leader manages the transformation" 
              },
              { 
                step: "Ongoing", 
                title: "Optimize & Expand", 
                description: "Continuous improvement of AI systems while identifying new automation opportunities" 
              }
            ].map((phase, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-accent-cool-600 text-white rounded-2xl flex items-center justify-center text-sm font-medium mx-auto mb-6">
                  {phase.step}
                </div>
                <h3 className="text-lg font-medium text-mono-900 mb-3">{phase.title}</h3>
                <p className="text-mono-600 font-light text-sm leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Results Focus */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-display font-light tracking-tight text-mono-900 text-center mb-12">
              Real Implementation, Real Results
            </h2>
            <div className="grid md:grid-cols-2 gap-12">
              <div className="bg-gradient-to-br from-white to-mono-50 rounded-2xl p-8 shadow-glass">
                <h3 className="text-xl font-medium text-mono-900 mb-6">What Traditional Fractionals Deliver</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-mono-400">•</span>
                    <span className="text-mono-600">Strategic recommendations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-mono-400">•</span>
                    <span className="text-mono-600">Process documentation</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-mono-400">•</span>
                    <span className="text-mono-600">Vendor evaluations</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-mono-400">•</span>
                    <span className="text-mono-600">Team coaching</span>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gradient-to-br from-accent-cool-50 to-white rounded-2xl p-8 shadow-glass border-2 border-accent-cool-200">
                <h3 className="text-xl font-medium text-mono-900 mb-6">What We Actually Deploy</h3>
                <ul className="space-y-3">
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-cool-600">✓</span>
                    <span className="text-mono-700 font-medium">Working AI automation systems</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-cool-600">✓</span>
                    <span className="text-mono-700 font-medium">Custom-built AI tools for your business</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-cool-600">✓</span>
                    <span className="text-mono-700 font-medium">Automated workflows saving 20+ hours/week</span>
                  </li>
                  <li className="flex items-start space-x-3">
                    <span className="text-accent-cool-600">✓</span>
                    <span className="text-mono-700 font-medium">AI systems you own completely</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-mono-50">
        <div className="container text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="mb-6 font-display font-extralight tracking-tighter text-mono-900">
              Ready for Leaders Who Build?
            </h2>
            <p className="text-large text-mono-700 mb-12 leading-relaxed">
              Stop paying for advice alone. Get fractional executives who implement AI solutions 
              that transform your operations from day one.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/contact" className="btn-accent hover-scale text-lg px-10 py-5">
                See How It Works
              </a>
              <a href="/case-studies" className="btn-secondary hover-scale text-lg px-10 py-5">
                View Real Results
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}