import Navigation from '@/components/Navigation'
import Footer from '@/components/Footer'

export default function SuccessPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      
      <section className="bg-gradient-to-b from-white via-mono-25 to-white pt-32 pb-20 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 right-1/4 w-96 h-96 bg-gradient-to-br from-accent-cool-100/20 to-accent-cool-200/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-1/4 w-80 h-80 bg-gradient-to-tr from-mono-100/30 to-mono-50/20 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container relative">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-flex items-center px-4 py-2 bg-green-50 border border-green-200 rounded-full mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full mr-3"></span>
              <span className="text-green-700 text-sm font-medium">Message Sent Successfully</span>
            </div>
            
            <h1 className="mb-6 font-display font-extralight tracking-tighter">
              Thank You for
              <span className="block text-gradient-cool font-light mt-2">Reaching Out</span>
            </h1>
            
            <p className="text-large mb-8 max-w-3xl mx-auto leading-relaxed text-mono-700">
              We've received your message and will respond within 24 hours. In the meantime, 
              feel free to explore our services or learn more about how our fractional leaders 
              implement AI solutions.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <a href="/services" className="btn-accent hover-scale text-lg px-10 py-5">
                Explore Our Services
              </a>
              <a href="/case-studies" className="btn-secondary hover-scale text-lg px-10 py-5">
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-20 bg-mono-50">
        <div className="container">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-display font-light tracking-tight text-mono-900 text-center mb-12">
              What Happens Next?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-cool-600 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-medium text-lg">1</span>
                </div>
                <h3 className="text-lg font-medium text-mono-900 mb-3">Review & Response</h3>
                <p className="text-mono-600 leading-relaxed">
                  We'll review your submission and respond within 24 hours with next steps and availability.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-cool-500 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-medium text-lg">2</span>
                </div>
                <h3 className="text-lg font-medium text-mono-900 mb-3">Discovery Call</h3>
                <p className="text-mono-600 leading-relaxed">
                  30-minute consultation to understand your challenges and identify AI automation opportunities.
                </p>
              </div>
              
              <div className="text-center">
                <div className="w-16 h-16 bg-accent-cool-400 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <span className="text-white font-medium text-lg">3</span>
                </div>
                <h3 className="text-lg font-medium text-mono-900 mb-3">Custom Proposal</h3>
                <p className="text-mono-600 leading-relaxed">
                  Tailored engagement plan showing exactly what AI solutions we'll build for you.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}