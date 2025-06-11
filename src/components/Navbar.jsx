import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  const scrollToSection = (sectionId) => {
    if (location.pathname !== '/') {
      // If not on home page, navigate to home first
      window.location.href = `/#${sectionId}`;
    } else {
      // If on home page, scroll to section
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <GraduationCap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-navy-800">Ambition Academy</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              to="/"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-navy-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Home
            </Link>
            <button
              onClick={() => scrollToSection('classes')}
              className="px-3 py-2 rounded-md text-sm font-medium text-navy-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Classes
            </button>
            <button
              onClick={() => scrollToSection('faculty')}
              className="px-3 py-2 rounded-md text-sm font-medium text-navy-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
            >
              Faculty
            </button>
            <Link
              to="/notes"
              className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                isActive('/notes') 
                  ? 'text-primary-600 bg-primary-50' 
                  : 'text-navy-600 hover:text-primary-600 hover:bg-primary-50'
              }`}
            >
              Notes
            </Link>
            <a
              href="mailto:info@ambitionacademy.com"
              className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors"
            >
              Contact Us
            </a>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-navy-600 hover:text-primary-600 transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t border-gray-200">
              <Link
                to="/"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-navy-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>
              <button
                onClick={() => scrollToSection('classes')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-navy-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Classes
              </button>
              <button
                onClick={() => scrollToSection('faculty')}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-navy-600 hover:text-primary-600 hover:bg-primary-50 transition-colors"
              >
                Faculty
              </button>
              <Link
                to="/notes"
                className={`block px-3 py-2 rounded-md text-base font-medium transition-colors ${
                  isActive('/notes') 
                    ? 'text-primary-600 bg-primary-50' 
                    : 'text-navy-600 hover:text-primary-600 hover:bg-primary-50'
                }`}
                onClick={() => setIsOpen(false)}
              >
                Notes
              </Link>
              <a
                href="mailto:info@ambitionacademy.com"
                className="block bg-primary-600 hover:bg-primary-700 text-white px-3 py-2 rounded-md text-base font-medium transition-colors"
                onClick={() => setIsOpen(false)}
              >
                Contact Us
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;