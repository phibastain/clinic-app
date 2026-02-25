import { DOCTORS, DoctorData } from '@/data/mockData';
export { DOCTORS };
import { FAQItem } from './schemas';

/**
 * Get doctor by ID
 * In production, this would fetch from a database or CMS
 */
export function getDoctorById(id: string): DoctorData | undefined {
    return DOCTORS.find(doctor => doctor.id === parseInt(id, 10));
}

/**
 * Get all doctor IDs for static generation
 */
export function getAllDoctorIds(): { id: string }[] {
    return DOCTORS.map(doctor => ({ id: doctor.id.toString() }));
}

/**
 * Get doctor by slug
 */
export function getDoctorBySlug(slug: string): DoctorData | undefined {
    return DOCTORS.find(doctor => doctor.slug === slug);
}

/**
 * Get FAQs for a doctor - AEO optimized questions
 */
export function getDoctorFAQs(doctor: DoctorData): FAQItem[] {
    return [
        {
            question: `Who is ${doctor.name}?`,
            answer: `${doctor.name} is ${doctor.role} at ${doctor.hospital || 'M-Trust Clinic'}. ${doctor.tagline || ''} ${doctor.bio.substring(0, 200)}...`
        },
        {
            question: `What does ${doctor.name.split(',')[0]} specialize in?`,
            answer: `${doctor.name.split(',')[0]} specializes in: ${doctor.specialties.slice(0, 4).join(', ')}. With extensive experience and high success rates in minimally invasive treatments.`
        },
        {
            question: `What are ${doctor.name.split(',')[0]}'s qualifications?`,
            answer: `${doctor.name.split(',')[0]} holds: ${doctor.qualifications.slice(0, 3).map(q => `${q.title} (${q.place})`).join('; ')}.`
        },
        {
            question: `Where can I see ${doctor.name.split(',')[0]}?`,
            answer: doctor.hospital
                ? `${doctor.name.split(',')[0]} practices at ${doctor.hospital}. ${doctor.email ? `Contact: ${doctor.email}` : ''}`
                : `${doctor.name.split(',')[0]} is available at M-Trust Urology Clinic. Book an appointment through our website.`
        },
        {
            question: `What awards has ${doctor.name.split(',')[0]} received?`,
            answer: doctor.awards.length > 0
                ? `${doctor.name.split(',')[0]} has received: ${doctor.awards.slice(0, 3).map(a => `${a.title} (${a.year})`).join('; ')}.`
                : `${doctor.name.split(',')[0]} is recognized for excellence in urology and men's health.`
        },
        {
            question: `Is ${doctor.name.split(',')[0]} accepting new patients?`,
            answer: `Yes, ${doctor.name.split(',')[0]} is accepting new patients. You can book a consultation through our online booking system or contact us directly.`
        }
    ];
}

/**
 * Get related doctors (exclude current)
 */
export function getRelatedDoctors(currentId: number, limit: number = 3): DoctorData[] {
    return DOCTORS.filter(doctor => doctor.id !== currentId).slice(0, limit);
}
