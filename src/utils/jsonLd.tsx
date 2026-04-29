import { FAQ_DATA } from '@/data/mockData';
import { AR_TRANSLATIONS } from '@/data/arTranslations';
import { blogTitleToSlug } from '@/utils/blogUtils';
import { eventTitleToSlug } from '@/utils/eventUtils';

// ==============================
// Homepage JSON-LD
// ==============================

export function getHomepageJsonLd(baseUrl: string, lang: string = 'en') {
    const isAr = lang === 'ar';

    const orgDescription = isAr
        ? 'مركز التميز في جراحة المسالك البولية وصحة الرجل في باتايا، تشونبوري، رايونغ. عيادة متخصصة تقدم خدمات شاملة لصحة الرجل بالابتكار الحديث والرعاية الشخصية وفقاً للمعايير الدولية.'
        : lang === 'th'
        ? 'ศูนย์ความเป็นเลิศด้านศัลยกรรมระบบทางเดินปัสสาวะและสุขภาพชาย พัทยา ศรีราชา ชลบุรี ระยอง คลินิกเฉพาะทางที่ให้บริการด้านสุขภาพชายอย่างครบวงจรด้วยนวัตกรรมที่ทันสมัยและใส่ใจดูแลแบบเฉพาะบุคคลภายใต้มาตรฐานสากล'
        : 'Center of Excellence in Urology & Men\'s Health in Pattaya, Chonburi, Rayong. Specialized clinic providing comprehensive men\'s health services with modern innovation and personalized care under international standards.';

    const organization = {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        '@id': `${baseUrl}/#organization`,
        name: isAr ? 'عيادة إم-ترست لجراحة المسالك البولية باتايا، تشونبوري، رايونغ' : lang === 'th' ? 'M-Trust Urology Clinic คลินิกทางเดินปัสสาวะ พัทยา' : 'M-Trust Urology Clinic Pattaya, Chonburi, Rayong',
        alternateName: lang === 'th' ? 'เอ็มทรัสต์ คลินิก พัทยา' : 'M-Trust Clinic',
        url: baseUrl,
        logo: `${baseUrl}/assets/image/header/M-Trust Urology Clinic.png`,
        description: orgDescription,
        medicalSpecialty: isAr ? ['جراحة المسالك البولية', 'صحة الرجل'] : lang === 'th' ? ['ศัลยกรรมทางเดินปัสสาวะ', 'สุขภาพเพศชาย'] : ['Urology', 'Men\'s Health'],
        address: {
            '@type': 'PostalAddress',
            streetAddress: lang === 'th' ? '392/65 หมู่ 9 ถนนสุขุมวิท เมืองพัทยา อำเภอบางละมุง' : '392/65 moo.9 Sukhumvit Rd, Pattaya City, Amphoe Bang Lamung',
            addressLocality: lang === 'th' ? 'ชลบุรี' : 'Chon Buri',
            postalCode: '20150',
            addressCountry: 'TH',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: 12.9262826,
            longitude: 100.8986137,
        },
        telephone: '+66-93-696-4519',
        email: 'niti.menshealth@gmail.com',
        openingHoursSpecification: {
            '@type': 'OpeningHoursSpecification',
            dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
            opens: '09:00',
            closes: '18:00',
        },
        sameAs: [],
        aggregateRating: {
            '@type': 'AggregateRating',
            ratingValue: '4.9',
            reviewCount: '120',
            bestRating: '5',
        },
        hasMap: 'https://maps.google.com/?cid=15983019159424688366',
        priceRange: '$$',
        availableService: [
            { '@type': 'MedicalProcedure', name: isAr ? 'العلاج بالموجات الصدمية المركزة' : 'Focused Shockwave Therapy (ED)' },
            { '@type': 'MedicalProcedure', name: isAr ? 'جراحة زراعة دعامة القضيب' : 'Penile Implant Surgery' },
            { '@type': 'MedicalProcedure', name: isAr ? 'الختان' : 'Circumcision' },
            { '@type': 'MedicalProcedure', name: isAr ? 'قطع القناة الدافقة' : 'Vasectomy' },
            { '@type': 'MedicalProcedure', name: isAr ? 'فحص البروستاتا' : 'Prostate Screening' },
            { '@type': 'MedicalProcedure', name: isAr ? 'تنظير المثانة المرن' : 'Flexible Cystoscopy' },
        ],
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: isAr ? 'عيادة إم-ترست لجراحة المسالك البولية' : 'M-Trust Urology Clinic',
        url: baseUrl,
    };

    const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_DATA.map(faq => {
            const qStr = faq.question || '';
            const aStr = faq.answer || '';
            const arEntry = isAr ? (AR_TRANSLATIONS[qStr] as any) : null;
            return {
                '@type': 'Question',
                name: arEntry?.title || qStr,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: arEntry?.answer || aStr,
                },
            };
        }),
    };

    return [organization, website, faqPage];
}

// ==============================
// Service Page JSON-LD
// ==============================

export function getServiceJsonLd(baseUrl: string, service: {
    name: string;
    description: string;
    slug: string;
    image?: string;
    faqs?: Array<{ question: string; answer: string }>;
}) {
    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Services', item: `${baseUrl}/services` },
            { '@type': 'ListItem', position: 3, name: service.name, item: `${baseUrl}/services/${service.slug}` },
        ],
    };

    const medicalProcedure = {
        '@context': 'https://schema.org',
        '@type': 'MedicalProcedure',
        name: service.name,
        description: service.description,
        url: `${baseUrl}/services/${service.slug}`,
        ...(service.image && { image: service.image }),
        procedureType: 'http://schema.org/SurgicalProcedure',
        body: {
            '@type': 'AnatomicalStructure',
            name: 'Urogenital System',
        },
        howPerformed: service.description,
        status: 'http://schema.org/EventScheduled',
        provider: {
            '@type': 'MedicalClinic',
            name: 'M-Trust Urology Clinic',
            url: baseUrl,
        },
    };

    const result: object[] = [breadcrumb, medicalProcedure];

    if (service.faqs && service.faqs.length > 0) {
        result.push({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: service.faqs.map(faq => ({
                '@type': 'Question',
                name: faq.question,
                acceptedAnswer: {
                    '@type': 'Answer',
                    text: faq.answer,
                },
            })),
        });
    }

    return result;
}

// ==============================
// Blog Page JSON-LD
// ==============================



export function getBlogPostJsonLd(baseUrl: string, post: {
    title: string;
    excerpt: string;
    image: string;
    date: string;
    author?: string;
    category: string;
}) {
    const slug = blogTitleToSlug(post.title);

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Blog', item: `${baseUrl}/blog` },
            { '@type': 'ListItem', position: 3, name: post.title, item: `${baseUrl}/blog/${slug}` },
        ],
    };

    const article = {
        '@context': 'https://schema.org',
        '@type': 'Article',
        headline: post.title,
        description: post.excerpt,
        image: post.image.startsWith('/') ? `${baseUrl}${post.image}` : post.image,
        datePublished: post.date,
        articleSection: post.category,
        author: {
            '@type': 'Organization',
            name: post.author || 'M-Trust Urology Clinic',
        },
        publisher: {
            '@type': 'Organization',
            name: 'M-Trust Urology Clinic',
            logo: {
                '@type': 'ImageObject',
                url: `${baseUrl}/assets/image/header/M-Trust Urology Clinic.png`,
            },
        },
        mainEntityOfPage: {
            '@type': 'WebPage',
            '@id': `${baseUrl}/blog/${slug}`,
        },
        speakable: {
            '@type': 'SpeakableSpecification',
            cssSelector: ['h1', '.article-content p:first-of-type'],
        },
    };

    return [breadcrumb, article];
}

// ==============================
// Event Page JSON-LD
// ==============================

export function getEventJsonLd(baseUrl: string, event: {
    id: number;
    title: string;
    description: string;
    image: string;
    location: string;
    day: string;
    month: string;
    time: string;
    slug?: string;
}) {
    const eventSlug = event.slug || eventTitleToSlug(event.title);
    
    const monthMap: Record<string, string> = {
        'JAN': '01', 'FEB': '02', 'MAR': '03', 'APR': '04', 'MAY': '05', 'JUN': '06',
        'JUL': '07', 'AUG': '08', 'SEP': '09', 'OCT': '10', 'NOV': '11', 'DEC': '12'
    };
    const monthNum = monthMap[event.month?.toUpperCase()] || '01';
    const dayNum = event.day.toString().padStart(2, '0');
    const startTime = (event.time || '09:00').split('-')[0].trim();

    const eventSchema = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        description: event.description,
        image: event.image.startsWith('/') ? `${baseUrl}${event.image}` : event.image,
        startDate: `2026-${monthNum}-${dayNum}T${startTime}:00+07:00`,
        location: {
            '@type': 'Place',
            name: event.location,
            address: {
                '@type': 'PostalAddress',
                addressLocality: event.location,
                addressCountry: 'TH',
            },
        },
        organizer: {
            '@type': 'Organization',
            name: 'M-Trust Urology Clinic',
            url: baseUrl,
        },
        url: `${baseUrl}/events/${eventSlug}`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    };

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Events', item: `${baseUrl}/events` },
            { '@type': 'ListItem', position: 3, name: event.title, item: `${baseUrl}/events/${eventSlug}` },
        ],
    };

    return [breadcrumb, eventSchema];
}

// ==============================
// Doctor Profile JSON-LD
// ==============================

export function getDoctorJsonLd(baseUrl: string, doctor: {
    name: string;
    slug: string;
    role: string;
    bio: string;
    image: string;
    hospital?: string;
    email?: string;
    specialties: string[];
    qualifications: Array<{ year: string; title: string; place: string }>;
}) {
    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Urologists', item: `${baseUrl}/urologist` },
            { '@type': 'ListItem', position: 3, name: doctor.name, item: `${baseUrl}/urologist/${doctor.slug}` },
        ],
    };

    const physician = {
        '@context': 'https://schema.org',
        '@type': 'Physician',
        name: doctor.name,
        description: doctor.bio,
        image: doctor.image.startsWith('/') ? `${baseUrl}${doctor.image}` : doctor.image,
        url: `${baseUrl}/urologist/${doctor.slug}`,
        jobTitle: doctor.role,
        medicalSpecialty: 'Urology',
        ...(doctor.email && { email: `mailto:${doctor.email}` }),
        knowsAbout: doctor.specialties,
        alumniOf: doctor.qualifications.map(q => ({
            '@type': 'EducationalOrganization',
            name: q.place,
        })),
        worksFor: {
            '@type': 'MedicalClinic',
            name: 'M-Trust Urology Clinic',
            url: baseUrl,
        },
        ...(doctor.hospital && {
            hospitalAffiliation: {
                '@type': 'Hospital',
                name: doctor.hospital,
            },
        }),
    };

    return [breadcrumb, physician];
}


// ==============================
// JSON-LD Script Component
// ==============================

export function JsonLdScript({ data }: { data: object | object[] }) {
    const schemas = Array.isArray(data) ? data : [data];
    return (
        <>
            {schemas.map((schema, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
