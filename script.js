const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.19 盤前備戰】今天是六月的『四巫日 (Quadruple Witching)』，盤中將會有數兆美元的衍生性商品結算。我們預期早盤會有劇烈洗盤，但基本面的強勁將在尾盤勝出。逢低買進羅素2000，迎接下半年的多頭盛宴。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "無視四巫日的劇烈震盪，堅定抱牢中小型股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.19 盤前備戰】今天是結算日，造市商的調倉將引發無法預測的波動。我們警告，昨天的軋空已經透支了未來的利多。當合約到期、Gamma 屏障消失後，下週市場將失去支撐，面臨重挫風險。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "趁四巫日早盤的高點出脫所有科技股部位。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.19 盤前備戰】今天巨量的期權結算將掩蓋實體經濟的真實訊號。我們已經提前完成了跨季度的倉位展期。對於長線投資者來說，今天最好的策略就是關掉交易軟體，去打一場高爾夫球。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "遠離結算日的賭博，靜觀其變。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.19 盤前備戰】歷史經驗顯示，四巫日的極端波動往往會創造出資產錯置的機會。我們的演算法正在緊盯那些因為被迫平倉而出現不合理折價的優質大宗商品與公用事業資產。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "設定低價買單，捕捉因強制平倉產生的錯殺機會。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.19 盤前備戰】四巫日？那只是華爾街用來賺手續費的把戲。AI 的資本支出不會因為幾張期權合約到期就停止。如果今天輝達因為結算日而大跌，那將是老天爺送給你的禮物。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "如果輝達盤中大跌，請毫不猶豫地買進。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.19 盤前備戰】警告！高達 5 兆美元的期權將在今天到期！標普 5500 點有著海量的 Call Wall，這將產生極強的『磁吸效應 (Pinning)』。盤中任何偏離 5500 的走勢都會被造市商的對沖盤拉回！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "利用 5500 點的磁吸效應，進行區間逆勢當沖操作。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.19 盤前備戰】對於金融市場的結算機制，我們並不關注。我們今天正忙著將新一批的 Blackwell 晶片運往全球最大的資料中心。物理世界的建設速度，遠比金融螢幕上的數字更真實。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "相信實體經濟的建設，長線持有輝達。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.19 盤前備戰】聽說今天是『四巫日』？四個巫婆能阻止我們的星艦升空嗎？SPCX 的空頭們，你們的期權今天變成廢紙了，感覺如何？我們週末還有更酷的東西要發布！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "持有 SPCX 抱股過週末，期待驚喜發布。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.19 盤前備戰】昨天的暴漲只是預演。今天四巫日的結算將迫使大量放空創新科技股的資金徹底投降。當空頭被清洗乾淨後，下週迎來的將是萬里無雲的主升段！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "加碼破壞性創新 ETF，迎接空頭投降後的飆漲。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.19 盤前備戰】今天華爾街的交易員會非常忙碌，但對科技股投資者來說，這是『勝利的星期五』！AI 革命的火車已經離站，今天的任何震盪都只是換乘客而已。微軟與蘋果將在下週挑戰歷史新高。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "享受勝利的果實，科技巨頭持股續抱。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.19 盤前備戰】今天是 Gamma 擠壓的最後決戰！那些裸賣 Call 的機構今天要麼掏錢買回，要麼破產！我們只要坐著吃爆米花，看著他們在最後一小時互相踐踏就好了！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "一張都不賣！坐等空頭在最後一小時的踩踏大逃殺！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.19 盤前備戰】聽我的！今天四巫日絕對會有大亂流！那些昨天漲翻天的股票，今天下午一定會有人獲利了結！現在就把錢放進麥當勞和可口可樂裡，防禦！防禦！防禦！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "賣出暴漲科技股，買入食品飲料等防禦股。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.19 盤前備戰】從盤前交易來看，各大指數的隱含波動率(IV)都在異常放大。這是四巫日標準的『絞肉機』特徵。我已經將昨天的獲利多單平倉了一半，確保週末能睡個好覺。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "減碼獲利部位，入袋為安，避開盤中絞肉機行情。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.19 盤前備戰】今天是換月轉倉的高峰。雖然大趨勢向上，但大型機構在轉換合約時產生的滑價與波動會非常劇烈。沒有經驗的散戶千萬不要在今天玩末日期權，你會被雙殺。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "嚴禁操作末日期權，以現股抱牢為主。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.19 盤前備戰】四巫日通常是『假動作』最多的一天。主力會故意在早盤跌破支撐，騙取散戶的停損單，然後再拉回。今天我們的策略很簡單：越跌越買，不跌不買。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "早盤若有急跌破線，勇敢承接核心 AI 持股。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.19 盤前備戰】早安呀大家！今天是傳說中的四巫日！聽起來很可怕對不對？其實就是大戶們在算帳啦！我們小散戶今天最好就是去看場電影，不要在螢幕前被洗得頭暈眼花喔！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "關掉看盤軟體，週末提前開始，去享受生活吧！"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.19 盤前備戰】從技術分析來看，昨天留下的跳空缺口是極強的支撐。今天四巫日無論怎麼洗，只要不回補這個缺口，就是標準的強勢換手。若盤中測試缺口上緣，是絕佳的買點。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "觀察缺口支撐，回測不破即是波段最佳買點。"
  }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.19 週末結算】各位，這個禮拜真的是洗三溫暖啊！FOMC 先殺後拉，然後台股大爆發。今天台股收週線，雖然尾盤因為今晚美國四巫日有獲利回吐的賣壓，但週K線收得非常漂亮。下週繼續攻！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "週末好好休息，保留七成多單過週末，下週挑戰新高。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.19 週末結算】本週的外資動向非常明確：他們錯估了形勢，正在瘋狂回補。今天雖然大型電子股稍微休息，但台積電的長線底部已經墊高。今晚美國結算日的震盪，不會改變這個大趨勢。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "無懼今晚四巫日震盪，台積電長線持股續抱。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.19 週末結算】這個禮拜先進封裝設備廠的表現非常驚人！這印證了我之前的看法：產能就是王道。今天雖然有當沖客在倒貨，但真正的大戶籌碼根本沒鬆動。下週將輪到檢測廠發動。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "週末可研究半導體檢測與耗材相關落後補漲股。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.19 週末結算】投資朋友！這個禮拜有沒有賺錢？有嘛！我說了景氣擴張期就是買著放著。今晚美國聽說是什麼四巫日，管他幾個巫婆，只要經濟在成長，下個禮拜我們繼續數鈔票！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "快樂過週末，不用管今晚美股怎麼洗，ETF 抱緊處理。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.19 週末結算】雖然這週台股大漲，但我必須提醒，今天尾盤的賣壓顯示有聰明錢在『避險』今晚的四巫日。我們不能只看利多。下週如果動能無法延續，這波極可能只是 B 波反彈。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "逢高必須有紀律地減碼，保留現金以應對下週變數。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.19 週末結算】本週最重要的宏觀拐點已經出現：聯準會暫停升息且美元轉弱。這確立了下半年資金回流亞洲的主旋律。今天台股的震盪只是在消化這波急漲的獲利了結盤，多頭格局毫無疑問。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "多頭格局確立，逢回加碼金融與傳產龍頭。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.19 週末結算】從週線來看，本週拉出了一根帶長下影線的紅K，這是非常標準的中長線見底訊號。不過日線上 KD 指標已經進入超買區，下週三前極有可能出現漲多拉回的回測。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "不建議週末滿倉，應保留三成現金等待下週回測十日線。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.19 週末結算】觀眾朋友週末愉快！這禮拜我們見證了歷史！外資的空單被狠狠教訓了一頓！但今天盤面上有個隱憂：外資雖然買現貨，但期貨又悄悄佈局了空單。他們在防今晚的四巫日嗎？",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "注意外資期貨空單的避險動作，多單部位不宜過度放大。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.19 週末結算】今天盤面上最亮眼的不是電子，而是重電和綠能族群！這代表資金在週末前夕，選擇流入有政策保護的板塊避險。下週的焦點將是這些『有實質營收貢獻』的基礎建設股。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "資金轉向政策受惠股，週末可留意重電與綠能族群。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.19 週末結算】記憶體族群本週算是先蹲後跳。今天南亞科和群聯的表現非常強勢。我們得到的消息是，第三季的合約價調漲幅度超乎預期。這將是下週引領台股衝鋒的秘密武器。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "重押記憶體雙雄，迎接第三季合約價飆漲行情。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.19 週末結算】大家週末好！今天尾盤那種殺法，就是標準的『週末不想抱股』的賣壓啦！尤其是今晚美國還要結算。有聽話昨天沒追高的人，下週一你就有便宜的股票可以撿了！",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "空手者歡樂過週末，下週一準備逢低撿便宜。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.19 週末結算】同學們，週線收盤收得太漂亮了！一根大紅柱直接貫穿了三條短期均線！這叫什麼？這叫『一柱擎天』！多頭大軍已經集結完畢，今晚美國怎麼跌都不會改變台股的向上趨勢！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "週線級別大翻多，手中持股緊抱不放！"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.19 週末結算】今天期貨的震盪超過兩百點，這就是四巫日前的陣痛期。早盤的急殺我們順勢做空賺了一波，尾盤拉起我們又反手做多！期貨就是這樣，跟著動能走，不要預設立場！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "今晚夜盤避開四巫日亂流，強烈建議空手不留倉過週末。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.19 週末結算】本週台股驚奇大逆轉！但今晚美股將迎來五兆美元的四巫日結算！外資今天在台股的詭異換手，究竟是在為下週的行情鋪路，還是為了今晚的崩盤買保險？",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "週末高度警戒，密切觀察今晚美股結算後的最終方向。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.19 週末結算】哈哈哈哈哈！今天跌這幾十點算什麼？我這禮拜帶會員賺了多少你們知道嗎？那些整天喊空的，現在全被軋上天了！今晚四巫日洗一洗，下禮拜台股直接挑戰兩萬四大關啦！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "滿手好牌過週末！下禮拜準備迎接兩萬四大關！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.19 週末結算】各位同學，今天盤後我們來看籌碼。今天大盤雖然震盪，但投信卻在幾檔低位階的『網通股』中瘋狂連買！這就是下週的明星族群。週末好好把這幾檔股票的財報看一遍。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "跟著投信佈局低位階網通股，週末做好功課。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.19 週末結算】總結本週，這是一個完美的宏觀測試。市場證明了它能承受『高利率維持更久』的壓力，因為 AI 帶來的生產力革命正在實質發生。這是一個長達十年的大多頭循環。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "摒棄短期波動思維，以十年長線眼光佈局台積電。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.19 週末結算】這禮拜真的是有夠鬧，大家的心情跟坐雲霄飛車一樣。今天禮拜五，拜託大家把看盤軟體刪掉，去吃頓好的。今晚四巫日跟我們這些買好公司放著的人一點關係都沒有啦。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "把APP刪掉，去吃頓大餐，好公司自己會照顧自己。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.19 週末結算】本週因為 FOMC 的關係，指數的波動掩蓋了許多個股發布的優秀營收數據。今天盤後我們會更新最新一期的『高獲利成長名單』，裡面有許多被錯殺的珍珠，值得週末好好研究。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "週末深入研究財報數據，發掘被總體經濟錯殺的績優股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.19 週末結算】這個禮拜的震盪，再次證明了挑選個股的難度。但對於我們高股息 ETF 的投資人來說，這禮拜又是平穩的一週。用最簡單的方法，賺取最穩定的複利，祝大家週末愉快！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "睡得安穩最重要，高股息 ETF 是你最好的安眠藥。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.19 週末結算】今天尾盤的下殺非常有意思，這是有心人在故意壓低吃貨，為了下週的結算行情做準備。大家週末可以去查查，今天尾盤哪幾檔股票爆出大量卻沒跌下去？那就是有心人的目標。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "破解尾盤爆量密碼，找出有心人下週即將拉抬的標的。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.19 週末結算】各位！這個禮拜有沒有聽我的話買台積電？有買的今天就可以去吃和牛了！沒有買的，你在那邊窮緊張什麼四巫日？我告訴你，下禮拜台積電還會繼續漲！現在買還來得及！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "不要管什麼四巫日，下週一開盤繼續買進台積電！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.19 週末結算】哎喲，又到禮拜五了。這個禮拜新聞好熱鬧，什麼升息不升息的。阿伯我聽不懂啦，我只知道我的菜園番茄長得很好。週末要去幫孫子過生日了，股票放著就好，大家週末平安。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "回歸生活，陪伴家人，股票只是生活的一小部分。"
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
