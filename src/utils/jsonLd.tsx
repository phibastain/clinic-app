import { FAQ_DATA } from '@/data/mockData';
import { blogTitleToSlug } from '@/utils/blogUtils';

// ==============================
// Homepage JSON-LD
// ==============================

export function getHomepageJsonLd(baseUrl: string) {
    const organization = {
        '@context': 'https://schema.org',
        '@type': 'MedicalClinic',
        '@id': `${baseUrl}/#organization`,
        name: 'M-Trust Urology Clinic',
        alternateName: 'M-Trust Clinic',
        url: baseUrl,
        logo: `${baseUrl}/assets/image/header/M-Trust Urology Clinic.png`,
        description: 'Center of Excellence in Urology & Men\'s Health. Specialized clinic providing comprehensive men\'s health services with modern innovation and personalized care under international standards.',
        medicalSpecialty: ['Urology', 'Men\'s Health'],
        address: {
            '@type': 'PostalAddress',
            streetAddress: '392/65 moo.9 Sukhumvit Rd, Pattaya City, Amphoe Bang Lamung',
            addressLocality: 'Chon Buri',
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
            { '@type': 'MedicalProcedure', name: 'Focused Shockwave Therapy (ED)' },
            { '@type': 'MedicalProcedure', name: 'Penile Implant Surgery' },
            { '@type': 'MedicalProcedure', name: 'Circumcision' },
            { '@type': 'MedicalProcedure', name: 'Vasectomy' },
            { '@type': 'MedicalProcedure', name: 'Prostate Screening' },
            { '@type': 'MedicalProcedure', name: 'Flexible Cystoscopy' },
        ],
    };

    const website = {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'M-Trust Urology Clinic',
        url: baseUrl,
    };

    const faqPage = {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: FAQ_DATA.map(faq => ({
            '@type': 'Question',
            name: faq.question,
            acceptedAnswer: {
                '@type': 'Answer',
                text: faq.answer,
            },
        })),
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
}) {
    const eventSchema = {
        '@context': 'https://schema.org',
        '@type': 'Event',
        name: event.title,
        description: event.description,
        image: event.image.startsWith('/') ? `${baseUrl}${event.image}` : event.image,
        startDate: `2026-${event.month}-${event.day}`,
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
        url: `${baseUrl}/events/${event.id}`,
        eventStatus: 'https://schema.org/EventScheduled',
        eventAttendanceMode: 'https://schema.org/OfflineEventAttendanceMode',
    };

    const breadcrumb = {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: [
            { '@type': 'ListItem', position: 1, name: 'Home', item: baseUrl },
            { '@type': 'ListItem', position: 2, name: 'Events', item: `${baseUrl}/events` },
            { '@type': 'ListItem', position: 3, name: event.title, item: `${baseUrl}/events/${event.id}` },
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
