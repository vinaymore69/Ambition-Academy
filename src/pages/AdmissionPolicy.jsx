import React, { useEffect } from 'react';
import { GraduationCap, Users, Calendar, CreditCard, CheckCircle, AlertTriangle } from 'lucide-react';

const AdmissionPolicy = () => {
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
              <GraduationCap className="h-12 w-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Admission Policy
          </h1>
          <p className="text-xl text-navy-600">
            Your pathway to academic excellence starts here.
          </p>
          <p className="text-navy-500 mt-2">Academic Year 2024-25</p>
        </div>

        {/* Content */}
        <div className="bg-white rounded-xl shadow-lg p-8 space-y-8">
          
          {/* Overview */}
          <section>
            <div className="flex items-center mb-4">
              <Users className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Admission Overview</h2>
            </div>
            <p className="text-navy-600 leading-relaxed mb-4">
              Ambition Academy welcomes students from grades 5 to 12 who are committed to academic excellence. 
              Our admission process is designed to ensure that we can provide the best possible educational 
              experience for each student.
            </p>
            <div className="bg-primary-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-navy-800 mb-3">What Makes Us Different</h3>
              <div className="grid md:grid-cols-2 gap-4">
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Small batch sizes for personalized attention</li>
                  <li>Expert faculty with proven track records</li>
                  <li>Comprehensive study materials included</li>
                  <li>Regular progress monitoring and feedback</li>
                </ul>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Flexible timing options</li>
                  <li>Individual doubt clearing sessions</li>
                  <li>Parent-teacher interaction programs</li>
                  <li>Exam preparation and mock tests</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Eligibility Criteria */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Eligibility Criteria</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">Grades 5-8</h3>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>Age appropriate for the grade level</li>
                    <li>Previous academic records</li>
                    <li>Basic assessment test</li>
                    <li>Parent-student interview</li>
                  </ul>
                </div>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">Grades 9-10</h3>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>Minimum 60% in previous grade</li>
                    <li>Strong foundation in Mathematics and Science</li>
                    <li>Entrance assessment</li>
                    <li>Commitment to regular attendance</li>
                  </ul>
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-purple-50 border border-purple-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">Grades 11-12 (Science)</h3>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>Minimum 70% in Class 10 (for Grade 11)</li>
                    <li>Strong performance in Mathematics and Science</li>
                    <li>Subject-specific aptitude test</li>
                    <li>Career counseling session</li>
                  </ul>
                </div>
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-lg">
                  <h3 className="text-lg font-semibold text-navy-800 mb-2">Transfer Students</h3>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>Transfer certificate from previous school</li>
                    <li>Academic records for last 2 years</li>
                    <li>Assessment based on current syllabus</li>
                    <li>Availability in desired batch</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Application Process */}
          <section>
            <div className="flex items-center mb-4">
              <Calendar className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Application Process</h2>
            </div>
            <div className="space-y-6">
              <div className="grid md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">1</div>
                  <h4 className="font-semibold text-navy-800 mb-1">Inquiry</h4>
                  <p className="text-navy-600 text-xs">Contact us for information</p>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">2</div>
                  <h4 className="font-semibold text-navy-800 mb-1">Application</h4>
                  <p className="text-navy-600 text-xs">Submit required documents</p>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">3</div>
                  <h4 className="font-semibold text-navy-800 mb-1">Assessment</h4>
                  <p className="text-navy-600 text-xs">Take entrance test</p>
                </div>
                <div className="text-center p-4 bg-primary-50 rounded-lg">
                  <div className="bg-primary-600 text-white w-8 h-8 rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">4</div>
                  <h4 className="font-semibold text-navy-800 mb-1">Enrollment</h4>
                  <p className="text-navy-600 text-xs">Complete admission formalities</p>
                </div>
              </div>

              <div className="bg-gray-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-4">Step-by-Step Guide</h3>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800">Initial Inquiry</p>
                      <p className="text-navy-600 text-sm">Contact us via phone, email, or visit our center for detailed information about courses and schedules.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800">Document Submission</p>
                      <p className="text-navy-600 text-sm">Submit application form with required documents and photographs.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800">Assessment Test</p>
                      <p className="text-navy-600 text-sm">Appear for entrance assessment to evaluate current academic level.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800">Interview & Counseling</p>
                      <p className="text-navy-600 text-sm">Parent-student interview and academic counseling session.</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <div>
                      <p className="font-medium text-navy-800">Admission Confirmation</p>
                      <p className="text-navy-600 text-sm">Complete fee payment and receive admission confirmation.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Required Documents */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Required Documents</h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-blue-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">For All Students</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Completed application form</li>
                  <li>Recent passport-size photographs (4 copies)</li>
                  <li>Birth certificate or age proof</li>
                  <li>Address proof (utility bill/Aadhar card)</li>
                  <li>Parent/Guardian ID proof</li>
                  <li>Medical fitness certificate (if required)</li>
                </ul>
              </div>
              <div className="bg-green-50 p-6 rounded-lg">
                <h3 className="text-lg font-semibold text-navy-800 mb-3">Academic Documents</h3>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Previous year's mark sheet/report card</li>
                  <li>Transfer certificate (for transfer students)</li>
                  <li>Character certificate from previous school</li>
                  <li>Progress report from current academic year</li>
                  <li>Any achievement certificates (optional)</li>
                  <li>Caste certificate (if applicable)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Fee Structure */}
          <section>
            <div className="flex items-center mb-4">
              <CreditCard className="h-6 w-6 text-primary-600 mr-3" />
              <h2 className="text-2xl font-bold text-navy-900">Fee Structure & Payment</h2>
            </div>
            <div className="space-y-4">
              <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4">
                <p className="text-navy-800 font-medium mb-2">Admission Fees (One-time)</p>
                <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                  <li>Registration Fee: ₹500 (non-refundable)</li>
                  <li>Admission Fee: ₹1,000</li>
                  <li>Security Deposit: ₹2,000 (refundable)</li>
                  <li>Study Material Fee: ₹1,500 per subject</li>
                </ul>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                <div className="bg-primary-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800 mb-2">Monthly Tuition Fees</h4>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>Grades 5-6: ₹2,500/month</li>
                    <li>Grades 7-8: ₹3,000/month</li>
                    <li>Grade 9: ₹3,500/month</li>
                    <li>Grade 10: ₹4,000/month</li>
                    <li>Grades 11-12: ₹5,000-5,500/month</li>
                  </ul>
                </div>
                <div className="bg-green-50 p-4 rounded-lg">
                  <h4 className="font-semibold text-navy-800 mb-2">Payment Options</h4>
                  <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                    <li>Monthly payment (due by 5th of each month)</li>
                    <li>Quarterly payment (5% discount)</li>
                    <li>Half-yearly payment (8% discount)</li>
                    <li>Annual payment (12% discount)</li>
                  </ul>
                </div>
              </div>

              <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                <div className="flex items-start space-x-2">
                  <AlertTriangle className="h-5 w-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-navy-800 mb-2">Important Fee Policies</h4>
                    <ul className="list-disc list-inside text-navy-600 space-y-1 text-sm">
                      <li>Late payment charges: ₹100 per week after due date</li>
                      <li>Returned cheque charges: ₹500</li>
                      <li>Fee once paid is non-refundable except security deposit</li>
                      <li>Fee revision may occur with 30 days notice</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Scholarships */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Scholarships & Discounts</h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-yellow-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Merit Scholarship</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">Up to 25%</p>
                <p className="text-navy-600 text-sm">For students with 90%+ in previous grade</p>
              </div>
              <div className="bg-blue-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Sibling Discount</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">15% Off</p>
                <p className="text-navy-600 text-sm">For second child onwards in the same family</p>
              </div>
              <div className="bg-green-50 p-6 rounded-lg text-center">
                <h3 className="text-lg font-semibold text-navy-800 mb-2">Early Bird Discount</h3>
                <p className="text-2xl font-bold text-primary-600 mb-2">10% Off</p>
                <p className="text-navy-600 text-sm">For admissions taken before March 31st</p>
              </div>
            </div>
          </section>

          {/* Important Dates */}
          <section>
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Important Dates</h2>
            <div className="bg-primary-50 p-6 rounded-lg">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold text-navy-800 mb-3">Admission Timeline</h4>
                  <ul className="space-y-2 text-navy-600 text-sm">
                    <li><strong>Application Start:</strong> January 15, 2024</li>
                    <li><strong>Last Date to Apply:</strong> May 31, 2024</li>
                    <li><strong>Assessment Tests:</strong> March - May 2024</li>
                    <li><strong>Final Admission:</strong> June 15, 2024</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-semibold text-navy-800 mb-3">Academic Calendar</h4>
                  <ul className="space-y-2 text-navy-600 text-sm">
                    <li><strong>Classes Begin:</strong> June 20, 2024</li>
                    <li><strong>First Term:</strong> June - September</li>
                    <li><strong>Second Term:</strong> October - March</li>
                    <li><strong>Annual Exams:</strong> March - April</li>
                  </ul>
                </div>
              </div>
            </div>
          </section>

          {/* Contact for Admission */}
          <section className="bg-primary-50 p-6 rounded-lg">
            <h2 className="text-2xl font-bold text-navy-900 mb-4">Ready to Apply?</h2>
            <p className="text-navy-600 mb-6">
              Take the first step towards academic excellence. Contact our admission team for personalized guidance 
              and to schedule your assessment.
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-semibold text-navy-800 mb-2">Contact Information</h4>
                <div className="space-y-2 text-navy-600 text-sm">
                  <p><strong>Admission Helpline:</strong> +91 98765 43210</p>
                  <p><strong>Email:</strong> admissions@ambitionacademy.com</p>
                  <p><strong>Office Hours:</strong> Mon-Sat, 9:00 AM - 6:00 PM</p>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-navy-800 mb-2">Visit Our Center</h4>
                <p className="text-navy-600 text-sm mb-3">
                  123 Education Street, Academic District<br />
                  Pune, Maharashtra 411001
                </p>
                <div className="flex space-x-3">
                  <a
                    href="mailto:admissions@ambitionacademy.com?subject=Admission Inquiry"
                    className="bg-primary-600 hover:bg-primary-700 text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Apply Now
                  </a>
                  <a
                    href="tel:+919876543210"
                    className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-4 py-2 rounded-lg text-sm font-medium transition-colors"
                  >
                    Call Us
                  </a>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default AdmissionPolicy;