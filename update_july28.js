const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.07.28 最新】指出當前記憶體市場為『結構性短缺』而非暫時供需失衡，強調軟硬體『共同設計』是突破關鍵，透露 Anthropic 已於第二季實現正自由現金流。",
        ep: "關注AI基礎設施瓶頸，逢低佈局記憶體相關標的，留意具備軟硬整合優勢之企業。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.07.28 最新】警告BofA牛熊指標已達9.6的極度樂觀水位，基金經理人現金降至3.6%觸發反向賣出訊號；『藍領半導體』指數自高點回落21%，軟著陸共識過於脆弱。",
        ep: "市場情緒過度樂觀，建議採取反向操作，減碼科技與工業股，轉進防禦型與高股息資產。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.07.28 最新】形容當前利率市場出現『迷你恐慌』，警告中東局勢與油價飆升正引發通膨尾部風險；科技七雄已從『資本回報者』轉為『資本消耗者』。",
        ep: "防範通膨預期重燃帶來的利率衝擊，並重新評估AI巨頭龐大資本支出的實質回報率。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.07.28 最新】觀察到市場正經歷典型中期的『品質』輪動，半導體板塊已失去動能，資金應轉向AI應用能帶來明確利潤增長的銀行、醫療等產業。",
        ep: "避開漲多且動能衰退的半導體，轉進能實質受惠於AI應用並提升淨利率的非科技領域。"
    },
    "Elon Musk": {
        vp: "【2026.07.28 最新】在Tesla第二季財報未達預期重挫後，強調公司正進行大規模資本支出以實現工業級擴張；預測AI將在五年內超越人類智慧，對SpaceX合併抱開放態度。",
        ep: "面對短期財報壓力與資本支出大增，需耐心關注Tesla在機器人與AI應用的長期佈局。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.07.28 最新】趁SpaceX股價回落及Tesla財報大跌之際，逢低大幅加碼數千萬美元；同時透過獲利了結部分持股調整組合，維持對SpaceX可能成為全球最重要公司的信心。",
        ep: "秉持破壞性創新信念，在AI核心持股遇逆風時逢低承接，著眼長期顛覆性價值。"
    },
    "Jim Cramer": {
        vp: "【2026.07.28 最新】警告近日半導體拋售是由面臨保證金追繳的槓桿基金所引發的『怪物級』賣壓，擔憂華爾街對科技股過度集中，呼籲轉向金融與醫療等板塊。",
        ep: "避開過度擁擠且槓桿過高的科技股，趁市場波動將資金分散至防禦性與傳產板塊。"
    },
    
    // TW KOLs
    "郭哲榮": {
        vp: "【2026.07.28 最新】指出台股短中期底部已確立，長線看好。提醒投資人分辨真反彈與死貓跳，避免追高舊AI、CPO或PCB等短線漲多族群。",
        ep: "建議長期持有市值型ETF(如0050)，或挑選基本面明確且處於低基期的個股。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.07.28 最新】聚焦台股震盪與量能急凍盤勢，探討矽光子等AI半導體供應鏈展望。提醒投資人在大盤回測時別把接刀當抄底。",
        ep: "應觀察兩大反彈訊號確認止跌契機後再行布局，切勿在量縮震盪時盲目抄底。"
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
