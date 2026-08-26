
const usInfluencersData = [
    {
        "name": "Brent Kochuba (SpotGamma)",
        "avatar": "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        "market": "US",
        "type": "Options GEX & 0DTE",
        "tier": "Alpha",
        "brierScore": "0.075",
        "ece": "1%",
        "viewpoint": "【2026.08.25 最新】監測顯示NVDA財報前買權高度集中，做市商Gamma暴露極大。期權隱含波動率(IV)飆升，短天期期權Delta對沖將放大雙向波動，慎防業績落地後IV Crush與Vega修正。翻轉點精確位於$195.86，Call Wall集中於$220。若現貨保持於$195.86上方，造市商Long Gamma將鎖住波動率。",
        "stocks": [
            "NVDA",
            "SPY",
            "QQQ"
        ],
        "entryPoint": "現貨拉回至Zero Gamma ($195.86) 或 100 SMA 附近守穩可建構零成本 Collar 期權對沖。 [cite: 2, 6]",
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
        "viewpoint": "【2026.08.25 最新】聚焦8/26輝達財報與Jackson Hole央行年會共振。指出市場處於極端動量擁擠，做市商倉位將在業績落地後釋放流動性，需慎防回檔引發系統性連鎖去槓桿。壓制效能釋放，造市商動態對沖在財報前夕提供強勁現貨買盤。警惕9月季節性波動率VIX爆發風險。",
        "stocks": [
            "SPX",
            "VIX",
            "NVDA"
        ],
        "entryPoint": "利用隱含波動率(IV)高點進行對角期權價差操作，鎖定Vanna買盤反彈紅利。",
        "instMatch": 5
    }
,

    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=8e44ad&color=fff",
        market: "US",
        type: "AI Supply Chain",
        tier: "Alpha",
        brierScore: "0.15",
        ece: "2%",
        viewpoint: "【2026.08.26 最新】分析OpenAI自研推論晶片Jalapeño，NVDA在通用計算與全模態訓練上仍具霸權；Vera Rubin架構在AgentX任務展現30倍能效，軟硬協同為核心護城河。",
        stocks: ["NVDA", "AVGO", "AMPH"],
        entryPoint: "聚焦NVDA在全棧軟體生態與Rubin架構的技術護城河，關注雲端自研晶片份額變化。",
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
        viewpoint: "【2026.08.26 最新】稱NVDA財報影響力超越通膨數據，期權定價約7.8%隱含波動；盤前正Gamma提供波動率鉗制，財報公布後將引發Vanna與Charm資金流解鎖觸發單邊行情。",
        stocks: ["VIX", "SPX"],
        entryPoint: "密切監控財報公布後的Gamma釋放與突破方向，順應機械式資金流向進行動能跟隨。",
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
        tier: "Inverse",
        brierScore: "0.75",
        ece: "55%",
        viewpoint: "【2026.08.26 最新】8月連續逢低大舉加碼NVDA數千萬美元，同時減持AMD與Palantir以集中持倉；堅信AI基礎設施週期仍處極早期階段，展現對NVDA長期增長極高信心。",
        stocks: ["ARKK", "TSLA", "Roku"],
        entryPoint: "堅持破壞性創新投資思維，在市場震盪拉回時將資金集中配置於AI基礎設施龍頭。",
        instMatch: 0
    },
    {
        name: "Jim Cramer",
        avatar: "https://ui-avatars.com/api/?name=JC&background=c0392b&color=fff",
        market: "US",
        type: "Edutainment",
        tier: "Inverse",
        brierScore: "0.85",
        ece: "70%",
        viewpoint: "【2026.08.26 最新】稱NVDA財報為AI浪潮的公投，駁斥市場看空與競爭威脅，直言每年都有號稱超越NVDA的晶片但無實質威脅；呼籲投資人聚焦電力與算力交付進度。",
        stocks: ["QQQ"],
        entryPoint: "忽視短期雜音並堅定抱牢NVDA核心持股(Own it, don't trade it)，檢視電力交付。't trade it)，檢視電力交付。't trade it)。't trade it)。",
        instMatch: 0
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
        "viewpoint": "【2026.08.25 盤後】輝達因記憶體成本飆升擬調漲伺服器15%；台積電CoPoS玻璃基板量產時程落在2027下半年，市場預期有落差，非所有供應鏈均能受惠。，台積電 CoWoS 產能與 ABF 載板良率改善帶動 Blackwell NVL72 量產進度提前；iPhone 18 3nm 晶片備貨強勁。",
        "stocks": [
            "台積電 2330",
            "鴻海 2317",
            "欣興 3037"
        ],
        "entryPoint": "逢低布局 CoWoS 封裝與高階 18 層 ABF 載板龍頭，留意客製化 ASIC 板型變動。",
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
        "viewpoint": "【2026.08.25 盤後】半導體漲價循環確立，台積電先進製程與封裝報價續揚，全球四大CSP資本支出大增帶動台積電積極擴建12座前段廠與4座封裝廠。對台股 AI 伺服器供應鏈「加碼」評等，看好廣達、鴻海與緯創在 GB200 全機櫃出貨帶動下，Q3-Q4 營收將再創歷史新高。",
        "stocks": [
            "廣達 2382",
            "鴻海 2317",
            "緯創 3231"
        ],
        "entryPoint": "外資評等下調時反向逢低布局，鎖定伺服器組裝與水冷板龍頭。",
        "instMatch": 4
    }
,

    {
        name: "陸行之 (Andrew Lu)",
        avatar: "https://ui-avatars.com/api/?name=AL&background=2980b9&color=fff",
        market: "TW",
        type: "Semiconductor",
        tier: "Alpha",
        brierScore: "0.19",
        ece: "4%",
        viewpoint: "【2026.08.26 盤後】關注輝達即將公布之財報能否在記憶體漲價下守住75%毛利率，並警示Rubin Ultra若降規減少HBM容量對供應鏈影響，提醒留意庫存月數與CoWoS動能。",
        stocks: ["台積電 2330", "聯發科 2454"],
        entryPoint: "財報公布前夕切忌盲目追高，應緊盯毛利率指引與庫存月數變化。",
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
        viewpoint: "【2026.08.26 盤後】認為AI行情未見頂且獲利有撐，但當前最短料瓶頸已由GPU晶片轉向「電力」供應；建議關注算力基礎設施，鎖定電力概念股與下世代光通訊/CPO矽光子。",
        stocks: ["廣達 2382", "緯創 3231"],
        entryPoint: "布局重心由單純GPU轉向電力供應鏈與CPO矽光子技術變革。",
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
        viewpoint: "【2026.08.26 盤後】預期企業獲利強勁支撐台股長線，CSP巨頭AI資本支出持續爆發，台灣為供應鏈重組最大受惠者；但降息路徑偏審慎且市場乖離率高，注意波動常態化。",
        stocks: ["台幣匯率", "金融股"],
        entryPoint: "肯定AI長線多頭但須留意高乖離波動，避免過度槓桿並做好資產配置。",
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
        viewpoint: "【2026.08.26 盤後】輝達財報為AI景氣溫度計，市場預期營收高成長，聚焦資料中心與新平台放量進程；持續追蹤台積電先進製程/CoWoS與廣達、鴻海伺服器市況。",
        stocks: ["財報異常股"],
        entryPoint: "以財報實質數據與法說展望為依據，嚴守紀律動態調整AI持股組合。",
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
        tier: "Inverse",
        brierScore: "0.78",
        ece: "65%",
        viewpoint: "【2026.08.26 盤後】堅定看好台股長線趨勢，解讀盤面量縮為三角收斂醞釀期而非崩盤；認為輝達AI已轉化為實質獲利，財報前後若遇震盪皆為逢低布局良機。",
        stocks: ["投機熱門股"],
        entryPoint: "震盪拉回不殺低不做空，逢回積極布局市值型ETF與權值核心。",
        instMatch: 0
    },
    {
        name: "錢線百分百 (非凡財經)",
        avatar: "https://ui-avatars.com/api/?name=錢&background=c0392b&color=fff",
        market: "TW",
        type: "Retail Hype",
        tier: "Inverse",
        brierScore: "0.72",
        ece: "50%",
        viewpoint: "【2026.08.26 盤後】8/26解盤聚焦AI資料中心升級推升之CPO矽光子量產商機，探討FAU光纖陣列模組與光互連題材；台積電呈現區間震盪，資金於高階電子與補漲股輪動。",
        stocks: ["當日漲停板"],
        entryPoint: "把握CPO矽光子量產受惠股，並於台積電區間下緣採分批低接策略。",
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
