const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "股癌 (Gooaye)": {
        vp: "【2026.07.13 最新動態】輝達回測季線，資金正進行產業輪動。短期應關注具實質營收獲利的封裝、導線架與功率元件；記憶體營收雖佳但籌碼已擁擠。",
        ep: "面對高檔震盪應汰弱留強，資金優先佈局具實質營收支撐的半導體零組件。"
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

let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=148`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
