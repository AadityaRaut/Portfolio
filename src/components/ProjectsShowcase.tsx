import React, { useState } from 'react';
import { Project } from '../types';
import { completedProjects } from '../data/projectsData';
import { ArrowUpRight, TrendingUp } from 'lucide-react';

interface ProjectsShowcaseProps {
  onSelectProject: (project: Project) => void;
}

export const ProjectsShowcase: React.FC<ProjectsShowcaseProps> = ({ onSelectProject }) => {
  const [activeFilter, setActiveFilter] = useState<'all' | 'ai-web-app' | 'ecommerce-portal' | 'marketing-growth'>('all');

  const filteredProjects = activeFilter === 'all'
    ? completedProjects
    : completedProjects.filter(p => p.category === activeFilter);

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-slate-800/80 bg-[#0A0E18]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
              Proven Track Record
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              10 Completed Client Projects
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Every project below was delivered for real business owners — engineered for speed, conversion, and tangible commercial return.
            </p>
          </div>

          {/* Interactive Filter Tabs (Buttons with click handlers) */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'all'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              All Projects (10)
            </button>
            <button
              onClick={() => setActiveFilter('ai-web-app')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'ai-web-app'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              AI Web Apps (4)
            </button>
            <button
              onClick={() => setActiveFilter('ecommerce-portal')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'ecommerce-portal'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              E-Commerce & Portals (3)
            </button>
            <button
              onClick={() => setActiveFilter('marketing-growth')}
              className={`px-3.5 py-1.5 text-xs font-medium rounded-lg transition-colors whitespace-nowrap ${
                activeFilter === 'marketing-growth'
                  ? 'bg-blue-600 text-white shadow-sm'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              Digital Marketing & Growth (3)
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => {
            // Apply subtle asymmetric prominence for first item in grid
            const isFeatured = index === 0 && activeFilter === 'all';

            return (
              <div
                key={project.id}
                className={`group relative flex flex-col justify-between rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200 overflow-hidden ${
                  isFeatured ? 'md:col-span-2 lg:col-span-2' : 'col-span-1'
                }`}
              >
                <div>
                  {/* Card Media Header */}
                  <div className="relative aspect-[16/10] w-full bg-slate-950 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                    
                    {/* Top Proof Metric Badge */}
                    <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-xs">
                      <div className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-900/90 text-emerald-400 border border-emerald-500/20 backdrop-blur-sm font-semibold">
                        <TrendingUp className="w-3.5 h-3.5" />
                        <span>{project.keyMetric} {project.metricLabel}</span>
                      </div>
                      <span className="text-[11px] font-mono text-slate-300 bg-slate-900/80 px-2 py-0.5 rounded border border-slate-700">
                        {project.timeline}
                      </span>
                    </div>
                  </div>

                  {/* Card Body */}
                  <div className="p-6 space-y-4">
                    {/* Unboxed Metadata Line with typographic separators */}
                    <div className="flex items-center gap-2 text-xs text-slate-400">
                      <span className="text-blue-400 font-medium">{project.categoryLabel}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span>{project.industry}</span>
                      <span aria-hidden="true" className="text-slate-600">·</span>
                      <span className="font-mono">{project.completedDate}</span>
                    </div>

                    {/* Project Title */}
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                      {project.title}
                    </h3>

                    {/* Short Description */}
                    <p className="text-sm text-slate-300 leading-relaxed">
                      {project.shortDescription}
                    </p>

                    {/* Tags List */}
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {project.tags.slice(0, 3).map((tag, idx) => (
                        <span
                          key={idx}
                          className="text-[11px] font-mono text-slate-400 bg-slate-800/80 px-2 py-0.5 rounded border border-slate-700/60"
                        >
                          {tag}
                        </span>
                      ))}
                      {project.tags.length > 3 && (
                        <span className="text-[11px] font-mono text-slate-500 px-1 py-0.5">
                          +{project.tags.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>

                {/* Footer Action */}
                <div className="p-6 pt-0 border-t border-slate-800/60 mt-4 flex items-center justify-between text-xs">
                  <span className="text-slate-400">Client: <strong className="text-slate-200">{project.client}</strong></span>
                  <button
                    onClick={() => onSelectProject(project)}
                    className="inline-flex items-center gap-1 font-semibold text-blue-400 hover:text-blue-300 group-hover:translate-x-0.5 transition-all"
                  >
                    <span>View Case Study</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
