const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "陳智霖 (分析師)": {
        vp: "【2026.07.07 最新解析】分析外資賣超、ETF資金流向及台股開高走低的訊號，並針對記憶體與AI供應鏈的風險與佈局進行解說。",
        ep: "留意最新外資淨空單及變盤訊號，短線操作應謹慎。"
    },
    "游庭皓": {
        vp: "【2026.07.07 最新解析】今日直播探討道瓊創高與美光修正等議題，持續關注全球總經、科技股動態以及市場修正風險與資金流向。",
        ep: "注意全球市場修正風險與後續資金流向變化。"
    },
    "林漢偉 (非凡)": {
        vp: "【2026.07.07 最新解析】指出台股受電子權值股支撐呈現量縮回穩反彈，外資期貨空單減少使籌碼改善，AI供應鏈信心回升。",
        ep: "不宜盲目追高，持續觀察外資動向及中小型股買氣。"
    },
    "郭哲榮 (折折)": {
        vp: "【2026.07.07 最新解析】認為台股大跌是受三星財報引發的利多出盡與獲利了結拖累，並非基本面惡化，屬於被市場錯殺。",
        ep: "可視此次錯殺為『周年慶』加碼良機，把握跌勢進場。"
    },
    "杜金龍 (下班經濟學)": {
        vp: "【2026.07.07 最新解析】針對台股下跌千點，認為大盤雖有過熱警訊但仍有支撐，長線多頭格局不變，建議採取「急跌買、衝高賣」策略。",
        ep: "面對回檔修正可視為加碼良機。"
    },
    "財報狗 (StatementDog)": {
        vp: "【2026.07.07 最新解析】總結台股劇烈震盪，指出受亞股與獲利了結影響，被動元件與功率元件族群多檔跌停，市場表現疲軟。",
        ep: "留意強勢族群的獲利了結賣壓，謹慎佈局。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        vp: "【2026.07.07 最新解析】節目指出台股下殺及台幣貶值為「假利空」，大跌正是黃金買點，強烈建議鎖定台積電等電子股。",
        ep: "把握錯殺行情，大膽逢低加碼。"
    }
};

let matchCount = 0;
for (const [name, updateData] of Object.entries(updates)) {
    const nameRegex = new RegExp(`(name:\\s*["']${name.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')}["'],[\\s\\S]*?viewpoint:\\s*["'])([^"']*)(["'],\\s*stocks:[\\s\\S]*?entryPoint:\\s*["'])([^"']*)(["'])`);
    if (nameRegex.test(content)) {
        content = content.replace(nameRegex, `$1${updateData.vp}$3${updateData.ep}$5`);
        matchCount++;
    } else {
        console.log("Not found or regex failed:", name);
    }
}

// Update last updated time in index.html
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-07 17:25');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=138`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
