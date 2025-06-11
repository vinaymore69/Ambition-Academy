import React, { useEffect } from 'react';
import Hero from '../components/Hero';
import { ClassCard, FacultyCard, TopperCard } from '../components/Card';
import { ScheduleTable } from '../components/Table';
import { classes } from '../data/classesData';
import { schedule } from '../data/scheduleData';
import { faculty } from '../data/facultyData';
import { toppers } from '../data/topperData';
import { BookOpen, Users, Award, Target } from 'lucide-react';

const Home = () => {
  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);

    // Handle hash navigation for smooth scrolling
    const hash = window.location.hash;
    if (hash) {
      setTimeout(() => {
        const element = document.getElementById(hash.substring(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              About Ambition Academy
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
              Nurturing academic excellence through personalized education and comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <img
                src="https://images.pexels.com/photos/8197562/pexels-photo-8197562.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Teaching excellence"
                className="rounded-2xl shadow-lg w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-navy-900 mb-6">Our Mission & Vision</h3>
              <p className="text-navy-600 mb-6 leading-relaxed">
                At Ambition Academy, we believe every student has the potential to excel. Our mission is to provide 
                high-quality education that not only helps students achieve academic success but also builds their 
                confidence and critical thinking skills.
              </p>
              <p className="text-navy-600 mb-8 leading-relaxed">
                With over 15 years of experience in education, we have developed a teaching methodology that combines 
                traditional excellence with modern approaches, ensuring our students are well-prepared for their 
                board examinations and future academic pursuits.
              </p>

              <div className="grid grid-cols-2 gap-6">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Target className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="font-semibold text-navy-900">Goal-Oriented</p>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <Users className="h-8 w-8 text-primary-600 mx-auto mb-2" />
                  <p className="font-semibold text-navy-900">Personalized Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Classes Section */}
      <section id="classes" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Classes
            </h2>
            <p className="text-xl text-navy-600 max-w-3xl mx-auto">
              Comprehensive programs designed for every grade from 5th to 12th standard
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {classes.map((classData, index) => (
              <ClassCard key={index} classData={classData} />
            ))}
          </div>
        </div>
      </section>

      {/* Schedule & Fees Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Class Schedule & Fees
            </h2>
            <p className="text-xl text-navy-600">
              Flexible timings designed to accommodate your schedule
            </p>
          </div>

          <ScheduleTable scheduleData={schedule} />

          <div className="mt-8 text-center">
            <p className="text-navy-600 mb-4">
              Special discounts available for siblings and early enrollment
            </p>
            <a
              href="mailto:info@ambitionacademy.com?subject=Fee Structure Inquiry"
              className="inline-flex items-center bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Get Detailed Fee Structure
            </a>
          </div>
        </div>
      </section>

      {/* Faculty Section */}
      <section id="faculty" className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Meet Our Expert Faculty
            </h2>
            <p className="text-xl text-navy-600">
              Experienced educators dedicated to your success
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {faculty.map((facultyMember, index) => (
              <FacultyCard key={index} faculty={facultyMember} />
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-navy-900 mb-4">
              Our Success Stories
            </h2>
            <p className="text-xl text-navy-600">
              Celebrating the achievements of our brilliant students
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
            {toppers.map((topper, index) => (
              <TopperCard key={index} topper={topper} />
            ))}
          </div>

          <div className="text-center mt-12">
            <div className="bg-primary-50 rounded-2xl p-8 inline-block">
              <Award className="h-16 w-16 text-primary-600 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-navy-900 mb-2">Join Our Success Family</h3>
              <p className="text-navy-600 mb-6">
                Be the next success story with our proven teaching methodology
              </p>
              <a
                href="mailto:info@ambitionacademy.com?subject=Success Program Inquiry"
                className="bg-primary-600 hover:bg-primary-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors"
              >
                Start Your Journey
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;