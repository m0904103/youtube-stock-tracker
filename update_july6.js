const fs = require('fs');

let content = fs.readFileSync('script.js', 'utf8');

const updates = {
    "陳智霖 (分析師)": {
        vp: "【2026.07.06 最新解析】台股開高走低，陳智霖認為屬「以盤代跌」洗盤無需悲觀。下週台積電法說會前建議維持中性持股，參與族群輪動。看好封測成波段主流，光通訊逢整理可佈局，並視PCB利空為短期干擾。",
        ep: "台積電法說會前維持中性持股，逢震盪可伺機波段佈局封測與光通訊族群。"
    },
    "米哥大白話 (李永年)": {
        vp: "【2026.07.06 最新解析】晚間發布直播「今天美股開盤很關鍵！今天上下拉扯的跡象代表...」。重點指出當日盤勢呈現上下拉扯的巨震狀態，並強調當晚美股開盤表現將是影響後市方向的關鍵指標。",
        ep: "盤勢巨震且方向未明，建議密切觀察美股表現，暫時保守觀望。"
    },
    "游庭皓": {
        vp: "【2026.07.06 最新解析】早報主題「Token成本下行AI投資出警訊？股價重挫記憶體見頂？」。分析AI算力成本下降對投資版圖的影響，探討記憶體股價大跌是否意味循環見頂，提醒留意風險。",
        ep: "面對AI與記憶體族群可能見頂的回調風險，建議投資人審慎評估持股水位，避免盲目追高。"
    },
    "郭哲榮 (折折)": {
        vp: "【2026.07.06 最新解析】台股收跌224點，盤後直播指出開高走低主要受台幣匯率貶值影響，並分析輝達利空傳聞對市場的衝擊，提醒須留意近期匯率與籌碼變化。",
        ep: "面對台股因匯率波動造成的開高走低，建議短線保持觀望，靜待台幣止貶與大盤籌碼沉澱後再佈局。"
    },
    "Mike Wilson (Morgan Stanley)": {
        vp: "【2026.07.06 最新解析】Wilson指出半導體動能消退，資金正轉向微軟、亞馬遜與Meta。他維持標普年底8000點目標，警告晶片股疲軟恐引發震盪，看好非必需消費、生技與運輸受惠資金輪動。",
        ep: "降低半導體部位，轉進AI雲端巨頭，或佈局非必需消費與生技板塊以因應資金輪動。"
    },
    "Tom Lee (Fundstrat)": {
        vp: "【2026.07.06 最新解析】對7月美股樂觀，標普500目標上調至8000點。警告8至10月因IPO解禁與聯準會變數，可能出現「熊市般」劇烈震盪。持續看好科技、小型股與以太幣。",
        ep: "把握7月強勢行情偏多操作，但須預先做好避險以應對8至10月的劇烈回檔。"
    },
    "林漢偉 (非凡)": {
        vp: "【2026.07.06 最新解析】今日盤後解析「輝達驚傳變更設計，台股主流族群易位！」指出輝達相關產品規格調整引發供應鏈股價震盪，促使資金在不同族群間重新輪動，市場主流面臨洗牌。",
        ep: "切勿盲目追高，建議汰弱留強，鎖定如記憶體等「AI瓶頸族群」，並待籌碼沉澱後再行佈局。"
    },
    "Adam Kobeissi": {
        vp: "【2026.07.06 最新解析】指出美國科技業正投入破紀錄的8500億美元於AI資料中心，但警告Meta因缺乏穩定雲端業務且資本支出過高，股票已現拋售跡象；同時強調勞動市場疲軟將引發劇烈波動。",
        ep: "短期內應對Meta等依賴單一收入卻過度投入AI的科技股保持觀望，並調整部位防範總經波動。"
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
indexContent = indexContent.replace(/⏱ 最後自動更新: [^\<]+/, '⏱ 最後自動更新: 2026-07-06 22:45');
indexContent = indexContent.replace(/script\.js\?v=\d+/, `script.js?v=136`);
fs.writeFileSync('index.html', indexContent, 'utf8');

fs.writeFileSync('script.js', content, 'utf8');
console.log(`Updated ${matchCount} influencers.`);
