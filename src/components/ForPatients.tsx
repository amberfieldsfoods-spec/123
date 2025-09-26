import { Heart, MessageCircle, Calendar, TrendingUp, Shield, Users } from 'lucide-react';

const patientFeatures = [
  {
    icon: Heart,
    title: 'Organized Health Records',
    description: 'Keep your medical records organized and easily accessible to share with healthcare providers.'
  },
  {
    icon: MessageCircle,
    title: 'Peer Support Groups',
    description: 'Connect with others facing similar health challenges in moderated, safe support groups.'
  },
  {
    icon: Calendar,
    title: 'Appointment Booking',
    description: 'Book appointments with healthcare providers and keep track of your scheduled visits.'
  },
  {
    icon: TrendingUp,
    title: 'Health Tracking',
    description: 'Track your health progress and treatment outcomes with simple charts and logs.'
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your medical information is protected with secure encryption and HIPAA-compliant storage.'
  },
  {
    icon: Users,
    title: 'Healthcare Network',
    description: 'Connect with healthcare professionals and get guidance from verified medical providers.'
  }
];

export default function ForPatients() {
  return (
    <section id="for-patients" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-green-100 text-green-800 text-sm font-medium mb-6">
            🤝 For Patients
          </div>
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            Manage Your Health with
            <span className="text-green-600"> Community Support</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Organize your medical records, connect with supportive communities across India, 
            and stay in touch with your healthcare providers through our platform designed for Indian patients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {patientFeatures.map((feature, index) => (
            <div
              key={index}
              className="group text-center p-8 bg-gradient-to-br from-green-50 to-blue-50 rounded-xl border border-gray-200 hover:border-green-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-white rounded-full shadow-md group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className="h-8 w-8 text-green-600" />
                </div>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 group-hover:text-green-600 transition-colors">
                {feature.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-green-600 text-white px-8 py-4 rounded-lg hover:bg-green-700 transition-colors font-medium shadow-lg hover:shadow-xl">
            Join Patient Community
          </button>
        </div>
      </div>
    </section>
  );
}