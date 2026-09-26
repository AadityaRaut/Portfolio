import React from 'react';
import { Quote, Star } from 'lucide-react';

export const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      quote: "Aaditya delivered a stellar web application that radically streamlined our patient intake. His ability to integrate smart AI workflows into clean software saved our clinical staff over 18 hours every week.",
      author: "Dr. Marcus Vance",
      role: "Chief Medical Officer",
      company: "NovaHealth Clinics",
      metric: "-80% Intake Duration",
      project: "NovaHealth AI Triage Portal"
    },
    {
      quote: "Within 6 weeks of Aaditya rebuilding our web pages and managing our Google Ads search campaigns, our schedule was booked solid with high-value cosmetic consultations. We generated $84,000+ in the first two months.",
      author: "Elena Rostova",
      role: "Clinic Director",
      company: "Lumina Dental Group",
      metric: "4.2x Consultation Leads",
      project: "Lumina Local SEO & Ads Engine"
    },
    {
      quote: "Aaditya crafted an e-commerce platform that looks like a luxury brand and converts like a machine. Our subscription retention doubled and mobile checkout speed scored 98/100 on Google Lighthouse.",
      author: "Julian Mercer",
      role: "Founder & Head Roaster",
      company: "ArtisanRoast Co.",
      metric: "+142% Retention Rate",
      project: "ArtisanRoast Subscriptions"
    }
  ];

  return (
    <section id="testimonials" className="py-20 md:py-28 bg-[#090D17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="max-w-3xl mb-14 space-y-3">
          <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
            Client Verification
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Verified Business Outcomes
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Direct feedback from client leaders across the 10 completed projects.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col justify-between p-6 sm:p-8 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-colors space-y-6"
            >
              <div className="space-y-4">
                {/* 5 Stars and Project Ref */}
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1 text-amber-400">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-3.5 h-3.5 fill-current" />
                    ))}
                  </div>
                  <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/40 px-2 py-0.5 rounded border border-emerald-800/40 font-semibold">
                    {item.metric}
                  </span>
                </div>

                {/* Quote */}
                <p className="text-sm text-slate-300 leading-relaxed italic">
                  "{item.quote}"
                </p>
              </div>

              {/* Attribution */}
              <div className="pt-4 border-t border-slate-800/80">
                <div className="text-xs font-bold text-white">{item.author}</div>
                <div className="text-xs text-slate-400 mt-0.5">{item.role} · {item.company}</div>
                <div className="text-[11px] text-blue-400 font-mono mt-1">{item.project}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
