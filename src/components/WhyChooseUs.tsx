import { LightningIcon, TargetIcon, TrendingUpIcon, AcademicCapIcon, AwardIcon, ShieldCheckIcon } from './icons'

const advantages = [
  {
    icon: LightningIcon,
    title: "Time-to-Value Guarantee",
    description: "Deliver working AI solutions 3x faster than traditional hiring with our proven methodologies and pre-built frameworks."
  },
  {
    icon: TargetIcon,
    title: "Industry-Specific Expertise", 
    description: "Pre-trained models and frameworks tailored for key verticals including healthcare, finance, and manufacturing."
  },
  {
    icon: TrendingUpIcon,
    title: "Flexible Engagement Models",
    description: "Scale up or down based on project needs. From short sprints to long-term partnerships, we adapt to your requirements."
  },
  {
    icon: AcademicCapIcon,
    title: "Knowledge Transfer Focus", 
    description: "Ensure your team can maintain and evolve solutions independently through comprehensive training and documentation."
  },
  {
    icon: AwardIcon,
    title: "Proven Track Record",
    description: "95%+ client success rate with measurable ROI and successful deployments across diverse industries."
  },
  {
    icon: ShieldCheckIcon,
    title: "Risk Mitigation",
    description: "Pre-vetted AI experts, rigorous quality control, and clear IP protection ensure successful project outcomes."
  }
]

const teamRoles = [
  {
    role: "Senior AI Architect",
    rate: "$15,000 - $20,000/month",
    description: "Strategic AI leadership and system design"
  },
  {
    role: "ML Engineer", 
    rate: "$10,000 - $15,000/month",
    description: "Model development and production deployment"
  },
  {
    role: "Data Scientist",
    rate: "$8,000 - $12,000/month", 
    description: "Data analysis and model optimization"
  },
  {
    role: "AI Product Manager",
    rate: "$10,000 - $15,000/month",
    description: "Product strategy and stakeholder alignment"
  }
]

export default function WhyChooseUs() {
  return (
    <section id="why-choose-us" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Fractional AI Partners?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're the "McKinsey of AI" - combining strategic consulting with hands-on implementation.
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
            Our Expert Team Composition
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