const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.16 盤前備戰】美伊和平協議消除了尾部風險。尾盤雖獲利了結，但這只是牛市中的健康回檔。VIX 崩跌將吸引更多資金，標普年底上看 6500 點。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "逢低買進，不要被短線洗盤震出局。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.16 盤前備戰】經典的『買預期，賣事實』。和平利多已完全反映，基本面無法支撐過高估值。下半年的流動性收緊才是真正的考驗。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "轉向防禦型類股，減少科技股曝險。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.16 盤前備戰】中東降溫緩解能源壓力，給聯準會更多降息空間。市場尾盤下殺是因為短期部位過度擁擠。我們已調整對通膨的長期避險部位。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "關注受惠於利率下降的基建與房地產板塊。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.16 盤前備戰】和平協議是歷史性一刻，但不能忽視美國龐大債務。大國博弈本質未變，多元化資產配置依然是保護財富的唯一方式。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "維持黃金與抗通膨資產的配置比例。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.16 盤前備戰】市場對地緣反應短暫。AI 基礎設施建置是十年大趨勢，不因和平協議改變。如果輝達回檔，那就是絕佳加碼點。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "抱緊 AI 龍頭，無懼短期波動。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.16 盤前備戰】散戶瘋狂湧入，聰明錢無情倒貨，這是教科書級的假突破。標普在 5600 點遇強大阻力，技術面有深度回調風險。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "嚴格設置停損，短期可嘗試小注做空。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.16 盤前備戰】Vera晶片與代理式AI將引領下一波工業革命。和平的宏觀環境有利於全球資料中心的加速建置，算力的需求遠大於供給。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "NVDA 是推動未來十年創新的核心。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.16 盤前備戰】Peace is profitable, but humanity's future is in the stars. SPCX 展現了太空板塊的韌性，X 平台流量創下新高。Doge 到月球！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "買進改變人類未來的資產（還有Doge）。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.16 盤前備戰】國防預算可能削減，將促使政府將資金轉向太空探索與新一代AI。SPCX 展現抗跌韌性，證明破壞性創新是引領未來的核心。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "專注於顛覆性創新，放眼五年百倍回報。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.16 盤前備戰】華爾街對『利多出盡』擔憂太短視。第四次工業革命正在發生，軟體與晶片需求剛性。和平紅利將促使企業釋放IT預算。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "趁回檔用力撿 AI 相關科技軟體股。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.16 盤前備戰】Hang in there. 市場想在FOMC前把我們洗下車！我喜歡這支股票。SPCX真的要上月球了！守住防線，鑽石手！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "HODL，用鑽石手對抗機構洗盤。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.16 盤前備戰】和平！這是多麼棒的消息！尾盤科技股被錯殺，但你們必須看到消費類股潛力！不要被悲觀主義者嚇倒，重新佈局偉大美國企業！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "買進被低估的藍籌股！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.16 盤前備戰】技術面上，標普昨晚留下了難看的上影線，這是短線過熱後的典型獲利了結。今晚FOMC前不宜過度追高，保持現金彈性。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "設定移動停利點，不建議在此位階建立新多頭。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.16 盤前備戰】這波軋空加上獲利了結完全在劇本內。中東穩定給了市場信心，但外資昨晚被迫追高後反向操作，今晚FOMC預計有大幅震盪。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "利用盤中震盪低接伺服器散熱與網通板塊。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.16 盤前備戰】輝達Vera晶片算力革命加上地緣風險解除。外資雖在尾盤獲利了結，但紛紛上調輝達目標價。FOMC若偏鴿，美股開盤還有戲。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "鎖定美股AI巨頭，抱牢強勢股。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.16 盤前備戰】哈囉大家！昨天科技股開高走低，顯示短線漲幅太驚人引發獲利了結。今晚要看Warsh在FOMC的態度，大家保持理智喔！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "挑選基本面好的AI二線股，等待輪動。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.16 盤後解析】各位好，今天台股走勢很教科書，主力藉著美股弱勢順勢洗盤。今晚要看Warsh的FOMC談話，今天留下影線是好事，多頭格局沒破壞。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "靜待FOMC結果，多看少做。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.16 盤後解析】美股殺尾盤，但台股今天展現抗跌韌性。台積電的基本面與5月營收是最大底氣。資金在FOMC前趨於保守，這提供我們長線佈局的良機。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "台積電回檔分批佈局，配合成交量判斷信心。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.16 盤後解析】雖然美股科技股回檔，但台積電今日強勢收復失土。CoWoS與Vera晶片需求排到2027年，基本面與短線情緒背離，正是逢低買進的好時機。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "台積電回檔第一批，再跌再加碼。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.16 盤後解析】投資朋友，目前總經數據顯示仍在景氣擴張期，美股昨晚震盪只是雜音。這種階段優質資產就是要死抱不放，千萬別被短線洗盤洗出場！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "買進大盤ETF，死抱不放。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.16 盤後解析】美股殺尾盤印證了我們對估值的擔憂。台股今天雖然開低走高，但仍需等待FOMC釋出明確訊號。台積電守穩是重入市的條件之一。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "維持等待策略，FOMC前不輕易動用現金。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.16 盤後解析】美伊停火協議對油價的壓抑效應正在發酵。台股今天開低走高的洗盤，顯示內資信心仍強，但外資動向與今晚的美元走勢將是關鍵轉折。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "觀察美元指數是否回落與外資期貨空單變化。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.16 盤後解析】美股重挫殺尾，波浪理論持續應驗！台股今日雖有抵抗，但第四波修正可能仍在進行。底部地圖不變，台積電回檔就是分批建立部位的時機。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "底部地圖不變，台積電回檔分批買進。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.16 盤後解析】觀眾朋友晚安！今天台股洗盤非常劇烈，美股殺尾盤導致早盤恐慌，但台積電強勢穩住陣腳，大盤微幅收紅！接下來全市場都在盯著今晚FOMC。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "密切關注美股FOMC表現，留意中小型股接棒。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.16 盤後解析】資金明顯轉入營建與防禦型板塊！美股科技股的獲利了結賣壓讓資金尋找『高股息+低本益比』避風港。台積電今日強勢抗跌，但電子股操作需謹慎。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "防禦型配置成為避風港，電子股回檔有低接才布局。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.16 盤後解析】美股費半大跌，但記憶體族群基本面並未改變。今天台股開低走高，顯示HBM需求強勁。等大盤底部確立後，記憶體族群將是率先反彈的板塊。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "建立記憶體觀察清單，底部確立後優先進場。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.16 盤後解析】外資期貨空單依舊高掛！今日現貨賣壓雖有減輕，但美股殺尾盤仍讓市場警戒。如果明天外資賣超能進一步縮減，才可視為賣壓趨緩的轉折訊號。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "外資空單仍高，等賣超大幅縮減才考慮小量試單。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.16 盤後解析】同學們，今天這根K棒叫做『探底神針』！昨天教過大家的，均線糾結後一旦突破就會有大行情。今天有按紀律在支撐位買進的，恭喜大家！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "遵守技術分析，突破買進。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.16 盤後解析】期貨操作就是要靈活！美股殺尾盤讓我們空單大幅獲利。今天台股開低走高，空方倉位可部分獲利了結。今晚FOMC是不確定因素，短線轉為觀望。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "空單獲利了結，觀察台積電量能再決定方向。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.16 盤後解析】美股殺尾盤，台股月線保衛戰！今日台股開低走高，展現強大韌性。但外資空單高掛加上FOMC變數，五重利空壓力仍在，填息速度是多頭最關鍵指標！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "FOMC前保守操作，觀察台積電除息後續量能。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.16 盤後解析】我就說嘛！美股殺尾盤算什麼，台股今天開低走高就是給你上車的機會！你看台積電這走勢，買在起漲點才是贏家，哲哲幫你準備好了下一檔飆股！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "逢低重押折折概念股。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.16 盤後解析】各位同學，今天這種開低走高的洗盤，正是過濾浮額的最佳時機。外資程式交易在關鍵支撐位啟動了護盤。掌握好籌碼流向，就能在這波洗盤中存活。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "順勢交易，跌破今日K線低點前持續看多。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.16 盤後解析】美伊協議降低了油價上行風險，全球通膨預期降溫。雖然短線有獲利了結，但資金從避險美元流出，對新興市場與台股的資金面是中長期的結構性利多。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "大循環指標向上，逢低布局新興市場與台股大盤。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.16 盤後解析】今天盤勢就那樣啊，美股跌台股跟著抖一下，然後又拉起來。其實不用太在意一兩天的漲跌，看好你的部位，沒破壞邏輯就放著，整天想著抄底逃頂很累的。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "買大盤ETF，好好睡覺。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.16 盤前備戰】美股殺尾盤反映了資金高檔換手。從財報數據來看，台灣供應鏈下半年能見度依然極高。和平協議有助降低航運與原物料成本，毛利率有望進一步提升。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "關注財報優異且本益比合理的台股隱形冠軍。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.16 盤後解析】台股今天強勢抗震，存股族該下車嗎？我們強調穩健投資，高股息ETF和績優台積電還是核心配置。美股殺尾盤只是雜音，打造現金流才是王道。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "維持定期定額紀律，逢低買進高息ETF。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.16 盤後解析】今日台股展現無與倫比的抗跌力道，雖然外資籌碼偏空，但內資護盤積極。這股資金外溢效應將持續推升中小型股。我們必須有心去挖掘下一個潛力股。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "精選低位階的Vera晶片受惠股，提前卡位。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.16 盤後解析】各位投資朋友，過去我看太空了，我正式向大家認錯。現在趨勢非常明確，台積電先進製程天下無敵，美股殺尾盤根本是給我們上車的機會，極度看好！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "ALL IN 台積電，無腦買進。"
    },
  {
    name: "Alan Chen",
    style: "具身智能與量化交易",
    viewpoint: "【2026.06.16 盤後解析】從裸K來看，今天這根開低走高的紅K，展現了強大的下檔支撐。配合美伊和平利多，外資賣壓已被內資消化。明天若能跳空開高，將確認洗盤結束。",
    stocks: ["2330 (台積電)", "低軌衛星", "具身智能概念股"],
    entryPoint: "等待回測支撐位進場，嚴格設定停損。"
  }
,
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.16 盤後解析】哎喲，今天這個盤真的嚇死人！早上跟著美國跌，下午又拉起來。我都跟鄉親說，台積電是台灣的寶，美國人半夜跌他們的，我們抱著好股票就對了！",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "好股票不要隨便賣，繼續抱著等領股息。"
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
