const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "陸行之 (Andrew Lu)": {
        vp: "【2026.08.05 盤後】發文剖析AMD、SpaceX與Astera Labs財報。認為AMD財報缺乏驚喜且AI GPU毛利低，對台積電拉動有限；Astera Labs因雲端自研晶片成長強勁，股價逢拉回為撿寶買點。",
        ep: "留意雲端業者自研晶片供應鏈，對AMD相關概念股逢高持審慎態度。"
    },
    "程正樺 (Tenor Capital)": {
        vp: "【2026.08.05 盤後】指出市場出現籌碼修正、FOMC結束等四大「利空出盡」跡象，台股難直接V轉但評價變便宜、第四季可期。強調AI非泡沫，台積電與輝達估值合理，看好CPO、高速傳輸PCB與記憶體。",
        ep: "控管現金水位並避開短期震盪，逢低分批佈局CPO與高速傳輸族群。"
    },
    "曲建仲 (曲博)": {
        vp: "【2026.08.05 盤後】於News98《財經起床號》探討中國半導體突破美國封鎖之最新動向，評估中國推動成熟製程與晶片自研替代對全球半導體供應鏈及台廠先進封裝壁壘的長期影響。",
        ep: "關注中國半導體自研替代進程，聚焦具先進封裝與高壁壘之台廠。"
    },
    "林啟超 (國泰世華)": {
        vp: "【2026.08.05 盤後】針對美日干預日圓發表看法，認為此為美方因應中東與通膨局勢的單一「拆彈」舉動而非日常干預。若日圓未守住160將測試165，關鍵仍看美聯儲降息與地緣政治演變。",
        ep: "密切觀察日圓160關卡與匯率波動對台股資金流向之影響。"
    },
    "財報狗": {
        vp: "【2026.08.05 盤後】追蹤美股財報影響。受美股反彈帶動台股走揚，資金聚焦低軌衛星（華通、昇達科）強勢亮燈，以及高階封裝與光通訊等AI供應鏈標的。",
        ep: "善用基本面數據工具，擇優佈局低軌衛星與AI光通訊族群。"
    },
    "郭哲榮": {
        vp: "【2026.08.05 盤後】指出大盤急跌後劇烈反彈如雲霄飛車，日前加碼一億元0050帳面獲利破千萬。認為修正提供進場良機，看好精材、帆宣、國巨等強勢股，並留意環球晶、中美晶拉回低點。",
        ep: "逢低佈局具備跌深、籌碼轉強及法人資金回流特質的優質標的。"
    },
    "錢線百分百 (非凡財經)": {
        vp: "【2026.08.05 盤後】節目聚焦鴻海7月營收達9465億創歷史新高，解盤分析台股在美股大漲帶動下之止跌訊號與季線賣壓，追蹤矽晶圓及光通訊（聯鈞、波若威）等熱門AI供應鏈籌碼。",
        ep: "關注鴻海供應鏈與矽晶圓族群，依止跌訊號與季線壓力彈性操作。"
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
