'use client';

import { ChevronRight } from 'lucide-react';
import type { HeroContent } from '@/types';

const heroContent: HeroContent = {
  title: 'Curating Exceptional Properties for Discerning Investors',
  description: 'Holborn Properties provides exclusive access to premium international real estate opportunities, combining market expertise with personalized service for high-net-worth individuals seeking lifestyle and investment excellence.',
  ctaText: 'Schedule Private Consultation'
};

interface HeroProps {
  onContactClick: () => void;
}

export default function Hero({ onContactClick }: HeroProps) {
  return (
    <section id="home" className="hero-section">
      <div className="container-custom text-center">
        <h1 className="heading-primary animate-fade-in-up">
          {heroContent.title}
        </h1>
        <p className="text-luxury max-w-4xl mx-auto mb-8 animate-fade-in-up animate-stagger-1">
          {heroContent.description}
        </p>
        <button 
          className="btn-primary text-lg animate-fade-in-up animate-stagger-2"
          onClick={onContactClick}
        >
          {heroContent.ctaText}
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </section>
  );
}

