import React from 'react';
import { Metadata } from 'next';
import { getHomepageJsonLd, JsonLdScript } from '@/utils/jsonLd';

// UI Components (above-the-fold, load eagerly)
import HeroSection from '@/components/ui/HeroSection';

// Above-fold section component (load eagerly)
import AboutSection from '@/components/sections/AboutSection';

// Below-fold section components (lazy-loaded to reduce TBT)
import dynamic from 'next/dynamic';
const ServicesSection = dynamic(() => import('@/components/sections/ServicesSection'));
const DoctorsList = dynamic(() => import('@/components/sections/DoctorsList'));
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
  const isAr = awaitedParams.lang === 'ar';
  const isRu = awaitedParams.lang === 'ru';
  const url = isRu ? '/?lang=ru' : isAr ? '/?lang=ar' : isThai ? '/?lang=th' : '/';
  
  const pageTitle = isRu
    ? 'Урологическая клиника M-Trust | Уролог и специалист по мужскому здоровью, Паттайя, Таиланд'
    : isAr
    ? 'عيادة إم-ترست لجراحة المسالك البولية | أخصائي المسالك البولية وصحة الرجل، باتايا، تايلاند'
    : isThai
    ? 'M-Trust Urology Clinic | คลินิกทางเดินปัสสาวะ พัทยา | ผู้เชี่ยวชาญสุขภาพเพศชาย ประเทศไทย'
    : 'M-Trust Urology Clinic | Urologist & Men\'s Health Specialist, Pattaya, Thailand';
  const pageDesc = isRu
    ? 'Клиника M-Trust — ведущий центр мужского здоровья в Таиланде. Лечение эректильной дисфункции, заболеваний простаты, имплантация пениса. Доктор Нити Наванимиткул. Запишитесь на консультацию сегодня.'
    : isAr
    ? 'عيادة إم-ترست - المركز الرائد في تايلاند لصحة الرجل. علاج متخصص لضعف الانتصاب وأمراض البروستاتا وزراعة دعامة القضيب بواسطة د. نيثي نافانيميتكول. احجز استشارتك اليوم.'
    : isThai
    ? 'M-Trust Urology Clinic พัทยา ประเทศไทย - ศูนย์ชั้นนำด้านสุขภาพเพศชายของประเทศไทย รักษาโรคหย่อนสมรรถภาพทางเพศ ต่อมลูกหมากโต ผ่าตัดใส่แกนองคชาตเทียม โดย นพ.นิติ นวนิมิตกุล นัดหมายวันนี้'
    : 'M-Trust Urology Clinic Pattaya, Thailand - Thailand\'s leading center for men\'s health. Expert treatment for erectile dysfunction, prostate conditions, penile prosthesis surgery by Dr. Niti Navanimitkul. Book consultation today.';

  return {
    title: pageTitle,
    description: pageDesc,
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      locale: isRu ? 'ru_RU' : isAr ? 'ar_SA' : isThai ? 'th_TH' : 'en_US',
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
        'ar': '/?lang=ar',
        'ru': '/?lang=ru',
        'x-default': '/',
      },
    },
  };
}

export default async function Page({ searchParams }: Props) {
  const awaitedParams = await searchParams;
  const lang = awaitedParams?.lang === 'ru' ? 'ru' : awaitedParams?.lang === 'ar' ? 'ar' : awaitedParams?.lang === 'th' ? 'th' : 'en';

  return (
    <div className="selection:bg-amber-500 selection:text-white">
      <JsonLdScript data={getHomepageJsonLd('https://www.mtrusturology.com', lang)} />
      <div className="min-h-screen font-sans relative overflow-x-hidden text-start text-slate-900 dark:text-slate-100">
        <main className="relative z-10 text-start">
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