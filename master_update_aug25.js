const fs = require('fs');

// 1. Fix alt_data.json
try {
    let altRaw = fs.readFileSync('alt_data.json', 'utf8');
    // Remove git conflict markers if any
    altRaw = altRaw.replace(/<{7}[\s\S]*?={7}[\s\S]*?>{7}[^\n]*\n?/g, '');
    let altJson = JSON.parse(altRaw);
    altJson.last_updated = "2026-08-25 21:20:00";
    fs.writeFileSync('alt_data.json', JSON.stringify(altJson, null, 4), 'utf8');
    console.log("alt_data.json fixed!");
} catch (e) {
    console.error("alt_data fix error:", e);
}

// 2. Fix script.js
let scriptContent = fs.readFileSync('script.js', 'utf8');

const updates = {
    "Brent Kochuba (SpotGamma)": {
        vp: "【2026.08.25 最新】監測顯示NVDA財報前買權高度集中，做市商Gamma暴露極大。期權隱含波動率(IV)飆升，短天期期權Delta對沖將放大雙向波動，慎防業績落地後IV Crush與Vega修正。",
        ep: "財報前夕嚴控單邊多頭槓桿，建議利用垂直價差或日曆價差防範IV Crush。"
    },
    "Cem Karsan (Kai Volatility)": {
        vp: "【2026.08.25 最新】聚焦8/26輝達財報與Jackson Hole央行年會共振。指出市場處於極端動量擁擠，做市商倉位將在業績落地後釋放流動性，需慎防回檔引發系統性連鎖去槓桿。",
        ep: "密切注意財報後做市商Gamma釋放方向，逢高可適度配置尾部下行避險。"
    },
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.25 最新】AgentX基準測試顯示NVDA在Agentic AI推論效率領先AMD達5倍；Vera Rubin NVL72架構每兆瓦產能大幅躍升，軟硬結合護城河極深，算力需求依舊遠超供給。",
        ep: "從底層算力與架構護城河來看長線基本面無虞，拉回皆為優質建倉點。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.25 最新】市場處於降息定價與巨頭財報關鍵分水嶺。CTA與系統化資金在科技股多頭部位偏高，NVDA財報若引發波動率反彈，恐觸發Gamma Flip與量化被動停損賣壓。",
        ep: "警惕量化CTA部位的被動平倉風險，財報前夕宜降低整體投資組合Beta值。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.25 最新】8月以來旗下ETF持續逢低逆勢加碼NVDA逾數千萬美元，同時減持AMD與Roblox。重申AI基礎設施仍處早期，全球AI支出將達1.5兆美元，目前估值具長線價值。",
        ep: "堅定看好AI硬體核心地位，採取逢低分批加碼策略而非追高。"
    },
    "Jim Cramer": {
        vp: "【2026.08.25 最新】盤前強力駁斥對NVDA資本支出可持續性的質疑，指出市場對AI晶片供需比仍達15:1；強烈看好財報帶動股價向上突破，呼籲投資人切勿因悲觀過早下車。",
        ep: "不要對AI領頭羊過早獲利了結，應持股續抱(Own it, don't trade it)。"
    },
    "Tom Lee (Fundstrat)": {
        vp: "【2026.08.25 最新】維持標普8000點樂觀目標，將目前盤勢視為蓄勢待發的『壓縮彈簧』。駁斥科技巨擘表外AI承諾泡沫論，強調AI基礎設施具真實獲利支撐，看好NVDA點燃Q4漲勢。",
        ep: "無視短期噪音與泡沫言論，持續重倉AI基礎設施核心標的。"
    },
    "Tom Lee": {
        vp: "【2026.08.25 最新】維持標普8000點樂觀目標，將目前盤勢視為蓄勢待發的『壓縮彈簧』。駁斥科技巨擘表外AI承諾泡沫論，強調AI基礎設施具真實獲利支撐，看好NVDA點燃Q4漲勢。",
        ep: "無視短期噪音與泡沫言論，持續重倉AI基礎設施核心標的。"
    },
    "郭明錤 (Ming-Chi Kuo)": {
        vp: "【2026.08.25 盤後】輝達因記憶體成本飆升擬調漲伺服器15%；台積電CoPoS玻璃基板量產時程落在2027下半年，市場預期有落差，非所有供應鏈均能受惠。",
        ep: "輝達財報前夕留意成本轉嫁能力，對CoPoS與玻璃基板題材切忌追高。"
    },
    "詹家鴻 (Daniel Chiang)": {
        vp: "【2026.08.25 盤後】半導體漲價循環確立，台積電先進製程與封裝報價續揚，全球四大CSP資本支出大增帶動台積電積極擴建12座前段廠與4座封裝廠。",
        ep: "順應晶圓代工與先進封裝漲價趨勢，長線核心持股續抱台積電。"
    },
    "陸行之 (Andrew Lu)": {
        vp: "【2026.08.25 盤後】記憶體資本開支加速但下游組裝庫存達歷史新高且排擠消費端；面對AI高估值應維持謹慎，密切追蹤下半年真實資本開支與客戶庫存去化。",
        ep: "輝達財報前夕保持觀望，避免盲目追價並緊盯產業資本密度變化。"
    },
    "程正樺 (Tenor Capital)": {
        vp: "【2026.08.25 盤後】AI晶片戰略由放大封裝轉向3D堆疊(SoIC)，算力瓶頸轉移至「電與光」，矽光子(CPO)與電力基礎設施為AI下一波核心黑馬。",
        ep: "積極型緊盯CPO技術量產進度，穩健型逢低布局台積電及電力散熱族群。"
    },
    "郭哲榮": {
        vp: "【2026.08.25 盤後】台股8/25盤中急拉近千點收復季線，44,000點展現強勁實質支撐，量縮象徵賣壓減輕與籌碼乾淨，看好AI需求帶動矽晶圓漲價題材。",
        ep: "鎖定低基期與業績保護股，趁拉回分批布局環球晶等矽晶圓指標股。"
    },
    "財報狗": {
        vp: "【2026.08.25 盤後】輝達財報聚焦下一季千億美元營收指引與毛利率；2026年CPO迎商轉元年，但短期實質營收占比有限，需提防估值過度超前修正。",
        ep: "檢視矽光子與伺服器供應鏈實質訂單能見度，慎防題材炒作風險。"
    },
    "林啟超 (國泰世華)": {
        vp: "【2026.08.25 盤後】受惠全球CSP資本支出大幅增加，上市櫃獲利結構支撐台股長線多頭，但短線指數與年線乖離偏高且高利率維持，需留意短線波動放大。",
        ep: "長線順應AI趨勢分批布局核心電子股，短線避免過度放大融資槓桿。"
    }
};

let matchCount = 0;
for (const [name, updateData] of Object.entries(updates)) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const nameRegex = new RegExp(`(name:\\s*["']${escapedName}["'],[\\s\\S]*?viewpoint:\\s*["'])([^"']*)(["'],[\\s\\S]*?entryPoint:\\s*["'])([^"']*)(["'])`);
    if (nameRegex.test(scriptContent)) {
        scriptContent = scriptContent.replace(nameRegex, `$1${updateData.vp}$3${updateData.ep}$5`);
        matchCount++;
        console.log("Updated in script.js:", name);
    }
}
fs.writeFileSync('script.js', scriptContent, 'utf8');

// 3. Fix index.html timestamp
let htmlContent = fs.readFileSync('index.html', 'utf8');
htmlContent = htmlContent.replace(/2026-08-[0-9]{2} [0-9]{2}:[0-9]{2}[^<]*/, '2026-08-25 21:20 (8/25 輝達財報前夕真實觀點版)');
fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log("index.html timestamp updated!");
