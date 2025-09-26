import { Stethoscope, FileText, BarChart, Users, Calendar, Microscope } from 'lucide-react';

const doctorFeatures = [
  {
    icon: FileText,
    title: 'Patient Record Organization',
    description: 'Organize patient records digitally with easy search and categorization for quick access to medical histories.'
  },
  {
    icon: BarChart,
    title: 'Progress Tracking',
    description: 'Track patient progress and treatment outcomes with simple charts and reporting tools.'
  },
  {
    icon: Users,
    title: 'Community Oversight',
    description: 'Monitor patient support groups and provide professional guidance when needed in community discussions.'
  },
  {
    icon: Calendar,
    title: 'Appointment Management',
    description: 'Manage appointments and scheduling with patients through an integrated booking system.'
  },
  {
    icon: Microscope,
    title: 'Resource Access',
    description: 'Access medical resources and equipment information to support patient treatment decisions.'
  },
  {
    icon: Stethoscope,
    title: 'Digital Consultations',
    description: 'Conduct virtual consultations and maintain digital records of patient interactions.'
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
                👨‍⚕️ For Healthcare Providers
              </div>
              <h2 className="text-3xl lg:text-5xl font-bold text-gray-900">
                Streamline Your Practice with
                <span className="text-blue-600"> Digital Tools</span>
              </h2>
              <p className="text-xl text-gray-600 leading-relaxed">
                Improve your practice with organized patient data management, 
                community support integration, and digital tools that help 
                enhance patient care and communication.
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
              Join Our Beta Program
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