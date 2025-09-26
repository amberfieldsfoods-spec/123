import { 
  Database, 
  Users, 
  Brain, 
  Calendar, 
  Shield, 
  TrendingUp,
  MessageCircle,
  Microscope 
} from 'lucide-react';

const features = [
  {
    icon: Database,
    title: 'Digital Data Collection',
    description: 'Collect and organize medical records from doctors and patients with structured data entry and validation.',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    title: 'Patient Community Groups',
    description: 'Connect patients with similar conditions for peer support and shared experiences in moderated groups.',
    color: 'text-green-600'
  },
  {
    icon: Brain,
    title: 'Data Analytics',
    description: 'Analyze collected medical data to identify patterns and generate insights for healthcare improvement.',
    color: 'text-purple-600'
  },
  {
    icon: Calendar,
    title: 'Appointment Scheduling',
    description: 'Simple appointment booking system connecting patients with healthcare providers in their area.',
    color: 'text-orange-600'
  },
  {
    icon: MessageCircle,
    title: 'Support Communities',
    description: 'Moderated chat groups where patients can share experiences and receive peer support.',
    color: 'text-teal-600'
  },
  {
    icon: TrendingUp,
    title: 'Progress Tracking',
    description: 'Track treatment progress and health outcomes with simple charts and progress reports.',
    color: 'text-red-600'
  },
  {
    icon: Shield,
    title: 'Secure Data Handling',
    description: 'HIPAA-compliant security measures to protect patient medical information and privacy.',
    color: 'text-gray-600'
  },
  {
    icon: Microscope,
    title: 'Resource Library',
    description: 'Educational resources and equipment information to support healthcare professionals.',
    color: 'text-indigo-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Healthcare Platform Features
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform focuses on connecting Indian healthcare providers and patients through 
            organized data collection, community support, and streamlined communication tailored for India's healthcare needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-blue-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-4">
                <feature.icon className={`h-8 w-8 ${feature.color} group-hover:scale-110 transition-transform duration-300`} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}