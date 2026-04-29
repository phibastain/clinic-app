import { EVENTS_DATA, BLOG_POSTS, DOCTORS, SERVICE_CATEGORIES } from './src/data/mockData';

console.log('EVENTS_DATA length:', EVENTS_DATA.length);
console.log('BLOG_POSTS length:', BLOG_POSTS.length);
console.log('DOCTORS length:', DOCTORS.length);
console.log('SERVICE_CATEGORIES length:', Object.keys(SERVICE_CATEGORIES).length);

EVENTS_DATA.forEach(e => {
    console.log(`Event ID: ${e.id}, Slug: ${e.slug}`);
});
