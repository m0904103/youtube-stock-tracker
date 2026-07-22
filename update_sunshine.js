const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "陽光財經 (尼可拉斯陽)": {
        vp: "【2026.07.23 盤前最新】特斯拉獲利不及預期且AI支出拖累現金流；谷歌因資本支出過高且廣告疲軟承壓。科技股面臨估值修正，資金正從大型巨頭流出。",
        ep: "短期科技股技術面有破位風險，建議避開未達預期的大型科技股，切勿盲目抄底。"
    }
};

let matchCount = 0;
for (const [name, updateData] of Object.entries(updates)) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const nameRegex = new RegExp(`(name:\\s*["']${escapedName}["'],[\\s\\S]*?viewpoint:\\s*["'])([^"']*)(["'],\\s*stocks:[\\s\\S]*?entryPoint:\\s*["'])([^"']*)(["'])`);
    if (nameRegex.test(content)) {
        content = content.replace(nameRegex, `$1${updateData.vp}$3${updateData.ep}$5`);
        matchCount++;
        console.log("Updated:", name);
    } else {
        console.log("Not found or regex failed:", name);
    }
}
fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
