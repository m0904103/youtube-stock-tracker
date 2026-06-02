const influencersData = [
    {
        name: "小左美股第一视角",
        style: "價格行為 / 技術分析",
        viewpoint: "市場處於「二次探底」博弈期，科技巨頭可能面臨「王權交替」。提醒警惕泡沫，注重順勢交易與宏觀數據（利率/通膨）影響。",
        stocks: ["NVDA", "TSLA", "MU", "PLTR", "ARM", "DELL"],
        entryPoint: "看重<span class='highlight'>技術支撐阻力位與趨勢線</span>。建議不盲目追高，等待關鍵支撐位確認有效後再分批建倉。"
    },
    {
        name: "老李玩钱 (Your Favorite ⭐️)",
        style: "理性長線 / 帳戶實盤",
        viewpoint: "發布了「6月必買」與下半年佈局策略。對市場高位震盪保持理性，針對 AI 與記憶體板塊進行深入解析。",
        stocks: ["MU", "INTC", "SNDK", "RKLB", "NVDA"],
        entryPoint: "建議<span class='highlight'>逢低佈局</span>。具體買入價格與加倉點位通常在會員頻道展示，強調在波動中做好倉位控管。"
    },
    {
        name: "NaNa說美股",
        style: "幽默犀利 / 大眾視角",
        viewpoint: "以「小白語言」解構市場，近期吐槽舊科技巨頭與價值投資的窘境。認為市場展現韌性，資金正在板塊間快速輪動。",
        stocks: ["NVDA (AI硬體)", "舊科技巨頭 (減持觀望)"],
        entryPoint: "強烈建議<span class='highlight'>不盲目追高</span>，應耐心等待個股回調至關鍵技術支撐（如年線附近）再考慮介入。"
    },
    {
        name: "美股研究社",
        style: "財報基本面 / 華爾街動向",
        viewpoint: "AI 依舊是 2026 盈利核心（貢獻標普500七成增長）。華爾街投資範式正在轉變，資金逐漸向防禦型與實體經濟板塊擴散。",
        stocks: ["AI 產業鏈", "能源板塊", "金融板塊", "工業板塊"],
        entryPoint: "推薦採取<span class='highlight'>槓鈴策略 (Barbell Strategy)</span>：一端抱緊具備結構成長的 AI 標的，一端配置防禦型資產平衡風險。"
    },
    {
        name: "游庭皓的財經皓角",
        style: "總體經濟 / 景氣循環",
        viewpoint: "探討 AI 行情是否為超級週期。分析台美韓印股市競合關係，以及半導體庫存循環對全球供應鏈的影響。",
        stocks: ["TSMC (台積電)", "NVDA", "台灣供應鏈"],
        entryPoint: "依循<span class='highlight'>景氣循環投資法</span>，於半導體庫存去化完成及資本支出上升期進行波段價差操作。"
    },
    {
        name: "尼可拉斯楊Live精",
        style: "量化指標 / 非主流視角",
        viewpoint: "警告 2026 年出現「指數高位震盪、個股劇烈波動」的結構性背離。密切關注中東地緣政治對油價與聯準會政策的影響。",
        stocks: ["GPU", "光連結 (CPO)", "伺服器基建"],
        entryPoint: "利用量化指標如<span class='highlight'> AAII（散戶情緒）與 NAAIM（投資經理敞口）</span>尋找賣點與避風港，在市場貪婪時保持冷靜。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "華爾街大多頭 / 宏觀量化",
        viewpoint: "長線極度樂觀（標普年底上看7,700），但警告今年夏季可能有 15%-20% 的劇烈回調洗盤。看好『稀缺資產』。",
        stocks: ["能源板塊", "基礎材料", "AI算力基建"],
        entryPoint: "建議保留現金等待夏季<span class='highlight'> 15%-20% 回調</span>時，大力抄底能源與 AI 基建板塊。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新 / 成長股",
        viewpoint: "正在進行板塊輪動，減持舊半導體（如 AMD），大舉加倉國防科技、自動化與新一代 AI 硬體。",
        stocks: ["NVDA", "KTOS", "CBRS", "AMZN"],
        entryPoint: "六月初剛<span class='highlight'>砸六千萬美元買入 NVDA 30萬股</span>，並持續建倉國防科技 Kratos (KTOS) 與 Cerebras。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴 / 產業鏈分析",
        viewpoint: "主打『AI 千層糕』(AI Layer Cake) 投資框架，從最底層的電力、晶片一路買到終端基礎設施。",
        stocks: ["NVDA", "MU", "GEV", "VRT", "DELL"],
        entryPoint: "強烈建議圍繞<span class='highlight'>電力與散熱基建 (GEV, VST, VRT)</span> 進行逢低佈局，因這是 AI 發展的絕對瓶頸。"
    },
    {
        name: "股癌 Gooaye (謝孟恭)",
        style: "產業趨勢 / 散戶第一指標",
        viewpoint: "堅持不報牌。近期觀察資金輪動至 ODM、光通訊與軟體板塊。強烈警告市場融資開槓桿過熱的風險。",
        stocks: ["軟體板塊(IGV)", "光通訊", "被動元件"],
        entryPoint: "不提供具體買點，強調<span class='highlight'>了解產業邏輯與控管槓桿風險</span>，提醒留意大盤修正的健康性。"
    },
    {
        name: "Dan Niles (華爾街頂級科技投資人)",
        style: "科技股分析 / 宏觀避險",
        viewpoint: "看好 Agentic AI (代理型AI) 應用端，但預警 2027 年初 AI 泡沫可能迎來 30%-50% 的破裂與重置。",
        stocks: ["AAPL", "AMZN", "CSCO", "BA"],
        entryPoint: "看好<span class='highlight'> AAPL 與 AMZN </span>等科技巨頭的應用層落地，同時佈局波音 (BA) 等轉機股。"
    },
    {
        name: "JC財經女孩 Jenny",
        style: "財報基本面 / 價值投資",
        viewpoint: "以系統性邏輯與財報數據判斷公司護城河，近期深度覆盤 COMPUTEX 展會與輝達、台積電的前景。",
        stocks: ["NVDA", "TSM", "DELL", "QCOM", "MU"],
        entryPoint: "依據<span class='highlight'>最新季報與競爭優勢</span>評估，不盲從市場追高，尋找具有長期護城河的優質科技股。"
    }
];

function renderCards() {
    const grid = document.getElementById('influencer-grid');
    
    influencersData.forEach((influencer, index) => {
        const delay = index * 100; // Staggered animation delay
        
        const tagsHtml = influencer.stocks.map(stock => `<span class="tag">${stock}</span>`).join('');
        
        const cardHtml = `
            <div class="card" style="animation: fadeUp 0.5s ease forwards ${delay}ms; opacity: 0; transform: translateY(20px);">
                <div class="card-header">
                    <h2 class="name">${influencer.name}</h2>
                    <span class="style-tag">${influencer.style}</span>
                </div>
                
                <div class="card-body">
                    <div class="section-title">最新觀點 (2026.06)</div>
                    <p class="viewpoint">${influencer.viewpoint}</p>
                </div>

                <div class="card-body">
                    <div class="section-title">關注標的</div>
                    <div class="tags">
                        ${tagsHtml}
                    </div>
                </div>

                <div class="entry-point">
                    <div class="section-title" style="color: #34d399;">操作與買入點位</div>
                    <p>${influencer.entryPoint}</p>
                </div>
            </div>
        `;
        
        grid.insertAdjacentHTML('beforeend', cardHtml);
    });
}

// Add animation keyframes dynamically
const styleSheet = document.createElement("style");
styleSheet.innerText = `
    @keyframes fadeUp {
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
`;
document.head.appendChild(styleSheet);

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', renderCards);
