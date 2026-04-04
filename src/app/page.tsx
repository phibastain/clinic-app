import React from 'react';
import { Metadata } from 'next';
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
const ExpertiseSection = dynamic(() => import('@/components/sections/EventsSection'));
const FaqSection = dynamic(() => import('@/components/sections/FaqSection'));
const ContactSection = dynamic(() => import('@/components/sections/ContactSection'));

type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
  const awaitedParams = await searchParams;
  const isThai = awaitedParams.lang === 'th';
  const url = isThai ? '/?lang=th' : '/';
  
  const pageTitle = isThai
    ? 'M-Trust Urology Clinic | คลินิกระบบทางเดินปัสสาวะชั้นนำ | ผู้เชี่ยวชาญสุขภาพเพศชาย'
    : 'M-Trust Urology Clinic | Urologist & Men\'s Health Specialist, Pattaya';
  const pageDesc = isThai
    ? 'M-Trust Urology Clinic - ศูนย์ชั้นนำด้านสุขภาพเพศชายของประเทศไทย รักษาโรคหย่อนสมรรถภาพทางเพศ ต่อมลูกหมากโต ผ่าตัดใส่แกนองคชาตเทียม โดย นพ.นิติ นวนิมิตกุล นัดหมายวันนี้'
    : 'M-Trust Urology Clinic - Thailand\'s leading center for men\'s health. Expert treatment for erectile dysfunction, prostate conditions, penile prosthesis surgery by Dr. Niti Navanimitkul. Book consultation today.';

  return {
    title: pageTitle,
    description: pageDesc,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      locale: isThai ? 'th_TH' : 'en_US',
    },
    twitter: {
      title: pageTitle,
      description: pageDesc,
    },
    alternates: {
      canonical: url,
      languages: {
        'en': '/',
        'th': '/?lang=th',
      },
    },
  };
}

export default function Page() {
  return (
    <div className="selection:bg-amber-500 selection:text-white">
      <JsonLdScript data={getHomepageJsonLd('https://www.mtrusturology.com')} />
      <div className="min-h-screen font-sans relative overflow-x-hidden text-left text-slate-900 dark:text-slate-100">
        <main className="relative z-10 text-left">
          <div id="home"><HeroSection /></div>
          <div id="about"><AboutSection /></div>
          <div id="services"><ServicesSection /></div>
          <div id="doctors"><DoctorsList /></div>
          <div id="expertise"><ExpertiseSection /></div>
          <div id="blog"><BlogSection /></div>
          <div id="faq"><FaqSection /></div>
          <div id="contact"><ContactSection /></div>
        </main>
      </div>
    </div>
  );
}