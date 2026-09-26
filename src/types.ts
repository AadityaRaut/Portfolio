export interface Project {
  id: string;
  title: string;
  category: 'ai-web-app' | 'ecommerce-portal' | 'marketing-growth';
  categoryLabel: string;
  client: string;
  industry: string;
  completedDate: string;
  timeline: string;
  shortDescription: string;
  keyMetric: string;
  metricLabel: string;
  image: string;
  tags: string[];
  challenge: string;
  solution: string;
  impactMetrics: {
    label: string;
    value: string;
    detail: string;
  }[];
  testimonial?: {
    quote: string;
    author: string;
    role: string;
    company: string;
  };
}

export interface ServiceItem {
  number: string;
  title: string;
  subtitle: string;
  description: string;
  deliverables: string[];
  tools: string[];
  typicalTimeline: string;
}

export interface EstimatorState {
  serviceType: string;
  features: string[];
  urgency: 'standard' | 'express';
}
