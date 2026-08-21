
const usInfluencersData = [
    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=8e44ad&color=fff",
        market: "US",
        type: "AI Supply Chain",
        tier: "Alpha",
        brierScore: "0.15",
        ece: "2%",
        viewpoint: "【2026.08.21 最新】強調Cerebras CS-4發布提升系統部署與網路效能。指出AI硬體與軟體協同優化是降低CapEx成本關鍵，晶片與記憶體瓶頸仍影響輝達財報前夕的供應鏈表現。",
        stocks: ["NVDA", "AVGO", "AMPH"],
        entryPoint: "建議佈局AI硬體協同優化與數據中心網路概念股，觀察輝達財報中供應鏈產能釋放狀況。",
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
        viewpoint: "【2026.08.21 最新】美國國債即將突破40兆美元，情緒指標高達9.7顯現戰術性過熱。隨傑克遜霍爾年會前夕利率預期波動，長線看好美股但短線需避險，黃金為應對債務膨脹首選。",
        stocks: ["SPY", "QQQ", "TLT"],
        entryPoint: "建議增持黃金與硬資產進行尾部風險避險，並在傑克遜霍爾會議前落袋部分戰術性高估值獲利。",
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
        viewpoint: "【2026.08.21 最新】評財政部加大長債回購難掩AI巨頭發債（今年2,690億美元）擠壓國債市場的矛盾。AI CapEx融資潮推升長端利率與殖利率曲線陡峭化，傑克遜霍爾前夕長債波動升溫。",
        stocks: ["VIX", "SPX"],
        entryPoint: "建議警惕AI巨頭發債對債券殖利率的推升效應，減持高槓桿長天期債券並嚴控衍生品伽瑪風險。",
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
        viewpoint: "【2026.08.21 最新】13F顯示清倉美光、英特爾、博通等，重倉轉向 Alphabet 與亞馬遜（加碼逾10倍及買權），新建倉AMD與Lam Research。顯示在輝達財報前夕對AI硬體進行結構性換股。",
        stocks: ["IWM", "Commodities"],
        entryPoint: "建議跟隨其調倉邏輯，適度自高估值晶片股獲利了結，轉向具備現金流與估值優勢的雲端巨頭。",
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
        viewpoint: "【2026.08.21 最新】指出市場已進入中週期階段，投資人要求「用財報證明實力」，而非僅憑AI願景。傳統60/40配置失效，建議轉向防禦性高品質股與黃金/商品輪動。",
        stocks: ["SPY", "XLV", "XLP"],
        entryPoint: "建議鎖定高資產品質與強勁自由現金流的大盤股，同時配置黃金作為防禦中週期波動的避險組合。",
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
        viewpoint: "【2026.08.21 最新】強調Grok AI自動化能協助個人創業，星鏈拓展印度偏遠網路。重申SpaceX目標於2030年前達成每日30次以上星艦發射，並預計數月內實施星艦上層級塔架回收。",
        stocks: ["TSLA", "DOGE"],
        entryPoint: "建議關注SpaceX與xAI供應鏈生態系，並評估AI Agent工具帶來的邊緣運算與軟體應用新商機。",
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
        viewpoint: "【2026.08.21 最新】8/20交易日誌顯示加碼760萬美元核能業者BWXT，並逢低買進博通、Cerebras與Rocket Lab共4,120萬美元，同時減持AMD。發文認為AI將推高股息防禦型新基金ARKY。",
        stocks: ["ARKK", "TSLA", "Roku"],
        entryPoint: "建議逢低布局經AI篩選之尖端科技與核能能源供應鏈，並留意AI軟體落地應用之潛力股。",
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
        viewpoint: "【2026.08.21 最新】專訪美光CEO指出AI記憶體需求為結構性非週期性，大力看好記憶體擴建潮。認為Salesforce與Workday等軟體股拉回已過度，並翻多建議直接持有比特幣現貨。",
        stocks: ["QQQ"],
        entryPoint: "建議趁軟體績優股拉回時分批建倉，並在輝達財報前留意美光等AI記憶體基建股的支撐力道。",
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
        viewpoint: "【2026.08.06 盤後】認為AI非泡沫且評價便宜，指出韓國保證金爆倉、FOMC及CSP財報等利空已出盡。台積電先進製程與CoWoS龍頭地位穩固，籌碼清洗後第四季表現可期。",
        stocks: ["廣達 2382", "緯創 3231"],
        entryPoint: "建議趁大盤回檔時逢低布局台積電及CPO、高速傳輸等硬核基本面標的。",
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
        viewpoint: "【2026.08.20 盤後】SEMICON Taiwan導覽聚焦量子與矽光子，分析Google與AMD合作第十代TPU帶動ASIC與先進封裝需求。強調AI由雲端訓練轉向邊緣推論，CPO與先進封裝為長線關鍵。",
        stocks: ["矽光子", "CoWoS"],
        entryPoint: "長線布局CPO矽光子與CoWoS先進封裝供應鏈，勿過度追高本益比偏離基本面之短線題材股。",
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
        viewpoint: "【2026.08.21 盤後】節目探討Intel重返記憶體與宇樹機器人發展；8/21指出台股開低走高且台積電尾盤助攻大盤重回45,000點，機器人展帶熱市場話題。",
        stocks: ["財報異常股"],
        entryPoint: "關注機器人產業實質獲利落地情況與記憶體新技術發展。",
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
        viewpoint: "【2026.08.21 盤後】8/21盤後直播指出台股量能雖急凍，但大盤站回45,224點，高達95%個股處於谷底翻轉階段不需恐慌，看好年底挑戰5萬點、長期上看10萬點。",
        stocks: ["投機熱門股"],
        entryPoint: "勿因短線量縮恐慌殺低，可趁震盪分批布局權值龍頭股與0050。",
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
        viewpoint: "【2026.08.21 盤後】8/21盤後解析台股開低走高收45,224點。聯電與旺宏季線負乖離16%具加碼契機，國巨打雙底；0050九月成分股調整前五天進場勝率逾85%。",
        stocks: ["當日漲停板"],
        entryPoint: "留意高負乖離優質股反彈契機，並善用0050成分股調整時點進行策略布局。",
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
    const cards = document.querySelectorAll(".card.kol-row");

    cards.forEach(card => {
        const cardTier = card.dataset.tier;
        const cardSearchText = card.dataset.search || "";

        const matchesTier = activeTiers.has(cardTier);
        const matchesSearch = cardSearchText.includes(searchQuery);

        if (matchesTier && matchesSearch) {
            card.classList.remove("hidden");
            setTimeout(() => card.classList.remove("fade-out"), 10);
        } else {
            card.classList.add("fade-out");
            setTimeout(() => {
                if (card.classList.contains("fade-out")) {
                    card.classList.add("hidden");
                }
            }, 300);
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
