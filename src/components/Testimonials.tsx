import { StarIcon } from './icons'

const testimonials = [
  {
    content: "Fractional AI Partners transformed our customer service with an AI chatbot that reduced response times by 80%. Their team understood our business needs immediately and delivered beyond expectations.",
    author: "Sarah Chen",
    role: "CTO",
    company: "TechFlow Solutions",
    avatar: "SC",
    rating: 5,
    results: "80% faster response times"
  },
  {
    content: "We went from concept to production AI in just 6 weeks. The knowledge transfer was exceptional - our team now maintains and improves the system independently.",
    author: "Michael Rodriguez",
    role: "VP of Operations", 
    company: "DataStream Corp",
    avatar: "MR",
    rating: 5,
    results: "6 weeks to production"
  },
  {
    content: "The ROI was immediate. Our AI-powered demand forecasting system reduced inventory costs by 35% in the first quarter alone. Worth every penny.",
    author: "Emma Thompson",
    role: "Chief Data Officer",
    company: "RetailMax",
    avatar: "ET",
    rating: 5,
    results: "35% cost reduction"
  }
]

const caseStudies = [
  {
    title: "Healthcare AI Diagnostic Assistant",
    industry: "Healthcare",
    challenge: "Manual diagnosis taking 2-3 hours per case",
    solution: "AI-powered diagnostic assistant with medical imaging analysis",
    results: ["90% accuracy improvement", "5x faster diagnosis", "$2M annual savings"],
    tech: ["Computer Vision", "Deep Learning", "Medical Imaging"]
  },
  {
    title: "Financial Fraud Detection System", 
    industry: "FinTech",
    challenge: "Rising fraud losses and false positives",
    solution: "Real-time ML fraud detection with behavioral analysis",
    results: ["95% fraud detection rate", "60% reduction in false positives", "$5M loss prevention"],
    tech: ["Machine Learning", "Real-time Analytics", "Behavioral Analysis"]
  },
  {
    title: "Supply Chain Optimization Platform",
    industry: "Manufacturing", 
    challenge: "Inefficient inventory management and demand forecasting",
    solution: "AI-driven supply chain optimization with predictive analytics",
    results: ["40% inventory reduction", "25% cost savings", "99% forecast accuracy"],
    tech: ["Predictive Analytics", "Optimization Algorithms", "IoT Integration"]
  }
]

export default function Testimonials() {
  return (
    <section id="case-studies" className="section bg-primary-50">
      <div className="container">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
            Proven Results, Happy Clients
          </h2>
          <p className="text-xl text-primary-600 max-w-3xl mx-auto">
            See how we've helped companies across industries deploy AI solutions that drive real business impact.
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
            Featured Case Studies
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
                    <h5 className="font-semibold text-primary-800 mb-2">Solution</h5>
                    <p className="text-primary-600 text-sm">{study.solution}</p>
                  </div>
                </div>
                
                <div className="mb-6">
                  <h5 className="font-semibold text-primary-800 mb-3">Results</h5>
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
          <button className="btn-primary btn-lg">
            See All Case Studies
          </button>
        </div>
      </div>
    </section>
  )
}