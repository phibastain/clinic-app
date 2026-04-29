const fs = require('fs');
const txt = fs.readFileSync('src/data/mockData.ts', 'utf8');
const cats = new Set([...txt.matchAll(/category:\s*(['"])(.*?)\1/g)].map(m => m[2]));
console.log([...cats]);
