'use client';

import { useRef } from 'react';
import Head from 'next/head';
import Navigation from '@/components/Navigation';
import Hero from '@/components/Hero';
import ValueProposition from '@/components/ValueProposition';
import Properties from '@/components/Properties';
import Services from '@/components/Services';
import About from '@/components/About';
import Contact from '@/components/Contact';

export default function Home() {
  const contactRef = useRef<HTMLElement>(null);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      const navHeight = 80;
      const elementPosition = element.offsetTop - navHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <>
      <Head>
        <title>Holborn Properties | Luxury International Real Estate</title>
        <meta 
          name="description" 
          content="Holborn Properties provides exclusive access to premium international real estate opportunities for high-net-worth individuals seeking lifestyle and investment excellence." 
        />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="min-h-screen">
        <Navigation />
        <Hero onContactClick={scrollToContact} />
        <ValueProposition />
        <Properties />
        <Services />
        <About />
        <Contact />
      </main>
    </>
  );
}

