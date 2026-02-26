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
  tagline: string;
  description: string;
  heroImage: string;
  whatIsIt?: { title: string; description: string; image?: string };
  mechanismImageAspectRatio?: string;
  descriptionImage?: string;
  video?: { id: string; title: string } | null;
  stats?: ServiceStat[];
  benefits: ServiceBenefit[];
  comparison?: ComparisonData;
  candidates?: string[];
  safety?: { title: string; content: string; icon: LucideIcon };
  timeline?: TimelineData;
  testPanels?: { title: string; items: string[]; icon: LucideIcon }[];
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
  procedure: ProcedureStep[];
  faq: FaqItem[];
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
  place: string;
}

export interface AwardData {
  year: string;
  title: string;
  issuer: string;
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
  role: string;
  image: string;
  expert: string;
  hospital?: string;
  email?: string;
  website?: string;
  tagline?: string;
  bio: string;
  specialties: string[];
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
    items?: string[];
    image?: string;
    images?: string[];
    caption?: string;
  }[];
  specializedFocus?: string;
  surgicalExcellence?: string;
  hideTestimonials?: boolean;
  slug?: string;
}

export interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  image: string;
  content?: string; // HTML string for rich content
}

export interface EventData {
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
    tagline: 'The Future of ED Treatment: Regenerate, Restore, Perform.',
    whatIsIt: {
      title: 'What is Focus Shockwave (Li-ESWT)?',
      description: "Linear Focus Shockwave Therapy (Li-ESWT) is a revolutionary, non-invasive treatment for Erectile Dysfunction (ED). Unlike radial shockwaves that only reach the surface, **Linear Focus Shockwave** delivers high-frequency low-intensity acoustic waves deep into the penile tissue. This precise energy triggers a biological healing response, stimulating the growth of new blood vessels and rejuvenating existing ones without needles, surgery, or medication.",
      image: '/assets/image/services section/focus shockwave-p1/What is Focus Shockwave (Li-ESWT).webp'
    },
    description: "Our FDA-cleared technology utilizes **Low-Intensity Extracorporeal Shockwave Therapy (Li-ESWT)** to target the root cause of ED: poor blood flow. \n\n**The Clinical Mechanism of Action:**\n\n1. **Angiogenesis (New Vessel Formation):** The acoustic waves create micro-trauma at the cellular level, stimulating the release of angiogenic growth factors (e.g., VEGF, eNOS, PCNA). This process leads to the formation of new, healthy blood vessels, significantly increasing blood supply to the erectile tissue.\n\n2. **Breakdown of Micro-Plaque:** The focused energy helps dissolve micro-calcifications in existing blood vessels, clearing blockages that restrict blood flow.\n\n3. **Tissue Regeneration:** Li-ESWT promotes the recruitment of endogenous stem cells and rejuvenates nerve tissue, enhancing penile sensitivity and overall function.\n\nThe result is a long-term restoration of natural erectile function, allowing for spontaneous erections and improved sexual performance.",
    heroImage: '/assets/image/services section/focus shockwave-p1/focus shockwave hero.webp',
    descriptionImage: '/assets/image/services section/focus shockwave-p1/focus shockwave clinical mechanism.webp',
    video: { id: 'JmU9Wz5UARA', title: 'Mechanism of Action: Li-ESWT' },
    stats: [
      { label: "Clinical Success", value: "85%+", icon: Trophy },
      { label: "Treatment Time", value: "20-30 Mins", icon: Timer },
      { label: "Downtime", value: "0 Days", icon: Activity },
      { label: "Result Duration", value: "2 Years", icon: Calendar }
    ],
    benefits: [
      { title: 'Curative Approach', desc: 'Treats the root cause (blood flow), not just symptoms.', icon: Activity },
      { title: '100% Non-Invasive', desc: 'No needles, no surgery, no medication required.', icon: ShieldCheck },
      { title: 'Painless', desc: 'Pain-free treatment with no downtime. Lunch-break procedure.', icon: SmileIcon as any }, // Cast to any to avoid type mismatch with LucideIcon
      { title: 'Long-Term Results', desc: 'Effects can last 2+ years with maintenance.', icon: InfinityIcon as any }
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
      { step: '02', title: 'Application', desc: 'Gel is applied. The focus head delivers 10,000 shocks precisely.' },
      { step: '03', title: 'Complete', desc: 'Session ends in 20-30 mins. Resume normal activity immediately.' },
      { step: '04', title: 'Repeat', desc: 'Standard protocol: 3 sessions (1 time per week).' }
    ],
    faq: [
      { q: "How is Focus Shockwave better than Radial?", a: "Focus waves travel deeper and deliver energy exactly to the cavernous tissue to grow blood vessels. Radial waves only hit the skin surface and are meant for muscle pain, not ED cure." },
      { q: "When will I see results?", a: "Many patients report improvement after the 3rd session (Week 2-3), with full benefits appearing 1-3 months after completing the course." },
      { q: "Is it painful?", a: "Not at all. It feels like a light tapping or vibration. No anesthesia is needed." }
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
    tagline: 'Advanced Urological PRP: Treat Erectile Dysfunction & Restore Sexual Performance.',
    whatIsIt: {
      title: 'What is PRP for ED?',
      description: "Platelet-Rich Plasma (PRP) Therapy is a cutting-edge regenerative treatment that harnesses the natural healing power of your own blood. By concentrating platelets—rich in bioactive proteins and growth factors—PRP therapy stimulates the body's repair mechanisms to rejuvenate penile tissue, enhance blood vessel formation, and restore sexual function naturally, without the need for synthetic drugs or surgery.",
      image: '/assets/image/services section/prp for ed/what is prp for ed.webp'
    },
    mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "PRP therapy functions by delivering a concentrated surge of specific growth factors directly into the penile tissue, triggering a cascade of biological regeneration.\n\n**The Clinical Mechanism of Action:**\n\n1. **Growth Factor Release:** Upon injection, platelets release alpha granules containing potent growth factors such as **VEGF** (Vascular Endothelial Growth Factor), **PDGF** (Platelet-Derived Growth Factor), and **TGF-β**. These proteins act as signaling molecules to initiate tissue repair.\n\n2. **Angiogenesis & Neovascularization:** The released growth factors stimulate the formation of new blood vessels and repair existing ones. This improved vascularity ensures sustained blood flow to the erectile tissue, which is essential for maintaining strong erections.\n\n3. **Cellular Regeneration & Collagen Synthesis:** PRP activates fibroblasts to produce new collagen and elastin, strengthening the penile structural integrity. It also recruits mesenchymal stem cells to the area, further accelerating tissue regeneration and rejuvenation.\n\n4. **Neurogenesis (Nerve Repair):** Research indicates PRP can aid in the repair of damaged nerve tissues, potentially enhancing penile sensitivity and neural response.",
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
    stats: [
      { label: "Success Rate", value: "70%+", icon: Trophy },
      { label: "Session Time", value: "30 Mins", icon: Timer },
      { label: "Recovery", value: "1 Day", icon: Activity },
      { label: "Duration", value: "12-18 Mo", icon: Calendar }
    ],
    benefits: [
      { title: '100% Natural', desc: 'Uses your own platelets—no foreign substances or chemicals.', icon: Droplets },
      { title: 'Tissue Regeneration', desc: 'Stimulates growth factors to repair and rebuild erectile tissue.', icon: Activity },
      { title: 'Minimal Downtime', desc: 'Quick procedure with same-day return to normal activities.', icon: Timer },
      { title: 'Synergistic', desc: 'Can be combined with Shockwave therapy for enhanced results.', icon: Zap }
    ],
    candidates: [
      "Men with mild to moderate vasculogenic ED.",
      "Patients seeking a natural, drug-free regenerative option.",
      "Those who want to enhance results from Shockwave therapy.",
      "Men with Peyronie's Disease seeking tissue healing."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "PRP is extremely safe as it uses your own blood. Side effects are minimal—mild soreness or bruising at injection sites, which resolves within 24-48 hours. No risk of allergic reactions or rejection.",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Blood Draw', desc: 'Small blood sample collected from your arm (similar to routine lab work).' },
      { step: '02', title: 'Centrifuge', desc: 'Blood is spun to concentrate platelets with growth factors.' },
      { step: '03', title: 'Injection', desc: 'PRP injected into specific areas of the penis using fine needles.' },
      { step: '04', title: 'Recovery', desc: 'Resume activities immediately. Full effects develop over 4-8 weeks.' }
    ],
    faq: [
      { q: "Is PRP painful?", a: "Local anesthetic cream is applied, so discomfort is minimal. Most men report only slight pressure during injection." },
      { q: "How many sessions do I need?", a: "Typically 1-3 sessions spaced 4-6 weeks apart for optimal results." },
      { q: "Can I combine PRP with Shockwave?", a: "Absolutely. Many clinics offer combined protocols for synergistic regenerative effects." }
    ],
    hidePricing: true
  },
  'Stem Cell for ED': {
    title: 'Stem Cell Therapy for Erectile Dysfunction',
    tagline: 'Advanced Regenerative Medicine: Restore Function at the Cellular Level.',
    whatIsIt: {
      title: 'What is Stem Cell Therapy for ED?',
      description: "Stem Cell Therapy for Erectile Dysfunction is the pinnacle of regenerative medicine. It utilizes Mesenchymal Stem Cells (MSCs)—potent biological shapeshifters—obtained from your own body (autologous) or ethically sourced umbilical cord tissue. These cells have the unique ability to differentiate into various cell types, directly repairing damaged tissues, blood vessels, and nerves to reverse the root causes of ED.",
      image: '/assets/image/services section/stem cell for ed/what is stem cell therapy for ed.webp'
    },
    mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "Stem Cell Therapy goes beyond symptom management to structurally repair the penile tissue. The regenerative process involves sophisticated biological mechanisms:\n\n**The Clinical Mechanism of Action:**\n\n1. **Differentiation & Tissue Replacement:** Mesenchymal Stem Cells (MSCs) are multipotent, meaning they can transform into specific cell types needed for repair. In the penis, they differentiate into endothelial cells (lining blood vessels), smooth muscle cells, and cavernous tissue cells, physically replacing damaged structures.\n\n2. **Potent Paracrine Signaling:** The injected stem cells release a powerful cocktail of trophic factors and cytokines. This 'paracrine effect' signals the body's own dormant repair cells to wake up and start healing the surrounding tissue.\n\n3. **Angiogenesis (New Vessel Formation):** Stem cells secrete high levels of VEGF (Vascular Endothelial Growth Factor), driving the creation of extensive new capillary networks. This restores healthy blood flow, which is critical for achieving and maintaining rigid erections.\n\n4. **Neuroregeneration (Nerve Repair):** Unlike other treatments, stem cells have neurotrophic properties that can regenerate damaged nerves (e.g., from prostate surgery or diabetes), restoring penile sensitivity and the neural pathways required for erection.",
    heroImage: '/assets/image/services section/stem cell for ed/stem cell hero.webp',
    descriptionImage: '/assets/image/services section/stem cell for ed/stem cell clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Efficacy", value: "75%+", icon: Trophy },
      { label: "Procedure", value: "45 Mins", icon: Timer },
      { label: "Downtime", value: "1-2 Days", icon: Activity },
      { label: "Effect Duration", value: "18-24 Mo", icon: Calendar }
    ],
    benefits: [
      { title: 'Neuroregeneration', desc: 'Repairs nerve damage often underlying severe ED.', icon: Zap },
      { title: 'Vascular Repair', desc: 'Creates new blood vessels to improve blood flow permanently.', icon: HeartPulse },
      { title: 'Severe ED Solution', desc: 'Effective even when pills and other treatments fail.', icon: Trophy },
      { title: 'Long-Lasting', desc: 'Results can persist for 18-24 months or longer.', icon: Infinity as any }
    ],
    candidates: [
      "Men with moderate to severe ED who don't respond to conventional therapy.",
      "Post-prostatectomy patients with nerve damage.",
      "Diabetic patients with vascular and nerve impairment.",
      "Those seeking the most advanced regenerative option available."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "Stem cell therapy using autologous (your own) or ethically sourced mesenchymal stem cells is very safe. Minimal risk of immune reaction. Minor swelling or soreness may occur but resolves quickly.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Treatment Timeline",
      steps: [
        { time: "Week 1-4", title: "Cell Integration", desc: "Stem cells begin integrating into tissue and secreting growth factors." },
        { time: "Month 2-3", title: "Tissue Remodeling", desc: "New blood vessels and nerves form. Gradual improvement in function." },
        { time: "Month 4+", title: "Peak Results", desc: "Maximum benefit achieved. Erectile function significantly restored." }
      ]
    },
    procedure: [
      { step: '01', title: 'Procurement & Quality Control', desc: 'Certified Mesenchymal Stem Cells (MSCs) are sourced from leading biotech labs to ensure the highest potency, sterility, and therapeutic grade.' },
      { step: '02', title: 'Safety & Sensitivity Testing', desc: 'Prior to the main procedure, we perform a mandatory allergy/sensitivity test to ensure zero adverse reactions and complete patient safety.' },
      { step: '03', title: 'Precision Penile Injection', desc: 'Under local anesthesia, the activated stem cells are precisely injected into the penile tissue to trigger vascular and nerve regeneration.' },
      { step: '04', title: 'Rapid Recovery', desc: 'A quick recovery phase (24-48 hours) follows, with the biological repair process continuing to enhance function over 3-6 months.' }
    ],
    faq: [
      { q: "How is this different from PRP?", a: "Stem cells can differentiate into multiple cell types (nerves, blood vessels, muscle), while PRP primarily provides growth factors. Stem cell therapy is more comprehensive for severe ED." },
      { q: "Is it FDA-approved?", a: "Autologous stem cell therapies (using your own cells) are legal and widely practiced. Efficacy continues to be studied in clinical trials." },
      { q: "How long until I see results?", a: "Initial improvements may appear at 4-8 weeks, with peak benefits at 3-6 months." }
    ]
  },
  'Penile Implant': {
    title: 'Penile Prosthesis (Implant) Surgery',
    tagline: 'The Definitive Solution for Severe ED: On-Demand, Reliable Erections.',
    whatIsIt: {
      title: 'What is a Penile Implant?',
      description: "A Penile Implant (or Penile Prosthesis) is a medical device surgically implanted into the penis to allow men with severe Erectile Dysfunction (ED) to achieve a rigid erection suitable for sexual intercourse. It is considered the gold standard treatment for men who do not respond to oral medications or injection therapies, offering a permanent, reliable solution that restores spontaneity and sexual confidence.",
      image: '/assets/image/services section/penile implant/What is a Penile Implant.webp'
    },
    description: "The Penile Implant works by replacing the damaged erectile tissue with cylinders that simulate a natural erection. There are two main types, each with a distinct mechanism:\n\n**The Clinical Mechanism of Action:**\n\n1. **Inflatable Penile Implant (3-Piece):** This mimics a natural erection most closely. It consists of fluid-filled cylinders in the penis, a pump in the scrotum, and a reservoir in the abdomen. Squeezing the pump transfers saline fluid into the cylinders, creating a rigid erection. Pressing a release valve drains the fluid back, returning the penis to a flaccid state.\n\n2. **Malleable (Semi-Rigid) Implant:** This device consists of two bendable rods implanted in the penile shaft. The penis remains semi-rigid at all times but can be manually positioned downwards for concealment or upwards for sexual activity. It is simpler to use and has fewer mechanical parts.\n\n**Why It Works:** Unlike pills that rely on blood flow, implants provide **mechanical rigidity**, guaranteeing an erection 100% of the time, regardless of vascular or nerve health.",
    heroImage: '/assets/image/services section/penile implant menu.webp',
    descriptionImage: '/assets/image/services section/penile implant/penile implant Clinical Mechanism.webp',
    video: { id: 'hfEGF_yT5sM', title: 'Penile Implant: How It Works' },
    stats: [
      { label: "Satisfaction", value: "95%+", icon: Trophy },
      { label: "Surgery Time", value: "60-90 Min", icon: Timer },
      { label: "Hospital Stay", value: "1 Day", icon: Activity },
      { label: "Longevity", value: "15-20 Yrs", icon: Calendar }
    ],
    benefits: [
      { title: 'Permanent Solution', desc: 'One-time surgery provides lifelong solution to ED.', icon: Infinity as any },
      { title: 'Natural Feel', desc: 'Modern 3-piece implants simulate natural rigidity and girth.', icon: CheckCircle2 },
      { title: 'On-Demand', desc: 'Achieve erection anytime, anywhere with discreet pump activation.', icon: Zap },
      { title: 'High Satisfaction', desc: '95%+ patient and partner satisfaction rates.', icon: Trophy }
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
    candidates: [
      "Men with severe ED who have failed all medical therapies.",
      "Post-prostatectomy patients with irreversible nerve damage.",
      "Those prioritizing reliability and on-demand performance.",
      "Men seeking a permanent, one-time solution."
    ],
    safety: {
      title: "Safety & Complications",
      content: "Modern implants have low complication rates (<5%). Risks include infection (1-3%), mechanical failure (rare with current devices), and erosion (very rare). Surgeons with high case volumes have the best outcomes.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Recovery & Activation",
      steps: [
        { time: "Week 1-2", title: "Healing", desc: "Initial healing of incisions. Manageable discomfort with medication." },
        { time: "Week 4-6", title: "Activation", desc: "First in-office training session to learn how to operate the device." },
        { time: "Month 3+", title: "Full Confidence", desc: "Complete comfort using the device. Spontaneity restored." }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'General or spinal anesthesia. Small incision made (scrotal or infrapubic).' },
      { step: '02', title: 'Implantation', desc: 'Cylinders placed in penile shaft, pump in scrotum, reservoir in abdomen.' },
      { step: '03', title: 'Testing', desc: 'Device tested intraoperatively to ensure proper function.' },
      { step: '04', title: 'Recovery', desc: 'Overnight stay. Activate device after 4-6 weeks of healing.' }
    ],
    faq: [
      { q: "Will it look natural?", a: "Yes. When deflated, 3-piece implants are virtually undetectable. Partners often can't tell." },
      { q: "Can I still orgasm and ejaculate?", a: "Absolutely. Implants restore rigidity only—sensation, orgasm, and ejaculation are unaffected." },
      { q: "How long does it last?", a: "Modern implants typically last 15-20 years. Replacements are possible if needed." }
    ]
  },
  'Dorsal Neurectomy': {
    title: 'Dorsal Neurectomy for Premature Ejaculation',
    tagline: 'Surgical Precision to Extend Performance and Restore Control.',
    whatIsIt: {
      title: 'What is Dorsal Neurectomy?',
      description: "Dorsal Neurectomy (DN) is a specialized procedure widely recognized as the most effective permanent treatment for Primary Premature Ejaculation (PPE). It addresses the root cause of PE—penile hypersensitivity—by recalibrating the sensory nerves, allowing men to significantly extend their intravaginal ejaculatory latency time (IELT) and regain control over their sexual performance.",
      image: '/assets/image/services section/dorsal neurectomy/What is Dorsal Neurectomy.webp'
    },
    // mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "This procedure operates on a neurological level to modulate the ejaculatory reflex. It is not about reducing pleasure, but about regulating intensity.\n\n**The Clinical Mechanism of Action:**\n\n1. **Targeted Nerve Identification and Selective Desensitization**: The surgeon isolates the dorsal nerve bundle to precisely identify the specific branches causing hypersensitivity. Using precision instruments, a calculated percentage of these peripheral nerve fibers is then selectively divided, which effectively reduces the overwhelming sensory input responsible for triggering the rapid ejaculatory reflex.\n\n2. **Reflex Threshold Elevation:** By moderating the sensory signals, the biological 'trigger point' for ejaculation is raised. This means it takes more stimulation and time to reach the point of no return.\n\n3. **Preservation of Function:** Crucially, the main nerve trunks are left intact. This ensures that tactile sensation, erection quality, and the ability to feel pleasure and orgasm are fully preserved—only the *hypersensitivity* is eliminated.",
    heroImage: '/assets/image/services section/dorsal neurectomy/dorsal neurectomy hero.webp',
    descriptionImage: '/assets/image/services section/dorsal neurectomy/dosal neurectomy clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Success Rate", value: "80%+", icon: Trophy },
      { label: "Surgery Time", value: "45-60 Min", icon: Timer },
      { label: "Recovery", value: "2-3 Weeks", icon: Activity },
      { label: "Effect", value: "Permanent", icon: Infinity as any }
    ],
    benefits: [
      { title: 'Permanent Fix', desc: 'One-time procedure eliminates the need for lifelong medication.', icon: Infinity as any },
      { title: 'Improves IELT', desc: 'Intravaginal Ejaculatory Latency Time increases 3-5x.', icon: Timer },
      { title: 'Preserves Sensation', desc: 'Selective nerve cutting maintains pleasurable sensation.', icon: HeartPulse },
      { title: 'High Satisfaction', desc: 'Over 80% of men report significant improvement.', icon: Trophy }
    ],
    candidates: [
      "Men with lifelong (primary) premature ejaculation.",
      "Those who have tried and failed behavioral/medication therapy.",
      "Patients seeking a permanent solution.",
      "Men with IELT (Intravaginal Ejaculatory Latency Time) under 1 minute."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "When performed by experienced surgeons, complications are rare. Potential risks include temporary numbness (usually resolves), infection (<2%), and in rare cases, erectile function changes. Most men retain normal sensation and function.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Recovery & Results",
      steps: [
        { time: "Week 1-2", title: "Initial Healing", desc: "Swelling subsides. Sexual activity restricted during healing." },
        { time: "Week 3-4", title: "Gradual Resumption", desc: "Sexual activity can be resumed. Sensitivity noticeably reduced." },
        { time: "Month 2-3", title: "Full Effect", desc: "Peak results achieved. IELT increases 3-5x baseline." }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia & Incision', desc: 'Local anesthesia is administered. A small surgical incision is made at the base of the penis near the pubic area.' },
      { step: '02', title: 'Nerve Identification', desc: 'The surgeon identifies and selectively cuts specific dorsal nerve branches to recalibrate sensitivity.' },
      { step: '03', title: 'Closure', desc: 'Incision closed with dissolvable sutures. Bandage applied.' },
      { step: '04', title: 'Follow-Up', desc: 'Healing monitored. Sexual activity resumes after 3-4 weeks.' }
    ],
    faq: [
      { q: "Will I lose sensation completely?", a: "No. Selective neurectomy targets only specific branches, preserving enough sensation for pleasure while reducing hypersensitivity." },
      { q: "Is the effect really permanent?", a: "Yes. Once nerves are cut, they don't regenerate in the same way. Results are long-lasting." },
      { q: "Can it affect my erections?", a: "Rarely. The dorsal nerves primarily control sensation, not erection. Experienced surgeons have very low rates of erectile issues." }
    ]
  },
  'Testosterone Replacement Therapy': {
    title: 'Testosterone Replacement Therapy (TRT)',
    tagline: 'Optimize Vitality: Medically Supervised Hormone Restoration.',
    whatIsIt: {
      title: 'What is Testosterone Replacement Therapy (TRT)?',
      description: "Testosterone Replacement Therapy (TRT) is a medically supervised treatment designed to restore testosterone levels in men suffering from hypogonadism (low testosterone). By replenishing this vital hormone to physiological levels, TRT reverses the symptoms of low T—such as fatigue, low libido, and muscle loss—helping men regain their vitality, mental clarity, and overall quality of life.",
      image: '/assets/image/services section/trt/what is testosterone replacement therapy.webp'
    },
    description: "TRT works by introducing bioidentical testosterone into the body to bypass the body's failing production mechanisms. The most common and effective method is via intramuscular injection.\n\n**The Clinical Mechanism of Action:**\n\n1. **Depot Formulation & Sustained Release:** Testosterone is typically administered as an esterified compound (e.g., Testosterone Cypionate or Enanthate) injected into the muscle. This creates a 'depot' or reservoir in the muscle tissue, from which testosterone is slowly hydrolyzed and released into the bloodstream over several days, ensuring stable hormone levels.\n\n2. **Receptor Binding & Activation:** Once in the bloodstream, free testosterone binds to Androgen Receptors (AR) located in various tissues throughout the body, including muscle cells, bone marrow, and the brain.\n\n3. **Genomic Action (Protein Synthesis):** The testosterone-receptor complex moves into the cell nucleus and binds to specific DNA sequences. This triggers the transcription of genes responsible for anabolic processes—stimulating protein synthesis for muscle growth, increasing red blood cell production (erythropoiesis) for better oxygenation, and enhancing neurotransmitter activity for improved mood and libido.\n\n4. **Systemic Optimization:** This cascade of biological events leads to increased lean muscle mass, reduced adipose tissue (fat), improved bone density, and a profound restoration of sexual function and energy.",
    heroImage: '/assets/image/services section/trt/trt hero.webp',
    descriptionImage: '/assets/image/services section/trt/trt clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Symptom Relief", value: "90%+", icon: Trophy },
      { label: "Time to Effect", value: "4-6 Weeks", icon: Timer },
      { label: "Treatment", value: "Ongoing", icon: Loop as any },
      { label: "Monitoring", value: "Every 3 Mo", icon: Calendar }
    ],
    benefits: [
      { title: 'Restored Libido', desc: 'Significant improvement in sexual desire and performance.', icon: HeartPulse },
      { title: 'Energy Boost', desc: 'Enhanced vitality, reduced fatigue, improved mental clarity.', icon: Zap },
      { title: 'Muscle & Bone', desc: 'Increased muscle mass and bone density with exercise.', icon: Activity },
      { title: 'Mood Improvement', desc: 'Better mood, reduced depression and irritability.', icon: Smile as any }
    ],
    candidates: [
      "Men with lab-confirmed low testosterone (total T <300 ng/dL).",
      "Symptoms: low libido, fatigue, muscle loss, depression, brain fog.",
      "Age 30+ with unexplained decline in vitality.",
      "Those seeking medically supervised hormone optimization."
    ],
    safety: {
      title: "Safety & Monitoring",
      content: "TRT is safe when properly monitored. Regular blood tests track testosterone, estradiol, hematocrit, and PSA. Risks include polycythemia (elevated red blood cells), acne, and potential cardiovascular considerations. Expert management minimizes risks.",
      icon: ShieldCheck
    },
    timeline: {
      title: "TRT Response Timeline",
      steps: [
        { time: "Week 2-4", title: "Initial Changes", desc: "Improved energy and mood. Sexual interest begins to return." },
        { time: "Week 6-12", title: "Physical Changes", desc: "Muscle mass increases, body fat decreases. Libido peaks." },
        { time: "Month 3+", title: "Sustained Benefits", desc: "Full hormonal optimization. Quality of life significantly improved." }
      ]
    },
    procedure: [
      { step: '01', title: 'Blood Testing', desc: 'Comprehensive panel: testosterone, LH, FSH, estradiol, PSA, CBC.' },
      { step: '02', title: 'Diagnosis', desc: 'Review results, symptoms, and medical history with specialist.' },
      { step: '03', title: 'Treatment Start', desc: 'Choose delivery method: injections, gels, or pellets. Begin protocol.' },
      { step: '04', title: 'Monitoring', desc: 'Regular follow-ups every 3-6 months to optimize dosage and monitor safety.' }
    ],
    faq: [
      { q: "Do I have to do TRT forever?", a: "TRT is typically lifelong. Stopping can return testosterone to low levels. However, some men use it cyclically under medical guidance." },
      { q: "Will TRT cause prostate cancer?", a: "No. Current evidence shows TRT does not cause prostate cancer, but it's monitored via PSA testing as a precaution." },
      { q: "What's the best delivery method?", a: "Injections (weekly/biweekly) are most reliable and affordable. Gels (daily) offer steady levels but cost more. Pellets (every 3-6 months) are convenient but invasive." }
    ]
  },
  'ReZum': {
    title: 'ReZŪM Water Vapor Therapy for BPH',
    tagline: 'Minimally Invasive BPH Treatment Using the Power of Steam.',
    whatIsIt: {
      title: 'What is ReZŪM Water Vapor Therapy?',
      description: "ReZŪM Water Vapor Therapy is a minimally invasive procedure that uses the natural thermal energy of sterile water vapor (steam) to treat Benign Prostatic Hyperplasia (BPH). It targets and removes the obstructive prostate tissue that causes urinary symptoms, providing a safe and effective alternative to daily medications or more invasive surgeries.",
      image: '/assets/image/services section/rezum/What is ReZŪM Water Vapor Therapy.webp'
    },
    description: "ReZŪM treats the enlarged prostate tissue using a precise delivery of thermal energy. The process is quick, effective, and preserves surrounding healthy tissue.\n\n**The Clinical Mechanism of Action:**\n\n1. **Quick Steam Delivery:** Sterile water vapor is injected directly into the prostate for just 9 seconds per treatment.\n\n2. **Targeted Tissue Removal:** The steam releases heat that instantly destroys the excess prostate tissue blocking the urethra, while safely preserving sexual function.\n\n3. **Natural Healing:** Over the next few weeks, your body naturally absorbs and clears away the treated tissue.\n\n4. **Fast BPH Relief:** As the prostate shrinks, the urethra opens up, significantly improving urinary flow and relieving bothersome urinary symptoms.",
    heroImage: '/assets/image/services section/rezum/rezum hero.webp',
    descriptionImage: '/assets/image/services section/rezum/rezum clinical mechanism.webp',
    video: { id: 'w3lctJx4D2w', title: 'ReZŪM Water Vapor Therapy Explained' },
    stats: [
      { label: "Success Rate", value: "90%+", icon: Trophy },
      { label: "Procedure Time", value: "15 Mins", icon: Timer },
      { label: "Recovery", value: "3-7 Days", icon: Activity },
      { label: "Result Duration", value: "5+ Years", icon: Calendar }
    ],
    benefits: [
      { title: 'Preserves Function', desc: 'No risk of erectile dysfunction or retrograde ejaculation.', icon: HeartPulse },
      { title: 'Rapid Relief', desc: 'Symptom improvement within 2 weeks, peak benefits at 3 months.', icon: Timer },
      { title: 'Maximum Comfort', desc: 'Performed under general anesthesia or deep sedation. Patients experience zero discomfort.', icon: ShieldCheck },
      { title: 'Durable Results', desc: 'Clinical data shows sustained results for 5+ years.', icon: Calendar }
    ],
    candidates: [
      "Men with moderate to severe BPH symptoms (frequent urination, weak stream).",
      "Prostate size 30-80cc.",
      "Those unwilling to take daily BPH medications.",
      "Men prioritizing sexual function preservation."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "ReZŪM is very safe. Temporary side effects include dysuria (painful urination), blood in urine, or urgency for 1-2 weeks. These resolve quickly. No permanent sexual side effects.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Recovery Timeline",
      steps: [
        { time: "Day 1-14", title: "Tissue Reabsorption", desc: "Dead tissue is absorbed. Temporary urinary symptoms may occur." },
        { time: "Week 2-4", title: "Symptom Improvement", desc: "Urinary flow begins to improve. Frequency decreases." },
        { time: "Month 3+", title: "Peak Results", desc: "Maximum benefit achieved. Sustained relief for years." }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'General anesthesia or deep sedation is administered to ensure complete patient comfort. The patient remains asleep throughout the procedure.' },
      { step: '02', title: 'Vapor Delivery', desc: 'Thin device inserted through urethra. Sterile steam injected into prostate.' },
      { step: '03', title: 'Cell Disruption', desc: 'Steam energy disrupts cells, which are naturally absorbed over weeks.' },
      { step: '04', title: 'Discharge', desc: 'Procedure ends. Catheter may be placed temporarily. Home same day.' }
    ],
    faq: [
      { q: "Is it painful?", a: "Not at all. Since the procedure is performed under general anesthesia or deep sedation, you will be asleep and feel no pain." },
      { q: "Will it affect my sex life?", a: "No. ReZŪM preserves erectile and ejaculatory function in the vast majority of men." },
      { q: "How long do results last?", a: "Clinical studies show durable benefits for at least 5 years." }
    ]
  },
  'UroLift': {
    title: 'UroLift® System for BPH',
    tagline: 'Lift Away Obstruction. Restore Flow. Preserve Function.',
    whatIsIt: {
      title: 'What is UroLift®?',
      description: "The UroLift® System is a minimally invasive treatment for Benign Prostatic Hyperplasia (BPH) that offers rapid symptom relief without cutting, heating, or removing prostate tissue. It uses tiny, permanent implants to lift and hold the enlarged prostate tissue so it no longer blocks the urethra, effectively 'opening the curtains' to restore normal urine flow.",
      image: '/assets/image/services section/urolift/What is UroLift.webp'
    },
    description: "UroLift is unique because it is the only BPH treatment that directly opens the urethra without ablating tissue. This mechanical approach ensures immediate results and zero risk to sexual function.\n\n**The Clinical Mechanism of Action:**\n\n1. **Transurethral Access:** The UroLift delivery device is inserted through the obstructed urethra to reach the enlarged prostate lobes. No incisions are made.\n\n2. **Mechanical Compression (Lifting):** The device compresses the lateral lobe of the prostate, pushing it away from the urethral channel. This creates an immediate opening.\n\n3. **Permanent Implantation:** A small, permanent UroLift implant is deployed. This implant acts like a suture or a 'curtain tie-back,' holding the prostate tissue in its compressed position.\n\n4. **Unobstructed Flow:** This process is repeated on each side (typically 4-6 implants total). The result is a visibly open continuous channel from the bladder neck to the verumontanum, allowing urine to flow freely again immediately after the procedure.",
    heroImage: '/assets/image/services section/urolift/urolift hero.webp',
    descriptionImage: '/assets/image/services section/urolift/urolift Clinical Mechanism.webp',
    video: { id: 'L-DXkEQaV1M', title: 'UroLift Procedure Animation' },
    stats: [
      { label: "Symptom Relief", value: "95%+", icon: Trophy },
      { label: "Time", value: "10-15 Mins", icon: Timer },
      { label: "Recovery", value: "2-4 Days", icon: Activity },
      { label: "Sexual Function", value: "100% Preserved", icon: HeartPulse }
    ],
    benefits: [
      { title: 'No Cutting/Heating', desc: 'Tissue is mechanically lifted, not destroyed. Minimally invasive.', icon: CheckCircle2 },
      { title: 'Immediate Relief', desc: 'Symptom improvement within days, not weeks.', icon: Timer },
      { title: 'Zero Sexual Side Effects', desc: 'Proven to have NO impact on erectile or ejaculatory function.', icon: HeartPulse },
      { title: 'Reversible', desc: 'Implants can be removed or adjusted if needed.', icon: Loop as any }
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
    candidates: [
      "Men with moderate BPH symptoms and prostate <80cc.",
      "Sexually active men prioritizing preservation of ejaculatory function.",
      "Those seeking rapid recovery and return to activity.",
      "Patients wanting a reversible, non-destructive option."
    ],
    safety: {
      title: "Safety Profile",
      content: "UroLift has an excellent safety profile. Mild, temporary side effects include urgency, dysuria, or hematuria for a few days. NO reports of permanent erectile or ejaculatory dysfunction in clinical trials.",
      icon: ShieldCheck
    },
    timeline: {
      title: "UroLift Recovery Timeline",
      steps: [
        { time: "Day 1", title: "Procedure", desc: "15-min procedure. Go home same day without a catheter in most cases." },
        { time: "Day 3-7", title: "Rapid Improvement", desc: "Urinary symptoms begin to improve quickly as the channel heals." },
        { time: "Month 1+", title: "Full Relief", desc: "Peak symptom relief achieved. Return to all activities including sexual function." }
      ]
    },
    procedure: [
      { step: '01', title: 'Cystoscopy', desc: 'Thin scope inserted through urethra under general anesthesia.' },
      { step: '02', title: 'Implant Placement', desc: 'Small UroLift implants placed to lift and compress obstructive tissue.' },
      { step: '03', title: 'Channel Opened', desc: 'Urinary channel widened immediately. Flow improved.' },
      { step: '04', title: 'Discharge', desc: 'Procedure complete in 10-15 minutes. Home same day.' }
    ],
    faq: [
      { q: "How many implants do I need?", a: "Typically 4-6 implants, depending on prostate size and anatomy." },
      { q: "Can implants be felt?", a: "No. Patients cannot feel the implants once placed. They remain permanently in the prostate." },
      { q: "What if my prostate grows more later?", a: "Additional implants can be added, or the procedure can be combined with other treatments." }
    ]
  },
  'Sexually Transmitted Infection': {
    title: 'Confidential STI Screening & Treatment',
    tagline: 'Comprehensive, Discreet Care for Sexual Health.',
    whatIsIt: {
      title: 'What are Sexually Transmitted Infections (STIs)?',
      description: "Sexually Transmitted Infections (STIs) are infections passed from one person to another through sexual contact. They can be caused by bacteria, viruses, or parasites. Many STIs have no immediate symptoms, making regular screening essential for early detection, effective treatment, and the prevention of long-term health complications.",
      image: '/assets/image/services section/sexually transmitted infection menu.webp'
    },
    description: "Sexually Transmitted Diseases (STDs), also known as Sexually Transmitted Infections (STIs), are caused by bacterial, viral, or parasitic infections. A crucial fact to remember is that many STDs are asymptomatic in their early stages. This means an infected person can unknowingly transmit the infection to sexual partners.",
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
    benefits: [
      { title: '100% Confidential', desc: 'Complete privacy. Results shared only with you.', icon: ShieldCheck },
      { title: 'Comprehensive Testing', desc: 'Screens for HIV, syphilis, gonorrhea, chlamydia, HPV, and more.', icon: Microscope },
      { title: 'Same-Day Treatment', desc: 'Many STIs can be treated immediately after diagnosis.', icon: Timer },
      { title: 'Partner Notification', desc: 'Anonymous partner notification services available.', icon: Users }
    ],
    candidates: [
      "Anyone with new sexual partners or multiple partners.",
      "Individuals with symptoms (discharge, pain, sores, rash).",
      "Those seeking routine sexual health screening.",
      "Partners of individuals diagnosed with an STI."
    ],
    safety: {
      title: "Privacy & Confidentiality",
      content: "We adhere to the strictest confidentiality standards. All test results and treatments are private. We offer anonymous testing options if preferred.",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Discuss symptoms, sexual history, and risk factors confidentially.' },
      { step: '02', title: 'Testing', desc: 'Blood, urine, or swab samples collected based on risk profile.' },
      { step: '03', title: 'Diagnosis', desc: 'Results typically available within 24-72 hours (some rapid tests same-day).' },
      { step: '04', title: 'Treatment', desc: 'Antibiotics or antivirals prescribed. Partner notification and follow-up arranged.' }
    ],
    faq: [
      { q: "Is testing painful?", a: "No. Most tests involve a simple blood draw or urine sample. Some may require a swab, which causes minimal discomfort." },
      { q: "How soon can I get results?", a: "Rapid HIV tests give results in 20 minutes. Other tests typically return within 24-72 hours." },
      { q: "Can STIs be cured?", a: "Many bacterial STIs (chlamydia, gonorrhea, syphilis) are curable with antibiotics. Viral STIs (HIV, herpes, HPV) are manageable but not curable." }
    ]
  },
  'Stone Disease': {
    title: 'Kidney & Bladder Stone Treatment (Laser Lithotripsy)',
    tagline: 'Precision Laser Technology for Pain-Free Stone Removal.',
    description: "Modern laser lithotripsy uses advanced Holmium lasers to fragment kidney and bladder stones into fine dust, which is then extracted or passed naturally. This minimally invasive approach eliminates the need for open surgery, offering rapid recovery and excellent success rates.",
    heroImage: '/assets/image/services section/stone disease menu.webp',
    whatIsIt: {
      title: 'What is Laser Lithotripsy for Stone Disease?',
      description: "Laser lithotripsy is a highly advanced, minimally invasive surgical procedure used to treat stones in the kidney, ureter, or bladder. Using a thin, flexible scope (ureteroscope) passed through the body's natural openings, urologists use a 'power laser' to break up stones into tiny pieces or dust without making a single incision.",
      image: '/assets/image/services section/stone disease menu.webp'
    },
    video: null,
    stats: [
      { label: "Success Rate", value: "95%+", icon: Trophy },
      { label: "Surgery Time", value: "30-90 Mins", icon: Timer },
      { label: "Hospital Stay", value: "Same Day", icon: Activity },
      { label: "Recovery", value: "3-5 Days", icon: Calendar }
    ],
    benefits: [
      { title: 'Minimally Invasive', desc: 'No incisions. Performed through natural urinary passages.', icon: Target },
      { title: 'High Success', desc: '95%+ stone-free rate for stones up to 2cm.', icon: Trophy },
      { title: 'Same-Day Discharge', desc: 'Most patients go home within hours of procedure.', icon: Timer },
      { title: 'Precise Fragmentation', desc: 'Laser pulverizes stones into powder for easy elimination.', icon: Zap }
    ],
    candidates: [
      "Patients with kidney or ureteral stones >5mm.",
      "Those experiencing severe pain, infection, or obstruction.",
      "Individuals with stones that won't pass naturally.",
      "Patients seeking minimally invasive treatment over open surgery."
    ],
    safety: {
      title: "Safety & Complications",
      content: "Laser lithotripsy is very safe. Minor risks include temporary hematuria (blood in urine), urinary urgency, or mild flank discomfort. Serious complications (perforation, stricture) are rare (<2%).",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'General or spinal anesthesia. Patient asleep or numb from waist down.' },
      { step: '02', title: 'Ureteroscopy', desc: 'Flexible scope inserted through urethra, bladder, and up ureter to stone.' },
      { step: '03', title: 'Laser Fragmentation', desc: 'Holmium laser breaks stone into fine fragments. Pieces extracted or left to pass.' },
      { step: '04', title: 'Stent Placement', desc: 'Temporary ureteral stent may be placed to aid healing. Removed in 1-2 weeks.' }
    ],
    timeline: {
      title: "Recovery & Follow-up",
      steps: [
        { time: "Week 1", title: "Passing Dust", desc: "Initial recovery. Fine stone dust may pass in urine. Mild discomfort." },
        { time: "Week 2", title: "Stent Removal", desc: "Temporary stent is removed in an office visit. Immediate relief." },
        { time: "Month 1", title: "Clearance Confirmation", desc: "Follow-up imaging to ensure 100% stone-free status." }
      ]
    },
    faq: [
      { q: "Is there any cutting?", a: "No. The procedure is performed entirely through the urethra. No external incisions." },
      { q: "Will I need a stent?", a: "Often, yes. A stent helps drainage and prevents swelling. It's removed in an office visit after 1-2 weeks." },
      { q: "Can all stones be treated with laser?", a: "Most stones yes. Very large stones (>3cm) may require PCNL (percutaneous nephrolithotomy)." }
    ]
  },
  'Urinary Symptoms': {
    title: 'Comprehensive Urinary Symptom Diagnosis & Management',
    tagline: 'Precision Diagnosis for Frequency, Urgency, Incontinence, and Pain.',
    description: "Urological diseases encompass a wide range of conditions affecting the urinary tract—including the kidneys, ureters, bladder, and urethra—in both men and women. In men, urology also covers the reproductive organs and prostate health. Early detection and consulting a urologist are critical for effective treatment and preventing long-term complications.",
    heroImage: '/assets/image/services section/Urinary Symptoms menu.webp',
    whatIsIt: {
      title: 'What are Common Urinary Symptoms?',
      description: "Urinary symptoms, also known as Lower Urinary Tract Symptoms (LUTS), include a range of issues such as frequent urination, urgency, weak stream, and nocturia. These symptoms can be caused by various conditions, including BPH, infections, or bladder issues. Understanding the root cause is the first step toward effective management and relief.",
      image: '/assets/image/services section/Urinary Symptoms menu.webp'
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
    benefits: [
      { title: 'Comprehensive Evaluation', desc: 'Detailed history, physical exam, uroflowmetry, and imaging.', icon: Search },
      { title: 'Root Cause Diagnosis', desc: 'Identify underlying issues: BPH, infection, overactive bladder, neurogenic, etc.', icon: Microscope },
      { title: 'Tailored Treatment', desc: 'Personalized plan: medications, behavioral therapy, or minimally invasive procedures.', icon: Target },
      { title: 'Improved QOL', desc: 'Restore normalcy and confidence with effective symptom relief.', icon: HeartPulse }
    ],
    candidates: [
      "Men experiencing frequent urination (>8 times/day).",
      "Those with urgency, nocturia (nighttime urination >2x), or weak stream.",
      "Patients suffering from urinary incontinence (leakage).",
      "Individuals with painful urination or pelvic discomfort."
    ],
    timeline: {
      title: "Diagnostic & Care Pathway",
      steps: [
        { time: "Day 1", title: "Initial Workup", desc: "Uroflowmetry, ultrasound, and detailed symptom assessment." },
        { time: "Week 1-2", title: "Targeted Therapy", desc: "Commence medication or behavioral plan based on primary cause." },
        { time: "Month 1+", title: "Management", desc: "Follow-up to assess symptom relief and adjust therapy for long-term control." }
      ]
    },
    procedure: [
      { step: '01', title: 'Detailed History', desc: 'Discuss symptom onset, severity, triggers, and impact on daily life.' },
      { step: '02', title: 'Physical Exam', desc: 'Abdominal and digital rectal exam to assess prostate and bladder.' },
      { step: '03', title: 'Diagnostics', desc: 'Uroflowmetry, post-void residual, urinalysis, and imaging as needed.' },
      { step: '04', title: 'Treatment Plan', desc: 'Address root cause with medications, lifestyle changes, or procedures.' }
    ],
    faq: [
      { q: "What causes frequent urination?", a: "Common causes include BPH, overactive bladder, UTI, diabetes, or excessive fluid intake." },
      { q: "Is incontinence normal with aging?", a: "No. While more common in older men, it's not inevitable and is often treatable." },
      { q: "What is uroflowmetry?", a: "A non-invasive test measuring urine flow rate and volume to assess bladder and prostate function." }
    ]
  },
  'Circumcision': {
    title: 'Child & Adult Circumcision',
    tagline: 'Modern Stapler Technology for Precision, Speed, and Superior Aesthetics and Standard Circumcision.',
    whatIsIt: {
      title: 'Types of Medical Circumcision: Stapler vs. Standard',
      description: "We offer two primary methods for circumcision, tailored to patient needs and age:\n\n1. **Stapler Circumcision (ZSR):** A modern, innovative technique using a disposable device that cuts and staples simultaneously. It offers a faster procedure (10-15 mins), minimal bleeding, and a superior cosmetic result with a smooth, even scar line.\n\n2. **Standard Circumcision (Conventional):** The traditional surgical method using manual excision and absorbable sutures. This technique allows for precise customization of foreskin removal and is suitable for all complex cases.",
      image: '/assets/image/services section/circumcision/Types of Medical Circumcision.webp'
    },
    description: "Circumcision is a common procedure performed for both medical and personal reasons. Understanding 'Why' and 'How' can help in making an informed decision.\n\n**Indications: Why is Circumcision Necessary?**\n\n*   **Phimosis:** Inability to retract the foreskin, causing pain and hygiene issues.\n*   **Paraphimosis:** A urologic emergency where retracted foreskin becomes trapped behind the glans.\n*   **Recurrent Balanitis/Balanoposthitis:** Frequent infection and inflammation of the glans and foreskin.\n*   **Lichen Sclerosus:** A skin condition causing scarring and tightening of the foreskin.\n\n**Medical Benefits of Circumcision:**\n\n*   **Improved Hygiene:** Removes the area where smegma and bacteria accumulate, making cleaning easier.\n*   **Reduced Infection Risk:** Significantly lowers the risk of Urinary Tract Infections (UTIs) and Sexually Transmitted Infections (STIs), including HIV and HPV.\n*   **Cancer Prevention:** low risk of penile cancer and reduces cervical cancer risk in female partners.\n*   **Aesthetic Preference:** Many men prefer the cleaner look and feel.",
    heroImage: '/assets/image/services section/circumcision/circumcision hero.webp',
    descriptionImage: '/assets/image/services section/circumcision/circumcision clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Satisfaction", value: "95%+", icon: Trophy },
      { label: "Procedure Time", value: "15 Mins", icon: Timer },
      { label: "Downtime", value: "7-10 Days", icon: Activity },
      { label: "Healing", value: "3-4 Weeks", icon: Calendar }
    ],
    benefits: [
      { title: 'Fast & Precise', desc: '15-minute procedure with consistent, symmetrical results.', icon: Timer },
      { title: 'Minimal Bleeding', desc: 'Instant staple-based hemostasis reduces blood loss.', icon: ShieldCheck },
      { title: 'Superior Aesthetics', desc: 'Clean, even scar line with excellent cosmetic outcome.', icon: CheckCircle2 },
      { title: 'Reduced Pain', desc: 'Less tissue trauma compared to traditional methods.', icon: Smile as any }
    ],
    candidates: [
      "Adults seeking circumcision for religious, cultural, or medical reasons.",
      "Men with phimosis (tight foreskin) or recurrent balanitis.",
      "Those prioritizing cosmetic appearance and fast recovery.",
      "Patients wanting a modern, low-complication procedure."
    ],
    safety: {
      title: "Safety & Complications",
      content: "Stapler circumcision is very safe. Risks include minor bleeding, infection (<2%), or swelling. Serious complications are rare. Staples dissolve or fall off naturally within 2-3 weeks.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Recovery Timeline",
      steps: [
        { time: "Day 1-7", title: "Initial Healing", desc: "Swelling and mild discomfort. Keep area clean and dry." },
        { time: "Week 2-3", title: "Scar Formation", desc: "Staples dissolve. Scar line forms. Swelling subsides." },
        { time: "Week 4+", title: "Full Recovery", desc: "Sexual activity can resume. Final cosmetic result visible." }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'Local anesthesia (ring block). Patient remains awake, area is numb.' },
      { step: '02', title: 'Stapler Application', desc: 'Disposable stapler device cuts and staples foreskin in one motion.' },
      { step: '03', title: 'Hemostasis Check', desc: 'Bleeding controlled immediately via staples. Dressing applied.' },
      { step: '04', title: 'Discharge', desc: 'Patient goes home same day with care instructions.' }
    ],
    faq: [
      { q: "Is it painful?", a: "Minimal pain during and after. Local anesthesia ensures comfort. Most men use only OTC pain relievers for a few days." },
      { q: "When can I have sex again?", a: "Typically after 4 weeks, once fully healed. Follow your doctor's guidance." },
      { q: "Will the staples need to be removed?", a: "No. They dissolve or fall off naturally within 2-3 weeks." }
    ]
  },
  'Penile Enlargement': {
    title: 'Penile Girth Enhancement',
    tagline: 'Safe, Medical-Grade Augmentation for Confidence and Satisfaction.',
    whatIsIt: {
      title: 'What is Penile Enlargement with Filler?',
      description: "Penile enlargement with filler is a non-surgical procedure designed to increase the girth (circumference) of the penis using high-quality Hyaluronic Acid (HA) fillers. This method provides immediate, visible results without the need for invasive surgery, general anesthesia, or lengthy recovery times, making it a popular choice for men seeking aesthetic enhancement.",
      image: '/assets/image/services section/penile enlargement/What is Penile Enlargement with Filler.webp'
    },
    description: "### Non-Surgical Penile Girth Enhancement with Fillers\nPenile Girth Enhancement with Fillers is a highly sought-after medical procedure today. It offers a safe, non-surgical alternative to traditional enlargement surgery, providing results that look and feel entirely natural.\n\n#### 1. What is Penile Filler Enlargement?\nPenile girth enhancement involves injecting Hyaluronic Acid (HA) fillers—a highly safe, biocompatible substance naturally found in the human body—into the subcutaneous layer of the penis (typically between the Dartos and Buck's fascia).\n\n*   **Primary Goal:** To significantly increase penile girth (thickness and circumference).\n*   **Impact on Length:** While dermal fillers do not directly increase erect length, the added weight of the filler can create a slightly elongated appearance when the penis is flaccid.\n\n#### 2. Benefits of Non-Surgical Penile Girth Enhancement\nChoosing HA fillers over surgical implants or fat grafting offers several distinct advantages:\n\n*   **Non-Surgical Procedure:** There are no incisions or scarring. The procedure uses a blunt micro-cannula to administer the filler, which minimizes the risk of infection and tissue damage.\n*   **Minimal Pain & Zero Downtime:** The treatment takes only 30-45 minutes. Patients can return to their daily activities immediately. (Note: Abstaining from sexual intercourse and masturbation for 2-4 weeks is required to allow the filler to settle properly.)\n*   **Natural Look and Feel:** The HA filler closely mimics the softness of natural tissue, avoiding the hard, unnatural lumps sometimes associated with other enhancement methods.\n*   **Customizable Results:** Patients have the flexibility to add more filler in the future to achieve their desired thickness.\n*   **Fully Reversible & Safe:** If a patient is unsatisfied or experiences rare complications, HA fillers can be 100% dissolved using an enzyme called Hyaluronidase, leaving no permanent residue behind.\n\n#### 3. How to Choose the Right Penis Filler?\nWhen it comes to intimate areas, safety and the molecular structure of the dermal filler must be the top priorities.\n\n*   **100% Pure Hyaluronic Acid (HA) Only:** Never use unapproved or permanent substances like liquid silicone, olive oil, or paraffin. The human body cannot absorb these materials, leading to severe inflammation, infection, necrosis (tissue death), and severe deformity that requires invasive surgical removal.\n*   **Appropriate Molecular Size (Cohesivity & Elasticity):** It is crucial to use specific body fillers or HA fillers with a large molecular structure, high structural stability (High G Prime), and excellent elasticity. The selected filler must be able to withstand the pressure and expansion of an erection without shifting, rippling, or losing its shape.\n*   **FDA-Approved Products:** Ensure the clinic uses authentic, FDA-approved fillers. The product should be unboxed in front of you, and you should be able to verify its authenticity via a manufacturer QR code.\n*   **Tailored for Male Anatomy:** Certain specialized filler brands are designed specifically for male girth enhancement. A qualified urologist will evaluate your existing tissue to recommend the most effective option for your body.",
    heroImage: '/assets/image/services section/penile enlargement/penile enlargement hero.webp',
    descriptionImage: '/assets/image/services section/penile enlargement/penile enlargement clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Girth Increase", value: "1-2 cm", icon: Ruler },
      { label: "Procedure Time", value: "30-45 Mins", icon: Timer },
      { label: "Downtime", value: "3-5 Days", icon: Activity },
      { label: "Duration", value: "12-24 Mo", icon: Calendar }
    ],
    benefits: [
      { title: 'Immediate Results', desc: 'Visible increase in girth immediately after procedure.', icon: Zap },
      { title: 'Natural Feel', desc: 'Premium fillers (HA) or your own fat feel soft and natural.', icon: CheckCircle2 },
      { title: 'Minimally Invasive', desc: 'Quick injections with local anesthesia. No surgery required.', icon: ShieldCheck },
      { title: 'Reversible (HA)', desc: 'Hyaluronic acid fillers can be dissolved if needed.', icon: Loop as any }
    ],
    timeline: {
      title: "Augmentation Journey",
      steps: [
        { time: "Day 1-3", title: "Settling", desc: "Mild swelling may occur. Filler begins to integrate with tissue." },
        { time: "Week 2", title: "Resumption", desc: "Sexual activity can usually resume. Final shape begins to stabilize." },
        { time: "Month 1+", title: "Final Result", desc: "Full girth enhancement visible. Natural feel and look achieved." }
      ]
    },
    candidates: [
      "Men seeking enhanced girth for aesthetic or psychological reasons.",
      "Those with realistic expectations and good overall health.",
      "Patients wanting a non-surgical, reversible option (HA fillers).",
      "Individuals desiring more confidence in intimate situations."
    ],
    safety: {
      title: "Safety & Risks",
      content: "When performed by experienced specialists using medical-grade products, girth enhancement is safe. Risks include temporary swelling, bruising, asymmetry (rare), or nodules (very rare). Fat transfer has higher permanence but slight reabsorption risk.",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Discuss goals, examine anatomy, and select filler type (HA or fat).' },
      { step: '02', title: 'Anesthesia', desc: 'Local anesthetic cream and nerve blocks applied for comfort.' },
      { step: '03', title: 'Injection', desc: 'Filler injected evenly along penile shaft using fine cannulas.' },
      { step: '04', title: 'Recovery', desc: 'Mild swelling for 3-5 days. Sexual activity resumes after 2 weeks.' }
    ],
    faq: [
      { q: "Is it permanent?", a: "HA fillers last 12-24 months. Fat transfer can be more permanent but subject to partial reabsorption (~30%)." },
      { q: "Will it look natural?", a: "Yes, when done correctly. Results are proportionate and feel soft to touch." },
      { q: "Does it affect erection quality?", a: "No. Girth enhancement does not interfere with erectile function." }
    ]
  },
  'Penile Lengthening': {
    title: 'Penile Lengthening Procedures',
    tagline: 'Real and Permanent Penis Enlargement Solutions.',
    whatIsIt: {
      title: 'What is Penile Lengthening Surgery?',
      description: "Penile lengthening surgery is a procedure designed to increase the visible length of the penis, primarily in its flaccid state. The most common and effective technique involves releasing the suspensory ligament, which attaches the penis to the pubic bone. This allows the hidden internal portion of the penis to advance forward, resulting in a permanent increase in length.",
      image: '/assets/image/services section/penile lengthenning/what is penile lengthening surgery.webp'
    },
    description: "Surgery is the most reliable method for achieving permanent length gains. By addressing the anatomical attachments of the penis, we can reveal length that is naturally present but concealed.\n\n**The Clinical Mechanism (Suspensory Ligament Release):**\n\n1. **Anatomical Insight:** A significant portion (approx. 30-50%) of the penile shaft is internal, anchored to the pubic bone by the **suspensory ligament**. This ligament holds the penis in an upright position during erection but also keeps a large segment hidden inside the body.\n\n2. **Ligamentolysis (The Release):** Through a small, discreet incision (usually in the pubic area), the surgeon carefully cuts or 'releases' this ligament. This detaches the penis from the pubic bone, allowing the internal shaft to drop forward and extend outward.\n\n3. **Visible Results:** This release typically results in a **2-4 cm gain** in flaccid length. The erection angle may lower slightly, but stability and sensation remain unaffected.\n\n4. **Critical Post-Op Care:** To prevent the ligament from healing back in its original position (reattachment), **post-operative traction therapy** is essential for 3-6 months. This ensures the newly released length is maintained and optimized.",
    heroImage: '/assets/image/services section/penile lengthenning/penile lengthenning hero.webp',
    descriptionImage: '/assets/image/services section/penile lengthenning/penile lengthenning clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Length Gain", value: "2-4 cm", icon: Ruler },
      { label: "Surgery Time", value: "45-60 Mins", icon: Timer },
      { label: "Recovery", value: "2-4 Weeks", icon: Activity },
      { label: "Full Results", value: "6-12 Mo", icon: Calendar }
    ],
    benefits: [
      { title: 'Proven Technique', desc: 'Suspensory ligament release is a well-established procedure.', icon: Scissors },
      { title: 'Visible Gain', desc: 'Typically 2-4cm increase in flaccid length.', icon: Ruler },
      { title: 'Combination Option', desc: 'Can be paired with girth enhancement for comprehensive augmentation.', icon: Layers },
      { title: 'Non-Surgical Alternative', desc: 'Traction devices (extenders) offer gains over 6-12 months without surgery.', icon: Target }
    ],
    candidates: [
      "Men with realistic expectations seeking modest length increase.",
      "Those committed to post-operative traction therapy (essential for best results).",
      "Patients in good health without active infections or bleeding disorders.",
      "Individuals wanting permanent surgical solution (vs. temporary devices)."
    ],
    safety: {
      title: "Safety & Considerations",
      content: "Surgical lengthening is safe when performed by experienced surgeons. Risks include scarring, loss of erection angle (slightly lower angle), temporary numbness, or dissatisfaction with modest gains. Non-surgical traction is very safe but requires discipline and consistency.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Post-Op Timeline",
      steps: [
        { time: "Week 1-2", title: "Initial Healing", desc: "Swelling and bruising subside. Traction therapy begins." },
        { time: "Month 1-3", title: "Active Traction", desc: "Daily traction (4-6 hours) to maintain and maximize length gains." },
        { time: "Month 6-12", title: "Final Results", desc: "Traction tapering. Final length stabilizes. Full cosmetic healing." }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'Local or general anesthesia. Small pubic incision made.' },
      { step: '02', title: 'Ligament Release', desc: 'Suspensory ligament partially released to reveal hidden penile length.' },
      { step: '03', title: 'Closure', desc: 'Incision closed. No tissue removed, just ligament adjustment.' },
      { step: '04', title: 'Traction Therapy', desc: 'Post-op traction essential for 3-6 months to achieve and maintain gains.' }
    ],
    faq: [
      { q: "How much length will I gain?", a: "Typical gains are 2-4cm in flaccid length. Erect length gains are modest (~0.5-1.5cm). Results depend on anatomy and post-op traction compliance." },
      { q: "Will my erection angle change?", a: "Slightly. The erection may point more forward/downward vs. upward. Function is unaffected." },
      { q: "Is traction therapy mandatory?", a: "Highly recommended. Without traction, gains may be minimal or lost due to scar contraction." }
    ]
  },
  'Excision of penile Paraffinoma': {
    title: 'Excision of Penile Paraffinoma (Foreign Body Removal)',
    tagline: 'Expert Removal and Reconstruction for Post-Injection Complications.',
    whatIsIt: {
      title: 'What is Penile Paraffinoma?',
      description: "Penile paraffinoma is a condition caused by the injection of non-medical grade foreign substances like paraffin, olive oil, or silicone into the penis in an attempt to increase size. The body cannot absorb these materials, leading to chronic inflammation, hard lumps (granulomas), and severe tissue damage that requires surgical intervention by specialist urologists.",
      image: '/assets/image/services section/excision of penile paraffinoma menu.webp'
    },
    description: "### The Severe Dangers of Penile Foreign Body Injections: Symptoms and Risks\nInjecting unapproved foreign substances into the penis—such as olive oil, paraffin, or liquid silicone—is a critical medical emergency and a highly prevalent issue in reconstructive urology. The human body cannot absorb or break down these materials, which inevitably triggers a severe and destructive foreign body reaction.\n\n#### 1. Symptoms of Penile Foreign Body Injections (Penile Paraffinoma)\nSymptoms rarely appear immediately after the injection. It can take months or even years for the body's immune system to initiate a foreign body reaction. The symptoms range from early inflammatory signs to severe tissue destruction:\n\n**Early Stage (Onset of Inflammation):**\n\n*   **Penile Deformity:** The penis develops an irregular, asymmetrical, and distorted shape.\n*   **Hard Lumps (Granulomas):** Palpable, hard, and bumpy nodules form under the skin, feeling highly unnatural to the touch.\n*   **Skin Discoloration:** The skin around the injection site becomes abnormally dark, red, or bruised.\n\n**Severe Stage (Advanced Tissue Destruction):**\n\n*   **Intense Pain and Inflammation:** Severe pain, swelling, redness, and localized heat. Pain becomes excruciating, especially during an erection.\n*   **Skin Rupture and Ulcers:** The penile skin thins out until it tears, leading to chronic, non-healing open wounds.\n*   **Infection and Discharge:** Foul-smelling pus or lymphatic fluid continuously oozes from the ruptured skin.\n*   **Substance Migration:** The injected material travels (migrates) down into the scrotum or pubic area, causing massive, abnormal swelling.\n\n#### 2. Severe Complications: The Risks of Avoiding Surgical Removal\nIf left untreated, failing to undergo a proper foreign body excision (surgical removal of the injected material) will lead to catastrophic complications, potentially resulting in the loss of the organ itself:\n\n*   **Penile Necrosis (Tissue Death):** The foreign substance constricts local blood vessels, cutting off the vital blood supply to the penis. The tissue will turn black and die, which may ultimately require partial or complete penile amputation.\n*   **Sepsis (Bloodstream Infection):** Open ulcers and necrotic tissue act as a breeding ground for dangerous bacteria. If the infection spreads into the bloodstream, it becomes a life-threatening emergency.\n*   **Permanent Erectile Dysfunction (ED):** The severe inflammation creates dense scar tissue (fibrosis) that tightens around the penile shaft and damages crucial nerves. This makes achieving an erection physically impossible, or makes erections so painful that sexual intercourse is no longer an option.\n*   **Urinary Retention and Urethral Stricture:** If the migrating substance compresses the urethra, it causes extreme difficulty urinating or constant dribbling. This urinary blockage can cause severe backward pressure, ultimately damaging the bladder and kidneys.\n*   **Increased Risk of Skin Cancer:** Enduring chronic, severe inflammation over many years significantly increases the risk of cellular mutation, potentially leading to skin cancer in the affected genital area.",
    heroImage: '/assets/image/services section/excision of penile paraffinoma/excision of penile paraffinoma hero.webp',
    descriptionImage: '/assets/image/services section/excision of penile paraffinoma/excision of penile paraffinoma clinical mechanism.webp',
    video: null,
    timeline: {
      title: "Reconstruction Timeline",
      steps: [
        { time: "Week 1-2", title: "Wound Care", desc: "Acute healing phase. Managing swelling with specialized compression dressings." },
        { time: "Week 4-6", title: "Remodeling", desc: "Tissue begins to soften and heal. Resumption of light activities." },
        { time: "Month 3+", title: "Stabilization", desc: "Final surgical outcome achieved. Assessment for staged reconstruction if needed." }
      ]
    },
    benefits: [
      { title: 'Specialist Expertise', desc: 'Performed by urologists experienced in complex penile reconstruction.', icon: Users },
      { title: 'Complete Removal', desc: 'Thorough excision of all granulomas and foreign material.', icon: Scissors },
      { title: 'Functional Preservation', desc: 'Priority on preserving erectile function and sensation.', icon: HeartPulse },
      { title: 'Aesthetic Restoration', desc: 'Reconstruction to restore natural appearance as much as possible.', icon: CheckCircle2 }
    ],
    candidates: [
      "Men with history of non-medical penile injections (paraffin, silicone, oils).",
      "Those experiencing deformity, lumps, pain, or erectile dysfunction from granulomas.",
      "Patients with infection, inflammation, or ulceration at injection sites.",
      "Individuals seeking removal before further complications arise."
    ],
    safety: {
      title: "Risks & Expectations",
      content: "Paraffinoma excision is complex. Risks include scarring, contour irregularities, loss of sensation, and in severe cases, compromised erectile function. Extent of restoration depends on severity of existing damage. Multiple procedures may be required.",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Imaging', desc: 'MRI or ultrasound to map extent of foreign material and tissue damage.' },
      { step: '02', title: 'Surgical Excision', desc: 'Under general anesthesia, granulomas and foreign material are meticulously removed.' },
      { step: '03', title: 'Reconstruction', desc: 'Tissue reconstruction using grafts or flaps if needed to restore shape.' },
      { step: '04', title: 'Recovery', desc: 'Extended healing (6-12 weeks). Follow-up for monitoring and potential revision surgery.' }
    ],
    faq: [
      { q: "Can my penis look normal again?", a: "Outcome depends on damage severity. Surgeons aim for maximal restoration, but complete normalcy may not be achievable in severe cases." },
      { q: "Will this affect my erections?", a: "Function depends on extent of nerve and tissue damage. Surgeons work to preserve function, but some impairment may persist." },
      { q: "How many surgeries are needed?", a: "Often 1-2 procedures. Severe cases may require staged surgeries for optimal reconstruction." }
    ]
  },
  'Vasectomy': {
    title: 'Vasectomy (Permanent Male Contraception)',
    tagline: 'Safe, Effective, Permanent Birth Control. Quick Procedure, Lifelong Peace of Mind.',
    description: "Vasectomy is a minor surgical procedure that provides permanent contraception by blocking the vas deferens, preventing sperm from entering semen. It is highly effective (>99%), minimally invasive, and does not affect sexual function or sensation.",
    whatIsIt: {
      title: 'What is a Vasectomy?',
      description: "A vasectomy is a simple, safe, and permanent method of male contraception. It involves cutting or sealing the tubes (vas deferens) that carry sperm from the testicles to the semen. After a vasectomy, the semen no longer contains sperm, making it impossible to cause a pregnancy while preserving sexual sensation and performance."
    },
    heroImage: '/assets/image/services section/vasectomy/vasectomy hero.webp',
    descriptionImage: '/assets/image/services section/vasectomy/vasectomy Clinical Mechanism.webp',
    video: null,
    stats: [
      { label: "Effectiveness", value: "99.9%+", icon: Trophy },
      { label: "Procedure Time", value: "20-30 Mins", icon: Timer },
      { label: "Recovery", value: "3-5 Days", icon: Activity },
      { label: "Effect", value: "Permanent", icon: Infinity as any }
    ],
    benefits: [
      { title: 'Highly Effective', desc: 'Over 99% effective. Most reliable long-term contraception.', icon: Trophy },
      { title: 'No Sexual Impact', desc: 'Normal erections, ejaculation, and sensation. Semen volume unchanged.', icon: HeartPulse },
      { title: 'Permanent Solution', desc: 'One-time procedure provides lifelong contraception.', icon: Infinity as any },
      { title: 'Minimal Downtime', desc: 'Quick recovery. Resume normal activities within 3-5 days.', icon: Timer }
    ],
    candidates: [
      "Men who have completed their families and seek permanent contraception.",
      "Those who do not want to rely on partner contraception.",
      "Couples seeking the most effective birth control method.",
      "Men who understand the procedure is intended to be permanent."
    ],
    safety: {
      title: "Safety & Reversibility",
      content: "Vasectomy is very safe with low complication rates. Risks include minor bleeding, infection (<1%), or chronic pain (rare, <1%). Reversal is possible but not guaranteed and is expensive. Vasectomy should be considered permanent.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Post-Procedure Timeline",
      steps: [
        { time: "Week 1", title: "Healing", desc: "Mild discomfort and swelling. Ice and rest recommended." },
        { time: "Month 1-3", title: "Clearing Phase", desc: "Sperm still present. Use backup contraception until semen analysis confirms zero sperm." },
        { time: "Month 3+", title: "Sterility Confirmed", desc: "Semen analysis shows zero sperm. Contraception achieved." }
      ]
    },
    procedure: [
      { step: '01', title: 'Anesthesia', desc: 'Local anesthesia to scrotal area. Patient awake throughout.' },
      { step: '02', title: 'Vas Access', desc: 'Small incision or no-scalpel technique to access vas deferens tubes.' },
      { step: '03', title: 'Sealing', desc: 'Vas deferens cut, tied, or cauterized to block sperm passage.' },
      { step: '04', title: 'Closure', desc: 'Incision closed (if made). Dressing applied. Discharge same day.' }
    ],
    faq: [
      { q: "Will it affect my sex drive or performance?", a: "No. Vasectomy has no impact on testosterone, libido, erections, orgasm, or ejaculation." },
      { q: "When can I have unprotected sex?", a: "Not until a semen analysis (done ~3 months post-op) confirms zero sperm. Use backup until then." },
      { q: "Can it be reversed?", a: "Reversal is possible but success is not guaranteed (50-90% depending on time elapsed). It is expensive and not covered by insurance. Consider vasectomy permanent." }
    ]
  },
  'Flexible Cystoscopy': {
    title: 'Flexible Cystoscopy',
    tagline: 'High-Resolution Bladder Examination with Minimal Discomfort.',
    heroImage: '/assets/image/services section/flexible cystoscopy menu.webp',
    whatIsIt: {
      title: 'What is Flexible Cystoscopy?',
      description: "Flexible cystoscopy is a diagnostic procedure that allows a urologist to examine the lining of your bladder and the urethra (the tube that carries urine out of your body). Unlike older rigid cystoscopes, our flexible scope is soft and bends easily, following the body's natural curves for a significantly more comfortable patient experience."
    },
    description: "This advanced diagnostic tool is essential for identifying the root cause of urinary symptoms. By providing a clear, direct view of the urinary tract, it ensures accurate diagnosis and effective treatment planning.\n\n**The Clinical Mechanism & Diagnostic Power:**\n\n1. **High-Definition Visualization:** The flexible cystoscope is equipped with a high-resolution camera and light source. It is gently inserted through the urethra, allowing the doctor to inspect the **entire bladder lining**, **urethra**, and **prostate** (in men) with exceptional clarity.\n\n2. **What We Detect:**\n   *   **Hematuria:** Investigates the source of blood in the urine.\n   *   **Bladder Tumors:** Early detection of bladder cancer or polyps.\n   *   **Stones:** Identifies bladder stones causing pain or blockage.\n   *   **Strictures:** Detects narrowing of the urethra hindering flow.\n   *   **BPH:** Assesses the degree of prostate enlargement.\n\n3. **Why 'Flexible' Matters:** The soft, pliable design causes **minimal friction** and **significantly less discomfort** compared to rigid scopes. Performed under local anesthesia (topical gel), the procedure is quick (5-10 mins) and patients can return to normal activities immediately.",
    descriptionImage: '/assets/image/services section/Flexible Cystoscopy/flexible cystoscopy clinical mechanism.webp',
    video: null,
    timeline: {
      title: "Procedure & Recovery",
      steps: [
        { time: "Day 1", title: "Diagnostic Exam", desc: "Procedure takes 5-10 mins. Mild burning during first 1-2 urinations is normal." },
        { time: "Day 2", title: "Activity", desc: "Any minor irritation typically resolves within 24 hours. Full activity resumption." },
        { time: "Follow-up", title: "Results Discussion", desc: "Doctor discusses findings immediately or schedules follow-up based on results." }
      ]
    },
    stats: [
      { label: "Diagnostic Accuracy", value: "95%+", icon: Trophy },
      { label: "Procedure Time", value: "5-10 Mins", icon: Timer },
      { label: "Downtime", value: "None", icon: Activity },
      { label: "Anesthesia", value: "Topical Gel", icon: ShieldCheck }
    ],
    benefits: [
      { title: 'Painless', desc: 'Topical anesthetic gel ensures minimal discomfort during procedure.', icon: Smile as any },
      { title: 'Immediate Results', desc: 'Real-time visualization. Doctor can see findings instantly.', icon: Timer },
      { title: 'Office-Based', desc: 'Done in-office. No hospitalization required. Resume normal activity same day.', icon: Activity },
      { title: 'High Accuracy', desc: 'Detects stones, tumors, inflammation, and structural issues directly.', icon: Microscope }
    ],
    candidates: [
      "Patients with hematuria (blood in urine) of unknown cause.",
      "Those with recurrent urinary tract infections.",
      "Men experiencing lower urinary tract symptoms (LUTS).",
      "Surveillance for bladder cancer (post-treatment monitoring)."
    ],
    safety: {
      title: "Safety & Comfort",
      content: "Flexible cystoscopy is extremely safe. Mild burning during urination for 24 hours post-procedure is common. Serious complications (bleeding, infection) are rare (<1%).",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Preparation', desc: 'Topical anesthetic gel applied to urethra. Patient lies on exam table.' },
      { step: '02', title: 'Scope Insertion', desc: 'Thin, flexible scope gently inserted through urethra into bladder.' },
      { step: '03', title: 'Examination', desc: 'Bladder filled with sterile water. Doctor examines urethra and bladder lining.' },
      { step: '04', title: 'Completion', desc: 'Scope removed. Procedure complete. Patient can leave immediately.' }
    ],
    faq: [
      { q: "Is it painful?", a: "Mild discomfort, not pain. Topical anesthetic makes insertion tolerable. Most report only slight pressure." },
      { q: "When can I get results?", a: "Usually immediately. Doctor discusses findings right after the procedure." },
      { q: "Are there risks?", a: "Minimal. Some burning during urination for 24 hours is normal. Infection or bleeding is rare." }
    ]
  },
  'Ultrasound': {
    title: 'Advanced Urological Ultrasound & Doppler',
    tagline: 'High-Definition Imaging for Precise Diagnosis & Vascular Health.',
    description: "",
    whatIsIt: {
      title: 'What is Urological Ultrasound?',
      description: "Urological ultrasound uses high-frequency sound waves to create real-time images of the kidneys, bladder, prostate, and reproductive organs. It is a non-invasive, radiation-free diagnostic tool that allows urologists to 'see' internal structures, detect stones, measure organ size, and evaluate blood flow using Doppler technology.",
      image: '/assets/image/services section/ultrasound/ultrasound-1.webp'
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
        title: "Penile Doppler Ultrasound (ED)",
        items: [
          "Gold Standard for ED Diagnosis",
          "Measure Arterial Inflow (Peak Systolic)",
          "Detect Venous Leak (End Diastolic)",
          "Peyronie's Plaque Evaluation",
          "Fibrosis & Tissue Assessment"
        ],
        icon: Activity
      },
      {
        title: "Transrectal Ultrasound (TRUS)",
        items: [
          "Prostate Volume Measurement",
          "BPH Severity Assessment",
          "Prostate Cancer Screening",
          "Guide for Biopsy (if needed)",
          "Seminal Vesicle Evaluation"
        ],
        icon: Target
      },
      {
        title: "Scrotal & Testicular Ultrasound",
        items: [
          "Varicocele Diagnosis (Infertility)",
          "Testicular Masses or Tumors",
          "Hydrocele (Fluid Collection)",
          "Epididymitis (Inflammation)",
          "Torsion (Emergency Blood Flow)"
        ],
        icon: Layers
      }
    ],
    benefits: [
      { title: 'Non-Invasive', desc: 'No needles, no radiation. Completely painless and safe.', icon: ShieldCheck },
      { title: 'Vascular Precision', desc: 'Doppler technology visualizes blood flow for accurate ED diagnosis.', icon: Activity },
      { title: 'Comprehensive', desc: 'Evaluates kidneys, bladder, prostate, and reproductive organs.', icon: Search },
      { title: 'Instant Analysis', desc: 'Radiologist provides preliminary findings immediately.', icon: Timer }
    ],
    candidates: [
      "Patients with suspected kidney stones or masses.",
      "Men with BPH symptoms (enlarged prostate evaluation).",
      "Those evaluating vascular causes of Erectile Dysfunction.",
      "Couples investigating male factor infertility (Varicocele).",
      "Monitoring of cysts or structural abnormalities."
    ],
    timeline: {
      title: "Imaging Process",
      steps: [
        { time: "Visit", title: "Scanning", desc: "Non-invasive scan takes 15-30 mins depending on complexity." },
        { time: "Same Day", title: "Preliminary Review", desc: "Doctor reviews key findings with you immediately after the scan." },
        { time: "24 Hours", title: "Full Report", desc: "Comprehensive documented report provided for your medical records." }
      ]
    },
    procedure: [
      { step: '01', title: 'Preparation', desc: 'For bladder scan, drink water 1hr prior. No fasting needed for other scans.' },
      { step: '02', title: 'Gel Application', desc: 'Warm ultrasound gel applied to improve image quality.' },
      { step: '03', title: 'Start Scanning', desc: 'Specialist moves probe over the area. Real-time images appear on screen.' },
      { step: '04', title: 'Report', desc: 'Detailed report with images provided for your consultation.' }
    ],
    faq: [
      { q: "Is Penile Doppler painful?", a: "It is minimally uncomfortable. A medication may be injected to induce an erection for blood flow measurement." },
      { q: "How do I prepare for KUB Ultrasound?", a: "A full bladder helps visualize the bladder walls. Drink 500ml of water 1 hour before your appointment." },
      { q: "Can ultrasound detect cancer?", a: "It can detect suspicious masses or tumors, which may require further testing (MRI/Biopsy) for confirmation." }
    ]
  },
  'Lab Testing': {
    title: 'Comprehensive Men\'s Health Lab Testing',
    tagline: 'Precision Diagnostics for Sexual Health, Vitality, and Fertility.',
    description: "Our laboratory offers specialized panels designed specifically for men's health. From detecting early signs of erectile dysfunction and hormonal imbalances to comprehensive STD screening and fertility analysis, we provide fast, accurate, and confidential results to guide your treatment.",
    heroImage: '/assets/image/services section/lab testing menu.webp',
    whatIsIt: {
      title: 'What is Comprehensive Lab Testing?',
      description: "Our comprehensive lab testing services provide a deep dive into your biological health. We use state-of-the-art diagnostic technology to analyze hormones, screen for infections, and monitor metabolic function. This data-driven approach allows our specialists to create highly personalized treatment plans tailored to your specific physiological needs.",
      image: '/assets/image/services section/lab testing menu.webp'
    },
    video: null,
    stats: [
      { label: "Turnaround", value: "24-48 Hrs", icon: Timer },
      { label: "Accuracy", value: "99.9%", icon: Target },
      { label: "Confidentiality", value: "100%", icon: ShieldCheck },
      { label: "Specialist Review", value: "Included", icon: User }
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
    benefits: [
      { title: 'Comprehensive Panels', desc: 'Full range of tests tailored for men\'s sexual and general health.', icon: Microscope },
      { title: 'Fast & Private', desc: 'Results in 24-48 hours. Strictly confidential handling.', icon: Timer },
      { title: 'Doctor Interpretation', desc: 'All results reviewed by specialist urologists, not just automated reports.', icon: FileText },
      { title: 'One-Stop Service', desc: 'Consultation, testing, and treatment planning in a single visit.', icon: Target }
    ],
    candidates: [
      "Men over 40 requiring annual prostate and health screening.",
      "Patients experiencing low libido, fatigue, or erectile dysfunction.",
      "Couples planning for pregnancy (fertility assessment).",
      "Individuals seeking peace of mind regarding STDs/STIs.",
      "Men monitoring testosterone therapy levels."
    ],
    timeline: {
      title: "Testing Workflow",
      steps: [
        { time: "Hour 1", title: "Sample Collection", desc: "Quick blood draw or collection in a private room." },
        { time: "24 Hours", title: "Result Delivery", desc: "Most results delivered via secure channel or email." },
        { time: "Review", title: "Expert Consultation", desc: "Meet with a urologist to interpret results and plan next steps." }
      ]
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Doctor recommends specific panels based on your history and symptoms.' },
      { step: '02', title: 'Collection', desc: 'Blood draw, urine sample, or semen collection in a private room.' },
      { step: '03', title: 'Analysis', desc: 'Samples processed in our certified high-complexity laboratory.' },
      { step: '04', title: 'Review', desc: 'Doctor explains results in detail and discusses valid treatment options.' }
    ],
    faq: [
      { q: "Do I need to fast?", a: "For hormonal (Testosterone) and metabolic (Sugar/Lipid) panels, fasting for 8-12 hours is recommended. Water is allowed." },
      { q: "how long for results?", a: "Most blood and urine test results are ready within 24 hours. Specialized cultures may take 48-72 hours." },
      { q: "Is semen analysis private?", a: "Yes. We provide a private, comfortable room for sample collection to ensure accuracy and privacy." }
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
    role: 'Urologist & Men\'s Health Specialist',
    image: '/assets/image/urologist section/dr.niti.webp',
    expert: 'Penile Prosthesis | UroLift | Rezūm Specialist',
    hospital: 'Bangkok Hospital Pattaya',
    email: 'niti.menshealth@gmail.com',
    website: 'https://www.mtrusturology.com',
    tagline: 'A Journey of Dedication, Expertise, and Compassion in Men\'s Health',
    bio: "Dr. Niti Navanimitkul is one of Thailand’s premier experts in urology and men’s health. He combines profound medical expertise with a patient-first, holistic approach.",
    bioContent: [
      {
        type: 'header',
        content: "Elevating Men’s Health Care in Thailand: Dr. Niti Navanimitkul"
      },
      {
        type: 'paragraph',
        content: "Dr. Niti Navanimitkul is one of Thailand’s premier experts in urology and men’s health. He combines profound medical expertise with a patient-first, holistic approach. Driven by a passion for continuous learning and innovation, Dr. Niti is dedicated to empowering men to take control of their physical, emotional, and psychological well-being."
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-1.webp",
        caption: "Dr. Niti Navanimitkul: Thailand’s leading men’s health expert, dedicated to transforming patient lives."
      },
      {
        type: 'header',
        content: "World-Class Urology Expertise & High Success Rates"
      },
      {
        type: 'paragraph',
        content: "Dr. Niti specializes in cutting-edge, minimally invasive procedures designed to restore function and improve the quality of life for his patients. He is at the forefront of treating complex urological conditions, offering highly effective solutions:"
      },
      {
        type: 'list',
        items: [
          "Penile Prosthesis Surgery (ED Treatment): Offering a permanent solution for erectile dysfunction to restore sexual function. Dr. Niti has performed over 100 successful cases with a reported 99.99% success rate.",
          "UroLift® Treatment for BPH: A state-of-the-art, minimally invasive procedure to alleviate urinary symptoms caused by an enlarged prostate (Benign Prostatic Hyperplasia), ensuring quicker recovery times. Between August 2024 and April 2025 alone, he performed over 55 cases with a 99.99% success rate.",
          "Advanced Erectile Dysfunction Solutions: Comprehensive care utilizing the latest medical advancements, including Stem Cell Injections, Shockwave Therapy (Li-ESWT), and customized medication plans.",
          "Male Infertility Treatments: Advanced diagnostic testing and personalized procedures designed to enhance male fertility.",
          "Comprehensive Prostate Health: Proactive preventive care, prostate cancer screening, and expert management of BPH."
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-2.webp",
        caption: "Highly certified in urology, Dr. Niti provides the most advanced men's healthcare."
      },
      {
        type: 'header',
        content: "Extensive Training & Board Certifications"
      },
      {
        type: 'paragraph',
        content: "A graduate of one of Thailand’s most prestigious medical schools, Dr. Niti discovered his passion for men's health early in his career. He has since honed his skills through specialized fellowships and training at leading medical institutions.\n\nAs a lifelong learner, he holds numerous certifications in urology and consistently participates in international medical conferences. This dedication ensures his patients always have access to the most advanced, evidence-based treatments available globally."
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-3.webp",
        caption: "World-class trained urologist mastering advanced clinical techniques."
      },
      {
        type: 'header',
        content: "A Holistic, Patient-Centric Philosophy"
      },
      {
        type: 'paragraph',
        content: "What truly sets Dr. Niti apart is his compassionate, holistic approach. He understands that urological conditions impact not just the physical body, but also emotional well-being. By taking the time to listen and understand each patient’s unique concerns, he crafts tailored, comprehensive treatment plans. His dedication to excellence in patient care, diagnosis, and education has earned him numerous accolades and the deep trust of both colleagues and patients."
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-4.webp",
        caption: "Patient-Centric Care Environment"
      }
    ],
    specialties: [
      "Penile Prosthesis Surgery (100+ cases, 99.99% success rate)",
      "UroLift Treatment for BPH (55+ cases, 99.99% success rate)",
      "Water Vapor Therapy (Rezūm) - Center of Excellence",
      "Erectile Dysfunction Treatments (Stemcell, Shockwave)",
      "Male Infertility Diagnosis & Treatment",
      "Prostate Health & Cancer Screening"
    ],
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
    role: 'Consultant Urologist',
    image: '/assets/image/urologist section/dr.phanpon.webp',
    expert: 'Minimal Invasive & Innovation',
    hospital: 'Bangkok Hospital Pattaya', // Keeping existing hospital pattern if applicable, or remove if not in image but image lists multiple
    email: '', // Not in image
    website: '', // Not in image
    tagline: 'Expert in Minimal Invasive & Innovation Treatment',
    bio: "Dr. Phanpon Leelahawong is a board-certified urologist with extensive experience in high-volume endoscopic surgery for benign prostatic enlargement and complex urinary stone disease. His clinical focus centers on advanced transurethral and enucleation-based techniques, offering definitive surgical solutions for patients with moderate to large prostate glands.",
    bioContent: [
      {
        type: 'header',
        content: "Expertise in Advanced Enucleation & Endourology"
      },
      {
        type: 'paragraph',
        content: "Dr. Phanpon has substantial experience in transurethral resection (TURP), bipolar enucleation (TUERP/BipoLEP), and modern laser-based enucleation techniques (HoLEP). His practice emphasizes complete adenoma removal using anatomical enucleation principles for durable long-term outcomes."
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-1.webp",
        caption: "Dr. Phanpon performing advanced laser enucleation for large prostate cases."
      },
      {
        type: 'header',
        content: "Surgical Volume & Clinical Experience"
      },
      {
        type: 'list',
        items: [
          "Over 900 urological procedures performed",
          "Over 500 endoscopic stone surgeries",
          "Over 400 endoscopic prostate procedures"
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-2.webp",
        caption: "Extensive surgical experience with over 900 urological procedures."
      },
      {
        type: 'header',
        content: "Prostate & Endourology Center"
      },
      {
        type: 'paragraph',
        content: "The Prostate & Endourology Center provides comprehensive evaluation and management of benign prostatic enlargement (BPH), large prostate glands requiring enucleation surgery, and complex renal/ureteric stones. Each patient undergoes structured assessment including symptom evaluation, imaging, and individualized treatment planning."
      },
      {
        type: 'list',
        items: [
          "Minimally invasive upper urinary tract procedures",
          "Precision-based endoscopic surgery with modern equipment",
          "Tailored surgical recommendations based on prostate size and patient expectations",
          "Standardized perioperative care for optimal recovery"
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-3.webp",
        caption: "A leading center for prostate enucleation and complex stone disease."
      },
      {
        type: 'header',
        content: "Clinical Philosophy"
      },
      {
        type: 'list',
        items: [
          "Anatomical enucleation techniques for complete tissue removal",
          "Evidence-based decision making",
          "Structured perioperative care",
          "Functional recovery and long-term durability"
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-4.webp",
        caption: "Committed to evidence-based care and anatomical precision."
      },
      {
        type: 'header',
        content: "Professional Experience"
      },
      {
        type: 'list',
        items: [
          "2019 - Present: Consulting Urologist at M-Trust Urology Clinic",
          "2019 - Present: Full-time urologist, Rayong Hospital, Rayong",
          "2017 - 2019: Full-time urologist, Chao Phraya Abhaibhubejhr Center Hospital",
          "Consulting Urologist: Dr. Phanpon Urology Clinic Rayong, Eternity Clinic, Sri Rayong Hospital, Bangkok Rayong Hospital"
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-5.webp",
        caption: "Providing comprehensive urological consulting and specialized surgical services."
      }
    ],
    specialties: ["Andrology & Sexual Dysfunction", "Prostate Disease", "Urinary Tract Stones", "Dorsal Neurectomy", "Penile Enhancement", "Minimal Invasive & Innovation Treatment"],
    qualifications: [
      { year: "2025", title: "Certificate of Attendance, Master the Transurethral Anatomical Enucleation of Prostate (TUAEP)", place: "TUAEP Masterclass" },
      { year: "2025", title: "Certificate of Completion, UROLIFT™ SYSTEM PROFICIENCY PATHWAY MODULE", place: "Teleflex Interventional Urology" },
      { year: "2022", title: "Certificate of Recognition, Rezūm Procedure Training Program", place: "Boston Scientific" },
      { year: "2020", title: "Certificate of Attendance, Endoscopic Stone Treatment Step 2", place: "SET - UP Programme, EAU" },
      { year: "2018", title: "Certificate of Attendance, Endoscopic Stone Treatment Step 1", place: "SET - UP Programme, EAU" },
      { year: "2017", title: "Diplomate Thai Board of Urology", place: "Siriraj Hospital, Mahidol University" },
      { year: "2012", title: "Doctor of Medicine", place: "Faculty of Medicine, Prince of Songkla University" }
    ],
    awards: [
      { year: "2025", title: "TUAEP Masterclass", issuer: "Certificate of Attendance" },
      { year: "2025", title: "UROLIFT™ SYSTEM Proficiency", issuer: "Certificate of Completion" },
      { year: "2022", title: "Rezūm Procedure Training", issuer: "Certificate of Recognition" }
    ],
    specializedFocus: "Minimally invasive BPH treatments using Rezūm (Water Vapor Therapy) and UroLift implants, alongside Dorsal Neurectomy and Penile Enhancement procedures.",
    surgicalExcellence: "Certified in advanced endoscopic stone treatment (EAU SET-UP), Rezūm, and UroLift, delivering high-quality urological care with a focus on patient safety and outcomes.",
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
    certificates: []
  },
];

export const ABOUT_SPECIALTIES = [
  { title: 'Performance Restoration', desc: 'Treat ED and restore vitality with innovative Li-ESWT technology.', Icon: Zap, image: '/assets/image/about section/Performance Restoration.webp' },
  { title: 'General & Surgical Urology', desc: 'Diagnosis and minimally invasive surgery for all urological conditions.', Icon: Stethoscope, image: '/assets/image/about section/General & Surgical Urology.webp' },
  { title: 'Prostate Center', desc: 'Advanced laser care for enlarged prostate and urinary symptoms.', Icon: Target, image: '/assets/image/about section/Prostate Center.webp' },
  { title: 'Cosmetic Urology', desc: 'Professional male aesthetic surgery and safe augmentation procedures.', Icon: Scissors, image: '/assets/image/about section/Cosmetic Urology.webp' }
];

export const FAQ_DATA: FaqItem[] = [
  { question: "Do I need a referral to make an appointment?", answer: "No, you can book an appointment directly with our specialists without a referral letter. We welcome both local and international patients." },
  { question: "Is the Shockwave therapy for ED painful?", answer: "Not at all. Focus Shockwave is a non-invasive, painless procedure requiring no anesthesia. Most patients describe a light tapping sensation." },
  { question: "What is the recovery time for a Vasectomy?", answer: "Our minimally invasive 'No-Scalpel' vasectomy allows for a very quick recovery. Most patients return to light work within 1-2 days and full activity within a week." },
  { question: "Do you accept health insurance?", answer: "We partner with major international insurance providers. Please bring your policy details, and our staff will assist with the pre-authorization process." },
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

      <div class="bg-amber-50 dark:bg-amber-900/10 p-6 rounded-2xl border border-amber-100 dark:border-amber-900/20 my-8">
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Key Differences Summary:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Longevity:</strong> Fat is permanent (dependent on survival), HA fills are temporary.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Texture:</strong> Fat feels softer; HA fillers are firmer.</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> <strong>Procedure:</strong> HA is < 30 mins (clinic); Fat transfer is minor surgery (sterility required).</li>
        </ul>
      </div>

      <h3 class="text-2xl font-black text-slate-900 dark:text-white uppercase mt-8 mb-4">Safety Warning: Avoid Paraffin & Silicone</h3>
      <p class="mb-6 leading-relaxed text-slate-600 dark:text-slate-300">
        <strong>NEVER</strong> inject liquid silicone, paraffin, or oils. These unauthorized substances cause severe granulomas, infection, and permanent deformity requiring complex reconstructive surgery to fix. Always choose FDA/Thai FDA approved medical methods performed by a specialist urologist.
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
    `
  },
];

export const EVENTS_DATA: EventData[] = [
  { id: 1, day: '14', month: 'MAR', year: '2026', title: "Men's Health Talk 2026", subtitle: 'Sexual Health & Wellness Seminar', location: 'Bangkok Hospital Pattaya, Meeting Room 1', time: '13:00 - 16:30', description: 'An in-depth seminar on men\'s health issues and erectile dysfunction. Meet special guest speakers who will demystify prostate health and ED, followed by a friendly Q&A session.', image: '/assets/image/urologist section/dr.niti.webp', category: 'SEMINAR' },
  { id: 2, day: '28', month: 'MAR', year: '2026', title: 'UroLift Success Stories', subtitle: 'Innovation for BPH Treatment', location: 'M-Trust Clinic Main Hall', time: '10:00 - 12:00', description: 'Listen to real experiences from patients treated with UroLift. A new innovation requiring no surgery, fast recovery, and preservation of sexual function. Free initial consultation included.', image: '/assets/image/services section/urolift menu.webp', category: 'WORKSHOP' },
  { id: 3, day: '05', month: 'APR', year: '2026', title: 'Future of Men Health 2026', subtitle: 'Trends & Personalised Care', location: 'Online Webinar (Zoom)', time: '19:00 - 20:30', description: 'Update on 6 men\'s health trends for 2026, ranging from Hyper-personalised care to Mental Fitness building strategies.', image: '/assets/image/about section/clinic inside.webp', category: 'WEBINAR' },
  { id: 4, day: '20', month: 'APR', year: '2026', title: 'Fit & Firm: Men Health', subtitle: 'Motorsport & Physical Peak', location: 'Bangsaen Circuit & Activity Area', time: '08:00 - 15:00', description: 'Health promotion activity in collaboration with Motorsport teams. Learn how to keep your body fit for any situation and self-care for high-performance lifestyles.', image: '/assets/image/services section/testosterone replacement therapy menu.webp', category: 'ACTIVITY' }
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


