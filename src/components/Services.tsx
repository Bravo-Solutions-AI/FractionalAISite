import { CheckCircleIcon, ArrowRightIcon, LightningIcon, BrainIcon, RocketIcon, TargetIcon } from './icons'

const services = [
  {
    title: "Fractional CFO + AI",
    subtitle: "Finance Automation",
    duration: "3-12 months",
    pricing: "Contact for pricing",
    description: "Get a fractional CFO who implements AI-powered financial automation, from forecasting to reporting and compliance.",
    icon: BrainIcon,
    features: [
      "AI-powered financial forecasting & modeling",
      "Automated reporting & dashboard systems", 
      "Intelligent expense management automation",
      "Cash flow optimization with predictive analytics",
      "Automated compliance & risk monitoring",
      "AI-driven investment analysis",
      "Real-time financial insights platform"
    ],
    deliverables: [
      "Automated Financial Dashboard",
      "AI Forecasting Models", 
      "Process Automation Playbook",
      "Custom Financial AI Tools"
    ],
    ideal: "Growing companies needing strategic finance leadership with modern automation"
  },
  {
    title: "Fractional CTO + AI", 
    subtitle: "Tech Transformation",
    duration: "3-12 months",
    pricing: "Contact for pricing",
    description: "Hire a fractional CTO who builds AI-first technology strategies and implements automation across your tech stack.",
    icon: LightningIcon,
    features: [
      "AI-powered development workflows",
      "Automated testing & deployment pipelines",
      "Intelligent monitoring & alerting systems", 
      "AI code review & optimization tools",
      "Automated security scanning & remediation",
      "Machine learning infrastructure setup",
      "Team AI skills development program"
    ],
    deliverables: [
      "AI-Enhanced Tech Stack",
      "Automation Playbooks",
      "ML Infrastructure",
      "Team Training Materials"
    ],
    ideal: "Companies modernizing their technology with AI-driven development practices",
    popular: true
  },
  {
    title: "Fractional CMO + AI",
    subtitle: "Marketing Automation", 
    duration: "3-12 months",
    pricing: "Contact for pricing",
    description: "Get a fractional CMO who leverages AI to automate marketing operations and personalize customer experiences at scale.",
    icon: RocketIcon,
    features: [
      "AI-powered content generation systems",
      "Automated customer segmentation",
      "Predictive lead scoring & routing",
      "Personalization engines for campaigns",
      "Automated social media management",
      "AI-driven SEO & SEM optimization",
      "Customer journey automation"
    ],
    deliverables: [
      "Marketing Automation Platform", 
      "AI Content Systems",
      "Personalization Engine",
      "Performance Analytics"
    ],
    ideal: "Businesses ready to scale marketing with AI-powered automation and insights"
  },
  {
    title: "Fractional COO + AI",
    subtitle: "Operations Automation",
    duration: "3-12 months", 
    pricing: "Contact for pricing",
    description: "Hire a fractional COO who implements AI to streamline operations, optimize supply chains, and automate workflows.",
    icon: TargetIcon,
    features: [
      "AI-powered process optimization",
      "Intelligent workflow automation",
      "Predictive maintenance systems",
      "Supply chain AI optimization",
      "Automated quality control",
      "Resource allocation algorithms",
      "Real-time operations analytics"
    ],
    deliverables: [
      "Automated Operations Platform",
      "Process Optimization Models", 
      "Workflow Automation Tools",
      "Operations Dashboard"
    ],
    ideal: "Companies seeking to transform operations with AI-driven efficiency gains"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Match & Assess",
    description: "We match you with a fractional leader who has deep AI expertise in your specific industry and challenges.",
    duration: "Week 1"
  },
  {
    step: "02", 
    title: "Automate & Build",
    description: "Your fractional leader identifies automation opportunities and begins implementing AI solutions immediately.",
    duration: "Week 2-4"
  },
  {
    step: "03",
    title: "Deploy & Scale", 
    description: "AI systems go live with continuous optimization, turning manual processes into automated workflows.",
    duration: "Week 4-8"
  },
  {
    step: "04",
    title: "Measure & Grow",
    description: "Track ROI as automation reduces costs and your fractional leader scales successful solutions across the organization.",
    duration: "Ongoing"
  }
]

export default function Services() {
  return (
    <section id="services" className="section bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
            <LightningIcon className="w-4 h-4" />
            <span>Flexible Engagement Models</span>
          </div>
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Fractional Leaders Who
            <br />
            <span className="text-gradient">Build AI Solutions</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            Hire fractional CFOs, CTOs, CMOs, and COOs who don't just advise—they implement 
            cutting-edge AI automation that transforms how your business operates.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-2 gap-8 mb-20">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <div 
                key={index} 
                className={`card p-8 relative group hover:shadow-hard transition-all duration-500 ${
                  service.popular ? 'ring-2 ring-blue-500 transform scale-[1.02]' : ''
                }`}
              >
                {service.popular && (
                  <div className="absolute -top-4 left-8">
                    <span className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-semibold shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}
                
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-xl flex items-center justify-center group-hover:bg-blue-600 transition-colors duration-300">
                      <IconComponent className="w-6 h-6 text-blue-600 group-hover:text-white transition-colors duration-300" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-primary-900">{service.title}</h3>
                      <p className="text-blue-600 font-semibold">{service.subtitle}</p>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4 mb-6">
                  <span className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium">
                    {service.duration}
                  </span>
                  <span className="text-lg font-semibold text-primary-600">
                    {service.pricing}
                  </span>
                </div>
                
                <p className="text-primary-600 mb-6 leading-relaxed">{service.description}</p>
                
                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-semibold text-primary-900 mb-4">What's Included:</h4>
                  <div className="grid grid-cols-1 gap-2">
                    {service.features.slice(0, 4).map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-start space-x-3">
                        <CheckCircleIcon className="w-4 h-4 text-success-500 mt-0.5 flex-shrink-0" />
                        <span className="text-primary-700 text-sm">{feature}</span>
                      </div>
                    ))}
                    {service.features.length > 4 && (
                      <div className="text-sm text-blue-600 font-medium mt-2">
                        +{service.features.length - 4} more features
                      </div>
                    )}
                  </div>
                </div>
                
                {/* Ideal For */}
                <div className="mb-6 p-4 bg-primary-50 rounded-lg">
                  <h5 className="font-semibold text-primary-900 mb-2">Ideal For:</h5>
                  <p className="text-primary-700 text-sm">{service.ideal}</p>
                </div>
                
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className={`btn group flex-1 ${
                    service.popular ? 'btn-primary' : 'btn-secondary'
                  }`}>
                    Get Started
                    <ArrowRightIcon className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                  </button>
                  <button className="btn-ghost">
                    Learn More
                  </button>
                </div>
              </div>
            )
          })}
        </div>

        {/* Process Section */}
        <div className="bg-primary-50 rounded-2xl p-12">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              Our Proven Process
            </h3>
            <p className="text-xl text-primary-600">
              A systematic approach that ensures success from day one
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <div key={index} className="relative">
                {index < processSteps.length - 1 && (
                  <div className="hidden lg:block absolute top-6 left-full w-full h-0.5 bg-primary-200 transform translate-x-4"></div>
                )}
                <div className="text-center">
                  <div className="w-12 h-12 bg-blue-600 text-white rounded-xl flex items-center justify-center text-xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <h4 className="text-lg font-bold text-primary-900 mb-2">{step.title}</h4>
                  <p className="text-primary-600 text-sm mb-2">{step.description}</p>
                  <div className="text-xs text-blue-600 font-semibold">{step.duration}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <h3 className="text-2xl font-bold text-primary-900 mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-primary-600 mb-8 max-w-2xl mx-auto">
            Schedule a free consultation to discuss your AI needs and get a customized proposal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="btn-primary btn-lg">
              Schedule Free Consultation
            </button>
            <button className="btn-secondary btn-lg">
              Download Service Overview
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}