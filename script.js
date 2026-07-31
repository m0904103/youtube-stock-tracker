
const usInfluencersData = [
    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=8e44ad&color=fff",
        market: "US",
        type: "AI Supply Chain",
        tier: "Alpha",
        brierScore: "0.15",
        ece: "2%",
        viewpoint: "【2026.08.01 最新】針對科技巨頭2026年龐大的AI資本支出，他認為雖耗盡營運現金流，但這些巨頭是史上最佳資本配置者，投資人應相信他們對AI的信念，別被華爾街的疑慮嚇倒。",
        stocks: ["NVDA", "AVGO", "AMPH"],
        entryPoint: "別因龐大的AI基礎設施支出而恐慌，應跟隨科技巨頭的長期佈局。",
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
        viewpoint: "【2026.08.01 最新】針對7月底FOMC會議，指出債市擔憂Fed可能為了安撫長天期債券而進行「預防性升息」。在通膨3-4%且AI未破壞就業下，Fed恐被債市恐慌逼迫升息。",
        stocks: ["SPY", "QQQ", "TLT"],
        entryPoint: "需警惕Fed為安撫長端債市而意外升息的風險，並預做債券部位調整。",
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
        viewpoint: "【2026.08.01 最新】針對昨日FOMC會議，指出油價飆升引發「惡性利率波動」，市場領先定價緊縮使Fed陷入被動。認為近期疲軟的通膨數據應足以支持「鷹派暫停升息」。",
        stocks: ["VIX", "SPX"],
        entryPoint: "面對地緣政治帶來的利率波動，應防範Fed被市場情緒綁架的政策風險。",
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
        viewpoint: "【2026.08.01 最新】近期報告顯示他大幅減持了台積電(TSM)部位。持續透過觀察新聞情緒與市場表現的背離來尋找轉折，並將部分資金轉向阿根廷能源板塊等宏觀機會。",
        stocks: ["IWM", "Commodities"],
        entryPoint: "當市場對AI情緒過熱時可適度獲利了結，並尋找其他宏觀價值窪地。",
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
        viewpoint: "【2026.08.01 最新】維持標普年底8000點目標，強調市場正經歷健康的輪動。近期科技股回檔屬於「獲利良好但價格下跌」的估值修正，資金正轉向具備定價能力的「AI應用端」企業。",
        stocks: ["SPY", "XLV", "XLP"],
        entryPoint: "逢低佈局已具備定價能力的「AI應用端」優質企業，迎接市場廣度擴展。",
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
        viewpoint: "【2026.08.01 最新】特斯拉Q2財報面臨獲利未達預期與負自由現金流，但他重申戰略重心，無懼短期財務壓力，將持續大規模投資於AI、機器人技術與Robotaxi基礎設施。",
        stocks: ["TSLA", "DOGE"],
        entryPoint: "在自動駕駛與AI領域需具備長期抗戰準備，承受短期現金流壓力。",
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
        viewpoint: "【2026.08.01 最新】趁近期財報季加碼Meta與台積電，減持亞馬遜與Alphabet。她重申不應過度擔憂短期通膨與Fed政策，應聚焦AI等創新技術帶來的長期通縮效應。",
        stocks: ["ARKK", "TSLA", "Roku"],
        entryPoint: "無視短期總經雜訊，專注於具備顛覆性技術且能帶來通縮效應的創新成長股。",
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
        viewpoint: "【2026.08.01 最新】針對近期科技股拋售，警告半導體板塊暴跌是由融資追繳與強制平倉驅動，已脫離財報基本面。呼籲將資金從AI晶片股輪動至銀行或工業等傳統板塊。",
        stocks: ["QQQ"],
        entryPoint: "避開面臨強制平倉壓力的擁擠AI交易，適時將資金輪動至傳統防禦性板塊。",
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
        viewpoint: "【2026.07.27 最新】近期指出AI伺服器與相關供應鏈營收年增率大於30%，成長動能強勁。針對市場對台積電的極高目標價，認為估值不應一體適用，多數法人是先射箭再畫靶。",
        stocks: ["台積電 2330", "聯發科 2454"],
        entryPoint: "投資人不應過度執著外資目標價，應獨立評估與觀察基本面數據。",
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
        viewpoint: "【2026.08.01 最新】認為AI非網路泡沫，台積電與輝達估值仍具吸引力；下半年看好光通訊CPO、高速傳輸介面與記憶體等受惠AI規格升級的硬體，看淡消費性電子復甦。",
        stocks: ["廣達 2382", "緯創 3231"],
        entryPoint: "建議在市場雜音中看清本質並穩健布局，聚焦具實質獲利與規格升級的AI硬體供應鏈。",
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
        viewpoint: "【2026.08.01 最新】強調台積電在先進製程與CoWoS的領先地位，看好AI從雲端訓練走向邊緣推論的大規模應用，並點名記憶體需求與矽光子CPO為關鍵技術。",
        stocks: ["矽光子", "CoWoS"],
        entryPoint: "關注具備實質獲利能力的AI供應鏈，特別是先進封裝與矽光子相關技術企業。",
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
        viewpoint: "【2026.08.01 最新】認為台股具備強大基本面支撐，CSP資本支出上修將持續帶動半導體需求；但也警告近期股市震盪加劇，過度融資容易導致大漲大跌。",
        stocks: ["台幣匯率", "金融股"],
        entryPoint: "在看好AI長線發展的同時，應嚴格控管融資槓桿操作以應對高檔震盪風險。",
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
        viewpoint: "【2026.08.01 最新】7月底專欄指出AI資料中心擴張帶動龐大電力需求，呼籲台灣及早布局小型模組化核反應爐(SMR)；針對股市則維持末升段牛市的保守觀點。",
        stocks: ["中小型潛力股"],
        entryPoint: "投資人可透過組合配置參與與AI發展息息相關的能源產業，並在股市末升段見好就收。",
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
        viewpoint: "【2026.08.01 最新】分析台積電Q2財報高資本支出引發毛利擔憂，AI市場進入獲利檢驗期；7月底台股歷經去槓桿清洗後，受惠科技巨頭財報釋疑而迎來歷史級反彈。",
        stocks: ["財報異常股"],
        entryPoint: "避開僅靠題材炒作的個股，專注於能在財報季繳出實質獲利成績的龍頭企業。",
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
        viewpoint: "【2026.08.01 最新】堅信AI並非泡沫，7月底台股大跌時豪擲億元抄底0050，並在隨後的大反彈中獲利千萬，看好台積電回測季線買點及台股長線表現。",
        stocks: ["投機熱門股"],
        entryPoint: "奉行別人恐懼我貪婪的策略在恐慌大跌時分批進場，但切勿使用槓桿型商品以防斷頭。",
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
        viewpoint: "【2026.08.01 最新】熱議7月底台股的劇烈震盪與史詩級反彈，認為恐慌情緒有望隨7月結束而消散；探討台積電股價來到甜甜價，持續關注AI資本支出的實質轉化效益。",
        stocks: ["當日漲停板"],
        entryPoint: "利用第二季財報公布期間進行汰弱留強，並在震盪中尋找績優股伺機卡位。",
        instMatch: 0
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
