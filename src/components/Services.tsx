'use client';

import type { Service } from '@/types';

const services: Service[] = [
  {
    title: 'Investment Advisory',
    description: 'Strategic guidance for portfolio development and market entry with comprehensive analysis and risk assessment.'
  },
  {
    title: 'Property Acquisition',
    description: 'End-to-end support for property purchase including sourcing, negotiation, and transaction coordination.'
  },
  {
    title: 'Market Intelligence',
    description: 'Exclusive research and analysis on global property markets with quarterly reports and opportunity alerts.'
  },
  {
    title: 'Lifestyle Concierge',
    description: 'Comprehensive support for international property ownership including management and relocation services.'
  }
];

export default function Services() {
  return (
    <section id="services" className="section-padding bg-holborn-forest text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary text-white">Comprehensive Advisory Services</h2>
          <p className="text-luxury text-white/90 max-w-3xl mx-auto">
            Our boutique approach ensures that every client receives personalized attention and 
            comprehensive support throughout their property investment journey.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="heading-tertiary text-white mb-4">{service.title}</h3>
              <p className="text-white/90 leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

