import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Database, 
  Globe, 
  TrendingUp, 
  Cpu, 
  CheckCircle2, 
  Terminal, 
  Layers, 
  Workflow 
} from 'lucide-react';

interface SkillCategory {
  id: string;
  name: string;
  icon: React.ElementType;
  description: string;
  skills: {
    name: string;
    level: string;
    context: string;
  }[];
  appliedInProjects: string;
}

const SKILL_CATEGORIES: SkillCategory[] = [
  {
    id: 'coding',
    name: 'Coding & Core Languages',
    icon: Code2,
    description: 'Deep foundations in typed languages, modular systems design, algorithmic efficiency, and clean architecture standards.',
    skills: [
      { name: 'TypeScript & JavaScript (ESNext)', level: 'Advanced / Production', context: 'Strict type safety, custom generics, async concurrency, clean patterns' },
      { name: 'Python', level: 'Senior / Applied', context: 'FastAPI, async pipelines, automation scripts, data transformations' },
      { name: 'C++ & Low-Level Fundamentals', level: 'Applied Proficiency', context: 'Data structures, algorithmic complexity, performance profiling' },
      { name: 'Modern CSS & Tailwind CSS', level: 'Production Expert', context: 'Custom design systems, container queries, zero-runtime overhead' },
      { name: 'Git, CI/CD & DevOps', level: 'Advanced', context: 'Trunk-based development, GitHub Actions, Docker containers, Vercel/Cloud run' }
    ],
    appliedInProjects: 'Applied across all 10 production client web applications and automated microservices.'
  },
  {
    id: 'ml-ai',
    name: 'Machine Learning & Applied AI',
    icon: BrainCircuit,
    description: 'Practical engineering of machine learning models, production LLM pipelines, context augmentation, and autonomous agent workflows.',
    skills: [
      { name: 'LLM Orchestration & Prompt Architecture', level: 'Production Specialist', context: 'Structured JSON validation, reasoning chains, Gemini SDK & OpenAI' },
      { name: 'RAG & Vector Embeddings', level: 'Production Grade', context: 'pgvector, Pinecone, chunking strategies, semantic similarity retrieval' },
      { name: 'Python Data & ML Libraries', level: 'Proficient', context: 'NumPy, Pandas, scikit-learn, PyTorch inference pipelines' },
      { name: 'AI Triage & Agent Workflows', level: 'Specialist', context: 'Multi-turn diagnostic agents, automated document extraction, tool calling' },
      { name: 'Model Evaluation & Latency Tuning', level: 'Applied', context: 'Streaming tokens, prompt caching, fallback resilience, cost governance' }
    ],
    appliedInProjects: 'Powering NovaHealth patient triage, FinEdge financial document analyzer, and PeakPerformance diagnostics.'
  },
  {
    id: 'databases',
    name: 'Database Architecture & Storage',
    icon: Database,
    description: 'Designing highly reliable relational schemas, low-latency caching tiers, real-time sync, and rock-solid ACID transactions.',
    skills: [
      { name: 'PostgreSQL & SQL Engineering', level: 'Senior / Advanced', context: 'Relational schemas, query plan optimization, indexes, CTEs, triggers' },
      { name: 'Supabase & Cloud Relational DBs', level: 'Production-Grade', context: 'Row-Level Security (RLS), real-time subscriptions, edge functions' },
      { name: 'Redis In-Memory Caching', level: 'Applied', context: 'Distributed session management, rate limiting, pub/sub message brokers' },
      { name: 'MongoDB & Document Stores', level: 'Proficient', context: 'Aggregation pipelines, polymorphic schemas, rapid prototyping' },
      { name: 'ORMs, Migrations & Validation', level: 'Expert', context: 'Prisma, Drizzle ORM, Zod contract validation, zero-downtime migrations' }
    ],
    appliedInProjects: 'Architected backends for ApexLogistics fleet tracking, ArtisanRoast inventory sync, and enterprise portals.'
  },
  {
    id: 'web-dev',
    name: 'Full-Stack Web Development',
    icon: Globe,
    description: 'Building blazing-fast, responsive web applications engineered for sub-second page loads and seamless mobile-first UX.',
    skills: [
      { name: 'React 19, Next.js & Vite', level: 'Senior / Advanced', context: 'Server components, concurrent rendering, custom hooks, micro-frontends' },
      { name: 'RESTful & WebSocket APIs', level: 'Production-Grade', context: 'Express, Fastify, real-time bidirectional feeds, OpenAPI specs' },
      { name: 'E-Commerce & Stripe Billing', level: 'Production-Grade', context: 'Webhook idempotency, subscription lifecycles, global tax & checkout' },
      { name: 'Web Performance & Core Vitals', level: 'Expert', context: 'Google Lighthouse 95+ score, code splitting, critical CSS rendering' },
      { name: 'Progressive Web Apps (PWAs)', level: 'Applied', context: 'Service workers, offline-first strategies, push notifications, installable UX' }
    ],
    appliedInProjects: 'Deployed responsive architectures across UrbanNest, FitPulse, ArtisanRoast, and KiteCraft.'
  },
  {
    id: 'marketing',
    name: 'Digital Marketing & Growth Systems',
    icon: TrendingUp,
    description: 'Aligning technical development with business acquisition through technical SEO, performance advertising, and conversion funnels.',
    skills: [
      { name: 'Technical & Local SEO', level: 'Senior / Expert', context: 'Google Maps 3-Pack rank, structured JSON-LD schema, local citations, crawl budgets' },
      { name: 'Google Ads & Search Campaigns', level: 'Advanced', context: 'High-intent keyword grouping, negative keyword sculpting, ROAS bidding' },
      { name: 'Meta Ads Manager & Retargeting', level: 'Proficient', context: 'Lookalike audiences, video creative testing, custom conversion tracking' },
      { name: 'Conversion Rate Optimization (CRO)', level: 'Advanced', context: 'Landing page A/B tests, user flow analytics, friction elimination' },
      { name: 'Attribution & Analytics', level: 'Advanced', context: 'Google Analytics 4, PostHog, custom conversion event tracking, server-side CAPI' }
    ],
    appliedInProjects: 'Delivered 4.2x inquiry lift for Lumina Dental and 4.85x ROAS for Solstice Eco Goods.'
  }
];

export const SkillsMatrix: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const displayedCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.id === activeCategory);

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#070A12] border-t border-slate-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-blue-400">
              <Cpu className="w-4 h-4" />
              <span>Full-Stack Engineering & Technical Capabilities</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
              Code, Machine Learning, Databases & Web Architecture
            </h2>
            <p className="text-slate-400 max-w-2xl text-sm sm:text-base leading-relaxed">
              Comprehensive technical capabilities spanning low-level coding rigor, modern machine learning tools, scalable database modeling, and commercial growth marketing.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center gap-1.5 p-1.5 bg-slate-900/90 border border-slate-800 rounded-xl">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'all' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              All Domains
            </button>
            <button
              onClick={() => setActiveCategory('coding')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'coding' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Coding
            </button>
            <button
              onClick={() => setActiveCategory('ml-ai')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'ml-ai' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Machine Learning
            </button>
            <button
              onClick={() => setActiveCategory('databases')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'databases' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Databases
            </button>
            <button
              onClick={() => setActiveCategory('web-dev')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'web-dev' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Web Dev
            </button>
            <button
              onClick={() => setActiveCategory('marketing')}
              className={`px-3 py-1.5 text-xs font-medium rounded-lg transition-colors ${
                activeCategory === 'marketing' ? 'bg-blue-600 text-white' : 'text-slate-400 hover:text-white'
              }`}
            >
              Growth & SEO
            </button>
          </div>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div
                key={category.id}
                className="flex flex-col justify-between p-6 sm:p-7 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-slate-700 transition-all duration-200"
              >
                <div className="space-y-5">
                  {/* Category Title & Icon */}
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <div className="w-10 h-10 rounded-xl bg-blue-950/70 border border-blue-800/60 flex items-center justify-center text-blue-400 mb-3">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <h3 className="text-lg font-bold text-white tracking-tight">
                        {category.name}
                      </h3>
                      <p className="text-xs text-slate-400 leading-relaxed">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-2.5 pt-3 border-t border-slate-800/80">
                    {category.skills.map((skill, idx) => (
                      <div key={idx} className="p-2.5 rounded-lg bg-slate-950/70 border border-slate-800/60 space-y-1">
                        <div className="flex items-center justify-between text-xs">
                          <span className="font-semibold text-slate-200">{skill.name}</span>
                          <span className="text-[10px] font-mono text-blue-400 bg-blue-950/60 px-1.5 py-0.5 rounded border border-blue-900/50">
                            {skill.level}
                          </span>
                        </div>
                        <p className="text-[11px] text-slate-400 leading-tight">
                          {skill.context}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Practical Client Proof Footnote */}
                <div className="pt-4 mt-5 border-t border-slate-800/60">
                  <div className="flex items-start gap-1.5 text-[11px] text-slate-400">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0 mt-0.5" />
                    <span><strong className="text-slate-300">Commercial Impact:</strong> {category.appliedInProjects}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
