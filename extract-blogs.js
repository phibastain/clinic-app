const fs = require('fs');
const content = fs.readFileSync('src/data/mockData.ts', 'utf8');

const sIndex = content.indexOf('export const BLOG_POSTS: BlogPost[]');
const eIndex = content.indexOf('export const EVENTS_DATA: EventData[]');

const blogText = content.substring(sIndex, eIndex);

const parseMatches = (regex) => {
    let matches = [];
    let match;
    while ((match = regex.exec(blogText)) !== null) {
        matches.push(match[1].trim());
    }
    return matches;
};

const titles = parseMatches(/title:\s*['"]([^'"]+)['"]/g);
const excerpts = parseMatches(/excerpt:\s*['"]([^'"]+)['"]/g);

fs.writeFileSync('blog_strings.json', JSON.stringify({ titles, excerpts }, null, 2));
console.log('Saved to blog_strings.json');
