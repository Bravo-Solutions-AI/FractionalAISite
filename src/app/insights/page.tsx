import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

const insights = [
  {
    title: "The ROI of Fractional AI Leadership",
    date: "March 15, 2024",
    category: "Strategy",
    excerpt: "Why hiring a fractional AI executive often delivers better ROI than full-time hires for growing companies.",
    readTime: "5 min read"
  },
  {
    title: "Building AI Governance in Mid-Market Companies",
    date: "March 8, 2024", 
    category: "Governance",
    excerpt: "Essential frameworks for establishing AI governance without the overhead of enterprise bureaucracy.",
    readTime: "7 min read"
  },
  {
    title: "Customer Service AI: Beyond Chatbots",
    date: "February 28, 2024",
    category: "Implementation",
    excerpt: "Advanced AI applications that transform customer service operations and drive measurable business value.",
    readTime: "6 min read"
  },
  {
    title: "Data Strategy for AI Success",
    date: "February 20, 2024",
    category: "Data",
    excerpt: "How to build the data foundation necessary for successful AI implementation and scaling.",
    readTime: "8 min read"
  },
  {
    title: "AI Implementation Pitfalls and How to Avoid Them",
    date: "February 12, 2024",
    category: "Best Practices", 
    excerpt: "Common mistakes organizations make when implementing AI and proven strategies to avoid them.",
    readTime: "6 min read"
  },
  {
    title: "Measuring AI Business Impact",
    date: "February 5, 2024",
    category: "Metrics",
    excerpt: "Key performance indicators and measurement frameworks for evaluating AI initiative success.",
    readTime: "5 min read"
  }
]

const whitepapers = [
  {
    title: "The Fractional AI Executive Playbook",
    description: "A comprehensive guide to leveraging fractional AI leadership for business transformation.",
    pages: "24 pages"
  },
  {
    title: "AI Readiness Assessment Framework", 
    description: "Evaluate your organization's readiness for AI implementation with our detailed assessment tool.",
    pages: "16 pages"
  },
  {
    title: "Customer Service AI Implementation Guide",
    description: "Step-by-step methodology for implementing AI-powered customer service solutions.",
    pages: "32 pages"
  }
]

export default function InsightsPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      {/* Page Header */}
      <section className="bg-mono-50 pt-40 pb-16">
        <div className="container">
          <div className="max-w-3xl">
            <h1 className="text-4xl lg:text-5xl font-display font-extralight tracking-tighter text-mono-900 mb-6">
              AI Leadership
              <span className="text-gradient-cool"> Insights</span>
            </h1>
            <p className="text-xl text-mono-600 leading-relaxed">
              Thought leadership, best practices, and strategic insights from our team of 
              fractional AI executives and industry practitioners.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Article */}
      <section className="py-20">
        <div className="container">
          <div className="bg-mono-50 rounded-lg p-8 lg:p-12 mb-16">
            <div className="max-w-3xl">
              <span className="bg-accent-cool-600 text-white px-3 py-1 rounded-full text-sm font-medium mb-4 inline-block">
                Featured Article
              </span>
              <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 mb-4">
                The Future of Fractional AI Leadership in Enterprise
              </h2>
              <p className="text-lg text-mono-600 mb-6 leading-relaxed">
                As AI becomes critical to competitive advantage, organizations are discovering that 
                fractional AI executives offer the perfect balance of expertise, flexibility, and cost-effectiveness 
                for navigating digital transformation.
              </p>
              <div className="flex items-center space-x-4 text-sm text-mono-500 mb-6">
                <span>March 22, 2024</span>
                <span>•</span>
                <span>10 min read</span>
                <span>•</span>
                <span>Strategy</span>
              </div>
              <a href="#" className="btn-accent">
                Read Full Article
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Articles */}
      <section className="pb-20">
        <div className="container">
          <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 mb-12">Recent Articles</h2>
          
          <div className="grid lg:grid-cols-2 gap-8">
            {insights.map((article, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="flex items-center space-x-4 text-sm text-mono-500 mb-4">
                  <span className="bg-mono-100 px-2 py-1 rounded text-mono-700">{article.category}</span>
                  <span>{article.date}</span>
                  <span>•</span>
                  <span>{article.readTime}</span>
                </div>
                
                <h3 className="text-xl font-display font-light tracking-tight text-mono-900 mb-3 hover:text-mono-700 transition-colors">
                  <a href="#">{article.title}</a>
                </h3>
                
                <p className="text-mono-600 mb-4 leading-relaxed">
                  {article.excerpt}
                </p>
                
                <a href="#" className="text-mono-700 font-medium hover:text-mono-900 transition-colors">
                  Read more →
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Whitepapers & Resources */}
      <section className="bg-mono-50 py-20">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-display font-extralight tracking-tighter text-mono-900 mb-4">Whitepapers & Resources</h2>
            <p className="text-xl text-mono-600 max-w-2xl mx-auto">
              In-depth guides and frameworks to help you succeed with AI implementation and leadership.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {whitepapers.map((paper, index) => (
              <div key={index} className="bg-white rounded-lg p-6 border border-gray-200">
                <h3 className="text-lg font-display font-light tracking-tight text-mono-900 mb-3">
                  {paper.title}
                </h3>
                <p className="text-mono-600 mb-4 leading-relaxed">
                  {paper.description}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-sm text-mono-500">{paper.pages}</span>
                  <a href="/contact" className="btn-secondary btn-sm">
                    Download
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20">
        <div className="container">
          <div className="bg-accent-cool-600 text-white rounded-lg p-8 lg:p-12 text-center">
            <h2 className="text-3xl font-display font-extralight tracking-tighter mb-4">Stay Informed</h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Get the latest insights on AI leadership, implementation strategies, and industry trends 
              delivered to your inbox monthly.
            </p>
            <div className="max-w-md mx-auto flex gap-4">
              <input 
                type="email" 
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-mono-900"
              />
              <button className="bg-white text-accent-cool-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}