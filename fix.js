const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');
c = c.replace('instMatch: 3\n    {\n        name: "Jeremy', 'instMatch: 3\n    },\n    {\n        name: "Jeremy');
fs.writeFileSync('script.js', c);
console.log('Fixed syntax error');
