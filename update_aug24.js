const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs - Verified 8/24
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.24 最新】輝達CUDA護城河與vLLM優化維持強大算力性價比，AI基礎設施與Neoclouds需求強勁，晶片替代風險低。",
        ep: "建議在輝達財報前維持AI核心晶片與算力供應鏈配置，毋需過度擔憂非NVDA晶片替代風險。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.08.24 最新】基金經理人現金水位降至3.5%觸發賣出訊號，56%押注無著陸，市場過度擁擠且對傑克遜霍爾與財報缺乏防備。",
        ep: "建議在市場極度擁擠下適度提防回檔風險，但可趁輝達財報前分批逢低布局優質AI龍頭。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.24 最新】輝達財報為市場終極壓力測試（期權定價波動7.8%），AI企業發債潮擠壓美債，黃金與比特幣成為債務焦慮出口。",
        ep: "建議短期利用期權進行輝達財報避險，並配置黃金以對沖美債殖利率陡峭化風險。"
    },
    "Stanley Druckenmiller": {
        vp: "【2026.08.24 最新】最新分析顯示清倉美光與英特爾等晶片股，轉向大幅加碼亞馬遜與Alphabet等AI買家，並新布局數位資產基礎設施。",
        ep: "建議跟隨其調倉思維，將部分半導體獲利資金轉向現金流穩健的雲端巨頭與數位基礎設施。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.08.24 最新】傳統60/40股債配置失效，黃金具備長期避險價值；市場正經歷大宗商品輪動，美股上漲動能向高品質防禦股擴散。",
        ep: "建議投資人降低科技股單一集中度，增加黃金與高品質週期股作為資產組合防禦屏障。"
    },
    "Elon Musk": {
        vp: "【2026.08.24 最新】SpaceX完成2026年第100次發射且衛星突破1.1萬顆；特斯拉官宣9月3日舉行Cybercab Robotaxi發佈會。",
        ep: "建議密切關注9月初Robotaxi發佈會的技術進展，並在特斯拉短線因召回波動時尋找逢低布局點。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.24 最新】8月中下旬持續逆勢逢低大舉加碼輝達，特斯拉維持ARKK第一大持股（9.24%），堅信2030年AI支出達1.5兆美元。",
        ep: "建議在輝達財報前跟隨ARK腳步分批逢低加碼AI算力與電動車龍頭，保持長線高信念。"
    },
    "Jim Cramer": {
        vp: "【2026.08.24 最新】輝達仍為AI革命核心，記憶體美光打破景氣循環；8/24呼籲避開加密貨幣轉向黃金，並警惕新股IPO潮過多擠壓資金。",
        ep: "建議逢低持有輝達與美光等實質獲利半導體股，同時避開高估值新股與純炒作資產。"
    },

    // TW KOLs - Verified 8/24
    "郭哲榮": {
        vp: "【2026.08.24 盤後】8/24盤後指出台股成交量急凍如三角收斂頂點，為行情發動前兆。長線維持台股上看5萬至10萬點看法，砸1億元重押0050並看好低位階AI/記憶體族群。",
        ep: "把握量縮震盪逢低分批佈局低位階績優股與0050，切勿恐慌殺低。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.08.24 盤後】8/24盤後解盤聚焦「落後補漲」策略，提出三大抄底條件（季線負乖離大、上半年獲利、Q2三率三升）。看好被動元件與半導體築底反彈，提醒面板宜區間操作。",
        ep: "優先挑選Q2三率三升且與季線負乖離大的落後補漲股，區間操作籌碼凌亂標的。"
    },
    "曲建仲 (曲博)": {
        vp: "【2026.08.24 盤後】8/24分析輝達伺服器傳漲價，主因記憶體與台積電先進製程產能吃緊，AI需求強勁使輝達難向供應商砍價並順利轉嫁成本；提醒留意SEMICON 2026展前AI供應鏈瓶頸。",
        ep: "關注輝達供應鏈中具備先進封裝與高階記憶體定價權的瓶頸受惠股。"
    },
    "程正樺 (Tenor Capital)": {
        vp: "【2026.08.24 盤後】指出AI資料中心最關鍵瓶頸已從GPU晶片轉為「電力」與「光通訊」，美電網缺口帶動表後供電與光學互連需求。台積電與輝達本益比偏低具基本面支撐。",
        ep: "跳脫單一晶片題材，逢回佈局AI基礎設施中的電力與光通訊黑馬股。"
    },
    "財報狗": {
        vp: "【2026.08.24 盤後】8/24指出市場正迎接「AI三大壓力測試」（輝達財報前夕、Fed演說與核心PCE數據）。看好AI供應鏈長線基本面，提醒關注產能與耗材庫存。",
        ep: "輝達財報揭曉前宜控管倉位，聚焦AI先進封裝與耗材族群基本面變化。"
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
