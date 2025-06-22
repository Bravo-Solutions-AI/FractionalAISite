import { LightningIcon, TargetIcon, TrendingUpIcon, AcademicCapIcon, AwardIcon, ShieldCheckIcon } from './icons'

const advantages = [
  {
    icon: LightningIcon,
    title: "AI Implementation, Not Just Strategy",
    description: "Our fractional leaders build and deploy AI automation systems—they don't just create PowerPoints."
  },
  {
    icon: TargetIcon,
    title: "Automation-First Approach", 
    description: "Every fractional leader specializes in automating workflows, from financial forecasting to marketing campaigns."
  },
  {
    icon: TrendingUpIcon,
    title: "Immediate ROI Focus",
    description: "Start seeing cost reductions and efficiency gains within weeks as AI automation eliminates manual work."
  },
  {
    icon: AcademicCapIcon,
    title: "Your Team Learns AI", 
    description: "Our fractional leaders train your team to work with AI tools, creating lasting organizational capability."
  },
  {
    icon: AwardIcon,
    title: "Proven AI Track Record",
    description: "Our fractional leaders have deployed 100+ AI automation projects with measurable efficiency gains."
  },
  {
    icon: ShieldCheckIcon,
    title: "No Lock-In, Full Ownership",
    description: "All AI systems and automations we build are yours to keep—no vendor dependencies or ongoing fees."
  }
]

const teamRoles = [
  {
    role: "Fractional CFO + AI",
    rate: "$8,000 - $15,000/month",
    description: "Finance leadership with AI automation expertise"
  },
  {
    role: "Fractional CTO + AI", 
    rate: "$10,000 - $18,000/month",
    description: "Tech strategy with AI implementation capabilities"
  },
  {
    role: "Fractional CMO + AI",
    rate: "$8,000 - $15,000/month", 
    description: "Marketing leadership with automation focus"
  },
  {
    role: "Fractional COO + AI",
    rate: "$10,000 - $18,000/month",
    description: "Operations expertise with AI workflow automation"
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Our AI-Powered Fractional Leaders?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Unlike traditional fractional hires, our leaders bring deep AI automation expertise to transform your operations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {advantages.map((advantage, index) => {
            const IconComponent = advantage.icon
            return (
              <div key={index} className="text-center p-6 card card-hover">
                <div className="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:bg-blue-600 transition-colors duration-300">
                  <IconComponent className="w-8 h-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
                <h3 className="text-xl font-semibold text-primary-900 mb-3">{advantage.title}</h3>
                <p className="text-primary-600">{advantage.description}</p>
              </div>
            )
          })}
        </div>

        <div className="bg-gray-50 rounded-2xl p-8">
          <h3 className="text-2xl font-bold text-gray-900 text-center mb-8">
            Fractional Leaders with AI Expertise
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {teamRoles.map((team, index) => (
              <div key={index} className="bg-white rounded-lg p-6 shadow-sm">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="text-lg font-semibold text-gray-900">{team.role}</h4>
                  <span className="text-primary-600 font-semibold">{team.rate}</span>
                </div>
                <p className="text-gray-600">{team.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}