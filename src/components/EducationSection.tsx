import React from 'react';
import { FORMAL_EDUCATION, INFORMAL_EDUCATION } from '../lib/constants';

const EducationSection: React.FC = () => {
  return (
    <section id="education" className="py-24 px-4 bg-slate-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl font-extrabold text-slate-900 mb-12 text-center">Education</h2>
        <div className="grid lg:grid-cols-2 gap-12">
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-indigo-600 mb-6 uppercase tracking-wider">Formal Education</h3>
            {FORMAL_EDUCATION.map((edu, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-slate-600">{edu.institution} ({edu.period})</p>
                <p className="text-indigo-600 font-semibold text-sm mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xl font-bold text-emerald-600 mb-6 uppercase tracking-wider">Informal Education</h3>
            {INFORMAL_EDUCATION.map((edu, idx) => (
              <div key={idx}>
                <h4 className="text-lg font-bold text-slate-900">{edu.degree}</h4>
                <p className="text-slate-600">{edu.institution} ({edu.period})</p>
                <p className="text-emerald-600 font-semibold text-sm mt-1">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;