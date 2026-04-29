const http = require('http');

function fetchHtml(url) {
  return new Promise((resolve, reject) => {
    http.get(url, { headers: { 'User-Agent': 'Googlebot/2.1 (+http://www.google.com/bot.html)' } }, (res) => {
      let data = '';
      res.on('data', chunk => data += chunk);
      res.on('end', () => resolve(data));
      res.on('error', reject);
    }).on('error', reject);
  });
}

async function runTests() {
  const urls = [
    { label: 'English', url: 'http://localhost:3000/' },
    { label: 'Thai', url: 'http://localhost:3000/?lang=th' },
    { label: 'Arabic', url: 'http://localhost:3000/?lang=ar' }
  ];

  console.log('--- 1. VERIFYING PAGE METADATA ---');
  for (const item of urls) {
    const html = await fetchHtml(item.url);
    const head = html.match(/<head[^>]*>([\s\S]*?)<\/head>/i)?.[1] || '';
    
    const htmlLang = html.match(/<html[^>]*lang="([^"]+)"[^>]*>/i)?.[1] || 'MISSING';
    const title = head.match(/<title[^>]*>(.*?)<\/title>/i)?.[1] || 'MISSING';
    const canonical = head.match(/<link[^>]*rel="canonical"[^>]*href="([^"]+)"[^>]*>/i)?.[1] || 'MISSING';
    
    // Check hreflang
    const hreflangs = [...head.matchAll(/<link[^>]*hreflang="([^"]+)"[^>]*href="([^"]+)"[^>]*>/gi)]
      .map(m => `${m[1]} -> ${m[2]}`);
      
    console.log(`\n[${item.label}] URL: ${item.url}`);
    console.log(`- HTML Lang: ${htmlLang}`);
    console.log(`- Title: ${title}`);
    console.log(`- Canonical: ${canonical}`);
    console.log(`- Hreflangs: ${hreflangs.join(', ') || 'MISSING'}`);
    
    // Check if Language Switcher Link exists
    if (item.label === 'English') {
      const thLink = html.includes('href="/?lang=th"');
      const arLink = html.includes('href="/?lang=ar"');
      console.log(`- Thai link present in HTML: ${thLink ? 'YES' : 'NO'}`);
      console.log(`- Arabic link present in HTML: ${arLink ? 'YES' : 'NO'}`);
    }
  }

  console.log('\n--- 2. VERIFYING SITEMAP.XML ---');
  const sitemap = await fetchHtml('http://localhost:3000/sitemap.xml');
  const hasEn = sitemap.includes('https://www.mtrusturology.com</loc>');
  const hasTh = sitemap.includes('?lang=th');
  const hasAr = sitemap.includes('?lang=ar');
  
  console.log(`- Sitemap contains English URLs: ${hasEn ? 'YES' : 'NO'}`);
  console.log(`- Sitemap contains Thai URLs: ${hasTh ? 'YES' : 'NO'}`);
  console.log(`- Sitemap contains Arabic URLs: ${hasAr ? 'YES' : 'NO'}`);
}

runTests().catch(console.error);
