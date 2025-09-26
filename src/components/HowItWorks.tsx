import { UserPlus, FileText, Users as Users2, Calendar, BarChart3 } from 'lucide-react';

const steps = [
  {
    icon: UserPlus,
    title: 'Initial Diagnosis',
    description: 'Doctor diagnoses patient and recommends downloading our app for comprehensive care management.',
    number: '01'
  },
  {
    icon: FileText,
    title: 'Data Collection',
    description: 'Patients sign up and provide medical history, current symptoms, and upload relevant medical documents.',
    number: '02'
  },
  {
    icon: Users2,
    title: 'AI Community Matching',
    description: 'AI analyzes medical data and groups patients with similar conditions for peer support and shared insights.',
    number: '03'
  },
  {
    icon: Calendar,
    title: 'Treatment & Booking',
    description: 'Patients book appointments, receive treatment, while doctors record all interactions and outcomes.',
    number: '04'
  },
  {
    icon: BarChart3,
    title: 'Data Analytics & Training',
    description: 'All interactions train our LLM models, generating insights for better treatments and equipment recommendations.',
    number: '05'
  }
];

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-6">
            How Our Platform Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            A seamless journey from diagnosis to community support, powered by AI and comprehensive data analytics.
          </p>
        </div>

        <div className="relative">
          {/* Connection Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-600 via-green-600 to-purple-600 transform -translate-y-1/2"></div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="relative text-center group">
                {/* Step Circle */}
                <div className="relative mx-auto w-20 h-20 bg-white rounded-full border-4 border-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <step.icon className="h-8 w-8 text-blue-600" />
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center text-sm font-bold">
                    {step.number}
                  </div>
                </div>

                {/* Content */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}