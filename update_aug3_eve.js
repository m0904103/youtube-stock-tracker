const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    // US KOLs
    "Michael Hartnett (BofA)": {
        vp: "【2026.08.03 黑色星期一】認為這是一次遲來的硬著陸風險釋放，主因是聯準會降息過晚與科技股過度擁擠，引發市場劇烈去槓桿。",
        ep: "在經濟數據企穩與降息週期確認前，對高風險資產保持謹慎。"
    },
    "Charlie McElligott (Nomura)": {
        vp: "【2026.08.03 黑色星期一】指出市場出現閃崩特徵，VIX恐慌指數飆升觸發了選擇權造市商與量化基金的機械性去槓桿與連環強平倉。",
        ep: "密切關注VIX波動率與選擇權市場Gamma部位，防範程式交易連鎖效應。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.08.03 黑色星期一】認為暴跌驗證了其對經濟週期末期與少數科技巨頭領漲脆弱性的擔憂，市場正在經歷資金擴散的陣痛。",
        ep: "建議將投資組合轉向防禦性與具備穩健盈餘的高品質價值類股。"
    },
    "Elon Musk": {
        vp: "【2026.08.03 黑色星期一】嚴厲批評美國聯準會(Fed)未能及早降息，直言聯準會決策「愚蠢(foolish)」，認為這加劇了市場修正壓力。",
        ep: "預期聯準會將被迫採取降息行動以應對經濟放緩與股市崩跌。"
    },
    "Cathie Wood (ARK)": {
        vp: "【2026.08.03 黑色星期一】維持對長線顛覆性創新科技的看漲態度，將此次全球市場劇烈恐慌視為絕佳的「逢低買進(Buy the dip)」機會。",
        ep: "忽略短期總經恐慌，趁機逢低大量買進長期基本面強健的創新科技股。"
    },
    "Jim Cramer": {
        vp: "【2026.08.03 黑色星期一】強烈呼籲投資人不要在市場極度恐慌時盲目拋售，若無過度使用融資槓桿，VIX飆升反而是極佳的進場買點。",
        ep: "切勿恐慌性殺跌，保持冷靜並將極端恐慌視為潛在的買進機會。"
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
