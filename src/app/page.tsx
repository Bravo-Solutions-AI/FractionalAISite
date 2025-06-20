import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import Footer from '@/components/Footer'

const services = [
  {
    title: "Fractional CFO + AI Financial Intelligence",
    description: "Expert financial leadership enhanced with AI-driven insights. Optimize cash flow, strategic planning, and financial operations while accessing predictive analytics for smarter business decisions.",
    approach: "Financial strategy, budgeting & forecasting, AI-powered financial modeling, and performance optimization."
  },
  {
    title: "Fractional CTO + AI Technology Strategy", 
    description: "Senior technology leadership that integrates AI into your tech stack. Build scalable systems, lead digital transformation, and leverage AI to accelerate product development and operational efficiency.",
    approach: "Technology roadmaps, AI implementation, system architecture, and team development."
  },
  {
    title: "Fractional CMO + AI Marketing Automation",
    description: "Strategic marketing leadership powered by AI insights. Scale your brand with data-driven campaigns, automated customer journeys, and predictive marketing analytics that drive measurable growth.",
    approach: "Marketing strategy, AI-powered analytics, automation systems, and performance tracking."
  },
  {
    title: "Fractional COO + AI Operations Optimization",
    description: "Operational excellence through AI-enhanced process optimization. Streamline workflows, implement intelligent automation, and use predictive analytics to improve efficiency and reduce costs.",
    approach: "Operations strategy, process automation, AI diagnostics, and continuous improvement."
  }
]

const capabilities = [
  {
    area: "Discovery & Assessment",
    description: "AI-powered business diagnostics that identify inefficiencies, opportunities, and the right fractional executive fit for your specific challenges and goals."
  },
  {
    area: "Strategic Implementation",
    description: "Experienced fractional executives work directly with your team to execute data-driven strategies with measurable deliverables and performance metrics."
  },
  {
    area: "Scalable Engagement",
    description: "Flexible consulting models that adapt to your needs—from one-time strategic planning to ongoing operational support and leadership coaching."
  }
]

const results = [
  {
    metric: "60%",
    description: "Average cost savings vs. full-time executive hiring within first year"
  },
  {
    metric: "3x",
    description: "Faster strategic implementation with AI-enhanced decision making"
  },
  {
    metric: "200+",
    description: "Successful fractional executive engagements across diverse industries"
  }
]

export default function Home() {
  return (
    <main className="bg-white">
      <Navigation />
      <Hero />
      
      {/* Services Section */}
      <section className="pt-16 pb-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-6 font-display font-extralight tracking-tighter">
              Fractional Executive Services Enhanced with AI
            </h2>
            <p className="text-large max-w-3xl mx-auto leading-relaxed">
              Access C-level expertise precisely when you need it, enhanced with AI-powered insights and performance-based engagements.
            </p>
          </div>

          <div className="space-y-16">
            {services.map((service, index) => (
              <div key={index} className={`grid lg:grid-cols-2 gap-16 items-center ${
                index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''
              }`}>
                <div className={`${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                  <h3 className="text-3xl font-display font-light tracking-tight mb-6 text-mono-900">
                    {service.title}
                  </h3>
                  <p className="text-large leading-relaxed text-mono-700 font-light mb-8">
                    {service.description}
                  </p>
                  <div className="bg-mono-50 rounded-2xl p-8 border-l-4 border-accent-cool-600">
                    <p className="font-light text-mono-600 leading-relaxed">
                      {service.approach}
                    </p>
                  </div>
                </div>
                
                <div className={`${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                  <div className="relative">
                    {index === 0 && (
                      <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-12 shadow-premium">
                        <div className="space-y-8">
                          <div className="flex items-center justify-between mb-8">
                            <h4 className="font-medium text-mono-900">AI Strategy Dashboard</h4>
                            <div className="w-12 h-12 bg-accent-cool-600 rounded-full flex items-center justify-center">
                              <div className="w-6 h-6 rounded-full bg-white"></div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                              <span className="text-mono-700 font-light">Market Analysis</span>
                              <div className="w-20 h-2 bg-accent-cool-600 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                              <span className="text-mono-700 font-light">Implementation Plan</span>
                              <div className="w-16 h-2 bg-accent-cool-500 rounded-full"></div>
                            </div>
                            <div className="flex items-center justify-between p-4 bg-white rounded-xl">
                              <span className="text-mono-700 font-light">ROI Projection</span>
                              <div className="w-24 h-2 bg-accent-cool-400 rounded-full"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 1 && (
                      <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-12 shadow-premium">
                        <div className="space-y-8">
                          <div className="flex items-center justify-between mb-8">
                            <h4 className="font-medium text-mono-900">Analytics Performance</h4>
                            <div className="flex space-x-2">
                              <div className="w-3 h-3 bg-accent-cool-600 rounded-full"></div>
                              <div className="w-3 h-3 bg-accent-cool-500 rounded-full"></div>
                              <div className="w-3 h-3 bg-accent-cool-400 rounded-full"></div>
                            </div>
                          </div>
                          <div className="grid grid-cols-3 gap-4">
                            <div className="bg-white rounded-2xl p-6 text-center">
                              <div className="text-2xl font-extralight text-accent-cool-600 mb-2">94%</div>
                              <div className="text-xs text-mono-600 font-light">Accuracy</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center">
                              <div className="text-2xl font-extralight text-accent-cool-600 mb-2">3.2s</div>
                              <div className="text-xs text-mono-600 font-light">Response</div>
                            </div>
                            <div className="bg-white rounded-2xl p-6 text-center">
                              <div className="text-2xl font-extralight text-accent-cool-600 mb-2">99.9%</div>
                              <div className="text-xs text-mono-600 font-light">Uptime</div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 2 && (
                      <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-12 shadow-premium">
                        <div className="space-y-8">
                          <div className="flex items-center justify-between mb-8">
                            <h4 className="font-medium text-mono-900">Process Automation</h4>
                            <div className="w-8 h-8 bg-accent-cool-600 rounded-lg flex items-center justify-center">
                              <div className="w-4 h-4 bg-white rounded-sm"></div>
                            </div>
                          </div>
                          <div className="space-y-4">
                            <div className="bg-white rounded-xl p-4 flex items-center space-x-4">
                              <div className="w-12 h-12 bg-accent-cool-100 rounded-xl flex items-center justify-center">
                                <div className="w-6 h-6 bg-accent-cool-600 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-mono-800 font-medium text-sm">Workflow Optimization</div>
                                <div className="w-full h-2 bg-mono-100 rounded-full mt-2">
                                  <div className="w-4/5 h-2 bg-accent-cool-600 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                            <div className="bg-white rounded-xl p-4 flex items-center space-x-4">
                              <div className="w-12 h-12 bg-accent-cool-100 rounded-xl flex items-center justify-center">
                                <div className="w-6 h-6 bg-accent-cool-500 rounded-full"></div>
                              </div>
                              <div className="flex-1">
                                <div className="text-mono-800 font-medium text-sm">Task Automation</div>
                                <div className="w-full h-2 bg-mono-100 rounded-full mt-2">
                                  <div className="w-3/5 h-2 bg-accent-cool-500 rounded-full"></div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                    
                    {index === 3 && (
                      <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-12 shadow-premium">
                        <div className="space-y-8">
                          <div className="flex items-center justify-between mb-8">
                            <h4 className="font-medium text-mono-900">Product Development</h4>
                            <div className="flex space-x-1">
                              <div className="w-2 h-8 bg-accent-cool-600 rounded-full"></div>
                              <div className="w-2 h-6 bg-accent-cool-500 rounded-full"></div>
                              <div className="w-2 h-4 bg-accent-cool-400 rounded-full"></div>
                            </div>
                          </div>
                          <div className="bg-white rounded-2xl p-6">
                            <div className="grid grid-cols-2 gap-6">
                              <div className="text-center">
                                <div className="w-16 h-16 bg-accent-cool-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-accent-cool-600 rounded-lg"></div>
                                </div>
                                <div className="text-sm text-mono-700 font-light">3x Faster</div>
                              </div>
                              <div className="text-center">
                                <div className="w-16 h-16 bg-accent-cool-100 rounded-2xl mx-auto mb-4 flex items-center justify-center">
                                  <div className="w-8 h-8 bg-accent-cool-500 rounded-lg"></div>
                                </div>
                                <div className="text-sm text-mono-700 font-light">40% Less Cost</div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach Section */}
      <section className="py-20 bg-mono-50">
        <div className="container">
          <div className="text-center mb-16">
            <h2 className="mb-6 font-display font-extralight tracking-tighter">
              The AI-Enhanced Fractional Consulting Process
            </h2>
            <p className="text-large max-w-3xl mx-auto leading-relaxed">
              Structured methodology that combines executive expertise with AI-powered insights for maximum impact and accountability.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-16">
            {capabilities.map((capability, index) => (
              <div key={index} className="group">
                <div className="bg-white rounded-2xl p-8 shadow-glass hover-lift h-full border border-mono-100">
                  <div className="flex items-center mb-6">
                    <div className={`w-12 h-12 bg-gradient-to-br ${
                      index === 0 ? 'from-accent-cool-600 to-accent-cool-700' :
                      index === 1 ? 'from-accent-cool-500 to-accent-cool-600' :
                      'from-accent-cool-400 to-accent-cool-500'
                    } rounded-xl flex items-center justify-center mr-4`}>
                      <span className="text-white font-medium text-sm">{index + 1}</span>
                    </div>
                    <h3 className="text-lg font-display font-medium tracking-tight text-mono-900">
                      {capability.area}
                    </h3>
                  </div>
                  <p className="text-mono-600 leading-relaxed font-light mb-6">
                    {capability.description}
                  </p>
                  <button className="inline-flex items-center text-accent-cool-600 font-medium text-sm hover:text-accent-cool-700 transition-colors">
                    <span>Learn More</span>
                    <div className="w-4 h-4 ml-2 border-t-2 border-r-2 border-current transform rotate-45 transition-transform group-hover:translate-x-1"></div>
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Simplified Value Grid */}
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="bg-white rounded-2xl p-10 shadow-glass">
              <h3 className="text-2xl font-display font-light tracking-tight mb-8 text-mono-900">
                Why Choose AI-Powered Fractional Consulting?
              </h3>
              <div className="grid gap-6">
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-cool-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-mono-900 mb-2">Executive-Level Expertise</h4>
                    <p className="text-mono-600 font-light">Access seasoned C-level professionals enhanced with AI insights without full-time overhead</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-cool-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-mono-900 mb-2">Performance-Based Results</h4>
                    <p className="text-mono-600 font-light">Pay only for measurable deliverables with our engagement assurance model</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-8 h-8 bg-accent-cool-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-3 h-3 bg-white rounded-full"></div>
                  </div>
                  <div>
                    <h4 className="font-medium text-mono-900 mb-2">AI-Enhanced Decision Making</h4>
                    <p className="text-mono-600 font-light">Data-driven strategies powered by AI diagnostics and predictive analytics</p>
                  </div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-mono-100">
                <a href="/about" className="inline-flex items-center px-6 py-3 bg-accent-cool-600 text-white rounded-xl font-medium hover:bg-accent-cool-700 transition-colors hover-scale">
                  <span>Learn About Our Team</span>
                  <div className="w-4 h-4 ml-2 border-t-2 border-r-2 border-current transform rotate-45"></div>
                </a>
              </div>
            </div>

            <div className="bg-gradient-to-br from-white to-mono-50 rounded-2xl p-10 shadow-glass">
              <h3 className="text-2xl font-display font-light tracking-tight mb-8 text-mono-900">
                Proven Results
              </h3>
              <div className="grid grid-cols-2 gap-6">
                <div className="bg-white rounded-xl p-6 text-center shadow-glass">
                  <div className="text-3xl font-extralight text-accent-cool-600 mb-2">50%</div>
                  <div className="text-sm text-mono-600 font-light">Cost Reduction</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-glass">
                  <div className="text-3xl font-extralight text-accent-cool-600 mb-2">3x</div>
                  <div className="text-sm text-mono-600 font-light">Faster Delivery</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-glass">
                  <div className="text-3xl font-extralight text-accent-cool-600 mb-2">94%</div>
                  <div className="text-sm text-mono-600 font-light">Success Rate</div>
                </div>
                <div className="bg-white rounded-xl p-6 text-center shadow-glass">
                  <div className="text-3xl font-extralight text-accent-cool-600 mb-2">24h</div>
                  <div className="text-sm text-mono-600 font-light">Response Time</div>
                </div>
              </div>
              <div className="mt-8 pt-6 border-t border-mono-100">
                <a href="/case-studies" className="inline-flex items-center px-6 py-3 bg-white border border-accent-cool-600 text-accent-cool-600 rounded-xl font-medium hover:bg-accent-cool-50 transition-colors hover-scale">
                  <span>View Case Studies</span>
                  <div className="w-4 h-4 ml-2 border-t-2 border-r-2 border-current transform rotate-45"></div>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-white">
        <div className="container text-center">
          <h2 className="mb-4 font-display font-extralight tracking-tighter">
            Proven Results
          </h2>
          <p className="text-large mb-12 max-w-3xl mx-auto leading-relaxed">
            SMBs achieve measurable improvements through our AI-enhanced fractional consulting model.
          </p>
          
          <div className="grid md:grid-cols-3 gap-12">
            {results.map((result, index) => (
              <div key={index} className="bg-mono-50 rounded-2xl p-8 hover-lift">
                <div className="text-5xl font-extralight text-accent-cool-600 mb-4 tracking-tighter">{result.metric}</div>
                <p className="text-mono-700 leading-relaxed font-light">{result.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-white">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="mb-4 font-display font-extralight tracking-tighter text-mono-900">
              How We Work With You
            </h2>
            <p className="text-large text-mono-700 max-w-3xl mx-auto leading-relaxed">
              Our collaborative approach ensures seamless integration with your team and measurable results.
            </p>
          </div>
          
          <div className="max-w-6xl mx-auto">
            {/* Main Process Flow */}
            <div className="relative mb-16">
              <div className="grid lg:grid-cols-4 gap-8">
                {[
                  { 
                    step: "01", 
                    title: "Discovery",
                    description: "Understanding your business, challenges, and AI opportunities through strategic consultation.",
                    duration: "1-2 weeks"
                  },
                  { 
                    step: "02", 
                    title: "Strategy",
                    description: "Developing a comprehensive roadmap with clear priorities, timelines, and success metrics.",
                    duration: "1-2 weeks"
                  },
                  { 
                    step: "03", 
                    title: "Implementation",
                    description: "Building and deploying AI solutions using agile methodologies and best practices.",
                    duration: "8-12 weeks"
                  },
                  { 
                    step: "04", 
                    title: "Optimization",
                    description: "Fine-tuning performance, training your team, and ensuring sustainable long-term success.",
                    duration: "2-4 weeks"
                  }
                ].map((item, index) => (
                  <div key={index} className="relative">
                    <div className="bg-mono-50 rounded-3xl p-8 hover-lift h-full">
                      <div className="mb-6">
                        <div className="w-16 h-16 bg-accent-cool-600 rounded-2xl flex items-center justify-center mb-6">
                          <span className="text-white font-light text-lg">{item.step}</span>
                        </div>
                        <h3 className="text-xl font-display font-medium text-mono-900 mb-4 tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-mono-600 leading-relaxed font-light mb-6">
                          {item.description}
                        </p>
                      </div>
                      <div className="border-t border-mono-200 pt-4">
                        <span className="text-accent-cool-600 font-medium text-sm">{item.duration}</span>
                      </div>
                    </div>
                    
                    {/* Connection Line */}
                    {index < 3 && (
                      <div className="hidden lg:block absolute top-8 -right-4 w-8 h-0.5 bg-accent-cool-300 z-10"></div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Engagement Models */}
            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-12 shadow-glass">
                <h3 className="text-2xl font-display font-light text-mono-900 mb-8 tracking-tight">
                  Flexible Engagement Models
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-cool-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Project-Based</h4>
                      <p className="text-mono-600 font-light">Defined scope with clear deliverables and timelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-cool-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Retainer Model</h4>
                      <p className="text-mono-600 font-light">Ongoing support with dedicated monthly hours</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-cool-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Hybrid Approach</h4>
                      <p className="text-mono-600 font-light">Combination of project work and ongoing consultation</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-gradient-to-br from-white to-mono-50 rounded-3xl p-12 shadow-glass">
                <h3 className="text-2xl font-display font-light text-mono-900 mb-8 tracking-tight">
                  What Sets Us Apart
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-cool-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Senior Expertise</h4>
                      <p className="text-mono-600 font-light">Direct access to seasoned AI professionals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-cool-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Rapid Deployment</h4>
                      <p className="text-mono-600 font-light">Start within 2 weeks of engagement</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-6 h-6 bg-accent-cool-600 rounded-full mt-1 flex-shrink-0"></div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Knowledge Transfer</h4>
                      <p className="text-mono-600 font-light">Build internal capabilities for long-term success</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Success Metrics */}
            <div className="bg-mono-50 rounded-2xl p-12 text-center">
              <h3 className="text-2xl font-display font-light text-mono-900 mb-12 tracking-tight">
                Measuring Success Together
              </h3>
              <div className="grid md:grid-cols-4 gap-12">
                <div>
                  <div className="text-4xl font-extralight text-accent-cool-600 mb-3">ROI</div>
                  <div className="text-mono-600 font-light">Measurable return on investment</div>
                </div>
                <div>
                  <div className="text-4xl font-extralight text-accent-cool-600 mb-3">Speed</div>
                  <div className="text-mono-600 font-light">Faster time to market</div>
                </div>
                <div>
                  <div className="text-4xl font-extralight text-accent-cool-600 mb-3">Quality</div>
                  <div className="text-mono-600 font-light">Enterprise-grade solutions</div>
                </div>
                <div>
                  <div className="text-4xl font-extralight text-accent-cool-600 mb-3">Growth</div>
                  <div className="text-mono-600 font-light">Scalable AI capabilities</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-white to-mono-50 relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-accent-cool-100 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent-cool-50 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-5xl mx-auto">
            {/* Main CTA */}
            <div className="text-center mb-16">
              <h2 className="mb-6 font-display font-extralight tracking-tighter">
                Ready to Access Executive Expertise On-Demand?
              </h2>
              <p className="text-large mb-12 max-w-3xl mx-auto leading-relaxed">
                Join growing businesses who leverage our AI-enhanced fractional consulting to get C-level expertise precisely when they need it. 
                Performance-based engagements with measurable results.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-6 justify-center">
                <a href="/contact" className="btn-accent hover-scale text-lg px-12 py-5">
                  Find Your Fractional Executive
                </a>
                <a href="/services" className="btn-secondary hover-scale text-lg px-12 py-5">
                  Explore Executive Services
                </a>
              </div>
            </div>

            {/* Value Props Grid */}
            <div className="grid lg:grid-cols-2 gap-16">
              <div className="bg-white rounded-3xl p-12 shadow-premium">
                <h3 className="text-2xl font-display font-light mb-8 text-mono-900 tracking-tight">
                  What to Expect
                </h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-cool-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Free Initial Consultation</h4>
                      <p className="text-mono-600 font-light">30-minute discovery call to understand your needs and goals</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-cool-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Custom Proposal</h4>
                      <p className="text-mono-600 font-light">Tailored engagement plan with clear deliverables and timelines</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-8 h-8 bg-accent-cool-600 rounded-xl flex items-center justify-center flex-shrink-0 mt-1">
                      <div className="w-4 h-4 bg-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Rapid Start</h4>
                      <p className="text-mono-600 font-light">Begin implementation within 2 weeks of agreement</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-3xl p-12 shadow-premium">
                <h3 className="text-2xl font-display font-light mb-8 text-mono-900 tracking-tight">
                  Contact Information
                </h3>
                <div className="space-y-8">
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-accent-cool-100 rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent-cool-600 rounded-xl"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Direct Line</h4>
                      <p className="text-mono-600 font-light">Response within 24 hours</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-accent-cool-100 rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent-cool-600 rounded-xl"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Flexible Scheduling</h4>
                      <p className="text-mono-600 font-light">Available across time zones</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-6">
                    <div className="w-16 h-16 bg-accent-cool-100 rounded-2xl flex items-center justify-center">
                      <div className="w-8 h-8 bg-accent-cool-600 rounded-xl"></div>
                    </div>
                    <div>
                      <h4 className="font-medium text-mono-900 mb-2">Proven Track Record</h4>
                      <p className="text-mono-600 font-light">200+ successful implementations</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}