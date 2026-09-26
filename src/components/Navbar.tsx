import React, { useState } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenEstimator, onOpenContact }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-[#080C14]/90 backdrop-blur-md border-b border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">
        {/* Zone 1: Single Brand Wordmark with sleek portrait thumbnail */}
        <a 
          href="#home" 
          className="text-lg font-bold tracking-tight text-white hover:text-blue-400 transition-colors flex items-center gap-2.5"
        >
          <div className="relative w-8 h-8 rounded-full overflow-hidden border border-slate-700 bg-slate-800 shrink-0">
            <img 
              src="/src/assets/images/aaditya_professional_portrait_1790398916504.jpg" 
              alt="Aaditya Raut" 
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-top"
            />
            <span className="absolute bottom-0 right-0 w-2 h-2 rounded-full bg-emerald-400 ring-2 ring-[#080C14]" />
          </div>
          <span>Aaditya Raut</span>
        </a>

        {/* Zone 2: 4-5 Clean Text Navigation Links */}
        <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-slate-300">
          <a href="#services" className="hover:text-white transition-colors">
            Capabilities
          </a>
          <a href="#skills" className="hover:text-white transition-colors">
            Skills & Stack
          </a>
          <a href="#projects" className="hover:text-white transition-colors flex items-center gap-1.5">
            <span>Completed Works</span>
            <span className="text-[11px] font-mono px-1.5 py-0.5 rounded bg-slate-800 text-blue-400 border border-slate-700">10</span>
          </a>
          <a href="#estimator" className="hover:text-white transition-colors">
            Scope Estimator
          </a>
          <a href="#about" className="hover:text-white transition-colors">
            About & Experience
          </a>
        </nav>

        {/* Zone 3: 1-2 Primary Actions */}
        <div className="hidden sm:flex items-center gap-3">
          <button
            onClick={onOpenEstimator}
            className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white transition-colors"
          >
            Calculate Scope
          </button>
          <button
            onClick={onOpenContact}
            className="px-5 py-2.5 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm shadow-blue-500/20 flex items-center gap-1.5 active:scale-95"
          >
            <span>Start a Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 text-slate-400 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle Navigation Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0B101B] border-b border-slate-800 px-4 pt-3 pb-6 space-y-3">
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-2"
          >
            Capabilities
          </a>
          <a
            href="#skills"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-2"
          >
            Skills & Stack
          </a>
          <a
            href="#projects"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-2"
          >
            Completed Works (10 Projects)
          </a>
          <a
            href="#estimator"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-2"
          >
            Scope Estimator
          </a>
          <a
            href="#about"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-sm font-medium text-slate-300 hover:text-white py-2"
          >
            About & Experience
          </a>
          <div className="pt-2 flex flex-col gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenContact();
              }}
              className="w-full py-2.5 text-center text-xs font-semibold text-white bg-blue-600 rounded-lg hover:bg-blue-500"
            >
              Start a Project
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
