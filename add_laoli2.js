const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const newKol = `
    {
        name: "老李玩美股",
        avatar: "https://ui-avatars.com/api/?name=老李&background=0D8ABC&color=fff",
        market: "US",
        type: "Macro/Quant",
        reliability: 82,
        winRate: "68%",
        avgReturn: "12%",
        viewpoint: "【2026.07.14 老李強勢回歸！】曾於6月宣布暫停頻道，7月已強勢回歸發布最新影片，分享31萬美元帳戶中4支股票操作及後市展望。",
        stocks: ["AVGO", "NVDA", "GOOG"],
        entryPoint: "重點關注其回歸後的最新持倉變動與實戰加減倉邏輯。",
        instMatch: 3
    },`;

content = content.replace(/const usInfluencersData = \[/, `const usInfluencersData = [\n${newKol}`);
fs.writeFileSync('script.js', content, 'utf8');
console.log("Added 老李玩美股 to usInfluencersData");
