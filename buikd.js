// node build.js  →  writes index.html (lessons.json inlined)
const fs = require('fs');
const tpl = fs.readFileSync('index.template.html', 'utf8');
const json = JSON.stringify(JSON.parse(fs.readFileSync('lessons.json', 'utf8'))).replace(/</g, '\\u003c');
fs.writeFileSync('index.html', tpl.replace('__LESSONS_JSON__', () => json));
console.log('index.html written (' + Math.round(fs.statSync('index.html').size / 1024) + ' KB)');