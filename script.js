const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.17 盤後深度】完美的 V 型反轉！Warsh 的『鷹派暫停』完全在我們的預期之內。市場最初因為點陣圖減少降息次數而恐慌，但隨後意識到『不降息是因為經濟太強』。年底 6500 點絕對不是夢！",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "不要懷疑牛市，繼續加碼科技與工業股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.17 盤後深度】尾盤的無基之彈令人擔憂。Warsh 明確表示高利率將維持更久 (Higher for longer)。市場忽視了資金成本上升對企業獲利的長期侵蝕，目前的狂熱只是情緒的宣洩。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "趁反彈減碼，高利率環境對高估值是毒藥。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.17 盤後深度】聯準會的決策落後於曲線，但 Warsh 在記者會上承認了 AI 帶來的生產力提升。長天期美債殖利率在劇烈震盪後收平，顯示債市並不相信通膨會失控。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "經濟具備韌性，佈局基礎建設與不動產。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.17 盤後深度】FOMC 釋放了複雜的訊號。雖然沒有升息，但縮表 (QT) 的節奏並未放緩。大國博弈下的供應鏈重組依然是通膨的底層邏輯，市場的 V 轉過於樂觀。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "維持全天候配置，黃金依然是核心避險資產。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.17 盤後深度】這就是為什麼我不看宏觀數據做決定的原因。兩點鐘一到散戶恐慌拋售，然後聰明錢進場狂掃輝達。Warsh 說什麼根本不重要，AI 的浪潮會淹沒一切宏觀噪音。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "閉著眼睛買進 AI 基礎設施龍頭，死抱不放。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.17 盤後深度】史詩級的 Gamma 軋空！我們在盤前警告過單邊 2% 的暴力行情。兩點一刻標普觸及 5500 支撐後，造市商被迫瘋狂回補空頭部位，引發了這場教科書級別的 V 轉！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "獲利了結昨天的跨式期權，轉為逢低賣出 Put。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.17 盤後深度】看到華爾街對『生產力』有了新的認識，我感到很欣慰。我們正在把世界上所有的數據中心升級為 AI 工廠，這將是抗擊通膨最強大的武器。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "持有輝達，與我們一起打造抗通膨的 AI 工廠。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.17 盤後深度】聯準會終於明白經濟不用靠印鈔票也能成長了。SPCX 今天的反彈證明了市場看懂了我們的長期價值。我們即將公布火星殖民地的初步財務模型。Doge!",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "鑽石手 SPCX，我們的目標在星辰大海。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.17 盤後深度】市場終於清醒了！Warsh 雖然在利率上保守，但他肯定了新科技的通縮效應！這是對我們破壞性創新理論的最大背書。今天的大反轉只是創新股暴漲的開端！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "全力押注基因編輯、自駕車與次世代 AI 軟體。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.17 盤後深度】這是一場徹頭徹尾的『洗盤大會』。FOMC 前的恐慌讓軟弱的手交出了籌碼。矽谷的 AI 狂歡根本不受利率影響，微軟和輝達的 V 轉已經吹響了下半年進攻的號角！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "AI 派對繼續，滿倉做多微軟與輝達。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.17 盤後深度】哈哈哈哈哈！我就問你們，下午兩點的時候誰被洗下車了？大鱷們想用點陣圖嚇唬我們，結果自己先搶著買回來！這就是散戶鑽石手的勝利！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "我們贏了第一局！繼續 HODL，目標月球！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.17 盤後深度】天啊！我完全看錯了！我以為 Warsh 會殺了科技股，結果他反而給了 AI 護身符！把你們手上的無聊銀行股賣掉，快點上車輝達跟 SPCX，快點！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "認錯買回科技巨頭！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.17 盤後深度】今天這根帶下影線的大長腿非常漂亮。雖然點陣圖轉鷹，但市場用真金白銀投下了反對票。V 型反轉確立了短線底部，我已經在尾盤重新建立五成多單。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "底部確立，順勢做多，防守線設在今天低點。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.17 盤後深度】FOMC 的結果是『鷹派暫停』，但市場解讀為『利空出盡』。這是一次典型的情緒修復行情。但請注意，小型股並未跟上反彈，資金依然過度集中於大型科技股。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "不要盲目追高，鎖定大型科技龍頭逢低佈局。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.17 盤後深度】昨天我們提醒在支撐位有大單吃貨，今天尾盤的暴漲完全印證了這一點。主力借 FOMC 利空洗盤的意圖圖窮匕見。只要後續能帶量突破前高，就是新一波主升段。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "主力洗盤結束，緊抱手中 AI 核心持股。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.17 盤後深度】哈囉大家！下午兩點那根大陰線有沒有嚇到你們？幸好我們說了去喝咖啡對吧！現在市場已經消化完 Warsh 的驚嚇，歡樂的牛市派對又回來啦！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "利空出盡，安心做多，挑選基本面好的股票上車。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.17 盤後深度】日線圖上這根超長下影線的『錘子線』，是極度強烈的反轉訊號。空頭在關鍵支撐被徹底殲滅。只要明天不出現跌破今日低點的吞噬黑K，多頭將重掌兵符。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "破底翻成型，停損設於今日低點，積極做多。"
  }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.18 盤前備戰】各位早！昨晚美股洗盤洗得非常兇悍，先下殺後大V轉！Warsh 雖然沒有降息，但肯定了美國經濟強韌。台股今天開盤一定是大漲，台積電 ADR 已經噴出去了！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "今天開高是必然，重點是開高後的量能是否跟上。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.18 盤前備戰】昨晚的劇烈反轉證明了一件事：全球資金無處可去，最終還是只能買入最具確定性的 AI 科技股。台灣身為 AI 軍火庫，外資今天必然會大舉回補空單。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "外資將被迫認錯回補，台積電依然是首選。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.18 盤前備戰】聯準會的利率決策根本改變不了台積電 CoWoS 產能塞爆的事實。昨晚輝達的大漲已經給了明確指引，今天台灣的半導體設備、先進封裝族群將全面表態。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "滿倉先進封裝設備與矽光子族群。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.18 盤前備戰】投資朋友，有沒有聽我的話好好睡覺？你如果昨晚半夜爬起來看盤，心臟早就停了！大V轉啊！這就是景氣擴張期的威力，利空就是給你買的，不是給你嚇的！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "不要被洗掉，ETF 繼續定期定額扣起來。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.18 盤前備戰】昨晚雖然大反轉，但我仍保持謹慎。這種暴力拉抬往往伴隨著散戶的 FOMO 情緒。高利率維持更久對硬體代工廠的庫存週轉絕對是壓力。今天開高千萬不要追。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "開高勿追，慎防主力拉高出貨。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.18 盤前備戰】Warsh 的『鷹派暫停』是非常聰明的決策，既壓制了通膨預期，又安撫了市場。美元指數在短暫衝高後回落，這對新興市場的台股是巨大利多，外資熱錢將重新湧入。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "資金派對重啟，積極佈局大型權值股。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.18 盤前備戰】從波浪理論看，昨晚美股守住了關鍵支撐，代表第五波的延伸正在進行。今天台股只要跳空越過前高，C波修正的疑慮就暫時解除。但仍需提防假突破。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "若跳空開高帶量，可小注搶反彈，但嚴設停利。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.18 盤前備戰】觀眾朋友早安！昨晚美股洗了個三溫暖！今天台股一定會反應這股利空出盡的熱情。但請注意，外資在台指期的幾萬口空單會怎麼處理？今天軋空行情精彩可期！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "關注外資期貨空單是否大舉停損回補，引爆軋空。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.18 盤前備戰】昨天避險的資金今天會大量湧出，轉進電子股。防禦型的營建、高股息今天可能會稍微熄火。資金重回 AI 主戰場，散熱、機殼、伺服器組裝將是今天的重點。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "資金輪動回 AI 零組件，暫避防禦型類股。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.18 盤前備戰】FOMC 這顆大石頭終於落地！昨晚記憶體大廠美光股價強勢，今天台灣的記憶體模組與製造廠將跟進發動。有基本面又有題材，是今天最強勢的族群。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "重倉記憶體族群，尤其是 HBM 相關概念。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.18 盤前備戰】大家早！昨天有聽話空手睡覺的人，昨晚是不是睡得很香？今天大盤開高是送分題，但重點是開高之後會不會走低？今天不要太早出手，看清楚主力籌碼再說。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "開盤先看戲，十點過後方向確認再進場。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.18 盤前備戰】同學們，看圖！昨天我說十日線沒破就是多頭，昨晚美股大長腿更是確定了底部的支撐！今天台股只要開高走高，吞噬前幾天的黑K，那就是千軍萬馬來相見！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "型態轉強，帶量突破即刻勇敢追價。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.18 盤前備戰】昨晚期貨夜盤簡直瘋了！先殺 200 點再拉 300 點！這就是我說的史詩級波動。今天早盤外資一定會被軋空，期貨操作就是順勢做多，吃外資停損的豆腐！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨早盤順勢做多，瞄準外資空單停損買盤。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.18 盤前備戰】FOMC 利空出盡！美股史詩 V 轉！台股今天將迎來報復性反彈！外資的 6 萬口空單會不會被踩踏？這將是今年最大的一場軋空秀！綁好安全帶，火箭升空！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "外資軋空秀登場，全面做多權值與 AI 概念股。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.18 盤前備戰】哈哈哈哈哈！有沒有？有沒有？昨天叫你們彎腰撿鑽石，你們不聽！昨晚美股大V轉，台積電 ADR 狂飆，今天台股直接飛天！你現在不買，等萬二你才要買嗎？",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "我早就說過了！今天隨便買隨便賺，重押台積電！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.18 盤前備戰】各位同學，這就是主力的經典洗盤手法。藉由宏觀事件製造恐慌，然後在底部狂吃籌碼。今天開高不要追權值，去尋找那些昨天逆勢抗跌、主力已經吃滿貨的中小型股。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "避開追高權值，鎖定主力已建倉之中小型股。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.18 盤前備戰】Warsh 的決策展現了高度的政治智慧，維持高利率打擊通膨，卻用言語安撫市場情緒。全球大循環的資金回流美國與新興市場的趨勢成型，台股長線看多。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "大循環趨勢確立，任何回檔都是買進優質權值股的機會。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.18 盤前備戰】你看吧，昨晚一堆人在那邊看轉播嚇得半死，結果一早醒來大漲。就說不用盯盤了，好公司買著放就好。Warsh 講什麼干我屁事，輝達晶片賣得出去比較重要啦。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "關掉電視，不要被新聞標題影響，好公司繼續抱著。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.18 盤前備戰】短期總體經濟的干擾已經消除。現在市場焦點將回歸企業的實質獲利。第一季財報優秀、且下半年指引樂觀的企業，將在這波反彈中創下新高。回歸基本面選股。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "摒棄總體經濟猜測，回歸個股營收與獲利成長表現。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.18 盤前備戰】昨晚的雲霄飛車證明了股市的不可預測性。對於存股族來說，不管昨天是跌還是今天是大漲，你的高股息 ETF 份額都在穩穩增加。保持紀律，才是最後的贏家。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "無視暴漲暴跌，專注累積高股息 ETF 股數。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.18 盤前備戰】今天大盤一定開高，但有心人早就在昨天趁大家恐慌時佈局完畢了。今天他們會順勢拉抬出貨給散戶，千萬別去幫有心人抬轎。今天重點是找尋剛突破底部的落後補漲股。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "不要幫主力抬轎，尋找底部剛起漲的生技或綠能。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.18 盤前備戰】各位！昨天我叫你們閉著眼睛買台積電，有沒有聽進去？昨晚 ADR 暴漲，今天開盤直接跳空！這就是買在沒人敢買的時候！我再說一次，ALL IN 台積電！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "這是我最後一次警告，上車台積電，不然就看別人賺！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.18 盤前備戰】哎喲，今天早上去菜市場，大家都好高興，說股票大漲。阿伯我就說嘛，美國人開完會就沒事了。我們乖乖抱著好公司，領股息卡實在，不要每天在那邊沖來沖去。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "漲跌都平常心，穩穩抱著金融與電信股。"
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
