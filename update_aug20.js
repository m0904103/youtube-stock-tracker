const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs - Verified 8/20
    "Dylan Patel (SemiAnalysis)": {
        vp: "【2026.08.20 最新】指出Cerebras CS-4大幅提升AI推理效能；透露Anthropic與OpenAI等前沿實驗室已完成Mythos 2和Astra模型訓練，但出於商業考量選擇暫緩發布。",
        ep: "關注AI晶片競爭與推理架構轉型，留意大模型發布節奏放緩帶來的行業估值修整。"
    },
    "Michael Hartnett (BofA)": {
        vp: "【2026.08.20 最新】警告美債即將突破40兆美元，維持「絕不買債」(ABB)與看好黃金避險。8月基金經理人現金降至3.5%觸發反向賣出訊號，56%預計經濟無著陸，建議槓鈴策略。",
        ep: "現金比率過低觸發賣出訊號，建議降低長債配置、加碼黃金並採取槓鈴策略。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.20 最新】指出AI與資料中心企業債暴增擠壓美債需求，致殖利率曲線熊市陡峭化。衍生品市場全力對沖8月底輝達財報與傑克遜霍爾年會波動，黃金為壓力釋放閥。",
        ep: "8月底輝達財報與傑克遜霍爾雙重風險臨近，建議買入選擇權避險並留意長債殖利率波動。"
    },
    "Stanley Druckenmiller": {
        vp: "【2026.08.20 最新】最新13F顯示清倉美光、博通、英特爾等半導體股，重倉大增亞馬遜超10倍，新建倉Alphabet與百度ADR，加碼台積電19%，第一大重倉仍為基因檢測公司Natera。",
        ep: "減碼傳統半導體並轉向亞馬遜與Alphabet等具備強勁雲端與AI變現能力的科技巨頭。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.08.20 最新】強調傳統60/40股債組合因正相關而失效，黃金為不可或缺的防禦資產。建議投資人勿在高點追漲熱門AI半導體，縮短債券存續期間，轉向注重盈餘品質與商品輪動。",
        ep: "棄守傳統股債配置，縮短債券久期並將黃金與具備盈餘品質的防禦型標的納入組合。"
    },
    "Elon Musk": {
        vp: "【2026.08.20 最新】SpaceX於8/19完成今年第100次發射，8/20迎來首批解禁；xAI在聯邦法院以第一修正案抗辯AI法規；特斯拉Robotaxi在奧斯汀發生撞擊導柱事件。",
        ep: "關注SpaceX解禁對籌碼面影響及Tesla全自動駕駛(FSD/Robotaxi)監管與技術驗證進展。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.20 最新】8/19交易日誌顯示大舉建倉博通（買進約2100萬美元）、Cerebras與Cloudflare；同時獲利了結羅布樂思，連續第三天減碼AMD及10X Genomics。",
        ep: "跟隨ARK獲利輪動策略，減碼高估值娛樂與部分晶片股，轉向AI硬體基礎設施與雲端安全。"
    },
    "Jim Cramer": {
        vp: "【2026.08.20 最新】8/19節目表示悲觀情緒帶來買點，逢低加碼數據中心概念股並看好記憶體晶片需求；盛讚莫德納個人化癌症疫苗突破；對聯電與Archer持保留態度。",
        ep: "利用市場恐懼逢低布局回檔的數據中心與記憶體供應商，避免追高缺乏催化劑的個股。"
    },

    // TW KOLs - Verified 8/20
    "陸行之 (Andrew Lu)": {
        vp: "【2026.08.20 盤後】評論Google與Marvell達成1200億美元晶片合作案，指出大廠以訂單換認股權將衝擊博通與聯發科。提醒記憶體模組及伺服器組裝廠累積過高庫存，恐成隱憂。",
        ep: "關注ASIC及晶片設計族群之客戶議價風險，並適度減碼庫存過高之記憶體個股。"
    },
    "郭哲榮": {
        vp: "【2026.08.20 盤後】指出台股高檔拉回屬籌碼調整，大盤於45,000點震盪。逆勢於570元加碼國巨築第二隻腳，看好被動元件；自曝1.74億美債套牢，坦言錯失0050強勢行情。",
        ep: "切勿見漲追高或逢跌驚慌殺低，建議等待大盤拉回時分批布局具打底訊號之被動元件與權值股。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.08.20 盤後】解析外資連賣與台股跌破季線，傑克遜霍爾年會前夕觀望氣氛濃。13F顯示軟銀減碼台積電ADR增加短期壓抑，資金轉向無人機、矽光子及被動元件等防守題材。",
        ep: "傑克遜霍爾年會前宜控制總持股成數，避開法人調節標的並佈局受惠去中化與實質題材之族群。"
    },
    "林啟超 (國泰世華)": {
        vp: "【2026.08.20 盤後】分析傑克遜霍爾年會前夕，市場關注Fed降息路徑、中東地緣政治與AI CSP資本支出；台股雖有基本面支撐，但須留意科技與傳產K型分化及高檔乖離。",
        ep: "趁盤勢震盪拉回時檢視基本面，優先配置具獲利實質支撐之AI核心供應鏈，避免高槓桿操作。"
    },
    "曲建仲 (曲博)": {
        vp: "【2026.08.20 盤後】SEMICON Taiwan導覽聚焦量子與矽光子，分析Google與AMD合作第十代TPU帶動ASIC與先進封裝需求。強調AI由雲端訓練轉向邊緣推論，CPO與先進封裝為長線關鍵。",
        ep: "長線布局CPO矽光子與CoWoS先進封裝供應鏈，勿過度追高本益比偏離基本面之短線題材股。"
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
