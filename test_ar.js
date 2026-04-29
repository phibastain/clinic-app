const fs = require('fs');
const content = fs.readFileSync('src/data/mockData.ts', 'utf8');
const posts = content.split('id:');
posts.forEach(p => {
    const tMatch = p.match(/title:\s*['"]([^'"]+)['"]/);
    const cMatch = p.match(/content:\s*`([\s\S]*?)`/);
    const arMatch = p.match(/contentAR:\s*`([\s\S]*?)`/);
    if(tMatch && cMatch) {
        const cLen = cMatch[1].length;
        let arLen = 0;
        if(arMatch) {
            arLen = arMatch[1].length;
        } else {
            // maybe it uses double quotes?
            const arMatch2 = p.match(/contentAR:\s*"([\s\S]*?)"/);
            if(arMatch2) arLen = arMatch2[1].length;
        }
        if(arLen < cLen * 0.7) {
            console.log(tMatch[1] + ' : EN=' + cLen + ' AR=' + arLen);
        }
    }
});
