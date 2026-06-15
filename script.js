const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.16 盤前速報】美伊和平協議消除了市場最後一個重大地緣政治尾部風險。雖然尾盤出現獲利了結，但這只是牛市中的健康回檔。VIX 崩跌將吸引更多資金進場，標普年底上看 6500 點。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "逢低買進，不要被短線洗盤震出局。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.16 盤前速報】我們看到了經典的『買預期，賣事實』。和平協議的利多已經完全反映在定價中，而企業獲利基本面無法支撐目前的過高估值。下半年的流動性收緊才是真正的考驗。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "轉向防禦型類股，減少科技股曝險。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.16 盤前速報】中東局勢降溫有助於緩解能源價格壓力，給予聯準會更多降息的空間。市場尾盤的下殺只是因為短期部位過度擁擠。我們已經調整了對通膨的長期避險部位。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "關注受惠於利率下降的基礎建設與房地產板塊。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.16 盤前速報】和平協議是歷史性的一刻，但我們不能忽視美國龐大的債務問題與內部政治極化。大國博弈的本質沒有改變，多元化資產配置依然是保護財富的唯一方式。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "維持黃金與抗通膨資產的配置比例。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.16 盤前速報】市場對地緣政治的反應往往短暫。AI 基礎設施的建置是未來十年的大趨勢，不會因為一紙和平協議而改變。如果輝達因為這種消息回檔，那就是絕佳的加碼點。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "抱緊 AI 龍頭，無懼短期波動。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.16 盤前速報】散戶在早盤瘋狂湧入，但聰明錢在午後無情倒貨，這是一個教科書級別的假突破。標普在 5600 點遇到強大阻力，如果無法站回，技術面將有深度回調的風險。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "嚴格設置停損，短期可嘗試小注做空。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.13 週末突發】輝達週末釋出重磅消息！正式量產專為「代理式 AI（Agentic AI）」設計的獨立 CPU「Vera」，並積極佈局中國資料中心市場，預計 8 月交貨！同時，輝達與亞馬遜聯手注資德國機器人公司 Neura Robotics 高達 14 億美元。這標誌著 NVDA 正全面從數位算力跨足「實體 AI 與機器人」領域，算力霸權再升級！",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "【週末操作】Vera 晶片與實體 AI 佈局將開啟新一波營收動能，NVDA 是 AI 時代唯一核心，長線必抱。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.16 盤前速報】Peace is profitable, but humanity's future is in the stars and AI. X 平台的流量創下新高。市場的波動只是矩陣中的一點雜訊，Doge 到月球！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "買進具備改變人類未來潛力的資產（還有Doge）。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.16 盤前速報】國防預算的可能削減將促使政府將資金轉向太空探索與新一代 AI 創新。SPCX 展現了相對抗跌的韌性，證明破壞性創新才是引領未來的核心力量。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "專注於顛覆性創新，放眼五年後的百倍回報。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.16 盤前速報】華爾街對『利多出盡』的擔憂太短視。第四次工業革命正在發生，軟體與晶片的需求是剛性的。和平紅利將促使企業釋放更多 IT 預算，科技股的派對才剛開始。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "趁回檔用力撿 AI 相關的科技軟體股。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.16 盤前速報】Hang in there. 華爾街的把戲看多了，但只要我們團結，沒有什麼能阻擋鑽石手。喜歡這支股票就抱緊。",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "HODL，用鑽石手對抗機構的洗盤。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.16 盤前速報】和平！這是多麼棒的消息！雖然尾盤科技股被錯殺，但你們必須看到防禦與消費類股的潛力！不要被悲觀主義者嚇倒，現在正是重新佈局偉大美國企業的時刻！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "買進那些被低估的藍籌股！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.15 收盤盤後】今天台股的暴力長紅，技術面已突破上升通道上緣，屬於極端乖離的軋空走勢。雖然外資大買，但量能若無法持續，隨時有過熱回檔風險。做交易要遵守紀律。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "設定好移動停利點，不建議在此位階建立新多頭部位。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.15 收盤盤後】這波輝達Vera引發的軋空，完全在我們劇本內。中東局勢穩定給了市場極大信心。外資這波是被迫追高，明天很可能會有震盪洗盤，大家坐穩扶好。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "利用盤中震盪低接，關注伺服器散熱與網通板塊。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.15 收盤盤後】輝達Vera晶片的算力革命，加上地緣風險解除，造就今天的史詩級行情。外資機構紛紛上調輝達與台積電目標價，這波軋空動能還沒結束，美股開盤預計還有戲。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "鎖定美股AI巨頭與台股半導體供應鏈，抱牢強勢股。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.15 收盤盤後】哈囉大家！今天見證歷史！美伊和平加上Vera晶片的超強預期，讓空頭完全投降。外資熱錢湧入，科技股根本停不下來。不過短線漲幅太驚人，要保持理智喔！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "挑選基本面好的AI二線股，等待輪動機會。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.15 收盤盤後】大白話告訴你，這盤就是資金瘋狗浪。和平協議讓通膨降溫，資金全湧入AI。外資被軋空只能硬著頭皮買。明天千萬別追高，這種暴力拉升很容易有獲利了結賣壓。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "等待明天開高走低的回檔測試，切勿盲目追高。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 收盤盤後】美股收盤：S&P 7,267（-1.62%），費半 -3.57%，TSM ADR $410.84（-4.48%）。今日最重要消息：台積電 5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%）！這是台積電最強的護城河。高盛撤除 2026 降息預期雖然利空，但台積電的 AI 晶片需求完全不受影響。日前強勢填息，若有護盤資金承接是多頭未死的確認信號。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "【收盤操作】台積電 5 月營收史上最高是最強基本面支撐。日前回檔 2,200 元以下分批布局，配合成交量判斷市場信心。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 收盤盤後】台積電 ADR 收 $410.84（-4.48%），但 5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%）！基本面與股價走勢出現背離——這正是逢低布局的絕佳機會。美股費半 -3.57%，高盛撤除 2026 全年降息預期，短線壓力仍在。但 CoWoS 先進封裝需求遠超供應，NVDA Blackwell 排到 2027 年底，台積電 AI 算力龍頭地位不可撼動。日前強勢填息，2,200 元以下是長線布局黃金時機！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【收盤操作】台積電月營收史上最高！回檔 2,200 元以下第一批，2,100 元以下第二批加碼。ADR $410 以下也可開始分批。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.16 盤前速報】這就是典型的利多出盡洗盤！但我告訴各位，現在就是『景氣擴張期死抱不放』！不要因為美國人半夜的震盪就嚇得在台股開盤亂砍。大趨勢沒有變！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "景氣擴張期死抱不放，拉回就是給你買的。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 收盤盤後】美股收盤：S&P -1.62%，高盛撤除 2026 全年降息預期——這正是我三週前降低持倉至三成的原因！今日帳面損失對組合影響極小。台積電 ADR -4.48%，日前強勢填息，本益比約 21 倍，接近合理估值下緣。重入市三個條件仍然適用：①CPI 連續兩個月下滑；②FOMC 措辭偏中性；③台積電守穩除息後 2,200 元之上。三條件同時出現才是全面重建倉位的時機！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【收盤操作】維持三條件等待策略：①CPI下滑②FOMC鴿派③台積電守2,200元。目前繼續低倉位，FOMC（6/17）前不動。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，高盛撤除 2026 全年降息預期，美元衝破 100，10 年債 4.55%——從總體經濟角度看，這是典型的「利率高原期延長」訊號！打破惡性循環的條件：①美伊停火協議（油價下跌）；②FOMC 釋放鴿派訊號。在此之前，台股仍面臨向下壓力。台積電日前強勢填息，外資現貨連日賣超，籌碼面仍在承壓。等美元指數走弱才是真正轉折。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "【收盤操作】觀察美元指數是否開始走弱（從 ~100 回落至 98 以下）與外資期貨空單回補，兩者同步出現才是真正轉折訊號。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06 收盤盤後緊急更新】美股 S&P 7,267（-1.62%），道瓊跌 953 點，費半 -3.57%，高盛撤除 2026 全年降息預期！波浪理論持續應驗——台股第四波修正仍在進行中。台積電日前強勢填息，ADR 已跌至 $410.84。底部地圖不變：【第一道防線】42,000 點試單；【第二道防線】40,000 點大加碼；【極端情境】36,000~38,000 點傾巢而出。台積電：回檔 2,200 元以下分批，2,100 元以下全力買進！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【杜大師底部地圖不變】42,000點試單 → 40,000點大加碼 → 36,000~38,000點傾巢而出！台積電回檔 2,200 元以下分批；2,100 元以下全力買進！"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.15 收盤盤後】觀眾朋友晚安！今天台股創下歷史紀錄啦！大漲1200點，外資狂買台積電。受到美伊和平協議與輝達Vera晶片的超強利多帶動，史詩級軋空行情讓台股衝破4.5萬點！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "密切關注今晚美股表現，明日留意中小型股的接棒效應。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，費半 -3.57%。AI 概念股全面承壓，但今日有一個重要訊號：資金明顯轉入營建股（央行楊金龍宣布「選擇性信用管制到此為止」），顯示資金從「高成長」轉向「高股息+低本益比」防禦配置！高盛撤降息預期進一步強化這個輪動邏輯。台積電日前強勢填息，觀察是否有買盤進場。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "【收盤操作】資金輪動！防禦型配置（0056、00878、營建股）成為避風港。台積電回檔後觀察量能，有低接才考慮電子股布局。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06 收盤盤後】美股費半 -3.57%，SMCI -27.98%（增資稀釋），記憶體族群持續承壓。但基本面：HBM 需求面並未因市場下跌而改變，這次下跌純粹是市場情緒與籌碼面問題。高盛撤 2026 降息預期短線壓制估值，但台積電 5 月營收史上最高驗證 AI 需求強勁！等大盤底部確立後，記憶體族群（南亞科、威剛、華邦電）將是率先反彈的板塊，估值已修正至合理甚至低估區間。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "【收盤操作】開始建立記憶體觀察清單：南亞科、威剛、華邦電。等大盤底部確立（FOMC 6/17 後）再進場，記憶體是首選反彈標的。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，外資台指期空單升至 60,472 口（夜盤再加空 777 口！）。今日外資現貨賣超 935 億台幣（史上第 8 大），三大法人合計賣超 1,173 億。高盛撤 2026 全年降息預期是最大利空！台積電 ADR -4.48%，日前強勢填息。若明日外資現貨賣超縮減至 300 億以下，可視為賣壓趨緩的轉折訊號，屆時才考慮小量試單。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "【收盤操作】外資空單 60,472 口仍在增加！等外資賣超縮至 300 億以下才試單。台積電回檔 2,200 元以下才考慮承接。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，費半 -3.57%，VIX 21.71。台股今日收 43,225（-1,479點），月線（43,950）已失守！技術面：下一支撐為季線（42,500）。台積電日前強勢填息，指數將因此自動降約 100 點，需特別注意！高盛撤降息預期是大熊訊號。FOMC（6/17）前，技術面偏空——等季線（42,500）出現支撐確認才進場，切勿在技術面破位時逆勢接刀。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "【收盤操作】月線（43,950）已失守！下一關卡：台股季線（42,500）。等季線附近支撐確認再進場。FOMC（6/17）前持現金。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 收盤盤後】期貨今日再度大賺！S&P -1.62%，費半 -3.57%，外資台指期夜盤再加空 777 口 → 60,472 口！空方完全掌控！台積電日前強勢填息，期指將自動調整結算點。操作策略：空方倉位部分獲利了結（已達預期目標），明日觀察台積電量能作為短多觸發點。若無填息跡象，繼續偏空，下一個空方目標 42,000 點。高盛撤降息 = 空方邏輯強化！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "【收盤操作】空單部分獲利了結。明日觀察台積電量能——有填息則短多試單；無填息則繼續偏空，目標 42,000 點！"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06 收盤盤後緊急更新】美股收盤：S&P 7,267（-1.62%），道瓊跌 953 點，費半 -3.57%，VIX 21.71！今日五重利空同步確認：①CPI 4.2%（通膨頑固）②高盛撤除 2026 全年降息預期（最大震撼！）③美伊衝突持續④外資台指期空單升至 60,472 口⑤SpaceX IPO 6/12 吸金。台股月線（43,950）失守，下一支撐季線（42,500）。台積電日前強勢填息，填息速度是多頭信心的最關鍵指標！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【收盤操作】五重利空！高盛撤降息是今日最震撼消息。觀察台積電除息後後續量能。FOMC（6/17）前保守操作，季線（42,500）附近再評估。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.16 盤前速報】我早就說過會有獲利了結的賣壓！但哲哲是不是告訴過你，跌下來就是要買！昨天早盤大漲我沒追，尾盤殺下來我可是帶著會員進場了。接下來台股開盤，看我表演！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "別人恐懼我貪婪，跟著哲哲危機入市！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.15 收盤盤後】各位同學，今天這種千點大漲，正是課程中提到的『突破型軋空』！外資的程式交易在突破關鍵價位後全面啟動追價。掌握好籌碼流向，就能在這波行情獲利。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "運用順勢交易策略，跌破今日K線中值前持續看多。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.16 盤前速報】美伊協議大幅降低了油價上行的尾部風險，這使得全球通膨預期進一步降溫。資金從避險美元流出，這對新興市場（包含台股）的資金面是中長期的結構性利多。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "大循環指標向上，逢低布局新興市場與台股大盤。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.16 盤前速報】昨天美股那種開高走低就是標準的割韭菜盤啦。一堆人在那邊看新聞做股票，結果被倒貨剛好而已。台股今天開盤如果跟著恐慌下殺，反而是可以看看有沒有錯殺的好標的。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "關掉新聞，專注基本面，有便宜好貨就撿。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.16 盤前速報】美股殺尾盤反映了資金的高檔換手。從財報數據來看，台灣供應鏈在下半年的能見度依然極高。和平協議有助於降低航運與原物料成本，毛利率有望進一步提升。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "關注財報優異且本益比合理的台股隱形冠軍。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.15 收盤盤後】台股衝上4.5萬，存股族該下車嗎？今天外資回頭大買權值股。但我們強調穩健投資，高股息ETF和績優台積電還是核心配置，不要因為單日大漲就亂了陣腳。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "維持定期定額紀律，部分獲利可轉入防禦型資產。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.15 收盤盤後】今日台股展現無與倫比的爆發力，美伊和平與輝達利多雙管齊下。外資今日瘋狂掃貨，籌碼面極度偏多，這股資金外溢效應將持續推升大盤。我們必須有心去挖掘下一個潛力股。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "精選低位階的Vera晶片受惠股，提前卡位。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.16 盤前速報】各位，我以前錯了，但現在我極度看好台積電！美股尾盤的下殺根本是給我們上車的最後機會。和平協議讓供應鏈更穩定，台積電的先進製程無可取代，這點小跌不用怕！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "歐印台積電，一張不賣，奇蹟自來！"
    },
  {
    name: "Alan Chen",
    style: "具身智能與量化交易",
    viewpoint: "【2026.06.15 收盤盤後】從裸K來看，今天這根1200點的實體長紅，直接貫穿了所有壓力區。配合美伊和平利多，外資這波買盤是真金白銀。不過乖離率過大，明天若開高容易留上影線。",
    stocks: ["2330 (台積電)", "低軌衛星", "具身智能概念股"],
    entryPoint: "等待回測15分K的支撐位再進場，嚴格設定停損。"
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
