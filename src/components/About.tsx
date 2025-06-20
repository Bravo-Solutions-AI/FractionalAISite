import { BrainIcon, UsersIcon, AwardIcon, RocketIcon } from './icons'

const stats = [
  { number: "50+", label: "Enterprise Clients", icon: UsersIcon },
  { number: "200+", label: "AI Projects Delivered", icon: RocketIcon },
  { number: "95%", label: "Client Success Rate", icon: AwardIcon },
  { number: "8", label: "Average Weeks to Deploy", icon: BrainIcon }
]

const team = [
  {
    name: "Dr. Sarah Kim",
    role: "Founder & Chief AI Officer",
    bio: "Former head of AI at Google Cloud with 15+ years in enterprise AI. PhD in Machine Learning from Stanford.",
    avatar: "SK",
    linkedin: "#"
  },
  {
    name: "Marcus Chen",
    role: "VP of Engineering",
    bio: "Ex-Amazon ML engineer who scaled AI systems serving billions of requests. MIT Computer Science graduate.",
    avatar: "MC", 
    linkedin: "#"
  },
  {
    name: "Dr. Elena Rodriguez",
    role: "Head of Research",
    bio: "AI researcher with 50+ published papers. Former Facebook AI Research scientist specializing in NLP.",
    avatar: "ER",
    linkedin: "#"
  },
  {
    name: "James Thompson",
    role: "Client Success Director",
    bio: "15 years in enterprise consulting. Previously at McKinsey Digital, specializing in AI transformation.",
    avatar: "JT",
    linkedin: "#"
  }
]

const values = [
  {
    title: "Results-Driven",
    description: "We're measured by your success. Every project includes specific KPIs and success metrics.",
    icon: "🎯"
  },
  {
    title: "Knowledge Transfer",
    description: "We don't just build solutions—we ensure your team can maintain and evolve them.",
    icon: "🎓"
  },
  {
    title: "Enterprise Grade",
    description: "Security, scalability, and reliability are built into every solution from day one.",
    icon: "🔒"
  },
  {
    title: "Speed to Value",
    description: "Our proven methodologies and pre-built frameworks accelerate time to production.",
    icon: "⚡"
  }
]

export default function About() {
  return (
    <section id="about" className="section bg-white">
      <div className="container">
        {/* Hero Section */}
        <div className="grid lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h2 className="text-4xl lg:text-5xl font-bold text-primary-900 mb-6">
              The AI Experts Behind Your Success
            </h2>
            <p className="text-xl text-primary-600 mb-8 leading-relaxed">
              We're a team of senior AI practitioners who've built and scaled AI systems at the world's 
              leading technology companies. Now we bring that expertise directly to your team.
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Senior-Level Expertise</h4>
                  <p className="text-primary-600">All our AI engineers have 10+ years of experience</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Proven Track Record</h4>
                  <p className="text-primary-600">Alumni from Google, Amazon, Microsoft, and top startups</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <div className="w-2 h-2 bg-blue-600 rounded-full"></div>
                </div>
                <div>
                  <h4 className="font-semibold text-primary-900">Industry Specialists</h4>
                  <p className="text-primary-600">Deep expertise in healthcare, finance, retail, and manufacturing</p>
                </div>
              </div>
            </div>

            <button className="btn-primary">
              Meet Our Team
            </button>
          </div>
          
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="bg-blue-50 p-6 rounded-xl">
                  <BrainIcon className="w-8 h-8 text-blue-600 mb-3" />
                  <h4 className="font-semibold text-primary-900 mb-2">AI Strategy</h4>
                  <p className="text-sm text-primary-600">Comprehensive AI roadmaps aligned with business goals</p>
                </div>
                <div className="bg-success-50 p-6 rounded-xl">
                  <RocketIcon className="w-8 h-8 text-success-600 mb-3" />
                  <h4 className="font-semibold text-primary-900 mb-2">Rapid Deployment</h4>
                  <p className="text-sm text-primary-600">From concept to production in weeks, not months</p>
                </div>
              </div>
              <div className="space-y-4 mt-8">
                <div className="bg-accent-50 p-6 rounded-xl">
                  <UsersIcon className="w-8 h-8 text-accent-600 mb-3" />
                  <h4 className="font-semibold text-primary-900 mb-2">Team Integration</h4>
                  <p className="text-sm text-primary-600">Seamless integration with your existing teams</p>
                </div>
                <div className="bg-primary-100 p-6 rounded-xl">
                  <AwardIcon className="w-8 h-8 text-primary-600 mb-3" />
                  <h4 className="font-semibold text-primary-900 mb-2">Quality Assurance</h4>
                  <p className="text-sm text-primary-600">Enterprise-grade testing and validation</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Section */}
        <div className="bg-primary-900 rounded-2xl p-12 mb-20">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => {
              const IconComponent = stat.icon
              return (
                <div key={index} className="text-white">
                  <IconComponent className="w-8 h-8 text-accent-400 mx-auto mb-4" />
                  <div className="text-4xl font-bold mb-2">{stat.number}</div>
                  <div className="text-primary-300">{stat.label}</div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Team Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              Leadership Team
            </h3>
            <p className="text-xl text-primary-600">
              Meet the AI experts leading your transformation
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div key={index} className="card p-6 text-center group hover:shadow-medium">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-600 to-blue-700 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {member.avatar}
                </div>
                <h4 className="text-lg font-bold text-primary-900 mb-1">{member.name}</h4>
                <p className="text-blue-600 font-medium text-sm mb-3">{member.role}</p>
                <p className="text-primary-600 text-sm leading-relaxed mb-4">{member.bio}</p>
                <a 
                  href={member.linkedin}
                  className="text-blue-600 hover:text-blue-700 text-sm font-medium group-hover:underline"
                >
                  View LinkedIn →
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Values Section */}
        <div>
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-primary-900 mb-4">
              Our Values
            </h3>
            <p className="text-xl text-primary-600">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center group">
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-200">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-primary-900 mb-3">{value.title}</h4>
                <p className="text-primary-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}