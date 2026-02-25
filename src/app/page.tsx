'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import { getHomepageJsonLd, JsonLdScript } from '@/utils/jsonLd';

// UI Components (above-the-fold, load eagerly)
import HeroSection from '@/components/ui/HeroSection';

// Above-fold section components (load eagerly)
import AboutSection from '@/components/sections/AboutSection';
import ServicesSection from '@/components/sections/ServicesSection';
import DoctorsList from '@/components/sections/DoctorsList';

// Below-fold & conditional components (lazy-loaded to reduce TBT)
import dynamic from 'next/dynamic';
const BlogSection = dynamic(() => import('@/components/sections/BlogSection'));
const EventsSection = dynamic(() => import('@/components/sections/EventsSection'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

const Page: React.FC = () => {
  const router = useRouter();

  return (
    <div className="selection:bg-amber-500 selection:text-white">
      <JsonLdScript data={getHomepageJsonLd('https://www.menshealth-thailand.com')} />
      <div className="min-h-screen font-sans relative overflow-x-hidden text-left text-slate-900 dark:text-slate-100">
        <main className="relative z-10 text-left">
          <div id="home"><HeroSection /></div>
          <div id="about"><AboutSection /></div>
          <div id="services"><ServicesSection /></div>
          <div id="doctors"><DoctorsList onSelectDoctor={(doc) => router.push(`/urologist/${doc.slug}`)} /></div>
          <div id="blog"><BlogSection /></div>
          {/* <div id="events"><EventsSection /></div> */}
          <div id="faq"><FaqSection /></div>
          <div id="contact"><ContactSection /></div>
        </main>
      </div>
    </div>
  );
}

export default Page;