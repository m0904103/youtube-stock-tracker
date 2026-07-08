const usInfluencersData = [
    {
        name: "Jeremy Grantham (GMO)",
        style: "極度悲觀 (看空)",
        institutionalMatch: 4,
        institutionalMatchDesc: "看空科技股與泡沫，符合法人減碼趨勢，但過於悲觀。",
        viewpoint: "【2026.07.03 最新解析】Jeremy Grantham 警告，當前由 AI 狂熱驅動的美股是美國史上最昂貴的泡沫。他視此為不可持續的投機，預警科技股恐面臨高達 70% 的崩盤，估值終將回歸歷史常態。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "TLT (長期國債)"],
        entryPoint: "建議大幅降低美股曝險，轉向估值合理的國際市場，並增配債券與貴金屬防禦風險。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        institutionalMatch: 2,
        institutionalMatchDesc: "極度樂觀喊 8000 點，無視暗池派發與高檔 Gamma 翻轉風險。",
        viewpoint: "【2026.07.08 最新解析】將標普500年底目標上調至8000點，看好7月財報季，但強烈警告8月至10月可能出現10-20%的劇烈回調。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "把握7月財報季行情，並為8月後的潛在波動做好防禦準備。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        institutionalMatch: 5,
        institutionalMatchDesc: "精準命中資金從高估值軟體輪動至價值與防禦板塊的趨勢。",
        viewpoint: "【2026.07.08 最新解析】指出半導體板塊出現『白銀時刻』，獲利動能見頂，建議投資人將資金從半導體輪動至今年落後的AI雲端服務商（如微軟、亞馬遜）。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "適度減碼半導體，轉向佈局大型雲端巨頭。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        institutionalMatch: 4,
        institutionalMatchDesc: "避開擁擠交易，聚焦基建與現金流，符合聰明錢動向。",
        viewpoint: "【2026.07.05 週末最新解析】本週末無針對非農數據的最新推文或言論。他近期發言主要是看好 AI 基礎設施巨頭並避開特斯拉。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "建議關注具備長期穩定現金流的 AI 大型科技股，逢低分批佈局。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        institutionalMatch: 4,
        institutionalMatchDesc: "提早警告 AI 泡沫，保留現金防禦尾部風險。",
        viewpoint: "【2026.07.05 週末最新解析】本週末無發布針對非農或 AI 的最新專訪。目前最新公開言論仍停留在六月初對 AI 泡沫風險的警告。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "在缺乏最新觀點指引下，建議暫勿盲目追高 AI 概念股，並保留現金應對不確定性。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        institutionalMatch: 5,
        institutionalMatchDesc: "精準獲利了結擁擠的 AI 巨頭，輪動至實體硬體與次世代基建。",
        viewpoint: "【2026.07.02 最新解析】市場披露 Druckenmiller 大幅調整 AI 佈局，減持 Alphabet 等巨頭，轉投 Nvidia 競爭對手 Etched 及 Broadcom，尋找次世代 AI 硬體潛力。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "建議適度獲利了結漲多之 AI 核心股，並關注資金輪動至次世代 AI 晶片或硬體基建標的之機會。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        institutionalMatch: 5,
        institutionalMatchDesc: "點出半導體乖離過大並增配黃金，與法人避險操作高度吻合。",
        viewpoint: "【2026.07.08 最新解析】看好標普500邁向8000點，指出外資正以創紀錄速度流入美股，但也提醒需留意夏日流動性與政府借貸帶來的潛在風險。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "順勢操作，但需密切關注宏觀流動性風險。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        institutionalMatch: 3,
        institutionalMatchDesc: "供應鏈視角，偏向實體硬體，但缺乏宏觀資金流判斷。",
        viewpoint: "【2026.07.03 最新解析】黃仁勳近期持續強調「物理 AI」與機器人為下個兆元商機，並擴張南韓工程團隊佈局，推動開放權重模型策略。此外媒體熱議其無免費午餐的節儉文化。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "建議持續追蹤輝達在機器人領域及南韓市場的實質擴張進度，以評估相關供應鏈機會。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        institutionalMatch: 2,
        institutionalMatchDesc: "專注自家產品，忽視整體宏觀流動性收緊與估值下修風險。",
        viewpoint: "【2026.07.05 週末最新解析】馬斯克週末強調 AI 能實現全民高收入。同時 Grok 4.5 傳進入內測，特斯拉限制第三方 AI 支出以扶持該模型；他亦預警 Optimus 初期量產將極慢。",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "建議關注特斯拉自研 AI 生態系發展，短期留意機器人量產預期降溫帶來的股價波動。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        institutionalMatch: 1,
        institutionalMatchDesc: "【危險反指標】無視非農衰退訊號與法人派發，逆勢加碼高估值科技股。",
        viewpoint: "【2026.07.08 最新解析】透過ARK ETF逢低加碼SpaceX與X-Energy，同時持續減持AMD及部分生技股，展現板塊輪動與堅定看好太空及新能源之策略。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "可關注太空探索與新能源領域的創新投資機會。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        institutionalMatch: 2,
        institutionalMatchDesc: "科技死忠派，忽視軟體板塊正遭聰明錢大幅提款的現實。",
        viewpoint: "【2026.07.02 最新解析】Dan Ives 於 7/1 盤中給予 SpaceX「優於大盤」評級與目標價 190 美元。他認為結合星鏈與 AI 基礎設施，該公司已非單純太空企業，而是深具潛力的 AI 巨頭。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "建議可將 SpaceX 視為長期的 AI 基礎設施核心概念股，於合理估值時逢低佈局。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        institutionalMatch: 1,
        institutionalMatchDesc: "迷因炒作，與華爾街量化與基本面邏輯完全脫節。",
        viewpoint: "【2026.07.02 最新解析】截至今日，Keith Gill 於 6月底至 7/1 期間並未發布任何實質持倉更新或新發言。近期論壇上的討論皆純屬散戶對股東大會等事件的猜測，並無官方動作。",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "建議暫勿根據網路謠言盲目跟單相關迷因股，應保持觀望並等待其官方確切動態。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        institutionalMatch: 3,
        institutionalMatchDesc: "隨機點名，近期雖轉向硬體，但缺乏系統性量化依據。",
        viewpoint: "【2026.07.08 最新解析】指出市場正經歷『殘酷的輪動』，提及GEV、CAT和INTC等個股大跌，但重申這些工業及科技股的長線看多邏輯不變。",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "不要被短期的板塊輪動洗出場，堅守優質基本面個股。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        institutionalMatch: 4,
        institutionalMatchDesc: "精準點出半導體乖離率過高，呼籲避開盲目追高。",
        viewpoint: "【2026.07.03 最新解析】7/1~7/2最新影片探討NVDA化身「AI央行」；提及Michael Burry警告半導體偏離均線65%，並分析MU記憶體短缺及多檔科技巨頭走勢。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "留意半導體板塊乖離率過高的回調風險，AI概念股（如NVDA、MU）切勿盲目追高，應嚴設停利停損。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        institutionalMatch: 4,
        institutionalMatchDesc: "關注 AI 雲端巨頭資本支出 (CapEx) 變現問題，符合法人疑慮。",
        viewpoint: "【2026.07.05 週末最新解析】週末未針對 7 月非農發布專題，但近期持續探討 AI 雲端巨頭資本支出，提醒面對短期總經數據波動應保持冷靜，著眼長線。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "避開盲目追高，重視 AI 企業真實獲利與技術面訊號，逢低長線佈局。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告科技巨頭估值波動與市場分化，與避險基金縮表邏輯一致。",
        viewpoint: "【2026.07.05 週末最新解析】週末無更新。總結其七月初觀點，主要聚焦特斯拉、亞馬遜等巨頭的 AI 佈局與估值重塑，以及市場流動性與 AI 板塊的分化效應。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "在降息預期升溫下，建議審視手中 AI 硬體與軟體股的配置，留意科技巨頭財報前的估值波動風險。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        institutionalMatch: 4,
        institutionalMatchDesc: "捕捉到 AI 軟硬體板塊資金輪動與節前洗盤風險。",
        viewpoint: "【2026.07.03 最新解析】7/1~7/2連續發布影片。探討Meta外賣算力事件及AI軟硬體板塊的資金輪動，並針對美國獨立日假期前夕的市場波動進行深度解析。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "節前市場波動加劇且AI板塊輪動頻繁，建議投資人謹慎控管倉位以防禦風險。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    institutionalMatch: 3,
        institutionalMatchDesc: "技術面為主，無明顯宏觀與機構籌碼背離。",
        viewpoint: "【2026.07.05 週末最新解析】週末期間無最新更新。近期最後更新為 7 月初關於蘋果、美光及科技股的相關討論。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "適逢美國獨立紀念日連假休市，建議暫時觀望並留意下週一開盤的市場情緒變化。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        institutionalMatch: 3,
        institutionalMatchDesc: "無近期更新，維持中立。",
        viewpoint: "【2026.07.05 週末最新解析】週末並未發布最新影片，分析停留在 7/2 探討美股與川普言論。因無新內容，請防範冒名詐騙。",
        entryPoint: "因週末無最新盤勢分析更新，建議暫且觀望，靜待下週一開盤後的市場訊號再行操作。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        institutionalMatch: 4,
        institutionalMatchDesc: "察覺非農後的突襲式砸盤與流動性陷阱，呼籲嚴控倉位。",
        viewpoint: "【2026.07.05 週末最新解析】7/3 發布最新影片「非農托底高開！盤中：驚雷砸盤！」。深度拆解非農數據引發的情緒波動，指出大盤雖高開卻遭遇突襲式洗盤大戲。",
        entryPoint: "面對非農數據發布後的劇烈洗盤震盪，建議投資人嚴格控制倉位，避免盲目追高殺跌。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        institutionalMatch: 3,
        institutionalMatchDesc: "無近期更新，維持中立。",
        viewpoint: "【2026.07.05 週末最新解析】週末並未發布新影片。適逢美國獨立紀念日連假，其最新分析停留在 7/2 關於 META 的直播。",
        entryPoint: "週末無新解析，建議暫時維持現有部位，靜待連假後開盤的資金動向再作決策。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "陳智霖 (分析師)",
        style: "籌碼實戰",
        institutionalMatch: 5,
        institutionalMatchDesc: "採用聰明錢邏輯，避開高估值，精準佈局低估值與防禦板塊。",
        viewpoint: "【2026.07.08 最新解析】指出台股因千點回檔進入融資清洗階段，提醒留意融資餘額減幅。強調籌碼面轉弱時應保留現金，但光通訊與CPO產業中長期趨勢未變。",
        stocks: ["2330 (台積電)", "2408 (南亞科)", "AI 供應鏈"],
        entryPoint: "建議保留現金並觀察融資變化，伺機佈局具基本面優勢的族群。"
    },

    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        institutionalMatch: 4,
        institutionalMatchDesc: "居高思危，佈局貴金屬與低基期傳產，具備極高防禦意識。",
        viewpoint: "【2026.07.08 最新解析】盤後針對殺盤解析，指出台股漲幅大進入高風險區，加上韓國記憶體股大跌引發資金保守，特別提醒投資人注意法人獲利調節的動向。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "建議價差交易者在技術指標過熱時應逢高減碼，避免盲目追高。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        institutionalMatch: 5,
        institutionalMatchDesc: "【極度防禦】空手策略完美避開高檔 Gamma 翻轉的尾部崩跌風險。",
        viewpoint: "【2026.07.02 最新解析】近期無更新。最新觀點維持 6月初的強烈示警：台股已進入「末升段」，他自曝「零持股」，並呼籲「不要賺最後一滴水」，提醒留意高檔回落風險。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "考量其末升段警告，建議見好就收，適度提高現金水位以規避高檔風險。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        institutionalMatch: 4,
        institutionalMatchDesc: "從基本面點出記憶體見頂與硬體架構轉變，領先散戶避開盲區。",
        viewpoint: "【2026.07.02 最新解析】陸行之近期聚焦高通計畫以低價 LPDDR 取代 HBM，並將 CoWoS 簡化為 Chiplet 進軍 AI 資料中心。此外，他點出美光高毛利率暗示記憶體漲價週期恐近尾聲。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "密切觀察高通新架構對 HBM 及 CoWoS 供應鏈的衝擊，並建議逢高調節記憶體族群以規避觸頂風險。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        institutionalMatch: 4,
        institutionalMatchDesc: "不盲從非農數據，點出 AI 需看重實質獲利，符合法人對 CapEx 的質疑。",
        viewpoint: "【2026.07.08 最新解析】早晨直播探討美光表現、中東局勢等國際事件，並關注盤中ABF載板族群因AI與HPC需求升溫而帶動的強勢資金回流現象。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "建議留意總經局勢變化以及具備資金回流動能的電子上游族群。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        institutionalMatch: 4,
        institutionalMatchDesc: "以資本支出為反轉指標，並提倡美債防禦，符合聰明錢槓鈴策略。",
        viewpoint: "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。需警戒科技股泡沫，以「企業資本支出」為反轉指標。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "避免重壓單一個股或產業，建議將部分獲利轉入債券與大盤型 ETF 以分散風險。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        institutionalMatch: 2,
        institutionalMatchDesc: "過度樂觀看好黃金五年，忽視短期造市商 Gamma 翻轉的暴跌風險。",
        viewpoint: "【2026.07.08 最新解析】分析無人機產業受惠美國技術移轉將成新護國神山，並認為美國宏觀操作與油價打壓實為超級牛市佈局。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "以長線視角把握AI產業革命的超級牛市，不必過度擔憂泡沫。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告高檔爆量，呼籲轉入低基期銅板股，符合板塊輪動防禦邏輯。",
        viewpoint: "【2026.07.07 最新解析】針對台股下跌千點，認為大盤雖有過熱警訊但仍有支撐，長線多頭格局不變，建議採取「急跌買、衝高賣」策略。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "面對回檔修正可視為加碼良機。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        institutionalMatch: 2,
        institutionalMatchDesc: "建議轉向 AI 軟體，與華爾街目前「逃離純軟體」的資金流向背離。",
        viewpoint: "【2026.07.03 最新解析】胡睿涵表示台股正進行高檔健康籌碼清洗，切勿預設止跌點。止跌需觀察外資期貨空單降至6萬口以下且單日買超逾千億。AI 資金應從硬體轉向應用層面。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "稍安勿躁，待外資籌碼轉多且出現止跌訊號後，再將資金轉向 AI 應用及軟體族群。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        institutionalMatch: 3,
        institutionalMatchDesc: "警告月線回測，但建議避開中小型股，與法人轉入羅素2000略有分歧。",
        viewpoint: "【2026.07.08 最新解析】早報指出台股受美股與三星財報拖累回測支撐，45000點為多空關鍵。籌碼偏空且地緣風險升溫，市場擔憂AI供應鏈需求降溫。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "建議嚴控部位，資金可轉向生技、機器人與軍工等具抗跌避險屬性的族群。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        institutionalMatch: 4,
        institutionalMatchDesc: "轉向成熟製程與低基期，具備資金避風港概念。",
        viewpoint: "【2026.07.08 最新解析】針對台幣貶值與台股下跌，提出「五檔黑馬股」佈局策略，並特別點名看好先進封裝指標股日月光投控。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "留意大戶籌碼動向與先進封裝相關板塊的逢低佈局機會。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        institutionalMatch: 4,
        institutionalMatchDesc: "追蹤外資賣超，轉向被動元件等低基期硬體，符合輪動方向。",
        viewpoint: "【2026.07.08 最新解析】理財達人秀探討載板、被動元件及矽晶圓大跌後的進場時機，並於網路版解析記憶體與載板利空消息真假。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "評估大跌後被動元件及封測類股的進場價值與支撐價位。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        institutionalMatch: 3,
        institutionalMatchDesc: "純技術面看多，缺乏對暗池流動性枯竭的風險意識。",
        viewpoint: "【2026.07.08 最新解析】發表中石化(1314)轉型與技術面分析文章，並提醒台股高檔震盪時應回歸技術線圖，關注月線支撐。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "嚴守停損與進出紀律，關注前波低點是否跌破，切勿盲目恐慌。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        institutionalMatch: 3,
        institutionalMatchDesc: "順勢操作，中立看待籌碼。",
        viewpoint: "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。強調追蹤主力動能與均線結構。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "持續觀察法人籌碼流向，順勢操作不預設立場並嚴設停損。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        institutionalMatch: 4,
        institutionalMatchDesc: "關注外資空單與設備股，方向正確。",
        viewpoint: "【2026.07.08 最新解析】節目探討台股盤中大跌1535點原因，分析DRAM與國巨等被動元件走勢，以及AI板塊在震盪中的表現。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "關注大跌後DRAM與被動元件的下半年投資風向與進場點。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        institutionalMatch: 2,
        institutionalMatchDesc: "無視外資高額空單與非農衰退隱憂，一路看多台積電，具極高回調風險。",
        viewpoint: "【2026.07.08 最新解析】認為7日重挫是三星財報引發的情緒性賣壓，AI長線趨勢未變。將大跌比喻為百貨公司週年慶，強調恐慌中常孕育大行情，是撿便宜的良機。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "建議趁錯殺時以自有資金現貨提前卡位績優股，嚴禁使用高槓桿與融資。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告高空單抄底風險，等待轉折，符合法人高檔震盪佈局邏輯。",
        viewpoint: "【2026.07.03 盤勢追蹤】近期警告投資人面對外資空單與記憶體弱勢「小心抄底變抄家」。但 7/3 最新觀點指出「坦克線再現」，預告下週盤勢將迎來關鍵轉折。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "面對高空單與崩跌風險切勿盲目抄底，應靜待下週趨勢確認後再行佈局。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        institutionalMatch: 4,
        institutionalMatchDesc: "佈局穩健現金流與債券，完美契合防禦性宏觀戰略。",
        viewpoint: "【2026.07.03 盤勢追蹤】7月初指出下半年聚焦供給衝擊、央行政策與 AI 資本支出三大變數。高利率環境持續，全球經濟軟著陸機率五成。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "建議佈局現金流穩健的龍頭企業及中短天期高評級債券，以因應高利率環境。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        institutionalMatch: 3,
        institutionalMatchDesc: "長期持有抗震，但缺乏主動的尾部風險 (Tail Risk) 對沖動作。",
        viewpoint: "【2026.07.05 週末最新解析】7/4 發布 EP676 探討投資配置。近期 6 月非農數據疲軟雖降溫升息預期，卻引發科技股賣壓。節目提醒保持冷靜，依據宏觀總經理性應對市場波動。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "面對科技股震盪應維持紀律，審視資產配置，避免隨短期數據盲目殺低。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        institutionalMatch: 4,
        institutionalMatchDesc: "深入挖掘 CPO 光通訊實體硬體，符合法人逃離軟體轉向硬體的趨勢。",
        viewpoint: "【2026.07.08 最新解析】更新上市櫃公司6月份營收排行數據，關注被動元件族群大跌表現與特斯拉Robotaxi進軍邁阿密動態。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "可利用最新發布的6月營收數據來篩選基本面強勢股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        institutionalMatch: 3,
        institutionalMatchDesc: "高股息 ETF 防禦，中立偏安穩。",
        viewpoint: "【2026.07.03 盤勢追蹤】7月初節目探討台股 7 月 V 轉走強契機、台積電法說與美國國慶影響。並深入比較台積電與聯電股價差異，剖析台達電等權值股後市。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "建議可運用主動式高股息 ETF 進行平衡操作，並關注台積電與台達電後市以因應波動。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        institutionalMatch: 1,
        institutionalMatchDesc: "【系統警告】詐騙幻覺，毫無參考價值。",
        viewpoint: "【2026.06.25 真實查核】系統警告：網路上並無「有心節目」與分析師「陳力銘」。實際上，2026 年真實新聞中的陳力銘是前台積電工程師，因竊取 2 奈米商業機密，於 2026 年 4 月被判處 10 年有期徒刑！過去此欄位為嚴重 AI 幻覺，現已強制糾正並刪除不實投資建議。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【警告】請勿輕信查無實證的財經來源，以免落入詐騙陷阱或接收錯誤的 AI 幻覺資訊。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        institutionalMatch: 3,
        institutionalMatchDesc: "跟隨主流，但需留意飆股在高檔流動性陷阱中的回撤風險。",
        viewpoint: "【2026.07.08 最新解析】針對台股千點急殺，認為是新台幣貶值、韓股重挫等外部假利空引發的恐慌，直言是老天爺送錢的黃金買點。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "趁恐慌逢低加碼台積電、聯發科等具產業壟斷地位的績優權值股。"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告末升段與邪惡第五波，防禦意識極佳。",
        viewpoint: "【2026.07.08 最新解析】頻道發布精選直播教學，探討無人機軍工產業，詳細分析台灣相關供應鏈與政府政策預算帶來的影響。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "留意無人機與軍工概念股的政策受惠與長線佈局機會。"
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
