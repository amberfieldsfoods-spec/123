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
    title: 'Intelligent Data Collection',
    description: 'Seamlessly collect and organize medical records from doctors and patients with AI-powered data validation.',
    color: 'text-blue-600'
  },
  {
    icon: Users,
    title: 'Smart Community Matching',
    description: 'AI algorithms group patients with similar conditions for peer support and shared treatment insights.',
    color: 'text-green-600'
  },
  {
    icon: Brain,
    title: 'LLM Model Training',
    description: 'Continuously improve our AI models with real-world medical data and treatment outcomes.',
    color: 'text-purple-600'
  },
  {
    icon: Calendar,
    title: 'Integrated Booking System',
    description: 'Patients can easily book appointments with specialists based on their medical conditions.',
    color: 'text-orange-600'
  },
  {
    icon: MessageCircle,
    title: 'Community Support Chat',
    description: 'Connect with other patients and healthcare professionals for guidance and emotional support.',
    color: 'text-teal-600'
  },
  {
    icon: TrendingUp,
    title: 'Treatment Analytics',
    description: 'Track treatment progress and outcomes with comprehensive data visualization and insights.',
    color: 'text-red-600'
  },
  {
    icon: Shield,
    title: 'HIPAA Compliant Security',
    description: 'Enterprise-grade security ensuring all medical data is protected and compliant with regulations.',
    color: 'text-gray-600'
  },
  {
    icon: Microscope,
    title: 'Equipment Training',
    description: 'AI-powered equipment recommendations and training for healthcare professionals.',
    color: 'text-indigo-600'
  }
];

export default function Features() {
  return (
    <section id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our platform integrates every aspect of modern healthcare data management, 
            from initial diagnosis to long-term treatment tracking and community support.
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