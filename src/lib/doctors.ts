import { DOCTORS, DoctorData } from '@/data/mockData';
export { DOCTORS };

/**
 * Get doctor by slug
 */
export function getDoctorBySlug(slug: string): DoctorData | undefined {
    return DOCTORS.find(doctor => doctor.slug === slug);
}
