const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs - Verified 8/6
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.06 最新】分析指出AI產業轉向信用融資驅動，雲端巨頭YTD發債4,500億美元；發表Kimi K3與Vera Rubin TCO分析，並預估CPO大規模量產將延至2028年。",
        ep: "關注AI巨頭融資成本與推理端TCO效益，適度避開過度押注近期CPO量產的標的。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.08.06 最新】最新Flow Show指出標普500已達7,741點目標，警告8-10月季節性回檔風險；提醒30年美債殖利率達5.2%與實質殖利率3%將壓抑風險資產，資金轉向防禦資產。",
        ep: "留意8-10月季節性拉回與美債高殖利率壓力，適度提高防禦性資產與現金比重。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.06 最新】報告指出市場經歷極端動量反轉後，投資人透過買權追高導致「現貨與VIX同步上揚」的異常現象，顯示追高與避險需求同時激增，暗示波動將加劇。",
        ep: "留意期權買權過熱引起的追高風險，建議配置適度Delta避險或採用價差期權策略控管回檔風險。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.08.06 最新】最新觀點維持標普500上看8,000點，但指出市場進入週期中後期，領導力從半導體擴散，建議轉向「獲利品質輪動」，佈局高自由現金流與盈餘穩健之龍頭股。",
        ep: "將持股重心從純動量半導體轉向具備強勁自由現金流與高獲利品質的各行業龍頭。"
    },
    "Elon Musk": {
        vp: "【2026.08.06 最新】SpaceX首份季報營收78億美元超預期，但AI與數據中心CapEx達158億美元引發賣壓。馬斯克強調將推出Grok 4.6/4.7與Grok 5，並確認全面採用Nvidia Vera Rubin架構。",
        ep: "留意高CapEx對短期現金流之壓力，關注Nvidia供應鏈與長線AI/太空基礎設施佈局。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.06 最新】交易日誌顯示ARK加碼Circle逾1,700萬美元，並逢低抄底SpaceX、Nvidia、台積電與Tesla，同時逢高減持Shopify與Palantir等標的。",
        ep: "採逆向波段操作，在科技股拉回時逢低加碼AI基建與核心硬體龍頭，並逢高調節高溢價標的。"
    },
    "Jim Cramer": {
        vp: "【2026.08.06 最新】節目力挺Shopify財報後大漲17%，駁斥AI威脅論；針對AMD因SpaceX獨採Nvidia而下挫7%，強調AI晶片非零和博弈，並建議將SpaceX視為百年鐵路債般長線持有。",
        ep: "勿因短期個股利空慌亂賣出，AI硬體市場空間足夠容納多家巨頭，可擇優逢低分批佈局。"
    },

    // TW KOLs - Verified 8/6
    "陸行之 (Andrew Lu)": {
        vp: "【2026.08.06 盤後】解讀美股AI財報指出，AMD未帶來驚喜且難言驅動台積電，但AI基礎建設如Astera Labs營收亮眼。整體AI供應鏈呈現明顯分態，非所有AI股皆能同步成長。",
        ep: "建議避開短期動能不明的高估值個股，轉向聚焦具備實質營收成長的AI基礎建設標的。"
    },
    "程正樺 (Tenor Capital)": {
        vp: "【2026.08.06 盤後】認為AI非泡沫且評價便宜，指出韓國保證金爆倉、FOMC及CSP財報等利空已出盡。台積電先進製程與CoWoS龍頭地位穩固，籌碼清洗後第四季表現可期。",
        ep: "建議趁大盤回檔時逢低布局台積電及CPO、高速傳輸等硬核基本面標的。"
    },
    "曲建仲 (曲博)": {
        vp: "【2026.08.06 盤後】剖析2026年半導體轉向結構性擴張，台積電主導全球投資但面臨台美雙核心海外成本挑戰。長線AI應聚焦HBM記憶體、矽光子(CPO)與先進封裝演進。",
        ep: "建議投資人理解技術本質與供給瓶頸，切勿盲目追高無實質先進封裝題材的股票。"
    },
    "林啟超 (國泰世華)": {
        vp: "【2026.08.06 盤後】分析日圓美日聯手干預係主動拆彈避險。看好CSP資本支出大增帶動台灣AI供應鏈，企業獲利強勁支撐台股長線挑戰五萬點，惟需留意高過乖離率與短期波動。",
        ep: "建議長線抱緊AI核心獲利股，短線控管槓桿以因應高乖離帶來的市場震盪。"
    },
    "谷月涵 (QIC 寬量國際)": {
        vp: "【2026.08.06 盤後】警示台股已進入末升段，維持個人零持股策略，提醒留意高檔回落風險。看好AI衍生之電力能源需求與記憶體周邊，建議避開已漲多的主流AI晶片巨頭。",
        ep: "建議適度提高現金比率避險，並將資金轉向AI能源與記憶體等相對補漲族群。"
    },
    "財報狗": {
        vp: "【2026.08.06 盤後】聚焦美股記憶體大廠財報與SpaceX解禁賣壓，指出SanDisk與WD財測未達高預期致盤後重挫；台股方面則看好伺服器滑軌龍頭川湖上半年EPS突破110元衝上萬金股。",
        ep: "建議密切觀察伺服器供應鏈實質獲利表現，對財測極端高預期之個股保持嚴謹檢驗。"
    },
    "郭哲榮": {
        vp: "【2026.08.06 盤後】8/6盤後指出台股自跌逾500點大幅拉回展現強勁韌性，底部確立。其抄底1億元0050帳面獲利超千萬，堅守5萬點目標不變，並看好群聯、微星及鴻海。",
        ep: "建議趁震盪拉回時分批逢低加碼市值型ETF或績優AI權值股。"
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
