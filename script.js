const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 災後更新】雖然強勁就業數據引發降息預期落空與科技股重挫，但這完全符合我預測的「2026年三階段」短期陣痛期。短線回檔只是牛市中的正常顛簸，並未改變基本面。我依然維持標普500年底上看7,700點的目標。這波拋售反而為長線投資者提供了絕佳的佈局良機，不必因一時的震盪而恐慌。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "利用短期市場恐慌情緒逢低買入，鎖定年底目標價耐心持有。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 災後更新】這次由就業數據超預期引發的「好消息就是壞消息」市場修正，是利率預期重估的必然結果。然而，我們近期才將標普500目標價上調至8,300點。人工智慧的資本支出與企業獲利增長才是真正的長期驅動力。這次科技股的估值修正，正好消化了過熱的市場情緒，未來的本益比擴張將成為今年最大驚喜。",
        stocks: ["MSFT (微軟)", "AAPL (蘋果)", "GOOGL (Alphabet)"],
        entryPoint: "關注具有實質AI獲利能力的大型優質股，在估值合理時逐步建倉。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 災後更新】當前市場狂熱追逐晶片等「最新鮮事物」，讓我聯想到2000年的達康泡沫。6月5日的重挫只是資金過度集中的後遺症。我們應避免盲目追高概念股，而是回歸商業本質。我們專注於那些在AI時代佔據優勢且具備強大現金流的高品質企業。當市場因恐慌錯殺這些優質資產時，正是長線佈局的良機。",
        stocks: ["MSFT (微軟)", "META (Meta)", "AMZN (亞馬遜)"],
        entryPoint: "避開估值過高的熱門硬體股，買進現金流強勁且被市場忽視的優質科技巨頭。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06 災後更新】這次股市重挫印證了我的警告：AI驅動的高估值正形成類似網路泡沫的風險。危險不在於科技本身，而在於脆弱的金融結構。當投資者面臨流動性需求與債務壓力，被迫將「帳面財富」變現時，就會引發拋售。在宏觀層面，我們仍處於債務週期與地緣政治衝突的「大週期」中，投資人應保持高度警惕。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "透過黃金與國債等避險資產進行多元化配置，以防範流動性危機與結構性風險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06 災後更新】6月5日標普與納指的劇烈回調，反映了市場對降息的過度樂觀被強勁就業數據無情打破。我一直強調，美國龐大的債務規模與央行流動性緊縮，將導致市場極度脆弱。當前的高利率環境不容忽視，任何通膨重燃的跡象都可能成為壓垮市場的稻草。投資者絕不能忽視美國財政赤字帶來的長期結構性尾部風險。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "保持高度敏銳的宏觀視角，適度降低槓桿並聚焦於具備長期稀缺性的優質資產。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06 災後更新】市場將這次大跌稱為「崩盤」是過度反應了。根據我們的「六層蛋糕」AI基礎設施框架分析，這只是一次從AI半導體領頭羊向優質藍籌股的正常資金輪動。AI交易只是暫時喘息，這類5%至10%的溫和回撤，反而為市場提供了健康的消化空間。強勁的就業數據顯示經濟底氣仍在，這明確是一個買入機會。",
        stocks: ["TSMC (台積電)", "AMD (超微)", "AVGO (博通)"],
        entryPoint: "視5-10%的市場回調為買入良機，重點佈局AI產業鏈中被錯殺的核心基礎設施股。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 災後更新】儘管6月5日因Broadcom財測與高就業數據引發科技股暴跌，輝達單日重挫逾6%，但這不影響AI的長線需求。我正在台韓穩固供應鏈，已確認下半年產能翻倍。短期修正僅是情緒波動，AI基建剛性需求不變，我們將加速推進。",
        stocks: ["NVDA", "TSM", "ARM"],
        entryPoint: "趁市場恐慌時逢低佈局AI基礎建設核心標的，長期持有不隨短線波動起舞。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 災後更新】這次大跌不過是利率預期與AI泡沫擔憂的短線陣痛。當華爾街為就業數據與晶片財測驚慌時，SpaceX正準備迎接750億美元的歷史性IPO，並與Google深化合作。跨星系擴張遠勝股市跳動，缺乏護城河的公司終將淘汰。",
        stocks: ["TSLA", "GOOGL", "ASTS"],
        entryPoint: "無視短期總經數據干擾，專注投資具有壟斷性技術與顛覆性未來的硬核科技公司。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 災後更新】市場對就業數據產生嚴重誤判，將好消息視為壞消息。AI帶來的生產力爆發長期將抑制通膨。在6月5日的拋售中，ARK積極再平衡，減碼超漲的AMD，並大舉買進Pony AI與Kodiak AI。短期波動是逢低承接破壞性創新贏家的好時機。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "趁市場錯殺成長股時積極調倉。加碼具備顛覆性技術且估值合理的創新領域。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 災後更新】科技股血洗只是AI狂奔中的一次現實檢驗。Broadcom財測引發高估值股獲利了結，但絕非AI革命終點。儘管就業數據讓利率承壓，企業端AI支出仍在加速。這是汰弱留強的過程，蘋果等核心巨頭具強大防禦力，短線回調即黃金買點。",
        stocks: ["AAPL", "MSFT", "AVGO"],
        entryPoint: "將此次回調視為優質科技股的現實檢驗。鎖定具備強大現金流與AI變現能力的大廠買入。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 災後更新】華爾街正為科技股暴跌和聯準會利率哭天喊地，但大盤劇烈波動只是機構遊戲。我的目光緊盯GameStop，社群也期待我6月7日的動態。不管那斯達克跌多慘，只要散戶團結一致堅持信仰，我們就能在混亂中找到屬於我們的深層價值。",
        stocks: ["GME", "CHWY", "KOSS"],
        entryPoint: "無視大盤科技股的崩盤，專注於具備軋空潛力與強大散戶共識的特定迷因股。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 災後更新】科技股大屠殺太可怕了！Broadcom的財測加上過熱就業數據，這就是我警告過的殘酷市場！未能達標的高估值公司正受嚴厲懲罰。比特幣也跟著跳水，Saylor的拋售打擊了信心。現在應轉向防禦性股票和現金，別徒手接掉下來的刀子！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "避開未能達成高預期的AI概念股與高風險資產。立即將資金轉移至傳統防禦型價值股避險。"
    },
];

const twInfluencersData = [
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 災後更新】此次6月股災驗證了我先前對台股『末升段牛市』的示警。市場劇烈修正印證了『別賺最後一滴水』的鐵則。我早已全數出清股票，保持零持股避開殺盤。目前市場信心潰散，建議投資人切勿急於進場接刀。在明確止跌訊號出現前，應保持高度警戒並優先保留現金，靜待落底。",
        stocks: ["0050", "0056", "00878"],
        entryPoint: "保持空手或極低持股，靜待市場落底，優先保留現金水位。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 災後更新】這次股災是市場過熱後的必然修正，我先前就提醒過大家別太嗨。然而從產業基本面來看，半導體與AI供應鏈的長期成長動能依舊強勁，NVIDIA與台積電的競爭力未因暴跌而改變。投資人不應被外資目標價牽著走，這波殺盤洗清了浮額，現在正是檢視核心持股，專注於AI基礎設施的時刻。",
        stocks: ["2330", "2454", "2317", "2382"],
        entryPoint: "趁恐慌殺盤時，分批承接具備核心技術與穩定資本支出的半導體龍頭股。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06 災後更新】這波股災呼應了我對市場輪動與回調的預期，AI敘事正從巨頭領漲轉向實質獲利。從景氣投資法來看，半導體仍有強勁EPS支撐，這並非泡沫破裂而是估值修正。台灣在AI基礎建設扮演關鍵角色，只要總經數據未衰退，股災急跌就是長期景氣波段投資人的絕佳進場點，應趁機逢低分批佈局。",
        stocks: ["0050", "006208", "2330", "2382"],
        entryPoint: "運用景氣投資法，在市場恐慌急跌時分批佈局大盤市值型ETF與AI權值股。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 災後更新】台股崩跌印證了市場『完美定價』後的脆弱性。我先前已將持股降至三成以應對過熱風險。這次股災是估值的合理回歸，當股價脫離基本面，任何風吹草動都會引發震盪。投資人應重新計算合理股價，勿盲目抄底，維持股債平衡配置，鎖定具穩定現金流的科技龍頭，耐心等待安全邊際出現。",
        stocks: ["2330", "2308", "2412", "00679B"],
        entryPoint: "嚴守估值紀律與安全邊際，將資金平均配置於高殖利率優質股與避險美債。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 災後更新】這兩日的急殺僅是情緒過熱與槓桿過高引發的短期陣痛，絕非泡沫破裂。全球正處於AI基礎建設初期，長線多頭趨勢不變。雖然貨幣政策與地緣風險帶來波動，但台積電核心地位無可取代。不要因短期大跌恐慌殺出甚至拉高現金，回檔洗盤正是用合理價格上車的好時機，長線仍上看五萬點。",
        stocks: ["2330", "2454", "2317", "2603"],
        entryPoint: "無視短期波動，鎖定AI產業革命核心的台積電及相關供應鏈，逢低勇敢買進。"
    },
    {
        name: "杜金龍",
        style: "波浪理論",
        viewpoint: "【2026.06 災後更新】末升段狂飆後的急殺，完全符合我『高檔箱型整理』的預期。當融資過高、價量背離，回檔是必然。避開大空頭才是真功夫，這波急殺清理了過熱籌碼。從波浪理論來看，這是中級修正，整理期恐達數月。但回檔即是給散戶的禮物，應靈活操作，趁大跌挑選優質權值股買進，反彈時逢高調節。",
        stocks: ["2330", "2317", "2881", "2308"],
        entryPoint: "觀察融資減肥與技術指標落底訊號，採取大跌買進、上漲賣出的箱型操作。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06 災後更新】面對近期美股費半下挫引發的台指期夜盤狂瀉逾三千點，市場極度恐慌。但股市漲多必有技術修正，我們強調「跌時重質」，趁史詩級震盪正是檢視持股體質的好時機。巴菲特說別人恐懼你要貪婪，AI基本面未變，建議汰弱留強，資金轉往具備實質獲利的優質權值股，才能在風暴中持盈保泰。",
        stocks: ["2330", "2308", "2317"],
        entryPoint: "趁恐慌性殺盤時，分批承接長線獲利穩定的優質權值股。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 災後更新】台股從四萬六千點高檔回落，主要受美科技股財報影響，導致AI硬體股湧現獲利了結賣壓。這屬於漲多後的健康資金輪動，並非無差別崩盤。操作上切勿盲目追高殺低，應密切觀察五日線支撐與外資籌碼變化。建議避開漲幅過大的個股，尋找低檔轉強的機器人及矽光子概念股，防守兼備才能抓住機會。",
        stocks: ["1503", "1519", "2382", "3231"],
        entryPoint: "觀察大盤五日線支撐，拉回時布局低位階、有基本面護體的防守型個股。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06 災後更新】雖台股出現劇烈修正，但AI產業長線紅利與基本面需求依然強勁，多頭架構並未破壞。電腦展帶動的伺服器與AI商機真實存在，此次下殺是洗盤換手的絕佳時機。堅持基本面、籌碼面與技術面三合一選股，投資人勿信崩盤論，應鎖定獲利強的記憶體與AI供應鏈，逢低卡位法人布局的潛力股迎接反彈。",
        stocks: ["2408", "2344", "3260", "2376"],
        entryPoint: "鎖定AI供應鏈及記憶體族群，待法人籌碼沉澱且技術面落底後逢低布局。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06 災後更新】台指期夜盤創下狂瀉三千點的最大跌點，市場恐慌蔓延。但歷史統計六七月上漲機率高，這次急跌主要是AI熱潮後的短線籌碼換手。請嚴控資金部位，避免情緒性追殺。重點觀察電子龍頭權值股是否止穩及美股止跌訊號。資金有望輪動到轉機題材的重電與散熱族群，保持冷靜才能在危機中看見選股機會。",
        stocks: ["3324", "3017", "2330", "1503"],
        entryPoint: "嚴控資金水位，等待台積電等權值股止穩後，再介入散熱與重電轉機股。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 災後更新】大盤從高點急殺，震盪劇烈，技術分析不預設立場，一切以線圖說話！指數跌破短均線顯示空方力道強，務必嚴守停損停利紀律，果斷出場且不逆勢接刀。今年選股重於大盤，透過走圖研判，尋找維持「頭頭高、底底高」多頭排列的個股。大賺小賠是核心，耐心等待底部型態確立與轉折訊號出現後再進場。",
        stocks: ["2603", "2609", "2615"],
        entryPoint: "嚴守停損紀律，不預測低點，等待日K線出現「底底高」多頭轉折訊號再進場。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 災後更新】台股受國際科技股拖累與外資空單積壓，引發千點下殺。這巨幅波動正是期現貨雙刀流發揮的時機。多單務必做好部位控管與避險，切勿凹單；空手者可利用期權進行靈活操作。現貨方面，留意大盤是否在關鍵支撐收腳，等待籌碼清洗乾淨並配合操盤系統訊號，我們再順勢切入底部成型的強勢股。",
        stocks: ["2382", "2356", "3231", "2330"],
        entryPoint: "利用期貨選擇權避險，現貨待大盤關鍵支撐不破且籌碼沉澱後，順勢切入。"
    },
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
function calculateTopStocks(data, filterFn = null) {
    const counts = {};
    const filteredData = filterFn ? data.filter(filterFn) : data;
    filteredData.forEach(inf => {
        inf.stocks.forEach(stock => {
            counts[stock] = (counts[stock] || 0) + 1;
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
