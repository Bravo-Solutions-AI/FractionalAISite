import { CheckCircleIcon, ArrowRightIcon, LightningIcon, BrainIcon, RocketIcon, TargetIcon } from './icons'

const services = [
  {
    title: "AI Discovery Sprint",
    subtitle: "Strategic Foundation",
    duration: "2-4 weeks",
    pricing: "Contact for pricing",
    description: "Comprehensive AI opportunity assessment and strategic roadmap tailored to your industry and business objectives.",
    icon: BrainIcon,
    features: [
      "Executive stakeholder interviews",
      "Technical infrastructure assessment", 
      "AI opportunity identification & prioritization",
      "Feasibility studies with risk analysis",
      "ROI projections and business case development",
      "12-month strategic AI roadmap",
      "Technology stack recommendations"
    ],
    deliverables: [
      "AI Strategy Document (50+ pages)",
      "Technical Architecture Blueprint", 
      "Implementation Roadmap",
      "Executive Presentation"
    ],
    ideal: "Companies new to AI or planning comprehensive AI transformation"
  },
  {
    title: "AI MVP Development", 
    subtitle: "Proof of Value",
    duration: "6-12 weeks",
    pricing: "Contact for pricing",
    description: "Rapid development of production-ready AI solutions with performance benchmarking and integration planning.",
    icon: LightningIcon,
    features: [
      "Requirements gathering & solution design",
      "Data pipeline development",
      "ML model development & training", 
      "API development & documentation",
      "Performance testing & optimization",
      "Security & compliance implementation",
      "Deployment to staging environment"
    ],
    deliverables: [
      "Production-ready AI solution",
      "Technical Documentation",
      "Performance Benchmarks",
      "Integration Guidelines"
    ],
    ideal: "Teams ready to build their first AI solution or validate a specific use case",
    popular: true
  },
  {
    title: "Embedded AI Team",
    subtitle: "Scale & Optimize", 
    duration: "3-12 months",
    pricing: "Contact for pricing",
    description: "Dedicated AI experts integrated into your team for ongoing development, optimization, and knowledge transfer.",
    icon: RocketIcon,
    features: [
      "Dedicated senior AI engineers",
      "Full-stack AI development",
      "Continuous model improvement",
      "A/B testing & optimization",
      "Team training & mentoring",
      "Code reviews & best practices",
      "Technology stack evolution"
    ],
    deliverables: [
      "Multiple AI Solutions", 
      "Trained Internal Team",
      "Operational Playbooks",
      "Performance Dashboards"
    ],
    ideal: "Organizations scaling AI capabilities with ongoing optimization needs"
  },
  {
    title: "AI Innovation Accelerator",
    subtitle: "Enterprise Transformation",
    duration: "6-18 months", 
    pricing: "Contact for pricing",
    description: "Comprehensive AI transformation program with multiple use cases, organizational change management, and governance.",
    icon: TargetIcon,
    features: [
      "Multi-workstream AI implementation",
      "Organizational change management",
      "AI governance & ethics framework",
      "Center of Excellence establishment",
      "Enterprise-wide training programs",
      "Vendor management & partnerships",
      "Success metrics & KPI tracking"
    ],
    deliverables: [
      "Enterprise AI Platform",
      "Governance Framework", 
      "Training Academy",
      "Success Metrics Dashboard"
    ],
    ideal: "Large enterprises pursuing organization-wide AI transformation"
  }
]

const processSteps = [
  {
    step: "01",
    title: "Discovery & Planning",
    description: "We start by understanding your business, challenges, and objectives through stakeholder interviews and technical assessments.",
    duration: "Week 1-2"
  },
  {
    step: "02", 
    title: "Solution Design",
    description: "Our experts design the optimal AI solution architecture, technology stack, and implementation approach for your needs.",
    duration: "Week 2-3"
  },
  {
    step: "03",
    title: "Development & Testing", 
    description: "Rapid development using proven frameworks, with continuous testing and optimization throughout the process.",
    duration: "Week 3-8"
  },
  {
    step: "04",
    title: "Deployment & Training",
    description: "Production deployment with comprehensive team training and knowledge transfer for long-term success.",
    duration: "Week 8-10"
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
            AI Solutions That Scale
            <br />
            <span className="text-gradient">With Your Business</span>
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto leading-relaxed">
            From strategic planning to full-scale implementation, we offer comprehensive AI services 
            designed to deliver measurable business impact at every stage of your AI journey.
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