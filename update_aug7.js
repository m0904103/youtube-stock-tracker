const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs - Verified 8/7
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.07 最新】指出Google DeepMind高層離職潮使大模型研發優勢瓦解，但GCP奪得算力控制權將加速雲端營收。同時強調長途光纖網路已成為AI基礎設施的最關鍵瓶頸。",
        ep: "建議重點關注GCP雲端生態與長途光纖網路供應鏈標的。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.08.07 最新】美銀牛熊指標飆升至9.7（創2021年以來新高），反映市場情緒極度樂觀與高收益債大量流入，警告當前極端情緒大幅增加美股面對突發衝擊的脆弱性。",
        ep: "建議高檔適度控制槓桿並提升防禦性資產配置，慎防極端情緒後的回調。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.07 最新】分析美股出現「正股與波動率同步上升（Spot Up, Vol Up）」異常動態，主因散戶與機構買權追高及超大型科技股空頭回補所引發的衍生品強制平倉行情。",
        ep: "警惕市場技術面與空頭回補引發的急漲，切勿在波動率偏高時盲目追高。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.08.07 最新】重申標普500指數年底目標價8,000點，指出市場正過渡至週期中期，資金將從純AI硬體轉向能利用AI提高營運效率與利潤率的「AI採用者」及高品質個股。",
        ep: "建議聚焦具備穩定自由現金流且能藉由AI增效的高品質企業。"
    },
    "Elon Musk": {
        vp: "【2026.08.07 最新】宣布特斯拉與SpaceX將於德州合資興建全球最大晶片廠「Terafab」（首期投資168億美元，總額1,190億美元），並預告Grok 4.6大模型於8月7日前後發布。",
        ep: "建議持續關注Terafab算力佈局與Tesla/SpaceX晶片自研對產業鏈的長遠影響。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.07 最新】ARK展開顯著資產輪動，大舉加碼Block（2,250萬美元）、Nvidia（1,760萬美元）、Circle與SpaceX，並大幅減持Shopify（1,690萬美元）、Roblox與Palantir。",
        ep: "可參考其逢低重置資金至AI基礎建設與數位金融龍頭的換股策略。"
    },
    "Jim Cramer": {
        vp: "【2026.08.07 最新】主張將SpaceX視為世代級基礎設施長期投資；堅定駁斥AI將取代Shopify的觀點；看好Fortinet與CME Group，對Denison Mines及HCA持保守態度。",
        ep: "建議優先挑選具備長期基礎設施壁壘與穩健營運的優質個股。"
    },

    // TW KOLs - Verified 8/7
    "郭哲榮": {
        vp: "【2026.08.07 盤後】8/7台股因韓股震盪回測非轉空，不到5%機率破4萬點，拉回視為百貨週年慶打折。鴻海7月營收衝9465.12億元創歷年單月新高、8月挑戰兆元，看好微星顯卡漲價與群聯逢低布局。",
        ep: "大盤拉回逢低分批布局營收創新高的AI權值與績優股，勿恐慌殺低。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.08.07 盤後】8/7盤後聚焦鴻海7月營收9465.12億（年增54.19%）創單月新高、廣達3662.74億（年增101.32%）創次高。AI基礎建設強勁，惟半年報高峰期市場已轉向檢視毛利率與估值落差。",
        ep: "半年報密集公布期宜透過波段操作，篩選營收、毛利率與本益比皆優的AI供應鏈標的。"
    },
    "陸行之 (Andrew Lu)": {
        vp: "【2026.08.07 盤後】分析AMD與雲端巨頭財報指出，AMD營收季增幅度小難單獨撐起台積電；警示CSP巨頭資本支出大增但若營收未能跟上恐有泡沫風險，關注台積電7月營收及先進封裝效益。",
        ep: "密切追蹤AI資本支出能否轉化為真實營收，對評價面已高個股維持審慎。"
    },
    "財報狗": {
        vp: "【2026.08.07 盤後】8/7更新7月營收排行榜與市場檢視，華邦電法說後記憶體族群利多出盡拉回，宏捷科上半年EPS 2.93元提前擴產卻遭打跌停，反映市場在半年報公布前夕對展望與本益比檢視嚴苛。",
        ep: "檢視最新公布之7月營收與半年報實質獲利，避開籌碼鬆動及業績不及預期的標的。"
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
