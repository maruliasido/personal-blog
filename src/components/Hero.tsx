
import React from 'react';
import profileImg from '../assets/profile.jpg';

const Hero: React.FC = () => {
  return (
    <section id="about" className="pt-32 pb-20 lg:pt-48 lg:pb-32 px-4 bg-gradient-to-b from-slate-50 to-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        <div className="flex-1 text-center lg:text-left">
          <div className="inline-block px-4 py-1.5 mb-6 text-sm font-bold tracking-widest text-indigo-600 uppercase bg-indigo-50 rounded-full border border-indigo-100 shadow-sm">
            Software Developer
          </div>
          <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 mb-6 leading-tight">
            I'm <span className="text-indigo-600">Maruli Asido</span>.
          </h1>
          <p className="text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
            Expert <span className="text-slate-900 font-semibold underline decoration-indigo-200 decoration-4">Software Developer</span> with a proven track record in high-performance <span className="font-semibold text-slate-900">HRIS</span> and <span className="font-semibold text-slate-900">Financial Systems</span>. 
            Committed to architectural excellence and system-wide optimizations.
          </p>
          
          <div className="flex flex-wrap justify-center lg:justify-start gap-4">
            <a 
              href="https://id.linkedin.com/in/maruli-asido-007095141" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all shadow-xl hover:shadow-indigo-100 active:scale-95"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/></svg>
              LinkedIn
            </a>
            <a 
              href="https://github.com/maruliasido" 
              target="_blank" 
              rel="noopener noreferrer"
              className="group flex items-center gap-2 px-8 py-4 bg-white text-slate-900 border-2 border-slate-100 font-bold rounded-2xl hover:border-indigo-200 hover:bg-indigo-50 transition-all shadow-md active:scale-95"
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
              GitHub
            </a>
          </div>
        </div>
        
        <div className="flex-1 relative">
          <div className="w-64 h-64 lg:w-96 lg:h-96 mx-auto relative group">
             <div className="absolute inset-0 bg-indigo-600 rounded-[3rem] rotate-6 opacity-5 group-hover:rotate-12 transition-transform duration-500"></div>
             <div className="absolute inset-0 bg-indigo-400 rounded-[3rem] -rotate-3 opacity-5 group-hover:-rotate-6 transition-transform duration-500"></div>
             <img 
               src={profileImg}
               alt="Maruli Asido" 
               onError={(e) => {
                 (e.target as HTMLImageElement).src = "";
               }}
               className="relative z-10 w-full h-full object-cover rounded-[3rem] shadow-2xl border-8 border-white group-hover:scale-[1.02] transition-transform duration-500"
             />
             {/* <div className="absolute -bottom-4 -right-4 z-20 bg-white p-4 rounded-2xl shadow-xl border border-slate-100 hidden lg:block">
               <p className="text-xs font-black text-indigo-600 uppercase tracking-widest mb-1">Expertise</p>
               <p className="text-sm font-bold text-slate-900">Java & Financial Core</p>
             </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
