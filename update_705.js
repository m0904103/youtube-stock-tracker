const fs = require('fs');
let c = fs.readFileSync('script.js', 'utf8');

c = c.replace(/【2026\.07\.05 週末最新解析】/g, '【2026.07.22 盤前追蹤】自 7/5 週末以來尚無最新發言，維持先前看法：');

fs.writeFileSync('script.js', c);
