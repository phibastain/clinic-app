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
  nameTH?: string;
  role: string;
  roleTH?: string;
  image: string;
  expert: string;
  expertTH?: string;
  hospital?: string;
  email?: string;
  website?: string;
  tagline?: string;
  taglineTH?: string;
  bio: string;
  bioTH?: string;
  specialties: string[];
  specialtiesTH?: string[];
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
    items?: string[];
    itemsTH?: string[];
    image?: string;
    images?: string[];
    caption?: string;
    captionTH?: string;
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
  id: string | number;
  day: string;
  month: string;
  year: string;
  title: string;
  titleTH?: string;
  subtitle: string;
  subtitleTH?: string;
  location: string;
  locationTH?: string;
  time: string;
  description: string;
  descriptionTH?: string;
  content?: string;
  contentTH?: string;
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
      { label: "Treatment Time", value: "30-40 Mins", icon: Timer },
      { label: "Downtime", value: "0 Days", icon: Activity },
      { label: "Result Duration", value: "1-2 Years", icon: Calendar }
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
      { step: '03', title: 'Complete', desc: 'Session ends in 30-40 mins. Resume normal activity immediately.' },
      { step: '04', title: 'Repeat', desc: 'Standard protocol: 3-6 sessions (1 time per week).' }
    ],
    faq: [
      { q: "How is Focus Shockwave better than Radial?", a: "Focus waves travel deeper and deliver energy exactly to the cavernous tissue to grow blood vessels. Radial waves only hit the skin surface and are meant for muscle pain, not ED cure." },
      { q: "When will I see results?", a: "Most patients begin to feel improvement starting from the very first session, with progressive results as they continue the treatment." },
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
    tagline: 'The Definitive Surgical Solution for Severe Erectile Dysfunction Reliable, On-Demand Erections.',
    whatIsIt: {
      title: 'What is a Penile Implant?',
      description: "A Penile Implant (or Penile Prosthesis) is a medical device surgically placed inside the penis to help men with severe Erectile Dysfunction (ED) achieve a firm erection for sexual intercourse. Widely regarded as the gold standard treatment when oral medications, injections, or other therapies are no longer effective, a penile implant offers a permanent and dependable solution that restores both spontaneity and sexual confidence.",
      image: '/assets/image/services section/penile implant/What is a Penile Implant.webp'
    },
    description: "A penile implant works by replacing damaged erectile tissue with medical-grade cylinders that replicate the natural erection process. There are two main types, each designed for different patient needs:\n\n**The Clinical Mechanism of Action:**\n\n1. **Inflatable Penile Implant (3-Piece):** This is the most popular option and closely mimics a natural erection. It consists of fluid-filled cylinders in the penis, a small pump in the scrotum, and a reservoir in the lower abdomen. Squeezing the pump transfers saline into the cylinders, producing a firm erection. A release valve allows the fluid to drain back, returning the penis to a soft, natural state.\n\n2. **Malleable (Semi-Rigid) Implant:** This device uses two flexible rods placed inside the penile shaft. The penis stays in a semi-rigid state and can be manually positioned — angled downward for daily comfort or upward for sexual activity. It's simpler and involves fewer mechanical components.\n\n**Why It Works:** Unlike medications that depend on blood flow, penile implants provide **mechanical support**, enabling a reliable erection virtually every time — regardless of underlying vascular or nerve conditions.",
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
      { title: 'Permanent Solution', desc: 'A single procedure that provides a lasting solution to erectile dysfunction.', icon: Infinity as any },
      { title: 'Natural Feel', desc: 'Modern 3-piece implants closely replicate natural firmness and appearance.', icon: CheckCircle2 },
      { title: 'On-Demand', desc: 'Discreet pump activation allows erections whenever you need them.', icon: Zap },
      { title: 'High Satisfaction', desc: 'Over 95% patient and partner satisfaction in clinical studies.', icon: Trophy }
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
      "Men with severe ED who have not responded to medications, injections, or shockwave therapy.",
      "Patients with nerve damage after prostate surgery or other pelvic procedures.",
      "Those who want a reliable, on-demand solution without daily medication.",
      "Men looking for a long-term, one-time surgical solution to erectile dysfunction."
    ],
    safety: {
      title: "Safety & Complications",
      content: "Modern penile implants have complication rates below 5%. Potential risks include infection (1-3%), mechanical issues (uncommon with current-generation devices), and erosion (very rare). Choosing an experienced urological surgeon with a high case volume significantly improves outcomes and reduces risk.",
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
      { q: "Will it look and feel natural?", a: "Yes. When deflated, a 3-piece inflatable implant is virtually undetectable — most partners cannot tell the difference from a natural erection." },
      { q: "Will I still be able to orgasm and ejaculate normally?", a: "Yes. The implant only restores firmness. Sensation, orgasm, and ejaculation remain completely unaffected." },
      { q: "How long does a penile implant last?", a: "Current-generation implants are designed to last 15 to 20 years. If needed, the device can be replaced with a straightforward revision surgery." }
    ]
  },
  'Dorsal Neurectomy': {
    title: 'Dorsal Neurectomy for Premature Ejaculation',
    tagline: 'A Permanent Surgical Solution for Premature Ejaculation Regain Control and Extend Intimacy Naturally.',
    whatIsIt: {
      title: 'What is Dorsal Neurectomy?',
      description: "Dorsal Neurectomy (DN) is a specialized surgical procedure recognized as one of the most effective permanent treatments for Primary Premature Ejaculation (PPE). It works by addressing the root cause of PE  penile hypersensitivity  through selective recalibration of the sensory nerves. This allows men to significantly extend their intravaginal ejaculatory latency time (IELT) and regain natural control during sexual activity.",
      image: '/assets/image/services section/dorsal neurectomy/What is Dorsal Neurectomy.webp'
    },
    // mechanismImageAspectRatio: 'aspect-[9/16]',
    description: "This procedure works at a neurological level to modulate the ejaculatory reflex. The goal is not to reduce pleasure, but to regulate the intensity of sensation so that ejaculation can be better controlled.\n\n**The Clinical Mechanism of Action:**\n\n1. **Targeted Nerve Identification and Selective Desensitization**: The surgeon carefully isolates the dorsal nerve bundle to identify the specific branches responsible for hypersensitivity. Using precision microsurgical instruments, a calculated portion of these peripheral nerve fibers is selectively divided. This reduces the excessive sensory input that triggers the rapid ejaculatory reflex.\n\n2. **Reflex Threshold Elevation:** By moderating the sensory signals, the biological 'trigger point' for ejaculation is raised. This means more stimulation and time are needed to reach the point of no return — giving you greater control.\n\n3. **Preservation of Function:** Importantly, the main nerve trunks remain intact. This ensures that normal tactile sensation, erection quality, and the ability to experience pleasure and orgasm are fully preserved. Only the *excess sensitivity* is addressed.",
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
      { title: 'Permanent Fix', desc: 'A single procedure — no need for lifelong medication or numbing sprays.', icon: Infinity as any },
      { title: 'Improves IELT', desc: 'Intravaginal Ejaculatory Latency Time typically increases 3-5x.', icon: Timer },
      { title: 'Preserves Sensation', desc: 'Only excess sensitivity is reduced — pleasurable sensation remains.', icon: HeartPulse },
      { title: 'High Satisfaction', desc: 'Over 80% of patients report significant improvement in control.', icon: Trophy }
    ],
    candidates: [
      "Men with lifelong (primary) premature ejaculation that has not responded to behavioral or medication therapy.",
      "Those experiencing penile hypersensitivity that causes loss of ejaculatory control.",
      "Men looking for a permanent surgical solution without ongoing medication.",
      "Patients with IELT (Intravaginal Ejaculatory Latency Time) consistently under 1 minute."
    ],
    safety: {
      title: "Safety & Side Effects",
      content: "When performed by an experienced urological surgeon, complications are uncommon. Potential risks include temporary numbness at the glans (which typically resolves within weeks), infection (less than 2%), and in rare cases, mild changes in erectile sensation. The vast majority of patients retain normal sensation and full erectile function.",
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
      { q: "Will I lose sensation completely?", a: "No. The procedure selectively targets only the specific nerve branches causing hypersensitivity. Enough sensation is preserved for full sexual pleasure — only the excess is reduced." },
      { q: "Is the result really permanent?", a: "Yes. Once the selected nerve fibers are divided, they do not regenerate in the same pattern. The results are long-lasting and do not require ongoing treatment." },
      { q: "Can dorsal neurectomy affect my erections?", a: "This is very rare. The dorsal sensory nerves primarily control sensation, not erection. An experienced surgeon ensures the motor and erectile nerve pathways are fully preserved." }
    ]
  },
  'Testosterone Replacement Therapy': {
    title: 'Testosterone Replacement Therapy (TRT)',
    tagline: 'Restore Your Energy, Libido, and Confidence — Medically Supervised Testosterone Optimization for Men.',
    whatIsIt: {
      title: 'What is Testosterone Replacement Therapy (TRT)?',
      description: "Testosterone Replacement Therapy (TRT) is a medically supervised treatment designed to restore testosterone levels in men with hypogonadism (clinically low testosterone). By bringing this essential hormone back to healthy physiological levels, TRT helps reverse symptoms like chronic fatigue, low libido, muscle loss, and mood changes — helping men regain their energy, mental clarity, and overall quality of life.",
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
      content: "TRT is safe when properly supervised by a specialist. Regular blood tests monitor testosterone, estradiol, hematocrit, and PSA levels. Possible side effects include polycythemia (elevated red blood cell count), acne, and potential cardiovascular considerations — all of which are manageable with proper medical oversight and dosage adjustment.",
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
      { q: "Is TRT a lifelong treatment?", a: "For most men, TRT is an ongoing therapy. Stopping treatment typically causes testosterone levels to return to baseline. However, some patients may use it cyclically under careful medical supervision." },
      { q: "Does TRT increase the risk of prostate cancer?", a: "Current medical evidence does not show that TRT causes prostate cancer. However, PSA levels are regularly monitored as a standard safety precaution." },
      { q: "What is the best way to take testosterone?", a: "Injections (weekly or biweekly) are the most reliable and cost-effective option. Topical gels provide steady daily absorption but cost more. Pellets (implanted every 3-6 months) offer convenience but require a minor in-office procedure." }
    ]
  },
  'ReZum': {
    title: 'ReZŪM Water Vapor Therapy for BPH',
    tagline: 'Minimally Invasive BPH Treatment Relieve Enlarged Prostate Symptoms Without Surgery Using Steam Therapy.',
    whatIsIt: {
      title: 'What is ReZŪM Water Vapor Therapy?',
      description: "ReZŪM Water Vapor Therapy is a minimally invasive, FDA-cleared procedure that uses the natural thermal energy of sterile water vapor (steam) to treat Benign Prostatic Hyperplasia (BPH). By targeting and shrinking the obstructive prostate tissue that causes urinary symptoms, ReZŪM provides lasting relief without the risks and long recovery associated with traditional prostate surgery.",
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
      content: "ReZŪM has an excellent safety profile and is FDA-cleared. Temporary side effects may include dysuria (discomfort during urination), traces of blood in the urine, or increased urgency for 1–2 weeks after the procedure. These typically resolve on their own. Importantly, ReZŪM preserves both erectile and ejaculatory function in the vast majority of patients.",
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
      { q: "Is the ReZŪM procedure painful?", a: "No. The procedure is performed under general anesthesia or deep sedation, so you will be asleep throughout and feel no discomfort at all." },
      { q: "Will ReZŪM affect my sexual function?", a: "ReZŪM preserves both erectile function and normal ejaculation in the vast majority of patients — a key advantage over traditional prostate surgery (TURP)." },
      { q: "How long do the results of ReZŪM last?", a: "Clinical studies demonstrate sustained symptom relief for at least 5 years, with many patients experiencing benefits well beyond that timeframe." }
    ]
  },
  'UroLift': {
    title: 'UroLift® System for BPH',
    tagline: 'Treat Enlarged Prostate Without Cutting or Heating Immediate Relief with Zero Sexual Side Effects.',
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
      { label: "Sexual Function", value: "Preserved", icon: HeartPulse }
    ],
    benefits: [
      { title: 'No Cutting/Heating', desc: 'Tissue is mechanically lifted, not destroyed. Minimally invasive.', icon: CheckCircle2 },
      { title: 'Immediate Relief', desc: 'Symptom improvement within days, not weeks.', icon: Timer },
      { title: 'Zero Sexual Side Effects', desc: 'Clinical trials show no impact on erectile or ejaculatory function.', icon: HeartPulse },
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
      content: "UroLift has an excellent safety profile. Mild, temporary side effects may include urgency, minor discomfort during urination, or traces of blood in the urine for a few days. In clinical trials, no cases of new-onset permanent erectile dysfunction or ejaculatory dysfunction were reported.",
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
      { q: "How many UroLift implants are needed?", a: "Typically 4-6 implants, depending on the size and anatomy of the prostate. Your urologist will determine the optimal number during assessment." },
      { q: "Can UroLift implants be felt inside the body?", a: "No. The implants are very small and remain permanently embedded within the prostate tissue. Patients cannot feel them at all." },
      { q: "What if my prostate grows larger in the future?", a: "Additional UroLift implants can be placed, or the procedure can be combined with other BPH treatments. Since UroLift does not destroy tissue, all future treatment options remain available." }
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
    tagline: 'Advanced Holmium Laser Lithotripsy Minimally Invasive Kidney and Bladder Stone Removal Without Open Surgery.',
    description: "Modern laser lithotripsy uses advanced Holmium lasers to fragment kidney and bladder stones into fine dust, which is then extracted or passed naturally. This minimally invasive approach eliminates the need for open surgery, offering rapid recovery and excellent success rates.",
    heroImage: '/assets/image/services section/stone disease menu.webp',
    whatIsIt: {
      title: 'What is Laser Lithotripsy for Stone Disease?',
      description: "Laser lithotripsy is a minimally invasive surgical procedure used to treat stones in the kidney, ureter, or bladder. Using a thin, flexible scope (ureteroscope) passed through the body's natural openings, the urologist uses a Holmium laser to break stones into tiny fragments or fine dust all without making a single incision.",
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
      content: "Laser lithotripsy has an excellent safety profile when performed by an experienced urologist. Minor risks include temporary hematuria (blood in urine), urinary urgency, or mild flank discomfort for a few days. Serious complications such as perforation or stricture are rare, occurring in fewer than 2% of cases.",
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
        { time: "Month 1", title: "Clearance Confirmation", desc: "Follow-up imaging to confirm stone-free status and ensure complete clearance." }
      ]
    },
    faq: [
      { q: "Does laser lithotripsy require any incisions?", a: "No. The entire procedure is performed through the urethra using a thin scope. There are no external cuts or incisions." },
      { q: "Will I need a ureteral stent after the procedure?", a: "In many cases, yes. A temporary stent helps drainage and prevents swelling. It is removed during a brief office visit after 1–2 weeks." },
      { q: "Can all kidney stones be treated with laser lithotripsy?", a: "Most kidney and ureteral stones can be effectively treated with laser. Very large stones (over 3cm) may require a different approach such as PCNL (percutaneous nephrolithotomy)." }
    ]
  },
  'Urinary Symptoms': {
    title: 'Comprehensive Urinary Symptom Diagnosis & Management',
    tagline: 'Expert Diagnosis for Frequent Urination, Weak Stream, Urgency, Incontinence, and Painful Urination.',
    description: "Urological conditions encompass a wide range of disorders affecting the urinary tract including the kidneys, ureters, bladder, and urethra in both men and women. In men, urology also covers reproductive organ and prostate health. Early detection and consulting a urologist are critical for effective treatment and preventing long-term complications.",
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
      { q: "What causes frequent urination in men?", a: "Common causes include BPH (enlarged prostate), overactive bladder (OAB), urinary tract infection (UTI), diabetes, or excessive fluid intake. A proper evaluation is needed to identify the specific cause." },
      { q: "Is urinary incontinence a normal part of aging?", a: "No. While urinary incontinence becomes more common with age, it is not inevitable and is often treatable with medication, behavioral therapy, or minimally invasive procedures." },
      { q: "What is uroflowmetry and how does it work?", a: "Uroflowmetry is a simple, non-invasive test that measures your urine flow rate and volume. You urinate into a special device that records the data, helping your urologist assess bladder and prostate function." }
    ]
  },
  'Circumcision': {
    title: 'Child & Adult Circumcision',
    tagline: 'Stapler and Standard Circumcision for Adults and Children Minimal Bleeding, Fast Recovery, and Clean Cosmetic Results.',
    whatIsIt: {
      title: 'Types of Medical Circumcision: Stapler vs. Standard',
      description: "We offer two primary methods for circumcision, tailored to patient needs and age:\n\n1. **Stapler Circumcision (ZSR):** A modern, innovative technique using a disposable device that cuts and staples simultaneously. It offers a faster procedure (10-15 mins), minimal bleeding, and a superior cosmetic result with a smooth, even scar line.\n\n2. **Standard Circumcision (Conventional):** The traditional surgical method using manual excision and absorbable sutures. This technique allows for precise customization of foreskin removal and is suitable for all complex cases.",
      image: '/assets/image/services section/circumcision/Types of Medical Circumcision.webp'
    },
    description: "Circumcision is a common procedure performed for both medical and personal reasons. Understanding the indications and benefits can help you make an informed decision.\n\n**Indications: Why is Circumcision Necessary?**\n\n*   **Phimosis:** Inability to retract the foreskin, causing pain and hygiene issues.\n*   **Paraphimosis:** A urologic emergency where retracted foreskin becomes trapped behind the glans.\n*   **Recurrent Balanitis/Balanoposthitis:** Frequent infection and inflammation of the glans and foreskin.\n*   **Lichen Sclerosus:** A skin condition causing scarring and tightening of the foreskin.\n\n**Medical Benefits of Circumcision:**\n\n*   **Improved Hygiene:** Removes the area where smegma and bacteria accumulate, making cleaning easier.\n*   **Reduced Infection Risk:** Significantly lowers the risk of Urinary Tract Infections (UTIs) and Sexually Transmitted Infections (STIs), including HIV and HPV.\n*   **Cancer Prevention:** Lower risk of penile cancer and reduced cervical cancer risk in female partners.\n*   **Aesthetic Preference:** Many men prefer the cleaner look and feel.",
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
      { q: "Is circumcision painful?", a: "Minimal pain during and after. Local anesthesia ensures comfort throughout the procedure. Most men only need over-the-counter pain relievers for a few days afterward." },
      { q: "When can I resume sexual activity after circumcision?", a: "Typically after 4 weeks, once the area is fully healed. Your doctor will confirm during a follow-up visit." },
      { q: "Do the staples need to be removed after stapler circumcision?", a: "No. The titanium staples dissolve or fall off naturally within 2–3 weeks as the wound heals." }
    ]
  },
  'Penile Enlargement': {
    title: 'Penile Girth Enhancement',
    tagline: 'Non-Surgical Penile Girth Enhancement with HA Filler. Natural Feel, Fully Reversible.',
    whatIsIt: {
      title: 'What is Penile Girth Enhancement with Filler?',
      description: "Penile girth enhancement with dermal filler is a non-surgical medical procedure designed to increase the circumference (thickness) of the penis using Hyaluronic Acid (HA) fillers. Performed by a board-certified urologist, this method provides visible results without invasive surgery, general anesthesia, or lengthy recovery. It is a well-established option for men seeking to improve penile girth safely and with minimal downtime.",
      image: '/assets/image/services section/penile enlargement/What is Penile Enlargement with Filler.webp'
    },
    description: "Hyaluronic Acid (HA) Filler\n\n1. **Non-Surgical Procedure**\nThe procedure involves injecting Hyaluronic Acid (HA) dermal filler into the subcutaneous layer of the penile shaft without any surgical incision.\n* **Key Advantage:** No incisions are made, so there is no visible scarring.\n* **Technique:** A blunt-tipped micro-cannula is used to distribute filler beneath the skin, which significantly reduces tissue trauma and minimizes the risk of infection.\n\n2. **Minimal Pain and Zero Downtime**\nDesigned for men who want effective results without disrupting their daily routine.\n* **Procedure Time:** The treatment takes approximately 30-45 minutes.\n* **Daily Life:** Patients can return to work and normal daily activities immediately after the procedure.\n* **Precaution:** Sexual activity should be avoided for approximately 4-7 days to allow the filler to settle properly.\n\n3. **Natural Look and Feel**\nHA filler provides a smooth, natural texture that blends seamlessly with existing tissue.\n* **Texture:** The filler material is soft and elastic, closely mimicking the feel of natural penile tissue.\n* **Appearance:** Even distribution ensures there are no hard lumps or unnatural irregularities.\n\n4. **Customizable Results**\nOne of the key advantages of filler-based enhancement is the flexibility to tailor results to individual preferences.\n* **Patient Control:** Patients can choose the volume of filler to achieve their desired level of girth enhancement.\n* **Future Touch-Ups:** Additional filler sessions can be scheduled in the future for those who want further enhancement.\n\n5. **Fully Reversible and Safe**\nHA fillers offer long-term peace of mind with a built-in safety mechanism.\n* **Reversibility:** If the patient is unsatisfied with the result or wishes to make adjustments, the filler can be completely dissolved using an enzyme called Hyaluronidase.\n* **Safety Standard:** The filler leaves no permanent residue or harmful substances in the body.",
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
      { title: 'Natural Feel', desc: 'Premium HA fillers feel soft and natural to the touch.', icon: CheckCircle2 },
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
      "Men seeking enhanced girth for aesthetic or confidence reasons.",
      "Those with realistic expectations and good overall health.",
      "Patients wanting a non-surgical, reversible option (HA fillers).",
      "Individuals desiring more confidence in intimate situations."
    ],
    safety: {
      title: "Safety & Risks",
      content: "When performed by experienced specialists using medical-grade products, girth enhancement is safe. Risks include temporary swelling, bruising, asymmetry (rare), or nodules (very rare). HA fillers can be dissolved with Hyaluronidase if any issues arise.",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Discuss goals, examine anatomy, and select the appropriate filler.' },
      { step: '02', title: 'Anesthesia', desc: 'Local anesthetic cream and nerve blocks applied for comfort.' },
      { step: '03', title: 'Injection', desc: 'Filler injected evenly along penile shaft using blunt micro-cannulas.' },
      { step: '04', title: 'Shaping', desc: 'Final contouring for smooth, even results. Post-care instructions provided.' }
    ],
    faq: [
      { q: "How long does penile filler last?", a: "HA fillers typically last 12-24 months depending on the product used and individual factors. The filler gradually dissolves naturally through the body's own metabolic processes, and the tissue returns to its pre-treatment state safely with no lasting residue." },
      { q: "Can I resume sexual activity after the procedure?", a: "Light, gentle activity may be possible after approximately 4-7 days. However, sexual intercourse and strenuous activities should be avoided for approximately 2-4 weeks to allow the filler to fully settle and the tissue to heal completely." },
      { q: "Will it look natural? Can others tell?", a: "When performed with proper technique by a qualified urologist, the results feel very close to natural tissue. There are no visible scars or obvious signs of the procedure." }
    ]
  },
  'Penile Lengthening': {
    title: 'Penile Lengthening Surgery',
    tagline: 'Permanent Penile Lengthening via Suspensory Ligament Release Performed by Board-Certified Urologists. Proven Technique with Lasting Results.',
    whatIsIt: {
      title: 'What is Penile Lengthening Surgery?',
      description: "Penile lengthening surgery is a urological procedure designed to increase the visible length of the penis, primarily in its flaccid state. The most well-established technique involves releasing the suspensory ligament, which anchors the penis to the pubic bone. By releasing this ligament, the internal portion of the penile shaft is allowed to advance forward, resulting in a measurable and permanent increase in visible length. This procedure is performed by board-certified urologists and is suitable for men seeking a structural, long-term solution.",
      image: '/assets/image/services section/penile lengthenning/what is penile lengthening surgery.webp'
    },
    description: "Suspensory ligament release is the most clinically established surgical method for achieving permanent penile lengthening. By addressing the anatomical attachment that keeps a portion of the penile shaft hidden internally, the surgeon can safely reveal length that is naturally present but concealed.\n\n**The Clinical Mechanism (Suspensory Ligament Release):**\n\n1. **Anatomical Basis:** Approximately 30–50% of the penile shaft is located internally, anchored to the pubic bone by the **suspensory ligament**. This ligament supports the upward angle during erection but also prevents the full length of the shaft from being visible externally.\n\n2. **Ligamentolysis (The Procedure):** Through a small, discreet incision in the pubic area, the surgeon carefully releases the suspensory ligament. This allows the internal shaft to extend forward, increasing the externally visible length of the penis.\n\n3. **Expected Results:** This technique typically yields a **2–4 cm gain** in flaccid length. The erection angle may shift slightly downward, but erectile function and penile sensation remain fully intact.\n\n4. **Post-Operative Care:** Regular massage and stretching are required for 3–6 months to prevent the ligament from reattaching or retracting to its original position, ensuring the full length gained from surgery is maintained.",
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
      { title: 'Clinically Proven', desc: 'Suspensory ligament release is a well-established urological procedure with documented outcomes.', icon: Scissors },
      { title: 'Permanent Results', desc: 'Typically 2-4 cm increase in visible flaccid length, with results that are structurally permanent.', icon: Ruler },
      { title: 'Combination Option', desc: 'Can be performed alongside girth enhancement for a more comprehensive result.', icon: Layers },
      { title: 'Non-Surgical Alternative Available', desc: 'Penile traction devices (extenders) offer gradual gains over 6-12 months for those who prefer a non-surgical approach.', icon: Target }
    ],
    candidates: [
      "Men with realistic expectations seeking a modest but permanent increase in visible length.",
      "Those who are committed to the post-operative massage and stretching routine, which is essential for optimal results.",
      "Patients in good general health with no active infections or bleeding disorders.",
      "Individuals who prefer a permanent surgical solution over temporary non-surgical devices."
    ],
    safety: {
      title: "Safety & Considerations",
      content: "When performed by an experienced urological surgeon, penile lengthening surgery is considered safe. Potential risks include mild scarring at the incision site, a slightly lower erection angle, temporary numbness, or modest gains that may not meet all expectations. Non-surgical traction therapy carries very low risk but requires discipline and consistent use over several months.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Post-Op Recovery Timeline",
      steps: [
        { time: "Week 1-2", title: "Initial Healing", desc: "Post-operative swelling and bruising gradually subside. A regular massage and stretching routine typically begins under doctor's guidance." },
        { time: "Month 1-3", title: "Active Recovery", desc: "Daily massage and stretching is essential to maintain and maximize the length gained from surgery." },
        { time: "Month 6-12", title: "Final Results", desc: "The recovery routine is gradually tapered. The final length stabilizes and full cosmetic healing is achieved." }
      ]
    },
    procedure: [
      { step: '01', title: 'Consultation & Planning', desc: 'Discuss your goals, review your anatomy, and determine the most appropriate surgical approach.' },
      { step: '02', title: 'Anesthesia & Incision', desc: 'Local or general anesthesia is administered. A small, discreet incision is made in the pubic area.' },
      { step: '03', title: 'Ligament Release', desc: 'The suspensory ligament is carefully released to allow the internal penile shaft to advance forward.' },
      { step: '04', title: 'Post-Op Care Plan', desc: 'A personalized massage and stretching plan is provided. Consistent daily practice for 3-6 months is critical for maintaining results.' }
    ],
    faq: [
      { q: "How much length can I expect to gain?", a: "Most patients achieve a 2-4 cm increase in visible flaccid length. Erect length gains are typically more modest (approximately 0.5-1.5 cm). Individual results depend on anatomy and adherence to the post-operative recovery routine." },
      { q: "Will the surgery affect my erection angle?", a: "The erection angle may shift slightly more forward or downward compared to before surgery. However, erectile function, rigidity, and sensation are not affected by the procedure." },
      { q: "Is post-operative massage and stretching necessary?", a: "Yes, regular massage and stretching are strongly recommended. Without consistent practice during the healing phase, scar tissue contraction may reduce or negate the length gained from surgery." }
    ]
  },
  'Excision of penile Paraffinoma': {
    title: 'Excision of Penile Paraffinoma (Foreign Body Removal)',
    tagline: 'Surgical Removal of Injected Foreign Substances and Penile Reconstruction Performed by Experienced Reconstructive Urologists.',
    whatIsIt: {
      title: 'What is Penile Paraffinoma?',
      description: "Penile paraffinoma is a serious medical condition caused by the injection of non-medical grade foreign substances such as paraffin, liquid silicone, or olive oil into the penis in an attempt to increase size. The human body cannot absorb or break down these materials, which triggers a chronic foreign body reaction leading to hard lumps (granulomas), tissue deformity, chronic inflammation, and severe damage that requires surgical intervention by an experienced reconstructive urologist.",
      image: '/assets/image/services section/excision of penile paraffinoma menu.webp'
    },
    description: "### The Severe Dangers of Penile Foreign Body Injections: Symptoms and Risks\nInjecting unapproved foreign substances into the penis such as olive oil, paraffin, or liquid silicone is a critical medical emergency and one of the most common cases seen in reconstructive urology. The human body cannot absorb or break down these materials, which inevitably triggers a severe and destructive foreign body reaction.\n\n#### 1. Symptoms of Penile Paraffinoma (Foreign Body Reaction)\nSymptoms rarely appear immediately after injection. It can take months or even years for the body's immune system to initiate a foreign body reaction. Symptoms progress from early inflammatory signs to severe tissue destruction:\n\n**Early Stage (Onset of Inflammation):**\n\n*   **Penile Deformity:** The penis develops an irregular, asymmetrical, and distorted shape.\n*   **Hard Lumps (Granulomas):** Firm, bumpy nodules form under the skin, feeling highly unnatural to the touch.\n*   **Skin Discoloration:** The skin around the injection site becomes abnormally dark, red, or bruised.\n\n**Severe Stage (Advanced Tissue Destruction):**\n\n*   **Intense Pain and Inflammation:** Severe pain, swelling, redness, and localized heat — especially during erection.\n*   **Skin Rupture and Chronic Ulcers:** The penile skin progressively thins until it tears open, leading to non-healing wounds.\n*   **Infection and Discharge:** Foul-smelling pus or lymphatic fluid continuously oozes from the ruptured skin.\n*   **Substance Migration:** The injected material can migrate into the scrotum or pubic area, causing massive abnormal swelling.\n\n#### 2. Complications of Delayed Treatment\nIf left untreated, the consequences of penile paraffinoma can be catastrophic and may result in the loss of the organ:\n\n*   **Penile Necrosis (Tissue Death):** The foreign substance compresses blood vessels, cutting off blood supply. The tissue turns black and dies, potentially requiring partial or complete penile amputation.\n*   **Sepsis (Bloodstream Infection):** Open ulcers and necrotic tissue serve as a breeding ground for dangerous bacteria. If infection enters the bloodstream, it becomes a life-threatening emergency.\n*   **Permanent Erectile Dysfunction:** Severe inflammation creates dense scar tissue (fibrosis) that constricts the penile shaft and damages nerves, making erections physically impossible or extremely painful.\n*   **Urethral Stricture and Urinary Retention:** If the migrated substance compresses the urethra, it causes difficulty urinating, which can lead to backward pressure that damages the bladder and kidneys.\n*   **Increased Cancer Risk:** Prolonged chronic inflammation over many years significantly increases the risk of cellular mutation, potentially leading to skin cancer in the affected area.",
    heroImage: '/assets/image/services section/excision of penile paraffinoma/excision of penile paraffinoma hero.webp',
    descriptionImage: '/assets/image/services section/excision of penile paraffinoma/excision of penile paraffinoma clinical mechanism.webp',
    video: null,
    stats: [
      { label: "Complexity", value: "High", icon: AlertCircle },
      { label: "Specialist", value: "Urologist", icon: Users },
      { label: "Surgery Time", value: "2-4 Hrs", icon: Timer },
      { label: "Recovery", value: "6-12 Wks", icon: Calendar }
    ],
    timeline: {
      title: "Reconstruction Recovery Timeline",
      steps: [
        { time: "Week 1-2", title: "Wound Care Phase", desc: "Acute healing period. Swelling is managed with specialized compression dressings. Close monitoring of skin graft viability." },
        { time: "Week 4-6", title: "Tissue Remodeling", desc: "Tissue begins to soften and heal. Light daily activities can be resumed gradually." },
        { time: "Month 3+", title: "Final Stabilization", desc: "Surgical outcome stabilizes. Assessment for staged reconstruction if further correction is needed." }
      ]
    },
    benefits: [
      { title: 'Specialist Expertise', desc: 'Performed by urologists experienced in complex penile reconstruction cases.', icon: Users },
      { title: 'Complete Foreign Body Removal', desc: 'Thorough excision of all granulomas, scar tissue, and foreign material.', icon: Scissors },
      { title: 'Functional Preservation', desc: 'Priority on preserving erectile function, sensation, and urinary function.', icon: HeartPulse },
      { title: 'Aesthetic Restoration', desc: 'Reconstruction using skin grafts or flaps to restore natural appearance as much as possible.', icon: CheckCircle2 }
    ],
    candidates: [
      "Men with a history of non-medical penile injections (paraffin, silicone, olive oil, or other substances) who are experiencing symptoms.",
      "Those with penile deformity, hard lumps (granulomas), pain, or erectile dysfunction caused by foreign body reaction.",
      "Patients with chronic wounds, infection, inflammation, or discharge at the injection site.",
      "Individuals seeking surgical removal before further complications develop."
    ],
    safety: {
      title: "Risks & Realistic Expectations",
      content: "Paraffinoma excision is a complex reconstructive procedure. The outcome depends on the severity of existing tissue damage and the volume of foreign material present. Potential risks include scarring, contour irregularities, changes in sensation, and in severe cases, some degree of compromised erectile function. Multiple staged procedures may be required for optimal reconstruction. Our team uses advanced surgical techniques and specialized equipment to achieve the best possible outcome.",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Diagnostic Assessment', desc: 'Thorough physical examination and imaging (MRI or ultrasound) to map the extent of foreign material and tissue damage.' },
      { step: '02', title: 'Surgical Excision', desc: 'Under general anesthesia, all granulomas, scar tissue, and foreign material are meticulously removed while preserving viable tissue.' },
      { step: '03', title: 'Reconstruction', desc: 'Skin grafts or tissue flaps are used to reconstruct the penile skin and restore both appearance and function.' },
      { step: '04', title: 'Post-Op Recovery', desc: 'Extended healing period (6-12 weeks). Close follow-up monitoring with potential revision surgery if needed.' }
    ],
    faq: [
      { q: "Can my penis look normal again after surgery?", a: "The outcome depends on the severity of existing damage. Our surgeons aim for maximum restoration of both appearance and function, but in severe cases with extensive tissue destruction, complete normalcy may not be fully achievable. Early treatment generally leads to better results." },
      { q: "Will this affect my erections or sexual function?", a: "Function recovery depends on the extent of nerve and tissue damage caused by the foreign substance. Our surgeons prioritize preserving erectile function during excision, but some degree of impairment may persist in cases with severe pre-existing damage." },
      { q: "Is there a cancer risk if I don't get treatment?", a: "Prolonged chronic inflammation from foreign body reaction can increase the risk of cellular mutation over time. This is one of the reasons why early surgical removal is strongly recommended — to prevent both the progressive tissue destruction and the long-term cancer risk." }
    ]
  },
  'Vasectomy': {
    title: 'Vasectomy (Permanent Male Contraception)',
    tagline: 'No-Scalpel Vasectomy The Safest and Most Effective Permanent Birth Control for Men. Quick Procedure, No Effect on Sexual Performance.',
    description: "A vasectomy is a minor outpatient procedure that provides permanent contraception by blocking the vas deferens the tubes that carry sperm from the testicles into the semen. It is recognized worldwide as the most effective form of birth control (over 99.9%), requires only local anesthesia, and most importantly, has absolutely no effect on testosterone levels, sexual desire, erections, or ejaculation. The semen volume remains unchanged it simply no longer contains sperm.",
    whatIsIt: {
      title: 'What is a No-Scalpel Vasectomy?',
      description: "A no-scalpel vasectomy is a modern, minimally invasive technique for permanent male contraception. Instead of a traditional incision, the urologist uses a specialized instrument to make a tiny puncture (3-5mm) in the scrotal skin to access the vas deferens. The tubes are then cut, sealed, or cauterized to permanently prevent sperm from reaching the semen. The procedure takes only 15-20 minutes under local anesthesia, and patients can go home the same day. Sexual function, hormone levels, and ejaculation remain completely unchanged."
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
    benefits: [
      { title: 'Highest Effectiveness', desc: 'Over 99.9% effective — the most reliable form of contraception available.', icon: Trophy },
      { title: 'No Effect on Sexual Function', desc: 'Erections, ejaculation, sensation, and semen volume remain completely normal.', icon: HeartPulse },
      { title: 'One-Time Permanent Solution', desc: 'A single procedure provides lifelong contraception. No pills, no devices, no repeat visits.', icon: Infinity as any },
      { title: 'Minimal Recovery Time', desc: 'Quick outpatient procedure. Most men return to normal activities within 1-2 days.', icon: Timer }
    ],
    candidates: [
      "Men who have completed their families and want a permanent, worry-free contraception method.",
      "Husbands who want to take on the responsibility of birth control to spare their partner from hormonal side effects.",
      "Couples seeking the most effective and safest long-term birth control option.",
      "Men who fully understand and accept that vasectomy is intended to be a permanent decision."
    ],
    safety: {
      title: "Safety & Reversibility",
      content: "No-scalpel vasectomy is one of the safest urological procedures. The risk of infection is extremely low (<1%), and serious complications are very rare. Testosterone production, sexual desire, and erectile function are completely unaffected. Vasectomy reversal (vasovasostomy) is technically possible but success rates decrease over time (50-90%), the procedure is expensive, and fertility restoration is not guaranteed. For this reason, vasectomy should be considered a permanent decision.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Post-Vasectomy Recovery Timeline",
      steps: [
        { time: "Day 1-3", title: "Initial Recovery", desc: "Mild discomfort and swelling. Ice packs and rest recommended. Avoid heavy lifting." },
        { time: "Month 1-3", title: "Sperm Clearance Phase", desc: "Residual sperm may still be present in the downstream tubes. Continue using backup contraception until a semen analysis confirms zero sperm count." },
        { time: "Month 3+", title: "Sterility Confirmed", desc: "A semen analysis confirms zero sperm. Full contraception is now achieved." }
      ]
    },
    procedure: [
      { step: '01', title: 'Local Anesthesia', desc: 'Local anesthetic is applied to the scrotal area. The patient remains awake and comfortable throughout.' },
      { step: '02', title: 'No-Scalpel Access', desc: 'A tiny puncture (3-5mm) is made using a specialized instrument to access the vas deferens — no scalpel required.' },
      { step: '03', title: 'Ligation & Sealing', desc: 'The vas deferens is cut, tied, and/or cauterized on both sides to permanently block sperm passage.' },
      { step: '04', title: 'Closure & Discharge', desc: 'The puncture is closed with a small dressing. No stitches needed. Patients go home the same day.' }
    ],
    faq: [
      { q: "Is the vasectomy effective immediately?", a: "No. Residual sperm remain in the downstream portion of the vas deferens for several weeks after the procedure. You must continue using backup contraception until a semen analysis (performed approximately 3 months post-procedure) confirms a zero sperm count." },
      { q: "Will it affect my sex drive, weight, or hormones?", a: "No. The testicles continue to produce testosterone normally. Your sex drive, erections, orgasm intensity, and ejaculation volume are completely unaffected. Vasectomy has no hormonal side effects." },
      { q: "Can a vasectomy be reversed?", a: "Vasectomy reversal (vasovasostomy) is technically possible using microsurgery. However, success rates decrease over time (50-90% depending on years elapsed), the procedure is costly, and fertility restoration is not guaranteed. Vasectomy should be viewed as a permanent decision." }
    ]
  },
  'Flexible Cystoscopy': {
    title: 'Flexible Cystoscopy (Bladder Examination)',
    tagline: 'High-Definition Bladder and Urethral Examination Quick, Comfortable, and Performed Under Local Anesthesia with No Downtime.',
    heroImage: '/assets/image/services section/flexible cystoscopy menu.webp',
    whatIsIt: {
      title: 'What is Flexible Cystoscopy?',
      description: "Flexible cystoscopy is a minimally invasive diagnostic procedure that allows a urologist to directly examine the lining of the bladder and the urethra using a thin, soft, bendable scope. Unlike older rigid cystoscopes, the flexible design follows the body's natural curves, resulting in significantly less discomfort. The procedure is performed under local anesthesia (topical gel), takes only 5-10 minutes, and patients can return to normal activities immediately afterward."
    },
    description: "This advanced diagnostic tool is essential for identifying the root cause of urinary symptoms. By providing a clear, direct view of the urinary tract, it ensures accurate diagnosis and effective treatment planning.\n\n**The Clinical Mechanism & Diagnostic Power:**\n\n1. **High-Definition Visualization:** The flexible cystoscope is equipped with a high-resolution camera and light source. It is gently inserted through the urethra, allowing the doctor to inspect the **entire bladder lining**, **urethra**, and **prostate** (in men) with exceptional clarity.\n\n2. **What We Detect:**\n   *   **Hematuria:** Investigates the source of blood in the urine.\n   *   **Bladder Tumors:** Early detection of bladder cancer or polyps.\n   *   **Stones:** Identifies bladder stones causing pain or blockage.\n   *   **Strictures:** Detects narrowing of the urethra hindering urine flow.\n   *   **BPH:** Assesses the degree of prostate enlargement blocking the urethra.\n\n3. **Why 'Flexible' Matters:** The soft, pliable design causes **minimal friction** and **significantly less discomfort** compared to rigid scopes. Performed under local anesthesia (topical gel), the procedure is quick (5-10 mins) and patients can return to normal activities immediately.",
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
    stats: [
      { label: "Diagnostic Accuracy", value: "95%+", icon: Trophy },
      { label: "Procedure Time", value: "5-10 Min", icon: Timer },
      { label: "Recovery", value: "None", icon: Activity },
      { label: "Anesthesia", value: "Topical Gel", icon: ShieldCheck }
    ],
    benefits: [
      { title: 'Minimal Discomfort', desc: 'Topical anesthetic gel and flexible scope design ensure a comfortable experience with minimal pain.', icon: Smile as any },
      { title: 'Immediate Results', desc: 'Real-time high-definition visualization. Doctor can identify findings instantly during the procedure.', icon: Timer },
      { title: 'No Hospitalization', desc: 'Performed in-office under local anesthesia. No admission required. Resume normal activities the same day.', icon: Activity },
      { title: 'Direct Visualization', desc: 'Directly detects bladder stones, tumors, urethral strictures, and inflammation with over 95% accuracy.', icon: Microscope }
    ],
    candidates: [
      "Patients with hematuria (blood in urine) requiring investigation of the cause.",
      "Those with recurrent or chronic urinary tract infections (UTIs).",
      "Men experiencing lower urinary tract symptoms (LUTS) such as weak stream, frequent urination, or incomplete emptying.",
      "Patients requiring bladder cancer surveillance after previous treatment."
    ],
    safety: {
      title: "Safety & Comfort",
      content: "Flexible cystoscopy is an extremely safe procedure. The most common after-effect is a mild burning sensation during the first 1-2 urinations, which resolves within 24 hours. Drinking plenty of water after the procedure helps. Serious complications such as infection or significant bleeding are very rare (<1%).",
      icon: ShieldCheck
    },
    procedure: [
      { step: '01', title: 'Preparation', desc: 'Topical anesthetic gel is applied to the urethra for numbing and lubrication. Patient lies comfortably on the exam table.' },
      { step: '02', title: 'Scope Insertion', desc: 'The thin, flexible scope is gently inserted through the urethra into the bladder. Most patients feel only mild pressure.' },
      { step: '03', title: 'Examination', desc: 'Sterile water gently fills the bladder for optimal visualization. The doctor examines the urethra and entire bladder lining on a monitor.' },
      { step: '04', title: 'Completion', desc: 'Scope is removed. Results are discussed immediately. Patient can get dressed and leave right away.' }
    ],
    faq: [
      { q: "Is the procedure painful?", a: "Most patients describe it as mild pressure or a brief stinging sensation rather than pain. The flexible scope bends to follow the body's natural curves, and the topical anesthetic gel significantly reduces discomfort." },
      { q: "How should I prepare for the procedure?", a: "No fasting is required. You can eat and drink normally before your appointment. It is recommended to empty your bladder before the procedure begins." },
      { q: "Will I experience discomfort when urinating afterward?", a: "A mild burning sensation during the first 1-2 urinations is normal and temporary. Drinking plenty of water helps flush the urinary tract. Symptoms typically resolve completely within 24 hours." }
    ]
  },
  'Ultrasound': {
    title: 'Advanced Urological Ultrasound & Doppler',
    tagline: 'Non-Invasive, Radiation-Free Imaging for Kidney Stones, Prostate Evaluation, ED Diagnosis, and Male Reproductive Health.',
    description: "",
    whatIsIt: {
      title: 'What is Urological Ultrasound?',
      description: "Urological ultrasound uses high-frequency sound waves to create real-time images of the kidneys, bladder, prostate, and reproductive organs. It is a non-invasive, radiation-free diagnostic tool that allows urologists to visualize internal structures, detect kidney and bladder stones, measure organ size, and evaluate blood flow using Doppler technology. The procedure is completely painless, requires no anesthesia, and results are available immediately.",
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
    benefits: [
      { title: 'Non-Invasive & Painless', desc: 'No needles, no radiation, no anesthesia. Completely painless and safe for repeated examinations.', icon: ShieldCheck },
      { title: 'Doppler Blood Flow Analysis', desc: 'Advanced Doppler technology visualizes arterial and venous blood flow for accurate ED and varicocele diagnosis.', icon: Activity },
      { title: 'Comprehensive Evaluation', desc: 'Evaluates kidneys, bladder, prostate, testicles, and reproductive organs in a single session.', icon: Search },
      { title: 'Immediate Results', desc: 'Doctor reviews key findings with you immediately after the scan. Full report within 24 hours.', icon: Timer }
    ],
    candidates: [
      "Patients with suspected kidney or bladder stones requiring confirmation.",
      "Men with lower urinary tract symptoms (LUTS) for prostate size evaluation.",
      "Those investigating vascular causes of erectile dysfunction (ED).",
      "Couples investigating male factor infertility (varicocele screening).",
      "Patients requiring monitoring of cysts, masses, or structural abnormalities."
    ],
    safety: {
      title: "Safety & Information",
      content: "Ultrasound is completely safe, painless, and uses no ionizing radiation. There are no known side effects or risks. The procedure can be repeated as often as medically necessary without any harm to the body.",
      icon: ShieldCheck
    },
    timeline: {
      title: "Imaging Process & Results",
      steps: [
        { time: "Visit", title: "Ultrasound Scanning", desc: "Non-invasive scan takes 15-30 minutes depending on the areas being examined." },
        { time: "Same Day", title: "Preliminary Review", desc: "Doctor reviews and discusses key findings with you immediately after the scan." },
        { time: "24 Hours", title: "Full Report", desc: "Comprehensive documented report with images provided for your medical records and follow-up consultation." }
      ]
    },
    procedure: [
      { step: '01', title: 'Preparation', desc: 'For bladder scan, drink 500ml of water 1 hour prior. No fasting is needed for other scans.' },
      { step: '02', title: 'Gel Application', desc: 'Warm ultrasound gel is applied to the skin to improve sound wave transmission and image quality.' },
      { step: '03', title: 'Scanning', desc: 'The specialist gently moves the ultrasound probe over the area. Real-time images appear on the monitor.' },
      { step: '04', title: 'Results', desc: 'The doctor discusses preliminary findings immediately. A detailed report with images is provided within 24 hours.' }
    ],
    faq: [
      { q: "Is Penile Doppler ultrasound painful?", a: "The ultrasound itself is painless. A small injection of medication may be administered to induce an erection for accurate blood flow measurement. Most patients describe only mild discomfort from the injection." },
      { q: "How should I prepare for a KUB ultrasound?", a: "A full bladder helps visualize the bladder walls clearly. We recommend drinking 500ml of water approximately 1 hour before your appointment. No fasting is required." },
      { q: "Can ultrasound detect cancer?", a: "Ultrasound can detect suspicious masses, tumors, or structural abnormalities. If a suspicious finding is identified, further testing such as MRI or biopsy may be recommended for definitive diagnosis." }
    ]
  },
  'Lab Testing': {
    title: 'Comprehensive Men\'s Health Lab Testing',
    tagline: 'Precision Blood Tests, Hormone Panels, STD Screening, and Fertility Analysis Confidential Results in 24-48 Hours.',
    description: "Our laboratory offers specialized panels designed specifically for men's health. From detecting early signs of erectile dysfunction and hormonal imbalances to comprehensive STD screening and fertility analysis, we provide fast, accurate, and confidential results to guide your treatment plan.",
    heroImage: '/assets/image/services section/lab testing menu.webp',
    whatIsIt: {
      title: 'What is Comprehensive Lab Testing?',
      description: "Our comprehensive lab testing services provide a thorough analysis of your biological health. We use state-of-the-art diagnostic technology to analyze hormone levels, screen for sexually transmitted infections, evaluate fertility, and monitor metabolic function. This data-driven approach allows our specialist urologists to create highly personalized treatment plans tailored to your specific needs.",
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
      { title: 'Specialized Men\'s Health Panels', desc: 'Full range of tests specifically designed for men\'s sexual health, hormones, fertility, and cancer screening.', icon: Microscope },
      { title: 'Fast & Confidential', desc: 'Most results available within 24-48 hours. All information is handled with strict patient confidentiality.', icon: Timer },
      { title: 'Specialist Interpretation', desc: 'All results are personally reviewed and explained by specialist urologists, not just automated lab reports.', icon: FileText },
      { title: 'One-Stop Service', desc: 'Consultation, sample collection, laboratory analysis, and treatment planning — all in a single visit.', icon: Target }
    ],
    candidates: [
      "Men over 40 requiring annual prostate and health screening.",
      "Patients experiencing low libido, fatigue, or erectile dysfunction.",
      "Couples planning for pregnancy (fertility assessment).",
      "Individuals seeking peace of mind regarding STDs/STIs.",
      "Men monitoring testosterone therapy levels."
    ],
    timeline: {
      title: "Testing Process & Results",
      steps: [
        { time: "Hour 1", title: "Sample Collection", desc: "Quick blood draw or sample collection in a private, comfortable room." },
        { time: "24-48 Hrs", title: "Result Delivery", desc: "Most results are available within 24 hours. Specialized cultures may take 48-72 hours." },
        { time: "Review", title: "Expert Consultation", desc: "Meet with a specialist urologist to review your results and discuss treatment options." }
      ]
    },
    procedure: [
      { step: '01', title: 'Consultation', desc: 'Doctor recommends specific test panels based on your medical history, symptoms, and health goals.' },
      { step: '02', title: 'Sample Collection', desc: 'Blood draw, urine sample, or semen collection performed in a private room with full confidentiality.' },
      { step: '03', title: 'Laboratory Analysis', desc: 'Samples are processed using certified, high-accuracy diagnostic equipment meeting international standards.' },
      { step: '04', title: 'Results Review', desc: 'Doctor personally explains your results in detail and discusses appropriate treatment options if needed.' }
    ],
    faq: [
      { q: "Do I need to fast before testing?", a: "For hormonal panels (Testosterone) and metabolic panels (Blood Sugar, Lipid Profile), fasting for 8-12 hours is recommended. Drinking plain water is allowed." },
      { q: "How long does it take to get results?", a: "Most blood and urine test results are available within 24 hours. Specialized cultures or PCR tests may take 48-72 hours." },
      { q: "Is the testing process private and confidential?", a: "Yes. We provide a private, comfortable room for all sample collection. All patient data and results are handled with the highest level of confidentiality." }
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
    roleTH: 'ศัลยแพทย์ระบบทางเดินปัสสาวะและผู้เชี่ยวชาญสุขภาพชาย',
    image: '/assets/image/urologist section/dr.niti.webp',
    expert: 'Penile Prosthesis | UroLift | Rezūm Specialist',
    hospital: 'Bangkok Hospital Pattaya',
    email: 'niti.menshealth@gmail.com',
    website: 'https://www.mtrusturology.com',
    tagline: 'A Journey of Dedication, Expertise, and Compassion in Men\'s Health',
    taglineTH: 'เส้นทางแห่งความมุ่งมั่น ความเชี่ยวชาญ และความเอาใจใส่ในสุขภาพชาย',
    bio: "Dr. Niti Navanimitkul is one of Thailand’s premier experts in urology and men’s health. He combines profound medical expertise with a patient-first, holistic approach.",
    bioTH: 'นพ. นิธิ นาวานิมิตกุล เป็นหนึ่งในผู้เชี่ยวชาญชั้นนำของไทยด้านระบบทางเดินปัสสาวะและสุขภาพชาย ผสานความเชี่ยวชาญทางการแพทย์เข้ากับแนวทางการดูแลแบบองค์รวมที่ยึดผู้ป่วยเป็นศูนย์กลาง',
    bioContent: [
      {
        type: 'header',
        content: "Elevating Men’s Health Care in Thailand: Dr. Niti Navanimitkul",
        contentTH: 'ยกระดับการดูแลสุขภาพชายในประเทศไทย: นพ. นิธิ นาวานิมิตกุล'
      },
      {
        type: 'paragraph',
        content: "Dr. Niti Navanimitkul is one of Thailand’s premier experts in urology and men’s health. He combines profound medical expertise with a patient-first, holistic approach. Driven by a passion for continuous learning and innovation, Dr. Niti is dedicated to empowering men to take control of his physical, emotional, and psychological well-being.",
        contentTH: 'นพ. นิธิ นาวานิมิตกุล มุ่งมั่นในการรักษาและเรียนรู้นวัตกรรมอย่างต่อเนื่องเพื่อนำมาพัฒนาวิธีการรักษาให้ได้ผลลัพธ์ที่ดียิ่งขึ้น นพ. นิธิ อุทิศตนเพื่อช่วยให้ผู้ป่วยสามารถดูแลสุขภาพกาย อารมณ์ และจิตใจ ให้กลับมามีความมั่นใจ กลับมาใช้ชีวิตได้อย่างเป็นปกติอีกครั้ง'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-1.webp",
        caption: "Dr. Niti Navanimitkul: Thailand's leading men's health specialist.",
        captionTH: 'นพ. นิธิ นาวานิมิตกุล: ผู้เชี่ยวชาญด้านสุขภาพชายชั้นนำของประเทศไทย'
      },
      {
        type: 'header',
        content: "World-Class Urology Expertise & High Success Rates",
        contentTH: 'ความเชี่ยวชาญด้านระบบทางเดินปัสสาวะระดับโลก และอัตราความสำเร็จสูง'
      },
      {
        type: 'paragraph',
        content: "Dr. Niti specializes in cutting-edge, minimally invasive procedures designed to restore function and improve the quality of life for his patients. He is at the forefront of treating complex urological conditions, offering highly effective solutions:",
        contentTH: 'นพ. นิธิ เชี่ยวชาญในการทำหัตถการที่ล้ำสมัยและส่งผลกระทบน้อย เพื่อฟื้นฟูการทำงานและยกระดับคุณภาพชีวิตผู้ป่วย อีกทั้งยังเป็นแพทย์แถวหน้า ในการรักษาโรคระบบทางเดินปัสสาวะที่มีความซับซ้อนสูง ด้วยวิธีที่มีประสิทธิภาพสูง'
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
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-2.webp",
        caption: "Highly certified in urology, Dr. Niti provides the most advanced men's healthcare.",
        captionTH: 'นพ. นิธิ ผู้ได้รับการรับรองสูงสุดด้านระบบทางเดินปัสสาวะ มอบการดูแลสุขภาพชายที่ล้ำสมัยที่สุด'
      },
      {
        type: 'header',
        content: "Extensive Training & Board Certifications",
        contentTH: 'การฝึกอบรมเข้มข้นและใบรับรองความเชี่ยวชาญ'
      },
      {
        type: 'paragraph',
        content: "A graduate of one of Thailand's most prestigious medical schools, Dr. Niti discovered his passion for men's health early in his career. He has since honed his skills through specialized fellowships and training at leading medical institutions.\n\nAs a lifelong learner, he holds numerous certifications in urology and consistently participates in international medical conferences. This dedication ensures his patients always have access to the most advanced, evidence-based treatments available globally.",
        contentTH: 'นพ. นิธิ สำเร็จการศึกษาจากคณะแพทยศาสตร์ชั้นนำที่มีชื่อเสียงที่สุดแห่งหนึ่งของประเทศไทย และได้ค้นพบความมุ่งมั่นทุ่มเทในการดูแลสุขภาพบุรุษมาตั้งแต่ช่วงเริ่มแรกของเส้นทางวิชาชีพ ท่านได้สั่งสมประสบการณ์และทักษะความเชี่ยวชาญผ่านการฝึกอบรมเฉพาะทางจากสถาบันการแพทย์ระดับแนวหน้า\n\nในฐานะผู้ที่ใฝ่เรียนรู้อยู่เสมอ นพ. นิธิ ได้รับวุฒิบัตรรับรองในสาขาศัลยศาสตร์ยูโรวิทยา (ระบบทางเดินปัสสาวะ) มากมาย และเข้าร่วมการประชุมวิชาการทางการแพทย์ระดับนานาชาติอย่างสม่ำเสมอ ความมุ่งมั่นนี้เองที่ทำให้คนไข้ของท่านมั่นใจได้ว่าจะสามารถเข้าถึงการรักษาที่ทันสมัยที่สุดและอ้างอิงตามหลักฐานทางวิชาการล่าสุดที่เป็นมาตรฐานสากลจากทั่วโลก'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-3.webp",
        caption: "World-class trained urologist mastering advanced clinical techniques.",
        captionTH: 'ศัลยแพทย์ระบบทางเดินปัสสาวะผู้ผ่านการฝึกอบรมระดับโลก เชี่ยวชาญเทคนิคคลินิกขั้นสูง'
      },
      {
        type: 'header',
        content: "A Holistic, Patient-Centric Philosophy",
        contentTH: 'ปรัชญาการดูแลแบบองค์รวม ยึดผู้ป่วยเป็นศูนย์กลาง'
      },
      {
        type: 'paragraph',
        content: "What truly sets Dr. Niti apart is his compassionate, holistic approach. He understands that urological conditions impact not just the physical body, but also emotional well-being. By taking the time to listen and understand each patient's unique concerns, he crafts tailored, comprehensive treatment plans. His dedication to excellence in patient care, diagnosis, and education has earned him numerous accolades and the deep trust of both colleagues and patients.",
        contentTH: 'สิ่งที่ทำให้ นพ. นิธิ โดดเด่นอย่างแท้จริงคือแนวทางการรักษาด้วยความใส่ใจและมองอย่างรอบด้าน (Holistic Approach) ท่านตระหนักดีว่าอาการเจ็บป่วยทางระบบทางเดินปัสสาวะไม่ได้ส่งผลกระทบเพียงแค่ร่างกายเท่านั้น แต่ยังส่งผลต่อสภาวะจิตใจและความเป็นอยู่ที่ดีอีกด้วย\n\nด้วยการให้ความสำคัญกับการรับฟังและทำความเข้าใจความกังวลเฉพาะตัวของผู้ป่วยแต่ละราย นพ. นิธิ จึงสามารถออกแบบแผนการรักษาที่เหมาะสมและครอบคลุมความต้องการของคนไข้ได้อย่างตรงจุด ความทุ่มเทเพื่อความเป็นเลิศทั้งในด้านการดูแลผู้ป่วย การวินิจฉัย และการให้ความรู้ทางการแพทย์ ส่งผลให้ท่านได้รับรางวัลเชิดชูเกียรติมากมาย ตลอดจนได้รับความไว้วางใจอย่างลึกซึ้งจากทั้งเพื่อนร่วมวิชาชีพและผู้รับบริการเสมอมา'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/biography/Professional Profile-4.webp",
        caption: "Patient-Centric Care Environment",
        captionTH: 'สภาพแวดล้อมการดูแลที่ยึดผู้ป่วยเป็นศูนย์กลาง'
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
    expertTH: 'Minimal Invasive & Innovation',
    hospital: 'Bangkok Hospital Pattaya',
    email: '',
    website: '',
    tagline: 'Expert in Minimal Invasive & Innovation Treatment',
    taglineTH: 'ผู้เชี่ยวชาญการรักษาแบบรุกรานน้อยและนวัตกรรม',
    bio: "Dr. Phanpon Leelahawong is a board-certified urologist with extensive experience in high-volume endoscopic surgery for benign prostatic enlargement and complex urinary stone disease. His clinical focus centers on advanced transurethral and enucleation-based techniques, offering definitive surgical solutions for patients with moderate to large prostate glands.",
    bioTH: 'นพ. ภาณพ ลีลาวงศ์ เป็นแพทย์ศัลยกรรมระบบทางเดินปัสสาวะที่ได้รับการรับรองจากคณะกรรมการแพทย์ มีประสบการณ์กว้างขวางด้านการผ่าตัดส่องกล้องปริมาณสูงสำหรับต่อมลูกหมากโตชนิดไม่ร้ายแรงและนิ่วในทางเดินปัสสาวะที่ซับซ้อน ความเชี่ยวชาญทางคลินิกของเขาครอบคลุมเทคนิคผ่านทางท่อปัสสาวะและการตัดต่อมขั้นสูง เพื่อมอบแนวทางการผ่าตัดที่เด็ดขาดสำหรับผู้ป่วยที่มีต่อมลูกหมากขนาดกลางถึงขนาดใหญ่',
    bioContent: [
      {
        type: 'header',
        content: "Expertise in Advanced Enucleation & Endourology",
        contentTH: 'ความเชี่ยวชาญด้านการตัดต่อมขั้นสูงและการส่องกล้องระบบทางเดินปัสสาวะ'
      },
      {
        type: 'paragraph',
        content: "Dr. Phanpon has substantial experience in transurethral resection (TURP), bipolar enucleation (TUERP/BipoLEP), and modern laser-based enucleation techniques (HoLEP). His practice emphasizes complete adenoma removal using anatomical enucleation principles for durable long-term outcomes.",
        contentTH: 'นพ. ภาณพ มีประสบการณ์มากด้านการตัดชิ้นเนื้อผ่านท่อปัสสาวะ (TURP) การตัดต่อมแบบไบโพลาร์ (TUERP/BipoLEP) และเทคนิคการตัดต่อมด้วยเลเซอร์สมัยใหม่ (HoLEP) โดยเน้นการนำต่อมออกอย่างสมบูรณ์ตามหลักกายวิภาคศาสตร์ เพื่อผลลัพธ์ระยะยาวที่ยั่งยืน'
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-1.webp",
        caption: "Dr. Phanpon performing advanced laser enucleation for large prostate cases.",
        captionTH: 'นพ. ภาณพ กำลังทำการตัดต่อมด้วยเลเซอร์ขั้นสูงสำหรับผู้ป่วยต่อมลูกหมากขนาดใหญ่'
      },
      {
        type: 'header',
        content: "Surgical Volume & Clinical Experience",
        contentTH: 'ปริมาณการผ่าตัดและประสบการณ์ทางคลินิก'
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
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-2.webp",
        caption: "Extensive surgical experience with over 900 urological procedures.",
        captionTH: 'ประสบการณ์ผ่าตัดกว้างขวาง ด้วยหัตถการระบบทางเดินปัสสาวะมากกว่า 900 ครั้ง'
      },
      {
        type: 'header',
        content: "Prostate & Endourology Center",
        contentTH: 'ศูนย์ต่อมลูกหมากและการส่องกล้องระบบทางเดินปัสสาวะ'
      },
      {
        type: 'paragraph',
        content: "The Prostate & Endourology Center provides comprehensive evaluation and management of benign prostatic enlargement (BPH), large prostate glands requiring enucleation surgery, and complex renal/ureteric stones. Each patient undergoes structured assessment including symptom evaluation, imaging, and individualized treatment planning.",
        contentTH: 'ศูนย์ต่อมลูกหมากและการส่องกล้องฯ ให้บริการประเมินและดูแลต่อมลูกหมากโตชนิดไม่ร้ายแรง (BPH) ต่อมขนาดใหญ่ที่ต้องผ่าตัดตัดออก รวมถึงนิ่วในไตและท่อไตที่ซับซ้อน ผู้ป่วยทุกรายได้รับการประเมินอย่างเป็นระบบ ครอบคลุมการประเมินอาการ การถ่ายภาพ และการวางแผนรักษาเฉพาะบุคคล'
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
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-3.webp",
        caption: "A leading center for prostate enucleation and complex stone disease.",
        captionTH: 'ศูนย์ชั้นนำด้านการตัดต่อมลูกหมากและโรคนิ่วที่ซับซ้อน'
      },
      {
        type: 'header',
        content: "Clinical Philosophy",
        contentTH: 'ปรัชญาทางคลินิก'
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
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-4.webp",
        caption: "Committed to evidence-based care and anatomical precision.",
        captionTH: 'มุ่งมั่นต่อการดูแลบนหลักฐานเชิงประจักษ์และความแม่นยำทางกายวิภาค'
      },
      {
        type: 'header',
        content: "Professional Experience",
        contentTH: 'ประสบการณ์วิชาชีพ'
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
        ]
      },
      {
        type: 'image',
        image: "/assets/image/urologist section/dr.phanpon-biography/Professional Profile-5.webp",
        caption: "Providing comprehensive urological consulting and specialized surgical services.",
        captionTH: 'ให้บริการปรึกษาระบบทางเดินปัสสาวะครบวงจรและบริการผ่าตัดเฉพาะทาง'
      }
    ],
    specialties: ["Andrology & Sexual Dysfunction", "Prostate Disease", "Urinary Tract Stones", "Dorsal Neurectomy", "Penile Enhancement", "Minimal Invasive & Innovation Treatment"],
    specialtiesTH: ['Andrology & Sexual Dysfunction', 'Prostate Disease', 'Urinary Tract Stones', 'Dorsal Neurectomy', 'Penile Enhancement', 'Minimal Invasive & Innovation Treatment'],
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
        <h4 class="font-bold text-amber-600 dark:text-amber-500 mb-2">Questions to Ask Any Clinic:</h4>
        <ul class="space-y-2 text-sm text-slate-700 dark:text-slate-300">
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Is the procedure performed by the urologist or a technician?</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> How many of these procedures has the doctor performed?</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> What are the complication rates and how are they handled?</li>
          <li class="flex items-center gap-2"><span class="w-1.5 h-1.5 bg-amber-500 rounded-full"></span> Is there a structured follow-up protocol after treatment?</li>
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
  },
  {
    id: 20,
    title: 'Why Treating Enlarged Prostate (BPH) with ReZUM is the Superior Choice.',
    excerpt: 'Comparing BPH treatments? Learn why ReZUM Water Vapor Therapy is quickly becoming the preferred alternative to daily medication and invasive surgery.',
    date: 'Dec 07, 2025',
    category: 'Treatment',
    image: '/assets/image/blog section/Why You Must Remove.webp',
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
          <img src="/assets/image/blog section/Why You Must Remove 2.webp" alt="ReZUM BPH Treatment" class="w-full h-full object-cover" />
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
  },
];

export const EVENTS_DATA: EventData[] = [
  {
    id: 1,
    day: '14',
    month: 'MAR',
    year: '2026',
    title: "Rezum Academic Exchange",
    titleTH: "การแลกเปลี่ยนวิชาการ Rezum",
    subtitle: "Advancing BPH Treatment: ReZum Water Vapor Therapy Academic Exchange at Siriraj Hospital",
    subtitleTH: "ก้าวหน้าในการรักษา BPH: การแลกเปลี่ยนวิชาการ ReZum Water Vapor Therapy ณ โรงพยาบาลศิริราช",
    description: "Today, we were honored to participate in the prestigious ‘ReZum Exchange Event’ at Siriraj Hospital. This high-level academic exchange brought together distinguished urologists from Singapore and Thailand...",
    descriptionTH: "วันนี้ พวกเราได้รับเกียรติเข้าร่วมงาน ‘ReZum Exchange Event’ ณ โรงพยาบาลศิริราช เพื่อร่วมแลกเปลี่ยนความรู้ทางวิชาการและประสบการณ์ทางคลินิกกับทีม ศัลยแพทย์ทางเดินปัสสาวะ (Urologists) ชั้นนำจากประเทศสิงคโปร์ทั้ง 7 ท่าน นำโดย:\n\nAssist. Prof. Varat Woranisarakul\nDr. Chua Wei Jin\n\nการประชุมในครั้งนี้มุ่งเน้นไปที่การพัฒนาทักษะและความเชี่ยวชาญด้านการศัลยกรรมด้วยเทคโนโลยี Water Vapor Therapy (Rezūm) หรือ การรักษาโรคต่อมลูกหมากโตด้วยไอน้ำ ซึ่งเป็นนวัตกรรมการรักษาแบบ Minimally Invasive (แผลเล็ก/ไม่ต้องผ่าตัดใหญ่) เพื่อผลลัพธ์การรักษาที่มีประสิทธิภาพและปลอดภัยยิ่งขึ้นสำหรับคนไข้\n\nนอกจากนี้ เราขอขอบพระคุณ Boston Scientific เป็นอย่างสูงที่เป็นหัวเรี่ยวหัวแรงสำคัญในการจัดฟอรัมการศึกษาที่มีคุณค่าในครั้งนี้ เพื่อผลักดันนวัตกรรมการแพทย์และการดูแลรักษาผู้ป่วยในระดับสากล",
    location: "Bangkok Hospital Pattaya, Meeting Room 1",
    locationTH: "โรงพยาบาลกรุงเทพพัทยา ห้องประชุม 1",
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
  },
  {
    id: 2,
    day: '28',
    month: 'MAR',
    year: '2026',
    title: "Pioneering Excellence: Thailand’s First Certified UroLift Success Story",
    titleTH: "ผู้บุกเบิกความเป็นเลิศ: เรื่องราวความสำเร็จของ UroLift รายแรกที่ได้รับการรับรองในประเทศไทย",
    subtitle: "Dr. Niti Navanimitkul: Thailand’s First Teleflex-Certified Urologist for 50 Successful UroLift Procedures",
    subtitleTH: "นพ.นิธิ นาวานิมิตกุล: ศัลยแพทย์ทางเดินปัสสาวะรายแรกของไทยที่ได้รับการรับรองจาก Teleflex สำหรับหัตถการ UroLift 50 รายที่ประสบความสำเร็จ",
    description: "Pattaya, Thailand – April 30, 2025 – Bangkok Hospital Pattaya proudly announces a major milestone in men’s health and urological excellence. Dr. Niti Navanimitkul, a Board-Certified Urologist and leading specialist in Benign Prostatic Hyperplasia (BPH), has become the first physician in Thailand to receive official certification from The Teleflex Academy.",
    descriptionTH: "พัทยา, ประเทศไทย – 30 เมษายน 2568 – โรงพยาบาลกรุงเทพพัทยา ตอกย้ำความเป็นผู้นำด้านศูนย์ทางเดินปัสสาวะและสุขภาพบุรุษ โดย นพ. นิธิ นาวานิมิตกุล ศัลยแพทย์ทางเดินปัสสาวะและผู้เชี่ยวชาญด้านสุขภาพบุรุษ ได้สร้างประวัติศาสตร์เป็น แพทย์คนแรกในประเทศไทย ที่ได้รับประกาศนียบัตรรับรองอย่างเป็นทางการจาก The Teleflex Academy\n\nรางวัลอันทรงเกียรตินี้มอบโดย Mr. KuoHau Wei (Senior Commercial Manager, SEA IU • APAC) เพื่อเชิดชูความสำเร็จของ นพ. นิธิ ในการทำหัตถการ UroLift (ยูโรลิฟต์) สำเร็จครบ 50 ราย (ข้อมูล ณ เดือนกุมภาพันธ์ 2568) โดยที่ ไม่มีคนไข้รายใดต้องกลับมาผ่าตัดซ้ำ สะท้อนถึงความเชี่ยวชาญขั้นสูงและผลลัพธ์การรักษาโรค ต่อมลูกหมากโต (BPH) ที่ยอดเยี่ยมระดับสากล\n\nUroLift คืออะไร? นวัตกรรมรักษาต่อมลูกหมากโตที่ฟื้นตัวไวที่สุด\nUroLift (ยูโรลิฟต์) คือนวัตกรรมการรักษาโรค ต่อมลูกหมากโต (BPH) รูปแบบใหม่ที่ได้รับความนิยมสูงในต่างประเทศ เป็นการรักษาแบบ Minimally Invasive (แผลเล็ก/ไม่ต้องผ่าตัดใหญ่) ที่ตอบโจทย์ไลฟ์สไตล์ผู้ชายยุคใหม่:\n\nไม่ต้องผ่าตัด ไม่ต้องคว้านเนื้อเยื่อ: ใช้เพียงอุปกรณ์ขนาดเล็กเพื่อยกและขยายท่อปัสสาวะ\n\nไม่กระทบสมรรถภาพทางเพศ: รักษาฟังก์ชันสำคัญของเพศชายไว้ได้อย่างครบถ้วน\n\nฟื้นตัวเร็วทันใจ: คนไข้สามารถกลับบ้านได้ภายในวันเดียว และกลับไปใช้ชีวิตปกติได้ภายใน 7 วัน\n\nมาตรฐานสากล: ผ่านการรับรองจาก U.S. FDA (อย. สหรัฐอเมริกา) ตั้งแต่ปี 2013 และเป็นทางเลือกแรกในการรักษา BPH ในหลายประเทศทั่วโลก\n\nผู้นำการรักษา UroLift ในภาคตะวันออกและประเทศไทย\nนับตั้งแต่มีการนำ UroLift เข้ามาในไทยเมื่อเดือนพฤษภาคม 2567 โรงพยาบาลกรุงเทพพัทยา ได้ก้าวขึ้นเป็นโรงพยาบาลแห่งที่สองของประเทศ และเป็น แห่งแรกในภาคตะวันออก ที่เปิดให้บริการรักษานี้อย่างเป็นทางการในเดือนสิงหาคม 2567\n\nด้วยความมุ่งมั่นของ นพ. นิธิ นาวานิมิตกุล ที่สามารถดูแลคนไข้สำเร็จถึง 50 รายในระยะเวลาเพียงไม่กี่เดือน ทำให้การรักษานี้กลายเป็นทางเลือกอันดับ 1 สำหรับผู้ที่มีปัญหา ปัสสาวะขัด ปัสสาวะบ่อยตอนกลางคืน หรือปัสสาวะไม่พุ่ง โดยไม่ต้องกังวลเรื่องผลข้างเคียงจากการผ่าตัดแบบเดิมๆ\n\nทำไมต้องรักษาต่อมลูกหมากโตกับ นพ. นิธิ ?\nผลลัพธ์การรักษาที่พิสูจน์ได้: อัตราความสำเร็จสูง โดยไม่มีคนไข้ต้องกลับมาทำซ้ำ\n\nมาตรฐานระดับโลก: การันตีด้วยประกาศนียบัตรจาก Teleflex Academy รายแรกของไทย\n\nความพึงพอใจสูงสุด: คืนคุณภาพชีวิตที่ดีให้กับคนไข้ ให้กลับมาทำกิจกรรมที่รักได้อย่างมั่นใจ",
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
  },
  {
    id: 3,
    day: '05',
    month: 'APR',
    year: '2026',
    title: "Advanced HoLEP Laser Surgery for BPH",
    titleTH: "การผ่าตัดส่องกล้องเลเซอร์ HoLEP สำหรับต่อมลูกหมากโต",
    subtitle: "Dr. Niti Navanimitkul introduces Advanced HoLEP laser surgery in PattayaΓÇöthe global gold standard for permanent, minimally invasive enlarged prostate (BPH) relief.",
    subtitleTH: "นพ.นิธิ นาวานิมิตกุล นำเสนอนวัตกรรมการผ่าตัดส่องกล้องเลเซอร์ HoLEP ในพัทยา ซึ่งเป็นมาตรฐานระดับโลกสำหรับการรักษาโรคต่อมลูกหมากโต (BPH) แบบถาวรและแผลเล็ก",
    description: "Dr. Niti Navanimitkul introduces Advanced HoLEP laser surgery in PattayaΓÇöthe global gold standard for permanent, minimally invasive enlarged prostate (BPH) relief.",
    descriptionTH: "นพ.นิธิ นาวานิมิตกุล นำเสนอนวัตกรรมการผ่าตัดส่องกล้องเลเซอร์ HoLEP ในพัทยา ซึ่งเป็นมาตรฐานระดับโลกสำหรับการรักษาโรคต่อมลูกหมากโต (BPH) แบบถาวรและแผลเล็ก",
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
  },
  {
    id: 4,
    day: '20',
    month: 'APR',
    year: '2026',
    title: "Shares Urology Insights at National Summit",
    titleTH: "สุดยอดการประชุมระดับชาติเพื่อแบ่งปันข้อมูลเชิงลึกด้านระบบทางเดินปัสสาวะ",
    subtitle: "Dr. Niti Navanimitkul Highlights Innovative Patient Outcomes at National Urology Summit",
    subtitleTH: "นพ.นิธิ นาวานิมิตกุล ชูแนวคิดยกระดับผลลัพธ์การรักษาผู้ป่วย ในงานประชุมศัลยแพทย์ทางเดินปัสสาวะระดับชาติ",
    description: "Dr. Niti Navanimitkul Highlights Innovative Patient Outcomes at National Urology Summit",
    descriptionTH: "นพ.นิธิ นาวานิมิตกุล ชูแนวคิดยกระดับผลลัพธ์การรักษาผู้ป่วย ในงานประชุมศัลยแพทย์ทางเดินปัสสาวะระดับชาติ",
    location: "Bangsaen Circuit & Activity Area",
    locationTH: "บางแสน เซอร์กิต และพื้นที่กิจกรรม",
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


