import React from 'react';
import { SKILLS } from '../lib/constants';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="py-24 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl lg:text-4xl font-extrabold text-slate-900 mb-16 text-center">Technical Expertise</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {Object.entries(SKILLS).map(([category, items], idx) => (
            <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-all">
              <h3 className="text-lg font-bold text-slate-900 mb-4 capitalize">{category}</h3>
              <div className="flex flex-wrap gap-2">
                {items.map((skill, i) => (
                  <span key={i} className="px-3 py-1 bg-indigo-50 text-indigo-700 text-xs font-medium rounded-full border border-indigo-100">
                    {skill}
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

export default Skills;