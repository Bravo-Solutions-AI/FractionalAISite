export default function Hero() {
  return (
    <section className="bg-gradient-to-b from-white via-mono-25 to-white pt-40 pb-8 relative overflow-hidden">
      {/* Enhanced background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-32 right-1/4 w-[600px] h-[600px] bg-gradient-to-br from-accent-cool-100/30 to-accent-cool-200/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-1/4 w-[500px] h-[500px] bg-gradient-to-tr from-mono-100/60 to-mono-50/40 rounded-full blur-3xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-to-r from-accent-cool-50/20 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container relative">
        <div className="max-w-7xl mx-auto">
          {/* Main Content - Asymmetric Layout */}
          <div className="grid lg:grid-cols-12 gap-16 items-center mb-20">
            <div className="lg:col-span-7 text-left">
              <div className="space-y-2 mb-6">
                <div className="inline-flex items-center px-4 py-2 bg-accent-cool-50 border border-accent-cool-200 rounded-full">
                  <span className="w-2 h-2 bg-accent-cool-500 rounded-full mr-3 animate-pulse"></span>
                  <span className="text-accent-cool-700 text-sm font-medium">AI-Powered Fractional Consulting</span>
                </div>
              </div>
              
              <h1 className="mb-8 font-display font-extralight tracking-tighter">
                Access Executive Expertise
                <span className="block text-gradient-cool font-light mt-2">When You Need It, How You Need It</span>
              </h1>
              
              <p className="text-large mb-10 max-w-2xl leading-relaxed text-mono-700">
                Get fractional CFO, CTO, CMO, and other C-level expertise enhanced with AI insights. 
                Performance-based engagements that deliver measurable results for growing businesses.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <a href="/contact" className="btn-accent hover-scale text-lg px-10 py-5">
                  Book Strategy Call
                </a>
                <a href="/services" className="btn-secondary hover-scale text-lg px-10 py-5">
                  View Our Services
                </a>
              </div>
            </div>
            
            {/* Visual Element */}
            <div className="lg:col-span-5">
              <div className="relative">
                <div className="bg-gradient-to-br from-white to-mono-25 rounded-2xl overflow-hidden shadow-premium border border-mono-100">
                  {/* Header */}
                  <div className="bg-white border-b border-mono-100 px-8 py-6">
                    <div className="flex items-center justify-between">
                      <h3 className="text-lg font-semibold text-mono-900">Executive Analytics</h3>
                      <div className="flex items-center space-x-3">
                        <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                        <span className="text-xs text-mono-500 font-medium">Live Data</span>
                      </div>
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-8 space-y-8">
                    {/* Progress Section */}
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-sm text-mono-600">Implementation Status</span>
                        <span className="text-sm font-semibold text-accent-cool-600">85% Complete</span>
                      </div>
                      <div className="h-1.5 bg-mono-200 rounded-full overflow-hidden">
                        <div className="h-full w-4/5 bg-gradient-to-r from-accent-cool-500 to-accent-cool-600 rounded-full"></div>
                      </div>
                    </div>
                    
                    {/* Metrics Grid */}
                    <div className="grid grid-cols-2 gap-4">
                      <div className="bg-white rounded-lg p-5 border border-mono-100">
                        <div className="text-lg font-extralight text-accent-cool-600 mb-1">↗ 40%</div>
                        <div className="text-xs text-mono-600 font-medium">Efficiency Boost</div>
                      </div>
                      <div className="bg-white rounded-lg p-5 border border-mono-100">
                        <div className="text-lg font-extralight text-mono-700 mb-1">$2.4M</div>
                        <div className="text-xs text-mono-600 font-medium">Cost Reduction</div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Floating elements */}
                <div className="absolute -top-3 -right-3 w-16 h-16 bg-gradient-to-br from-accent-cool-500 to-accent-cool-600 rounded-xl flex items-center justify-center shadow-lg">
                  <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center">
                    <div className="w-4 h-4 bg-accent-cool-500 rounded"></div>
                  </div>
                </div>
                
                <div className="absolute -bottom-4 -left-4 w-12 h-12 bg-white border-2 border-accent-cool-200 rounded-lg flex items-center justify-center shadow-md">
                  <div className="w-4 h-4 bg-accent-cool-400 rounded"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Core Capabilities - Process Flow Design */}
          <div className="mt-20">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-display font-light text-mono-900 mb-4 tracking-tight">How It Works</h2>
              <div className="w-16 h-0.5 bg-accent-cool-600 mx-auto"></div>
            </div>
            
            <div className="relative">
              {/* Connection Lines */}
              <div className="hidden lg:block absolute top-12 left-1/2 transform -translate-x-1/2 w-full max-w-4xl">
                <div className="relative h-0.5 bg-mono-200">
                  <div className="absolute left-1/6 w-2 h-2 bg-accent-cool-600 rounded-full transform -translate-y-0.5"></div>
                  <div className="absolute left-1/2 w-2 h-2 bg-accent-cool-600 rounded-full transform -translate-x-1/2 -translate-y-0.5"></div>
                  <div className="absolute right-1/6 w-2 h-2 bg-accent-cool-600 rounded-full transform -translate-y-0.5"></div>
                </div>
              </div>
              
              <div className="grid lg:grid-cols-3 gap-12 max-w-6xl mx-auto">
                {/* Step 1 */}
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white border-4 border-accent-cool-600 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl font-light text-accent-cool-600">01</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-mono-900 mb-4">Smart Matching</h3>
                  <p className="text-mono-600 leading-relaxed text-sm max-w-xs mx-auto">
                    AI matches you with vetted fractional executives who specialize in your industry and challenges.
                  </p>
                </div>
                
                {/* Step 2 */}
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white border-4 border-accent-cool-500 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl font-light text-accent-cool-500">02</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-mono-900 mb-4">Performance-Based</h3>
                  <p className="text-mono-600 leading-relaxed text-sm max-w-xs mx-auto">
                    Pay only for measurable results with our engagement assurance model and deliverable-focused approach.
                  </p>
                </div>
                
                {/* Step 3 */}
                <div className="text-center group">
                  <div className="relative mb-8">
                    <div className="w-24 h-24 bg-white border-4 border-accent-cool-400 rounded-full flex items-center justify-center mx-auto shadow-lg group-hover:scale-105 transition-transform duration-300">
                      <span className="text-2xl font-light text-accent-cool-400">03</span>
                    </div>
                  </div>
                  <h3 className="text-xl font-semibold text-mono-900 mb-4">Data-Driven Insights</h3>
                  <p className="text-mono-600 leading-relaxed text-sm max-w-xs mx-auto">
                    AI-powered diagnostics and analytics guide strategy development and decision-making.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}