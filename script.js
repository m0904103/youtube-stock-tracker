
const usInfluencersData = [
    {
        "name": "Brent Kochuba (SpotGamma)",
        "avatar": "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        "market": "US",
        "type": "Options GEX & 0DTE",
        "tier": "Alpha",
        "brierScore": "0.075",
        "ece": "1%",
        "viewpoint": "【2026.11.09 最新】暗池 DIX 達 42.4%、GEX 為 0.49B 美元；NVDA 現價 186.64 美元精準守住 200 日年線 (204.67)，隨 AMD 財報超預期與選舉不確定性落地，造市商回補看漲期權 Gamma 助推晶片股反彈。",
        "stocks": [
            "NVDA",
            "AMD",
            "QQQ"
        ],
        "entryPoint": "NVDA 守穩年線 204.67 美元為機構鐵底，突破 Zero-Gamma 212.9 美元確認右側強勢。",
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
        "viewpoint": "【2026.11.09 最新】VIX 指數維持於 25.64、SKEW 達 153.55；事件風險（選舉與科技巨頭財報）過後，隱含波動率 (IV) 快速回落將觸發強勁的 Vanna 與 Charm 正向買盤回補，有利標普與納指延續修復行情。",
        "stocks": [
            "SPX",
            "VIX",
            "NVDA"
        ],
        "entryPoint": "事件落地後 IV Crush 啟動做市商買盤，順勢持有核心算力龍頭。",
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
        "viewpoint": "【2026.11.09 最新】AMD Q3 數據中心營收暴增 97% 且預告 2027 伺服器營收翻倍，加上台積電於亞利桑那簽下 25 年 1.88GW 電力長約、Meta 發債獲 580 億美元認購，證實上游晶片與網通（NVDA/TSM/AMD/ANET）訂單能見度直達 2027 年。",
        "stocks": [
            "NVDA",
            "TSM",
            "AMD",
            "ANET"
        ],
        "entryPoint": "聚焦賣鏟子的上游晶圓代工與算力霸主（TSM 現價 375.44、NVDA 186.64），回測年線即為機構長線買點。",
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
        "viewpoint": "【2026.11.09 最新】標普 SPX (7376.86) 守住 CTA 長線多空觸發線 (7325)，前期洗盤已清理過度擁擠的短線槓桿部位；隨費半指數強彈 3%，量化趨勢基金重新轉為淨買入。",
        "stocks": [
            "SPX",
            "SOXX",
            "NVDA"
        ],
        "entryPoint": "以 SPX 7325 與季線為多空分水嶺，嚴禁高倍槓桿，採現股波段配置。",
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
        "viewpoint": "【2026.11.09 最新】大型科技股舉債擴張 AI 資本支出推升長債殖利率溢價，選股必須嚴格區分「燒錢買算力的下游」與「具備自由現金流與定價權的上游（TSM、AMZN AWS、NVDA）」。",
        "stocks": [
            "TSM",
            "AMZN",
            "NVDA"
        ],
        "entryPoint": "持有高自由現金流與電力/算力壟斷護城河企業，保留充足現金彈性。",
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
        "viewpoint": "【2026.11.09 最新】Meta 高評級美元債獲 580 億美元超額認購但利差走闊，顯示信貸市場資金充沛但風險定價趨嚴；提醒投資人「永遠不要因為使用槓桿而在黎明前倒下」。",
        "stocks": [
            "HYG",
            "SPY",
            "AMZN"
        ],
        "entryPoint": "堅持零槓桿或低槓桿現股配置，以高現金部位確保波段容錯率。",
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
        "viewpoint": "【2026.11.09 最新】美股三大指數止步連跌、費半大漲 3%，加上 JOLTS 職位空缺回暖且裁員創一年新低，企業獲利（AMD、ANET、SMCI 全面超預期）將驅動年底傳統旺季行情。",
        "stocks": [
            "NVDA",
            "AMD",
            "SPY",
            "IWM"
        ],
        "entryPoint": "把握財報季與選舉落地後的右側轉強訊號，分批布局 AI 與羅素 2000。",
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
        "viewpoint": "【2026.11.09 最新】市場對 AI 資本支出回報率的擔憂在 AMD 與 Arista 亮眼財報後大幅緩解，資金重新追捧算力硬體與雲端龍頭。",
        "stocks": [
            "NVDA",
            "AMD",
            "AMZN"
        ],
        "entryPoint": "切勿在盤後暴漲時盲目追高，等待拉回均線支撐再行分批布局。",
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
        "viewpoint": "【2026.11.09 最新】SpaceX 推進地面行動通訊網路與太空軍發射任務，結合特斯拉實體 AI 與自駕生態，太空經濟與代理型 AI 將迎來指數級成長。",
        "stocks": [
            "SPCX",
            "TSLA",
            "PLTR"
        ],
        "entryPoint": "以零槓桿現股長線持有太空與顛覆性創新核心資產。",
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
        "viewpoint": "【2026.11.09 最新】供應鏈調查顯示 AI 伺服器機櫃（Blackwell / Helios）與 800G/1.6T 光模組出貨動能強勁，台積電先進封裝與 2nm 產能持續滿載，昨日台股非理性急殺創造極佳長線價值區。",
        "stocks": [
            "台積電 2330",
            "鴻海 2317",
            "廣達 2382"
        ],
        "entryPoint": "台積電現貨 (2135.0元) 大幅折價於 ADR (+15.3%)，靜待開盤跳空止跌收腳。",
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
        "viewpoint": "【2026.11.09 最新】摩根士丹利指出 AMD 資料中心營收翻倍與美系雲端大廠發債擴充算力，直接受惠者皆為台灣晶圓代工、AI 伺服器 ODM 與散熱供應鏈。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "奇鋐 3017"
        ],
        "entryPoint": "鎖定三率三升且受惠美系 CSP 資本支出上調之核心硬體龍頭。",
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
        "viewpoint": "【2026.11.09 最新】無論輝達、AMD 或雲端大廠自研 ASIC 晶片誰勝出，100% 皆須由台積電先進製程代工；台積電簽下亞利桑那 25 年 1.88GW 供電長約，長線壟斷地位無可撼動。",
        "stocks": [
            "台積電 2330",
            "聯發科 2454"
        ],
        "entryPoint": "台積電 ADR (375.44美元) 溢價高達 +15.3%，現貨逢恐慌錯殺堅定抱牢。",
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
        "viewpoint": "【2026.11.09 最新】美股費半強彈 3%、SMCI 與 Arista 財測大舉上修，破除市場對 AI 硬體拉貨放緩的謠言；台股昨日爆量下影線完成籌碼換手，將迎來強勢修復。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "台達電 2308"
        ],
        "entryPoint": "觀察季線生命線支撐與爆量換手紅K，不追高、分批穩健持有。",
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
        "viewpoint": "【2026.11.09 最新】Arista 財報創歷史最高增速，加上磷化銦襯底與光模組長單湧現，證實 AI 叢集擴張正全面引爆 800G/1.6T 光通訊與 CPO 矽光子剛性需求。",
        "stocks": [
            "日月光投控 3711",
            "訊芯-KY 6451",
            "上銓 3363"
        ],
        "entryPoint": "聚焦具備實質封測產能與營收貢獻之光通訊及先進封裝領導廠。",
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
        "viewpoint": "【2026.11.09 最新】美元兌台幣位於 32.78 附近，隨美股科技財報報喜與中東緊張降溫，外資期現貨提款壓力減輕；建議投資人維持充沛現金流、避免融資高槓桿以應對匯率與國際盤波動。",
        "stocks": [
            "台幣匯率",
            "00406A",
            "富邦金 2881"
        ],
        "entryPoint": "白天外匯盤分批換匯鎖定匯差，股票部位嚴守低槓桿與高現金紀律。",
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
        "viewpoint": "【2026.11.09 最新】台股急跌後外資重新審視基本面與本益比，具備高殖利率與實質 AI 獲利保護的權值股及主動型收益 ETF 將優先獲得法人回補。",
        "stocks": [
            "台積電 2330",
            "00406A",
            "防禦型價值股"
        ],
        "entryPoint": "保留高比例現金防禦，等待市場量縮止穩或爆量收腳訊號。",
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
        "viewpoint": "【2026.11.09 最新】透過三率三升（毛利率、營益率、淨利率同步成長）量化篩選，台積電、奇鋐與廣達等 AI 基建核心股基本面依然強悍，短線系統性修正後投資價值浮現。",
        "stocks": [
            "台積電 2330",
            "奇鋐 3017",
            "廣達 2382"
        ],
        "entryPoint": "堅持三率三升基本面護城河，配合季線 MA60 與 KD 止跌訊號操作。",
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
        "viewpoint": "【2026.11.09 最新】昨日台股爆量重挫純屬非理性恐慌清洗浮額，隨美股費半大漲 3% 與 AMD 盤後狂飆，台股將迎來強勁報復性反彈，權值股與 ETF 絕不殺低！",
        "stocks": [
            "0050",
            "台積電 2330",
            "鴻海 2317"
        ],
        "entryPoint": "恐慌爆量底部切勿砍在阿呆谷，靜待反彈收復均線。",
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
        "viewpoint": "【2026.11.09 最新】聚焦美股 AI 財報大驚喜（AMD、SMCI、Arista）與台積電 ADR 高溢價（+15.3%）對台股開盤的激勵效應，鎖定率先站回均線的 AI 權值與散熱光通訊族群。",
        "stocks": [
            "台積電 2330",
            "鴻海 2317",
            "奇鋐 3017"
        ],
        "entryPoint": "開高勿盲目追價，以買進日低點與季線作為波段防守依據。",
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
