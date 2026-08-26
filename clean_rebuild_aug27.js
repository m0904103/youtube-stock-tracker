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
        viewpoint: "【2026.08.27 盤後】盤後拉升帶動IV Crush（隱含波動率崩跌），做市商在財報前壓抑的Gamma空頭回補，觸發大盤與NVDA期權鏈向上重定價，空頭擠壓效應顯著。",
        stocks: ["NVDA", "SPY", "QQQ"],
        entryPoint: "建議逢IV驟降獲利了結近月價外Call，轉向逢回拉回布局遠月牛市價差。",
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
        viewpoint: "【2026.08.27 盤後】市場重倉Long Call引發做市商Short Call對沖，盤後大漲雖觸發Charm與Vanna買盤，但隨波動率溢價快速收縮，需警惕流動性消退後的衝高回落。",
        stocks: ["SPX", "VIX", "NVDA"],
        entryPoint: "不宜追高末日買權，建議利用隱含波動率潰縮進行期權收租或價差鎖利。",
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
        viewpoint: "【2026.08.27 盤後】Blackwell產能與良率順利放量，GB200機櫃出貨強勁推升毛利率表現，軟硬體共研與CUDA生態壁壘堅固，客製化ASIC短期內難以撼動其王者地位。",
        stocks: ["NVDA", "TSM", "AVGO"],
        entryPoint: "持續做多輝達及先進封裝、高速傳輸等核心AI供應鏈標的。",
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
        viewpoint: "【2026.08.27 盤後】財報利多落地消除市場重大尾部風險，盤後漲勢化解期權跨式定價壓力，波動率重置將觸發CTA與波動率目標基金等系統性資金進行大規模再平衡回補。",
        stocks: ["SPX", "CTA Triggers", "NVDA"],
        entryPoint: "順應波動率壓降帶來的系統性買盤，維持短線做多科技權值股策略。",
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
        viewpoint: "【2026.08.27 盤後】輝達財報證實AI雲端巨頭獲利轉化能力，維持重倉亞馬遜、Alphabet與台積電等AI終端落地買家，對硬體設備維持動態獲利了結與資產輪動。",
        stocks: ["AMZN", "GOOGL", "TSM"],
        entryPoint: "順應AI紅利向雲端巨頭與數位基建擴散趨勢，維持靈活資產輪動。",
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
        viewpoint: "【2026.08.27 盤後】輝達亮眼財報消除短期疑慮，但市場仍處於高估值週期。在樂觀情緒蔓延時應堅持基本面定錨，避免因FOMO（錯失恐懼）追逐過度槓桿。",
        stocks: ["HYG", "SPY", "OAK"],
        entryPoint: "嚴守風險紀律，維持適度防禦性高收益債與現金水位，不盲目追高。",
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
        viewpoint: "【2026.08.27 盤後】輝達強勁指引粉碎AI泡沫疑慮，成功掃除下半年市場關鍵障礙，算力需求維持不墜，確立標普500指數持續挑戰新高的多頭主升浪。",
        stocks: ["NVDA", "SPY", "IWM"],
        entryPoint: "逢任何盤中拉回皆是進場時機，全力做多AI半導體與雲端概念股。",
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
        viewpoint: "【2026.08.27 盤後】財報與指引再度證明輝達是AI基礎建設無可替代的龍頭，直接打臉市場空頭與供應鏈悲觀論調，再次印證『Own it, don't trade it』。",
        stocks: ["NVDA", "AMD", "MSFT"],
        entryPoint: "抱緊現貨切勿輕易波段進出，長期享受AI超級週期紅利。",
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
        viewpoint: "【2026.08.27 盤後】財報確認AI硬體擴張週期仍在初期階段，算力資本支出需求強勁，驗證回檔加碼策略正確，長期算力將進一步外溢至下游軟體應用端。",
        stocks: ["NVDA", "TSLA", "PLTR"],
        entryPoint: "維持AI核心硬體配置，並伺機逢低增持具高增長潛力的AI應用標的。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達產品策略轉向雙晶片架構，台積電CoWoS-L封裝需求成為主流，AI需求長線強勁，但GB200高功耗散熱考驗短期量產爬坡速度。",
        stocks: ["台積電 2330", "鴻海 2317", "雙鴻 3324"],
        entryPoint: "聚焦CoWoS-L與液冷散熱關鍵供應商，避開轉換期受壓族群。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達強勁財報鞏固AI需求，台積電先進製程與CoWoS封裝產能維持滿載為最大受惠者，重申台積電優於大盤評級與長期結構性成長。",
        stocks: ["台積電 2330", "廣達 2382", "鴻海 2317"],
        entryPoint: "持續長線布局台積電及具技術壁壘的先進封裝核心供應鏈。",
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
        viewpoint: "【2026.08.27 盤後解讀】提醒市場關注財報指引與預期差，毛利率雖處高檔但需留意成本壓力，若庫存月數攀升需警戒利多出盡與回檔風險，焦點在Blackwell放量節奏。",
        stocks: ["台積電 2330", "聯發科 2454"],
        entryPoint: "留意毛利率與庫存天數變化，切勿盲目追高，靜待籌碼沉澱。",
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
        viewpoint: "【2026.08.27 盤後解讀】認為AI軍備競賽步入下半場，需警戒GB200出貨遞延、獲利缺乏大幅上修空間及ASIC競爭加劇，操作上嚴守紀律，降低高估值硬體曝險。",
        stocks: ["廣達 2382", "緯創 3231", "台達電 2308"],
        entryPoint: "嚴守紀律不跟股票談戀愛，逢高調節並檢視長期護城河。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達最新伺服器財報凸顯資料中心功耗暴增，矽光子(CPO)與台積電SoIC封裝將加速導入，解決銅線傳輸之物理散熱極限。",
        stocks: ["上銓 3363", "訊芯-KY 6451", "日月光投控 3711"],
        entryPoint: "聚焦具備矽光子CPO封測與光學元件實質量產能力的瓶頸受惠股。",
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
        viewpoint: "【2026.08.27 盤後解讀】CSP資本支出狂飆推動台灣供應鏈與企業獲利強勁成長，但台股高檔乖離率已大，面臨產業K型分化與高利率環境，需居安思危防範震盪。",
        stocks: ["台幣匯率", "富邦金 2881", "國泰金 2882"],
        entryPoint: "長線受惠AI大趨勢，但短線乖離過高應嚴控槓桿、避免追高。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達財報帶動台美股短線狂歡，但警惕末升段資金極端集中於權值股，提醒逢高分批獲利了結並轉向生技與傳產防禦板塊。",
        stocks: ["中小型潛力股", "生技醫療", "重電綠能"],
        entryPoint: "建議適度提高現金比率避險，並將資金轉向非電補漲族群。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達財報展現強勁動能，台積電CoWoS產能擴充與GB200放量直接挹注組裝與散熱族群，後續應緊盯CSP自由現金流與實際指引落差。",
        stocks: ["台積電 2330", "廣達 2382", "鴻海 2317"],
        entryPoint: "檢視供應鏈營收兌現能力與評價位階，依循財務基本面操作。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達財報超預期印證AI迎來十年大爆發，台股震盪洗盤皆為逢低布局良機，看好具實質業績保護之先進封裝與伺服器族群。",
        stocks: ["0050", "環球晶 6488", "世芯-KY 3661"],
        entryPoint: "拉回即是買點，嚴控槓桿並分批布局台積電與0050。",
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
        viewpoint: "【2026.08.27 盤後解讀】輝達亮眼財報帶動台股反彈，但市場高度預期下波動加劇，需留意雲端大廠資本支出延續性與融資水位，慎防盤中震盪與追高風險。",
        stocks: ["聯鈞 3450", "上銓 3363", "雙鴻 3324"],
        entryPoint: "開盤切忌盲目追高，採取逢回低接或配置指數型ETF。",
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
console.log("script.js updated with August 27 NVDA post-earnings insights!");

// Update alt_data.json
try {
    let altJson = JSON.parse(fs.readFileSync('alt_data.json', 'utf8'));
    altJson.last_updated = "2026-08-27 06:50:00";
    fs.writeFileSync('alt_data.json', JSON.stringify(altJson, null, 4), 'utf8');
    console.log("alt_data.json updated to 2026-08-27!");
} catch (e) {
    console.error(e);
}

// Update index.html
let indexHtml = fs.readFileSync('index.html', 'utf8');
indexHtml = indexHtml.replace(/2026-08-[0-9]{2} [0-9]{2}:[0-9]{2}[^<]*/, '2026-08-27 06:50 (8/27 輝達財報發布後盤後爆發真實觀點版)');
indexHtml = indexHtml.replace(/script\.js(\?v=[^"']*)?/, 'script.js?v=20260827_0650');
fs.writeFileSync('index.html', indexHtml, 'utf8');
console.log("index.html updated to 8/27 with cache-busting v=20260827_0650!");
