import React from 'react';
import { Code2, Megaphone, Bot, CheckCircle, Database, BrainCircuit, ShieldCheck, Award } from 'lucide-react';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#080C14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Avatar & Personal Card (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800 bg-slate-900/60 shadow-xl max-w-md mx-auto lg:max-w-none">
              <div className="relative aspect-square overflow-hidden bg-slate-950">
                <img
                  src="/src/assets/images/aaditya_professional_portrait_1790398916504.jpg"
                  alt="Aaditya Raut - Senior Full-Stack Web App Developer & AI Architect"
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080C14] via-transparent to-transparent opacity-60" />
              </div>

              <div className="p-6 space-y-3">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-white">Aaditya Raut</h3>
                    <p className="text-xs text-blue-400 font-medium flex items-center gap-1.5 mt-0.5">
                      <Award className="w-3.5 h-3.5" />
                      <span>Full-Stack Engineer & AI Solutions Architect</span>
                    </p>
                  </div>
                  <span className="text-xs font-mono px-2 py-1 rounded bg-blue-950/80 text-blue-300 border border-blue-800">
                    10 Projects Shipped
                  </span>
                </div>

                <div className="text-xs text-slate-300 space-y-2 pt-2 border-t border-slate-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Polyglot engineering: TypeScript, Python, Go, C++, SQL</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Machine Learning: LLMs, RAG, Triage Agents, Vector Search</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Database architecture: PostgreSQL, Supabase, Redis, Mongo</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Commercial track record: 10 enterprise & client launches</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bio & Philosophy (7 cols) */}
          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Engineering Philosophy & Practice
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight leading-tight">
                Architecting Modern Web Systems with Uncompromising Technical Rigor
              </h2>
            </div>

            <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                As a dedicated full-stack software engineer and AI solutions architect, I help companies turn complex technical requirements into elegant, high-performance web applications that scale effortlessly and drive tangible business revenue.
              </p>
              <p>
                My engineering approach is grounded in four foundational disciplines:
              </p>
              <ul className="space-y-2 text-sm text-slate-300 pl-1">
                <li className="flex items-start gap-2">
                  <strong className="text-white font-semibold min-w-[150px] shrink-0">1. Clean Full-Stack Code:</strong>
                  <span>Writing modular, test-covered TypeScript, React 19, Next.js, and Python backend services with clear architectural boundaries and predictable state machines.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-white font-semibold min-w-[150px] shrink-0">2. Applied AI & Machine Learning:</strong>
                  <span>Embedding intelligence directly into user workflows — contextual RAG search, document extraction models, multi-step customer triage agents, and real-time inference.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-white font-semibold min-w-[150px] shrink-0">3. Scalable Database Systems:</strong>
                  <span>Designing high-throughput relational schemas in PostgreSQL, low-latency in-memory cache tiers with Redis, and reactive sync via Supabase.</span>
                </li>
                <li className="flex items-start gap-2">
                  <strong className="text-white font-semibold min-w-[150px] shrink-0">4. Growth & Conversion Engineering:</strong>
                  <span>Optimizing Web Vitals for sub-second load times, executing technical local & national SEO architectures, and building high-converting customer acquisition funnels.</span>
                </li>
              </ul>
              <p>
                Having completed <strong className="text-white">10 commercial client builds</strong> across healthcare, finance, logistics, luxury real estate, and direct-to-consumer commerce, I offer end-to-end technical leadership with direct engineering communication and transparent sprint delivery.
              </p>
            </div>

            {/* Core Competency Quick Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 border-t border-slate-800 text-center">
              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <Code2 className="w-5 h-5 text-blue-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Coding</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">TypeScript · Python · Next</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <BrainCircuit className="w-5 h-5 text-indigo-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Machine Learning</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">RAG · LLMs · Triage</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <Database className="w-5 h-5 text-emerald-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Databases</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Postgres · Redis · SQL</div>
              </div>

              <div className="p-3 rounded-xl bg-slate-900/40 border border-slate-800">
                <Megaphone className="w-5 h-5 text-amber-400 mx-auto mb-1" />
                <div className="text-xs font-bold text-white">Growth & SEO</div>
                <div className="text-[10px] text-slate-400 font-mono mt-0.5">Ads · Web Vitals · CRO</div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
