
const usInfluencersData = [
    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=8e44ad&color=fff",
        market: "US",
        type: "AI Supply Chain",
        tier: "Alpha",
        brierScore: "0.15",
        ece: "2%",
        viewpoint: "【2026.08.24 最新】輝達CUDA護城河與vLLM優化維持強大算力性價比，AI基礎設施與Neoclouds需求強勁，晶片替代風險低。",
        stocks: ["NVDA", "AVGO", "AMPH"],
        entryPoint: "建議在輝達財報前維持AI核心晶片與算力供應鏈配置，毋需過度擔憂非NVDA晶片替代風險。",
        instMatch: 5
    },
    {
        name: "Michael Hartnett (BofA)",
        avatar: "https://ui-avatars.com/api/?name=MH&background=2c3e50&color=fff",
        market: "US",
        type: "Macro Quant",
        tier: "Alpha",
        brierScore: "0.22",
        ece: "5%",
        viewpoint: "【2026.08.24 最新】基金經理人現金水位降至3.5%觸發賣出訊號，56%押注無著陸，市場過度擁擠且對傑克遜霍爾與財報缺乏防備。",
        stocks: ["SPY", "QQQ", "TLT"],
        entryPoint: "建議在市場極度擁擠下適度提防回檔風險，但可趁輝達財報前分批逢低布局優質AI龍頭。",
        instMatch: 5
    },
    {
        name: "Charlie McElligott (Nomura)",
        avatar: "https://ui-avatars.com/api/?name=CM&background=d35400&color=fff",
        market: "US",
        type: "Derivatives",
        tier: "Alpha",
        brierScore: "0.18",
        ece: "3%",
        viewpoint: "【2026.08.24 最新】輝達財報為市場終極壓力測試（期權定價波動7.8%），AI企業發債潮擠壓美債，黃金與比特幣成為債務焦慮出口。",
        stocks: ["VIX", "SPX"],
        entryPoint: "建議短期利用期權進行輝達財報避險，並配置黃金以對沖美債殖利率陡峭化風險。",
        instMatch: 5
    },
    {
        name: "Stanley Druckenmiller",
        avatar: "https://ui-avatars.com/api/?name=SD&background=27ae60&color=fff",
        market: "US",
        type: "Macro Hedge Fund",
        tier: "Core",
        brierScore: "0.25",
        ece: "4%",
        viewpoint: "【2026.08.24 最新】最新分析顯示清倉美光與英特爾等晶片股，轉向大幅加碼亞馬遜與Alphabet等AI買家，並新布局數位資產基礎設施。",
        stocks: ["IWM", "Commodities"],
        entryPoint: "建議跟隨其調倉思維，將部分半導體獲利資金轉向現金流穩健的雲端巨頭與數位基礎設施。",
        instMatch: 4
    },
    {
        name: "Howard Marks (Oaktree)",
        avatar: "https://ui-avatars.com/api/?name=HM&background=16a085&color=fff",
        market: "US",
        type: "Credit Cycles",
        tier: "Core",
        brierScore: "0.28",
        ece: "6%",
        viewpoint: "【信貸週期】透過不良債權利差判斷市場週期位置。當垃圾債殖利率低於均值，警告市場風險溢酬過低。",
        stocks: ["HYG", "JNK"],
        entryPoint: "啟動估值收縮壓力測試，提高無利潤成長股的折現率。",
        instMatch: 4
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        avatar: "https://ui-avatars.com/api/?name=MW&background=34495e&color=fff",
        market: "US",
        type: "Macro Strategy",
        tier: "Core",
        brierScore: "0.45",
        ece: "15%",
        viewpoint: "【2026.08.24 最新】傳統60/40股債配置失效，黃金具備長期避險價值；市場正經歷大宗商品輪動，美股上漲動能向高品質防禦股擴散。",
        stocks: ["SPY", "XLV", "XLP"],
        entryPoint: "建議投資人降低科技股單一集中度，增加黃金與高品質週期股作為資產組合防禦屏障。",
        instMatch: 3
    },
    {
        name: "Elon Musk",
        avatar: "https://ui-avatars.com/api/?name=EM&background=e74c3c&color=fff",
        market: "US",
        type: "CEO/Insider",
        tier: "Noise",
        brierScore: "0.65",
        ece: "40%",
        viewpoint: "【2026.08.24 最新】SpaceX完成2026年第100次發射且衛星突破1.1萬顆；特斯拉官宣9月3日舉行Cybercab Robotaxi發佈會。",
        stocks: ["TSLA", "DOGE"],
        entryPoint: "建議密切關注9月初Robotaxi發佈會的技術進展，並在特斯拉短線因召回波動時尋找逢低布局點。",
        instMatch: 1
    },
    {
        name: "Cathie Wood (ARK)",
        avatar: "https://ui-avatars.com/api/?name=CW&background=e67e22&color=fff",
        market: "US",
        type: "Growth Evangelist",
        tier: "Noise",
        brierScore: "0.75",
        ece: "55%",
        viewpoint: "【2026.08.24 最新】8月中下旬持續逆勢逢低大舉加碼輝達，特斯拉維持ARKK第一大持股（9.24%），堅信2030年AI支出達1.5兆美元。",
        stocks: ["ARKK", "TSLA", "Roku"],
        entryPoint: "建議在輝達財報前跟隨ARK腳步分批逢低加碼AI算力與電動車龍頭，保持長線高信念。",
        instMatch: 0
    },
    {
        name: "Jim Cramer",
        avatar: "https://ui-avatars.com/api/?name=JC&background=c0392b&color=fff",
        market: "US",
        type: "Edutainment",
        tier: "Noise",
        brierScore: "0.85",
        ece: "70%",
        viewpoint: "【2026.08.24 最新】輝達仍為AI革命核心，記憶體美光打破景氣循環；8/24呼籲避開加密貨幣轉向黃金，並警惕新股IPO潮過多擠壓資金。",
        stocks: ["QQQ"],
        entryPoint: "建議逢低持有輝達與美光等實質獲利半導體股，同時避開高估值新股與純炒作資產。",
        instMatch: 0
    }
];


const twInfluencersData = [
    {
        name: "陸行之 (Andrew Lu)",
        avatar: "https://ui-avatars.com/api/?name=AL&background=2980b9&color=fff",
        market: "TW",
        type: "Semiconductor",
        tier: "Alpha",
        brierScore: "0.19",
        ece: "4%",
        viewpoint: "【2026.08.21 盤後】提醒記憶體產業資本密度雖創歷史新低，但漲價排擠效應已壓抑手機與電腦需求，獲利率再創新高空間有限；並剖析 Google 與 Marvell 合作案之戰略影響。",
        stocks: ["台積電 2330", "聯發科 2454"],
        entryPoint: "對記憶體族群保持觀望，下半年重點檢視客戶庫存月數與資本開支變化。",
        instMatch: 5
    },
    {
        name: "程正樺 (Tenor Capital)",
        avatar: "https://ui-avatars.com/api/?name=CC&background=2c3e50&color=fff",
        market: "TW",
        type: "Supply Chain",
        tier: "Alpha",
        brierScore: "0.21",
        ece: "5%",
        viewpoint: "【2026.08.24 盤後】指出AI資料中心最關鍵瓶頸已從GPU晶片轉為「電力」與「光通訊」，美電網缺口帶動表後供電與光學互連需求。台積電與輝達本益比偏低具基本面支撐。",
        stocks: ["廣達 2382", "緯創 3231"],
        entryPoint: "跳脫單一晶片題材，逢回佈局AI基礎設施中的電力與光通訊黑馬股。",
        instMatch: 5
    },
    {
        name: "曲建仲 (曲博)",
        avatar: "https://ui-avatars.com/api/?name=CB&background=8e44ad&color=fff",
        market: "TW",
        type: "Tech Due Diligence",
        tier: "Alpha",
        brierScore: "0.24",
        ece: "3%",
        viewpoint: "【2026.08.24 盤後】8/24分析輝達伺服器傳漲價，主因記憶體與台積電先進製程產能吃緊，AI需求強勁使輝達難向供應商砍價並順利轉嫁成本；提醒留意SEMICON 2026展前AI供應鏈瓶頸。",
        stocks: ["上銓 3363", "訊芯-KY 6451"],
        entryPoint: "關注輝達供應鏈中具備先進封裝與高階記憶體定價權的瓶頸受惠股。",
        instMatch: 4
    },
    {
        name: "林啟超 (國泰世華)",
        avatar: "https://ui-avatars.com/api/?name=LC&background=27ae60&color=fff",
        market: "TW",
        type: "Macro & FX",
        tier: "Core",
        brierScore: "0.29",
        ece: "7%",
        viewpoint: "【2026.08.21 盤後】表示AI帶動強勁投資使今年GDP上看10%，台股基本面支撐上看5萬點，但乖離率加大致波動劇烈；傑克遜霍爾會議前夕市場關注 Fed 降息路徑。",
        stocks: ["台幣匯率", "金融股"],
        entryPoint: "控管槓桿風險，傑克遜霍爾會議前夕宜觀望美聯準會降息與全球通膨數據。",
        instMatch: 4
    },
    {
        name: "谷月涵 (QIC 寬量國際)",
        avatar: "https://ui-avatars.com/api/?name=PK&background=16a085&color=fff",
        market: "TW",
        type: "Foreign Capital Flow",
        tier: "Core",
        brierScore: "0.33",
        ece: "8%",
        viewpoint: "【2026.08.06 盤後】警示台股已進入末升段，維持個人零持股策略，提醒留意高檔回落風險。看好AI衍生之電力能源需求與記憶體周邊，建議避開已漲多的主流AI晶片巨頭。",
        stocks: ["中小型潛力股"],
        entryPoint: "建議適度提高現金比率避險，並將資金轉向AI能源與記憶體等相對補漲族群。",
        instMatch: 4
    },
    {
        name: "財報狗",
        avatar: "https://ui-avatars.com/api/?name=狗&background=d35400&color=fff",
        market: "TW",
        type: "Quant Screener",
        tier: "Core",
        brierScore: "0.38",
        ece: "6%",
        viewpoint: "【2026.08.24 盤後】8/24指出市場正迎接「AI三大壓力測試」（輝達財報前夕、Fed演說與核心PCE數據）。看好AI供應鏈長線基本面，提醒關注產能與耗材庫存。",
        stocks: ["財報異常股"],
        entryPoint: "輝達財報揭曉前宜控管倉位，聚焦AI先進封裝與耗材族群基本面變化。",
        instMatch: 3
    },
    {
        name: "股癌 (Gooaye)",
        avatar: "https://ui-avatars.com/api/?name=GA&background=7f8c8d&color=fff",
        market: "TW",
        type: "Edutainment",
        tier: "Noise",
        brierScore: "0.55",
        ece: "20%",
        viewpoint: "【大眾共識】財經娛樂與科普，傳遞的往往是已經 Priced-in 的市場共識。",
        stocks: ["ETF", "熱門股"],
        entryPoint: "觀察散戶群體情緒，不可作為量化交易的進出場依據。",
        instMatch: 0
    },
    {
        name: "郭哲榮",
        avatar: "https://ui-avatars.com/api/?name=哲&background=c0392b&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Noise",
        brierScore: "0.78",
        ece: "65%",
        viewpoint: "【2026.08.24 盤後】8/24盤後指出台股成交量急凍如三角收斂頂點，為行情發動前兆。長線維持台股上看5萬至10萬點看法，砸1億元重押0050並看好低位階AI/記憶體族群。",
        stocks: ["投機熱門股"],
        entryPoint: "把握量縮震盪逢低分批佈局低位階績優股與0050，切勿恐慌殺低。",
        instMatch: 0
    },
    {
        name: "錢線百分百 (非凡財經)",
        avatar: "https://ui-avatars.com/api/?name=錢&background=c0392b&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Noise",
        brierScore: "0.72",
        ece: "50%",
        viewpoint: "【2026.08.24 盤後】8/24盤後解盤聚焦「落後補漲」策略，提出三大抄底條件（季線負乖離大、上半年獲利、Q2三率三升）。看好被動元件與半導體築底反彈，提醒面板宜區間操作。",
        stocks: ["當日漲停板"],
        entryPoint: "優先挑選Q2三率三升且與季線負乖離大的落後補漲股，區間操作籌碼凌亂標的。",
        instMatch: 0
    }
];


function renderGrid(containerId, data) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = ''; 

    data.forEach((influencer, idx) => {
        const card = document.createElement('div');
        const tier = influencer.tier || (influencer.instMatch >= 4 ? 'Alpha' : (influencer.instMatch >= 2 ? 'Core' : 'Noise'));
        card.className = `card kol-row tier-${tier.toLowerCase()}`;
        card.dataset.tier = tier;
        card.dataset.search = `${influencer.name} ${influencer.type || ''} ${influencer.stocks.join(' ')} ${influencer.viewpoint}`.toLowerCase();

        const stocksHtml = influencer.stocks.map(stock => 
            `<span class="stock-tag">${stock}</span>`
        ).join('');

        card.innerHTML = `
            <div class="card-header" style="display:flex; justify-content:space-between; align-items:center;">
                <div>
                    <div class="influencer-name">${influencer.name}</div>
                    <div class="influencer-style">${influencer.type || ''}</div>
                </div>
                <span class="badge badge-${tier.toLowerCase()}" style="font-size:0.75rem; padding:3px 8px; border-radius:6px; font-weight:bold; background:rgba(255,255,255,0.1); color:#38bdf8;">${tier}</span>
            </div>
            
            <div class="section-title">最新觀點 </div>
            <p>${influencer.viewpoint}</p>

            <div class="section-title">關注標的</div>
            <div class="stock-list">
                ${stocksHtml}
            </div>

            <div class="section-title">操作與買入點位</div>
            <p>${influencer.entryPoint}</p>

            <button class="btn-copy-quote" onclick="copyQuoteToClipboard('${influencer.name.replace(/'/g, "\\'")}')">
                📋 複製觀點
            </button>
        `;

        grid.appendChild(card);
    });
}

function switchTab(tabId) {
    const tabs = ['us', 'tw', 'quant'];
    tabs.forEach(id => {
        const section = document.getElementById('section-' + id);
        const btn = document.getElementById('btn-' + id);
        if (section) {
            section.style.display = 'none';
            section.classList.remove('active');
        }
        if (btn) btn.classList.remove('active');
    });

    const targetSection = document.getElementById('section-' + tabId);
    if(targetSection) {
        targetSection.style.display = 'block';
        void targetSection.offsetWidth;
        targetSection.classList.add('active');
    }

    const targetBtn = document.getElementById('btn-' + tabId);
    if(targetBtn) targetBtn.classList.add('active');

    // 動態更改標題與敘述
    if(tabId === 'us') {
        document.getElementById('page-title').textContent = "拾人牙慧 👁️ 美股輿情監控";
        document.getElementById('page-desc').textContent = "US Market Sentiment Radar - 匯聚傳奇巨鯨與華爾街權威的第一手洞察";
    } else if(tabId === 'tw') {
        document.getElementById('page-title').textContent = "拾人牙慧 👁️ 台股輿情監控";
        document.getElementById('page-desc').textContent = "TW Market Sentiment Radar - 追蹤最具指標性的台股大老與草根散戶佈局";
    } else if(tabId === 'quant') {
        document.getElementById('page-title').textContent = "拾人牙慧 👁️ 量化情報中樞";
        document.getElementById('page-desc').textContent = "Global Quant Intelligence - 追蹤暗池資金流、造市商曝險與另類數據前瞻";
    }

    // 動態變更 FAB 圖示
    const fab = document.getElementById('fab-top');
    if(fab) {
        if(tabId === 'quant') {
            fab.innerHTML = '💡';
        } else {
            fab.innerHTML = '🏆';
        }
    }

}

// 獲取並渲染另類數據
async function fetchAltData() {
    try {
        const response = await fetch('alt_data.json?v=' + new Date().getTime());
        const data = await response.json();
        window.altData = data;
        
        document.getElementById('alt-last-updated').textContent = `更新時間: ${data.last_updated}`;
        
        // 渲染 DIX & GEX
        document.getElementById('q-dix-val').textContent = data.derivatives.dix.value + '%';
        document.getElementById('q-dix-status').textContent = data.derivatives.dix.status;
        document.getElementById('q-dix-status').style.color = data.derivatives.dix.color;
        
        document.getElementById('q-gex-val').textContent = '$ ' + data.derivatives.gex.value + ' B';
        document.getElementById('q-gex-status').textContent = data.derivatives.gex.status;
        document.getElementById('q-gex-status').style.color = data.derivatives.gex.color;

        // 渲染 Tail Risk
        if (data.derivatives.tail_risk) {
            document.getElementById('q-skew-val').textContent = data.derivatives.tail_risk.skew;
            document.getElementById('q-vix-val').textContent = data.derivatives.tail_risk.vix;
            document.getElementById('q-tail-status').textContent = data.derivatives.tail_risk.status;
            document.getElementById('q-tail-status').style.color = data.derivatives.tail_risk.color;
        }

        // 渲染 Liquidity
        if (data.derivatives.liquidity_levels) {
            document.getElementById('q-spx-val').textContent = 'SPX ' + data.derivatives.liquidity_levels.current_spx;
            document.getElementById('q-liq-status').textContent = data.derivatives.liquidity_levels.status;
            document.getElementById('q-liq-status').style.color = data.derivatives.liquidity_levels.color;
            // q-liq-fill
            const spx = data.derivatives.liquidity_levels.current_spx;
            const cta = data.derivatives.liquidity_levels.cta_sell_trigger;
            const flip = data.derivatives.liquidity_levels.gamma_flip;
            let pct = 50 + (spx - flip) / 20; 
            if (pct > 100) pct = 100;
            if (pct < 0) pct = 0;
            document.getElementById('q-liq-fill').style.width = pct + '%';
        }

        // 渲染 Sector Rotation
        if (data.derivatives.sector_rotation) {
            const outContainer = document.getElementById('q-sec-out');
            let outHTML = '';
            data.derivatives.sector_rotation.outflows.forEach(s => {
                outHTML += `<span class="ticker-badge" style="background: rgba(231,76,60,0.2); color:#e74c3c; border:1px solid #e74c3c; padding:4px 8px; border-radius:4px; font-size:0.85rem; margin-right:4px;">${s}</span>`;
            });
            outContainer.innerHTML = outHTML;

            const inContainer = document.getElementById('q-sec-in');
            let inHTML = '';
            data.derivatives.sector_rotation.inflows.forEach(s => {
                inHTML += `<span class="ticker-badge" style="background: rgba(46,204,113,0.2); color:#2ecc71; border:1px solid #2ecc71; padding:4px 8px; border-radius:4px; font-size:0.85rem; margin-right:4px;">${s}</span>`;
            });
            inContainer.innerHTML = inHTML;
            
            document.getElementById('q-sec-status').textContent = data.derivatives.sector_rotation.status;
        }


        // 渲染 NLP
        const nlpContainer = document.getElementById('q-nlp-container');
        let nlpHTML = '';
        data.nlp_sentiment.retail_forums.forEach(f => {
            nlpHTML += `
                <div class="nlp-row">
                    <span class="nlp-name">${f.name}</span>
                    <div class="nlp-bar-container">
                        <div class="nlp-bar-fill" style="width: ${f.score}%; background: ${f.color};"></div>
                    </div>
                    <span class="nlp-score-label" style="color: ${f.color}">${f.label} (${f.score})</span>
                </div>
            `;
        });
        nlpContainer.innerHTML = nlpHTML;
        
        // 渲染 Macro
        document.getElementById('q-macro-val').textContent = data.nlp_sentiment.macro_confidence.score;
        document.getElementById('q-macro-status').textContent = data.nlp_sentiment.macro_confidence.label;

        // 渲染 Alt Fundamentals
        const altTbody = document.getElementById('q-alt-tbody');
        let altHTML = '';
        data.alt_fundamentals.forEach(item => {
            let probColor = item.probability === '高' ? '#e74c3c' : '#f39c12';
            altHTML += `
                <tr>
                    <td data-label="監控標的" class="ticker-cell">${item.ticker}<br><small>${item.sector}</small></td>
                    <td data-label="另類數據訊號"><span class="mentions hot">${item.signal}</span></td>
                    <td data-label="財報異動機率"><strong style="color: ${probColor};">${item.probability}</strong></td>
                    <td data-label="底層邏輯">${item.description}</td>
                </tr>
            `;
        });
        altTbody.innerHTML = altHTML;

    } catch (e) {
        console.error("Failed to fetch alt data", e);
        document.getElementById('alt-last-updated').textContent = "資料載入失敗";
    }
}


// 頁面載入時執行渲染
document.addEventListener('DOMContentLoaded', () => {
    renderGrid('influencers-grid-us', usInfluencersData);
    renderGrid('influencers-grid-tw', twInfluencersData);
    fetchAltData();
    initSearchAndFilter();
    initGexCalculator();
    renderBrierLeaderboard();

    // 根據當前時間自動切換市場標籤 (台灣時間)
    const currentHour = new Date().getHours();
    if (currentHour >= 8 && currentHour < 14) {
        switchTab('tw');
    } else {
        switchTab('us');
    }

    // 延遲一秒後自動彈出 Top 5 熱議警示視窗
    setTimeout(showTopStocks, 1000);
});

// 計算排行邏輯 (支援過濾)
function normalizeStock(stock) {
    // 去除價格標註，例如 "MSFT (微軟 ~$410)" → "MSFT (微軟)"
    // 也處理 "NVDA (~$208)" → "NVDA"
    return stock
        .replace(/\s*~\$[\d,\.]+/g, '')  // 移除 ~$xxx
        .replace(/\s*\(~\$[\d,\.]+\)/g, '') // 移除 (~$xxx)
        .replace(/\s+/g, ' ')             // 壓縮多餘空格
        .replace(/\s+\)/g, ')')           // 清理括號前空格
        .trim();
}

function calculateTopStocks(data, filterFn = null) {
    const counts = {};
    const filteredData = filterFn ? data.filter(filterFn) : data;
    filteredData.forEach(inf => {
        inf.stocks.forEach(stock => {
            const key = normalizeStock(stock);
            counts[key] = (counts[key] || 0) + 1;
        });
    });
    return Object.entries(counts)
        .sort((a, b) => b[1] - a[1]);
}


function showFabAction() {
    const isQuant = document.getElementById('btn-quant').classList.contains('active');
    if (isQuant) {
        showQuantSummary();
    } else {
        showTopStocks();
    }
}

function showQuantSummary() {
    document.getElementById('modal-title').innerHTML = `👴 阿村伯的量化解盤`;
    const tbody = document.getElementById('modal-body');
    
    if (!window.altData) {
        tbody.innerHTML = `<p style="color: #ccc; text-align: center; padding: 20px;">資料載入中，阿村伯正在戴老花眼鏡...</p>`;
        document.getElementById('top-modal').style.display = 'block';
        fetchAltData().then(() => {
            if (window.altData) showQuantSummary();
        });
        return;
    }

    const dix = window.altData.derivatives.dix.value;
    const gex = window.altData.derivatives.gex.value;
    
    let signalText = "";
    let color = "";
    let desc = "";

    if (dix >= 45 && gex > 0) {
        signalText = "【阿村伯開示：大力買進 / 抱緊處理】";
        color = "#2ecc71";
        desc = "少年仔！暗池大戶都在偷買啦！加上莊家在壓制波動，現在大盤有鐵板護體，跌不下去的，逢低勇敢加碼就對了！";
    } else if (dix <= 40 && gex < 0) {
        signalText = "【阿村伯開示：塊陶啊 / 現金為王】";
        color = "#e74c3c";
        desc = "夭壽喔！大戶早就腳底抹油溜了，莊家也放手不管，現在盤面跟紙糊的一樣，隨時會崩，趕快減碼保命！";
    } else if (dix <= 40 && gex > 0) {
        signalText = "【阿村伯開示：逢高賣出 / 準備收網】";
        color = "#f39c12";
        desc = "注意啦！雖然大盤看起來還穩穩的，但大戶已經沒在買了。這叫『外強中乾』，有賺的股票記得先落袋為安，不要太貪心。";
    } else if (dix >= 45 && gex < 0) {
        signalText = "【阿村伯開示：大怒神啟動 / 暴跌暴漲】";
        color = "#e67e22";
        desc = "刺激了！大戶在偷偷吸籌碼，但莊家沒在控盤，接下來會像大怒神一樣暴洗盤！心臟不好的先綁好安全帶，等恐慌殺出再撿便宜。";
    } else {
        signalText = "【阿村伯開示：看戲就好 / 照紀律來】";
        color = "#3498db";
        desc = "目前水溫剛好，大戶跟莊家都沒什麼大動作。大盤會跟著個股基本面走，你手上的好股票就續抱，不要隨便被洗出場。";
    }

    const html = `
        <div style="padding: 15px; text-align: center;">
            <h3 style="color: ${color}; font-size: 1.5rem; margin-bottom: 10px;">${signalText}</h3>
            <p style="color: #f8fafc; font-size: 1.1rem; line-height: 1.6;">${desc}</p>
            <div style="margin-top: 20px; text-align: left; background: rgba(255,255,255,0.05); padding: 15px; border-radius: 8px;">
                <p><strong>DIX 暗池買盤:</strong> ${dix}%</p>
                <p><strong>GEX 莊家曝險:</strong> $ ${gex} B</p>
            </div>
        </div>
    `;

    tbody.innerHTML = html;
    document.getElementById('top-modal').style.display = 'block';
}

function showTopStocks() {

    const isUS = document.getElementById('btn-us').classList.contains('active');
    const data = isUS ? usInfluencersData : twInfluencersData;
    const marketName = isUS ? "🇺🇸 美股" : "🇹🇼 台股";
    
    const topStocks = calculateTopStocks(data).slice(0, 5);
    
    document.getElementById('modal-title').innerHTML = `🔥 ${marketName} 戰情雷達`;
    const tbody = document.getElementById('modal-body');
    
    let html = '';
    
    // 綜合 Top 5
    topStocks.forEach((item, index) => {
        let medal = index === 0 ? '🥇' : index === 1 ? '🥈' : index === 2 ? '🥉' : `${index + 1}.`;
        html += `
            <div class="top-item" style="flex-direction: row; align-items: center;">
                <span class="rank">${medal}</span>
                <span class="stock">${item[0]}</span>
                <span class="count">${item[1]} 票</span>
            </div>
        `;
    });
    
    tbody.innerHTML = html;
    document.getElementById('top-modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('top-modal').style.display = 'none';
}

window.onclick = function(event) {
    const topModal = document.getElementById('top-modal');
    if (event.target == topModal) {
        topModal.style.display = 'none';
    }
}

// Hover Glow Effect for premium cards
document.addEventListener('mousemove', e => {
    for(const card of document.querySelectorAll('.card')) {
        const rect = card.getBoundingClientRect(),
              x = e.clientX - rect.left,
              y = e.clientY - rect.top;
        card.style.setProperty("--mouse-x", `${x}px`);
        card.style.setProperty("--mouse-y", `${y}px`);
    }
});

// ================= 🔍 搜尋、Tier 篩選、GEX 試算器與 Brier 排行榜 =================

let activeTiers = new Set(["Alpha", "Core", "Noise"]);
let searchQuery = "";

function initSearchAndFilter() {
    const searchInput = document.getElementById("searchInput");
    const tierBtns = document.querySelectorAll(".tier-btn");

    if (searchInput) {
        searchInput.addEventListener("input", (e) => {
            searchQuery = e.target.value.trim().toLowerCase();
            applyFilters();
        });
    }

    tierBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            const selectedTier = btn.dataset.tier;

            if (selectedTier === "ALL") {
                activeTiers = new Set(["Alpha", "Core", "Noise"]);
                tierBtns.forEach(b => b.classList.add("active"));
            } else {
                if (activeTiers.has(selectedTier)) {
                    activeTiers.delete(selectedTier);
                    btn.classList.remove("active");
                } else {
                    activeTiers.add(selectedTier);
                    btn.classList.add("active");
                }
            }
            applyFilters();
        });
    });
}

function applyFilters() {
    const cards = document.querySelectorAll(".card");
    const tableRows = document.querySelectorAll(".consensus-table tbody tr");

    cards.forEach(card => {
        const cardTier = card.dataset.tier || "Core";
        const cardSearchText = (card.dataset.search || card.innerText || "").toLowerCase();

        const matchesTier = activeTiers.has(cardTier);
        const matchesSearch = !searchQuery || cardSearchText.includes(searchQuery);

        if (matchesTier && matchesSearch) {
            card.style.display = "";
            card.classList.remove("hidden", "fade-out");
        } else {
            card.style.display = "none";
            card.classList.add("hidden");
        }
    });

    tableRows.forEach(row => {
        const rowText = row.innerText.toLowerCase();
        const matchesSearch = !searchQuery || rowText.includes(searchQuery);
        if (matchesSearch) {
            row.style.display = "";
        } else {
            row.style.display = "none";
        }
    });
}

function initGexCalculator() {
    const priceInput = document.getElementById("nvdaPriceInput");
    if (priceInput) {
        priceInput.addEventListener("input", updateGexDisplay);
        updateGexDisplay();
    }
}

function updateGexDisplay() {
    const priceInput = document.getElementById("nvdaPriceInput");
    if (!priceInput) return;

    const currentPrice = parseFloat(priceInput.value) || 0;
    const zeroGammaPrice = 195.86;
    const sma200Price = 172.50;

    const statusText = document.getElementById("gexStatusText");
    const statusBox = document.getElementById("gexStatusBox");
    const progressBar = document.getElementById("gexProgressBar");

    if (!statusText || !statusBox || !progressBar) return;

    const minPrice = 150;
    const maxPrice = 230;
    let percentage = ((currentPrice - minPrice) / (maxPrice - minPrice)) * 100;
    percentage = Math.max(0, Math.min(100, percentage));

    progressBar.style.width = `${percentage}%`;

    if (currentPrice > zeroGammaPrice) {
        statusText.textContent = `Long Gamma (波動抑制安全區 - 造市商高賣低買)`;
        statusBox.className = "status-indicator-box status-long-gamma";
        progressBar.style.backgroundColor = "#10b981";
    } else if (currentPrice > sma200Price) {
        statusText.textContent = `Short Gamma (踩踏危險區 - 造市商追跌拋售)`;
        statusBox.className = "status-indicator-box status-short-gamma";
        progressBar.style.backgroundColor = "#f59e0b";
    } else {
        statusText.textContent = `Short Gamma + CTA 清算區 (極限清算引爆線)`;
        statusBox.className = "status-indicator-box status-short-gamma";
        progressBar.style.backgroundColor = "#ef4444";
    }
}

function renderBrierLeaderboard() {
    const container = document.getElementById("brierLeaderboard");
    if (!container) return;

    const allData = [...usInfluencersData, ...twInfluencersData];
    const sortedData = allData
        .map(inf => ({
            name: inf.name,
            tier: inf.tier || (inf.instMatch >= 4 ? 'Alpha' : (inf.instMatch >= 2 ? 'Core' : 'Noise')),
            score: parseFloat(inf.brierScore) || (inf.instMatch >= 4 ? 0.095 : (inf.instMatch >= 2 ? 0.178 : 0.340))
        }))
        .sort((a, b) => a.score - b.score)
        .slice(0, 7);

    container.innerHTML = sortedData.map((kol, index) => `
        <li style="display: flex; justify-content: space-between; padding: 8px 0; border-bottom: 1px solid rgba(255,255,255,0.08); font-size: 0.9rem;">
            <span><strong style="color: #00f0ff;">#${index + 1}</strong> ${kol.name} <span style="font-size:0.75rem; color:#94a3b8;">(${kol.tier})</span></span>
            <span style="color: ${kol.score < 0.15 ? '#10b981' : '#f59e0b'}; font-weight: bold;">
                BS: ${kol.score.toFixed(3)}
            </span>
        </li>
    `).join('');
}

function copyQuoteToClipboard(name) {
    const allData = [...usInfluencersData, ...twInfluencersData];
    const kol = allData.find(item => item.name === name);
    if (!kol) return;

    const tier = kol.tier || (kol.instMatch >= 4 ? 'Alpha' : (kol.instMatch >= 2 ? 'Core' : 'Noise'));

    const formattedText = 
`🎯 【拾人牙慧 股市輿情監控】
👤 KOL 專家：${kol.name} (${tier})
📊 關注標的：${kol.stocks.join(', ')}
💬 最新觀點：${kol.viewpoint}
🎯 建議買點：${kol.entryPoint}

🔗 系統即時監控面板：https://m0904103.github.io/youtube-stock-tracker/`;

    navigator.clipboard.writeText(formattedText).then(() => {
        alert(`✅ 已成功複製【${kol.name}】的最新觀點至剪貼簿！可直接貼上分享至 LINE / PTT / X。`);
    }).catch(err => {
        console.error("複製失敗：", err);
    });
}
