import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import {
    Calendar, Award, GraduationCap, Star, Trophy,
    CheckCircle2, Briefcase, Clock, Mail, Globe,
    Youtube, MapPin, Phone, Sparkles, Users, Heart
} from 'lucide-react';

// Server Component for JSON-LD
import JsonLdScript from '@/components/server/JsonLdScript';

// Client Islands (isolated hydration)
import FAQAccordion from '@/components/client/FAQAccordion';
import BackButton from '@/components/client/BackButton';
import VideoPlayer from '@/components/client/VideoPlayer';
import DoctorTestimonials from '@/components/client/DoctorTestimonials';
import CertificateMarquee from '@/components/sections/CertificateMarquee';

// Data & Schemas
import { getDoctorById, getAllDoctorIds, getDoctorFAQs } from '@/lib/doctors';
import {
    buildPhysicianSchema,
    buildFAQSchema,
    buildBreadcrumbSchema,
    buildMedicalWebPageSchema
} from '@/lib/schemas';

// Base URL for canonical links
const BASE_URL = 'https://www.menshealth-thailand.com';

interface PageProps {
    params: Promise<{ id: string }>;
}

// ============================================
// STATIC GENERATION (SSG for better SEO)
// ============================================
export async function generateStaticParams() {
    return getAllDoctorIds();
}

// ============================================
// DYNAMIC METADATA (SEO Critical)
// ============================================
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { id } = await params;
    const doctor = getDoctorById(id);

    if (!doctor) {
        return {
            title: 'Doctor Not Found | M-Trust Clinic',
            description: 'The requested doctor profile could not be found.'
        };
    }

    const canonicalUrl = `${BASE_URL}/doctor/${doctor.id}`;
    const pageTitle = `${doctor.name} | ${doctor.role} | M-Trust Urology Clinic`;
    const pageDescription = doctor.bio.length > 160
        ? doctor.bio.substring(0, 157) + '...'
        : doctor.bio;

    return {
        title: pageTitle,
        description: pageDescription,
        keywords: [
            doctor.name,
            doctor.role,
            ...doctor.specialties.map(s => s.split('(')[0].trim()),
            'Urologist Thailand',
            'Men\'s Health Specialist',
            'Best Urologist Bangkok',
            'Penile Prosthesis Thailand'
        ],
        authors: [{ name: doctor.name }],
        creator: doctor.name,

        // Canonical URL
        alternates: {
            canonical: canonicalUrl,
        },

        // Open Graph (Facebook, LinkedIn)
        openGraph: {
            type: 'profile',
            title: pageTitle,
            description: pageDescription,
            url: canonicalUrl,
            siteName: 'M-Trust Urology Clinic',
            images: [
                {
                    url: doctor.image,
                    width: 800,
                    height: 600,
                    alt: `${doctor.name} - ${doctor.role}`,
                }
            ],
            locale: 'en_US',
        },

        // Twitter Cards
        twitter: {
            card: 'summary_large_image',
            title: pageTitle,
            description: pageDescription,
            images: [doctor.image],
        },

        // Robots
        robots: {
            index: true,
            follow: true,
            googleBot: {
                index: true,
                follow: true,
                'max-video-preview': -1,
                'max-image-preview': 'large',
                'max-snippet': -1,
            },
        },
    };
}

// ============================================
// MAIN SERVER COMPONENT
// ============================================
export default async function DoctorProfilePage({ params }: PageProps) {
    const { id } = await params;
    const doctor = getDoctorById(id);

    if (!doctor) {
        notFound();
    }

    // Generate FAQs for AEO
    const faqs = getDoctorFAQs(doctor);

    // Build schemas
    const physicianSchema = buildPhysicianSchema(doctor);
    const faqSchema = buildFAQSchema(faqs);
    const breadcrumbSchema = buildBreadcrumbSchema([
        { name: 'Home', url: BASE_URL },
        { name: 'Doctors', url: `${BASE_URL}/#doctors` },
        { name: doctor.name, url: `${BASE_URL}/doctor/${doctor.id}` }
    ]);
    const medicalPageSchema = buildMedicalWebPageSchema(doctor);

    return (
        <>
            {/* JSON-LD Structured Data (Server Rendered) */}
            <JsonLdScript data={physicianSchema} />
            <JsonLdScript data={faqSchema} />
            <JsonLdScript data={breadcrumbSchema} />
            <JsonLdScript data={medicalPageSchema} />

            <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 dark:from-[#0a0a0f] dark:via-[#0f1115] dark:to-[#1a1a2e]">

                {/* Hero Section (SEO Critical - Server Rendered) */}
                <article itemScope itemType="https://schema.org/Physician">
                    <header className="relative bg-linear-to-r from-slate-900 via-slate-800 to-slate-900 text-white py-12 lg:py-20">
                        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />

                        <div className="container mx-auto px-4 lg:px-8 relative z-10">
                            {/* Back Button (Client Island) */}
                            <nav className="mb-8" aria-label="Breadcrumb">
                                <BackButton label="Back to Doctors" href="/" />
                            </nav>

                            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
                                {/* Doctor Image */}
                                <div className="w-full lg:w-1/3 relative">
                                    <div className="aspect-[3/4] rounded-2xl overflow-hidden border-4 border-white/10 shadow-2xl">
                                        <Image
                                            src={doctor.image}
                                            alt={`${doctor.name} - ${doctor.role}`}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                            priority // LCP optimization
                                            itemProp="image"
                                        />
                                    </div>
                                    {/* Experience Badge */}
                                    <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-amber-500 rounded-full flex items-center justify-center text-white shadow-lg z-20 border-4 border-slate-900">
                                        <div className="text-center leading-none">
                                            <span className="block text-xl font-black">15+</span>
                                            <span className="block text-[6px] uppercase font-bold tracking-widest mt-0.5">Years</span>
                                        </div>
                                    </div>
                                </div>

                                {/* Doctor Info */}
                                <div className="flex-1 pt-4">
                                    {/* Expert Badge */}
                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-amber-500/20 text-amber-400 rounded-full text-xs font-bold uppercase tracking-wider mb-4">
                                        <Sparkles size={14} />
                                        <span itemProp="jobTitle">{doctor.expert}</span>
                                    </div>

                                    {/* H1 - Critical for SEO */}
                                    <h1
                                        className="text-3xl md:text-4xl lg:text-5xl font-black uppercase mb-3 leading-tight"
                                        itemProp="name"
                                    >
                                        {doctor.name}
                                    </h1>

                                    {/* Role */}
                                    <p className="text-xl text-slate-300 font-medium mb-4" itemProp="description">
                                        {doctor.role}
                                    </p>

                                    {/* Tagline */}
                                    {doctor.tagline && (
                                        <blockquote className="text-sm text-slate-400 italic border-l-2 border-amber-500 pl-4 mb-6">
                                            "{doctor.tagline}"
                                        </blockquote>
                                    )}

                                    {/* Quick Stats */}
                                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center">
                                            <div className="text-2xl font-black text-amber-500">100+</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Procedures</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center">
                                            <div className="text-2xl font-black text-amber-500">99.99%</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Success Rate</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center">
                                            <div className="text-2xl font-black text-amber-500">15+</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Years Exp</div>
                                        </div>
                                        <div className="bg-white/5 backdrop-blur rounded-xl p-4 text-center">
                                            <div className="text-2xl font-black text-amber-500">1000+</div>
                                            <div className="text-[10px] uppercase text-slate-400 font-bold">Patients</div>
                                        </div>
                                    </div>

                                    {/* CTA Buttons */}
                                    <div className="flex flex-wrap gap-4">
                                        <Link
                                            href="#booking"
                                            className="inline-flex items-center gap-2 px-8 py-3 bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
                                        >
                                            <Calendar size={18} />
                                            Book Appointment
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </header>

                    {/* Content Sections */}
                    <div className="container mx-auto px-4 lg:px-8 py-12">
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

                            {/* Main Content */}
                            <div className="lg:col-span-2 space-y-12">

                                {/* About Section (SEO Critical) */}
                                <section aria-labelledby="about-heading">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center">
                                            <Users className="text-blue-600" size={20} />
                                        </div>
                                        <h2 id="about-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                            About {doctor.name.split(',')[0]}
                                        </h2>
                                    </div>
                                    <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 lg:p-10">
                                        <p className="text-lg text-slate-700 dark:text-slate-200 leading-relaxed mb-6 font-medium italic border-l-4 border-amber-500/30 pl-6" itemProp="description">
                                            {doctor.bio}
                                        </p>

                                        {/* Rich Bio Content Section */}
                                        <div className="space-y-8 mt-10">
                                            {doctor.bioContent && doctor.bioContent.map((block, idx) => {
                                                if (block.type === 'header') {
                                                    return (
                                                        <h3 key={idx} className="text-xl lg:text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight pt-4">
                                                            <span className="text-amber-500 mr-2 text-2xl font-serif italic">#0{idx + 1}</span>
                                                            {block.content}
                                                        </h3>
                                                    );
                                                }
                                                if (block.type === 'paragraph') {
                                                    return (
                                                        <p key={idx} className="text-slate-600 dark:text-slate-300 leading-relaxed text-base lg:text-lg">
                                                            {block.content}
                                                        </p>
                                                    );
                                                }
                                                if (block.type === 'list') {
                                                    return (
                                                        <ul key={idx} className="space-y-3">
                                                            {block.items?.map((item, i) => (
                                                                <li key={i} className="flex items-start gap-3 p-4 bg-slate-50 dark:bg-white/5 border border-slate-100 dark:border-white/5 rounded-xl">
                                                                    <CheckCircle2 className="text-amber-500 mt-1 shrink-0" size={20} />
                                                                    <span className="text-slate-700 dark:text-slate-300 font-medium">{item}</span>
                                                                </li>
                                                            ))}
                                                        </ul>
                                                    );
                                                }
                                                if (block.type === 'image') {
                                                    return (
                                                        <figure key={idx} className="relative group rounded-3xl overflow-hidden border-4 border-white dark:border-white/10 shadow-2xl">
                                                            <Image
                                                                src={block.image!}
                                                                alt={block.caption || `${doctor.name} activity`}
                                                                width={1200}
                                                                height={800}
                                                                className="w-full h-auto object-cover"
                                                                loading="lazy"
                                                            />
                                                            {block.caption && (
                                                                <figcaption className="absolute bottom-0 inset-x-0 p-6 bg-linear-to-t from-black/80 via-black/40 to-transparent">
                                                                    <p className="text-white text-xs font-medium italic">
                                                                        {block.caption}
                                                                    </p>
                                                                </figcaption>
                                                            )}
                                                        </figure>
                                                    );
                                                }
                                                return null;
                                            })}
                                        </div>
                                    </div>
                                </section>

                                {/* Specialties Section (SEO Critical) */}
                                <section aria-labelledby="specialties-heading">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                            <Star className="text-amber-600" size={20} />
                                        </div>
                                        <h2 id="specialties-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                            Areas of Expertise
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {doctor.specialties.map((specialty, index) => (
                                            <div
                                                key={index}
                                                className="flex items-start gap-3 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl"
                                                itemProp="medicalSpecialty"
                                            >
                                                <CheckCircle2 className="text-green-500 shrink-0 mt-0.5" size={20} />
                                                <span className="text-slate-700 dark:text-slate-300 font-medium">
                                                    {specialty}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Certificates Section (Credential SEO) */}
                                {doctor.certificates && doctor.certificates.length > 0 && (
                                    <section aria-labelledby="certificates-heading">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-amber-100 dark:bg-amber-900/30 flex items-center justify-center">
                                                <Award className="text-amber-600" size={20} />
                                            </div>
                                            <h2 id="certificates-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                                Certificates & Credentials
                                            </h2>
                                        </div>
                                        <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-2 overflow-hidden">
                                            <CertificateMarquee certificates={doctor.certificates} />
                                        </div>
                                    </section>
                                )}

                                {/* Qualifications Section */}
                                <section aria-labelledby="qualifications-heading">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                            <GraduationCap className="text-purple-600" size={20} />
                                        </div>
                                        <h2 id="qualifications-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                            Education & Training
                                        </h2>
                                    </div>
                                    <div className="space-y-4">
                                        {doctor.qualifications.map((qual, index) => (
                                            <div
                                                key={index}
                                                className="flex gap-4 p-4 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-xl"
                                                itemProp="alumniOf"
                                                itemScope
                                                itemType="https://schema.org/EducationalOrganization"
                                            >
                                                <div className="shrink-0 w-16 h-16 rounded-lg bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center">
                                                    <span className="text-purple-600 font-bold text-sm">{qual.year}</span>
                                                </div>
                                                <div>
                                                    <h3 className="font-semibold text-slate-900 dark:text-white" itemProp="name">
                                                        {qual.title}
                                                    </h3>
                                                    <p className="text-sm text-slate-500 dark:text-slate-400">
                                                        {qual.place}
                                                    </p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Awards Section */}
                                <section aria-labelledby="awards-heading">
                                    <div className="flex items-center gap-3 mb-6">
                                        <div className="w-10 h-10 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center">
                                            <Trophy className="text-yellow-600" size={20} />
                                        </div>
                                        <h2 id="awards-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                            Awards & Recognition
                                        </h2>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                        {doctor.awards.slice(0, 6).map((award, index) => (
                                            <div
                                                key={index}
                                                className="p-4 bg-linear-to-br from-amber-50 to-orange-50 dark:from-amber-900/20 dark:to-orange-900/20 border border-amber-200 dark:border-amber-700/30 rounded-xl"
                                                itemProp="award"
                                            >
                                                <div className="flex items-start gap-3">
                                                    <Award className="text-amber-600 shrink-0" size={20} />
                                                    <div>
                                                        <h3 className="font-semibold text-slate-900 dark:text-white text-sm">
                                                            {award.title}
                                                        </h3>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-1">
                                                            {award.issuer} • {award.year}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                </section>

                                {/* Activities Gallery */}
                                {doctor.activities && doctor.activities.length > 0 && (
                                    <section aria-labelledby="activities-heading">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center">
                                                <Star className="text-indigo-600" size={20} />
                                            </div>
                                            <h2 id="activities-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                                Activities & Gallery
                                            </h2>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                            {doctor.activities.map((photo, index) => (
                                                <div key={index} className="relative aspect-video rounded-2xl overflow-hidden border-2 border-white dark:border-white/10 shadow-lg">
                                                    <Image
                                                        src={photo}
                                                        alt={`${doctor.name} activity ${index + 1}`}
                                                        fill
                                                        className="object-cover"
                                                        loading="lazy"
                                                    />
                                                </div>
                                            ))}
                                        </div>
                                    </section>
                                )}

                                {/* Testimonials Section (SEO & UX Critical) */}
                                <DoctorTestimonials doctor={doctor} />

                                {/* Videos Section */}
                                {doctor.videos && doctor.videos.length > 0 && (
                                    <section aria-labelledby="videos-heading" className="space-y-6">
                                        <div className="flex items-center gap-3 mb-6">
                                            <div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center">
                                                <Youtube className="text-red-600" size={20} />
                                            </div>
                                            <h2 id="videos-heading" className="text-2xl font-bold text-slate-900 dark:text-white">
                                                Video Testimonials
                                            </h2>
                                        </div>
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                            {doctor.videos.map((video, index) => {
                                                const videoId = video.url.split('/').pop()?.split('?')[0] || '';
                                                return (
                                                    <div key={index} className="space-y-3">
                                                        <VideoPlayer
                                                            videoId={videoId}
                                                            title={video.title}
                                                            thumbnail={video.thumbnail}
                                                        />
                                                        <h3 className="text-sm font-semibold text-slate-700 dark:text-slate-300 line-clamp-2">
                                                            {video.title}
                                                        </h3>
                                                    </div>
                                                );
                                            })}
                                        </div>
                                    </section>
                                )}
                                {/* FAQ Section (AEO Critical - Client Island) */}
                                <FAQAccordion
                                    items={faqs}
                                    title={`Frequently Asked Questions about ${doctor.name.split(',')[0]}`}
                                />

                            </div>

                            {/* Sidebar */}
                            <aside className="lg:col-span-1">
                                <div className="sticky top-24 space-y-6">
                                    {/* Booking Card */}
                                    <div
                                        id="booking"
                                        className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6 shadow-lg"
                                    >
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Calendar className="text-amber-600" size={20} />
                                            Book an Appointment
                                        </h3>
                                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-6">
                                            Schedule a consultation with {doctor.name.split(',')[0]} today.
                                        </p>
                                        <Link
                                            href={`mailto:${doctor.email || 'contact@mtrust-clinic.com'}?subject=Appointment Request with ${doctor.name}`}
                                            className="block w-full text-center px-6 py-3 bg-linear-to-r from-amber-500 to-orange-500 text-white font-bold rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all hover:scale-105"
                                        >
                                            Request Appointment
                                        </Link>
                                        {doctor.email && (
                                            <div className="flex items-center gap-2 mt-4 text-sm text-slate-500 dark:text-slate-400">
                                                <Mail size={14} />
                                                <span>{doctor.email}</span>
                                            </div>
                                        )}
                                    </div>

                                    {/* Clinic Hours */}
                                    <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Clock className="text-amber-600" size={20} />
                                            Clinic Hours
                                        </h3>
                                        <div className="space-y-2 text-sm">
                                            <div className="flex justify-between">
                                                <span className="text-slate-600 dark:text-slate-400">Mon - Thu</span>
                                                <span className="font-semibold text-slate-900 dark:text-white">17:30 - 20:00</span>
                                            </div>
                                            <div className="flex justify-between">
                                                <span className="text-slate-600 dark:text-slate-400">Fri - Sun</span>
                                                <span className="font-semibold text-slate-900 dark:text-white">12:30 - 17:00</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Contact Info */}
                                    <div className="bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded-2xl p-6">
                                        <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-4 flex items-center gap-2">
                                            <Phone className="text-amber-600" size={20} />
                                            Contact
                                        </h3>
                                        <div className="space-y-3 text-sm">
                                            {doctor.hospital && (
                                                <div className="flex items-start gap-2">
                                                    <MapPin size={16} className="text-slate-400 mt-0.5 shrink-0" />
                                                    <span className="text-slate-600 dark:text-slate-400">{doctor.hospital}</span>
                                                </div>
                                            )}
                                            {doctor.email && (
                                                <div className="flex items-center gap-2">
                                                    <Mail size={16} className="text-slate-400 shrink-0" />
                                                    <a href={`mailto:${doctor.email}`} className="text-amber-600 hover:underline">
                                                        {doctor.email}
                                                    </a>
                                                </div>
                                            )}
                                            {doctor.website && (
                                                <div className="flex items-center gap-2">
                                                    <Globe size={16} className="text-slate-400 shrink-0" />
                                                    <a href={doctor.website} target="_blank" rel="noopener noreferrer" className="text-amber-600 hover:underline">
                                                        Visit Website
                                                    </a>
                                                </div>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </aside>

                        </div>
                    </div>
                </article>
            </div>
        </>
    );
}
