const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "陳龍 (股市尊龍·運通財經)": {
        vp: "【伊朗衝突突發應對】7/8盤後表示，因美伊衝突等外部因素導致台股下跌屬「假利空」與情緒失控。強調AI基本面不變，台積電等權值股遭錯殺。",
        ep: "趁市場因戰事恐慌錯殺之際，逢低佈局具產業壟斷地位的電子績優股。"
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

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
