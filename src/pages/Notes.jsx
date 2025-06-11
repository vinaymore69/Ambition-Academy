import React, { useEffect, useState } from 'react';
import { NotesTable } from '../components/Table';
import { notes, notesByClass, availableClasses } from '../data/notesData';
import { BookOpen, Download, FileText, Filter } from 'lucide-react';

const Notes = () => {
  const [selectedClass, setSelectedClass] = useState('all');
  const [filteredNotes, setFilteredNotes] = useState(notes);

  useEffect(() => {
    // Scroll to top when component mounts
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    if (selectedClass === 'all') {
      setFilteredNotes(notes);
    } else {
      setFilteredNotes(notesByClass[selectedClass] || []);
    }
  }, [selectedClass]);

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex justify-center mb-6">
            <div className="bg-primary-100 p-4 rounded-full">
              <BookOpen className="h-12 w-12 text-primary-600" />
            </div>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-navy-900 mb-4">
            Study Notes & Materials
          </h1>
          <p className="text-xl text-navy-600 max-w-3xl mx-auto leading-relaxed">
            Download comprehensive class notes and revision materials prepared by our expert faculty. 
            All materials are regularly updated and aligned with the latest curriculum.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Comprehensive Content</h3>
            <p className="text-navy-600 text-sm">
              Detailed notes covering all topics with examples and practice questions
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Download className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Easy Download</h3>
            <p className="text-navy-600 text-sm">
              One-click download access to all study materials in PDF format
            </p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg text-center">
            <div className="bg-primary-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Filter className="h-8 w-8 text-primary-600" />
            </div>
            <h3 className="text-lg font-semibold text-navy-900 mb-2">Class-wise Filter</h3>
            <p className="text-navy-600 text-sm">
              Filter notes by class to find exactly what you need for your grade
            </p>
          </div>
        </div>

        {/* Class Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex items-center mb-4">
            <Filter className="h-5 w-5 text-primary-600 mr-2" />
            <h3 className="text-lg font-semibold text-navy-900">Filter by Class</h3>
          </div>
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => setSelectedClass('all')}
              className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                selectedClass === 'all'
                  ? 'bg-primary-600 text-white'
                  : 'bg-gray-100 text-navy-600 hover:bg-primary-100 hover:text-primary-700'
              }`}
            >
              All Classes
            </button>
            {availableClasses.map((className) => (
              <button
                key={className}
                onClick={() => setSelectedClass(className)}
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  selectedClass === className
                    ? 'bg-primary-600 text-white'
                    : 'bg-gray-100 text-navy-600 hover:bg-primary-100 hover:text-primary-700'
                }`}
              >
                {className}
              </button>
            ))}
          </div>
          <div className="mt-4 text-sm text-navy-500">
            Showing {filteredNotes.length} notes
            {selectedClass !== 'all' && ` for ${selectedClass}`}
          </div>
        </div>

        {/* Notes Table */}
        <div className="mb-8">
          <h2 className="text-2xl font-bold text-navy-900 mb-6">
            {selectedClass === 'all' ? 'All Study Materials' : `${selectedClass} Study Materials`}
          </h2>
          {filteredNotes.length > 0 ? (
            <NotesTable notesData={filteredNotes} />
          ) : (
            <div className="bg-white rounded-xl shadow-lg p-12 text-center">
              <BookOpen className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-navy-900 mb-2">No Notes Available</h3>
              <p className="text-navy-600">
                Notes for {selectedClass} are being prepared. Please check back soon or contact us for more information.
              </p>
            </div>
          )}
        </div>

        {/* Class-wise Download Summary */}
        <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
          <h3 className="text-2xl font-bold text-navy-900 mb-6 text-center">Notes Available by Class</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {availableClasses.map((className) => {
              const classNotes = notesByClass[className] || [];
              return (
                <div key={className} className="text-center p-4 bg-primary-50 rounded-lg">
                  <h4 className="font-semibold text-navy-900 mb-2">{className}</h4>
                  <p className="text-2xl font-bold text-primary-600 mb-1">{classNotes.length}</p>
                  <p className="text-navy-600 text-sm">Notes Available</p>
                  <button
                    onClick={() => setSelectedClass(className)}
                    className="mt-3 text-primary-600 hover:text-primary-700 text-sm font-medium transition-colors"
                  >
                    View Notes →
                  </button>
                </div>
              );
            })}
          </div>
        </div>

        {/* Additional Info */}
        <div className="bg-primary-50 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold text-navy-900 mb-4">Need More Study Materials?</h3>
          <p className="text-navy-600 mb-6 max-w-2xl mx-auto">
            We're constantly adding new study materials and notes. If you need notes for a specific topic 
            or have any questions about the content, feel free to reach out to us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="mailto:info@ambitionacademy.com?subject=Request for Study Materials"
              className="bg-primary-600 hover:bg-primary-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Request Notes
            </a>
            <a
              href="mailto:info@ambitionacademy.com?subject=Question about Study Materials"
              className="border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white px-6 py-3 rounded-lg font-semibold transition-colors"
            >
              Ask Questions
            </a>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-8 text-center">
          <p className="text-navy-500 text-sm">
            * All study materials are property of Ambition Academy. Please use them responsibly for educational purposes only.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Notes;