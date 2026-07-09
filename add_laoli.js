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
        viewpoint: "【伊朗衝突突發應對】尚未發布最新影片。面對美伊戰爭與盤勢震盪，市場避險情緒升溫。",
        entryPoint: "建議先關注能源與避險資產的市場反應，並做好資金與風險控管，等待明確的盤勢訊號再作行動。",
        stocks: ["原油", "黃金", "美債"],
        instMatch: 3
    },`;

// Insert it right after the array opening
content = content.replace(/const kolsData = \[/, `const kolsData = [\n${newKol}`);

let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-09 08:25 (突發戰事警戒)');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=143`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log("Added 老李玩美股");
