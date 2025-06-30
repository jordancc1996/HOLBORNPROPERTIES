'use client';

import Image from 'next/image';
import { MapPin, ChevronRight } from 'lucide-react';
import type { Property } from '@/types';

const properties: Property[] = [
  {
    id: '1',
    title: 'Mayfair Penthouse',
    location: 'London, United Kingdom',
    price: '£8,500,000',
    description: 'Exceptional penthouse with panoramic city views',
    image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '2',
    title: 'Upper East Side Condominium',
    location: 'New York, United States',
    price: '$12,000,000',
    description: 'Luxury condominium in prestigious Manhattan location',
    image: 'https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    id: '3',
    title: 'Monte Carlo Apartment',
    location: 'Monaco',
    price: '€6,800,000',
    description: 'Sophisticated apartment with Mediterranean lifestyle',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }
];

export default function Properties() {
  const handleViewDetails = (property: Property) => {
    alert(`More details about ${property.title} coming soon! Please contact us for immediate assistance.`);
  };

  return (
    <section id="properties" className="section-padding">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="heading-secondary">Exceptional Opportunities</h2>
          <p className="text-luxury max-w-3xl mx-auto">
            A carefully curated selection of premium properties representing different market segments 
            and geographic regions, each offering unique investment and lifestyle opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <div key={property.id} className="property-card group">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src={property.image}
                  alt={property.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-6">
                <h3 className="heading-tertiary mb-2">{property.title}</h3>
                <p className="text-holborn-gray mb-2 flex items-center gap-1">
                  <MapPin className="h-4 w-4" />
                  {property.location}
                </p>
                <p className="text-2xl font-semibold text-holborn-gold mb-3">
                  {property.price}
                </p>
                <p className="text-holborn-gray mb-4 leading-relaxed">
                  {property.description}
                </p>
                <button 
                  className="btn-secondary w-full justify-center"
                  onClick={() => handleViewDetails(property)}
                >
                  View Details
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

