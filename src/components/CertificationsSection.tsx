import React from 'react';
import { CERTIFICATIONS } from '../lib/constants';

const CertificationsSection: React.FC = () => {
  return (
    <section id="certifications" className="py-16 px-4 bg-white relative overflow-hidden">
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-72 h-72 bg-indigo-50 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-72 h-72 bg-amber-50 rounded-full blur-3xl opacity-30"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-10">
          <h2 className="text-2xl lg:text-3xl font-extrabold text-slate-900 mb-2">
            Professional <span className="text-indigo-600">Certifications</span>
          </h2>
          <p className="text-slate-500 max-w-xl mx-auto text-base">
            Validation of technical expertise and commitment to quality.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {CERTIFICATIONS.map((cert, idx) => (
            <div key={idx} className="group relative bg-white p-6 rounded-2xl border border-slate-100 hover:border-amber-200 hover:shadow-xl transition-all duration-300">
              <div className="absolute top-4 right-6 text-amber-400 opacity-5 group-hover:opacity-40 transition-opacity duration-500">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" /></svg>
              </div>
              
              <div className="relative z-10">
                <div className="inline-flex items-center px-2.5 py-1 bg-amber-50 text-amber-700 text-[10px] font-bold rounded-md mb-3 uppercase tracking-widest border border-amber-100">
                  {cert.provider}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 mb-4 leading-snug group-hover:text-indigo-600 transition-colors">
                  {cert.name}
                </h3>
                
                <div className="flex flex-wrap gap-2 mt-4">
                  <a 
                    href={cert.verificationUrl} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-1.5 px-3 py-1.5 bg-indigo-600 text-white text-xs font-semibold rounded-lg hover:bg-indigo-700 transition-all shadow-sm active:scale-95"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                    Verify
                  </a>
                  {cert.badgeUrl && (
                    <a 
                      href={cert.badgeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 px-3 py-1.5 bg-white text-slate-700 border border-slate-200 text-xs font-semibold rounded-lg hover:border-indigo-300 hover:bg-indigo-50 transition-all shadow-sm active:scale-95"
                    >
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg>
                      Badge
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;
