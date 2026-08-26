const fs = require('fs');

// 1. Fix alt_data.json
try {
    let altRaw = fs.readFileSync('alt_data.json', 'utf8');
    altRaw = altRaw.replace(/<{7}[\s\S]*?={7}[\s\S]*?>{7}[^\n]*\n?/g, '');
    let altJson = JSON.parse(altRaw);
    altJson.last_updated = "2026-08-26 21:30:00";
    fs.writeFileSync('alt_data.json', JSON.stringify(altJson, null, 4), 'utf8');
    console.log("alt_data.json updated to Aug 26!");
} catch (e) {
    console.error("alt_data fix error:", e);
}

// 2. Fix script.js
let scriptContent = fs.readFileSync('script.js', 'utf8');

const updates = {
    "Brent Kochuba (SpotGamma)": {
        vp: "【2026.08.26 最新】NVDA財報為市場終極催化劑。VIX期限結構顯示避險需求上升但成本相對低廉，期權造市商對沖結構將放大財報後的指數單邊波動。",
        ep: "建議利用低成本波動率工具進行指數避險，切勿在流動性支撐下單向逆勢放空。"
    },
    "Cem Karsan (Kai Volatility)": {
        vp: "【2026.08.26 最新】警告市場做多NVDA買權（Long Calls）過度擁擠，OPEX後的Gamma斷崖已改變造市商對沖動態，需防範財報發布後波動率重定價帶來的下修風險。",
        ep: "提防買權踩踏風險，建議逢高獲利了結或布局不對稱下檔保護以規避波動率崩跌。"
    },
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.26 最新】分析OpenAI自研推論晶片Jalapeño，NVDA在通用計算與全模態訓練上仍具霸權；Vera Rubin架構在AgentX任務展現30倍能效，軟硬協同為核心護城河。",
        ep: "聚焦NVDA在全棧軟體生態與Rubin架構的技術護城河，關注雲端自研晶片份額變化。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.26 最新】稱NVDA財報影響力超越通膨數據，期權定價約7.8%隱含波動；盤前正Gamma提供波動率鉗制，財報公布後將引發Vanna與Charm資金流解鎖觸發單邊行情。",
        ep: "密切監控財報公布後的Gamma釋放與突破方向，順應機械式資金流向進行動能跟隨。"
    },
    "Cathie Wood (ARK Invest)": {
        vp: "【2026.08.26 最新】8月連續逢低大舉加碼NVDA數千萬美元，同時減持AMD與Palantir以集中持倉；堅信AI基礎設施週期仍處極早期階段，展現對NVDA長期增長極高信心。",
        ep: "堅持破壞性創新投資思維，在市場震盪拉回時將資金集中配置於AI基礎設施龍頭。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.26 最新】8月連續逢低大舉加碼NVDA數千萬美元，同時減持AMD與Palantir以集中持倉；堅信AI基礎設施週期仍處極早期階段，展現對NVDA長期增長極高信心。",
        ep: "堅持破壞性創新投資思維，在市場震盪拉回時將資金集中配置於AI基礎設施龍頭。"
    },
    "Jim Cramer": {
        vp: "【2026.08.26 最新】稱NVDA財報為AI浪潮的公投，駁斥市場看空與競爭威脅，直言每年都有號稱超越NVDA的晶片但無實質威脅；呼籲投資人聚焦電力與算力交付進度。",
        ep: "忽視短期雜音並堅定抱牢NVDA核心持股(Own it, don't trade it)，檢視電力交付。"
    },
    "Tom Lee (Fundstrat)": {
        vp: "【2026.08.26 最新】視今日為美股方向選擇窗口，NVDA財報為標普挑戰7,900–8,000點關鍵考驗；若黃仁勳釋出強勁AI算力指引，將帶動大盤重啟新一輪多頭攻勢。",
        ep: "維持堅定看多立場，可趁財報前夕的震盪回檔積極逢低布局AI龍頭與權值股。"
    },
    "Tom Lee": {
        vp: "【2026.08.26 最新】視今日為美股方向選擇窗口，NVDA財報為標普挑戰7,900–8,000點關鍵考驗；若黃仁勳釋出強勁AI算力指引，將帶動大盤重啟新一輪多頭攻勢。",
        ep: "維持堅定看多立場，可趁財報前夕的震盪回檔積極逢低布局AI龍頭與權值股。"
    },
    "郭明錤 (Ming-Chi Kuo)": {
        vp: "【2026.08.26 盤後】聚焦Blackwell平台成熟放量與下世代Rubin架構過渡節奏；Rubin樣品已交付並預計下半年量產，但需克服HBM4認證、網路升級與液冷散熱等挑戰。",
        ep: "留意Rubin高階量產時程與散熱/HBM驗證進度對供應鏈的影響。"
    },
    "詹家鴻 (Daniel Chiang)": {
        vp: "【2026.08.26 盤後】大摩維持台積電為半導體首選，看好CoWoS先進封裝產能擴張；並透過鴻海、廣達等台系ODM出貨動能，正面看待雲端AI長期需求與Token降本趨勢。",
        ep: "逢低聚焦具先進封裝護城河的台積電及出貨能見度高的ODM龍頭。"
    },
    "陸行之 (Andrew Lu)": {
        vp: "【2026.08.26 盤後】關注輝達即將公布之財報能否在記憶體漲價下守住75%毛利率，並警示Rubin Ultra若降規減少HBM容量對供應鏈影響，提醒留意庫存月數與CoWoS動能。",
        ep: "財報公布前夕切忌盲目追高，應緊盯毛利率指引與庫存月數變化。"
    },
    "程正樺 (Tenor Capital)": {
        vp: "【2026.08.26 盤後】認為AI行情未見頂且獲利有撐，但當前最短料瓶頸已由GPU晶片轉向「電力」供應；建議關注算力基礎設施，鎖定電力概念股與下世代光通訊/CPO矽光子。",
        ep: "布局重心由單純GPU轉向電力供應鏈與CPO矽光子技術變革。"
    },
    "郭哲榮": {
        vp: "【2026.08.26 盤後】堅定看好台股長線趨勢，解讀盤面量縮為三角收斂醞釀期而非崩盤；認為輝達AI已轉化為實質獲利，財報前後若遇震盪皆為逢低布局良機。",
        ep: "震盪拉回不殺低不做空，逢回積極布局市值型ETF與權值核心。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.08.26 盤後】8/26解盤聚焦AI資料中心升級推升之CPO矽光子量產商機，探討FAU光纖陣列模組與光互連題材；台積電呈現區間震盪，資金於高階電子與補漲股輪動。",
        ep: "把握CPO矽光子量產受惠股，並於台積電區間下緣採分批低接策略。"
    },
    "財報狗": {
        vp: "【2026.08.26 盤後】輝達財報為AI景氣溫度計，市場預期營收高成長，聚焦資料中心與新平台放量進程；持續追蹤台積電先進製程/CoWoS與廣達、鴻海伺服器市況。",
        ep: "以財報實質數據與法說展望為依據，嚴守紀律動態調整AI持股組合。"
    },
    "林啟超 (國泰世華)": {
        vp: "【2026.08.26 盤後】預期企業獲利強勁支撐台股長線，CSP巨頭AI資本支出持續爆發，台灣為供應鏈重組最大受惠者；但降息路徑偏審慎且市場乖離率高，注意波動常態化。",
        ep: "肯定AI長線多頭但須留意高乖離波動，避免過度槓桿並做好資產配置。"
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
htmlContent = htmlContent.replace(/2026-08-[0-9]{2} [0-9]{2}:[0-9]{2}[^<]*/, '2026-08-26 21:30 (8/26 輝達財報日盤後真實觀點版)');
fs.writeFileSync('index.html', htmlContent, 'utf8');
console.log(`Successfully updated ${matchCount} influencers to August 26 NVDA Earnings Day data!`);
