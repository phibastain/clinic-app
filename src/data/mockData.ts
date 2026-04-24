// Updated AR translations
import {
  Zap, Activity, Trophy, Timer, Calendar, ShieldCheck, Smile, Infinity, Target, HeartPulse,
  Users, Droplets, Layers, Scissors, Search, Microscope, MonitorPlay, FileText, CheckCircle2,
  Clock, MapPin, User, Mail, Phone, Facebook, Twitter, Instagram, Youtube, Menu, X,
  ChevronRight, ChevronDown, ChevronLeft, ArrowRight, Play, ZoomIn, Globe, Star, Briefcase,
  Thermometer, BatteryCharging, Fingerprint, Sparkles, TrendingUp, AlertCircle, BarChart3,
  Box, Hexagon, ZapOff, CheckSquare, FileSearch, Flame, Ruler, ScanLine, FlaskConical,
  LucideIcon, BookOpen, GraduationCap, Medal, Image as ImageIcon, PlayCircle, HelpCircle,
  Plus, Minus, MessageCircle, Users2, Stethoscope, Pill
} from 'lucide-react';
import React from 'react';

// ==========================================
// TYPES & INTERFACES
// ==========================================

export interface IconProps {
  className?: string;
  size?: number | string;
}

export interface ServiceStat {
  label: string;
  value: string;
  icon: LucideIcon;
}

export interface ServiceBenefit {
  title: string;
  desc: string;
  icon: LucideIcon;
}

export interface ComparisonItem {
  feature: string;
  focus: string;
  radial: string;
  icon: LucideIcon;
}

export interface ComparisonData {
  title: string;
  subtitle: string;
  headers: string[];
  items: ComparisonItem[];
}

export interface TimelineStep {
  time: string;
  title: string;
  desc: string;
}

export interface TimelineData {
  title: string;
  steps: TimelineStep[];
}

export interface ProcedureStep {
  step: string;
  title: string;
  desc: string;
}

export interface FaqItem {
  q?: string;
  a?: string;
  question?: string;
  answer?: string;
}

export interface ServiceDetailData {
  title: string;
  titleAR?: string;
  titleRU?: string;
  tagline: string;
  taglineAR?: string;
  taglineRU?: string;
  description: string;
  descriptionAR?: string;
  descriptionRU?: string;
  heroImage: string;
  whatIsIt?: { title: string; description: string; image?: string };
  whatIsItAR?: { title: string; description: string };
  whatIsItRU?: { title: string; description: string };
  mechanismImageAspectRatio?: string;
  descriptionImage?: string;
  video?: { id: string; title: string } | null;
  stats?: ServiceStat[];
  statsAR?: { label: string; value?: string }[];
  statsRU?: { label: string; value?: string }[];
  benefits: ServiceBenefit[];
  benefitsAR?: { title: string; desc: string }[];
  benefitsRU?: { title: string; desc: string }[];
  comparison?: ComparisonData;
  comparisonAR?: {
    title: string;
    subtitle: string;
    headers: [string, string];
    items: { feature: string; focus: string; radial: string }[];
  };
  comparisonRU?: {
    title: string;
    subtitle: string;
    headers: [string, string];
    items: { feature: string; focus: string; radial: string }[];
  };
  candidates?: string[];
  candidatesAR?: string[];
  candidatesRU?: string[];
  safety?: { title: string; content: string; icon: LucideIcon };
  safetyAR?: { title: string; content: string };
  safetyRU?: { title: string; content: string };
  timeline?: TimelineData;
  timelineAR?: { title: string; steps: { time: string; title: string; desc: string }[] };
  timelineRU?: { title: string; steps: { time: string; title: string; desc: string }[] };
  testPanels?: { title: string; items: string[]; icon: LucideIcon }[];
  testPanelsAR?: { title: string; items: string[] }[];
  testPanelsRU?: { title: string; items: string[] }[];
  diseaseTable?: {
    title: string;
    subtitle: string;
    categories: {
      category: string;
      tagColor: string;
      curable: boolean;
      diseases: {
        name: string;
        icon: LucideIcon;
        symptoms: string;
      }[];
    }[];
  };
  diseaseTableAR?: {
    title: string;
    subtitle: string;
    categories: {
      category: string;
      diseases: {
        name: string;
        symptoms: string;
      }[];
    }[];
  };
  diseaseTableRU?: {
    title: string;
    subtitle: string;
    categories: {
      category: string;
      diseases: {
        name: string;
        symptoms: string;
      }[];
    }[];
  };
  procedure: ProcedureStep[];
  procedureAR?: { step: string; title: string; desc: string }[];
  procedureRU?: { step: string; title: string; desc: string }[];
  faq: FaqItem[];
  faqAR?: { q: string; a: string }[];
  faqRU?: { q: string; a: string }[];
  hidePricing?: boolean;
}

export interface HeroSlideData {
  id: number;
  title: string;
  desc: string;
  doctorImage: string;
  slideImage?: string;
  btnText: string;
}

export interface ServiceItem {
  name: string;
  desc: string;
  image: string;
  Icon: LucideIcon;
}

export interface Qualification {
  year: string;
  title: string;
  titleTH?: string;
  titleAR?: string;
  titleRU?: string;
  place: string;
  placeTH?: string;
  placeAR?: string;
  placeRU?: string;
}

export interface AwardData {
  year: string;
  title: string;
  titleTH?: string;
  titleAR?: string;
  titleRU?: string;
  issuer: string;
  issuerTH?: string;
  issuerAR?: string;
  issuerRU?: string;
}

export interface DoctorVideo {
  id: string;
  title: string;
  url: string;
  thumbnail?: string;
}

export interface HandwrittenTestimonial {
  id: number;
  name: string;
  image: string;
  text?: string;
  rating?: number;
  transcript?: string;
  language?: string;
}

export interface DoctorData {
  id: number;
  name: string;
  nameTH?: string;
  nameAR?: string;
  nameRU?: string;
  role: string;
  roleTH?: string;
  roleAR?: string;
  roleRU?: string;
  image: string;
  expert: string;
  expertTH?: string;
  expertAR?: string;
  expertRU?: string;
  hospital?: string;
  email?: string;
  website?: string;
  tagline?: string;
  taglineTH?: string;
  taglineAR?: string;
  taglineRU?: string;
  bio: string;
  bioTH?: string;
  bioAR?: string;
  bioRU?: string;
  specialties: string[];
  specialtiesTH?: string[];
  specialtiesAR?: string[];
  specialtiesRU?: string[];
  qualifications: Qualification[];
  awards: AwardData[];
  videos?: DoctorVideo[];
  videoUrl?: string;
  activities?: string[];
  certificates?: string[];
  handwrittenTestimonials?: HandwrittenTestimonial[];
  bioContent?: {
    type: 'header' | 'paragraph' | 'image' | 'list' | 'slider';
    content?: string;
    contentTH?: string;
    contentAR?: string;
    contentRU?: string;
    items?: string[];
    itemsTH?: string[];
    itemsAR?: string[];
    itemsRU?: string[];
    image?: string;
    images?: string[];
    caption?: string;
    captionTH?: string;
    captionAR?: string;
    captionRU?: string;
  }[];
  specializedFocus?: string;
  specializedFocusTH?: string;
  specializedFocusAR?: string;
  specializedFocusRU?: string;
  surgicalExcellence?: string;
  surgicalExcellenceTH?: string;
  surgicalExcellenceAR?: string;
  surgicalExcellenceRU?: string;
  hideTestimonials?: boolean;
  slug?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  titleAR?: string;
  titleRU?: string;
  excerpt: string;
  excerptAR?: string;
  excerptRU?: string;
  date: string;
  category: string;
  image: string;
  content?: string; // HTML string for rich content
  contentAR?: string;
  contentRU?: string;
}

export interface EventData {
  id: string | number;
  day: string;
  month: string;
  year: string;
  title: string;
  titleTH?: string;
  titleAR?: string;
  titleRU?: string;
  subtitle: string;
  subtitleTH?: string;
  subtitleAR?: string;
  subtitleRU?: string;
  location: string;
  locationTH?: string;
  locationAR?: string;
  locationRU?: string;
  time: string;
  description: string;
  descriptionTH?: string;
  descriptionAR?: string;
  descriptionRU?: string;
  content?: string;
  contentTH?: string;
  contentAR?: string;
  contentRU?: string;
  excerpt?: string;
  excerptAR?: string;
  excerptRU?: string;
  image: string;
  category: string;
  slug?: string;
}

export interface LanguageOption {
  code: string;
  flag: string;
  label: string;
}

export interface GoogleReview {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  date: string;
  text: string;
  verified: boolean;
}

export interface WhyUsItem {
  icon: LucideIcon;
  title: string;
  description: string;
  highlight?: string;
}


// ==========================================
// DATA CONFIGURATION
// ==========================================

// Custom Icons
const SmileIcon: React.FC<IconProps> = ({ className, size }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, [
  React.createElement('circle', { cx: "12", cy: "12", r: "10", key: "c" }),
  React.createElement('path', { d: "M8 14s1.5 2 4 2 4-2 4-2", key: "p" }),
  React.createElement('line', { x1: "9", x2: "9.01", y1: "9", y2: "9", key: "l1" }),
  React.createElement('line', { x1: "15", x2: "15.01", y1: "9", y2: "9", key: "l2" })
]);

const InfinityIcon: React.FC<IconProps> = ({ className, size }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className },
  React.createElement('path', { d: "M12 12c-2-2.67-4-4-6-4a4 4 0 1 0 0 8c2 0 4-1.33 6-4Zm0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4Z" })
);

const ThumbsUpIcon: React.FC<IconProps> = ({ className, size }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, [
  React.createElement('path', { d: "M7 10v12", key: "p1" }),
  React.createElement('path', { d: "M15 5.88 14 10h5.83a2 2 0 0 1 1.92 2.56l-2.33 8A2 2 0 0 1 17.5 22H4a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2h2.76a2 2 0 0 0 1.79-1.11L12 2h0a3.13 3.13 0 0 1 3 3.88Z", key: "p2" })
]);

const FireIcon: React.FC<IconProps> = ({ className, size }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className },
  React.createElement('path', { d: "M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-2.312-3.376-3-5-1.12-2.645-.25-5.228 1-6 2 2.5 6 6 6 6s.5 2.5 3 4a12.637 12.637 0 0 1 2 4.5c.315 1.455.15 3.395-2 5.5-2.222 2.176-4.5 1.5-6 1a5.616 5.616 0 0 1-3.5-3.5Z" })
);

const Loop: React.FC<IconProps> = ({ className, size }) => React.createElement('svg', { xmlns: "http://www.w3.org/2000/svg", width: size, height: size, viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className }, [
  React.createElement('path', { d: "M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16", key: "p1" }),
  React.createElement('path', { d: "M3 5v11h11", key: "p2" }),
  React.createElement('path', { d: "M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8", key: "p3" }),
  React.createElement('path', { d: "M21 19V8h-11", key: "p4" })
]);

export const SERVICE_DETAILS_DATA: Record<string, ServiceDetailData> = {
  'Focus Shockwave': {
    title: 'Focus Shockwave\n(Li-ESWT)',
    titleAR: 'موجات الصدمة المركزة\n(Li-ESWT)',
    titleRU: 'Фокусированная ударно-волновая терапия\n(Li-ESWT)',
    tagline: 'The Future of ED Treatment: Regenerate, Restore, Perform.',
    taglineAR: 'مستقبل علاج ضعف الانتصاب: تجديد، استعادة، أداء.',
    taglineRU: 'Будущее лечения ЭД: Регенерация, Восстановление, Уверенность.',
    whatIsIt: {
      title: 'What is Focus Shockwave (Li-ESWT)?',
      description: "Linear Focus Shockwave Therapy (Li-ESWT) is a revolutionary, non-invasive treatment for Erectile Dysfunction (ED). Unlike radial shockwaves that only reach the surface, **Linear Focus Shockwave** delivers high-frequency low-intensity acoustic waves deep into the penile tissue. This precise energy triggers a biological healing response, stimulating the growth of new blood vessels and rejuvenating existing ones without needles, surgery, or medication.",
      image: '/assets/image/services section/focus shockwave-p1/What is Focus Shockwave (Li-ESWT).webp'
    },
    whatIsItAR: {
      title: 'ما هي موجات الصدمة المركزة (Li-ESWT)؟',
      description: 'العلاج بالموجات الصوتية المركزة الخطية (Li-ESWT) هو علاج ثوري غير جراحي لضعف الانتصاب. خلافاً للموجات الشعاعية التي تصل فقط إلى السطح، تخترق موجات الصدمة المركزة الخطية الأنسجة العميقة للقضيب بموجات صوتية منخفضة الشدة وعالية التركيز. تُحفّز هذه الطاقة الدقيقة استجابةً شفائية بيولوجية تُحفّز نمو أوعية دموية جديدة وتجدد القائم منها، دون إبر أو جراحة أو دواء.',
    },
    whatIsItRU: {
      title: 'Что такое фокусированная ударно-волновая терапия (Li-ESWT)?',
      description: 'Линейная фокусированная ударно-волновая терапия (Li-ESWT) — это революционный неинвазивный метод лечения эректильной дисфункции (ЭД). В отличие от радиальных ударных волн, которые достигают только поверхности, **линейная фокусированная ударно-волновая терапия** доставляет высокочастотные низкоинтенсивные акустические волны глубоко в ткани полового члена. Эта точная энергия запускает биологическую реакцию заживления, стимулируя рост новых кровеносных сосудов и омолаживая существующие без игл, хирургического вмешательства или медикаментов.',
    },
    description: "Our FDA-cleared technology utilizes **Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)** to target the root cause of ED: poor blood flow. \n\n**The Clinical Mechanism of Action:**\n\n1. **Angiogenesis (New Vessel Formation):** The acoustic waves create micro-trauma at the cellular level, stimulating the release of angiogenic growth factors (e.g., VEGF, eNOS, PCNA). This process leads to the formation of new, healthy blood vessels, significantly increasing blood supply to the erectile tissue.\n\n2. **Breakdown of Micro-Plaque:** The focused energy helps dissolve micro-calcifications in existing blood vessels, clearing blockages that restrict blood flow.\n\n3. **Tissue Regeneration:** Li-ESWT promotes the recruitment of endogenous stem cells and rejuvenates nerve tissue, enhancing penile sensitivity and overall function.\n\nThe result is a long-term restoration of natural erectile function, allowing for spontaneous erections and improved sexual performance.",
    descriptionAR: 'تستخدم تقنيتنا المعتمدة من FDA **العلاج بالموجات الصدمية خارج الجسم منخفضة الشدة (Li-ESWT)** لمعالجة السبب الجذري لضعف الانتصاب: ضعف تدفق الدم.\n\n**آلية العمل السريرية:**\n\n1. **تكوين أوعية دموية جديدة (Angiogenesis):** تُنشئ الموجات الصوتية صدمات دقيقة على المستوى الخلوي تُحفّز إفراز عوامل النمو الوعائية (VEGF، eNOS، PCNA). تُفضي هذه العملية إلى تكوين أوعية دموية جديدة وصحية، مما يزيد إمداد الدم للأنسجة الانتصابية بشكل ملحوظ.\n\n2. **تفتيت الرواسب الدقيقة:** تُساعد الطاقة المركزة في إذابة التكلسات الدقيقة داخل الأوعية الدموية، مما يزيل الانسدادات التي تُعيق تدفق الدم.\n\n3. **تجديد الأنسجة:** يُعزز Li-ESWT استقطاب الخلايا الجذعية الطبيعية ويجدد الأنسجة العصبية، مما يُحسّن حساسية القضيب والوظيفة الجنسية.\n\nالنتيجة: استعادة طويلة الأمد للوظيفة الانتصابية الطبيعية مع انتصابات تلقائية وأداء جنسي أفضل.',
    descriptionRU: 'Наша технология, одобренная FDA, использует **низкоинтенсивную экстракорпоральную ударно-волновую терапию (Li-ESWT)** для устранения основной причины ЭД: плохого кровотока.\n\n**Клинический механизм действия:**\n\n1. **Ангиогенез (образование новых сосудов):** Акустические волны вызывают микротравмы на клеточном уровне, стимулируя высвобождение ангиогенных факторов роста (например, VEGF, eNOS, PCNA). Этот процесс приводит к образованию новых здоровых кровеносных сосудов, что значительно увеличивает кровоснабжение эректильной ткани.\n\n2. **Разрушение микро-бляшек:** Сфокусированная энергия помогает растворить микрокальцификаты в существующих кровеносных сосудах, устраняя закупорки, ограничивающие кровоток.\n\n3. **Регенерация тканей:** Li-ESWT способствует привлечению эндогенных стволовых клеток и омолаживает нервную ткань, повышая чувствительность полового члена и общую функцию.\n\nРезультатом является долгосрочное восстановление естественной эректильной функции, что обеспечивает спонтанную эрекцию и улучшение сексуальной активности.',
    heroImage: '/assets/image/services section/focus shockwave-p1/focus shockwave hero.webp',
    descriptionImage: '/assets/image/services section/focus shockwave-p1/focus shockwave clinical mechanism.webp',
    video: { id: 'JmU9Wz5UARA', title: 'Mechanism of Action: Li-ESWT' },
    stats: [
      { label: "Clinical Success", value: "85%+", icon: Trophy },
      { label: "Treatment Time", value: "30-40 Mins", icon: Timer },
      { label: "Downtime", value: "0 Days", icon: Activity },
      { label: "Result Duration", value: "1-2 Years", icon: Calendar }
    ],
    statsAR: [
      { label: 'نجاح سريري' },
      { label: 'وقت الجلسة' },
      { label: 'فترة التعافي' },
      { label: 'مدة النتائج' },
    ],
    statsRU: [
      { label: 'Клинический успех' },
      { label: 'Время сеанса' },
      { label: 'Период восстановления' },
      { label: 'Срок действия результата' },
    ],
    benefits: [
      { title: 'Curative Approach', desc: 'Treats the root cause (blood flow), not just symptoms.', icon: Activity },
      { title: '100% Non-Invasive', desc: 'No needles, no surgery, no medication required.', icon: ShieldCheck },
      { title: 'Painless', desc: 'Pain-free treatment with no downtime. Lunch-break procedure.', icon: SmileIcon as any },
      { title: 'Long-Term Results', desc: 'Effects can last 2+ years with maintenance.', icon: InfinityIcon as any }
    ],
    benefitsRU: [
      { title: 'Лечебный подход', desc: 'Лечит первопричину (кровоток), а не только симптомы.' },
      { title: '100% Неинвазивно', desc: 'Никаких игл, операций или медикаментов.' },
      { title: 'Безболезненно', desc: 'Процедура без боли и периода восстановления. Можно сделать в обеденный перерыв.' },
      { title: 'Долгосрочные результаты', desc: 'Эффект может длиться более 2 лет при поддерживающей терапии.' }
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
    comparisonAR: {
      title: 'لماذا موجات الصدمة المركزة أفضل؟',
      subtitle: 'الموجات المركزة الخطية مقابل الموجات الشعاعية التقليدية',
      headers: ['Li-ESWT (مركزة)', 'الموجة الشعاعية'],
      items: [
        { feature: 'انتشار الموجة', focus: 'اختراق عميق وموجه', radial: 'سطحي ومنتشر' },
        { feature: 'كثافة الطاقة', focus: 'عالية وثابتة عند الهدف', radial: 'تتلاشى بسرعة' },
        { feature: 'الهدف العلاجي', focus: 'تنشيط الأوعية (أوعية جديدة)', radial: 'استرخاء العضلات / الألم' },
        { feature: 'الفعالية لضعف الانتصاب', focus: 'المعيار الذهبي (علاجي)', radial: 'محدود / داعم فقط' },
      ],
    },
    comparisonRU: {
      title: 'Почему фокусированная ударно-волновая терапия лучше',
      subtitle: 'Линейный фокус против традиционных радиальных волн',
      headers: ['Li-ESWT (Фокус)', 'Радиальная волна'],
      items: [
        { feature: 'Распространение волны', focus: 'Направленное, глубокое проникновение', radial: 'Поверхностное, рассеивающееся' },
        { feature: 'Плотность энергии', focus: 'Высокая и постоянная в цели', radial: 'Быстро рассеивается' },
        { feature: 'Терапевтическая цель', focus: 'Ангиогенез (новые сосуды)', radial: 'Расслабление мышц / Боль' },
        { feature: 'Эффективность при ЭД', focus: 'Золотой стандарт (лечебный)', radial: 'Ограниченная / только поддерживающая' },
      ],
    },
    candidates: [
      "Men with mild to severe vasculogenic Erectile Dysfunction.",
      "Patients who do not respond well to oral medications (PDE5i).",
      "Men seeking a drug-free, surgery-free solution.",
      "Patients with Peyronie's Disease (Curvature) or Chronic Pelvic Pain."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من ضعف انتصاب وعائي خفيف إلى شديد.',
      'المرضى الذين لا يستجيبون جيداً للأدوية الفموية (PDE5i).',
      'الرجال الراغبون في حل خالٍ من الأدوية والجراحة.',
      'المرضى الذين يعانون من مرض بيروني (انحناء القضيب) أو آلام الحوض المزمنة.',
    ],
    candidatesRU: [
      "Мужчины с сосудистой эректильной дисфункцией от легкой до тяжелой степени.",
      "Пациенты, которые плохо реагируют на пероральные препараты (ФДЭ-5).",
      "Мужчины, ищущие решение без лекарств и хирургического вмешательства.",
      "Пациенты с болезнью Пейрони (искривление) или синдромом хронической тазовой боли."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "Li-ESWT is FDA-cleared and one of the safest procedures in urology. There are virtually no significant side effects. Some patients may experience mild, temporary redness or tingling at the treatment site, which resolves within minutes.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والآثار الجانبية',
      content: 'العلاج بالموجات الصدمية المركزة (Li-ESWT) معتمد من FDA وهو من أكثر إجراءات المسالك البولية أماناً. الآثار الجانبية تكاد تكون معدومة. قد يلاحظ بعض المرضى احمراراً خفيفاً أو وخزاً في منطقة العلاج لدقائق قبل أن تختفي تلقائياً.',
    },
    safetyRU: {
      title: "Безопасность и побочные эффекты",
      content: "Li-ESWT одобрена FDA и является одной из самых безопасных процедур в урологии. Серьезных побочных эффектов практически нет. Некоторые пациенты могут испытывать легкое временное покраснение или покалывание в месте лечения, которое проходит в течение нескольких минут."
    },
    timeline: {
      title: "Treatment Protocol & Results",
      steps: [
        { time: "Week 1-3", title: "Stimulation", desc: "Initial cellular stimulation. Dormant vessels awaken." },
        { time: "Week 4-6", title: "Regeneration", desc: "Angiogenesis peaks. New blood vessels form. Blood flow improves." },
        { time: "Month 3+", title: "Restoration", desc: "Peak clinical results. Spontaneous erections return. Effects sustain for 1-2 years." }
      ]
    },
    timelineAR: {
      title: 'بروتوكول العلاج والنتائج',
      steps: [
        { time: 'الأسبوع 1-3', title: 'التحفيز', desc: 'التحفيز الخلوي الأولي. تستيقظ الأوعية الدموية الخاملة.' },
        { time: 'الأسبوع 4-6', title: 'التجديد', desc: 'ذروة تكوين الأوعية. تتشكل أوعية دموية جديدة. يتحسن تدفق الدم.' },
        { time: 'الشهر 3+', title: 'الاستعادة', desc: 'أفضل نتيجة سريرية. عودة الانتصاب التلقائي. تستمر التأثيرات 1-2 سنة.' },
      ],
    },
    timelineRU: {
      title: "Протокол лечения и результаты",
      steps: [
        { time: "Неделя 1-3", title: "Стимуляция", desc: "Начальная клеточная стимуляция. Пробуждаются спящие сосуды." },
        { time: "Неделя 4-6", title: "Регенерация", desc: "Пик ангиогенеза. Образуются новые кровеносные сосуды. Кровоток улучшается." },
        { time: "Месяц 3+", title: "Восстановление", desc: "Максимальные клинические результаты. Возвращается спонтанная эрекция. Эффект сохраняется 1-2 года." }
      ]
    },
    procedure: [
      { step: '01', title: 'Mapping', desc: 'Doctor identifies target areas along the penile shaft and crura.' },
      { step: '02', title: 'Application', desc: 'Gel is applied. The focus head delivers 10,000 shocks precisely.' },
      { step: '03', title: 'Complete', desc: 'Session ends in 30-40 mins. Resume normal activity immediately.' },
      { step: '04', title: 'Repeat', desc: 'Standard protocol: 3-6 sessions (1 time per week).' }
    ],
    procedureAR: [
      { step: '01', title: 'تحديد مناطق الهدف', desc: 'يُحدد الطبيب مناطق الهدف على طول جسم القضيب وجذوره.' },
      { step: '02', title: 'تطبيق العلاج', desc: 'يُوضع جل التوصيل، ثم يُطبّق رأس التركيز 10,000 موجة بدقة.' },
      { step: '03', title: 'اكتمال الجلسة', desc: 'تنتهي الجلسة في 30-40 دقيقة. يمكن استئناف الأنشطة العادية فوراً.' },
      { step: '04', title: 'الجلسات المتكررة', desc: 'البروتوكول المعياري: 3-6 جلسات (مرة واحدة أسبوعياً).' },
    ],
    procedureRU: [
      { step: '01', title: 'Картирование', desc: 'Врач определяет целевые области вдоль ствола полового члена и ножек.' },
      { step: '02', title: 'Применение', desc: 'Наносится гель. Фокусная головка точно доставляет 10 000 импульсов.' },
      { step: '03', title: 'Завершение', desc: 'Сеанс заканчивается через 30-40 минут. Немедленное возвращение к обычной активности.' },
      { step: '04', title: 'Повторение', desc: 'Стандартный протокол: 3-6 сеансов (1 раз в неделю).' }
    ],
    faq: [
      { q: "How is Focus Shockwave better than Radial?", a: "Focus waves travel deeper and deliver energy exactly to the cavernous tissue to grow blood vessels. Radial waves only hit the skin surface and are meant for muscle pain, not ED cure." },
      { q: "When will I see results?", a: "Most patients begin to feel improvement starting from the very first session, with progressive results as they continue the treatment." },
      { q: "Is it painful?", a: "Not at all. It feels like a light tapping or vibration. No anesthesia is needed." }
    ],
    faqAR: [
      { q: 'كيف تتفوق موجات الصدمة المركزة على الموجات الشعاعية؟', a: 'تخترق الموجات المركزة بعمق أكبر وتوصّل الطاقة مباشرةً إلى الأنسجة الكهفية لتنمية أوعية دموية جديدة. أما الموجات الشعاعية فتصل فقط إلى السطح وهي مخصصة لآلام العضلات، وليست علاجاً حقيقياً لضعف الانتصاب.' },
      { q: 'متى سأشعر بالنتائج؟', a: 'يبدأ معظم المرضى بملاحظة تحسن منذ الجلسة الأولى، مع تقدم تدريجي في النتائج مع استمرار العلاج.' },
      { q: 'هل العلاج مؤلم؟', a: 'لا إطلاقاً. يشعر المريض فقط بنقر خفيف أو اهتزاز دون الحاجة إلى أي تخدير.' },
    ],
    faqRU: [
      { q: "Чем фокусированная ударно-волновая терапия лучше радиальной?", a: "Фокусные волны проникают глубже и доставляют энергию точно в пещеристую ткань для роста кровеносных сосудов. Радиальные волны поражают только поверхность кожи и предназначены для снятия мышечной боли, а не для лечения ЭД." },
      { q: "Когда я увижу результаты?", a: "Большинство пациентов начинают чувствовать улучшение уже с первого сеанса, с постепенным улучшением результатов по мере продолжения лечения." },
      { q: "Это больно?", a: "Совсем нет. Ощущается как легкое постукивание или вибрация. Анестезия не требуется." }
    ],
    hidePricing: true
  },
  'Generic': {
    title: 'Specialized Urology Care',
    tagline: 'World-Class Treatment Standards',
    description: "We provide comprehensive diagnosis and treatment plans tailored to your specific condition. Our team of specialists utilizes the latest technology to ensure the best possible outcomes for your health.",
    heroImage: '/assets/image/about section/clinic inside.webp',
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
  },
  'PRP for ED': {
    title: 'Platelet-Rich Plasma (PRP) Therapy for ED',
    titleAR: 'العلاج بالبلازما الغنية بالصفائح الدموية (PRP) لضعف الانتصاب',
    titleRU: 'PRP-терапия (обогащенная тромбоцитами плазма) при ЭД',
    tagline: 'Advanced Urological PRP: Treat Erectile Dysfunction & Restore Sexual Performance.',
    taglineAR: 'علاج PRP المتقدم: علاج ضعف الانتصاب واستعادة الأداء الجنسي الطبيعي.',
    taglineRU: 'Передовая урологическая PRP: лечение эректильной дисфункции и восстановление сексуальной функции.',
    whatIsIt: {
      title: 'What is PRP for ED?',
      description: "Platelet-Rich Plasma (PRP) Therapy is a cutting-edge regenerative treatment that harnesses the natural healing power of your own blood. By concentrating platelets—rich in bioactive proteins and growth factors—PRP therapy stimulates the body's repair mechanisms to rejuvenate penile tissue, enhance blood vessel formation, and restore sexual function naturally, without the need for synthetic drugs or surgery.",
      image: '/assets/image/services section/prp for ed/what is prp for ed.webp'
    },
    whatIsItAR: {
      title: 'ما هو علاج PRP لضعف الانتصاب؟',
      description: 'العلاج بالبلازما الغنية بالصفائح الدموية (PRP) هو علاج تجديدي متطور يستغل القدرة الطبيعية للشفاء من دمك الخاص. من خلال تركيز الصفائح الدموية—الغنية بالبروتينات الحيوية وعوامل النمو—يُحفّز علاج PRP آليات الإصلاح الذاتي في الجسم لتجديد أنسجة القضيب، وتعزيز تكوين الأوعية الدموية، واستعادة الوظيفة الجنسية بشكل طبيعي دون أدوية اصطناعية أو جراحة.',
    },
    whatIsItRU: {
      title: 'Что такое PRP-терапия при ЭД?',
      description: 'PRP-терапия (плазма, обогащенная тромбоцитами) — это передовой метод регенеративного лечения, использующий естественную целительную силу вашей собственной крови. Концентрируя тромбоциты, богатые биоактивными белками и факторами роста, PRP-терапия стимулирует механизмы восстановления организма для омоложения тканей полового члена, усиления образования кровеносных сосудов и естественного восстановления сексуальной функции без необходимости применения синтетических препаратов или хирургического вмешательства.',
    },
    mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "PRP therapy functions by delivering a concentrated surge of specific growth factors directly into the penile tissue, triggering a cascade of biological regeneration.\n\n**The Clinical Mechanism of Action:**\n\n1. **Growth Factor Release:** Upon injection, platelets release alpha granules containing potent growth factors such as **VEGF** (Vascular Endothelial Growth Factor), **PDGF** (Platelet-Derived Growth Factor), and **TGF-β**. These proteins act as signaling molecules to initiate tissue repair.\n\n2. **Angiogenesis & Neovascularization:** The released growth factors stimulate the formation of new blood vessels and repair existing ones. This improved vascularity ensures sustained blood flow to the erectile tissue, which is essential for maintaining strong erections.\n\n3. **Cellular Regeneration & Collagen Synthesis:** PRP activates fibroblasts to produce new collagen and elastin, strengthening the penile structural integrity. It also recruits mesenchymal stem cells to the area, further accelerating tissue regeneration and rejuvenation.\n\n4. **Neurogenesis (Nerve Repair):** Research indicates PRP can aid in the repair of damaged nerve tissues, potentially enhancing penile sensitivity and neural response.",
    descriptionAR: 'يعمل علاج PRP عن طريق إيصال جرعة مركزة من عوامل النمو المحددة مباشرةً إلى أنسجة القضيب، مما يُطلق سلسلة من التجديد البيولوجي.\n\n**آلية العمل السريرية:**\n\n1. **إطلاق عوامل النمو:** عند الحقن، تُطلق الصفائح الدموية حبيباتها الألفا التي تحتوي على عوامل نمو فعّالة مثل **VEGF** (عامل نمو البطانة الوعائية)، و**PDGF** (عامل نمو مشتق الصفائح)، و**TGF-β**. تعمل هذه البروتينات كإشارات لبدء إصلاح الأنسجة.\n\n2. **تكوين الأوعية الجديدة (Angiogenesis):** تُحفّز عوامل النمو المُطلقة تكوين أوعية دموية جديدة وإصلاح القائمة. يضمن هذا التحسن في الأوعية تدفقاً مستداماً للدم إلى الأنسجة الانتصابية.\n\n3. **تجديد الخلايا وتوليف الكولاجين:** ينشّط PRP الخلايا الليفية لإنتاج الكولاجين والإيلاستين، مما يُعزز البنية الداخلية للقضيب. كما يستقطب خلايا جذعية مسنشيمية لتسريع التجديد.\n\n4. **إعادة تكوين الأعصاب (Neurogenesis):** تُشير الأبحاث إلى أن PRP يُسهم في إصلاح الأنسجة العصبية التالفة، مما قد يُحسّن حساسية القضيب والاستجابة العصبية.',
    descriptionRU: 'PRP-терапия работает путем доставки концентрированного всплеска специфических факторов роста непосредственно в ткани полового члена, запуская каскад биологической регенерации.\n\n**Клинический механизм действия:**\n\n1. **Высвобождение факторов роста:** После инъекции тромбоциты высвобождают альфа-гранулы, содержащие мощные факторы роста, такие как **VEGF** (сосудистый эндотелиальный фактор роста), **PDGF** (тромбоцитарный фактор роста) и **TGF-β**. Эти белки действуют как сигнальные молекулы для начала восстановления тканей.\n\n2. **Ангиогенез и неоваскуляризация:** Высвободившиеся факторы роста стимулируют образование новых кровеносных сосудов и восстанавливают существующие. Улучшенная васкуляризация обеспечивает постоянный приток крови к эректильной ткани.\n\n3. **Клеточная регенерация и синтез коллагена:** PRP активирует фибробласты для выработки нового коллагена и эластина, укрепляя структурную целостность полового члена. Также привлекаются мезенхимальные стволовые клетки.\n\n4. **Нейрогенез (восстановление нервов):** Исследования показывают, что PRP может способствовать восстановлению поврежденных нервных тканей, потенциально повышая чувствительность полового члена и нервную реакцию.',
    heroImage: '/assets/image/services section/prp for ed/prp for ed hero.webp',
    descriptionImage: '/assets/image/services section/prp for ed/prp for ed clinical mechanism.webp',
    video: null,
    timeline: {
      title: "Regeneration Journey",
      steps: [
        { time: "Week 1", title: "Activation", desc: "Growth factors begin signaling tissue repair. Minimal recovery needed." },
        { time: "Week 4-8", title: "Vascular Expansion", desc: "New capillary formation (angiogenesis) peaks. Improved blood flow noted." },
        { time: "Month 3+", title: "Optimal Results", desc: "Penile tissue rejuvenation completes. Maximum enhancement in performance." }
      ]
    },
    timelineAR: {
      title: 'رحلة التجديد',
      steps: [
        { time: 'الأسبوع 1', title: 'التحفيز', desc: 'تبدأ عوامل النمو في إشارة إصلاح الأنسجة. يحتاج التعافي إلى الحد الأدنى.' },
        { time: 'الأسبوع 4-8', title: 'توسع الأوعية', desc: 'يبلغ تكوين الشعيرات الدموية الجديدة ذروته. يُلاحظ تحسن في تدفق الدم.' },
        { time: 'الشهر 3+', title: 'أفضل النتائج', desc: 'يكتمل تجديد أنسجة القضيب. الحد الأقصى من التحسن في الأداء الجنسي.' },
      ],
    },
    timelineRU: {
      title: 'Путь регенерации',
      steps: [
        { time: 'Неделя 1', title: 'Активация', desc: 'Факторы роста начинают сигнализировать о восстановлении тканей. Требуется минимальное восстановление.' },
        { time: 'Неделя 4-8', title: 'Расширение сосудов', desc: 'Пик образования новых капилляров (ангиогенеза). Отмечается улучшение кровотока.' },
        { time: 'Месяц 3+', title: 'Оптимальные результаты', desc: 'Омоложение тканей полового члена завершается. Максимальное улучшение функции.' },
      ],
    },
    stats: [
      { label: "Success Rate", value: "70%+", icon: Trophy },
      { label: "Session Time", value: "30 Mins", icon: Timer },
      { label: "Recovery", value: "1 Day", icon: Activity },
      { label: "Duration", value: "12-18 Mo", icon: Calendar }
    ],
    statsAR: [
      { label: 'معدل النجاح' },
      { label: 'وقت الجلسة' },
      { label: 'فترة التعافي' },
      { label: 'مدة التأثير' },
    ],
    statsRU: [
      { label: 'Процент успеха' },
      { label: 'Время сеанса' },
      { label: 'Период восстановления' },
      { label: 'Продолжительность эффекта' },
    ],
    benefits: [
      { title: '100% Natural', desc: 'Uses your own platelets—no foreign substances or chemicals.', icon: Droplets },
      { title: 'Tissue Regeneration', desc: 'Stimulates growth factors to repair and rebuild erectile tissue.', icon: Activity },
      { title: 'Minimal Downtime', desc: 'Quick procedure with same-day return to normal activities.', icon: Timer },
      { title: 'Synergistic', desc: 'Can be combined with Shockwave therapy for enhanced results.', icon: Zap }
    ],
    benefitsRU: [
      { title: '100% Натурально', desc: 'Используются ваши собственные тромбоциты — никаких чужеродных веществ или химикатов.' },
      { title: 'Регенерация тканей', desc: 'Стимулирует факторы роста для восстановления эректильной ткани.' },
      { title: 'Минимальное время простоя', desc: 'Быстрая процедура с возвращением к нормальной деятельности в тот же день.' },
      { title: 'Синергия', desc: 'Может сочетаться с ударно-волновой терапией для улучшения результатов.' }
    ],
    candidates: [
      "Men with mild to moderate vasculogenic ED.",
      "Patients seeking a natural, drug-free regenerative option.",
      "Those who want to enhance results from Shockwave therapy.",
      "Men with Peyronie's Disease seeking tissue healing."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من ضعف انتصاب وعائي خفيف إلى متوسط.',
      'المرضى الباحثون عن خيار تجديدي طبيعي خالٍ من الأدوية.',
      'من يرغب في تعزيز نتائج علاج موجات الصدمة.',
      'الرجال المصابون بمرض بيروني الباحثون عن شفاء الأنسجة.',
    ],
    candidatesRU: [
      'Мужчины с легкой или умеренной сосудистой ЭД.',
      'Пациенты, ищущие натуральный, безлекарственный вариант регенерации.',
      'Те, кто хочет улучшить результаты ударно-волновой терапии.',
      'Мужчины с болезнью Пейрони, нуждающиеся в заживлении тканей.',
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "PRP is extremely safe as it uses your own blood. Side effects are minimal—mild soreness or bruising at injection sites, which resolves within 24-48 hours. No risk of allergic reactions or rejection.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والآثار الجانبية',
      content: 'يُعدّ PRP آمناً للغاية لأنه يستخدم دمك الخاص. الآثار الجانبية ضئيلة—ألم خفيف أو كدمة في مواضع الحقن، تزول خلال 24-48 ساعة. لا يوجد خطر من ردود الفعل التحسسية أو الرفض.',
    },
    safetyRU: {
      title: 'Безопасность и побочные эффекты',
      content: 'PRP-терапия чрезвычайно безопасна, так как используется ваша собственная кровь. Побочные эффекты минимальны — легкая болезненность или синяки в местах инъекций, которые проходят в течение 24-48 часов. Риск аллергических реакций или отторжения отсутствует.'
    },
    procedure: [
      { step: '01', title: 'Blood Draw', desc: 'Small blood sample collected from your arm (similar to routine lab work).' },
      { step: '02', title: 'Centrifuge', desc: 'Blood is spun to concentrate platelets with growth factors.' },
      { step: '03', title: 'Injection', desc: 'PRP injected into specific areas of the penis using fine needles.' },
      { step: '04', title: 'Recovery', desc: 'Resume activities immediately. Full effects develop over 4-8 weeks.' }
    ],
    procedureAR: [
      { step: '01', title: 'سحب الدم', desc: 'تُؤخذ عينة دم صغيرة من ذراعك (مشابهة لفحص الدم الروتيني).' },
      { step: '02', title: 'الطرد المركزي', desc: 'يُدار الدم بالطرد المركزي لتركيز الصفائح مع عوامل النمو.' },
      { step: '03', title: 'الحقن', desc: 'يُحقن PRP في مناطق محددة من القضيب باستخدام إبر دقيقة.' },
      { step: '04', title: 'التعافي', desc: 'يمكن استئناف الأنشطة فوراً. تتطور التأثيرات الكاملة خلال 4-8 أسابيع.' },
    ],
    procedureRU: [
      { step: '01', title: 'Забор крови', desc: 'Берется небольшой образец крови из вашей вены (подобно обычному анализу крови).' },
      { step: '02', title: 'Центрифугирование', desc: 'Кровь центрифугируется для концентрации тромбоцитов с факторами роста.' },
      { step: '03', title: 'Инъекция', desc: 'PRP вводится в определенные участки полового члена с помощью тонких игл.' },
      { step: '04', title: 'Восстановление', desc: 'Немедленное возобновление активности. Полный эффект развивается через 4-8 недель.' },
    ],
    faq: [
      { q: "Is PRP painful?", a: "Local anesthetic cream is applied, so discomfort is minimal. Most men report only slight pressure during injection." },
      { q: "How many sessions do I need?", a: "Typically 1-3 sessions spaced 4-6 weeks apart for optimal results." },
      { q: "Can I combine PRP with Shockwave?", a: "Absolutely. Many clinics offer combined protocols for synergistic regenerative effects." }
    ],
    faqAR: [
      { q: 'هل علاج PRP مؤلم؟', a: 'يُطبّق كريم مخدر موضعي، لذا يكون الانزعاج ضئيلاً. يُفيد معظم الرجال بالشعور بضغط طفيف فقط أثناء الحقن.' },
      { q: 'كم عدد الجلسات التي أحتاجها؟', a: 'عادةً 1-3 جلسات بفاصل 4-6 أسابيع للحصول على أفضل النتائج.' },
      { q: 'هل يمكن دمج PRP مع موجات الصدمة؟', a: 'بالتأكيد. كثير من العيادات تقدم بروتوكولات مدمجة لنتائج تجديدية متكاملة.' },
    ],
    faqRU: [
      { q: 'Болезненна ли PRP-терапия?', a: 'Применяется местный обезболивающий крем, поэтому дискомфорт минимален. Большинство мужчин сообщают лишь о легком давлении во время инъекции.' },
      { q: 'Сколько сеансов мне нужно?', a: 'Обычно 1-3 сеанса с интервалом 4-6 недель для достижения оптимальных результатов.' },
      { q: 'Можно ли комбинировать PRP с ударно-волновой терапией?', a: 'Безусловно. Многие клиники предлагают комбинированные протоколы для синергетического регенеративного эффекта.' },
    ],
    hidePricing: true
  },
  'Stem Cell for ED': {
    title: 'Stem Cell Therapy for Erectile Dysfunction',
    titleAR: 'العلاج بالخلايا الجذعية لضعف الانتصاب',
    titleRU: 'Терапия стволовыми клетками при эректильной дисфункции',
    tagline: 'Advanced Regenerative Medicine: Restore Function at the Cellular Level.',
    taglineAR: 'الطب التجديدي المتقدم: استعادة الوظيفة على المستوى الخلوي.',
    taglineRU: 'Передовая регенеративная медицина: Восстановление функции на клеточном уровне.',
    whatIsIt: {
      title: 'What is Stem Cell Therapy for ED?',
      description: "Stem Cell Therapy for Erectile Dysfunction is the pinnacle of regenerative medicine. It utilizes Mesenchymal Stem Cells (MSCs)—potent biological shapeshifters—obtained from your own body (autologous) or ethically sourced umbilical cord tissue. These cells have the unique ability to differentiate into various cell types, directly repairing damaged tissues, blood vessels, and nerves to reverse the root causes of ED.",
      image: '/assets/image/services section/stem cell for ed/what is stem cell therapy for ed.webp'
    },
    whatIsItAR: {
      title: 'ما هو العلاج بالخلايا الجذعية لضعف الانتصاب؟',
      description: 'العلاج بالخلايا الجذعية لضعف الانتصاب يعتبر قمة الطب التجديدي. يستخدم الخلايا الجذعية الوسيطة (MSCs) — وهي خلايا بيولوجية قوية قادرة على التكيف — يتم الحصول عليها من جسمك (ذاتي) أو من أنسجة الحبل السري المستخرجة أخلاقياً. تتمتع هذه الخلايا بقدرة فريدة على التمايز إلى أنواع مختلفة من الخلايا، مما يؤدي إلى إصلاح مباشر للأنسجة التالفة والأوعية الدموية والأعصاب لعكس الأسباب الجذرية لضعف الانتصاب.',
    },
    whatIsItRU: {
      title: 'Что такое терапия стволовыми клетками при ЭД?',
      description: 'Терапия стволовыми клетками при эректильной дисфункции — это вершина регенеративной медицины. В ней используются мезенхимальные стволовые клетки (МСК) — мощные биологические "трансформеры", получаемые из вашего собственного организма (аутологичные) или из этично полученной ткани пуповины. Эти клетки обладают уникальной способностью дифференцироваться в различные типы клеток, непосредственно восстанавливая поврежденные ткани, кровеносные сосуды и нервы, устраняя первопричины ЭД.',
    },
    mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "Stem Cell Therapy goes beyond symptom management to structurally repair the penile tissue. The regenerative process involves sophisticated biological mechanisms:\n\n**The Clinical Mechanism of Action:**\n\n1. **Differentiation & Tissue Replacement:** Mesenchymal Stem Cells (MSCs) are multipotent, meaning they can transform into specific cell types needed for repair. In the penis, they differentiate into endothelial cells (lining blood vessels), smooth muscle cells, and cavernous tissue cells, physically replacing damaged structures.\n\n2. **Potent Paracrine Signaling:** The injected stem cells release a powerful cocktail of trophic factors and cytokines. This 'paracrine effect' signals the body's own dormant repair cells to wake up and start healing the surrounding tissue.\n\n3. **Angiogenesis (New Vessel Formation):** Stem cells secrete high levels of VEGF (Vascular Endothelial Growth Factor), driving the creation of extensive new capillary networks. This restores healthy blood flow, which is critical for achieving and maintaining rigid erections.\n\n4. **Neuroregeneration (Nerve Repair):** Unlike other treatments, stem cells have neurotrophic properties that can regenerate damaged nerves (e.g., from prostate surgery or diabetes), restoring penile sensitivity and the neural pathways required for erection.",
    descriptionAR: 'يتجاوز العلاج بالخلايا الجذعية إدارة الأعراض ليقوم بإصلاح أنسجة القضيب هيكلياً. تتضمن العملية التجديدية آليات بيولوجية دقيقة:\n\n**آلية العمل السريرية:**\n\n1. **التمايز واستبدال الأنسجة:** الخلايا الجذعية الوسيطة (MSCs) متعددة القدرات، مما يعني قدرتها على التحول إلى أنواع محددة من الخلايا اللازمة للإصلاح. في القضيب، تتمايز إلى خلايا بطانية (مبطنة للأوعية الدموية)، وخلايا عضلية ملساء، وخلايا أنسجة كهفية، مما يستبدل الهياكل التالفة فعلياً.\n\n2. **تأثير الإشارات نظير الصماوي (Paracrine):** تفرز الخلايا الجذعية المحقونة مزيجاً قوياً من عوامل النمو والسيتوكينات. يرسل "التأثير نظير الصماوي" إشارات لخلايا الإصلاح الكامنة في الجسم للاستيقاظ وبدء شفاء الأنسجة المحيطة.\n\n3. **تكوين الأوعية الدموية (Angiogenesis):** تفرز الخلايا الجذعية مستويات عالية من عامل نمو بطانة الأوعية الدموية (VEGF)، مما يدفع نحو تكوين شبكات واسعة من الشعيرات الدموية الجديدة. ويستعيد هذا التدفق الدموي الصحي، وهو أمر بالغ الأهمية لتحقيق والحفاظ على انتصاب قوي.\n\n4. **تجديد الأعصاب (Neuroregeneration):** على عكس العلاجات الأخرى، تمتلك الخلايا الجذعية خصائص عصبية يمكنها تجديد الأعصاب التالفة (على سبيل المثال، من جراحة البروستاتا أو مرض السكري)، واستعادة حساسية القضيب والمسارات العصبية اللازمة للانتصاب.',
    descriptionRU: 'Терапия стволовыми клетками выходит за рамки устранения симптомов и направлена на структурное восстановление ткани полового члена. Регенеративный процесс включает сложные биологические механизмы:\n\n**Клинический механизм действия:**\n\n1. **Дифференциация и замена тканей:** Мезенхимальные стволовые клетки (МСК) мультипотентны, то есть могут трансформироваться в специфические типы клеток, необходимые для восстановления. В половом члене они дифференцируются в эндотелиальные клетки (выстилающие кровеносные сосуды), гладкомышечные клетки и клетки пещеристой ткани, физически заменяя поврежденные структуры.\n\n2. **Мощная паракринная сигнализация:** Введенные стволовые клетки высвобождают мощный коктейль из трофических факторов и цитокинов. Этот «паракринный эффект» дает сигнал собственным спящим восстановительным клеткам организма проснуться и начать лечение окружающих тканей.\n\n3. **Ангиогенез (образование новых сосудов):** Стволовые клетки выделяют высокие уровни VEGF (сосудистый эндотелиальный фактор роста), стимулируя создание обширных новых капиллярных сетей. Это восстанавливает здоровый кровоток, критически важный для достижения и поддержания стойкой эрекции.\n\n4. **Нейрорегенерация (восстановление нервов):** В отличие от других методов лечения, стволовые клетки обладают нейротрофическими свойствами и могут восстанавливать поврежденные нервы (например, после операции на простате или при диабете), возвращая чувствительность полового члена и нервные пути, необходимые для эрекции.',
    heroImage: '/assets/image/services section/stem cell for ed/stem cell hero.webp',
    descriptionImage: '/assets/image/services section/stem cell for ed/stem cell clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Efficacy", value: "75%+", icon: Trophy },
      { label: "Procedure", value: "45 Mins", icon: Timer },
      { label: "Downtime", value: "1-2 Days", icon: Activity },
      { label: "Effect Duration", value: "18-24 Mo", icon: Calendar }
    ],
    statsAR: [
      { label: 'الفعالية' },
      { label: 'وقت الإجراء' },
      { label: 'فترة التعافي' },
      { label: 'مدة التأثير' }
    ],
    statsRU: [
      { label: 'Эффективность' },
      { label: 'Время процедуры' },
      { label: 'Период восстановления' },
      { label: 'Длительность эффекта' }
    ],
    benefits: [
      { title: 'Neuroregeneration', desc: 'Repairs nerve damage often underlying severe ED.', icon: Zap },
      { title: 'Vascular Repair', desc: 'Creates new blood vessels to improve blood flow permanently.', icon: HeartPulse },
      { title: 'Severe ED Solution', desc: 'Effective even when pills and other treatments fail.', icon: Trophy },
      { title: 'Long-Lasting', desc: 'Results can persist for 18-24 months or longer.', icon: Infinity as any }
    ],
    benefitsRU: [
      { title: 'Нейрорегенерация', desc: 'Восстанавливает повреждения нервов, часто лежащие в основе тяжелой ЭД.' },
      { title: 'Восстановление сосудов', desc: 'Создает новые кровеносные сосуды для постоянного улучшения кровотока.' },
      { title: 'Решение для тяжелой ЭД', desc: 'Эффективно даже тогда, когда таблетки и другие методы лечения не помогают.' },
      { title: 'Долговечность', desc: 'Результаты могут сохраняться 18-24 месяца и дольше.' }
    ],
    candidates: [
      "Men with moderate to severe ED who don't respond to conventional therapy.",
      "Post-prostatectomy patients with nerve damage.",
      "Diabetic patients with vascular and nerve impairment.",
      "Those seeking the most advanced regenerative option available."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من ضعف انتصاب متوسط إلى شديد ولا يستجيبون للعلاج التقليدي.',
      'المرضى بعد استئصال البروستاتا الذين يعانون من تلف الأعصاب.',
      'مرضى السكري الذين يعانون من ضعف في الأوعية الدموية والأعصاب.',
      'أولئك الذين يبحثون عن أحدث خيار تجديدي متاح.'
    ],
    candidatesRU: [
      'Мужчины с ЭД от умеренной до тяжелой степени, не реагирующие на традиционную терапию.',
      'Пациенты после простатэктомии с повреждением нервов.',
      'Пациенты с диабетом с поражением сосудов и нервов.',
      'Те, кто ищет самый передовой доступный вариант регенерации.'
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "Stem cell therapy using autologous (your own) or ethically sourced mesenchymal stem cells is very safe. Minimal risk of immune reaction. Minor swelling or soreness may occur but resolves quickly.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والآثار الجانبية',
      content: 'يعتبر العلاج بالخلايا الجذعية باستخدام الخلايا الجذعية الوسيطة الذاتية (من جسمك) أو المستخرجة من مصادر أخلاقية آمناً للغاية. يوجد خطر ضئيل لرد فعل مناعي. قد يحدث تورم خفيف أو ألم بسيط ولكنه يزول بسرعة.',
    },
    safetyRU: {
      title: 'Безопасность и побочные эффекты',
      content: 'Терапия стволовыми клетками с использованием аутологичных (собственных) или этично полученных мезенхимальных стволовых клеток очень безопасна. Минимальный риск иммунной реакции. Возможен небольшой отек или болезненность, которые быстро проходят.'
    },
    timeline: {
      title: "Treatment Timeline",
      steps: [
        { time: "Week 1-4", title: "Cell Integration", desc: "Stem cells begin integrating into tissue and secreting growth factors." },
        { time: "Month 2-3", title: "Tissue Remodeling", desc: "New blood vessels and nerves form. Gradual improvement in function." },
        { time: "Month 4+", title: "Peak Results", desc: "Maximum benefit achieved. Erectile function significantly restored." }
      ]
    },
    timelineAR: {
      title: 'الجدول الزمني للعلاج',
      steps: [
        { time: 'الأسبوع 1-4', title: 'اندماج الخلايا', desc: 'تبدأ الخلايا الجذعية في الاندماج في الأنسجة وإفراز عوامل النمو.' },
        { time: 'الشهر 2-3', title: 'إعادة بناء الأنسجة', desc: 'تتكون أوعية دموية وأعصاب جديدة. تحسن تدريجي في الوظيفة.' },
        { time: 'الشهر 4+', title: 'أفضل النتائج', desc: 'تحقيق أقصى فائدة. استعادة وظيفة الانتصاب بشكل ملحوظ.' }
      ]
    },
    timelineRU: {
      title: 'График лечения',
      steps: [
        { time: 'Неделя 1-4', title: 'Интеграция клеток', desc: 'Стволовые клетки начинают интегрироваться в ткань и выделять факторы роста.' },
        { time: 'Месяц 2-3', title: 'Ремоделирование ткани', desc: 'Формируются новые кровеносные сосуды и нервы. Постепенное улучшение функции.' },
        { time: 'Месяц 4+', title: 'Максимальные результаты', desc: 'Достигается максимальная польза. Эректильная функция значительно восстанавливается.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Procurement & Quality Control', desc: 'Certified Mesenchymal Stem Cells (MSCs) are sourced from leading biotech labs to ensure the highest potency, sterility, and therapeutic grade.' },
      { step: '02', title: 'Safety & Sensitivity Testing', desc: 'Prior to the main procedure, we perform a mandatory allergy/sensitivity test to ensure zero adverse reactions and complete patient safety.' },
      { step: '03', title: 'Precision Penile Injection', desc: 'Under local anesthesia, the activated stem cells are precisely injected into the penile tissue to trigger vascular and nerve regeneration.' },
      { step: '04', title: 'Rapid Recovery', desc: 'A quick recovery phase (24-48 hours) follows, with the biological repair process continuing to enhance function over 3-6 months.' }
    ],
    procedureAR: [
      { step: '01', title: 'التوريد ومراقبة الجودة', desc: 'يتم توريد الخلايا الجذعية الوسيطة (MSCs) المعتمدة من مختبرات التكنولوجيا الحيوية الرائدة لضمان أعلى مستوى من الفعالية والتعقيم والدرجة العلاجية.' },
      { step: '02', title: 'اختبار السلامة والحساسية', desc: 'قبل الإجراء الرئيسي، نقوم بإجراء اختبار إلزامي للحساسية لضمان عدم وجود أي تفاعلات غير مرغوب فيها وتأمين سلامة المريض بالكامل.' },
      { step: '03', title: 'حقن القضيب بدقة', desc: 'تحت تأثير مخدر موضعي، يتم حقن الخلايا الجذعية النشطة بدقة في أنسجة القضيب لتحفيز تجديد الأوعية الدموية والأعصاب.' },
      { step: '04', title: 'التعافي السريع', desc: 'تتبع ذلك مرحلة تعافي سريعة (24-48 ساعة)، مع استمرار عملية الإصلاح البيولوجي في تعزيز الوظيفة خلال 3-6 أشهر.' }
    ],
    procedureRU: [
      { step: '01', title: 'Закупка и контроль качества', desc: 'Сертифицированные мезенхимальные стволовые клетки (МСК) поставляются из ведущих биотехнологических лабораторий, что гарантирует высочайшую эффективность, стерильность и терапевтический класс.' },
      { step: '02', title: 'Тестирование безопасности и чувствительности', desc: 'Перед основной процедурой проводится обязательный тест на аллергию/чувствительность для обеспечения отсутствия побочных реакций и полной безопасности пациента.' },
      { step: '03', title: 'Точная инъекция в половой член', desc: 'Под местной анестезией активированные стволовые клетки точно вводятся в ткань полового члена для запуска регенерации сосудов и нервов.' },
      { step: '04', title: 'Быстрое восстановление', desc: 'Следует короткая фаза восстановления (24-48 часов), а процесс биологического восстановления продолжает улучшать функцию в течение 3-6 месяцев.' }
    ],
    faq: [
      { q: "How is this different from PRP?", a: "Stem cells can differentiate into multiple cell types (nerves, blood vessels, muscle), while PRP primarily provides growth factors. Stem cell therapy is more comprehensive for severe ED." },
      { q: "Is it FDA-approved?", a: "Autologous stem cell therapies (using your own cells) are legal and widely practiced. Efficacy continues to be studied in clinical trials." },
      { q: "How long until I see results?", a: "Initial improvements may appear at 4-8 weeks, with peak benefits at 3-6 months." }
    ],
    faqAR: [
      { q: 'كيف يختلف هذا عن علاج PRP؟', a: 'يمكن للخلايا الجذعية التمايز إلى أنواع متعددة من الخلايا (أعصاب، أوعية دموية، عضلات)، بينما يوفر PRP بشكل أساسي عوامل النمو. العلاج بالخلايا الجذعية أكثر شمولية لضعف الانتصاب الشديد.' },
      { q: 'هل هو معتمد من إدارة الغذاء والدواء (FDA)؟', a: 'العلاجات باستخدام الخلايا الجذعية الذاتية (من خلاياك الخاصة) قانونية وتمارس على نطاق واسع. ولا تزال الفعالية قيد الدراسة في التجارب السريرية.' },
      { q: 'كم من الوقت حتى تظهر النتائج؟', a: 'قد تظهر التحسينات الأولية في الفترة من 4-8 أسابيع، مع وصول الفوائد إلى ذروتها في 3-6 أشهر.' }
    ],
    faqRU: [
      { q: 'Чем это отличается от PRP?', a: 'Стволовые клетки могут дифференцироваться в различные типы клеток (нервы, кровеносные сосуды, мышцы), в то время как PRP в основном обеспечивает факторы роста. Терапия стволовыми клетками является более комплексной для тяжелой ЭД.' },
      { q: 'Одобрено ли это FDA?', a: 'Терапия аутологичными стволовыми клетками (с использованием собственных клеток) легальна и широко практикуется. Эффективность продолжает изучаться в клинических испытаниях.' },
      { q: 'Когда я увижу результаты?', a: 'Первоначальные улучшения могут появиться на 4-8 неделе, с максимальным эффектом на 3-6 месяце.' }
    ]
  },
  'Penile Implant': {
    title: 'Penile Prosthesis (Implant) Surgery',
    titleAR: 'جراحة زراعة دعامة القضيب',
    titleRU: 'Операция по имплантации (протезированию) полового члена',
    tagline: 'The Definitive Surgical Solution for Severe Erectile Dysfunction Reliable, On-Demand Erections.',
    taglineAR: 'الحل الجراحي النهائي لضعف الانتصاب الشديد: انتصاب موثوق عند الطلب.',
    taglineRU: 'Окончательное хирургическое решение тяжелой эректильной дисфункции. Надежная эрекция по требованию.',
    whatIsIt: {
      title: 'What is a Penile Implant?',
      description: "A Penile Implant (or Penile Prosthesis) is a medical device surgically placed inside the penis to help men with severe Erectile Dysfunction (ED) achieve a firm erection for sexual intercourse. Widely regarded as the gold standard treatment when oral medications, injections, or other therapies are no longer effective, a penile implant offers a permanent and dependable solution that restores both spontaneity and sexual confidence.",
      image: '/assets/image/services section/penile implant/What is a Penile Implant.webp'
    },
    whatIsItAR: {
      title: 'ما هي دعامة القضيب؟',
      description: 'دعامة القضيب هي جهاز طبي يُزرع جراحياً داخل القضيب لمساعدة الرجال الذين يعانون من ضعف انتصاب شديد على تحقيق انتصاب صلب للاستمتاع بحياة جنسية طبيعية. تُعتبر المعيار الذهبي عندما تفشل الأدوية أو الحقن، حيث توفر حلاً دائماً وموثوقاً يعيد الثقة والعفوية.',
    },
    whatIsItRU: {
      title: 'Что такое имплантат полового члена?',
      description: 'Имплантат полового члена (или протез) — это медицинское устройство, хирургическим путем помещаемое внутрь полового члена, чтобы помочь мужчинам с тяжелой эректильной дисфункцией (ЭД) достичь твердой эрекции для полового акта. Считаясь золотым стандартом лечения, когда пероральные препараты, инъекции или другие методы больше не эффективны, имплантат предлагает постоянное и надежное решение, восстанавливающее как спонтанность, так и сексуальную уверенность.',
    },
    description: "A penile implant works by replacing damaged erectile tissue with medical-grade cylinders that replicate the natural erection process. There are two main types, each designed for different patient needs:\n\n**The Clinical Mechanism of Action:**\n\n1. **Inflatable Penile Implant (3-Piece):** This is the most popular option and closely mimics a natural erection. It consists of fluid-filled cylinders in the penis, a small pump in the scrotum, and a reservoir in the lower abdomen. Squeezing the pump transfers saline into the cylinders, producing a firm erection. A release valve allows the fluid to drain back, returning the penis to a soft, natural state.\n\n2. **Malleable (Semi-Rigid) Implant:** This device uses two flexible rods placed inside the penile shaft. The penis stays in a semi-rigid state and can be manually positioned — angled downward for daily comfort or upward for sexual activity. It's simpler and involves fewer mechanical components.\n\n**Why It Works:** Unlike medications that depend on blood flow, penile implants provide **mechanical support**, enabling a reliable erection virtually every time — regardless of underlying vascular or nerve conditions.",
    descriptionAR: 'تعمل الدعامة عن طريق استبدال الأنسجة التالفة بأسطوانات طبية تحاكي عملية الانتصاب الطبيعية. هناك نوعان رئيسيان، مصممان لتلبية احتياجات المرضى المختلفة:\n\n**الآلية السريرية:**\n\n1. **الدعامة القابلة للنفخ (3 قطع):** الخيار الأكثر شيوعاً ويحاكي الانتصاب الطبيعي بشكل وثيق. تتكون من أسطوانات مليئة بالسائل في القضيب، ومضخة صغيرة في كيس الصفن، وخزان في أسفل البطن. يتيح الضغط على المضخة نقل السائل لإنتاج انتصاب صلب. ويسمح صمام التحرير بعودة القضيب لحالته الرخوة الطبيعية.\n\n2. **الدعامة المرنة (شبه الصلبة):** تستخدم قضيبين مرنين داخل القضيب. يبقى القضيب في حالة شبه صلبة ويمكن توجيهه يدوياً لأسفل للراحة أو لأعلى للنشاط الجنسي. مكوناتها أبسط ميكانيكياً.\n\n**لماذا تنجح:** على عكس الأدوية التي تعتمد على تدفق الدم، توفر الدعامات **دعماً ميكانيكياً** يُمكنك من الانتصاب الموثوق في كل مرة — بغض النظر عن الحالات الوعائية أو العصبية الكامنة.',
    descriptionRU: 'Имплантат работает путем замены поврежденной эректильной ткани медицинскими цилиндрами, которые имитируют естественный процесс эрекции. Существуют два основных типа:\n\n**Клинический механизм действия:**\n\n1. **Надувной имплантат (3-компонентный):** Это самый популярный вариант, который максимально точно имитирует естественную эрекцию. Он состоит из цилиндров, наполняемых жидкостью, небольшой помпы в мошонке и резервуара в нижней части живота. Сжатие помпы перекачивает физиологический раствор в цилиндры, создавая твердую эрекцию. Клапан сброса позволяет жидкости стекать обратно, возвращая половой член в мягкое состояние.\n\n2. **Пластичный (полужесткий) имплантат:** В этом устройстве используются два гибких стержня, помещенных внутрь полового члена. Половой член остается в полужестком состоянии, и его положение можно менять вручную — наклонять вниз для комфорта или вверх для сексуальной активности.\n\n**Почему это работает:** В отличие от лекарств, зависящих от кровотока, имплантаты обеспечивают **механическую поддержку**, гарантируя надежную эрекцию каждый раз, независимо от сосудистых или нервных заболеваний.',
    heroImage: '/assets/image/services section/penile implant menu.webp',
    descriptionImage: '/assets/image/services section/penile implant/penile implant Clinical Mechanism.webp',
    video: { id: 'hfEGF_yT5sM', title: 'Penile Implant: How It Works' },
    stats: [
      { label: "Satisfaction", value: "95%+", icon: Trophy },
      { label: "Surgery Time", value: "60-90 Min", icon: Timer },
      { label: "Hospital Stay", value: "1 Day", icon: Activity },
      { label: "Longevity", value: "15-20 Yrs", icon: Calendar }
    ],
    statsAR: [
      { label: 'نسبة الرضا' },
      { label: 'وقت الجراحة' },
      { label: 'الإقامة بالمستشفى' },
      { label: 'العمر الافتراضي' }
    ],
    statsRU: [
      { label: 'Удовлетворенность' },
      { label: 'Время операции' },
      { label: 'Пребывание в стационаре' },
      { label: 'Срок службы' }
    ],
    benefits: [
      { title: 'Permanent Solution', desc: 'A single procedure that provides a lasting solution to erectile dysfunction.', icon: Infinity as any },
      { title: 'Natural Feel', desc: 'Modern 3-piece implants closely replicate natural firmness and appearance.', icon: CheckCircle2 },
      { title: 'On-Demand', desc: 'Discreet pump activation allows erections whenever you need them.', icon: Zap },
      { title: 'High Satisfaction', desc: 'Over 95% patient and partner satisfaction in clinical studies.', icon: Trophy }
    ],
    benefitsRU: [
      { title: 'Постоянное решение', desc: 'Единоразовая процедура, обеспечивающая длительное решение проблемы эректильной дисфункции.' },
      { title: 'Естественное ощущение', desc: 'Современные 3-компонентные имплантаты точно повторяют естественную твердость и внешний вид.' },
      { title: 'По требованию', desc: 'Незаметная активация помпы позволяет достичь эрекции тогда, когда вам это нужно.' },
      { title: 'Высокая удовлетворенность', desc: 'Более 95% удовлетворенности пациентов и их партнеров по данным клинических исследований.' }
    ],
    comparison: {
      title: "Types of Penile Implants",
      subtitle: "Inflatable vs. Malleable Devices",
      headers: ["3-Piece Inflatable", "Malleable (Semi-Rigid)"],
      items: [
        { feature: "Natural Appearance", focus: "Fully flaccid when deflated", radial: "Always semi-rigid", icon: CheckCircle2 },
        { feature: "Rigidity Control", focus: "Pump to inflate/deflate on demand", radial: "Bend up/down manually", icon: Target },
        { feature: "Partner Satisfaction", focus: "Highest (feels most natural)", radial: "Good (less natural feel)", icon: Trophy },
        { feature: "Complexity", focus: "More components (pump, reservoir)", radial: "Simpler (2 rods only)", icon: Layers }
      ]
    },
    comparisonAR: {
      title: 'أنواع دعامات القضيب',
      subtitle: 'الدعامات القابلة للنفخ مقابل المرنة',
      headers: ['قابلة للنفخ (3 قطع)', 'مرنة (شبه صلبة)'],
      items: [
        { feature: 'المظهر الطبيعي', focus: 'رخوة تماماً عند التفريغ', radial: 'دائماً شبه صلبة' },
        { feature: 'التحكم بالصلابة', focus: 'نفخ/تفريغ بالمضخة عند الطلب', radial: 'تُوجَّه لأعلى/لأسفل يدوياً' },
        { feature: 'رضا الشريكة', focus: 'الأعلى (ملمس أكثر طبيعية)', radial: 'جيد (ملمس أقل طبيعية)' },
        { feature: 'التعقيد', focus: 'مكونات أكثر (مضخة، خزان)', radial: 'أبسط (قضيبين فقط)' }
      ]
    },
    comparisonRU: {
      title: 'Типы имплантатов полового члена',
      subtitle: 'Надувные и полужесткие протезы',
      headers: ['Надувной (3-компонентный)', 'Полужесткий (пластичный)'],
      items: [
        { feature: 'Естественный вид', focus: 'Полностью расслаблен в сдутом состоянии', radial: 'Всегда полужесткий' },
        { feature: 'Контроль жесткости', focus: 'Надувается/сдувается помпой', radial: 'Сгибается вверх/вниз вручную' },
        { feature: 'Удовлетворенность партнера', focus: 'Самая высокая', radial: 'Хорошая' },
        { feature: 'Сложность', focus: 'Больше компонентов', radial: 'Простая система' }
      ]
    },
    candidates: [
      "Men with severe ED who have not responded to medications, injections, or shockwave therapy.",
      "Patients with nerve damage after prostate surgery or other pelvic procedures.",
      "Those who want a reliable, on-demand solution without daily medication.",
      "Men looking for a long-term, one-time surgical solution to erectile dysfunction."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من ضعف انتصاب شديد ولم يستجيبوا للأدوية، أو الحقن، أو موجات الصدمة.',
      'المرضى الذين يعانون من تلف الأعصاب بعد جراحة البروستاتا.',
      'من يرغب في حل موثوق عند الطلب بدون أدوية يومية.',
      'الرجال الباحثون عن حل جراحي دائم لمرة واحدة لضعف الانتصاب.'
    ],
    candidatesRU: [
      'Мужчины с тяжелой ЭД, не реагирующие на медикаменты, инъекции или ударно-волновую терапию.',
      'Пациенты с повреждением нервов после операции на простате или других процедур в области таза.',
      'Те, кто хочет получить надежное решение "по требованию" без ежедневного приема лекарств.',
      'Мужчины, ищущие долгосрочное, одноразовое хирургическое решение проблемы эректильной дисфункции.'
    ],
    safety: {
      title: "Safety & Complications",
      content: "Modern penile implants have complication rates below 5%. Potential risks include infection (1-3%), mechanical issues (uncommon with current-generation devices), and erosion (very rare). Choosing an experienced urological surgeon with a high case volume significantly improves outcomes and reduces risk.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والمضاعفات',
      content: 'معدلات المضاعفات للدعامات الحديثة أقل من 5%. تشمل المخاطر المحتملة العدوى (1-3%)، والمشكلات الميكانيكية (نادرة في الأجهزة الحالية). يقلل اختيار جراح مسالك بولية خبير ذي كفاءة عالية بشكل كبير من المخاطر ويحسن النتائج.',
    },
    safetyRU: {
      title: 'Безопасность и осложнения',
      content: 'Уровень осложнений у современных имплантатов составляет менее 5%. Потенциальные риски включают инфекцию (1-3%), механические проблемы и эрозию. Выбор опытного хирурга-уролога с большим объемом операций значительно улучшает результаты и снижает риск.'
    },
    timeline: {
      title: "Recovery & Activation",
      steps: [
        { time: "Week 1-2", title: "Healing", desc: "Initial healing of incisions. Manageable discomfort with medication." },
        { time: "Week 4-6", title: "Activation", desc: "First in-office training session to learn how to operate the device." },
        { time: "Month 3+", title: "Full Confidence", desc: "Complete comfort using the device. Spontaneity restored." }
      ]
    },
    timelineAR: {
      title: 'التعافي والتفعيل',
      steps: [
        { time: 'الأسبوع 1-2', title: 'الشفاء الوّلي', desc: 'شفاء الشقوق الجراحية الأولية. انزعاج يمكن التحكم فيه بالأدوية.' },
        { time: 'الأسبوع 4-6', title: 'التفعيل', desc: 'أول جلسة تدريبية في العيادة لتعلم كيفية تشغيل الجهاز.' },
        { time: 'الشهر 3+', title: 'الثقة الكاملة', desc: 'راحة تامة في استخدام الجهاز واستعادة العفوية.' }
      ]
    },
    timelineRU: {
      title: 'Восстановление и активация',
      steps: [
        { time: 'Неделя 1-2', title: 'Заживление', desc: 'Первоначальное заживление разрезов. Контролируемый дискомфорт с помощью лекарств.' },
        { time: 'Неделя 4-6', title: 'Активация', desc: 'Первый сеанс обучения в клинике для ознакомления с работой устройства.' },
        { time: 'Месяц 3+', title: 'Полная уверенность', desc: 'Полный комфорт при использовании устройства. Возвращение спонтанности.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'General or spinal anesthesia. Small incision made (scrotal or infrapubic).' },
      { step: '02', title: 'Implantation', desc: 'Cylinders placed in penile shaft, pump in scrotum, reservoir in abdomen.' },
      { step: '03', title: 'Testing', desc: 'Device tested intraoperatively to ensure proper function.' },
      { step: '04', title: 'Recovery', desc: 'Overnight stay. Activate device after 4-6 weeks of healing.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير', desc: 'تخدير عام أو نصفي. يتم عمل شق صغير (في كيس الصفن أو أسفل العانة).' },
      { step: '02', title: 'الزراعة', desc: 'توضع الأسطوانات في القضيب، والمضخة في كيس الصفن، والخزان في البطن.' },
      { step: '03', title: 'الاختبار', desc: 'يتم اختبار الجهاز أثناء العملية لضمان عمله بشكل سليم.' },
      { step: '04', title: 'التعافي', desc: 'إقامة ليلة واحدة. تفعيل الجهاز بعد 4-6 أسابيع من الشفاء.' }
    ],
    procedureRU: [
      { step: '01', title: 'Анестезия', desc: 'Общая или спинальная анестезия. Делается небольшой разрез (в мошонке или подлобковой области).' },
      { step: '02', title: 'Имплантация', desc: 'Цилиндры помещаются в половой член, помпа в мошонку, резервуар в брюшную полость.' },
      { step: '03', title: 'Тестирование', desc: 'Устройство тестируется во время операции для обеспечения правильной работы.' },
      { step: '04', title: 'Восстановление', desc: 'Пребывание в клинике на одну ночь. Активация устройства через 4-6 недель после заживления.' }
    ],
    faq: [
      { q: "Will it look and feel natural?", a: "Yes. When deflated, a 3-piece inflatable implant is virtually undetectable — most partners cannot tell the difference from a natural erection." },
      { q: "Will I still be able to orgasm and ejaculate normally?", a: "Yes. The implant only restores firmness. Sensation, orgasm, and ejaculation remain completely unaffected." },
      { q: "How long does a penile implant last?", a: "Current-generation implants are designed to last 15 to 20 years. If needed, the device can be replaced with a straightforward revision surgery." }
    ],
    faqAR: [
      { q: 'هل سيبدو مظهرها وملمسها طبيعياً؟', a: 'نعم. عند تفريغ الدعامة القابلة للنفخ، تكون غير قابلة للاكتشاف تقريباً — ولا تلاحظ معظم الشريكات فرقاً عن الانتصاب الطبيعي.' },
      { q: 'هل سأظل قادراً على بلوغ النشوة والقذف بشكل طبيعي؟', a: 'نعم. الدعامة تستعيد الصلابة فقط. الإحساس، والنشوة، والقذف تظل طبيعية تماماً ودون تأثر.' },
      { q: 'كم تدوم الدعامة؟', a: 'أجهزة الجيل الحالي مصممة لتستمر من 15 إلى 20 عاماً. وإذا لزم الأمر، يمكن استبدالها بجراحة بسيطة.' }
    ],
    faqRU: [
      { q: 'Будет ли это выглядеть и ощущаться естественно?', a: 'Да. В сдутом состоянии 3-компонентный имплантат практически незаметен — большинство партнеров не могут отличить его от естественной эрекции.' },
      { q: 'Смогу ли я по-прежнему испытывать оргазм и нормально эякулировать?', a: 'Да. Имплантат восстанавливает только твердость. Чувствительность, оргазм и эякуляция остаются совершенно нетронутыми.' },
      { q: 'Как долго служит имплантат?', a: 'Имплантаты нынешнего поколения рассчитаны на 15–20 лет службы. При необходимости устройство можно заменить.' }
    ]
  },
  'Dorsal Neurectomy': {
    title: 'Dorsal Neurectomy for Premature Ejaculation',
    titleAR: 'استئصال العصب الظهري لسرعة القذف',
    titleRU: 'Дорсальная нейрэктомия при преждевременной эякуляции',
    tagline: 'A Permanent Surgical Solution for Premature Ejaculation Regain Control and Extend Intimacy Naturally.',
    taglineAR: 'حل جراحي دائم لسرعة القذف: استعد السيطرة وأطل فترة العلاقة الحميمية بشكل طبيعي.',
    taglineRU: 'Постоянное хирургическое решение проблемы преждевременной эякуляции. Верните контроль и продлите близость естественным путем.',
    whatIsIt: {
      title: 'What is Dorsal Neurectomy?',
      description: "Dorsal Neurectomy (DN) is a specialized surgical procedure recognized as one of the most effective permanent treatments for Primary Premature Ejaculation (PPE). It works by addressing the root cause of PE  penile hypersensitivity  through selective recalibration of the sensory nerves. This allows men to significantly extend their intravaginal ejaculatory latency time (IELT) and regain natural control during sexual activity.",
      image: '/assets/image/services section/dorsal neurectomy/What is Dorsal Neurectomy.webp'
    },
    whatIsItAR: {
      title: 'ما هو استئصال العصب الظهري؟',
      description: 'استئصال العصب الظهري (DN) هو إجراء جراحي متخصص يُعد من أكثر العلاجات الدائمة فعالية لسرعة القذف الأولية (PPE). يعمل على معالجة السبب الجذري — فرط حساسية القضيب — من خلال إعادة معايرة انتقائية للأعصاب الحسية. يتيح ذلك للرجال زيادة وقت القذف المهبلي الكامن (IELT) بشكل كبير واستعادة السيطرة الطبيعية أثناء النشاط الجنسي.',
    },
    whatIsItRU: {
      title: 'Что такое дорсальная нейрэктомия?',
      description: 'Дорсальная нейрэктомия (ДН) — это специализированная хирургическая процедура, признанная одним из самых эффективных постоянных методов лечения первичной преждевременной эякуляции. Она устраняет первопричину ПЭ — гиперчувствительность полового члена — за счет селективной перекалибровки сенсорных нервов. Это позволяет мужчинам значительно увеличить интравагинальное латентное время эякуляции (IELT) и восстановить естественный контроль во время сексуальной активности.',
    },
    // mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "This procedure works at a neurological level to modulate the ejaculatory reflex. The goal is not to reduce pleasure, but to regulate the intensity of sensation so that ejaculation can be better controlled.\n\n**The Clinical Mechanism of Action:**\n\n1. **Targeted Nerve Identification and Selective Desensitization**: The surgeon carefully isolates the dorsal nerve bundle to identify the specific branches responsible for hypersensitivity. Using precision microsurgical instruments, a calculated portion of these peripheral nerve fibers is selectively divided. This reduces the excessive sensory input that triggers the rapid ejaculatory reflex.\n\n2. **Reflex Threshold Elevation:** By moderating the sensory signals, the biological 'trigger point' for ejaculation is raised. This means more stimulation and time are needed to reach the point of no return — giving you greater control.\n\n3. **Preservation of Function:** Importantly, the main nerve trunks remain intact. This ensures that normal tactile sensation, erection quality, and the ability to experience pleasure and orgasm are fully preserved. Only the *excess sensitivity* is addressed.",
    descriptionAR: 'يعمل هذا الإجراء على المستوى العصبي لتعديل منعكس القذف. الهدف ليس تقليل المتعة، بل تنظيم شدة الإحساس بحيث يمكن التحكم في القذف بشكل أفضل.\n\n**الآلية السريرية:**\n\n1. **تحديد العصب المستهدف وتقليل الحساسية الانتقائي:** يعزل الجراح حزمة العصب الظهري بعناية لتحديد الفروع المحددة المسؤولة عن فرط الحساسية. باستخدام أدوات جراحية دقيقة، يتم قطع جزء محسوب من هذه الألياف العصبية المحيطية بشكل انتقائي. يقلل هذا من المدخلات الحسية المفرطة التي تحفز منعكس القذف السريع.\n\n2. **رفع عتبة المنعكس:** من خلال تعديل الإشارات الحسية، يتم رفع "نقطة التحفيز" البيولوجية للقذف. هذا يعني الحاجة إلى مزيد من التحفيز والوقت للوصول إلى نقطة اللاعودة — مما يمنحك سيطرة أكبر.\n\n3. **الحفاظ على الوظيفة:** الأهم من ذلك، تظل الجذوع العصبية الرئيسية سليمة. وهذا يضمن الحفاظ بالكامل على الإحساس اللمسي الطبيعي، وجودة الانتصاب، والقدرة على تجربة المتعة والنشوة. تتم معالجة *الحساسية الزائدة* فقط.',
    descriptionRU: 'Эта процедура работает на неврологическом уровне, модулируя эякуляторный рефлекс. Цель состоит не в том, чтобы уменьшить удовольствие, а в том, чтобы регулировать интенсивность ощущений, чтобы можно было лучше контролировать эякуляцию.\n\n**Клинический механизм действия:**\n\n1. **Идентификация целевого нерва и селективная десенсибилизация**: Хирург тщательно изолирует дорсальный нервный пучок, чтобы идентифицировать определенные ветви, ответственные за гиперчувствительность. Используя точные микрохирургические инструменты, рассчитанная часть этих периферических нервных волокон избирательно рассекается. Это уменьшает чрезмерный сенсорный вход, который запускает быстрый эякуляторный рефлекс.\n\n2. **Повышение порога рефлекса:** За счет замедления сенсорных сигналов биологическая «триггерная точка» эякуляции повышается. Это означает, что требуется больше стимуляции и времени для достижения точки невозврата, что дает вам больший контроль.\n\n3. **Сохранение функции:** Важно отметить, что основные нервные стволы остаются нетронутыми. Это гарантирует полное сохранение нормальной тактильной чувствительности, качества эрекции и способности испытывать удовольствие и оргазм. Устраняется только *избыточная чувствительность*.',
    heroImage: '/assets/image/services section/dorsal neurectomy/dorsal neurectomy hero.webp',
    descriptionImage: '/assets/image/services section/dorsal neurectomy/dosal neurectomy clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Success Rate", value: "80%+", icon: Trophy },
      { label: "Surgery Time", value: "45-60 Min", icon: Timer },
      { label: "Recovery", value: "2-3 Weeks", icon: Activity },
      { label: "Effect", value: "Permanent", icon: Infinity as any }
    ],
    statsAR: [
      { label: 'معدل النجاح' },
      { label: 'وقت الجراحة' },
      { label: 'فترة التعافي' },
      { label: 'التأثير' }
    ],
    statsRU: [
      { label: 'Процент успеха' },
      { label: 'Время операции' },
      { label: 'Период восстановления' },
      { label: 'Эффект' }
    ],
    benefits: [
      { title: 'Permanent Fix', desc: 'A single procedure — no need for lifelong medication or numbing sprays.', icon: Infinity as any },
      { title: 'Improves IELT', desc: 'Intravaginal Ejaculatory Latency Time typically increases 3-5x.', icon: Timer },
      { title: 'Preserves Sensation', desc: 'Only excess sensitivity is reduced — pleasurable sensation remains.', icon: HeartPulse },
      { title: 'High Satisfaction', desc: 'Over 80% of patients report significant improvement in control.', icon: Trophy }
    ],
    benefitsRU: [
      { title: 'Постоянное решение', desc: 'Единоразовая процедура — нет необходимости в пожизненном приеме лекарств или обезболивающих спреях.' },
      { title: 'Улучшает IELT', desc: 'Интравагинальное время задержки эякуляции обычно увеличивается в 3-5 раз.' },
      { title: 'Сохраняет чувствительность', desc: 'Снижается только избыточная чувствительность — приятные ощущения остаются.' },
      { title: 'Высокая удовлетворенность', desc: 'Более 80% пациентов отмечают значительное улучшение контроля.' }
    ],
    candidates: [
      "Men with lifelong (primary) premature ejaculation that has not responded to behavioral or medication therapy.",
      "Those experiencing penile hypersensitivity that causes loss of ejaculatory control.",
      "Men looking for a permanent surgical solution without ongoing medication.",
      "Patients with IELT (Intravaginal Ejaculatory Latency Time) consistently under 1 minute."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من سرعة قذف مدى الحياة (أولية) لم تستجب للعلاج السلوكي أو الدوائي.',
      'الذين يعانون من فرط حساسية في القضيب مما يسبب فقدان السيطرة على القذف.',
      'من يبحث عن حل جراحي دائم بدون أدوية مستمرة.',
      'المرضى الذين يكون وقت القذف لديهم (IELT) باستمرار أقل من دقيقة واحدة.'
    ],
    candidatesRU: [
      'Мужчины с пожизненной (первичной) преждевременной эякуляцией, не реагирующей на поведенческую или медикаментозную терапию.',
      'Пациенты, испытывающие гиперчувствительность полового члена, которая вызывает потерю контроля над эякуляцией.',
      'Мужчины, ищущие постоянное хирургическое решение без постоянного приема лекарств.',
      'Пациенты с IELT (интравагинальным латентным временем эякуляции) стабильно менее 1 минуты.'
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "When performed by an experienced urological surgeon, complications are uncommon. Potential risks include temporary numbness at the glans (which typically resolves within weeks), infection (less than 2%), and in rare cases, mild changes in erectile sensation. The vast majority of patients retain normal sensation and full erectile function.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والآثار الجانبية',
      content: 'عندما يُجريها جراح مسالك بولية خبير، تكون المضاعفات غير شائعة. تشمل المخاطر المحتملة خدراً مؤقتاً في الحشفة (والذي يزول عادة في غضون أسابيع)، والعدوى (أقل من 2%)، وفي حالات نادرة، تغيرات خفيفة في الإحساس بالانتصاب. تحتفظ الغالبية العظمى من المرضى بإحساس طبيعي ووظيفة انتصاب كاملة.',
    },
    safetyRU: {
      title: 'Безопасность и побочные эффекты',
      content: 'При выполнении опытным хирургом-урологом осложнения возникают редко. Потенциальные риски включают временное онемение головки (которое обычно проходит в течение нескольких недель), инфекцию (менее 2%) и, в редких случаях, легкие изменения эректильной чувствительности. Подавляющее большинство пациентов сохраняют нормальную чувствительность и полную эректильную функцию.'
    },
    timeline: {
      title: "Recovery & Results",
      steps: [
        { time: "Week 1-2", title: "Initial Healing", desc: "Swelling subsides. Sexual activity restricted during healing." },
        { time: "Week 3-4", title: "Gradual Resumption", desc: "Sexual activity can be resumed. Sensitivity noticeably reduced." },
        { time: "Month 2-3", title: "Full Effect", desc: "Peak results achieved. IELT increases 3-5x baseline." }
      ]
    },
    timelineAR: {
      title: 'التعافي والنتائج',
      steps: [
        { time: 'الأسبوع 1-2', title: 'الشفاء الأولي', desc: 'يخف التورم. يُمنع النشاط الجنسي أثناء الشفاء.' },
        { time: 'الأسبوع 3-4', title: 'الاستئناف التدريجي', desc: 'يمكن استئناف النشاط الجنسي. تنخفض الحساسية بشكل ملحوظ.' },
        { time: 'الشهر 2-3', title: 'التأثير الكامل', desc: 'تحقيق أقصى النتائج. يزيد وقت القذف (IELT) بمقدار 3-5 أضعاف خط الأساس.' }
      ]
    },
    timelineRU: {
      title: 'Восстановление и результаты',
      steps: [
        { time: 'Неделя 1-2', title: 'Начальное заживление', desc: 'Отек спадает. Сексуальная активность ограничена во время заживления.' },
        { time: 'Неделя 3-4', title: 'Постепенное возобновление', desc: 'Половую жизнь можно возобновить. Чувствительность заметно снижена.' },
        { time: 'Месяц 2-3', title: 'Полный эффект', desc: 'Достигаются пиковые результаты. IELT увеличивается в 3-5 раз по сравнению с исходным.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia & Incision', desc: 'Local anesthesia is administered. A small surgical incision is made at the base of the penis near the pubic area.' },
      { step: '02', title: 'Nerve Identification', desc: 'The surgeon identifies and selectively cuts specific dorsal nerve branches to recalibrate sensitivity.' },
      { step: '03', title: 'Closure', desc: 'Incision closed with dissolvable sutures. Bandage applied.' },
      { step: '04', title: 'Follow-Up', desc: 'Healing monitored. Sexual activity resumes after 3-4 weeks.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير والشق', desc: 'يُعطى التخدير الموضعي. يُصنع شق جراحي صغير في قاعدة القضيب بالقرب من منطقة العانة.' },
      { step: '02', title: 'تحديد العصب', desc: 'يحدد الجراح ويقطع فروعاً منتقاة من العصب الظهري لإعادة ضبط الحساسية.' },
      { step: '03', title: 'الإغلاق', desc: 'يُغلق الشق بخيوط قابلة للذوبان. تُوضع ضمادة.' },
      { step: '04', title: 'المتابعة', desc: 'تتم متابعة الشفاء. يُستأنف النشاط الجنسي بعد 3-4 أسابيع.' }
    ],
    procedureRU: [
      { step: '01', title: 'Анестезия и разрез', desc: 'Вводится местная анестезия. Делается небольшой хирургический разрез у основания полового члена в области лобка.' },
      { step: '02', title: 'Идентификация нерва', desc: 'Хирург идентифицирует и избирательно перерезает определенные ветви дорсального нерва для перекалибровки чувствительности.' },
      { step: '03', title: 'Закрытие', desc: 'Разрез закрывается рассасывающимися швами. Накладывается повязка.' },
      { step: '04', title: 'Наблюдение', desc: 'Контроль заживления. Половая жизнь возобновляется через 3-4 недели.' }
    ],
    faq: [
      { q: "Will I lose sensation completely?", a: "No. The procedure selectively targets only the specific nerve branches causing hypersensitivity. Enough sensation is preserved for full sexual pleasure — only the excess is reduced." },
      { q: "Is the result really permanent?", a: "Yes. Once the selected nerve fibers are divided, they do not regenerate in the same pattern. The results are long-lasting and do not require ongoing treatment." },
      { q: "Can dorsal neurectomy affect my erections?", a: "This is very rare. The dorsal sensory nerves primarily control sensation, not erection. An experienced surgeon ensures the motor and erectile nerve pathways are fully preserved." }
    ],
    faqAR: [
      { q: 'هل سأفقد الإحساس تماماً؟', a: 'لا. يستهدف الإجراء بشكل انتقائي فروع العصب المحددة المسببة لفرط الحساسية. يُحفظ قدر كافٍ من الإحساس للمتعة الجنسية الكاملة — يتم التخلص فقط من الحساسية الزائدة.' },
      { q: 'هل النتيجة دائمة حقاً؟', a: 'نعم. بمجرد قطع الألياف العصبية المحددة، فإنها لا تتجدد بنفس النمط. النتائج طويلة الأمد ولا تتطلب علاجاً مستمراً.' },
      { q: 'هل يمكن أن يؤثر استئصال العصب الظهري على الانتصاب؟', a: 'هذا نادر جداً. الأعصاب الحسية الظهرية تتحكم بالأساس في الإحساس، وليس الانتصاب. يضمن الجراح الخبير الحفاظ الكامل على المسارات العصبية المسؤولة عن الانتصاب.' }
    ],
    faqRU: [
      { q: 'Потеряю ли я чувствительность полностью?', a: 'Нет. Процедура выборочно воздействует только на определенные ветви нервов, вызывающие гиперчувствительность. Сохраняется достаточно чувствительности для полноценного сексуального удовольствия — уменьшается только избыточная.' },
      { q: 'Действительно ли результат постоянный?', a: 'Да. После рассечения выбранных нервных волокон они не регенерируют по той же схеме. Результаты сохраняются надолго и не требуют постоянного лечения.' },
      { q: 'Может ли дорсальная нейрэктомия повлиять на мою эрекцию?', a: 'Это бывает очень редко. Дорсальные сенсорные нервы в первую очередь контролируют чувствительность, а не эрекцию. Опытный хирург гарантирует, что двигательные и эректильные нервные пути полностью сохраняются.' }
    ]
  },
  'Testosterone Replacement Therapy': {
    title: 'Testosterone Replacement Therapy (TRT)',
    titleAR: 'العلاج ببدائل التستوستيرون (TRT)',
    titleRU: 'Заместительная гормональная терапия тестостероном (ЗГТ)',
    tagline: 'Restore Your Energy, Libido, and Confidence — Medically Supervised Testosterone Optimization for Men.',
    taglineAR: 'استعد طاقتك ورغبتك الجنسية وثقتك بنفسك — تحسين هرمون التستوستيرون للرجال تحت إشراف طبي.',
    taglineRU: 'Восстановите свою энергию, либидо и уверенность в себе — медицинская оптимизация уровня тестостерона для мужчин.',
    whatIsIt: {
      title: 'What is Testosterone Replacement Therapy (TRT)?',
      description: "Testosterone Replacement Therapy (TRT) is a medically supervised treatment designed to restore testosterone levels in men with hypogonadism (clinically low testosterone). By bringing this essential hormone back to healthy physiological levels, TRT helps reverse symptoms like chronic fatigue, low libido, muscle loss, and mood changes — helping men regain their energy, mental clarity, and overall quality of life.",
      image: '/assets/image/services section/trt/what is testosterone replacement therapy.webp'
    },
    whatIsItAR: {
      title: 'ما هو العلاج ببدائل التستوستيرون (TRT)؟',
      description: 'العلاج ببدائل التستوستيرون (TRT) هو علاج طبي مصمم لاستعادة مستويات التستوستيرون لدى الرجال الذين يعانون من قصور الغدد التناسلية (انخفاض التستوستيرون سريرياً). عبر إعادة هذا الهرمون الأساسي إلى المستويات الفسيولوجية الصحية، يساعد TRT في عكس أعراض مثل التعب المزمن، وانخفاض الرغبة الجنسية، وفقدان العضلات، وتقلبات المزاج — مما يساعد الرجال على استعادة طاقتهم ووضوحهم الذهني وجودة حياتهم بشكل عام.',
    },
    whatIsItRU: {
      title: 'Что такое заместительная терапия тестостероном (ЗГТ)?',
      description: 'Заместительная терапия тестостероном (ЗГТ) — это медицинское лечение, направленное на восстановление уровня тестостерона у мужчин с гипогонадизмом (клинически низким тестостероном). Возвращая этот важный гормон к здоровому физиологическому уровню, ЗГТ помогает обратить вспять такие симптомы, как хроническая усталость, низкое либидо, потеря мышечной массы и перепады настроения, помогая мужчинам восстановить энергию, ясность ума и общее качество жизни.',
    },
    description: "TRT works by introducing bioidentical testosterone into the body to bypass the body's failing production mechanisms. The most common and effective method is via intramuscular injection.\n\n**The Clinical Mechanism of Action:**\n\n1. **Depot Formulation & Sustained Release:** Testosterone is typically administered as an esterified compound (e.g., Testosterone Cypionate or Enanthate) injected into the muscle. This creates a 'depot' or reservoir in the muscle tissue, from which testosterone is slowly hydrolyzed and released into the bloodstream over several days, ensuring stable hormone levels.\n\n2. **Receptor Binding & Activation:** Once in the bloodstream, free testosterone binds to Androgen Receptors (AR) located in various tissues throughout the body, including muscle cells, bone marrow, and the brain.\n\n3. **Genomic Action (Protein Synthesis):** The testosterone-receptor complex moves into the cell nucleus and binds to specific DNA sequences. This triggers the transcription of genes responsible for anabolic processes—stimulating protein synthesis for muscle growth, increasing red blood cell production (erythropoiesis) for better oxygenation, and enhancing neurotransmitter activity for improved mood and libido.\n\n4. **Systemic Optimization:** This cascade of biological events leads to increased lean muscle mass, reduced adipose tissue (fat), improved bone density, and a profound restoration of sexual function and energy.",
    descriptionAR: 'يعمل TRT عن طريق إدخال تستوستيرون مطابق حيوياً إلى الجسم لتجاوز آليات الإنتاج المتراجعة. الطريقة الأكثر شيوعاً وفعالية هي الحقن العضلي.\n\n**الآلية السريرية للعمل:**\n\n1. **تحضير المستودع والإصدار المستدام:** يُعطى التستوستيرون عادة كمركب مؤستر (أسترة) يُحقن في العضلة. يخلق هذا "مستودعاً" في النسيج العضلي، حيث يُحلل ويُطلق ببطء في مجرى الدم على مدى عدة أيام، مما يضمن مستويات هرمونية مستقرة.\n\n2. **الارتباط بالمستقبلات وتنشيطها:** بمجرد وصوله إلى مجرى الدم، يرتبط التستوستيرون الحر بمستقبلات الأندروجين (AR) الموجودة في أنسجة مختلفة، بما في ذلك خلايا العضلات ونخاع العظام والدماغ.\n\n3. **العمل الجيني (تخليق البروتين):** ينتقل مركب التستوستيرون والمستقبلات إلى نواة الخلية ويرتبط بتسلسلات محددة من الحمض النووي (DNA). يُحفز هذا العمليات الابتنائية — ويشجع تخليق البروتين لنمو العضلات، ويزيد من إنتاج خلايا الدم الحمراء لتحسين توصيل الأكسجين، ويعزز نشاط الناقلات العصبية لتحسين المزاج والرغبة.\n\n4. **الالتحسين الشامل للجسم:** تؤدي هذه السلسلة من الأحداث البيولوجية إلى زيادة كتلة العضلات، وانخفاض الأنسجة الدهنية (الدهون)، وتحسين كثافة العظام، واستعادة عميقة للوظيفة الجنسية والطاقة.',
    descriptionRU: 'ЗГТ работает путем введения биоидентичного тестостерона в организм, чтобы компенсировать его недостаточную выработку. Самым распространенным и эффективным методом является внутримышечная инъекция.\n\n**Клинический механизм действия:**\n\n1. **Форма депо и длительное высвобождение:** Тестостерон обычно вводится в виде этерифицированного соединения (например, тестостерона ципионат или энантат), которое вводится в мышцу. Это создает «депо» или резервуар в мышечной ткани, из которого тестостерон медленно гидролизуется и высвобождается в кровоток в течение нескольких дней, обеспечивая стабильный уровень гормонов.\n\n2. **Связывание с рецепторами и активация:** Попадая в кровоток, свободный тестостерон связывается с андрогенными рецепторами (АР), расположенными в различных тканях по всему телу, включая мышечные клетки, костный мозг и мозг.\n\n3. **Геномное действие (синтез белка):** Комплекс тестостерон-рецептор перемещается в ядро клетки и связывается со специфическими последовательностями ДНК. Это запускает транскрипцию генов, ответственных за анаболические процессы — стимулируя синтез белка для роста мышц, увеличивая выработку эритроцитов (эритропоэз) для лучшего насыщения кислородом и повышая активность нейротрансмиттеров для улучшения настроения и либидо.\n\n4. **Системная оптимизация:** Этот каскад биологических событий приводит к увеличению сухой мышечной массы, уменьшению жировой ткани (жира), улучшению плотности костей и глубокому восстановлению сексуальной функции и энергии.',
    heroImage: '/assets/image/services section/trt/trt hero.webp',
    descriptionImage: '/assets/image/services section/trt/trt clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Symptom Relief", value: "90%+", icon: Trophy },
      { label: "Time to Effect", value: "4-6 Weeks", icon: Timer },
      { label: "Treatment", value: "Ongoing", icon: Loop as any },
      { label: "Monitoring", value: "Every 3 Mo", icon: Calendar }
    ],
    statsAR: [
      { label: 'تخفيف الأعراض' },
      { label: 'وقت التأثير' },
      { label: 'مدة العلاج' },
      { label: 'المتابعة الطبية' }
    ],
    statsRU: [
      { label: 'Облегчение симптомов' },
      { label: 'Время до эффекта' },
      { label: 'Продолжительность' },
      { label: 'Мониторинг' }
    ],
    benefits: [
      { title: 'Restored Libido', desc: 'Significant improvement in sexual desire and performance.', icon: HeartPulse },
      { title: 'Energy Boost', desc: 'Enhanced vitality, reduced fatigue, improved mental clarity.', icon: Zap },
      { title: 'Muscle & Bone', desc: 'Increased muscle mass and bone density with exercise.', icon: Activity },
      { title: 'Mood Improvement', desc: 'Better mood, reduced depression and irritability.', icon: Smile as any }
    ],
    benefitsRU: [
      { title: 'Восстановление либидо', desc: 'Значительное улучшение сексуального влечения и активности.' },
      { title: 'Прилив энергии', desc: 'Повышение жизненного тонуса, снижение утомляемости, улучшение ясности ума.' },
      { title: 'Мышцы и кости', desc: 'Увеличение мышечной массы и плотности костей при физических нагрузках.' },
      { title: 'Улучшение настроения', desc: 'Улучшение настроения, уменьшение депрессии и раздражительности.' }
    ],
    candidates: [
      "Men with lab-confirmed low testosterone (total T <300 ng/dL).",
      "Symptoms: low libido, fatigue, muscle loss, depression, brain fog.",
      "Age 30+ with unexplained decline in vitality.",
      "Those seeking medically supervised hormone optimization."
    ],
    candidatesAR: [
      'الرجال الذين ثبت لديهم انخفاض التستوستيرون بالتحاليل (أقل من 300 نانوغرام/ديسيلتر).',
      'الأعراض: ضعف الرغبة الجنسية، التعب، فقدان العضلات، الاكتئاب، ضبابية الدماغ.',
      'العمر 30+ مع تراجع غير مبرر في الحيوية والنشاط.',
      'الذين يبحثون عن تحسين مستويات الهرمونات تحت إشراف طبي مدقق.'
    ],
    candidatesRU: [
      'Мужчины с лабораторно подтвержденным низким тестостероном (общий Т <300 нг/дл).',
      'Симптомы: низкое либидо, усталость, потеря мышечной массы, депрессия, затуманенность сознания.',
      'Возраст 30+ с необъяснимым снижением жизненных сил.',
      'Те, кто ищет медицинскую оптимизацию гормонального фона.'
    ],
    safety: {
      title: "Safety & Monitoring",
      content: "TRT is safe when properly supervised by a specialist. Regular blood tests monitor testosterone, estradiol, hematocrit, and PSA levels. Possible side effects include polycythemia (elevated red blood cell count), acne, and potential cardiovascular considerations — all of which are manageable with proper medical oversight and dosage adjustment.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والمتابعة الطبية',
      content: 'العلاج TRT آمن عندما يتم تحت إشراف طبيب متخصص. تراقب اختبارات الدم الدورية مستويات التستوستيرون، والاستراديول، والهيماتوكريت، و PSA. قد تشمل الآثار الجانبية زيادة إنتاج خلايا الدم الحمراء، وحب الشباب — وكلها يمكن التحكم فيها من خلال الإشراف الطبي المناسب وتعديل الجرعات.',
    },
    safetyRU: {
      title: 'Безопасность и мониторинг',
      content: 'ЗГТ безопасна при надлежащем наблюдении специалиста. Регулярные анализы крови контролируют уровень тестостерона, эстрадиола, гематокрита и ПСА. Возможные побочные эффекты включают полицитемию (повышенное количество эритроцитов), прыщи — все это поддается контролю при надлежащем медицинском наблюдении и корректировке дозировки.'
    },
    timeline: {
      title: "TRT Response Timeline",
      steps: [
        { time: "Week 2-4", title: "Initial Changes", desc: "Improved energy and mood. Sexual interest begins to return." },
        { time: "Week 6-12", title: "Physical Changes", desc: "Muscle mass increases, body fat decreases. Libido peaks." },
        { time: "Month 3+", title: "Sustained Benefits", desc: "Full hormonal optimization. Quality of life significantly improved." }
      ]
    },
    timelineAR: {
      title: 'الجدول الزمني لنتائج TRT',
      steps: [
        { time: 'الأسبوع 2-4', title: 'التغيرات الأولية', desc: 'تحسن في الطاقة والمزاج. تبدأ الرغبة الجنسية في العودة.' },
        { time: 'الأسبوع 6-12', title: 'التغيرات الجسدية', desc: 'تزداد كتلة العضلات، وتقل دهون الجسم. تبلغ الرغبة الجنسية ذروتها.' },
        { time: 'الشهر 3+', title: 'الفوائد المستدامة', desc: 'تحسين هرموني كامل. تحسن ملحوظ في جودة الحياة بشكل عام.' }
      ]
    },
    timelineRU: {
      title: 'График реакции на ЗГТ',
      steps: [
        { time: 'Неделя 2-4', title: 'Начальные изменения', desc: 'Улучшение энергии и настроения. Половое влечение начинает возвращаться.' },
        { time: 'Неделя 6-12', title: 'Физические изменения', desc: 'Мышечная масса увеличивается, жировые отложения уменьшаются. Либидо достигает пика.' },
        { time: 'Месяц 3+', title: 'Устойчивые результаты', desc: 'Полная гормональная оптимизация. Качество жизни значительно улучшилось.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Blood Testing', desc: 'Comprehensive panel: testosterone, LH, FSH, estradiol, PSA, CBC.' },
      { step: '02', title: 'Diagnosis', desc: 'Review results, symptoms, and medical history with specialist.' },
      { step: '03', title: 'Treatment Start', desc: 'Choose delivery method: injections, gels, or pellets. Begin protocol.' },
      { step: '04', title: 'Monitoring', desc: 'Regular follow-ups every 3-6 months to optimize dosage and monitor safety.' }
    ],
    procedureAR: [
      { step: '01', title: 'تحاليل الدم', desc: 'لوحة تحاليل شاملة تشمل التستوستيرون، LH، FSH، الاستراديول، PSA، وصورة الدم الكاملة.' },
      { step: '02', title: 'التشخيص', desc: 'مراجعة النتائج والأعراض والتاريخ الطبي مع الأخصائي.' },
      { step: '03', title: 'بدء العلاج', desc: 'اختيار طريقة توصيل الدواء (الحقن أو الجل أو الكبسولات) والبدء في بروتوكول العلاج.' },
      { step: '04', title: 'المتابعة', desc: 'متابعة دورية كل 3-6 أشهر لضبط الجرعات المثالية وضمان السلامة.' }
    ],
    procedureRU: [
      { step: '01', title: 'Анализ крови', desc: 'Комплексная панель: тестостерон, ЛГ, ФСГ, эстрадиол, ПСА, общий анализ крови.' },
      { step: '02', title: 'Диагноз', desc: 'Обсуждение результатов, симптомов и истории болезни со специалистом.' },
      { step: '03', title: 'Начало лечения', desc: 'Выбор метода введения (инъекции или гели). Начало протокола.' },
      { step: '04', title: 'Мониторинг', desc: 'Регулярные осмотры каждые 3-6 месяцев для оптимизации дозировки и контроля безопасности.' }
    ],
    faq: [
      { q: "Is TRT a lifelong treatment?", a: "For most men, TRT is an ongoing therapy. Stopping treatment typically causes testosterone levels to return to baseline. However, some patients may use it cyclically under careful medical supervision." },
      { q: "Does TRT increase the risk of prostate cancer?", a: "Current medical evidence does not show that TRT causes prostate cancer. However, PSA levels are regularly monitored as a standard safety precaution." },
      { q: "What is the best way to take testosterone?", a: "Injections (weekly or biweekly) are the most reliable and cost-effective option. Topical gels provide steady daily absorption but cost more. Pellets (implanted every 3-6 months) offer convenience but require a minor in-office procedure." }
    ],
    faqAR: [
      { q: 'هل TRT علاجي مدى الحياة؟', a: 'للعديد من الرجال، يُعد TRT علاجاً مستمراً. التوقف عن العلاج يؤدي عادة إلى عودة مستويات التستوستيرون إلى خط الأساس. ومع ذلك، قد يستخدم بعض المرضى دورات علاجية تحت إشراف طبي دقيق.' },
      { q: 'هل يزيد TRT من خطر الإصابة بسرطان البروستاتا؟', a: 'لا يظهر الدليل الطبي الحالي أن TRT يسبب سرطان البروستاتا. ومع ذلك، تتم مراقبة مستويات PSA بانتظام كإجراء احترازي قياسي لضمان السلامة.' },
      { q: 'ما هي أفضل طريقة لأخذ التستوستيرون؟', a: 'تعتبر الحقن (أسبوعياً أو كل أسبوعين) هي الخيار الأكثر موثوقية وفعالية من حيث التكلفة. توفر الجل الموضعية امتصاصاً يومياً ثابتاً ولكن بتكلفة أعلى.' }
    ],
    faqRU: [
      { q: 'Является ли ЗГТ пожизненным лечением?', a: 'Для большинства мужчин ЗГТ — это постоянная терапия. Прекращение лечения обычно приводит к возвращению уровня тестостерона к исходному. Однако некоторые пациенты могут использовать его циклически под тщательным медицинским наблюдением.' },
      { q: 'Увеличивает ли ЗГТ риск рака простаты?', a: 'Современные медицинские данные не показывают, что ЗГТ вызывает рак простаты. Однако уровень ПСА регулярно контролируется в качестве стандартной меры предосторожности.' },
      { q: 'Какой способ приема тестостерона лучше?', a: 'Инъекции (еженедельно или раз в две недели) являются наиболее надежным и экономичным вариантом. Гели местного применения обеспечивают постоянное ежедневное всасывание, но стоят дороже.' }
    ]
  },
  'ReZum': {
    title: 'ReZŪM Water Vapor Therapy for BPH',
    titleAR: 'علاج تضخم البروستاتا بتقنية بخار الماء (ReZŪM)',
    titleRU: 'Водно-паровая терапия ReZŪM при ДГПЖ',
    tagline: 'Minimally Invasive BPH Treatment Relieve Enlarged Prostate Symptoms Without Surgery Using Steam Therapy.',
    taglineAR: 'علاج طفيف التوغل لتضخم البروستاتا: تخفيف الأعراض دون جراحة باستخدام العلاج بالبخار.',
    taglineRU: 'Минимально инвазивное лечение ДГПЖ. Облегчите симптомы увеличенной простаты без операции с помощью терапии паром.',
    whatIsIt: {
      title: 'What is ReZŪM Water Vapor Therapy?',
      description: "ReZŪM Water Vapor Therapy is a minimally invasive, FDA-cleared procedure that uses the natural thermal energy of sterile water vapor (steam) to treat Benign Prostatic Hyperplasia (BPH). By targeting and shrinking the obstructive prostate tissue that causes urinary symptoms, ReZŪM provides lasting relief without the risks and long recovery associated with traditional prostate surgery.",
      image: '/assets/image/services section/rezum/What is ReZŪM Water Vapor Therapy.webp'
    },
    whatIsItAR: {
      title: 'ما هو العلاج بتقنية بخار الماء ReZŪM؟',
      description: 'علاج ReZŪM هو إجراء طفيف التوغل معتمد من إدارة الغذاء والدواء الأمريكية (FDA)، يستخدم الطاقة الحرارية الطبيعية لبخار الماء المعقم لعلاج تضخم البروستاتا الحميد (BPH). من خلال استهداف وتقليص أنسجة البروستاتا المسدودة التي تسبب أعراضاً بولية، يوفر ReZŪM راحة دائمة دون المخاطر وفترة التعافي الطويلة المرتبطة بجراحة البروستاتا التقليدية.',
    },
    whatIsItRU: {
      title: 'Что такое водно-паровая терапия ReZŪM?',
      description: 'Водно-паровая терапия ReZŪM — это минимально инвазивная, одобренная FDA процедура, в которой используется естественная тепловая энергия стерильного водяного пара для лечения доброкачественной гиперплазии предстательной железы (ДГПЖ). Воздействуя на ткань предстательной железы, вызывающую обструкцию мочевыводящих путей, и уменьшая ее, ReZŪM обеспечивает длительное облегчение без рисков и длительного восстановления, связанных с традиционной хирургией предстательной железы.',
    },
    description: "ReZŪM treats the enlarged prostate tissue using a precise delivery of thermal energy. The process is quick, effective, and preserves surrounding healthy tissue.\n\n**The Clinical Mechanism of Action:**\n\n1. **Quick Steam Delivery:** Sterile water vapor is injected directly into the prostate for just 9 seconds per treatment.\n\n2. **Targeted Tissue Removal:** The steam releases heat that instantly destroys the excess prostate tissue blocking the urethra, while safely preserving sexual function.\n\n3. **Natural Healing:** Over the next few weeks, your body naturally absorbs and clears away the treated tissue.\n\n4. **Fast BPH Relief:** As the prostate shrinks, the urethra opens up, significantly improving urinary flow and relieving bothersome urinary symptoms.",
    descriptionAR: 'يعالج ReZŪM أنسجة البروستاتا المتضخمة باستخدام توصيل دقيق للطاقة الحرارية. العملية سريعة وفعالة وتحافظ على الأنسجة السليمة المحيطة.\n\n**الآلية السريرية للعمل:**\n\n1. **توصيل البخار السريع:** يُحقن بخار الماء المعقم مباشرة في البروستاتا لمدة 9 ثوانٍ فقط لكل جرعة.\n\n2. **إزالة الأنسجة المستهدفة:** يُطلق البخار حرارة تقضي فوراً على أنسجة البروستاتا الزائدة التي تسد مجرى البول، مع الحفاظ الآمن على الوظيفة الجنسية.\n\n3. **الشفاء الطبيعي:** على مدى الأسابيع القليلة التالية، يمتص جسمك ويتخلص من الأنسجة الميتة بشكل طبيعي.\n\n4. **تخفيف سريع للأعراض:** مع تقلص حجم البروستاتا، ينفتح مجرى البول، مما يحسن تدفق البول بشكل كبير ويخفف الأعراض البولية المزعجة.',
    descriptionRU: 'ReZŪM лечит увеличенную ткань простаты с помощью точной подачи тепловой энергии. Процесс быстрый, эффективный и сохраняет окружающие здоровые ткани.\n\n**Клинический механизм действия:**\n\n1. **Быстрая подача пара:** Стерильный водяной пар вводится непосредственно в простату всего на 9 секунд за одну процедуру.\n\n2. **Целенаправленное удаление тканей:** Пар выделяет тепло, которое мгновенно разрушает лишнюю ткань предстательной железы, блокирующую уретру, при этом безопасно сохраняя сексуальную функцию.\n\n3. **Естественное заживление:** В течение следующих нескольких недель ваше тело естественным образом поглощает и очищает обработанную ткань.\n\n4. **Быстрое облегчение ДГПЖ:** По мере того как простата сокращается, уретра открывается, что значительно улучшает отток мочи и облегчает неприятные симптомы со стороны мочевыводящих путей.',
    heroImage: '/assets/image/services section/rezum/rezum hero.webp',
    descriptionImage: '/assets/image/services section/rezum/rezum clinical mechanism.webp',
    video: { id: 'w3lctJx4D2w', title: 'ReZŪM Water Vapor Therapy Explained' },
    stats: [
      { label: "Success Rate", value: "90%+", icon: Trophy },
      { label: "Procedure Time", value: "15 Mins", icon: Timer },
      { label: "Recovery", value: "3-7 Days", icon: Activity },
      { label: "Result Duration", value: "5+ Years", icon: Calendar }
    ],
    statsAR: [
      { label: 'معدل النجاح' },
      { label: 'وقت الإجراء' },
      { label: 'التعافي' },
      { label: 'مدة النتائج' }
    ],
    statsRU: [
      { label: 'Процент успеха' },
      { label: 'Время процедуры' },
      { label: 'Восстановление' },
      { label: 'Длительность эффекта' }
    ],
    benefits: [
      { title: 'Preserves Function', desc: 'No risk of erectile dysfunction or retrograde ejaculation.', icon: HeartPulse },
      { title: 'Rapid Relief', desc: 'Symptom improvement within 2 weeks, peak benefits at 3 months.', icon: Timer },
      { title: 'Maximum Comfort', desc: 'Performed under general anesthesia or deep sedation. Patients experience zero discomfort.', icon: ShieldCheck },
      { title: 'Durable Results', desc: 'Clinical data shows sustained results for 5+ years.', icon: Calendar }
    ],
    benefitsRU: [
      { title: 'Сохраняет функцию', desc: 'Отсутствие риска эректильной дисфункции или ретроградной эякуляции.' },
      { title: 'Быстрое облегчение', desc: 'Улучшение симптомов в течение 2 недель, максимальный эффект через 3 месяца.' },
      { title: 'Максимальный комфорт', desc: 'Проводится под общим наркозом или глубокой седацией. Пациенты не испытывают никакого дискомфорта.' },
      { title: 'Долговечные результаты', desc: 'Клинические данные показывают устойчивые результаты более 5 лет.' }
    ],
    candidates: [
      "Men with moderate to severe BPH symptoms (frequent urination, weak stream).",
      "Prostate size 30-80cc.",
      "Those unwilling to take daily BPH medications.",
      "Men prioritizing sexual function preservation."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من أعراض BPH متوسطة إلى شديدة (كثرة التبول، ضعف تدفق البول).',
      'حجم البروستاتا 30-80 سم مكعب.',
      'المرضى الذين لا يرغبون في تناول أدوية البروستاتا اليومية.',
      'الرجال الذين يضعون الحفاظ على الوظيفة الجنسية كأولوية.'
    ],
    candidatesRU: [
      'Мужчины с умеренными и тяжелыми симптомами ДГПЖ (частое мочеиспускание, слабая струя).',
      'Объем простаты 30-80 куб. см.',
      'Пациенты, не желающие ежедневно принимать лекарства от ДГПЖ.',
      'Мужчины, отдающие приоритет сохранению сексуальной функции.'
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "ReZŪM has an excellent safety profile and is FDA-cleared. Temporary side effects may include dysuria (discomfort during urination), traces of blood in the urine, or increased urgency for 1–2 weeks after the procedure. These typically resolve on their own. Importantly, ReZŪM preserves both erectile and ejaculatory function in the vast majority of patients.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والآثار الجانبية',
      content: 'يتمتع علاج ReZŪM بسجل أمان ممتاز ومصرح به من قبل الـ FDA. قد تشمل الآثار الجانبية المؤقتة عسر التبول (انزعاج أثناء التبول)، آثار دم في البول، أو زيادة الإلحاح لمدة 1-2 أسبوع بعد الإجراء. وتختفي هذه الأعراض عادةً من تلقاء نفسها. والأهم من ذلك، يحافظ ReZŪM على وظيفة الانتصاب والقذف في الغالبية العظمى من المرضى.',
    },
    safetyRU: {
      title: 'Безопасность и побочные эффекты',
      content: 'ReZŪM имеет отличный профиль безопасности и одобрен FDA. Временные побочные эффекты могут включать дизурию (дискомфорт при мочеиспускании), следы крови в моче или учащенные позывы в течение 1–2 недель после процедуры. Обычно они проходят самостоятельно. Важно отметить, что ReZŪM сохраняет как эректильную, так и эякуляторную функцию у подавляющего большинства пациентов.'
    },
    timeline: {
      title: "Recovery Timeline",
      steps: [
        { time: "Day 1-14", title: "Tissue Reabsorption", desc: "Dead tissue is absorbed. Temporary urinary symptoms may occur." },
        { time: "Week 2-4", title: "Symptom Improvement", desc: "Urinary flow begins to improve. Frequency decreases." },
        { time: "Month 3+", title: "Peak Results", desc: "Maximum benefit achieved. Sustained relief for years." }
      ]
    },
    timelineAR: {
      title: 'الجدول الزمني للتعافي',
      steps: [
        { time: 'اليوم 1-14', title: 'امتصاص الأنسجة', desc: 'يتم امتصاص الأنسجة الميتة. قد تحدث أعراض بولية مؤقتة.' },
        { time: 'الأسبوع 2-4', title: 'تحسن الأعراض', desc: 'يبدأ تدفق البول في التحسن وتقل وتيرة التردد على الحمام.' },
        { time: 'الشهر 3+', title: 'أفضل النتائج', desc: 'يتم الوصول إلى أقصى فائدة. راحة مستمرة تدوم لسنوات.' }
      ]
    },
    timelineRU: {
      title: 'График восстановления',
      steps: [
        { time: 'День 1-14', title: 'Реабсорбция тканей', desc: 'Мертвые ткани рассасываются. Могут возникнуть временные симптомы мочеиспускания.' },
        { time: 'Неделя 2-4', title: 'Улучшение симптомов', desc: 'Отток мочи начинает улучшаться. Частота снижается.' },
        { time: 'Месяц 3+', title: 'Пиковые результаты', desc: 'Достигнут максимальный эффект. Устойчивое облегчение на долгие годы.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'General anesthesia or deep sedation is administered to ensure complete patient comfort. The patient remains asleep throughout the procedure.' },
      { step: '02', title: 'Vapor Delivery', desc: 'Thin device inserted through urethra. Sterile steam injected into prostate.' },
      { step: '03', title: 'Cell Disruption', desc: 'Steam energy disrupts cells, which are naturally absorbed over weeks.' },
      { step: '04', title: 'Discharge', desc: 'Procedure ends. Catheter may be placed temporarily. Home same day.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير', desc: 'يتم التخدير العام أو التسكين العميق لضمان راحة المريض تماماً بحيث يكون نائماً طوال العملية.' },
      { step: '02', title: 'توصيل البخار', desc: 'إدخال أداة رفيعة عبر الإحليل ويتم حقن البخار المعقم إلى البروستاتا.' },
      { step: '03', title: 'إتلاف الخلايا', desc: 'تعمل طاقة البخار على تفكيك الخلايا التي يمتصها الجسم بشكل طبيعي.' },
      { step: '04', title: 'الخروج', desc: 'انتهاء الإجراء. قد يُركب قسطرة مؤقتة ويمكن العودة للمنزل في نفس اليوم.' }
    ],
    procedureRU: [
      { step: '01', title: 'Анестезия', desc: 'Применяется общая анестезия или глубокая седация, чтобы обеспечить полный комфорт пациента. Во время процедуры пациент спит.' },
      { step: '02', title: 'Подача пара', desc: 'Через уретру вводится тонкое устройство. Стерильный пар подается в простату.' },
      { step: '03', title: 'Разрушение клеток', desc: 'Энергия пара разрушает клетки, которые со временем естественным образом рассасываются.' },
      { step: '04', title: 'Выписка', desc: 'Окончание процедуры. Может быть временно установлен катетер. Выписка домой в тот же день.' }
    ],
    faq: [
      { q: "Is the ReZŪM procedure painful?", a: "No. The procedure is performed under general anesthesia or deep sedation, so you will be asleep throughout and feel no discomfort at all." },
      { q: "Will ReZŪM affect my sexual function?", a: "ReZŪM preserves both erectile function and normal ejaculation in the vast majority of patients — a key advantage over traditional prostate surgery (TURP)." },
      { q: "How long do the results of ReZŪM last?", a: "Clinical studies demonstrate sustained symptom relief for at least 5 years, with many patients experiencing benefits well beyond that timeframe." }
    ],
    faqAR: [
      { q: 'هل إجراء ReZŪM مؤلم؟', a: 'لا. يتم الإجراء تحت التخدير العام أو التسكين العميق، لذلك ستكون نائماً طوال الوقت ولن تشعر بأي ألم.' },
      { q: 'هل سيؤثر ReZŪM على وظيفتي الجنسية؟', a: 'يحافظ ReZŪM على وظيفة الانتصاب والقذف الطبيعي لدى الغالبية العظمى من المرضى — وهي ميزة رئيسية مقارنة بجراحات البروستاتا التقليدية.' },
      { q: 'كم تدوم نتائج إجراء ReZŪM؟', a: 'تُظهر الدراسات السريرية تحسناً مستمراً في الأعراض لمدة تصل إلى 5 سنوات على الأقل، ويشعر العديد من المرضى بالتحسن الجيد لفترة أطول.' }
    ],
    faqRU: [
      { q: 'Процедура ReZŪM болезненна?', a: 'Нет. Процедура проводится под общим наркозом или глубокой седацией, поэтому вы будете спать на протяжении всего процесса и не почувствуете никакого дискомфорта.' },
      { q: 'Повлияет ли ReZŪM на мою сексуальную функцию?', a: 'ReZŪM сохраняет как эректильную функцию, так и нормальную эякуляцию у подавляющего большинства пациентов — это ключевое преимущество перед традиционной операцией на предстательной железе (ТУРП).' },
      { q: 'Как долго длятся результаты ReZŪM?', a: 'Клинические исследования демонстрируют устойчивое облегчение симптомов в течение как минимум 5 лет, причем многие пациенты испытывают преимущества далеко за пределами этого срока.' }
    ]
  },
  'UroLift': {
    title: 'UroLift® System for BPH',
    titleAR: 'نظام UroLift® لتضخم البروستاتا',
    titleRU: 'Система UroLift® при ДГПЖ',
    tagline: 'Treat Enlarged Prostate Without Cutting or Heating Immediate Relief with Zero Sexual Side Effects.',
    taglineAR: 'عالج تضخم البروستاتا بدون جراحة أو حرارة: راحة فورية بلا آثار جانبية جنسية.',
    taglineRU: 'Лечите увеличенную простату без разрезов и нагревания. Немедленное облегчение без побочных эффектов для сексуальной функции.',
    whatIsIt: {
      title: 'What is UroLift®?',
      description: "The UroLift® System is a minimally invasive treatment for Benign Prostatic Hyperplasia (BPH) that offers rapid symptom relief without cutting, heating, or removing prostate tissue. It uses tiny, permanent implants to lift and hold the enlarged prostate tissue so it no longer blocks the urethra, effectively 'opening the curtains' to restore normal urine flow.",
      image: '/assets/image/services section/urolift/What is UroLift.webp'
    },
    whatIsItAR: {
      title: 'ما هو نظام UroLift®؟',
      description: 'نظام UroLift® هو علاج طفيف التوغل لتضخم البروستاتا (BPH) يوفر راحة سريعة من الأعراض دون قطع أو تسخين أو إزالة أنسجة البروستاتا. يستخدم غرسات صغيرة دائمة لرفع وشد أنسجة البروستاتا المتضخمة حتى لا تسد مجرى البول، كأنه "يفتح الستائر" لاستعادة التدفق الطبيعي للبول.',
    },
    whatIsItRU: {
      title: 'Что такое UroLift®?',
      description: 'Система UroLift® — это минимально инвазивное средство для лечения доброкачественной гиперплазии предстательной железы (ДГПЖ), которое обеспечивает быстрое облегчение симптомов без разрезания, нагревания или удаления ткани предстательной железы. В ней используются крошечные постоянные имплантаты, которые приподнимают и удерживают увеличенную ткань предстательной железы, чтобы она больше не блокировала уретру, эффективно «раздвигая шторы» для восстановления нормального оттока мочи.',
    },
    description: "UroLift is unique because it is the only BPH treatment that directly opens the urethra without ablating tissue. This mechanical approach ensures immediate results and zero risk to sexual function.\n\n**The Clinical Mechanism of Action:**\n\n1. **Transurethral Access:** The UroLift delivery device is inserted through the obstructed urethra to reach the enlarged prostate lobes. No incisions are made.\n\n2. **Mechanical Compression (Lifting):** The device compresses the lateral lobe of the prostate, pushing it away from the urethral channel. This creates an immediate opening.\n\n3. **Permanent Implantation:** A small, permanent UroLift implant is deployed. This implant acts like a suture or a 'curtain tie-back,' holding the prostate tissue in its compressed position.\n\n4. **Unobstructed Flow:** This process is repeated on each side (typically 4-6 implants total). The result is a visibly open continuous channel from the bladder neck to the verumontanum, allowing urine to flow freely again immediately after the procedure.",
    descriptionAR: 'يُعد UroLift فريداً من نوعه لأنه العلاج الوحيد لـ BPH الذي يفتح مجرى البول مباشرة دون إتلاف الأنسجة. تضمن هذه الطريقة الميكانيكية نتائج فورية وبدون أي خطر على الوظيفة الجنسية.\n\n**الآلية السريرية للعمل:**\n\n1. **الوصول عبر الإحليل:** يتم إدخال أداة التوصيل عبر الإحليل المسدود للوصول إلى فصوص البروستاتا المتضخمة. بدون إجراء أي شقوق جراحية.\n\n2. **الضغط الميكانيكي (الرفع):** تضغط الأداة على الفص الجانبي للبروستاتا، وتدفعه بعيداً عن قناة مجرى البول. مما يخلق فتحة فورية.\n\n3. **الزرع الدائم:** يتم وضع غرسة UroLift صغيرة ودائمة. تعمل هذه الغرسة كـ "مشبك" أو "مثبت ستارة"، لتثبيت أنسجة البروستاتا في وضعها المضغوط بعيداً عن المجرى.\n\n4. **تدفق حر للبول:** تتكرر هذه العملية على كل جانب (عادةً 4-6 غرسات إجمالاً). النتيجة هي قناة مفتوحة بشكل مستمر وملحوظ، مما يسمح بتدفق البول بحرية مرة أخرى فوراً بعد الإجراء.',
    descriptionRU: 'UroLift уникален тем, что это единственный метод лечения ДГПЖ, который напрямую открывает уретру без абляции тканей. Этот механический подход обеспечивает немедленные результаты и отсутствие риска для сексуальной функции.\n\n**Клинический механизм действия:**\n\n1. **Трансуретральный доступ:** Устройство доставки UroLift вводится через заблокированную уретру, чтобы достичь увеличенных долей простаты. Никаких разрезов не делается.\n\n2. **Механическое сжатие (подъем):** Устройство сжимает боковую долю простаты, отодвигая ее от мочеиспускательного канала. Это создает немедленное открытие.\n\n3. **Постоянная имплантация:** Устанавливается небольшой постоянный имплантат UroLift. Этот имплантат действует как шов или «завязка для штор», удерживая ткань предстательной железы в сжатом положении.\n\n4. **Беспрепятственный отток:** Этот процесс повторяется с каждой стороны (обычно всего 4-6 имплантатов). В результате образуется заметно открытый непрерывный канал от шейки мочевого пузыря до семенного бугорка, что позволяет моче снова свободно течь сразу после процедуры.',
    heroImage: '/assets/image/services section/urolift/urolift hero.webp',
    descriptionImage: '/assets/image/services section/urolift/urolift Clinical Mechanism.webp',
    video: { id: 'L-DXkEQaV1M', title: 'UroLift Procedure Animation' },
    stats: [
      { label: "Symptom Relief", value: "95%+", icon: Trophy },
      { label: "Time", value: "10-15 Mins", icon: Timer },
      { label: "Recovery", value: "2-4 Days", icon: Activity },
      { label: "Sexual Function", value: "Preserved", icon: HeartPulse }
    ],
    statsAR: [
      { label: 'تخفيف الأعراض' },
      { label: 'الوقت' },
      { label: 'التعافي' },
      { label: 'الوظيفة الجنسية' }
    ],
    statsRU: [
      { label: 'Облегчение симптомов' },
      { label: 'Время процедуры' },
      { label: 'Восстановление' },
      { label: 'Сексуальная функция' }
    ],
    benefits: [
      { title: 'No Cutting/Heating', desc: 'Tissue is mechanically lifted, not destroyed. Minimally invasive.', icon: CheckCircle2 },
      { title: 'Immediate Relief', desc: 'Symptom improvement within days, not weeks.', icon: Timer },
      { title: 'Zero Sexual Side Effects', desc: 'Clinical trials show no impact on erectile or ejaculatory function.', icon: HeartPulse },
      { title: 'Reversible', desc: 'Implants can be removed or adjusted if needed.', icon: Loop as any }
    ],
    benefitsRU: [
      { title: 'Без разрезов/нагрева', desc: 'Ткань приподнимается механически, а не разрушается. Минимально инвазивно.' },
      { title: 'Немедленное облегчение', desc: 'Улучшение симптомов в течение нескольких дней, а не недель.' },
      { title: 'Отсутствие сексуальных побочных эффектов', desc: 'Клинические испытания не показывают влияния на эректильную или эякуляторную функцию.' },
      { title: 'Обратимость', desc: 'Имплантаты можно удалить или отрегулировать при необходимости.' }
    ],
    comparison: {
      title: "UroLift vs. TURP (Traditional Surgery)",
      subtitle: "Minimally Invasive vs. Open Resection",
      headers: ["UroLift", "TURP"],
      items: [
        { feature: "Tissue Removal", focus: "None (tissue lifted only)", radial: "Tissue cut and removed", icon: Scissors },
        { feature: "Sexual Function Risk", focus: "0% (fully preserved)", radial: "30-65% retrograde ejaculation", icon: HeartPulse },
        { feature: "Recovery", focus: "2-4 days", radial: "2-6 weeks", icon: Activity },
        { feature: "Anesthesia", focus: "General anesthesia", radial: "General/Spinal", icon: ShieldCheck }
      ]
    },
    comparisonAR: {
      title: 'نظام UroLift مقارنة بجراحة TURP التقليدية',
      subtitle: 'تدخل طفيف مقابل استئصال مفتوح',
      headers: ['UroLift', 'جراحة TURP'],
      items: [
        { feature: 'إزالة الأنسجة', focus: 'لا يوجد (يتم رفع الأنسجة فقط)', radial: 'يتم قطع وإزالة الأنسجة' },
        { feature: 'خطر على الوظيفة الجنسية', focus: '0% (محفوظة بالكامل)', radial: '30-65% قذف مرتجع' },
        { feature: 'فترة التعافي', focus: '2-4 أيام', radial: '2-6 أسابيع' },
        { feature: 'التخدير', focus: 'تخدير عام', radial: 'تخدير عام / نصفي' }
      ]
    },
    comparisonRU: {
      title: 'UroLift против ТУРП (Традиционная хирургия)',
      subtitle: 'Минимально инвазивное против Открытой резекции',
      headers: ['UroLift', 'ТУРП'],
      items: [
        { feature: 'Удаление тканей', focus: 'Нет (ткань только приподнимается)', radial: 'Ткань разрезается и удаляется' },
        { feature: 'Риск для сексуальной функции', focus: '0% (полностью сохраняется)', radial: '30-65% ретроградная эякуляция' },
        { feature: 'Восстановление', focus: '2-4 дня', radial: '2-6 недель' },
        { feature: 'Анестезия', focus: 'Общая анестезия', radial: 'Общая / Спинальная' }
      ]
    },
    candidates: [
      "Men with moderate BPH symptoms and prostate <80cc.",
      "Sexually active men prioritizing preservation of ejaculatory function.",
      "Those seeking rapid recovery and return to activity.",
      "Patients wanting a reversible, non-destructive option."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من أعراض BPH متوسطة وحجم بروستاتا أقل من 80 مل/غرام.',
      'الرجال النشطون جنسياً والذين يمنحون الأولوية للحفاظ على وظيفة القذف.',
      'الذين يسعون لتعافي سريع والعودة للنشاط بسرعة.',
      'المرضى الذين يريدون خياراً يمكن التراجع عنه ولا يتلف الأنسجة.'
    ],
    candidatesRU: [
      'Мужчины с умеренными симптомами ДГПЖ и простатой <80 куб. см.',
      'Сексуально активные мужчины, отдающие приоритет сохранению эякуляторной функции.',
      'Те, кто ищет быстрое восстановление и возвращение к активности.',
      'Пациенты, желающие получить обратимый, неразрушающий вариант лечения.'
    ],
    safety: {
      title: "Safety Profile",
      content: "UroLift has an excellent safety profile. Mild, temporary side effects may include urgency, minor discomfort during urination, or traces of blood in the urine for a few days. In clinical trials, no cases of new-onset permanent erectile dysfunction or ejaculatory dysfunction were reported.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'مستوى السلامة',
      content: 'يتمتع UroLift بسجل أمان ممتاز. قد تشمل الآثار الجانبية الخفيفة والمؤقتة الإلحاح، انزعاجاً بسيطاً أثناء التبول، أو آثار دم في البول لبضعة أيام. في التجارب السريرية، لم يُسجل أي حالات جديدة للإصابة بضعف الانتصاب الدائم أو خلل في القذف.',
    },
    safetyRU: {
      title: 'Профиль безопасности',
      content: 'UroLift имеет отличный профиль безопасности. Легкие, временные побочные эффекты могут включать позывы к мочеиспусканию, незначительный дискомфорт при мочеиспускании или следы крови в моче в течение нескольких дней. В клинических испытаниях не сообщалось ни о каких случаях впервые возникшей постоянной эректильной или эякуляторной дисфункции.'
    },
    timeline: {
      title: "UroLift Recovery Timeline",
      steps: [
        { time: "Day 1", title: "Procedure", desc: "15-min procedure. Go home same day without a catheter in most cases." },
        { time: "Day 3-7", title: "Rapid Improvement", desc: "Urinary symptoms begin to improve quickly as the channel heals." },
        { time: "Month 1+", title: "Full Relief", desc: "Peak symptom relief achieved. Return to all activities including sexual function." }
      ]
    },
    timelineAR: {
      title: 'الجدول الزمني للتعافي من UroLift',
      steps: [
        { time: 'اليوم 1', title: 'الإجراء', desc: 'إجراء يستغرق 15 دقيقة. العودة للمنزل في نفس اليوم بدون قسطرة في معظم الحالات.' },
        { time: 'اليوم 3-7', title: 'التحسن السريع', desc: 'تبدأ الأعراض البولية في التحسن بسرعة مع شفاء القناة.' },
        { time: 'الشهر 1+', title: 'الراحة الكاملة', desc: 'تخفيف الأعراض لأقصى حد. العودة لجميع الأنشطة بما فيها الوظيفة الجنسية.' }
      ]
    },
    timelineRU: {
      title: 'График восстановления UroLift',
      steps: [
        { time: 'День 1', title: 'Процедура', desc: '15-минутная процедура. В большинстве случаев выписка домой в тот же день без катетера.' },
        { time: 'День 3-7', title: 'Быстрое улучшение', desc: 'Симптомы мочеиспускания начинают быстро улучшаться по мере заживления канала.' },
        { time: 'Месяц 1+', title: 'Полное облегчение', desc: 'Достигнуто максимальное облегчение симптомов. Возвращение ко всем видам активности, включая сексуальную функцию.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Cystoscopy', desc: 'Thin scope inserted through urethra under general anesthesia.' },
      { step: '02', title: 'Implant Placement', desc: 'Small UroLift implants placed to lift and compress obstructive tissue.' },
      { step: '03', title: 'Channel Opened', desc: 'Urinary channel widened immediately. Flow improved.' },
      { step: '04', title: 'Discharge', desc: 'Procedure complete in 10-15 minutes. Home same day.' }
    ],
    procedureAR: [
      { step: '01', title: 'تنظير المثانة', desc: 'يتم إدخال منظار رفيع عبر مجرى البول تحت التخدير العام.' },
      { step: '02', title: 'وضع الغرسة', desc: 'يُوضع مشابك UroLift الدقيقة لرفع وضغط الأنسجة المسدودة.' },
      { step: '03', title: 'فتح القناة', desc: 'يتسع مجرى البول على الفور. ويتحسن التدفق.' },
      { step: '04', title: 'الخروج', desc: 'ينتهي الإجراء في غضون 10-15 دقيقة. العودة للمنزل في نفس اليوم.' }
    ],
    procedureRU: [
      { step: '01', title: 'Цистоскопия', desc: 'Тонкий эндоскоп вводится через уретру под общим наркозом.' },
      { step: '02', title: 'Установка имплантата', desc: 'Небольшие имплантаты UroLift устанавливаются для поднятия и сжатия обструктивной ткани.' },
      { step: '03', title: 'Открытие канала', desc: 'Мочеиспускательный канал немедленно расширяется. Отток улучшается.' },
      { step: '04', title: 'Выписка', desc: 'Процедура завершается за 10-15 минут. Выписка домой в тот же день.' }
    ],
    faq: [
      { q: "How many UroLift implants are needed?", a: "Typically 4-6 implants, depending on the size and anatomy of the prostate. Your urologist will determine the optimal number during assessment." },
      { q: "Can UroLift implants be felt inside the body?", a: "No. The implants are very small and remain permanently embedded within the prostate tissue. Patients cannot feel them at all." },
      { q: "What if my prostate grows larger in the future?", a: "Additional UroLift implants can be placed, or the procedure can be combined with other BPH treatments. Since UroLift does not destroy tissue, all future treatment options remain available." }
    ],
    faqAR: [
      { q: 'كم عدد غرسات UroLift المطلوبة؟', a: 'عادة من 4-6 غرسات، اعتماداً على حجم وتشريح البروستاتا. سيحدد طبيب المسالك البولية العدد الأمثل أثناء التقييم.' },
      { q: 'هل يمكن الشعور بغرسات UroLift داخل الجسم؟', a: 'لا، الغرسات صغيرة جداً وتبقى مزروعة بشكل دائم داخل أنسجة البروستاتا. لا يمكن للمرضى الشعور بها على الإطلاق.' },
      { q: 'ماذا لو زاد حجم البروستاتا في المستقبل؟', a: 'يمكن وضع غرسات UroLift إضافية، أو دمج الإجراء مع علاجات BPH الأخرى. نظراً لأن UroLift لا يتلف الأنسجة، تظل جميع خيارات العلاج المستقبلية متاحة.' }
    ],
    faqRU: [
      { q: 'Сколько имплантатов UroLift необходимо?', a: 'Обычно 4-6 имплантатов, в зависимости от размера и анатомии простаты. Ваш уролог определит оптимальное количество во время обследования.' },
      { q: 'Ощущаются ли имплантаты UroLift внутри тела?', a: 'Нет. Имплантаты очень маленькие и остаются навсегда внедренными в ткань предстательной железы. Пациенты их совершенно не чувствуют.' },
      { q: 'Что делать, если моя простата увеличится в будущем?', a: 'Можно установить дополнительные имплантаты UroLift или совместить процедуру с другими методами лечения ДГПЖ. Поскольку UroLift не разрушает ткани, все будущие варианты лечения остаются доступными.' }
    ]
  },
  'Sexually Transmitted Infection': {
    title: 'Confidential STI Screening & Treatment',
    titleAR: 'فحص وعلاج الأمراض المنقولة جنسياً بسرية تامة',
    titleRU: 'Анонимный скрининг и лечение ИППП',
    tagline: 'Comprehensive, Discreet Care for Sexual Health.',
    taglineAR: 'رعاية شاملة وسرية لصحتك الجنسية.',
    taglineRU: 'Комплексная, конфиденциальная забота о сексуальном здоровье.',
    whatIsIt: {
      title: 'What are Sexually Transmitted Infections (STIs)?',
      description: "Sexually Transmitted Infections (STIs) are infections passed from one person to another through sexual contact. They can be caused by bacteria, viruses, or parasites. Many STIs have no immediate symptoms, making regular screening essential for early detection, effective treatment, and the prevention of long-term health complications.",
      image: '/assets/image/services section/sexually transmitted infection menu.webp'
    },
    whatIsItAR: {
      title: 'ما هي الأمراض المنقولة جنسياً (STIs)؟',
      description: 'الأمراض المنقولة جنسياً (STIs) هي عدوى تنتقل من شخص لآخر عبر الاتصال الجنسي. يمكن أن تسببها البكتيريا أو الفيروسات أو الطفيليات. العديد من هذه الأمراض لا تظهر لها أعراض فورية، مما يجعل الفحص الدوري أمراً بالغ الأهمية للاكتشاف المبكر، والعلاج الفعال، والوقاية من المضاعفات الصحية طويلة الأمد.'
    },
    whatIsItRU: {
      title: 'Что такое инфекции, передающиеся половым путем (ИППП)?',
      description: 'Инфекции, передающиеся половым путем (ИППП), — это инфекции, которые передаются от одного человека к другому при половом контакте. Они могут быть вызваны бактериями, вирусами или паразитами. Многие ИППП не имеют немедленных симптомов, поэтому регулярный скрининг необходим для раннего выявления, эффективного лечения и предотвращения долгосрочных осложнений для здоровья.'
    },
    description: "Sexually Transmitted Diseases (STDs), also known as Sexually Transmitted Infections (STIs), are caused by bacterial, viral, or parasitic infections. A crucial fact to remember is that many STDs are asymptomatic in their early stages. This means an infected person can unknowingly transmit the infection to sexual partners.",
    descriptionAR: 'الأمراض المنقولة جنسياً (STDs)، أو ما يُعرف بعدوى الأمراض المنقولة جنسياً (STIs)، تسببها البكتيريا أو الفيروسات أو الطفيليات. حقيقة حاسمة يجب تذكرها هي أن العديد من الأمراض المنقولة جنسياً تكون بدون أعراض في مراحلها المبكرة. هذا يعني أن الشخص المصاب قد ينقل العدوى للشركاء الجنسيين دون علمه.',
    descriptionRU: 'Заболевания, передающиеся половым путем (ЗППП), также известные как инфекции, передающиеся половым путем (ИППП), вызываются бактериальными, вирусными или паразитарными инфекциями. Важно помнить, что многие ЗППП протекают бессимптомно на ранних стадиях. Это означает, что инфицированный человек может неосознанно передать инфекцию сексуальным партнерам.',
    heroImage: '/assets/image/services section/sexually transmitted infection menu.webp',
    video: null,
    timeline: {
      title: "Screening & Treatment Process",
      steps: [
        { time: "Day 1", title: "Consultation", desc: "Confidential interview and sample collection (blood/urine/swab)." },
        { time: "Day 2-3", title: "Lab Analysis", desc: "Samples processed in certified labs. Professional review of results." },
        { time: "Day 4+", title: "Follow-up", desc: "Results delivered. Immediate treatment and counseling provided if needed." }
      ]
    },
    timelineAR: {
      title: 'عملية الفحص والعلاج',
      steps: [
        { time: 'اليوم 1', title: 'الاستشارة', desc: 'مقابلة سرية وجمع العينات (دم / بول / مسحة).' },
        { time: 'اليوم 2-3', title: 'تحليل المختبر', desc: 'معالجة العينات في مختبرات معتمدة. مراجعة احترافية للنتائج.' },
        { time: 'اليوم 4+', title: 'المتابعة', desc: 'تسليم النتائج. توفير العلاج الفوري والاستشارة إذا لزم الأمر.' }
      ]
    },
    timelineRU: {
      title: 'Процесс скрининга и лечения',
      steps: [
        { time: 'День 1', title: 'Консультация', desc: 'Конфиденциальная беседа и сбор образцов (кровь/моча/мазок).' },
        { time: 'День 2-3', title: 'Лабораторный анализ', desc: 'Образцы обрабатываются в сертифицированных лабораториях. Профессиональная оценка результатов.' },
        { time: 'День 4+', title: 'Наблюдение', desc: 'Выдача результатов. При необходимости предоставляется немедленное лечение и консультация.' }
      ]
    },
    diseaseTable: {
      title: 'A Comprehensive Guide to STDs',
      subtitle: 'Common Types and Early Symptoms',
      categories: [
        {
          category: '1. Bacterial STDs (Curable Infections)',
          tagColor: 'emerald',
          curable: true,
          diseases: [
            {
              name: 'Gonorrhea & Chlamydia',
              icon: FlaskConical,
              symptoms: 'Painful urination (dysuria), unusual penile or vaginal discharge (often cloudy, yellow, or green). Women may also experience abnormal vaginal bleeding, pelvic pain, or a strong vaginal odor.'
            },
            {
              name: 'Syphilis',
              icon: ScanLine,
              symptoms: 'Primary: A single, painless sore (chancre) at the site of infection (genitals, mouth, or anus). Secondary: Skin rashes (palms of hands and soles of feet), fever, and swollen lymph nodes. If untreated, latent syphilis can cause severe, irreversible damage to the nervous system and internal organs.'
            }
          ]
        },
        {
          category: '2. Viral STDs (Treatable & Manageable)',
          tagColor: 'rose',
          curable: false,
          diseases: [
            {
              name: 'Genital Herpes (HSV)',
              icon: AlertCircle,
              symptoms: 'Outbreaks of itchy, painful blisters or sores in the genital or anal area. When blisters break, they leave shallow, tender ulcers. Outbreaks can recur, often triggered by stress or a weakened immune system.'
            },
            {
              name: 'Genital Warts (HPV)',
              icon: Hexagon,
              symptoms: 'Small, flesh-colored, or pink bumps in the genital area, thighs, or anus that may take on a cauliflower-like appearance. Typically painless but can cause itching or discomfort.'
            },
            {
              name: 'HIV',
              icon: ShieldCheck,
              symptoms: 'Within 2-4 weeks of exposure: flu-like symptoms including fever, sore throat, fatigue, and swollen lymph nodes. Often followed by a clinical latency stage with no symptoms. Without antiretroviral therapy (ART), the virus progressively damages the immune system.'
            },
            {
              name: 'Hepatitis B (HBV)',
              icon: Flame,
              symptoms: 'Chronic fatigue, loss of appetite, nausea, abdominal pain (upper right quadrant), dark urine, and jaundice (yellowing of the skin and the whites of the eyes).'
            }
          ]
        },
        {
          category: '3. Parasitic STDs (Curable Infections)',
          tagColor: 'sky',
          curable: true,
          diseases: [
            {
              name: 'Trichomoniasis',
              icon: Droplets,
              symptoms: 'Women: frothy, yellow-green vaginal discharge with a strong, foul odor, intense vaginal itching, and painful urination. Men: frequently asymptomatic but may experience mild irritation inside the urethra or a slight discharge.'
            }
          ]
        }
      ]
    },
    diseaseTableAR: {
      title: 'دليل شامل للأمراض المنقولة جنسياً',
      subtitle: 'الأنواع الشائعة والأعراض المبكرة',
      categories: [
        {
          category: '1. أمراض جنسية بكتيرية (قابلة للشفاء)',
          diseases: [
            {
              name: 'السيلان والكلاميديا',
              symptoms: 'ألم عند التبول، إفرازات غير عادية من القضيب أو المهبل (غالباً ما تكون عكرة، صفراء، أو خضراء). قد تعاني النساء أيضاً من نزيف مهبلي غير طبيعي، ألم في الحوض، أو رائحة مهبلية قوية.'
            },
            {
              name: 'الزهري',
              symptoms: 'المرحلة الأولى: قرحة واحدة غير مؤلمة في مكان الإصابة. المرحلة الثانية: طفح جلدي (على باطن اليدين والقدمين)، حمى، وتضخم الغدد الليمفاوية. إذا ترك دون علاج، يمكن أن يسبب أضراراً لا رجعة فيها للجهاز العصبي والأعضاء الداخلية.'
            }
          ]
        },
        {
          category: '2. أمراض جنسية فيروسية (قابلة للسيطرة)',
          diseases: [
            {
              name: 'هربس الأعضاء التناسلية (HSV)',
              symptoms: 'ظهور بثور أو تقرحات تسبب الحكة والألم في المنطقة التناسلية أو الشرج. عندما تنفجر البثور، تترك قروحاً سطحية. يمكن أن تتكرر النوبات، غالباً بسبب الإجهاد.'
            },
            {
              name: 'الثآليل التناسلية (HPV)',
              symptoms: 'نتوءات صغيرة بلون الجلد أو وردية في منطقة الأعضاء التناسلية أو الفخذين أو الشرج، قد تتخذ شكل القرنبيط. عادة غير مؤلمة ولكن يمكن أن تسبب حكة أو انزعاجاً.'
            },
            {
              name: 'فيروس نقص المناعة البشرية (HIV)',
              symptoms: 'خلال 2-4 أسابيع من التعرض: أعراض تشبه الأنفلونزا تشمل الحمى، التهاب الحلق، التعب، وتضخم الغدد الليمفاوية. غالباً ما تتبعها مرحلة كمون. بدون علاج (ART)، يدمر الفيروس جهاز المناعة تدريجياً.'
            },
            {
              name: 'التهاب الكبد ب (HBV)',
              symptoms: 'تعب مزمن، فقدان الشهية، غثيان، ألم في البطن (الربع العلوي الأيمن)، بول داكن، ويرقان (اصفرار الجلد وبياض العينين).'
            }
          ]
        },
        {
          category: '3. أمراض طفيلية (قابلة للشفاء)',
          diseases: [
            {
              name: 'داء المشعرات (Trichomoniasis)',
              symptoms: 'النساء: إفرازات مهبلية رغوية صفراء وخضراء ذات رائحة قوية وكريهة، حكة مهبلية شديدة، وألم عند التبول. الرجال: لا تظهر أعراض غالباً ولكن قد يشعر بتهيج في الإحليل أو إفرازات خفيفة.'
            }
          ]
        }
      ]
    },
    diseaseTableRU: {
      title: 'Комплексное руководство по ЗППП',
      subtitle: 'Распространенные типы и ранние симптомы',
      categories: [
        {
          category: '1. Бактериальные ЗППП (излечимые инфекции)',
          diseases: [
            {
              name: 'Гонорея и хламидиоз',
              symptoms: 'Болезненное мочеиспускание (дизурия), необычные выделения из полового члена или влагалища (часто мутные, желтые или зеленые). У женщин также могут наблюдаться аномальные вагинальные кровотечения, боль в области таза или сильный вагинальный запах.'
            },
            {
              name: 'Сифилис',
              symptoms: 'Первичный: одиночная безболезненная язва (шанкр) в месте инфекции (гениталии, рот или задний проход). Вторичный: кожная сыпь (ладони и подошвы), лихорадка и увеличение лимфатических узлов. Если его не лечить, скрытый сифилис может вызвать серьезное, необратимое повреждение нервной системы и внутренних органов.'
            }
          ]
        },
        {
          category: '2. Вирусные ЗППП (поддающиеся лечению и контролю)',
          diseases: [
            {
              name: 'Генитальный герпес (ВПГ)',
              symptoms: 'Вспышки зудящих, болезненных волдырей или язв в области гениталий или анального отверстия. Когда волдыри лопаются, они оставляют неглубокие, болезненные язвы. Вспышки могут повторяться, часто провоцируемые стрессом или ослабленной иммунной системой.'
            },
            {
              name: 'Остроконечные кондиломы (ВПЧ)',
              symptoms: 'Небольшие бугорки телесного или розового цвета в области гениталий, бедер или заднего прохода, которые могут иметь вид цветной капусты. Обычно безболезненны, но могут вызывать зуд или дискомфорт.'
            },
            {
              name: 'ВИЧ',
              symptoms: 'В течение 2-4 недель после заражения: симптомы, похожие на грипп, включая лихорадку, боль в горле, усталость и увеличение лимфатических узлов. Часто за этим следует стадия клинической латентности без симптомов. Без антиретровирусной терапии (АРТ) вирус постепенно разрушает иммунную систему.'
            },
            {
              name: 'Гепатит В (ВГВ)',
              symptoms: 'Хроническая усталость, потеря аппетита, тошнота, боль в животе (в правом верхнем квадранте), темная моча и желтуха (пожелтение кожи и белков глаз).'
            }
          ]
        },
        {
          category: '3. Паразитарные ЗППП (излечимые инфекции)',
          diseases: [
            {
              name: 'Трихомониаз',
              symptoms: 'У женщин: пенистые, желто-зеленые выделения из влагалища с сильным неприятным запахом, сильный зуд во влагалище и болезненное мочеиспускание. У мужчин: часто протекает бессимптомно, но может наблюдаться легкое раздражение внутри уретры или небольшие выделения.'
            }
          ]
        }
      ]
    },
    benefits: [
      { title: '100% Confidential', desc: 'Complete privacy. Results shared only with you.', icon: ShieldCheck },
      { title: 'Comprehensive Testing', desc: 'Screens for HIV, syphilis, gonorrhea, chlamydia, HPV, and more.', icon: Microscope },
      { title: 'Same-Day Treatment', desc: 'Many STIs can be treated immediately after diagnosis.', icon: Timer },
      { title: 'Partner Notification', desc: 'Anonymous partner notification services available.', icon: Users }
    ],
    benefitsRU: [
      { title: '100% Конфиденциально', desc: 'Полная конфиденциальность. Результаты передаются только вам.' },
      { title: 'Комплексное тестирование', desc: 'Скрининг на ВИЧ, сифилис, гонорею, хламидиоз, ВПЧ и многое другое.' },
      { title: 'Лечение в тот же день', desc: 'Многие ИППП можно лечить сразу после постановки диагноза.' },
      { title: 'Уведомление партнера', desc: 'Доступны услуги анонимного уведомления партнера.' }
    ],
    candidates: [
      "Anyone with new sexual partners or multiple partners.",
      "Individuals with symptoms (discharge, pain, sores, rash).",
      "Those seeking routine sexual health screening.",
      "Partners of individuals diagnosed with an STI."
    ],
    candidatesAR: [
      'أي شخص لديه شركاء جنسيون جدد أو متعددون.',
      'الأفراد الذين يعانون من أعراض (إفرازات، ألم، تقرحات، طفح جلدي).',
      'أولئك الذين يسعون لفحص روتيني للصحة الجنسية.',
      'شركاء الأشخاص الذين تم تشخيص إصابتهم بمرض منقول جنسياً.'
    ],
    candidatesRU: [
      'Любой человек с новыми сексуальными партнерами или несколькими партнерами.',
      'Лица с симптомами (выделения, боль, язвы, сыпь).',
      'Лица, нуждающиеся в регулярном скрининге сексуального здоровья.',
      'Партнеры лиц, у которых диагностирована ИППП.'
    ],
    safety: {
      title: "Privacy & Confidentiality",
      content: "We adhere to the strictest confidentiality standards. All test results and treatments are private. We offer anonymous testing options if preferred.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'الخصوصية والسرية',
      content: 'نحن نلتزم بأشد معايير السرية المطلقة. جميع نتائج الفحوصات والعلاجات خاصة جداً. كما نوفر خيارات الفحص المجهول (بدون اسم) إذا كنت تفضل ذلك.',
    },
    safetyRU: {
      title: 'Приватность и конфиденциальность',
      content: 'Мы придерживаемся самых строгих стандартов конфиденциальности. Все результаты анализов и методы лечения конфиденциальны. При желании мы предлагаем варианты анонимного тестирования.'
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Discuss symptoms, sexual history, and risk factors confidentially.' },
      { step: '02', title: 'Testing', desc: 'Blood, urine, or swab samples collected based on risk profile.' },
      { step: '03', title: 'Diagnosis', desc: 'Results typically available within 24-72 hours (some rapid tests same-day).' },
      { step: '04', title: 'Treatment', desc: 'Antibiotics or antivirals prescribed. Partner notification and follow-up arranged.' }
    ],
    procedureAR: [
      { step: '01', title: 'الاستشارة', desc: 'مناقشة الأعراض، التاريخ الجنسي، وعوامل الخطر بسرية تامة.' },
      { step: '02', title: 'إجراء الفحوصات', desc: 'يتم أخذ عينات دم أو بول أو مسحات بناءً على تقييم مستوى الخطر.' },
      { step: '03', title: 'التشخيص', desc: 'النتائج تتوفر عادة خلال 24-72 ساعة (بعض الاختبارات السريعة تظهر في نفس اليوم).' },
      { step: '04', title: 'العلاج', desc: 'صرف المضادات الحيوية أو مضادات الفيروسات. يتم ترتيب إبلاغ الشريك والمتابعة اللازمة.' }
    ],
    procedureRU: [
      { step: '01', title: 'Консультация', desc: 'Конфиденциальное обсуждение симптомов, сексуального анамнеза и факторов риска.' },
      { step: '02', title: 'Тестирование', desc: 'Взятие образцов крови, мочи или мазка на основе профиля риска.' },
      { step: '03', title: 'Диагноз', desc: 'Результаты обычно доступны в течение 24-72 часов (некоторые экспресс-тесты — в тот же день).' },
      { step: '04', title: 'Лечение', desc: 'Назначаются антибиотики или противовирусные препараты. Организуется уведомление партнера и последующее наблюдение.' }
    ],
    faq: [
      { q: "Is testing painful?", a: "No. Most tests involve a simple blood draw or urine sample. Some may require a swab, which causes minimal discomfort." },
      { q: "How soon can I get results?", a: "Rapid HIV tests give results in 20 minutes. Other tests typically return within 24-72 hours." },
      { q: "Can STIs be cured?", a: "Many bacterial STIs (chlamydia, gonorrhea, syphilis) are curable with antibiotics. Viral STIs (HIV, herpes, HPV) are manageable but not curable." }
    ],
    faqAR: [
      { q: 'هل الفحص مؤلم؟', a: 'لا، فمعظم الاختبارات تتضمن سحب دم بسيط أو عينة بول. القليل منها قد يتطلب مسحة بسيطة تسبب انزعاجاً خفيفاً جداً وكما يجب.' },
      { q: 'متى سأحصل على النتائج؟', a: 'تظهر نتائج الاختبارات السريعة لفيروس نقص المناعة البشرية خلال 20 دقيقة. وتستغرق باقي الاختبارات عادة 24-72 ساعة.' },
      { q: 'هل يمكن الشفاء من الأمراض المنقولة جنسياً؟', a: 'يمكن علاج العديد من الأمراض البكتيرية (مثل الكلاميديا، السيلان، والزهري) بالمضادات الحيوية. أما الأمراض الفيروسية (مثل فيروس نقص المناعة البشرية، الهربس، وفيروس الورم الحليمي) فيمكن السيطرة عليها وإدارتها طبياً لكنها لا تشفى تماماً.' }
    ],
    faqRU: [
      { q: 'Анализы — это больно?', a: 'Нет. Большинство анализов включают простой забор крови или образец мочи. Некоторые могут потребовать мазка, что вызывает минимальный дискомфорт.' },
      { q: 'Как скоро я получу результаты?', a: 'Экспресс-тесты на ВИЧ дают результаты через 20 минут. Другие тесты обычно готовы в течение 24-72 часов.' },
      { q: 'Можно ли вылечить ИППП?', a: 'Многие бактериальные ИППП (хламидиоз, гонорея, сифилис) излечимы с помощью антибиотиков. Вирусные ИППП (ВИЧ, герпес, ВПЧ) поддаются контролю, но не излечимы.' }
    ]
  },
  'Stone Disease': {
    title: 'Kidney & Bladder Stone Treatment (Laser Lithotripsy)',
    titleAR: 'علاج حصوات الكلى والمثانة (تفتيت الحصى بالليزر)',
    titleRU: 'Лечение камней в почках и мочевом пузыре (лазерная литотрипсия)',
    tagline: 'Advanced Holmium Laser Lithotripsy Minimally Invasive Kidney and Bladder Stone Removal Without Open Surgery.',
    taglineAR: 'تفتيت حصى الكلى والمثانة بالليزر هولميوم المتقدم والتدخل الجراحي الطفيف بدون جراحة مفتوحة.',
    taglineRU: 'Усовершенствованная гольмиевая лазерная литотрипсия Минимально инвазивное удаление камней из почек и мочевого пузыря без открытой хирургии.',
    description: "Modern laser lithotripsy uses advanced Holmium lasers to fragment kidney and bladder stones into fine dust, which is then extracted or passed naturally. This minimally invasive approach eliminates the need for open surgery, offering rapid recovery and excellent success rates.",
    descriptionAR: 'يستخدم تفتيت الحصى بالليزر الحديث أشعة ليزر هولميوم المتقدمة لتفتيت حصوات الكلى والمثانة إلى غبار ناعم، يتم استخراجه أو خروجه بشكل طبيعي. تقضي هذه الطريقة طفيفة التوغل على الحاجة إلى الجراحة المفتوحة، مما يوفر تعافياً سريعاً ومعدلات نجاح ممتازة.',
    descriptionRU: 'Современная лазерная литотрипсия использует передовые гольмиевые лазеры для дробления камней в почках и мочевом пузыре в мелкую пыль, которая затем извлекается или выходит естественным путем. Этот минимально инвазивный подход устраняет необходимость в открытой операции, обеспечивая быстрое восстановление и отличные показатели успеха.',
    heroImage: '/assets/image/services section/stone disease menu.webp',
    whatIsIt: {
      title: 'What is Laser Lithotripsy for Stone Disease?',
      description: "Laser lithotripsy is a minimally invasive surgical procedure used to treat stones in the kidney, ureter, or bladder. Using a thin, flexible scope (ureteroscope) passed through the body's natural openings, the urologist uses a Holmium laser to break stones into tiny fragments or fine dust all without making a single incision.",
      image: '/assets/image/services section/stone disease menu.webp'
    },
    whatIsItAR: {
      title: 'ما هو تفتيت الحصى بالليزر؟',
      description: 'تفتيت الحصى بالليزر هو إجراء جراحي طفيف التوغل يستخدم لعلاج حصوات الكلى أو الحالب أو المثانة. باستخدام منظار رفيع ومرن (منظار الحالب) يتم إمراره عبر الفتحات الطبيعية للجسم، يستخدم طبيب المسالك البولية ليزر هولميوم لتكسير الحصوات إلى شظايا صغيرة أو غبار ناعم، كل ذلك دون إجراء شق واحد.'
    },
    whatIsItRU: {
      title: 'Что такое лазерная литотрипсия при мочекаменной болезни?',
      description: 'Лазерная литотрипсия — это минимально инвазивная хирургическая процедура, используемая для лечения камней в почках, мочеточнике или мочевом пузыре. Используя тонкий гибкий эндоскоп (уретероскоп), вводимый через естественные отверстия тела, уролог использует гольмиевый лазер, чтобы разбить камни на мельчайшие фрагменты или мелкую пыль, не делая ни одного разреза.'
    },
    video: null,
    stats: [
      { label: "Success Rate", value: "95%+", icon: Trophy },
      { label: "Surgery Time", value: "30-90 Mins", icon: Timer },
      { label: "Hospital Stay", value: "Same Day", icon: Activity },
      { label: "Recovery", value: "3-5 Days", icon: Calendar }
    ],
    statsAR: [
      { label: 'معدل النجاح' },
      { label: 'وقت الجراحة' },
      { label: 'البقاء في المستشفى' },
      { label: 'التعافي' }
    ],
    statsRU: [
      { label: 'Успешность' },
      { label: 'Время операции' },
      { label: 'Пребывание в больнице' },
      { label: 'Восстановление' }
    ],
    benefits: [
      { title: 'Minimally Invasive', desc: 'No incisions. Performed through natural urinary passages.', icon: Target },
      { title: 'High Success', desc: '95%+ stone-free rate for stones up to 2cm.', icon: Trophy },
      { title: 'Same-Day Discharge', desc: 'Most patients go home within hours of procedure.', icon: Timer },
      { title: 'Precise Fragmentation', desc: 'Laser pulverizes stones into powder for easy elimination.', icon: Zap }
    ],
    benefitsRU: [
      { title: 'Минимально инвазивно', desc: 'Никаких разрезов. Выполняется через естественные мочевыводящие пути.' },
      { title: 'Высокая успешность', desc: 'Уровень избавления от камней 95%+ для камней до 2 см.' },
      { title: 'Выписка в тот же день', desc: 'Большинство пациентов отправляются домой через несколько часов после процедуры.' },
      { title: 'Точное дробление', desc: 'Лазер превращает камни в порошок для легкого выведения.' }
    ],
    candidates: [
      "Patients with kidney or ureteral stones >5mm.",
      "Those experiencing severe pain, infection, or obstruction.",
      "Individuals with stones that won't pass naturally.",
      "Patients seeking minimally invasive treatment over open surgery."
    ],
    candidatesAR: [
      'المرضى الذين يعانون من حصوات الكلى أو الحالب أكبر من 5 ملم.',
      'أولئك الذين يعانون من ألم شديد، التهاب، أو انسداد.',
      'الأفراد المصابون بحصوات لا تنزل بشكل طبيعي.',
      'المرضى الذين يفضلون العلاج طفيف التوغل بدلاً من الجراحة المفتوحة.'
    ],
    candidatesRU: [
      'Пациенты с камнями в почках или мочеточниках >5 мм.',
      'Лица, испытывающие сильную боль, инфекцию или обструкцию.',
      'Люди с камнями, которые не выходят естественным путем.',
      'Пациенты, предпочитающие минимально инвазивное лечение открытой операции.'
    ],
    safety: {
      title: "Safety & Complications",
      content: "Laser lithotripsy has an excellent safety profile when performed by an experienced urologist. Minor risks include temporary hematuria (blood in urine), urinary urgency, or mild flank discomfort for a few days. Serious complications such as perforation or stricture are rare, occurring in fewer than 2% of cases.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والمضاعفات المحتملة',
      content: 'يتمتع تفتيت الحصى بالليزر بسجل أمان ممتاز عند إجرائه بواسطة طبيب مسالك بولية متمرس. قد تشمل المخاطر البسيطة بول دموي مؤقت (دم في البول)، إلحاح بولي، أو انزعاج خفيف في الجانب لبضعة أيام. المضاعفات الخطيرة مثل الثقب أو التضيق نادرة جداً.',
    },
    safetyRU: {
      title: 'Безопасность и возможные осложнения',
      content: 'Лазерная литотрипсия имеет отличный профиль безопасности, когда выполняется опытным урологом. Незначительные риски включают временную гематурию (кровь в моче), позывы к мочеиспусканию или легкий дискомфорт в боку в течение нескольких дней. Серьезные осложнения, такие как перфорация или стриктура, редки и возникают менее чем в 2% случаев.'
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'General or spinal anesthesia. Patient asleep or numb from waist down.' },
      { step: '02', title: 'Ureteroscopy', desc: 'Flexible scope inserted through urethra, bladder, and up ureter to stone.' },
      { step: '03', title: 'Laser Fragmentation', desc: 'Holmium laser breaks stone into fine fragments. Pieces extracted or left to pass.' },
      { step: '04', title: 'Stent Placement', desc: 'Temporary ureteral stent may be placed to aid healing. Removed in 1-2 weeks.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير', desc: 'تخدير عام أو نصفي. المريض نائم أو خدران من الخصر إلى الأسفل.' },
      { step: '02', title: 'تنظير الحالب', desc: 'إدخال منظار مرن عبر مجرى البول والمثانة وصولاً إلى مكان الحصوة.' },
      { step: '03', title: 'تفتيت الحصى', desc: 'يقوم ليزر هولميوم بتكسير الحصوة إلى فتات ناعم يتم استخراجه أو يُترك لينزل مع البول.' },
      { step: '04', title: 'تركيب الدعامة', desc: 'قد يتم وضع دعامة حالبية مؤقتة للمساعدة في الشفاء، وتُزال خلال أسبوع إلى أسبوعين.' }
    ],
    procedureRU: [
      { step: '01', title: 'Анестезия', desc: 'Общая или спинальная анестезия. Пациент спит или не чувствует ничего ниже пояса.' },
      { step: '02', title: 'Уретероскопия', desc: 'Гибкий эндоскоп вводится через уретру, мочевой пузырь и вверх по мочеточнику к камню.' },
      { step: '03', title: 'Лазерное дробление', desc: 'Гольмиевый лазер разбивает камень на мелкие фрагменты. Кусочки извлекаются или оставляются для самостоятельного выхода.' },
      { step: '04', title: 'Установка стента', desc: 'Для помощи в заживлении может быть установлен временный мочеточниковый стент. Удаляется через 1-2 недели.' }
    ],
    timeline: {
      title: "Recovery & Follow-up",
      steps: [
        { time: "Week 1", title: "Passing Dust", desc: "Initial recovery. Fine stone dust may pass in urine. Mild discomfort." },
        { time: "Week 2", title: "Stent Removal", desc: "Temporary stent is removed in an office visit. Immediate relief." },
        { time: "Month 1", title: "Clearance Confirmation", desc: "Follow-up imaging to confirm stone-free status and ensure complete clearance." }
      ]
    },
    timelineAR: {
      title: 'مرحلة التعافي والمتابعة',
      steps: [
        { time: 'الأسبوع 1', title: 'خروج الفتات', desc: 'مرحلة التعافي الأولى. قد يخرج فتات الحصى مع البول. انزعاج خفيف.' },
        { time: 'الأسبوع 2', title: 'إزالة الدعامة', desc: 'تتم إزالة الدعامة المؤقتة في زيارة للعيادة، لشعور سريع بالراحة.' },
        { time: 'الشهر 1', title: 'تأكيد النظافة', desc: 'تصوير للمتابعة لتأكيد خلو المسالك من الحصوات تماماً.' }
      ]
    },
    timelineRU: {
      title: 'Восстановление и наблюдение',
      steps: [
        { time: 'Неделя 1', title: 'Выход пыли', desc: 'Начальное восстановление. Мелкая каменная пыль может выходить с мочой. Легкий дискомфорт.' },
        { time: 'Неделя 2', title: 'Удаление стента', desc: 'Временный стент удаляется во время визита в клинику. Немедленное облегчение.' },
        { time: 'Месяц 1', title: 'Подтверждение очищения', desc: 'Контрольное сканирование для подтверждения отсутствия камней и обеспечения полного очищения.' }
      ]
    },
    faq: [
      { q: "Does laser lithotripsy require any incisions?", a: "No. The entire procedure is performed through the urethra using a thin scope. There are no external cuts or incisions." },
      { q: "Will I need a ureteral stent after the procedure?", a: "In many cases, yes. A temporary stent helps drainage and prevents swelling. It is removed during a brief office visit after 1–2 weeks." },
      { q: "Can all kidney stones be treated with laser lithotripsy?", a: "Most kidney and ureteral stones can be effectively treated with laser. Very large stones (over 3cm) may require a different approach such as PCNL (percutaneous nephrolithotomy)." }
    ],
    faqAR: [
      { q: 'هل يتطلب إجراء تفتيت الحصى بالليزر أي شقوق؟', a: 'لا، الإجراء يتم بالكامل عبر مجرى البول باستخدام منظار رفيع، ولا توجد أي شقوق أو جروح خارجية.' },
      { q: 'هل سأحتاج إلى دعامة حالبية بعد العملية؟', a: 'في كثير من الحالات، نعم. تساعد الدعامة المؤقتة في التصريف وتمنع التورم. وتتم إزالتها في زيارة سريعة للعيادة بعد 1-2 أسبوع.' },
      { q: 'هل يمكن علاج جميع حصوات الكلى بالليزر؟', a: 'يمكن علاج معظم حصوات الكلى والحالب بفعالية بالليزر. الحصوات الكبيرة جداً (أكثر من 3 سم) قد تتطلب نهجاً مختلفاً.' }
    ],
    faqRU: [
      { q: 'Требует ли лазерная литотрипсия каких-либо разрезов?', a: 'Нет. Вся процедура выполняется через уретру с помощью тонкого эндоскопа. Никаких внешних разрезов или надрезов нет.' },
      { q: 'Понадобится ли мне мочеточниковый стент после процедуры?', a: 'Во многих случаях да. Временный стент помогает оттоку и предотвращает отек. Его удаляют во время короткого визита в клинику через 1–2 недели.' },
      { q: 'Все ли камни в почках можно лечить с помощью лазерной литотрипсии?', a: 'Большинство камней в почках и мочеточниках можно эффективно лечить лазером. Очень большие камни (более 3 см) могут потребовать другого подхода, такого как ЧНЛ (чрескожная нефролитотомия).' }
    ]
  },
  'Urinary Symptoms': {
    title: 'Comprehensive Urinary Symptom Diagnosis & Management',
    titleAR: 'التشخيص الشامل وعلاج أعراض المسالك البولية',
    titleRU: 'Комплексная диагностика и лечение урологических симптомов',
    tagline: 'Expert Diagnosis for Frequent Urination, Weak Stream, Urgency, Incontinence, and Painful Urination.',
    taglineAR: 'تشخيص الخبراء للتبول المتكرر، ضعف التدفق، الإلحاح، سلس البول، والألم عند التبول.',
    taglineRU: 'Экспертная диагностика частого мочеиспускания, слабой струи, позывов, недержания и болезненного мочеиспускания.',
    description: "Urological conditions encompass a wide range of disorders affecting the urinary tract including the kidneys, ureters, bladder, and urethra in both men and women. In men, urology also covers reproductive organ and prostate health. Early detection and consulting a urologist are critical for effective treatment and preventing long-term complications.",
    descriptionAR: 'تشمل حالات المسالك البولية مجموعة واسعة من الاضطرابات التي تؤثر على الكلى والحالبين والمثانة والإحليل لدى كل من الرجال والنساء. بالنسبة للرجال، يغطي طب المسالك البولية أيضًا صحة الأعضاء التناسلية والبروستاتا. يعتبر الاكتشاف المبكر واستشارة أخصائي أمراض المسالك البولية أمرًا بالغ الأهمية للعلاج الفعال وتجنب المضاعفات طويلة الأمد.',
    descriptionRU: 'Урологические заболевания включают широкий спектр расстройств, поражающих мочевыводящие пути, включая почки, мочеточники, мочевой пузырь и уретру, как у мужчин, так и у женщин. У мужчин урология также охватывает здоровье репродуктивных органов и простаты. Раннее выявление и консультация уролога имеют решающее значение для эффективного лечения и предотвращения долгосрочных осложнений.',
    heroImage: '/assets/image/services section/Urinary Symptoms menu.webp',
    whatIsIt: {
      title: 'What are Common Urinary Symptoms?',
      description: "Urinary symptoms, also known as Lower Urinary Tract Symptoms (LUTS), include a range of issues such as frequent urination, urgency, weak stream, and nocturia. These symptoms can be caused by various conditions, including BPH, infections, or bladder issues. Understanding the root cause is the first step toward effective management and relief.",
      image: '/assets/image/services section/Urinary Symptoms menu.webp'
    },
    whatIsItAR: {
      title: 'ما هي الأعراض البولية الشائعة؟',
      description: 'تشمل الأعراض البولية أو ما يُعرف بأعراض المسالك البولية السفلية (LUTS) مجموعة من المشكلات مثل كثرة التبول، الإلحاح، ضعف التدفق، التبول الليلي وغيرها. يمكن أن تحدث بسبب تضخم البروستاتا أو الالتهابات أو مشاكل المثانة. فهم السبب الجذري هو الخطوة الأولى نحو الإدارة الفعالة.'
    },
    whatIsItRU: {
      title: 'Каковы общие урологические симптомы?',
      description: 'Урологические симптомы, также известные как симптомы нижних мочевыводящих путей (СНМП), включают в себя ряд проблем, таких как частое мочеиспускание, позывы, слабая струя и ноктурия. Эти симптомы могут быть вызваны различными состояниями, включая ДГПЖ, инфекции или проблемы с мочевым пузырем. Понимание первопричины — это первый шаг к эффективному лечению и облегчению состояния.'
    },
    video: null,
    diseaseTable: {
      title: 'A Comprehensive Guide to Common Urological Diseases',
      subtitle: 'Early Symptoms and Warning Signs',
      categories: [
        {
          category: '1. Urinary Tract Infections (UTIs)',
          tagColor: 'emerald',
          curable: true,
          diseases: [
            {
              name: 'Cystitis (Bladder Infection)',
              icon: Droplets,
              symptoms: 'A frequent or urgent need to urinate, a painful burning sensation during urination (dysuria), pelvic discomfort, feeling like the bladder isn\'t empty, or cloudy, blood-tinged urine (hematuria).'
            },
            {
              name: 'Pyelonephritis (Kidney Infection)',
              icon: Flame,
              symptoms: 'High fever, severe chills, intense flank pain (pain in the upper back and sides), nausea, and vomiting, often accompanied by painful urination.'
            }
          ]
        },
        {
          category: '2. Urinary Tract Stones (Urolithiasis)',
          tagColor: 'rose',
          curable: true,
          diseases: [
            {
              name: 'Kidney & Ureteral Stones',
              icon: Hexagon,
              symptoms: 'Severe, sharp, fluctuating pain in the back or side (flank pain) that may radiate to the lower abdomen, groin, or testicles. Other signs include pink, red, or brown urine, and occasionally passing small stone fragments.'
            },
            {
              name: 'Bladder Stones',
              icon: Box,
              symptoms: 'Difficulty urinating, an interrupted urine stream, dull lower abdominal pain, and frequent, small amounts of urine.'
            }
          ]
        },
        {
          category: '3. Prostate Diseases (Men\'s Urological Health)',
          tagColor: 'sky',
          curable: false,
          diseases: [
            {
              name: 'BPH (Enlarged Prostate)',
              icon: Target,
              symptoms: 'A weak or slow urinary stream, difficulty starting urination, feeling that the bladder is not completely empty, frequent urination (especially at night — nocturia), and dribbling at the end of urination.'
            },
            {
              name: 'Prostate Cancer',
              icon: AlertCircle,
              symptoms: 'Often asymptomatic in its early stages. As the tumor grows and presses against the urethra, it causes symptoms similar to BPH. Advanced stages may cause deep bone pain in the lower back, hips, or thighs.'
            }
          ]
        },
        {
          category: '4. Bladder Control Conditions',
          tagColor: 'emerald',
          curable: false,
          diseases: [
            {
              name: 'Overactive Bladder (OAB)',
              icon: Zap,
              symptoms: 'A sudden, uncontrollable urge to urinate that may lead to involuntary urine leakage (urge incontinence). Individuals with OAB often need to urinate more than eight times during the day and wake up multiple times at night, without any underlying infection.'
            }
          ]
        }
      ]
    },
    diseaseTableAR: {
      title: 'دليل شامل لأمراض المسالك البولية الشائعة',
      subtitle: 'الأعراض المبكرة وعلامات التحذير',
      categories: [
        {
          category: '1. التهابات المسالك البولية (UTIs)',
          diseases: [
            {
              name: 'التهاب المثانة (Cystitis)',
              symptoms: 'حاجة متكررة أو ملحة للتبول، ألم وحرقة أثناء التبول، انزعاج في الحوض، شعور بعدم إفراغ المثانة بشكل كامل، أو بول غائم أو به دم.'
            },
            {
              name: 'التهاب الحويضة والكلية (Kidney Infection)',
              symptoms: 'حمى عالية، قشعريرة شديدة، ألم حاد في الجانب أو الجزء العلوي من الظهر، غثيان وقيء، وغالبًا ما يرافق ذلك ألم أثناء التبول.'
            }
          ]
        },
        {
          category: '2. حصوات المسالك البولية (Urolithiasis)',
          diseases: [
            {
              name: 'حصوات الكلى والحالب',
              symptoms: 'ألم شديد وحاد متقلب في الظهر أو الجانب (ألم الخاصرة) وقد يمتد إلى أسفل البطن أو الفخذين. من العلامات الأخرى: بول وردي أو أحمر أو بني، وخروج قطع حصى صغيرة أحياناً.'
            },
            {
              name: 'حصوات المثانة',
              symptoms: 'صعوبة في التبول، تقطع تدفق البول، ألم خفيف أسفل البطن، وتبول متكرر بكميات صغيرة.'
            }
          ]
        },
        {
          category: '3. أمراض البروستاتا (صحة الرجال)',
          diseases: [
            {
              name: 'تضخم البروستاتا الحميد (BPH)',
              symptoms: 'ضعف تدفق البول، صعوبة في البدء بالتبول، الشعور بعدم إفراغ المثانة، كثرة التبول (خاصة في الليل)، وقطرات في نهاية التبول.'
            },
            {
              name: 'سرطان البروستاتا',
              symptoms: 'غالباً بدون أعراض في مراحله المبكرة. مع نمو الورم يمكن أن يسبب أعراضاً مشابهة لتضخم البروستاتا. المراحل المتقدمة قد تسبب ألماً عميقاً في الظهر أو الفخذين.'
            }
          ]
        },
        {
          category: '4. حالات التحكم في المثانة',
          diseases: [
            {
              name: 'فرط نشاط المثانة (OAB)',
              symptoms: 'رغب مفاجئة لا يمكن السيطرة عليها للتبول قد تؤدي إلى تسرب البول اللاإرادي. غالباً ما يحتاج المريض للتبول أكثر من ثماني مرات خلال اليوم والاستيقاظ عدة مرات ليلاً، دون أي التهاب.'
            }
          ]
        }
      ]
    },
    diseaseTableRU: {
      title: 'Комплексное руководство по распространенным урологическим заболеваниям',
      subtitle: 'Ранние симптомы и тревожные признаки',
      categories: [
        {
          category: '1. Инфекции мочевыводящих путей (ИМП)',
          diseases: [
            {
              name: 'Цистит (инфекция мочевого пузыря)',
              symptoms: 'Частые или сильные позывы к мочеиспусканию, болезненное жжение во время мочеиспускания (дизурия), дискомфорт в области таза, ощущение, что мочевой пузырь не пуст, или мутная моча с примесью крови (гематурия).'
            },
            {
              name: 'Пиелонефрит (инфекция почек)',
              symptoms: 'Высокая температура, сильный озноб, сильная боль в боку (боль в верхней части спины и боках), тошнота и рвота, часто сопровождающиеся болезненным мочеиспусканием.'
            }
          ]
        },
        {
          category: '2. Камни в мочевыводящих путях (уролитиаз)',
          diseases: [
            {
              name: 'Камни в почках и мочеточниках',
              symptoms: 'Сильная, острая, колеблющаяся боль в спине или боку (боль в боку), которая может иррадиировать в нижнюю часть живота, пах или яички. Другие признаки включают розовую, красную или коричневую мочу, а иногда и отхождение мелких фрагментов камней.'
            },
            {
              name: 'Камни в мочевом пузыре',
              symptoms: 'Затрудненное мочеиспускание, прерывистая струя мочи, тупая боль внизу живота и частое выделение небольшого количества мочи.'
            }
          ]
        },
        {
          category: '3. Заболевания простаты (мужское урологическое здоровье)',
          diseases: [
            {
              name: 'ДГПЖ (увеличенная простата)',
              symptoms: 'Слабая или медленная струя мочи, трудности с началом мочеиспускания, ощущение, что мочевой пузырь опорожнен не полностью, частое мочеиспускание (особенно ночью — ноктурия) и подтекание мочи в конце мочеиспускания.'
            },
            {
              name: 'Рак простаты',
              symptoms: 'Часто протекает бессимптомно на ранних стадиях. По мере роста опухоли и давления на уретру появляются симптомы, похожие на ДГПЖ. На поздних стадиях могут возникать глубокие боли в костях поясницы, бедер или таза.'
            }
          ]
        },
        {
          category: '4. Состояния контроля над мочевым пузырем',
          diseases: [
            {
              name: 'Гиперактивный мочевой пузырь (ГАМП)',
              symptoms: 'Внезапные, неконтролируемые позывы к мочеиспусканию, которые могут привести к непроизвольному подтеканию мочи (ургентное недержание). Людям с ГАМП часто приходится мочиться более восьми раз в течение дня и просыпаться несколько раз за ночь при отсутствии каких-либо сопутствующих инфекций.'
            }
          ]
        }
      ]
    },
    benefits: [
      { title: 'Comprehensive Evaluation', desc: 'Detailed history, physical exam, uroflowmetry, and imaging.', icon: Search },
      { title: 'Root Cause Diagnosis', desc: 'Identify underlying issues: BPH, infection, overactive bladder, neurogenic, etc.', icon: Microscope },
      { title: 'Tailored Treatment', desc: 'Personalized plan: medications, behavioral therapy, or minimally invasive procedures.', icon: Target },
      { title: 'Improved QOL', desc: 'Restore normalcy and confidence with effective symptom relief.', icon: HeartPulse }
    ],
    benefitsRU: [
      { title: 'Комплексное обследование', desc: 'Подробный анамнез, физический осмотр, урофлоуметрия и визуализация.' },
      { title: 'Диагностика первопричины', desc: 'Выявление основных проблем: ДГПЖ, инфекция, гиперактивный мочевой пузырь, нейрогенные проблемы и т.д.' },
      { title: 'Индивидуальное лечение', desc: 'Персонализированный план: лекарства, поведенческая терапия или минимально инвазивные процедуры.' },
      { title: 'Улучшение качества жизни', desc: 'Восстановление нормального состояния и уверенности с эффективным облегчением симптомов.' }
    ],
    candidates: [
      "Men experiencing frequent urination (>8 times/day).",
      "Those with urgency, nocturia (nighttime urination >2x), or weak stream.",
      "Patients suffering from urinary incontinence (leakage).",
      "Individuals with painful urination or pelvic discomfort."
    ],
    candidatesAR: [
      'الرجال الذين يعانون من كثرة التبول (أكثر من 8 مرات في اليوم).',
      'الذين يعانون من الإلحاح البولي، زيادة التبول الليلي (أكثر من مرتين)، أو التدفق الضعيف.',
      'المرضى الذين يعانون من سلس البول (التسرب).',
      'الأشخاص الذين يعانون من ألم أثناء التبول أو انزعاج في منطقة الحوض.'
    ],
    candidatesRU: [
      'Мужчины с частым мочеиспусканием (>8 раз/день).',
      'Те, у кого наблюдаются частые позывы, ноктурия (ночное мочеиспускание >2 раз) или слабая струя.',
      'Пациенты, страдающие недержанием мочи (подтеканием).',
      'Лица с болезненным мочеиспусканием или дискомфортом в области таза.'
    ],
    timeline: {
      title: "Diagnostic & Care Pathway",
      steps: [
        { time: "Day 1", title: "Initial Workup", desc: "Uroflowmetry, ultrasound, and detailed symptom assessment." },
        { time: "Week 1-2", title: "Targeted Therapy", desc: "Commence medication or behavioral plan based on primary cause." },
        { time: "Month 1+", title: "Management", desc: "Follow-up to assess symptom relief and adjust therapy for long-term control." }
      ]
    },
    timelineAR: {
      title: 'مسار التشخيص والرعاية',
      steps: [
        { time: 'اليوم 1', title: 'التقييم الأولي', desc: 'قياس تدفق البول، الموجات فوق الصوتية، وتقييم شامل للأعراض.' },
        { time: 'أسبوع 1-2', title: 'العلاج المستهدف', desc: 'بدء خطة دوائية أو سلوكية بناءً على المسبب الرئيسي.' },
        { time: 'شهر 1+', title: 'الإدارة', desc: 'متابعة لتقييم تحسن الأعراض وتعديل العلاج للسيطرة طويلة الأمد.' }
      ]
    },
    timelineRU: {
      title: 'Путь диагностики и лечения',
      steps: [
        { time: 'День 1', title: 'Первичное обследование', desc: 'Урофлоуметрия, УЗИ и детальная оценка симптомов.' },
        { time: 'Неделя 1-2', title: 'Целенаправленная терапия', desc: 'Начало приема лекарств или плана поведенческой терапии в зависимости от основной причины.' },
        { time: 'Месяц 1+', title: 'Управление', desc: 'Последующее наблюдение для оценки облегчения симптомов и корректировки терапии для долгосрочного контроля.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Detailed History', desc: 'Discuss symptom onset, severity, triggers, and impact on daily life.' },
      { step: '02', title: 'Physical Exam', desc: 'Abdominal and digital rectal exam to assess prostate and bladder.' },
      { step: '03', title: 'Diagnostics', desc: 'Uroflowmetry, post-void residual, urinalysis, and imaging as needed.' },
      { step: '04', title: 'Treatment Plan', desc: 'Address root cause with medications, lifestyle changes, or procedures.' }
    ],
    procedureAR: [
      { step: '01', title: 'تاريخ طبي مفصل', desc: 'مناقشة بداية الأعراض، شدتها، محفزاتها وتأثيرها على الحياة اليومية.' },
      { step: '02', title: 'الفحص البدني', desc: 'فحص للبطن والمستقيم لتقييم البروستاتا والمثانة.' },
      { step: '03', title: 'التشخيص', desc: 'قياس تدفق البول، فحص بول، تصوير، وتحديد كمية البول المتبقية في المثانة.' },
      { step: '04', title: 'خطة العلاج', desc: 'معالجة السبب الجذري بالأدوية، تغيير نمط الحياة، أو الإجراءات الطبية.' }
    ],
    procedureRU: [
      { step: '01', title: 'Подробный анамнез', desc: 'Обсуждение начала появления симптомов, их тяжести, триггеров и влияния на повседневную жизнь.' },
      { step: '02', title: 'Физический осмотр', desc: 'Осмотр брюшной полости и пальцевое ректальное исследование для оценки состояния простаты и мочевого пузыря.' },
      { step: '03', title: 'Диагностика', desc: 'Урофлоуметрия, определение объема остаточной мочи, анализ мочи и визуализация по мере необходимости.' },
      { step: '04', title: 'План лечения', desc: 'Устранение первопричины с помощью лекарств, изменения образа жизни или процедур.' }
    ],
    faq: [
      { q: "What causes frequent urination in men?", a: "Common causes include BPH (enlarged prostate), overactive bladder (OAB), urinary tract infection (UTI), diabetes, or excessive fluid intake. A proper evaluation is needed to identify the specific cause." },
      { q: "Is urinary incontinence a normal part of aging?", a: "No. While urinary incontinence becomes more common with age, it is not inevitable and is often treatable with medication, behavioral therapy, or minimally invasive procedures." },
      { q: "What is uroflowmetry and how does it work?", a: "Uroflowmetry is a simple, non-invasive test that measures your urine flow rate and volume. You urinate into a special device that records the data, helping your urologist assess bladder and prostate function." }
    ],
    faqAR: [
      { q: 'ما الذي يسبب كثرة التبول عند الرجال؟', a: 'الأسباب الشائعة تشمل تضخم البروستاتا (BPH)، فرط نشاط المثانة (OAB)، التهاب المسالك البولية (UTI)، السكري، أو الإفراط في شرب السوائل. التقييم السليم ضروري لتحديد السبب.' },
      { q: 'هل سلس البول جزء طبيعي من الشيخوخة؟', a: 'لا، على الرغم من أن سلس البول يصبح أكثر شيوعاً مع تقدم العمر، إلا أنه ليس حتمياً وغالباً ما يكون قابلاً للعلاج بالأدوية، العلاج السلوكي، أو بإجراءات طفيفة التوغل.' },
      { q: 'ما هو قياس تدفق البول (Uroflowmetry) وكيف يعمل؟', a: 'هو اختبار بسيط وغير جراحي يقيس معدل وحجم تدفق البول. تتبول ببساطة في جهاز خاص يسجل البيانات، مما يساعد الطبيب على تقييم وظيفة المثانة والبروستاتا.' }
    ],
    faqRU: [
      { q: 'Что вызывает частое мочеиспускание у мужчин?', a: 'Распространенные причины включают ДГПЖ (увеличение простаты), гиперактивный мочевой пузырь (ГАМП), инфекцию мочевыводящих путей (ИМП), диабет или чрезмерное потребление жидкости. Для выявления конкретной причины необходимо надлежащее обследование.' },
      { q: 'Является ли недержание мочи нормальной частью старения?', a: 'Нет. Хотя недержание мочи становится более распространенным с возрастом, оно не является неизбежным и часто поддается лечению с помощью лекарств, поведенческой терапии или минимально инвазивных процедур.' },
      { q: 'Что такое урофлоуметрия и как она работает?', a: 'Урофлоуметрия — это простой неинвазивный тест, который измеряет скорость и объем оттока мочи. Вы мочитесь в специальное устройство, которое записывает данные, помогая вашему урологу оценить функцию мочевого пузыря и простаты.' }
    ]
  },
  'Circumcision': {
    title: 'Child & Adult Circumcision',
    titleAR: 'ختان الأطفال والبالغين',
    titleRU: 'Обрезание у детей и взрослых',
    tagline: 'Stapler and Standard Circumcision for Adults and Children Minimal Bleeding, Fast Recovery, and Clean Cosmetic Results.',
    taglineAR: 'الختان بالدباسة (Stapler) والختان بالليزر للبالغين والأطفال مع نزيف أقل، تعافي سريع، ونتائج تجميلية نظيفة.',
    taglineRU: 'Обрезание степлером и стандартное обрезание для взрослых и детей Минимальное кровотечение, быстрое восстановление и аккуратный косметический результат.',
    whatIsIt: {
      title: 'Types of Medical Circumcision: Stapler vs. Standard',
      description: "We offer two primary methods for circumcision, tailored to patient needs and age:\n\n1. **Stapler Circumcision (ZSR):** A modern, innovative technique using a disposable device that cuts and staples simultaneously. It offers a faster procedure (10-15 mins), minimal bleeding, and a superior cosmetic result with a smooth, even scar line.\n\n2. **Standard Circumcision (Conventional):** The traditional surgical method using manual excision and absorbable sutures. This technique allows for precise customization of foreskin removal and is suitable for all complex cases.",
      image: '/assets/image/services section/circumcision/Types of Medical Circumcision.webp'
    },
    whatIsItAR: {
      title: 'أنواع الختان الطبي: الدباسة مقابل الطريقة القياسية',
      description: 'نقدم طريقتين أساسيتين للختان، مصممة خصيصاً لاحتياجات المريض وعمره:\n\n1. **الختان بالدباسة (ZSR):** تقنية حديثة ومبتكرة تستخدم جهازاً يقطع ويدبس في نفس الوقت. توفر عملية أسرع (10-15 دقيقة)، نزيف أقل، ونتيجة تجميلية ممتازة مع خط ندبة أملس ومتساوٍ.\n\n2. **الختان القياسي (التقليدي):** الطريقة الجراحية التقليدية باستخدام الاستئصال اليدوي والغرز القابلة للامتصاص. تسمح هذه التقنية بتخصيص دقيق لإزالة القلفة ومناسبة لجميع الحالات المعقدة.'
    },
    whatIsItRU: {
      title: 'Виды медицинского обрезания: Степлер против Стандарта',
      description: 'Мы предлагаем два основных метода обрезания, адаптированных к потребностям и возрасту пациента:\n\n1. **Обрезание степлером (ZSR):** Современная инновационная методика с использованием одноразового устройства, которое одновременно разрезает и сшивает. Она обеспечивает более быструю процедуру (10-15 минут), минимальное кровотечение и превосходный косметический результат с гладкой, ровной линией рубца.\n\n2. **Стандартное обрезание (традиционное):** Традиционный хирургический метод с использованием ручного иссечения и рассасывающихся швов. Этот метод позволяет точно настроить объем удаляемой крайней плоти и подходит для всех сложных случаев.'
    },
    description: "Circumcision is a common procedure performed for both medical and personal reasons. Understanding the indications and benefits can help you make an informed decision.\n\n**Indications: Why is Circumcision Necessary?**\n\n*   **Phimosis:** Inability to retract the foreskin, causing pain and hygiene issues.\n*   **Paraphimosis:** A urologic emergency where retracted foreskin becomes trapped behind the glans.\n*   **Recurrent Balanitis/Balanoposthitis:** Frequent infection and inflammation of the glans and foreskin.\n*   **Lichen Sclerosus:** A skin condition causing scarring and tightening of the foreskin.\n\n**Medical Benefits of Circumcision:**\n\n*   **Improved Hygiene:** Removes the area where smegma and bacteria accumulate, making cleaning easier.\n*   **Reduced Infection Risk:** Significantly lowers the risk of Urinary Tract Infections (UTIs) and Sexually Transmitted Infections (STIs), including HIV and HPV.\n*   **Cancer Prevention:** Lower risk of penile cancer and reduced cervical cancer risk in female partners.\n*   **Aesthetic Preference:** Many men prefer the cleaner look and feel.",
    descriptionAR: 'الختان هو إجراء شائع يتم إجراؤه لأسباب طبية وشخصية. فهم الدواعي والفوائد يمكن أن يساعدك في اتخاذ قرار مستنير.\n\n**دواعي الإجراء: لماذا الختان ضروري؟**\n\n* **الشبم (Phimosis):** عدم القدرة على سحب القلفة، مما يسبب ألماً ومشاكل في النظافة.\n* **الداء الدرهمي (Paraphimosis):** حالة طارئة في المسالك البولية حيث تعلق القلفة خلف الحشفة.\n* **التهاب الحشفة المتكرر:** عدوى والتهاب متكرر في الحشفة والقلفة.\n* **الحزاز المتصلب:** حالة جلدية تسبب تندب وشد القلفة.\n\n**الفوائد الطبية للختان:**\n\n* **نظافة أفضل:** يزيل المنطقة التي تتراكم فيها البكتيريا (اللخن)، مما يسهل التنظيف.\n* **تقليل خطر العدوى:** يقلل بشكل كبير من خطر التهابات المسالك البولية والأمراض المنقولة جنسياً.\n* **الوقاية من السرطان:** يقلل من خطر الإصابة بسرطان القضيب وسرطان عنق الرحم للزوجة.\n* **تفضيل جمالي:** يفضل العديد من الرجال المظهر والشعور الأنظف.',
    descriptionRU: 'Обрезание — это распространенная процедура, выполняемая как по медицинским, так и по личным причинам. Понимание показаний и преимуществ может помочь вам принять обоснованное решение.\n\n**Показания: Почему обрезание необходимо?**\n\n* **Фимоз:** Невозможность оттянуть крайнюю плоть, что вызывает боль и проблемы с гигиеной.\n* **Парафимоз:** Урологическая неотложная ситуация, когда оттянутая крайняя плоть защемляется за головкой полового члена.\n* **Рецидивирующий баланит/баланопостит:** Частое инфицирование и воспаление головки и крайней плоти.\n* **Склероатрофический лихен:** Кожное заболевание, вызывающее рубцевание и стягивание крайней плоти.\n\n**Медицинские преимущества обрезания:**\n\n* **Улучшение гигиены:** Устраняет область, где скапливается смегма и бактерии, облегчая очистку.\n* **Снижение риска инфекций:** Значительно снижает риск инфекций мочевыводящих путей (ИМП) и инфекций, передающихся половым путем (ИППП), включая ВИЧ и ВПЧ.\n* **Профилактика рака:** Снижение риска рака полового члена и снижение риска рака шейки матки у партнерш.\n* **Эстетические предпочтения:** Многие мужчины предпочитают более чистый внешний вид и ощущения.',
    heroImage: '/assets/image/services section/circumcision/circumcision hero.webp',
    descriptionImage: '/assets/image/services section/circumcision/circumcision clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Satisfaction", value: "95%+", icon: Trophy },
      { label: "Procedure Time", value: "15 Mins", icon: Timer },
      { label: "Downtime", value: "7-10 Days", icon: Activity },
      { label: "Healing", value: "3-4 Weeks", icon: Calendar }
    ],
    statsAR: [
      { label: 'الرضا' },
      { label: 'وقت الإجراء' },
      { label: 'فترة النقاهة' },
      { label: 'الالتئام' }
    ],
    statsRU: [
      { label: 'Удовлетворенность' },
      { label: 'Время процедуры' },
      { label: 'Время простоя' },
      { label: 'Заживление' }
    ],
    benefits: [
      { title: 'Fast & Precise', desc: '15-minute procedure with consistent, symmetrical results.', icon: Timer },
      { title: 'Minimal Bleeding', desc: 'Instant staple-based hemostasis reduces blood loss.', icon: ShieldCheck },
      { title: 'Superior Aesthetics', desc: 'Clean, even scar line with excellent cosmetic outcome.', icon: CheckCircle2 },
      { title: 'Reduced Pain', desc: 'Less tissue trauma compared to traditional methods.', icon: Smile as any }
    ],
    benefitsRU: [
      { title: 'Быстро и точно', desc: '15-минутная процедура с последовательными, симметричными результатами.' },
      { title: 'Минимальное кровотечение', desc: 'Мгновенный гемостаз на основе скоб снижает кровопотерю.' },
      { title: 'Превосходная эстетика', desc: 'Чистая, ровная линия рубца с отличным косметическим результатом.' },
      { title: 'Снижение боли', desc: 'Меньшая травматизация тканей по сравнению с традиционными методами.' }
    ],
    candidates: [
      "Adults seeking circumcision for religious, cultural, or medical reasons.",
      "Men with phimosis (tight foreskin) or recurrent balanitis.",
      "Those prioritizing cosmetic appearance and fast recovery.",
      "Patients wanting a modern, low-complication procedure."
    ],
    candidatesAR: [
      'الرجال البالغون الذين يفضلون شكلاً أكثر نظافة وراحة لتعزيز النظافة الشخصية.',
      'الأفراد الذين يعانون من الشبم، حيث تضيق القلفة وتصعب الرؤية أو النظافة.',
      'المصابون بالتهاب الحشفة أو التهابات القلفة المتكررة.',
      'الآباء الذين يرغبون في ختان أطفالهم لأسباب صحية أو دينية أو وقائية.'
    ],
    candidatesRU: [
      'Взрослые, желающие сделать обрезание по религиозным, культурным или медицинским причинам.',
      'Мужчины с фимозом (узкой крайней плотью) или рецидивирующим баланитом.',
      'Те, для кого важен косметический вид и быстрое восстановление.',
      'Пациенты, желающие современную процедуру с низким риском осложнений.'
    ],
    safety: {
      title: "Safety & Complications",
      content: "Stapler circumcision is very safe. Risks include minor bleeding, infection (<2%), or swelling. Serious complications are rare. Staples dissolve or fall off naturally within 2-3 weeks.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والاحتياطات',
      content: 'يعد الختان إجراءً آمناً جداً وعالي الكفاءة، ويزداد أمانه مع استخدام طريقة الدباسة الحديثة التي تقلل النزيف وفرص العدوى. يُجرى تحت التخدير الموضعي، وقد يحدث تورم طفيف كاستجابة طبيعية يزول خلال أيام قليلة.',
    },
    safetyRU: {
      title: 'Безопасность и осложнения',
      content: 'Обрезание степлером очень безопасно. Риски включают незначительное кровотечение, инфекцию (<2%) или отек. Серьезные осложнения редки. Скобы растворяются или отпадают естественным образом в течение 2-3 недель.'
    },
    timeline: {
      title: "Recovery Timeline",
      steps: [
        { time: "Day 1-7", title: "Initial Healing", desc: "Swelling and mild discomfort. Keep area clean and dry." },
        { time: "Week 2-3", title: "Scar Formation", desc: "Staples dissolve. Scar line forms. Swelling subsides." },
        { time: "Week 4+", title: "Full Recovery", desc: "Sexual activity can resume. Final cosmetic result visible." }
      ]
    },
    timelineAR: {
      title: 'مراحل الشفاء المتوقعة',
      steps: [
        { time: 'اليوم 1-3', title: 'العناية الأولية', desc: 'راحة تامة مع العناية بالجرح وإبقائه جافاً، قد يتواجد تورم خفيف.' },
        { time: 'أسبوع 1-2', title: 'تساقط الدبابيس', desc: 'تبدأ الدبابيس أو الخيوط بالتساقط تلقائياً، ويسمح بالاستحمام الطبيعي.' },
        { time: 'شهر 1', title: 'الشفاء التام', desc: 'التعافي الكامل واستئناف الأنشطة بما فيها النشاط الجنسي بصورتها الطبيعية.' }
      ]
    },
    timelineRU: {
      title: 'Сроки восстановления',
      steps: [
        { time: 'День 1-7', title: 'Начальное заживление', desc: 'Отек и легкий дискомфорт. Держите область чистой и сухой.' },
        { time: 'Неделя 2-3', title: 'Формирование рубца', desc: 'Скобы растворяются. Формируется линия рубца. Отек спадает.' },
        { time: 'Неделя 4+', title: 'Полное восстановление', desc: 'Можно возобновить сексуальную активность. Виден окончательный косметический результат.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'Local anesthesia (ring block). Patient remains awake, area is numb.' },
      { step: '02', title: 'Stapler Application', desc: 'Disposable stapler device cuts and staples foreskin in one motion.' },
      { step: '03', title: 'Hemostasis Check', desc: 'Bleeding controlled immediately via staples. Dressing applied.' },
      { step: '04', title: 'Discharge', desc: 'Patient goes home same day with care instructions.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير', desc: 'استخدام تخدير موضعي لضمان راحة تامة وعدم الشعور بأي ألم خلال الإجراء.' },
      { step: '02', title: 'القياس والتجهيز', desc: 'أخذ قياسات دقيقة لضمان تحديد الحجم المناسب للدباسة للحصول على نتيجة مثالية.' },
      { step: '03', title: 'القطع والتدبيس', desc: 'يتم القطع والتدبيس بضغطة واحدة باستخدام تدبيسات دقيقة تسقط تلقائياً بعد الشفاء.' },
      { step: '04', title: 'الانتهاء', desc: 'إجراء سريع يستغرق 15 دقيقة. يمكنك العودة إلى المنزل فوراً مع بعض التعليمات البسيطة للعناية.' }
    ],
    procedureRU: [
      { step: '01', title: 'Анестезия', desc: 'Местная анестезия (кольцевая блокада). Пациент остается в сознании, область онемела.' },
      { step: '02', title: 'Применение степлера', desc: 'Одноразовое степлерное устройство разрезает и сшивает крайнюю плоть одним движением.' },
      { step: '03', title: 'Проверка гемостаза', desc: 'Кровотечение немедленно контролируется скобами. Накладывается повязка.' },
      { step: '04', title: 'Выписка', desc: 'Пациент отправляется домой в тот же день с инструкциями по уходу.' }
    ],
    faq: [
      { q: "Is circumcision painful?", a: "Minimal pain during and after. Local anesthesia ensures comfort throughout the procedure. Most men only need over-the-counter pain relievers for a few days afterward." },
      { q: "When can I resume sexual activity after circumcision?", a: "Typically after 4 weeks, once the area is fully healed. Your doctor will confirm during a follow-up visit." },
      { q: "Do the staples need to be removed after stapler circumcision?", a: "No. The titanium staples dissolve or fall off naturally within 2–3 weeks as the wound heals." }
    ],
    faqAR: [
      { q: 'هل يمكنني العودة للعمل فوراً بعد إجراء الختان؟', a: 'ننصح براحة من يوم إلى يومين، لكن بإمكان أغلب المرضى العودة لمهامهم الخفيفة غير المجهدة في اليوم التالي.' },
      { q: 'ما الفرق بين الختان بالليزر والختان بالدباسة؟', a: 'الليزر يستبدل المشرط بقطع حراري أكثر دقة ويحتاج لخياطة، بينما الدباسة توفر القطع والخياطة في خطوة واحدة لنتائج أسرع وأكثر تناسقاً.' },
      { q: 'متى يمكنني العودة للنشاط الجنسي الطبيعي أو الرياضة؟', a: 'يُنصح بالانتظار وتجنب الأنشطة المجهدة والنشاط الجنسي حتى يلتئم الجرح تماماً، عادة ما يستغرق 3 إلى 4 أسابيع.' }
    ],
    faqRU: [
      { q: 'Обрезание — это больно?', a: 'Минимальная боль во время и после процедуры. Местная анестезия обеспечивает комфорт на протяжении всей процедуры. Большинству мужчин в течение нескольких дней после этого требуются только безрецептурные обезболивающие.' },
      { q: 'Когда я смогу возобновить сексуальную активность после обрезания?', a: 'Обычно через 4 недели, когда область полностью заживет. Ваш врач подтвердит это во время контрольного визита.' },
      { q: 'Нужно ли снимать скобы после обрезания степлером?', a: 'Нет. Титановые скобы растворяются или отпадают естественным образом в течение 2–3 недель по мере заживления раны.' }
    ]
  },
  'Penile Enlargement': {
    title: 'Penile Girth Enhancement',
    titleAR: 'تجميل القضيب (زيادة السُمك)',
    titleRU: 'Утолщение полового члена',
    tagline: 'Non-Surgical Penile Girth Enhancement with HA Filler. Natural Feel, Fully Reversible.',
    taglineAR: 'زيادة سُمك القضيب بدون جراحة باستخدام الفيلر (HA). ملمس طبيعي، وقابل للعكس تماماً.',
    taglineRU: 'Безоперационное утолщение полового члена с помощью филлеров ГК. Естественные ощущения, полностью обратимо.',
    whatIsIt: {
      title: 'What is Penile Girth Enhancement with Filler?',
      description: "Penile girth enhancement with dermal filler is a non-surgical medical procedure designed to increase the circumference (thickness) of the penis using Hyaluronic Acid (HA) fillers. Performed by a board-certified urologist, this method provides visible results without invasive surgery, general anesthesia, or lengthy recovery. It is a well-established option for men seeking to improve penile girth safely and with minimal downtime.",
      image: '/assets/image/services section/penile enlargement/What is Penile Enlargement with Filler.webp'
    },
    whatIsItAR: {
      title: 'ما هي عملية زيادة سُمك القضيب بالفيلر؟',
      description: 'تجميل وزيادة سُمك القضيب باستخدام الفيلر الجلدي هو إجراء طبي غير جراحي يهدف إلى زيادة محيط (سُمك) القضيب باستخدام حقن حمض الهيالورونيك (HA). يتم تنفيذ هذا الإجراء بواسطة طبيب مسالك بولية معتمد، ويوفر نتائج ملحوظة بدون جراحة، أو تخدير عام، أو فترة تعافي طويلة. وهو خيار معروف للرجال الذين يسعون لتحسين سُمك القضيب بأمان وبأقل فترة نقاهة ممكنة.'
    },
    whatIsItRU: {
      title: 'Что такое утолщение полового члена филлерами?',
      description: 'Утолщение полового члена дермальным филлером — это безоперационная медицинская процедура, предназначенная для увеличения окружности (толщины) полового члена с использованием филлеров на основе гиалуроновой кислоты (ГК). Выполняемый сертифицированным урологом, этот метод обеспечивает видимые результаты без инвазивной хирургии, общей анестезии или длительного восстановления. Это хорошо зарекомендовавший себя вариант для мужчин, стремящихся безопасно и с минимальным временем простоя улучшить толщину полового члена.'
    },
    description: "Hyaluronic Acid (HA) Filler\n\n1. **Non-Surgical Procedure**\nThe procedure involves injecting Hyaluronic Acid (HA) dermal filler into the subcutaneous layer of the penile shaft without any surgical incision.\n* **Key Advantage:** No incisions are made, so there is no visible scarring.\n* **Technique:** A blunt-tipped micro-cannula is used to distribute filler beneath the skin, which significantly reduces tissue trauma and minimizes the risk of infection.\n\n2. **Minimal Pain and Zero Downtime**\nDesigned for men who want effective results without disrupting their daily routine.\n* **Procedure Time:** The treatment takes approximately 30-45 minutes.\n* **Daily Life:** Patients can return to work and normal daily activities immediately after the procedure.\n* **Precaution:** Sexual activity should be avoided for approximately 4-7 days to allow the filler to settle properly.\n\n3. **Natural Look and Feel**\nHA filler provides a smooth, natural texture that blends seamlessly with existing tissue.\n* **Texture:** The filler material is soft and elastic, closely mimicking the feel of natural penile tissue.\n* **Appearance:** Even distribution ensures there are no hard lumps or unnatural irregularities.\n\n4. **Customizable Results**\nOne of the key advantages of filler-based enhancement is the flexibility to tailor results to individual preferences.\n* **Patient Control:** Patients can choose the volume of filler to achieve their desired level of girth enhancement.\n* **Future Touch-Ups:** Additional filler sessions can be scheduled in the future for those who want further enhancement.\n\n5. **Fully Reversible and Safe**\nHA fillers offer long-term peace of mind with a built-in safety mechanism.\n* **Reversibility:** If the patient is unsatisfied with the result or wishes to make adjustments, the filler can be completely dissolved using an enzyme called Hyaluronidase.\n* **Safety Standard:** The filler leaves no permanent residue or harmful substances in the body.",
    descriptionAR: 'فيلر حمض الهيالورونيك (HA)\n\n1. **إجراء غير جراحي**\nيتضمن الإجراء حقن فيلر (HA) في الطبقة تحت الجلدية للقضيب دون أي شقوق جراحية.\n* **الميزة الرئيسية:** لا توجد جروح لذلك لا توجد ندبات مرئية.\n* **التقنية:** تُستخدم قنية دقيقة (Cannula) لتوزيع الفيلر تحت الجلد، مما يقلل بشكل كبير من صدمة الأنسجة وخطر العدوى.\n\n2. **ألم ضئيل وبدون فترة انقطاع**\nمصمم للرجال الذين يرغبون في نتائج فعالة دون تعطيل روتينهم اليومي.\n* **وقت الإجراء:** يستغرق العلاج حوالي 30-45 دقيقة.\n* **الحياة اليومية:** يمكن للمرضى العودة للعمل والأنشطة اليومية فوراً بعد الإجراء.\n* **الاحتياطات:** يجب تجنب النشاط الجنسي لمدة 4-7 أيام للسماح للفيلر بالاستقرار.\n\n3. **مظهر وملمس طبيعي**\nيوفر فيلر (HA) ملمساً ناعماً وطبيعياً يندمج بسلاسة مع الأنسجة.\n* **الملمس:** المادة مرنة وناعمة، تحاكي بشكل كبير شعور الأنسجة الطبيعية للقضيب.\n* **المظهر:** التوزيع المتساوي يضمن عدم وجود كتل صلبة أو شكل غير طبيعي.\n\n4. **نتائج قابلة للتخصيص**\nأحد أهم مزايا الفيلر هو المرونة في تخصيص النتائج حسب الرغبة الشخصية.\n* **تحكم المريض:** يمكن للمريض اختيار كمية الفيلر للوصول إلى الحجم المطلوب.\n* **تحسين مستقبلي:** يمكن جدولة جلسات إضافية في المستقبل للراغبين في زيادة إضافية.\n\n5. **آمن وقابل للعكس تماماً**\nحقن (HA) توفر راحة بال على المدى الطويل بفضل آلية أمان مدمجة.\n* **قابلية العكس:** في حال عدم الرضا عن النتيجة، يمكن إذابة الفيلر تماماً باستخدام إنزيم يسمى "هيالورونيداز".\n* **معايير الأمان:** لا يترك الفيلر أي بقايا دائمة أو مواد ضارة في الجسم.',
    descriptionRU: 'Филлер на основе гиалуроновой кислоты (ГК)\n\n1. **Безоперационная процедура**\nПроцедура включает инъекцию дермального филлера на основе гиалуроновой кислоты (ГК) в подкожный слой ствола полового члена без какого-либо хирургического разреза.\n* **Ключевое преимущество:** Разрезы не делаются, поэтому нет видимых рубцов.\n* **Методика:** Для распределения филлера под кожей используется тупоконечная микроканюля, что значительно снижает травматизацию тканей и сводит к минимуму риск инфицирования.\n\n2. **Минимальная боль и нулевое время простоя**\nРазработано для мужчин, которые хотят получить эффективные результаты, не нарушая свой повседневный распорядок.\n* **Время процедуры:** Лечение занимает примерно 30-45 минут.\n* **Повседневная жизнь:** Пациенты могут вернуться к работе и обычным повседневным делам сразу после процедуры.\n* **Меры предосторожности:** Следует избегать сексуальной активности примерно 4-7 дней, чтобы филлер правильно распределился.\n\n3. **Естественный вид и ощущения**\nФиллер ГК обеспечивает гладкую, естественную текстуру, которая плавно сливается с существующими тканями.\n* **Текстура:** Материал филлера мягкий и эластичный, очень напоминающий на ощупь естественные ткани полового члена.\n* **Внешний вид:** Равномерное распределение гарантирует отсутствие твердых комков или неестественных неровностей.\n\n4. **Настраиваемые результаты**\nОдним из ключевых преимуществ увеличения с помощью филлеров является гибкость в адаптации результатов к индивидуальным предпочтениям.\n* **Контроль пациента:** Пациенты могут выбрать объем филлера для достижения желаемого уровня утолщения.\n* **Будущие корректировки:** Дополнительные сеансы введения филлера могут быть запланированы в будущем для тех, кто хочет дальнейшего увеличения.\n\n5. **Полностью обратимо и безопасно**\nФиллеры ГК обеспечивают долгосрочное спокойствие благодаря встроенному механизму безопасности.\n* **Обратимость:** Если пациент недоволен результатом или желает внести коррективы, филлер может быть полностью растворен с помощью фермента, называемого гиалуронидазой.\n* **Стандарт безопасности:** Филлер не оставляет постоянных следов или вредных веществ в организме.',
    heroImage: '/assets/image/services section/penile enlargement/penile enlargement hero.webp',
    descriptionImage: '/assets/image/services section/penile enlargement/penile enlargement clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Girth Increase", value: "1-2 cm", icon: Ruler },
      { label: "Procedure Time", value: "30-45 Mins", icon: Timer },
      { label: "Downtime", value: "3-5 Days", icon: Activity },
      { label: "Duration", value: "12-24 Mo", icon: Calendar }
    ],
    statsAR: [
      { label: 'زيادة السُمك' },
      { label: 'وقت الإجراء' },
      { label: 'فترة النقاهة' },
      { label: 'المدة' }
    ],
    statsRU: [
      { label: 'Увеличение толщины' },
      { label: 'Время процедуры' },
      { label: 'Время простоя' },
      { label: 'Продолжительность' }
    ],
    benefits: [
      { title: 'Immediate Results', desc: 'Visible increase in girth immediately after procedure.', icon: Zap },
      { title: 'Natural Feel', desc: 'Premium HA fillers feel soft and natural to the touch.', icon: CheckCircle2 },
      { title: 'Minimally Invasive', desc: 'Quick injections with local anesthesia. No surgery required.', icon: ShieldCheck },
      { title: 'Reversible (HA)', desc: 'Hyaluronic acid fillers can be dissolved if needed.', icon: Loop as any }
    ],
    benefitsRU: [
      { title: 'Мгновенные результаты', desc: 'Видимое увеличение толщины сразу после процедуры.' },
      { title: 'Естественные ощущения', desc: 'Филлеры ГК премиум-класса мягкие и естественные на ощупь.' },
      { title: 'Минимально инвазивно', desc: 'Быстрые инъекции под местной анестезией. Хирургическое вмешательство не требуется.' },
      { title: 'Обратимо (ГК)', desc: 'Филлеры на основе гиалуроновой кислоты могут быть растворены при необходимости.' }
    ],
    timeline: {
      title: "Augmentation Journey",
      steps: [
        { time: "Day 1-3", title: "Settling", desc: "Mild swelling may occur. Filler begins to integrate with tissue." },
        { time: "Week 2", title: "Resumption", desc: "Sexual activity can usually resume. Final shape begins to stabilize." },
        { time: "Month 1+", title: "Final Result", desc: "Full girth enhancement visible. Natural feel and look achieved." }
      ]
    },
    timelineAR: {
      title: 'مراحل التكبير',
      steps: [
        { time: 'اليوم 1-3', title: 'الاستقرار', desc: 'قد يحدث تورم خفيف. يبدأ الفيلر في الاندماج مع الأنسجة.' },
        { time: 'الأسبوع 2', title: 'استئناف النشاط', desc: 'يمكن عادةً العودة للنشاط الجنسي. يبدأ الشكل النهائي في الاستقرار.' },
        { time: 'الشهر 1+', title: 'النتيجة النهائية', desc: 'اكتمال الزيادة بوضوح. مظهر وملمس طبيعي تماماً.' }
      ]
    },
    timelineRU: {
      title: 'Путь к увеличению',
      steps: [
        { time: 'День 1-3', title: 'Усадка', desc: 'Может возникнуть небольшой отек. Филлер начинает интегрироваться с тканью.' },
        { time: 'Неделя 2', title: 'Возобновление', desc: 'Обычно можно возобновить сексуальную активность. Окончательная форма начинает стабилизироваться.' },
        { time: 'Месяц 1+', title: 'Окончательный результат', desc: 'Видно полное утолщение. Достигнут естественный вид и ощущения.' }
      ]
    },
    candidates: [
      "Men seeking enhanced girth for aesthetic or confidence reasons.",
      "Those with realistic expectations and good overall health.",
      "Patients wanting a non-surgical, reversible option (HA fillers).",
      "Individuals desiring more confidence in intimate situations."
    ],
    candidatesAR: [
      'الرجال الذين يسعون لزيادة السُمك لأسباب تجميلية أو لزيادة الثقة.',
      'من لديهم توقعات واقعية وصحة عامة جيدة.',
      'المرضى الراغبون في خيار غير جراحي وقابل للعكس (فيلر HA).',
      'الأفراد التواقون لمزيد من الثقة في المواقف الحميمية.'
    ],
    candidatesRU: [
      'Мужчины, желающие увеличить толщину по эстетическим причинам или для уверенности в себе.',
      'Лица с реалистичными ожиданиями и хорошим общим состоянием здоровья.',
      'Пациенты, которым нужен нехирургический, обратимый вариант (филлеры ГК).',
      'Лица, желающие больше уверенности в интимных ситуациях.'
    ],
    safety: {
      title: "Safety & Risks",
      content: "When performed by experienced specialists using medical-grade products, girth enhancement is safe. Risks include temporary swelling, bruising, asymmetry (rare), or nodules (very rare). HA fillers can be dissolved with Hyaluronidase if any issues arise.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والمخاطر',
      content: 'عند إجرائه بواسطة متخصصين ذوي خبرة باستخدام منتجات طبية معتمدة، يُعد العلاج آمناً جداً. المخاطر تشمل تورم مؤقت، كدمات، عدم تناسق (نادر)، أو عقيدات (نادر جداً). يمكن تذويب الفيلر إنزيمياً إذا لزم الأمر.',
    },
    safetyRU: {
      title: 'Безопасность и риски',
      content: 'При выполнении опытными специалистами с использованием медицинских препаратов процедура утолщения безопасна. Риски включают временный отек, синяки, асимметрию (редко) или узелки (очень редко). Филлеры ГК можно растворить гиалуронидазой при возникновении каких-либо проблем.'
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Discuss goals, examine anatomy, and select the appropriate filler.' },
      { step: '02', title: 'Anesthesia', desc: 'Local anesthetic cream and nerve blocks applied for comfort.' },
      { step: '03', title: 'Injection', desc: 'Filler injected evenly along penile shaft using blunt micro-cannulas.' },
      { step: '04', title: 'Shaping', desc: 'Final contouring for smooth, even results. Post-care instructions provided.' }
    ],
    procedureAR: [
      { step: '01', title: 'الاستشارة', desc: 'مناقشة الأهداف المطلوبة، الفحص، واختيار نوع الفيلر المناسب.' },
      { step: '02', title: 'التخدير', desc: 'استخدام كريم مخدر موضعي وتخدير العصب لضمان راحة تامة.' },
      { step: '03', title: 'الحقن', desc: 'حقن الفيلر بالتساوي على طول القضيب باستخدام قنية دقيقة ومرنة.' },
      { step: '04', title: 'التشكيل', desc: 'توزيع وتشكيل الفيلر للحصول على نتيجة ناعمة ومتناسقة. ثم تقديم إرشادات ما بعد الإجراء.' }
    ],
    procedureRU: [
      { step: '01', title: 'Консультация', desc: 'Обсуждение целей, осмотр анатомии и выбор подходящего филлера.' },
      { step: '02', title: 'Анестезия', desc: 'Применение крема с местным анестетиком и блокады нервов для комфорта.' },
      { step: '03', title: 'Инъекция', desc: 'Филлер вводится равномерно вдоль ствола полового члена с использованием тупых микроканюль.' },
      { step: '04', title: 'Формирование', desc: 'Окончательное контурирование для получения гладкого и ровного результата. Предоставление инструкций по уходу после процедуры.' }
    ],
    faq: [
      { q: "How long does penile filler last?", a: "HA fillers typically last 12-24 months depending on the product used and individual factors. The filler gradually dissolves naturally through the body's own metabolic processes, and the tissue returns to its pre-treatment state safely with no lasting residue." },
      { q: "Can I resume sexual activity after the procedure?", a: "Light, gentle activity may be possible after approximately 4-7 days. However, sexual intercourse and strenuous activities should be avoided for approximately 2-4 weeks to allow the filler to fully settle and the tissue to heal completely." },
      { q: "Will it look natural? Can others tell?", a: "When performed with proper technique by a qualified urologist, the results feel very close to natural tissue. There are no visible scars or obvious signs of the procedure." }
    ],
    faqAR: [
      { q: 'كم يدوم الفيلر؟', a: 'يدوم فيلر (HA) عادة من 12 إلى 24 شهراً اعتماداً على نوع المنتج وعوامل فسيولوجية فردية. يذوب الفيلر تدريجياً بشكل طبيعي، وتعود الأنسجة لحالتها السابقة بأمان.' },
      { q: 'متى يمكنني العودة للنشاط الجنسي؟', a: 'يمكن القيام بنشاط خفيف بعد 4-7 أيام. ومع ذلك، يُنصح بتجنب الجماع والأنشطة الشاقة لمدة 2-4 أسابيع للسماح للفيلر بالاستقرار التام والشفاء الكامل للأنسجة.' },
      { q: 'هل سيبدو طبيعياً؟ هل يمكن للآخرين ملاحظة ذلك؟', a: 'عندما يُجرى بتقنية صحيحة، تكون النتائج قريبة جداً من الأنسجة الطبيعية. لا توجد ندبات ظاهرة أو علامات واضحة على الإجراء.' }
    ],
    faqRU: [
      { q: 'Как долго держится филлер для полового члена?', a: 'Филлеры ГК обычно держатся 12-24 месяца в зависимости от используемого препарата и индивидуальных факторов. Филлер постепенно растворяется естественным путем благодаря собственным метаболическим процессам организма, и ткань безопасно возвращается в исходное состояние без остатка.' },
      { q: 'Смогу ли я возобновить сексуальную активность после процедуры?', a: 'Легкая, осторожная активность может быть возможна примерно через 4-7 дней. Тем не менее, следует избегать половых актов и напряженной деятельности примерно 2-4 недели, чтобы филлер полностью уселся, а ткань полностью зажила.' },
      { q: 'Будет ли это выглядеть естественно? Смогут ли другие заметить?', a: 'При правильном выполнении квалифицированным урологом результаты очень близки к естественным тканям. Нет никаких видимых шрамов или явных признаков процедуры.' }
    ]
  },
  'Penile Lengthening': {
    title: 'Penile Lengthening Surgery',
    titleAR: 'جراحة إطالة القضيب',
    titleRU: 'Хирургическое удлинение полового члена',
    tagline: 'Permanent Penile Lengthening via Suspensory Ligament Release Performed by Board-Certified Urologists. Proven Technique with Lasting Results.',
    taglineAR: 'إطالة دائمة للقضيب عبر تحرير الرباط المعلق. إجراء موثوق من أطباء مسالك بولية معتمدين بنقاهة مستدامة.',
    taglineRU: 'Перманентное удлинение полового члена путем рассечения пращевидной связки. Выполняется сертифицированными урологами. Проверенная методика с длительным результатом.',
    whatIsIt: {
      title: 'What is Penile Lengthening Surgery?',
      description: "Penile lengthening surgery is a urological procedure designed to increase the visible length of the penis, primarily in its flaccid state. The most well-established technique involves releasing the suspensory ligament, which anchors the penis to the pubic bone. By releasing this ligament, the internal portion of the penile shaft is allowed to advance forward, resulting in a measurable and permanent increase in visible length. This procedure is performed by board-certified urologists and is suitable for men seeking a structural, long-term solution.",
      image: '/assets/image/services section/penile lengthenning/what is penile lengthening surgery.webp'
    },
    whatIsItAR: {
      title: 'ما هي جراحة إطالة القضيب؟',
      description: 'جراحة إطالة القضيب هي إجراء في المسالك البولية يهدف إلى زيادة الطول المرئي للقضيب، وبشكل أساسي في حالة الارتخاء. تعتمد التقنية الأكثر رسوخاً على تحرير الرباط المعلق الذي يربط القضيب بعظم العانة. يتيح تحرير هذا الرباط تقدم الجزء الداخلي من القضيب للأمام، مما يؤدي إلى زيادة قابلة للقياس ودائمة في الطول المرئي. يُجرى هذا الإجراء بواسطة أطباء مسالك بولية معتمدين وهو مناسب للرجال الذين يسعون لحل هيكلي دائم.'
    },
    whatIsItRU: {
      title: 'Что такое хирургическое удлинение полового члена?',
      description: 'Хирургическое удлинение полового члена — это урологическая процедура, предназначенная для увеличения видимой длины полового члена, в первую очередь в состоянии покоя. Наиболее устоявшаяся методика включает рассечение пращевидной (поддерживающей) связки, которая крепит половой член к лобковой кости. За счет рассечения этой связки внутренняя часть ствола полового члена может продвинуться вперед, что приводит к измеримому и постоянному увеличению видимой длины. Эта процедура выполняется сертифицированными урологами и подходит для мужчин, ищущих структурное, долгосрочное решение.'
    },
    description: "Suspensory ligament release is the most clinically established surgical method for achieving permanent penile lengthening. By addressing the anatomical attachment that keeps a portion of the penile shaft hidden internally, the surgeon can safely reveal length that is naturally present but concealed.\n\n**The Clinical Mechanism (Suspensory Ligament Release):**\n\n1. **Anatomical Basis:** Approximately 30–50% of the penile shaft is located internally, anchored to the pubic bone by the **suspensory ligament**. This ligament supports the upward angle during erection but also prevents the full length of the shaft from being visible externally.\n\n2. **Ligamentolysis (The Procedure):** Through a small, discreet incision in the pubic area, the surgeon carefully releases the suspensory ligament. This allows the internal shaft to extend forward, increasing the externally visible length of the penis.\n\n3. **Expected Results:** This technique typically yields a **2–4 cm gain** in flaccid length. The erection angle may shift slightly downward, but erectile function and penile sensation remain fully intact.\n\n4. **Post-Operative Care:** Regular massage and stretching are required for 3–6 months to prevent the ligament from reattaching or retracting to its original position, ensuring the full length gained from surgery is maintained.",
    descriptionAR: 'يعتبر تحرير الرباط المعلق الطريقة الجراحية الأكثر رسوخاً سريرياً لتحقيق إطالة دائمة للقضيب. من خلال معالجة الارتباط التشريحي الذي يبقي جزءاً من القضيب مخفياً داخلياً، يمكن للجراح بأمان الكشف عن الطول الموجود طبيعياً ولكنه مخفي.\n\n**الآلية السريرية (تحرير الرباط المعلق):**\n\n1. **الأساس التشريحي:** يوجد حوالي 30-50% من القضيب داخلياً، متصلاً بعظم العانة بواسطة **الرباط المعلق**. يدعم هذا الرباط زاوية الانتصاب المتجهة لأعلى ولكنه في نفس الوقت يمنع ظهور كامل طول القضيب خارجياً.\n\n2. **تحلل الرباط (الإجراء الجراحي):** عبر شق صغير ومخفي في منطقة العانة، يقوم الجراح بتحرير الرباط المعلق بحذر. هذا يسمح للجزء الداخلي من القضيب بالامتداد للأمام، مما يزيد من الطول المرئي الخارجي للقضيب.\n\n3. **النتائج المتوقعة:** توفر هذه التقنية عادةً زيادة تتراوح بين **2-4 سم** في طول القضيب أثناء الارتخاء. قد تتجه زاوية الانتصاب للأسفل قليلاً، لكن وظيفة الانتصاب والإحساس يبقيان سليمين تماماً.\n\n4. **رعاية ما بعد الجراحة:** يتطلب الأمر تدليكاً وتمطيتاً منتظماً لمدة 3-6 أشهر لمنع الرباط من الالتصاق مجدداً، مما يضمن الحفاظ على الطول المكتسب.',
    descriptionRU: 'Рассечение пращевидной связки является наиболее клинически обоснованным хирургическим методом достижения постоянного удлинения полового члена. Работая с анатомическим креплением, которое удерживает часть ствола полового члена скрытой внутри, хирург может безопасно раскрыть длину, которая присутствует от природы, но скрыта.\n\n**Клинический механизм (рассечение пращевидной связки):**\n\n1. **Анатомическое обоснование:** Примерно 30–50% ствола полового члена расположено внутри, прикреплено к лобковой кости **пращевидной связкой**. Эта связка поддерживает угол наклона вверх во время эрекции, но также не позволяет всей длине ствола быть видимой снаружи.\n\n2. **Лигаментотомия (процедура):** Через небольшой, незаметный разрез в лобковой области хирург осторожно рассекает пращевидную связку. Это позволяет внутреннему стволу выдвинуться вперед, увеличивая внешне видимую длину полового члена.\n\n3. **Ожидаемые результаты:** Эта методика обычно дает **прибавку 2–4 см** длины в состоянии покоя. Угол эрекции может немного сместиться вниз, но эректильная функция и чувствительность полового члена остаются полностью нетронутыми.\n\n4. **Послеоперационный уход:** Регулярный массаж и растяжка необходимы в течение 3–6 месяцев, чтобы предотвратить повторное прикрепление связки или ее втягивание в исходное положение, гарантируя сохранение всей длины, полученной в результате операции.',
    heroImage: '/assets/image/services section/penile lengthenning/penile lengthenning hero.webp',
    descriptionImage: '/assets/image/services section/penile lengthenning/penile lengthenning clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Length Gain", value: "2-4 cm", icon: Ruler },
      { label: "Surgery Time", value: "45-60 Mins", icon: Timer },
      { label: "Recovery", value: "2-4 Weeks", icon: Activity },
      { label: "Full Results", value: "6-12 Mo", icon: Calendar }
    ],
    statsAR: [
      { label: 'زيادة الطول' },
      { label: 'وقت الجراحة' },
      { label: 'التعافي' },
      { label: 'النتائج النهائية' }
    ],
    statsRU: [
      { label: 'Увеличение длины' },
      { label: 'Время операции' },
      { label: 'Восстановление' },
      { label: 'Полные результаты' }
    ],
    benefits: [
      { title: 'Clinically Proven', desc: 'Suspensory ligament release is a well-established urological procedure with documented outcomes.', icon: Scissors },
      { title: 'Permanent Results', desc: 'Typically 2-4 cm increase in visible flaccid length, with results that are structurally permanent.', icon: Ruler },
      { title: 'Combination Option', desc: 'Can be performed alongside girth enhancement for a more comprehensive result.', icon: Layers },
      { title: 'Non-Surgical Alternative Available', desc: 'Penile traction devices (extenders) offer gradual gains over 6-12 months for those who prefer a non-surgical approach.', icon: Target }
    ],
    benefitsRU: [
      { title: 'Клинически доказано', desc: 'Рассечение пращевидной связки — это хорошо зарекомендовавшая себя урологическая процедура с задокументированными результатами.' },
      { title: 'Постоянные результаты', desc: 'Как правило, увеличение видимой длины в состоянии покоя на 2-4 см с результатами, которые структурно постоянны.' },
      { title: 'Возможность комбинации', desc: 'Может выполняться одновременно с утолщением для более комплексного результата.' },
      { title: 'Доступна нехирургическая альтернатива', desc: 'Устройства для вытяжения полового члена (экстендеры) предлагают постепенное увеличение в течение 6-12 месяцев для тех, кто предпочитает нехирургический подход.' }
    ],
    candidates: [
      "Men with realistic expectations seeking a modest but permanent increase in visible length.",
      "Those who are committed to the post-operative massage and stretching routine, which is essential for optimal results.",
      "Patients in good general health with no active infections or bleeding disorders.",
      "Individuals who prefer a permanent surgical solution over temporary non-surgical devices."
    ],
    candidatesAR: [
      'الرجال ذوي التوقعات الواقعية الذين يبحثون عن زيادة دائمة في الطول المرئي.',
      'الملتزمون بروتين التدليك والتمطيط بعد الجراحة، وهو أمر بالغ الأهمية.',
      'المرضى الذين يتمتعون بصحة عامة جيدة ولا يعانون من التهابات أو اضطرابات نزيف.',
      'الأفراد الذين يفضلون حلاً جراحياً دائماً بدلاً من الأجهزة غير الجراحية المؤقتة.'
    ],
    candidatesRU: [
      'Мужчины с реалистичными ожиданиями, ищущие скромное, но постоянное увеличение видимой длины.',
      'Те, кто привержен режиму послеоперационного массажа и растяжки, что необходимо для оптимальных результатов.',
      'Пациенты с хорошим общим состоянием здоровья без активных инфекций или нарушений свертываемости крови.',
      'Лица, предпочитающие постоянное хирургическое решение временным нехирургическим устройствам.'
    ],
    safety: {
      title: "Safety & Considerations",
      content: "When performed by an experienced urological surgeon, penile lengthening surgery is considered safe. Potential risks include mild scarring at the incision site, a slightly lower erection angle, temporary numbness, or modest gains that may not meet all expectations. Non-surgical traction therapy carries very low risk but requires discipline and consistent use over several months.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'السلامة والمضاعفات',
      content: 'يعد تحرير الرباط المعلق إجراءً آمناً عند تنفيذه من قبل طبيب مسالك بولية خبير. تظل وظيفة الانتصاب والإحساس طبيعية (حيث لا يتأثر تدفق الدم أو الأعصاب). قد تشمل المضاعفات المحتملة: ألم مؤقت وتورم، احتمال التصاق الرباط إذا لم يتم الالتزام ببرنامج التمطيط، وتغيير طفيف في زاوية الانتصاب (أكثر انخفاضاً).',
    },
    safetyRU: {
      title: 'Безопасность и соображения',
      content: 'При выполнении опытным хирургом-урологом операция по удлинению полового члена считается безопасной. Возможные риски включают легкое рубцевание в месте разреза, немного более низкий угол эрекции, временное онемение или скромные результаты, которые могут не оправдать всех ожиданий. Нехирургическая тракционная терапия несет очень низкий риск, но требует дисциплины и постоянного использования в течение нескольких месяцев.'
    },
    timeline: {
      title: "Post-Op Recovery Timeline",
      steps: [
        { time: "Week 1-2", title: "Initial Healing", desc: "Post-operative swelling and bruising gradually subside. A regular massage and stretching routine typically begins under doctor's guidance." },
        { time: "Month 1-3", title: "Active Recovery", desc: "Daily massage and stretching is essential to maintain and maximize the length gained from surgery." },
        { time: "Month 6-12", title: "Final Results", desc: "The recovery routine is gradually tapered. The final length stabilizes and full cosmetic healing is achieved." }
      ]
    },
    timelineAR: {
      title: 'مسار التعافي والرعاية',
      steps: [
        { time: 'الأسبوع 1-2', title: 'التعافي الأولي', desc: 'تورم وانزعاج خفيف. التوقف عن العمل اليدوي الشاق والتدريب.' },
        { time: 'الشهر 1', title: 'بدء التمطيط', desc: 'يتم البدء ببرنامج التمطيط والتدليك لمنع تندب وتقلص الرباط.' },
        { time: 'الشهر 6', title: 'النتائج المستدامة', desc: 'استقرار الأنسجة بشكل نهائي مع تحقيق الطول المكتسب بالكامل واستئناف كل النشاطات.' }
      ]
    },
    timelineRU: {
      title: 'Сроки послеоперационного восстановления',
      steps: [
        { time: 'Неделя 1-2', title: 'Начальное заживление', desc: 'Послеоперационный отек и синяки постепенно спадают. Регулярный массаж и растяжка обычно начинаются под руководством врача.' },
        { time: 'Месяц 1-3', title: 'Активное восстановление', desc: 'Ежедневный массаж и растяжка необходимы для поддержания и максимизации длины, полученной в результате операции.' },
        { time: 'Месяц 6-12', title: 'Окончательные результаты', desc: 'Режим восстановления постепенно сокращается. Окончательная длина стабилизируется и достигается полное косметическое заживление.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Consultation & Planning', desc: 'Discuss your goals, review your anatomy, and determine the most appropriate surgical approach.' },
      { step: '02', title: 'Anesthesia & Incision', desc: 'Local or general anesthesia is administered. A small, discreet incision is made in the pubic area.' },
      { step: '03', title: 'Ligament Release', desc: 'The suspensory ligament is carefully released to allow the internal penile shaft to advance forward.' },
      { step: '04', title: 'Post-Op Care Plan', desc: 'A personalized massage and stretching plan is provided. Consistent daily practice for 3-6 months is critical for maintaining results.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير', desc: 'يتم الإجراء تحت التخدير العام لضمان عدم الشعور بأي ألم وتسهيل دقة الجراحة.' },
      { step: '02', title: 'الشق الجراحي', desc: 'إجراء شق مخفي صغير على شكل V أو Y في منطقة العانة مباشرة فوق قاعدة القضيب.' },
      { step: '03', title: 'تحرير الرباط', desc: 'فصل الرباط المعلق بعناية مع الحفاظ التام على الأعصاب والأوعية الدموية بالأسفل.' },
      { step: '04', title: 'الإغلاق والخروج', desc: 'إغلاق الشق بتقنية الخياطة التجميلية لمنع الانكماش. يمكن خروج المريض في نفس اليوم.' }
    ],
    procedureRU: [
      { step: '01', title: 'Консультация и планирование', desc: 'Обсудите свои цели, изучите анатомию и определите наиболее подходящий хирургический подход.' },
      { step: '02', title: 'Анестезия и разрез', desc: 'Вводится местная или общая анестезия. В лобковой области делается небольшой незаметный разрез.' },
      { step: '03', title: 'Рассечение связки', desc: 'Пращевидная связка осторожно рассекается, чтобы позволить внутреннему стволу полового члена продвинуться вперед.' },
      { step: '04', title: 'План послеоперационного ухода', desc: 'Предоставляется индивидуальный план массажа и растяжки. Последовательная ежедневная практика в течение 3-6 месяцев имеет решающее значение для поддержания результатов.' }
    ],
    faq: [
      { q: "How much length can I expect to gain?", a: "Most patients achieve a 2-4 cm increase in visible flaccid length. Erect length gains are typically more modest (approximately 0.5-1.5 cm). Individual results depend on anatomy and adherence to the post-operative recovery routine." },
      { q: "Will the surgery affect my erection angle?", a: "The erection angle may shift slightly more forward or downward compared to before surgery. However, erectile function, rigidity, and sensation are not affected by the procedure." },
      { q: "Is post-operative massage and stretching necessary?", a: "Yes, regular massage and stretching are strongly recommended. Without consistent practice during the healing phase, scar tissue contraction may reduce or negate the length gained from surgery." }
    ],
    faqAR: [
      { q: 'هل ستؤثر جراحة إطالة القضيب على الانتصاب أو الإحساس؟', a: 'لا، الإجراء يتضمن فقط تحرير الرباط المعلق. لا يتم المساس بالأعصاب، ولا بالأوعية الدموية، لذلك تبقى وظيفة الانتصاب كالمعتاد.' },
      { q: 'هل سيزيد الطول أثناء الانتصاب أيضاً؟', a: 'تزيد الجراحة بشكل أساسي من الطول المرئي عندما يكون القضيب في حالة ارتخاء. الزيادة في طول الانتصاب تكون أقل وضوحاً، ولكن زاوية الانتصاب قد تصبح أقل ارتفاعاً.' },
      { q: 'ما مدى أهمية رعاية ما بعد الجراحة (التمطيط)؟', a: 'حاسمة للغاية. إذا لم يلتزم المريض بنظام التمطيط المنتظم كما يوجه الطبيب، فقد تلتئم الأنسجة متراجعة إلى الخلف، مما يلغي الزيادة المكتسبة.' }
    ],
    faqRU: [
      { q: 'На какую прибавку длины я могу рассчитывать?', a: 'Большинство пациентов достигают увеличения видимой длины в состоянии покоя на 2-4 см. Прибавка в состоянии эрекции обычно более скромная (примерно 0,5-1,5 см). Индивидуальные результаты зависят от анатомии и соблюдения режима послеоперационного восстановления.' },
      { q: 'Повлияет ли операция на мой угол эрекции?', a: 'Угол эрекции может немного сместиться вперед или вниз по сравнению с тем, что было до операции. Однако процедура не влияет на эректильную функцию, жесткость и чувствительность.' },
      { q: 'Обязателен ли послеоперационный массаж и растяжка?', a: 'Да, настоятельно рекомендуется регулярный массаж и растяжка. Без постоянной практики на этапе заживления сокращение рубцовой ткани может уменьшить или свести на нет длину, полученную в результате операции.' }
    ]
  },
  'Excision of penile Paraffinoma': {
    title: 'Excision of Penile Paraffinoma (Foreign Body Removal)',
    titleAR: 'استئصال البارافينوما (إزالة المواد الغريبة المحقونة)',
    titleRU: 'Удаление олеогранулемы (парафиномы) полового члена (Удаление инородного тела)',
    tagline: 'Surgical Removal of Injected Foreign Substances and Penile Reconstruction Performed by Experienced Reconstructive Urologists.',
    taglineAR: 'إزالة جراحية للمواد الغريبة المحقونة وإعادة بناء القضيب، يتم إجراؤها بواسطة جراحي مسالك بولية وترميمية بخبرة عالية.',
    taglineRU: 'Хирургическое удаление введенных инородных веществ и реконструкция полового члена, выполняемая опытными хирургами-реконструктивными урологами.',
    whatIsIt: {
      title: 'What is Penile Paraffinoma?',
      description: "Penile paraffinoma is a serious medical condition caused by the injection of non-medical grade foreign substances such as paraffin, liquid silicone, or olive oil into the penis in an attempt to increase size. The human body cannot absorb or break down these materials, which triggers a chronic foreign body reaction leading to hard lumps (granulomas), tissue deformity, chronic inflammation, and severe damage that requires surgical intervention by an experienced reconstructive urologist.",
      image: '/assets/image/services section/excision of penile paraffinoma menu.webp'
    },
    whatIsItAR: {
      title: 'ما هي البارافينوما في القضيب؟',
      description: 'البارافينوما في القضيب هي حالة طبية خطيرة تنتج عن حقن مواد غريبة غير طبية مثل البارافين، السيليكون السائل، أو زيت الزيتون في القضيب في محاولة لزيادة حجمه. لا يستطيع جسم الإنسان امتصاص هذه المواد أو تكسيرها، مما يؤدي إلى رد فعل مزمن تجاه الجسم الغريب (التهاب متكرر)، وتكون كتل صلبة (أورام حبيبية)، وتشوه الأنسجة، وتلف شديد يتطلب تدخلاً جراحياً من قبل طبيب مسالك بولية وترميم خبير.'
    },
    whatIsItRU: {
      title: 'Что такое парафинома полового члена?',
      description: 'Парафинома полового члена — это серьезное заболевание, вызванное введением немедицинских инородных веществ, таких как парафин, жидкий силикон или оливковое масло, в половой член с целью увеличения его размера. Человеческий организм не может ни усвоить, ни расщепить эти материалы, что вызывает хроническую реакцию на инородное тело, приводящую к образованию твердых комков (гранулем), деформации тканей, хроническому воспалению и серьезным повреждениям, требующим хирургического вмешательства опытного реконструктивного уролога.'
    },
    description: "### The Severe Dangers of Penile Foreign Body Injections: Symptoms and Risks\nInjecting unapproved foreign substances into the penis such as olive oil, paraffin, or liquid silicone is a critical medical emergency and one of the most common cases seen in reconstructive urology. The human body cannot absorb or break down these materials, which inevitably triggers a severe and destructive foreign body reaction.\n\n#### 1. Symptoms of Penile Paraffinoma (Foreign Body Reaction)\nSymptoms rarely appear immediately after injection. It can take months or even years for the body's immune system to initiate a foreign body reaction. Symptoms progress from early inflammatory signs to severe tissue destruction:\n\n**Early Stage (Onset of Inflammation):**\n\n*   **Penile Deformity:** The penis develops an irregular, asymmetrical, and distorted shape.\n*   **Hard Lumps (Granulomas):** Firm, bumpy nodules form under the skin, feeling highly unnatural to the touch.\n*   **Skin Discoloration:** The skin around the injection site becomes abnormally dark, red, or bruised.\n\n**Severe Stage (Advanced Tissue Destruction):**\n\n*   **Intense Pain and Inflammation:** Severe pain, swelling, redness, and localized heat — especially during erection.\n*   **Skin Rupture and Chronic Ulcers:** The penile skin progressively thins until it tears open, leading to non-healing wounds.\n*   **Infection and Discharge:** Foul-smelling pus or lymphatic fluid continuously oozes from the ruptured skin.\n*   **Substance Migration:** The injected material can migrate into the scrotum or pubic area, causing massive abnormal swelling.\n\n#### 2. Complications of Delayed Treatment\nIf left untreated, the consequences of penile paraffinoma can be catastrophic and may result in the loss of the organ:\n\n*   **Penile Necrosis (Tissue Death):** The foreign substance compresses blood vessels, cutting off blood supply. The tissue turns black and dies, potentially requiring partial or complete penile amputation.\n*   **Sepsis (Bloodstream Infection):** Open ulcers and necrotic tissue serve as a breeding ground for dangerous bacteria. If infection enters the bloodstream, it becomes a life-threatening emergency.\n*   **Permanent Erectile Dysfunction:** Severe inflammation creates dense scar tissue (fibrosis) that constricts the penile shaft and damages nerves, making erections physically impossible or extremely painful.\n*   **Urethral Stricture and Urinary Retention:** If the migrated substance compresses the urethra, it causes difficulty urinating, which can lead to backward pressure that damages the bladder and kidneys.\n*   **Increased Cancer Risk:** Prolonged chronic inflammation over many years significantly increases the risk of cellular mutation, potentially leading to skin cancer in the affected area.",
    descriptionAR: 'يتطلب استئصال البارافينوما في القضيب تقييمًا دقيقًا وتقنيات ترميمية متقدمة لاستعادة كل من الوظيفة والمظهر. يمكن أن يكون الإجراء معقّدًا بشكل كبير بناءً على كمية المادة المحقونة ومدى تلف الأنسجة.\n\n**النهج الجراحي:**\n\n1. **التقييم والتخطيط:** يُجري الجراح فحصًا دقيقًا، باستخدام الموجات فوق الصوتية غالبًا، لتحديد مدى انتشار المادة الغريبة وتقييم حيوية الأنسجة.\n2. **الاستئصال المتأني:** تحت التخدير العام أو الموضعي (البنج النصفي)، يتم عمل شقوق لإزالة الأنسجة المتضررة وكشط المادة الغريبة بعناية، مع الحفاظ على الهياكل الأساسية السليمة مثل الأعصاب، والأوعية الدموية، وأجزاء القضيب المسؤولة عن الانتصاب.\n3. **إعادة البناء (إن لزم الأمر):** في الحالات الشديدة حيث يجب إزالة مساحات كبيرة من جلد القضيب بسبب النخر أو التندب الشديد، يتم استخدام طعوم جلدية (تُؤخذ غالبًا من الفخذ أو كيس الصفن) أو سدائل موضعية لإعادة بناء عمود القضيب وتغطيته بالجلد وتجميله.',
    descriptionRU: '### Серьезные опасности инъекций инородных тел в половой член: симптомы и риски\nВведение в половой член несанкционированных инородных веществ, таких как оливковое масло, парафин или жидкий силикон, является критической неотложной медицинской ситуацией и одним из наиболее частых случаев в реконструктивной урологии. Человеческий организм не может ни усвоить, ни расщепить эти материалы, что неизбежно вызывает тяжелую и разрушительную реакцию на инородное тело.\n\n#### 1. Симптомы парафиномы полового члена (реакция на инородное тело)\nСимптомы редко появляются сразу после инъекции. Могут пройти месяцы или даже годы, прежде чем иммунная система организма запустит реакцию на инородное тело. Симптомы прогрессируют от ранних признаков воспаления до тяжелого разрушения тканей:\n\n**Ранняя стадия (начало воспаления):**\n\n* **Деформация полового члена:** Половой член приобретает неправильную, асимметричную и искаженную форму.\n* **Твердые уплотнения (гранулемы):** Под кожей образуются плотные бугристые узелки, на ощупь кажущиеся крайне неестественными.\n* **Изменение цвета кожи:** Кожа вокруг места инъекции становится аномально темной, красной или синюшной.\n\n**Тяжелая стадия (прогрессирующее разрушение тканей):**\n\n* **Сильная боль и воспаление:** Сильная боль, отек, покраснение и местное повышение температуры — особенно во время эрекции.\n* **Разрыв кожи и хронические язвы:** Кожа полового члена постепенно истончается, пока не порвется, что приводит к появлению незаживающих ран.\n* **Инфекция и выделения:** Зловонный гной или лимфатическая жидкость постоянно сочится из разорванной кожи.\n* **Миграция вещества:** Введенный материал может мигрировать в мошонку или лобковую область, вызывая массивный аномальный отек.\n\n#### 2. Осложнения отсроченного лечения\nЕсли парафиному полового члена не лечить, последствия могут быть катастрофическими и привести к потере органа:\n\n* **Некроз полового члена (гибель тканей):** Инородное вещество сдавливает кровеносные сосуды, перекрывая кровоснабжение. Ткань чернеет и отмирает, что может потребовать частичной или полной ампутации полового члена.\n* **Сепсис (инфекция кровотока):** Открытые язвы и некротизированные ткани служат питательной средой для опасных бактерий. Если инфекция попадает в кровоток, это становится опасным для жизни состоянием.\n* **Постоянная эректильная дисфункция:** Сильное воспаление создает плотную рубцовую ткань (фиброз), которая сжимает ствол полового члена и повреждает нервы, делая эрекцию физически невозможной или чрезвычайно болезненной.\n* **Стриктура уретры и задержка мочи:** Если мигрировавшее вещество сдавливает уретру, это вызывает трудности с мочеиспусканием, что может привести к обратному давлению, повреждающему мочевой пузырь и почки.\n* **Повышенный риск рака:** Длительное хроническое воспаление в течение многих лет значительно увеличивает риск клеточной мутации, потенциально приводя к раку кожи в пораженной области.',
    heroImage: '/assets/image/services section/excision of penile paraffinoma/excision of penile paraffinoma hero.webp',
    descriptionImage: '/assets/image/services section/excision of penile paraffinoma/excision of penile paraffinoma clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Complexity", value: "High", icon: AlertCircle },
      { label: "Specialist", value: "Urologist", icon: Users },
      { label: "Surgery Time", value: "2-4 Hrs", icon: Timer },
      { label: "Recovery", value: "6-12 Wks", icon: Calendar }
    ],
    statsAR: [
      { label: 'التعقيد' },
      { label: 'التخصص' },
      { label: 'وقت الجراحة' },
      { label: 'التعافي' }
    ],
    statsRU: [
      { label: 'Сложность' },
      { label: 'Специалист' },
      { label: 'Время операции' },
      { label: 'Восстановление' }
    ],
    timeline: {
      title: "Reconstruction Recovery Timeline",
      steps: [
        { time: "Week 1-2", title: "Wound Care Phase", desc: "Acute healing period. Swelling is managed with specialized compression dressings. Close monitoring of skin graft viability." },
        { time: "Week 4-6", title: "Tissue Remodeling", desc: "Tissue begins to soften and heal. Light daily activities can be resumed gradually." },
        { time: "Month 3+", title: "Final Stabilization", desc: "Surgical outcome stabilizes. Assessment for staged reconstruction if further correction is needed." }
      ]
    },
    timelineAR: {
      title: 'مراحل التعافي وإعادة البناء',
      steps: [
        { time: 'الأسبوع 1-2', title: 'مرحلة العناية بالجرح', desc: 'فترة الشفاء الأولي. يتم التحكم في التورم بضمادات طبية خاصة ومراقبة حيوية الطعوم الجلدية خطوة بخطوة.' },
        { time: 'الأسبوع 4-6', title: 'إعادة تشكيل الأنسجة', desc: 'تبدأ الأنسجة في التلين والشفاء. يمكن استئناف الأنشطة اليومية الخفيفة تدريجياً.' },
        { time: 'الشهر 3+', title: 'الاستقرار النهائي', desc: 'استقرار النتيجة الجراحية. يُجرى تقييم للعملية للتحقق إذا كانت هناك حاجة لأي تعديلات تجميلية إضافية.' }
      ]
    },
    timelineRU: {
      title: 'Сроки восстановления после реконструкции',
      steps: [
        { time: 'Неделя 1-2', title: 'Фаза ухода за раной', desc: 'Острый период заживления. Отек контролируется с помощью специальных компрессионных повязок. Тщательный мониторинг жизнеспособности кожного лоскута.' },
        { time: 'Неделя 4-6', title: 'Ремоделирование тканей', desc: 'Ткани начинают размягчаться и заживать. Можно постепенно возобновлять легкую повседневную деятельность.' },
        { time: 'Месяц 3+', title: 'Окончательная стабилизация', desc: 'Результат операции стабилизируется. Оценка необходимости поэтапной реконструкции, если требуется дальнейшая коррекция.' }
      ]
    },
    benefits: [
      { title: 'Specialist Expertise', desc: 'Performed by urologists experienced in complex penile reconstruction cases.', icon: Users },
      { title: 'Complete Foreign Body Removal', desc: 'Thorough excision of all granulomas, scar tissue, and foreign material.', icon: Scissors },
      { title: 'Functional Preservation', desc: 'Priority on preserving erectile function, sensation, and urinary function.', icon: HeartPulse },
      { title: 'Aesthetic Restoration', desc: 'Reconstruction using skin grafts or flaps to restore natural appearance as much as possible.', icon: CheckCircle2 }
    ],
    benefitsRU: [
      { title: 'Опыт специалистов', desc: 'Выполняется урологами, имеющими опыт сложных случаев реконструкции полового члена.' },
      { title: 'Полное удаление инородного тела', desc: 'Тщательное иссечение всех гранулем, рубцовой ткани и инородного материала.' },
      { title: 'Функциональная сохранность', desc: 'Приоритет сохранения эректильной функции, чувствительности и функции мочеиспускания.' },
      { title: 'Эстетическое восстановление', desc: 'Реконструкция с использованием кожных лоскутов для максимально возможного восстановления естественного внешнего вида.' }
    ],
    candidates: [
      "Men with a history of non-medical penile injections (paraffin, silicone, olive oil, or other substances) who are experiencing symptoms.",
      "Those with penile deformity, hard lumps (granulomas), pain, or erectile dysfunction caused by foreign body reaction.",
      "Patients with chronic wounds, infection, inflammation, or discharge at the injection site.",
      "Individuals seeking surgical removal before further complications develop."
    ],
    candidatesAR: [
      'الرجال الذين يشتكون من حقن غير طبية سابقة (مثل البارافين أو السيليكون) في القضيب.',
      'الذين يعانون من تشوهات، كتل صلبة، ألم، أو التهابات متكررة بسبب رفض الجسم للمادة المحقونة.',
      'مرضى يعانون من تقرحات مزمنة أو إفرازات في موقع الحقن.',
      'الأفراد الذين يسعون للإزالة الجراحية قبل تطور مضاعفات خطيرة.'
    ],
    candidatesRU: [
      'Мужчины с историей немедицинских инъекций в половой член (парафин, силикон, оливковое масло или другие вещества), у которых наблюдаются симптомы.',
      'Лица с деформацией полового члена, твердыми уплотнениями (гранулемами), болью или эректильной дисфункцией, вызванными реакцией на инородное тело.',
      'Пациенты с хроническими ранами, инфекцией, воспалением или выделениями в месте инъекции.',
      'Лица, нуждающиеся в хирургическом удалении до развития дальнейших осложнений.'
    ],
    safety: {
      title: "Risks & Realistic Expectations",
      content: "Paraffinoma excision is a complex reconstructive procedure. The outcome depends on the severity of existing tissue damage and the volume of foreign material present. Potential risks include scarring, contour irregularities, changes in sensation, and in severe cases, some degree of compromised erectile function. Multiple staged procedures may be required for optimal reconstruction. Our team uses advanced surgical techniques and specialized equipment to achieve the best possible outcome.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'المخاطر والتوقعات الواقعية',
      content: 'تعتبر إزالة البارافينوما عملية ترميمية معقدة. تعتمد النتيجة على حجم التلف الموجود وكمية المادة المحقونة. المخاطر المحتملة تشمل حدوث ندبات، وتغيرات في الإحساس، وفي الحالات المتقدمة قد يحدث تأثير على وظيفة الانتصاب. قد تستلزم الحالة الشديدة إجراء عمليات على مراحل متعددة للوصول لأفضل نتيجة تجميلية ووظيفية.',
    },
    safetyRU: {
      title: 'Риски и реалистичные ожидания',
      content: 'Иссечение парафиномы — сложная реконструктивная процедура. Результат зависит от тяжести существующего повреждения тканей и объема присутствующего инородного материала. Возможные риски включают рубцевание, неровности контура, изменения чувствительности, а в тяжелых случаях — некоторую степень нарушения эректильной функции. Для оптимальной реконструкции может потребоваться несколько поэтапных процедур. Наша команда использует передовые хирургические методы и специализированное оборудование для достижения наилучшего возможного результата.'
    },
    procedure: [
      { step: '01', title: 'Diagnostic Assessment', desc: 'Thorough physical examination and imaging (MRI or ultrasound) to map the extent of foreign material and tissue damage.' },
      { step: '02', title: 'Surgical Excision', desc: 'Under general anesthesia, all granulomas, scar tissue, and foreign material are meticulously removed while preserving viable tissue.' },
      { step: '03', title: 'Reconstruction', desc: 'Skin grafts or tissue flaps are used to reconstruct the penile skin and restore both appearance and function.' },
      { step: '04', title: 'Post-Op Recovery', desc: 'Extended healing period (6-12 weeks). Close follow-up monitoring with potential revision surgery if needed.' }
    ],
    procedureAR: [
      { step: '01', title: 'التقييم التشخيصي', desc: 'فحص سريري دقيق وتصوير (مثل الموجات فوق الصوتية أو التصوير بالرنين المغناطيسي) لتحديد مدى انتشار المادة وحجم الضرر.' },
      { step: '02', title: 'الاستئصال الجراحي', desc: 'تحت التخدير العام، يتم إزالة الورم الحبيبي والمادة الغريبة بدقة شديدة للحفاظ على الأنسجة الحية السليمة.' },
      { step: '03', title: 'إعادة البناء', desc: 'استخدام طعوم جلدية أو سدائل لترميم جلد وساق القضيب للحصول على مظهر ووظيفة أقرب ما يكون للطبيعي.' },
      { step: '04', title: 'رعاية ما بعد الإجراء', desc: 'فترة تعافي قد تمتد (6-12 أسبوعاً) مع متابعة مركزة وتقديم إرشادات هامة للعناية بالطعوم.' }
    ],
    procedureRU: [
      { step: '01', title: 'Диагностическая оценка', desc: 'Тщательный физический осмотр и визуализация (МРТ или УЗИ) для определения объема инородного материала и повреждения тканей.' },
      { step: '02', title: 'Хирургическое иссечение', desc: 'Под общей анестезией все гранулемы, рубцовая ткань и инородный материал тщательно удаляются с сохранением жизнеспособных тканей.' },
      { step: '03', title: 'Реконструкция', desc: 'Для реконструкции кожи полового члена и восстановления как внешнего вида, так и функции используются кожные трансплантаты или тканевые лоскуты.' },
      { step: '04', title: 'Послеоперационное восстановление', desc: 'Длительный период заживления (6-12 недель). Тщательное последующее наблюдение с возможным повторным хирургическим вмешательством при необходимости.' }
    ],
    faq: [
      { q: "Can my penis look normal again after surgery?", a: "The outcome depends on the severity of existing damage. Our surgeons aim for maximum restoration of both appearance and function, but in severe cases with extensive tissue destruction, complete normalcy may not be fully achievable. Early treatment generally leads to better results." },
      { q: "Will this affect my erections or sexual function?", a: "Function recovery depends on the extent of nerve and tissue damage caused by the foreign substance. Our surgeons prioritize preserving erectile function during excision, but some degree of impairment may persist in cases with severe pre-existing damage." },
      { q: "Is there a cancer risk if I don't get treatment?", a: "Prolonged chronic inflammation from foreign body reaction can increase the risk of cellular mutation over time. This is one of the reasons why early surgical removal is strongly recommended — to prevent both the progressive tissue destruction and the long-term cancer risk." }
    ],
    faqAR: [
      { q: 'هل يمكن أن يبدو القضيب طبيعياً مرة أخرى بعد الجراحة؟', a: 'تعتمد النتيجة على شدة الضرر المسبق. يهدف جراحونا إلى تحقيق أقصى قدر من استعادة المظهر والوظيفة، لكن في الحالات الشديدة، قد لا يمكن الوصول لحالة طبيعية بنسبة 100%. العلاج المبكر يضمن دائماً نتائج أفضل.' },
      { q: 'هل ستؤثر الجراحة على الانتصاب أو الوظيفة الجنسية؟', a: 'يعتمد الأداء الوظيفي على مدى تلف الأعصاب والأنسجة بسبب المادة الغريبة. تُعطى الأولوية للحفاظ على وظيفة الانتصاب أثناء الاستئصال، ولكن قد تستمر بعض المشاكل إذا كان الضرر الأساسي عميقاً.' },
      { q: 'هل هناك خطر الإصابة بالسرطان إذا تجاهلت العلاج؟', a: 'الالتهاب المزمن طويل الأمد قد يزيد خطر حدوث طفرات خلوية وسرطان بمرور الوقت. هذا سبب رئيسي يجعل الإزالة الجراحية المبكرة ضرورة ملحة لمنع تدمير الأنسجة المستمر وخطر السرطان.' }
    ],
    faqRU: [
      { q: 'Сможет ли мой половой член снова выглядеть нормально после операции?', a: 'Результат зависит от тяжести существующих повреждений. Наши хирурги стремятся к максимальному восстановлению как внешнего вида, так и функции, но в тяжелых случаях с обширным разрушением тканей полное возвращение к норме может быть недостижимо. Раннее лечение обычно приводит к лучшим результатам.' },
      { q: 'Повлияет ли это на мою эрекцию или половую функцию?', a: 'Восстановление функции зависит от степени повреждения нервов и тканей, вызванного инородным веществом. Наши хирурги уделяют приоритетное внимание сохранению эректильной функции во время удаления, но некоторая степень нарушения может сохраниться в случаях с серьезными предшествующими повреждениями.' },
      { q: 'Существует ли риск развития рака, если я не буду лечиться?', a: 'Продолжительное хроническое воспаление, вызванное реакцией на инородное тело, со временем может увеличить риск клеточной мутации. Это одна из причин, по которой настоятельно рекомендуется раннее хирургическое удаление — чтобы предотвратить как прогрессирующее разрушение тканей, так и долгосрочный риск развития рака.' }
    ]
  },
  'Vasectomy': {
    title: 'Vasectomy (Permanent Male Contraception)',
    titleAR: 'استئصال الأسهر (قطع القناة الناقلة للمني لمنع الحمل بشكل دائم)',
    titleRU: 'Вазэктомия (Постоянная мужская контрацепция)',
    tagline: 'No-Scalpel Vasectomy The Safest and Most Effective Permanent Birth Control for Men. Quick Procedure, No Effect on Sexual Performance.',
    taglineAR: 'استئصال الأسهر بدون مشرط: الطريقة الأكثر أماناً وفعالية لتحديد النسل للرجال. إجراء سريع، لا يؤثر على الأداء الجنسي.',
    taglineRU: 'Вазэктомия без скальпеля — самый безопасный и эффективный метод постоянной контрацепции для мужчин. Быстрая процедура, не влияет на сексуальную функцию.',
    description: "A vasectomy is a minor outpatient procedure that provides permanent contraception by blocking the vas deferens the tubes that carry sperm from the testicles into the semen. It is recognized worldwide as the most effective form of birth control (over 99.9%), requires only local anesthesia, and most importantly, has absolutely no effect on testosterone levels, sexual desire, erections, or ejaculation. The semen volume remains unchanged it simply no longer contains sperm.",
    descriptionAR: 'استئصال الأسهر هو إجراء بسيط يتم في العيادة، ويوفر وسيلة دائمة لمنع الحمل عن طريق قطع الأنابيب الناقلة للحيوانات المنوية. يعتبر وسيلة تحديد النسل الأكثر فعالية في العالم (أكثر من 99.9%)، ويحتاج تخديراً موضعياً فقط، والأهم أنه لا يؤثر إطلاقاً على مستويات التستوستيرون، أو الرغبة، أو الانتصاب، أو القذف. يبقى حجم السائل المنوي كما هو ولم يعد يحتوي ببساطة على الحيوانات المنوية.',
    descriptionRU: 'Вазэктомия — это небольшая амбулаторная процедура, которая обеспечивает постоянную контрацепцию путем блокирования семявыносящих протоков — трубок, переносящих сперматозоиды из яичек в семенную жидкость. Она признана во всем мире как самая эффективная форма контроля рождаемости (более 99,9%), требует только местной анестезии и, самое главное, совершенно не влияет на уровень тестостерона, сексуальное желание, эрекцию или эякуляцию. Объем семенной жидкости остается неизменным — в ней просто больше не содержится сперматозоидов.',
    whatIsIt: {
      title: 'What is a No-Scalpel Vasectomy?',
      description: "A no-scalpel vasectomy is a modern, minimally invasive technique for permanent male contraception. Instead of a traditional incision, the urologist uses a specialized instrument to make a tiny puncture (3-5mm) in the scrotal skin to access the vas deferens. The tubes are then cut, sealed, or cauterized to permanently prevent sperm from reaching the semen. The procedure takes only 15-20 minutes under local anesthesia, and patients can go home the same day. Sexual function, hormone levels, and ejaculation remain completely unchanged."
    },
    whatIsItAR: {
      title: 'ما هو استئصال الأسهر بدون مشرط؟',
      description: 'إن تقنية قطع القناة الناقلة للمني بدون مشرط تمثل الحل الأحدث لوسائل منع الحمل الدائمة للرجال. بدلاً من الشق الجراحي التقليدي، يستخدم طبيب المسالك البولية أداة خاصة لعمل ثقب صغير جداً (3-5 مم) في جلد كيس الصفن للوصول إلى الأنبوب. تُقطع الأنابيب وتُغلق لمنع وصول الحيوانات المنوية إلى السائل المنوي نهائياً. يتم الإجراء تحت تأثير التخدير الموضعي في 15-20 دقيقة ويعود المريض للمنزل في نفس اليوم. الدوافع الجنسية والهرمونات تبقى طبيعية تماماً.'
    },
    whatIsItRU: {
      title: 'Что такое вазэктомия без скальпеля?',
      description: 'Вазэктомия без скальпеля — это современный малоинвазивный метод постоянной мужской контрацепции. Вместо традиционного разреза уролог использует специальный инструмент, чтобы сделать крошечный прокол (3-5 мм) в коже мошонки для доступа к семявыносящему протоку. Затем протоки перерезаются, перевязываются или прижигаются, чтобы навсегда предотвратить попадание сперматозоидов в семенную жидкость. Процедура занимает всего 15-20 минут под местной анестезией, и пациенты могут отправиться домой в тот же день. Сексуальная функция, уровень гормонов и эякуляция остаются совершенно неизменными.'
    },
    heroImage: '/assets/image/services section/vasectomy/vasectomy hero.webp',
    descriptionImage: '/assets/image/services section/vasectomy/vasectomy Clinical Mechanism.webp',
    video: null,
    stats: [
      { label: "Effectiveness", value: "99.9%+", icon: Trophy },
      { label: "Procedure Time", value: "15-20 Min", icon: Timer },
      { label: "Recovery", value: "1-2 Days", icon: Activity },
      { label: "Effect", value: "Permanent", icon: Infinity as any }
    ],
    statsAR: [
      { label: 'الفعالية' },
      { label: 'مدة الإجراء' },
      { label: 'التعافي' },
      { label: 'المفعول', value: 'دائم' }
    ],
    statsRU: [
      { label: 'Эффективность' },
      { label: 'Время процедуры' },
      { label: 'Восстановление' },
      { label: 'Эффект', value: 'Постоянный' }
    ],
    benefits: [
      { title: 'Highest Effectiveness', desc: 'Over 99.9% effective — the most reliable form of contraception available.', icon: Trophy },
      { title: 'No Effect on Sexual Function', desc: 'Erections, ejaculation, sensation, and semen volume remain completely normal.', icon: HeartPulse },
      { title: 'One-Time Permanent Solution', desc: 'A single procedure provides lifelong contraception. No pills, no devices, no repeat visits.', icon: Infinity as any },
      { title: 'Minimal Recovery Time', desc: 'Quick outpatient procedure. Most men return to normal activities within 1-2 days.', icon: Timer }
    ],
    benefitsAR: [
      { title: 'الفعالية القصوى', desc: 'فعالية تزيد عن 99.9 بالمئة، وهي الوسيلة الأكثر موثوقية لمنع الحمل.' },
      { title: 'لا تأثير على الوظيفة الجنسية', desc: 'الانتصاب، القذف، الإحساس وحجم السائل المنوي كلها تبقى طبيعية تماماً.' },
      { title: 'حل دائم في زيارة واحدة', desc: 'إجراء لمرة واحدة لمدى الحياة. لا أدوية، لا أجهزة، ولا زيارات متكررة.' },
      { title: 'وقت تعافي ضئيل', desc: 'إجراء سريع في العيادة الخارجية. يعود معظم الرجال للنشاط المعتاد خلال يومين.' }
    ],
    benefitsRU: [
      { title: 'Высочайшая эффективность', desc: 'Эффективность более 99,9% — самый надежный из доступных методов контрацепции.' },
      { title: 'Нет влияния на сексуальную функцию', desc: 'Эрекция, эякуляция, чувствительность и объем семенной жидкости остаются совершенно нормальными.' },
      { title: 'Единоразовое постоянное решение', desc: 'Одна процедура обеспечивает контрацепцию на всю жизнь. Никаких таблеток, устройств или повторных визитов.' },
      { title: 'Минимальное время восстановления', desc: 'Быстрая амбулаторная процедура. Большинство мужчин возвращаются к нормальной активности в течение 1-2 дней.' }
    ],
    candidates: [
      "Men who have completed their families and want a permanent, worry-free contraception method.",
      "Husbands who want to take on the responsibility of birth control to spare their partner from hormonal side effects.",
      "Couples seeking the most effective and safest long-term birth control option.",
      "Men who fully understand and accept that vasectomy is intended to be a permanent decision."
    ],
    candidatesAR: [
      'الرجال الذين اكتفوا بعائلتهم الحالية ويبحثون عن وسيلة منع حمل دائمة ومريحة.',
      'الأزواج الذين يفضلون تحمل الزوج لمسؤولية تحديد النسل لتجنب الآثار الجانبية الهرمونية للزوجة.',
      'الأزواج الباحثون عن الطريقة الأكثر أماناً وفعالية على المدى الطويل.',
      'الرجال الذين يدركون تماماً أن هذا الإجراء يعتبر قراراً نهائياً ودائماً.'
    ],
    candidatesRU: [
      'Мужчины, которые уже создали семью и хотят получить постоянный, надежный метод контрацепции.',
      'Мужья, которые хотят взять на себя ответственность за контроль над рождаемостью, чтобы избавить свою партнершу от гормональных побочных эффектов.',
      'Пары, ищущие наиболее эффективный и безопасный вариант долгосрочного контроля рождаемости.',
      'Мужчины, которые полностью понимают и принимают, что вазэктомия предназначена быть окончательным решением.'
    ],
    safety: {
      title: "Safety & Reversibility",
      content: "No-scalpel vasectomy is one of the safest urological procedures. The risk of infection is extremely low (<1%), and serious complications are very rare. Testosterone production, sexual desire, and erectile function are completely unaffected. Vasectomy reversal (vasovasostomy) is technically possible but success rates decrease over time (50-90%), the procedure is expensive, and fertility restoration is not guaranteed. For this reason, vasectomy should be considered a permanent decision.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'الأمان وإمكانية الرجوع',
      content: 'يعتبر الإجراء بدون مشرط من أكثر عمليات المسالك أماناً، حيث يكون خطر العدوى ضئيلاً جداً (أقل من 1%). لا توجد أية تأثيرات سلبية أو طويلة المدى على الهرمونات. في حين أن عملية عكس استئصال الأسهر ممكنة طبياً، إلا أن نسب النجاح تتناقص مع مرور الوقت (50-90%) وتكلفتها عالية وليست مضمونة دائماً. لهذا السبب، يُفترض أن تتخذ قرارك على أنه دائم.',
    },
    safetyRU: {
      title: 'Безопасность и обратимость',
      content: 'Вазэктомия без скальпеля — одна из самых безопасных урологических процедур. Риск инфекции крайне низок (<1%), а серьезные осложнения очень редки. Выработка тестостерона, сексуальное желание и эректильная функция совершенно не страдают. Обратная вазэктомия (вазовазостомия) технически возможна, но показатели успеха со временем снижаются (50-90%), процедура дорогая, а восстановление фертильности не гарантировано. По этой причине вазэктомию следует рассматривать как постоянное решение.'
    },
    timeline: {
      title: "Post-Vasectomy Recovery Timeline",
      steps: [
        { time: "Day 1-3", title: "Initial Recovery", desc: "Mild discomfort and swelling. Ice packs and rest recommended. Avoid heavy lifting." },
        { time: "Month 1-3", title: "Sperm Clearance Phase", desc: "Residual sperm may still be present in the downstream tubes. Continue using backup contraception until a semen analysis confirms zero sperm count." },
        { time: "Month 3+", title: "Sterility Confirmed", desc: "A semen analysis confirms zero sperm. Full contraception is now achieved." }
      ]
    },
    timelineAR: {
      title: 'الجدول الزمني للتعافي',
      steps: [
        { time: 'يوم 1-3', title: 'التعافي الأولي', desc: 'انزعاج خفيف أو تورم. ينصح بالكمادات الباردة والراحة وتجنب رفع الأثقال.' },
        { time: 'شهر 1-3', title: 'مرحلة تطهير الحيوانات المنوية', desc: 'قد تبقى بعض الحيوانات المنوية في الأنابيب السفلية؛ استمر في استخدام موانع الحمل البديلة حتى يؤكد تحليل السائل المنوي النتيجة الصفرية.' },
        { time: 'شهر 3+', title: 'تأكيد العقم', desc: 'تأكيد انعدام الحيوانات المنوية بعد التحليل. أنت الآن تتمتع بمنع حمل دائم ومضمون.' }
      ]
    },
    timelineRU: {
      title: 'Сроки восстановления после вазэктомии',
      steps: [
        { time: 'День 1-3', title: 'Начальное восстановление', desc: 'Легкий дискомфорт и отек. Рекомендуются пакеты со льдом и покой. Избегайте поднятия тяжестей.' },
        { time: 'Месяц 1-3', title: 'Фаза очищения от сперматозоидов', desc: 'Остаточные сперматозоиды все еще могут присутствовать в протоках ниже по течению. Продолжайте использовать резервные методы контрацепции, пока анализ спермы не подтвердит нулевое количество сперматозоидов.' },
        { time: 'Месяц 3+', title: 'Подтверждение стерильности', desc: 'Анализ спермы подтверждает отсутствие сперматозоидов. Теперь достигнута полная контрацепция.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Local Anesthesia', desc: 'Local anesthetic is applied to the scrotal area. The patient remains awake and comfortable throughout.' },
      { step: '02', title: 'No-Scalpel Access', desc: 'A tiny puncture (3-5mm) is made using a specialized instrument to access the vas deferens — no scalpel required.' },
      { step: '03', title: 'Ligation & Sealing', desc: 'The vas deferens is cut, tied, and/or cauterized on both sides to permanently block sperm passage.' },
      { step: '04', title: 'Closure & Discharge', desc: 'The puncture is closed with a small dressing. No stitches needed. Patients go home the same day.' }
    ],
    procedureAR: [
      { step: '01', title: 'التخدير الموضعي', desc: 'يتم تخدير منطقة كيس الصفن موضعياً، ويبقى المريض مستيقظاً ومرتاحاً تماماً.' },
      { step: '02', title: 'الوصول بدون مشرط', desc: 'باستخدام أداة خاصة يتم عمل ثقب مجهري (3-5 مم) للوصول للأسهر دون الحاجة للقطع بالمشرط الجراحي.' },
      { step: '03', title: 'الربط والقطع', desc: 'يتم قطع القناة وربطها أو كيها من الجانبين لمنع مسار الحيوانات المنوية بصورة تامة.' },
      { step: '04', title: 'الإنهاء والمغادرة', desc: 'يُغلق الثقب الصغير بضمادة بدون أي غرز خياطة. ويعود المريض للمنزل بعد دقائق معدودة.' }
    ],
    procedureRU: [
      { step: '01', title: 'Местная анестезия', desc: 'На область мошонки наносится местный анестетик. Пациент остается в сознании и чувствует себя комфортно на протяжении всей процедуры.' },
      { step: '02', title: 'Доступ без скальпеля', desc: 'Специальным инструментом делается крошечный прокол (3-5 мм) для доступа к семявыносящему протоку — скальпель не требуется.' },
      { step: '03', title: 'Перевязка и герметизация', desc: 'Семявыносящий проток перерезается, перевязывается и/или прижигается с обеих сторон, чтобы навсегда заблокировать прохождение сперматозоидов.' },
      { step: '04', title: 'Закрытие и выписка', desc: 'Прокол закрывается небольшой повязкой. Наложение швов не требуется. Пациенты отправляются домой в тот же день.' }
    ],
    faq: [
      { q: "Is the vasectomy effective immediately?", a: "No. Residual sperm remain in the downstream portion of the vas deferens for several weeks after the procedure. You must continue using backup contraception until a semen analysis (performed approximately 3 months post-procedure) confirms a zero sperm count." },
      { q: "Will it affect my sex drive, weight, or hormones?", a: "No. The testicles continue to produce testosterone normally. Your sex drive, erections, orgasm intensity, and ejaculation volume are completely unaffected. Vasectomy has no hormonal side effects." },
      { q: "Can a vasectomy be reversed?", a: "Vasectomy reversal (vasovasostomy) is technically possible using microsurgery. However, success rates decrease over time (50-90% depending on years elapsed), the procedure is costly, and fertility restoration is not guaranteed. Vasectomy should be viewed as a permanent decision." }
    ],
    faqAR: [
      { q: 'هل الإجراء فعال فوراً لمنع الحمل؟', a: 'لا، تظل هناك بقايا من الحيوانات المنوية في المجرى بعد الإجراء. يجب الاستمرار باستخدام وسائل وقاية أخرى حتى يثبت تحليل السائل المنوي (بعد قرابة 3 أشهر) نتيجة صفرية.' },
      { q: 'هل سيؤثر ذلك على الرغبة الجنسية، الوزن، أو الهرمونات؟', a: 'إطلاقاً. تستمر الخصيتان بإنتاج هرمون التستوستيرون بشكل طبيعي بالكامل، ولا يوجد أي ارتباط بالإجراء لزيادة الوزن. كل ما سيتغير في السائل المنوي هو غياب الحيوانات المنوية فقط (أقل من 3% من حجمه الكلي).' },
      { q: 'هل يمكن التراجع عن العملية (فك الربط)؟', a: 'العملية العكسية (إعادة ربط الأسهر) ممكنة طبياً بجراحة دقيقة معقدة، لكن نسبة نجاحها غير المضمون تنخفض تدريجياً بمرور السنوات منذ إجراء الربط، بالإضافة لتكلفتها الباهظة. يجب التعامل مع هذه العمليات على أنها قرارات نهائية وغير عكسية.' }
    ],
    faqRU: [
      { q: 'Эффективна ли вазэктомия сразу?', a: 'Нет. Остаточные сперматозоиды остаются в нижней части семявыносящего протока в течение нескольких недель после процедуры. Вы должны продолжать использовать резервные методы контрацепции, пока анализ спермы (проводимый примерно через 3 месяца после процедуры) не подтвердит нулевое количество сперматозоидов.' },
      { q: 'Повлияет ли это на мое половое влечение, вес или гормоны?', a: 'Нет. Яички продолжают нормально вырабатывать тестостерон. Ваше половое влечение, эрекция, интенсивность оргазма и объем эякулята совершенно не меняются. Вазэктомия не имеет гормональных побочных эффектов.' },
      { q: 'Можно ли сделать вазэктомию обратимой?', a: 'Обратная вазэктомия (вазовазостомия) технически возможна с использованием микрохирургии. Однако показатели успеха со временем снижаются (50-90% в зависимости от прошедших лет), процедура является дорогостоящей, и восстановление фертильности не гарантировано. Вазэктомию следует рассматривать как окончательное решение.' }
    ]
  },
  'Flexible Cystoscopy': {
    title: 'Flexible Cystoscopy (Bladder Examination)',
    titleAR: 'تنظير المثانة المرن (فحص المثانة المنظاري)',
    titleRU: 'Гибкая цистоскопия (Обследование мочевого пузыря)',
    tagline: 'High-Definition Bladder and Urethral Examination Quick, Comfortable, and Performed Under Local Anesthesia with No Downtime.',
    taglineAR: 'فحص دقيق ومريح للمثانة والإحليل، يُجرى تحت التخدير الموضعي (جِل) وبدون فترة انقطاع.',
    taglineRU: 'Высокоточное обследование мочевого пузыря и уретры. Быстро, комфортно и под местной анестезией без периода реабилитации.',
    heroImage: '/assets/image/services section/flexible cystoscopy menu.webp',
    whatIsIt: {
      title: 'What is Flexible Cystoscopy?',
      description: "Flexible cystoscopy is a minimally invasive diagnostic procedure that allows a urologist to directly examine the lining of the bladder and the urethra using a thin, soft, bendable scope. Unlike older rigid cystoscopes, the flexible design follows the body's natural curves, resulting in significantly less discomfort. The procedure is performed under local anesthesia (topical gel), takes only 5-10 minutes, and patients can return to normal activities immediately afterward."
    },
    whatIsItAR: {
      title: 'ما هو تنظير المثانة المرن؟',
      description: 'تنظير المثانة المرن هو إجراء تشخيصي بأقل تدخل جراحي يسمح لطبيب المسالك البولية بالفحص المباشر لبطانة المثانة والإحليل باستخدام منظار رفيع، ناعم، ومرن. على عكس المناظير الصلبة القديمة، يتكيف التصميم المرن مع الانحناءات الطبيعية للجسم، مما يقلل بشكل كبير من أي ألم أو انزعاج. يُجرى الإجراء في العيادة باستخدام تخدير موضعي (جِل)، ويستغرق 5-10 دقائق، ويمكن بعدها العودة للحياة الطبيعية فوراً.'
    },
    whatIsItRU: {
      title: 'Что такое гибкая цистоскопия?',
      description: 'Гибкая цистоскопия — это малоинвазивная диагностическая процедура, которая позволяет урологу непосредственно осмотреть слизистую оболочку мочевого пузыря и уретры с помощью тонкого, мягкого, гибкого эндоскопа. В отличие от старых жестких цистоскопов, гибкая конструкция повторяет естественные изгибы тела, что приводит к значительно меньшему дискомфорту. Процедура проводится под местной анестезией (гель местного действия), занимает всего 5-10 минут, и пациенты могут вернуться к нормальной активности сразу после ее завершения.'
    },
    description: "This advanced diagnostic tool is essential for identifying the root cause of urinary symptoms. By providing a clear, direct view of the urinary tract, it ensures accurate diagnosis and effective treatment planning.\n\n**The Clinical Mechanism & Diagnostic Power:**\n\n1. **High-Definition Visualization:** The flexible cystoscope is equipped with a high-resolution camera and light source. It is gently inserted through the urethra, allowing the doctor to inspect the **entire bladder lining**, **urethra**, and **prostate** (in men) with exceptional clarity.\n\n2. **What We Detect:**\n   *   **Hematuria:** Investigates the source of blood in the urine.\n   *   **Bladder Tumors:** Early detection of bladder cancer or polyps.\n   *   **Stones:** Identifies bladder stones causing pain or blockage.\n   *   **Strictures:** Detects narrowing of the urethra hindering urine flow.\n   *   **BPH:** Assesses the degree of prostate enlargement blocking the urethra.\n\n3. **Why 'Flexible' Matters:** The soft, pliable design causes **minimal friction** and **significantly less discomfort** compared to rigid scopes. Performed under local anesthesia (topical gel), the procedure is quick (5-10 mins) and patients can return to normal activities immediately.",
    descriptionAR: 'هذه الأداة التشخيصية المتقدمة ضرورية لتحديد السبب الجذري لأعراض المسالك البولية. توفر رؤية واضحة ومباشرة للمسالك البولية مما يضمن التشخيص الدقيق والتخطيط الفعال للعلاج.\n\n**الآلية السريرية والقوة التشخيصية:**\n\n1. **تصوير عالي الدقة:** المنظار مزود بكاميرا عالية الدقة ومصدر إضاءة. يتم إدخاله بلطف عبر الإحليل لفحص **كامل جدار المثانة**، و**الإحليل**، و**البروستاتا** (عند الرجال) بوضوح فائق.\n\n2. **ماذا نكتشف؟**\n   * **البيلة الدموية (الدم):** التقصي عن سبب وجود دم في البول.\n   * **أورام المثانة:** الكشف المبكر عن أي سلائل أو أورام.\n   * **الحصوات:** تحديد حصوات المثانة التي تسبب الألم أو الانسداد.\n   * **التضيقات:** اكتشاف تضيق الإحليل الذي يعيق تدفق البول.\n   * **تضخم البروستاتا:** تقييم درجة تضخم البروستاتا وآثارها.\n\n3. **لماذا يهم أن يكون مرناً؟** التصميم الناعم يسبب **أقل قدر من الاحتكاك** و**راحة أعلى بكثير** مقارنة بالمناظير الصلبة.',
    descriptionRU: 'Этот передовой диагностический инструмент необходим для выявления первопричины мочевых симптомов. Обеспечивая четкий прямой обзор мочевыводящих путей, он гарантирует точную диагностику и эффективное планирование лечения.\n\n**Клинический механизм и диагностические возможности:**\n\n1. **Визуализация высокой четкости:** Гибкий цистоскоп оснащен камерой высокого разрешения и источником света. Он аккуратно вводится через уретру, позволяя врачу с исключительной ясностью осмотреть **всю слизистую оболочку мочевого пузыря**, **уретру** и **простату** (у мужчин).\n\n2. **Что мы обнаруживаем:**\n   * **Гематурия:** Исследование источника крови в моче.\n   * **Опухоли мочевого пузыря:** Раннее выявление рака или полипов мочевого пузыря.\n   * **Камни:** Выявление камней мочевого пузыря, вызывающих боль или закупорку.\n   * **Стриктуры:** Выявление сужения уретры, препятствующего оттоку мочи.\n   * **ДГПЖ:** Оценка степени увеличения простаты, блокирующей уретру.\n\n3. **Почему важна «гибкость»:** Мягкая, податливая конструкция вызывает **минимальное трение** и **значительно меньше дискомфорта** по сравнению с жесткими эндоскопами. Выполняемая под местной анестезией (гель местного действия), процедура проходит быстро (5-10 минут), и пациенты могут немедленно вернуться к нормальной активности.',
    descriptionImage: '/assets/image/services section/Flexible Cystoscopy/flexible cystoscopy clinical mechanism.webp',
    video: null,
    timeline: {
      title: "Procedure & Recovery Timeline",
      steps: [
        { time: "Day 1", title: "Diagnostic Examination", desc: "Procedure takes 5-10 minutes. Mild burning sensation during the first 1-2 urinations is normal and temporary." },
        { time: "Day 2", title: "Full Recovery", desc: "Any minor irritation typically resolves within 24 hours. Normal activities can be fully resumed." },
        { time: "Follow-up", title: "Results & Treatment Plan", desc: "Doctor discusses findings with you immediately after the procedure, or schedules a follow-up consultation if further tests are needed." }
      ]
    },
    timelineAR: {
      title: 'الإجراء والتعافي',
      steps: [
        { time: 'اليوم 1', title: 'الفحص التشخيصي', desc: 'يستغرق من 5 لـ 10 دقائق. الإحساس بحرقة خفيفة عند التبول لمرة أو مرتين طبيعي جداً.' },
        { time: 'اليوم 2', title: 'التعافي التام', desc: 'يختفي أي تهيج طفيف تماماً خلال 24 ساعة. عودة فورية للحياة العادية.' },
        { time: 'المتابعة', title: 'النتائج والخطة', desc: 'يناقش الطبيب النتائج معك مباشرة، أو يجدول زيارة للمتابعة إذا تطلب الأمر تحاليل إضافية.' }
      ]
    },
    timelineRU: {
      title: 'Процедура и сроки восстановления',
      steps: [
        { time: 'День 1', title: 'Диагностическое обследование', desc: 'Процедура занимает 5-10 минут. Легкое чувство жжения во время первых 1-2 мочеиспусканий является нормальным и временным.' },
        { time: 'День 2', title: 'Полное восстановление', desc: 'Любое незначительное раздражение обычно проходит в течение 24 часов. Можно полностью возобновить обычную деятельность.' },
        { time: 'Наблюдение', title: 'Результаты и план лечения', desc: 'Врач обсуждает с вами результаты сразу после процедуры или назначает повторную консультацию, если необходимы дополнительные анализы.' }
      ]
    },
    stats: [
      { label: "Diagnostic Accuracy", value: "95%+", icon: Trophy },
      { label: "Procedure Time", value: "5-10 Min", icon: Timer },
      { label: "Recovery", value: "None", icon: Activity },
      { label: "Anesthesia", value: "Topical Gel", icon: ShieldCheck }
    ],
    statsAR: [
      { label: 'الدقة التشخيصية' },
      { label: 'وقت الإجراء' },
      { label: 'التعافي' },
      { label: 'التخدير' }
    ],
    statsRU: [
      { label: 'Точность диагностики' },
      { label: 'Время процедуры' },
      { label: 'Восстановление' },
      { label: 'Анестезия' }
    ],
    benefits: [
      { title: 'Minimal Discomfort', desc: 'Topical anesthetic gel and flexible scope design ensure a comfortable experience with minimal pain.', icon: Smile as any },
      { title: 'Immediate Results', desc: 'Real-time high-definition visualization. Doctor can identify findings instantly during the procedure.', icon: Timer },
      { title: 'No Hospitalization', desc: 'Performed in-office under local anesthesia. No admission required. Resume normal activities the same day.', icon: Activity },
      { title: 'Direct Visualization', desc: 'Directly detects bladder stones, tumors, urethral strictures, and inflammation with over 95% accuracy.', icon: Microscope }
    ],
    benefitsRU: [
      { title: 'Минимальный дискомфорт', desc: 'Местный анестезирующий гель и гибкая конструкция эндоскопа обеспечивают комфорт с минимальными болевыми ощущениями.' },
      { title: 'Немедленные результаты', desc: 'Визуализация высокого разрешения в реальном времени. Врач может мгновенно определить результаты во время процедуры.' },
      { title: 'Без госпитализации', desc: 'Проводится в кабинете врача под местной анестезией. Госпитализация не требуется. Возвращение к нормальной жизни в тот же день.' },
      { title: 'Прямая визуализация', desc: 'Прямое обнаружение камней мочевого пузыря, опухолей, стриктур уретры и воспалений с точностью более 95%.' }
    ],
    candidates: [
      "Patients with hematuria (blood in urine) requiring investigation of the cause.",
      "Those with recurrent or chronic urinary tract infections (UTIs).",
      "Men experiencing lower urinary tract symptoms (LUTS) such as weak stream, frequent urination, or incomplete emptying.",
      "Patients requiring bladder cancer surveillance after previous treatment."
    ],
    candidatesAR: [
      'المرضى الذين اكتشفوا دماً في البول (البيلة الدموية) ويجب تقصي مصدره.',
      'من يعانون من التهابات المسالك البولية (UTIs) المتكررة أو المزمنة.',
      'الرجال الذين يواجهون ضعفاً في تدفق البول، أو صعوبة في التفريغ الكامل والتكرار.',
      'المرضى الذين يحتاجون إلى متابعة دورية بعد علاج سابق لأورام المثانة.'
    ],
    candidatesRU: [
      'Пациенты с гематурией (кровь в моче), требующие выяснения причины.',
      'Лица с рецидивирующими или хроническими инфекциями мочевыводящих путей (ИМП).',
      'Мужчины, испытывающие симптомы нижних мочевыводящих путей (СНМП), такие как слабая струя, частое мочеиспускание или неполное опорожнение.',
      'Пациенты, нуждающиеся в наблюдении за раком мочевого пузыря после предыдущего лечения.'
    ],
    safety: {
      title: "Safety & Comfort",
      content: "Flexible cystoscopy is an extremely safe procedure. The most common after-effect is a mild burning sensation during the first 1-2 urinations, which resolves within 24 hours. Drinking plenty of water after the procedure helps. Serious complications such as infection or significant bleeding are very rare (<1%).",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'الأمان والراحة',
      content: 'يعد أحد أكثر الإجراءات أماناً ودقة. العَرَض الأبرز هو شعور مؤقت بالحرقة يزول بشرب الماء خلال 24 ساعة. المضاعفات الخطيرة شبه معدومة.',
    },
    safetyRU: {
      title: 'Безопасность и комфорт',
      content: 'Гибкая цистоскопия — чрезвычайно безопасная процедура. Наиболее частым последствием является легкое чувство жжения во время первых 1-2 мочеиспусканий, которое проходит в течение 24 часов. Обильное питье воды после процедуры помогает. Серьезные осложнения, такие как инфекция или сильное кровотечение, встречаются очень редко (<1%).'
    },
    procedure: [
      { step: '01', title: 'Preparation', desc: 'Topical anesthetic gel is applied to the urethra for numbing and lubrication. Patient lies comfortably on the exam table.' },
      { step: '02', title: 'Scope Insertion', desc: 'The thin, flexible scope is gently inserted through the urethra into the bladder. Most patients feel only mild pressure.' },
      { step: '03', title: 'Examination', desc: 'Sterile water gently fills the bladder for optimal visualization. The doctor examines the urethra and entire bladder lining on a monitor.' },
      { step: '04', title: 'Completion', desc: 'Scope is removed. Results are discussed immediately. Patient can get dressed and leave right away.' }
    ],
    procedureAR: [
      { step: '01', title: 'التحضير', desc: 'يتم استخدام جِل مخدر موضعي لتخدير وتسهيل الإجراء. يستلقي المريض براحة.' },
      { step: '02', title: 'إدخال المنظار', desc: 'إدخال المنظار المرن بلطف، ومعظم المرضى لا يشعرون سوى بضغط بسيط.' },
      { step: '03', title: 'الفحص', desc: 'يتم ملء المثانة بماء معقم لرؤية مثالية ومباشرة لجدار المثانة.' },
      { step: '04', title: 'الانتهاء', desc: 'سحب المنظار، ومناقشة النتائج فوراً قبل المغادرة.' }
    ],
    procedureRU: [
      { step: '01', title: 'Подготовка', desc: 'Местный анестезирующий гель наносится на уретру для обезболивания и смазки. Пациент удобно лежит на смотровом столе.' },
      { step: '02', title: 'Введение эндоскопа', desc: 'Тонкий, гибкий эндоскоп осторожно вводится через уретру в мочевой пузырь. Большинство пациентов чувствуют лишь легкое давление.' },
      { step: '03', title: 'Обследование', desc: 'Стерильная вода осторожно заполняет мочевой пузырь для оптимальной визуализации. Врач осматривает уретру и всю слизистую мочевого пузыря на мониторе.' },
      { step: '04', title: 'Завершение', desc: 'Эндоскоп извлекается. Результаты обсуждаются немедленно. Пациент может одеться и сразу уйти.' }
    ],
    faq: [
      { q: "Is the procedure painful?", a: "Most patients describe it as mild pressure or a brief stinging sensation rather than pain. The flexible scope bends to follow the body's natural curves, and the topical anesthetic gel significantly reduces discomfort." },
      { q: "How should I prepare for the procedure?", a: "No fasting is required. You can eat and drink normally before your appointment. It is recommended to empty your bladder before the procedure begins." },
      { q: "Will I experience discomfort when urinating afterward?", a: "A mild burning sensation during the first 1-2 urinations is normal and temporary. Drinking plenty of water helps flush the urinary tract. Symptoms typically resolve completely within 24 hours." }
    ],
    faqAR: [
      { q: 'هل الإجراء مؤلم؟', a: 'معظم المرضى يصفونه بأنه مجرد شعور بضغط أو لسعة خفيفة. مرونة المنظار، وتخدير الجِل الموضعي يخففان الانزعاج بدرجة كبيرة.' },
      { q: 'كيف أستعد للمنظار؟', a: 'لا حاجة للصيام. يمكنك الأكل والشرب بشكل طبيعي، وقد يُطلب منك تفريغ المثانة قبل البدء.' },
      { q: 'هل سأشعر بالحرقة عند التبول لاحقاً؟', a: 'نعم، إحساس بسيط بالحرقة لمرة أو مرتين طبيعي وسيزول سريعاً بشرب كميات وفيرة من المياه لطرد أي تهيج.' }
    ],
    faqRU: [
      { q: 'Процедура болезненная?', a: 'Большинство пациентов описывают ее как легкое давление или кратковременное жжение, а не как боль. Гибкий эндоскоп изгибается, повторяя естественные изгибы тела, а местный анестезирующий гель значительно уменьшает дискомфорт.' },
      { q: 'Как мне подготовиться к процедуре?', a: 'Голодать не нужно. Вы можете нормально есть и пить перед приемом. Рекомендуется опорожнить мочевой пузырь до начала процедуры.' },
      { q: 'Буду ли я испытывать дискомфорт при мочеиспускании после этого?', a: 'Легкое чувство жжения во время первых 1-2 мочеиспусканий является нормальным и временным. Обильное питье воды помогает промыть мочевыводящие пути. Симптомы обычно полностью исчезают в течение 24 часов.' }
    ]
  },
  'Ultrasound': {
    title: 'Advanced Urological Ultrasound & Doppler',
    titleAR: 'تخطيط الصدى للمسالك البولية والدوبلر (Ultrasound)',
    titleRU: 'Передовое урологическое УЗИ и допплерография',
    tagline: 'Non-Invasive, Radiation-Free Imaging for Kidney Stones, Prostate Evaluation, ED Diagnosis, and Male Reproductive Health.',
    taglineAR: 'تصوير دقيق، غير جراحي وبدون إشعاع لتشخيص حصوات الكلى، وتقييم البروستاتا، وضعف الانتصاب، والصحة الإنجابية للرجال.',
    taglineRU: 'Неинвазивная визуализация без облучения для диагностики камней в почках, оценки простаты, диагностики ЭД и мужского репродуктивного здоровья.',
    description: "",
    descriptionAR: "",
    descriptionRU: "",
    whatIsIt: {
      title: 'What is Urological Ultrasound?',
      description: "Urological ultrasound uses high-frequency sound waves to create real-time images of the kidneys, bladder, prostate, and reproductive organs. It is a non-invasive, radiation-free diagnostic tool that allows urologists to visualize internal structures, detect kidney and bladder stones, measure organ size, and evaluate blood flow using Doppler technology. The procedure is completely painless, requires no anesthesia, and results are available immediately.",
      image: '/assets/image/services section/ultrasound/ultrasound-1.webp'
    },
    whatIsItAR: {
      title: 'ما هو الفحص بالموجات فوق الصوتية (Ultrasound)؟',
      description: 'الموجات فوق الصوتية للمسالك البولية هي أداة تشخيصية لا تعتمد على الإشعاع، تستخدم موجات صوتية عالية التردد لإنشاء صور حية للكلى والمثانة والبروستاتا والأعضاء التناسلية. تتيح لأطباء المسالك البولية اكتشاف الحصوات، وقياس حجم الأعضاء، وتقييم تدفق الدم باستخدام تقنية הדופלר (Doppler). الفحص غير مؤلم نهائياً، لا يحتاج لأي تخدير، وتظهر نتائجه فوراً.'
    },
    whatIsItRU: {
      title: 'Что такое урологическое УЗИ?',
      description: 'Урологическое УЗИ использует высокочастотные звуковые волны для создания изображений почек, мочевого пузыря, простаты и репродуктивных органов в реальном времени. Это неинвазивный диагностический инструмент без излучения, который позволяет урологам визуализировать внутренние структуры, обнаруживать камни в почках и мочевом пузыре, измерять размер органов и оценивать кровоток с помощью допплеровской технологии. Процедура совершенно безболезненна, не требует анестезии, а результаты доступны немедленно.'
    },
    heroImage: '/assets/image/services section/ultrasound menu.webp',
    descriptionImage: '',
    video: null,
    testPanels: [
      {
        title: "U/S KUB (Kidneys, Ureters, Bladder)",
        items: [
          "Detects Kidney & Bladder Stones (>2mm)",
          "Hydronephrosis (Kidney Swelling)",
          "Bladder Tumors & Masses",
          "Pre & Post-Void Residual Volume",
          "Cysts & Structural Abnormalities"
        ],
        icon: Search
      },
      {
        title: "Penile Doppler Ultrasound (ED Diagnosis)",
        items: [
          "Gold Standard for Erectile Dysfunction Diagnosis",
          "Measures Arterial Inflow (Peak Systolic Velocity)",
          "Detects Venous Leak (End Diastolic Velocity)",
          "Peyronie's Disease Plaque Evaluation",
          "Penile Fibrosis & Tissue Assessment"
        ],
        icon: Activity
      },
      {
        title: "Transrectal Ultrasound (TRUS) — Prostate",
        items: [
          "Prostate Volume Measurement",
          "BPH Severity Assessment",
          "Prostate Cancer Screening",
          "Biopsy Guidance (if indicated)",
          "Seminal Vesicle Evaluation"
        ],
        icon: Target
      },
      {
        title: "Scrotal & Testicular Ultrasound",
        items: [
          "Varicocele Diagnosis (Male Infertility)",
          "Testicular Masses or Tumors",
          "Hydrocele (Fluid Collection)",
          "Epididymitis (Inflammation)",
          "Testicular Torsion (Emergency Blood Flow Assessment)"
        ],
        icon: Layers
      }
    ],
    testPanelsAR: [
      {
        title: 'سونار الكلى والمثانة (KUB)',
        items: [
          'الكشف عن حصوات الكلى والمثانة (>2مم)',
          'تضخم الكلى (استسقاء الكلية)',
          'أورام وكتل المثانة',
          'قياس حجم البول المتبقي بعد التبول',
          'التكيسات والتشوهات الهيكلية'
        ]
      },
      {
        title: 'سونار القضيب والدوبلر (لتشخيص ضعف الانتصاب)',
        items: [
          'المعيار الذهبي لتشخيص ضعف الانتصاب',
          'قياس التدفق الشرياني (سرعة التدفق الانقباضي)',
          'الكشف عن التسرب الوريدي (سرعة التدفق الانبساطي)',
          'تقييم لوحات مرض بيروني',
          'التقييم الشامل لتليف أنسجة القضيب'
        ]
      },
      {
        title: 'سونار البروستاتا (عبر المستقيم / TRUS)',
        items: [
          'قياس حجم البروستاتا بدقة',
          'تقييم شدة تضخم البروستاتا الحميد (BPH)',
          'الكشف عن أورام أو تكلسات البروستاتا',
          'توجيه الخزعات إذا دعت الحاجة',
          'تقييم الحويصلات المنوية'
        ]
      },
      {
        title: 'سونار الخصية وكيس الصفن',
        items: [
          'تشخيص دوالي الخصية وتقييم العقم للرجال',
          'الكشف عن أورام أو كتل الخصية',
          'تشخيص القيلة المائية (تجمع السوائل)',
          'التهاب البربخ',
          'التواء الخصية (تقييم طارئ لتدفق الدم)'
        ]
      }
    ],
    testPanelsRU: [
      {
        title: 'УЗИ почек, мочеточников, мочевого пузыря',
        items: [
          'Обнаружение камней в почках и мочевом пузыре (>2 мм)',
          'Гидронефроз (отек почки)',
          'Опухоли и образования мочевого пузыря',
          'Объем остаточной мочи',
          'Кисты и структурные аномалии'
        ]
      },
      {
        title: 'Допплерография сосудов полового члена (Диагностика ЭД)',
        items: [
          'Золотой стандарт диагностики эректильной дисфункции',
          'Измерение артериального притока (пиковая систолическая скорость)',
          'Выявление венозной утечки (конечная диастолическая скорость)',
          'Оценка бляшек при болезни Пейрони',
          'Оценка фиброза и тканей полового члена'
        ]
      },
      {
        title: 'Трансректальное УЗИ (ТРУЗИ) — Простата',
        items: [
          'Измерение объема простаты',
          'Оценка тяжести ДГПЖ',
          'Скрининг на рак простаты',
          'Наведение при биопсии (при наличии показаний)',
          'Оценка семенных пузырьков'
        ]
      },
      {
        title: 'УЗИ мошонки и яичек',
        items: [
          'Диагностика варикоцеле (мужское бесплодие)',
          'Образования или опухоли яичек',
          'Гидроцеле (скопление жидкости)',
          'Эпидидимит (воспаление)',
          'Перекрут яичка (экстренная оценка кровотока)'
        ]
      }
    ],
    benefits: [
      { title: 'Non-Invasive & Painless', desc: 'No needles, no radiation, no anesthesia. Completely painless and safe for repeated examinations.', icon: ShieldCheck },
      { title: 'Doppler Blood Flow Analysis', desc: 'Advanced Doppler technology visualizes arterial and venous blood flow for accurate ED and varicocele diagnosis.', icon: Activity },
      { title: 'Comprehensive Evaluation', desc: 'Evaluates kidneys, bladder, prostate, testicles, and reproductive organs in a single session.', icon: Search },
      { title: 'Immediate Results', desc: 'Doctor reviews key findings with you immediately after the scan. Full report within 24 hours.', icon: Timer }
    ],
    benefitsRU: [
      { title: 'Неинвазивно и безболезненно', desc: 'Никаких игл, никакого облучения, никакой анестезии. Совершенно безболезненно и безопасно для повторных обследований.' },
      { title: 'Анализ кровотока с помощью допплера', desc: 'Передовая допплеровская технология визуализирует артериальный и венозный кровоток для точной диагностики ЭД и варикоцеле.' },
      { title: 'Комплексная оценка', desc: 'Оценка почек, мочевого пузыря, простаты, яичек и репродуктивных органов за один сеанс.' },
      { title: 'Немедленные результаты', desc: 'Врач обсуждает с вами основные результаты сразу после сканирования. Полный отчет в течение 24 часов.' }
    ],
    candidates: [
      "Patients with suspected kidney or bladder stones requiring confirmation.",
      "Men with lower urinary tract symptoms (LUTS) for prostate size evaluation.",
      "Those investigating vascular causes of erectile dysfunction (ED).",
      "Couples investigating male factor infertility (varicocele screening).",
      "Patients requiring monitoring of cysts, masses, or structural abnormalities."
    ],
    candidatesAR: [
      'المرضى الذين يُشتبه في وجود حصوات في الكلى أو المثانة لديهم.',
      'الرجال الذين يعانون من أعراض تضخم البروستاتا وضعف تدفق البول.',
      'الذين يبحثون عن الأسباب الوعائية لضعف الانتصاب.',
      'الأزواج الذين يشتكون من تأخر الإنجاب (فحص دوالي الخصية).',
      'المرضى الذين يحتاجون لمتابعة دورية لتكيسات أو تضخمات.'
    ],
    candidatesRU: [
      'Пациенты с подозрением на камни в почках или мочевом пузыре, требующие подтверждения.',
      'Мужчины с симптомами нижних мочевыводящих путей (СНМП) для оценки размера простаты.',
      'Лица, исследующие сосудистые причины эректильной дисфункции (ЭД).',
      'Пары, исследующие мужской фактор бесплодия (скрининг на варикоцеле).',
      'Пациенты, нуждающиеся в наблюдении за кистами, образованиями или структурными аномалиями.'
    ],
    safety: {
      title: "Safety & Information",
      content: "Ultrasound is completely safe, painless, and uses no ionizing radiation. There are no known side effects or risks. The procedure can be repeated as often as medically necessary without any harm to the body.",
      icon: ShieldCheck
    },
    safetyAR: {
      title: 'الأمان والمعلومات',
      content: 'يعد جهاز الموجات فوق الصوتية آمناً تماماً وبلا إشعاع. الإجراء غير مؤلم بتاتاً ويمكن تكراره متى استدعت الحاجة دون أي أضرار على الجسم.',
    },
    safetyRU: {
      title: 'Безопасность и информация',
      content: 'УЗИ абсолютно безопасно, безболезненно и не использует ионизирующее излучение. Известных побочных эффектов или рисков нет. Процедуру можно повторять так часто, как это необходимо по медицинским показаниям, без какого-либо вреда для организма.'
    },
    timeline: {
      title: "Imaging Process & Results",
      steps: [
        { time: "Visit", title: "Ultrasound Scanning", desc: "Non-invasive scan takes 15-30 minutes depending on the areas being examined." },
        { time: "Same Day", title: "Preliminary Review", desc: "Doctor reviews and discusses key findings with you immediately after the scan." },
        { time: "24 Hours", title: "Full Report", desc: "Comprehensive documented report with images provided for your medical records and follow-up consultation." }
      ]
    },
    timelineAR: {
      title: 'مسار الفحص والنتائج',
      steps: [
        { time: 'الزيارة', title: 'التصوير بالسونار', desc: 'يستغرق الفحص من 15 إلى 30 دقيقة بحسب المنطقة المطلوبة.' },
        { time: 'نفس اليوم', title: 'المراجعة الأولية', desc: 'يقوم الطبيب بمراجعة ومناقشة النتائج معك فوراً.' },
        { time: '24 ساعة', title: 'التقرير النهائي', desc: 'اصدار تقرير شامل موثق بالصور لملفك الطبي.' }
      ]
    },
    timelineRU: {
      title: 'Процесс визуализации и результаты',
      steps: [
        { time: 'Визит', title: 'Ультразвуковое сканирование', desc: 'Неинвазивное сканирование занимает 15-30 минут в зависимости от исследуемых областей.' },
        { time: 'В тот же день', title: 'Предварительное рассмотрение', desc: 'Врач обсуждает с вами основные результаты сразу после сканирования.' },
        { time: '24 часа', title: 'Полный отчет', desc: 'Подробный документированный отчет с изображениями предоставляется для вашей медицинской карты и последующей консультации.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Preparation', desc: 'For bladder scan, drink 500ml of water 1 hour prior. No fasting is needed for other scans.' },
      { step: '02', title: 'Gel Application', desc: 'Warm ultrasound gel is applied to the skin to improve sound wave transmission and image quality.' },
      { step: '03', title: 'Scanning', desc: 'The specialist gently moves the ultrasound probe over the area. Real-time images appear on the monitor.' },
      { step: '04', title: 'Results', desc: 'The doctor discusses preliminary findings immediately. A detailed report with images is provided within 24 hours.' }
    ],
    procedureAR: [
      { step: '01', title: 'التحضير', desc: 'لفحص المثانة، يُطلب شرب 500 مل من الماء قبل التصوير بساعة. باقي الفحوصات لا تحتاج لصيام.' },
      { step: '02', title: 'تطبيق الجل', desc: 'الجل يُسهل انتقال الموجات الصوتية والحصول على صورة دقيقة.' },
      { step: '03', title: 'الفحص', desc: 'يُمرر الطبيب الجهاز الخارجي بلطف على المنطقة وتظهر الصور مباشرة على الشاشة.' },
      { step: '04', title: 'النتائج', desc: 'مناقشة سريعة وأولية مع المريض لتوضيح ماهية الفحوصات.' }
    ],
    procedureRU: [
      { step: '01', title: 'Подготовка', desc: 'Для сканирования мочевого пузыря выпейте 500 мл воды за 1 час до начала. Для других сканирований голодание не требуется.' },
      { step: '02', title: 'Нанесение геля', desc: 'Теплый ультразвуковой гель наносится на кожу для улучшения передачи звуковых волн и качества изображения.' },
      { step: '03', title: 'Сканирование', desc: 'Специалист аккуратно перемещает ультразвуковой датчик по области. Изображения в реальном времени появляются на мониторе.' },
      { step: '04', title: 'Результаты', desc: 'Врач немедленно обсуждает предварительные результаты. Подробный отчет с изображениями предоставляется в течение 24 часов.' }
    ],
    faq: [
      { q: "Is Penile Doppler ultrasound painful?", a: "The ultrasound itself is painless. A small injection of medication may be administered to induce an erection for accurate blood flow measurement. Most patients describe only mild discomfort from the injection." },
      { q: "How should I prepare for a KUB ultrasound?", a: "A full bladder helps visualize the bladder walls clearly. We recommend drinking 500ml of water approximately 1 hour before your appointment. No fasting is required." },
      { q: "Can ultrasound detect cancer?", a: "Ultrasound can detect suspicious masses, tumors, or structural abnormalities. If a suspicious finding is identified, further testing such as MRI or biopsy may be recommended for definitive diagnosis." }
    ],
    faqAR: [
      { q: 'هل الدوبلر لضعف الانتصاب مؤلم؟', a: 'الفحص نفسه غير مؤلم. قد يُعطى حقنة بسيطة لتحفيز الانتصاب لقياس تدفق الدم، ومعظم المرضى يصفونها بأنها وخزة محتملة جداً.' },
      { q: 'كيف أستعد لفحص الكلى والمثانة بالسونار؟', a: 'المثانة الممتلئة تساعد الشاشة على الرؤية الفائقة. نوصي بشرب نصف لتر من الماء قبل الموعد. لا يشترط الصيام.' },
      { q: 'هل يمكن للسونار كشف السرطان؟', a: 'نعم، في حالات الأورام أو الكتل المشبوهة، ويمكنه توجيه مسار الاستقصاء عبر الرنين المغناطيسي أو أخذ الخزعة.' }
    ],
    faqRU: [
      { q: 'Болезненна ли допплерография полового члена?', a: 'Само УЗИ безболезненно. Может быть введена небольшая инъекция лекарства, чтобы вызвать эрекцию для точного измерения кровотока. Большинство пациентов описывают лишь легкий дискомфорт от инъекции.' },
      { q: 'Как подготовиться к УЗИ почек и мочевого пузыря?', a: 'Полный мочевой пузырь помогает четко визуализировать стенки мочевого пузыря. Мы рекомендуем выпить 500 мл воды примерно за 1 час до приема. Голодать не нужно.' },
      { q: 'Может ли УЗИ выявить рак?', a: 'УЗИ может выявить подозрительные образования, опухоли или структурные аномалии. В случае обнаружения подозрительной находки могут быть рекомендованы дополнительные исследования, такие как МРТ или биопсия, для постановки окончательного диагноза.' }
    ]
  },
  'Lab Testing': {
    title: 'Comprehensive Men\'s Health Lab Testing',
    titleAR: 'التحاليل المخبرية الشاملة لصحة الرجل',
    titleRU: 'Комплексные лабораторные исследования мужского здоровья',
    tagline: 'Precision Blood Tests, Hormone Panels, STD Screening, and Fertility Analysis Confidential Results in 24-48 Hours.',
    taglineAR: 'تحاليل دم دقيقة، فحص هرمونات، وأمراض منقولة جنسياً، وتحليل سائل منوي. نتائج أصلية وسريعة في خصوصية تامة.',
    taglineRU: 'Точные анализы крови, гормональные панели, скрининг на ЗППП и анализ фертильности. Конфиденциальные результаты за 24-48 часов.',
    description: "Our laboratory offers specialized panels designed specifically for men's health. From detecting early signs of erectile dysfunction and hormonal imbalances to comprehensive STD screening and fertility analysis, we provide fast, accurate, and confidential results to guide your treatment plan.",
    descriptionAR: 'يوفر مختبرنا لوحات متخصصة مصممة خصيصاً لصحة الرجل. من اكتشاف العلامات المبكرة لضعف الانتصاب والخلل الهرموني إلى الفحص الشامل للأمراض المنقولة جنسياً وتحليل الخصوبة، نقدم نتائج سريعة ودقيقة وموثوقة لتوجيه خطة علاجك.',
    descriptionRU: 'Наша лаборатория предлагает специализированные панели, разработанные специально для мужского здоровья. От выявления ранних признаков эректильной дисфункции и гормонального дисбаланса до комплексного скрининга на ЗППП и анализа фертильности — мы предоставляем быстрые, точные и конфиденциальные результаты для составления вашего плана лечения.',
    heroImage: '/assets/image/services section/lab testing menu.webp',
    whatIsIt: {
      title: 'What is Comprehensive Lab Testing?',
      description: "Our comprehensive lab testing services provide a thorough analysis of your biological health. We use state-of-the-art diagnostic technology to analyze hormone levels, screen for sexually transmitted infections, evaluate fertility, and monitor metabolic function. This data-driven approach allows our specialist urologists to create highly personalized treatment plans tailored to your specific needs.",
      image: '/assets/image/services section/lab testing menu.webp'
    },
    whatIsItAR: {
      title: 'ما هي التحاليل المخبرية الشاملة؟',
      description: 'توفر خدماتنا المخبرية الشاملة تحليلاً دقيقاً لحالتك الصحية والبيولوجية. نعتمد على أحدث التقنيات التشخيصية لتحليل مستويات الهرمونات، والفحص عن الأمراض المنقولة جنسياً، وتقييم الخصوبة، ومراقبة وظائف الحيوية. هذا النهج المبني على البيانات يُمكّن أطباء المسالك البولية من تصميم خطط علاجية دقيقة ومناسبة لكل مريض على حدة.'
    },
    whatIsItRU: {
      title: 'Что такое комплексные лабораторные исследования?',
      description: 'Наши услуги комплексного лабораторного тестирования обеспечивают тщательный анализ вашего биологического здоровья. Мы используем передовые диагностические технологии для анализа уровня гормонов, скрининга на инфекции, передающиеся половым путем, оценки фертильности и мониторинга метаболических функций. Этот подход, основанный на данных, позволяет нашим специалистам-урологам создавать узкоспециализированные планы лечения, адаптированные к вашим конкретным потребностям.'
    },
    video: null,
    stats: [
      { label: "Turnaround", value: "24-48 Hrs", icon: Timer },
      { label: "Accuracy", value: "99.9%", icon: Target },
      { label: "Confidentiality", value: "100%", icon: ShieldCheck },
      { label: "Specialist Review", value: "Included", icon: User }
    ],
    statsAR: [
      { label: 'وقت الاستجابة' },
      { label: 'الدقة' },
      { label: 'السرية' },
      { label: 'مراجعة طبية' }
    ],
    statsRU: [
      { label: 'Срок выполнения' },
      { label: 'Точность' },
      { label: 'Конфиденциальность' },
      { label: 'Медицинское заключение' }
    ],
    testPanels: [
      {
        title: "Hormonal Health & Vitality",
        items: [
          "Total Testosterone",
          "Free Testosterone (Calculated)",
          "SHBG (Sex Hormone Binding Globulin)",
          "Estradiol (E2)",
          "Prolactin",
          "LH & FSH (Pituitary Function)",
          "Cortisol (Stress Hormone)",
          "Thyroid Function (TSH, fT3, fT4)"
        ],
        icon: Activity
      },
      {
        title: "Sexual Health & Infection (STD)",
        items: [
          "HIV Screening (4th Gen)",
          "Syphilis (VDRL & TPHA)",
          "Hepatitis B & C Surface Antigen",
          "Chlamydia & Gonorrhea (DNA PCR)",
          "Herpes Simplex Virus (HSV 1&2 IgG/IgM)",
          "Mycoplasma & Ureaplasma",
          "HPV Genotyping (High Risk)",
          "Trichomonas Vaginalis"
        ],
        icon: ShieldCheck
      },
      {
        title: "Metabolic & Organ Function",
        items: [
          "Lipid Profile (Cholesterol, HDL, LDL, Triglyceride)",
          "Fasting Blood Sugar & HbA1c (Diabetes)",
          "Liver Function Test (AST, ALT, ALP, Bilirubin)",
          "Kidney Function (BUN, Creatinine, eGFR)",
          "Complete Blood Count (CBC)",
          "Uric Acid (Gout Risk)"
        ],
        icon: HeartPulse
      },
      {
        title: "Fertility & Semen Analysis",
        items: [
          "Semen Volume & pH",
          "Sperm Concentration (Count)",
          "Total Motility & Progressive Motility",
          "Sperm Morphology (% Normal Forms)",
          "White Blood Cells in Semen",
          "Vitality (Live Ratio)"
        ],
        icon: Microscope
      },
      {
        title: "Urinary System & Tumor Markers",
        items: [
          "Urinalysis (Microscopic Exam)",
          "Urine Culture & Sensitivity",
          "PSA - Total (Prostate Cancer Screen)",
          "PSA - Free (Specificity Marker)",
          "AFP & HCG (Testicular Tumor Markers)",
          "CEA (General Cancer Marker)"
        ],
        icon: Droplets
      }
    ],
    testPanelsAR: [
      {
        title: 'صحة الهرمونات والحيوية',
        items: [
          'التستوستيرون الكلي (Total Testosterone)',
          'التستوستيرون الحر (Free Testosterone)',
          'الجلوبيولين المرتبط بالهرمونات الجنسية (SHBG)',
          'الإستروجين (Estradiol - E2)',
          'هرمون الحليب (Prolactin)',
          'هرمونات الغدة النخامية (LH & FSH)',
          'هرمون الإجهاد (Cortisol)',
          'وظائف الغدة الدرقية (TSH, fT3, fT4)'
        ]
      },
      {
        title: 'الصحة الجنسية والعدوى (STDs)',
        items: [
          'فحص فيروس نقص المناعة (HIV - 4th Gen)',
          'الزهري (VDRL & TPHA)',
          'التهاب الكبد الوبائي (B & C)',
          'الكلاميديا، السيلان (DNA PCR)',
          'فيروس الهربس البسيط (HSV 1&2)',
          'الميكوبلازما واليوريابلازما',
          'التنميط الجيني لفيروس الورم الحليمي البشري (HPV)',
          'المشعرات المهبلية (Trichomonas)'
        ]
      },
      {
        title: 'وظائف الأعضاء والأيض',
        items: [
          'فحص الدهون (الكوليسترول، الدهون الثلاثية)',
          'سكر الدم الصائم والتراكمي (HbA1c)',
          'وظائف الكبد (AST, ALT, ALP, Bilirubin)',
          'وظائف الكلى (BUN, Creatinine, eGFR)',
          'صورة الدم الكاملة (CBC)',
          'حمض اليوريك (خطر النقرس)'
        ]
      },
      {
        title: 'الخصوبة وتحليل السائل المنوي',
        items: [
          'الحجم وحموضة السائل المنوي (pH)',
          'تركيز الحيوانات المنوية (العدد)',
          'إجمالي الحركة والحركة التقدمية',
          'شكل الحيوانات المنوية (Morphology)',
          'خلايا الدم البيضاء (مؤشر التهاب)',
          'حيوية الحيوانات المنوية (النسبة الحية)'
        ]
      },
      {
        title: 'الجهاز البولي ودلالات الأورام',
        items: [
          'تحليل البول (فحص مجهري)',
          'مزرعة البول لفحص البكتيريا',
          'فحص البروستاتا الكلي (PSA - Total)',
          'فحص البروستاتا الحر (PSA - Free)',
          'دلالات أورام الخصية (AFP & HCG)',
          'دلالات أورام عامة (CEA)'
        ]
      }
    ],
    testPanelsRU: [
      {
        title: 'Гормональное здоровье и жизненный тонус',
        items: [
          'Общий тестостерон',
          'Свободный тестостерон (расчетный)',
          'ГСПГ (глобулин, связывающий половые гормоны)',
          'Эстрадиол (E2)',
          'Пролактин',
          'ЛГ и ФСГ (функция гипофиза)',
          'Кортизол (гормон стресса)',
          'Функция щитовидной железы (ТТГ, св. Т3, св. Т4)'
        ]
      },
      {
        title: 'Сексуальное здоровье и инфекции (ЗППП)',
        items: [
          'Скрининг на ВИЧ (4-е поколение)',
          'Сифилис (VDRL и TPHA)',
          'Поверхностный антиген гепатита B и C',
          'Хламидиоз и гонорея (ДНК ПЦР)',
          'Вирус простого герпеса (ВПГ 1 и 2 IgG/IgM)',
          'Микоплазма и уреаплазма',
          'Генотипирование ВПЧ (высокий риск)',
          'Влагалищная трихомонада'
        ]
      },
      {
        title: 'Метаболическая функция и функция органов',
        items: [
          'Липидный профиль (холестерин, ЛПВП, ЛПНП, триглицериды)',
          'Сахар крови натощак и HbA1c (диабет)',
          'Печеночные пробы (АСТ, АЛТ, ЩФ, билирубин)',
          'Функция почек (мочевина, креатинин, рСКФ)',
          'Общий анализ крови (ОАК)',
          'Мочевая кислота (риск подагры)'
        ]
      },
      {
        title: 'Фертильность и анализ спермы',
        items: [
          'Объем и pH спермы',
          'Концентрация сперматозоидов (количество)',
          'Общая подвижность и прогрессивная подвижность',
          'Морфология сперматозоидов (% нормальных форм)',
          'Лейкоциты в сперме (маркер воспаления)',
          'Жизнеспособность (соотношение живых)'
        ]
      },
      {
        title: 'Мочевыделительная система и онкомаркеры',
        items: [
          'Общий анализ мочи (микроскопическое исследование)',
          'Посев мочи и чувствительность',
          'ПСА - общий (скрининг рака простаты)',
          'ПСА - свободный (маркер специфичности)',
          'АФП и ХГЧ (онкомаркеры яичек)',
          'РЭА (общий онкомаркер)'
        ]
      }
    ],
    benefits: [
      { title: 'Specialized Men\'s Health Panels', desc: 'Full range of tests specifically designed for men\'s sexual health, hormones, fertility, and cancer screening.', icon: Microscope },
      { title: 'Fast & Confidential', desc: 'Most results available within 24-48 hours. All information is handled with strict patient confidentiality.', icon: Timer },
      { title: 'Specialist Interpretation', desc: 'All results are personally reviewed and explained by specialist urologists, not just automated lab reports.', icon: FileText },
      { title: 'One-Stop Service', desc: 'Consultation, sample collection, laboratory analysis, and treatment planning — all in a single visit.', icon: Target }
    ],
    benefitsRU: [
      { title: 'Специализированные панели мужского здоровья', desc: 'Полный спектр анализов, специально разработанных для мужского сексуального здоровья, гормонов, фертильности и скрининга рака.' },
      { title: 'Быстро и конфиденциально', desc: 'Большинство результатов доступны в течение 24-48 часов. Вся информация обрабатывается со строгим соблюдением конфиденциальности пациента.' },
      { title: 'Интерпретация специалистом', desc: 'Все результаты лично рассматриваются и объясняются специалистами-урологами, а не просто выдаются автоматические лабораторные отчеты.' },
      { title: 'Услуга «все в одном»', desc: 'Консультация, забор анализов, лабораторные исследования и планирование лечения — все за один визит.' }
    ],
    candidates: [
      "Men over 40 requiring annual prostate and health screening.",
      "Patients experiencing low libido, fatigue, or erectile dysfunction.",
      "Couples planning for pregnancy (fertility assessment).",
      "Individuals seeking peace of mind regarding STDs/STIs.",
      "Men monitoring testosterone therapy levels."
    ],
    candidatesAR: [
      'الرجال فوق سن الأربعين الذين يحتاجون إلى فحص سنوي للبروستاتا والصحة العامة.',
      'مرضى يعانون من انخفاض الرغبة الجنسية، أو الإرهاق المستمر، أو ضعف الانتصاب.',
      'الأزواج الذين يخططون للحمل أو يواجهون تأخراً في الإنجاب (تقييم الخصوبة).',
      'أي شخص يسعى للاطمئنان على نفسه وخلوه من الأمراض المنقولة جنسياً.',
      'الرجال الذين يتابعون العلاج بهرمون التستوستيرون (TRT).'
    ],
    candidatesRU: [
      'Мужчины старше 40 лет, которым требуется ежегодный осмотр простаты и медицинское обследование.',
      'Пациенты, испытывающие снижение либидо, усталость или эректильную дисфункцию.',
      'Пары, планирующие беременность (оценка фертильности).',
      'Лица, желающие обрести душевное спокойствие в отношении ЗППП/ИППП.',
      'Мужчины, контролирующие уровень тестостерона при заместительной терапии.'
    ],
    timeline: {
      title: "Testing Process & Results",
      steps: [
        { time: "Hour 1", title: "Sample Collection", desc: "Quick blood draw or sample collection in a private, comfortable room." },
        { time: "24-48 Hrs", title: "Result Delivery", desc: "Most results are available within 24 hours. Specialized cultures may take 48-72 hours." },
        { time: "Review", title: "Expert Consultation", desc: "Meet with a specialist urologist to review your results and discuss treatment options." }
      ]
    },
    timelineAR: {
      title: 'آلية الفحص والنتائج',
      steps: [
        { time: 'الساعة 1', title: 'أخذ العينات', desc: 'سحب الدم أو جمع العينة في غرفة خاصة ومريحة.' },
        { time: '24-48 ساعة', title: 'ظهور النتائج', desc: 'معظم النتائج تظهر خلال 24 ساعة. قد تستغرق المزارع الخاصة وقتاً أطول.' },
        { time: 'المراجعة', title: 'الاستشارة الطبية', desc: 'لقاء مع طبيب المسالك لمناقشة النتائج واختيار العلاج المناسب.' }
      ]
    },
    timelineRU: {
      title: 'Процесс тестирования и результаты',
      steps: [
        { time: 'Час 1', title: 'Сбор образцов', desc: 'Быстрый забор крови или сбор образцов в частной комфортабельной палате.' },
        { time: '24-48 часов', title: 'Предоставление результатов', desc: 'Большинство результатов доступны в течение 24 часов. Специализированные посевы могут занять 48-72 часа.' },
        { time: 'Обзор', title: 'Консультация эксперта', desc: 'Встретьтесь со специалистом-урологом, чтобы проанализировать результаты и обсудить варианты лечения.' }
      ]
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Doctor recommends specific test panels based on your medical history, symptoms, and health goals.' },
      { step: '02', title: 'Sample Collection', desc: 'Blood draw, urine sample, or semen collection performed in a private room with full confidentiality.' },
      { step: '03', title: 'Laboratory Analysis', desc: 'Samples are processed using certified, high-accuracy diagnostic equipment meeting international standards.' },
      { step: '04', title: 'Results Review', desc: 'Doctor personally explains your results in detail and discusses appropriate treatment options if needed.' }
    ],
    procedureAR: [
      { step: '01', title: 'الاستشارة', desc: 'الجلوس مع الطبيب لاختيار الفحوصات الضرورية لتشخيص الحالة بناء على الأعراض.' },
      { step: '02', title: 'جمع العينة', desc: 'يتم سحب الدم أو أخذ عينة البول أو السائل المنوي في غرف خاصة تحفظ الخصوصية التامة.' },
      { step: '03', title: 'التحليل المخبري', desc: 'معالجة العينات بمعدات تشخيصية حديثة وعالية الدقة مطابقة للمعايير الدولية.' },
      { step: '04', title: 'النتيجة والمراجعة', desc: 'استلام التقرير ومناقشته تفصيلياً مع الطبيب والمباشرة في الخطة العلاجية.' }
    ],
    procedureRU: [
      { step: '01', title: 'Консультация', desc: 'Врач рекомендует определенные панели анализов на основе вашего анамнеза, симптомов и целей в отношении здоровья.' },
      { step: '02', title: 'Сбор образцов', desc: 'Забор крови, анализ мочи или сбор спермы выполняется в отдельном кабинете с соблюдением полной конфиденциальности.' },
      { step: '03', title: 'Лабораторный анализ', desc: 'Образцы обрабатываются с использованием сертифицированного высокоточного диагностического оборудования, соответствующего международным стандартам.' },
      { step: '04', title: 'Обзор результатов', desc: 'Врач лично подробно объясняет ваши результаты и обсуждает соответствующие варианты лечения при необходимости.' }
    ],
    faq: [
      { q: "Do I need to fast before testing?", a: "For hormonal panels (Testosterone) and metabolic panels (Blood Sugar, Lipid Profile), fasting for 8-12 hours is recommended. Drinking plain water is allowed." },
      { q: "How long does it take to get results?", a: "Most blood and urine test results are available within 24 hours. Specialized cultures or PCR tests may take 48-72 hours." },
      { q: "Is the testing process private and confidential?", a: "Yes. We provide a private, comfortable room for all sample collection. All patient data and results are handled with the highest level of confidentiality." }
    ],
    faqAR: [
      { q: 'هل أحتاج للصيام قبل التحليل؟', a: 'لتحاليل الهرمونات أو السكر والدهون، يُنصح بالصيام من 8-12 ساعة. يُسمح دائماً بشرب الماء.' },
      { q: 'متى أحصل على النتائج؟', a: 'معظم الفحوصات تظهر خلال 24 ساعة. لكن اختبارات الأمراض المنقولة عبر تحليل الحمض النووي (PCR) والمزارع البكتيرية قد تتطلب من 48 إلى 72 ساعة.' },
      { q: 'هل نتائج فحوصاتي سرية؟', a: 'نعم بكل تأكيد. نلتزم بأعلى درجات الخصوصية لتأمين بياناتك، ونوفر غرفاً خاصة لجمع العينات بعيداً عن أي إحراج.' }
    ],
    faqRU: [
      { q: 'Нужно ли мне голодать перед тестированием?', a: 'Для гормональных панелей (тестостерон) и метаболических панелей (сахар крови, липидный профиль) рекомендуется голодание в течение 8-12 часов. Пить обычную воду разрешается.' },
      { q: 'Сколько времени занимает получение результатов?', a: 'Результаты большинства анализов крови и мочи доступны в течение 24 часов. На специализированные посевы или ПЦР-тесты может уйти 48-72 часа.' },
      { q: 'Является ли процесс тестирования частным и конфиденциальным?', a: 'Да. Мы предоставляем отдельную комфортабельную палату для сбора всех образцов. Все данные и результаты пациентов обрабатываются с высочайшим уровнем конфиденциальности.' }
    ]
  }
};

export const HERO_SLIDES: HeroSlideData[] = [
  {
    id: 1,
    title: 'PROSTATE\nSCREENING',
    desc: 'Comprehensive prostate screening package including PSA test and specialist consultation.',
    doctorImage: '/assets/image/hero section/M-Trust Urology Clinic background 2.webp',
    slideImage: '/assets/image/hero section/PROSTATE SCREENING.webp',
    btnText: 'Claim Offer'
  },
  {
    id: 2,
    title: 'REGAIN\nCONFIDENCE',
    desc: 'Restore your confidence with personalized ED treatment plans and hormone therapy.',
    doctorImage: '/assets/image/hero section/M-Trust Urology Clinic background 2.webp',
    slideImage: '/assets/image/hero section/REGAIN CONFIDENCE.webp',
    btnText: 'Book Consultation'
  },
  {
    id: 3,
    title: 'PENILE\nENLARGEMENT',
    desc: 'Elevate your confidence with Thailand\'s leading experts in penile enlargement. Safe, permanent, and natural-looking results using advanced surgical techniques and premium fillers.',
    doctorImage: '/assets/image/hero section/M-Trust Urology Clinic background 2.webp',
    slideImage: '/assets/image/hero section/enlargement3.webp',
    btnText: 'Book Appointment'
  }
];

export const SERVICE_CATEGORIES: Record<string, ServiceItem[]> = {
  'Erectile Dysfunction': [
    { name: 'Focus Shockwave', desc: 'Non-invasive sound wave therapy stimulating blood flow to treat the root cause of ED.', image: '/assets/image/services section/focus shockwave menu.webp', Icon: Zap },
    { name: 'PRP for ED', desc: 'Platelet-Rich Plasma therapy utilizes your body\'s growth factors to rejuvenate tissue.', image: '/assets/image/services section/prp for ed menu.webp', Icon: Droplets },
    { name: 'Stem Cell for ED', desc: 'Advanced regenerative medicine repairing damaged vessels and nerves.', image: '/assets/image/services section/stem cell for ed menu.webp', Icon: Activity },
    { name: 'Penile Implant', desc: 'Surgical solution for severe ED using inflatable or malleable prostheses.', image: '/assets/image/services section/penile implant menu.webp', Icon: Layers },
    { name: 'Dorsal Neurectomy', desc: 'Surgical procedure to reduce penile sensitivity and treat premature ejaculation.', image: '/assets/image/services section/dorsal neurectomy menu.webp', Icon: Scissors },
    { name: 'Testosterone Replacement Therapy', desc: 'Hormonal therapy to restore energy, libido, and muscle mass in men with low T.', image: '/assets/image/services section/testosterone replacement therapy menu.webp', Icon: Activity }
  ],
  'Urinary Symptoms': [
    { name: 'ReZum', desc: 'Minimally invasive water vapor therapy for BPH ensuring rapid recovery.', image: '/assets/image/services section/rezum menu.webp', Icon: Droplets },
    { name: 'UroLift', desc: 'A revolutionary implant procedure that lifts enlarged prostate tissue.', image: '/assets/image/services section/urolift menu.webp', Icon: Target },
    { name: 'Sexually Transmitted Infection', desc: 'Confidential screening and modern treatment for all sexually transmitted infections.', image: '/assets/image/services section/sexually transmitted infection menu.webp', Icon: ShieldCheck },
    { name: 'Stone Disease', desc: 'Advanced laser lithotripsy and management for kidney and bladder stones.', image: '/assets/image/services section/stone disease menu.webp', Icon: Target },
    { name: 'Urinary Symptoms', desc: 'Comprehensive diagnosis for frequent urination, incontinence, and pain.', image: '/assets/image/services section/Urinary Symptoms menu.webp', Icon: Activity }
  ],
  'Aesthetic & Penile Surgery': [
    { name: 'Circumcision', desc: 'Modern stapler circumcision ensures precise incisions and faster healing.', image: '/assets/image/services section/Circumcision.webp', Icon: Scissors },
    { name: 'Penile Enlargement', desc: 'Safe penile augmentation using premium medical fillers and short downtime.', image: '/assets/image/services section/penile enlargement menu.webp', Icon: Layers },
    { name: 'Penile Lengthening', desc: 'Surgical procedures to permanently enhance length and aesthetic appearance.', image: '/assets/image/services section/penile lengthening menu.webp', Icon: Activity },
    { name: 'Excision of penile Paraffinoma', desc: 'Removal of foreign substances and reconstructive surgery by specialists.', image: '/assets/image/services section/excision of penile paraffinoma menu.webp', Icon: Scissors },
    { name: 'Vasectomy', desc: 'Permanent male contraception via a quick, minimally invasive procedure.', image: '/assets/image/services section/vasectomy menu.webp', Icon: ShieldCheck }
  ],
  'Examination & Lab Testing': [
    { name: 'Flexible Cystoscopy', desc: 'High-resolution bladder examination using a soft, flexible scope.', image: '/assets/image/services section/flexible cystoscopy menu.webp', Icon: Activity },
    { name: 'Ultrasound', desc: 'High-precision imaging for detailed assessment of kidneys and prostate.', image: '/assets/image/services section/ultrasound menu.webp', Icon: Search },
    { name: 'Lab Testing', desc: 'Comprehensive blood work including PSA screening and hormonal profiles.', image: '/assets/image/services section/lab testing menu.webp', Icon: Microscope }
  ]
};

export const DOCTORS: DoctorData[] = [
  {
    id: 1,
    slug: 'dr.niti',
    name: 'Dr. Niti Navanimitkul, M.D.',
    nameAR: 'الدكتور نيثي نافانيتكول، طبيب',
    nameRU: 'Доктор Нити Наванимиткул, доктор медицины',
    role: 'Urologist & Men\'s Health Specialist',
    roleTH: 'ศัลยแพทย์ระบบทางเดินปัสสาวะและผู้เชี่ยวชาญสุขภาพชาย',
    roleAR: 'دكتور مسالك بولية وأخصائي صحة الرجل',
    roleRU: 'Уролог и специалист по мужскому здоровью',
    image: '/assets/image/urologist section/dr.niti.webp',
    expert: 'Penile Prosthesis | UroLift | Rezūm Specialist',
    expertAR: 'أخصائي دعامة العضو الذكري | UroLift | Rezūm',
    expertRU: 'Специалист по фаллопротезированию | UroLift | Rezūm',
    hospital: 'Bangkok Hospital Pattaya',
    email: 'niti.menshealth@gmail.com',
    website: 'https://www.mtrusturology.com',
    tagline: 'A Journey of Dedication, Expertise, and Compassion in Men\'s Health',
    taglineTH: 'เส้นทางแห่งความมุ่งมั่น ความเชี่ยวชาญ และความเอาใจใส่ในสุขภาพชาย',
    taglineAR: 'رحلة من التفاني، الخبرة، والرعاية الطبية الفائقة في صحة الرجل',
    taglineRU: 'Путь преданности, опыта и сострадания в мужском здоровье',
    bio: "Dr. Niti Navanimitkul is one of Thailand’s premier experts in urology and men’s health. He combines profound medical expertise with a patient-first, holistic approach.",
    bioTH: 'นพ. นิธิ นาวานิมิตกุล เป็นหนึ่งในผู้เชี่ยวชาญชั้นนำของไทยด้านระบบทางเดินปัสสาวะและสุขภาพชาย ผสานความเชี่ยวชาญทางการแพทย์เข้ากับแนวทางการดูแลแบบองค์รวมที่ยึดผู้ป่วยเป็นศูนย์กลาง',
    bioAR: 'يُعد الدكتور نيثي نافانيتكول واحداً من أبرز خبراء جراحة المسالك البولية وصحة الرجل في تايلاند. يجمع بين الخبرة الطبية العميقة والنهج الشامل في رعاية المرضى.',
    bioRU: 'Доктор Нити Наванимиткул — один из ведущих специалистов Таиланда в области урологии и мужского здоровья. Он сочетает глубокие медицинские знания с целостным подходом, ориентированным на пациента.',
    bioContent: [
      {
        type: 'header',
        content: "Elevating Men’s Health Care in Thailand: Dr. Niti Navanimitkul",
        contentTH: 'ยกระดับการดูแลสุขภาพชายในประเทศไทย: นพ. นิธิ นาวานิมิตกุล',
        contentAR: "الارتقاء بالرعاية الصحية للرجل في تايلاند: د. نيثي نافانيتكول",
        contentRU: 'Повышение уровня здравоохранения для мужчин в Таиланде: Доктор Нити Наванимиткул'
      },
      {
        type: 'paragraph',
        content: "Dr. Niti Navanimitkul is one of Thailand’s premier experts in urology and men’s health. He combines profound medical expertise with a patient-first, holistic approach. Driven by a passion for continuous learning and innovation, Dr. Niti is dedicated to empowering men to take control of his physical, emotional, and psychological well-being.",
        contentTH: 'นพ. นิธิ นาวานิมิตกุล มุ่งมั่นในการรักษาและเรียนรู้นวัตกรรมอย่างต่อเนื่องเพื่อนำมาพัฒนาวิธีการรักษาให้ได้ผลลัพธ์ที่ดียิ่งขึ้น นพ. นิธิ อุทิศตนเพื่อช่วยให้ผู้ป่วยสามารถดูแลสุขภาพกาย อารมณ์ และจิตใจ ให้กลับมามีความมั่นใจ กลับมาใช้ชีวิตได้อย่างเป็นปกติอีกครั้ง',
        contentAR: "د. نيثي نافانيتكول هو أحد أبرز الخبراء في تايلاند في جراحة المسالك البولية وصحة الرجل. يجمع بين الخبرة الطبية العميقة والنهج الشامل ومبدأ المريض أولاً. بفضل شغفه بالتعلم المستمر والابتكار، يكرس د. نيثي نفسه لتمكين الرجال من استعادة رفاهيتهم الجسدية والعاطفية.",
        contentRU: 'Доктор Нити Наванимиткул — один из ведущих специалистов Таиланда в области урологии и мужского здоровья. Он сочетает глубокие медицинские знания с целостным подходом, ориентированным на пациента. Движимый страстью к постоянному обучению и инновациям, доктор Нити посвящает себя тому, чтобы помочь мужчинам взять под контроль свое физическое, эмоциональное и психологическое благополучие.'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-1.webp",
        caption: "Dr. Niti Navanimitkul: Thailand's leading men's health specialist.",
        captionTH: 'นพ. นิธิ นาวานิมิตกุล: ผู้เชี่ยวชาญด้านสุขภาพชายชั้นนำของประเทศไทย',
        captionAR: "د. نيثي نافانيتكول: المتخصص الرائد في صحة الرجل في تايلاند.",
        captionRU: 'Доктор Нити Наванимиткул: ведущий специалист по мужскому здоровью в Таиланде.'
      },
      {
        type: 'header',
        content: "World-Class Urology Expertise & High Success Rates",
        contentTH: 'ความเชี่ยวชาญด้านระบบทางเดินปัสสาวะระดับโลก และอัตราความสำเร็จสูง',
        contentAR: "خبرة عالمية في المسالك البولية ونسب نجاح عالية",
        contentRU: 'Мировой опыт в урологии и высокие показатели успеха'
      },
      {
        type: 'paragraph',
        content: "Dr. Niti specializes in cutting-edge, minimally invasive procedures designed to restore function and improve the quality of life for his patients. He is at the forefront of treating complex urological conditions, offering highly effective solutions:",
        contentTH: 'นพ. นิธิ เชี่ยวชาญในการทำหัตถการที่ล้ำสมัยและส่งผลกระทบน้อย เพื่อฟื้นฟูการทำงานและยกระดับคุณภาพชีวิตผู้ป่วย อีกทั้งยังเป็นแพทย์แถวหน้า ในการรักษาโรคระบบทางเดินปัสสาวะที่มีความซับซ้อนสูง ด้วยวิธีที่มีประสิทธิภาพสูง',
        contentAR: "يتخصص د. نيثي في الإجراءات الحديثة طفيفة التوغل المصممة لاستعادة الوظائف وتحسين جودة حياة مرضاه. وهو في طليعة علاج حالات المسالك البولية المعقدة، مقدماً حلولاً عالية الفعالية:",
        contentRU: 'Доктор Нити специализируется на передовых малоинвазивных процедурах, предназначенных для восстановления функций и улучшения качества жизни его пациентов. Он находится на переднем крае лечения сложных урологических заболеваний, предлагая высокоэффективные решения:'
      },
      {
        type: 'list',
        items: [
          "Penile Prosthesis Surgery (ED Treatment): Offering a permanent solution for erectile dysfunction to restore sexual function. Dr. Niti has performed over 150 successful cases with a reported 99.99% success rate.",
          "UroLift® Treatment for BPH: A state-of-the-art, minimally invasive procedure to alleviate urinary symptoms caused by an enlarged prostate (Benign Prostatic Hyperplasia), ensuring quicker recovery times. Between August 2024 and April 2025 alone, he performed over 100 cases with a 99.99% success rate.",
          "Advanced Erectile Dysfunction Solutions: Comprehensive care utilizing the latest medical advancements, including Stem Cell Injections, Shockwave Therapy (Li-ESWT), and customized medication plans.",
          "Male Infertility Treatments: Advanced diagnostic testing and personalized procedures designed to enhance male fertility.",
          "Comprehensive Prostate Health: Proactive preventive care, prostate cancer screening, and expert management of BPH."
        ],
        itemsTH: [
          'การผ่าตัดใส่อุปกรณ์ช่วยแข็งตัว (รักษา ED): นวัตกรรมการรักษาภาวะหย่อนสมรรถภาพแบบถาวร นพ. นิธิผ่าตัดสำเร็จมากกว่า 150 เคส อัตราความสำเร็จ 99.99%',
          'การรักษา UroLift® สำหรับ BPH: หัตถการรุกรานน้อยระดับแนวหน้า บรรเทาอาการปัสสาวะจากต่อมลูกหมากโต ระหว่างสิงหาคม 2567 – เมษายน 2568 ทำสำเร็จกว่า 100 เคส อัตราความสำเร็จ 99.99%',
          'การรักษาภาวะหย่อนสมรรถภาพขั้นสูง: ดูแลครบวงจรด้วยนวัตกรรมทางการแพทย์ล่าสุด ทั้งการฉีดเซลล์ต้นกำเนิด, การรักษาด้วยคลื่นเสียง (Li-ESWT) และแผนยาเฉพาะราย',
          'การรักษาภาวะมีบุตรยากในชาย: การตรวจวินิจฉัยขั้นสูงและหัตถการเฉพาะราย เพื่อเพิ่มความสามารถในการมีบุตร',
          'สุขภาพต่อมลูกหมากครบวงจร: การดูแลเชิงป้องกัน การคัดกรองมะเร็งต่อมลูกหมาก และการจัดการ BPH โดยผู้เชี่ยวชาญ'
        ],
        itemsAR: ["جراحة زراعة دعامة العضو الذكري (Penile Prosthesis): خبرة متقدمة في زرع الأجهزة القابلة للنفخ لنتائج طبيعية.","أنظمة UroLift و Rezūm: علاجات متطورة غير جراحية لتضخم البروستاتا الحميد (BPH).","العلاج بالموجات الصدمية المركزة (Li-ESWT): علاج تجديدي لضعف الانتصاب.","تقنيات الاستئصال بالليزر (HoLEP): جراحة ليزر دقيقة للبروستاتا لنتائج مثالية وتعافٍ سريع."],
        itemsRU: [
          'Операция по фаллопротезированию (лечение ЭД): Предлагает постоянное решение проблемы эректильной дисфункции для восстановления сексуальной функции. Доктор Нити провел более 150 успешных случаев с показателем успеха 99,99%.',
          'Лечение UroLift® при ДГПЖ: Передовая малоинвазивная процедура для облегчения мочевых симптомов, вызванных увеличенной простатой, обеспечивающая более быстрое выздоровление. Только в период с августа 2024 года по апрель 2025 года он провел более 100 операций с показателем успеха 99,99%.',
          'Передовые решения для эректильной дисфункции: Комплексный уход с использованием новейших медицинских достижений, включая инъекции стволовых клеток, ударно-волновую терапию (Li-ESWT) и индивидуальные планы медикаментозного лечения.',
          'Лечение мужского бесплодия: Передовое диагностическое тестирование и индивидуальные процедуры, направленные на повышение мужской фертильности.',
          'Комплексное здоровье простаты: Проактивная профилактическая помощь, скрининг на рак простаты и экспертное лечение ДГПЖ.'
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-2.webp",
        caption: "Highly certified in urology, Dr. Niti provides the most advanced men's healthcare.",
        captionTH: 'นพ. นิธิ ผู้ได้รับการรับรองสูงสุดด้านระบบทางเดินปัสสาวะ มอบการดูแลสุขภาพชายที่ล้ำสมัยที่สุด',
        captionAR: 'حاصل على أعلى الشهادات في جراحة المسالك البولية، ويقدم الدكتور نيثي الرعاية الصحية الأكثر تقدماً للرجال.',
        captionRU: 'Доктор Нити, имеющий высшую квалификацию в области урологии, предоставляет самое передовое медицинское обслуживание для мужчин.'
      },
      {
        type: 'header',
        content: "Extensive Training & Board Certifications",
        contentTH: 'การฝึกอบรมเข้มข้นและใบรับรองความเชี่ยวชาญ',
        contentAR: 'التدريب المكثف والشهادات المعتمدة',
        contentRU: 'Обширная подготовка и сертификация советов'
      },
      {
        type: 'paragraph',
        content: "A graduate of one of Thailand's most prestigious medical schools, Dr. Niti discovered his passion for men's health early in his career. He has since honed his skills through specialized fellowships and training at leading medical institutions.\n\nAs a lifelong learner, he holds numerous certifications in urology and consistently participates in international medical conferences. This dedication ensures his patients always have access to the most advanced, evidence-based treatments available globally.",
        contentTH: 'นพ. นิธิ สำเร็จการศึกษาจากคณะแพทยศาสตร์ชั้นนำที่มีชื่อเสียงที่สุดแห่งหนึ่งของประเทศไทย และได้ค้นพบความมุ่งมั่นทุ่มเทในการดูแลสุขภาพบุรุษมาตั้งแต่ช่วงเริ่มแรกของเส้นทางวิชาชีพ ท่านได้สั่งสมประสบการณ์และทักษะความเชี่ยวชาญผ่านการฝึกอบรมเฉพาะทางจากสถาบันการแพทย์ระดับแนวหน้า\n\nในฐานะผู้ที่ใฝ่เรียนรู้อยู่เสมอ นพ. นิธิ ได้รับวุฒิบัตรรับรองในสาขาศัลยศาสตร์ยูโรวิทยา (ระบบทางเดินปัสสาวะ) มากมาย และเข้าร่วมการประชุมวิชาการทางการแพทย์ระดับนานาชาติอย่างสม่ำเสมอ ความมุ่งมั่นนี้เองที่ทำให้คนไข้ของท่านมั่นใจได้ว่าจะสามารถเข้าถึงการรักษาที่ทันสมัยที่สุดและอ้างอิงตามหลักฐานทางวิชาการล่าสุดที่เป็นมาตรฐานสากลจากทั่วโลก',
        contentAR: 'تخرج د. نيثي من إحدى أعرق كليات الطب في تايلاند، واكتشف شغفه بصحة الرجل في وقت مبكر من مسيرته المهنية. ومنذ ذلك الحين صقل مهاراته من خلال زمالات متخصصة وتدريبات في مؤسسات طبية رائدة.\n\nبصفته باحثاً متعلماً مدى الحياة، يحمل العديد من الشهادات المعتمدة في جراحة المسالك البولية ويشارك باستمرار في المؤتمرات الطبية الدولية. ويضمن هذا التفاني لمرضاه الوصول دائماً إلى العلاجات الأكثر تقدماً والمبنية على أسس علمية والمتاحة على مستوى العالم.',
        contentRU: 'Выпускник одной из самых престижных медицинских школ Таиланда, доктор Нити рано обнаружил свою страсть к мужскому здоровью. С тех пор он оттачивал свои навыки, проходя специализированные стажировки и обучение в ведущих медицинских учреждениях.\n\nБудучи сторонником непрерывного обучения, он имеет множество сертификатов в области урологии и постоянно участвует в международных медицинских конференциях. Эта преданность делу гарантирует, что его пациенты всегда имеют доступ к самым передовым научно обоснованным методам лечения, доступным в мире.'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-3.webp",
        caption: "World-class trained urologist mastering advanced clinical techniques.",
        captionTH: 'ศัลยแพทย์ระบบทางเดินปัสสาวะผู้ผ่านการฝึกอบรมระดับโลก เชี่ยวชาญเทคนิคคลินิกขั้นสูง',
        captionAR: 'طبيب مسالك بولية مدرب عالمياً ويتقن التقنيات السريرية المتقدمة.',
        captionRU: 'Уролог мирового класса, владеющий передовыми клиническими методами.'
      },
      {
        type: 'header',
        content: "A Holistic, Patient-Centric Philosophy",
        contentTH: 'ปรัชญาการดูแลแบบองค์รวม ยึดผู้ป่วยเป็นศูนย์กลาง',
        contentAR: 'فلسفة شاملة تركز على المريض',
        contentRU: 'Целостная философия, ориентированная на пациента'
      },
      {
        type: 'paragraph',
        content: "What truly sets Dr. Niti apart is his compassionate, holistic approach. He understands that urological conditions impact not just the physical body, but also emotional well-being. By taking the time to listen and understand each patient's unique concerns, he crafts tailored, comprehensive treatment plans. His dedication to excellence in patient care, diagnosis, and education has earned him numerous accolades and the deep trust of both colleagues and patients.",
        contentTH: 'สิ่งที่ทำให้ นพ. นิธิ โดดเด่นอย่างแท้จริงคือแนวทางการรักษาด้วยความใส่ใจและมองอย่างรอบด้าน (Holistic Approach) ท่านตระหนักดีว่าอาการเจ็บป่วยทางระบบทางเดินปัสสาวะไม่ได้ส่งผลกระทบเพียงแค่ร่างกายเท่านั้น แต่ยังส่งผลต่อสภาวะจิตใจและความเป็นอยู่ที่ดีอีกด้วย\n\nด้วยการให้ความสำคัญกับการรับฟังและทำความเข้าใจความกังวลเฉพาะตัวของผู้ป่วยแต่ละราย นพ. นิธิ จึงสามารถออกแบบแผนการรักษาที่เหมาะสมและครอบคลุมความต้องการของคนไข้ได้อย่างตรงจุด ความทุ่มเทเพื่อความเป็นเลิศทั้งในด้านการดูแลผู้ป่วย การวินิจฉัย และการให้ความรู้ทางการแพทย์ ส่งผลให้ท่านได้รับรางวัลเชิดชูเกียรติมากมาย ตลอดจนได้รับความไว้วางใจอย่างลึกซึ้งจากทั้งเพื่อนร่วมวิชาชีพและผู้รับบริการเสมอมา',
        contentAR: 'ما يميز د. نيثي حقاً هو نهجه الشامل الحافل بالرعاية. فهو يدرك أن حالات المسالك البولية لا تؤثر فقط على الجسد، بل تنعكس أيضاً على الحالة النفسية. من خلال استقطاع الوقت للاستماع وفهم المخاوف الفريدة لكل مريض، يقوم بصياغة خطط علاج شاملة ومخصصة. إن تفانيه في التميز في رعاية المرضى، والتشخيص السليم، وتثقيفهم أكسبه العديد من الأوسمة والثقة العميقة من زملائه ومرضاه على حد سواء.',
        contentRU: 'Что действительно отличает доктора Нити, так это его сострадательный, целостный подход. Он понимает, что урологические заболевания влияют не только на физическое тело, но и на эмоциональное благополучие. Уделяя время тому, чтобы выслушать и понять уникальные проблемы каждого пациента, он разрабатывает индивидуальные комплексные планы лечения. Его преданность совершенству в уходе за пациентами, диагностике и образовании принесла ему множество наград и глубокое доверие как коллег, так и пациентов.'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-4.webp",
        caption: "Patient-Centric Care Environment",
        captionTH: 'สภาพแวดล้อมการดูแลที่ยึดผู้ป่วยเป็นศูนย์กลาง',
        captionAR: 'بيئة رعاية ترتكز على راحة المريض',
        captionRU: 'Среда медицинского обслуживания, ориентированная на пациента'
      }
    ],
    specialties: [
      "Penile Prosthesis Surgery (150+ cases, 99.99% success rate)",
      "UroLift Treatment for BPH (100+ cases, 99.99% success rate)",
      "Water Vapor Therapy (Rezūm) - Center of Excellence",
      "Erectile Dysfunction Treatments (Stemcell, Shockwave)",
      "Male Infertility Diagnosis & Treatment",
      "Prostate Health & Cancer Screening"
    ],
    specialtiesTH: [
      'Penile Prosthesis Surgery (150+ cases, 99.99% success rate)',
      'UroLift Treatment for BPH (100+ cases, 99.99% success rate)',
      'Water Vapor Therapy (Rezūm) - Center of Excellence',
      'Erectile Dysfunction Treatments (Stemcell, Shockwave)',
      'Male Infertility Diagnosis & Treatment',
      'Prostate Health & Cancer Screening'
    ],
    specialtiesAR: [
      'جراحة زراعة دعامة العضو الذكري (أكثر من 150 حالة ومعدل نجاح 99.99%)',
      'علاج يوروليفت لتضخم البروستاتا (أكثر من 100 حالة ومعدل نجاح 99.99%)',
      'تكنولوجيا التبخير المائي للبروستاتا (ريزوم) - مركز التميز',
      'علاجات ضعف الانتصاب (الخلايا الجذعية، الموجات الصدمية)',
      'تشخيص وعلاج العقم الذكوري',
      'فحوصات صحة البروستاتا والكشف المبكر عن السرطان'
    ],
    specialtiesRU: [
      'Операция по фаллопротезированию (более 150 случаев, показатель успеха 99,99%)',
      'Лечение UroLift при ДГПЖ (более 100 случаев, показатель успеха 99,99%)',
      'Лечение водяным паром (Rezūm) - Центр передового опыта',
      'Лечение эректильной дисфункции (стволовые клетки, ударно-волновая терапия)',
      'Диагностика и лечение мужского бесплодия',
      'Здоровье простаты и скрининг на рак'
    ],
    qualifications: [
      { year: "2018", title: "Intensive Penile Prosthesis Workshop", titleAR: "ورشة عمل مكثفة لجراحة زراعة الدعامة الذكرية", titleRU: "Интенсивный семинар по фаллопротезированию", place: "Ramathibodi Hospital, Bangkok", placeAR: "مستشفى راماثيبودي، بانكوك", placeRU: "Больница Раматибоди, Бангкок" },
      { year: "2017", title: "Training in Endourology", titleAR: "تدريب في جراحة المسالك البولية بالمنظار", titleRU: "Обучение в области эндоурологии", place: "Strasbourg, France", placeAR: "ستراسبورج، فرنسا", placeRU: "Страсбург, Франция" },
      { year: "2017", title: "Advance in Upper Urinary Tract Laparoscopic Urology", titleAR: "تدريب متقدم في جراحة المنظار للجهاز البولي العلوي", titleRU: "Передовые достижения в лапароскопической урологии верхних мочевыводящих путей", place: "Rajavithi Hospital", placeAR: "مستشفى راجافيثي", placeRU: "Больница Раджавити" },
      { year: "2017", title: "Advanced Course in Laparoscopic Urological Surgery", titleAR: "دورة متقدمة في جراحة المسالك البولية بالمنظار", titleRU: "Продвинутый курс лапароскопической урологической хирургии", place: "Asia IRCAD-TAIWAN, Lugang, Taiwan", placeAR: "آسيا إيركاد-تايوان، تايوان", placeRU: "Asia IRCAD-TAIWAN, Луган, Тайвань" },
      { year: "2014", title: "Visiting Clinical Fellow in Urology and Andrology", titleAR: "زميل سريري زائر في طب المسالك البولية والذكورة", titleRU: "Приглашенный клинический научный сотрудник в области урологии и андрологии", place: "MD Anderson Cancer Center, The University of Texas, USA", placeAR: "مركز إم دي أندرسون للسرطان، جامعة تكساس، الولايات المتحدة", placeRU: "Онкологический центр доктора медицины Андерсона, Техасский университет, США" },
      { year: "2010", title: "Diplomate Thai Board of Urology", titleAR: "دبلوم البورد التايلاندي في جراحة المسالك البولية", titleRU: "Дипломант Тайского совета по урологии", place: "Chiang Mai University, Thailand", placeAR: "جامعة شيانغ ماي، تايلاند", placeRU: "Чиангмайский университет, Таиланд" },
      { year: "2003", title: "Doctor of Medicine", titleAR: "دكتوراه في الطب", titleRU: "Доктор медицины", place: "Faculty of Medicine, Chiang Mai University, Thailand", placeAR: "كلية الطب، جامعة شيانغ ماي، تايلاند", placeRU: "Медицинский факультет Чиангмайского университета, Таиланд" }
    ],
    awards: [
      { year: "2025", title: "First ASEAN Proctor for UroLift", titleAR: "أول مشرف تدريب معتمد لليوروليفت في رابطة دول جنوب شرق آسيا", titleRU: "Первый инструктор АСЕАН по UroLift", issuer: "Appointed April 30, 2025", issuerAR: "معين في 30 أبريل 2025", issuerRU: "Назначен 30 апреля 2025 г." },
      { year: "2025", title: "The First Certified UroLift Success Story (50 Cases)", titleAR: "أول قصة نجاح معتمدة لعلاج اليوروليفت (50 حالة)", titleRU: "Первая сертифицированная история успеха UroLift (50 случаев)", issuer: "Teleflex™ Academy", issuerAR: "أكاديمية تيليفليكس™", issuerRU: "Академия Teleflex™" },
      { year: "2025", title: "Panelist: 'Beyond the Manual' Urology Summit", titleAR: "عضو لجنة نقاش قمة المسالك البولية الوطنية 2025", titleRU: "Член дискуссионной группы: Урологический саммит «Beyond the Manual»", issuer: "National Urology Summit 2025", issuerAR: "القمة الوطنية للمسالك البولية 2025", issuerRU: "Национальный урологический саммит 2025" },
      { year: "2024", title: "Thailand's First Urologist Certified in UroLift", titleAR: "أول طبيب مسالك بولية تايلاندي معتمد في اليوروليفت", titleRU: "Первый в Таиланде уролог, сертифицированный по UroLift", issuer: "Teleflex™ Interventional Urology", issuerAR: "تيليفليكس™", issuerRU: "Teleflex™ Interventional Urology" },
      { year: "2024", title: "Certificate: UROLIFT™ SYSTEM PROFICIENCY PATHWAY", titleAR: "شهادة الاستخدام الاحترافي لنظام يوروليفت", titleRU: "Сертификат: ПУТЬ ПОВЫШЕНИЯ КВАЛИФИКАЦИИ В СИСТЕМЕ UROLIFT™", issuer: "Teleflex™ Interventional Urology, USA", issuerAR: "تيليفليكس™ الأمريكية", issuerRU: "Teleflex™ Interventional Urology, США" },
      { year: "2024", title: "Chairperson: 2024 ED&BPH Masterclass", titleAR: "رئيس جلسة نقاشية: الدورة المتقدمة لضعف الانتصاب وتضخم البروستاتا 2024", titleRU: "Председатель: Мастер-класс по ЭД и ДГПЖ 2024 года", issuer: "ZP Therapeutics, Thailand", issuerAR: "زي بي ثيرابيوتيكس، تايلاند", issuerRU: "ZP Therapeutics, Таиланд" },
      { year: "2023", title: "Center of Excellence: Rezūm™ Water Vapor Therapy", titleAR: "مركز التميز لعلاج ريزوم بالتبخير المائي", titleRU: "Центр передового опыта: Терапия водяным паром Rezūm™", issuer: "Boston Scientific", issuerAR: "بوسطن ساينتيفيك", issuerRU: "Boston Scientific" },
      { year: "2023", title: "Achievement: Successful completion of >80 Rezūm™ procedures", titleAR: "إنجاز: استكمال أكثر من 80 إجراء ناجح لعلاج ريزوم", titleRU: "Достижение: Успешное выполнение >80 процедур Rezūm™", issuer: "Boston Scientific, USA", issuerAR: "بوسطن ساينتيفيك، الولايات المتحدة", issuerRU: "Boston Scientific, США" },
      { year: "2023", title: "Certificate: Coloplast IPP & Testicular Implants", titleAR: "شهادة دعامات وزراعة الخصية من Coloplast IPP", titleRU: "Сертификат: Имплантаты яичек и IPP Coloplast", issuer: "Chulalongkorn University & Sewum Prosthetic Urology Center, Korea", issuerAR: "جامعة شولالونغكورن ومركز سيوم التعويضي، كوريا", issuerRU: "Университет Чулалонгкорн и Центр протезирования Sewum, Корея" },
      { year: "2022", title: "Awards of Rezūm™ Center of Excellence", titleAR: "جوائز التميز كمركز معتمد لتقنية ريزوم", titleRU: "Награды Центра передового опыта Rezūm™", issuer: "Boston Scientific", issuerAR: "بوسطن ساينتيفيك", issuerRU: "Boston Scientific" },
      { year: "2022", title: "Proctor of Rezūm Therapy in ASEAN", titleAR: "مشرف تدريب معتمد لتقنية ريزوم في رابطة آسيان", titleRU: "Инструктор по терапии Rezūm в АСЕАН", issuer: "Boston Scientific", issuerAR: "بوسطن ساينتيفيك", issuerRU: "Boston Scientific" }
    ],
    videos: [
      { id: "v1", title: "UroLift Patient Success Story - Minimal Invasive", url: "https://www.youtube.com/embed/JmU9Wz5UARA", thumbnail: "https://img.youtube.com/vi/JmU9Wz5UARA/maxresdefault.jpg" },
      { id: "v2", title: "Rezūm Treatment Experience - BPH Relief", url: "https://www.youtube.com/embed/-fJfVpLceSY", thumbnail: "https://img.youtube.com/vi/-fJfVpLceSY/maxresdefault.jpg" },
      { id: "v3", title: "Erectile Dysfunction Recovery - Penile Prosthesis", url: "https://www.youtube.com/embed/nlACkgWGENA", thumbnail: "https://img.youtube.com/vi/nlACkgWGENA/maxresdefault.jpg" },
      { id: "v4", title: "Advanced Urological Care - Patient Journey", url: "https://www.youtube.com/embed/D13a46IQuA4", thumbnail: "https://img.youtube.com/vi/D13a46IQuA4/maxresdefault.jpg" },
      { id: "v5", title: "Life After UroLift - Restoring Quality of Life", url: "https://www.youtube.com/embed/DCwJ7yxn9Qw", thumbnail: "https://img.youtube.com/vi/DCwJ7yxn9Qw/maxresdefault.jpg" },
      { id: "v6", title: "Expert Care for Male Infertility", url: "https://www.youtube.com/embed/JLYCiewuZgY", thumbnail: "https://img.youtube.com/vi/JLYCiewuZgY/maxresdefault.jpg" },
      { id: "v7", title: "Center of Excellence - Rezūm Water Vapor", url: "https://www.youtube.com/embed/9y805tM1cs8", thumbnail: "https://img.youtube.com/vi/9y805tM1cs8/maxresdefault.jpg" },
      { id: "v8", title: "Innovative Treatment for Prostate Health", url: "https://www.youtube.com/embed/lVpWozw7UTc", thumbnail: "https://img.youtube.com/vi/lVpWozw7UTc/maxresdefault.jpg" },
      { id: "v9", title: "Minimally Invasive Surgery - Quick Recovery", url: "https://www.youtube.com/embed/HlUsjdKlHk4", thumbnail: "https://img.youtube.com/vi/HlUsjdKlHk4/maxresdefault.jpg" },
      { id: "v10", title: "Patient Testimonial - Professional Urology team", url: "https://www.youtube.com/embed/qHw1oMib4d4", thumbnail: "https://img.youtube.com/vi/qHw1oMib4d4/maxresdefault.jpg" },
      { id: "v11", title: "Specialized focus on Men's Health", url: "https://www.youtube.com/embed/pdaLIRiby1o", thumbnail: "https://img.youtube.com/vi/pdaLIRiby1o/maxresdefault.jpg" },
      { id: "v12", title: "Empowering Patients - Dr. Niti's Approach", url: "https://www.youtube.com/embed/qHw1oMib4d4", thumbnail: "https://img.youtube.com/vi/qHw1oMib4d4/maxresdefault.jpg" }
    ],
    videoUrl: "",
    activities: [
      "/assets/image/urologist section/biography/Professional Profile-1.webp",
      "/assets/image/urologist section/biography/Professional Profile-2.webp",
      "/assets/image/urologist section/biography/Professional Profile-3.webp",
      "/assets/image/urologist section/biography/Professional Profile-4.webp"
    ],
    certificates: [
      "/assets/image/urologist section/certificate/certificate-01.webp",
      "/assets/image/urologist section/certificate/certificate-02.webp",
      "/assets/image/urologist section/certificate/certificate-03.webp",
      "/assets/image/urologist section/certificate/certificate-04.webp",
      "/assets/image/urologist section/certificate/certificate-05.webp",
      "/assets/image/urologist section/certificate/certificate-06.webp",
      "/assets/image/urologist section/certificate/certificate-07.webp",
      "/assets/image/urologist section/certificate/certificate-08.webp",
      "/assets/image/urologist section/certificate/certificate-09.webp",
      "/assets/image/urologist section/certificate/certificate-10.webp",
      "/assets/image/urologist section/certificate/certificate-11.webp",
      "/assets/image/urologist section/certificate/certificate-12.webp",
      "/assets/image/urologist section/certificate/certificate-13.webp",
      "/assets/image/urologist section/certificate/certificate-14.webp",
      "/assets/image/urologist section/certificate/certificate-15.webp",
      "/assets/image/urologist section/certificate/certificate-16.webp",
      "/assets/image/urologist section/certificate/certificate-17.webp",
      "/assets/image/urologist section/certificate/certificate-18.webp",
      "/assets/image/urologist section/certificate/certificate-19.webp",
      "/assets/image/urologist section/certificate/certificate-20.webp",
      "/assets/image/urologist section/certificate/certificate-21.webp",
      "/assets/image/urologist section/certificate/certificate-22.webp"
    ],
    specializedFocus: "Advanced treatments for BPH using Rezum (Water Vapor Therapy) and UroLift implants, minimizing sexual side effects.",
    surgicalExcellence: "Over 1,000+ successful endourological procedures and penile prosthesis implantations with high patient satisfaction rates.",
    handwrittenTestimonials: [
      {
        id: 1,
        name: "Lutz Voellger",
        image: "/assets/image/urologist section/testimonials/Lutz. V..webp",
        text: "Urination became a pleasure compared to before. No pain, no side effects. I can only recommend Dr. Niti and his professional team.",
        rating: 5,
        transcript: "I sent information about my situation (problems to urinate, pain, frequent urination at night) to Dr. Niti N. on a Saturday afternoon. He reacted after a few minutes with professional questions and I got a good feeling immediately. We arranged a check up one week later and he recommended the Urolift-Treatment. It was performed in the Urology Center on Dec. 6th. From the first minute after wake up I felt much better. Almost no pain, urination became a pleasure (compared to before) and I don't have to get up at night so frequently. Not any side effects... I can only recommend everyone (with similar symptoms) to contact Dr. Niti N. and his very professional team. Thank you very much, Lutz. V.",
        language: "English"
      },
      {
        id: 2,
        name: "Patient 3",
        image: "/assets/image/urologist section/testimonials/patient 3.webp",
        text: "Très content du résultat après 1 mois de l'opération UROLIFT. Je n'ai plus de problèmes pour uriner. Je recommande vivement le Dr. Niti.",
        rating: 5,
        transcript: "Après 1 mois de l'opération UROLIFT par le Dr. Niti Navanimitkul, je suis très content du résultat. Je n'ai plus de problèmes pour uriner. Je recommande vivement le Dr. Niti.",
        language: "French"
      },
      {
        id: 3,
        name: "Mr. John Philip Toman",
        image: "/assets/image/urologist section/testimonials/MR. JOHN PHILIP TOMAN.webp",
        text: "Professional, knowledgeable, and caring. The results exceeded my expectations. Dr. Niti is an outstanding specialist in urology.",
        rating: 5
      }
    ]
},
  {
    id: 2,
    slug: 'dr.phanpon',
    name: 'Dr.Phanpon Leelahawong',
    nameAR: 'د. بانبون ليلاهاوونج',
    nameRU: 'Доктор Панпон Лилахавонг',
    role: 'Consultant Urologist',
    roleAR: 'استشاري جراحة المسالك البولية',
    roleRU: 'Уролог-консультант',
    image: '/assets/image/urologist section/dr.phanpon.webp',
    expert: 'Minimal Invasive & Innovation',
    expertTH: 'Minimal Invasive & Innovation',
    expertAR: 'الإجراءات طفيفة التوغل والابتكار',
    expertRU: 'Минимально инвазивная хирургия и инновации',
    hospital: 'Bangkok Hospital Pattaya',
    email: '',
    website: '',
    tagline: 'Expert in Minimal Invasive & Innovation Treatment',
    taglineTH: 'ผู้เชี่ยวชาญการรักษาแบบรุกรานน้อยและนวัตกรรม',
    taglineAR: 'خبير في الإجراءات طفيفة التوغل والعلاجات المبتكرة',
    taglineRU: 'Эксперт в области минимально инвазивных и инновационных методов лечения',
    bio: "Dr. Phanpon Leelahawong is a board-certified urologist with extensive experience in high-volume endoscopic surgery for benign prostatic enlargement and complex urinary stone disease. His clinical focus centers on advanced transurethral and enucleation-based techniques, offering definitive surgical solutions for patients with moderate to large prostate glands.",
    bioTH: 'นพ. ภาณพ ลีลาวงศ์ เป็นแพทย์ศัลยกรรมระบบทางเดินปัสสาวะที่ได้รับการรับรองจากคณะกรรมการแพทย์ มีประสบการณ์กว้างขวางด้านการผ่าตัดส่องกล้องปริมาณสูงสำหรับต่อมลูกหมากโตชนิดไม่ร้ายแรงและนิ่วในทางเดินปัสสาวะที่ซับซ้อน ความเชี่ยวชาญทางคลินิกของเขาครอบคลุมเทคนิคผ่านทางท่อปัสสาวะและการตัดต่อมขั้นสูง เพื่อมอบแนวทางการผ่าตัดที่เด็ดขาดสำหรับผู้ป่วยที่มีต่อมลูกหมากขนาดกลางถึงขนาดใหญ่',
    bioAR: 'الدكتور بانبون ليلاهاوونج هو جراح مسالك بولية معتمد يتمتع بخبرة واسعة في جراحات المناظير لعلاج تضخم البروستاتا الحميد وأمراض حصوات المسالك البولية المعقدة. يركز في ممارسته السريرية على تقنيات استئصال البروستاتا المتقدمة عبر الإحليل، حيث يقدم حلولًا جراحية نهائية للمرضى الذين يعانون من تضخم غدة البروستاتا.',
    bioRU: 'Доктор Панпон Лилахавонг — сертифицированный уролог с большим опытом работы в эндоскопической хирургии больших объемов при доброкачественной гиперплазии предстательной железы и сложных мочекаменных заболеваниях. Его клиническая практика сосредоточена на передовых трансуретральных методах и методах энуклеации, предлагая окончательные хирургические решения для пациентов с предстательной железой среднего и большого размера.',
    bioContent: [
      {
        type: 'header',
        content: "Expertise in Advanced Enucleation & Endourology",
        contentTH: 'ความเชี่ยวชาญด้านการตัดต่อมขั้นสูงและการส่องกล้องระบบทางเดินปัสสาวะ',
        contentAR: 'خبرة متقدمة في استئصال أنسجة البروستاتا وجراحة المسالك البولية بالمنظار',
        contentRU: 'Экспертиза в передовой энуклеации и эндоурологии'
      },
      {
        type: 'paragraph',
        content: "Dr. Phanpon has substantial experience in transurethral resection (TURP), bipolar enucleation (TUERP/BipoLEP), and modern laser-based enucleation techniques (HoLEP). His practice emphasizes complete adenoma removal using anatomical enucleation principles for durable long-term outcomes.",
        contentTH: 'นพ. ภาณพ มีประสบการณ์มากด้านการตัดชิ้นเนื้อผ่านท่อปัสสาวะ (TURP) การตัดต่อมแบบไบโพลาร์ (TUERP/BipoLEP) และเทคนิคการตัดต่อมด้วยเลเซอร์สมัยใหม่ (HoLEP) โดยเน้นการนำต่อมออกอย่างสมบูรณ์ตามหลักกายวิภาคศาสตร์ เพื่อผลลัพธ์ระยะยาวที่ยั่งยืน',
        contentAR: 'يتمتع د. بانبون بخبرة كبيرة في عمليات استئصال البروستاتا عبر الإحليل (TURP)، واستئصال البروستاتا ثنائي القطب (TUERP/BipoLEP)، وتقنيات الاستئصال بالليزر الحديثة (HoLEP). يركز في ممارسته على الإزالة الكاملة للورم الغدي باستخدام أسس الاستئصال التشريحي لتحقيق نتائج مستدامة وطويلة الأمد.',
        contentRU: 'Доктор Панпон имеет значительный опыт в трансуретральной резекции (ТУРП), биполярной энуклеации (TUERP/BipoLEP) и современных методах лазерной энуклеации (HoLEP). В своей практике он уделяет особое внимание полному удалению аденомы с использованием принципов анатомической энуклеации для достижения надежных долгосрочных результатов.'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-1.webp",
        caption: "Dr. Phanpon performing advanced laser enucleation for large prostate cases.",
        captionTH: 'นพ. ภาณพ กำลังทำการตัดต่อมด้วยเลเซอร์ขั้นสูงสำหรับผู้ป่วยต่อมลูกหมากขนาดใหญ่',
        captionAR: 'د. بانبون أثناء إجراء عملية استئصال متقدمة بالليزر لحالات تضخم البروستاتا الكبيرة.',
        captionRU: 'Доктор Панпон проводит передовую лазерную энуклеацию для случаев увеличения предстательной железы.'
      },
      {
        type: 'header',
        content: "Surgical Volume & Clinical Experience",
        contentTH: 'ปริมาณการผ่าตัดและประสบการณ์ทางคลินิก',
        contentAR: 'الخبرة السريرية وحجم العمليات الجراحية',
        contentRU: 'Хирургический объем и клинический опыт'
      },
      {
        type: 'list',
        items: [
          "Over 900 urological procedures performed",
          "Over 500 endoscopic stone surgeries",
          "Over 400 endoscopic prostate procedures"
        ],
        itemsTH: [
          'ผ่าตัดระบบทางเดินปัสสาวะมากกว่า 900 ครั้ง',
          'ผ่าตัดนิ่วด้วยการส่องกล้องมากกว่า 500 ครั้ง',
          'ผ่าตัดต่อมลูกหมากด้วยการส่องกล้องมากกว่า 400 ครั้ง'
        ],
        itemsAR: [
          'إجراء أكثر من 900 عملية مسالك بولية',
          'إجراء أكثر من 500 عملية تثقيب وتفتيت لحصوات المسالك البولية بالمنظار',
          'إجراء أكثر من 400 جراحة منظار للبروستاتا'
        ],
        itemsRU: [
          'Проведено более 900 урологических операций',
          'Более 500 эндоскопических операций по удалению камней',
          'Более 400 эндоскопических операций на предстательной железе'
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-2.webp",
        caption: "Extensive surgical experience with over 900 urological procedures.",
        captionTH: 'ประสบการณ์ผ่าตัดกว้างขวาง ด้วยหัตถการระบบทางเดินปัสสาวะมากกว่า 900 ครั้ง',
        captionAR: 'خبرة جراحية واسعة مع أكثر من 900 إجراء في المسالك البولية.',
        captionRU: 'Обширный хирургический опыт, включающий более 900 урологических процедур.'
      },
      {
        type: 'header',
        content: "Prostate & Endourology Center",
        contentTH: 'ศูนย์ต่อมลูกหมากและการส่องกล้องระบบทางเดินปัสสาวะ',
        contentAR: 'مركز البروستاتا وجراحة المسالك البولية بالمنظار',
        contentRU: 'Центр предстательной железы и эндоурологии'
      },
      {
        type: 'paragraph',
        content: "The Prostate & Endourology Center provides comprehensive evaluation and management of benign prostatic enlargement (BPH), large prostate glands requiring enucleation surgery, and complex renal/ureteric stones. Each patient undergoes structured assessment including symptom evaluation, imaging, and individualized treatment planning.",
        contentTH: 'ศูนย์ต่อมลูกหมากและการส่องกล้องฯ ให้บริการประเมินและดูแลต่อมลูกหมากโตชนิดไม่ร้ายแรง (BPH) ต่อมขนาดใหญ่ที่ต้องผ่าตัดตัดออก รวมถึงนิ่วในไตและท่อไตที่ซับซ้อน ผู้ป่วยทุกรายได้รับการประเมินอย่างเป็นระบบ ครอบคลุมการประเมินอาการ การถ่ายภาพ และการวางแผนรักษาเฉพาะบุคคล',
        contentAR: 'يوفر المركز تقييماً وعلاجاً شاملاً لتضخم البروستاتا غدة (BPH)، وعمليات استئصال البروستاتا الكبيرة المتضخمة، وعلاج حصوات الكلى والحالب المعقدة. يخضع كل مريض لتقييم منهجي يشمل تقييم الأعراض والتصوير وتخطيط العلاج المناسب بشكل فردي.',
        contentRU: 'Центр предстательной железы и эндоурологии предоставляет комплексную оценку и лечение доброкачественной гиперплазии предстательной железы (ДГПЖ), крупных предстательных желез, требующих хирургического вмешательства, и сложных почечных/мочеточниковых камней. Каждый пациент проходит структурированную оценку, включая оценку симптомов, визуализацию и индивидуальное планирование лечения.'
      },
      {
        type: 'list',
        items: [
          "Minimally invasive upper urinary tract procedures",
          "Precision-based endoscopic surgery with modern equipment",
          "Tailored surgical recommendations based on prostate size and patient expectations",
          "Standardized perioperative care for optimal recovery"
        ],
        itemsTH: [
          'หัตถการแบบรุกรานน้อยสำหรับทางเดินปัสสาวะส่วนบน',
          'การผ่าตัดส่องกล้องที่มีความแม่นยำสูงด้วยอุปกรณ์ทันสมัย',
          'คำแนะนำการผ่าตัดเฉพาะราย ตามขนาดต่อมและความคาดหวังของผู้ป่วย',
          'การดูแลรอบการผ่าตัดที่เป็นมาตรฐาน เพื่อการฟื้นฟูที่ดีที่สุด'
        ],
        itemsAR: [
          'إجراءات طفيفة التوغل للجهاز البولي العلوي',
          'جراحة مناظير دقيقة تعتمد على أحدث المعدات',
          'توصيات جراحية مخصصة بناءً على حجم البروستاتا وتوقعات المريض',
          'رعاية قياسية محيطة بالجراحة لضمان التعافي الأمثل'
        ],
        itemsRU: [
          'Минимально инвазивные процедуры на верхних мочевых путях',
          'Точная эндоскопическая хирургия с использованием современного оборудования',
          'Индивидуальные хирургические рекомендации в зависимости от размера предстательной железы и ожиданий пациента',
          'Стандартизированный периоперационный уход для оптимального восстановления'
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-3.webp",
        caption: "A leading center for prostate enucleation and complex stone disease.",
        captionTH: 'ศูนย์ชั้นนำด้านการตัดต่อมลูกหมากและโรคนิ่วที่ซับซ้อน',
        captionAR: 'مركز رائد في عمليات استئصال البروستاتا وعلاج أمراض الحصوات المعقدة.',
        captionRU: 'Ведущий центр по энуклеации предстательной железы и сложным заболеваниям камней.'
      },
      {
        type: 'header',
        content: "Clinical Philosophy",
        contentTH: 'ปรัชญาทางคลินิก',
        contentAR: 'الفلسفة السريرية',
        contentRU: 'Клиническая философия'
      },
      {
        type: 'list',
        items: [
          "Anatomical enucleation techniques for complete tissue removal",
          "Evidence-based decision making",
          "Structured perioperative care",
          "Functional recovery and long-term durability"
        ],
        itemsTH: [
          'เทคนิคการตัดต่อมตามหลักกายวิภาคเพื่อนำเนื้อเยื่อออกอย่างสมบูรณ์',
          'การตัดสินใจบนหลักฐานเชิงประจักษ์',
          'การดูแลรอบการผ่าตัดอย่างเป็นระบบ',
          'การฟื้นฟูการทำงานและความทนทานระยะยาว'
        ],
        itemsAR: [
          'تقنيات الاستئصال التشريحي للإزالة الكاملة للأنسجة',
          'صنع القرار القائم على الأدلة العلمية',
          'رعاية منهجية في فترة محيطة بالجراحة',
          'التعافي الوظيفي والنتائج المستدامة على المدى الطويل'
        ],
        itemsRU: [
          'Анатомические методы энуклеации для полного удаления тканей',
          'Принятие решений на основе фактических данных',
          'Структурированный периоперационный уход',
          'Функциональное восстановление и долгосрочная надежность'
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-4.webp",
        caption: "Committed to evidence-based care and anatomical precision.",
        captionTH: 'มุ่งมั่นต่อการดูแลบนหลักฐานเชิงประจักษ์และความแม่นยำทางกายวิภาค',
        captionAR: 'الالتزام بالرعاية القائمة على الأدلة والدقة التشريحية.',
        captionRU: 'Приверженность научно обоснованному уходу и анатомической точности.'
      },
      {
        type: 'header',
        content: "Professional Experience",
        contentTH: 'ประสบการณ์วิชาชีพ',
        contentAR: 'الخبرة المهنية',
        contentRU: 'Профессиональный опыт'
      },
      {
        type: 'list',
        items: [
          "2019 - Present: Consulting Urologist at M-Trust Urology Clinic",
          "2019 - Present: Full-time urologist, Rayong Hospital, Rayong",
          "2017 - 2019: Full-time urologist, Chao Phraya Abhaibhubejhr Center Hospital",
          "Consulting Urologist: Dr. Phanpon Urology Clinic Rayong, Eternity Clinic, Sri Rayong Hospital, Bangkok Rayong Hospital"
        ],
        itemsTH: [
          '2562 - ปัจจุบัน: แพทย์ที่ปรึกษาระบบทางเดินปัสสาวะ ที่ M-Trust Urology Clinic',
          '2562 - ปัจจุบัน: แพทย์ประจำโรงพยาบาลระยอง จ.ระยอง',
          '2560 - 2562: แพทย์ประจำโรงพยาบาลเจ้าพระยาอภัยภูเบศร',
          'แพทย์ที่ปรึกษา: Dr. Phanpon Urology Clinic ระยอง, Eternity Clinic, ศรีระยองโรงพยาบาล, กรุงเทพระยองโรงพยาบาล'
        ],
        itemsAR: [
          '2019 - حتى الآن: طبيب استشاري في المسالك البولية في M-Trust Urology Clinic',
          '2019 - حتى الآن: طبيب مسالك بولية بدوام كامل، مستشفى رايونغ',
          '2017 - 2019: طبيب مسالك بولية بدوام كامل، مستشفى مركز تشاو فرايا أبهيبهوبهيجر',
          'استشاري مسالك بولية: عيادة دكتور بانبون رايونغ، عيادة الأبدية، مستشفى سري رايونغ، مستشفى رايونغ بانكوك'
        ],
        itemsRU: [
          '2019 - настоящее время: Уролог-консультант в клинике M-Trust Urology Clinic',
          '2019 - настоящее время: Уролог на полную ставку, Больница Районг',
          '2017 - 2019: Уролог на полную ставку, больница Chao Phraya Abhaibhubejhr Center Hospital',
          'Уролог-консультант: урологическая клиника доктора Панпона в Районге, Eternity Clinic, больница Sri Rayong, больница Bangkok Rayong'
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-5.webp",
        caption: "Providing comprehensive urological consulting and specialized surgical services.",
        captionTH: 'ให้บริการปรึกษาระบบทางเดินปัสสาวะครบวงจรและบริการผ่าตัดเฉพาะทาง',
        captionAR: 'تقديم استشارات متكاملة وخدمات جراحية متخصصة في المسالك البولية.',
        captionRU: 'Предоставление комплексных урологических консультаций и специализированных хирургических услуг.'
      }
    ],
    specialties: ["Andrology & Sexual Dysfunction", "Prostate Disease", "Urinary Tract Stones", "Dorsal Neurectomy", "Penile Enhancement", "Minimal Invasive & Innovation Treatment"],
    specialtiesTH: ['Andrology & Sexual Dysfunction', 'Prostate Disease', 'Urinary Tract Stones', 'Dorsal Neurectomy', 'Penile Enhancement', 'Minimal Invasive & Innovation Treatment'],
    specialtiesAR: ["أمراض الذكورة والضعف الجنسي", "أمراض البروستاتا", "حصوات المسالك البولية", "استئصال العصب الظهري", "تجميل القضيب", "الإجراءات طفيفة التوغل والعلاجات المبتكرة"],
    specialtiesRU: ["Андрология и сексуальные дисфункции", "Заболевания предстательной железы", "Камни в мочевыводящих путях", "Дорсальная нейрэктомия", "Увеличение полового члена", "Минимально инвазивные и инновационные методы лечения"],
    qualifications: [
      { year: "2025", title: "Certificate of Attendance, Master the Transurethral Anatomical Enucleation of Prostate (TUAEP)", titleAR: "شهادة حضور، إتقان الاستئصال التشريحي للبروستاتا عبر الإحليل (TUAEP)", titleRU: "Сертификат об участии, Мастер-класс по трансуретральной анатомической энуклеации предстательной железы (TUAEP)", place: "TUAEP Masterclass", placeAR: "دورة TUAEP المتقدمة", placeRU: "Мастер-класс TUAEP" },
      { year: "2025", title: "Certificate of Completion, UROLIFT™ SYSTEM PROFICIENCY PATHWAY MODULE", titleAR: "شهادة إتمام، وحدة مسار الكفاءة لنظام UROLIFT™", titleRU: "Сертификат об окончании, Модуль повышения квалификации системы UROLIFT™", place: "Teleflex Interventional Urology", placeAR: "Teleflex لجراحة المسالك البولية التداخلية", placeRU: "Интервенционная урология Teleflex" },
      { year: "2022", title: "Certificate of Recognition, Rezūm Procedure Training Program", titleAR: "شهادة تقدير، برنامج التدريب على إجراء Rezūm", titleRU: "Сертификат признания, Программа обучения процедуре Rezūm", place: "Boston Scientific", placeAR: "Boston Scientific", placeRU: "Boston Scientific" },
      { year: "2020", title: "Certificate of Attendance, Endoscopic Stone Treatment Step 2", titleAR: "شهادة حضور، علاج الحصوات بالمنظار المرحلة 2", titleRU: "Сертификат об участии, Эндоскопическое лечение камней, шаг 2", place: "SET - UP Programme, EAU", placeAR: "برنامج SET-UP، الجمعية الأوروبية لجراحة المسالك البولية (EAU)", placeRU: "Программа SET-UP, Европейская ассоциация урологов (EAU)" },
      { year: "2018", title: "Certificate of Attendance, Endoscopic Stone Treatment Step 1", titleAR: "شهادة حضور، علاج الحصوات بالمنظار المرحلة 1", titleRU: "Сертификат об участии, Эндоскопическое лечение камней, шаг 1", place: "SET - UP Programme, EAU", placeAR: "برنامج SET-UP، الجمعية الأوروبية لجراحة المسالك البولية (EAU)", placeRU: "Программа SET-UP, Европейская ассоциация урологов (EAU)" },
      { year: "2017", title: "Diplomate Thai Board of Urology", titleAR: "دبلوم البورد التايلاندي في جراحة المسالك البولية", titleRU: "Дипломант Тайского совета по урологии", place: "Siriraj Hospital, Mahidol University", placeAR: "مستشفى سيريراج، جامعة ماهيدول", placeRU: "Больница Сирирадж, Университет Махидол" },
      { year: "2012", title: "Doctor of Medicine", titleAR: "دكتور في الطب", titleRU: "Доктор медицины", place: "Faculty of Medicine, Prince of Songkla University", placeAR: "كلية الطب، جامعة الأمير سونغكلا", placeRU: "Медицинский факультет, Университет принца Сонгкла" }
    ],
    awards: [
      { year: "2025", title: "TUAEP Masterclass", titleAR: "دورة TUAEP المتقدمة", titleRU: "Мастер-класс TUAEP", issuer: "Certificate of Attendance", issuerAR: "شهادة حضور", issuerRU: "Сертификат об участии" },
      { year: "2025", title: "UROLIFT™ SYSTEM Proficiency", titleAR: "كفاءة نظام UROLIFT™", titleRU: "Квалификация системы UROLIFT™", issuer: "Certificate of Completion", issuerAR: "شهادة إتمام", issuerRU: "Сертификат об окончании" },
      { year: "2022", title: "Rezūm Procedure Training", titleAR: "التدريب على إجراء Rezūm", titleRU: "Обучение процедуре Rezūm", issuer: "Certificate of Recognition", issuerAR: "شهادة تقدير", issuerRU: "Сертификат признания" }
    ],
    specializedFocus: "Minimally invasive BPH treatments using Rezūm (Water Vapor Therapy) and UroLift implants, alongside Dorsal Neurectomy and Penile Enhancement procedures.",
    specializedFocusAR: "علاجات تضخم البروستاتا الحميد طفيفة التوغل باستخدام Rezūm (العلاج ببخار الماء) وزرعات UroLift، إلى جانب إجراءات استئصال العصب الظهري وتجميل القضيب.",
    specializedFocusRU: "Минимально инвазивные методы лечения ДГПЖ с использованием имплантатов Rezūm (водно-паровая терапия) и UroLift, наряду с дорсальной нейрэктомией и процедурами увеличения полового члена.",
    surgicalExcellence: "Certified in advanced endoscopic stone treatment (EAU SET-UP), Rezūm, and UroLift, delivering high-quality urological care with a focus on patient safety and outcomes.",
    surgicalExcellenceAR: "معتمد في العلاج المتقدم للحصوات بالمنظار (EAU SET-UP)، و Rezūm، و UroLift، لتقديم رعاية مسالك بولية عالية الجودة مع التركيز على سلامة المرضى والنتائج الطبية.",
    surgicalExcellenceRU: "Сертифицирован в области передового эндоскопического лечения камней (EAU SET-UP), Rezūm и UroLift, предоставляя высококачественную урологическую помощь с упором на безопасность пациентов и результаты.",
    videoUrl: "",
    activities: [],
    certificates: [
      "/assets/image/urologist section/dr.phanpon-certificate/certificate-01.webp",
      "/assets/image/urologist section/dr.phanpon-certificate/certificate-02.webp",
      "/assets/image/urologist section/dr.phanpon-certificate/certificate-03.webp",
      "/assets/image/urologist section/dr.phanpon-certificate/certificate-04.webp"
    ],
    hideTestimonials: true
},
  {
    id: 3,
    slug: 'dr.none',
    name: 'Dr. None',
    role: 'Stone Disease Specialist',
    image: '/assets/image/urologist section/dr.none.webp',
    expert: 'Diagnostics & Surgery',
    bio: "Expert in treating kidney stones with advanced laser lithotripsy and minimally invasive endoscopic procedures.",
    specialties: ["Endourology", "Stone Disease", "Laparoscopic Surgery"],
    qualifications: [
      { year: "2008", title: "Doctor of Medicine", place: "Chulalongkorn University" }
    ],
    awards: [],
    videoUrl: "",
    activities: [],
    certificates: [],
      nameAR: "د. طبيب غير معروف",
      roleAR: "اختصاصي مجهول",
      expertAR: "عام",
      taglineAR: "طبيب عام",
      bioAR: "لا يوجد."
},
];

export const ABOUT_SPECIALTIES = [
  { title: 'Performance Restoration', desc: 'Treat ED and restore vitality with innovative Li-ESWT technology.', Icon: Zap, image: '/assets/image/about section/Performance Restoration.webp' },
  { title: 'General & Surgical Urology', desc: 'Diagnosis and minimally invasive surgery for all urological conditions.', Icon: Stethoscope, image: '/assets/image/about section/General & Surgical Urology.webp' },
  { title: 'Prostate Center', desc: 'Comprehensive Advanced care for enlarged prostate and urinary symptoms.', Icon: Target, image: '/assets/image/about section/Prostate Center.webp' },
  { title: 'Cosmetic Urology', desc: 'Professional male aesthetic surgery and safe augmentation procedures.', Icon: Scissors, image: '/assets/image/about section/Cosmetic Urology.webp' }
];

export const FAQ_DATA: FaqItem[] = [
  { question: "Do I need a referral to make an appointment?", answer: "No, you can book an appointment directly with our specialists without a referral letter. We welcome both local and international patients." },
  { question: "Is the Shockwave therapy for ED painful?", answer: "Not at all. Focus Shockwave is a non-invasive, painless procedure requiring no anesthesia. Most patients describe a light tapping sensation." },
  { question: "What is the recovery time for a Vasectomy?", answer: "Our minimally invasive 'No-Scalpel' vasectomy allows for a very quick recovery. Most patients return to light work within 1-2 days and full activity within a week." },
  { question: "Do you accept health insurance?", answer: "We currently do not accept health insurance directly. However, we can provide all necessary documentation so you can submit a claim and reimburse through your insurance provider on your own." },
  { question: "Is my consultation confidential?", answer: "Absolutely. We adhere to strict medical privacy standards. Your records and consultation details are kept 100% confidential." },
  { question: "Do you offer tele-consultation services?", answer: "Yes, we offer secure video consultations for initial screenings and follow-ups. You can book this service through our Line Official or website." }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 1,
    title: 'What is Shockwave (Li-ESWT)? Can it really cure ED?',
    excerpt: 'Discover how high-frequency sound waves stimulate new blood vessel formation to treat the root cause of ED without medication.',
    date: 'Feb 02, 2026',
    category: 'Innovation',
    image: '/assets/image/blog section/Can it really cure ED.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Erectile Dysfunction (ED) affects millions of men worldwide, usually caused by poor blood flow. Traditional treatments like pills (PDE5i) offer a temporary fix but do not address the root cause. <strong>Linear Focus Shockwave Therapy (Li-ESWT)</strong> represents a paradigm shift—a non-invasive, regenerative treatment designed to restore natural function.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">How Does It Work?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Li-ESWT uses high-frequency low-intensity acoustic waves to target tissues within the penis. These waves create improved micro-trauma, triggering a biological response known as <strong>angiogenesis</strong>—the formation of new blood vessels.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Breaks down micro-plaque</strong> in existing blood vessels.</li>
            <li><strong>Stimulates growth factors</strong> (e.g., VEGF) for tissue repair.</li>
            <li><strong>Rejuvenates nerve tissue</strong>, improving sensitivity.</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Can it really cure ED 2.webp" 
            alt="Shockwave Therapy Mechanism" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Li-ESWT Mechanism: Acoustic waves stimulate new blood vessel formation</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Can It "Cure" ED?</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        While "cure" is a strong word, Li-ESWT is currently the only modality that <strong>rehabilitates</strong> the mechanism of erection rather than just masking symptoms. Clinical studies show significant success rates:
      </p>
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Over 75% of patients reported improved erectile function and were able to achieve spontaneous erections without medication after a full course of treatment."
      </blockquote>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Treatment Protocol</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        A standard course involves 6-12 sessions, each lasting about 15 minutes. It is painless, requires no anesthesia, and has zero downtime.
      </p>
      
      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Key Benefits:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 100% Non-invasive & Painless</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> No side effects commonly associated with pills</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Long-lasting results (up to 2 years)</li>
        </ul>
      </div>
    `,
      titleAR: "ما هو العلاج بالموجات الصدمية (Li-ESWT)؟",
      titleRU: "Что такое ударно-волновая терапия (Li-ESWT)? Может ли она действительно вылечить ЭД?",
      excerptAR: "اكتشف كيف تحفز هذه التقنية تدفق الدم لعلاج ضعف الانتصاب بشكل دائم.",
      excerptRU: "Узнайте, как высокочастотные звуковые волны стимулируют образование новых кровеносных сосудов для лечения первопричины ЭД без лекарств.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يؤثر ضعف الانتصاب (ED) على ملايين الرجال حول العالم، وغالباً ما يكون سببه ضعف تدفق الدم. العلاجات التقليدية مثل الحبوب (PDE5i) توفر حلاً مؤقتاً لكنها لا تعالج السبب الجذري. باختلاف تام، يعتبر <strong>العلاج بالموجات الصدمية المركزة الخطي (Li-ESWT)</strong> نقلة نوعية كعلاج تجديدي غير جراحي يهدف إلى استعادة الوظيفة الطبيعية.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">كيف يعمل؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يستخدم Li-ESWT موجات صوتية عالية التردد ومنخفضة الشدة لاستهداف الأنسجة داخل العضو الذكري. هذه الموجات تخلق صدمة مجهرية محسّنة، مما يؤدي إلى استجابة بيولوجية تُعرف باسم <strong>تولد الأوعية الدموية (Angiogenesis)</strong> — أي تكوين أوعية دموية جديدة.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>يكسر الترسبات الدقيقة</strong> في الأوعية الدموية الموجودة.</li>
            <li><strong>يحفز عوامل النمو</strong> (مثل VEGF) لإصلاح الأنسجة.</li>
            <li><strong>يجدد النسيج العصبي</strong>، مما يحسن من الحساسية.</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Can it really cure ED 2.webp" 
            alt="Shockwave Therapy Mechanism" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">آلية Li-ESWT: الموجات الصوتية تحفز تكوين الأوعية الدموية الجديدة</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">هل يمكن أن "يعالج" ضعف الانتصاب نهائياً؟</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        في حين أن كلمة "علاج نهائي" قوية، إلا أن Li-ESWT هو الوسيلة الوحيدة حالياً التي <strong>تعيد تأهيل</strong> آلية الانتصاب بدلاً من مجرد حجب الأعراض. تُظهر الدراسات السريرية معدلات نجاح كبيرة:
      </p>
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "أبلغ أكثر من 75٪ من المرضى عن تحسن في وظيفة الانتصاب وتمكنوا من تحقيق انتصاب تلقائي دون استخدام الأدوية بعد إكمال دورة العلاج الكاملة."
      </blockquote>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">بروتوكول العلاج</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        تتضمن الدورة القياسية 6-12 جلسة، تستغرق كل منها حوالي 15 دقيقة. إنه إجراء غير مؤلم، ولا يتطلب تخديراً، ولا يحتاج إلى فترة نقاهة.
      </p>
      
      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">أهم الفوائد:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 100% غير جراحي وبدون ألم</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> لا توجد آثار جانبية مرتبطة عادة بالحبوب</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> نتائج طويلة الأمد (تصل إلى سنتين)</li>
        </ul>
      </div>
      `,
      contentRU: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Эректильная дисфункция (ЭД) поражает миллионы мужчин во всем мире и обычно вызывается плохим кровотоком. Традиционные методы лечения, такие как таблетки (ФДЭ-5), предлагают временное решение, но не устраняют первопричину. <strong>Линейная фокусная ударно-волновая терапия (Li-ESWT)</strong> представляет собой смену парадигмы — неинвазивное регенеративное лечение, направленное на восстановление естественной функции.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Как это работает?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Li-ESWT использует высокочастотные низкоинтенсивные акустические волны для воздействия на ткани внутри полового члена. Эти волны создают улучшенную микротравму, запуская биологическую реакцию, известную как <strong>ангиогенез</strong> — образование новых кровеносных сосудов.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Разрушает микро-бляшки</strong> в существующих кровеносных сосудах.</li>
            <li><strong>Стимулирует факторы роста</strong> (например, VEGF) для восстановления тканей.</li>
            <li><strong>Омолаживает нервную ткань</strong>, улучшая чувствительность.</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Can it really cure ED 2.webp" 
            alt="Механизм ударно-волновой терапии" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Механизм Li-ESWT: акустические волны стимулируют образование новых кровеносных сосудов</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Может ли это "вылечить" ЭД?</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Хотя слово «вылечить» звучит сильно, Li-ESWT в настоящее время является единственным методом, который <strong>восстанавливает</strong> механизм эрекции, а не просто маскирует симптомы. Клинические исследования показывают значительные показатели успеха:
      </p>
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        «Более 75% пациентов сообщили об улучшении эректильной функции и смогли достичь спонтанной эрекции без лекарств после прохождения полного курса лечения».
      </blockquote>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Протокол лечения</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Стандартный курс включает 6-12 сеансов, каждый из которых длится около 15 минут. Это безболезненно, не требует анестезии и не имеет периода восстановления.
      </p>
      
      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Основные преимущества:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> 100% неинвазивно и безболезненно</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Отсутствие побочных эффектов, обычно связанных с таблетками</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Долговременные результаты (до 2 лет)</li>
        </ul>
      </div>
      `
},
  {
    id: 2,
    title: 'Treating BPH Without Surgery: ReZum & UroLift',
    excerpt: 'New alternatives for Benign Prostatic Hyperplasia that preserve sexual function and offer rapid recovery.',
    date: 'Jan 31, 2026',
    category: 'Treatment',
    image: '/assets/image/blog section/Treating BPH Without Surgery.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Benign Prostatic Hyperplasia (BPH) affects over 50% of men over age 50, causing urinary symptoms that significantly impact quality of life. Traditional surgery (TURP) is effective but carries risks including sexual dysfunction and lengthy recovery. <strong>ReZUM Water Vapor Therapy</strong> and <strong>UroLift System</strong> represent revolutionary non-surgical alternatives.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What is ReZUM?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            ReZUM uses sterile water vapor (steam) to gently and precisely ablate excess prostate tissue. The procedure takes just <strong>15 minutes</strong> under local anesthesia.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Minimally invasive</strong> - No incisions required</li>
            <li><strong>Preserves sexual function</strong> - No risk of retrograde ejaculation</li>
            <li><strong>Fast recovery</strong> - Back to normal in 3-7 days</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Treating BPH Without Surgery 2.webp" 
            alt="ReZUM Procedure" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">ReZUM: Water vapor therapy for BPH</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What is UroLift?</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        UroLift uses tiny implants to "lift" and hold enlarged prostate tissue away from the urethra, creating an open channel for urine flow. No tissue is removed.
      </p>
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Studies show UroLift patients experience immediate symptom relief with zero risk of erectile or ejaculatory dysfunction—a game-changer for younger, sexually active men."
      </blockquote>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ReZUM vs UroLift: Which is Right for You?</h3>
      
      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Comparison Summary:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>ReZUM:</strong> Best for moderate-large prostates (30-80cc)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>UroLift:</strong> Ideal for smaller-medium prostates (&#60;80cc)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Both preserve sexual function 100%</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Both avoid major surgery</li>
        </ul>
      </div>
    `,
      titleAR: "علاج تضخم البروستاتا بدون جراحة: ReZUM و UroLift",
      excerptAR: "بدائل جديدة لتضخم البروستاتا الحميد تحافظ على الوظيفة الجنسية وتوفر تعافياً سريعاً.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يؤثر تضخم البروستاتا الحميد (BPH) على أكثر من 50% من الرجال فوق سن الخمسين، مما يسبب أعراضاً بولية تؤثر بشكل كبير على جودة الحياة. الجراحة التقليدية (TURP) فعالة ولكنها تحمل مخاطر تشمل الخلل الوظيفي الجنسي وطول فترة التعافي. يمثل <strong>علاج ReZUM ببخار الماء</strong> و <strong>نظام UroLift</strong> بدائل ثورية غير جراحية.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما هو ReZUM؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يستخدم ReZUM بخار الماء المعقم لكي وإزالة أنسجة البروستاتا الزائدة بلطف ودقة. يستغرق الإجراء <strong>15 دقيقة</strong> فقط تحت التخدير الموضعي.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>طفيف التوغل</strong> - لا يتطلب أي شقوق</li>
            <li><strong>يحافظ على الوظيفة الجنسية</strong> - لا يوجد خطر القذف المرتجع</li>
            <li><strong>تعافي سريع</strong> - العودة إلى الوضع الطبيعي خلال 3-7 أيام</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Treating BPH Without Surgery 2.webp" 
            alt="ReZUM Procedure" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">ReZUM: العلاج ببخار الماء لتضخم البروستاتا</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما هو UroLift؟</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يستخدم UroLift غرسات صغيرة لـ "رفع" وتثبيت أنسجة البروستاتا المتضخمة بعيدًا عن مجرى البول، مما يخلق قناة مفتوحة لتدفق البول. لا تتم إزالة أي أنسجة.
      </p>
      <blockquote class="border-r-4 border-amber-500 pr-4 italic text-slate-700 dark:text-slate-300 my-6">
        "تُظهر الدراسات أن مرضى UroLift يشعرون براحة فورية من الأعراض مع عدم وجود أي خطر للإصابة بضعف الانتصاب أو القذف — وهو تغيير جذري للرجال الأصغر سناً والنشطين جنسياً."
      </blockquote>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ReZUM مقابل UroLift: أيهما الأنسب لك؟</h3>
      
      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">ملخص المقارنة:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>ReZUM:</strong> الأفضل للبروستاتا المتوسطة إلى الكبيرة (30-80 مل)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>UroLift:</strong> مثالي للبروستاتا الصغيرة إلى المتوسطة (أقل من 80 مل)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> كلاهما يحافظ على الوظيفة الجنسية بنسبة 100٪</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> كلاهما يتجنب الجراحة الكبرى</li>
        </ul>
      </div>
      `
},
  {
    id: 3,
    title: 'Stapler Circumcision vs Traditional: Which is Better?',
    excerpt: 'Comparing traditional methods with the latest stapler technology. Less pain, aesthetic results, and 15-minute procedure.',
    date: 'Jan 28, 2026',
    category: 'Surgery',
    image: '/assets/image/blog section/Stapler Circumcision vs Traditional.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Circumcision is one of the most common surgical procedures worldwide. While traditional methods have been used for centuries, modern <strong>Stapler Circumcision Technology</strong> offers a revolution in comfort, aesthetics, and recovery time—completed in just 15 minutes with minimal bleeding.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">How Does Stapler Circumcision Work?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Using a specialized disposable device, the stapler method cuts and seals the foreskin simultaneously with medical-grade staples. The result is a clean, even circumferential cut.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>15-minute procedure</strong> - Significantly faster than traditional</li>
            <li><strong>Minimal bleeding</strong> - Instant hemostasis</li>
            <li><strong>Superior aesthetics</strong> - Consistent, neat results</li>
            <li><strong>Less pain</strong> - Reduced tissue trauma</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Stapler Circumcision vs Traditional 2.webp" 
            alt="Stapler Circumcision" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Modern stapler technology for precise results</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Traditional vs Stapler Method</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Traditional circumcision uses a scalpel and requires manual suturing, which can take 30-45 minutes. Stapler method reduces procedure time by 70% and delivers more consistent cosmetic outcomes.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Patient satisfaction rates with stapler circumcision exceed 95%, with most men reporting minimal discomfort and excellent aesthetic results. Recovery time is typically 7-10 days."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Key Benefits:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Quick 15-minute outpatient procedure</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Minimal post-operative pain</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Superior cosmetic appearance</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Faster healing (7-10 days)</li>
        </ul>
      </div>
    `,
      titleAR: "الختان بالدباسة مقابل التقليدي: أيهما أفضل؟",
      excerptAR: "مقارنة شاملة بين طرق الختان لمساعدتك في اتخاذ القرار.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يعد الختان أحد أكثر العمليات الجراحية شيوعاً في جميع أنحاء العالم. في حين تم استخدام الطرق التقليدية لقرون، تقدم <strong>تقنية الختان بالدباسة (Stapler Circumcision)</strong> الحديثة ثورة في الراحة، والنتائج التجميلية، ووقت التعافي - حيث تكتمل في 15 دقيقة فقط مع الحد الأدنى من النزيف.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">كيف تعمل تقنية الختان بالدباسة؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            باستخدام جهاز متخصص يستخدم لمرة واحدة، تقوم طريقة الدباسة بقطع القلفة وختمها في وقت واحد باستخدام دبابيس طبية. النتيجة هي قطع محيطي نظيف ومتساوٍ.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>إجراء يستغرق 15 دقيقة</strong> - أسرع بكثير من الطريقة التقليدية</li>
            <li><strong>الحد الأدنى من النزيف</strong> - توقف فوري للنزيف</li>
            <li><strong>جماليات فائقة</strong> - نتائج متسقة وأنيقة</li>
            <li><strong>ألم أقل</strong> - تقليل صدمة الأنسجة</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Stapler Circumcision vs Traditional 2.webp" 
            alt="Stapler Circumcision" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">تقنية الدباسة الحديثة لنتائج دقيقة</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">الطريقة التقليدية مقابل الدباسة</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يستخدم الختان التقليدي مشرطاً ويتطلب خياطة يدوية، مما قد يستغرق 30-45 دقيقة. تقلل طريقة الدباسة من وقت الإجراء بنسبة 70٪ وتقدم نتائج تجميلية أكثر اتساقاً.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "تتجاوز معدلات رضا المرضى عن الختان بالدباسة 95٪، حيث يبلغ معظم الرجال عن الحد الأدنى من الانزعاج ونتائج تجميلية ممتازة. وقت التعافي هو عادة 7-10 أيام."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">الفوائد الرئيسية:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> إجراء سريع في العيادة لمدة 15 دقيقة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> الحد الأدنى من ألم ما بعد الجراحة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> مظهر تجميلي فائق</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> شفاء أسرع (7-10 أيام)</li>
        </ul>
      </div>
      `
},
  {
    id: 4,
    title: 'Prostate Cancer Warning Signs: Why PSA Matters',
    excerpt: 'Early-stage prostate cancer often shows no symptoms. Learn why annual PSA blood testing is crucial for men.',
    date: 'Jan 25, 2026',
    category: 'Prevention',
    image: '/assets/image/blog section/Prostate Cancer Warning Signs.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Prostate cancer is the second most common cancer in men worldwide, yet early-stage disease often has <strong>no symptoms</strong>. This silent nature makes regular <strong>PSA (Prostate-Specific Antigen) blood testing</strong> absolutely critical for early detection and successful treatment.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What is PSA Testing?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            PSA is a protein produced by the prostate gland. Elevated levels can indicate prostate cancer, BPH, or prostatitis. A simple blood test can detect abnormalities <strong>years before symptoms appear</strong>.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Normal PSA:</strong> &#60;4.0 ng/mL (varies by age)</li>
            <li><strong>Gray zone:</strong> 4.0-10.0 ng/mL (requires further investigation)</li>
            <li><strong>High risk:</strong> &#62;10.0 ng/mL (immediate workup needed)</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Prostate Cancer Warning Signs 2.webp" 
            alt="PSA Blood Test" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Early detection saves lives: PSA screening</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Warning Signs (Advanced Disease)</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        While early prostate cancer is asymptomatic, advanced disease may cause urinary issues, blood in urine, bone pain, or erectile dysfunction. Don't wait for symptoms—get screened.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Men over 50 (or over 40 with family history) should have annual PSA tests. Early detection increases 5-year survival rates to nearly 100%."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Screening Recommendations:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Age 50+: Annual PSA test</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Age 40+ with family history: Start earlier</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Combine PSA with digital rectal exam (DRE)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Results ready in 24-48 hours</li>
        </ul>
      </div>
    `,
      titleAR: "علامات تحذيرية لسرطان البروستاتا: أهمية فحص PSA",
      excerptAR: "لماذا يعتبر الكشف المبكر المنقذ الأهم للرجال.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يعد سرطان البروستاتا ثاني أكثر أنواع السرطان شيوعاً بين الرجال في جميع أنحاء العالم، ومع ذلك فإن المرض في مراحله المبكرة غالباً ما يكون <strong>بلا أعراض</strong>. هذه الطبيعة الصامتة تجعل <strong>اختبار الدم PSA (مستضد البروستاتا النوعي)</strong> المنتظم أمراً بالغ الأهمية للكشف المبكر والعلاج الناجح.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما هو اختبار PSA؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            PSA هو بروتين تنتجه غدة البروستاتا. يمكن أن تشير المستويات المرتفعة إلى سرطان البروستاتا، تضخم البروستاتا الحميد (BPH)، أو التهاب البروستاتا. يمكن لفحص دم بسيط اكتشاف التشوهات <strong>قبل سنوات من ظهور الأعراض</strong>.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>معدل PSA الطبيعي:</strong> &#60;4.0 نانوغرام/مل (يختلف حسب العمر)</li>
            <li><strong>المنطقة الرمادية:</strong> 4.0-10.0 نانوغرام/مل (يتطلب مزيداً من الفحص)</li>
            <li><strong>مخاطر عالية:</strong> &#62;10.0 نانوغرام/مل (يتطلب فحصاً طبياً فورياً)</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Prostate Cancer Warning Signs 2.webp" 
            alt="PSA Blood Test" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">الكشف المبكر ينقذ الأرواح: فحص PSA</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">العلامات التحذيرية (المرض المتقدم)</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        بينما يكون سرطان البروستاتا المبكر بدون أعراض، فإن المرض المتقدم قد يسبب مشاكل بولية، دماً في البول، آلاماً في العظام، أو ضعفاً في الانتصاب. لا تنتظر ظهور الأعراض - اخضع للفحص.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "يجب على الرجال فوق سن الخمسين (أو فوق الأربعين إذا كان لديهم تاريخ عائلي) إجراء فحص PSA سنوياً. الكشف المبكر يزيد من معدلات البقاء على قيد الحياة لمدة 5 سنوات إلى ما يقرب من 100٪."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">توصيات الفحص:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> العمر 50+: فحص PSA سنوي</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> العمر 40+ مع تاريخ عائلي: البدء في الفحص مبكراً</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> دمج فحص PSA مع فحص المستقيم الرقمي (DRE)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> نتائج الفحص جاهزة خلال 24-48 ساعة</li>
        </ul>
      </div>
      `
},
  {
    id: 5,
    title: 'Low Testosterone (Low T): Symptoms & TRT Solutions',
    excerpt: 'Fatigue, mood swings, low libido? Learn about Testosterone Replacement Therapy from our specialists.',
    date: 'Jan 22, 2026',
    category: 'Wellness',
    image: '/assets/image/blog section/Low Testosterone.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Testosterone levels naturally decline with age, but severe deficiency can cause debilitating symptoms. <strong>Low Testosterone (Low T)</strong> affects energy, mood, muscle mass, and sexual function. <strong>Testosterone Replacement Therapy (TRT)</strong> can restore vitality and quality of life when properly managed.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Recognizing Low T Symptoms</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Low testosterone manifests in multiple body systems. Many men suffer silently, attributing symptoms to "aging" without realizing treatment is available.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Sexual:</strong> Low libido, erectile dysfunction</li>
            <li><strong>Physical:</strong> Fatigue, muscle loss, weight gain</li>
            <li><strong>Mental:</strong> Depression, brain fog, irritability</li>
            <li><strong>Metabolic:</strong> Increased body fat, reduced bone density</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Low Testosterone 2.webp" 
            alt="Testosterone Therapy" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Restore vitality with medical-grade TRT</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">TRT Treatment Options</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Modern TRT comes in multiple forms: injections (weekly/biweekly), gels (daily application), or pellets (every 3-6 months). Your doctor will tailor the approach based on your lifestyle and preferences.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Most men on properly managed TRT report dramatic improvements in energy, mood, and sexual function within 4-6 weeks. It's life-changing."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber- 100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">TRT Benefits:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Restored libido and sexual performance</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Increased muscle mass and strength</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Improved mood and mental clarity</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Better energy and reduced fatigue</li>
        </ul>
      </div>
    `,
      titleAR: "نقص هرمون التستوستيرون (Low T): الأعراض والحلول",
      excerptAR: "كيف تستعيد نشاطك وحيويتك بالعلاج الهرموني.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        تنخفض مستويات هرمون التستوستيرون بشكل طبيعي مع تقدم العمر، ولكن النقص الحاد يمكن أن يسبب أعراضاً منهكة. يؤثر <strong>نقص هرمون التستوستيرون (Low T)</strong> على الطاقة والمزاج وكتلة العضلات والوظيفة الجنسية. يمكن لـ <strong>العلاج التعويضي بالتستوستيرون (TRT)</strong> استعادة الحيوية ونوعية الحياة عند إدارته بشكل صحيح.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">التعرف على أعراض نقص هرمون التستوستيرون</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يظهر انخفاض هرمون التستوستيرون في أنظمة الجسم المتعددة. يعاني العديد من الرجال في صمت، ويعزون الأعراض إلى "الشيخوخة" دون إدراك أن العلاج متاح.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>جنسياً:</strong> انخفاض الرغبة الجنسية، وضعف الانتصاب</li>
            <li><strong>جسدياً:</strong> التعب، فقدان العضلات، زيادة الوزن</li>
            <li><strong>عقلياً:</strong> الاكتئاب، ضبابية الدماغ، التهيج</li>
            <li><strong>التمثيل الغذائي:</strong> زيادة دهون الجسم، انخفاض كثافة العظام</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Low Testosterone 2.webp" 
            alt="Testosterone Therapy" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">استعد حيويتك مع علاج TRT الطبي</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">خيارات علاج TRT</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يأتي العلاج التعويضي الحديث (TRT) في أشكال متعددة: حقن (أسبوعية/نصف شهرية)، مواد هلامية (تطبيق يومي)، أو حبيبات (كل 3-6 أشهر). سيقوم طبيبك بتخصيص النهج بناءً على أسلوب حياتك وتفضيلاتك.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "يُبلغ معظم الرجال الذين يتلقون علاج TRT المدار بشكل صحيح عن تحسن كبير في الطاقة والمزاج والوظيفة الجنسية في غضون 4-6 أسابيع. إنه تغيير جذري في الحياة."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">فوائد علاج TRT:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> استعادة الرغبة الجنسية والأداء الجنسي</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> زيادة كتلة العضلات وقوتها</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تحسن المزاج والصفاء الذهني</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> طاقة أفضل وتقليل التعب</li>
        </ul>
      </div>
      `
},
  {
    id: 6,
    title: 'Safe Penile Enlargement: Medical Fillers vs. Fat Transfer',
    excerpt: 'Looking to enhance girth safely? Compare the two most effective medical methods: Hyaluronic Acid (HA) Fillers and Autologous Fat Transfer.',
    date: 'Feb 10, 2026',
    category: 'Aesthetics',
    image: '/assets/image/blog section/Safe Penile Enlargement.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Male aesthetic enhancement is no longer a taboo subject. Modern medicine offers safe, effective, and non-surgical options for penile girth enhancement. The two gold-standard procedures are <strong>Hyaluronic Acid (HA) Fillers</strong> and <strong>Autologous Fat Transfer</strong>. Understanding the differences is key to choosing the right path for your confidence.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">1. Hyaluronic Acid (HA) Fillers</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Similar to facial fillers, medical-grade HA fillers are injected beneath the penile skin to increase circumference. This method is popular for its <strong>precision</strong> and <strong>reversibility</strong>.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Pros:</strong> No downtime, immediate results, symmetrical outcome.</li>
            <li><strong>Cons:</strong> Temporary (lasts 12-18 months), requires maintenance.</li>
            <li><strong>Best for:</strong> First-timers seeking a trial or subtle enhancement.</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Safe Penile Enlargement 2.webp" 
            alt="Medical HA Fillers" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Precise and reversible: HA Dermal Fillers</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">2. Autologous Fat Transfer</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        This procedure involves harvesting fat from your own body (abdomen or thighs), purifying it, and injecting it into the penile shaft. Since it uses your own tissue, the results feel incredibly natural.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Fat transfer offers a 'two-in-one' benefit: liposuction for specific body contouring and natural penile girth enhancement that can last for years."
      </blockquote>

      <div class="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 my-8">
        <h4 class="font-bold text-red-600 dark:text-red-500 mb-2">Disadvantages of Autologous Fat Transfer:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>Unpredictable Fat Absorption:</strong> 30-50% of transferred fat may be reabsorbed by the body, causing uneven or asymmetrical results over time.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>Risk of Lumps &amp; Nodules:</strong> Fat can clump or form fibrous nodules, creating an irregular texture that may require corrective procedures.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>Requires Surgery:</strong> The fat harvesting (liposuction) step requires anesthesia, incisions, and a longer recovery period (2-4 weeks).</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>Not Reversible:</strong> Unlike HA fillers, fat cannot be dissolved with an enzyme if complications arise.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>Potential Donor Site Complications:</strong> Bruising, swelling, or contour irregularities at the liposuction site.</li>
        </ul>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Comparison: HA Fillers vs. Fat Transfer</h3>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-sm border-collapse rounded-2xl overflow-hidden shadow-lg">
          <thead>
            <tr class="bg-slate-800 dark:bg-slate-700 text-white">
              <th class="px-4 py-3 text-left font-bold">Feature</th>
              <th class="px-4 py-3 text-center font-bold">HA Fillers</th>
              <th class="px-4 py-3 text-center font-bold">Fat Transfer</th>
            </tr>
          </thead>
          <tbody class="text-slate-700 dark:text-slate-300">
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Procedure Type</td>
              <td class="px-4 py-3 text-center">Non-surgical (injection)</td>
              <td class="px-4 py-3 text-center">Minor surgery (liposuction + injection)</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Procedure Time</td>
              <td class="px-4 py-3 text-center">30-45 minutes</td>
              <td class="px-4 py-3 text-center">1-2 hours</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Anesthesia</td>
              <td class="px-4 py-3 text-center">Local anesthesia (topical)</td>
              <td class="px-4 py-3 text-center">Local or general anesthesia</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Results Duration</td>
              <td class="px-4 py-3 text-center">12-18 months</td>
              <td class="px-4 py-3 text-center">Longer-lasting (varies by absorption rate)</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Downtime</td>
              <td class="px-4 py-3 text-center">None - resume daily activities immediately</td>
              <td class="px-4 py-3 text-center">2-4 weeks recovery</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Result Predictability</td>
              <td class="px-4 py-3 text-center">High - precise volume control</td>
              <td class="px-4 py-3 text-center">Moderate - 30-50% fat may be reabsorbed</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Symmetry</td>
              <td class="px-4 py-3 text-center">Excellent - even distribution</td>
              <td class="px-4 py-3 text-center">Risk of lumps/asymmetry</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Reversibility</td>
              <td class="px-4 py-3 text-center">Yes - dissolvable with Hyaluronidase</td>
              <td class="px-4 py-3 text-center">No - requires surgical correction</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">Natural Texture</td>
              <td class="px-4 py-3 text-center">Good - slightly firmer</td>
              <td class="px-4 py-3 text-center">Excellent - very soft and natural</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50">
              <td class="px-4 py-3 font-semibold">Best For</td>
              <td class="px-4 py-3 text-center">First-timers, subtle enhancement, low risk</td>
              <td class="px-4 py-3 text-center">Patients seeking longer-lasting results with body contouring</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Safety Warning: Avoid Paraffin &amp; Silicone</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        <strong>NEVER</strong> inject liquid silicone, paraffin, or oils. These unauthorized substances cause severe granulomas, infection, and permanent deformity requiring complex reconstructive surgery to fix. Always choose FDA/Thai FDA approved medical methods performed by a specialist urologist.
      </p>
    `,
      titleAR: "تكبير العضو الذكري بأمان: الفيلر مقابل حقن الدهون",
      excerptAR: "كل ما تحتاج معرفته عن خيارات تكبير محيط العضو.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        شهد طب المسالك البولية التجميلي تقدماً ملحوظاً، مما جعل تكبير محيط العضو الذكري إجراءً آمناً ومطلوباً بشدة. هناك طريقتان أساسيتان تهيمنان على هذا المجال: <strong>حقن الفيلر الطبي (HA Fillers)</strong> و <strong>نقل وحقن الدهون الذاتية</strong>. دعنا نقارن بينهما لمساعدتك في اتخاذ خيار مستنير.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">1. حقن الفيلر الجلدي الطبي (HA)</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            توفر حقن حمض الهيالورونيك (HA) حلاً غير جراحي وبأقل قدر من التدخل. حمض الهيالورونيك هو مادة طبيعية موجودة في جسم الإنسان، مما يضمن توافقاً حيوياً عالياً.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>الإجراء:</strong> يتم في العيادة، ويستغرق 30-45 دقيقة.</li>
            <li><strong>التخدير:</strong> كريم مخدر موضعي وتخدير موضعي.</li>
            <li><strong>النتائج:</strong> زيادة فورية في المحيط (عادة 20-30٪)، وملمس متساوٍ تماماً.</li>
            <li><strong>قابلية الانعكاس:</strong> قابل للذوبان والإزالة بنسبة 100٪ باستخدام إنزيم (هيالورونيداز).</li>
            <li><strong>الأفضل لـ:</strong> المرات الأولى للذين يسعون للتجربة أو لتحسين دقيق.</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Safe Penile Enlargement 2.webp" 
            alt="Medical HA Fillers" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">دقيق وقابل للانعكاس: فيلر الجلد HA</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">2. نقل وحقن الدهون الذاتية</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يتضمن هذا الإجراء استخراج الدهون من جسمك (البطن أو الفخذين)، وتنقيتها، ثم حقنها في جسم القضيب. نظراً لأنه يستخدم أنسجتك الخاصة، فإن النتائج تبدو طبيعية بشكل لا يصدق.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "يوفر نقل الدهون فائدة 'اثنين في واحد': شفط الدهون لنحت مناطق معينة في الجسم، وتعزيز طبيعي لمحيط القضيب يمكن أن يستمر لسنوات."
      </blockquote>

      <div class="bg-red-50 dark:bg-red-900/10 p-6 rounded-2xl border border-red-100 dark:border-red-900/20 my-8">
        <h4 class="font-bold text-red-600 dark:text-red-500 mb-2">عيوب نقل الدهون الذاتية:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>امتصاص الدهون غير المتوقع:</strong> قد يعيد الجسم امتصاص 30-50٪ من الدهون المنقولة، مما يسبب نتائج غير متساوية أو غير متماثلة بمرور الوقت.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>خطر حدوث كتل وعقد:</strong> يمكن أن تتكتل الدهون أو تشكل عقداً ليفية، مما يخلق ملمساً غير منتظم قد يتطلب إجراءات تصحيحية.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>يتطلب جراحة:</strong> خطوة حصاد الدهون (شفط الدهون) تتطلب التخدير والشقوق الجراحية، وتتطلب فترة نقاهة أطول (2-4 أسابيع).</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>غير قابل للانعكاس:</strong> على عكس الفيلر HA، لا يمكن تذويب الدهون باستخدام إنزيم في حالة حدوث مضاعفات.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-red-500 rounded-full"></span> <strong>مضاعفات محتملة في موقع المنح (الشفط):</strong> كدمات، تورم، أو عدم انتظام في الشكل في موقع شفط الدهون.</li>
        </ul>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">مقارنة: حقن الفيلر مقابل نقل الدهون</h3>
      <div class="overflow-x-auto my-8">
        <table class="w-full text-sm border-collapse rounded-2xl overflow-hidden shadow-lg">
          <thead>
            <tr class="bg-slate-800 dark:bg-slate-700 text-white">
              <th class="px-4 py-3 text-left font-bold">الخاصية</th>
              <th class="px-4 py-3 text-center font-bold">فيلر HA</th>
              <th class="px-4 py-3 text-center font-bold">نقل الدهون</th>
            </tr>
          </thead>
          <tbody class="text-slate-700 dark:text-slate-300">
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">نوع الإجراء</td>
              <td class="px-4 py-3 text-center">غير جراحي (حقن)</td>
              <td class="px-4 py-3 text-center">جراحة صغرى (شفط دهون + حقن)</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">وقت الإجراء</td>
              <td class="px-4 py-3 text-center">30-45 دقيقة</td>
              <td class="px-4 py-3 text-center">1-2 ساعة</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">التخدير</td>
              <td class="px-4 py-3 text-center">تخدير موضعي (كريم وحقن)</td>
              <td class="px-4 py-3 text-center">تخدير موضعي أو عام</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">مدة النتائج</td>
              <td class="px-4 py-3 text-center">12-18 شهراً</td>
              <td class="px-4 py-3 text-center">طويلة الأمد (تختلف حسب معدل الامتصاص)</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">فترة النقاهة</td>
              <td class="px-4 py-3 text-center">لا يوجد - استئناف الأنشطة اليومية فوراً</td>
              <td class="px-4 py-3 text-center">2-4 أسابيع للتعافي</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">توقع النتائج</td>
              <td class="px-4 py-3 text-center">عالية - تحكم دقيق في الحجم</td>
              <td class="px-4 py-3 text-center">متوسطة - قد يتم إعادة امتصاص 30-50٪ من الدهون</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">التماثل</td>
              <td class="px-4 py-3 text-center">ممتاز - توزيع متساوٍ</td>
              <td class="px-4 py-3 text-center">خطر حدوث كتل/عدم تماثل</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">قابلية الانعكاس</td>
              <td class="px-4 py-3 text-center">نعم - قابلة للذوبان بالهيالورونيداز</td>
              <td class="px-4 py-3 text-center">لا - تتطلب تدخلاً جراحياً تصحيحياً</td>
            </tr>
            <tr class="bg-white dark:bg-slate-800 border-b border-slate-100 dark:border-slate-700">
              <td class="px-4 py-3 font-semibold">الملمس الطبيعي</td>
              <td class="px-4 py-3 text-center">جيد - أكثر صلابة قليلاً</td>
              <td class="px-4 py-3 text-center">ممتاز - ناعم جداً وطبيعي</td>
            </tr>
            <tr class="bg-slate-50 dark:bg-slate-800/50">
              <td class="px-4 py-3 font-semibold">الأفضل لـ</td>
              <td class="px-4 py-3 text-center">المرات الأولى، تحسين دقيق، مخاطر منخفضة</td>
              <td class="px-4 py-3 text-center">المرضى الذين يبحثون عن نتائج طويلة الأمد مع نحت الجسم</td>
            </tr>
          </tbody>
        </table>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">تحذير أمني: تجنب البارافين والسيليكون</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        <strong>يمنع منعاً باتاً</strong> حقن السيليكون السائل أو البارافين أو الزيوت. تسبب هذه المواد غير المصرح بها أوراماً حبيبية شديدة وعدوى وتشوهاً دائماً يتطلب جراحة ترميمية معقدة لإصلاحه. اختر دائماً الطرق الطبية المعتمدة من إدارة الغذاء والدواء (FDA/Thai FDA) والتي يقوم بها أخصائي جراحة المسالك البولية.
      </p>
      `
},
  {
    id: 7,
    title: 'Semen Analysis: The Key to Male Infertility',
    excerpt: 'Preparing for fatherhood: What your sperm quality and analysis report can tell you about your health.',
    date: 'Jan 15, 2026',
    category: 'Fertility',
    image: '/assets/image/blog section/Semen Analysis.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Male factor infertility contributes to nearly 50% of couples' difficulty conceiving. A comprehensive <strong>Semen Analysis</strong> is the first and most important step in diagnosing reproductive issues and guiding treatment decisions.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What Does Semen Analysis Measure?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            The test evaluates sperm count, motility (movement), morphology (shape), and semen volume. WHO standards define normal ranges for each parameter.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Sperm count:</strong> &#62;15 million/mL</li>
            <li><strong>Motility:</strong> &#62;40% moving sperm</li>
            <li><strong>Morphology:</strong> &#62;4% normal-shaped</li>
            <li><strong>Volume:</strong> &#62;1.5 mL per ejaculation</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Semen Analysis 2.webp" 
            alt="Semen Analysis Lab" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Advanced fertility testing and analysis</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Improving Sperm Quality</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Lifestyle modifications can significantly improve sperm parameters within 2-3 months: maintain healthy weight, avoid smoking/alcohol, manage stress, and consider supplements like zinc, vitamin C, and CoQ10.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Studies show that targeted lifestyle changes and medical interventions can improve sperm count and motility by 30-50% in just 3 months."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">When to Get Tested:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Trying to conceive for 12+ months</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Planning for future fatherhood</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> After vasectomy reversal</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> History of testicular issues</li>
        </ul>
      </div>
    `,
      titleAR: "تحليل السائل المنوي: المفتاح لعقم الرجال",
      excerptAR: "أهمية جودة الحيوانات المنوية في الإنجاب.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يساهم عامل العقم عند الذكور في حوالي 50٪ من صعوبة الإنجاب لدى الأزواج. يعد <strong>تحليل السائل المنوي</strong> الشامل الخطوة الأولى والأكثر أهمية في تشخيص مشاكل الإنجاب وتوجيه قرارات العلاج.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما الذي يقيسه تحليل السائل المنوي؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يقيم الاختبار عدد الحيوانات المنوية، حركتها، شكلها (المورفولوجيا)، وحجم السائل المنوي. تحدد معايير منظمة الصحة العالمية (WHO) النطاقات الطبيعية لكل مقياس.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>عدد الحيوانات المنوية:</strong> &#62;15 مليون/مل</li>
            <li><strong>الحركة:</strong> &#62;40% حيوانات منوية متحركة</li>
            <li><strong>الشكل (المورفولوجيا):</strong> &#62;4% شكل طبيعي</li>
            <li><strong>الحجم:</strong> &#62;1.5 مل لكل قذف</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Semen Analysis 2.webp" 
            alt="Semen Analysis Lab" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">اختبارات وتحليل الخصوبة المتقدمة</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">تحسين جودة الحيوانات المنوية</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يمكن لتعديلات نمط الحياة أن تحسن بشكل كبير مقاييس الحيوانات المنوية في غضون 2-3 أشهر: الحفاظ على وزن صحي، تجنب التدخين/الكحول، إدارة التوتر، والتفكير في المكملات مثل الزنك، وفيتامين سي، والإنزيم المساعد Q10.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "تُظهر الدراسات أن التغييرات المستهدفة في نمط الحياة والتدخلات الطبية يمكن أن تحسن عدد الحيوانات المنوية وحركتها بنسبة 30-50٪ في 3 أشهر فقط."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">متى يجب إجراء الفحص:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> محاولة الإنجاب لمدة 12+ شهراً</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> التخطيط للأبوة في المستقبل</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> بعد عملية عكس قطع القناة الدافقة (Vasectomy Reversal)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> وجود تاريخ من مشاكل الخصيتين</li>
        </ul>
      </div>
      `
},
  {
    id: 8,
    title: 'Overcoming Premature Ejaculation: Medical Solutions',
    excerpt: 'Explore medical treatments and microsurgical techniques to permanently address premature ejaculation.',
    date: 'Jan 12, 2026',
    category: 'Performance',
    image: '/assets/image/blog section/Overcoming Premature Ejaculation.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Premature Ejaculation (PE) affects 20-30% of men, causing significant distress and relationship problems. Modern medicine offers both <strong>behavioral therapies</strong> and <strong>medical interventions</strong>—including innovative surgical options—to provide lasting solutions.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Understanding Premature Ejaculation</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            PE is defined as ejaculation occurring within 1-2 minutes of penetration (or less), accompanied by inability to control timing and personal distress.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Primary PE:</strong> Lifelong condition</li>
            <li><strong>Secondary PE:</strong> Acquired later in life</li>
            <li><strong>Causes:</strong> Hypersensitivity, anxiety, neurochemical imbalances</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Overcoming Premature Ejaculation 2.webp" 
            alt="Medical Treatment" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Medical solutions for lasting performance</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Treatment Options</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        <strong>Medications:</strong> SSRIs (Dapoxetine) delay ejaculation by 3-4x. <strong>Topical anesthetics:</strong> Lidocaine sprays reduce sensitivity. <strong>Surgical option:</strong> Selective dorsal neurectomy reduces hypersensitivity permanently.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Combining medication with behavioral techniques yields the best results. Over 70% of men achieve satisfactory control within 3 months of starting treatment."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Treatment Success Rates:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> SSRI medications: 70-80% success</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Behavioral therapy: 50-60% improvement</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Combined approach: 80-90% satisfaction</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Surgical option: Permanent solution for severe cases</li>
        </ul>
      </div>
    `,
      titleAR: "التغلب على سرعة القذف: الحلول الطبية",
      excerptAR: "علاجات حديثة لمشكلة سرعة القذف.",
      contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        تؤثر سرعة القذف (PE) على 20-30٪ من الرجال، مما يسبب ضائقة كبيرة ومشاكل في العلاقات. يقدم الطب الحديث <strong>العلاجات السلوكية</strong> و <strong>التدخلات الطبية</strong> — بما في ذلك الخيارات الجراحية المبتكرة — لتوفير حلول دائمة.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">فهم سرعة القذف</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            تُعرَّف سرعة القذف بأنها القذف الذي يحدث في غضون 1-2 دقيقة من الإيلاج (أو أقل)، مصحوباً بعدم القدرة على التحكم في التوقيت والضيق الشخصي.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>سرعة القذف الأولية:</strong> حالة تدوم مدى الحياة</li>
            <li><strong>سرعة القذف الثانوية:</strong> تُكتسب في وقت لاحق من الحياة</li>
            <li><strong>الأسباب:</strong> فرط الحساسية، القلق، والاختلالات الكيميائية العصبية</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img 
            src="/assets/image/blog section/Overcoming Premature Ejaculation 2.webp" 
            alt="Medical Treatment" 
            class="w-full h-full object-cover"
          />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">حلول طبية لأداء يدوم</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">خيارات العلاج</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        <strong>الأدوية:</strong> مثبطات استرداد السيروتونين (SSRIs) مثل دابوكستين تؤخر القذف بمقدار 3-4 أضعاف. <strong>المخدرات الموضعية:</strong> بخاخات ليدوكائين تقلل الحساسية. <strong>الخيار الجراحي:</strong> استئصال العصب الظهري الانتقائي يقلل فرط الحساسية بشكل دائم.
      </p>
      
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "الجمع بين الأدوية والتقنيات السلوكية يحقق أفضل النتائج. أكثر من 70٪ من الرجال يحققون تحكماً مرضياً في غضون 3 أشهر من بدء العلاج."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">معدلات نجاح العلاج:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> أدوية SSRI: نجاح بنسبة 70-80٪</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> العلاج السلوكي: تحسن بنسبة 50-60٪</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> النهج المشترك: رضا بنسبة 80-90٪</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> الخيار الجراحي: حل دائم للحالات الشديدة</li>
        </ul>
      </div>
      `
},
  {
    id: 9,
    title: 'Circumcision Near Me: How to Choose the Best Clinic?',
    excerpt: 'Finding a reliable clinic for circumcision is crucial. Compare the latest stapler technology versus traditional methods and what to look for in a professional urology clinic.',
    date: 'Jan 10, 2026',
    category: 'Surgery',
    image: '/assets/image/blog section/Circumcision Near Me.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Choosing the right clinic for circumcision is one of the most important decisions you'll make for this procedure. Whether for medical, hygiene, or aesthetic reasons, <strong>who performs it and how</strong> determines your comfort level, recovery speed, and the final aesthetic result.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Stapler vs Traditional Circumcision</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Traditional circumcision uses a scalpel and manual suturing, taking 30-45 minutes. Modern <strong>Stapler Circumcision (ZSR)</strong> completes the same procedure in just 15 minutes with superior results.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>15-minute procedure</strong> — dramatically faster than traditional</li>
            <li><strong>Minimal bleeding</strong> — instant hemostasis via stapling</li>
            <li><strong>Superior aesthetics</strong> — clean, even circumferential result</li>
            <li><strong>Less pain</strong> — reduced tissue trauma and no manual stitching</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Circumcision Near Me 2.webp" alt="Circumcision clinic" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">State-of-the-art circumcision at M-Trust Urology Clinic</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What to Look For in a Circumcision Clinic</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Not all clinics offer the same level of care. A board-certified <strong>urologist</strong> (not a general practitioner) should perform the procedure using sterile, hospital-grade equipment. The clinic should offer absolute privacy and post-operative follow-up.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Clinic Checklist:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Procedure performed by a specialist urologist</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Latest ZSR/Stapler technology available</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Hospital-grade sterilization standards</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Private, discreet environment</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Post-operative care and follow-up included</li>
        </ul>
      </div>
    `
    ,titleAR: 'الختان بالدباسة أم التقليدي: كيف تختار أفضل عيادة؟'
    ,excerptAR: 'دليلك الشامل لاختيار عيادة الختان المثالية مع أحدث تقنيات الدباسة.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يعد اختيار العيادة المناسبة لإجراء الختان من أهم القرارات التي ستتخذها بشأن هذا الإجراء. سواء كان ذلك لأسباب طبية أو صحية أو تجميلية، فإن <strong>من يقوم بالعملية وكيفية إجرائها</strong> يحدد مستوى راحتك وسرعة تعافيك والنتيجة التجميلية النهائية.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">الختان بالدباسة مقابل الختان التقليدي</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يستخدم الختان التقليدي المشرط والخياطة اليدوية، ويستغرق 30-45 دقيقة. بينما يكمل <strong>الختان الحديث بالدباسة (ZSR)</strong> نفس الإجراء في 15 دقيقة فقط بنتائج متفوقة.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>إجراء يستغرق 15 دقيقة</strong> — أسرع بكثير من الطريقة التقليدية</li>
            <li><strong>نزيف بالحد الأدنى</strong> — إرقاء (وقف نزيف) فوري بفضل التدبيس</li>
            <li><strong>نتائج تجميلية متفوقة</strong> — قطع دائري نظيف ومتساوٍ</li>
            <li><strong>ألم أقل</strong> — صدمة أقل للأنسجة وبدون خياطة يدوية</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Circumcision Near Me 2.webp" alt="Circumcision clinic" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">عيادة ختان حديثة ومتطورة في إم-تراست (M-Trust)</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما الذي يجب أن تبحث عنه في عيادة الختان</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        ليست كل العيادات تقدم نفس المستوى من الرعاية. يجب أن يقوم بالإجراء <strong>أخصائي جراحة مسالك بولية</strong> معتمد (وليس طبيباً عاماً) باستخدام معدات معقمة على مستوى المستشفيات. يجب أن توفر العيادة خصوصية تامة ومتابعة بعد العملية.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">قائمة التحقق لاختيار العيادة:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> إجراء يتم بواسطة طبيب مسالك بولية متخصص</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> توفر أحدث تقنيات ZSR/الدباسة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> معايير تعقيم بمستوى المستشفيات</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> بيئة خاصة وسرية تامة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> رعاية ومتابعة ما بعد العملية مشمولة</li>
        </ul>
      </div>
    `
  },
  {
    id: 10,
    title: 'Erectile Dysfunction: What to Do When Your "Little Brother" Won\'t Wake Up?',
    excerpt: 'Troubleshooting erectile dysfunction? From lifestyle changes to advanced Shockwave therapy, discover the medical solutions to regain your confidence.',
    date: 'Jan 08, 2026',
    category: 'Performance',
    image: '/assets/image/blog section/Erectile Dysfunction.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Erectile Dysfunction (ED) is far more common than most men dare to admit—affecting <strong>1 in 3 men over age 40</strong>. The good news: modern urology has advanced treatments that go far beyond the blue pill, targeting the root cause for lasting recovery.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Why Does ED Happen?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            ED is most often vascular in origin — meaning the blood vessels supplying the penis are damaged or restricted. Other causes include nerve damage, hormonal imbalance (Low T), and psychological factors.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li>Poor pelvic blood circulation (most common)</li>
            <li>Diabetes or hypertension damaging vessel walls</li>
            <li>Low testosterone levels</li>
            <li>Stress, anxiety, and relationship issues</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Erectile Dysfunction 2.webp" alt="ED Solutions" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Modern solutions for erectile dysfunction</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Treatment Ladder: From Simple to Advanced</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Treatment begins with lifestyle changes (exercise, diet, stopping smoking) and oral medications (PDE5 inhibitors like Sildenafil). When these fail, <strong>Li-ESWT Shockwave Therapy</strong> regenerates blood vessels naturally. For severe cases, penile implants offer a permanent solution.
      </p>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "The most important step is breaking the silence. ED is a medical condition—not a character flaw—and one of the most treatable in men's health."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Treatment Options by Severity:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Mild:</strong> Lifestyle changes + PDE5 inhibitors</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Moderate:</strong> Li-ESWT Shockwave Therapy (regenerative)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Severe:</strong> Vacuum devices, injections, or penile implant</li>
        </ul>
      </div>
    `
    ,titleAR: 'ضعف الانتصاب: ماذا تفعل حين يرفض الانتصاب؟'
    ,excerptAR: 'تشخيص أسباب ضعف الانتصاب وحلول طبية مدروسة لاستعادة ثقتك.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يعد ضعف الانتصاب (ED) أكثر شيوعاً مما يجرؤ معظم الرجال على الاعتراف به — فهو يؤثر على <strong>رجل واحد من كل 3 رجال فوق سن الأربعين</strong>. الخبر السار: يمتلك طب المسالك البولية الحديث علاجات متقدمة تتجاوز بكثير "الحبة الزرقاء"، حيث تستهدف السبب الجذري للتعافي الدائم.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">لماذا يحدث ضعف الانتصاب؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            غالباً ما يكون ضعف الانتصاب وعائي المنشأ — مما يعني أن الأوعية الدموية التي تغذي القضيب تالفة أو مقيدة. تشمل الأسباب الأخرى تلف الأعصاب، الخلل الهرموني (انخفاض التستوستيرون)، والعوامل النفسية.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li>ضعف الدورة الدموية في الحوض (الأكثر شيوعاً)</li>
            <li>السكري أو ارتفاع ضغط الدم الذي يضر بجدران الأوعية الدموية</li>
            <li>انخفاض مستويات التستوستيرون</li>
            <li>التوتر والقلق ومشاكل العلاقات</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Erectile Dysfunction 2.webp" alt="ED Solutions" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">حلول حديثة لضعف الانتصاب</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">سلم العلاج: من البسيط إلى المتقدم</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يبدأ العلاج بتغييرات في نمط الحياة (التمارين، النظام الغذائي، الإقلاع عن التدخين) والأدوية الفموية (مثبطات PDE5 مثل السيلدينافيل). عندما تفشل هذه الطرق، يقوم <strong>العلاج بالموجات الصدمية (Li-ESWT)</strong> بتجديد الأوعية الدموية بشكل طبيعي. في الحالات الشديدة، تقدم دعامات العضو الذكري حلاً دائماً.
      </p>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "الخطوة الأهم هي كسر حاجز الصمت. ضعف الانتصاب هو حالة طبية — وليس عيباً شخصياً — وهو من أكثر الحالات القابلة للعلاج في صحة الرجال."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">خيارات العلاج حسب الشدة:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>خفيف:</strong> تغييرات نمط الحياة + مثبطات PDE5</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>متوسط:</strong> العلاج بالموجات الصدمية Li-ESWT (تجديدي)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>شديد:</strong> أجهزة الشفط، الحقن، أو دعامة العضو الذكري</li>
        </ul>
      </div>
    `
  },
  {
    id: 11,
    title: 'Straining to Urinate? Understanding the Causes and Treatments for Urinary Obstruction.',
    excerpt: 'If you find yourself straining to urinate, it could be a sign of BPH or other urinary conditions. Learn about the modern, non-surgical treatments available.',
    date: 'Jan 05, 2026',
    category: 'Treatment',
    image: '/assets/image/blog section/Straining to Urinate.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Straining to urinate, a weak stream, or feeling like you can never fully empty your bladder—these are classic warning signs of <strong>urinary obstruction</strong>. In men over 50, the most common culprit is an enlarged prostate (BPH), but several other conditions can also cause blockage.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Common Causes of Urinary Obstruction</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Benign Prostatic Hyperplasia (BPH)</strong> — most common in men over 50</li>
            <li><strong>Urethral stricture</strong> — scarring narrowing the urethra</li>
            <li><strong>Bladder stones</strong> — blocking the bladder outlet</li>
            <li><strong>Prostate cancer</strong> — advanced stage involvement</li>
            <li><strong>Neurogenic bladder</strong> — nerve dysfunction affecting bladder control</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Straining to Urinate 2.webp" alt="Urinary Issues" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Modern non-surgical treatment for urinary issues</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Non-Surgical Solutions for BPH</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        For BPH-related obstruction, two minimally invasive therapies have transformed care: <strong>ReZUM Water Vapor Therapy</strong> and <strong>UroLift</strong>. Both can be performed under local anesthesia, preserve sexual function, and allow patients to return home the same day.
      </p>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Don't wait until you can't urinate at all. Early treatment of urinary obstruction prevents permanent bladder damage and kidney complications."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">When to See a Urologist Immediately:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Complete inability to urinate (urinary retention)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Blood in urine combined with difficulty urinating</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Painful urination with fever (possible infection)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Symptoms worsening over weeks</li>
        </ul>
      </div>
    `
    ,titleAR: 'صعوبة التبول: أسباب انسداد مجرى البول وعلاجاته'
    ,excerptAR: 'ما الذي يجعلك تكافح عند التبول؟ تعرف على بدائل ReZum و UroLift غير الجراحية.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        صعوبة التبول، ضعف تدفق البول، أو الشعور بعدم إفراغ المثانة بالكامل — هذه كلها علامات تحذيرية كلاسيكية لـ <strong>انسداد مجرى البول</strong>. عند الرجال فوق سن الخمسين، السبب الأكثر شيوعاً هو تضخم البروستاتا (BPH)، لكن هناك عدة حالات أخرى يمكن أن تسبب هذا الانسداد.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">الأسباب الشائعة لانسداد مجرى البول</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>تضخم البروستاتا الحميد (BPH)</strong> — الأكثر شيوعاً عند الرجال فوق 50 عاماً</li>
            <li><strong>ضيق الإحليل</strong> — ندبات تضيق مجرى البول</li>
            <li><strong>حصوات المثانة</strong> — تسد مخرج المثانة</li>
            <li><strong>سرطان البروستاتا</strong> — في مراحله المتقدمة</li>
            <li><strong>المثانة العصبية</strong> — خلل وظيفي عصبي يؤثر على التحكم في المثانة</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Straining to Urinate 2.webp" alt="Urinary Issues" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">علاج حديث غير جراحي لمشاكل المسالك البولية</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">حلول غير جراحية لتضخم البروستاتا (BPH)</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        بالنسبة للانسداد المرتبط بتضخم البروستاتا، ظهرت عمليتان طفيفتي التوغل أحدثتا ثورة في الرعاية: <strong>العلاج ببخار الماء ReZUM</strong> و <strong>UroLift</strong>. يمكن إجراء كليهما تحت التخدير الموضعي، مع الحفاظ على الوظيفة الجنسية، والسماح للمرضى بالعودة إلى المنزل في نفس اليوم.
      </p>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "لا تنتظر حتى تصبح غير قادر على التبول على الإطلاق. العلاج المبكر لانسداد مجرى البول يمنع تلف المثانة الدائم ومضاعفات الكلى."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">متى يجب مراجعة طبيب المسالك البولية فوراً:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> عدم القدرة الكاملة على التبول (احتباس البول)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> وجود دم في البول مصحوباً بصعوبة التبول</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تبول مؤلم مصحوب بحمى (احتمالية وجود عدوى)</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تفاقم الأعراض على مدار أسابيع</li>
        </ul>
      </div>
    `
  },
  {
    id: 12,
    title: 'STI Testing Near Me: Why Discretion and Technology Matter.',
    excerpt: 'Concerned about STIs? Discover why confidential DNA PCR testing is the gold standard for accuracy and how to find a private clinic near you.',
    date: 'Jan 02, 2026',
    category: 'Prevention',
    image: '/assets/image/blog section/STI Testing Near Me.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Sexually Transmitted Infections (STIs) are more prevalent than ever, yet stigma and fear of embarrassment prevent many from getting tested. Modern <strong>DNA PCR testing</strong> at dedicated private clinics offers absolute accuracy and complete discretion—often with results in 24-48 hours.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Why PCR Testing is the Gold Standard</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Traditional STI testing relies on culture methods that can take days and miss early infections. PCR (Polymerase Chain Reaction) detects the pathogen's DNA directly, offering superior sensitivity even in the earliest stages.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>99%+ accuracy</strong> — detects even minute quantities of pathogen DNA</li>
            <li><strong>Detects early infection</strong> — before antibody tests show positive</li>
            <li><strong>Multiple pathogens</strong> — one sample tests for many STIs simultaneously</li>
            <li><strong>Fast results</strong> — typically 24-48 hours</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/STI Testing Near Me 2.webp" alt="STI Testing" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Confidential DNA PCR STI testing</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Common STIs We Test For</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Our comprehensive STI panel covers chlamydia, gonorrhea, syphilis, HIV, hepatitis B & C, HPV, herpes (HSV-1 & HSV-2), and mycoplasma. All testing is performed confidentially—results are never shared without your consent.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Our Privacy Guarantee:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Separate private consultation room</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Results delivered securely via Line or encrypted email</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> No information shared without your written consent</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Discreet billing — no medical description on receipts</li>
        </ul>
      </div>
    `
    ,titleAR: 'فحص الأمراض الجنسية: لماذا يهم الكشف السري؟'
    ,excerptAR: 'فحص دقيق وديسكريت للأمراض المنقولة جنسياً بتقنية DNA PCR.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        تعتبر الأمراض المنقولة جنسياً (STIs) أكثر انتشاراً من أي وقت مضى، ومع ذلك يمنع الخوف من الإحراج ووصمة العار الكثيرين من إجراء الفحوصات. يقدم <strong>فحص الحمض النووي (DNA PCR)</strong> الحديث في العيادات الخاصة المخصصة دقة مطلقة وسرية تامة — وغالباً ما تظهر النتائج خلال 24-48 ساعة.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">لماذا يعتبر فحص PCR المعيار الذهبي؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            تعتمد فحوصات الأمراض المنقولة جنسياً التقليدية على طرق الزراعة التي قد تستغرق أياماً وتغفل العدوى المبكرة. يكتشف فحص PCR (تفاعل البوليميراز المتسلسل) الحمض النووي للممرض بشكل مباشر، مما يوفر حساسية فائقة حتى في المراحل المبكرة جداً.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>دقة تزيد عن 99%+</strong> — يكتشف حتى الكميات الدقيقة من الحمض النووي للممرض</li>
            <li><strong>يكتشف العدوى المبكرة</strong> — قبل أن تظهر اختبارات الأجسام المضادة نتائج إيجابية</li>
            <li><strong>مسببات أمراض متعددة</strong> — عينة واحدة تفحص العديد من الأمراض في نفس الوقت</li>
            <li><strong>نتائج سريعة</strong> — عادة خلال 24-48 ساعة</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/STI Testing Near Me 2.webp" alt="STI Testing" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">فحص سري للأمراض الجنسية بتقنية DNA PCR</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">الأمراض الشائعة التي نفحصها</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        تشمل لوحتنا الشاملة للأمراض المنقولة جنسياً الكلاميديا، السيلان، الزهري، فيروس نقص المناعة البشرية (HIV)، التهاب الكبد B و C، فيروس الورم الحليمي البشري (HPV)، الهربس (HSV-1 و HSV-2)، والميكوبلازما. يتم إجراء جميع الفحوصات بسرية تامة — ولا تتم مشاركة النتائج أبداً دون موافقتك.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">ضمان الخصوصية لدينا:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> غرفة استشارة خاصة ومنفصلة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> يتم تسليم النتائج بشكل آمن عبر لاين (Line) أو البريد الإلكتروني المشفر</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> لا يتم مشاركة أي معلومات دون موافقتك الخطية</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> فواتير سرية — لا يوجد وصف طبي على الإيصالات</li>
        </ul>
      </div>
    `
  },
  {
    id: 13,
    title: 'Frequent Urination, Discomfort, or Waking Up at Night? Uncovering the Causes.',
    excerpt: 'Experiencing incomplete emptying or frequent nighttime trips to the bathroom? Discover the underlying causes like enlarged prostate (BPH) and how modern treatments can help.',
    date: 'Dec 28, 2025',
    category: 'Wellness',
    image: '/assets/image/blog section/Frequent Urination.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Waking up 2, 3, or 4 times every night to urinate—a condition called <strong>nocturia</strong>—is not a normal part of aging. Nor is the constant urge to go during the day, sensations of incomplete emptying, or pelvic discomfort. These are measurable medical symptoms with treatable causes.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What's Behind Frequent Urination?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">These symptoms often overlap and can stem from multiple causes:</p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Enlarged Prostate (BPH)</strong> — squeezes the urethra, forcing frequent voids</li>
            <li><strong>Overactive Bladder (OAB)</strong> — bladder muscle contracts when it shouldn't</li>
            <li><strong>Prostatitis</strong> — prostate inflammation causing urgency and discomfort</li>
            <li><strong>UTI</strong> — burning and urgency, especially with fever</li>
            <li><strong>Diabetes</strong> — high blood sugar increases urine output</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Frequent Urination 2.webp" alt="Frequent Urination" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Identify and treat the root cause</p>
          </div>
        </div>
      </div>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "One simple uroflow test and ultrasound can pinpoint the cause in most cases. There's no need to suffer in silence—effective treatment is available."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Diagnostic Steps at Our Clinic:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Uroflowmetry — measures urine flow rate</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Post-void residual ultrasound — checks bladder emptying</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> PSA blood test — screens for prostate issues</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Urinalysis — rules out infection or blood</li>
        </ul>
      </div>
    `
    ,titleAR: 'كثرة التبول والاستيقاظ: كشف الأسباب والحلول'
    ,excerptAR: 'التبول المتكرر ليلاً ليس طبيعياً.. تعرف على الأسباب وعلاجات تضخم البروستاتا.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        الاستيقاظ مرتين أو 3 أو 4 مرات كل ليلة للتبول — وهي حالة تسمى <strong>التبول الليلي (Nocturia)</strong> — ليس جزءاً طبيعياً من الشيخوخة. كما أن الرغبة المستمرة في التبول أثناء النهار، أو الشعور بعدم الإفراغ الكامل، أو الشعور بعدم الراحة في الحوض ليست كذلك. هذه أعراض طبية قابلة للقياس ولها أسباب يمكن علاجها.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما الذي يكمن وراء كثرة التبول؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">تتداخل هذه الأعراض غالباً ويمكن أن تنبع من أسباب متعددة:</p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>تضخم البروستاتا (BPH)</strong> — يضغط على مجرى البول، مما يضطرك للتبول المتكرر</li>
            <li><strong>فرط نشاط المثانة (OAB)</strong> — تنقبض عضلة المثانة عندما لا ينبغي لها ذلك</li>
            <li><strong>التهاب البروستاتا</strong> — يسبب إلحاحاً وعدم راحة</li>
            <li><strong>التهاب المسالك البولية (UTI)</strong> — حرقة وإلحاح، خاصة مع الحمى</li>
            <li><strong>السكري</strong> — ارتفاع نسبة السكر في الدم يزيد من كمية البول</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Frequent Urination 2.webp" alt="Frequent Urination" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">تحديد وعلاج السبب الجذري</p>
          </div>
        </div>
      </div>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "اختبار تدفق البول البسيط والموجات فوق الصوتية يمكن أن يحددا السبب في معظم الحالات. لا داعي للمعاناة بصمت — العلاج الفعال متاح."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">خطوات التشخيص في عيادتنا:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> قياس تدفق البول (Uroflowmetry) — يقيس معدل تدفق البول</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> موجات فوق صوتية لبول ما بعد الإفراغ — للتحقق من إفراغ المثانة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> فحص دم PSA — فحص لمشاكل البروستاتا</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تحليل البول — يستبعد العدوى أو الدم</li>
        </ul>
      </div>
    `
  },
  {
    id: 14,
    title: '"My Little Brother Used to be Bigger." Understanding Penile Shrinkage.',
    excerpt: 'Have you noticed a loss of girth or length? Learn about the physiological reasons behind penile shrinkage and how advanced medical treatments can reverse it.',
    date: 'Dec 25, 2025',
    category: 'Wellness',
    image: '/assets/image/blog section/My Little Brother.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        A noticeable reduction in penile size is more common than discussed. Whether due to aging, vascular changes, or hormonal shifts, <strong>penile shrinkage is a real, physiological phenomenon</strong>—and in many cases, it is reversible with the right medical approach.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Why Does It Happen?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Penile tissue contains smooth muscle that requires regular oxygenation through erections. When erections decline (due to ED or hormonal issues), that tissue gradually fibroses (scars), reducing size.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Reduced erection frequency</strong> — leads to tissue fibrosis</li>
            <li><strong>Low testosterone</strong> — reduces smooth muscle volume</li>
            <li><strong>Peyronie's disease</strong> — scar tissue causes curvature and shortening</li>
            <li><strong>Significant weight gain</strong> — suprapubic fat pad buries the shaft</li>
            <li><strong>Post-surgery changes</strong> — prostate surgery can affect length</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/My Little Brother 2.webp" alt="Penile Shrinkage" class="w-full h-full object-cover" />
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Reversal & Enhancement Options</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Treating the underlying cause (TRT for Low T, Shockwave for ED, weight loss) often partially restores size. For aesthetic enhancement of girth, <strong>Hyaluronic Acid (HA) fillers</strong> or <strong>Autologous Fat Transfer</strong> offer medically safe, immediate results.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Treatment Roadmap:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Treat ED with Shockwave → restores regular erections → prevents further shrinkage</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> TRT if Low T confirmed → rebuilds smooth muscle mass</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> HA Filler injection → immediate girth increase (same day)</li>
        </ul>
      </div>
    `
    ,titleAR: 'تقلص حجم القضيب: الأسباب وخيارات العلاج'
    ,excerptAR: 'لاحظت تراجعاً في الحجم؟ تعرف على الأسباب الفسيولوجية وحلول طبية فعالة.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        الانخفاض الملحوظ في حجم العضو الذكري أكثر شيوعاً مما يتم مناقشته. سواء كان ذلك بسبب التقدم في العمر، التغيرات الوعائية، أو التحولات الهرمونية، فإن <strong>تقلص القضيب هو ظاهرة فسيولوجية حقيقية</strong> — وفي كثير من الحالات، يمكن عكسها باستخدام النهج الطبي الصحيح.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">لماذا يحدث ذلك؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يحتوي نسيج القضيب على عضلات ملساء تتطلب أكسجة منتظمة من خلال الانتصاب. عندما ينخفض معدل الانتصاب (بسبب ضعف الانتصاب أو مشاكل هرمونية)، تتليف تلك الأنسجة تدريجياً (تتشكل ندبات)، مما يقلل الحجم.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>انخفاض وتيرة الانتصاب</strong> — يؤدي إلى تليف الأنسجة</li>
            <li><strong>انخفاض التستوستيرون</strong> — يقلل حجم العضلات الملساء</li>
            <li><strong>مرض بيروني</strong> — النسيج الندبي يسبب انحناءً وتقصيراً</li>
            <li><strong>زيادة الوزن بشكل كبير</strong> — الدهون فوق العانة تدفن القاعدة</li>
            <li><strong>تغيرات ما بعد الجراحة</strong> — جراحة البروستاتا قد تؤثر على الطول</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/My Little Brother 2.webp" alt="Penile Shrinkage" class="w-full h-full object-cover" />
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">خيارات العكس والتعزيز</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        غالبًا ما يستعيد علاج السبب الجذري (TRT لنقص التستوستيرون، الموجات الصدمية لضعف الانتصاب، فقدان الوزن) الحجم جزئياً. للتحسين التجميلي للمحيط، توفر <strong>حقن حمض الهيالورونيك (HA)</strong> أو <strong>نقل الدهون الذاتية</strong> نتائج طبية آمنة وفورية.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">خارطة طريق العلاج:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> علاج ضعف الانتصاب بالموجات الصدمية ← يعيد الانتصاب المنتظم ← يمنع المزيد من الانكماش</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> العلاج بالتستوستيرون (TRT) إذا تأكد انخفاضه ← يعيد بناء كتلة العضلات الملساء</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> حقن الفيلر HA ← زيادة فورية في المحيط (نفس اليوم)</li>
        </ul>
      </div>
    `
  },
  {
    id: 15,
    title: 'Why You Must Remove Injected Foreign Substances: The Hidden Dangers of Paraffinoma.',
    excerpt: 'Injected olive oil, paraffin, or silicone into your penis? Understand why delayed removal can lead to severe complications and how reconstructive surgery saves functionality.',
    date: 'Dec 22, 2025',
    category: 'Surgery',
    image: '/assets/image/blog section/Why You Must Remove.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Injecting foreign substances—paraffin, olive oil, silicone, or petroleum gel—into the penis in an attempt to enhance size is a dangerous practice that leads to <strong>Paraffinoma</strong>: a severe, progressive granulomatous reaction. Early removal is critical to preserving function.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">What is Paraffinoma?</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            When non-medical substances are injected under the penile skin, the body's immune system attacks them continuously, creating a chronic inflammatory reaction. Over time, this leads to dense scar tissue formation and tissue death.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Disfigurement</strong> — hardened, irregular lumps under the skin</li>
            <li><strong>Chronic pain</strong> — ongoing inflammation and nerve irritation</li>
            <li><strong>Erectile dysfunction</strong> — vascular damage from granulomas</li>
            <li><strong>Skin necrosis</strong> — tissue death and ulceration in severe cases</li>
            <li><strong>Infection risk</strong> — abscesses forming around foreign material</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Why You Must Remove 2.webp" alt="Foreign Body Removal" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Expert reconstructive surgery restores form and function</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">The Reconstruction Process</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Surgical removal involves complete excision of the affected skin and foreign material, followed by reconstruction using skin grafts (from the scrotum, thigh, or abdomen). Early surgery before extensive scarring gives the best functional and cosmetic outcomes.
      </p>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "Every month of delay makes the surgery more complex. If you have had foreign substances injected, seek a specialist urologist immediately—do not wait for symptoms to worsen."
      </blockquote>
    `
    ,titleAR: 'إزالة المواد الغريبة المحقونة: مخاطر وعواقب البارافينوما'
    ,excerptAR: 'لماذا التأخير يجعل العملية أكثر تعقيداً؟ ابحث عن الخيارات الجراحية الترميمية.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        حقن مواد غريبة — مثل البارافين، زيت الزيتون، السيليكون، أو الفازلين — في العضو الذكري في محاولة لزيادة حجمه هو ممارسة خطيرة تؤدي إلى <strong>ورم البارافين (Paraffinoma)</strong>: وهو تفاعل التهابي حبيبي شديد ومتفاقم. الإزالة المبكرة ضرورية جداً للحفاظ على الوظيفة.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ما هو ورم البارافين؟</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            عندما يتم حقن مواد غير طبية تحت جلد القضيب، يهاجمها جهاز المناعة في الجسم باستمرار، مما يخلق تفاعلاً التهابياً مزمناً. بمرور الوقت، يؤدي هذا إلى تكوين نسيج ندبي كثيف وموت الأنسجة.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>تشوه</strong> — كتل صلبة وغير منتظمة تحت الجلد</li>
            <li><strong>ألم مزمن</strong> — التهاب مستمر وتهيج للأعصاب</li>
            <li><strong>ضعف الانتصاب</strong> — تلف الأوعية الدموية بسبب الأورام الحبيبية</li>
            <li><strong>نخر الجلد</strong> — موت الأنسجة وتقرحها في الحالات الشديدة</li>
            <li><strong>خطر العدوى</strong> — تكون خراجات حول المادة الغريبة</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Why You Must Remove 2.webp" alt="Foreign Body Removal" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">الجراحة الترميمية المتخصصة تعيد الشكل والوظيفة</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">عملية الترميم</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        تتضمن الإزالة الجراحية الاستئصال الكامل للجلد المصاب والمادة الغريبة، تليها عملية ترميم باستخدام ترقيع الجلد (من كيس الصفن، الفخذ، أو البطن). الجراحة المبكرة قبل التندب الواسع تعطي أفضل النتائج الوظيفية والتجميلية.
      </p>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "كل شهر تأخير يجعل الجراحة أكثر تعقيداً. إذا قمت بحقن مواد غريبة، اطلب استشارة أخصائي جراحة المسالك البولية فوراً — لا تنتظر حتى تتفاقم الأعراض."
      </blockquote>
    `
  },
  {
    id: 16,
    title: 'Struggling with Premature Ejaculation? Modern Solutions That Actually Work.',
    excerpt: 'Is premature ejaculation affecting your relationship? Discover the difference between psychological and physical causes, and explore the advanced treatments available.',
    date: 'Dec 19, 2025',
    category: 'Performance',
    image: '/assets/image/blog section/Struggling with Premature.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Premature Ejaculation (PE) is the most common male sexual dysfunction, yet it remains one of the least discussed. With today's advanced medical options—from targeted medications to microsurgery—there is a solution for every type and severity of PE.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Psychological vs. Physical PE</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Correctly identifying your PE type is essential for effective treatment. Most men have a combination of both factors.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Psychological:</strong> Anxiety, performance pressure, relationship stress</li>
            <li><strong>Neurobiological:</strong> Hypersensitivity of penile nerve endings</li>
            <li><strong>Hormonal:</strong> Low serotonin or thyroid dysfunction</li>
            <li><strong>Combined:</strong> The most common presentation</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Struggling with Premature 2.webp" alt="PE Treatment" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Tailored treatment for lasting performance improvement</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Modern Treatments That Work</h3>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Treatment Options & Success Rates:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Dapoxetine (SSRI):</strong> Delays ejaculation 3-4x — 75% success</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Topical Anesthetics:</strong> Lidocaine spray — reduces sensitivity 40-60%</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Behavioral Therapy:</strong> Stop-start & squeeze techniques</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Dorsal Neurectomy:</strong> Surgical option for hypersensitivity — permanent solution</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Combined approach:</strong> 85-90% long-term satisfaction</li>
        </ul>
      </div>
    `
    ,titleAR: 'سرعة القذف: حلول حديثة فعالة بالفعل'
    ,excerptAR: 'اكتشف الفرق بين الأسباب النفسية والجسدية وأحدث الحلول المتاحة.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        تعتبر سرعة القذف (PE) الخلل الجنسي الأكثر شيوعاً بين الرجال، ومع ذلك تظل واحدة من أقل المشاكل التي تتم مناقشتها. مع الخيارات الطبية المتقدمة اليوم — من الأدوية الموجهة إلى الجراحة المجهرية — هناك حل لكل نوع ودرجة من سرعة القذف.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">سرعة القذف النفسية مقابل الجسدية</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            تحديد نوع سرعة القذف لديك بشكل صحيح هو أمر ضروري للعلاج الفعال. يعاني معظم الرجال من مزيج من كلا العاملين.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>نفسية:</strong> القلق، ضغط الأداء، ضغوط العلاقة</li>
            <li><strong>عصبية بيولوجية:</strong> فرط حساسية النهايات العصبية في القضيب</li>
            <li><strong>هرمونية:</strong> انخفاض السيروتونين أو خلل في الغدة الدرقية</li>
            <li><strong>مختلطة:</strong> وهو العرض الأكثر شيوعاً</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Struggling with Premature 2.webp" alt="PE Treatment" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">علاج مخصص لتحسين الأداء بشكل دائم</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">العلاجات الحديثة الفعالة</h3>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">خيارات العلاج ومعدلات النجاح:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>دابوكستين (SSRI):</strong> يؤخر القذف بمقدار 3-4 أضعاف — نسبة نجاح 75%</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>المخدرات الموضعية:</strong> بخاخ ليدوكائين — يقلل الحساسية بنسبة 40-60%</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>العلاج السلوكي:</strong> تقنيات التوقف والبدء والضغط</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>استئصال العصب الظهري:</strong> خيار جراحي لفرط الحساسية — حل دائم</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>النهج المشترك:</strong> رضا طويل الأمد بنسبة 85-90%</li>
        </ul>
      </div>
    `
  },
  {
    id: 17,
    title: 'Urology Clinic Near Me: What to Look For in a Top-Tier Specialist Clinic.',
    excerpt: 'Searching for a urology clinic? Discover the key factors that distinguish a premier men\'s health center, from advanced technology to Absolute privacy and expert care.',
    date: 'Dec 16, 2025',
    category: 'Wellness',
    image: '/assets/image/blog section/Urology Clinic Near Me.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Selecting the right urology clinic is a decision that directly impacts your health outcomes, comfort, and privacy. Not all clinics offer the same level of expertise, technology, or discretion. Here's what separates a premier men's health center from a generic clinic.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">The 5 Pillars of a Top Urology Clinic</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <ul class="list-disc pl-6 space-y-3 text-slate-600 dark:text-slate-300">
            <li><strong>Board-Certified Urologist</strong> — not a GP or general surgeon</li>
            <li><strong>Advanced Technology</strong> — Li-ESWT, UroLift, ReZUM, HoLEP laser on-site</li>
            <li><strong>Complete Privacy</strong> — private rooms, discreet entrance, encrypted records</li>
            <li><strong>Comprehensive Services</strong> — from diagnosis to treatment in one location</li>
            <li><strong>Post-Treatment Follow-Up</strong> — structured monitoring for best outcomes</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Urology Clinic Near Me 2.webp" alt="Urology Clinic" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Premium men's health care at M-Trust Urology Clinic</p>
          </div>
        </div>
      </div>
      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "The quality of your urologist's experience matters more than proximity. A 30-minute drive to an expert is worth far more than walking distance to an inexperienced provider."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Before You Book:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Check the doctor's specific credentials and specializations</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Verify they use modern, minimally invasive techniques</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Ensure they have an on-site lab for fast, private results</li>
        </ul>
      </div>
    `
    ,titleAR: 'أفضل عيادة مسالك بولية: كيف تختار؟'
    ,excerptAR: 'أهم 5 معايير للبحث عن مركز متخصص لصحة الرجال يضمن لك الخصوصية والتكنولوجيا.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        يعد اختيار عيادة المسالك البولية المناسبة قراراً يؤثر بشكل مباشر على نتائجك الصحية وراحتك وخصوصيتك. لا تقدم جميع العيادات نفس المستوى من الخبرة، التكنولوجيا، أو السرية. إليك ما يميز المركز الطبي الرائد لصحة الرجال عن العيادات العامة.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">الركائز الخمس لأفضل عيادة مسالك بولية</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <ul class="list-disc pl-6 space-y-3 text-slate-600 dark:text-slate-300">
            <li><strong>طبيب مسالك بولية معتمد</strong> — ليس طبيباً عاماً أو جراحاً عاماً</li>
            <li><strong>تكنولوجيا متقدمة</strong> — توفر تقنيات Li-ESWT، UroLift، ReZUM، وليزر HoLEP في العيادة</li>
            <li><strong>خصوصية تامة</strong> — غرف خاصة، مدخل سري، وسجلات مشفرة</li>
            <li><strong>خدمات شاملة</strong> — من التشخيص إلى العلاج في مكان واحد</li>
            <li><strong>متابعة ما بعد العلاج</strong> — مراقبة منظمة للحصول على أفضل النتائج</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Urology Clinic Near Me 2.webp" alt="Urology Clinic" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">رعاية صحية متميزة للرجال في عيادة M-Trust</p>
          </div>
        </div>
      </div>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "جودة خبرة طبيبك أهم بكثير من قربه الجغرافي. القيادة لمدة 30 دقيقة إلى خبير تستحق أكثر بكثير من المشي مسافة قريبة إلى مزود خدمة يفتقر إلى الخبرة."
      </blockquote>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">قبل الحجز تأكد من:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> التحقق من أوراق الطبيب وتخصصه الدقيق</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> التأكد من استخدامهم لتقنيات حديثة طفيفة التوغل</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> ضمان وجود مختبر في نفس الموقع لنتائج سريعة وسرية</li>
        </ul>
      </div>
    `
  },
  {
    id: 18,
    title: 'Trouble Maintaining an Erection? Losing Firmness Midway Explained.',
    excerpt: 'Experiencing a loss of erection during intimacy? Learn about the physiological and psychological factors that cause you to lose firmness midway, and how to fix it.',
    date: 'Dec 13, 2025',
    category: 'Performance',
    image: '/assets/image/blog section/Trouble Maintaining.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        Achieving an erection is one challenge—maintaining it throughout intercourse is another. <strong>Losing firmness midway</strong> is a specific form of ED called "erectile maintenance disorder" and is extremely common. The cause is usually a combination of vascular and psychological factors.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Why Erections Fade Midway</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Maintaining an erection requires a continuous inflow of blood while the outflow veins are compressed. If either fails, firmness is lost:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>Venous leak</strong> — blood exits the penis too quickly (most common cause)</li>
            <li><strong>Performance anxiety</strong> — adrenaline constricts blood vessels</li>
            <li><strong>Insufficient arousal</strong> — distraction or reduced stimulation</li>
            <li><strong>PDE5 inhibitor wearing off</strong> — medication timing issue</li>
            <li><strong>Low testosterone</strong> — reduces sexual drive mid-act</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Trouble Maintaining 2.webp" alt="Maintain Erection" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">Advanced assessment and treatment for erectile maintenance</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Solutions for Venous Leak ED</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Venous leak is diagnosed via dynamic penile Doppler ultrasound. Treatment with <strong>Li-ESWT Shockwave Therapy</strong> strengthens vascular tone and reduces venous leakage over a 6-12 session course. Penile injections (alprostadil) provide immediate relief for severe cases.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Treatment by Cause:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Venous leak → Shockwave therapy + PDE5 medication</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Performance anxiety → Counseling + low-dose daily PDE5i</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Low T → TRT restores baseline arousal</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Severe vascular ED → Penile implant (permanent solution)</li>
        </ul>
      </div>
    `
    ,titleAR: 'فقدان الانتصاب في منتصف الطريق: الأسباب والحلول'
    ,excerptAR: 'فهم لماذا يختفي الانتصاب فجأة وكيفية علاج تسرب الوريد.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        تحقيق الانتصاب هو تحدٍ واحد — الحفاظ عليه طوال فترة الجماع هو تحدٍ آخر. <strong>فقدان الصلابة في منتصف الطريق</strong> هو شكل محدد من ضعف الانتصاب يسمى "اضطراب الحفاظ على الانتصاب" وهو شائع للغاية. السبب عادة هو مزيج من العوامل الوعائية والنفسية.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">لماذا يتلاشى الانتصاب في منتصف الطريق</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يتطلب الحفاظ على الانتصاب تدفقاً مستمراً للدم بينما يتم ضغط أوردة التدفق الخارج. إذا فشل أي منهما، تُفقد الصلابة:
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>تسرب وريدي</strong> — يخرج الدم من القضيب بسرعة كبيرة (السبب الأكثر شيوعاً)</li>
            <li><strong>قلق الأداء</strong> — الأدرينالين يقيد الأوعية الدموية</li>
            <li><strong>إثارة غير كافية</strong> — تشتيت الانتباه أو انخفاض التحفيز</li>
            <li><strong>تلاشي تأثير مثبطات PDE5</strong> — مشكلة في توقيت الدواء</li>
            <li><strong>انخفاض التستوستيرون</strong> — يقلل الدافع الجنسي في منتصف العملية</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Trouble Maintaining 2.webp" alt="Maintain Erection" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">تقييم وعلاج متقدم للحفاظ على الانتصاب</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">حلول ضعف الانتصاب بسبب التسرب الوريدي</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        يتم تشخيص التسرب الوريدي عبر دوبلر القضيب الديناميكي. العلاج باستخدام <strong>الموجات الصدمية (Li-ESWT)</strong> يقوي التوتر الوعائي ويقلل التسرب الوريدي خلال 6-12 جلسة. توفر حقن القضيب (ألبروستاديل) راحة فورية للحالات الشديدة.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">العلاج حسب السبب:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تسرب وريدي ← العلاج بالموجات الصدمية + دواء PDE5</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> قلق الأداء ← استشارة + جرعة يومية منخفضة من PDE5i</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> انخفاض T ← العلاج بـ TRT يعيد مستوى الإثارة الأساسي</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> ضعف انتساب وعائي شديد ← زراعة دعامة (حل دائم)</li>
        </ul>
      </div>
    `
  },
  {
    id: 19,
    title: 'Where to Get a Vasectomy: Choosing the Right Clinic for a No-Scalpel Procedure.',
    excerpt: 'Decided on permanent birth control? Find out why the No-Scalpel Vasectomy is the gold standard and how to select the best urology center for a painless experience.',
    date: 'Dec 10, 2025',
    category: 'Surgery',
    image: '/assets/image/blog section/Where to Get a Vasectomy.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        A vasectomy is the most effective form of permanent birth control for men—with a <strong>99.9% success rate</strong>. Modern <strong>No-Scalpel Vasectomy (NSV)</strong> has transformed this procedure: no stitches, minimal discomfort, and most men return to light activity within 48 hours.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Why No-Scalpel is the Gold Standard</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            Traditional vasectomy requires two small skin incisions, manual suturing, and longer recovery. NSV uses a specialized sharp clamp to create a tiny puncture—no cutting, no stitches, dramatically less bruising.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>No scalpel, no stitches</strong> — tiny puncture seals itself</li>
            <li><strong>20-30 minute procedure</strong> — done under local anesthesia</li>
            <li><strong>Return to work in 1-2 days</strong> — light activity only</li>
            <li><strong>Lower complication rate</strong> — reduced bleeding and infection risk vs. traditional</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Where to Get a Vasectomy 2.webp" alt="Vasectomy Clinic" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">No-Scalpel Vasectomy at M-Trust Urology Clinic</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Choosing the Right Vasectomy Clinic</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        Ensure the procedure is performed by a <strong>board-certified urologist</strong> with substantial NSV experience. The clinic should offer a comprehensive pre-procedure consultation, clear post-op instructions, and a semen analysis at 8-12 weeks to confirm sterility.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">What a Quality Vasectomy Includes:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Pre-procedure counseling and Q&A session</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> No-Scalpel technique by experienced urologist</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Post-op care kit and instructions</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Semen analysis at 8-12 weeks to confirm success</li>
        </ul>
      </div>
    `
    ,titleAR: 'أين تجري عملية الفصل: اختيار عيادة الفصل بدون مشرط'
    ,excerptAR: 'لماذا الفصل بدون مشرط هو المعيار الذهبي؟ وكيف تختار أفضل مركز بولوجي.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        استئصال الأسهر (الربط) هو أكثر أشكال منع الحمل الدائم فعالية للرجال — بنسبة نجاح <strong>99.9%</strong>. حول <strong>استئصال الأسهر بدون مشرط (NSV)</strong> الحديث هذا الإجراء: لا غرز، انزعاج ضئيل، ويعود معظم الرجال إلى النشاط الخفيف في غضون 48 ساعة.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">لماذا الإجراء بدون مشرط هو المعيار الذهبي</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يتطلب استئصال الأسهر التقليدي شقين صغيرين في الجلد، خياطة يدوية، وفترة تعافي أطول. يستخدم NSV مشبكاً حاداً متخصصاً لإحداث ثقب صغير — بدون قطع، بدون غرز، وكدمات أقل بكثير.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>بدون مشرط، بدون غرز</strong> — الثقب الصغير يغلق نفسه</li>
            <li><strong>إجراء يستغرق 20-30 دقيقة</strong> — يتم تحت التخدير الموضعي</li>
            <li><strong>العودة للعمل في 1-2 يوم</strong> — نشاط خفيف فقط</li>
            <li><strong>معدل مضاعفات أقل</strong> — تقليل خطر النزيف والعدوى مقارنة بالطريقة التقليدية</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Where to Get a Vasectomy 2.webp" alt="Vasectomy Clinic" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">استئصال الأسهر بدون مشرط في عيادة M-Trust للذكورة</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">اختيار عيادة الفصل المناسبة</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        تأكد من أن الإجراء يتم بواسطة <strong>طبيب مسالك بولية معتمد</strong> ذو خبرة كبيرة في NSV. يجب أن تقدم العيادة استشارة شاملة قبل الإجراء، تعليمات واضحة لما بعد الجراحة، وتحليل للسائل المنوي في 8-12 أسبوعاً لتأكيد العقم.
      </p>

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">ما تتضمنه عملية الفصل عالية الجودة:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> جلسة استشارة وأسئلة وأجوبة قبل الإجراء</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تقنية بدون مشرط بواسطة أخصائي مسالك بولية متمرس</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> مجموعة العناية وتعليمات ما بعد الجراحة</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> تحليل السائل المنوي في 8-12 أسبوعاً لتأكيد النجاح</li>
        </ul>
      </div>
    `
  },
  {
    id: 20,
    title: 'Why Treating Enlarged Prostate (BPH) with ReZUM is the Superior Choice.',
    excerpt: 'Comparing BPH treatments? Learn why ReZUM Water Vapor Therapy is quickly becoming the preferred alternative to daily medication and invasive surgery.',
    date: 'Dec 07, 2025',
    category: 'Treatment',
    image: '/assets/image/blog section/Why Treating Enlarged Prostate.webp',
    content: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        For decades, men with Benign Prostatic Hyperplasia (BPH) faced a frustrating choice: take daily medications with side effects, or undergo major surgery (TURP) with risks of incontinence and sexual dysfunction. <strong>ReZUM Water Vapor Therapy</strong> changes everything.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">How ReZUM Works</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            ReZUM delivers precisely targeted water vapor (steam) into the obstructing prostate tissue. The thermal energy stored in the steam destroys the excess cells on contact. The body then naturally absorbs the treated tissue over 4-6 weeks, opening the urinary channel.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>10-minute procedure</strong> — performed under local anesthesia</li>
            <li><strong>No surgery, no incisions</strong> — minimally invasive</li>
            <li><strong>Preserves sexual function</strong> — no risk of retrograde ejaculation</li>
            <li><strong>Durable results</strong> — sustained improvement for 5+ years</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Why Treating Enlarged Prostate 2.webp" alt="ReZUM BPH Treatment" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">ReZUM: Water vapor therapy for prostate relief</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ReZUM vs. Medication vs. TURP Surgery</h3>

      <div class="overflow-x-auto my-8 rounded-2xl border border-slate-200 dark:border-white/10">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-100 dark:bg-white/5">
              <th class="p-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10">Factor</th>
              <th class="p-4 font-bold text-amber-600 border-b border-slate-200 dark:border-white/10">ReZUM</th>
              <th class="p-4 font-bold text-slate-500 border-b border-slate-200 dark:border-white/10">Daily Medication</th>
              <th class="p-4 font-bold text-slate-500 border-b border-slate-200 dark:border-white/10">TURP Surgery</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-white/5">
            <tr>
              <td class="p-4 font-medium text-slate-700 dark:text-slate-300">Sexual Function</td>
              <td class="p-4 text-green-600 dark:text-green-400 font-bold">Fully preserved</td>
              <td class="p-4 text-orange-500">Side effects common</td>
              <td class="p-4 text-red-500">High risk of retrograde ejaculation</td>
            </tr>
            <tr>
              <td class="p-4 font-medium text-slate-700 dark:text-slate-300">Duration</td>
              <td class="p-4 text-green-600 dark:text-green-400 font-bold">5+ years</td>
              <td class="p-4 text-orange-500">Only while taking</td>
              <td class="p-4 text-green-600 dark:text-green-400">Permanent</td>
            </tr>
            <tr>
              <td class="p-4 font-medium text-slate-700 dark:text-slate-300">Recovery</td>
              <td class="p-4 text-green-600 dark:text-green-400 font-bold">Same day</td>
              <td class="p-4 text-green-600 dark:text-green-400">Immediate</td>
              <td class="p-4 text-red-500">3-5 days hospital stay</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "ReZUM is now our first-line recommendation for men who want to stop daily medication without accepting the risks of traditional surgery."
      </blockquote>
    `
    ,titleAR: 'لماذا ReZum هو الخيار الأمثل لعلاج تضخم البروستاتا؟'
    ,excerptAR: 'مقارنة شاملة بين علاج بخار الماء ReZum والدواء اليومي والجراحة.'
    ,contentAR: `
      <p class="mb-6 text-lg leading-relaxed text-slate-600 dark:text-slate-300">
        لعقود من الزمن، واجه الرجال المصابون بتضخم البروستاتا الحميد (BPH) خياراً محبطاً: تناول الأدوية اليومية ذات الآثار الجانبية، أو الخضوع لجراحة كبرى (TURP) مع مخاطر سلس البول والضعف الجنسي. <strong>علاج بخار الماء ReZUM</strong> يغير كل شيء.
      </p>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">كيف يعمل ReZUM</h3>
      
      <div class="grid md:grid-cols-2 gap-8 mb-6 items-start">
        <div>
          <p class="mb-4 leading-relaxed text-slate-600 dark:text-slate-300">
            يقدم ReZUM بخار ماء (بخار) مستهدف بدقة إلى أنسجة البروستاتا المعيقة. تدمر الطاقة الحرارية المخزنة في البخار الخلايا الزائدة عند التلامس. ثم يمتص الجسم بشكل طبيعي الأنسجة المعالجة خلال 4-6 أسابيع، مما يفتح القناة البولية.
          </p>
          <ul class="list-disc pl-6 space-y-2 text-slate-600 dark:text-slate-300">
            <li><strong>إجراء يستغرق 10 دقائق</strong> — يتم تحت التخدير الموضعي</li>
            <li><strong>لا جراحة، لا شقوق</strong> — طفيف التوغل</li>
            <li><strong>يحافظ على الوظيفة الجنسية</strong> — لا يوجد خطر القذف المرتجع</li>
            <li><strong>نتائج دائمة</strong> — تحسن مستمر لأكثر من 5 سنوات</li>
          </ul>
        </div>
        <div class="relative rounded-2xl overflow-hidden shadow-xl">
          <img src="/assets/image/blog section/Why Treating Enlarged Prostate 2.webp" alt="ReZUM BPH Treatment" class="w-full h-full object-cover" />
          <div class="absolute bottom-0 left-0 right-0 bg-linear-to-t from-slate-900/80 to-transparent p-4">
            <p class="text-white text-xs font-bold">ReZUM: علاج ببخار الماء لراحة البروستاتا</p>
          </div>
        </div>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">ReZUM مقابل الدواء مقابل جراحة TURP</h3>

      <div class="overflow-x-auto my-8 rounded-2xl border border-slate-200 dark:border-white/10">
        <table class="w-full text-left border-collapse text-sm">
          <thead>
            <tr class="bg-slate-100 dark:bg-white/5">
              <th class="p-4 font-bold text-slate-900 dark:text-white border-b border-slate-200 dark:border-white/10">العامل</th>
              <th class="p-4 font-bold text-amber-600 border-b border-slate-200 dark:border-white/10">ReZUM</th>
              <th class="p-4 font-bold text-slate-500 border-b border-slate-200 dark:border-white/10">الدواء اليومي</th>
              <th class="p-4 font-bold text-slate-500 border-b border-slate-200 dark:border-white/10">جراحة TURP</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-slate-100 dark:divide-white/5">
            <tr>
              <td class="p-4 font-medium text-slate-700 dark:text-slate-300">الوظيفة الجنسية</td>
              <td class="p-4 text-green-600 dark:text-green-400 font-bold">محفوظة بالكامل</td>
              <td class="p-4 text-orange-500">الآثار الجانبية شائعة</td>
              <td class="p-4 text-red-500">خطر كبير للقذف المرتجع</td>
            </tr>
            <tr>
              <td class="p-4 font-medium text-slate-700 dark:text-slate-300">المدة</td>
              <td class="p-4 text-green-600 dark:text-green-400 font-bold">5+ سنوات</td>
              <td class="p-4 text-orange-500">فقط أثناء تناوله</td>
              <td class="p-4 text-green-600 dark:text-green-400">دائم</td>
            </tr>
            <tr>
              <td class="p-4 font-medium text-slate-700 dark:text-slate-300">التعافي</td>
              <td class="p-4 text-green-600 dark:text-green-400 font-bold">في نفس اليوم</td>
              <td class="p-4 text-green-600 dark:text-green-400">فوري</td>
              <td class="p-4 text-red-500">3-5 أيام إقامة في المستشفى</td>
            </tr>
          </tbody>
        </table>
      </div>

      <blockquote class="border-l-4 border-amber-500 pl-4 italic text-slate-700 dark:text-slate-300 my-6">
        "يعتبر ReZUM الآن توصيتنا الأولى للرجال الذين يرغبون في التوقف عن تناول الأدوية اليومية دون قبول مخاطر الجراحة التقليدية."
      </blockquote>
    `
  },
];

export const EVENTS_DATA: EventData[] = [
  {
    id: 1,
    slug: 'rezum-academic-exchange',
    day: '14',
    month: 'MAR',
    year: '2026',
    title: "Rezum Academic Exchange",
    titleTH: "การแลกเปลี่ยนวิชาการ Rezum",
    titleAR: "التبادل الأكاديمي لعلاج ريزوم (Rezum)",
    titleRU: "Академический обмен по Rezum",
    subtitle: "Advancing BPH Treatment: ReZum Water Vapor Therapy Academic Exchange at Siriraj Hospital",
    subtitleTH: "ก้าวหน้าในการรักษา BPH: การแลกเปลี่ยนวิชาการ ReZum Water Vapor Therapy ณ โรงพยาบาลศิริราช",
    subtitleAR: "تطوير علاج تضخم البروستاتا الحميد (BPH): التبادل الأكاديمي لعلاج ReZum باستخدام بخار الماء في مستشفى سيريراج",
    subtitleRU: "Развитие лечения ДГПЖ: Академический обмен по водно-паровой терапии ReZum в больнице Сирирадж",
    description: "Today, we were honored to participate in the prestigious ‘ReZum Exchange Event’ at Siriraj Hospital. This high-level academic exchange brought together distinguished urologists from Singapore and Thailand...",
    descriptionTH: "วันนี้ พวกเราได้รับเกียรติเข้าร่วมงาน ‘ReZum Exchange Event’ ณ โรงพยาบาลศิริราช เพื่อร่วมแลกเปลี่ยนความรู้ทางวิชาการและประสบการณ์ทางคลินิกกับทีม ศัลยแพทย์ทางเดินปัสสาวะ (Urologists) ชั้นนำจากประเทศสิงคโปร์ทั้ง 7 ท่าน นำโดย:\n\nAssist. Prof. Varat Woranisarakul\nDr. Chua Wei Jin\n\nการประชุมในครั้งนี้มุ่งเน้นไปที่การพัฒนาทักษะและความเชี่ยวชาญด้านการศัลยกรรมด้วยเทคโนโลยี Water Vapor Therapy (Rezūm) หรือ การรักษาโรคต่อมลูกหมากโตด้วยไอน้ำ ซึ่งเป็นนวัตกรรมการรักษาแบบ Minimally Invasive (แผลเล็ก/ไม่ต้องผ่าตัดใหญ่) เพื่อผลลัพธ์การรักษาที่มีประสิทธิภาพและปลอดภัยยิ่งขึ้นสำหรับคนไข้\n\nนอกจากนี้ เราขอขอบพระคุณ Boston Scientific เป็นอย่างสูงที่เป็นหัวเรี่ยวหัวแรงสำคัญในการจัดฟอรัมการศึกษาที่มีคุณค่าในครั้งนี้ เพื่อผลักดันนวัตกรรมการแพทย์และการดูแลรักษาผู้ป่วยในระดับสากล",
    descriptionAR: "اليوم، تشرفنا بالمشاركة في 'حدث التبادل حول ReZum' المرموق في مستشفى سيريراج. جمع هذا التبادل الأكاديمي رفيع المستوى أطباء مسالك بولية متميزين من سنغافورة وتايلاند...",
    descriptionRU: "Сегодня мы имели честь участвовать в престижном «Мероприятии по обмену опытом ReZum» в больнице Сирирадж. Этот академический обмен высокого уровня собрал выдающихся урологов из Сингапура и Таиланда...",
    location: "Bangkok Hospital Pattaya, Meeting Room 1",
    locationTH: "โรงพยาบาลกรุงเทพพัทยา ห้องประชุม 1",
    locationAR: "مستشفى بانكوك باتايا، غرفة الاجتماعات 1",
    locationRU: "Больница Бангкок Паттайя, конференц-зал 1",
    time: "13:00 - 16:30",
    image: "/assets/image/expertise/Rezum Academic Exchange.webp",
    category: "SEMINAR",
    content: `
      <div class="space-y-8">
        <div class="flex flex-col gap-6 my-8">
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange.webp" alt="Rezum Academic Exchange" class="w-full h-auto object-cover" />
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange 2.webp" alt="Rezum Academic Exchange 2" class="w-full h-auto object-cover" />
          </div>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          Today, we were honored to participate in the prestigious ‘ReZum Exchange Event’ at Siriraj Hospital. This high-level academic exchange brought together distinguished urologists from Singapore and Thailand to discuss the latest advancements in Water Vapor Therapy (Rezūm) for treating enlarged prostate.
        </p>

        <p class="text-lg leading-relaxed text-slate-300">
          We were privileged to engage in a highly productive clinical dialogue with seven leading experts, including:
        </p>
        
        <div class="font-bold text-white text-xl space-y-2">
          <p>Assist. Prof. Varat Woranisarakul</p>
          <p>Dr. Chua Wei Jin</p>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          The session focused on enhancing surgical expertise and sharing innovative minimally invasive treatment approaches to improve patient outcomes. Collaborative forums like these are essential for pushing the boundaries of urological care and medical innovation.
        </p>

        <div class="rounded-3xl overflow-hidden my-10 shadow-2xl border border-white/10">
          <img src="/assets/image/expertise/Rezum Academic Exchange 3.webp" alt="Rezum Academic Exchange 3" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          Our deepest appreciation goes to Boston Scientific for their outstanding initiative in orchestrating this valuable educational forum and fostering international medical excellence.
        </p>
      </div>
    `,
    contentTH: `
      <div class="space-y-8">
        <div class="flex flex-col gap-6 my-8">
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange.webp" alt="Rezum Academic Exchange" class="w-full h-auto object-cover" />
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange 2.webp" alt="Rezum Academic Exchange 2" class="w-full h-auto object-cover" />
          </div>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          วันนี้ พวกเราได้รับเกียรติเข้าร่วมงาน ‘ReZum Exchange Event’ ณ โรงพยาบาลศิริราช เพื่อร่วมแลกเปลี่ยนความรู้ทางวิชาการและประสบการณ์ทางคลินิกกับทีม ศัลยแพทย์ทางเดินปัสสาวะ (Urologists) ชั้นนำจากประเทศสิงคโปร์ทั้ง 7 ท่าน นำโดย:
        </p>

        <div class="font-bold text-white text-xl space-y-1">
          <p>Assist. Prof. Varat Woranisarakul</p>
          <p>Dr. Chua Wei Jin</p>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          การประชุมในครั้งนี้มุ่งเน้นไปที่การพัฒนาทักษะและความเชี่ยวชาญด้านการศัลยกรรมด้วยเทคโนโลยี Water Vapor Therapy (Rezūm) หรือ การรักษาโรคต่อมลูกหมากโตด้วยไอน้ำ ซึ่งเป็นนวัตกรรมการรักษาแบบ Minimally Invasive (แผลเล็ก/ไม่ต้องผ่าตัดใหญ่) เพื่อผลลัพธ์การรักษาที่มีประสิทธิภาพและปลอดภัยยิ่งขึ้นสำหรับคนไข้
        </p>

        <div class="rounded-3xl overflow-hidden my-10 shadow-2xl border border-white/10">
          <img src="/assets/image/expertise/Rezum Academic Exchange 3.webp" alt="Rezum Academic Exchange 3" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          นอกจากนี้ เราขอขอบพระคุณ Boston Scientific เป็นอย่างสูงที่เป็นหัวเรี่ยวหัวแรงสำคัญในการจัดฟอรัมการศึกษาที่มีคุณค่าในครั้งนี้ เพื่อผลักดันนวัตกรรมการแพทย์และการดูแลรักษาผู้ป่วยในระดับสากล
        </p>
      </div>
    `,

      excerptAR: "حدث التبادل الأكاديمي المرموق لعلاج ReZum في مستشفى سيريراج بمشاركة خبراء من سنغافورة وتايلاند.",
      excerptRU: "Престижное мероприятие по академическому обмену по ReZum в больнице Сирирадж с участием экспертов из Сингапура и Таиланда.",
      contentAR: `
      <div class="space-y-8">
        <div class="flex flex-col gap-6 my-8">
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange.webp" alt="Rezum Academic Exchange" class="w-full h-auto object-cover" />
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange 2.webp" alt="Rezum Academic Exchange 2" class="w-full h-auto object-cover" />
          </div>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          اليوم، تشرفنا بالمشاركة في 'حدث التبادل حول ReZum' المرموق في مستشفى سيريراج. جمع هذا التبادل الأكاديمي رفيع المستوى أطباء مسالك بولية متميزين من سنغافورة وتايلاند لمناقشة أحدث التطورات في العلاج ببخار الماء (Rezūm) لعلاج تضخم البروستاتا.
        </p>

        <p class="text-lg leading-relaxed text-slate-300">
          لقد حظينا بشرف المشاركة في حوار سريري مثمر للغاية مع سبعة خبراء بارزين، بما في ذلك:
        </p>
        
        <div class="font-bold text-white text-xl space-y-2">
          <p>Assist. Prof. Varat Woranisarakul</p>
          <p>Dr. Chua Wei Jin</p>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          ركزت الجلسة على تعزيز الخبرة الجراحية ومشاركة الأساليب العلاجية المبتكرة طفيفة التوغل لتحسين نتائج المرضى. تعتبر المنتديات التعاونية مثل هذه ضرورية لدفع حدود الرعاية البولية والابتكار الطبي.
        </p>

        <div class="rounded-3xl overflow-hidden my-10 shadow-2xl border border-white/10">
          <img src="/assets/image/expertise/Rezum Academic Exchange 3.webp" alt="Rezum Academic Exchange 3" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          خالص تقديرنا لشركة بوسطن ساينتيفيك (Boston Scientific) لمبادرتها الرائعة في تنظيم هذا المنتدى التعليمي القيم وتعزيز التميز الطبي الدولي.
        </p>
      </div>
      `,
      contentRU: `
      <div class="space-y-8">
        <div class="flex flex-col gap-6 my-8">
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange.webp" alt="Rezum Academic Exchange" class="w-full h-auto object-cover" />
          </div>
          <div class="rounded-2xl overflow-hidden shadow-2xl border border-white/10 w-full">
            <img src="/assets/image/expertise/Rezum Academic Exchange 2.webp" alt="Rezum Academic Exchange 2" class="w-full h-auto object-cover" />
          </div>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          Сегодня мы имели честь участвовать в престижном «Мероприятии по обмену опытом ReZum» в больнице Сирирадж. Этот академический обмен высокого уровня собрал выдающихся урологов из Сингапура и Таиланда для обсуждения последних достижений в области водно-паровой терапии (Rezūm) для лечения увеличения предстательной железы.
        </p>

        <p class="text-lg leading-relaxed text-slate-300">
          Для нас было честью участвовать в весьма продуктивном клиническом диалоге с семью ведущими экспертами, среди которых:
        </p>
        
        <div class="font-bold text-white text-xl space-y-2">
          <p>Доцент Варат Воранисаракул (Assist. Prof. Varat Woranisarakul)</p>
          <p>Доктор Чуа Вэй Цзинь (Dr. Chua Wei Jin)</p>
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          Заседание было посвящено повышению хирургического мастерства и обмену инновационными подходами к минимально инвазивному лечению для улучшения результатов пациентов. Подобные совместные форумы необходимы для расширения границ урологической помощи и медицинских инноваций.
        </p>

        <div class="rounded-3xl overflow-hidden my-10 shadow-2xl border border-white/10">
          <img src="/assets/image/expertise/Rezum Academic Exchange 3.webp" alt="Rezum Academic Exchange 3" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed text-slate-300">
          Мы выражаем глубочайшую признательность компании Boston Scientific за ее выдающуюся инициативу в организации этого ценного образовательного форума и содействии международному медицинскому совершенству.
        </p>
      </div>
      `
},
  {
    id: 2,
    slug: 'urolift-success-story',
    day: '28',
    month: 'MAR',
    year: '2026',
    title: "Pioneering Excellence: Thailand’s First Certified UroLift Success Story",
    titleTH: "ผู้บุกเบิกความเป็นเลิศ: เรื่องราวความสำเร็จของ UroLift รายแรกที่ได้รับการรับรองในประเทศไทย",
    titleAR: "الريادة في التميز: قصة نجاح أول حالة معتمدة لـ UroLift في تايلاند",
    titleRU: "Новаторское превосходство: первая в Таиланде история успеха сертифицированного UroLift",
    subtitle: "Dr. Niti Navanimitkul: Thailand’s First Teleflex-Certified Urologist for 50 Successful UroLift Procedures",
    subtitleTH: "นพ.นิธิ นาวานิมิตกุล: ศัลยแพทย์ทางเดินปัสสาวะรายแรกของไทยที่ได้รับการรับรองจาก Teleflex สำหรับหัตถการ UroLift 50 รายที่ประสบความสำเร็จ",
    subtitleAR: "د. نيثي نافانيتكول: أول طبيب مسالك بولية معتمد من تيليفليكس (Teleflex) في تايلاند لـ 50 إجراء UroLift ناجح",
    subtitleRU: "Доктор Нити Наванимиткул: первый в Таиланде уролог, сертифицированный Teleflex, успешно выполнивший 50 процедур UroLift",
    description: "Pattaya, Thailand – April 30, 2025 – Bangkok Hospital Pattaya proudly announces a major milestone in men’s health and urological excellence. Dr. Niti Navanimitkul, a Board-Certified Urologist and leading specialist in Benign Prostatic Hyperplasia (BPH), has become the first physician in Thailand to receive official certification from The Teleflex Academy.",
    descriptionTH: "พัทยา, ประเทศไทย – 30 เมษายน 2568 – โรงพยาบาลกรุงเทพพัทยา ตอกย้ำความเป็นผู้นำด้านศูนย์ทางเดินปัสสาวะและสุขภาพบุรุษ โดย นพ. นิธิ นาวานิมิตกุล ศัลยแพทย์ทางเดินปัสสาวะและผู้เชี่ยวชาญด้านสุขภาพบุรุษ ได้สร้างประวัติศาสตร์เป็น แพทย์คนแรกในประเทศไทย ที่ได้รับประกาศนียบัตรรับรองอย่างเป็นทางการจาก The Teleflex Academy\n\nรางวัลอันทรงเกียรตินี้มอบโดย Mr. KuoHau Wei (Senior Commercial Manager, SEA IU • APAC) เพื่อเชิดชูความสำเร็จของ นพ. นิธิ ในการทำหัตถการ UroLift (ยูโรลิฟต์) สำเร็จครบ 50 ราย (ข้อมูล ณ เดือนกุมภาพันธ์ 2568) โดยที่ ไม่มีคนไข้รายใดต้องกลับมาผ่าตัดซ้ำ สะท้อนถึงความเชี่ยวชาญขั้นสูงและผลลัพธ์การรักษาโรค ต่อมลูกหมากโต (BPH) ที่ยอดเยี่ยมระดับสากล\n\nUroLift คืออะไร? นวัตกรรมรักษาต่อมลูกหมากโตที่ฟื้นตัวไวที่สุด\nUroLift (ยูโรลิฟต์) คือนวัตกรรมการรักษาโรค ต่อมลูกหมากโต (BPH) รูปแบบใหม่ที่ได้รับความนิยมสูงในต่างประเทศ เป็นการรักษาแบบ Minimally Invasive (แผลเล็ก/ไม่ต้องผ่าตัดใหญ่) ที่ตอบโจทย์ไลฟ์สไตล์ผู้ชายยุคใหม่:\n\nไม่ต้องผ่าตัด ไม่ต้องคว้านเนื้อเยื่อ: ใช้เพียงอุปกรณ์ขนาดเล็กเพื่อยกและขยายท่อปัสสาวะ\n\nไม่กระทบสมรรถภาพทางเพศ: รักษาฟังก์ชันสำคัญของเพศชายไว้ได้อย่างครบถ้วน\n\nฟื้นตัวเร็วทันใจ: คนไข้สามารถกลับบ้านได้ภายในวันเดียว และกลับไปใช้ชีวิตปกติได้ภายใน 7 วัน\n\nมาตรฐานสากล: ผ่านการรับรองจาก U.S. FDA (อย. สหรัฐอเมริกา) ตั้งแต่ปี 2013 และเป็นทางเลือกแรกในการรักษา BPH ในหลายประเทศทั่วโลก\n\nผู้นำการรักษา UroLift ในภาคตะวันออกและประเทศไทย\nนับตั้งแต่มีการนำ UroLift เข้ามาในไทยเมื่อเดือนพฤษภาคม 2567 โรงพยาบาลกรุงเทพพัทยา ได้ก้าวขึ้นเป็นโรงพยาบาลแห่งที่สองของประเทศ และเป็น แห่งแรกในภาคตะวันออก ที่เปิดให้บริการรักษานี้อย่างเป็นทางการในเดือนสิงหาคม 2567\n\nด้วยความมุ่งมั่นของ นพ. นิธิ นาวานิมิตกุล ที่สามารถดูแลคนไข้สำเร็จถึง 50 รายในระยะเวลาเพียงไม่กี่เดือน ทำให้การรักษานี้กลายเป็นทางเลือกอันดับ 1 สำหรับผู้ที่มีปัญหา ปัสสาวะขัด ปัสสาวะบ่อยตอนกลางคืน หรือปัสสาวะไม่พุ่ง โดยไม่ต้องกังวลเรื่องผลข้างเคียงจากการผ่าตัดแบบเดิมๆ\n\nทำไมต้องรักษาต่อมลูกหมากโตกับ นพ. นิธิ ?\nผลลัพธ์การรักษาที่พิสูจน์ได้: อัตราความสำเร็จสูง โดยไม่มีคนไข้ต้องกลับมาทำซ้ำ\n\nมาตรฐานระดับโลก: การันตีด้วยประกาศนียบัตรจาก Teleflex Academy รายแรกของไทย\n\nความพึงพอใจสูงสุด: คืนคุณภาพชีวิตที่ดีให้กับคนไข้ ให้กลับมาทำกิจกรรมที่รักได้อย่างมั่นใจ",
    descriptionAR: "باتايا، تايلاند - 30 أبريل 2025 - يعلن مستشفى بانكوك باتايا بفخر عن إنجاز كبير في صحة الرجال والتميز في طب المسالك البولية. أصبح الدكتور نيثي نافانيتكول، أخصائي جراحة المسالك البولية المعتمد والخبير الرائد في تضخم البروستاتا الحميد (BPH)، أول طبيب في تايلاند يحصل على الشهادة الرسمية من أكاديمية تيليفليكس.",
    descriptionRU: "Паттайя, Таиланд – 30 апреля 2025 г. – Больница Бангкок Паттайя с гордостью сообщает о важном достижении в области мужского здоровья и урологического превосходства. Доктор Нити Наванимиткул, сертифицированный уролог и ведущий специалист по доброкачественной гиперплазии предстательной железы (ДГПЖ), стал первым врачом в Таиланде, получившим официальный сертификат Академии Teleflex.",
    location: "M-Trust Clinic Main Hall",
    locationTH: "ห้องโถงหลัก เอ็มทรัสต์ คลินิก",
    time: "10:00 - 12:00",
    image: "/assets/image/expertise/UroLift Success Stories.webp",
    category: "WORKSHOP",
    content: `
      <div class="space-y-6 text-slate-300">
        <div class="relative w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/UroLift Success Stories.webp" alt="UroLift Success Stories" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed">
          <strong>Pattaya, Thailand – April 30, 2025</strong> – Bangkok Hospital Pattaya proudly announces a major milestone in men’s health and urological excellence. Dr. Niti Navanimitkul, a Board-Certified Urologist and leading specialist in Benign Prostatic Hyperplasia (BPH), has become the first physician in Thailand to receive official certification from The Teleflex Academy.
        </p>
        <p class="text-lg leading-relaxed">
          This prestigious recognition was presented by Mr. KuoHau Wei, Senior Commercial Manager (SEA IU • APAC), honoring Dr. Niti’s completion of 50 successful UroLift procedures (as of February 2025). Most notably, Dr. Niti achieved a 0% re-operation rate, demonstrating unmatched clinical expertise and superior patient outcomes in treating enlarged prostate symptoms.
        </p>

        <div class="aspect-video w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/KoPtIZcZCHY?start=108" 
            title="UroLift Success Story" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">What is UroLift? The Leading Non-Surgical BPH Treatment</h3>
        <p>UroLift is a revolutionary, minimally invasive procedure designed for men seeking a fast-recovery solution for Benign Prostatic Hyperplasia (BPH). Unlike traditional surgery, the UroLift System:</p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Preserves Sexual Function:</strong> No cutting, heating, or removal of prostate tissue.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Rapid Relief:</strong> Uses small, permanent implants to lift and hold prostate tissue, immediately opening the urethra.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Minimal Downtime:</strong> Patients typically return home the same day and resume normal activities within 7 days.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>FDA Approved:</strong> This gold-standard treatment has been U.S. FDA approved since 2013 for its safety and long-term efficacy.</span>
          </li>
        </ul>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Pioneering UroLift in Eastern Thailand</h3>
        <p>
          Since its introduction to Thailand in May 2024, Bangkok Hospital Pattaya has established itself as a center of excellence. It is the second hospital in Thailand and the very first in the Eastern region to offer this advanced technology.
        </p>
        <p>
          Under the leadership of Dr. Niti Navanimitkul, the hospital has rapidly become a primary destination for patients seeking innovative BPH treatments that alleviate symptoms like urinary urgency, weak stream, and frequent nighttime urination (nocturia) without the risks of major surgery.
        </p>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Why Choose Dr. Niti Navanimitkul ?</h3>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Proven Success:</strong> 50+ procedures with zero repeat surgeries required.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>International Standards:</strong> Certified by Teleflex Academy, ensuring global-tier surgical precision.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Patient-Centric Care:</strong> High satisfaction rates focusing on quality of life and long-term urinary health.</span>
          </li>
        </ul>
      </div>
    `,
    contentTH: `
      <div class="space-y-6 text-slate-300">
        <div class="relative w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/UroLift Success Stories.webp" alt="UroLift Success Stories" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed">
          <strong>พัทยา, ประเทศไทย – 30 เมษายน 2568</strong> – โรงพยาบาลกรุงเทพพัทยา ตอกย้ำความเป็นผู้นำด้านศูนย์ทางเดินปัสสาวะและสุขภาพบุรุษ โดย นพ. นิธิ นาวานิมิตกุล ศัลยแพทย์ทางเดินปัสสาวะและผู้เชี่ยวชาญด้านสุขภาพบุรุษ ได้สร้างประวัติศาสตร์เป็น แพทย์คนแรกในประเทศไทย ที่ได้รับประกาศนียบัตรรับรองอย่างเป็นทางการจาก The Teleflex Academy
        </p>
        <p class="text-lg leading-relaxed">
          รางวัลอันทรงเกียรตินี้มอบโดย Mr. KuoHau Wei (Senior Commercial Manager, SEA IU • APAC) เพื่อเชิดชูความสำเร็จของ นพ. นิธิ ในการทำหัตถการ UroLift (ยูโรลิฟต์) สำเร็จครบ 50 ราย (ข้อมูล ณ เดือนกุมภาพันธ์ 2568) โดยที่ ไม่มีคนไข้รายใดต้องกลับมาผ่าตัดซ้ำ สะท้อนถึงความเชี่ยวชาญขั้นสูงและผลลัพธ์การรักษาโรค ต่อมลูกหมากโต (BPH) ที่ยอดเยี่ยมระดับสากล
        </p>

        <div class="aspect-video w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/KoPtIZcZCHY?start=108" 
            title="UroLift Success Story" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">UroLift คืออะไร? นวัตกรรมรักษาต่อมลูกหมากโตที่ฟื้นตัวไวที่สุด</h3>
        <p>UroLift (ยูโรลิฟต์) คือนวัตกรรมการรักษาโรค ต่อมลูกหมากโต (BPH) รูปแบบใหม่ที่ได้รับความนิยมสูงในต่างประเทศ เป็นการรักษาแบบ Minimally Invasive (แผลเล็ก/ไม่ต้องผ่าตัดใหญ่) ที่ตอบโจทย์ไลฟ์สไตล์ผู้ชายยุคใหม่:</p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>ไม่ต้องผ่าตัด ไม่ต้องคว้านเนื้อเยื่อ:</strong> ใช้เพียงอุปกรณ์ขนาดเล็กเพื่อยกและขยายท่อปัสสาวะ</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>ไม่กระทบสมรรถภาพทางเพศ:</strong> รักษาฟังก์ชันสำคัญของเพศชายไว้ได้อย่างครบถ้วน</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>ฟื้นตัวเร็วทันใจ:</strong> คนไข้สามารถกลับบ้านได้ภายในวันเดียว และกลับไปใช้ชีวิตปกติได้ภายใน 7 วัน</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>มาตรฐานสากล:</strong> ผ่านการรับรองจาก U.S. FDA (อย. สหรัฐอเมริกา) ตั้งแต่ปี 2013 และเป็นทางเลือกแรกในการรักษา BPH ในหลายประเทศทั่วโลก</span>
          </li>
        </ul>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">ผู้นำการรักษา UroLift ในภาคตะวันออกและประเทศไทย</h3>
        <p>
          นับตั้งแต่มีการนำ UroLift เข้ามาในไทยเมื่อเดือนพฤษภาคม 2567 โรงพยาบาลกรุงเทพพัทยา ได้ก้าวขึ้นเป็นโรงพยาบาลแห่งที่สองของประเทศ และเป็น แห่งแรกในภาคตะวันออก ที่เปิดให้บริการรักษานี้อย่างเป็นทางการในเดือนสิงหาคม 2567
        </p>
        <p>
          ด้วยความมุ่งมั่นของ นพ. นิธิ นาวานิมิตกุล ที่สามารถดูแลคนไข้สำเร็จถึง 50 รายในระยะเวลาเพียงไม่กี่เดือน ทำให้การรักษานี้กลายเป็นทางเลือกอันดับ 1 สำหรับผู้ที่มีปัญหา ปัสสาวะขัด ปัสสาวะบ่อยตอนกลางคืน หรือปัสสาวะไม่พุ่ง โดยไม่ต้องกังวลเรื่องผลข้างเคียงจากการผ่าตัดแบบเดิมๆ
        </p>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">ทำไมต้องรักษาต่อมลูกหมากโตกับ นพ. นิธิ ?</h3>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>ผลลัพธ์การรักษาที่พิสูจน์ได้:</strong> อัตราความสำเร็จสูง โดยไม่มีคนไข้ต้องกลับมาทำซ้ำ</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>มาตรฐานระดับโลก:</strong> การันตีด้วยประกาศนียบัตรจาก Teleflex Academy รายแรกของไทย</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>ความพึงพอใจสูงสุด:</strong> คืนคุณภาพชีวิตที่ดีให้กับคนไข้ ให้กลับมาทำกิจกรรมที่รักได้อย่างมั่นใจ</span>
          </li>
        </ul>
      </div>
    `,
      locationRU: "Главный зал клиники M-Trust",
      excerptAR: "د. نيثي نافانيتكول هو أول طبيب مسالك بولية في تايلاند معتمد من Teleflex لـ 50 عملية UroLift ناجحة.",
      excerptRU: "Доктор Нити Наванимиткул — первый уролог в Таиланде, сертифицированный Teleflex за 50 успешных процедур UroLift.",
      contentAR: `
      <div class="space-y-6 text-slate-300">
        <div class="relative w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/UroLift Success Stories.webp" alt="UroLift Success Stories" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed">
          <strong>باتايا، تايلاند - 30 أبريل 2025</strong> - يعلن مستشفى بانكوك باتايا بفخر عن إنجاز كبير في صحة الرجال والتميز في طب المسالك البولية. أصبح الدكتور نيثي نافانيتكول، أخصائي جراحة المسالك البولية المعتمد والخبير الرائد في تضخم البروستاتا الحميد (BPH)، أول طبيب في تايلاند يحصل على الشهادة الرسمية من أكاديمية تيليفليكس (The Teleflex Academy).
        </p>
        <p class="text-lg leading-relaxed">
          تم تقديم هذا التقدير المرموق من قبل السيد KuoHau Wei، المدير التجاري الأول (SEA IU • APAC)، تكريماً لإكمال الدكتور نيثي 50 إجراء UroLift ناجحاً (اعتباراً من فبراير 2025). والأهم من ذلك، حقق الدكتور نيثي معدل إعادة تشغيل بنسبة 0٪، مما يدل على خبرة سريرية لا مثيل لها ونتائج فائقة للمرضى في علاج أعراض تضخم البروستاتا.
        </p>

        <div class="aspect-video w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/KoPtIZcZCHY?start=108" 
            title="UroLift Success Story" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">ما هو UroLift؟ العلاج الرائد لتضخم البروستاتا غير الجراحي</h3>
        <p>UroLift هو إجراء ثوري طفيف التوغل مصمم للرجال الذين يبحثون عن حل سريع الشفاء لتضخم البروستاتا الحميد (BPH). على عكس الجراحة التقليدية، فإن نظام UroLift:</p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>يحافظ على الوظيفة الجنسية:</strong> لا قطع أو تسخين أو إزالة لأنسجة البروستاتا.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>راحة سريعة:</strong> يستخدم غرسات صغيرة دائمة لرفع أنسجة البروستاتا والاحتفاظ بها، مما يفتح مجرى البول على الفور.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>الحد الأدنى من فترة النقاهة:</strong> عادة ما يعود المرضى إلى المنزل في نفس اليوم ويستأنفون الأنشطة العادية في غضون 7 أيام.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>موافق عليه من إدارة الأغذية والعقاقير:</strong> تمت الموافقة على هذا العلاج الذهبي القياسي من قبل إدارة الأغذية والعقاقير الأمريكية منذ عام 2013 لسلامته وفعاليته على المدى الطويل.</span>
          </li>
        </ul>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">الريادة في UroLift في شرق تايلاند</h3>
        <p>
          منذ طرحه في تايلاند في مايو 2024، أثبت مستشفى بانكوك باتايا نفسه كمركز للتميز. وهو المستشفى الثاني في تايلاند والأول في المنطقة الشرقية الذي يقدم هذه التكنولوجيا المتقدمة.
        </p>
        <p>
          تحت قيادة الدكتور نيثي نافانيتكول، أصبح المستشفى وجهة رئيسية للمرضى الذين يبحثون عن علاجات تضخم البروستاتا المبتكرة التي تخفف من الأعراض مثل إلحاح البول وضعف التدفق والتبول الليلي المتكرر (التبول الليلي) دون مخاطر الجراحة الكبرى.
        </p>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">لماذا تختار د. نيثي نافانيتكول ؟</h3>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>نجاح مثبت:</strong> أكثر من 50 إجراء مع عدم الحاجة إلى جراحات متكررة.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>معايير دولية:</strong> معتمد من أكاديمية تيليفليكس (Teleflex Academy)، مما يضمن الدقة الجراحية على المستوى العالمي.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>رعاية تركز على المريض:</strong> معدلات رضا عالية تركز على جودة الحياة وصحة المسالك البولية على المدى الطويل.</span>
          </li>
        </ul>
      </div>
      `,
      contentRU: `
      <div class="space-y-6 text-slate-300">
        <div class="relative w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/UroLift Success Stories.webp" alt="Истории успеха UroLift" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed">
          <strong>Паттайя, Таиланд – 30 апреля 2025 г.</strong> – Больница Бангкок Паттайя с гордостью сообщает о важном достижении в области мужского здоровья и урологического превосходства. Доктор Нити Наванимиткул, сертифицированный уролог и ведущий специалист по доброкачественной гиперплазии предстательной железы (ДГПЖ), стал первым врачом в Таиланде, получившим официальный сертификат Академии Teleflex.
        </p>
        <p class="text-lg leading-relaxed">
          Это престижное признание было вручено г-ном КуоХау Вэем, старшим коммерческим директором (SEA IU • APAC), в честь того, что доктор Нити успешно провел 50 процедур UroLift (по состоянию на февраль 2025 года). Что наиболее важно, доктор Нити достиг показателя повторных операций в 0%, демонстрируя непревзойденный клинический опыт и превосходные результаты для пациентов при лечении симптомов увеличения предстательной железы.
        </p>

        <div class="aspect-video w-full rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <iframe 
            class="w-full h-full"
            src="https://www.youtube.com/embed/KoPtIZcZCHY?start=108" 
            title="История успеха UroLift" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen>
          </iframe>
        </div>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Что такое UroLift? Ведущее безоперационное лечение ДГПЖ</h3>
        <p>UroLift — это революционная, минимально инвазивная процедура, разработанная для мужчин, которые ищут решение для быстрого восстановления при доброкачественной гиперплазии предстательной железы (ДГПЖ). В отличие от традиционной хирургии, система UroLift:</p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Сохраняет половую функцию:</strong> Без разрезов, нагревания или удаления ткани простаты.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Быстрое облегчение:</strong> Использует небольшие постоянные имплантаты для поднятия и удержания ткани предстательной железы, немедленно открывая уретру.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Минимальное время восстановления:</strong> Пациенты обычно возвращаются домой в тот же день и возобновляют нормальную деятельность в течение 7 дней.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Одобрено FDA:</strong> Это лечение, являющееся золотым стандартом, одобрено Управлением по контролю за продуктами и лекарствами США (FDA) с 2013 года за его безопасность и долгосрочную эффективность.</span>
          </li>
        </ul>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Внедрение UroLift в Восточном Таиланде</h3>
        <p>
          С момента появления в Таиланде в мае 2024 года больница Бангкок Паттайя зарекомендовала себя как центр передового опыта. Это вторая больница в Таиланде и самая первая в Восточном регионе, предлагающая эту передовую технологию.
        </p>
        <p>
          Под руководством доктора Нити Наванимиткул больница быстро стала основным местом назначения для пациентов, ищущих инновационные методы лечения ДГПЖ, которые облегчают такие симптомы, как частые позывы к мочеиспусканию, слабая струя и частое ночное мочеиспускание (ноктурия) без риска серьезного хирургического вмешательства.
        </p>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Почему стоит выбрать доктора Нити Наванимиткул?</h3>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Доказанный успех:</strong> Более 50 процедур без необходимости повторных операций.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Международные стандарты:</strong> Сертификат Академии Teleflex, гарантирующий хирургическую точность мирового уровня.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shrink-0"></span>
            <span><strong>Ориентация на пациента:</strong> Высокие показатели удовлетворенности с акцентом на качество жизни и долгосрочное здоровье мочевыводящих путей.</span>
          </li>
        </ul>
      </div>
      `
},
  {
    id: 3,
    slug: 'advanced-holep-laser-surgery',
    day: '05',
    month: 'APR',
    year: '2026',
    title: "Advanced HoLEP Laser Surgery for BPH",
    titleTH: "การผ่าตัดส่องกล้องเลเซอร์ HoLEP สำหรับต่อมลูกหมากโต",
    titleAR: "جراحة ليزر HoLEP المتقدمة لعلاج تضخم البروستاتا",
    titleRU: "Передовая лазерная хирургия HoLEP при ДГПЖ",
    subtitle: "Dr. Niti Navanimitkul offers Advanced HoLEP laser surgery in Pattaya-the modern gold standard for long-term, minimally invasive enlarged prostate (BPH) relief.",
    subtitleTH: "นพ.นิธิ นาวานิมิตกุล นำเสนอนวัตกรรมการผ่าตัดส่องกล้องเลเซอร์ HoLEP ในพัทยา ซึ่งเป็นมาตรฐานระดับโลกสำหรับการรักษาโรคต่อมลูกหมากโต (BPH) แบบถาวรและแผลเล็ก",
    subtitleAR: "يقدم د. نيثي نافانيتكول جراحة ليزر HoLEP المتقدمة في باتايا - المعيار الذهبي الحديث لعلاج تضخم البروستاتا الحميد (BPH) بشكل دائم وبأقل تدخل جراحي.",
    subtitleRU: "Доктор Нити Наванимиткул предлагает передовую лазерную хирургию HoLEP в Паттайе — современный золотой стандарт для долгосрочного, минимально инвазивного лечения увеличения предстательной железы (ДГПЖ).",
    description: "Dr. Niti Navanimitkul offers Advanced HoLEP laser surgery in Pattaya-the modern gold standard for long-term, minimally invasive enlarged prostate (BPH) relief.",
    descriptionTH: "นพ.นิธิ นาวานิมิตกุล นำเสนอนวัตกรรมการผ่าตัดส่องกล้องเลเซอร์ HoLEP ในพัทยา ซึ่งเป็นมาตรฐานระดับโลกสำหรับการรักษาโรคต่อมลูกหมากโต (BPH) แบบถาวรและแผลเล็ก",
    descriptionAR: "يقدم د. نيثي نافانيتكول جراحة ليزر HoLEP المتقدمة في باتايا - المعيار الذهبي الحديث لعلاج تضخم البروستاتا الحميد (BPH) بشكل دائم وبأقل تدخل جراحي.",
    descriptionRU: "Доктор Нити Наванимиткул предлагает передовую лазерную хирургию HoLEP в Паттайе — современный золотой стандарт для долгосрочного, минимально инвазивного лечения увеличения предстательной железы (ДГПЖ).",
    location: "M-Trust Urology Clinic, Pattaya",
    locationTH: "เอ็มทรัสต์ คลินิก พัทยา",
    time: "09:00 - 17:00",
    image: "/assets/image/expertise/Advanced HoLEP.webp",
    category: "SURGERY",
    content: `
      <div class="space-y-6 text-slate-300">
        <p class="text-lg leading-relaxed">
          If you are a man over 50 experiencing a weak urine stream or frequent nighttime trips to the bathroom, you are likely dealing with <strong>Benign Prostatic Hyperplasia (BPH)</strong>. While common, these symptoms can significantly impact your quality of life. Fortunately, residents and visitors in Chonburi now have access to <strong>Advanced HoLEP laser surgery for enlarged prostate (BPH) in Pattaya by Dr. Niti Navanimitkul</strong>, offering a permanent and minimally invasive solution.
        </p>

        <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Expert Collaboration for Better Prostate Health</h3>
        <p>
          Health and confidence are restored through personalized care. Dr. Tev Aho, M.D., Consultant Urological Surgeon at Cambridge University Hospitals and an international pioneer in HoLEP surgery, has closely collaborated with <strong>Dr. Niti Navanimitkul</strong>. This ensures that patients in Pattaya receive treatment that meets the highest global standards of precision and safety.
        </p>

        <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/Advanced HoLEP.webp" alt="Advanced HoLEP Surgery Illustration" class="w-full h-full object-cover" />
          <div class="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
          <div class="absolute bottom-6 left-6">
            <p class="text-white text-sm font-bold uppercase tracking-widest">Global Gold Standard: HoLEP Technology</p>
          </div>
        </div>

        <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">What is HoLEP? The Gold Standard for BPH</h3>
        <p>
          <strong>HoLEP (Holmium Laser Enucleation of the Prostate)</strong> is a state-of-the-art procedure that uses laser energy to precisely remove the entire obstructive portion of the prostate. Unlike traditional methods, HoLEP is effective for prostates of all sizes and offers a <strong>"once-in-a-lifetime"</strong> permanent fix.
        </p>

        <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Why Choose HoLEP Over Traditional Surgery?</h3>
        <div class="overflow-x-auto my-8 rounded-2xl border border-white/10">
          <table class="w-full text-left border-collapse">
            <thead>
              <tr class="bg-white/5">
                <th class="p-4 font-bold text-white border-b border-white/10 text-sm uppercase">Feature</th>
                <th class="p-4 font-bold text-cyan-400 border-b border-white/10 text-sm uppercase">HoLEP Laser Surgery</th>
                <th class="p-4 font-bold text-slate-400 border-b border-white/10 text-sm uppercase">Traditional TURP</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-white/5">
              <tr>
                <td class="p-4 text-white font-medium text-sm">Target Prostate Size</td>
                <td class="p-4 text-slate-300 text-sm italic">All sizes (even very large)</td>
                <td class="p-4 text-slate-400 text-sm italic">Small to medium only</td>
              </tr>
              <tr>
                <td class="p-4 text-white font-medium text-sm">Blood Loss</td>
                <td class="p-4 text-slate-300 text-sm italic">Minimal (Laser seals vessels)</td>
                <td class="p-4 text-slate-400 text-sm italic">Higher risk of bleeding</td>
              </tr>
              <tr>
                <td class="p-4 text-white font-medium text-sm">Hospital Stay</td>
                <td class="p-4 text-slate-300 text-sm italic">Short (usually 1 night)</td>
                <td class="p-4 text-slate-400 text-sm italic">Longer (3-4 days)</td>
              </tr>
              <tr>
                <td class="p-4 text-white font-medium text-sm">Catheter Time</td>
                <td class="p-4 text-slate-300 text-sm italic">12-24 hours</td>
                <td class="p-4 text-slate-400 text-sm italic">72+ hours</td>
              </tr>
              <tr>
                <td class="p-4 text-white font-medium text-sm">Re-treatment Rate</td>
                <td class="p-4 text-slate-300 text-sm italic">Nearly 0% (Permanent)</td>
                <td class="p-4 text-slate-400 text-sm italic">Up to 15% within 10 years</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Key Clinical Benefits:</h3>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Faster Recovery:</strong> Most patients return to normal activities within days.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Preservation of Sexual Function:</strong> No higher risk of ED compared to other methods.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Immediate Symptom Relief:</strong> Significant improvement in urine flow from day one.</span>
          </li>
        </ul>
      </div>
    `,
    contentTH: `
<div class="space-y-6 text-slate-300 text-left">
  <p class="text-lg leading-relaxed">
    หากคุณเป็นผู้ชายวัย 50 ปีขึ้นไปที่มีอาการปัสสาวะไม่พุ่ง หรือต้องลุกมาเข้าห้องน้ำบ่อยครั้งในช่วงกลางคืน คุณอาจกำลังเผชิญกับ <strong>ภาวะต่อมลูกหมากโต (BPH)</strong> แม้จะเป็นอาการที่พบได้บ่อย แต่ก็ส่งผลกระทบต่อคุณภาพชีวิตอย่างมาก แต่โชคดีที่ปัจจุบันชาวชลบุรีและผู้มาเยือนพัทยา สามารถเข้ารับการรักษาด้วย <strong>นวัตกรรมการผ่าตัดส่องกล้องเลเซอร์ HoLEP โดย นพ.นิธิ นาวานิมิตกุล</strong> ซึ่งเป็นทางเลือกที่ให้ผลลัพธ์ถาวรและเจ็บตัวน้อย
  </p>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">ความร่วมมือจากผู้เชี่ยวชาญเพื่อสุขภาพต่อมลูกหมากที่ดีขึ้น</h3>
  <p>
    การดูแลสุขภาพและความมั่นใจจะกลับคืนมาด้วยการดูแลแบบเฉพาะบุคคล Dr. Tev Aho, M.D. ศัลยแพทย์ทางเดินปัสสาวะที่ปรึกษาจาก Cambridge University Hospitals และผู้บุกเบิกเทคนิค HoLEP ระดับโลก ได้ร่วมมืออย่างใกล้ชิดกับ <strong>นพ.นิธิ นาวานิมิตกุล</strong> เพื่อให้มั่นใจว่าคนไข้ในพัทยาจะได้รับการรักษาที่เป็นไปตามมาตรฐานสากล ทั้งในด้านความแม่นยำและความปลอดภัยสูงสุด
  </p>

  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Advanced HoLEP.webp" alt="การผ่าตัด HoLEP ขั้นสูง" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
    <div class="absolute bottom-6 left-6">
      <p class="text-white text-sm font-bold uppercase tracking-widest">มาตรฐานระดับโลก: เทคโนโลยี HoLEP</p>
    </div>
  </div>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">HoLEP คืออะไร? มาตรฐานสูงสุดในการรักษา BPH</h3>
  <p>
    <strong>HoLEP (Holmium Laser Enucleation of the Prostate)</strong> เป็นนวัตกรรมการรักษาโดยใช้พลังงานเลเซอร์คว้านเนื้อเยื่อต่อมลูกหมากส่วนที่อุดกั้นออกทั้งหมดอย่างแม่นยำ ซึ่งแตกต่างจากวิธีการแบบเดิม HoLEP สามารถรักษาต่อมลูกหมากได้ทุกขนาด และเป็นการรักษาแบบ <strong>"ครั้งเดียวจบ"</strong> ที่ให้ผลถาวร
  </p>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">ทำไมต้องเลือก HoLEP แทนการผ่าตัดแบบเดิม?</h3>
  <div class="overflow-x-auto my-8 rounded-2xl border border-white/10">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-white/5">
          <th class="p-4 font-bold text-white border-b border-white/10 text-sm uppercase">คุณสมบัติ</th>
          <th class="p-4 font-bold text-cyan-400 border-b border-white/10 text-sm uppercase">การผ่าตัดเลเซอร์ HoLEP</th>
          <th class="p-4 font-bold text-slate-400 border-b border-white/10 text-sm uppercase">การผ่าตัด TURP แบบเดิม</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr>
          <td class="p-4 text-white font-medium text-sm">ขนาดต่อมลูกหมากที่รองรับ</td>
          <td class="p-4 text-slate-300 text-sm italic">ได้ทุกขนาด (แม้ขนาดใหญ่มาก)</td>
          <td class="p-4 text-slate-400 text-sm italic">ขนาดเล็กถึงปานกลางเท่านั้น</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">การเสียเลือด</td>
          <td class="p-4 text-slate-300 text-sm italic">น้อยมาก (เลเซอร์ช่วยห้ามเลือด)</td>
          <td class="p-4 text-slate-400 text-sm italic">มีความเสี่ยงเสียเลือดสูงกว่า</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">ระยะเวลาพักรักษาตัว</td>
          <td class="p-4 text-slate-300 text-sm italic">สั้น (ปกติเพียง 1 คืน)</td>
          <td class="p-4 text-slate-400 text-sm italic">นานกว่า (3-4 วัน)</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
    `,
      locationRU: "Урологическая клиника M-Trust, Паттайя",
      excerptAR: "جراحة ليزر HoLEP المتقدمة لعلاج تضخم البروستاتا الحميد (BPH) في باتايا، المعيار الذهبي للراحة الدائمة.",
      excerptRU: "Передовая лазерная хирургия HoLEP для лечения доброкачественной гиперплазии предстательной железы (ДГПЖ) в Паттайе, золотой стандарт долгосрочного облегчения.",
      contentAR: `
<div class="space-y-6 text-slate-300">
  <p class="text-lg leading-relaxed">
    إذا كنت رجلاً فوق سن الخمسين وتعاني من ضعف في تدفق البول أو كثرة الذهاب إلى الحمام ليلاً، فمن المحتمل أنك تتعامل مع <strong>تضخم البروستاتا الحميد (BPH)</strong>. على الرغم من شيوع هذه الأعراض، إلا أنها يمكن أن تؤثر بشكل كبير على جودة حياتك. لحسن الحظ، أصبح بإمكان المقيمين والزوار في تشونبوري الآن الوصول إلى <strong>جراحة ليزر HoLEP المتقدمة لعلاج تضخم البروستاتا في باتايا بواسطة د. نيثي نافانيتكول</strong>، والتي تقدم حلاً دائماً وبأقل تدخل جراحي.
  </p>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">تعاون الخبراء من أجل صحة أفضل للبروستاتا</h3>
  <p>
    تتم استعادة الصحة والثقة من خلال الرعاية الشخصية. تعاون الدكتور تيف أهو، استشاري جراحة المسالك البولية في مستشفيات جامعة كامبريدج ورائد دولي في جراحة HoLEP، بشكل وثيق مع <strong>د. نيثي نافانيتكول</strong>. هذا يضمن حصول المرضى في باتايا على علاج يلبي أعلى المعايير العالمية للدقة والسلامة.
  </p>

  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Advanced HoLEP.webp" alt="Advanced HoLEP Surgery Illustration" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
    <div class="absolute bottom-6 left-6">
      <p class="text-white text-sm font-bold uppercase tracking-widest">المعيار الذهبي العالمي: تقنية HoLEP</p>
    </div>
  </div>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">ما هي HoLEP؟ المعيار الذهبي لعلاج تضخم البروستاتا</h3>
  <p>
    <strong>HoLEP (استئصال البروستاتا بليزر هولميوم)</strong> هي إجراء حديث يستخدم طاقة الليزر لإزالة الجزء المسد من البروستاتا بدقة. على عكس الطرق التقليدية، تعتبر HoLEP فعالة للبروستاتا من جميع الأحجام وتقدم حلاً دائماً <strong>"لمرة واحدة في العمر"</strong>.
  </p>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">لماذا تختار HoLEP بدلاً من الجراحة التقليدية؟</h3>
  <div class="overflow-x-auto my-8 rounded-2xl border border-white/10">
    <table class="w-full text-right border-collapse">
      <thead>
        <tr class="bg-white/5">
          <th class="p-4 font-bold text-white border-b border-white/10 text-sm uppercase">الميزة</th>
          <th class="p-4 font-bold text-cyan-400 border-b border-white/10 text-sm uppercase">جراحة ليزر HoLEP</th>
          <th class="p-4 font-bold text-slate-400 border-b border-white/10 text-sm uppercase">TURP التقليدي</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr>
          <td class="p-4 text-white font-medium text-sm">حجم البروستاتا المستهدف</td>
          <td class="p-4 text-slate-300 text-sm italic">جميع الأحجام (حتى الكبيرة جداً)</td>
          <td class="p-4 text-slate-400 text-sm italic">الصغيرة والمتوسطة فقط</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">فقدان الدم</td>
          <td class="p-4 text-slate-300 text-sm italic">الحد الأدنى (الليزر يغلق الأوعية)</td>
          <td class="p-4 text-slate-400 text-sm italic">خطر أكبر للنزيف</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">الإقامة في المستشفى</td>
          <td class="p-4 text-slate-300 text-sm italic">قصيرة (عادة ليلة واحدة)</td>
          <td class="p-4 text-slate-400 text-sm italic">أطول (3-4 أيام)</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">وقت القسطرة</td>
          <td class="p-4 text-slate-300 text-sm italic">12-24 ساعة</td>
          <td class="p-4 text-slate-400 text-sm italic">72+ ساعة</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">معدل إعادة العلاج</td>
          <td class="p-4 text-slate-300 text-sm italic">0% تقريباً (دائم)</td>
          <td class="p-4 text-slate-400 text-sm italic">يصل إلى 15% خلال 10 سنوات</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">الفوائد السريرية الرئيسية:</h3>
  <ul class="space-y-3 list-none pl-0">
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>شفاء أسرع:</strong> يعود معظم المرضى إلى الأنشطة العادية في غضون أيام.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>الحفاظ على الوظيفة الجنسية:</strong> لا يوجد خطر أعلى للضعف الجنسي مقارنة بالطرق الأخرى.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>تخفيف فوري للأعراض:</strong> تحسن كبير في تدفق البول من اليوم الأول.</span>
    </li>
  </ul>
</div>
`,
      contentRU: `
<div class="space-y-6 text-slate-300">
  <p class="text-lg leading-relaxed">
    Если вы мужчина старше 50 лет и испытываете слабый поток мочи или частые ночные походы в туалет, скорее всего, вы столкнулись с <strong>доброкачественной гиперплазией предстательной железы (ДГПЖ)</strong>. Хотя эти симптомы встречаются часто, они могут значительно ухудшить качество вашей жизни. К счастью, жителям и гостям Чонбури теперь доступна <strong>передовая лазерная хирургия HoLEP при увеличении предстательной железы (ДГПЖ) в Паттайе, которую проводит доктор Нити Наванимиткул</strong>. Это предлагает постоянное и минимально инвазивное решение.
  </p>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Сотрудничество экспертов для лучшего здоровья простаты</h3>
  <p>
    Здоровье и уверенность возвращаются благодаря индивидуальному уходу. Доктор Тев Ахо (Dr. Tev Aho), доктор медицинских наук, хирург-уролог-консультант больницы Кембриджского университета и международный пионер в области хирургии HoLEP, тесно сотрудничает с <strong>доктором Нити Наванимиткул</strong>. Это гарантирует, что пациенты в Паттайе получают лечение, соответствующее самым высоким мировым стандартам точности и безопасности.
  </p>

  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Advanced HoLEP.webp" alt="Иллюстрация передовой хирургии HoLEP" class="w-full h-full object-cover" />
    <div class="absolute inset-0 bg-linear-to-t from-slate-900/60 to-transparent"></div>
    <div class="absolute bottom-6 left-6">
      <p class="text-white text-sm font-bold uppercase tracking-widest">Мировой золотой стандарт: технология HoLEP</p>
    </div>
  </div>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Что такое HoLEP? Золотой стандарт лечения ДГПЖ</h3>
  <p>
    <strong>HoLEP (гольмиевая лазерная энуклеация предстательной железы)</strong> — это передовая процедура, в которой используется энергия лазера для точного удаления всей обструктивной части простаты. В отличие от традиционных методов, HoLEP эффективен для предстательной железы любого размера и предлагает постоянное решение <strong>«раз и навсегда»</strong>.
  </p>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Почему стоит выбрать HoLEP вместо традиционной хирургии?</h3>
  <div class="overflow-x-auto my-8 rounded-2xl border border-white/10">
    <table class="w-full text-left border-collapse">
      <thead>
        <tr class="bg-white/5">
          <th class="p-4 font-bold text-white border-b border-white/10 text-sm uppercase">Характеристика</th>
          <th class="p-4 font-bold text-cyan-400 border-b border-white/10 text-sm uppercase">Лазерная хирургия HoLEP</th>
          <th class="p-4 font-bold text-slate-400 border-b border-white/10 text-sm uppercase">Традиционная ТУРП</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-white/5">
        <tr>
          <td class="p-4 text-white font-medium text-sm">Целевой размер простаты</td>
          <td class="p-4 text-slate-300 text-sm italic">Любые размеры (даже очень большие)</td>
          <td class="p-4 text-slate-400 text-sm italic">Только маленькие и средние</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">Кровопотеря</td>
          <td class="p-4 text-slate-300 text-sm italic">Минимальная (лазер герметизирует сосуды)</td>
          <td class="p-4 text-slate-400 text-sm italic">Более высокий риск кровотечения</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">Пребывание в больнице</td>
          <td class="p-4 text-slate-300 text-sm italic">Короткое (обычно 1 ночь)</td>
          <td class="p-4 text-slate-400 text-sm italic">Более длительное (3-4 дня)</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">Время катетеризации</td>
          <td class="p-4 text-slate-300 text-sm italic">12-24 часа</td>
          <td class="p-4 text-slate-400 text-sm italic">72+ часа</td>
        </tr>
        <tr>
          <td class="p-4 text-white font-medium text-sm">Частота повторного лечения</td>
          <td class="p-4 text-slate-300 text-sm italic">Почти 0% (навсегда)</td>
          <td class="p-4 text-slate-400 text-sm italic">До 15% в течение 10 лет</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="text-2xl font-black text-white uppercase mt-12 mb-4">Основные клинические преимущества:</h3>
  <ul class="space-y-3 list-none pl-0">
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Более быстрое восстановление:</strong> Большинство пациентов возвращаются к нормальной активности в течение нескольких дней.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Сохранение половой функции:</strong> Нет повышенного риска ЭД по сравнению с другими методами.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Немедленное облегчение симптомов:</strong> Значительное улучшение потока мочи с первого дня.</span>
    </li>
  </ul>
</div>
`
},
  {
    id: 4,
    slug: 'urology-insights-national-summit',
    day: '20',
    month: 'APR',
    year: '2026',
    title: "Shares Urology Insights at National Summit",
    titleTH: "สุดยอดการประชุมระดับชาติเพื่อแบ่งปันข้อมูลเชิงลึกด้านระบบทางเดินปัสสาวะ",
    titleAR: "مشاركة الرؤى في مؤتمر جراحة المسالك البولية الوطني",
    titleRU: "Делится опытом в области урологии на Национальном саммите",
    subtitle: "Dr. Niti Navanimitkul Highlights Innovative Patient Outcomes at National Urology Summit",
    subtitleTH: "นพ.นิธิ นาวานิมิตกุล ชูแนวคิดยกระดับผลลัพธ์การรักษาผู้ป่วย ในงานประชุมศัลยแพทย์ทางเดินปัสสาวะระดับชาติ",
    subtitleAR: "د. نيثي نافانيتكول يسلط الضوء على نتائج المرضى المبتكرة في القمة الوطنية لطب المسالك البولية",
    subtitleRU: "Доктор Нити Наванимиткул освещает инновационные результаты лечения пациентов на Национальном саммите по урологии",
    description: "Dr. Niti Navanimitkul Highlights Innovative Patient Outcomes at National Urology Summit",
    descriptionTH: "นพ.นิธิ นาวานิมิตกุล ชูแนวคิดยกระดับผลลัพธ์การรักษาผู้ป่วย ในงานประชุมศัลยแพทย์ทางเดินปัสสาวะระดับชาติ",
    descriptionAR: "د. نيثي نافانيتكول يسلط الضوء على نتائج المرضى المبتكرة في القمة الوطنية لطب المسالك البولية",
    descriptionRU: "Доктор Нити Наванимиткул освещает инновационные результаты лечения пациентов на Национальном саммите по урологии",
    location: "Bangsaen Circuit & Activity Area",
    locationTH: "บางแสน เซอร์กิต และพื้นที่กิจกรรม",
    locationAR: "حلبة ومنطقة أنشطة بانجسين",
    locationRU: "Трасса и зона активности Бангсаен",
    time: "08:00 - 15:00",
    image: "/assets/image/expertise/Shares Urology Insights.webp",
    category: "ACTIVITY",
    content: `
      <div class="space-y-6 text-slate-300 text-left">
        <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/Shares Urology Insights.webp" alt="Key Insights" class="w-full h-full object-cover" />
        </div>

        <p class="text-lg leading-relaxed">
          At the recent national urology summit, Dr. Niti Navanimitkul, a distinguished urologist, took center stage during a high-profile panel discussion titled ΓÇ£Beyond the Manual: Pearls, Pitfalls & Patient Outcomes.” As a leading voice in modern urology, Dr. Niti Navanimitkul shared critical insights derived from years of clinical excellence, contributing to the global dialogue on how to move beyond standard protocols to achieve superior medical results.
        </p>

        <div class="flex justify-center my-12">
          <div class="relative max-w-xl w-full rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
            <img src="/assets/image/expertise/Shares Urology Insights 2.webp" alt="Urology Insights" class="w-full h-auto object-contain" />
          </div>
        </div>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Key Insights Shared by Dr. Niti Navanimitkul</h3>
        <p>
          During the session, the discussion focused on the nuances of surgical precision and long-term recovery. Dr. Niti Navanimitkul emphasized several pillars of modern urological care:
        </p>
        <ul class="space-y-3 list-none pl-0">
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Optimizing Patient Outcomes:</strong> Moving beyond technical success to ensure functional recovery and long-term health.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Post-Treatment Management:</strong> Implementing advanced recovery protocols to minimize complications and enhance the quality of life.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Addressing Pitfalls:</strong> Identifying common clinical challenges and sharing "pearls" of wisdom to help peers navigate complex cases.</span>
          </li>
          <li class="flex items-start gap-3">
            <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
            <span><strong>Patient Satisfaction:</strong> Prioritizing clear communication and personalized care plans to meet individual patient needs.</span>
          </li>
        </ul>

        <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
          <img src="/assets/image/expertise/Shares Urology Insights 3.webp" alt="Commitment to Excellence" class="w-full h-full object-cover" />
        </div>

        <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">A Commitment to Excellence </h3>
        <p>
          The participation of Dr. Niti Navanimitkul in such a prestigious forum reinforces his position as a thought leader in the field. His expertise in post-treatment management and his dedication to patient-centric care continue to elevate the standards of urological practices, throughout the medical community in Thailand. 
        </p>
        <p>
          By integrating innovative techniques with a deep understanding of patient needs, Dr. Niti Navanimitkul remains at the forefront of advancing urological health and ensuring the best possible outcomes for every patient he treats.
        </p>
      </div>
    `,
    contentTH: `
<div class="space-y-6 text-slate-300 text-left">
  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Shares Urology Insights.webp" alt="Key Insights" class="w-full h-full object-cover" />
  </div>

  <p class="text-lg leading-relaxed">
    ในการประชุมสัมมนาด้านศัลยศาสตร์ทางเดินปัสสาวะระดับชาติที่ผ่านมา นพ.นิธิ นาวานิมิตกุล (Dr. Niti Navanimitkul) ผู้เชี่ยวชาญระดับแนวหน้า ได้รับเกียรติเข้าร่วมการอภิปรายในหัวข้อพิเศษ “Beyond the Manual: Pearls, Pitfalls & Patient Outcomes” (เหนือกว่าตำรา: เคล็ดลับ ข้อควรระวัง และผลลัพธ์การรักษาผู้ป่วย)
  </p>
  <p>
    ในฐานะแพทย์ผู้เชี่ยวชาญด้านทางเดินปัสสาวะ นพ.นิธิ นาวานิมิตกุล ได้ร่วมแบ่งปันประสบการณ์และข้อมูลเชิงลึกจากการรักษาจริง เพื่อยกระดับมาตรฐานการดูแลผู้ป่วยและผลักดันนวัตกรรมการรักษาให้ก้าวล้ำไปอีกขั้น
  </p>

  <div class="flex justify-center my-12">
    <div class="relative max-w-xl w-full rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
      <img src="/assets/image/expertise/Shares Urology Insights 2.webp" alt="Urology Insights" class="w-full h-auto object-contain" />
    </div>
  </div>

  <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">เจาะลึกมุมมองจาก นพ.นิธิ นาวานิมิตกุล เพื่อการรักษาที่มีประสิทธิภาพ</h3>
  <p>
    ในการเสวนาครั้งนี้ นพ.นิธิ นาวานิมิตกุล ได้ให้ความสำคัญกับหัวใจหลักของการรักษาทางเดินปัสสาวะในยุคใหม่ ดังนี้:
  </p>
  <ul class="space-y-3 list-none pl-0">
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>การเพิ่มประสิทธิภาพผลลัพธ์การรักษา (Optimizing Patient Outcomes):</strong> มุ่งเน้นการรักษาที่ไม่ได้ดูแค่ความสำเร็จทางเทคนิค แต่ต้องส่งผลดีต่อสุขภาพในระยะยาวของผู้ป่วย</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>การดูแลหลังการรักษา (Post-treatment Management):</strong> การวางแผนฟื้นฟูร่างกายอย่างเป็นระบบ เพื่อลดภาวะแทรกซ้อนและช่วยให้ผู้ป่วยกลับไปใช้ชีวิตปกติได้เร็วขึ้น</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>การจัดการปัญหาทางคลินิก (Addressing Pitfalls):</strong> การแชร์เทคนิคและประสบการณ์ "นอกตำรา" เพื่อช่วยให้ทีมแพทย์รับมือกับเคสที่ซับซ้อนได้อย่างแม่นยำ</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>ความพึงพอใจของผู้ป่วย (Patient Satisfaction):</strong> การสื่อสารที่ชัดเจนและการออกแบบการรักษาแบบเฉพาะบุคคล (Personalized Care) เพื่อตอบโจทย์ความต้องการของผู้ป่วยอย่างแท้จริง</span>
    </li>
  </ul>

  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Shares Urology Insights 3.webp" alt="Commitment to Excellence" class="w-full h-full object-cover" />
  </div>

  <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">ตอกย้ำความเป็นผู้นำด้านทางเดินปัสสาวะ </h3>
  <p>
    การเข้าร่วมงานระดับชาติของ นพ.นิธิ นาวานิมิตกุล ในครั้งนี้ เป็นเครื่องยืนยันถึงความมุ่งมั่นและความเป็นเลิศทางวิชาการ ที่ไม่หยุดนิ่งในการพัฒนาทักษะเพื่อมอบการรักษาที่ดีที่สุด 
  </p>
  <p>
    ด้วยความเชี่ยวชาญในการผสมผสานเทคโนโลยีทางการแพทย์เข้ากับความเข้าใจในตัวผู้ป่วย นพ.นิธิ นาวานิมิตกุล ยังคงเป็นกำลังสำคัญในการขับเคลื่อนวงการศัลยศาสตร์ทางเดินปัสสาวะในประเทศไทย เพื่อให้มั่นใจว่าผู้ป่วยทุกคนจะได้รับผลลัพธ์การรักษาที่ยอดเยี่ยมและปลอดภัยที่สุด
  </p>
</div>
    `,
      excerptAR: "د. نيثي يشارك رؤى قيمة في القمة الوطنية لطب المسالك البولية.",
      excerptRU: "Доктор Нити делится ценным опытом на Национальном саммите по урологии.",
      contentAR: `
<div class="space-y-6 text-slate-300">
  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Shares Urology Insights.webp" alt="Key Insights" class="w-full h-full object-cover" />
  </div>

  <p class="text-lg leading-relaxed">
    في القمة الوطنية الأخيرة لطب المسالك البولية، تصدر الدكتور نيثي نافانيتكول، طبيب المسالك البولية المتميز، مركز الاهتمام خلال حلقة نقاش رفيعة المستوى بعنوان "ما وراء الدليل: الجواهر، المزالق، ونتائج المرضى". كصوت رائد في طب المسالك البولية الحديث، شارك الدكتور نيثي نافانيتكول رؤى نقدية مستمدة من سنوات من التميز السريري، مساهماً في الحوار العالمي حول كيفية تجاوز البروتوكولات القياسية لتحقيق نتائج طبية فائقة.
  </p>

  <div class="flex justify-center my-12">
    <div class="relative max-w-xl w-full rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
      <img src="/assets/image/expertise/Shares Urology Insights 2.webp" alt="Urology Insights" class="w-full h-auto object-contain" />
    </div>
  </div>

  <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">الرؤى الرئيسية التي شاركها د. نيثي نافانيتكول</h3>
  <p>
    خلال الجلسة، ركزت المناقشة على الفروق الدقيقة في الدقة الجراحية والتعافي على المدى الطويل. أكد الدكتور نيثي نافانيتكول على العديد من ركائز الرعاية الحديثة للمسالك البولية:
  </p>
  <ul class="space-y-3 list-none pl-0">
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>تحسين نتائج المرضى:</strong> تجاوز النجاح التقني لضمان التعافي الوظيفي والصحة على المدى الطويل.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>إدارة ما بعد العلاج:</strong> تنفيذ بروتوكولات التعافي المتقدمة لتقليل المضاعفات وتعزيز جودة الحياة.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>معالجة المزالق:</strong> تحديد التحديات السريرية الشائعة ومشاركة "جواهر" الحكمة لمساعدة الزملاء على التعامل مع الحالات المعقدة.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>رضا المرضى:</strong> إعطاء الأولوية للتواصل الواضح وخطط الرعاية الشخصية لتلبية احتياجات المرضى الفردية.</span>
    </li>
  </ul>

  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Shares Urology Insights 3.webp" alt="Commitment to Excellence" class="w-full h-full object-cover" />
  </div>

  <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">الالتزام بالتميز</h3>
  <p>
    إن مشاركة الدكتور نيثي نافانيتكول في مثل هذا المنتدى المرموق تعزز مكانته كقائد فكري في هذا المجال. تستمر خبرته في إدارة ما بعد العلاج وتفانيه في الرعاية التي تركز على المريض في رفع معايير ممارسات المسالك البولية، في جميع أنحاء المجتمع الطبي في تايلاند.
  </p>
  <p>
    من خلال دمج التقنيات المبتكرة مع الفهم العميق لاحتياجات المرضى، يظل الدكتور نيثي نافانيتكول في طليعة النهوض بصحة المسالك البولية وضمان أفضل النتائج الممكنة لكل مريض يعالجه.
  </p>
</div>
`,
      contentRU: `
<div class="space-y-6 text-slate-300">
  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Shares Urology Insights.webp" alt="Ключевые идеи" class="w-full h-full object-cover" />
  </div>

  <p class="text-lg leading-relaxed">
    На недавнем национальном саммите по урологии доктор Нити Наванимиткул, выдающийся уролог, оказался в центре внимания во время громкой панельной дискуссии под названием «За рамками руководства: жемчужины, подводные камни и результаты лечения пациентов». Являясь ведущим голосом в современной урологии, доктор Нити Наванимиткул поделился важнейшими идеями, полученными за годы клинического опыта, внося свой вклад в глобальный диалог о том, как выйти за рамки стандартных протоколов для достижения превосходных медицинских результатов.
  </p>

  <div class="flex justify-center my-12">
    <div class="relative max-w-xl w-full rounded-4xl overflow-hidden border border-white/10 shadow-2xl">
      <img src="/assets/image/expertise/Shares Urology Insights 2.webp" alt="Идеи в области урологии" class="w-full h-auto object-contain" />
    </div>
  </div>

  <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Ключевые идеи, которыми поделился доктор Нити Наванимиткул</h3>
  <p>
    В ходе сессии обсуждение было сосредоточено на нюансах хирургической точности и долгосрочного восстановления. Доктор Нити Наванимиткул выделил несколько столпов современного урологического ухода:
  </p>
  <ul class="space-y-3 list-none pl-0">
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Оптимизация результатов лечения пациентов:</strong> Выход за рамки технического успеха для обеспечения функционального восстановления и долгосрочного здоровья.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Управление после лечения:</strong> Внедрение передовых протоколов восстановления для минимизации осложнений и повышения качества жизни.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Устранение подводных камней:</strong> Выявление общих клинических проблем и обмен «жемчужинами» мудрости, чтобы помочь коллегам справляться со сложными случаями.</span>
    </li>
    <li class="flex items-start gap-3">
      <span class="mt-1.5 w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_10px_rgba(6,182,212,0.5)] shrink-0"></span>
      <span><strong>Удовлетворенность пациентов:</strong> Приоритет четкого общения и индивидуальных планов ухода для удовлетворения индивидуальных потребностей пациентов.</span>
    </li>
  </ul>

  <div class="relative w-full h-[400px] rounded-3xl overflow-hidden my-12 border border-white/10 shadow-2xl">
    <img src="/assets/image/expertise/Shares Urology Insights 3.webp" alt="Стремление к совершенству" class="w-full h-full object-cover" />
  </div>

  <h3 class="text-xl font-black text-white uppercase mt-12 mb-4">Стремление к совершенству</h3>
  <p>
    Участие доктора Нити Наванимиткул в таком престижном форуме укрепляет его позицию идейного лидера в этой области. Его опыт в области лечения после выписки и приверженность ориентированному на пациента уходу продолжают повышать стандарты урологической практики во всем медицинском сообществе Таиланда.
  </p>
  <p>
    Интегрируя инновационные методы с глубоким пониманием потребностей пациентов, доктор Нити Наванимиткул остается в авангарде развития урологического здоровья и обеспечения наилучших возможных результатов для каждого пациента, которого он лечит.
  </p>
</div>
`
},
];


export const languages: LanguageOption[] = [
  { code: 'EN', flag: 'https://flagcdn.com/w40/gb.png', label: 'English' },
  { code: 'TH', flag: 'https://flagcdn.com/w40/th.png', label: 'Thai' },
  { code: 'RU', flag: 'https://flagcdn.com/w40/ru.png', label: 'Russian' },
  { code: 'CN', flag: 'https://flagcdn.com/w40/cn.png', label: 'Chinese' },
  { code: 'AR', flag: 'https://flagcdn.com/w40/sa.png', label: 'Arabic' }
];

// Google Maps Reviews Data
export const GOOGLE_REVIEWS: GoogleReview[] = [
  {
    id: 1,
    name: 'David Anderson',
    avatar: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
    date: '2 weeks ago',
    text: 'Outstanding professionalism and care. Dr. Siwat explained everything thoroughly and the Li-ESWT treatment exceeded my expectations. Results are life-changing. Highly recommend this clinic for men\'s health.',
    verified: true
  },
  {
    id: 2,
    name: 'Michael Chen',
    avatar: 'https://i.pravatar.cc/150?img=33',
    rating: 5,
    date: '1 month ago',
    text: 'Best urology clinic in Thailand. State-of-the-art facility, expert doctors, and complete privacy. The staff speaks excellent English and made me feel comfortable throughout. Worth every baht.',
    verified: true
  },
  {
    id: 3,
    name: 'James Wilson',
    avatar: 'https://i.pravatar.cc/150?img=52',
    rating: 5,
    date: '3 weeks ago',
    text: 'Had the ReZŪM procedure for BPH. Quick, painless, and I\'m already seeing improvement. Dr. Siwat is a true expert. The clinic is modern and clean. Can\'t thank them enough.',
    verified: true
  },
  {
    id: 4,
    name: 'Robert Thompson',
    avatar: 'https://i.pravatar.cc/150?img=68',
    rating: 5,
    date: '2 months ago',
    text: 'After trying everything for ED, Focus Shockwave therapy finally worked. Non-invasive, no side effects, and the results are amazing. M-Trust Urology Clinic changed my life.',
    verified: true
  },
  {
    id: 5,
    name: 'Ahmed Al-Rashid',
    avatar: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
    date: '1 week ago',
    text: 'Excellent service from consultation to treatment. The doctors are knowledgeable, compassionate, and use the latest technology. Privacy is top-notch. Highly recommended for any men\'s health concerns.',
    verified: true
  },
  {
    id: 6,
    name: 'Thomas Brown',
    avatar: 'https://i.pravatar.cc/150?img=56',
    rating: 5,
    date: '3 months ago',
    text: 'Professional, discreet, and effective. Got my testosterone therapy properly managed here after struggling elsewhere. The difference in my quality of life is incredible. Thank you M-Trust!',
    verified: true
  }
];

// Why Choose Us Data
export const WHY_US_ITEMS: WhyUsItem[] = [
  {
    icon: GraduationCap,
    title: 'Board-Certified Experts',
    description: 'Our urologists are internationally trained with advanced fellowships from leading institutions. Decades of combined experience in men\'s health and urology.',
    highlight: '20+ Years'
  },
  {
    icon: Zap,
    title: 'Cutting-Edge Technology',
    description: 'We invest in the latest medical equipment: Focus Shockwave, ReZŪM, UroLift, Holmium Laser, and advanced diagnostic tools for superior outcomes.',
    highlight: 'Latest Tech'
  },
  {
    icon: ShieldCheck,
    title: '100% Privacy & Discretion',
    description: 'Complete confidentiality guaranteed. Private consultation rooms, discreet billing, and a judgment-free environment where your privacy is paramount.',
    highlight: 'Confidential'
  },
  {
    icon: Trophy,
    title: 'Proven Results',
    description: 'Over 5,000 successful treatments with 95%+ patient satisfaction. Evidence-based protocols backed by clinical research and real-world results.',
    highlight: '95% Success'
  },
  {
    icon: HeartPulse,
    title: 'Personalized Care',
    description: 'Every patient receives a customized treatment plan tailored to their unique condition, lifestyle, and goals. No one-size-fits-all approach.',
    highlight: '1-on-1 Care'
  },
  {
    icon: Globe,
    title: 'International Standards',
    description: 'Multilingual staff (English, Thai, Russian, Chinese, Arabic), international insurance accepted, and medical tourism assistance available.',
    highlight: '5 Languages'
  }
];


export const GOOGLE_PLACE_ID = '0xddcef2f35c2a00ee'; // M-Trust Urology Clinic CID
export const GOOGLE_MAPS_URL = 'https://maps.app.goo.gl/hVSWsjBRKSrEE3Xt9';
export const GOOGLE_AVERAGE_RATING = 4.9;
export const GOOGLE_REVIEW_COUNT = 127;


