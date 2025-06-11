import React from 'react';
import { ArrowRight } from 'lucide-react';

const Card = ({ children, className = '', hover = true }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden ${hover ? 'hover:shadow-xl hover:-translate-y-1' : ''} transition-all duration-300 ${className}`}>
      {children}
    </div>
  );
};

export const ClassCard = ({ classData }) => {
  return (
    <Card className="h-full">
      <div className="p-6">
        <h3 className="text-xl font-bold text-navy-900 mb-2">{classData.grade}</h3>
        <p className="text-navy-600 mb-4 text-sm">{classData.description}</p>
        <div className="mb-6">
          <h4 className="font-semibold text-navy-800 mb-2">Subjects:</h4>
          <div className="flex flex-wrap gap-2">
            {classData.subjects.map((subject, index) => (
              <span
                key={index}
                className="bg-primary-100 text-primary-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {subject}
              </span>
            ))}
          </div>
        </div>
        <a
          href={`mailto:info@ambitionacademy.com?subject=Enrollment for ${classData.grade}`}
          className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white px-4 py-3 rounded-lg font-semibold transition-all duration-300 group"
        >
          Enroll Now
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </Card>
  );
};

export const FacultyCard = ({ faculty }) => {
  return (
    <Card className="h-full">
      <div className="p-6 text-center">
        <img
          src={faculty.photo}
          alt={faculty.name}
          className="w-24 h-24 rounded-full mx-auto mb-4 object-cover border-4 border-primary-100"
        />
        <h3 className="text-xl font-bold text-navy-900 mb-1">{faculty.name}</h3>
        <p className="text-primary-600 font-semibold mb-2">{faculty.subject}</p>
        <p className="text-navy-600 text-sm mb-3">{faculty.qualification}</p>
        <p className="text-navy-500 text-sm">{faculty.bio}</p>
      </div>
    </Card>
  );
};

export const TopperCard = ({ topper }) => {
  return (
    <Card className="h-full">
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-bold text-navy-900">{topper.name}</h3>
          <span className="bg-yellow-100 text-yellow-800 px-3 py-1 rounded-full text-sm font-semibold">
            {topper.percent}%
          </span>
        </div>
        <div className="space-y-2 text-sm">
          <p className="text-navy-600">
            <span className="font-semibold">Class:</span> {topper.class}
          </p>
          <p className="text-navy-600">
            <span className="font-semibold">Board:</span> {topper.board}
          </p>
          <p className="text-navy-600">
            <span className="font-semibold">Year:</span> {topper.year}
          </p>
          <div>
            <p className="font-semibold text-navy-800 mb-1">Top Subjects:</p>
            <div className="flex flex-wrap gap-1">
              {topper.topSubjects.map((subject, index) => (
                <span
                  key={index}
                  className="bg-primary-100 text-primary-700 px-2 py-1 rounded text-xs"
                >
                  {subject}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default Card;