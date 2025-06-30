export interface Property {
  id: string;
  title: string;
  location: string;
  price: string;
  description: string;
  image: string;
  features?: string[];
}

export interface ContactFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone?: string;
  budget?: string;
  markets?: string;
  message?: string;
}

export interface ValueProposition {
  icon: string;
  title: string;
  description: string;
}

export interface Service {
  title: string;
  description: string;
}

export interface ContactInfo {
  address: string[];
  phone: string;
  email: string;
  hours: string[];
}

export interface NavigationItem {
  href: string;
  label: string;
}

export interface HeroContent {
  title: string;
  description: string;
  ctaText: string;
}

