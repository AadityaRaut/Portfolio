import React from 'react';
import { servicesList } from '../data/servicesData';
import { Check, Clock, Wrench, ArrowRight } from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  return (
    <section id="services" className="py-20 md:py-28 bg-[#080C14]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="max-w-3xl mb-16 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Core Capabilities
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Engineered For Commercial Impact
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            I don’t just write code or run random ads. I build cohesive digital engines that attract qualified traffic, convert them through high-speed web apps, and automate client follow-ups.
          </p>
        </div>

        {/* Services List with Editorial Numbering */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {servicesList.map((service) => (
            <div
              key={service.number}
              className="flex flex-col justify-between p-8 rounded-2xl bg-slate-900/50 border border-slate-800 hover:border-slate-700 transition-all duration-200"
            >
              <div className="space-y-6">
                {/* Number & Headline */}
                <div>
                  <span className="text-sm font-mono font-bold text-blue-400">
                    {service.number}.
                  </span>
                  <h3 className="text-xl font-bold text-white mt-1">
                    {service.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-400 mt-1">
                    {service.subtitle}
                  </p>
                </div>

                {/* Description */}
                <p className="text-sm text-slate-300 leading-relaxed">
                  {service.description}
                </p>

                {/* Deliverables Checklist */}
                <div className="space-y-2.5 pt-2 border-t border-slate-800/80">
                  <div className="text-xs font-semibold uppercase tracking-wider text-slate-400 mb-2">
                    Key Deliverables
                  </div>
                  {service.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-300">
                      <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* Tech & Timeline */}
                <div className="pt-4 border-t border-slate-800/80 space-y-2 text-xs">
                  <div className="flex items-center gap-2 text-slate-400">
                    <Clock className="w-3.5 h-3.5 text-blue-400 shrink-0" />
                    <span>Timeline: <strong className="text-slate-200">{service.typicalTimeline}</strong></span>
                  </div>
                  <div className="flex items-start gap-2 text-slate-400">
                    <Wrench className="w-3.5 h-3.5 text-slate-400 shrink-0 mt-0.5" />
                    <span className="text-slate-300 font-mono text-[11px] leading-tight">
                      {service.tools.join(' · ')}
                    </span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6 mt-6 border-t border-slate-800/60">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full py-2.5 px-4 text-xs font-semibold text-slate-200 hover:text-white bg-slate-800 hover:bg-slate-700/80 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Select {service.title.split(' ')[0]} Scope</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
