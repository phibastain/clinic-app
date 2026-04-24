import { EVENTS_DATA } from '@/data/mockData';

export const eventTitleToSlug = (title: string): string => {
    if (!title) return '';
    return title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, '')
        .replace(/[\s_-]+/g, '-')
        .replace(/^-+|-+$/g, '');
};

export const findEventBySlug = (slug: string) => {
    return EVENTS_DATA.find(e => e.slug === slug);
};

export const getEventSlug = (event: { slug?: string; title: string }) => {
    return event.slug || eventTitleToSlug(event.title);
};
