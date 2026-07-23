const fs = require('fs');

const oldScript = fs.readFileSync('script.js', 'utf8');

// I will create the completely overhauled usInfluencersData and twInfluencersData.
// Then replace them in script.js.

const newUsData = `
const usInfluencersData = [
    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=8e44ad&color=fff",
        market: "US",
        type: "AI Supply Chain",
        tier: "Alpha",
        brierScore: "0.15",
        ece: "2%",
        viewpoint: "【硬核基本面】指出 AI 模型資本支出雖龐大，但前段軟體巨頭毛利仍高達 70%。戳破部分 CPU 廠商對 Blackwell 伺服器的過度樂觀幻想。",
        stocks: ["NVDA", "AVGO", "AMPH"],
        entryPoint: "追蹤資料中心 TCO 與 B.O.M 拆解，尋找具備定價權的硬體設施寡占者。",
        instMatch: 5
    },
    {
        name: "Michael Hartnett (BofA)",
        avatar: "https://ui-avatars.com/api/?name=MH&background=2c3e50&color=fff",
        market: "US",
        type: "Macro Quant",
        tier: "Alpha",
        brierScore: "0.22",
        ece: "5%",
        viewpoint: "【量化反轉】警告 AI 概念股市值佔比逼近 48% 極端值，若『牛熊指標』觸發賣出，結合 CPI 逼近 4% 將引爆資金撤退。",
        stocks: ["SPY", "QQQ", "TLT"],
        entryPoint: "當牛熊指標大於 8.0 時，強制降低多頭曝險，切換防禦性資產。",
        instMatch: 5
    },
    {
        name: "Charlie McElligott (Nomura)",
        avatar: "https://ui-avatars.com/api/?name=CM&background=d35400&color=fff",
        market: "US",
        type: "Derivatives",
        tier: "Alpha",
        brierScore: "0.18",
        ece: "3%",
        viewpoint: "【微觀籌碼】專注於造市商 Gamma 曝險水位與 CTA 機械性拋售點位。無視基本面，直指選擇權市場的流動性枯竭風險。",
        stocks: ["VIX", "SPX"],
        entryPoint: "跌破 Short Gamma 觸發點時，預期演算法拋售，提前買入尾部避險工具。",
        instMatch: 5
    },
    {
        name: "Stanley Druckenmiller",
        avatar: "https://ui-avatars.com/api/?name=SD&background=27ae60&color=fff",
        market: "US",
        type: "Macro Hedge Fund",
        tier: "Core",
        brierScore: "0.25",
        ece: "4%",
        viewpoint: "【長線資產配置】具備強大 Skin in the Game，長線關注通膨、生產力增長與實質利率變化，主導 18~24 個月戰略基調。",
        stocks: ["IWM", "Commodities"],
        entryPoint: "觀察其 13F 新增板塊（非單一個股），校準宏觀方向。",
        instMatch: 4
    },
    {
        name: "Howard Marks (Oaktree)",
        avatar: "https://ui-avatars.com/api/?name=HM&background=16a085&color=fff",
        market: "US",
        type: "Credit Cycles",
        tier: "Core",
        brierScore: "0.28",
        ece: "6%",
        viewpoint: "【信貸週期】透過不良債權利差判斷市場週期位置。當垃圾債殖利率低於均值，警告市場風險溢酬過低。",
        stocks: ["HYG", "JNK"],
        entryPoint: "啟動估值收縮壓力測試，提高無利潤成長股的折現率。",
        instMatch: 4
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        avatar: "https://ui-avatars.com/api/?name=MW&background=34495e&color=fff",
        market: "US",
        type: "Macro Strategy",
        tier: "Core",
        brierScore: "0.45",
        ece: "15%",
        viewpoint: "【防禦警示】資金正從擁擠的 AI 科技巨頭中撤出。TSLA 與 GOOGL 財報為測試科技波動能的底線。",
        stocks: ["SPY", "XLV", "XLP"],
        entryPoint: "作為高估值板塊回撤時的防禦參考錨點。",
        instMatch: 3
    },
    {
        name: "Elon Musk",
        avatar: "https://ui-avatars.com/api/?name=EM&background=e74c3c&color=fff",
        market: "US",
        type: "CEO/Insider",
        tier: "Noise",
        brierScore: "0.65",
        ece: "40%",
        viewpoint: "【利益衝突警告】Q2 財報坦承自由現金流不及預期，預告 AI 支出將超 250 億美元。",
        stocks: ["TSLA", "DOGE"],
        entryPoint: "注意尾部情緒風險，避免因單一推文進行高槓桿做多。",
        instMatch: 1
    },
    {
        name: "Cathie Wood (ARK)",
        avatar: "https://ui-avatars.com/api/?name=CW&background=e67e22&color=fff",
        market: "US",
        type: "Growth Evangelist",
        tier: "Noise",
        brierScore: "0.75",
        ece: "55%",
        viewpoint: "【死多頭訊號】無懼財報陣痛，堅定加倉 GOOGL 與 TSLA，完全忽略短期盈餘波動與資本成本。",
        stocks: ["ARKK", "TSLA", "Roku"],
        entryPoint: "僅適用極度寬鬆週期；緊縮環境下為反向指標。",
        instMatch: 0
    },
    {
        name: "Jim Cramer",
        avatar: "https://ui-avatars.com/api/?name=JC&background=c0392b&color=fff",
        market: "US",
        type: "Edutainment",
        tier: "Noise",
        brierScore: "0.85",
        ece: "70%",
        viewpoint: "【經典反指標】強烈警告科技股洗盤，呼籲轉向工業與金融避險。",
        stocks: ["QQQ"],
        entryPoint: "高頻看多看空反轉極快，具備極強的反向指標統計意義。",
        instMatch: 0
    }
];
`;

const newTwData = `
const twInfluencersData = [
    {
        name: "陸行之 (Andrew Lu)",
        avatar: "https://ui-avatars.com/api/?name=AL&background=2980b9&color=fff",
        market: "TW",
        type: "Semiconductor",
        tier: "Alpha",
        brierScore: "0.19",
        ece: "4%",
        viewpoint: "【硬核基本面】能看穿法說會公關話術，直指庫存去化或先進製程良率的真實狀況，掌握台積電與供應鏈資本支出動向。",
        stocks: ["2330", "2454"],
        entryPoint: "法說會後，將其對毛利率展望轉化為半導體週期擴張/收縮判定。",
        instMatch: 5
    },
    {
        name: "程正樺 (Tenor Capital)",
        avatar: "https://ui-avatars.com/api/?name=CC&background=2c3e50&color=fff",
        market: "TW",
        type: "Supply Chain",
        tier: "Alpha",
        brierScore: "0.21",
        ece: "5%",
        viewpoint: "【實地查核】具備買方大資金視角，能區分「塞貨給渠道的假需求」與「終端拉貨的真需求」，避免被單月營收蒙蔽。",
        stocks: ["2382", "3231"],
        entryPoint: "驗證消費性電子與伺服器供應鏈的實際拉貨力道。",
        instMatch: 5
    },
    {
        name: "曲建仲 (曲博)",
        avatar: "https://ui-avatars.com/api/?name=CB&background=8e44ad&color=fff",
        market: "TW",
        type: "Tech Due Diligence",
        tier: "Alpha",
        brierScore: "0.24",
        ece: "3%",
        viewpoint: "【防偽過濾器】從物理學與工程學底層邏輯，拆解常溫超導、量子運算等虛假題材是否具備量產可能。",
        stocks: ["矽光子", "CoWoS"],
        entryPoint: "偵測到異常題材暴漲且其判斷「技術不可行」時，封鎖做多權限。",
        instMatch: 4
    },
    {
        name: "林啟超 (國泰世華)",
        avatar: "https://ui-avatars.com/api/?name=LC&background=27ae60&color=fff",
        market: "TW",
        type: "Macro & FX",
        tier: "Core",
        brierScore: "0.29",
        ece: "7%",
        viewpoint: "【壽險資金動向】精準剖析聯準會貨幣政策對台美利差的影響，推演外資匯出入與台幣匯率走向。",
        stocks: ["台幣匯率", "金融股"],
        entryPoint: "作為台股系統性風險水位 (Beta) 調節閥，台幣面臨貶值時降槓桿。",
        instMatch: 4
    },
    {
        name: "谷月涵 (QIC 寬量國際)",
        avatar: "https://ui-avatars.com/api/?name=PK&background=16a085&color=fff",
        market: "TW",
        type: "Foreign Capital Flow",
        tier: "Core",
        brierScore: "0.33",
        ece: "8%",
        viewpoint: "【外資建倉邏輯】了解國際被動資金 (ETF) 與主動型外資在台股中小型股的流動性偏好與 ESG 篩選標準。",
        stocks: ["中小型潛力股"],
        entryPoint: "尋找基本面優異但尚未被廣泛發掘的 Alpha 標的。",
        instMatch: 4
    },
    {
        name: "財報狗",
        avatar: "https://ui-avatars.com/api/?name=狗&background=d35400&color=fff",
        market: "TW",
        type: "Quant Screener",
        tier: "Core",
        brierScore: "0.38",
        ece: "6%",
        viewpoint: "【黑名單過濾】專注財務指標異常與盈餘品質，剔除存貨飆升、應收帳款異常的高風險個股。",
        stocks: ["財報異常股"],
        entryPoint: "無情剔除高風險個股，作為系統的 API 負向篩選條件。",
        instMatch: 3
    },
    {
        name: "股癌 (Gooaye)",
        avatar: "https://ui-avatars.com/api/?name=GA&background=7f8c8d&color=fff",
        market: "TW",
        type: "Edutainment",
        tier: "Noise",
        brierScore: "0.55",
        ece: "20%",
        viewpoint: "【大眾共識】財經娛樂與科普，傳遞的往往是已經 Priced-in 的市場共識。",
        stocks: ["ETF", "熱門股"],
        entryPoint: "觀察散戶群體情緒，不可作為量化交易的進出場依據。",
        instMatch: 0
    },
    {
        name: "郭哲榮",
        avatar: "https://ui-avatars.com/api/?name=哲&background=c0392b&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Noise",
        brierScore: "0.78",
        ece: "65%",
        viewpoint: "【高頻噪音】頻繁喊進喊出，依賴極度簡化的技術線型進行事後解釋，缺乏正向期望值。",
        stocks: ["投機熱門股"],
        entryPoint: "散戶過度樂觀時的反向情緒警示。",
        instMatch: 0
    },
    {
        name: "錢線百分百 (非凡財經)",
        avatar: "https://ui-avatars.com/api/?name=錢&background=c0392b&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Noise",
        brierScore: "0.72",
        ece: "50%",
        viewpoint: "【高頻噪音】收視率導向，每日針對大漲大跌的股票進行事後諸葛式的點評。",
        stocks: ["當日漲停板"],
        entryPoint: "當其強烈推薦某族群時，通常是短線過熱、即將回檔的訊號。",
        instMatch: 0
    }
];
`;

let startIndex = oldScript.indexOf('const usInfluencersData = [');
let endIndex = oldScript.indexOf('function renderGrid(containerId, data) {');
if (startIndex !== -1 && endIndex !== -1) {
    let newContent = oldScript.substring(0, startIndex) + 
                     newUsData + '\n' + newTwData + '\n\n' + 
                     oldScript.substring(endIndex);
    fs.writeFileSync('script.js', newContent, 'utf8');
    console.log("Successfully replaced data arrays.");
} else {
    console.log("Could not find insertion points.");
}
