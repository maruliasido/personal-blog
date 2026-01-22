import React, { useState, useEffect, useCallback } from 'react';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 20);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Experience', href: '#experience' },
    { name: 'Education', href: '#education' },
    { name: 'Skills', href: '#skills' },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center text-white font-bold text-xl">
            MA
          </div>
          <span className="font-bold text-xl tracking-tight text-slate-900">
            Maruli Asido
          </span>
        </div>
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-slate-600 hover:text-indigo-600 font-medium transition-colors text-lg hover:shadow-lg"
            >
              {link.name}
            </a>
          ))}
        </div>
        <a
          href="mailto:maruliasido@gmail.com"
          className="bg-indigo-600 text-white px-5 py-2 rounded-full font-semibold text-lg hover:bg-indigo-700 transition-all shadow-md"
        >
          Contact
        </a>
      </div>
    </nav>
  );
};

export default Navbar;