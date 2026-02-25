import { DoctorData } from '@/data/mockData';

/**
 * Build Physician Schema for Rich Results
 * @see https://schema.org/Physician
 */
export function buildPhysicianSchema(doctor: DoctorData) {
    return {
        "@context": "https://schema.org",
        "@type": "Physician",
        "@id": `https://www.menshealth-thailand.com/doctor/${doctor.id}`,
        "name": doctor.name,
        "description": doctor.bio,
        "image": doctor.image,
        "jobTitle": doctor.role,
        "medicalSpecialty": doctor.specialties.map(s => ({
            "@type": "MedicalSpecialty",
            "name": s.split('(')[0].trim() // Remove stats for schema
        })),
        "availableService": doctor.specialties.map(specialty => ({
            "@type": "MedicalProcedure",
            "name": specialty.split('(')[0].trim()
        })),
        "alumniOf": doctor.qualifications.map(q => ({
            "@type": "EducationalOrganization",
            "name": q.place
        })),
        "award": doctor.awards.map(a => a.title),
        "knowsAbout": [
            "Urology",
            "Men's Health",
            "Penile Prosthesis Surgery",
            "UroLift",
            "Rezūm Water Vapor Therapy",
            "Erectile Dysfunction",
            "Male Infertility",
            "Prostate Health"
        ],
        "sameAs": doctor.website ? [doctor.website] : [],
        "email": doctor.email,
        "worksFor": doctor.hospital ? {
            "@type": "MedicalOrganization",
            "name": doctor.hospital
        } : undefined,
        "aggregateRating": (doctor.handwrittenTestimonials && doctor.handwrittenTestimonials.length > 0) ? {
            "@type": "AggregateRating",
            "ratingValue": (doctor.handwrittenTestimonials.reduce((acc: number, curr: any) => acc + (curr.rating || 5), 0) / doctor.handwrittenTestimonials.length).toFixed(1),
            "reviewCount": doctor.handwrittenTestimonials.length,
            "bestRating": "5",
            "worstRating": "1"
        } : undefined,
        "review": doctor.handwrittenTestimonials?.map(t => ({
            "@type": "Review",
            "author": {
                "@type": "Person",
                "name": t.name
            },
            "reviewBody": t.transcript || t.text,
            "reviewRating": {
                "@type": "Rating",
                "ratingValue": t.rating || 5,
                "bestRating": "5",
                "worstRating": "1"
            },
            "datePublished": "2025-01-01" // Fallback date
        }))
    };
}

export interface FAQItem {
    question: string;
    answer: string;
}

/**
 * Build FAQPage Schema for AEO (Voice Search)
 * @see https://schema.org/FAQPage
 */
export function buildFAQSchema(faqs: FAQItem[]) {
    return {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": faqs.map(faq => ({
            "@type": "Question",
            "name": faq.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer
            }
        }))
    };
}

/**
 * Build BreadcrumbList Schema for Navigation
 * @see https://schema.org/BreadcrumbList
 */
export function buildBreadcrumbSchema(items: { name: string; url: string }[]) {
    return {
        "@context": "https://schema.org",
        "@type": "BreadcrumbList",
        "itemListElement": items.map((item, index) => ({
            "@type": "ListItem",
            "position": index + 1,
            "name": item.name,
            "item": item.url
        }))
    };
}

/**
 * Build MedicalWebPage Schema
 * @see https://schema.org/MedicalWebPage
 */
export function buildMedicalWebPageSchema(doctor: DoctorData) {
    return {
        "@context": "https://schema.org",
        "@type": "MedicalWebPage",
        "name": `${doctor.name} - ${doctor.role}`,
        "description": doctor.bio,
        "url": `https://www.menshealth-thailand.com/doctor/${doctor.id}`,
        "mainEntity": {
            "@type": "Physician",
            "name": doctor.name
        },
        "specialty": "Urology",
        "about": {
            "@type": "MedicalCondition",
            "name": "Men's Health Conditions"
        }
    };
}
