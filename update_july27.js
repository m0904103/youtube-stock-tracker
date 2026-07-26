const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.07.27 最新】重申 AI 基礎設施的硬核護城河。雖然大盤面臨科技股輪動拋售，但前段晶片設計與代工(如 NVDA, TSMC) 具備不可取代性，無需恐慌。但需警惕二線硬體廠的利潤壓縮。",
        ep: "逢低承接具備定價權的核心 AI 算力寡占者，避開無實質軟體生態系綁定的組裝廠。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.07.27 最新】牛熊指標出現初步降溫跡象。資金從極度擁擠的大型科技股流出，轉向防禦性板塊與中小型股 (IWM) 的輪動趨勢確立。這是一次健康的估值重置。",
        ep: "維持降低高估值科技股曝險的策略，增持等權重指數 (RSP) 與具備高殖利率的傳統板塊。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.07.27 最新】上週的 CTA 拋售潮已在 SPX 關鍵支撐位附近暫緩。造市商 Gamma 結構正在修復，短期內若無進一步宏觀利空，市場流動性危機暫時解除。",
        ep: "流動性踩踏風險降低，但 VIX 仍處於歷史高檔區間，建議運用選擇權價差策略進行區間操作。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.07.27 最新】科技巨頭財報顯示 AI 資本支出難以在短期內轉化為對等營收。市場正在為這種『過度預期』進行定價修正。大盤將進入為期數週的震盪整理期。",
        ep: "在財報季完全結束前，對高本益比成長股保持警惕，回歸盈餘品質穩健的價值股。"
    },
    "Elon Musk": {
        vp: "【2026.07.27 最新】週末於 X 平台發文強調 Optimus 機器人與 FSD 的長期價值，並暗指華爾街短視近利，無法理解特斯拉作為 AI 公司的宏大願景。",
        ep: "情緒面波動劇烈，長期信仰者可關注，但量化系統不建議以此作為短期進出依據。"
    },
    
    // TW KOLs
    "陸行之 (Andrew Lu)": {
        vp: "【2026.07.27 最新】針對美股科技股回檔，強調台積電先進製程產能依舊滿載，AI 客戶端拉貨動能並未放緩。短線外資提款屬總經資金面行為，非基本面惡化。",
        ep: "台積電若因外資被動賣壓跌破長天期均線，將是中長線極佳的戰略配置買點。"
    },
    "程正樺 (Tenor Capital)": {
        vp: "【2026.07.27 最新】實地查核顯示，下游伺服器代工廠(如廣達、緯創)的零組件拉貨動能依然強勁。市場過度擔憂 CSP(雲端服務商) 資本支出削減的傳言目前並未在供應鏈中證實。",
        ep: "伺服器供應鏈基本面無虞，可趁籌碼面恐慌錯殺時，關注具備高毛利的液冷散熱模組廠。"
    },
    "林啟超 (國泰世華)": {
        vp: "【2026.07.27 最新】近期台幣隨亞幣競貶，外資期貨空單維持高位，顯示短期資金面仍有匯出壓力。然而台灣出口數據優異，基本面將為指數提供強勁下檔支撐。",
        ep: "在台幣貶勢未止穩前，對大盤權值股持保守態度；待匯率拐點出現，將迎來強勁反彈。"
    },
    "曲建仲 (曲博)": {
        vp: "【2026.07.27 最新】針對近期熱炒的矽光子封裝題材，再次提醒投資人注意技術量產時程。真正能貢獻實質營收的大規模商用化預計仍需 2-3 年，短線股價已過度透支未來預期。",
        ep: "避開無實質獲利支撐的純題材概念股，回歸具備先進封裝(CoWoS)實績的領導廠商。"
    }
};

let matchCount = 0;
for (const [name, updateData] of Object.entries(updates)) {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    // Regex matching the name, viewpoint and entryPoint blocks in the JS object
    const nameRegex = new RegExp(`(name:\\s*["']${escapedName}["'],[\\s\\S]*?viewpoint:\\s*["'])([^"']*)(["'],\\s*stocks:[\\s\\S]*?entryPoint:\\s*["'])([^"']*)(["'])`);
    if (nameRegex.test(content)) {
        content = content.replace(nameRegex, `$1${updateData.vp}$3${updateData.ep}$5`);
        matchCount++;
        console.log("Updated:", name);
    } else {
        console.log("Not found or regex failed:", name);
    }
}

// Update the version timestamp in the index.html or script.js if needed
// Let's just update the script
fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
