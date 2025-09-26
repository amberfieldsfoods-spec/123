import { Menu, X, Stethoscope } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm border-b border-gray-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Stethoscope className="h-8 w-8 text-blue-600" />
            <span className="text-2xl font-bold text-gray-900">MedConnect</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Features
            </a>
            <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              How It Works
            </a>
            <a href="#for-doctors" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              For Doctors
            </a>
            <a href="#for-patients" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              For Patients
            </a>
            <a href="#technology" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
              Technology
            </a>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
              Sign In
            </button>
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
              Get Started
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Features
              </a>
              <a href="#how-it-works" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                How It Works
              </a>
              <a href="#for-doctors" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                For Doctors
              </a>
              <a href="#for-patients" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                For Patients
              </a>
              <a href="#technology" className="text-gray-600 hover:text-blue-600 transition-colors font-medium">
                Technology
              </a>
              <div className="flex flex-col space-y-2 pt-4 border-t border-gray-200">
                <button className="text-blue-600 hover:text-blue-700 font-medium transition-colors text-left">
                  Sign In
                </button>
                <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium">
                  Get Started
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}