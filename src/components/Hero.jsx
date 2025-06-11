import React from 'react';
import { ArrowRight, Award, Users, BookOpen } from 'lucide-react';

const Hero = () => {
  return (
    <div className="bg-gradient-to-br from-primary-50 to-white py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl lg:text-6xl font-bold text-navy-900 leading-tight">
              Empowering Students from 
              <span className="text-primary-600"> Std 5 to 12</span>
            </h1>
            <p className="text-xl text-navy-600 mt-6 leading-relaxed">
              Expert Faculty • Proven Results • Comprehensive Notes
            </p>
            <p className="text-lg text-navy-500 mt-4 leading-relaxed">
              Join hundreds of successful students who have achieved their academic dreams with our 
              personalized teaching approach and comprehensive study materials.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <a
                href="mailto:info@ambitionacademy.com?subject=Enrollment Inquiry"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center group"
              >
                Enroll Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="tel:+919876543210"
                className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 text-center"
              >
                Call Now: +91 98765 43210
              </a>
            </div>
          </div>

          <div className="animate-slide-up">
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Students studying"
                className="rounded-2xl shadow-2xl w-full"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg">
                <div className="flex items-center space-x-4">
                  <div className="bg-primary-100 p-3 rounded-full">
                    <Award className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-navy-900">500+</p>
                    <p className="text-navy-600">Success Stories</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-16 animate-fade-in">
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="h-8 w-8 text-primary-600" />
            </div>
            <p className="text-3xl font-bold text-navy-900">15+</p>
            <p className="text-navy-600">Years Experience</p>
          </div>
          <div className="text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <BookOpen className="h-8 w-8 text-primary-600" />
            </div>
            <p className="text-3xl font-bold text-navy-900">8</p>
            <p className="text-navy-600">Grades Covered</p>
          </div>
          <div className="text-center col-span-2 md:col-span-1">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Award className="h-8 w-8 text-primary-600" />
            </div>
            <p className="text-3xl font-bold text-navy-900">92%</p>
            <p className="text-navy-600">Pass Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;