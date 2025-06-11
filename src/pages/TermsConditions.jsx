import React, { useEffect } from 'react';
import { FileText, AlertCircle, CheckCircle, XCircle } from 'lucide-react';

const TermsConditions = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-4 rounded-full">
              <FileText className="h-12 w-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Terms & Conditions
          </h1>
          <p className="text-xl text-navy-600">
            Please read these terms carefully before using our services.
          </p>
          <p className="text-navy-500 mt-2">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-4">
              <AlertCircle className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Agreement to Terms</h2>
            </div>
            <p className="text-navy-600 leading-relaxed">
              By accessing and using the services of Ambition Academy, you accept and agree to be bound by the terms 
              and provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          {/* Services */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Our Services</h2>
            <p className="text-navy-600 mb-4">
              Ambition Academy provides educational services including but not limited to:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Academic Services</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Classroom teaching for grades 5-12</li>
                  <li>Study materials and notes</li>
                  <li>Test preparation and assessments</li>
                  <li>Academic counseling and guidance</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Digital Services</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Online study materials access</li>
                  <li>Digital notes and resources</li>
                  <li>Progress tracking and reports</li>
                  <li>Communication platforms</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Enrollment and Fees */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Enrollment and Fees</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Enrollment Process</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1">
                  <li>Enrollment is subject to availability and admission criteria</li>
                  <li>All required documents must be submitted during enrollment</li>
                  <li>Enrollment is confirmed only after fee payment</li>
                  <li>We reserve the right to refuse admission without stating reasons</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Fee Structure</h3>
                <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                  <ul className="list-disc list-inside text-navy-600 space-y-1">
                    <li>Fees are to be paid monthly in advance</li>
                    <li>Late payment may result in additional charges</li>
                    <li>Fee structure may be revised with prior notice</li>
                    <li>No refund for partial months or missed classes</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Student Responsibilities */}
          <section>
            <div className="flex items-center mb-4">
              <CheckCircle className="h-6 w-6 text-green-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Student Responsibilities</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Academic Conduct</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Regular attendance and punctuality</li>
                  <li>Completion of assignments and homework</li>
                  <li>Respectful behavior towards faculty and peers</li>
                  <li>Active participation in classes</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-3">General Conduct</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Maintain discipline and decorum</li>
                  <li>Follow academy rules and regulations</li>
                  <li>Inform about extended absences</li>
                  <li>Take care of academy property</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Prohibited Activities */}
          <section>
            <div className="flex items-center mb-4">
              <XCircle className="h-6 w-6 text-red-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Prohibited Activities</h2>
            </div>
            <div className="bg-red-50 border border-red-200 p-6 rounded-lg">
              <p className="text-navy-600 mb-4">The following activities are strictly prohibited:</p>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Disruptive behavior in classes</li>
                  <li>Cheating or academic dishonesty</li>
                  <li>Unauthorized sharing of study materials</li>
                  <li>Harassment of any kind</li>
                </ul>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Damage to academy property</li>
                  <li>Use of mobile phones during classes</li>
                  <li>Bringing prohibited items to academy</li>
                  <li>Violation of safety protocols</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Intellectual Property */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Intellectual Property</h2>
            <div className="space-y-4">
              <p className="text-navy-600">
                All study materials, notes, content, and resources provided by Ambition Academy are our intellectual property 
                and are protected by copyright laws.
              </p>
              <div className="bg-blue-50 p-4 rounded-lg">
                <h4 className="font-semibold text-navy-800 mb-2">Usage Rights:</h4>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Materials are for personal educational use only</li>
                  <li>Sharing or distribution without permission is prohibited</li>
                  <li>Commercial use of materials is strictly forbidden</li>
                  <li>Copyright notices must not be removed</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Cancellation and Refund */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Cancellation and Refund Policy</h2>
            <div className="space-y-4">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800 mb-2">Student Withdrawal</h4>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>30 days written notice required</li>
                    <li>No refund for current month fees</li>
                    <li>Advance payments may be adjusted</li>
                    <li>Clearance certificate required</li>
                  </ul>
                </div>
                <div className="bg-orange-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800 mb-2">Academy Termination</h4>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>We may terminate services for misconduct</li>
                    <li>Violation of terms may result in immediate termination</li>
                    <li>No refund in case of termination for misconduct</li>
                    <li>Decision of management is final</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Limitation of Liability */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Limitation of Liability</h2>
            <div className="bg-gray-50 p-6 rounded-lg">
              <p className="text-navy-600 mb-4">
                While we strive to provide the best educational services, Ambition Academy shall not be liable for:
              </p>
              <ul className="list-disc list-inside text-navy-600 space-y-1">
                <li>Academic performance or examination results</li>
                <li>Indirect, incidental, or consequential damages</li>
                <li>Loss of data or interruption of services</li>
                <li>Actions of third parties or external factors</li>
                <li>Force majeure events beyond our control</li>
              </ul>
            </div>
          </section>

          {/* Privacy and Data Protection */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Privacy and Data Protection</h2>
            <p className="text-navy-600 mb-4">
              Your privacy is important to us. Please refer to our Privacy Policy for detailed information about 
              how we collect, use, and protect your personal information.
            </p>
            <div className="bg-primary-50 p-4 rounded-lg">
              <p className="text-navy-800 font-medium">
                By using our services, you consent to the collection and use of your information as described in our Privacy Policy.
              </p>
            </div>
          </section>

          {/* Modifications */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Modifications to Terms</h2>
            <p className="text-navy-600">
              We reserve the right to modify these terms and conditions at any time. Changes will be effective immediately 
              upon posting on our website. Your continued use of our services after any such changes constitutes your 
              acceptance of the new terms and conditions.
            </p>
          </section>

          {/* Governing Law */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Governing Law</h2>
            <p className="text-navy-600">
              These terms and conditions are governed by and construed in accordance with the laws of India. 
              Any disputes arising under these terms shall be subject to the exclusive jurisdiction of the courts in Pune, Maharashtra.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Information</h2>
            <p className="text-navy-600 mb-4">
              If you have any questions about these Terms and Conditions, please contact us:
            </p>
            <div className="space-y-2 text-navy-600">
              <p><strong>Email:</strong> info@ambitionacademy.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123 Education Street, Academic District, Pune, Maharashtra 411001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;