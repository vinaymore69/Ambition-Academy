import React, { useEffect } from 'react';
import { Shield, Eye, Lock, UserCheck } from 'lucide-react';

const PrivacyPolicy = () => {
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
              <Shield className="h-12 w-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Privacy Policy
          </h1>
          <p className="text-xl text-navy-600">
            Your privacy is important to us. Learn how we protect your information.
          </p>
          <p className="text-navy-500 mt-2">Last updated: January 2024</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Introduction */}
          <section>
            <div className="flex items-center mb-4">
              <Eye className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Introduction</h2>
            </div>
            <p className="text-navy-600 leading-relaxed">
              At Ambition Academy, we are committed to protecting your privacy and ensuring the security of your personal information. 
              This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website 
              or use our educational services.
            </p>
          </section>

          {/* Information We Collect */}
          <section>
            <div className="flex items-center mb-4">
              <UserCheck className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Information We Collect</h2>
            </div>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Personal Information</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1">
                  <li>Name, email address, and phone number</li>
                  <li>Student's academic information and grade level</li>
                  <li>Parent/guardian contact information</li>
                  <li>Payment and billing information</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Usage Information</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1">
                  <li>Website usage data and analytics</li>
                  <li>Device information and IP address</li>
                  <li>Browser type and operating system</li>
                  <li>Pages visited and time spent on our website</li>
                </ul>
              </div>
            </div>
          </section>

          {/* How We Use Information */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">How We Use Your Information</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Educational Services</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Provide classes and educational materials</li>
                  <li>Track academic progress</li>
                  <li>Communicate with students and parents</li>
                  <li>Schedule classes and manage attendance</li>
                </ul>
              </div>
              <div className="bg-primary-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Administrative Purposes</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Process payments and billing</li>
                  <li>Send important notifications</li>
                  <li>Improve our services</li>
                  <li>Comply with legal requirements</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Information Sharing */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Information Sharing and Disclosure</h2>
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-4">
              <p className="text-navy-800 font-medium">
                We do not sell, trade, or rent your personal information to third parties.
              </p>
            </div>
            <p className="text-navy-600 mb-4">We may share your information only in the following circumstances:</p>
            <ul className="list-disc list-inside text-navy-600 space-y-2">
              <li>With your explicit consent</li>
              <li>To comply with legal obligations or court orders</li>
              <li>To protect our rights, property, or safety</li>
              <li>With trusted service providers who assist in our operations (under strict confidentiality agreements)</li>
              <li>In case of business transfer or merger (with prior notice)</li>
            </ul>
          </section>

          {/* Data Security */}
          <section>
            <div className="flex items-center mb-4">
              <Lock className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Data Security</h2>
            </div>
            <p className="text-navy-600 mb-4">
              We implement appropriate technical and organizational security measures to protect your personal information against 
              unauthorized access, alteration, disclosure, or destruction.
            </p>
            <div className="grid md:grid-cols-3 gap-4">
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-navy-800 mb-2">Encryption</h4>
                <p className="text-navy-600 text-sm">Data encrypted in transit and at rest</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-navy-800 mb-2">Access Control</h4>
                <p className="text-navy-600 text-sm">Limited access to authorized personnel only</p>
              </div>
              <div className="text-center p-4 bg-gray-50 rounded-lg">
                <h4 className="font-semibold text-navy-800 mb-2">Regular Audits</h4>
                <p className="text-navy-600 text-sm">Periodic security assessments and updates</p>
              </div>
            </div>
          </section>

          {/* Your Rights */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Your Rights</h2>
            <p className="text-navy-600 mb-4">You have the right to:</p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="list-disc list-inside text-navy-600 space-y-2">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your data</li>
                <li>Object to processing of your information</li>
              </ul>
              <ul className="list-disc list-inside text-navy-600 space-y-2">
                <li>Request data portability</li>
                <li>Withdraw consent at any time</li>
                <li>File a complaint with authorities</li>
                <li>Opt-out of marketing communications</li>
              </ul>
            </div>
          </section>

          {/* Cookies */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Cookies and Tracking</h2>
            <p className="text-navy-600 mb-4">
              We use cookies and similar technologies to enhance your browsing experience, analyze website traffic, 
              and understand where our visitors are coming from.
            </p>
            <div className="bg-blue-50 p-4 rounded-lg">
              <h4 className="font-semibold text-navy-800 mb-2">Types of Cookies We Use:</h4>
              <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                <li><strong>Analytics Cookies:</strong> Help us understand website usage</li>
                <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
              </ul>
            </div>
          </section>

          {/* Children's Privacy */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Children's Privacy</h2>
            <p className="text-navy-600 mb-4">
              As an educational institution serving students from grades 5-12, we take special care in protecting 
              the privacy of minors. We collect personal information from children only with parental consent and 
              for educational purposes.
            </p>
            <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
              <p className="text-navy-800 font-medium mb-2">Parental Rights:</p>
              <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                <li>Review your child's personal information</li>
                <li>Request correction or deletion of information</li>
                <li>Refuse further collection of your child's information</li>
                <li>Receive notification of our information practices</li>
              </ul>
            </div>
          </section>

          {/* Updates */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Policy Updates</h2>
            <p className="text-navy-600">
              We may update this Privacy Policy from time to time. We will notify you of any material changes by 
              posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you 
              to review this Privacy Policy periodically for any changes.
            </p>
          </section>

          {/* Contact */}
          <section className="bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Contact Us</h2>
            <p className="text-navy-600 mb-4">
              If you have any questions about this Privacy Policy or our privacy practices, please contact us:
            </p>
            <div className="space-y-2 text-navy-600">
              <p><strong>Email:</strong> privacy@ambitionacademy.com</p>
              <p><strong>Phone:</strong> +91 98765 43210</p>
              <p><strong>Address:</strong> 123 Education Street, Academic District, Pune, Maharashtra 411001</p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;