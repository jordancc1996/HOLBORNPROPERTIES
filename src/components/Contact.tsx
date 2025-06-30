'use client';

import { useState } from 'react';
import { MapPin, Phone, Mail, Clock, ChevronRight } from 'lucide-react';
import type { ContactFormData, ContactInfo } from '@/types';

const contactInfo: ContactInfo = {
  address: ['123 Mount Street, Mayfair', 'London W1K 3NP, United Kingdom'],
  phone: '+44 (0)20 7123 4567',
  email: 'enquiries@holbornproperties.com',
  hours: ['Monday - Friday: 9:00 AM - 6:00 PM GMT', 'Weekend appointments available by arrangement']
};

export default function Contact() {
  const [formData, setFormData] = useState<ContactFormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    budget: '',
    markets: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert('Please fill in all required fields.');
      return;
    }

    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      alert('Thank you for your inquiry! We will contact you within 24 hours.');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        budget: '',
        markets: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 2000);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Contact Information */}
          <div>
            <h2 className="heading-secondary text-left mb-6">Contact Us</h2>
            <p className="text-luxury mb-8">
              Schedule a private consultation to discuss your investment objectives and discover how 
              Holborn Properties can help you achieve your international real estate goals.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <MapPin className="h-5 w-5 text-holborn-gold mt-1 flex-shrink-0" />
                <div>
                  {contactInfo.address.map((line, index) => (
                    <p key={index} className="text-holborn-gray">{line}</p>
                  ))}
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="h-5 w-5 text-holborn-gold flex-shrink-0" />
                <p className="text-holborn-gray">{contactInfo.phone}</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="h-5 w-5 text-holborn-gold flex-shrink-0" />
                <p className="text-holborn-gray">{contactInfo.email}</p>
              </div>
              
              <div className="flex items-start gap-4">
                <Clock className="h-5 w-5 text-holborn-gold mt-1 flex-shrink-0" />
                <div>
                  {contactInfo.hours.map((line, index) => (
                    <p key={index} className="text-holborn-gray">{line}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="card-luxury">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="form-label">
                    First Name *
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="lastName" className="form-label">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleInputChange}
                    className="form-input"
                    required
                  />
                </div>
              </div>
              
              <div>
                <label htmlFor="email" className="form-label">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="form-input"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="budget" className="form-label">
                  Investment Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleInputChange}
                  className="form-input"
                >
                  <option value="">Select Budget Range</option>
                  <option value="1-5m">£1M - £5M</option>
                  <option value="5-10m">£5M - £10M</option>
                  <option value="10-25m">£10M - £25M</option>
                  <option value="25m+">£25M+</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="markets" className="form-label">
                  Preferred Markets
                </label>
                <input
                  type="text"
                  id="markets"
                  name="markets"
                  value={formData.markets}
                  onChange={handleInputChange}
                  placeholder="e.g., London, New York, Monaco"
                  className="form-input"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  placeholder="Tell us about your investment objectives..."
                  className="form-input resize-vertical"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="btn-primary w-full justify-center text-lg"
              >
                {isSubmitting ? 'Sending...' : 'Request Consultation'}
                <ChevronRight className="h-5 w-5" />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

