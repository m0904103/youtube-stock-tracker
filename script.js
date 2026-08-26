
const usInfluencersData = [
    {
        "name": "Brent Kochuba (SpotGamma)",
        "avatar": "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        "market": "US",
        "type": "Options GEX & 0DTE",
        "tier": "Alpha",
        "brierScore": "0.075",
        "ece": "1%",
        "viewpoint": "【2026.08.26 最新】NVDA財報為市場終極催化劑。VIX期限結構顯示避險需求上升但成本相對低廉，期權造市商對沖結構將放大財報後的指數單邊波動。",
        "stocks": [
            "NVDA",
            "SPY",
            "QQQ"
        ],
        "entryPoint": "建議利用低成本波動率工具進行指數避險，切勿在流動性支撐下單向逆勢放空。",
        "instMatch": 5
    },
    {
        "name": "Cem Karsan (Kai Volatility)",
        "avatar": "https://ui-avatars.com/api/?name=CK&background=9b59b6&color=fff",
        "market": "US",
        "type": "Vanna/Charm Flows",
        "tier": "Alpha",
        "brierScore": "0.088",
        "ece": "2%",
        "viewpoint": "【2026.08.26 最新】警告市場做多NVDA買權（Long Calls）過度擁擠，OPEX後的Gamma斷崖已改變造市商對沖動態，需防範財報發布後波動率重定價帶來的下修風險。",
        "stocks": [
            "SPX",
            "VIX",
            "NVDA"
        ],
        "entryPoint": "提防買權踩踏風險，建議逢高獲利了結或布局不對稱下檔保護以規避波動率崩跌。",
        "instMatch": 5
    },
    {
        "name": "Dylan Patel (SemiAnalysis)",
        "avatar": "https://ui-avatars.com/api/?name=DP&background=00ffcc&color=000",
        "market": "US",
        "type": "Semiconductor",
        "tier": "Alpha",
        "brierScore": "0.150",
        "ece": "2%",
        "viewpoint": "【2026.08.26 最新】分析OpenAI自研推論晶片Jalapeño，NVDA在通用計算與全模態訓練上仍具霸權；Vera Rubin架構在AgentX任務展現30倍能效，軟硬協同為核心護城河。",
        "stocks": [
            "NVDA",
            "TSM",
            "AVGO"
        ],
        "entryPoint": "聚焦NVDA在全棧軟體生態與Rubin架構的技術護城河，關注雲端自研晶片份額變化。",
        "instMatch": 5
    },
    {
        "name": "Charlie McElligott (Nomura)",
        "avatar": "https://ui-avatars.com/api/?name=CM&background=ff0055&color=fff",
        "market": "US",
        "type": "CTA & Derivatives",
        "tier": "Alpha",
        "brierScore": "0.180",
        "ece": "3%",
        "viewpoint": "【2026.08.26 最新】稱NVDA財報影響力超越通膨數據，期權定價約7.8%隱含波動；盤前正Gamma提供波動率鉗制，財報公布後將引發Vanna與Charm資金流解鎖觸發單邊行情。",
        "stocks": [
            "SPX",
            "CTA Triggers",
            "NVDA"
        ],
        "entryPoint": "密切監控財報公布後的Gamma釋放與突破方向，順應機械式資金流向進行動能跟隨。",
        "instMatch": 4
    },
    {
        "name": "Stanley Druckenmiller",
        "avatar": "https://ui-avatars.com/api/?name=SD&background=f1c40f&color=000",
        "market": "US",
        "type": "Macro / 13F",
        "tier": "Alpha",
        "brierScore": "0.145",
        "ece": "2%",
        "viewpoint": "【2026.08.26 最新】清倉美光與英特爾等晶片股，轉向大幅加碼亞馬遜與Alphabet等AI買家，並新布局數位資產基礎設施，防範硬體端資本支出過度擴張。",
        "stocks": [
            "AMZN",
            "GOOGL",
            "TSM"
        ],
        "entryPoint": "跟隨其調倉思維，將部分半導體獲利資金轉向現金流穩健的雲端巨頭與數位基礎設施。",
        "instMatch": 5
    },
    {
        "name": "Howard Marks (Oaktree)",
        "avatar": "https://ui-avatars.com/api/?name=HM&background=34495e&color=fff",
        "market": "US",
        "type": "Credit / Cycle",
        "tier": "Alpha",
        "brierScore": "0.160",
        "ece": "3%",
        "viewpoint": "【2026.08.26 最新】強調目前信貸市場與股票估值已定價完美無瑕（Priced for Perfection），AI投資熱潮中應維持嚴格風險紀律，防範流動性與利率意外。",
        "stocks": [
            "HYG",
            "SPY",
            "OAK"
        ],
        "entryPoint": "控制投資組合總槓桿，增加防禦性高評級債券配置以鎖定無風險收益。",
        "instMatch": 5
    },
    {
        "name": "Tom Lee (Fundstrat)",
        "avatar": "https://ui-avatars.com/api/?name=TL&background=2ecc71&color=fff",
        "market": "US",
        "type": "Macro Bull",
        "tier": "Core",
        "brierScore": "0.220",
        "ece": "5%",
        "viewpoint": "【2026.08.26 最新】視今日為美股方向選擇窗口，NVDA財報為標普挑戰7,900–8,000點關鍵考驗；若黃仁勳釋出強勁AI算力指引，將帶動大盤重啟新一輪多頭攻勢。",
        "stocks": [
            "NVDA",
            "SPY",
            "IWM"
        ],
        "entryPoint": "維持堅定看多立場，可趁財報前夕的震盪回檔積極逢低布局AI龍頭與權值股。",
        "instMatch": 3
    },
    {
        "name": "Jim Cramer",
        "avatar": "https://ui-avatars.com/api/?name=JC&background=e74c3c&color=fff",
        "market": "US",
        "type": "Retail Sentiment",
        "tier": "Inverse",
        "brierScore": "0.410",
        "ece": "12%",
        "viewpoint": "【2026.08.26 最新】稱NVDA財報為AI浪潮的公投，駁斥市場看空與競爭威脅，直言每年都有號稱超越NVDA的晶片但無實質威脅；呼籲投資人聚焦電力與算力交付進度。",
        "stocks": [
            "NVDA",
            "AMD",
            "MSFT"
        ],
        "entryPoint": "忽視短期雜音並堅定抱牢NVDA核心持股(Own it, don't trade it)，檢視電力交付。",
        "instMatch": 1
    },
    {
        "name": "Cathie Wood (ARK Invest)",
        "avatar": "https://ui-avatars.com/api/?name=CW&background=9b59b6&color=fff",
        "market": "US",
        "type": "Disruptive Tech",
        "tier": "Inverse",
        "brierScore": "0.380",
        "ece": "11%",
        "viewpoint": "【2026.08.26 最新】8月連續逢低大舉加碼NVDA數千萬美元，同時減持AMD與Palantir以集中持倉；堅信AI基礎設施週期仍處極早期階段，展現對NVDA長期增長極高信心。",
        "stocks": [
            "NVDA",
            "TSLA",
            "PLTR"
        ],
        "entryPoint": "堅持破壞性創新投資思維，在市場震盪拉回時將資金集中配置於AI基礎設施龍頭。",
        "instMatch": 2
    }
];


const twInfluencersData = [
    {
        "name": "郭明錤 (Ming-Chi Kuo)",
        "avatar": "https://ui-avatars.com/api/?name=MK&background=e67e22&color=fff",
        "market": "TW",
        "type": "Supply Chain BOM",
        "tier": "Core",
        "brierScore": "0.110",
        "ece": "3%",
        "viewpoint": "【2026.08.26 盤後】聚焦Blackwell平台成熟放量與下世代Rubin架構過渡節奏；Rubin樣品已交付並預計下半年量產，但需克服HBM4認證、網路升級與液冷散熱等挑戰。",
        "stocks": [
            "台積電 2330",
            "鴻海 2317",
            "欣興 3037"
        ],
        "entryPoint": "留意Rubin高階量產時程與散熱/HBM驗證進度對供應鏈的影響。",
        "instMatch": 5
    },
    {
        "name": "詹家鴻 (Daniel Chiang)",
        "avatar": "https://ui-avatars.com/api/?name=DC&background=2980b9&color=fff",
        "market": "TW",
        "type": "Morgan Stanley HW",
        "tier": "Core",
        "brierScore": "0.125",
        "ece": "4%",
        "viewpoint": "【2026.08.26 盤後】大摩維持台積電為半導體首選，看好CoWoS先進封裝產能擴張；並透過鴻海、廣達等台系ODM出貨動能，正面看待雲端AI長期需求與Token降本趨勢。",
        "stocks": [
            "廣達 2382",
            "鴻海 2317",
            "緯創 3231"
        ],
        "entryPoint": "逢低聚焦具先進封裝護城河的台積電及出貨能見度高的ODM龍頭。",
        "instMatch": 5
    },
    {
        "name": "陸行之 (Andrew Lu)",
        "avatar": "https://ui-avatars.com/api/?name=AL&background=16a085&color=fff",
        "market": "TW",
        "type": "Semiconductor",
        "tier": "Alpha",
        "brierScore": "0.190",
        "ece": "4%",
        "viewpoint": "【2026.08.26 盤後】關注輝達即將公布之財報能否在記憶體漲價下守住75%毛利率，並警示Rubin Ultra若降規減少HBM容量對供應鏈影響，提醒留意庫存月數與CoWoS動能。",
        "stocks": [
            "台積電 2330",
            "聯發科 2454"
        ],
        "entryPoint": "財報公布前夕切忌盲目追高，應緊盯毛利率指引與庫存月數變化。",
        "instMatch": 5
    },
    {
        "name": "程正樺 (Tenor Capital)",
        "avatar": "https://ui-avatars.com/api/?name=CH&background=27ae60&color=fff",
        "market": "TW",
        "type": "Supply Chain",
        "tier": "Alpha",
        "brierScore": "0.195",
        "ece": "4%",
        "viewpoint": "【2026.08.26 盤後】認為AI行情未見頂且獲利有撐，但當前最短料瓶頸已由GPU晶片轉向「電力」供應；建議關注算力基礎設施，鎖定電力概念股與下世代光通訊/CPO矽光子。",
        "stocks": [
            "廣達 2382",
            "緯創 3231",
            "台達電 2308"
        ],
        "entryPoint": "布局重心由單純GPU轉向電力供應鏈與CPO矽光子技術變革。",
        "instMatch": 4
    },
    {
        "name": "曲建仲 (曲博)",
        "avatar": "https://ui-avatars.com/api/?name=CB&background=8e44ad&color=fff",
        "market": "TW",
        "type": "Tech Due Diligence",
        "tier": "Alpha",
        "brierScore": "0.210",
        "ece": "5%",
        "viewpoint": "【2026.08.26 盤後】解析輝達下世代架構與台積電先進封裝產能，指出CoWoS-L與矽光子(CPO)封裝技術將是2026-2027年解決互連頻寬瓶頸的唯一物理路徑。",
        "stocks": [
            "上銓 3363",
            "訊芯-KY 6451",
            "日月光投控 3711"
        ],
        "entryPoint": "關注具備矽光子CPO封測與光學元件實質量產能力的瓶頸受惠股。",
        "instMatch": 4
    },
    {
        "name": "林啟超 (國泰世華)",
        "avatar": "https://ui-avatars.com/api/?name=LC&background=2c3e50&color=fff",
        "market": "TW",
        "type": "Macro & FX",
        "tier": "Core",
        "brierScore": "0.200",
        "ece": "4%",
        "viewpoint": "【2026.08.26 盤後】預期企業獲利強勁支撐台股長線，CSP巨頭AI資本支出持續爆發，台灣為供應鏈重組最大受惠者；但降息路徑偏審慎且市場乖離率高，注意波動常態化。",
        "stocks": [
            "台幣匯率",
            "富邦金 2881",
            "國泰金 2882"
        ],
        "entryPoint": "肯定AI長線多頭但須留意高乖離波動，避免過度槓桿並做好資產配置。",
        "instMatch": 4
    },
    {
        "name": "谷月涵 (QIC 寬量國際)",
        "avatar": "https://ui-avatars.com/api/?name=PK&background=7f8c8d&color=fff",
        "market": "TW",
        "type": "Foreign Capital Flow",
        "tier": "Inverse",
        "brierScore": "0.320",
        "ece": "8%",
        "viewpoint": "【2026.08.26 盤後】認為台股長線受惠AI新創與國際資本湧入，但短線指數估值已高，外資避險情緒升溫，建議關注具利基市場之中小型隱形冠軍與低基期傳產。",
        "stocks": [
            "中小型潛力股",
            "生技醫療",
            "重電綠能"
        ],
        "entryPoint": "建議適度提高現金比率避險，並將資金轉向AI能源與非電補漲族群。",
        "instMatch": 2
    },
    {
        "name": "財報狗",
        "avatar": "https://ui-avatars.com/api/?name=SD&background=d35400&color=fff",
        "market": "TW",
        "type": "Quant Screener",
        "tier": "Core",
        "brierScore": "0.230",
        "ece": "5%",
        "viewpoint": "【2026.08.26 盤後】輝達財報為AI景氣溫度計，市場預期營收高成長，聚焦資料中心與新平台放量進程；持續追蹤台積電先進製程/CoWoS與廣達、鴻海伺服器市況。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "鴻海 2317"
        ],
        "entryPoint": "以財報實質數據與法說展望為依據，嚴守紀律動態調整AI持股組合。",
        "instMatch": 4
    },
    {
        "name": "郭哲榮",
        "avatar": "https://ui-avatars.com/api/?name=JR&background=c0392b&color=fff",
        "market": "TW",
        "type": "Retail Hype",
        "tier": "Inverse",
        "brierScore": "0.450",
        "ece": "15%",
        "viewpoint": "【2026.08.26 盤後】堅定看好台股長線趨勢，解讀盤面量縮為三角收斂醞釀期而非崩盤；認為輝達AI已轉化為實質獲利，財報前後若遇震盪皆為逢低布局良機。",
        "stocks": [
            "0050",
            "環球晶 6488",
            "世芯-KY 3661"
        ],
        "entryPoint": "震盪拉回不殺低不做空，逢回積極布局市值型ETF與權值核心。",
        "instMatch": 1
    },
    {
        "name": "錢線百分百 (非凡財經)",
        "avatar": "https://ui-avatars.com/api/?name=CX&background=e74c3c&color=fff",
        "market": "TW",
        "type": "Retail Hype",
        "tier": "Inverse",
        "brierScore": "0.430",
        "ece": "14%",
        "viewpoint": "【2026.08.26 盤後】8/26解盤聚焦AI資料中心升級推升之CPO矽光子量產商機，探討FAU光纖陣列模組與光互連題材；台積電呈現區間震盪，資金於高階電子與補漲股輪動。",
        "stocks": [
            "聯鈞 3450",
            "上詮 3363",
            "波若威 3163"
        ],
        "entryPoint": "把握CPO矽光子量產受惠股，並於台積電區間下緣採分批低接策略。",
        "instMatch": 1
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

let activeTiers = new Set(["Alpha", "Core", "Inverse", "Noise"]);
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
