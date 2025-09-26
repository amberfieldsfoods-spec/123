import { Brain, Database, Lock, Zap, Cpu, Network } from 'lucide-react';

const techFeatures = [
  {
    icon: Brain,
    title: 'Data Processing & Analytics',
    description: 'Machine learning algorithms help organize and analyze medical data to identify patterns and trends.',
    stats: 'In Development'
  },
  {
    icon: Database,
    title: 'Secure Data Storage',
    description: 'Cloud-based infrastructure for storing and managing medical records with proper backup systems.',
    stats: 'HIPAA Compliant'
  },
  {
    icon: Lock,
    title: 'Data Security',
    description: 'End-to-end encryption and secure authentication to protect sensitive medical information.',
    stats: 'SSL Encrypted'
  },
  {
    icon: Zap,
    title: 'Responsive Platform',
    description: 'Fast-loading web and mobile applications for quick access to medical records and community features.',
    stats: 'Mobile Ready'
  },
  {
    icon: Cpu,
    title: 'Cloud Infrastructure',
    description: 'Reliable cloud hosting ensuring platform availability and data backup for healthcare providers.',
    stats: '99.5% Uptime'
  },
  {
    icon: Network,
    title: 'System Integration',
    description: 'APIs designed to work with common healthcare management systems and electronic health records.',
    stats: 'API Available'
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900 text-purple-200 text-sm font-medium mb-6">
            💻 Platform Technology
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Built for Healthcare
            <span className="text-purple-400"> Professionals</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform uses modern web technology and secure cloud infrastructure 
            to provide reliable healthcare data management and community features.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {techFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-800 p-8 rounded-xl border border-gray-700 hover:border-purple-500 transition-all duration-300 hover:transform hover:scale-105"
            >
              <div className="mb-6">
                <div className="flex items-center justify-between mb-4">
                  <feature.icon className="h-10 w-10 text-purple-400 group-hover:text-purple-300 transition-colors" />
                  <span className="text-sm font-bold text-green-400 bg-green-400/10 px-3 py-1 rounded-full">
                    {feature.stats}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-purple-300 transition-colors">
                  {feature.title}
                </h3>
                <p className="text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="bg-gradient-to-r from-purple-900 to-blue-900 p-8 rounded-2xl border border-purple-500">
            <h3 className="text-2xl font-bold text-white mb-4">
              Interested in Our Platform?
            </h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Join healthcare professionals who are testing our platform to improve 
              patient data management and community support systems.
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl">
              Learn More
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}