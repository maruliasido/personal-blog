import React from 'react';
import { EXPERIENCES } from '../lib/constants';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-4">Professional Journey</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Hands-on experience building core systems for insurance, banking, and stock market platforms.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100 transition-all hover:shadow-md hover:border-indigo-100 group">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                    {exp.role}
                  </h3>
                  <p className="text-indigo-600 font-semibold">{exp.company}</p>
                </div>
                <div className="mt-2 md:mt-0 px-3 py-1 bg-slate-50 text-slate-500 text-sm font-medium rounded-full border border-slate-100">
                  {exp.period}
                </div>
              </div>
              <ul className="space-y-2 mb-6 text-slate-600 leading-relaxed list-disc pl-5">
                {exp.description.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
              {exp.notableAchievement && (
                <div className="mb-6 p-4 bg-green-50 border-l-4 border-green-400 rounded-r-lg">
                  <p className="text-green-800 text-sm font-bold text-left">Notable Achievement</p>
                  <p className="text-green-700 text-sm mt-1 text-left">{exp.notableAchievement}</p>
                </div>
              )}
              <div className="flex flex-wrap gap-2">
                {exp.tech.map((t, i) => (
                  <span key={i} className="px-3 py-1 bg-slate-50 text-slate-500 text-xs font-semibold rounded-md border border-slate-100">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;