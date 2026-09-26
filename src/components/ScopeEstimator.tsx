import React, { useState } from 'react';
import { Calculator, Check, ArrowRight, Clock, ShieldCheck, Zap } from 'lucide-react';

interface ScopeEstimatorProps {
  onProceedWithEstimate: (details: {
    service: string;
    features: string[];
    urgency: string;
    estimatedCost: string;
    estimatedDays: string;
  }) => void;
}

interface ServiceOption {
  id: string;
  name: string;
  basePrice: number;
  baseDays: number;
  description: string;
}

interface FeatureOption {
  id: string;
  name: string;
  price: number;
  days: number;
}

const SERVICE_OPTIONS: ServiceOption[] = [
  {
    id: 'ai-web-app',
    name: 'AI Web Application',
    basePrice: 2200,
    baseDays: 14,
    description: 'Custom responsive web app with AI workflows, database sync, and client dashboard.'
  },
  {
    id: 'ecommerce-portal',
    name: 'E-Commerce & Client Portal',
    basePrice: 1900,
    baseDays: 12,
    description: 'High-speed storefront, subscription billing, account management, and payment checkout.'
  },
  {
    id: 'marketing-seo',
    name: 'Digital Marketing & SEO Setup',
    basePrice: 1400,
    baseDays: 8,
    description: 'Targeted Google/Meta ad funnels, conversion tracking, local SEO, and landing page.'
  },
  {
    id: 'full-funnel',
    name: 'Full Growth Engine (Web + AI + Marketing)',
    basePrice: 3400,
    baseDays: 20,
    description: 'End-to-end web application with automated AI triage and omnichannel customer acquisition.'
  }
];

const FEATURE_OPTIONS: FeatureOption[] = [
  { id: 'ai-triage', name: 'AI Symptom / Lead Intake Triage', price: 450, days: 3 },
  { id: 'stripe-billing', name: 'Stripe Subscriptions & Checkout', price: 350, days: 2 },
  { id: 'google-meta-ads', name: 'Google & Meta Paid Ad Campaigns', price: 500, days: 3 },
  { id: 'local-seo', name: 'Local SEO & Google Maps Pack Ranking', price: 400, days: 3 },
  { id: 'crm-automation', name: 'Instant SMS & CRM Follow-up Automation', price: 350, days: 2 },
  { id: 'analytics-dash', name: 'Custom Revenue & Attribution Dashboard', price: 300, days: 2 }
];

export const ScopeEstimator: React.FC<ScopeEstimatorProps> = ({ onProceedWithEstimate }) => {
  const [selectedServiceId, setSelectedServiceId] = useState<string>('ai-web-app');
  const [selectedFeatures, setSelectedFeatures] = useState<string[]>(['ai-triage', 'crm-automation']);
  const [isExpress, setIsExpress] = useState<boolean>(false);

  const selectedService = SERVICE_OPTIONS.find(s => s.id === selectedServiceId) || SERVICE_OPTIONS[0];

  const toggleFeature = (id: string) => {
    setSelectedFeatures(prev =>
      prev.includes(id) ? prev.filter(f => f !== id) : [...prev, id]
    );
  };

  // Math for estimate
  const featuresPrice = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_OPTIONS.find(f => f.id === featId);
    return acc + (feat ? feat.price : 0);
  }, 0);

  const featuresDays = selectedFeatures.reduce((acc, featId) => {
    const feat = FEATURE_OPTIONS.find(f => f.id === featId);
    return acc + (feat ? feat.days : 0);
  }, 0);

  const rawPrice = selectedService.basePrice + featuresPrice;
  const totalPrice = isExpress ? Math.round(rawPrice * 1.25) : rawPrice;
  const totalDays = isExpress 
    ? Math.max(7, Math.round((selectedService.baseDays + featuresDays) * 0.65))
    : selectedService.baseDays + featuresDays;

  const priceLow = Math.round(totalPrice * 0.9);
  const priceHigh = Math.round(totalPrice * 1.15);

  const handleProceed = () => {
    onProceedWithEstimate({
      service: selectedService.name,
      features: selectedFeatures.map(fId => FEATURE_OPTIONS.find(f => f.id === fId)?.name || fId),
      urgency: isExpress ? 'Express Priority (Fast-Track)' : 'Standard Pace',
      estimatedCost: `$${priceLow.toLocaleString()} – $${priceHigh.toLocaleString()}`,
      estimatedDays: `${totalDays} Business Days`
    });
  };

  return (
    <section id="estimator" className="py-20 md:py-28 bg-[#090D17] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12 space-y-3">
          <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
            <Calculator className="w-4 h-4" />
            <span>Interactive Project Estimator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            Transparent Scope & Timeline Calculator
          </h2>
          <p className="text-slate-400 text-sm sm:text-base leading-relaxed">
            Configure your exact technical requirements and get an instant realistic timeline and investment range with zero fluff.
          </p>
        </div>

        {/* Calculator Body */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls (8 cols) */}
          <div className="lg:col-span-8 space-y-8">
            
            {/* 1. Core Service */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                1. Select Primary Service Focus
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {SERVICE_OPTIONS.map((srv) => {
                  const isSelected = srv.id === selectedServiceId;
                  return (
                    <button
                      key={srv.id}
                      type="button"
                      onClick={() => setSelectedServiceId(srv.id)}
                      className={`text-left p-4 rounded-xl border transition-all ${
                        isSelected
                          ? 'bg-blue-950/40 border-blue-500 shadow-sm shadow-blue-500/10'
                          : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 text-slate-300'
                      }`}
                    >
                      <div className="flex items-center justify-between">
                        <span className={`text-sm font-bold ${isSelected ? 'text-white' : 'text-slate-200'}`}>
                          {srv.name}
                        </span>
                        {isSelected && <Check className="w-4 h-4 text-blue-400" />}
                      </div>
                      <p className="text-xs text-slate-400 mt-1 leading-normal">
                        {srv.description}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 2. Optional Add-on Capabilities */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                2. Select Core Features & Integrations
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {FEATURE_OPTIONS.map((feat) => {
                  const isSelected = selectedFeatures.includes(feat.id);
                  return (
                    <button
                      key={feat.id}
                      type="button"
                      onClick={() => toggleFeature(feat.id)}
                      className={`text-left p-3.5 rounded-xl border flex items-center justify-between transition-all ${
                        isSelected
                          ? 'bg-slate-800/90 border-blue-400/80 text-white'
                          : 'bg-slate-900/40 border-slate-800 text-slate-400 hover:text-slate-200 hover:border-slate-700'
                      }`}
                    >
                      <span className="text-xs font-medium">{feat.name}</span>
                      <div className={`w-4 h-4 rounded flex items-center justify-center border transition-colors ${
                        isSelected ? 'bg-blue-600 border-blue-500 text-white' : 'border-slate-700'
                      }`}>
                        {isSelected && <Check className="w-3 h-3" />}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 3. Delivery Speed */}
            <div className="space-y-3">
              <label className="text-xs font-semibold uppercase tracking-wider text-slate-300 block">
                3. Delivery Timeline Preference
              </label>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => setIsExpress(false)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    !isExpress
                      ? 'bg-blue-950/30 border-blue-500 text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-200">Standard Delivery</div>
                  <div className="text-xs text-slate-400 mt-0.5">Thorough milestone review & sprint cadence</div>
                </button>

                <button
                  type="button"
                  onClick={() => setIsExpress(true)}
                  className={`p-3.5 rounded-xl border text-left transition-all ${
                    isExpress
                      ? 'bg-blue-950/30 border-blue-500 text-white'
                      : 'bg-slate-900/40 border-slate-800 text-slate-400'
                  }`}
                >
                  <div className="text-xs font-bold text-slate-200 flex items-center gap-1.5">
                    <Zap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Express Priority Sprint</span>
                  </div>
                  <div className="text-xs text-slate-400 mt-0.5">Dedicated sprint focus for fast time-to-market</div>
                </button>
              </div>
            </div>

          </div>

          {/* Live Estimate Card (4 cols) */}
          <div className="lg:col-span-4 sticky top-28 p-6 rounded-2xl bg-[#0B101D] border border-slate-700 shadow-xl space-y-6">
            <div className="flex items-center justify-between border-b border-slate-800 pb-3">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">Estimated Investment</span>
              <span className="text-xs font-mono text-emerald-400">100% Guaranteed</span>
            </div>

            <div className="space-y-1">
              <div className="text-3xl font-extrabold font-mono text-white tracking-tight">
                ${priceLow.toLocaleString()} – ${priceHigh.toLocaleString()}
              </div>
              <p className="text-xs text-slate-400">
                Transparent scope based on completed client architectures
              </p>
            </div>

            <div className="space-y-3 pt-3 border-t border-slate-800/80 text-xs">
              <div className="flex items-center justify-between text-slate-300">
                <span className="flex items-center gap-1.5 text-slate-400">
                  <Clock className="w-3.5 h-3.5 text-blue-400" /> Estimated Timeline:
                </span>
                <span className="font-mono font-semibold text-white">~{totalDays} Business Days</span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Selected Scope:</span>
                <span className="font-semibold text-white truncate max-w-[170px] text-right">
                  {selectedService.name}
                </span>
              </div>

              <div className="flex items-center justify-between text-slate-300">
                <span className="text-slate-400">Add-On Modules:</span>
                <span className="font-mono font-semibold text-blue-400">{selectedFeatures.length} Active</span>
              </div>
            </div>

            <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800 text-[11px] text-slate-400 space-y-1">
              <div className="flex items-center gap-1 text-slate-300 font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Includes Full Code Ownership</span>
              </div>
              <div>Source code repository, documentation, deployment, and 30 days post-launch support included.</div>
            </div>

            <button
              onClick={handleProceed}
              className="w-full py-3.5 px-4 text-xs font-bold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all shadow-md shadow-blue-600/30 flex items-center justify-center gap-2 active:scale-95"
            >
              <span>Apply This Scope To Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};
