const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');
let matches = [...c.matchAll(/name:\s*["']([^"']*(錢線|李兆華)[^"']*)["']/g)];
console.log(matches.map(m => m[1]));
