const usInfluencersData = [

    {
        name: "老李玩美股",
        avatar: "https://ui-avatars.com/api/?name=老李&background=0D8ABC&color=fff",
        market: "US",
        type: "Macro/Quant",
        reliability: 82,
        winRate: "68%",
        avgReturn: "12%",
        viewpoint: "【2026.07.16 盤後最新】近期內容主要聚焦於美股大盤趨勢、總體經濟風險、大型科技股的技術分析，以及個人持倉的加減碼操作。",
        stocks: ["AVGO", "NVDA", "GOOG"],
        entryPoint: "建議控管好倉位與風險，保持良好投資心態以客觀應對大盤波動。",
        instMatch: 3
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
        viewpoint: "【2026.07.16 盤後最新】認為半導體修正只是多頭市場的「正常整理」。台積電財報優異且擴大投資，AI結構性需求依然強勁。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "建議將近期的半導體回檔視為逢低買入的絕佳機會。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        institutionalMatch: 5,
        institutionalMatchDesc: "精準命中資金從高估值軟體輪動至價值與防禦板塊的趨勢。",
        viewpoint: "【2026.07.16 盤後最新】警告美股資金正從半導體輪動至其他類股。台積電AI需求雖強，但板塊過熱且估值過高，短期面臨獲利了結壓力。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "建議減少熱門動能股敞口，轉往基本面穩健且估值合理的其他類股。"
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
        viewpoint: "【2026.07.16 盤後最新】台積電強勁財報驗證AI需求，但提醒需注意地緣政治及宏觀數據對供應鏈的影響，警告市場可能出現極端波動。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "建議在AI熱潮中不要過於安逸，密切關注技術與宏觀指標以應對風險。"
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
        viewpoint: "【2026.07.16 盤後最新】認為台積電產能無法滿足其AI晶片爆發性需求，因而推動自建晶圓廠計畫，強調是為擴大產能而非完全取代。",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "建議關注企業自建算力的趨勢，但短期內不需過度擔憂台積電龍頭地位。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        institutionalMatch: 1,
        institutionalMatchDesc: "【危險反指標】無視非農衰退訊號與法人派發，逆勢加碼高估值科技股。",
        viewpoint: "【2026.07.16 盤後最新】長期看好AI，但對台積電採取波段操作。股價強勢時獲利了結，將資金轉向更具潛力或被低估的底層技術與創新領域。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "建議靈活調整持倉，逢高獲利了結強勢股並尋找下一個創新標的。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        institutionalMatch: 2,
        institutionalMatchDesc: "科技死忠派，忽視軟體板塊正遭聰明錢大幅提款的現實。",
        viewpoint: "【2026.07.16 盤後最新】強調AI革命仍在早期，台積電是控制閥。近期市場震盪由地緣與總經因素造成，不影響長線強勁基本面。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "建議將優質AI龍頭股的短期回檔視為「世代級的買進機會」堅定抱牢。"
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
        viewpoint: "【2026.07.16 盤後最新】稱讚台積電財報「好得驚人」，但指出半導體市場已成情緒主導的賭場。股價受地緣政治拖累，與基本面脫節。",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "建議不要被短期市場情緒恐嚇，耐心等待優質科技股的回檔買點。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        institutionalMatch: 4,
        institutionalMatchDesc: "精準點出半導體乖離率過高，呼籲避開盲目追高。",
        viewpoint: "【2026.07.16 盤後最新】結合財報與技術指標解析台積電走勢。認為大盤受政策預期影響，台積電雖財報亮眼，短期仍面臨技術面壓力。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "建議嚴格依循技術面的支撐與壓力位進行操作，切勿在波動中盲目追高。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        institutionalMatch: 4,
        institutionalMatchDesc: "關注 AI 雲端巨頭資本支出 (CapEx) 變現問題，符合法人疑慮。",
        viewpoint: "【2026.07.16 盤後最新】認為近期科技股回調受宏觀經濟及資金輪動影響，並深入解析了台積電2奈米技術護城河與地緣風險。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "建議釐清短期波動與長期邏輯，逢低佈局具備技術優勢的AI核心資產。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告科技巨頭估值波動與市場分化，與避險基金縮表邏輯一致。",
        viewpoint: "【2026.07.16 盤後最新】肯定台積電在AI晶片製造的絕對競爭力與優異財報，但提醒市場經歷板塊輪動，半導體面臨高估值回調壓力。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "建議結合財報數據與行業趨勢，在板塊輪動中尋找具備業績支撐的買點。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        institutionalMatch: 4,
        institutionalMatchDesc: "捕捉到 AI 軟硬體板塊資金輪動與節前洗盤風險。",
        viewpoint: "【2026.07.16 盤後最新】針對近期板塊輪動點評，認為半導體板塊有基本面支撐，但情緒與獲利了結導致短期回調，強調風險對沖。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "建議在市場劇烈震盪時做好風險對沖，並依個人風險承受度動態調整倉位。"
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
        viewpoint: "【2026.07.16 盤後最新】分析法說會財報與營收展望亮眼。但提醒注意市場量縮背離與可能出現的震盪，勿被利多沖昏頭而追高。",
        stocks: ["2330 (台積電)", "2408 (南亞科)", "AI 供應鏈"],
        entryPoint: "建議選擇價值低估成長股，拉回有價有量再佈局，嚴控持股比例。"
    },

    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        institutionalMatch: 4,
        institutionalMatchDesc: "居高思危，佈局貴金屬與低基期傳產，具備極高防禦意識。",
        viewpoint: "【2026.07.16 盤後最新】認為台積電財報雖好，但ADR下跌反映出利多出盡及科技股高波動警報。指出過往有「法說會後整理」規律。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "面對技術性修正應冷靜看待基本面，並留意低檔支撐區間的買點。"
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
        viewpoint: "【2026.07.16 最新動態】早晨節目探討法說前美股震盪影響，提醒AI應作為理財助教而非依賴報復性翻身。暫無盤後最新解讀。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "留意台股高檔震盪下的資金配置與風險控管。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        institutionalMatch: 4,
        institutionalMatchDesc: "以資本支出為反轉指標，並提倡美債防禦，符合聰明錢槓鈴策略。",
        viewpoint: "【2026.07.16 盤後最新】持續擔憂台積電赴美設廠成本與效率問題，警告AI產業若關鍵供應鏈無法獲利，長期恐面臨泡沫化風險。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "隨時留意AI相關供應鏈的獲利與資本支出狀況，防範產業泡沫破裂。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        institutionalMatch: 2,
        institutionalMatchDesc: "過度樂觀看好黃金五年，忽視短期造市商 Gamma 翻轉的暴跌風險。",
        viewpoint: "【2026.07.16 盤後最新】看好台積電長線具備定價優勢與強大毛利率，推算股價有望挑戰更高目標，認為AI仍在基礎建設期無泡沫疑慮。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "將台積電視為強勁的長線避險資產，逢回檔即可安心持有。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告高檔爆量，呼籲轉入低基期銅板股，符合板塊輪動防禦邏輯。",
        viewpoint: "【2026.07.16 盤後最新】長線看好台積電受惠AI需求，目標價具上檔空間；短線提醒若遇技術面過熱或成交量異常，應適度調節持股。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "遇回檔5%至7%或回到合理區間時，可分批佈局。"
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
        viewpoint: "【2026.07.16 盤後最新】法說後台股震盪關鍵在外資是否因亮眼展望重新回補權值股，並建議觀察台積電在月線關卡的防衛表現。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "維持「低接不追高」策略，控制風險並留意AI供應鏈買盤回流。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        institutionalMatch: 4,
        institutionalMatchDesc: "轉向成熟製程與低基期，具備資金避風港概念。",
        viewpoint: "【2026.07.16 盤後最新】認為法說會展望強勁，股價震盪僅為部位調整而非基本面轉弱，強調資金輪動下先進封裝與散熱族群仍具潛力。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "避開純題材炒作，將資金佈局在具實質成長動能的先進封裝等供應鏈。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        institutionalMatch: 4,
        institutionalMatchDesc: "追蹤外資賣超，轉向被動元件等低基期硬體，符合輪動方向。",
        viewpoint: "【2026.07.16 盤後最新】探討法說會釋出的漲價、缺料等訊號對股價的壓力，並解析市場洗盤過程中先進封裝及設備股的機會。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "在市場洗盤後，可留意具備實質成長動能的先進封裝等優質個股。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        institutionalMatch: 3,
        institutionalMatchDesc: "純技術面看多，缺乏對暗池流動性枯竭的風險意識。",
        viewpoint: "【2026.07.16 盤後最新】針對法說會後出現的短線修正壓力，強調應利用支撐與壓力線等技術指標判斷多空與進出場點。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "面對大盤高檔震盪，應等待回檔至技術面起漲點再進行波段操作。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        institutionalMatch: 3,
        institutionalMatchDesc: "順勢操作，中立看待籌碼。",
        viewpoint: "【2026.07.13 最新動態】持續分析AI、電力、機器人等強勢概念股。推廣「龍王指標」等機械化操作策略，建議關注資金輪動、嚴格設定停損。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "遵循機械化操作紀律，緊盯AI與電力股的資金輪動與籌碼流向。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        institutionalMatch: 4,
        institutionalMatchDesc: "關注外資空單與設備股，方向正確。",
        viewpoint: "【2026.07.16 盤後最新】認為法說會釋出強勁財測與資本支出利多，但因市場預期高導致短線利多出盡與賣壓，長線趨勢未變。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "將短線震盪視為長線機會，逢低佈局AI與先進封裝供應鏈。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        institutionalMatch: 2,
        institutionalMatchDesc: "無視外資高額空單與非農衰退隱憂，一路看多台積電，具極高回調風險。",
        viewpoint: "【2026.07.16 盤後最新】以「法說大爆炸」形容台積電財報遠超預期。認為盤後ADR震盪僅是市場「吹毛求疵」，長線利多不變。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "股價若有拉回反而要用力買，特別看好0050及設備概念股。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告高空單抄底風險，等待轉折，符合法人高檔震盪佈局邏輯。",
        viewpoint: "【2026.07.13 最新動態】近期重點提醒當前盤勢震盪加劇「不好搞」，需謹慎應對資金快速輪動與大盤的劇烈變化，做好風險控管。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "面對震盪劇烈的盤勢，應審慎控管資金部位與投資風險。"
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
        viewpoint: "【2026.07.16 最新動態】尚未針對法說會發布最新集數。前次提到「盤不好就想起台積電的好」，分析大盤反彈與技術面壓力。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "盤勢不佳時可回歸關注穩健基本面權值股。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        institutionalMatch: 4,
        institutionalMatchDesc: "深入挖掘 CPO 光通訊實體硬體，符合法人逃離軟體轉向硬體的趨勢。",
        viewpoint: "【2026.07.16 盤後最新】整理法說會重點，包含營收與獲利創新高、大幅上調全年目標及資本支出，顯示AI結構性需求強勁。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "依據財測與資本支出數據理性評估，關注先進製程及海外擴廠影響。"
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
        viewpoint: "【2026.07.16 盤後最新】強調台積電在先進製程與封裝具絕對稀缺性與定價權，漲價底氣足，並將國際利空引發的回檔視為錯殺買點。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "選股不選市，趁國際利空拉回時積極佈局具產業壟斷地位的權值股。"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        institutionalMatch: 4,
        institutionalMatchDesc: "警告末升段與邪惡第五波，防禦意識極佳。",
        viewpoint: "【2026.07.16 盤後最新】指出台積電財報優異但市場反應為利多出盡，提醒投資人注意法人籌碼變動與短線技術面修正風險。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "不要僅憑短線新聞利多追高，應避開高檔震盪風險並關注長線趨勢。"
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
