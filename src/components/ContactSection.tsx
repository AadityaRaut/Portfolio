import React, { useState, useEffect } from 'react';
import { Mail, CheckCircle2, Send, MessageSquare, Calendar, ArrowRight, AlertCircle } from 'lucide-react';

interface ContactSectionProps {
  prefilledScope?: {
    service: string;
    features: string[];
    urgency: string;
    estimatedCost: string;
    estimatedDays: string;
  } | null;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ prefilledScope }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [service, setService] = useState('AI Web Application');
  const [budget, setBudget] = useState('$2,000 – $4,000');
  const [message, setMessage] = useState('');
  
  const [errors, setErrors] = useState<{ name?: string; email?: string; message?: string }>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  // If prefilled scope is supplied, populate form
  useEffect(() => {
    if (prefilledScope) {
      setService(prefilledScope.service);
      const featureList = prefilledScope.features.join(', ');
      setMessage(
        `Hi Aaditya,\n\nI used the scope estimator and I am looking for a project with the following requirements:\n- Service: ${prefilledScope.service}\n- Desired Features: ${featureList}\n- Pace: ${prefilledScope.urgency}\n- Target Timeline: ~${prefilledScope.estimatedDays}\n- Budget Range: ${prefilledScope.estimatedCost}\n\nLet's schedule a discovery call.`
      );
    }
  }, [prefilledScope]);

  const validate = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};
    if (!name.trim()) newErrors.name = 'Please provide your name';
    if (!email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      newErrors.email = 'Please provide a valid email address';
    }
    if (!message.trim() || message.trim().length < 10) {
      newErrors.message = 'Please provide a brief description (at least 10 characters)';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate swift submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 600);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#080C14] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left Column: Direct Outreach & Booking (5 cols) */}
          <div className="lg:col-span-5 space-y-8">
            <div className="space-y-3">
              <div className="text-xs font-semibold uppercase tracking-wider text-blue-400">
                Initiate Project
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
                Let’s Build Your Next High-Impact System
              </h2>
              <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
                Whether you need a custom AI-integrated web app, an e-commerce overhaul, or performance-driven Google/Meta marketing campaigns, I am ready to review your project scope.
              </p>
            </div>

            {/* Direct Channel Cards */}
            <div className="space-y-3">
              <a
                href="mailto:aadityaraut369@gmail.com"
                className="flex items-center gap-4 p-4 rounded-xl bg-slate-900/60 border border-slate-800 hover:border-blue-500/50 transition-colors group"
              >
                <div className="w-10 h-10 rounded-lg bg-blue-950/80 border border-blue-800/60 flex items-center justify-center text-blue-400 group-hover:scale-105 transition-transform">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-xs text-slate-400">Direct Email</div>
                  <div className="text-sm font-semibold text-white group-hover:text-blue-400 transition-colors">
                    aadityaraut369@gmail.com
                  </div>
                </div>
              </a>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 space-y-2">
                <div className="flex items-center gap-2 text-xs font-semibold text-slate-200">
                  <Calendar className="w-4 h-4 text-emerald-400" />
                  <span>Discovery Call Availability</span>
                </div>
                <p className="text-xs text-slate-400 leading-normal">
                  Typical response within 12 hours. Consultations cover architecture, sprint timelines, and ROI forecasts.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-400">Current Q3/Q4 Availability</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  2 Client Slots Open
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Lead Form (7 cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-2xl bg-slate-900/50 border border-slate-800 shadow-xl">
              
              {isSubmitted ? (
                <div className="text-center py-12 space-y-4 animate-in fade-in duration-300">
                  <div className="w-16 h-16 rounded-full bg-emerald-950/80 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Inquiry Received Successfully</h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <strong className="text-white">{name}</strong>. I’ve received your inquiry regarding <span className="text-blue-400 font-semibold">{service}</span> and will review your specifications within 12 hours.
                  </p>
                  <div className="pt-4">
                    <button
                      type="button"
                      onClick={() => {
                        setIsSubmitted(false);
                        setName('');
                        setEmail('');
                        setMessage('');
                      }}
                      className="px-5 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 hover:bg-slate-700 rounded-lg transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5" noValidate>
                  <div className="border-b border-slate-800 pb-3">
                    <h3 className="text-lg font-bold text-white">Request Project Consultation</h3>
                    <p className="text-xs text-slate-400">Fill out your parameters to receive a technical scoping brief.</p>
                  </div>

                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Your Full Name <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        placeholder="e.g. Sarah Jenkins"
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                          errors.name ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.name && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.name}
                        </p>
                      )}
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Work Email Address <span className="text-rose-400">*</span>
                      </label>
                      <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder="sarah@company.com"
                        className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                          errors.email ? 'border-rose-500' : 'border-slate-800'
                        }`}
                      />
                      {errors.email && (
                        <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                          <AlertCircle className="w-3 h-3" /> {errors.email}
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Project Focus & Budget */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Service Required
                      </label>
                      <select
                        value={service}
                        onChange={(e) => setService(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="AI Web Application">AI Web Application</option>
                        <option value="E-Commerce & Client Portal">E-Commerce & Client Portal</option>
                        <option value="Digital Marketing & SEO Setup">Digital Marketing & SEO</option>
                        <option value="Full Growth Engine (Web + Marketing)">Full Growth Engine</option>
                      </select>
                    </div>

                    <div className="space-y-1.5">
                      <label className="text-xs font-medium text-slate-300">
                        Estimated Budget
                      </label>
                      <select
                        value={budget}
                        onChange={(e) => setBudget(e.target.value)}
                        className="w-full px-3.5 py-2.5 bg-slate-950 border border-slate-800 rounded-lg text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-500"
                      >
                        <option value="$1,500 – $2,500">$1,500 – $2,500</option>
                        <option value="$2,500 – $5,000">$2,500 – $5,000</option>
                        <option value="$5,000 – $10,000">$5,000 – $10,000</option>
                        <option value="$10,000+">$10,000+ (Enterprise Scope)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message / Scope description */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-medium text-slate-300">
                      Project Goals & Specific Requirements <span className="text-rose-400">*</span>
                    </label>
                    <textarea
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Tell me about your business, current bottlenecks, desired timeline, or features needed..."
                      className={`w-full px-3.5 py-2.5 bg-slate-950 border rounded-lg text-sm text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-blue-500 transition-colors ${
                        errors.message ? 'border-rose-500' : 'border-slate-800'
                      }`}
                    />
                    {errors.message && (
                      <p className="text-[11px] text-rose-400 flex items-center gap-1 mt-1">
                        <AlertCircle className="w-3 h-3" /> {errors.message}
                      </p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-6 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-lg shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95 disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span>Sending Specifications...</span>
                    ) : (
                      <>
                        <span>Submit Project Specifications</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
