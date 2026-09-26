import React, { useState } from 'react';
import { Project } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { SkillsMatrix } from './components/SkillsMatrix';
import { ProjectsShowcase } from './components/ProjectsShowcase';
import { ProjectModal } from './components/ProjectModal';
import { ScopeEstimator } from './components/ScopeEstimator';
import { AboutSection } from './components/AboutSection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

export const App: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [prefilledScope, setPrefilledScope] = useState<{
    service: string;
    features: string[];
    urgency: string;
    estimatedCost: string;
    estimatedDays: string;
  } | null>(null);

  const scrollToContact = () => {
    const el = document.getElementById('contact');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToEstimator = () => {
    const el = document.getElementById('estimator');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const handleStartSimilarProject = (projectTitle: string) => {
    setPrefilledScope({
      service: `Custom Solution based on "${projectTitle}"`,
      features: ['AI Integration', 'High-Speed Web Frontend', 'Conversion Architecture'],
      urgency: 'Standard Pace',
      estimatedCost: '$2,000 – $4,000',
      estimatedDays: '14–21 Business Days'
    });
    scrollToContact();
  };

  const handleServiceSelect = (serviceTitle: string) => {
    setPrefilledScope({
      service: serviceTitle,
      features: ['Core Architecture', 'Performance Setup'],
      urgency: 'Standard Pace',
      estimatedCost: '$2,000 – $3,500',
      estimatedDays: '14 Business Days'
    });
    scrollToContact();
  };

  const handleProceedWithEstimate = (details: {
    service: string;
    features: string[];
    urgency: string;
    estimatedCost: string;
    estimatedDays: string;
  }) => {
    setPrefilledScope(details);
    scrollToContact();
  };

  return (
    <div className="min-h-screen bg-[#080C14] text-slate-100 flex flex-col font-sans selection:bg-blue-600 selection:text-white">
      {/* Navigation */}
      <Navbar
        onOpenEstimator={scrollToEstimator}
        onOpenContact={scrollToContact}
      />

      {/* Main Content Area */}
      <main className="flex-grow">
        {/* Hero Section */}
        <Hero
          onOpenEstimator={scrollToEstimator}
          onOpenContact={scrollToContact}
        />

        {/* Core Capabilities */}
        <ServicesSection
          onSelectService={handleServiceSelect}
        />

        {/* Full-Spectrum Technical Mastery: Coding, ML, DB, Web, Marketing */}
        <SkillsMatrix />

        {/* 10 Completed Projects Showcase */}
        <ProjectsShowcase
          onSelectProject={(proj) => setSelectedProject(proj)}
        />

        {/* Interactive Scope & Cost Calculator */}
        <ScopeEstimator
          onProceedWithEstimate={handleProceedWithEstimate}
        />

        {/* About Grade 11 Student & Craftsmanship */}
        <AboutSection />

        {/* Client Results & Testimonials */}
        <TestimonialsSection />

        {/* Contact & Technical Consultation */}
        <ContactSection
          prefilledScope={prefilledScope}
        />
      </main>

      {/* Footer */}
      <Footer />

      {/* Interactive Project Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        onStartSimilar={handleStartSimilarProject}
      />
    </div>
  );
};

export default App;
