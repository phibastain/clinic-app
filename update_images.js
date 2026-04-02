const fs = require('fs');
const path = require('path');

const mockDataPath = path.join(__dirname, 'src/data/mockData.ts');
let content = fs.readFileSync(mockDataPath, 'utf8');

content = content.replace(
  /image: '\/assets\/image\/blog section\/Why Treating Enlarged Prostate\.webp',/g,
  "image: '/assets/image/blog section/Why You Must Remove.webp',"
);

content = content.replace(
  /\/assets\/image\/blog section\/Why Treating Enlarged Prostate 2\.webp/g,
  "/assets/image/blog section/Why You Must Remove 2.webp"
);

fs.writeFileSync(mockDataPath, content, 'utf8');

console.log("mockData.ts successfully updated!");
