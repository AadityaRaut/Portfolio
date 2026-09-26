import { ServiceItem } from '../types';

export const servicesList: ServiceItem[] = [
  {
    number: '01',
    title: 'AI-Powered Web Applications',
    subtitle: 'From Idea to Production-Grade Software',
    description: 'We build fast, responsive, and resilient web applications that incorporate intelligent AI workflows — patient intake, document summarization, recommendation engines, and customer self-service portals.',
    deliverables: [
      'Interactive React & TypeScript Single-Page & Full-Stack Apps',
      'Intelligent conversational triage & AI agent workflows',
      'Secure payment processing & subscription engines (Stripe)',
      'Sub-second page loading and responsive mobile-first architecture'
    ],
    tools: ['React', 'TypeScript', 'Tailwind CSS', 'Vite / Next.js', 'OpenAI / Gemini SDK', 'PostgreSQL / Supabase'],
    typicalTimeline: '2 to 4 Weeks'
  },
  {
    number: '02',
    title: 'Conversion-Driven Digital Marketing',
    subtitle: 'SEO, Targeted Advertising & Acquisition Funnels',
    description: 'Stop burning budget on clicks that never convert. We architect end-to-end digital acquisition systems that drive qualified customers directly into your sales pipeline with proven ROI.',
    deliverables: [
      'High-intent Google Ads & Meta advertising campaign management',
      'Technical on-page & localized SEO domination (Google Maps Pack)',
      'Landing page A/B testing and conversion rate optimization (CRO)',
      'Transparent live analytics dashboards tracking real customer revenue'
    ],
    tools: ['Google Ads', 'Meta Ads Manager', 'Google Search Console', 'PostHog', 'A/B Testing Suites'],
    typicalTimeline: '2 to 3 Weeks Setup + Ongoing Optimization'
  },
  {
    number: '03',
    title: 'Automated Workflows & Growth Pipelines',
    subtitle: 'Eliminate Repetitive Tasks & Never Drop a Lead',
    description: 'Connect your website, ads, CRM, and communication channels into a seamless, automated machine that follows up with inquiries instantly and prepares custom proposals.',
    deliverables: [
      'Instant SMS & email lead notifications and calendar booking triggers',
      'CRM integration with HubSpot, Close, or custom client dashboards',
      'Automated PDF quotation and client onboarding generation',
      'Database synchronization and webhook pipeline engineering'
    ],
    tools: ['Webhook Workflows', 'HubSpot / Close CRM', 'Twilio SMS', 'Resend / SendGrid', 'Custom Node.js APIs'],
    typicalTimeline: '1 to 2 Weeks'
  }
];
