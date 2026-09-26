import React from 'react';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, Zap, Code2, Database, BrainCircuit } from 'lucide-react';

interface HeroProps {
  onOpenEstimator: () => void;
  onOpenContact: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenEstimator, onOpenContact }) => {
  return (
    <section id="home" className="relative pt-12 pb-20 md:pt-20 md:pb-28 overflow-hidden">
      {/* Subtle radial ambient glow in background */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-blue-600/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Proposition & Call to Action */}
          <div className="lg:col-span-7 space-y-8">
            {/* Unboxed Status Metadata */}
            <div className="flex flex-wrap items-center gap-2 text-xs font-medium text-slate-400">
              <span className="inline-flex items-center gap-1.5 text-blue-400 font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-400" />
                Senior Full-Stack Web App Developer & AI Architect
              </span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>10 Commercial Deployments</span>
              <span aria-hidden="true" className="text-slate-600">·</span>
              <span>Production Systems · Machine Learning · Performance Growth</span>
            </div>

            {/* Dominant Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-[1.08] text-balance">
              Engineering Scalable Web Apps, AI Workflows & High-Converting Digital Systems
            </h1>

            {/* Concrete Value Proposition */}
            <p className="text-base sm:text-lg text-slate-300 max-w-2xl leading-relaxed">
              Hi, I’m <strong className="text-white font-semibold">Aaditya Raut</strong>, a professional full-stack web developer and AI solutions consultant. I architect robust React/Next.js web applications, integrated machine learning pipelines, resilient database backends, and data-driven acquisition engines that deliver measurable revenue for businesses.
            </p>

            {/* Quick Skill Capability Ticker */}
            <div className="flex flex-wrap gap-2 text-xs font-mono text-slate-300">
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5 text-blue-400" /> TypeScript & Full-Stack
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <BrainCircuit className="w-3.5 h-3.5 text-indigo-400" /> Applied ML & Intelligent Agents
              </span>
              <span className="px-2.5 py-1 rounded bg-slate-900 border border-slate-800 flex items-center gap-1.5">
                <Database className="w-3.5 h-3.5 text-emerald-400" /> PostgreSQL & Cloud DBs
              </span>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <button
                onClick={onOpenContact}
                className="px-6 py-3.5 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 active:scale-95"
              >
                <span>Schedule Technical Consultation</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onOpenEstimator}
                className="px-6 py-3.5 text-sm font-semibold text-slate-200 bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all flex items-center justify-center gap-2"
              >
                <Sparkles className="w-4 h-4 text-blue-400" />
                <span>Estimate Project Scope & Cost</span>
              </button>
            </div>

            {/* Proof Metric Strip Adjacent to Value Proposition */}
            <div className="pt-6 border-t border-slate-800/80 grid grid-cols-2 sm:grid-cols-4 gap-6">
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">10</div>
                <div className="text-xs text-slate-400 mt-0.5">Commercial Launches</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">100%</div>
                <div className="text-xs text-slate-400 mt-0.5">On-Time Sprint Delivery</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">$450K+</div>
                <div className="text-xs text-slate-400 mt-0.5">Client Pipeline Generated</div>
              </div>
              <div>
                <div className="text-2xl sm:text-3xl font-bold font-mono text-white tabular-nums">99.9%</div>
                <div className="text-xs text-slate-400 mt-0.5">Uptime & Quality SLA</div>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Anchor & Workstation Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-2xl">
              {/* Media image container with fallback */}
              <div className="relative aspect-[4/3] bg-slate-950 overflow-hidden">
                <img
                  src="/src/assets/images/aaditya_studio_workstation_1790398941036.jpg"
                  alt="Aaditya Raut - Senior Full-Stack Developer & AI Solutions Architect"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-80" />
              </div>

              {/* Inset overlay card detailing delivery standard */}
              <div className="p-6 space-y-4">
                <div className="flex items-center justify-between text-xs text-slate-400 border-b border-slate-800/80 pb-3">
                  <span className="font-semibold text-slate-200">Professional Engineering Standards</span>
                  <span className="font-mono text-blue-400">Direct Senior Architect</span>
                </div>

                <div className="space-y-2.5 text-xs text-slate-300">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
                    <span>Strict TypeScript, clean architecture & automated test suites</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Zap className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>Applied Machine Learning, RAG & production LLM agents</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Database className="w-4 h-4 text-indigo-400 shrink-0" />
                    <span>PostgreSQL, Supabase & Redis database architectures</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-amber-400 shrink-0" />
                    <span>High-converting Google/Meta funnels & technical SEO</span>
                  </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs text-slate-400">
                  <span>Engagement Format</span>
                  <span className="font-mono text-white font-medium">Sprint Contracts & Retainers</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
