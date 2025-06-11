import React from 'react';
import { Download, ExternalLink } from 'lucide-react';

const Table = ({ children, className = '' }) => {
  return (
    <div className={`overflow-x-auto bg-white rounded-xl shadow-lg border border-gray-100 ${className}`}>
      <table className="min-w-full divide-y divide-gray-200">
        {children}
      </table>
    </div>
  );
};

export const ScheduleTable = ({ scheduleData }) => {
  return (
    <Table>
      <thead className="bg-primary-50">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Grade</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Days</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Time</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Fee</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {scheduleData.map((schedule, index) => (
          <tr key={index} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-navy-900">{schedule.grade}</td>
            <td className="px-6 py-4 text-sm text-navy-600">{schedule.days}</td>
            <td className="px-6 py-4 text-sm text-navy-600">{schedule.time}</td>
            <td className="px-6 py-4 text-sm font-semibold text-primary-600">{schedule.fee}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export const NotesTable = ({ notesData }) => {
  return (
    <Table>
      <thead className="bg-primary-50">
        <tr>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Subject</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Topic</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Class</th>
          <th className="px-6 py-4 text-left text-sm font-semibold text-navy-900">Description</th>
          <th className="px-6 py-4 text-center text-sm font-semibold text-navy-900">Download</th>
        </tr>
      </thead>
      <tbody className="divide-y divide-gray-200">
        {notesData.map((note, index) => (
          <tr key={index} className="hover:bg-gray-50 transition-colors">
            <td className="px-6 py-4 text-sm font-medium text-navy-900">{note.subject}</td>
            <td className="px-6 py-4 text-sm text-navy-600">{note.topic}</td>
            <td className="px-6 py-4 text-sm text-navy-600">{note.class}</td>
            <td className="px-6 py-4 text-sm text-navy-500">{note.description}</td>
            <td className="px-6 py-4 text-center">
              <a
                href={note.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-3 py-2 bg-primary-600 hover:bg-primary-700 text-white rounded-lg text-sm font-medium transition-colors group"
              >
                <Download className="h-4 w-4 mr-1" />
                Download
                <ExternalLink className="h-4 w-4 ml-1 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default Table;