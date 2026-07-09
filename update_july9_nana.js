const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "美股小左": {
        vp: "【伊朗衝突突發應對】尚未針對美伊開打發布最新觀點。面對突發黑天鵝，市場避險情緒升溫，科技巨頭恐面臨短期壓力。",
        ep: "由於目前無最新觀點，建議暫時維持既有風險控管，等待明確的盤勢訊號。"
    },
    "NaNa說美股": {
        vp: "【伊朗衝突突發應對】尚未對此次衝突表態，但她近期已提醒半導體暴跌與板塊輪動風險。地緣政治往往加劇高估值科技股的修正壓力。",
        ep: "建議先參考其近期對半導體回調的防禦策略，並靜待對美伊局勢的點評。"
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
// Keep the same timestamp but bump the version
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=144`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
