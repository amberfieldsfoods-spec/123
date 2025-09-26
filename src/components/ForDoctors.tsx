import { Stethoscope, FileText, BarChart, Users, Calendar, Microscope } from 'lucide-react';

const doctorFeatures = [
  {
    icon: FileText,
    title: 'Digital Record Management',
    description: 'Efficiently manage patient records with AI-powered organization and quick access to medical histories.'
  },
  {
    icon: BarChart,
    title: 'Treatment Analytics',
    description: 'Track treatment outcomes and patient progress with comprehensive data visualization and insights.'
  },
  {
    icon: Users,
    title: 'Patient Community Monitoring',
    description: 'Monitor patient interactions in support groups and gain insights from community discussions.'
  },
  {
    icon: Calendar,
    title: 'Integrated Scheduling',
    description: 'Streamlined appointment booking system with automatic patient matching based on conditions.'
  },
  {
    icon: Microscope,
    title: 'AI-Powered Recommendations',
    description: 'Receive equipment and treatment recommendations based on latest medical research and patient data.'
  },
  {
    icon: Stethoscope,
    title: 'Telemedicine Support',
    description: 'Conduct virtual consultations with integrated health monitoring and prescription management.'
  }
];

export default function ForDoctors() {
  return (
    <section id="for-doctors" className="py-20 bg-blue-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8">
            <div className="space-y-6">
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium">
                👨‍⚕️ For Healthcare Professionals
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Empower Your Practice with 
                <span className="text-blue-600"> AI Insights</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Transform your practice with comprehensive patient data management, 
                AI-driven treatment recommendations, and seamless community integration 
                that enhances patient outcomes.
              </p>
            </div>

            <div className="space-y-6">
              {doctorFeatures.slice(0, 3).map((feature, index) => (
                <div key={index} className="flex items-start space-x-4 p-4 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow">
                  <div className="flex-shrink-0">
                    <feature.icon className="h-6 w-6 text-blue-600 mt-1" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-2">{feature.title}</h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-colors font-medium shadow-lg hover:shadow-xl">
              Join as Healthcare Provider
            </button>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {doctorFeatures.slice(3).map((feature, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-200">
                <div className="mb-4">
                  <feature.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}