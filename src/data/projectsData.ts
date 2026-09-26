import { Project } from '../types';

export const completedProjects: Project[] = [
  {
    id: 'nova-health',
    title: 'NovaHealth AI Intake & Patient Triage Portal',
    category: 'ai-web-app',
    categoryLabel: 'AI Web Application',
    client: 'NovaHealth Clinical Network',
    industry: 'Healthcare & Telemedicine',
    completedDate: 'March 2026',
    timeline: '3 Weeks',
    shortDescription: 'Modern web app with intelligent symptom triage, appointment scheduling, and automated clinical summaries for physician review.',
    keyMetric: '+184%',
    metricLabel: 'Patient Intake Velocity',
    image: '/src/assets/images/project_web_app_showcase_1790394529928.jpg',
    tags: ['React', 'TypeScript', 'AI Triage Agent', 'Tailwind CSS', 'HIPAA Compliant Flow'],
    challenge: 'Patients were spending 25+ minutes filling out manual forms, creating administrative bottlenecks and 14% missed appointment rates.',
    solution: 'Engineered a frictionless responsive web application with conversational AI symptom gathering, real-time doctor schedule matching, and automated structured intake notes.',
    impactMetrics: [
      { label: 'Intake Duration', value: '4.2 min', detail: 'Reduced from 25 min baseline' },
      { label: 'Booking Completion', value: '94.8%', detail: 'Up from 71.2% prior' },
      { label: 'Physician Prep Saved', value: '18 hrs/wk', detail: 'Automated note summarization' }
    ],
    testimonial: {
      quote: 'Aaditya delivered a stellar web application that radically streamlined our patient intake. His ability to integrate smart AI workflows into clean software is exceptional.',
      author: 'Dr. Marcus Vance',
      role: 'Chief Medical Officer',
      company: 'NovaHealth Clinics'
    }
  },
  {
    id: 'lumina-growth',
    title: 'Lumina Dental Local SEO & Patient Acquisition Engine',
    category: 'marketing-growth',
    categoryLabel: 'Digital Marketing & SEO',
    client: 'Lumina Dental Specialists',
    industry: 'Cosmetic Dentistry',
    completedDate: 'February 2026',
    timeline: '4 Weeks',
    shortDescription: 'High-converting local marketing campaign, technical SEO overhaul, and targeted Google Search ad funnels generating high-value cosmetic patient bookings.',
    keyMetric: '4.2x',
    metricLabel: 'Monthly High-Ticket Inquiries',
    image: '/src/assets/images/project_marketing_dashboard_1790394542900.jpg',
    tags: ['Local SEO', 'Google Ads', 'Landing Page Optimization', 'Conversion Tracking', 'Meta Retargeting'],
    challenge: 'The clinic had strong technical capabilities but was losing high-ticket veneer and implant procedures to competitors with superior local digital visibility.',
    solution: 'Designed an ultra-fast localized landing page system, restructured Google Ads search campaigns targeting high-intent queries, and established #1 local map pack ranking.',
    impactMetrics: [
      { label: 'Cost Per Acquisition', value: '-48%', detail: 'Optimized search targeting' },
      { label: 'New Patient Revenue', value: '$84,000+', detail: 'Generated in first 60 days' },
      { label: 'Organic Search Rank', value: '#1', detail: 'For top 12 regional keywords' }
    ],
    testimonial: {
      quote: 'Within 6 weeks of Aaditya rebuilding our web pages and managing our digital ad campaigns, our schedule was booked solid with high-value consultations.',
      author: 'Elena Rostova',
      role: 'Clinic Director',
      company: 'Lumina Dental Group'
    }
  },
  {
    id: 'artisan-roast',
    title: 'ArtisanRoast E-Commerce & Subscription Engine',
    category: 'ecommerce-portal',
    categoryLabel: 'E-Commerce & Portals',
    client: 'ArtisanRoast Coffee Roasters',
    industry: 'Direct-to-Consumer Goods',
    completedDate: 'January 2026',
    timeline: '3.5 Weeks',
    shortDescription: 'Headless e-commerce platform with recurring subscription management, smart taste profile matching, and frictionless 1-click checkout.',
    keyMetric: '+142%',
    metricLabel: 'Subscription Retention Rate',
    image: '/src/assets/images/hero_developer_workspace_1790394514227.jpg',
    tags: ['Next.js', 'Stripe Subscriptions', 'Tailwind CSS', 'Customer Portal', 'Inventory Sync'],
    challenge: 'High customer drop-off at checkout and poor mobile subscription management resulted in 68% subscription cancellation within the second month.',
    solution: 'Built a custom headless shopping experience with instant coffee profile quiz, flexible delivery cadence management, and automated replenishment reminders.',
    impactMetrics: [
      { label: 'Checkout Conversion', value: '4.8%', detail: 'Up from 1.9% previous platform' },
      { label: 'Average Order Value', value: '$46.50', detail: '+26% through bundle recommendations' },
      { label: 'Mobile Page Speed', value: '98/100', detail: 'Google Lighthouse Performance' }
    ],
    testimonial: {
      quote: 'Aaditya crafted a modern storefront that looks like a luxury brand and converts like a machine. Our subscription revenue doubled in two months.',
      author: 'Julian Mercer',
      role: 'Founder & Head Roaster',
      company: 'ArtisanRoast Co.'
    }
  },
  {
    id: 'finedge-ai',
    title: 'FinEdge AI Financial Advisory & Document Analyzer',
    category: 'ai-web-app',
    categoryLabel: 'AI Web Application',
    client: 'FinEdge Wealth Management',
    industry: 'FinTech & Wealth Advisory',
    completedDate: 'December 2025',
    timeline: '4 Weeks',
    shortDescription: 'Enterprise client portal analyzing portfolio statements, generating custom tax-saving summaries, and calculating retirement milestones in seconds.',
    keyMetric: '8.5 hrs',
    metricLabel: 'Saved Per Client Analysis',
    image: '/src/assets/images/project_web_app_showcase_1790394529928.jpg',
    tags: ['React', 'TypeScript', 'Document Extraction', 'Interactive Charts', 'Secure Storage'],
    challenge: 'Advisors spent hours manually transcribing PDF bank statements and investment reports into spreadsheets before client consultations.',
    solution: 'Created an intelligent web app that ingests multi-page financial statements, automatically extracts key metrics, and prepares interactive client presentations.',
    impactMetrics: [
      { label: 'Extraction Accuracy', value: '99.4%', detail: 'On complex multi-broker statements' },
      { label: 'Advisor Turnaround', value: '< 2 min', detail: 'Instant executive reports' },
      { label: 'Client Engagement', value: '+62%', detail: 'Portal login frequency' }
    ],
    testimonial: {
      quote: 'The speed and precision of the tools Aaditya builds are unbelievable. Our advisors can now focus on strategy rather than endless document transcription.',
      author: 'Sarah Chen',
      role: 'Managing Partner',
      company: 'FinEdge Advisory'
    }
  },
  {
    id: 'solstice-marketing',
    title: 'Solstice Eco Goods Omnichannel Paid Ads Campaign',
    category: 'marketing-growth',
    categoryLabel: 'Digital Marketing & SEO',
    client: 'Solstice Sustainable Living',
    industry: 'Sustainable Consumer Brand',
    completedDate: 'November 2025',
    timeline: '3 Weeks',
    shortDescription: 'Full-funnel Meta and Google Ads strategy with video creative testing, high-converting offer landing pages, and automated abandoned cart recovery.',
    keyMetric: '4.85x',
    metricLabel: 'Blended Return On Ad Spend',
    image: '/src/assets/images/project_marketing_dashboard_1790394542900.jpg',
    tags: ['Meta Ads', 'Google Shopping', 'Email Marketing', 'Audience Segmentation', 'Creative Strategy'],
    challenge: 'Rising customer acquisition costs on social media were eating profit margins; cold traffic was failing to convert into first-time buyers.',
    solution: 'Restructured the advertising funnel with educational video hook tests, tailored product quiz landing pages, and personalized retention email sequences.',
    impactMetrics: [
      { label: 'Return on Ad Spend', value: '4.85x', detail: 'Increased from 1.9x ROAS baseline' },
      { label: 'First-Order CAC', value: '$18.40', detail: 'Decreased by 41%' },
      { label: 'Email Revenue Share', value: '31%', detail: 'Automated post-click nurture flows' }
    ],
    testimonial: {
      quote: 'Aaditya combines deep technical web mastery with sharp marketing instincts. He fixed our funnel and delivered our highest-ROI quarter to date.',
      author: 'David Morales',
      role: 'Growth Lead',
      company: 'Solstice Goods'
    }
  },
  {
    id: 'apex-logistics',
    title: 'ApexLogistics Fleet Tracker & Client Transparency Hub',
    category: 'ai-web-app',
    categoryLabel: 'AI Web Application',
    client: 'Apex Global Freight',
    industry: 'Logistics & Supply Chain',
    completedDate: 'October 2025',
    timeline: '4 Weeks',
    shortDescription: 'Real-time telemetry dashboard providing live cargo tracking, automated delay prediction using weather models, and self-serve client documentation.',
    keyMetric: '-65%',
    metricLabel: 'Inbound Support Inquiries',
    image: '/src/assets/images/hero_developer_workspace_1790394514227.jpg',
    tags: ['React', 'Interactive Maps', 'WebSocket Feeds', 'Client Portal', 'PDF Generation'],
    challenge: 'Clients called customer support over 200 times a day just to ask "where is my container?", overloading dispatchers and frustrating enterprise shippers.',
    solution: 'Engineered a modern web portal with live map tracking, predictive arrival estimates, and proactive SMS/email notifications whenever a delay was anticipated.',
    impactMetrics: [
      { label: 'Support Volume', value: '-65%', detail: 'Instant self-serve visibility' },
      { label: 'Client NPS', value: '+42 pts', detail: 'Net Promoter Score jump' },
      { label: 'Dispatcher Efficiency', value: '+3.5 hrs/day', detail: 'Redirected to high-value route planning' }
    ],
    testimonial: {
      quote: 'The portal Aaditya built transformed how our clients view us. We went from reactive phone support to a modern, tech-forward logistics leader.',
      author: 'Tariq Al-Mansoor',
      role: 'Operations VP',
      company: 'Apex Freight'
    }
  },
  {
    id: 'urban-nest',
    title: 'UrbanNest Luxury Realty Property Showcase',
    category: 'ecommerce-portal',
    categoryLabel: 'E-Commerce & Portals',
    client: 'UrbanNest Real Estate Group',
    industry: 'Luxury Residential Real Estate',
    completedDate: 'September 2025',
    timeline: '2.5 Weeks',
    shortDescription: 'High-speed editorial property portal featuring virtual 360 walk-throughs, neighborhood demographic analysis, and instant private tour booking.',
    keyMetric: '+210%',
    metricLabel: 'Qualified Private Showing Requests',
    image: '/src/assets/images/project_web_app_showcase_1790394529928.jpg',
    tags: ['Vite', 'React', 'Media Optimization', 'Tour Scheduler', 'Tailwind CSS'],
    challenge: 'High-net-worth buyers were bouncing from slow, cluttered MLS template sites before scheduling private viewings for $2M+ properties.',
    solution: 'Designed an architectural-grade web experience with sub-second image loading, cinematic video embeds, and instant concierge calendar integration.',
    impactMetrics: [
      { label: 'Avg Time On Site', value: '4m 12s', detail: 'Triple industry real estate average' },
      { label: 'Mobile Bounce Rate', value: '28%', detail: 'Dropped from 64%' },
      { label: 'Listing Inquiries', value: '+210%', detail: 'Direct high-intent showings booked' }
    ],
    testimonial: {
      quote: 'Our ultra-luxury properties finally have a web presence that matches their caliber. Aaditya is fast, communicative, and technically superb.',
      author: 'Camilla Hayes',
      role: 'Principal Broker',
      company: 'UrbanNest Realty'
    }
  },
  {
    id: 'kitecraft-saas',
    title: 'KiteCraft SaaS Product Tour & Conversion Funnel',
    category: 'marketing-growth',
    categoryLabel: 'Digital Marketing & SEO',
    client: 'KiteCraft Design Systems',
    industry: 'B2B Developer Tools',
    completedDate: 'August 2025',
    timeline: '3 Weeks',
    shortDescription: 'Interactive in-browser playground, high-conversion landing page, and frictionless self-service free trial onboarding for engineering teams.',
    keyMetric: '3.6x',
    metricLabel: 'Visitor-to-Trial Conversion',
    image: '/src/assets/images/project_marketing_dashboard_1790394542900.jpg',
    tags: ['Interactive Demo', 'Conversion Design', 'PostHog Analytics', 'A/B Testing', 'Fastify API'],
    challenge: 'Developers were skeptical of marketing buzzwords and leaving without experiencing the product value, resulting in sub-1% sign-up conversion.',
    solution: 'Built an interactive live sandbox right on the landing page, letting developers test the component generator immediately with zero registration required.',
    impactMetrics: [
      { label: 'Landing Conversion', value: '3.6x', detail: 'From 0.9% to 3.3% signup rate' },
      { label: 'Activation Rate', value: '78%', detail: 'Completed first project within 24 hours' },
      { label: 'Organic Shares', value: '1,400+', detail: 'Featured across developer Twitter & Reddit' }
    ],
    testimonial: {
      quote: 'Aaditya understood exactly how modern engineers evaluate software. His interactive demo was the single highest-ROI change we made this year.',
      author: 'Nikhil Sharma',
      role: 'Co-Founder & CTO',
      company: 'KiteCraft'
    }
  },
  {
    id: 'fitpulse-studio',
    title: 'FitPulse Studio Member Booking & Retention System',
    category: 'ecommerce-portal',
    categoryLabel: 'E-Commerce & Portals',
    client: 'FitPulse Boutique Fitness',
    industry: 'Health & Wellness Studios',
    completedDate: 'July 2025',
    timeline: '2 Weeks',
    shortDescription: 'Mobile-first PWA for live class reservation, spot selection, waitlist automation, and smart re-engagement for at-risk members.',
    keyMetric: '+88%',
    metricLabel: 'Monthly Spot Utilization',
    image: '/src/assets/images/hero_developer_workspace_1790394514227.jpg',
    tags: ['Mobile Web App', 'Stripe Memberships', 'Twilio SMS', 'Dynamic Schedule', 'Tailwind'],
    challenge: 'Members faced friction booking classes on clunky legacy apps, leading to unfilled prime studio spots and high member churn.',
    solution: 'Delivered an instant mobile web app with 2-tap spot reservations, automatic waitlist bumps, and personalized motivation reminders.',
    impactMetrics: [
      { label: 'No-Show Rate', value: '3.1%', detail: 'Down from 17.5% with smart reminders' },
      { label: 'Studio Capacity', value: '88%', detail: 'Peak class fill rate' },
      { label: 'Member Retention', value: '+24%', detail: 'Over 6-month tracking window' }
    ],
    testimonial: {
      quote: 'Class bookings jumped immediately once members could book directly on their phones with no app store download required. Aaditya nailed the UX.',
      author: 'Chloe Dupont',
      role: 'Studio Founder',
      company: 'FitPulse Fitness'
    }
  },
  {
    id: 'peak-performance',
    title: 'PeakPerformance B2B Lead Engine & Automation',
    category: 'ai-web-app',
    categoryLabel: 'AI Web Application',
    client: 'PeakPerformance Executive Coaching',
    industry: 'Corporate Training & Executive Consulting',
    completedDate: 'June 2025',
    timeline: '3 Weeks',
    shortDescription: 'Automated executive assessment funnel, AI diagnostic report generator, and intelligent meeting scheduler for corporate coaching packages.',
    keyMetric: '220+',
    metricLabel: 'Corporate Sales Calls Booked',
    image: '/src/assets/images/project_web_app_showcase_1790394529928.jpg',
    tags: ['Interactive Diagnostic', 'AI Report Generator', 'HubSpot CRM Sync', 'Calendar Automation'],
    challenge: 'Corporate decision-makers were reluctant to respond to cold outreach without seeing immediate diagnostic insight into their team performance.',
    solution: 'Designed an interactive 3-minute executive benchmark tool that immediately outputs a personalized 5-page PDF organizational diagnosis, leading to consultative discovery calls.',
    impactMetrics: [
      { label: 'Assessment Completion', value: '84%', detail: 'High executive engagement rate' },
      { label: 'Discovery Call Rate', value: '38%', detail: 'Assessment takers booking consultations' },
      { label: 'Contract Value Closed', value: '$165,000', detail: 'Attributed directly to the automated engine' }
    ],
    testimonial: {
      quote: 'This tool single-handedly transformed our pipeline. We are signing Fortune 500 corporate contracts directly from Aaditya’s diagnostic engine.',
      author: 'Arthur Sterling',
      role: 'Managing Director',
      company: 'PeakPerformance Group'
    }
  }
];
