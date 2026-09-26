import React, { useEffect } from 'react';
import { Project } from '../types';
import { X, ArrowRight, CheckCircle2, TrendingUp, Calendar, Building, Layers } from 'lucide-react';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
  onStartSimilar: (projectTitle: string) => void;
}

export const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose, onStartSimilar }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  if (!project) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="relative w-full max-w-4xl bg-[#0B101D] border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-800 bg-slate-900/50">
          <div className="flex items-center gap-2 text-xs text-slate-400">
            <span className="text-blue-400 font-medium">{project.categoryLabel}</span>
            <span aria-hidden="true" className="text-slate-600">·</span>
            <span>Case Study</span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800 transition-colors"
            aria-label="Close Case Study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 sm:p-8 space-y-8 max-h-[80vh] overflow-y-auto">
          {/* Main Title & Lead */}
          <div className="space-y-3">
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-snug">
              {project.title}
            </h2>
            <p className="text-slate-300 text-base leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Quick Meta Row */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-900/70 border border-slate-800 text-xs">
            <div className="space-y-1">
              <span className="text-slate-500 flex items-center gap-1">
                <Building className="w-3.5 h-3.5 text-slate-400" /> Client
              </span>
              <p className="font-semibold text-white">{project.client}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 flex items-center gap-1">
                <Layers className="w-3.5 h-3.5 text-slate-400" /> Industry
              </span>
              <p className="font-semibold text-white">{project.industry}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 flex items-center gap-1">
                <Calendar className="w-3.5 h-3.5 text-slate-400" /> Completed
              </span>
              <p className="font-semibold text-white">{project.completedDate}</p>
            </div>
            <div className="space-y-1">
              <span className="text-slate-500 flex items-center gap-1">
                <TrendingUp className="w-3.5 h-3.5 text-emerald-400" /> Primary Lift
              </span>
              <p className="font-semibold text-emerald-400 font-mono">{project.keyMetric} {project.metricLabel}</p>
            </div>
          </div>

          {/* Hero Media Preview */}
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden border border-slate-800 bg-slate-950">
            <img
              src={project.image}
              alt={project.title}
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quantified Business Impact Cards */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-white flex items-center gap-2">
              <TrendingUp className="w-4 h-4 text-emerald-400" />
              <span>Measurable Client Outcomes</span>
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {project.impactMetrics.map((metric, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-slate-900/60 border border-slate-800">
                  <div className="text-2xl font-bold font-mono text-emerald-400">{metric.value}</div>
                  <div className="text-xs font-semibold text-white mt-1">{metric.label}</div>
                  <div className="text-xs text-slate-400 mt-1">{metric.detail}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Challenge & Solution Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-rose-400">The Problem & Bottleneck</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.challenge}</p>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/40 border border-slate-800 space-y-2">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-blue-400">The AI & Engineering Solution</h4>
              <p className="text-sm text-slate-300 leading-relaxed">{project.solution}</p>
            </div>
          </div>

          {/* Tech Stack */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-slate-400">Technologies & Integrations Used</h4>
            <div className="flex flex-wrap gap-2">
              {project.tags.map((tag, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-xs font-mono text-slate-300 bg-slate-900 rounded-md border border-slate-700"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Testimonial Quote */}
          {project.testimonial && (
            <div className="p-5 rounded-xl bg-blue-950/20 border border-blue-900/40 space-y-3">
              <p className="text-sm italic text-slate-200 leading-relaxed">
                "{project.testimonial.quote}"
              </p>
              <div className="text-xs">
                <span className="font-semibold text-white">{project.testimonial.author}</span>
                <span className="text-slate-400"> · {project.testimonial.role}, {project.testimonial.company}</span>
              </div>
            </div>
          )}

          {/* Action Row */}
          <div className="pt-4 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-xs text-slate-400">
              Need a similar solution for your business?
            </div>
            <div className="flex items-center gap-3 w-full sm:w-auto">
              <button
                onClick={onClose}
                className="w-1/2 sm:w-auto px-4 py-2 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-lg"
              >
                Close
              </button>
              <button
                onClick={() => {
                  onStartSimilar(project.title);
                  onClose();
                }}
                className="w-1/2 sm:w-auto px-5 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-lg flex items-center justify-center gap-1.5"
              >
                <span>Request Scope Like This</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
