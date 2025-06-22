import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-navy-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Brand & Description */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-primary-400" />
              <span className="text-xl font-bold">Ambition Academy</span>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students from Std 5 to 12 with expert faculty, proven results, and comprehensive study materials. Your success is our mission.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://www.instagram.com/ambitionacademy1517/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-primary-400 transition-colors"
              >
                <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <Instagram className="h-5 w-5" />
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-sm font-bold">f</span>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-400 transition-colors">
                <div className="w-10 h-10 bg-navy-800 rounded-full flex items-center justify-center hover:bg-primary-600 transition-colors">
                  <span className="text-sm font-bold">t</span>
                </div>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact Information</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">
                    Room No .08, Javed Manzil , Ground floor, 
                    <br />
                    Kishore kumar Ganguly Marg, Juhu Tara road ,
                     <br /> Santacruz (W) , Mumbai - 400 049
                  </p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <div>
                  <p className="text-gray-300">+919987104801</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-primary-400 flex-shrink-0" />
                <p className="text-gray-300">info@ambitionacademy.com</p>
              </div>
            </div>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Office Hours</h3>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Monday - Saturday</p>
                  <p className="text-gray-400">9:00 AM - 8:00 PM</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-primary-400 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-gray-300 font-medium">Sunday</p>
                  <p className="text-gray-400">10:00 AM - 2:00 PM</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-navy-800 rounded-lg">
              <h4 className="font-semibold text-primary-400 mb-2">Quick Enrollment</h4>
              <p className="text-gray-300 text-sm mb-3">Ready to join? Contact us now!</p>
              <a
                href="mailto:info@ambitionacademy.com?subject=Quick Enrollment Inquiry"
                className="inline-block bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
              >
                Enroll Now
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-navy-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © 2024 Ambition Academy. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link to="/privacy-policy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms-conditions" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Terms & Conditions
              </Link>
              <Link to="/admission-policy" className="text-gray-400 hover:text-primary-400 text-sm transition-colors">
                Admission Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;