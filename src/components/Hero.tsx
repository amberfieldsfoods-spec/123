import { ArrowRight, Play } from 'lucide-react';

export default function Hero() {
  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-green-50 py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-100 text-blue-800 text-sm font-medium mb-8">
            🏥 Connecting Healthcare Communities
          </div>

          {/* Main Heading */}
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Smart Healthcare
            <span className="text-blue-600"> Data Platform</span>
          </h1>

          {/* Subheading */}
          <p className="text-xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            A platform that connects doctors and patients for better medical record management, 
            community support, and data-driven healthcare insights. Helping improve patient care 
            through organized data collection and peer support networks.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <button className="bg-blue-600 text-white px-8 py-4 rounded-lg hover:bg-blue-700 transition-all duration-300 font-medium flex items-center shadow-lg hover:shadow-xl">
              Start Your Journey
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            <button className="text-gray-700 px-8 py-4 rounded-lg hover:bg-gray-100 transition-colors font-medium flex items-center border border-gray-300">
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600 mb-2">1,200+</div>
              <div className="text-gray-600">Patient Records</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600 mb-2">45+</div>
              <div className="text-gray-600">Healthcare Providers</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600 mb-2">8</div>
              <div className="text-gray-600">Medical Specialties</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-orange-600 mb-2">Beta</div>
              <div className="text-gray-600">Currently Testing</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}