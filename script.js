
const usInfluencersData = [
    {
        "name": "Brent Kochuba (SpotGamma)",
        "avatar": "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        "market": "US",
        "type": "Options GEX & 0DTE",
        "tier": "Alpha",
        "brierScore": "0.075",
        "ece": "1%",
        "viewpoint": "【2026.09.05 最新】非農數據後債市避險情緒高於股市期權定價，標普500在9月OPEX前處於負Gamma轉折區，NVDA期權重置加劇指數波動不對稱性。",
        "stocks": [
            "NVDA",
            "SPY",
            "QQQ"
        ],
        "entryPoint": "嚴守Gamma反轉關鍵支撐位，提防指數跌破引發做市商拋售加速。",
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
        "viewpoint": "【2026.09.05 最新】結構性衍生品壓抑表面VIX指數，但個股隱含波動劇烈分化；9月OPEX窗口面臨做市商避險動能轉換，易觸發季節性波動擴張與劇烈板塊輪動。",
        "stocks": [
            "SPX",
            "VIX",
            "NVDA"
        ],
        "entryPoint": "把握VIX低點建立非對稱下行保護，避免重壓高估值單一科技股。",
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
        "viewpoint": "【2026.09.05 最新】輝達Blackwell晶片算力領先地位明確，供應鏈瓶頸正由CoWoS封裝轉向高頻寬記憶體與電力基建，超大規模雲端商自研晶片短期難以撼動其護城河。",
        "stocks": [
            "NVDA",
            "TSM",
            "AVGO"
        ],
        "entryPoint": "逢硬體延遲或供應鏈雜音引發回檔時分批布局NVDA，切勿追高。",
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
        "viewpoint": "【2026.09.05 最新】CTA與波動率控制基金淨多頭部位已達歷史極限，缺乏續買動能；非農後債券殖利率走陡，一旦觸發下行停損將引發系統性量化拋售踩踏。",
        "stocks": [
            "SPX",
            "CTA Triggers",
            "NVDA"
        ],
        "entryPoint": "降低高Beta資產槓桿率，密切監控CTA模型關鍵觸發點以防瀑布式賣壓。",
        "instMatch": 5
    },
    {
        "name": "Stanley Druckenmiller",
        "avatar": "https://ui-avatars.com/api/?name=SD&background=f1c40f&color=000",
        "market": "US",
        "type": "Macro / 13F",
        "tier": "Alpha",
        "brierScore": "0.145",
        "ece": "2%",
        "viewpoint": "【2026.09.05 最新】美國龐大財政赤字推升長天期美債殖利率，美股大盤處於高估值泡沫邊緣；非農與通膨僵固使降息空間受限，對後市資產估值抱持高度審慎。",
        "stocks": [
            "AMZN",
            "GOOGL",
            "TSM"
        ],
        "entryPoint": "嚴格控制股票部位曝險，提升現金水位並偏向防禦性策略。",
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
        "viewpoint": "【2026.09.05 最新】強調信貸利差處於歷史低位，市場對無著陸與溫和降息過度定價。投資人應在市場樂觀時做好壓力測試，保持防禦性資產配置以因應潛在信貸擾動。",
        "stocks": [
            "HYG",
            "SPY",
            "OAK"
        ],
        "entryPoint": "增加防禦性短天期高品質債券配置，避免因追逐高收益而降低信貸標準。",
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
        "viewpoint": "【2026.09.05 最新】市場對9月季節性回檔及非農後降息路徑的過度焦慮已構成反向做多信號；預期美股在恐慌情緒消化後將重啟升勢，標普中長線維持看多。",
        "stocks": [
            "NVDA",
            "SPY",
            "IWM"
        ],
        "entryPoint": "善用9月因降息預期反覆導致的潛在拉回，積極逢低加碼優質成長股。",
        "instMatch": 4
    },
    {
        "name": "Jim Cramer",
        "avatar": "https://ui-avatars.com/api/?name=JC&background=e74c3c&color=fff",
        "market": "US",
        "type": "Retail Sentiment",
        "tier": "Inverse",
        "brierScore": "0.410",
        "ece": "12%",
        "viewpoint": "【2026.09.05 最新】非農就業數據使Fed降息預期陷入兩難，但NVDA仍是AI牛市定海神針；目前市場處於去偽存真階段，資金將高度集中於具實質算力支撐的龍頭股。",
        "stocks": [
            "NVDA",
            "AMD",
            "MSFT"
        ],
        "entryPoint": "逢NVDA拉回時分批承接，但應避開缺乏獲利與資本支出支撐的投機AI股。",
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
        "viewpoint": "【2026.09.05 最新】特斯拉核心價值在於即將發布的Robotaxi自動駕駛生態而非傳統車廠；同時堅信AI硬體剛性需求，持續於科技股回檔震盪中逢低增持TSLA與NVDA。",
        "stocks": [
            "TSLA",
            "NVDA",
            "PLTR"
        ],
        "entryPoint": "忽略短期非農與利率雜音，逢科技股震盪回調堅定加碼自動化與AI核心標的。",
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
        "viewpoint": "【2026.09.05 盤後】產業調查指出蘋果首款摺疊機預計9月發表但採晚發售策略、初期出貨700-800萬支；iPhone 18 Pro將導入台積電2nm與可變光圈；輝達重啟Rubin CPX推進長上下文推理，台積電SoIC封裝高速成長。",
        "stocks": [
            "台積電 2330",
            "鴻海 2317",
            "大立光 3008"
        ],
        "entryPoint": "布局台積電2nm/SoIC先進封裝受惠股及蘋果高階規格升級供應鏈。",
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
        "viewpoint": "【2026.09.05 盤後】摩根士丹利持續追蹤AI基礎設施與先進封裝，指出台積電COUPE與CPO技術為解決資料中心頻寬與功耗瓶頸關鍵；市場焦點已由題材轉向量產進度、客戶驗證與營收實質貢獻。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "鴻海 2317"
        ],
        "entryPoint": "檢驗CPO與先進封裝概念股的客戶驗證進度與實質營收貢獻度。",
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
        "viewpoint": "【2026.09.05 盤後】SEMICON展期指出三星延後1.4nm量產至2029年，台積電在埃米世代將處於無對手狀態並具強大定價權，預期2027資本支出上看千億美元；看好台廠AI私有化商機。",
        "stocks": [
            "台積電 2330",
            "聯發科 2454"
        ],
        "entryPoint": "聚焦台積電埃米技術定價權與私有AI模型部署受惠供應鏈。",
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
        "viewpoint": "【2026.09.05 盤後】指出AI進入落地與軍備競賽下半場，2026半導體維持超級循環；台積電無論ASIC或GPU皆為核心代工霸主。操作上靈活應對GB200與雲端資本支出變化，看好CPO矽光子技術變革與散熱電力硬體剛需。",
        "stocks": [
            "廣達 2382",
            "緯創 3231",
            "台達電 2308"
        ],
        "entryPoint": "著眼技術變革優勢股（CPO與散熱電力），並以台積電為核心防守配置。",
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
        "viewpoint": "【2026.09.05 盤後】SEMICON 2026展後深度剖析，指出光電共封裝(CPO)與矽光子整合進入工程驗證衝刺期，光互連技術將逐步取代傳統銅導線以突破千瓦伺服器散熱障礙。",
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
        "viewpoint": "【2026.09.05 盤後】指出CSP巨頭資本支出高成長帶動台灣AI供應鏈基本面強勁，台灣GDP與企業獲利動能充沛；但提醒股市乖離率偏大，面對美歐貨幣政策需防範「擁擠交易」帶來的市場高波動風險。",
        "stocks": [
            "台幣匯率",
            "富邦金 2881",
            "國泰金 2882"
        ],
        "entryPoint": "把握AI長期多頭趨勢，但須嚴控槓桿並提防市場擁擠交易帶來的短線劇烈震盪。",
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
        "viewpoint": "【2026.09.05 盤後】SEMICON展後外資目光聚焦台灣中小型半導體設備與特用化學供應鏈；重申大盤處於高檔震盪整理，建議分散配置至防禦型價值股與生技板塊避開單一科技股回檔風險。",
        "stocks": [
            "中小型潛力股",
            "生技醫療",
            "重電綠能"
        ],
        "entryPoint": "適度提高現金部位，並透過多元分散配置抵禦9月季節性波動。",
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
        "viewpoint": "【2026.09.05 盤後】聚焦8月營收最新數據與SEMICON 2026展後趨勢，指出AI運算帶動矽光子（CPO）降低能耗需求，以及GB200液冷散熱與漏液防護等關鍵零組件量產驗證，提醒投資人回歸實質營收成長。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "雙鴻 3324"
        ],
        "entryPoint": "回歸基本面檢視8月營收年增力道，並鎖定具液冷與CPO實質驗證之供應鏈。",
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
        "viewpoint": "【2026.09.05 盤後】SEMICON展後堅定看好AI真實需求，指出台股9月初震盪純屬高檔籌碼清洗非泡沫；看好第四季歷史高勝率行情，台股年底挑戰5萬點。重申手中1億元0050抱緊不賣，看好先進封裝與矽晶圓低基期股。",
        "stocks": [
            "0050",
            "環球晶 6488",
            "世芯-KY 3661"
        ],
        "entryPoint": "逢拉回布局低基期先進封裝與矽晶圓績優股，持股抱緊迎接第四季多頭行情。",
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
        "viewpoint": "【2026.09.05 盤後】9/4節目聚焦SEMICON Taiwan 2026落幕後供應鏈效應與8月營收前瞻，深度剖析台積電先進封裝（CoWoS）、矽光子/光通訊與高階PCB受惠題材，面對多空震盪建議掌握新箱型格局與高成長AI股。",
        "stocks": [
            "聯鈞 3450",
            "上詮 3363",
            "波若威 3163"
        ],
        "entryPoint": "留意8月營收績優股，並鎖定展後具基本面支撐的矽光子與先進封裝族群。",
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
