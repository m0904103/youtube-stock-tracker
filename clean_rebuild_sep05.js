const fs = require('fs');

const usData = [
    {
        name: "Brent Kochuba (SpotGamma)",
        avatar: "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        market: "US",
        type: "Options GEX & 0DTE",
        tier: "Alpha",
        brierScore: "0.075",
        ece: "1%",
        viewpoint: "【2026.09.05 最新】非農數據後債市避險情緒高於股市期權定價，標普500在9月OPEX前處於負Gamma轉折區，NVDA期權重置加劇指數波動不對稱性。",
        stocks: ["NVDA", "SPY", "QQQ"],
        entryPoint: "嚴守Gamma反轉關鍵支撐位，提防指數跌破引發做市商拋售加速。",
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
        viewpoint: "【2026.09.05 最新】結構性衍生品壓抑表面VIX指數，但個股隱含波動劇烈分化；9月OPEX窗口面臨做市商避險動能轉換，易觸發季節性波動擴張與劇烈板塊輪動。",
        stocks: ["SPX", "VIX", "NVDA"],
        entryPoint: "把握VIX低點建立非對稱下行保護，避免重壓高估值單一科技股。",
        instMatch: 5
    },
    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=00ffcc&color=000",
        market: "US",
        type: "Semiconductor",
        tier: "Alpha",
        brierScore: "0.150",
        ece: "2%",
        viewpoint: "【2026.09.05 最新】輝達Blackwell晶片算力領先地位明確，供應鏈瓶頸正由CoWoS封裝轉向高頻寬記憶體與電力基建，超大規模雲端商自研晶片短期難以撼動其護城河。",
        stocks: ["NVDA", "TSM", "AVGO"],
        entryPoint: "逢硬體延遲或供應鏈雜音引發回檔時分批布局NVDA，切勿追高。",
        instMatch: 5
    },
    {
        name: "Charlie McElligott (Nomura)",
        avatar: "https://ui-avatars.com/api/?name=CM&background=ff0055&color=fff",
        market: "US",
        type: "CTA & Derivatives",
        tier: "Alpha",
        brierScore: "0.180",
        ece: "3%",
        viewpoint: "【2026.09.05 最新】CTA與波動率控制基金淨多頭部位已達歷史極限，缺乏續買動能；非農後債券殖利率走陡，一旦觸發下行停損將引發系統性量化拋售踩踏。",
        stocks: ["SPX", "CTA Triggers", "NVDA"],
        entryPoint: "降低高Beta資產槓桿率，密切監控CTA模型關鍵觸發點以防瀑布式賣壓。",
        instMatch: 5
    },
    {
        name: "Stanley Druckenmiller",
        avatar: "https://ui-avatars.com/api/?name=SD&background=f1c40f&color=000",
        market: "US",
        type: "Macro / 13F",
        tier: "Alpha",
        brierScore: "0.145",
        ece: "2%",
        viewpoint: "【2026.09.05 最新】美國龐大財政赤字推升長天期美債殖利率，美股大盤處於高估值泡沫邊緣；非農與通膨僵固使降息空間受限，對後市資產估值抱持高度審慎。",
        stocks: ["AMZN", "GOOGL", "TSM"],
        entryPoint: "嚴格控制股票部位曝險，提升現金水位並偏向防禦性策略。",
        instMatch: 5
    },
    {
        name: "Howard Marks (Oaktree)",
        avatar: "https://ui-avatars.com/api/?name=HM&background=34495e&color=fff",
        market: "US",
        type: "Credit / Cycle",
        tier: "Alpha",
        brierScore: "0.160",
        ece: "3%",
        viewpoint: "【2026.09.05 最新】強調信貸利差處於歷史低位，市場對無著陸與溫和降息過度定價。投資人應在市場樂觀時做好壓力測試，保持防禦性資產配置以因應潛在信貸擾動。",
        stocks: ["HYG", "SPY", "OAK"],
        entryPoint: "增加防禦性短天期高品質債券配置，避免因追逐高收益而降低信貸標準。",
        instMatch: 5
    },
    {
        name: "Tom Lee (Fundstrat)",
        avatar: "https://ui-avatars.com/api/?name=TL&background=2ecc71&color=fff",
        market: "US",
        type: "Macro Bull",
        tier: "Core",
        brierScore: "0.220",
        ece: "5%",
        viewpoint: "【2026.09.05 最新】市場對9月季節性回檔及非農後降息路徑的過度焦慮已構成反向做多信號；預期美股在恐慌情緒消化後將重啟升勢，標普中長線維持看多。",
        stocks: ["NVDA", "SPY", "IWM"],
        entryPoint: "善用9月因降息預期反覆導致的潛在拉回，積極逢低加碼優質成長股。",
        instMatch: 4
    },
    {
        name: "Jim Cramer",
        avatar: "https://ui-avatars.com/api/?name=JC&background=e74c3c&color=fff",
        market: "US",
        type: "Retail Sentiment",
        tier: "Inverse",
        brierScore: "0.410",
        ece: "12%",
        viewpoint: "【2026.09.05 最新】非農就業數據使Fed降息預期陷入兩難，但NVDA仍是AI牛市定海神針；目前市場處於去偽存真階段，資金將高度集中於具實質算力支撐的龍頭股。",
        stocks: ["NVDA", "AMD", "MSFT"],
        entryPoint: "逢NVDA拉回時分批承接，但應避開缺乏獲利與資本支出支撐的投機AI股。",
        instMatch: 1
    },
    {
        name: "Cathie Wood (ARK Invest)",
        avatar: "https://ui-avatars.com/api/?name=CW&background=9b59b6&color=fff",
        market: "US",
        type: "Disruptive Tech",
        tier: "Inverse",
        brierScore: "0.380",
        ece: "11%",
        viewpoint: "【2026.09.05 最新】特斯拉核心價值在於即將發布的Robotaxi自動駕駛生態而非傳統車廠；同時堅信AI硬體剛性需求，持續於科技股回檔震盪中逢低增持TSLA與NVDA。",
        stocks: ["TSLA", "NVDA", "PLTR"],
        entryPoint: "忽略短期非農與利率雜音，逢科技股震盪回調堅定加碼自動化與AI核心標的。",
        instMatch: 2
    }
];

const twData = [
    {
        name: "郭明錤 (Ming-Chi Kuo)",
        avatar: "https://ui-avatars.com/api/?name=MK&background=e67e22&color=fff",
        market: "TW",
        type: "Supply Chain BOM",
        tier: "Core",
        brierScore: "0.110",
        ece: "3%",
        viewpoint: "【2026.09.05 盤後】產業調查指出蘋果首款摺疊機預計9月發表但採晚發售策略、初期出貨700-800萬支；iPhone 18 Pro將導入台積電2nm與可變光圈；輝達重啟Rubin CPX推進長上下文推理，台積電SoIC封裝高速成長。",
        stocks: ["台積電 2330", "鴻海 2317", "大立光 3008"],
        entryPoint: "布局台積電2nm/SoIC先進封裝受惠股及蘋果高階規格升級供應鏈。",
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
        viewpoint: "【2026.09.05 盤後】摩根士丹利持續追蹤AI基礎設施與先進封裝，指出台積電COUPE與CPO技術為解決資料中心頻寬與功耗瓶頸關鍵；市場焦點已由題材轉向量產進度、客戶驗證與營收實質貢獻。",
        stocks: ["台積電 2330", "廣達 2382", "鴻海 2317"],
        entryPoint: "檢驗CPO與先進封裝概念股的客戶驗證進度與實質營收貢獻度。",
        instMatch: 5
    },
    {
        name: "陸行之 (Andrew Lu)",
        avatar: "https://ui-avatars.com/api/?name=AL&background=16a085&color=fff",
        market: "TW",
        type: "Semiconductor",
        tier: "Alpha",
        brierScore: "0.190",
        ece: "4%",
        viewpoint: "【2026.09.05 盤後】SEMICON展期指出三星延後1.4nm量產至2029年，台積電在埃米世代將處於無對手狀態並具強大定價權，預期2027資本支出上看千億美元；看好台廠AI私有化商機。",
        stocks: ["台積電 2330", "聯發科 2454"],
        entryPoint: "聚焦台積電埃米技術定價權與私有AI模型部署受惠供應鏈。",
        instMatch: 5
    },
    {
        name: "程正樺 (Tenor Capital)",
        avatar: "https://ui-avatars.com/api/?name=CH&background=27ae60&color=fff",
        market: "TW",
        type: "Supply Chain",
        tier: "Alpha",
        brierScore: "0.195",
        ece: "4%",
        viewpoint: "【2026.09.05 盤後】指出AI進入落地與軍備競賽下半場，2026半導體維持超級循環；台積電無論ASIC或GPU皆為核心代工霸主。操作上靈活應對GB200與雲端資本支出變化，看好CPO矽光子技術變革與散熱電力硬體剛需。",
        stocks: ["廣達 2382", "緯創 3231", "台達電 2308"],
        entryPoint: "著眼技術變革優勢股（CPO與散熱電力），並以台積電為核心防守配置。",
        instMatch: 4
    },
    {
        name: "曲建仲 (曲博)",
        avatar: "https://ui-avatars.com/api/?name=CB&background=8e44ad&color=fff",
        market: "TW",
        type: "Tech Due Diligence",
        tier: "Alpha",
        brierScore: "0.210",
        ece: "5%",
        viewpoint: "【2026.09.05 盤後】SEMICON 2026展後深度剖析，指出光電共封裝(CPO)與矽光子整合進入工程驗證衝刺期，光互連技術將逐步取代傳統銅導線以突破千瓦伺服器散熱障礙。",
        stocks: ["上銓 3363", "訊芯-KY 6451", "日月光投控 3711"],
        entryPoint: "關注具備矽光子CPO封測與光學元件實質量產能力的瓶頸受惠股。",
        instMatch: 4
    },
    {
        name: "林啟超 (國泰世華)",
        avatar: "https://ui-avatars.com/api/?name=LC&background=2c3e50&color=fff",
        market: "TW",
        type: "Macro & FX",
        tier: "Core",
        brierScore: "0.200",
        ece: "4%",
        viewpoint: "【2026.09.05 盤後】指出CSP巨頭資本支出高成長帶動台灣AI供應鏈基本面強勁，台灣GDP與企業獲利動能充沛；但提醒股市乖離率偏大，面對美歐貨幣政策需防範「擁擠交易」帶來的市場高波動風險。",
        stocks: ["台幣匯率", "富邦金 2881", "國泰金 2882"],
        entryPoint: "把握AI長期多頭趨勢，但須嚴控槓桿並提防市場擁擠交易帶來的短線劇烈震盪。",
        instMatch: 4
    },
    {
        name: "谷月涵 (QIC 寬量國際)",
        avatar: "https://ui-avatars.com/api/?name=PK&background=7f8c8d&color=fff",
        market: "TW",
        type: "Foreign Capital Flow",
        tier: "Inverse",
        brierScore: "0.320",
        ece: "8%",
        viewpoint: "【2026.09.05 盤後】SEMICON展後外資目光聚焦台灣中小型半導體設備與特用化學供應鏈；重申大盤處於高檔震盪整理，建議分散配置至防禦型價值股與生技板塊避開單一科技股回檔風險。",
        stocks: ["中小型潛力股", "生技醫療", "重電綠能"],
        entryPoint: "適度提高現金部位，並透過多元分散配置抵禦9月季節性波動。",
        instMatch: 2
    },
    {
        name: "財報狗",
        avatar: "https://ui-avatars.com/api/?name=SD&background=d35400&color=fff",
        market: "TW",
        type: "Quant Screener",
        tier: "Core",
        brierScore: "0.230",
        ece: "5%",
        viewpoint: "【2026.09.05 盤後】聚焦8月營收最新數據與SEMICON 2026展後趨勢，指出AI運算帶動矽光子（CPO）降低能耗需求，以及GB200液冷散熱與漏液防護等關鍵零組件量產驗證，提醒投資人回歸實質營收成長。",
        stocks: ["台積電 2330", "廣達 2382", "雙鴻 3324"],
        entryPoint: "回歸基本面檢視8月營收年增力道，並鎖定具液冷與CPO實質驗證之供應鏈。",
        instMatch: 4
    },
    {
        name: "郭哲榮",
        avatar: "https://ui-avatars.com/api/?name=JR&background=c0392b&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Inverse",
        brierScore: "0.450",
        ece: "15%",
        viewpoint: "【2026.09.05 盤後】SEMICON展後堅定看好AI真實需求，指出台股9月初震盪純屬高檔籌碼清洗非泡沫；看好第四季歷史高勝率行情，台股年底挑戰5萬點。重申手中1億元0050抱緊不賣，看好先進封裝與矽晶圓低基期股。",
        stocks: ["0050", "環球晶 6488", "世芯-KY 3661"],
        entryPoint: "逢拉回布局低基期先進封裝與矽晶圓績優股，持股抱緊迎接第四季多頭行情。",
        instMatch: 1
    },
    {
        name: "錢線百分百 (非凡財經)",
        avatar: "https://ui-avatars.com/api/?name=CX&background=e74c3c&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Inverse",
        brierScore: "0.430",
        ece: "14%",
        viewpoint: "【2026.09.05 盤後】9/4節目聚焦SEMICON Taiwan 2026落幕後供應鏈效應與8月營收前瞻，深度剖析台積電先進封裝（CoWoS）、矽光子/光通訊與高階PCB受惠題材，面對多空震盪建議掌握新箱型格局與高成長AI股。",
        stocks: ["聯鈞 3450", "上詮 3363", "波若威 3163"],
        entryPoint: "留意8月營收績優股，並鎖定展後具基本面支撐的矽光子與先進封裝族群。",
        instMatch: 1
    }
];

let scriptJs = fs.readFileSync('script.js', 'utf8');

// Replace arrays
const usDataStr = 'const usInfluencersData = ' + JSON.stringify(usData, null, 4) + ';\n';
const twDataStr = 'const twInfluencersData = ' + JSON.stringify(twData, null, 4) + ';\n';

scriptJs = scriptJs.replace(/(const|let|var)\s+usInfluencersData\s*=\s*\[[\s\S]*?\];/, usDataStr.trim());
scriptJs = scriptJs.replace(/(const|let|var)\s+twInfluencersData\s*=\s*\[[\s\S]*?\];/, twDataStr.trim());

fs.writeFileSync('script.js', scriptJs, 'utf8');
console.log("script.js updated with Sep 5 verified insights!");

// Update alt_data.json
try {
    let altJson = JSON.parse(fs.readFileSync('alt_data.json', 'utf8'));
    altJson.last_updated = "2026-09-05 19:20:00";
    fs.writeFileSync('alt_data.json', JSON.stringify(altJson, null, 4), 'utf8');
    console.log("alt_data.json updated to 2026-09-05!");
} catch (e) {
    console.error("alt_data fix error:", e);
}

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/2026-08-[0-9]{2} [0-9]{2}:[0-9]{2}[^<]*/, '2026-09-05 19:20 (9/5 美股非農後與SEMICON展後最新真實觀點版)');
indexHtml = indexHtml.replace(/2026-09-[0-9]{2} [0-9]{2}:[0-9]{2}[^<]*/, '2026-09-05 19:20 (9/5 美股非農後與SEMICON展後最新真實觀點版)');
indexHtml = indexHtml.replace(/script\.js(\?v=[^"']*)?/, 'script.js?v=20260905_1920');
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log("index.html updated with cache-busting v=20260905_1920!");
