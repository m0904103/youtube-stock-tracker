const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "陳龍 (股市尊龍·運通財經)": {
        vp: "【2026.07.22 盤後最新】台股今日強彈1783點收復季線。認為台股正處於「黃金年代」，在AI基建與台積電等產業具全球稀缺性，長線多頭不變。面對近期修正無需擔憂。",
        ep: "應將績優權值股的拉回視為買點，勇敢逢低佈局。"
    }
};

let matchCount = 0;
for (const [name, updateData] of Object.entries(updates)) {
    const nameRegex = new RegExp(`(name:\\s*["']${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'],[\\s\\S]*?viewpoint:\\s*["'])([^"']*)(["'],\\s*stocks:[\\s\\S]*?entryPoint:\\s*["'])([^"']*)(["'])`);
    if (nameRegex.test(content)) {
        content = content.replace(nameRegex, `$1${updateData.vp}$3${updateData.ep}$5`);
        matchCount++;
    } else {
        console.log("Not found or regex failed:", name);
    }
}

let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-22 15:20 (陳龍盤後最新版)');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=157`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
