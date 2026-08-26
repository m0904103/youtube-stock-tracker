
const usInfluencersData = [
    {
        "name": "Brent Kochuba (SpotGamma)",
        "avatar": "https://ui-avatars.com/api/?name=BK&background=00f0ff&color=fff",
        "market": "US",
        "type": "Options GEX & 0DTE",
        "tier": "Alpha",
        "brierScore": "0.075",
        "ece": "1%",
        "viewpoint": "【2026.08.27 盤後】盤後拉升帶動IV Crush（隱含波動率崩跌），做市商在財報前壓抑的Gamma空頭回補，觸發大盤與NVDA期權鏈向上重定價，空頭擠壓效應顯著。",
        "stocks": [
            "NVDA",
            "SPY",
            "QQQ"
        ],
        "entryPoint": "建議逢IV驟降獲利了結近月價外Call，轉向逢回拉回布局遠月牛市價差。",
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
        "viewpoint": "【2026.08.27 盤後】市場重倉Long Call引發做市商Short Call對沖，盤後大漲雖觸發Charm與Vanna買盤，但隨波動率溢價快速收縮，需警惕流動性消退後的衝高回落。",
        "stocks": [
            "SPX",
            "VIX",
            "NVDA"
        ],
        "entryPoint": "不宜追高末日買權，建議利用隱含波動率潰縮進行期權收租或價差鎖利。",
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
        "viewpoint": "【2026.08.27 盤後】Blackwell產能與良率順利放量，GB200機櫃出貨強勁推升毛利率表現，軟硬體共研與CUDA生態壁壘堅固，客製化ASIC短期內難以撼動其王者地位。",
        "stocks": [
            "NVDA",
            "TSM",
            "AVGO"
        ],
        "entryPoint": "持續做多輝達及先進封裝、高速傳輸等核心AI供應鏈標的。",
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
        "viewpoint": "【2026.08.27 盤後】財報利多落地消除市場重大尾部風險，盤後漲勢化解期權跨式定價壓力，波動率重置將觸發CTA與波動率目標基金等系統性資金進行大規模再平衡回補。",
        "stocks": [
            "SPX",
            "CTA Triggers",
            "NVDA"
        ],
        "entryPoint": "順應波動率壓降帶來的系統性買盤，維持短線做多科技權值股策略。",
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
        "viewpoint": "【2026.08.27 盤後】輝達財報證實AI雲端巨頭獲利轉化能力，維持重倉亞馬遜、Alphabet與台積電等AI終端落地買家，對硬體設備維持動態獲利了結與資產輪動。",
        "stocks": [
            "AMZN",
            "GOOGL",
            "TSM"
        ],
        "entryPoint": "順應AI紅利向雲端巨頭與數位基建擴散趨勢，維持靈活資產輪動。",
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
        "viewpoint": "【2026.08.27 盤後】輝達亮眼財報消除短期疑慮，但市場仍處於高估值週期。在樂觀情緒蔓延時應堅持基本面定錨，避免因FOMO（錯失恐懼）追逐過度槓桿。",
        "stocks": [
            "HYG",
            "SPY",
            "OAK"
        ],
        "entryPoint": "嚴守風險紀律，維持適度防禦性高收益債與現金水位，不盲目追高。",
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
        "viewpoint": "【2026.08.27 盤後】輝達強勁指引粉碎AI泡沫疑慮，成功掃除下半年市場關鍵障礙，算力需求維持不墜，確立標普500指數持續挑戰新高的多頭主升浪。",
        "stocks": [
            "NVDA",
            "SPY",
            "IWM"
        ],
        "entryPoint": "逢任何盤中拉回皆是進場時機，全力做多AI半導體與雲端概念股。",
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
        "viewpoint": "【2026.08.27 盤後】財報與指引再度證明輝達是AI基礎建設無可替代的龍頭，直接打臉市場空頭與供應鏈悲觀論調，再次印證『Own it, don't trade it』。",
        "stocks": [
            "NVDA",
            "AMD",
            "MSFT"
        ],
        "entryPoint": "抱緊現貨切勿輕易波段進出，長期享受AI超級週期紅利。",
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
        "viewpoint": "【2026.08.27 盤後】財報確認AI硬體擴張週期仍在初期階段，算力資本支出需求強勁，驗證回檔加碼策略正確，長期算力將進一步外溢至下游軟體應用端。",
        "stocks": [
            "NVDA",
            "TSLA",
            "PLTR"
        ],
        "entryPoint": "維持AI核心硬體配置，並伺機逢低增持具高增長潛力的AI應用標的。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達產品策略轉向雙晶片架構，台積電CoWoS-L封裝需求成為主流，AI需求長線強勁，但GB200高功耗散熱考驗短期量產爬坡速度。",
        "stocks": [
            "台積電 2330",
            "鴻海 2317",
            "雙鴻 3324"
        ],
        "entryPoint": "聚焦CoWoS-L與液冷散熱關鍵供應商，避開轉換期受壓族群。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達強勁財報鞏固AI需求，台積電先進製程與CoWoS封裝產能維持滿載為最大受惠者，重申台積電優於大盤評級與長期結構性成長。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "鴻海 2317"
        ],
        "entryPoint": "持續長線布局台積電及具技術壁壘的先進封裝核心供應鏈。",
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
        "viewpoint": "【2026.08.27 盤後解讀】提醒市場關注財報指引與預期差，毛利率雖處高檔但需留意成本壓力，若庫存月數攀升需警戒利多出盡與回檔風險，焦點在Blackwell放量節奏。",
        "stocks": [
            "台積電 2330",
            "聯發科 2454"
        ],
        "entryPoint": "留意毛利率與庫存天數變化，切勿盲目追高，靜待籌碼沉澱。",
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
        "viewpoint": "【2026.08.27 盤後解讀】認為AI軍備競賽步入下半場，需警戒GB200出貨遞延、獲利缺乏大幅上修空間及ASIC競爭加劇，操作上嚴守紀律，降低高估值硬體曝險。",
        "stocks": [
            "廣達 2382",
            "緯創 3231",
            "台達電 2308"
        ],
        "entryPoint": "嚴守紀律不跟股票談戀愛，逢高調節並檢視長期護城河。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達最新伺服器財報凸顯資料中心功耗暴增，矽光子(CPO)與台積電SoIC封裝將加速導入，解決銅線傳輸之物理散熱極限。",
        "stocks": [
            "上銓 3363",
            "訊芯-KY 6451",
            "日月光投控 3711"
        ],
        "entryPoint": "聚焦具備矽光子CPO封測與光學元件實質量產能力的瓶頸受惠股。",
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
        "viewpoint": "【2026.08.27 盤後解讀】CSP資本支出狂飆推動台灣供應鏈與企業獲利強勁成長，但台股高檔乖離率已大，面臨產業K型分化與高利率環境，需居安思危防範震盪。",
        "stocks": [
            "台幣匯率",
            "富邦金 2881",
            "國泰金 2882"
        ],
        "entryPoint": "長線受惠AI大趨勢，但短線乖離過高應嚴控槓桿、避免追高。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達財報帶動台美股短線狂歡，但警惕末升段資金極端集中於權值股，提醒逢高分批獲利了結並轉向生技與傳產防禦板塊。",
        "stocks": [
            "中小型潛力股",
            "生技醫療",
            "重電綠能"
        ],
        "entryPoint": "建議適度提高現金比率避險，並將資金轉向非電補漲族群。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達財報展現強勁動能，台積電CoWoS產能擴充與GB200放量直接挹注組裝與散熱族群，後續應緊盯CSP自由現金流與實際指引落差。",
        "stocks": [
            "台積電 2330",
            "廣達 2382",
            "鴻海 2317"
        ],
        "entryPoint": "檢視供應鏈營收兌現能力與評價位階，依循財務基本面操作。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達財報超預期印證AI迎來十年大爆發，台股震盪洗盤皆為逢低布局良機，看好具實質業績保護之先進封裝與伺服器族群。",
        "stocks": [
            "0050",
            "環球晶 6488",
            "世芯-KY 3661"
        ],
        "entryPoint": "拉回即是買點，嚴控槓桿並分批布局台積電與0050。",
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
        "viewpoint": "【2026.08.27 盤後解讀】輝達亮眼財報帶動台股反彈，但市場高度預期下波動加劇，需留意雲端大廠資本支出延續性與融資水位，慎防盤中震盪與追高風險。",
        "stocks": [
            "聯鈞 3450",
            "上銓 3363",
            "雙鴻 3324"
        ],
        "entryPoint": "開盤切忌盲目追高，採取逢回低接或配置指數型ETF。",
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
