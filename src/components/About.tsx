'use client';

import { ChevronRight } from 'lucide-react';

export default function About() {
  const handleLearnMore = () => {
    alert('More information about our team coming soon! Please contact us for immediate assistance.');
  };

  return (
    <section id="about" className="section-padding bg-holborn-neutral-light">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="heading-secondary">About Holborn Properties</h2>
          <div className="space-y-6 text-luxury">
            <p>
              Holborn Properties was established with a singular vision: to provide discerning international 
              investors with unparalleled access to exceptional real estate opportunities. Our team combines 
              decades of experience in luxury markets across London, New York, Monaco, and beyond.
            </p>
            <p>
              We understand that high-net-worth individuals require more than transactional support. They seek 
              trusted advisors who understand their unique circumstances, investment objectives, and lifestyle aspirations.
            </p>
          </div>
          <button 
            className="btn-secondary mt-8"
            onClick={handleLearnMore}
          >
            Learn More About Our Team
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}

