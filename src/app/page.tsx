/* eslint-disable @next/next/no-img-element */
'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  ChevronRight, ChevronDown, ArrowRight, Facebook, Twitter, Instagram,
  Phone, Mail, MapPin, Clock, Sun, Moon, Info, Calendar, ShieldCheck,
  Stethoscope, Activity, Home, FileText, Users, Award, Target, History,
  CheckCircle2, Trophy, Microscope, Zap, Droplets, Scissors, Syringe, Layers, Search,
  MessageCircle, Smartphone, Send, Mic2, Users2, Timer, Menu, X, User,
  HeartPulse, Brain, Cross, Pill, HelpCircle, Plus, Minus, Youtube, BookOpen, GraduationCap, Medal, Image as ImageIcon, PlayCircle, ChevronLeft, ZoomIn, Globe,
  Star, Briefcase, Play, Thermometer, BatteryCharging, Fingerprint, Sparkles, TrendingUp, AlertCircle,
  BarChart3, Box, Hexagon, ZapOff, CheckSquare, FileSearch, Flame, Ruler, ScanLine, FlaskConical,
  LucideIcon
} from 'lucide-react';

// ==========================================
// 0. TYPES & INTERFACES
// ==========================================

interface IconProps {
  className?: string;
  size?: number | string;
}

interface ServiceStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

interface ServiceBenefit {
  title: string;
  desc: string;
  icon: LucideIcon;
}

interface ComparisonItem {
  feature: string;
  focus: string;
  radial: string;
  icon: LucideIcon;
}

interface ComparisonData {
  title: string;
  subtitle: string;
  headers: string[];
  items: ComparisonItem[];
}

interface TimelineStep {
  time: string;
  title: string;
  desc: string;
}

interface TimelineData {
  title: string;
  steps: TimelineStep[];
}

interface ProcedureStep {
  step: string;
  title: string;
  desc: string;
}

interface FaqItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

interface ServiceDetailData {
  title: string;
  tagline: string;
  description: string;
  heroImage: string;
  video?: { id: string; title: string } | null;
  stats?: ServiceStat[];
  benefits: ServiceBenefit[];
  comparison?: ComparisonData;
  candidates?: string[];
  safety?: { title: string; content: string; icon: LucideIcon };
  timeline?: TimelineData;
  procedure: ProcedureStep[];
  faq: FaqItem[];
}

interface HeroSlideData {
  id: number;
  promoTag: string;
  title: string;
  desc: string;
  doctorImage: string;
  btnText: string;
}

interface ServiceItem {
  name: string;
  desc: string;
  image: string;
  Icon: LucideIcon;
}

interface Qualification {
  year: string;
  title: string;
  place: string;
}

interface AwardData {
  year: string;
  title: string;
  issuer: string;
}

interface DoctorVideo {
  id: string;
  title: string;
  url: string;
}

interface DoctorData {
  id: number;
  name: string;
  role: string;
  image: string;
  expert: string;
  bio: string;
  specialties: string[];
  qualifications: Qualification[];
  awards: AwardData[];
  videos?: DoctorVideo[];
  videoUrl?: string;
  activities?: string[];
  certificates?: string[];
}

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
}

interface EventData {
  id: number;
  day: string;
  month: string;
  year: string;
  title: string;
  subtitle: string;
  location: string;
  time: string;
  description: string;
  image: string;
  category: string;
}

interface LanguageOption {
  code: string;
  flag: string;
  label: string;
}

// ==========================================
// 1. DATA CONFIGURATION
// ==========================================

// Move Icons here to fix initialization error
const SmileIcon: React.FC<IconProps> = ({ className, size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10" /><path d="M8 14s1.5 2 4 2 4-2 4-2" /><line x1="9" x2="9.01" y1="9" y2="9" /><line x1="15" x2="15.01" y1="9" y2="9" /></svg>;
const InfinityIcon: React.FC<IconProps> = ({ className, size }) => <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" /></svg>;

const SERVICE_DETAILS_DATA: Record<string, ServiceDetailData> = {
  'Focus Shockwave': {
    title: 'Linear Focus Shockwave (Li-ESWT)',
    tagline: 'The Future of ED Treatment: Regenerate, Restore, Perform.',
    description: "Experience the next generation of men's sexual health therapy. Unlike temporary fixes like pills, Linear Focus Shockwave Therapy targets the root cause of Erectile Dysfunction (ED) by utilizing high-frequency acoustic waves to stimulate angiogenesis—the formation of new blood vessels. This results in improved blood flow, stronger erections, and restored spontaneity.",
    heroImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=1200&q=80',
    video: { id: 'JmU9Wz5UARA', title: 'Mechanism of Action: Li-ESWT' },
    stats: [
      { label: "Clinical Success", value: "85%+", icon: Trophy },
      { label: "Treatment Time", value: "15 Mins", icon: Timer },
      { label: "Downtime", value: "0 Days", icon: Activity },
      { label: "Result Duration", value: "2 Years", icon: Calendar }
    ],
    benefits: [
      { title: 'Curative Approach', desc: 'Treats the root cause (blood flow), not just symptoms.', icon: Activity },
      { title: '100% Non-Invasive', desc: 'No needles, no surgery, no medication required.', icon: ShieldCheck },
      { title: 'Painless', desc: 'Pain-free treatment with no downtime. Lunch-break procedure.', icon: SmileIcon },
      { title: 'Long-Term Results', desc: 'Effects can last 2+ years with maintenance.', icon: InfinityIcon }
    ],
    comparison: {
      title: "Why Focus Shockwave is Superior",
      subtitle: "Linear Focus vs. Traditional Radial Waves",
      headers: ["Li-ESWT (Focus)", "Radial Wave"],
      items: [
        { feature: "Wave Propagation", focus: "Directed, Deep Penetration", radial: "Superficial, Spreading", icon: Target },
        { feature: "Energy Density", focus: "High & Constant at Target", radial: "Dissipates Rapidly", icon: Zap },
        { feature: "Therapeutic Goal", focus: "Angiogenesis (New Vessels)", radial: "Muscle Relaxation / Pain", icon: HeartPulse },
        { feature: "Efficacy for ED", focus: "Gold Standard (Curative)", radial: "Limited / Supportive only", icon: Trophy }
      ]
    },
    candidates: [
      "Men with mild to severe vasculogenic Erectile Dysfunction.",
      "Patients who do not respond well to oral medications (PDE5i).",
      "Men seeking a drug-free, surgery-free solution.",
      "Patients with Peyronie’s Disease (Curvature) or Chronic Pelvic Pain."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "Li-ESWT is FDA-cleared and one of the safest procedures in urology. There are virtually no significant side effects. Some patients may experience mild, temporary redness or tingling at the treatment site, which resolves within minutes.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Treatment Protocol & Results",
      steps: [
        { time: "Week 1-3", title: "Stimulation", desc: "Initial cellular stimulation. Dormant vessels awaken." },
        { time: "Week 4-6", title: "Regeneration", desc: "Angiogenesis peaks. New blood vessels form. Blood flow improves." },
        { time: "Month 3+", title: "Restoration", desc: "Peak clinical results. Spontaneous erections return. Effects sustain for 1-2 years." }
      ]
    },
    procedure: [
      { step: '01', title: 'Mapping', desc: 'Doctor identifies target areas along the penile shaft and crura.' },
      { step: '02', title: 'Application', desc: 'Gel is applied. The linear head delivers 3,000-6,000 shocks precisely.' },
      { step: '03', title: 'Complete', desc: 'Session ends in 15-20 mins. Resume normal activity immediately.' },
      { step: '04', title: 'Repeat', desc: 'Standard protocol: 6 sessions (1-2 times per week).' }
    ],
    faq: [
      { q: "How is Focus Shockwave better than Radial?", a: "Focus waves travel deeper and deliver energy exactly to the cavernous tissue to grow blood vessels. Radial waves only hit the skin surface and are meant for muscle pain, not ED cure." },
      { q: "When will I see results?", a: "Many patients report improvement after the 3rd session (Week 2-3), with full benefits appearing 1-3 months after completing the course." },
      { q: "Is it painful?", a: "Not at all. It feels like a light tapping or vibration. No anesthesia is needed." }
    ]
  },
  'Generic': {
    title: 'Specialized Urology Care',
    tagline: 'World-Class Treatment Standards',
    description: "We provide comprehensive diagnosis and treatment plans tailored to your specific condition. Our team of specialists utilizes the latest technology to ensure the best possible outcomes for your health.",
    heroImage: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=1200&q=80',
    video: null,
    benefits: [
      { title: 'Expert Team', desc: 'Board-certified urologists with international training.', icon: Users },
      { title: 'Modern Tech', desc: 'Latest diagnostic and surgical equipment.', icon: Zap },
      { title: 'Privacy', desc: '100% confidential and personalized care.', icon: ShieldCheck },
      { title: 'Holistic', desc: 'We treat the person, not just the disease.', icon: HeartPulse }
    ],
    procedure: [
      { step: '01', title: 'Assessment', desc: 'Detailed history and physical examination.' },
      { step: '02', title: 'Diagnosis', desc: 'Lab tests and imaging as required.' },
      { step: '03', title: 'Plan', desc: 'Personalized treatment roadmap discussed with you.' },
      { step: '04', title: 'Follow-up', desc: 'Continuous monitoring of your progress.' }
    ],
    faq: []
  }
};

const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 1,
    promoTag: 'SPECIAL OFFER - 20% OFF',
    title: 'PROSTATE\nSCREENING',
    desc: 'Comprehensive prostate screening package including PSA test and specialist consultation for superior prevention and early detection.',
    doctorImage: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
    btnText: 'Claim Offer'
  },
  {
    id: 2,
    promoTag: 'Expert Surgical Care',
    title: 'ADVANCED\nVASECTOMY',
    desc: 'Innovative minimally invasive vasectomy technique with fast recovery, performed by our senior urologist team.',
    doctorImage: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=800&q=80',
    btnText: 'View Details'
  },
  {
    id: 3,
    promoTag: 'Men\'s Health Month',
    title: 'REGAIN\nCONFIDENCE',
    desc: 'Restore your confidence with personalized ED treatment plans and hormone therapy under international medical standards.',
    doctorImage: 'https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?w=800&q=80',
    btnText: 'Book Consultation'
  }
];

const SERVICE_CATEGORIES: Record<string, ServiceItem[]> = {
  'Erectile Dysfunction': [
    { name: 'Focus Shockwave', desc: 'Non-invasive sound wave therapy stimulating blood flow to treat the root cause of ED.', image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80', Icon: Zap },
    { name: 'PRP for ED', desc: 'Platelet-Rich Plasma therapy utilizes your body\'s growth factors to rejuvenate tissue.', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', Icon: Droplets },
    { name: 'Stem Cell for ED', desc: 'Advanced regenerative medicine repairing damaged vessels and nerves.', image: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=600&q=80', Icon: Activity },
    { name: 'Penile Implant', desc: 'Surgical solution for severe ED using inflatable or malleable prostheses.', image: 'https://images.unsplash.com/photo-1551076805-e1869033e561?w=600&q=80', Icon: Layers },
    { name: 'Dorsal Neurectomy', desc: 'Microsurgical procedure to reduce penile sensitivity and treat premature ejaculation.', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=80', Icon: Scissors },
    { name: 'Testosterone Replacement Therapy', desc: 'Hormonal therapy to restore energy, libido, and muscle mass in men with low T.', image: 'https://images.unsplash.com/photo-1471864190281-ad5f9f3424ae?w=600&q=80', Icon: Activity }
  ],
  'Urinary Symptoms': [
    { name: 'ReZum', desc: 'Minimally invasive water vapor therapy for BPH ensuring rapid recovery.', image: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?w=600&q=80', Icon: Droplets },
    { name: 'UroLift', desc: 'A revolutionary implant procedure that lifts enlarged prostate tissue.', image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80', Icon: Target },
    { name: 'Sexually Transmitted Infection', desc: 'Confidential screening and modern treatment for all sexually transmitted infections.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80', Icon: ShieldCheck },
    { name: 'Stone Disease', desc: 'Advanced laser lithotripsy and management for kidney and bladder stones.', image: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80', Icon: Target },
    { name: 'Urinary Symptoms', desc: 'Comprehensive diagnosis for frequent urination, incontinence, and pain.', image: 'https://images.unsplash.com/photo-1581595220892-b0739bbe3df8?w=600&q=80', Icon: Activity }
  ],
  'Aesthetic & Penile Surgery': [
    { name: 'Circumcision', desc: 'Modern stapler circumcision ensures precise incisions and faster healing.', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&q=80', Icon: Scissors },
    { name: 'Penile Enlargement', desc: 'Safe augmentation using premium medical fillers or fat transfer.', image: 'https://images.unsplash.com/photo-1609188076864-c35269136b09?w=600&q=80', Icon: Layers },
    { name: 'Penile Lengthening', desc: 'Surgical or non-surgical procedures to enhance length and aesthetic appearance.', image: 'https://images.unsplash.com/photo-1606787620819-8bdf0c44c293?w=600&q=80', Icon: Activity },
    { name: 'Excision of penile Paraffinoma', desc: 'Removal of foreign substances and reconstructive surgery by specialists.', image: 'https://images.unsplash.com/photo-1579154204601-01588f351e67?w=600&q=80', Icon: Scissors },
    { name: 'Vasectomy', desc: 'Permanent male contraception via a quick, minimally invasive procedure.', image: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2ad49?w=600&q=80', Icon: ShieldCheck }
  ],
  'Examination & Lab Testing': [
    { name: 'Flexible Cystoscopy', desc: 'High-resolution bladder examination using a soft, flexible scope.', image: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?w=600&q=80', Icon: Activity },
    { name: 'Ultrasound', desc: 'High-precision imaging for detailed assessment of kidneys and prostate.', image: 'https://images.unsplash.com/photo-1576091160550-2187d80a1a87?w=600&q=80', Icon: Search },
    { name: 'Lab Testing', desc: 'Comprehensive blood work including PSA screening and hormonal profiles.', image: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?w=600&q=80', Icon: Microscope }
  ]
};

const DOCTORS: DoctorData[] = [
  {
    id: 1,
    name: 'Dr. Niti Navanimitkul',
    role: 'Urologist & Sexual Health Specialist',
    image: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=800&q=80',
    expert: 'Rezum & UroLift Specialist',
    bio: "Dr. Niti Navanimitkul is a distinguished Urologist and Sexual Health Specialist. He is widely recognized for his expertise in minimally invasive treatments for Benign Prostatic Hyperplasia (BPH) and Erectile Dysfunction. He is the first ASEAN Proctor for UroLift and a certified Center of Excellence for Rezum Water Vapor Therapy.",
    specialties: ["Penile Prosthesis Surgery", "Sexual Dysfunction Specialist", "Water Vapor Therapy (Rezum)", "UroLift Specialist", "Advanced HoLEP Laser Surgery"],
    qualifications: [
      { year: "2018", title: "Intensive Penile Prosthesis Workshop", place: "Ramathibodi Hospital, Bangkok" },
      { year: "2017", title: "Training in Endourology", place: "Strasbourg, France" },
      { year: "2017", title: "Advance in Upper Urinary Tract Laparoscopic Urology", place: "Rajavithi Hospital" },
      { year: "2017", title: "Advanced Course in Laparoscopic Urological Surgery", place: "Asia IRCAD-TAIWAN, Lugang, Taiwan" },
      { year: "2014", title: "Visiting Clinical Fellow in Urology and Andrology", place: "MD Anderson Cancer Center, The University of Texas, USA" },
      { year: "2010", title: "Diplomate Thai Board of Urology", place: "Chiang Mai University, Thailand" },
      { year: "2003", title: "Doctor of Medicine", place: "Faculty of Medicine, Chiang Mai University, Thailand" }
    ],
    awards: [
      { year: "2025", title: "First ASEAN Proctor for UroLift", issuer: "Appointed April 30, 2025" },
      { year: "2025", title: "The First Certified UroLift Success Story (50 Cases)", issuer: "Teleflex™ Academy" },
      { year: "2025", title: "Panelist: 'Beyond the Manual' Urology Summit", issuer: "National Urology Summit 2025" },
      { year: "2024", title: "Thailand's First Urologist Certified in UroLift", issuer: "Teleflex™ Interventional Urology" },
      { year: "2024", title: "Certificate: UROLIFT™ SYSTEM PROFICIENCY PATHWAY", issuer: "Teleflex™ Interventional Urology, USA" },
      { year: "2024", title: "Chairperson: 2024 ED&BPH Masterclass", issuer: "ZP Therapeutics, Thailand" },
      { year: "2023", title: "Center of Excellence: Rezūm™ Water Vapor Therapy", issuer: "Boston Scientific" },
      { year: "2023", title: "Achievement: Successful completion of >80 Rezūm™ procedures", issuer: "Boston Scientific, USA" },
      { year: "2023", title: "Certificate: Coloplast IPP & Testicular Implants", issuer: "Chulalongkorn University & Sewum Prosthetic Urology Center, Korea" },
      { year: "2022", title: "Awards of Rezūm™ Center of Excellence", issuer: "Boston Scientific" },
      { year: "2022", title: "Proctor of Rezūm Therapy in ASEAN", issuer: "Boston Scientific" }
    ],
    videos: [
      { id: "qHw1oMib4d4", title: "Exclusive Interview: Men's Health & Rezum", url: "https://www.youtube.com/embed/qHw1oMib4d4" },
      { id: "JmU9Wz5UARA", title: "Advanced UroLift Procedure Explained", url: "https://www.youtube.com/embed/JmU9Wz5UARA" }
    ],
    videoUrl: "https://www.youtube.com/embed/sZjMXnOX0Lc",
    activities: [
      "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600&q=80",
      "https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=600&q=80",
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=600&q=80",
      "https://images.unsplash.com/photo-1559757175-5700dde675bc?w=600&q=80"
    ],
    certificates: [
      "https://images.unsplash.com/photo-1589330694653-46d2de65a247?w=400&q=80",
      "https://images.unsplash.com/photo-1606326608606-aa0b62935f2b?w=400&q=80",
      "https://images.unsplash.com/photo-1555529733-0e670560f7e1?w=400&q=80",
      "https://images.unsplash.com/photo-1589829085413-56de8ae18c73?w=400&q=80",
      "https://images.unsplash.com/photo-1633613286991-611fe299c4be?w=400&q=80",
    ]
  },
  {
    id: 2,
    name: 'Asst. Prof. Dr. Yossak',
    role: 'Men\'s Health Specialist',
    image: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=800&q=80',
    expert: 'Wellness & Hormone',
    bio: "Specializing in holistic men's health, focusing on hormonal balance, anti-aging, and non-surgical restoration of sexual function.",
    specialties: ["Testosterone Replacement", "Anti-Aging", "Sexual Medicine"],
    qualifications: [
      { year: "2012", title: "Board of Urology", place: "Siriraj Hospital" },
      { year: "2005", title: "Doctor of Medicine", place: "Mahidol University" }
    ],
    awards: [
      { year: "2024", title: "Best Researcher 2024", issuer: "Thai Medical Association" },
      { year: "2023", title: "Men's Health Innovation Award", issuer: "Men's Health Asia" }
    ],
    videoUrl: "",
    activities: [],
    certificates: []
  },
  {
    id: 3,
    name: 'Dr. Robert Miller',
    role: 'Stone Disease Specialist',
    image: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=800&q=80',
    expert: 'Diagnostics & Surgery',
    bio: "Expert in treating kidney stones with advanced laser lithotripsy and minimally invasive endoscopic procedures.",
    specialties: ["Endourology", "Stone Disease", "Laparoscopic Surgery"],
    qualifications: [
      { year: "2008", title: "Doctor of Medicine", place: "Chulalongkorn University" }
    ],
    awards: [],
    videoUrl: "",
    activities: [],
    certificates: []
  },
];

const ABOUT_SPECIALTIES = [
  { title: 'Performance Restoration', desc: 'Treat ED and restore vitality with innovative Li-ESWT technology.', Icon: Zap, image: 'https://images.unsplash.com/photo-1618939304348-25087661597a?w=600&q=80' },
  { title: 'General & Surgical Urology', desc: 'Diagnosis and minimally invasive surgery for all urological conditions.', Icon: Stethoscope, image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { title: 'Prostate & Stone Center', desc: 'Advanced laser care for enlarged prostate and kidney stones by specialists.', Icon: Target, image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80' },
  { title: 'Cosmetic Urology', desc: 'Professional male aesthetic surgery and safe augmentation procedures.', Icon: Scissors, image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=80' }
];

const FAQ_DATA: FaqItem[] = [
  { question: "Do I need a referral to make an appointment?", answer: "No, you can book an appointment directly with our specialists without a referral letter. We welcome both local and international patients." },
  { question: "Is the Shockwave therapy for ED painful?", answer: "Not at all. Focus Shockwave is a non-invasive, painless procedure requiring no anesthesia. Most patients describe a light tapping sensation." },
  { question: "What is the recovery time for a Vasectomy?", answer: "Our minimally invasive 'No-Scalpel' vasectomy allows for a very quick recovery. Most patients return to light work within 1-2 days and full activity within a week." },
  { question: "Do you accept health insurance?", answer: "We partner with major international insurance providers. Please bring your policy details, and our staff will assist with the pre-authorization process." },
  { question: "Is my consultation confidential?", answer: "Absolutely. We adhere to strict medical privacy standards. Your records and consultation details are kept 100% confidential." },
  { question: "Do you offer tele-consultation services?", answer: "Yes, we offer secure video consultations for initial screenings and follow-ups. You can book this service through our Line Official or website." }
];

const BLOG_POSTS: BlogPost[] = [
  { id: 1, title: 'What is Shockwave (Li-ESWT)? Can it really cure ED?', excerpt: 'Discover how high-frequency sound waves stimulate new blood vessel formation to treat the root cause of ED without medication.', date: 'Feb 02, 2026', category: 'Innovation', image: 'https://images.unsplash.com/photo-1618939304348-25087661597a?w=600&q=80' },
  { id: 2, title: 'Treating BPH Without Surgery: ReZum & UroLift', excerpt: 'New alternatives for Benign Prostatic Hyperplasia that preserve sexual function and offer rapid recovery.', date: 'Jan 31, 2026', category: 'Treatment', image: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=600&q=80' },
  { id: 3, title: 'Stapler Circumcision vs Traditional: Which is Better?', excerpt: 'Comparing traditional methods with the latest stapler technology. Less pain, aesthetic results, and 15-minute procedure.', date: 'Jan 28, 2026', category: 'Surgery', image: 'https://images.unsplash.com/photo-1584017911766-d451b3d0e843?w=600&q=80' },
  { id: 4, title: 'Prostate Cancer Warning Signs: Why PSA Matters', excerpt: 'Early-stage prostate cancer often shows no symptoms. Learn why annual PSA blood testing is crucial for men.', date: 'Jan 25, 2026', category: 'Prevention', image: 'https://images.unsplash.com/photo-1579165466741-7f35a4755657?w=600&q=80' },
  { id: 5, title: 'Low Testosterone (Low T): Symptoms & TRT Solutions', excerpt: 'Fatigue, mood swings, low libido? Learn about Testosterone Replacement Therapy from our specialists.', date: 'Jan 22, 2026', category: 'Wellness', image: 'https://images.unsplash.com/photo-1471864190281-ad5f9f3424ae?w=600&q=80' },
  { id: 6, title: 'Kidney Stones: Recognizing the Pain & Laser Treatment', excerpt: 'Understand the causes of kidney stones and explore the most advanced laser lithotripsy treatments.', date: 'Jan 19, 2026', category: 'Urology', image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=600&q=80' },
  { id: 7, title: 'Semen Analysis: The Key to Male Infertility', excerpt: 'Preparing for fatherhood: What your sperm quality and analysis report can tell you about your health.', date: 'Jan 15, 2026', category: 'Fertility', image: 'https://images.unsplash.com/photo-1584362917165-526a968579e8?w=600&q=80' },
  { id: 8, title: 'Overcoming Premature Ejaculation: Medical Solutions', excerpt: 'Explore medical treatments and microsurgical techniques to permanently address premature ejaculation.', date: 'Jan 12, 2026', category: 'Performance', image: 'https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&q=80' },
];

const EVENTS_DATA: EventData[] = [
  { id: 1, day: '14', month: 'MAR', year: '2026', title: "Men's Health Talk 2026", subtitle: 'Sexual Health & Wellness Seminar', location: 'Bangkok Hospital Pattaya, Meeting Room 1', time: '13:00 - 16:30', description: 'An in-depth seminar on men\'s health issues and erectile dysfunction. Meet special guest speakers who will demystify prostate health and ED, followed by a friendly Q&A session.', image: 'https://images.unsplash.com/photo-1544531586-fde5298cdd40?w=800&q=80', category: 'SEMINAR' },
  { id: 2, day: '28', month: 'MAR', year: '2026', title: 'UroLift Success Stories', subtitle: 'Innovation for BPH Treatment', location: 'M-Trust Clinic Main Hall', time: '10:00 - 12:00', description: 'Listen to real experiences from patients treated with UroLift. A new innovation requiring no surgery, fast recovery, and preservation of sexual function. Free initial consultation included.', image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=800&q=80', category: 'WORKSHOP' },
  { id: 3, day: '05', month: 'APR', year: '2026', title: 'Future of Men Health 2026', subtitle: 'Trends & Personalised Care', location: 'Online Webinar (Zoom)', time: '19:00 - 20:30', description: 'Update on 6 men\'s health trends for 2026, ranging from Hyper-personalised care to Mental Fitness building strategies.', image: 'https://images.unsplash.com/photo-1576091160550-2187d80a1a87?w=800&q=80', category: 'WEBINAR' },
  { id: 4, day: '20', month: 'APR', year: '2026', title: 'Fit & Firm: Men Health', subtitle: 'Motorsport & Physical Peak', location: 'Bangsaen Circuit & Activity Area', time: '08:00 - 15:00', description: 'Health promotion activity in collaboration with Motorsport teams. Learn how to keep your body fit for any situation and self-care for high-performance lifestyles.', image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=800&q=80', category: 'ACTIVITY' }
];

// ==========================================
// 2. ATOMIC COMPONENTS
// ==========================================

interface ContainerProps {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<ContainerProps> = ({ children, className = "" }) => (
  <div className={`max-w-7xl mx-auto px-6 md:px-12 ${className}`}>{children}</div>
);

const Logo: React.FC<{ onClick?: () => void }> = ({ onClick }) => (
  <div className="flex items-center space-x-2 group cursor-pointer shrink-0" onClick={onClick}>
    <div className="relative w-9 h-9 flex items-center justify-center overflow-hidden rounded-lg">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3050/3050257.png"
        alt="M-Trust Logo"
        className="w-full h-full object-contain"
      />
    </div>
    <div className="flex flex-col text-left leading-none">
      <span className="text-base font-black tracking-tighter text-slate-900 dark:text-white uppercase">M-Trust</span>
      <span className="text-[7px] font-bold text-amber-600 uppercase">Urology Clinic</span>
    </div>
  </div>
);

interface SectionTitleProps {
  tag: string;
  title: string;
  className?: string;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ tag, title, className = "" }) => (
  <div className={`flex flex-col mb-4 text-left ${className}`}>
    <div className="flex items-center space-x-4 mb-2">
      <div className="w-12 h-[2px] bg-amber-600"></div>
      <span className="text-[10px] font-black text-amber-600 uppercase tracking-[0.4em]">{tag}</span>
    </div>
    <h2 className="text-2xl md:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight leading-none">{title}</h2>
  </div>
);

const ModernBackground: React.FC = () => (
  <div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
    <div className="absolute inset-0 bg-slate-50 dark:bg-[#050505] transition-colors duration-1000" />
    <div className="absolute top-[-10%] right-[-5%] w-[600px] h-[600px] rounded-full bg-amber-200/30 dark:bg-amber-600/10 blur-[120px] animate-pulse-slow mix-blend-multiply dark:mix-blend-screen" />
    <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-blue-100/40 dark:bg-indigo-900/20 blur-[120px] mix-blend-multiply dark:mix-blend-screen" />
    <div className="absolute top-[40%] left-[30%] w-[400px] h-[400px] rounded-full bg-slate-200/30 dark:bg-slate-800/20 blur-[100px] mix-blend-overlay" />
    <div className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05] mix-blend-overlay">
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <filter id="noise_ref"><feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" /><feColorMatrix type="saturate" values="0" /></filter>
        <rect width="100%" height="100%" filter="url(#noise_ref)" />
      </svg>
    </div>
  </div>
);

interface GradientButtonProps {
  children: React.ReactNode;
  className?: string;
  variant?: 'primary' | 'dark' | 'outline';
  icon?: LucideIcon | React.FC<IconProps>;
  onClick?: () => void;
}

const GradientButton: React.FC<GradientButtonProps> = ({ children, className = "", variant = "primary", icon: Icon, onClick }) => {
  const variants = {
    primary: "bg-gradient-to-br from-amber-600 via-amber-500 to-amber-700 text-white shadow-lg shadow-amber-900/20",
    dark: "bg-gradient-to-br from-slate-900 via-slate-800 to-slate-950 text-white shadow-xl",
    outline: "bg-transparent border-2 border-amber-600 text-amber-600 hover:bg-amber-600 hover:text-white"
  };
  return (
    <button onClick={onClick} className={`group relative overflow-hidden flex items-center justify-center space-x-3 transition-all duration-500 hover:scale-[1.03] active:scale-[0.98] rounded-xl px-6 py-3 font-black uppercase text-[10px] tracking-widest ${variants[variant]} ${className}`}>
      <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity" />
      <span className="relative z-10">{children}</span>
      {Icon && <Icon className="relative z-10 transition-transform group-hover:translate-x-1" size={16} />}
    </button>
  );
};

// ==========================================
// 3. NAVIGATION COMPONENTS
// ==========================================

interface ThemeSwitchProps {
  isDark: boolean;
  setIsDark: (val: boolean) => void;
}

const ThemeSwitch: React.FC<ThemeSwitchProps> = ({ isDark, setIsDark }) => (
  <button
    onClick={() => setIsDark(!isDark)}
    className={`relative w-12 h-6 rounded-full transition-colors duration-300 focus:outline-none bg-white/10 border border-white/20`}
  >
    <span
      className={`absolute top-0.5 left-0.5 bg-white rounded-full w-4 h-4 shadow-sm transform transition-transform duration-300 flex items-center justify-center ${isDark ? 'translate-x-6' : 'translate-x-0'}`}
    >
      {isDark ? <Moon size={10} className="text-slate-800" /> : <Sun size={10} className="text-amber-500" />}
    </span>
  </button>
);

const languages: LanguageOption[] = [
  { code: 'EN', flag: 'https://flagcdn.com/w40/gb.png', label: 'English' },
  { code: 'TH', flag: 'https://flagcdn.com/w40/th.png', label: 'Thai' },
  { code: 'RU', flag: 'https://flagcdn.com/w40/ru.png', label: 'Russian' },
  { code: 'CN', flag: 'https://flagcdn.com/w40/cn.png', label: 'Chinese' },
  { code: 'AR', flag: 'https://flagcdn.com/w40/sa.png', label: 'Arabic' }
];

interface LanguageDropdownProps {
  lang: string;
  setLang: (lang: string) => void;
}

const LanguageDropdown: React.FC<LanguageDropdownProps> = ({ lang, setLang }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const currentLang = languages.find(l => l.code === lang) || languages[0];

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 bg-white/5 hover:bg-white/10 px-2 py-1 rounded-full transition-all border border-white/10 group min-w-[70px]"
      >
        <img
          src={currentLang.flag}
          alt={currentLang.label}
          className="w-5 h-3.5 object-cover rounded-[2px] shadow-sm"
        />
        <span className="text-[10px] font-bold text-slate-200">{currentLang.code}</span>
        <ChevronDown size={12} className={`text-slate-300 group-hover:text-amber-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-[#1a1a2e]/95 backdrop-blur-xl rounded-xl shadow-xl border border-white/10 overflow-hidden z-[200] animate-in fade-in zoom-in-95 duration-200 origin-top-right">
          <div className="py-1">
            {languages.map((l) => (
              <button
                key={l.code}
                onClick={() => { setLang(l.code); setIsOpen(false); }}
                className={`w-full flex items-center space-x-3 px-4 py-2.5 text-left hover:bg-white/5 transition-colors ${lang === l.code ? 'bg-amber-900/10' : ''}`}
              >
                <img
                  src={l.flag}
                  alt={l.label}
                  className="w-6 h-4 object-cover rounded-[2px] shadow-sm"
                />
                <span className={`text-[10px] font-bold uppercase tracking-wide ${lang === l.code ? 'text-amber-500' : 'text-slate-400'}`}>
                  {l.label}
                </span>
                {lang === l.code && <div className="ml-auto w-1.5 h-1.5 rounded-full bg-amber-500"></div>}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

interface MegaMenuProps {
  submenu?: Record<string, ServiceItem[]>;
  onServiceClick: (name: string) => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ submenu, onServiceClick }) => {
  const getFirstImage = () => {
    if (!submenu) return null;
    const firstKey = Object.keys(submenu)[0];
    if (submenu[firstKey] && submenu[firstKey].length > 0) {
      return submenu[firstKey][0].image || null;
    }
    return null;
  };

  const getFirstName = () => {
    if (!submenu) return null;
    const firstKey = Object.keys(submenu)[0];
    if (submenu[firstKey] && submenu[firstKey].length > 0) {
      return submenu[firstKey][0].name || null;
    }
    return 'Menu Item';
  }

  const [activeImg, setActiveImg] = useState<string | null>(getFirstImage());
  const [activeName, setActiveName] = useState<string | null>(getFirstName());

  if (!submenu || Object.keys(submenu).length === 0) return null;

  // Need to use useEffect because submenu can change props
  useEffect(() => {
    setActiveImg(getFirstImage());
    setActiveName(getFirstName());
  }, [submenu]);

  const count = Object.keys(submenu).length;
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-2',
    3: 'grid-cols-3',
    4: 'grid-cols-4'
  }[count as 1 | 2 | 3 | 4] || 'grid-cols-4';

  return (
    <div className="absolute top-full left-1/2 -translate-x-1/2 w-[900px] opacity-0 invisible pointer-events-none group-hover/nav:opacity-100 group-hover/nav:visible group-hover/nav:pointer-events-auto transition-all duration-300 ease-out transform translate-y-1 group-hover/nav:translate-y-0 z-[110]">
      <div className="absolute -top-2 left-0 w-full h-4 bg-transparent" />
      <div className="flex bg-white/95 backdrop-blur-xl dark:bg-[#121212]/98 shadow-[0_40px_100px_rgba(0,0,0,0.25)] rounded-3xl overflow-hidden border border-white/20 dark:border-white/10 w-full mt-2">
        <div className={`flex-1 p-8 grid ${gridClass} gap-6 text-left`}>
          {Object.entries(submenu).map(([title, links], i) => (
            <div key={i} className="text-left">
              <h4 className="font-black text-slate-900 dark:text-white mb-3 text-[11px] uppercase tracking-tighter border-b border-amber-600/10 pb-2 truncate">{title}</h4>
              <ul className="space-y-2.5">
                {links.map((link, j) => (
                  <li key={j}>
                    <a href="#" onMouseEnter={() => {
                      if (link.image) setActiveImg(link.image);
                      setActiveName(link.name);
                    }}
                      onClick={(e) => {
                        e.preventDefault();
                        onServiceClick(link.name);
                      }}
                      className="text-[10px] text-slate-500 dark:text-slate-400 hover:text-amber-600 font-bold transition-all flex items-center group/link uppercase tracking-wider text-left">
                      <span className="w-0 group-hover/link:w-2 h-0.5 bg-amber-600 mr-0 group-hover/link:mr-1.5 transition-all duration-300"></span>{link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="w-[300px] relative overflow-hidden flex-shrink-0 bg-slate-100 group/img border-l border-white/20 dark:border-white/5">
          {activeImg && <img key={activeImg} src={activeImg} alt="" className="w-full h-full object-cover animate-in fade-in zoom-in duration-700" />}
          <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent flex flex-col justify-end p-6 text-left">
            <p className="text-amber-500 text-[8px] font-black uppercase tracking-[0.3em] mb-2">Featured Service</p>
            <h5 className="text-white font-black text-lg uppercase tracking-tighter leading-tight mb-4">{activeName}</h5>
            {activeName && (
              <GradientButton variant="primary" className="px-5 py-2.5 text-[8px] w-full" onClick={() => onServiceClick(activeName)}>View Details</GradientButton>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

interface HeaderProps {
  activeSection: string;
  scrollToSection: (id: string) => void;
  lang: string;
  setLang: (lang: string) => void;
  isDark: boolean;
  setIsDark: (val: boolean) => void;
  onBackToHome: () => void;
  onServiceClick: (name: string) => void;
}

const Header: React.FC<HeaderProps> = ({ activeSection, scrollToSection, lang, setLang, isDark, setIsDark, onBackToHome, onServiceClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    setMounted(true);
    const updateTime = () => setTime(new Date().toLocaleTimeString('en-GB', { hour: '2-digit', minute: '2-digit', hour12: false }));
    updateTime();
    const interval = setInterval(updateTime, 1000);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearInterval(interval);
    };
  }, []);

  const menuItems = [
    { title: 'Home', icon: Home, mega: false },
    { title: 'About', icon: Info, mega: false },
    { title: 'Services', icon: Stethoscope, mega: true, submenu: SERVICE_CATEGORIES },
    { title: 'Doctors', icon: Users, mega: false },
    { title: 'Blog', icon: FileText, mega: false },
    { title: 'Events', icon: Calendar, mega: false },
    { title: 'FAQ', icon: HelpCircle, mega: false },
  ];

  const handleNavClick = (sectionId: string) => {
    if (onBackToHome) {
      onBackToHome();
      setTimeout(() => {
        const el = document.getElementById(sectionId);
        if (el) {
          const offset = 85;
          const elementPosition = el.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.scrollY - offset;
          window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
        }
      }, 100);
    } else {
      scrollToSection(sectionId);
    }
  };

  const renderMobileMenu = () => (
    <div className={`fixed inset-0 z-[200] bg-white/95 dark:bg-[#0B0F19]/95 backdrop-blur-xl transition-transform duration-500 ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
      <div className="flex justify-between items-center p-6 border-b border-slate-100 dark:border-white/10">
        <Logo onClick={() => { handleNavClick('home'); setIsMobileMenuOpen(false); }} />
        <button onClick={() => setIsMobileMenuOpen(false)} className="p-2 text-slate-500 hover:text-amber-600 transition-colors">
          <X size={24} />
        </button>
      </div>
      <div className="p-6 flex flex-col space-y-4 overflow-y-auto h-[calc(100vh-180px)]">
        {menuItems.map((item, idx) => (
          <div key={idx}>
            {item.mega && item.submenu ? (
              <div>
                <button
                  onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === item.title ? null : item.title)}
                  className="flex justify-between items-center w-full text-lg font-bold text-slate-900 dark:text-white py-2"
                >
                  {item.title}
                  <ChevronDown size={16} className={`transition-transform ${activeMobileSubmenu === item.title ? 'rotate-180' : ''}`} />
                </button>
                <div className={`pl-4 space-y-4 overflow-hidden transition-all duration-300 ${activeMobileSubmenu === item.title ? 'max-h-[1000px] mt-2' : 'max-h-0'}`}>
                  {Object.entries(item.submenu).map(([cat, links], i) => (
                    <div key={i}>
                      <h5 className="text-xs font-black text-amber-600 uppercase tracking-widest mb-2">{cat}</h5>
                      <ul className="space-y-2 border-l-2 border-slate-100 dark:border-slate-800 pl-4">
                        {links.map((link, j) => (
                          <li key={j}>
                            <button
                              onClick={() => {
                                onServiceClick(link.name);
                                setIsMobileMenuOpen(false);
                              }}
                              className="text-sm text-slate-500 dark:text-slate-400 font-medium hover:text-amber-600 w-full text-left"
                            >
                              {link.name}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <button
                onClick={() => { handleNavClick(item.title.toLowerCase()); setIsMobileMenuOpen(false); }}
                className="text-lg font-bold text-slate-900 dark:text-white py-2 block text-left w-full hover:text-amber-600"
              >
                {item.title}
              </button>
            )}
          </div>
        ))}
      </div>
      <div className="absolute bottom-0 left-0 w-full p-6 border-t border-slate-100 dark:border-white/10 bg-slate-50/50 dark:bg-white/5">
        <GradientButton onClick={() => { handleNavClick('contact'); setIsMobileMenuOpen(false); }} className="w-full justify-center" icon={Calendar}>Book Appointment</GradientButton>
      </div>
    </div>
  );

  return (
    <header className="fixed top-0 w-full z-[100] transition-all duration-500">
      <div className={`relative z-[110] bg-[#020617] border-b border-white/5 transition-all duration-500 ${isScrolled ? 'max-h-0 opacity-0 transform -translate-y-full overflow-hidden' : 'max-h-10 opacity-100 overflow-visible'}`}>
        <div className="absolute inset-0 bg-gradient-to-r from-[#020617] via-[#0f172a] to-[#020617]"></div>
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(ellipse_at_top,rgba(56,189,248,0.15),transparent_70%)]"></div>
        <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden">
          <div className="absolute top-0 bottom-0 w-[150%] h-full bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 blur-xl animate-shimmer-natural left-[-150%]"></div>
          <div className="absolute top-0 bottom-0 w-[50%] h-full bg-gradient-to-r from-transparent via-white/40 to-transparent transform -skew-x-12 blur-lg animate-shimmer-natural delay-150 left-[-150%] opacity-80"></div>
        </div>

        <Container className="relative z-10 flex justify-between items-center h-10 text-[9px] font-bold text-slate-400 uppercase tracking-widest">
          <div className="hidden lg:flex flex-1 items-center justify-start space-x-4">
            <div className="flex items-center space-x-2 px-3 py-1 bg-white/5 rounded-full border border-white/5 hover:border-amber-500/30 transition-colors group cursor-pointer backdrop-blur-sm">
              <Mail size={12} className="text-amber-500 group-hover:text-amber-400 transition-colors" />
              <span className="tracking-wide font-medium normal-case text-slate-300 group-hover:text-white transition-colors">
                mtrust.urologyclinic@gmail.com (Free Tele Consultation)
              </span>
            </div>
            <div className="h-3 w-px bg-white/10"></div>
            <span className="text-slate-500 truncate">Center of Excellence in Urology & Men's Health</span>
          </div>
          <div className="lg:hidden flex-1 text-center truncate sm:block text-slate-500">Center of Excellence in Urology & Men's Health</div>
          <div className="flex-none flex justify-end items-center space-x-3 sm:space-x-6 text-left">
            <div className="flex items-center space-x-1.5 cursor-pointer hover:text-amber-500 transition-colors text-slate-400">
              <User size={14} />
            </div>

            <div className="flex items-center space-x-3 border-l border-white/10 pl-4 h-full">
              <ThemeSwitch isDark={isDark} setIsDark={setIsDark} />
              <LanguageDropdown lang={lang} setLang={setLang} />
            </div>

            <div className="flex items-center space-x-1.5 text-slate-400 font-medium pl-2 border-l border-white/10">
              <Clock size={12} className="text-amber-500" />
              <span className="text-[10px] font-mono tracking-widest text-slate-300">{mounted ? time : "00:00"}</span>
            </div>
          </div>
        </Container>
      </div>

      <nav className={`relative z-[100] transition-all duration-500 ${isScrolled ? 'bg-white/95 dark:bg-slate-950/95 shadow-xl border-b border-white/10' : 'bg-white/60 backdrop-blur-md border-b border-white/10'}`}>
        <Container className="flex items-center justify-between h-[60px] sm:h-auto">
          <Logo onClick={() => handleNavClick('home')} />
          <div className="hidden lg:flex items-center gap-1">
            {menuItems.map((item, idx) => {
              const sectionId = item.title.toLowerCase();
              const isActive = activeSection === sectionId;
              const IconComp = item.icon;
              return (
                <div key={idx} className="relative group/nav h-full">
                  <button
                    onClick={() => handleNavClick(sectionId)}
                    className={`
                      relative flex items-center space-x-2 px-4 py-5 text-[11px] font-black uppercase tracking-[0.15em] transition-all duration-300
                      ${isActive ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300 hover:text-amber-600'}
                    `}
                  >
                    <IconComp size={16} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover/nav:scale-110'}`} />
                    <span>{item.title}</span>
                    {item.mega && <ChevronDown size={12} className="transition-transform duration-300 group-hover/nav:rotate-180 opacity-70" />}
                    <span className={`absolute bottom-2 left-1/2 -translate-x-1/2 h-[2px] bg-amber-600 rounded-full transition-all duration-300 ease-out ${isActive ? 'w-[80%] opacity-100 shadow-[0_0_8px_rgba(245,158,11,0.6)]' : 'w-0 opacity-0 group-hover/nav:w-[40%] group-hover/nav:opacity-60'}`} />
                    <span className={`absolute inset-0 bg-amber-500/5 rounded-lg -z-10 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-0 group-hover/nav:opacity-50'}`} />
                  </button>
                  {item.mega && item.submenu && <MegaMenu submenu={item.submenu} onServiceClick={onServiceClick} />}
                </div>
              );
            })}
          </div>
          <div className="flex items-center space-x-4">
            <GradientButton onClick={() => handleNavClick('contact')} className="hidden sm:flex px-5 py-2 rounded-full text-[9px]" icon={Calendar}>Book Now</GradientButton>
            <button className="lg:hidden p-2 text-slate-700 dark:text-white hover:text-amber-600 transition-colors" onClick={() => setIsMobileMenuOpen(true)}>
              <Menu size={24} />
            </button>
          </div>
        </Container>
      </nav>
      {renderMobileMenu()}
    </header>
  );
};

// ==========================================
// 4. MAIN SECTIONS
// ==========================================

const HeroSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const timer = setInterval(() => setCurrent((prev) => (prev + 1) % HERO_SLIDES.length), 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="home" className="relative h-[90vh] md:h-[85vh] w-full overflow-hidden scroll-mt-20">
      <div className="flex flex-col md:flex-row h-full">
        <div className="w-full h-[45%] md:w-[65%] md:h-full relative overflow-hidden bg-slate-200 shrink-0">
          {HERO_SLIDES.map((slide, index) => (
            <div key={slide.id} className={`absolute inset-0 transition-all duration-[1.5s] ease-in-out transform ${index === current ? 'scale-100 opacity-100' : 'scale-110 opacity-0 pointer-events-none'}`}>
              <img src={slide.doctorImage} alt="" className="w-full h-full object-cover object-top md:object-center filter brightness-95" />
              <div className="absolute inset-0 bg-gradient-to-b md:bg-gradient-to-r from-transparent via-transparent to-slate-50 dark:to-[#050505] opacity-90" />
            </div>
          ))}
          <div className="absolute bottom-4 left-6 md:bottom-10 md:left-10 flex items-center space-x-2 md:space-x-4 z-30">
            {HERO_SLIDES.map((_, i) => (
              <button key={i} onClick={() => setCurrent(i)} className={`transition-all duration-300 h-1 md:h-1.5 rounded-full ${i === current ? 'w-8 md:w-12 bg-amber-500 shadow-lg' : 'w-4 md:w-5 bg-black/20 dark:bg-white/20'}`} />
            ))}
          </div>
        </div>
        <div className="w-full h-[55%] md:flex-1 md:h-full relative z-20 flex items-center text-left bg-gradient-to-br from-white/95 via-slate-50/95 to-indigo-50/40 dark:from-[#0B0F19]/95 dark:to-[#1a1a2e]/95 backdrop-blur-xl border-t md:border-t-0 md:border-l border-slate-100 dark:border-white/5 shadow-[-20px_0_40px_-10px_rgba(0,0,0,0.1)]">
          <div className="w-full px-6 md:px-12 lg:px-20 py-8 md:py-0 text-left">
            {HERO_SLIDES.map((slide, index) => (
              <div key={slide.id} className={`transition-all duration-1000 transform ${index === current ? 'translate-y-0 opacity-100 relative' : 'translate-y-10 opacity-0 pointer-events-none absolute top-0 left-0 w-full px-6 md:px-12 lg:px-20'}`}>
                <div className="inline-flex items-center px-3 py-1.5 md:px-4 md:py-2 mb-4 md:mb-6 text-[9px] md:text-[10px] font-black text-amber-600 uppercase tracking-[0.3em] md:tracking-[0.4em] bg-amber-50/50 dark:bg-white/10 rounded-xl border border-amber-600/10 backdrop-blur-md w-fit">
                  <Award size={12} className="mr-2" />{slide.promoTag}
                </div>
                <h1 className="text-2xl md:text-3xl lg:text-4xl font-black text-slate-900 dark:text-white mb-4 md:mb-6 leading-tight uppercase whitespace-pre-line text-left">
                  {slide.title}
                </h1>
                <p className="text-sm md:text-base text-slate-500 dark:text-slate-300 mb-8 md:mb-10 leading-relaxed font-medium italic opacity-80 text-left line-clamp-3 md:line-clamp-none">
                  "{slide.desc}"
                </p>
                <GradientButton variant="primary">{slide.btnText}</GradientButton>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const AboutSection: React.FC = () => (
  <section id="about" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
    <Container>
      <SectionTitle tag="Excellence in Care" title="M-Trust Urology Clinic" />
      <div className="grid lg:grid-cols-2 gap-12 items-center mb-10 text-left">
        <div className="space-y-4 text-left">
          <p className="text-lg md:text-xl text-slate-800 dark:text-white font-bold leading-tight uppercase tracking-tighter text-left">Center of Excellence in Urology & Men’s Health</p>
          <div className="space-y-3 text-slate-500 dark:text-slate-400 text-base leading-relaxed font-medium text-left">
            <p>M-Trust Urology Clinic is a leading specialized clinic providing comprehensive men's health services. We focus on treating conditions with modern innovation and 100% personalized care under international standards.</p>
            <p>Our team of expert urologists from leading medical institutions is committed to delivering the best treatment results to help you return to your life with confidence.</p>
            <p>We combine state-of-the-art diagnostic technology with a patient-first philosophy, ensuring that every consultation is conducted with the utmost privacy, professionalism, and understanding of your unique needs.</p>
          </div>
          <GradientButton variant="outline" className="px-8 py-3.5 rounded-xl text-[10px] text-left">Credential Experts</GradientButton>
        </div>
        <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white/50 dark:border-white/10">
          <img src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80" alt="" className="w-full aspect-video object-cover" />
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 text-left">
        {ABOUT_SPECIALTIES.map((item, index) => (
          <div key={index} className="group flex bg-gradient-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-all hover:shadow-xl hover:border-amber-600/30">
            <div className="w-32 sm:w-40 shrink-0 overflow-hidden text-left"><img src={item.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
            <div className="p-6 flex flex-col justify-center text-left">
              <div className="flex items-center space-x-2 mb-2 text-left"><item.Icon size={16} className="text-amber-600" /><h3 className="text-sm font-black text-slate-900 dark:text-white uppercase text-left">{item.title}</h3></div>
              <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium text-left">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const ServicesSection: React.FC<{ onSelectService: (name: string) => void }> = ({ onSelectService }) => {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', ...Object.keys(SERVICE_CATEGORIES)];
  const displayServices = useMemo(() => {
    if (activeTab === 'All') return Object.values(SERVICE_CATEGORIES).flat();
    return SERVICE_CATEGORIES[activeTab] || [];
  }, [activeTab]);

  return (
    <section id="services" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
      <Container>
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4 text-left">
          <SectionTitle tag="World-Class Care" title="Our Services" className="mb-0" />
          <div className="flex flex-wrap gap-2 text-left">
            {tabs.map((tab) => (
              <button key={tab} onClick={() => setActiveTab(tab)}
                className={`px-6 py-2.5 rounded-full text-[11px] font-black uppercase tracking-widest transition-all border ${activeTab === tab ? 'bg-slate-900 text-white border-slate-900 dark:bg-amber-600 dark:border-amber-600' : 'bg-white/50 backdrop-blur-sm text-slate-500 border-slate-200 hover:border-amber-600 dark:bg-white/5 dark:text-slate-300 dark:border-white/10 dark:hover:border-amber-500'}`}>{tab}</button>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 animate-fade-in text-left">
          {displayServices.map((service, index) => (
            <div
              key={index}
              onClick={() => onSelectService(service.name)}
              className="group flex bg-gradient-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-200/50 dark:border-white/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] transition-all hover:shadow-xl hover:border-amber-600/30 text-left cursor-pointer"
            >
              <div className="w-32 sm:w-40 shrink-0 overflow-hidden text-left"><img src={service.image} alt="" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" /></div>
              <div className="p-6 flex flex-col justify-center text-left">
                <div className="flex items-center space-x-2 mb-2 text-left"><service.Icon size={16} className="text-amber-600" /><h3 className="text-sm font-black text-slate-900 dark:text-white uppercase text-left">{service.name}</h3></div>
                <p className="text-slate-500 dark:text-slate-400 text-[15px] leading-relaxed font-medium text-left">{service.desc}</p>
                <button className="flex items-center space-x-1 text-xs font-black uppercase text-amber-600 group/btn mt-3 text-left"><span>Learn More</span><ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1 text-left" /></button>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
};

const CertificateMarquee: React.FC<{ certificates: string[] }> = ({ certificates }) => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  return (
    <>
      <div className="relative w-full overflow-hidden py-6 bg-gradient-to-r from-slate-50/80 to-indigo-50/20 dark:from-[#0B0F19] dark:to-[#1a1a2e] border-t border-b border-slate-200 dark:border-white/10">
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white dark:from-[#0B0F19] to-transparent z-10 pointer-events-none"></div>

        <div className={`flex w-max animate-marquee space-x-8 ${selectedImage ? 'paused' : ''}`}>
          {[...certificates, ...certificates, ...certificates].map((cert, index) => (
            <div
              key={index}
              onClick={() => setSelectedImage(cert)}
              className="w-[180px] h-[120px] bg-white p-2 rounded-lg shadow-sm border border-slate-200 flex items-center justify-center shrink-0 cursor-zoom-in hover:scale-105 transition-transform group relative"
            >
              <img src={cert} alt="certificate" className="max-w-full max-h-full object-contain pointer-events-none" />
              <div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                <ZoomIn className="text-slate-600 opacity-60" size={24} />
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedImage && (
        <div
          className="fixed inset-0 z-[1000] bg-slate-950/95 backdrop-blur-md flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative w-full h-full flex items-center justify-center" onClick={(e) => e.stopPropagation()}>
            <img
              src={selectedImage}
              alt="Certificate Full View"
              className="w-auto h-auto max-w-[95vw] max-h-[85vh] object-contain rounded-lg shadow-2xl animate-zoom-in"
            />
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-24 right-4 md:right-8 text-white/90 hover:text-white bg-slate-900/50 hover:bg-slate-900/80 rounded-full p-3 transition-all border border-white/20 backdrop-blur-sm shadow-lg z-[1010]"
            >
              <X size={32} />
            </button>
          </div>
        </div>
      )}
    </>
  );
};

const VideoCard: React.FC<{ video: { id: string, title: string } }> = ({ video }) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const thumbnailUrl = `https://img.youtube.com/vi/${video.id}/hqdefault.jpg`;

  return (
    <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-lg border border-slate-200 dark:border-white/10 group bg-slate-900">
      {!isPlaying ? (
        <button
          className="absolute inset-0 w-full h-full flex items-center justify-center group focus:outline-none"
          onClick={() => setIsPlaying(true)}
          aria-label={`Play video ${video.title}`}
        >
          <img
            src={thumbnailUrl}
            alt={video.title}
            className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:opacity-100 transition-opacity duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />

          <div className="relative z-10 w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center border border-white/50 shadow-2xl group-hover:scale-110 transition-transform duration-300">
            <div className="absolute inset-0 bg-amber-500 rounded-full animate-ping opacity-75" />
            <Play className="relative z-20 text-white fill-amber-600 ml-1" size={32} />
          </div>

          <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent text-left pointer-events-none">
            <h4 className="text-white text-sm font-bold truncate">{video.title}</h4>
          </div>
        </button>
      ) : (
        <iframe
          src={`https://www.youtube.com/embed/${video.id}?autoplay=1&rel=0&modestbranding=1&fs=1&playsinline=1`}
          title={video.title}
          className="w-full h-full"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  )
}

interface ServiceDetailProps {
  serviceName: string;
  onBack: () => void;
}

const ServiceDetail: React.FC<ServiceDetailProps> = ({ serviceName, onBack }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  const serviceData = SERVICE_DETAILS_DATA[serviceName];
  // Check if we have specific data, otherwise use generic fallback
  const service = serviceData || SERVICE_DETAILS_DATA['Generic'];

  // Fix: Ensure the title matches the selected service even if using fallback data
  const displayTitle = serviceData ? service.title : serviceName;

  // Update the layout check to include new services
  const isPremiumLayout = [
    'Focus Shockwave',
    'PRP for ED',
    'Stem Cell for ED',
    'Penile Implant',
    'Dorsal Neurectomy',
    'Testosterone Replacement Therapy',
    'ReZum',
    'UroLift',
    'Sexually Transmitted Infection',
    'Stone Disease',
    'Urinary Symptoms',
    'Circumcision',
    'Penile Enlargement',
    'Penile Lengthening',
    'Excision of penile Paraffinoma',
    'Vasectomy',
    'Flexible Cystoscopy',
    'Ultrasound',
    'Lab Testing'
  ].includes(serviceName);

  if (isPremiumLayout) {
    return (
      <div className="animate-slide-in-up">
        <div className={`relative min-h-[70vh] h-auto flex items-center overflow-hidden border-b border-white/5 py-24 md:py-0`}>
          <div className="absolute inset-0 z-0 bg-slate-900">
            <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-50 filter blur-[2px]" />
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 dark:opacity-40"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40 dark:from-[#050505] dark:via-[#050505]/90 dark:to-transparent" />

            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-amber-500/50 to-transparent animate-pulse-slow"></div>
              <div className="absolute bottom-[20%] left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/50 to-transparent animate-pulse-slow delay-700"></div>
            </div>
          </div>

          <Container className="relative z-10 text-white w-full">
            <button onClick={onBack} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-amber-500 mb-8 transition-colors group backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full w-fit border border-white/10 hover:border-amber-500/50">
              <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
              <span>Back to Services</span>
            </button>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
              <div className="md:col-span-8">
                <div className="inline-flex items-center space-x-2 mb-4">
                  <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400">Advanced Protocol Loaded</span>
                </div>
                <h1 className="text-3xl md:text-5xl lg:text-6xl font-black mb-6 leading-[0.9] uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
                  {displayTitle}
                </h1>
                <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-amber-500 pl-6 mb-8">
                  {service.tagline}
                </p>
                <div className="flex gap-4 mt-10">
                  <GradientButton icon={Calendar} className="px-8 border border-white/10">Book Session</GradientButton>
                  {service.video && (
                    <button className="px-6 py-3 rounded-xl border border-white/20 hover:bg-white/10 transition-all text-xs font-bold uppercase tracking-widest flex items-center gap-2">
                      <PlayCircle size={18} /> Watch Demo
                    </button>
                  )}
                </div>
              </div>

              {service.stats && (
                <div className="md:col-span-4 grid grid-cols-2 gap-3 mt-8 md:mt-0">
                  {service.stats.map((stat, idx) => (
                    <div key={idx} className="bg-black/30 backdrop-blur-md border border-white/10 p-4 rounded-xl hover:border-amber-500/50 transition-colors group">
                      <stat.icon className="text-amber-500 mb-2 group-hover:scale-110 transition-transform" size={20} />
                      <div className="text-2xl font-black text-white leading-none mb-1">{stat.value}</div>
                      <div className="text-[10px] uppercase tracking-wider text-slate-400 font-bold">{stat.label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </Container>
        </div>

        <div className="bg-slate-50 dark:bg-[#080a10] py-16 relative">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
              <div>
                <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center gap-3">
                  <Activity className="text-amber-600" size={28} /> Clinical Mechanism
                </h3>
                <div className="space-y-4 text-slate-600 dark:text-slate-400 text-base leading-loose font-medium text-justify">
                  <p>
                    {service.description}
                  </p>
                </div>
              </div>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/20 group h-80">
                <img
                  src="https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?w=800&q=80"
                  alt="Technology in use"
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <p className="text-white font-bold uppercase tracking-wider text-xs">Advanced Medical Technology</p>
                </div>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 mb-16">
              {service.comparison && (
                <div className="bg-slate-900 dark:bg-black rounded-3xl border border-white/10 overflow-hidden h-full flex flex-col">
                  <div className="p-6 border-b border-white/10 bg-white/5 flex justify-between items-center">
                    <h3 className="text-white font-black uppercase text-sm flex items-center gap-2">
                      <BarChart3 className="text-amber-500" /> {service.comparison.title}
                    </h3>
                    <span className="text-[10px] bg-amber-500/20 text-amber-400 px-2 py-1 rounded border border-amber-500/30 uppercase tracking-widest">{service.comparison.subtitle}</span>
                  </div>
                  <div className="p-2 flex-1">
                    <div className="grid grid-cols-12 text-[9px] uppercase tracking-widest text-slate-500 px-4 py-3 font-bold">
                      <div className="col-span-4">Metric</div>
                      <div className="col-span-4 text-center text-amber-500">{service.comparison.headers?.[0] || "Li-ESWT (Focus)"}</div>
                      <div className="col-span-4 text-center">{service.comparison.headers?.[1] || "Radial Wave"}</div>
                    </div>
                    <div className="space-y-1">
                      {service.comparison.items.map((item, idx) => (
                        <div key={idx} className="grid grid-cols-12 px-4 py-4 rounded-xl bg-white/5 hover:bg-white/10 transition-colors items-center border border-transparent hover:border-white/5">
                          <div className="col-span-4 flex items-center gap-2 text-white font-bold text-xs">
                            <item.icon size={14} className="text-slate-400" /> {item.feature}
                          </div>
                          <div className="col-span-4 text-center">
                            <span className="inline-block px-3 py-1 rounded bg-amber-500 text-white text-[10px] font-bold shadow-lg shadow-amber-500/20 w-full md:w-auto">
                              {item.focus}
                            </span>
                          </div>
                          <div className="col-span-4 text-center text-[10px] text-slate-400 font-medium">
                            {item.radial}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {service.timeline && (
                <div className="bg-white dark:bg-[#12141c] p-8 rounded-3xl border border-slate-200 dark:border-white/5 h-full flex flex-col">
                  <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-8 flex items-center gap-2">
                    <TrendingUp className="text-amber-600" /> Treatment Timeline
                  </h3>
                  <div className="relative pl-8 border-l-2 border-slate-100 dark:border-slate-800 space-y-10 flex-1">
                    {service.timeline.steps.map((step, idx) => (
                      <div key={idx} className="relative">
                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-slate-900 dark:bg-white border-4 border-white dark:border-slate-900 shadow-xl flex items-center justify-center text-[10px] font-bold z-10">
                          {idx + 1}
                        </div>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-2">
                          <h4 className="text-lg font-bold text-slate-900 dark:text-white">{step.title}</h4>
                          <span className="text-[10px] font-black uppercase tracking-widest text-amber-600 bg-amber-50 dark:bg-amber-900/20 px-2 py-1 rounded">{step.time}</span>
                        </div>
                        <p className="text-sm text-slate-500 dark:text-slate-400 leading-relaxed">{step.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="grid lg:grid-cols-12 gap-8">
              <div className="lg:col-span-7 grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#12141c] p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-amber-500/40 transition-all hover:shadow-lg group flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <benefit.icon size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{benefit.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.desc}</p>
                    </div>
                    <div className="mt-4 w-8 h-1 bg-slate-100 dark:bg-slate-800 group-hover:bg-amber-500 transition-all rounded-full"></div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-5">
                {service.candidates && (
                  <div className="bg-slate-900 dark:bg-black text-white rounded-3xl p-8 border border-white/10 relative overflow-hidden h-full">
                    <div className="absolute top-4 right-4 text-amber-500/20"><Target size={80} /></div>
                    <h3 className="text-lg font-black uppercase mb-6 relative z-10 flex items-center gap-2"><Users2 className="text-amber-500" /> Ideal Candidates</h3>
                    <div className="space-y-4 relative z-10">
                      {service.candidates.map((item, idx) => (
                        <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                          <CheckSquare size={16} className="text-amber-500 mt-1 shrink-0" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

          </Container>
        </div>

        <div className="py-20 bg-white dark:bg-[#0B0F19] border-t border-slate-100 dark:border-white/5">
          <Container>
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-black text-center text-slate-900 dark:text-white uppercase mb-10">Common Questions</h3>
              <div className="grid gap-4 mb-16">
                {service.faq && service.faq.length > 0 ? (
                  service.faq.map((item, idx) => (
                    <div key={idx} className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                      <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                        <HelpCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                        {item.q}
                      </h5>
                      <p className="text-slate-500 dark:text-slate-400 text-sm ml-8">{item.a}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center text-slate-400">Contact us for more details.</p>
                )}
              </div>

              <div className="bg-slate-900 rounded-[2.5rem] p-10 text-center relative overflow-hidden shadow-2xl border border-white/10 group">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_50%)] animate-pulse-slow"></div>
                <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.03)_50%,transparent_55%)] bg-[length:200%_200%] animate-[shimmer_3s_infinite]"></div>

                <div className="relative z-10">
                  <h2 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">System Ready to Start</h2>
                  <p className="text-slate-400 mb-8 max-w-xl mx-auto font-mono text-sm">Initiate your consultation protocol with our specialists to determine eligibility for {service.title}.</p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <GradientButton className="px-10 py-4 text-xs shadow-amber-500/20 shadow-xl" icon={Calendar}>Confirm Appointment</GradientButton>
                    <button className="px-10 py-4 rounded-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2">
                      <MessageCircle size={16} /> Live Support
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </div>
    );
  }

  return (
    <div className="animate-slide-in-up">
      <div className={`relative h-[70vh] min-h-[500px] flex items-center overflow-hidden border-b border-white/5`}>
        <div className="absolute inset-0 z-0 bg-slate-900">
          <img src={service.heroImage} alt={service.title} className="w-full h-full object-cover opacity-50 filter blur-[2px]" />
          <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.2)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.2)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 dark:opacity-40"></div>
          <div className="absolute inset-0 bg-gradient-to-r from-slate-950 via-slate-900/80 to-slate-900/40 dark:from-[#050505] dark:via-[#050505]/90 dark:to-transparent" />
        </div>

        <Container className="relative z-10 text-white w-full">
          <button onClick={onBack} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-300 hover:text-amber-500 mb-8 transition-colors group backdrop-blur-sm bg-black/20 px-4 py-2 rounded-full w-fit border border-white/10 hover:border-amber-500/50">
            <ChevronLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            <span>Back to Services</span>
          </button>

          <div className="grid md:grid-cols-12 gap-12 items-end">
            <div className="md:col-span-8">
              <div className="inline-flex items-center space-x-2 mb-4">
                <span className="w-2 h-2 bg-amber-500 rounded-full animate-pulse"></span>
                <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-amber-400">Advanced Protocol Loaded</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black mb-6 leading-[0.9] uppercase tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 drop-shadow-2xl">
                {displayTitle}
              </h1>
              <p className="text-lg md:text-2xl text-slate-300 font-light leading-relaxed max-w-2xl border-l-2 border-amber-500 pl-6 mb-8">
                {service.tagline}
              </p>
              <div className="flex gap-4">
                <GradientButton icon={Calendar} className="px-8 border border-white/10">Book Session</GradientButton>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-slate-50 dark:bg-[#080a10] py-16 relative">
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none"></div>

        <Container>
          <div className="grid lg:grid-cols-12 gap-8">
            <div className="lg:col-span-4 space-y-8">
              <div className="bg-white dark:bg-[#12141c] rounded-3xl p-8 border border-slate-200 dark:border-white/5 shadow-xl relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-500 to-transparent"></div>
                <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center gap-2">
                  <Activity className="text-amber-600" /> Executive Summary
                </h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-loose text-justify font-medium">
                  {service.description}
                </p>
              </div>

              {service.candidates && (
                <div className="bg-slate-900 dark:bg-black text-white rounded-3xl p-8 border border-white/10 relative overflow-hidden">
                  <div className="absolute top-4 right-4 text-amber-500/20"><Target size={80} /></div>
                  <h3 className="text-lg font-black uppercase mb-6 relative z-10 flex items-center gap-2"><Users2 className="text-amber-500" /> Ideal Candidates</h3>
                  <div className="space-y-4 relative z-10">
                    {service.candidates.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-3 text-sm text-slate-300">
                        <CheckSquare size={16} className="text-amber-500 mt-1 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <div className="lg:col-span-8 space-y-8">

              <div className="grid sm:grid-cols-2 gap-4">
                {service.benefits.map((benefit, idx) => (
                  <div key={idx} className="bg-white dark:bg-[#12141c] p-6 rounded-2xl border border-slate-200 dark:border-white/5 hover:border-amber-500/40 transition-all hover:shadow-lg group flex flex-col justify-between h-full">
                    <div>
                      <div className="w-10 h-10 rounded-lg bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600 mb-4 group-hover:bg-amber-600 group-hover:text-white transition-colors">
                        <benefit.icon size={20} />
                      </div>
                      <h4 className="font-bold text-slate-900 dark:text-white text-base mb-2">{benefit.title}</h4>
                      <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">{benefit.desc}</p>
                    </div>
                    <div className="mt-4 w-8 h-1 bg-slate-100 dark:bg-slate-800 group-hover:bg-amber-500 transition-all rounded-full"></div>
                  </div>
                ))}
              </div>

              <div className="rounded-[2rem] overflow-hidden border border-slate-200 dark:border-white/10 shadow-2xl bg-black relative group">
                {service.video ? (
                  <VideoCard video={service.video} />
                ) : (
                  <div className="aspect-video flex items-center justify-center text-slate-500 bg-slate-900">
                    <div className="text-center">
                      <ZapOff size={48} className="mx-auto mb-2 opacity-50" />
                      <p className="text-xs uppercase tracking-widest">Visual Feed Offline</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-20 bg-white dark:bg-[#0B0F19] border-t border-slate-100 dark:border-white/5">
        <Container>
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl font-black text-center text-slate-900 dark:text-white uppercase mb-10">Common Questions</h3>
            <div className="grid gap-4 mb-16">
              {service.faq && service.faq.length > 0 ? (
                service.faq.map((item, idx) => (
                  <div key={idx} className="bg-slate-50 dark:bg-white/5 rounded-2xl p-6 border border-slate-100 dark:border-white/5">
                    <h5 className="font-bold text-slate-900 dark:text-white mb-2 flex items-start gap-3">
                      <HelpCircle className="text-amber-500 shrink-0 mt-0.5" size={18} />
                      {item.q}
                    </h5>
                    <p className="text-slate-500 dark:text-slate-400 text-sm ml-8">{item.a}</p>
                  </div>
                ))
              ) : (
                <p className="text-center text-slate-400">Contact us for more details.</p>
              )}
            </div>

            <div className="bg-slate-900 rounded-[2.5rem] p-10 text-center relative overflow-hidden shadow-2xl border border-white/10 group">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(245,158,11,0.15),transparent_50%)] animate-pulse-slow"></div>
              <div className="absolute top-0 right-0 w-full h-full bg-[linear-gradient(45deg,transparent_45%,rgba(255,255,255,0.03)_50%,transparent_55%)] bg-[length:200%_200%] animate-[shimmer_3s_infinite]"></div>

              <div className="relative z-10">
                <h2 className="text-3xl font-black text-white uppercase mb-4 tracking-tight">System Ready to Start</h2>
                <p className="text-slate-400 mb-8 max-w-xl mx-auto font-mono text-sm">Initiate your consultation protocol with our specialists to determine eligibility for {service.title}.</p>
                <div className="flex flex-wrap justify-center gap-4">
                  <GradientButton className="px-10 py-4 text-xs shadow-amber-500/20 shadow-xl" icon={Calendar}>Confirm Appointment</GradientButton>
                  <button className="px-10 py-4 rounded-xl border border-white/20 text-white text-[10px] font-black uppercase tracking-widest hover:bg-white/10 transition-colors flex items-center gap-2">
                    <MessageCircle size={16} /> Live Support
                  </button>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
};

const DrProfile: React.FC<DrProfileProps> = ({ doctor, onBack }) => {
  const [activeTab, setActiveTab] = useState('biography');

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, []);

  return (
    <div className="animate-slide-in-up">
      <div className="relative bg-gradient-to-r from-slate-50/95 via-indigo-50/20 to-white/90 dark:from-[#0f1115]/95 dark:to-[#1a1a2e]/90 backdrop-blur-md pt-4 pb-10 border-b border-slate-200 dark:border-white/5">
        <Container>
          <button onClick={onBack} className="flex items-center space-x-2 text-xs font-bold uppercase tracking-widest text-slate-500 hover:text-amber-600 mb-6 transition-colors">
            <ChevronLeft size={16} /> <span>Back to Specialists</span>
          </button>

          <div className="flex flex-col md:flex-row gap-8 lg:gap-12 items-start">
            <div className="w-full md:w-[30%] lg:w-[25%] relative shrink-0">
              <div className="aspect-[3/4] rounded-[2rem] overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl relative z-10">
                <img src={doctor.image} alt={doctor.name} className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg z-20 border-4 border-slate-50 dark:border-[#0f1115]">
                <div className="text-center leading-none">
                  <span className="block text-xl font-black">15+</span>
                  <span className="block text-[6px] uppercase font-bold tracking-widest mt-0.5">Years Exp.</span>
                </div>
              </div>
            </div>

            <div className="flex-1 pt-2">
              <div className="inline-block px-3 py-1 bg-amber-100 dark:bg-amber-900/30 text-amber-600 rounded-lg text-[9px] font-black uppercase tracking-widest mb-3">
                {doctor.expert}
              </div>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-black text-slate-900 dark:text-white uppercase mb-2 leading-tight">
                {doctor.name}
              </h1>
              <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 font-medium italic mb-5">
                {doctor.role}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {doctor.specialties?.map((spec, i) => (
                  <span key={i} className="px-3 py-1 border border-slate-200 dark:border-slate-700 rounded-full text-[10px] uppercase font-bold text-slate-600 dark:text-slate-300 bg-white dark:bg-white/5">
                    {spec}
                  </span>
                ))}
              </div>

              <div className="flex flex-wrap gap-4">
                <GradientButton icon={Calendar} className="py-3 px-8">Book Appointment</GradientButton>
                <button className="flex items-center space-x-2 px-6 py-3 border border-slate-300 dark:border-slate-700 rounded-xl text-[10px] font-black uppercase hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors dark:text-white">
                  <Youtube size={16} className="text-red-600" /> <span>Watch Interviews</span>
                </button>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="py-8 lg:py-12">
        <Container>
          <div className="flex space-x-6 border-b border-slate-200 dark:border-slate-800 mb-8 overflow-x-auto no-scrollbar">
            {['biography', 'qualifications', 'awards', 'media'].map(tab => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`pb-3 text-xs font-black uppercase tracking-[0.15em] transition-all border-b-2 whitespace-nowrap px-2 ${activeTab === tab ? 'text-amber-600 border-amber-600' : 'text-slate-400 border-transparent hover:text-slate-600'}`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-8">
              {activeTab === 'biography' && (
                <div className="space-y-6 animate-fade-in">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase flex items-center gap-2">
                    <BookOpen className="text-amber-600" size={20} /> Professional Profile
                  </h3>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base font-medium text-justify">
                    {doctor.bio}
                  </p>
                  <div className="grid md:grid-cols-2 gap-4 mt-4">
                    <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-amber-500/30 transition-colors">
                      <h5 className="font-bold uppercase text-xs mb-2 text-slate-900 dark:text-white flex items-center gap-2"><Target size={14} className="text-amber-500" /> Specialized Focus</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">Advanced treatments for BPH using Rezum (Water Vapor Therapy) and UroLift implants, minimizing sexual side effects.</p>
                    </div>
                    <div className="p-5 bg-slate-50 dark:bg-white/5 rounded-2xl border border-slate-100 dark:border-white/5 hover:border-amber-500/30 transition-colors">
                      <h5 className="font-bold uppercase text-xs mb-2 text-slate-900 dark:text-white flex items-center gap-2"><Trophy size={14} className="text-amber-500" /> Surgical Excellence</h5>
                      <p className="text-xs text-slate-500 leading-relaxed">Over 1,000+ successful endourological procedures and penile prosthesis implantations with high patient satisfaction rates.</p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'qualifications' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <GraduationCap className="text-amber-600" size={24} /> Education & Board Certificates
                  </h3>

                  <div className="relative pl-4 md:pl-0">
                    <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500/20 via-amber-500/50 to-amber-500/20 md:left-1/2 md:-ml-px"></div>

                    <div className="space-y-8">
                      {doctor.qualifications?.map((qual, idx) => (
                        <div key={idx} className={`relative flex items-center md:justify-between ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>

                          <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full border-4 border-white dark:border-slate-950 bg-amber-500 shadow-md md:left-1/2 z-10"></div>

                          <div className="w-full md:w-[45%] ml-16 md:ml-0">
                            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 hover:shadow-md transition-shadow group">
                              <div className="flex items-center gap-3 mb-2">
                                <span className="inline-block px-2.5 py-1 bg-amber-50 dark:bg-amber-900/20 rounded-lg text-[10px] font-black text-amber-600 dark:text-amber-500 shadow-sm border border-amber-100 dark:border-amber-900/30">
                                  {qual.year}
                                </span>
                                <div className="h-px flex-1 bg-slate-100 dark:bg-slate-800 group-hover:bg-amber-100 dark:group-hover:bg-amber-900/30 transition-colors"></div>
                              </div>
                              <h4 className="font-bold text-slate-900 dark:text-white text-sm mb-1 leading-tight group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                                {qual.title}
                              </h4>
                              <div className="flex items-start gap-1.5 mt-2">
                                <MapPin size={12} className="text-slate-400 mt-0.5 shrink-0" />
                                <p className="text-xs text-slate-500 dark:text-slate-400 font-medium leading-relaxed">
                                  {qual.place}
                                </p>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'awards' && (
                <div className="space-y-8 animate-fade-in">
                  <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase flex items-center gap-2 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <Medal className="text-amber-600" size={24} /> Honor Certificates & Awards
                  </h3>

                  <div className="grid gap-4">
                    {doctor.awards?.map((award, idx) => (
                      <div key={idx} className="group relative overflow-hidden bg-gradient-to-r from-white to-slate-50 dark:from-slate-900 dark:to-slate-800/50 p-5 rounded-2xl border border-slate-200 dark:border-slate-800 hover:border-amber-500/30 transition-all hover:shadow-lg">
                        <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-110 duration-500">
                          <Award size={64} />
                        </div>

                        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-4">
                          <div className="shrink-0 flex flex-col items-center justify-center w-16 h-16 rounded-xl bg-amber-100/50 dark:bg-amber-900/20 border border-amber-200 dark:border-amber-900/30 text-amber-700 dark:text-amber-500">
                            <span className="text-xs font-bold uppercase tracking-wider">Year</span>
                            <span className="text-xl font-black leading-none">{award.year}</span>
                          </div>

                          <div className="flex-1">
                            <h4 className="text-base font-bold text-slate-900 dark:text-white mb-1 group-hover:text-amber-700 dark:group-hover:text-amber-500 transition-colors">
                              {award.title}
                            </h4>
                            <div className="flex items-center gap-2 text-xs font-medium text-slate-500 dark:text-slate-400">
                              <div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
                              <span>{award.issuer || 'Honorary Award'}</span>
                            </div>
                          </div>

                          <div className="shrink-0">
                            <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-white dark:bg-slate-800 text-slate-400 group-hover:text-amber-600 group-hover:scale-110 transition-all shadow-sm">
                              <CheckCircle2 size={16} />
                            </span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {activeTab === 'media' && (
                <div className="space-y-8 animate-fade-in">
                  {/* Video */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase flex items-center gap-2 mb-4">
                      <PlayCircle className="text-amber-600" size={20} /> Featured Interview
                    </h3>
                    {(doctor.videos && doctor.videos.length > 0) ? (
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {doctor.videos.map((video, idx) => (
                          <VideoCard key={idx} video={video} />
                        ))}
                      </div>
                    ) : doctor.videoUrl ? (
                      <div className="w-full aspect-video rounded-2xl overflow-hidden shadow-xl border border-slate-200 dark:border-white/10 group relative">
                        <iframe
                          width="100%"
                          height="100%"
                          src={doctor.videoUrl}
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowFullScreen
                          className="relative z-10"
                        ></iframe>
                      </div>
                    ) : (
                      <div className="p-8 text-center bg-slate-50 rounded-xl text-slate-400 text-xs">No video content available.</div>
                    )}
                  </div>

                  {/* Activity Gallery */}
                  <div>
                    <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase flex items-center gap-2 mb-4">
                      <ImageIcon className="text-amber-600" size={20} /> Activity Gallery
                    </h3>
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                      {doctor.activities?.map((img, idx) => (
                        <div key={idx} className="aspect-square rounded-xl overflow-hidden group cursor-pointer relative shadow-sm hover:shadow-md transition-all">
                          <img src={img} alt="activity" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Right Sidebar - Sticky */}
            <div className="lg:col-span-4">
              <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 sticky top-24 shadow-sm">
                <div className="flex items-center gap-3 mb-4 border-b border-slate-100 dark:border-white/10 pb-4">
                  <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center text-amber-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h4 className="font-black text-slate-900 dark:text-white uppercase text-sm leading-none">Clinic Schedule</h4>
                    <span className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Available Times</span>
                  </div>
                </div>

                <div className="space-y-3 mb-6">
                  {['Monday', 'Wednesday', 'Saturday'].map((day) => (
                    <div key={day} className="flex justify-between text-xs bg-slate-50 dark:bg-white/5 p-3 rounded-lg">
                      <span className="text-slate-500 font-medium">{day}</span>
                      <span className="font-bold text-slate-900 dark:text-white">
                        {day === 'Saturday' ? '09:00 - 17:00' : '10:00 - 19:00'}
                      </span>
                    </div>
                  ))}
                </div>
                <GradientButton className="w-full justify-center py-3" icon={Calendar}>Make Appointment</GradientButton>
                <div className="mt-4 flex items-center justify-center gap-2 text-[10px] text-slate-400">
                  <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></div>
                  Average response time: 15 mins
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>

      <div className="bg-gradient-to-r from-slate-50/90 to-indigo-50/20 dark:from-[#0B0F19] dark:to-[#1a1a2e] py-8 border-t border-slate-200 dark:border-white/5">
        <Container>
          <h4 className="text-center font-black text-slate-400 text-[10px] uppercase tracking-[0.3em] mb-6">Professional Certifications & Awards</h4>
        </Container>
        {doctor.certificates && doctor.certificates.length > 0 && (
          <CertificateMarquee certificates={doctor.certificates} />
        )}
      </div>
    </div>
  );
};

const DoctorsList: React.FC<{ onSelectDoctor: (doc: DoctorData) => void }> = ({ onSelectDoctor }) => (
  <section id="doctors" className="pt-8 pb-16 bg-gradient-to-b from-slate-50/90 to-indigo-50/20 dark:from-[#0f1115]/90 dark:to-[#1a1a2e]/80 backdrop-blur-sm scroll-mt-24 text-center text-left">
    <Container>
      <SectionTitle tag="Expert Surgeons" title="Our Specialists" className="items-center" />
      <div className="grid md:grid-cols-3 gap-10 text-left">
        {DOCTORS.map(doc => (
          <div key={doc.id} onClick={() => onSelectDoctor(doc)} className="group text-center text-left cursor-pointer">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2.5rem] border-2 border-white/50 dark:border-white/10 shadow-xl dark:shadow-[0_0_20px_rgba(255,255,255,0.02)] mb-4 text-left">
              <img src={doc.image} alt="" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <span className="px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-white text-xs font-bold uppercase border border-white/30">View Profile</span>
              </div>
            </div>
            <p className="text-[9px] font-black text-amber-600 uppercase tracking-widest mb-1 text-center">{doc.expert}</p>
            <h3 className="text-lg font-black text-slate-900 dark:text-white uppercase leading-tight text-center">{doc.name}</h3>
            <p className="text-slate-500 text-xs italic text-center">{doc.role}</p>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const BlogSection: React.FC = () => (
  <section id="blog" className="pt-8 pb-16 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
    <Container>
      <div className="flex justify-between items-end mb-8 text-left">
        <SectionTitle tag="Articles & Knowledge" title="Men's Health Blog" className="mb-0" />
        <GradientButton variant="outline" className="px-8 py-3.5 rounded-xl text-[10px]">Read More</GradientButton>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
        {BLOG_POSTS.map(post => (
          <div key={post.id} className="group flex flex-col sm:flex-row gap-6 items-center bg-gradient-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 backdrop-blur-sm p-4 rounded-[2rem] border border-slate-200/50 dark:border-white/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] hover:border-amber-600/20 transition-all shadow-sm hover:shadow-xl text-left">
            <div className="w-full sm:w-44 lg:w-48 aspect-square overflow-hidden rounded-[1.5rem] shadow-md relative shrink-0">
              <img src={post.image} alt={post.title} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute top-3 left-3 bg-amber-600 text-white px-2 py-1 rounded-md text-[8px] font-black uppercase shadow-lg">{post.category}</div>
            </div>
            <div className="text-left flex-1 flex flex-col justify-between py-1 text-left">
              <div>
                <div className="flex items-center text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2"><Clock size={12} className="mr-1" /> {post.date}</div>
                <h3 className="text-sm font-black text-slate-900 dark:text-white uppercase leading-tight group-hover:text-amber-600 transition-colors mb-2 line-clamp-3 text-left">{post.title}</h3>
                <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed line-clamp-2 mb-3 font-medium text-left">{post.excerpt}</p>
              </div>
              <button className="flex items-center space-x-1 text-xs font-black uppercase text-amber-600 group/btn text-left">
                <span>Explore Article</span><ChevronRight size={14} className="transition-transform group-hover/btn:translate-x-1" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </Container>
  </section>
);

const EventsSection: React.FC = () => (
  <section id="events" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left relative overflow-hidden bg-gradient-to-b from-white/90 to-indigo-50/30 dark:from-[#0B0F19]/90 dark:to-[#1a1a2e]/80 backdrop-blur-md">
    <Container>
      <div className="flex justify-between items-end mb-10">
        <SectionTitle tag="Upcoming Seminars" title="Events & Workshops" className="mb-0" />
        <GradientButton variant="outline" className="hidden sm:flex px-8 py-3.5 rounded-xl text-[10px]">View All Events</GradientButton>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div className="relative group overflow-hidden rounded-[2.5rem] shadow-xl aspect-[16/9] lg:aspect-auto lg:h-full border border-white/20 dark:border-white/10 dark:shadow-[0_0_25px_rgba(255,255,255,0.03)]">
          <img src={EVENTS_DATA[0].image} alt={EVENTS_DATA[0].title} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
          <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent p-8 md:p-10 flex flex-col justify-end">
            <div className="absolute top-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-3 text-center min-w-[70px]">
              <span className="block text-2xl font-black text-white leading-none">{EVENTS_DATA[0].day}</span>
              <span className="block text-[9px] font-bold text-amber-500 uppercase tracking-widest mt-1">{EVENTS_DATA[0].month}</span>
            </div>
            <span className="inline-block px-3 py-1 bg-amber-600 text-white text-[9px] font-black uppercase tracking-widest rounded-lg mb-3 w-fit">{EVENTS_DATA[0].category}</span>
            <h3 className="text-2xl md:text-3xl font-black text-white uppercase leading-tight mb-2">{EVENTS_DATA[0].title}</h3>
            <p className="text-slate-300 text-base font-medium mb-6 line-clamp-2">{EVENTS_DATA[0].description}</p>
            <div className="flex flex-wrap gap-4 text-[10px] font-bold text-slate-300 uppercase tracking-wide mb-6">
              <div className="flex items-center"><MapPin size={12} className="mr-1.5 text-amber-500" /> {EVENTS_DATA[0].location}</div>
              <div className="flex items-center"><Clock size={12} className="mr-1.5 text-amber-500" /> {EVENTS_DATA[0].time}</div>
            </div>
            <GradientButton variant="primary" className="w-fit px-8">Register Now</GradientButton>
          </div>
        </div>

        <div className="flex flex-col gap-5">
          {EVENTS_DATA.slice(1).map((event) => (
            <div key={event.id} className="flex flex-col sm:flex-row bg-gradient-to-br from-white/80 via-white/50 to-indigo-50/20 dark:bg-none dark:bg-slate-900 backdrop-blur-sm border border-slate-200/50 dark:border-white/10 dark:shadow-[0_0_15px_rgba(255,255,255,0.02)] rounded-[2rem] p-4 gap-6 group hover:border-amber-500/30 hover:shadow-lg transition-all">
              <div className="relative w-full sm:w-40 aspect-[4/3] sm:aspect-square rounded-2xl overflow-hidden shrink-0">
                <img src={event.image} alt={event.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
                <div className="absolute top-2 left-2 bg-slate-900/80 backdrop-blur-sm rounded-lg p-2 text-center min-w-[50px]">
                  <span className="block text-lg font-black text-white leading-none">{event.day}</span>
                  <span className="block text-[8px] font-bold text-amber-500 uppercase">{event.month}</span>
                </div>
              </div>
              <div className="flex flex-col justify-center flex-1 pr-2">
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[8px] font-black text-amber-600 uppercase tracking-widest border border-amber-600/20 px-2 py-0.5 rounded-md">{event.category}</span>
                </div>
                <h4 className="text-lg font-black text-slate-900 dark:text-white uppercase leading-none mb-1 group-hover:text-amber-600 transition-colors">{event.title}</h4>
                <p className="text-xs text-slate-500 font-bold uppercase tracking-wide mb-3">{event.subtitle}</p>

                <div className="space-y-1.5 mb-4">
                  <div className="flex items-center text-[10px] font-medium text-slate-400">
                    <MapPin size={12} className="mr-2 text-slate-300" /> {event.location}
                  </div>
                  <div className="flex items-center text-[10px] font-medium text-slate-400">
                    <Clock size={12} className="mr-2 text-slate-300" /> {event.time}
                  </div>
                </div>
                <button className="flex items-center text-xs font-black text-slate-900 dark:text-white uppercase group/btn w-fit hover:text-amber-600 transition-colors">
                  <span className="mr-2">View Details</span>
                  <div className="w-5 h-5 rounded-full bg-slate-100 dark:bg-slate-800 flex items-center justify-center group-hover/btn:bg-amber-600 group-hover/btn:text-white transition-colors">
                    <ArrowRight size={10} />
                  </div>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Container>
  </section>
);

const FaqSection: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const toggleFaq = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left">
      <Container>
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4">
            <SectionTitle tag="Common Questions" title="Frequently Asked Questions" />
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
              Find answers to the most common questions about our services, procedures, and patient care policies.
            </p>
            <div className="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-amber-500 flex items-center justify-center text-white">
                  <MessageCircle size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Still have questions?</h4>
                </div>
              </div>
              <p className="text-slate-500 dark:text-slate-400 text-xs mb-4">Can't find the answer you're looking for? Please chat to our friendly team.</p>
              <GradientButton variant="primary" className="w-full text-[9px] py-2.5">Chat with us</GradientButton>
            </div>
          </div>
          <div className="lg:col-span-8 space-y-4">
            {FAQ_DATA.map((item, index) => (
              <div
                key={index}
                className={`group border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden transition-all duration-300 ${activeIndex === index ? 'bg-white shadow-lg dark:bg-slate-900' : 'bg-slate-50/50 dark:bg-slate-900/50 hover:bg-white dark:hover:bg-slate-900'}`}
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className={`text-sm md:text-base font-bold uppercase tracking-wide transition-colors ${activeIndex === index ? 'text-amber-600' : 'text-slate-700 dark:text-slate-300'}`}>
                    {item.question}
                  </span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-amber-600 text-white rotate-180' : 'bg-slate-200 dark:bg-slate-800 text-slate-500'}`}>
                    {activeIndex === index ? <Minus size={14} /> : <Plus size={14} />}
                  </div>
                </button>
                <div
                  className={`overflow-hidden transition-all duration-300 ease-in-out ${activeIndex === index ? 'max-h-40 opacity-100' : 'max-h-0 opacity-0'}`}
                >
                  <div className="p-6 pt-0 text-slate-500 dark:text-slate-400 text-sm leading-relaxed font-medium border-t border-slate-100 dark:border-slate-800/50 mt-2">
                    {item.answer}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
};

const ContactSection: React.FC = () => (
  <section id="contact" className="pt-12 pb-20 border-b border-slate-200/50 dark:border-white/5 scroll-mt-24 text-left relative overflow-hidden">
    <Container>
      <div className="grid lg:grid-cols-12 gap-12">
        <div className="lg:col-span-5 space-y-8">
          <div>
            <SectionTitle tag="Get in Touch" title="Contact & Booking" />
            <p className="text-slate-500 dark:text-slate-400 text-base leading-relaxed mb-6 font-medium">
              Ready to provide consultation and care with maximum privacy. Please make an appointment in advance for your convenience.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0 text-amber-600">
                <MapPin size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Location</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">M-Trust Urology Clinic<br />Pattaya City, Bang Lamung District<br />Chon Buri 20150</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-amber-50 dark:bg-amber-900/20 flex items-center justify-center shrink-0 text-amber-600">
                <Phone size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Emergency Call</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed font-mono text-lg font-bold text-amber-600">+66 2 123 4567</p>
                <p className="text-slate-400 text-[10px]">Available 24/7 for urgent care</p>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <div className="w-10 h-10 rounded-full bg-green-50 dark:bg-green-900/20 flex items-center justify-center shrink-0 text-green-600">
                <MessageCircle size={20} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white text-sm uppercase tracking-wide">Line Official</h4>
                <p className="text-slate-500 text-sm mt-1 leading-relaxed">@mtrustclinic</p>
              </div>
            </div>
          </div>

          <div className="w-full aspect-[4/3] rounded-[2rem] overflow-hidden border border-slate-200 dark:border-slate-800 shadow-lg relative bg-slate-100 dark:bg-slate-900">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d62218.96345330364!2d100.83506197282717!3d12.92323891461464!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x310296096a6f4575%3A0xe726893663a89073!2sPattaya%20City%2C%20Bang%20Lamung%20District%2C%20Chon%20Buri!5e0!3m2!1sen!2sth!4v1709450000000!5m2!1sen!2sth"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute inset-0 grayscale hover:grayscale-0 transition-all duration-500"
            ></iframe>
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="bg-gradient-to-br from-white/90 via-slate-50/50 to-indigo-50/40 dark:from-[#1a1a1a]/90 dark:to-[#202030]/80 backdrop-blur-xl rounded-[2.5rem] p-8 md:p-10 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] dark:shadow-[0_0_30px_rgba(0,0,0,0.3)] border border-slate-100 dark:border-white/10 h-full relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/10 rounded-full blur-3xl -mr-10 -mt-10 pointer-events-none"></div>

            <h3 className="text-xl font-black text-slate-900 dark:text-white uppercase mb-6 flex items-center">
              <Calendar className="mr-3 text-amber-600" size={20} />
              Make an Appointment
            </h3>

            <form className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">Full Name</label>
                  <input type="text" placeholder="Your Name" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400 dark:text-white" />
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">Phone Number</label>
                  <input type="tel" placeholder="08x-xxx-xxxx" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors placeholder:text-slate-400 dark:text-white" />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">Service of Interest</label>
                  <div className="relative">
                    <select className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm appearance-none focus:outline-none focus:border-amber-500 text-slate-600 dark:text-slate-300">
                      <option>Prostate Screening</option>
                      <option>ED Treatment (Shockwave)</option>
                      <option>Vasectomy</option>
                      <option>Circumcision</option>
                      <option>General Consultation</option>
                    </select>
                    <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" size={14} />
                  </div>
                </div>
                <div className="space-y-1.5">
                  <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">Preferred Date</label>
                  <input type="date" className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 text-slate-500 dark:text-slate-300" />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] font-bold text-slate-500 uppercase tracking-wider ml-2">Message (Optional)</label>
                <textarea rows="4" placeholder="Describe your symptoms or specific request..." className="w-full bg-slate-50/50 dark:bg-slate-950/50 border border-slate-200 dark:border-slate-700 rounded-xl px-4 py-3 text-sm focus:outline-none focus:border-amber-500 transition-colors resize-none placeholder:text-slate-400 dark:text-white"></textarea>
              </div>

              <div className="pt-4 flex items-center justify-between">
                <p className="text-[10px] text-slate-400 max-w-[200px] leading-tight">
                  <ShieldCheck size={12} className="inline mr-1 text-green-500" />
                  Your information will be kept strictly confidential according to our privacy policy.
                </p>
                <GradientButton className="px-8 py-3.5 shadow-xl shadow-amber-500/20" icon={Send}>Confirm Booking</GradientButton>
              </div>
            </form>
          </div>
        </div>
      </div>
    </Container>
  </section>
);

// ==========================================
// 6. MAIN APP ENTRY
// ==========================================

const Page: React.FC = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [lang, setLang] = useState('EN');
  const [isDark, setIsDark] = useState(false);
  const [selectedDoctor, setSelectedDoctor] = useState<DoctorData | null>(null);
  const [selectedService, setSelectedService] = useState<string | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => { if (entry.isIntersecting) setActiveSection(entry.target.id); });
    }, { threshold: 0.1 });

    ['home', 'about', 'services', 'doctors', 'blog', 'events', 'faq', 'contact'].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, [selectedDoctor, selectedService]);

  const scrollToSection = (id: string) => {
    setSelectedDoctor(null);
    setSelectedService(null);
    setTimeout(() => {
      const el = document.getElementById(id);
      if (el) {
        const offset = 85;
        const elementPosition = el.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - offset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    }, 50);
  };

  return (
    <div className={`selection:bg-amber-500 selection:text-white ${isDark ? 'dark' : ''}`}>
      <style>{`
        /* Custom Scrollbar Hide */
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }

        /* Animations */
        @keyframes shimmer-natural {
          0% { left: -100%; opacity: 0; }
          10% { opacity: 1; }      /* เริ่มต้นสว่างชัดทางซ้าย */
          40% { opacity: 0.6; }    /* เริ่มจางลงเมื่อเข้าสู่ช่วงกลาง */
          100% { left: 200%; opacity: 0; } /* เลือนหายไปจนหมดทางขวา */
        }
        .animate-shimmer-natural {
          animation: shimmer-natural 5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
        }

        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
            animation-play-state: paused;
        }
        .paused {
            animation-play-state: paused !important;
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.5; }
        }
        .animate-pulse-slow {
          animation: pulse-slow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        
        @keyframes shimmer {
            0% { background-position: 200% 0; }
            100% { background-position: -200% 0; }
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }

        @keyframes slideInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-slide-in-up {
          animation: slideInUp 0.7s ease-out forwards;
        }

        @keyframes zoomIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
        .animate-zoom-in {
            animation: zoomIn 0.3s ease-out forwards;
        }
      `}</style>
      <div className="min-h-screen transition-colors duration-1000 font-sans relative overflow-x-hidden text-left text-slate-900 dark:text-slate-100">
        <ModernBackground />
        <Header
          activeSection={activeSection}
          scrollToSection={scrollToSection}
          lang={lang}
          setLang={setLang}
          isDark={isDark}
          setIsDark={setIsDark}
          onBackToHome={() => {
            setSelectedDoctor(null);
            setSelectedService(null);
          }}
          onServiceClick={(serviceName) => {
            setSelectedDoctor(null);
            setSelectedService(serviceName);
          }}
        />

        <main className="relative z-10 pt-[100px] text-left">
          {selectedService ? (
            <ServiceDetail serviceName={selectedService} onBack={() => setSelectedService(null)} />
          ) : selectedDoctor ? (
            <DrProfile doctor={selectedDoctor} onBack={() => setSelectedDoctor(null)} />
          ) : (
            <>
              <HeroSlider />
              <AboutSection />
              <ServicesSection onSelectService={(serviceName) => setSelectedService(serviceName)} />
              <DoctorsList onSelectDoctor={setSelectedDoctor} />
              <BlogSection />
              <EventsSection />
              <FaqSection />
            </>
          )}

          <ContactSection />

          <footer className="relative pt-16 pb-12 border-t border-slate-200/50 dark:border-white/5 bg-white/90 dark:bg-[#050505]/95 backdrop-blur-3xl rounded-t-[4rem] text-left">
            <Container>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10 text-left">
                <div className="space-y-6 text-left"><Logo onClick={() => scrollToSection('home')} /><p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-medium italic opacity-80 text-left">M-Trust Urology Clinic delivers specialized care focusing on men's health and precision surgery.</p></div>
                <div className="text-left text-left"><h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.4em] border-l-4 border-amber-600 pl-4 leading-none text-left">Services</h4><ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-left"><li>Men's Performance</li><li>Urology</li><li>Aesthetic Surgery</li><li>Diagnostics Center</li></ul></div>
                <div className="text-left text-left text-left"><h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.4em] border-l-4 border-amber-600 pl-4 leading-none text-left">Info</h4><ul className="space-y-3 text-xs text-slate-500 dark:text-slate-400 font-bold uppercase tracking-widest text-left"><li>Appointments</li><li>Our Doctors</li><li>Packages</li><li>Privacy Policy</li></ul></div>
                <div className="text-left text-left text-left text-left"><h4 className="font-black text-slate-900 dark:text-white mb-6 uppercase text-[10px] tracking-[0.4em] border-l-4 border-amber-600 pl-4 leading-none text-left">Contact</h4><div className="space-y-4 text-xs text-slate-600 dark:text-slate-400 font-semibold tracking-tight text-left"><div className="flex items-center space-x-3 text-left"><MapPin size={14} className="text-amber-600" /> <span>Medical Center, BKK</span></div><div className="flex items-center space-x-3 text-left"><Mail size={14} className="text-amber-600" /> <span>info@m-trustclinic.com</span></div></div></div>
              </div>
              <div className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-col md:flex-row justify-between items-center text-[9px] font-black text-slate-400 dark:text-slate-600 uppercase tracking-[0.6em] text-left"><p>© 2026 M-TRUST UROLOGY CLINIC. PRECISION IN CARE.</p></div>
            </Container>
          </footer>
        </main>

      </div>
    </div>
  );
}

export default Page;