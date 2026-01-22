
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white pt-20 pb-10 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-indigo-600 rounded-xl flex items-center justify-center text-white font-black text-xl">
              MA
            </div>
            <span className="font-black text-2xl tracking-tighter">Maruli Asido</span>
          </div>
          <p className="text-slate-400 max-w-sm text-lg leading-relaxed font-light">
            Software Developer committed to high-quality engineering, technical optimization, and continuous architectural evolution.
          </p>
        </div>

        <div className="flex flex-col items-start md:items-end gap-6">
          <div className="text-left md:text-right">
            <p className="text-[10px] font-black uppercase tracking-[0.2em] text-indigo-400 mb-2">Portfolio Engine</p>
            <p className="text-sm text-slate-300">
              Developed using <span className="text-white font-bold">React 19 (Modern ESM)</span>
            </p>
          </div>
          
          <div className="flex gap-4">
            <a href="mailto:maruliasido@gmail.com" className="text-slate-500 hover:text-white transition-colors font-medium">
              Email
            </a>
            <span className="text-slate-700">•</span>
            <a href="https://github.com/maruliasido" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors font-medium">
              GitHub
            </a>
            <span className="text-slate-700">•</span>
            <a href="https://id.linkedin.com/in/maruli-asido-007095141" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors font-medium">
              LinkedIn
            </a>
          </div>
        </div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-slate-800 text-center">
        <p className="text-slate-500 text-[10px] font-bold uppercase tracking-[0.3em]">
          &copy; {new Date().getFullYear()} Maruli Asido — Software Developer
        </p>
      </div>
    </footer>
  );
};

export default Footer;
