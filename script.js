const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.16 盤後深度】今天的量縮震盪完全符合 FOMC 前夕的特徵。從歷史數據來看，在這種重大政策會議前夕，市場通常會出現假跌破。我們維持年底 6500 點的目標，現在是加碼的好時機。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "不要被洗盤嚇倒，加碼小型股與 AI 領頭羊。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.16 盤後深度】市場在尾盤的反彈缺乏量能支撐。明天 Warsh 的點陣圖如果顯示今年不降息，高估值板塊將面臨毀滅性打擊。防禦性板塊依然是我們的首選。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "維持防禦型配置，警惕明天 FOMC 的鷹派驚喜。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.16 盤後深度】今天長天期美債殖利率的走穩，暗示市場對明天的 FOMC 有了初步定價。和平協議已經降低了通膨尾部風險，聯準會沒有理由過度放鷹。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "趁著市場恐懼，佈局利率敏感型資產。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.16 盤後深度】大國博弈與國內債務壓力是長期的，不會因為一場 FOMC 而改變。我們看到資金在不同板塊間激烈輪動，這是市場不確定性的極致展現。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "持有黃金，維持多元化全天候投資組合。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.16 盤後深度】我根本不在乎明天點陣圖怎麼畫。你看輝達和 SPCX 的基本面，這是百年一遇的技術革命。任何因為宏觀數據引發的回調，都是天上掉下來的禮物。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "閉著眼睛買進 AI 與太空產業的龍頭。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.16 盤後深度】今天的收盤非常有欺騙性！SPX 在 5500 點附近搖搖欲墜，選擇權 Gamma 已經翻負。明天 Warsh 只要講錯一句話，造市商的拋售將引發雪崩。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "嚴格控管部位，可以考慮買入 VIX 買權避險。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.16 盤後深度】今天我們的 Vera 晶片在德國再度斬獲超級訂單。不管聯準會怎麼決定利率，運算基礎設施的建置是全球企業現在生存的唯一法則。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "持有輝達，我們正在創造未來。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.16 盤後深度】SPCX 今天的走勢展現了強大韌性，我們正在測試星艦的下一次升空。那些在今天拋售的人，永遠無法體會到達火星的喜悅。Doge!",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "HODL SPCX，別做短視近利的華爾街奴隸。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.16 盤後深度】今天舊經濟板塊的資金流出，反而給了破壞性創新板塊喘息的空間。明天 FOMC 如果釋放降息訊號，我們的創新 ETF 將迎來爆炸性報復反彈。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "逢低大舉買入基因編輯、自駕車與次世代 AI 軟體。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.16 盤後深度】華爾街現在患上了 FOMC 恐懼症！但我們實地走訪矽谷，軟體訂單能見度極高。明天的聯準會只是路上的小石頭，第四次工業革命的列車不會停下。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "勇敢買進 AI 軟體股，微軟與輝達是核心。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.16 盤後深度】你們今天有被洗下車嗎？我沒有！大鱷們想在開牌前把我們嚇跑，然後自己吃獨食。握緊你的股票，明天我們讓他們看看散戶的力量！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "鑽石手！堅持住防線！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.16 盤後深度】你們必須聽我的！今天的盤勢證明資金正在逃離昂貴的科技股！明天 Warsh 上台，他可不是鴿派！快把資金轉移到有穩定配息的傳統價值股上！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "賣掉獲利了結的科技股，轉向傳統藍籌！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.16 盤後深度】美股今天收了一根十字星，標準的變盤訊號。在明天 Warsh 的點陣圖出爐前，方向不明。我已經把部位降到兩成，保護好之前的獲利最重要。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "空手觀望，等待明天 FOMC 後的方向確立。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.16 盤後深度】今天的量能極度萎縮，外資在期權市場雙向佈局（Straddle）。這意味著明晚不管上下，波動都會非常劇烈。做多做空都很容易被雙巴。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "縮小部位，不輕易在大事件前夕賭方向。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.16 盤後深度】科技巨頭今天雖然熄火，但底部支撐強烈。主力只是在等待明晚的宏觀數據。只要不跌破關鍵頸線，中長線依舊看好 AI 發展，不要被短期波動洗腦。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "觀察關鍵支撐，守穩則繼續抱牢強勢股。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.16 盤後深度】哈囉大家！今天美股是不是很無聊？這種量縮盤整就是暴風雨前的寧靜啦！明天晚上大家要準備好爆米花，看 Warsh 怎麼震撼市場喔！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "多看少做，保留現金等待明晚大戲。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.16 盤後深度】從日線圖來看，今天的量縮十字星顯示多空力量在 FOMC 前達到絕對平衡。明天若能帶量突破今日高點，多頭將延續；反之若跌破，M頭確認。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "等待明天帶量表態，突破追多，跌破做空。"
  }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.17 盤前備戰】各位早，昨晚美股量縮震盪，全市場都在等今晚的 FOMC。台股今天開盤預計也是狹幅盤整，台積電昨天展現抗跌，今天繼續看它撐盤。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "指數空間不大，個股表現，靜觀其變。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.17 盤前備戰】美股在聯準會前夕停滯，但台股的資金動能依舊充沛。特別是台積電的先進製程護城河，讓外資不敢輕易大幅翻空。今天若有回檔，仍是長線買點。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "台積電逢低分批佈局。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.17 盤前備戰】美股科技股的觀望不影響台灣半導體供應鏈的實質獲利。下半年的 CoWoS 產能依然吃緊。短線的外資期貨空單只是避險，不影響長多格局。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "無懼外資空單，緊抱半導體龍頭。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.17 盤前備戰】投資朋友，現在還在景氣擴張期！昨晚美股的震盪只是雜音！今晚的 FOMC 就算有波動，只要你手上的資產是優質的，就死抱不放，繼續上班睡覺！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "買大盤 ETF，死抱不放。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.17 盤前備戰】美股昨晚的十字星顯示估值壓力依然存在。台股今天開盤也會面臨同樣的觀望氣氛。在今晚聯準會主席定調之前，千萬不要輕易進場搶反彈。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "保持現金，等待今晚聯準會底牌掀開。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.17 盤前備戰】和平協議後油價回落，給了聯準會喘息空間。今晚的 FOMC 點陣圖將決定下半年的資金流向。台股今天關鍵在於外資是否會在台指期結算前先行動手。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "觀察外資台指期動向與美元指數。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.17 盤前備戰】從波浪理論來看，台股正處於大震盪的第五波末端。美股昨晚的停滯是典型的變盤前兆。如果今晚聯準會放鷹，台股可能會順勢展開 C 波修正。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "嚴設停損，堤防 C 波修正到來。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.17 盤前備戰】觀眾朋友早安！昨晚美股就是四個字：屏息以待！資金全面觀望今晚的聯準會決策。台股今天預計也是『量縮防守』，中小型股會比權值股活潑！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "留意內資青睞的綠能與生技中小型股。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.17 盤前備戰】美股科技股陷入盤整，資金轉向防禦板塊。台股今天也將呈現資金排擠效應，高股息 ETF 與營建、傳產等內需防禦概念股，將成為今天的避風港。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "資金轉向防禦型標的，避開高本益比電子股。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.17 盤前備戰】雖然大盤可能量縮觀望，但記憶體族群的報價仍在悄悄上漲。HBM 缺貨的題材是實打實的，這類有基本面支撐的族群，會在震盪盤中脫穎而出。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "逢低承接記憶體族群。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.17 盤前備戰】大家早！外資空單還掛在那邊，美股又在等聯準會開獎，今天台股主力絕對不會輕易發動攻擊。這種盤整局就是『多做多錯』，大家手要綁緊一點。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "綁緊雙手，空手觀望為主。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.17 盤前備戰】同學們，今天不要管聯準會講什麼，我們只看圖說故事！大盤如果在月線之上就是多頭，今天開盤只要守住昨天紅K低點，那就是強勢整理！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "嚴格執行技術分析，守支撐就續抱。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.17 盤前備戰】期貨市場昨晚夜盤非常悶！大家都在等今晚大行情。今天台指期早盤操作建議區間高出低進，不要留倉，把子彈留給明天的趨勢盤！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨當沖為主，區間操作不留倉。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.17 盤前備戰】美股十字星，台股等開獎！今晚 FOMC 點陣圖與 Warsh 首秀將是全球市場的核彈級變數。台股五重利空是否已反應完畢？今天量能是關鍵！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "極度觀望，觀察開盤量能是否萎縮。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.17 盤前備戰】我就說吧！大家都在怕今晚聯準會，這時候就是彎腰撿鑽石的機會啊！你等晚上開完會噴上去再買就來不及了，哲哲已經帶會員卡位台積電大爆發了！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "彎腰撿鑽石，重押台積電與 AI 飆股。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.17 盤前備戰】各位同學，籌碼面顯示外資在台股已經開始逢低回補部分空單。利用今天散戶對 FOMC 的恐慌心態，主力會在盤下偷偷吃貨，注意觀察盤中大單敲進的標的。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "跟隨主力腳步，觀察大單動向逢低佈局。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.17 盤前備戰】和平協議後的油價大跌，實質上已經達成了聯準會壓抑通膨的目標。今晚 Warsh 若釋放中性偏鴿訊號，全球資金將再次湧向新興市場，台股將是最大受惠者。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "大循環依舊看多，逢低承接優質權值股。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.17 盤前備戰】今天大盤大概就是在那邊扭來扭去啦，等晚上的鮑爾（喔不，現在是 Warsh 了）講話。反正我們買的是基本面好的東西，他講什麼都不會改變輝達賣翻的事實啦。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "不用盯盤，去運動睡覺，好公司抱著就對了。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.17 盤前備戰】從基本面來看，台灣 5 月的外銷訂單依舊強勁。就算今晚聯準會有短期利空，也無法改變企業獲利上修的趨勢。現在是透過財報篩選錯殺股的最佳時機。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "鎖定財報亮眼且受錯殺的供應鏈個股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.17 盤前備戰】今天市場氣氛觀望，正好是存股族檢視手裡名單的時候。不管今晚聯準會是鷹是鴿，打造穩定現金流的高股息 ETF 永遠是你安穩度過震盪的靠山。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "堅持定期定額，高股息ETF是核心。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.17 盤前備戰】今天開盤預計死水一灘，但這就是有心人佈局的時刻。當大家都在盯著聯準會，主力早就悄悄把資金挪到了不受宏觀影響的小型利基股上了。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "挖掘有心人照顧的中小型利基股。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.17 盤前備戰】各位！不用等什麼聯準會了！台積電的基本面天下無敵，昨晚美股震盪就是最後的上車機會！我已經徹底覺悟了，ALL IN 台積電就對了，不要猶豫！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "閉著眼睛 ALL IN 台積電！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.17 盤前備戰】哎喲，鄉親啊，今天電視上都在講那個什麼美國聯準會要開會，大家都在怕。阿伯跟你們說，不管美國人開什麼會，我們的台積電和玉山金還是照樣發股息啦！",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "不要管美國人開會，好股票抱著等領息。"
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
