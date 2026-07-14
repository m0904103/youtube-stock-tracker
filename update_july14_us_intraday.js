const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "Elon Musk": {
        vp: "【2026.07.14 盤中最新】旗下xAI數據中心因燃氣輪機引發環保爭議；在德州持續收購土地；SpaceX IPO後成為首位兆萬富翁。",
        ep: "須留意馬斯克旗下企業擴張基礎建設時的監管與環保合規風險。"
    },
    "Dan Ives": {
        vp: "【2026.07.14 盤中最新】指出記憶體晶片是AI革命的「天之驕子」，供需嚴重失衡；預測「美股七雄」下半年將因AI資本支出強勢跑贏大盤。",
        ep: "下半年可積極佈局記憶體晶片板塊與美股七雄。"
    },
    "霍比特小灰": {
        vp: "【2026.07.14 盤中最新】發布新片解析重新關注比特幣的原因，分析美光與Palantir等個股，並探討華爾街對美股回調的警告。",
        ep: "可關注比特幣輪動機會，並做好防禦準備以應對美股潛在回調。"
    },
    "NaNa說美股": {
        vp: "【2026.07.14 盤中最新】博主目前休假停更中。前次發文分析三星財報引發半導體洗盤，視輝達為宏觀避險工具。",
        ep: "避免盲目殺跌追高，關注企業定價能力並利用輝達作為對沖。"
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
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-15 02:00 (美股盤中版)');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=151`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
