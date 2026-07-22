const fs = require('fs');
let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "錢線百分百 (非凡財經)": {
        vp: "【2026.07.23 盤前最新】關注特斯拉與 Alphabet 財報對台股AI供應鏈與半導體族群的連動影響，並探討AI資本支出激增帶來的隱憂及台股量縮反彈之真偽。",
        ep: "留意AI相關個股基本面，謹慎評估巨頭資本支出激增帶來的潛在板塊風險。"
    },
    "李兆華 (東森)": {
        vp: "【2026.07.23 盤前最新】節目聚焦科技巨頭財報，特別檢視特斯拉與 Alphabet 在AI領域的龐大投資是否能順利轉化為實際獲利與自由現金流。",
        ep: "在巨額AI資本支出引發市場波動之際，應審慎評估相關標的之投資風險。"
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
console.log(`Updated ${matchCount} remaining influencers.`);
