
const usInfluencersData = [
    {
        name: "Dylan Patel (SemiAnalysis)",
        avatar: "https://ui-avatars.com/api/?name=DP&background=8e44ad&color=fff",
        market: "US",
        type: "AI Supply Chain",
        tier: "Alpha",
        brierScore: "0.15",
        ece: "2%",
        viewpoint: "【2026.07.28 最新】指出當前記憶體市場為『結構性短缺』而非暫時供需失衡，強調軟硬體『共同設計』是突破關鍵，透露 Anthropic 已於第二季實現正自由現金流。",
        stocks: ["NVDA", "AVGO", "AMPH"],
        entryPoint: "關注AI基礎設施瓶頸，逢低佈局記憶體相關標的，留意具備軟硬整合優勢之企業。",
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
        viewpoint: "【2026.07.28 最新】警告BofA牛熊指標已達9.6的極度樂觀水位，基金經理人現金降至3.6%觸發反向賣出訊號；『藍領半導體』指數自高點回落21%，軟著陸共識過於脆弱。",
        stocks: ["SPY", "QQQ", "TLT"],
        entryPoint: "市場情緒過度樂觀，建議採取反向操作，減碼科技與工業股，轉進防禦型與高股息資產。",
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
        viewpoint: "【2026.07.28 最新】形容當前利率市場出現『迷你恐慌』，警告中東局勢與油價飆升正引發通膨尾部風險；科技七雄已從『資本回報者』轉為『資本消耗者』。",
        stocks: ["VIX", "SPX"],
        entryPoint: "防範通膨預期重燃帶來的利率衝擊，並重新評估AI巨頭龐大資本支出的實質回報率。",
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
        viewpoint: "【長線資產配置】具備強大 Skin in the Game，長線關注通膨、生產力增長與實質利率變化，主導 18~24 個月戰略基調。",
        stocks: ["IWM", "Commodities"],
        entryPoint: "觀察其 13F 新增板塊（非單一個股），校準宏觀方向。",
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
        viewpoint: "【2026.07.28 最新】觀察到市場正經歷典型中期的『品質』輪動，半導體板塊已失去動能，資金應轉向AI應用能帶來明確利潤增長的銀行、醫療等產業。",
        stocks: ["SPY", "XLV", "XLP"],
        entryPoint: "避開漲多且動能衰退的半導體，轉進能實質受惠於AI應用並提升淨利率的非科技領域。",
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
        viewpoint: "【2026.07.28 最新】在Tesla第二季財報未達預期重挫後，強調公司正進行大規模資本支出以實現工業級擴張；預測AI將在五年內超越人類智慧，對SpaceX合併抱開放態度。",
        stocks: ["TSLA", "DOGE"],
        entryPoint: "面對短期財報壓力與資本支出大增，需耐心關注Tesla在機器人與AI應用的長期佈局。",
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
        viewpoint: "【2026.07.28 最新】趁SpaceX股價回落及Tesla財報大跌之際，逢低大幅加碼數千萬美元；同時透過獲利了結部分持股調整組合，維持對SpaceX可能成為全球最重要公司的信心。",
        stocks: ["ARKK", "TSLA", "Roku"],
        entryPoint: "秉持破壞性創新信念，在AI核心持股遇逆風時逢低承接，著眼長期顛覆性價值。",
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
        viewpoint: "【2026.07.28 最新】警告近日半導體拋售是由面臨保證金追繳的槓桿基金所引發的『怪物級』賣壓，擔憂華爾街對科技股過度集中，呼籲轉向金融與醫療等板塊。",
        stocks: ["QQQ"],
        entryPoint: "避開過度擁擠且槓桿過高的科技股，趁市場波動將資金分散至防禦性與傳產板塊。",
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
        viewpoint: "【2026.07.27 最新】指出科技巨頭仍依賴台積電，CoWoS吃緊本質為先進製程緊缺。認為AI賽局進入下半場，供應鏈雖處上升週期但有泡沫疑慮，呼籲操作需具備避險思維。",
        stocks: ["廣達 2382", "緯創 3231"],
        entryPoint: "在市場高檔震盪時不應盲目追價，需保留適度現金比重避險。",
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
        viewpoint: "【2026.07.27 最新】深度解析台積電晶背供電網路及先進封裝技術，探討矽光子與CPO技術在AI晶片傳輸效率的關鍵角色；同時關注台積電擴廠效應。",
        stocks: ["矽光子", "CoWoS"],
        entryPoint: "建議投資人持續關注先進封裝與矽光子技術的後續發展與潛在商機。",
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
        viewpoint: "【壽險資金動向】精準剖析聯準會貨幣政策對台美利差的影響，推演外資匯出入與台幣匯率走向。",
        stocks: ["台幣匯率", "金融股"],
        entryPoint: "作為台股系統性風險水位 (Beta) 調節閥，台幣面臨貶值時降槓桿。",
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
        viewpoint: "【外資建倉邏輯】了解國際被動資金 (ETF) 與主動型外資在台股中小型股的流動性偏好與 ESG 篩選標準。",
        stocks: ["中小型潛力股"],
        entryPoint: "尋找基本面優異但尚未被廣泛發掘的 Alpha 標的。",
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
        viewpoint: "【2026.07.27 最新】重點關注科技巨頭財報，檢視AI資本支出是否帶來實質獲利。分析地緣政治引發的估值修正，並看好受惠AI伺服器的PCB與記憶體族群。",
        stocks: ["財報異常股"],
        entryPoint: "應密切關注美國科技巨頭財報中的AI資本支出回報率以確認未來趨勢。",
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
        viewpoint: "【2026.07.28 最新】指出台股短中期底部已確立，長線看好。提醒投資人分辨真反彈與死貓跳，避免追高舊AI、CPO或PCB等短線漲多族群。",
        stocks: ["投機熱門股"],
        entryPoint: "建議長期持有市值型ETF(如0050)，或挑選基本面明確且處於低基期的個股。",
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
        viewpoint: "【2026.07.28 最新】聚焦台股震盪與量能急凍盤勢，探討矽光子等AI半導體供應鏈展望。提醒投資人在大盤回測時別把接刀當抄底。",
        stocks: ["當日漲停板"],
        entryPoint: "應觀察兩大反彈訊號確認止跌契機後再行布局，切勿在量縮震盪時盲目抄底。",
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
