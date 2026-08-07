const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs - Verified 8/8 (8/7 US Close)
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.08 最新】8/7報告指出DeepMind高層人事變動有利於Google Cloud業務加速；看好SpaceX於2027年達到10GW AI算力建置且微軟為最大客戶。同時駁斥SK海力士HBM降價傳聞。",
        ep: "關注Google Cloud財報重估價值與SpaceX/微軟供應鏈，避開市場無根據的HBM割肉謠言。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.08.08 最新】8/7《Flow Show》指出BofA牛熊指標升至9.7引發賣出訊號。警告美股情緒過熱，建議撤退與輪動而非加碼，重點看守油價$4、日圓160與十年期美債殖利率5%紅線。",
        ep: "減碼高貝塔科技與半導體股，轉向公用事業、REITs、小型股及美元等防禦型資產。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.08 最新】最新跨資產分析指出，近期美股強勁反彈主因是市場中性策略被迫平倉（空超算巨頭、多AI概念股）引發的軋空潮，呈現「現貨與波動率同步上升」追價買權現象。",
        ep: "警惕衍生品軋空帶動的無基本面暴漲，追高買權時須做好波動率快速回落的對沖。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.08.08 最新】維持S&P 500長期牛市目標，指出動能投資正從單純晶片硬體端輪動至能實質利用AI實現盈利成長的擴展型企業，市場呈現健康廣度擴張。",
        ep: "調整AI投資組合，從高估值晶片股適度獲利結算，轉向獲利穩定且實質增長的大盤績優股。"
    },
    "Elon Musk": {
        vp: "【2026.08.08 最新】形容AI發展為「超音速海嘯」，指出目前最大瓶頸為記憶體與電網而非晶片價格。宣布在德州興建Terafab超級半導體廠，並揭露SpaceX單季AI基礎設施CapEx達158億美元。",
        ep: "佈局AI電力能源基礎設施與記憶體供應鏈，把握SpaceX及Tesla硬體轉型紅利。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.08 最新】8/7交易日誌顯示，ARK大舉加碼Block（約2100萬美元）與SpaceX（約230萬美元）；同時在Palantir創高大漲後逢高減持70,259股（約1140萬美元）。",
        ep: "跟隨木頭姐策略，適度對高位噴發的AI個股進行獲利瞭結，逢低佈局轉型支付與航太新創。"
    },
    "Jim Cramer": {
        vp: "【2026.08.08 最新】8/7《Mad Money》節目提醒投資人當前財報季嚴禁過度使用槓桿，看好防禦與基礎設施個股，Lightning Round中強烈看好洛克希德馬丁（LMT）與美利普金融（AMP）。",
        ep: "嚴格控制交易槓桿，轉向防禦型國防與金融績優股以應對財報季波動。"
    },

    // TW KOLs - Verified 8/8
    "郭哲榮": {
        vp: "【2026.08.08 週末】8/7晚間影片指出台股震盪係受韓股拖累之位階修正，跌破4萬點機率低於5%。鴻海7月營收9,465億創歷史新高，8月有機會破兆；廣達長線仍強。砸億元買進的0050將一路抱到5萬點。",
        ep: "建議逢低把握績優權值股與0050的打折買點，抱緊持股不隨短線震盪恐慌拋售。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.08.08 週末】8/7晚間節目解析大盤收44,225點，解讀鴻海7月營收9,465億創歷史新高與廣達次高表現。提出半年報「4道濾網」（營收、EPS、毛利、本益比）選股法，看好CSP及BBU題材。",
        ep: "週末戰術建議運用4道濾網嚴篩半年報績優股，避開短線追高，採波段分批布局。"
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
