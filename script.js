const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.17 盤中快報】早盤的走勢正如我預期，資金正在悄悄進駐小型股 (羅素2000)。Warsh 今晚不可能過度放鷹，因為通膨數據已經明顯降溫。在兩點聲明出來前，這就是最後的上車機會。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "趁盤中震盪買進小型股與羅素2000 ETF。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.17 盤中快報】開盤的劇烈震盪顯示大資金正在做最後的防禦性調倉。即使今晚不升息，只要點陣圖顯示『長時間維持高利率(Higher for longer)』，科技股的估值泡沫就會被戳破。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "持續賣出高本益比科技股，轉向核心消費。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.17 盤中快報】早盤殖利率曲線的變化非常有趣。我們認為市場已經過度定價了鷹派預期。無論 Warsh 說什麼，實體經濟的降溫才是聯準會最終必須面對的現實。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "佈局長天期美債與基礎建設板塊。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.17 盤中快報】在如此重大的宏觀拐點前夕，早盤的任何走勢都不具備指標意義。算法交易正在主導盤面。我們維持一貫的紀律，不參與這種拋硬幣式的賭博。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "不動如山，持有黃金與抗通膨債券 (TIPS)。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.17 盤中快報】如果你因為害怕下午兩點的記者會而賣出輝達，你將錯失第四次工業革命。我們看到企業端對 AI 算力的焦慮遠大於對聯準會的焦慮。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "逢低買進任何與 AI 基礎設施相關的龍頭。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.17 盤中快報】開盤選擇權市場的 Put/Call Ratio 飆升！造市商的 Gamma 曝險極度不平衡，這意味著下午兩點結果公佈時，無論方向為何，標普都會有 2% 以上的暴力單邊行情！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "勒式策略 (Strangle) 佈局，買進跨式期權做多波動率。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.17 盤中快報】我們不關注利率，我們只關注運算力的提升與成本的下降。我們的超級電腦正在全球部署，各國的 AI 主權意識已經覺醒，這股趨勢無人能擋。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "持有輝達，與我們一起建立新的工業革命。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.17 盤中快報】聯準會就像是開著一台沒有擋風玻璃的車在看著後照鏡駕駛。SPCX 早盤的波動是正常的，我們專注於降低火箭發射成本，而不是預測無聊的利率決策。Doge!",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "HODL SPCX，忽略華爾街的短期噪音。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.17 盤中快報】我們看到早盤資金正在殺出舊經濟板塊。如果今晚聯準會釋放哪怕一點點的鴿派訊號，被嚴重低估的破壞性創新板塊將迎來史詩級的軋空反彈！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "大舉買入基因編輯與次世代軟體公司。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.17 盤中快報】華爾街現在是『談 FOMC 色變』。但在矽谷，軟體公司的執行長們只關心一件事：如何買到更多的 GPU。AI 的資本支出派對才剛剛開始，早盤的恐慌是買點。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "趁著 FOMC 前的恐慌，用力買進 AI 軟體股。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.17 盤中快報】早盤這些機構又在玩老把戲了，想在下午兩點前把散戶的籌碼騙走！他們越是砸盤，我們越要握緊！Hold the line，不要在黎明前倒下！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "鑽石手！不管下午發生什麼，絕不賣出！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.17 盤中快報】大家聽好了！早盤科技股的弱勢是個嚴重的警告！Warsh 下午絕對不會給你們好臉色看！立刻把資金轉到銀行股和公用事業，那些本益比低於 15 倍的公司！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "清倉高估值科技股，買進銀行與能源股。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.17 盤中快報】美股開盤後量能極度萎縮，這就是標準的『等開獎』盤。大機構全在袖手旁觀，目前盤面的漲跌全是散戶在互砍。強烈建議在兩點前保持空手。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "空手觀望，等待 FOMC 決策與點陣圖出爐後再動作。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.17 盤中快報】早盤的走勢跟我們昨天的推演一致，非常黏人且缺乏方向性。VIX 指數在開盤有所跳升，顯示市場的避險情緒正在加溫。千萬不要在現在進場賭大小。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "嚴格控制倉位，不建議在重大事件前夕做單邊押注。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.17 盤中快報】開盤科技巨頭雖然承壓，但我們觀察到幾檔核心 AI 概念股在關鍵支撐位有大單默默吃貨。主力可能預判今晚的結果是『利空出盡』。可以考慮小注試單。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "在關鍵支撐位小幅試單多頭，嚴格設定停損。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.17 盤中快報】哈囉大家！美股一開盤大家都屏氣凝神呢！現在市場就像暴風雨前的寧靜，建議大家今天早盤就去喝杯咖啡，不要一直盯著螢幕，我們等下午兩點再來看戲！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "多看少做，喝杯咖啡等待下午兩點的聯準會決策。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.17 盤中快報】從早盤的 15 分鐘K線來看，大盤已經跌破了短期的上升趨勢線。這暗示著有知情資金在 FOMC 前提前撤退。在日線級別止跌訊號出現前，切勿接刀。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "跌破趨勢線，反彈皆是空點，勿盲目抄底。"
  }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.17 盤後解析】各位，今天台股就是一個標準的『量縮窒息盤』。大家都不敢動，全在等今晚半夜兩點的 FOMC 開獎。外資今天期貨還是偏空，明天的開盤絕對是驚濤駭浪。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "今晚早點睡，明早看美股收盤結果再決定去留。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.17 盤後解析】今天台股的觀望氣氛非常濃厚，但台積電尾盤的拉抬顯示有特定長線資金正在卡位。無論今晚 Warsh 的點陣圖多麼鷹派，台灣半導體的競爭力是不會受損的。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "無懼今晚波動，台積電長多格局不變。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.17 盤後解析】今天電子股普遍熄火，這是正常的重大事件前避險效應。但我必須提醒，CoWoS 產能吃緊的狀況甚至比上個月更嚴重，任何因為宏觀因素引發的重挫，都是大好買點。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "鎖定先進封裝設備股，遇利空大跌即買進。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.17 盤後解析】投資朋友！今天台股量縮很正常啦！今晚聯準會就算放老鷹，只要你的資產是跟著經濟擴張的，怕什麼？現在就是景氣熱絡期，抱緊你的 ETF，安心睡覺！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "買大盤 ETF，死抱不放，安心睡覺。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.17 盤後解析】今天台股的弱勢盤整證明了市場對高估值的擔憂。今晚 Warsh 首度主持，不確定性極高。我一再強調，在這種歷史級別的轉折點，現金才是最安全的資產。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "保持高水位現金，絕不在今晚賭博。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.17 盤後解析】今天外資在台股的動作非常保守。和平協議後油價大跌，理論上通膨會降溫，但今晚聯準會可能會為了『預防性通膨反彈』而維持高利率。明天台股將面臨方向抉擇。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "觀察今晚美元指數與美債殖利率的劇烈變動。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.17 盤後解析】從技術面來看，今天大盤收了一根量縮的倒T線，這是上方壓力沉重的訊號。若今晚美股因為 FOMC 大跌，明天台股極有可能跳空跌破月線，展開 C 波大修正。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "嚴設停損，堤防明天跳空大跌展開 C 波修正。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.17 盤後解析】觀眾朋友晚安！今天台股成交量急凍！這叫『暴風雨前的寧靜』。今晚聯準會利率決策將牽動下半年外資流向，明天一早台股開盤絕對會非常刺激！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "今晚多看少做，觀察明天外資是否出現報復性買盤或賣盤。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.17 盤後解析】今天盤面上最抗跌的就是營建、資產與高股息概念股。這印證了我早上的看法，資金在重大不確定性前，會全面湧入防禦板塊。今晚美股若大震盪，明天這些族群仍會是焦點。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "持續抱牢防禦型內需股與高股息 ETF。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.17 盤後解析】大盤今天雖然悶，但大家有沒有注意到記憶體族群尾盤有大單敲進？主力知道不管聯準會怎麼搞，HBM 缺貨是鐵打的事實。這就是有基本面保護的優勢。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "趁大盤震盪，逢低佈局記憶體相關供應鏈。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.17 盤後解析】大家晚安！今天這盤真的是無聊到快睡著，主力全都在放假等今晚開獎啦！今天如果你管不住手亂買的，今晚你大概率要失眠了。這就是為什麼我說要空手觀望！",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "空手者今晚好好睡覺，持有多單者自求多福。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.17 盤後解析】同學們，今天雖然量縮，但我們看 K 線，依然穩穩踩在十日線之上！多頭格局沒有改變！今晚美股怎麼跌那是他的事，明天台股只要不破線，我們就是續抱！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "相信圖形，十日線不破就是多頭續抱。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.17 盤後解析】今天期貨當沖的空間極度壓縮，上下不到 80 點！這意味著動能正在快速蓄積。今晚凌晨兩點，期貨夜盤將會出現史詩級的暴衝，千萬不要留逆勢單過夜！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "今晚夜盤極度危險，空手觀望，絕不留倉過夜！"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.17 盤後解析】台股窒息量！外資結算前大縮手！今晚半夜兩點，聯準會點陣圖與 Warsh 發言將決定下半年全球資金大洗牌！台股明天會是利空出盡還是萬劫不復？",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "極度戒備，今晚是決定下半年命運的關鍵時刻。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.17 盤後解析】我就說吧！今天一堆人被嚇到不敢買，量縮成這樣！這就對了！散戶越怕，我們越要貪婪！今晚聯準會一開完，明天台股就會報復性噴出，你現在不買，明天就追不到了！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "別人恐懼我貪婪，滿倉抱牢 AI 飆股迎接明天大漲。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.17 盤後解析】各位同學，今天盤後的籌碼數據非常有意思。外資雖然表面上賣超，但在幾個特定的低基期車用零組件股中，出現了外資與投信同步連買的『暗盤交易』訊號。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "無視指數震盪，跟隨土洋法人佈局低基期轉機股。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.17 盤後解析】今天台股的觀望完全是心理層面的。從實質經濟數據來看，全球貿易正在復甦。今晚的 FOMC 只是確認這個趨勢，而非改變它。新興市場的資金派對才剛開始。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "大循環向上，趁今晚市場恐慌，大舉加碼台股權值。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.17 盤後解析】今天這盤真的有夠黏。反正大家都在等半夜那個老頭子出來講話。聽我一句勸，與其今晚熬夜看美股在那邊洗盤，不如早點去睡覺，明天起來看結果就好。好公司不會因為他一句話就倒。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "早點睡覺，好公司不用看盤，放長線釣大魚。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.17 盤後解析】今天大盤的疲弱剛好給了我們進場的好機會。我們最新篩選出來的『盈餘成長加速且本益比低於歷史均值』的個股名單中，有好幾檔今天都被錯殺了。這才是真正的投資價值。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "利用市場不理性恐慌，買入財報基本面強勁的錯殺股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.17 盤後解析】今天大盤這樣上下刷洗，存股族是不是覺得心情很平靜呢？這就是高股息 ETF 的魅力。今晚聯準會就算有大動作，明天高股息 ETF 依然會是你資產配置中最穩固的基石。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "不畏今晚風暴，堅持定期定額高股息 ETF。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.17 盤後解析】大家有沒有發現，今天大盤量縮，但有幾檔特定的生技股卻在尾盤偷偷拉高？這就是有心人在大事件前夕的避風港操作。跟著聰明錢走，今晚你可以睡得很安穩。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "跟蹤尾盤異動標的，佈局不受宏觀影響的生技股。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.17 盤後解析】各位！今天量縮算什麼？這叫洗盤！我再說一次，不要管今晚美國人在搞什麼鬼，台積電的先進製程是全世界都需要的！你現在不買台積電，你還要買什麼？",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "不管今晚結果如何，明天開盤閉著眼睛買台積電！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.17 盤後解析】哎喲，今天大家都在講今晚半夜美國要開獎。阿伯我老了，半夜要睡覺啦！反正我的玉山金跟中華電信，每年都會乖乖發錢給我，美國人要怎麼吵是他們的事，大家早點休息！",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "不熬夜看盤，穩穩抱著配息股，安心過日子。"
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
