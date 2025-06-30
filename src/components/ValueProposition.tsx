'use client';

import { Building2, TrendingUp, Shield, Users } from 'lucide-react';
import type { ValueProposition } from '@/types';

const valuePropositions: ValueProposition[] = [
  {
    icon: 'building-2',
    title: 'Curated Portfolio',
    description: 'Exceptional properties across prime international markets'
  },
  {
    icon: 'trending-up',
    title: 'Bespoke Advisory',
    description: 'Tailored services for individual investment objectives'
  },
  {
    icon: 'shield',
    title: 'Exclusive Access',
    description: 'Off-market opportunities and pre-launch developments'
  },
  {
    icon: 'users',
    title: 'Personal Service',
    description: 'Dedicated specialists for comprehensive support'
  }
];

const IconComponent = ({ iconName }: { iconName: string }) => {
  const iconProps = { className: "h-8 w-8 text-holborn-gold mb-4" };
  
  switch (iconName) {
    case 'building-2':
      return <Building2 {...iconProps} />;
    case 'trending-up':
      return <TrendingUp {...iconProps} />;
    case 'shield':
      return <Shield {...iconProps} />;
    case 'users':
      return <Users {...iconProps} />;
    default:
      return <Building2 {...iconProps} />;
  }
};

export default function ValueProposition() {
  return (
    <section className="section-padding bg-holborn-neutral-light">
      <div className="container-custom">
        <h2 className="heading-secondary">Where Expertise Meets Exclusivity</h2>
        <p className="text-luxury text-center max-w-4xl mx-auto mb-12">
          We differentiate ourselves through a boutique approach that prioritizes quality over quantity, 
          offering curated portfolio access and personalized advisory services that corporate competitors 
          simply cannot match.
        </p>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {valuePropositions.map((item, index) => (
            <div key={index} className="card-luxury text-center group">
              <IconComponent iconName={item.icon} />
              <h3 className="heading-tertiary mb-3">{item.title}</h3>
              <p className="text-holborn-gray">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

