const usInfluencersData = [
    {
        name: "小左美股第一视角",
        style: "價格行為 / 技術分析",
        viewpoint: "市場處於「二次探底」博弈期，科技巨頭可能面臨「王權交替」。提醒警惕泡沫，注重順勢交易與宏觀數據（利率/通膨）影響。",
        stocks: ["NVDA", "TSLA", "MU", "PLTR", "ARM", "DELL"],
        entryPoint: "看重技術支撐阻力位與趨勢線。建議不盲目追高，等待關鍵支撐位確認有效後再分批建倉。"
    },
    {
        name: "老李玩钱 (Your Favorite ⭐️)",
        style: "理性長線 / 帳戶實盤",
        viewpoint: "發布了「6月必買」與下半年佈局策略。對市場高位震盪保持理性，針對 AI 與記憶體板塊進行深入解析。",
        stocks: ["MU", "INTC", "SNDK", "RKLB", "NVDA"],
        entryPoint: "建議逢低佈局。具體買入價格與加倉點位通常在會員頻道展示，強調在波動中做好倉位控管。"
    },
    {
        name: "NaNa說美股",
        style: "幽默犀利 / 大眾視角",
        viewpoint: "以「小白語言」解構市場，近期吐槽舊科技巨頭與價值投資的窘境。認為市場展現韌性，資金正在板塊間快速輪動。",
        stocks: ["NVDA (AI硬體)", "舊科技巨頭 (減持觀望)"],
        entryPoint: "強烈建議不盲目追高，應耐心等待個股回調至關鍵技術支撐（如年線附近）再考慮介入。"
    },
    {
        name: "美股研究社",
        style: "財報基本面 / 華爾街動向",
        viewpoint: "AI 依舊是 2026 盈利核心（貢獻標普500七成增長）。華爾街投資範式正在轉變，資金逐漸向防禦型與實體經濟板塊擴散。",
        stocks: ["AI 產業鏈", "能源板塊", "金融板塊", "工業板塊"],
        entryPoint: "推薦採取槓鈴策略 (Barbell Strategy)：一端抱緊具備結構成長的 AI 標的，一端配置防禦型資產平衡風險。"
    },
    {
        name: "游庭皓的財經皓角",
        style: "總體經濟 / 景氣循環",
        viewpoint: "探討 AI 行情是否為超級週期。分析台美韓印股市競合關係，以及半導體庫存循環對全球供應鏈的影響。",
        stocks: ["TSMC (台積電)", "NVDA", "台灣供應鏈"],
        entryPoint: "依循景氣循環投資法，於半導體庫存去化完成及資本支出上升期進行波段價差操作。"
    },
    {
        name: "尼可拉斯楊Live精",
        style: "量化指標 / 非主流視角",
        viewpoint: "警告 2026 年出現「指數高位震盪、個股劇烈波動」的結構性背離。密切關注中東地緣政治對油價與聯準會政策的影響。",
        stocks: ["GPU", "光連結 (CPO)", "伺服器基建"],
        entryPoint: "利用量化指標如 AAII（散戶情緒）與 NAAIM（投資經理敞口）尋找賣點與避風港，在市場貪婪時保持冷靜。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "華爾街大多頭 / 宏觀量化",
        viewpoint: "長線極度樂觀（標普年底上看7,700），但警告今年夏季可能有 15%-20% 的劇烈回調洗盤。看好『稀缺資產』。",
        stocks: ["能源板塊", "基礎材料", "AI算力基建"],
        entryPoint: "建議保留現金等待夏季 <span class='highlight'>15%-20% 回調</span>時，大力抄底能源與 AI 基建板塊。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新 / 成長股",
        viewpoint: "正在進行板塊輪動，減持舊半導體（如 AMD），大舉加倉國防科技、自動化與新一代 AI 硬體。",
        stocks: ["NVDA", "KTOS", "CBRS", "AMZN"],
        entryPoint: "六月初剛砸<span class='highlight'>六千萬美元買入 NVDA 30萬股</span>，並持續建倉國防科技 Kratos (KTOS) 與 Cerebras。"
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
        viewpoint: "堅持不直接報牌，但透過產業鏈推導資金流向。近期重點觀察軟體 SaaS 族群的復甦，以及光通訊與被動元件的訂單動態。",
        stocks: ["CRM", "NOW", "SNOW", "OKTA", "光通訊板塊"],
        entryPoint: "觀察到資金正在輪動至跌深的軟體股 <span class='highlight'>(如 Salesforce, ServiceNow, Snowflake)</span>，提醒留意大盤融資過高的修正風險。"
    },
    {
        name: "Dan Niles (華爾街頂級科技投資人)",
        style: "科技股分析 / 宏觀避險",
        viewpoint: "看好 Agentic AI (代理型AI) 應用端，但預警 2027 年初 AI 泡沫可能迎來 30%-50% 的破裂與重置。",
        stocks: ["AAPL", "AMZN", "CSCO", "BA"],
        entryPoint: "看好 AAPL 與 AMZN 等科技巨頭的應用層落地，同時佈局波音 (BA) 等轉機股。"
    },
    {
        name: "JC財經女孩 Jenny",
        style: "財報基本面 / 價值投資",
        viewpoint: "以系統性邏輯與財報數據判斷公司護城河，近期深度覆盤 COMPUTEX 展會與輝達、台積電的前景。",
        stocks: ["NVDA", "TSM", "DELL", "QCOM", "MU"],
        entryPoint: "依據最新季報與競爭優勢評估，不盲從市場追高，尋找具有長期護城河的優質科技股。"
    }
];

const twInfluencersData = [
    {
        name: "獅公 (李永年)",
        style: "資深分析 / 總體指標",
        viewpoint: "對於高檔走勢表示審慎，提出「是最後加碼還是最後減碼？」的疑問，提醒密切關注油價、美元及資金流向。",
        stocks: ["低基期 AI 股", "主動式 ETF", "金融股"],
        entryPoint: "大盤技術性回檔是正常現象，建議選擇具靈活性的 <span class='highlight'>主動式 ETF</span> 搭配高息金融股防禦。"
    },
    {
        name: "杜金龍 (老先覺)",
        style: "波浪理論 / 數據精算",
        viewpoint: "市場已出現「短期過熱」訊號，預期大盤可能進入高達 4000~6000 點的震盪修正階段。",
        stocks: ["台積電 (2330)", "台達電", "保留 50% 現金"],
        entryPoint: "精算台積電合理價在 1960~2000 元，建議 <span class='highlight'>拉回至 2135 以下</span> 再加碼。大盤操作建議買黑不買紅，留五成現金。"
    },
    {
        name: "郭哲榮 (摩爾投顧 - 折折)",
        style: "話題性高 / 權值股波段",
        viewpoint: "極度看好台股與鴻海的後市，認為外資空單僅是鎖定正價差的套利。呼籲把握股東會行情，但切忌使用融資。",
        stocks: ["鴻海 (2317)", "台積電 (2330)", "AI 供應鏈"],
        entryPoint: "強烈看好鴻海「每年賺兩個股本」目標，在 20 倍本益比預期下，認為目標價上看 <span class='highlight'>400 元</span>，已進入噴出臨界點。"
    },
    {
        name: "老王 (老王愛說笑)",
        style: "技術分析 / 嚴格紀律",
        viewpoint: "AI 供應鏈仍是多頭主旋律，但在萬點高位操作中，最看重「紀律」與「停損停利機制」。",
        stocks: ["廣達 (2382)", "緯創 (3231)", "聯電 (2303)", "記憶體"],
        entryPoint: "建議設定買進當日收盤價 <span class='highlight'>跌破 5% 即減碼</span>，或跌破 5 日線減碼一半。強調查確認收盤價跌破後再動作。"
    },
    {
        name: "陳龍 (股市尊龍)",
        style: "盤後解盤 / 產業追蹤",
        viewpoint: "跟隨 AI 熱潮推動的多頭馬車，資金在電子與 AI 相關族群間流動。但也提醒投資人必須注意籌碼面的潛在風險。",
        stocks: ["AI 伺服器", "散熱族群", "高殖利率股"],
        entryPoint: "持續看好 AI 輪動，但強烈提醒需注意 <span class='highlight'>融資暴增與外資空單</span> 的殺盤風險，不可無腦追高。"
    },
    {
        name: "權證小哥",
        style: "籌碼分析 / 雙刀戰法",
        viewpoint: "大盤屢創新高且強勢股全面亮燈，已進入「瘋子盤」。提醒千萬不能盲目追高，必須看懂主力動向與資金流向。",
        stocks: ["處置股觀察", "除權息行情股", "高籌碼集中股"],
        entryPoint: "即將進入除權息旺季，建議利用 <span class='highlight'>雙刀戰法</span> (多空對鎖) 在波動中賺取領息與價差。利用籌碼軟體追蹤分點券商動作。"
    },
    {
        name: "阮慕驊",
        style: "總體經濟 / 穩健配置",
        viewpoint: "台股 2026 狂飆，個人選擇在 5 月底進行適度的「獲利了結」，確保流動性，應對可能的高位震盪。",
        stocks: ["國泰金 (2882)", "高股息 ETF", "保留現金"],
        entryPoint: "已賣出約 <span class='highlight'>1/3 漲多持股變現</span>；但對於長線看好的 ETF，利用收回的現金反而提高定期定額扣款額度。"
    },
    {
        name: "塗敏峰 (超越巔峰)",
        style: "技術型態 / 中小型股",
        viewpoint: "強調投資人不應僅憑大盤指數進行交易，而應根據個股的未來趨勢與技術面（如 KD 指標）進行「順勢而為」的佈局。",
        stocks: ["鴻海 (2317)", "群創 (3481)", "南亞科 (2408)", "金居"],
        entryPoint: "不看大盤，專注於中小型股的輪動機會，利用 <span class='highlight'>型態學與 KD 指標</span> 判讀短線支撐與壓力，靈活進出。"
    },
    {
        name: "股癌 Gooaye (謝孟恭)",
        style: "產業趨勢 / 散戶指標",
        viewpoint: "台股資金正在進行板塊輪動，從漲多的硬體代工外溢尋找落後補漲標的。強烈警告融資開槓桿過熱，隨時有修正風險。",
        stocks: ["光通訊板塊", "被動元件", "軟體族群"],
        entryPoint: "建議緊盯 <span class='highlight'>光通訊與軟體</span> 的訂單復甦動態。提醒投資人預留現金，防範台股大盤可能出現的健康回調。"
    }
];

function renderGrid(containerId, data) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = ''; 

    data.forEach(influencer => {
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

function switchTab(tabId) {
    // 隱藏所有內容
    document.getElementById('section-us').style.display = 'none';
    document.getElementById('section-tw').style.display = 'none';
    document.getElementById('section-us').classList.remove('active');
    document.getElementById('section-tw').classList.remove('active');
    
    // 取消所有按鈕的 active 狀態
    document.getElementById('btn-us').classList.remove('active');
    document.getElementById('btn-tw').classList.remove('active');

    // 顯示被點擊的內容
    const targetSection = document.getElementById('section-' + tabId);
    targetSection.style.display = 'block';
    // 強制重繪以觸發動畫
    void targetSection.offsetWidth;
    targetSection.classList.add('active');

    document.getElementById('btn-' + tabId).classList.add('active');

    // 動態更改標題
    if(tabId === 'us') {
        document.getElementById('page-title').textContent = "US Stocks Tracker";
        document.getElementById('page-desc').textContent = "追蹤您最愛的美股 YouTuber 最新觀點與佈局策略";
    } else {
        document.getElementById('page-title').textContent = "Taiwan Stocks Tracker";
        document.getElementById('page-desc').textContent = "追蹤最具指標性的台股分析師與名嘴佈局策略";
    }
}

// 頁面載入時執行渲染
document.addEventListener('DOMContentLoaded', () => {
    renderGrid('influencers-grid-us', usInfluencersData);
    renderGrid('influencers-grid-tw', twInfluencersData);
});
