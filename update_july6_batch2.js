const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "Cathie Wood (ARK木頭姐)": {
        vp: "【2026.07.06 最新解析】針對今日盤勢，延續「買入破壞性創新」策略，趁大盤回調與特斯拉交車數據後的股價下跌，於今日大幅加倉特斯拉近10萬股與SoFi，對AI相關資產長線依舊看多。",
        ep: "善用市場短期的過度反應，逢低買入具備長期顛覆性技術的優質資產。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        vp: "【2026.07.06 最新解析】針對今日盤中表現，指出半導體板塊正在上演「復仇式反彈」。他認為上週市場對晶片股的拋售過於悲觀，特別點名輝達與博通估值已具備吸引力。",
        ep: "趁市場經歷過度悲觀的拋售後，逢低佈局基本面強勁的AI與半導體龍頭股。"
    },
    "杜金龍 (下班經濟學)": {
        vp: "【2026.07.06 最新解析】針對7月6日台股盤中震盪近千點的開高走低格局，拆解導致市場劇烈震盪的關鍵因素，並解析第三季資金輪動方向。",
        ep: "避開漲多的AI股，留意具營收支撐的低基期補漲個股，並關注台積電長期價值。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.07.06 最新解析】節目深入探討台股「日震千點」是否正常，並分析記憶體破線是否為真利空，以及國巨與AI擴產題材的後續動能。",
        ep: "面對高低震盪，應檢視手中記憶體與AI題材持股的技術線型變化。"
    },
    "財報狗 (StatementDog)": {
        vp: "【2026.07.06 最新解析】總結台股劇烈震盪失守46600點，點出市場焦點轉向受惠法規解套的軍工無人機概念股，以及外資看多帶動反彈的記憶體族群。",
        ep: "在台積電進入財報靜默期之際，可留意軍工與記憶體族群的短線輪動機會。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        vp: "【2026.07.06 最新解析】節目針對台股劇烈震盪，指出主因為輝達AI機櫃進度受阻傳聞，拖累軍工、PCB及載板等族群表現，市場資金正觀望台積電法說會。",
        ep: "避開受輝達利空傳聞干擾之族群，靜待台積電法說會前的法人籌碼動向。"
    },
    "阿村伯": {
        vp: "【2026.07.06 最新解析】盤後影片點評當日盤面焦點，特別探討無人機三雄走勢，並點名合晶創高、南亞本週面臨關鍵轉折，以及華邦電、國巨等個股後市。",
        ep: "持續關注無人機族群強弱，並留意南亞本週的關鍵表態走勢。"
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

// Update last updated time in index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-07 03:45');
indexContent = indexContent.replace(/script\.js\?v=136/, `script.js?v=137`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
