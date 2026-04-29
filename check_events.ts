import { EVENTS_DATA } from './src/data/mockData';

console.log('Total Events:', EVENTS_DATA.length);
EVENTS_DATA.forEach(e => {
    console.log(`ID: ${e.id}, Slug: ${e.slug}, Title: ${e.title}`);
});
