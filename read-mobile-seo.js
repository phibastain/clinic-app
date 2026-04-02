const fs = require('fs');
const data = JSON.parse(fs.readFileSync('./lighthouse-mobile-seo.json', 'utf8'));

console.log('\n=== MOBILE SEO SCORES ===');
for (const [key, cat] of Object.entries(data.categories)) {
  console.log(`${cat.title}: ${Math.round(cat.score * 100)}/100`);
}

console.log('\n=== AUDIT DETAILS ===');
for (const [id, audit] of Object.entries(data.audits)) {
  if (audit.score !== null) {
      const status = audit.score === 1 ? '✅' : (audit.score > 0 ? '⚠️' : '❌');
      console.log(`${status} ${audit.title}`);
  }
}
