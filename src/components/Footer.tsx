import React from 'react';
import { ArrowUp, Mail } from 'lucide-react';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#05080E] border-t border-slate-800/80 py-12 text-xs text-slate-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand & Statement */}
          <div className="space-y-1 text-center md:text-left">
            <div className="text-base font-bold text-white tracking-tight">
              Aaditya Raut
            </div>
            <p className="text-slate-400">
              Senior Full-Stack Engineer & AI Solutions Architect · Web Apps, Machine Learning, Databases & Growth.
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-slate-400 font-medium">
            <a href="#services" className="hover:text-white transition-colors">Capabilities</a>
            <a href="#skills" className="hover:text-white transition-colors">Skills & Stack</a>
            <a href="#projects" className="hover:text-white transition-colors">Completed Works (10)</a>
            <a href="#estimator" className="hover:text-white transition-colors">Scope Estimator</a>
            <a href="#about" className="hover:text-white transition-colors">About</a>
            <a href="#contact" className="hover:text-white transition-colors">Contact</a>
          </div>

          {/* Scroll to Top */}
          <div className="flex items-center gap-3">
            <a
              href="mailto:aadityaraut369@gmail.com"
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-slate-900 border border-slate-800 hover:text-white hover:border-slate-700 transition-colors flex items-center gap-1.5"
              aria-label="Scroll to Top"
            >
              <ArrowUp className="w-4 h-4" />
              <span className="text-[11px] font-semibold">Top</span>
            </button>
          </div>
        </div>

        <div className="pt-8 mt-8 border-t border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-slate-400 text-center sm:text-left">
          <p>© 2026 Aaditya Raut. Full-Stack Engineer & AI Consultant · 10 Commercial Client Projects Delivered.</p>
          <p className="font-mono text-[11px]">Engineered with TypeScript, React 19 & Tailwind CSS</p>
        </div>

      </div>
    </footer>
  );
};
