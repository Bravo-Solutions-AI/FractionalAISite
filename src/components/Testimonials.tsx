import { StarIcon } from './icons'

const testimonials = [
  {
    content: "Our fractional CFO didn't just analyze our finances—they built an AI forecasting system that updates in real-time. We now have predictive cash flow models with 97% accuracy, saving us 30 hours of manual work weekly.",
    author: "Sarah Chen",
    role: "CEO",
    company: "TechFlow Solutions",
    avatar: "SC",
    rating: 5,
    results: "30 hours/week saved"
  },
  {
    content: "We hired a fractional CTO expecting strategy meetings. Instead, they deployed AI-powered CI/CD pipelines that cut our deployment time by 75%. Their team automated our entire testing suite in just 4 weeks.",
    author: "Michael Rodriguez",
    role: "VP of Engineering", 
    company: "DataStream Corp",
    avatar: "MR",
    rating: 5,
    results: "75% faster deployments"
  },
  {
    content: "Our fractional CMO implemented AI content generation and automated lead scoring. Marketing efficiency increased 3x, and we're generating personalized campaigns at scale. This isn't consulting—it's transformation.",
    author: "Emma Thompson",
    role: "Head of Growth",
    company: "RetailMax",
    avatar: "ET",
    rating: 5,
    results: "3x marketing efficiency"
  }
]

const caseStudies = [
  {
    title: "CFO + AI: Automated Financial Operations",
    industry: "SaaS",
    challenge: "Manual financial reporting taking 40+ hours monthly",
    solution: "Fractional CFO deployed AI-powered reporting dashboards and predictive analytics",
    results: ["Real-time financial insights", "95% reduction in reporting time", "$400K annual savings"],
    tech: ["AI Forecasting", "Automated Dashboards", "Anomaly Detection"]
  },
  {
    title: "CTO + AI: Development Automation", 
    industry: "FinTech",
    challenge: "Slow release cycles and manual code reviews",
    solution: "Fractional CTO implemented AI-driven development workflows and automated testing",
    results: ["3x faster code shipping", "80% fewer production bugs", "24/7 automated monitoring"],
    tech: ["AI Code Review", "Automated Testing", "Predictive Monitoring"]
  },
  {
    title: "COO + AI: Operations Transformation",
    industry: "Manufacturing", 
    challenge: "Inefficient workflows and manual quality control",
    solution: "Fractional COO deployed AI process optimization and computer vision QC",
    results: ["60% efficiency gain", "90% defect detection", "$2M cost reduction"],
    tech: ["Process Automation", "Computer Vision", "Workflow AI"]
  }
]

export default function Testimonials() {
  return (
    <section id="case-studies" className="section bg-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Leaders Who Build, Not Just Advise
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            See how our fractional executives deploy AI solutions that transform operations from day one.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid lg:grid-cols-3 gap-8 mb-20">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card card-hover p-8">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 text-accent-400 fill-current" />
                ))}
              </div>
              
              <blockquote className="text-primary-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </blockquote>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-semibold">
                  {testimonial.avatar}
                </div>
                <div>
                  <div className="font-semibold text-primary-900">{testimonial.author}</div>
                  <div className="text-sm text-primary-600">{testimonial.role}</div>
                  <div className="text-sm text-primary-500">{testimonial.company}</div>
                </div>
              </div>
              
              <div className="mt-4 pt-4 border-t border-primary-200">
                <div className="text-sm font-semibold text-success-600">{testimonial.results}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Studies */}
        <div>
          <h3 className="text-3xl font-bold text-primary-900 text-center mb-12">
            AI Implementation Case Studies
          </h3>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <div key={index} className="card p-8 group hover:shadow-hard transition-all duration-300">
                <div className="mb-6">
                  <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium mb-4">
                    {study.industry}
                  </div>
                  <h4 className="text-xl font-bold text-primary-900 mb-3">
                    {study.title}
                  </h4>
                </div>
                
                <div className="space-y-4 mb-6">
                  <div>
                    <h5 className="font-semibold text-primary-800 mb-2">Challenge</h5>
                    <p className="text-primary-600 text-sm">{study.challenge}</p>
                  </div>
                  
                  <div>
                    <h5 className="font-semibold text-primary-800 mb-2">What We Built</h5>
                    <p className="text-primary-600 text-sm">{study.solution}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-primary-800 mb-3">Measurable Impact</h5>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-success-500 rounded-full"></div>
                        <span className="text-sm text-primary-700 font-medium">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="pt-4 border-t border-primary-200">
                  <div className="flex flex-wrap gap-2">
                    {study.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                
                <button className="mt-6 text-blue-600 hover:text-blue-700 font-medium text-sm group-hover:underline">
                  Read Full Case Study →
                </button>
              </div>
            ))}
          </div>
        </div>
        
        {/* CTA */}
        <div className="text-center mt-16">
          <h4 className="text-xl text-primary-700 mb-6">
            Ready for fractional leaders who implement AI solutions?
          </h4>
          <button className="btn-primary btn-lg">
            See How We Can Help
          </button>
        </div>
      </div>
    </section>
  )
}