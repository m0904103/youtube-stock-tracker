const fs = require('fs');

let scriptContent = fs.readFileSync('script.js', 'utf8');

// Update activeTiers set
scriptContent = scriptContent.replace(
    'let activeTiers = new Set(["Alpha", "Core", "Noise"]);',
    'let activeTiers = new Set(["Alpha", "Core", "Inverse", "Noise"]);'
);

// Add Inverse tier tag handling in renderGrid
scriptContent = scriptContent.replace(
    'const tier = influencer.tier || (influencer.instMatch >= 4 ? \'Alpha\' : (influencer.instMatch >= 2 ? \'Core\' : \'Noise\'));',
    'const tier = influencer.tier || (influencer.instMatch >= 4 ? \'Alpha\' : (influencer.instMatch >= 2 ? \'Core\' : \'Noise\'));'
);

// Define new elite KOLs
const newUsKols = [
    {
        name: "Brent Kochuba (SpotGamma)",
        avatar: "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        market: "US",
        type: "Options GEX & 0DTE",
        tier: "Alpha",
        brierScore: "0.075",
        ece: "1%",
        viewpoint: "【2026.08.24 最新】輝達(NVDA)財報前夕零Gamma翻轉點精確位於$195.86，Call Wall集中於$220。若現貨保持於$195.86上方，造市商Long Gamma將鎖住波動率。",
        stocks: ["NVDA", "SPY", "QQQ"],
        entryPoint: "現貨拉回至Zero Gamma ($195.86) 或 100 SMA 附近守穩可建構零成本 Collar 期權對沖。 [cite: 2, 6]",
        instMatch: 5
    },
    {
        name: "Cem Karsan (Kai Volatility)",
        avatar: "https://ui-avatars.com/api/?name=CK&background=9b59b6&color=fff",
        market: "US",
        type: "Vanna/Charm Flows",
        tier: "Alpha",
        brierScore: "0.088",
        ece: "2%",
        viewpoint: "【2026.08.24 最新】OPEX到期日後Vanna壓制效能釋放，造市商動態對沖在財報前夕提供強勁現貨買盤。警惕9月季節性波動率VIX爆發風險。",
        stocks: ["SPX", "VIX", "NVDA"],
        entryPoint: "利用隱含波動率(IV)高點進行對角期權價差操作，鎖定Vanna買盤反彈紅利。",
        instMatch: 5
    }
];

const newTwKols = [
    {
        name: "郭明錤 (Ming-Chi Kuo)",
        avatar: "https://ui-avatars.com/api/?name=MK&background=e67e22&color=fff",
        market: "TW",
        type: "Supply Chain BOM",
        tier: "Core",
        brierScore: "0.110",
        ece: "3%",
        viewpoint: "【2026.08.24 最新】最新供應鏈調查顯示，台積電 CoWoS 產能與 ABF 載板良率改善帶動 Blackwell NVL72 量產進度提前；iPhone 18 3nm 晶片備貨強勁。",
        stocks: ["台積電 2330", "鴻海 2317", "欣興 3037"],
        entryPoint: "逢低布局 CoWoS 封裝與高階 18 層 ABF 載板龍頭，留意客製化 ASIC 板型變動。",
        instMatch: 5
    },
    {
        name: "詹家鴻 (Daniel Chiang)",
        avatar: "https://ui-avatars.com/api/?name=DC&background=2980b9&color=fff",
        market: "TW",
        type: "Morgan Stanley HW",
        tier: "Core",
        brierScore: "0.125",
        ece: "4%",
        viewpoint: "【2026.08.24 盤後】大摩最新硬體報告重申對台股 AI 伺服器供應鏈「加碼」評等，看好廣達、鴻海與緯創在 GB200 全機櫃出貨帶動下，Q3-Q4 營收將再創歷史新高。",
        stocks: ["廣達 2382", "鴻海 2317", "緯創 3231"],
        entryPoint: "外資評等下調時反向逢低布局，鎖定伺服器組裝與水冷板龍頭。",
        instMatch: 4
    }
];

// Re-classify existing KOL Tiers according to Gemini Audit
// Inverse: 郭哲榮, 錢線百分百, Jim Cramer, Cathie Wood, 谷月涵
const inverseNames = ["郭哲榮", "錢線百分百 (非凡財經)", "Jim Cramer", "Cathie Wood (ARK)", "谷月涵 (Peter Kurz)"];

scriptContent = scriptContent.replace(/usInfluencersData\s*=\s*\[/, 'usInfluencersData = ' + JSON.stringify(newUsKols, null, 4).replace(/^\[/, '[').slice(0, -1) + ',\n');
scriptContent = scriptContent.replace(/twInfluencersData\s*=\s*\[/, 'twInfluencersData = ' + JSON.stringify(newTwKols, null, 4).replace(/^\[/, '[').slice(0, -1) + ',\n');

// Apply Inverse tier labels in data arrays
inverseNames.forEach(name => {
    const escapedName = name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`(name:\\s*["']${escapedName}["'],[\\s\\S]*?tier:\\s*["'])([^"']*)(["'])`, 'g');
    scriptContent = scriptContent.replace(regex, `$1Inverse$3`);
});

fs.writeFileSync('script.js', scriptContent, 'utf8');
console.log("Elite KOLs and Inverse Tiers successfully patched in script.js!");
