const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const matchData = {
    "Jeremy Grantham (GMO)": { score: 4, desc: "看空科技股與泡沫，符合法人減碼趨勢，但過於悲觀。" },
    "Tom Lee (Fundstrat)": { score: 2, desc: "極度樂觀喊 8000 點，無視暗池派發與高檔 Gamma 翻轉風險。" },
    "Mike Wilson (Morgan Stanley)": { score: 5, desc: "精準命中資金從高估值軟體輪動至價值與防禦板塊的趨勢。" },
    "Bill Ackman (Pershing Square)": { score: 4, desc: "避開擁擠交易，聚焦基建與現金流，符合聰明錢動向。" },
    "Ray Dalio (Bridgewater)": { score: 4, desc: "提早警告 AI 泡沫，保留現金防禦尾部風險。" },
    "Stanley Druckenmiller": { score: 5, desc: "精準獲利了結擁擠的 AI 巨頭，輪動至實體硬體與次世代基建。" },
    "Adam Kobeissi": { score: 5, desc: "點出半導體乖離過大並增配黃金，與法人避險操作高度吻合。" },
    "Jensen Huang (黃仁勳)": { score: 3, desc: "供應鏈視角，偏向實體硬體，但缺乏宏觀資金流判斷。" },
    "Elon Musk": { score: 2, desc: "專注自家產品，忽視整體宏觀流動性收緊與估值下修風險。" },
    "Cathie Wood (ARK木頭姐)": { score: 1, desc: "【危險反指標】無視非農衰退訊號與法人派發，逆勢加碼高估值科技股。" },
    "Dan Ives (Wedbush)": { score: 2, desc: "科技死忠派，忽視軟體板塊正遭聰明錢大幅提款的現實。" },
    "Keith Gill (Roaring Kitty)": { score: 1, desc: "迷因炒作，與華爾街量化與基本面邏輯完全脫節。" },
    "Jim Cramer (瘋狂錢坑)": { score: 3, desc: "隨機點名，近期雖轉向硬體，但缺乏系統性量化依據。" },
    "美股小左": { score: 4, desc: "精準點出半導體乖離率過高，呼籲避開盲目追高。" },
    "霍比特小灰": { score: 4, desc: "關注 AI 雲端巨頭資本支出 (CapEx) 變現問題，符合法人疑慮。" },
    "美股研究社": { score: 4, desc: "警告科技巨頭估值波動與市場分化，與避險基金縮表邏輯一致。" },
    "NaNa說美股": { score: 4, desc: "捕捉到 AI 軟硬體板塊資金輪動與節前洗盤風險。" },
    "Alan Chen": { score: 3, desc: "技術面為主，無明顯宏觀與機構籌碼背離。" },
    "陽光財經 (尼可拉斯陽)": { score: 3, desc: "無近期更新，維持中立。" },
    "貝拉聊財經 (Bella)": { score: 4, desc: "察覺非農後的突襲式砸盤與流動性陷阱，呼籲嚴控倉位。" },
    "傑夫 (美股)": { score: 3, desc: "無近期更新，維持中立。" },
    
    // TW
    "陳智霖 (分析師)": { score: 5, desc: "採用聰明錢邏輯，避開高估值，精準佈局低估值與防禦板塊。" },
    "米哥大白話 (李永年)": { score: 4, desc: "居高思危，佈局貴金屬與低基期傳產，具備極高防禦意識。" },
    "谷月涵": { score: 5, desc: "【極度防禦】空手策略完美避開高檔 Gamma 翻轉的尾部崩跌風險。" },
    "陸行之": { score: 4, desc: "從基本面點出記憶體見頂與硬體架構轉變，領先散戶避開盲區。" },
    "游庭皓": { score: 4, desc: "不盲從非農數據，點出 AI 需看重實質獲利，符合法人對 CapEx 的質疑。" },
    "楊應超": { score: 4, desc: "以資本支出為反轉指標，並提倡美債防禦，符合聰明錢槓鈴策略。" },
    "吳嘉隆": { score: 2, desc: "過度樂觀看好黃金五年，忽視短期造市商 Gamma 翻轉的暴跌風險。" },
    "杜金龍 (下班經濟學)": { score: 4, desc: "警告高檔爆量，呼籲轉入低基期銅板股，符合板塊輪動防禦邏輯。" },
    "胡睿涵 (非凡)": { score: 2, desc: "建議轉向 AI 軟體，與華爾街目前「逃離純軟體」的資金流向背離。" },
    "林漢偉 (非凡)": { score: 3, desc: "警告月線回測，但建議避開中小型股，與法人轉入羅素2000略有分歧。" },
    "賴建承 (非凡)": { score: 4, desc: "轉向成熟製程與低基期，具備資金避風港概念。" },
    "李兆華 (東森)": { score: 4, desc: "追蹤外資賣超，轉向被動元件等低基期硬體，符合輪動方向。" },
    "朱家泓 (東森)": { score: 3, desc: "純技術面看多，缺乏對暗池流動性枯竭的風險意識。" },
    "股期龍哥 (東森)": { score: 3, desc: "順勢操作，中立看待籌碼。" },
    "錢線百分百 (非凡財經)": { score: 4, desc: "關注外資空單與設備股，方向正確。" },
    "郭哲榮 (折折)": { score: 2, desc: "無視外資高額空單與非農衰退隱憂，一路看多台積電，具極高回調風險。" },
    "優課李霖": { score: 4, desc: "警告高空單抄底風險，等待轉折，符合法人高檔震盪佈局邏輯。" },
    "全球政經周報": { score: 4, desc: "佈局穩健現金流與債券，完美契合防禦性宏觀戰略。" },
    "股癌 (Gooaye)": { score: 3, desc: "長期持有抗震，但缺乏主動的尾部風險 (Tail Risk) 對沖動作。" },
    "財報狗 (StatementDog)": { score: 4, desc: "深入挖掘 CPO 光通訊實體硬體，符合法人逃離軟體轉向硬體的趨勢。" },
    "鈔錢部署 (盧燕俐 ft. 杜金龍)": { score: 3, desc: "高股息 ETF 防禦，中立偏安穩。" },
    "有心節目": { score: 1, desc: "【系統警告】詐騙幻覺，毫無參考價值。" },
    "陳龍 (股市尊龍·運通財經)": { score: 3, desc: "跟隨主流，但需留意飆股在高檔流動性陷阱中的回撤風險。" },
    "阿村伯": { score: 4, desc: "警告末升段與邪惡第五波，防禦意識極佳。" }
};

let matchCount = 0;
for (const [name, meta] of Object.entries(matchData)) {
    const nameRegex = new RegExp(`(name:\\s*["']${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'],[\\s\\S]*?)(viewpoint:)`);
    if (nameRegex.test(content)) {
        content = content.replace(nameRegex, `$1institutionalMatch: ${meta.score},\n        institutionalMatchDesc: "${meta.desc}",\n        $2`);
        matchCount++;
    } else {
        console.log("Not found:", name);
    }
}

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers with institutionalMatch.`);
