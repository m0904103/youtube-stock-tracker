const taiwanInfluencersData = [
    {
        name: "郭哲榮 (摩爾投顧 - 折折)",
        style: "話題性高 / 權值股波段",
        viewpoint: "極度看好台股與鴻海的後市，認為近期外資空單僅是為了鎖定高達 600 點正價差的套利操作，無須恐慌。呼籲投資人把握股東會行情，但切忌使用融資，應採取現股穩健操作。",
        stocks: ["鴻海 (2317)", "台積電 (2330)", "AI 供應鏈"],
        entryPoint: "強烈看好鴻海「每年朝賺兩個股本」的目標，在 20 倍本益比預期下，認為目標價上看 <span class='highlight'>400 元</span>，已進入噴出臨界點。"
    },
    {
        name: "老王 (老王愛說笑)",
        style: "技術分析 / 嚴格紀律",
        viewpoint: "美股與台股整體仍處於上揚態勢，AI 供應鏈仍是多頭主旋律。在萬點高位操作中，最看重「紀律」與「停損停利機制」。",
        stocks: ["廣達 (2382)", "緯創 (3231)", "聯電 (2303)", "記憶體族群"],
        entryPoint: "建議設定買進當日收盤價的 <span class='highlight'>跌破 5% 即減碼</span>，或跌破 5 日線減碼一半。強調查確認收盤價跌破後再動作，嚴控風險。"
    },
    {
        name: "權證小哥",
        style: "籌碼面分析 / 短線波段",
        viewpoint: "認為當前市場屢創新高是「瘋子盤」，提醒投資人千萬不能盲目追高。大盤雖熱，但必須緊盯主力動向與資金流向，籌碼越集中越有機會。",
        stocks: ["處置股觀察", "除權息行情股", "高籌碼集中股"],
        entryPoint: "即將進入除權息旺季，建議利用 <span class='highlight'>雙刀戰法</span> (多空對鎖) 在波動中賺取領息與價差。利用籌碼軟體追蹤分點券商動作，不胡亂追價。"
    },
    {
        name: "阮慕驊",
        style: "總體經濟 / 穩健資產配置",
        viewpoint: "台股 2026 前五個月狂飆 15,000 點創紀錄，個人選擇在 5 月底進行適度的「獲利了結」，確保流動性，應對可能的高位震盪。",
        stocks: ["國泰金 (2882)", "高股息 ETF", "現金保留"],
        entryPoint: "已賣出約 <span class='highlight'>1/3 的持股部位變現</span>，特別是技術線型轉弱的個股；但對於長線看好的 ETF，不僅不賣，反而利用收回的現金提高定期定額扣款額度。"
    },
    {
        name: "股癌 Gooaye (謝孟恭)",
        style: "產業趨勢 / 散戶第一指標",
        viewpoint: "觀察到台股資金正在進行板塊輪動，從漲多的硬體代工外溢尋找落後補漲標的。強烈警告台股市場融資開槓桿過熱，隨時有修正風險。",
        stocks: ["光通訊板塊", "被動元件", "軟體族群"],
        entryPoint: "不提供具體買點，但建議投資人緊盯 <span class='highlight'>光通訊與軟體</span> 的訂單與復甦動態。提醒投資人應預留現金，防範台股大盤隨時可能出現的健康回調。"
    }
];

function renderTaiwanInfluencers() {
    const grid = document.getElementById('influencers-grid');
    if (!grid) return;
    
    grid.innerHTML = ''; // 清空可能存在的內容

    taiwanInfluencersData.forEach(influencer => {
        const card = document.createElement('div');
        card.className = 'card';

        const stocksHtml = influencer.stocks.map(stock => 
            `<span class="stock-tag">${stock}</span>`
        ).join('');

        card.innerHTML = `
            <div class="card-header">
                <div class="influencer-name">${influencer.name}</div>
                <div class="influencer-style">${influencer.style}</div>
            </div>
            
            <div class="section-title">最新觀點 (2026.06)</div>
            <p>${influencer.viewpoint}</p>

            <div class="section-title">關注標的</div>
            <div class="stock-list">
                ${stocksHtml}
            </div>

            <div class="section-title">操作與買入點位</div>
            <p>${influencer.entryPoint}</p>
        `;

        grid.appendChild(card);
    });
}

// 頁面載入時執行
document.addEventListener('DOMContentLoaded', renderTaiwanInfluencers);
