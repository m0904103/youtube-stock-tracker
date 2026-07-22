const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "錢線百分百": {
        vp: "【2026.07.23 盤前最新】關注特斯拉與 Alphabet 財報對台股AI供應鏈與半導體族群的連動影響，並探討AI資本支出激增帶來的隱憂及台股量縮反彈之真偽。",
        ep: "留意AI相關個股基本面，謹慎評估巨頭資本支出激增帶來的潛在板塊風險。"
    },
    "李兆華 (理財達人秀)": {
        vp: "【2026.07.23 盤前最新】節目聚焦科技巨頭財報，特別檢視特斯拉與 Alphabet 在AI領域的龐大投資是否能順利轉化為實際獲利與自由現金流。",
        ep: "在巨額AI資本支出引發市場波動之際，應審慎評估相關標的之投資風險。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.07.23 盤前最新】認為市場資金正從擁擠的AI及科技巨頭中撤出，近期回調是健康的重置。TSLA與GOOGL財報是觀察科技股動能能否維持的關鍵。",
        ep: "建議將資金分散輪動至週期性、金融及消費類等非科技板塊。"
    },
    "Cathie Wood (ARK木頭姐)": {
        vp: "【2026.07.23 盤前最新】無懼短期盈餘不及預期，堅定看好兩家公司在AI與自動駕駛發展。持續加倉GOOGL；TSLA仍為核心，看重Robotaxi長線收益。",
        ep: "著眼自動駕駛與AI生態的長期潛力，忽略短期財報波動並逢低佈局。"
    },
    "Adam Kobeissi": {
        vp: "【2026.07.23 盤前最新】對AI時代的大盤維持謹慎，警告投資者不要因股市反彈而掉以輕心，並指出能源等基建挑戰將直接影響TSLA等重科技發展。",
        ep: "對科技股大盤保持警惕，切勿在短線反彈中過度自滿。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        vp: "【2026.07.23 盤前最新】警告持有過多科技股可能帶來嚴重損失。建議在科技板塊徹底洗盤前，避免重倉TSLA與GOOGL，先觀察財報後的市場反應。",
        ep: "建議暫時將資金輪動至高質量的工業與金融股以避險。"
    },
    "Elon Musk": {
        vp: "【2026.07.23 盤前最新】Q2營收創高但EPS與自由現金流不及預期。財報會議上強調今年總支出將超過250億美元，重金投資於AI、Optimus機器人及擴大產能。",
        ep: "投資人需準備好承受公司轉型AI及機器人階段的龐大資本開支與短期利潤承壓。"
    },
    "Dan Ives (Wedbush)": {
        vp: "【2026.07.23 盤前最新】極度看多TSLA，給出華爾街最高600美元目標價，認為AI與Robotaxi的擴展將推動其達到2至3兆美元市值，並看好長期潛力。",
        ep: "將TSLA視為被低估的純粹AI公司，建議投資者逢低買入。"
    },
    "霍比特小灰": {
        vp: "【2026.07.23 盤前最新】重心放在宏觀邏輯與長線資產配置，探討「史詩級牛市」下的AI股票佈局，特別關注特斯拉的資本效率以及在AI硬體領域的機會。",
        ep: "重視宏觀邏輯配置，關注具備AI硬體優勢的資產。"
    },
    "美股研究社": {
        vp: "【2026.07.23 盤前最新】指出AI產業進入「重資產戰爭」，市場從講故事轉向看現金流。GOOGL資本市場現在更看重高昂AI支出能否實質轉化為利潤率。",
        ep: "密切關注科技巨頭AI資本支出的轉化率與實際業務回款。"
    },
    "NaNa說美股": {
        vp: "【2026.07.23 盤前最新】將GOOGL與TSLA財報視為關鍵節點，認為需對財報季的個股波動保持謹慎，強調儲存晶片與科技巨頭的聯動效應，不建議盲目追高。",
        ep: "面對財報不確定性，可考慮使用期權策略 (如 Jade Lizard) 來應對波動風險。"
    }
};

let matchCount = 0;
for (const [name, updateData] of Object.entries(updates)) {
    // Escape names for regex
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

// Ensure proper rendering of q-sec-out by fixing script.js timestamp as well
let indexContent = fs.readFileSync('index.html', 'utf8');
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-23 06:45 (科技財報週重磅解析版)');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=159`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
