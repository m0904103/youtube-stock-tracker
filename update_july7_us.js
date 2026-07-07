const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.07.07 最新解析】認為半導體動能衰退，建議將資金輪動至微軟、亞馬遜與Meta等雲端巨頭，並警告資金輪動可能導致短期美股震盪，大盤近期難創新高。",
        ep: "避開過熱晶片股，轉向佈局具防禦性或落後補漲之板塊。"
    },
    "Tom Lee (Fundstrat)": {
        vp: "【2026.07.07 最新解析】將標普500年底目標價上調至8000點並看好Q2財報，但警告8至10月間恐因聯準會政策與IPO解禁等因素出現10-20%的急跌。",
        ep: "長線維持多頭，但需保留現金以準備在夏秋之際逢低買進。"
    },
    "Jeremy Grantham": {
        vp: "【2026.07.07 最新解析】再次警告美股處於史上最大AI泡沫，直指SpaceX的IPO是典型的市場觸頂訊號，預測股市最終可能暴跌達70%。",
        ep: "遠離美國股市，將資金轉移至國際市場、債券與貴金屬避險。"
    },
    "Cathie Wood (ARK木頭姐)": {
        vp: "【2026.07.07 最新解析】7/6減碼AMD，並逢低加碼買進Kratos國防、X-Energy核能以及加密貨幣機構Bullish，資金轉向次世代能源與國防。",
        ep: "可留意並跟隨其在核能、太空國防與數位資產等新興領域的低檔佈局。"
    },
    "Adam Kobeissi": {
        vp: "【2026.07.07 最新解析】預期標普500將突破8000點大關，指出晶片股已取代科技七巨頭領漲，並警告小型股面臨極沉重的利息支出風險。",
        ep: "擁抱AI基礎設施相關的大型股，避開利息負擔沉重的小型企業。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        vp: "【2026.07.07 最新解析】稱晶片股大跌是過度反應並迎來復仇性反彈，強力看多輝達與博通，建議趁資金輪動買進嬌生、星巴克等遭錯殺的高品質傳統股。",
        ep: "堅定抱牢並逢低加碼AI核心晶片股，同時留意優質價值股的買點。"
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

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
