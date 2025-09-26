import { Brain, Database, Lock, Zap, Cpu, Network } from 'lucide-react';

const techFeatures = [
  {
    icon: Brain,
    title: 'Advanced AI & Machine Learning',
    description: 'Proprietary LLM models trained on millions of medical records for accurate diagnosis and treatment recommendations.',
    stats: '99.7% Accuracy'
  },
  {
    icon: Database,
    title: 'Comprehensive Data Center',
    description: 'Scalable infrastructure processing terabytes of medical data with real-time analytics and insights.',
    stats: '500TB+ Data'
  },
  {
    icon: Lock,
    title: 'Enterprise Security',
    description: 'End-to-end encryption, blockchain verification, and HIPAA-compliant data handling protocols.',
    stats: 'Zero Breaches'
  },
  {
    icon: Zap,
    title: 'Real-time Processing',
    description: 'Lightning-fast data processing enabling instant community matching and treatment suggestions.',
    stats: '<100ms Response'
  },
  {
    icon: Cpu,
    title: 'Edge Computing',
    description: 'Distributed computing infrastructure ensuring low latency and high availability worldwide.',
    stats: '99.99% Uptime'
  },
  {
    icon: Network,
    title: 'API Integration',
    description: 'Seamless integration with existing hospital systems, EHRs, and medical equipment.',
    stats: '1000+ Integrations'
  }
];

export default function Technology() {
  return (
    <section id="technology" className="py-20 bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-purple-900 text-purple-200 text-sm font-medium mb-6">
            🔬 Advanced Technology
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold mb-6">
            Cutting-Edge Healthcare 
            <span className="text-purple-400"> Technology</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Our platform leverages the latest advances in AI, machine learning, and healthcare 
            technology to deliver unprecedented insights and treatment outcomes.
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
              Ready to Transform Healthcare?
            </h3>
            <p className="text-purple-200 mb-6 max-w-2xl mx-auto">
              Join thousands of healthcare professionals already using our AI-powered platform 
              to improve patient outcomes and streamline medical workflows.
            </p>
            <button className="bg-purple-600 text-white px-8 py-4 rounded-lg hover:bg-purple-700 transition-colors font-medium shadow-lg hover:shadow-xl">
              Request Demo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}