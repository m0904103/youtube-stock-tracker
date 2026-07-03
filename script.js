const usInfluencersData = [
    {
        name: "Jeremy Grantham (GMO)",
        style: "極度悲觀 (看空)",
        viewpoint: "【2026.07.03 最新解析】Jeremy Grantham 警告，當前由 AI 狂熱驅動的美股是美國史上最昂貴的泡沫。他視此為不可持續的投機，預警科技股恐面臨高達 70% 的崩盤，估值終將回歸歷史常態。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "TLT (長期國債)"],
        entryPoint: "建議大幅降低美股曝險，轉向估值合理的國際市場，並增配債券與貴金屬防禦風險。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.07.03 週末前最新解析】Tom Lee 將標普年底目標上調至 8000 點！看好 AI 與基建雙引擎，點名科技、金融、工業、小型股及能源板塊，並認為非農數據前的波動是長線極佳買點。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "維持「逢低買進」策略，趁半導體等強勢板塊震盪時分批佈局科技與小型股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.07.03 週末前最新解析】大摩警告半導體動能已近見頂，高波動率增加持倉難度。市場正經歷「滾動復甦」，資金正從擁擠的 AI 科技股流出，轉往落後補漲板塊。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "建議減碼擁擠的科技動能股，並將資金轉向非必需消費品、運輸及區域性銀行等防禦板塊。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.07.01 最新解析】Ackman 於 6/30 推文看好超大型雲端供應商。Pershing Square 於 7/1 確認趁回檔建倉微軟約 20.9億美元，同時預告 Q2 將揭露四檔新投資標的。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "可密切關注其即將公布的 Q2 四檔新標的，並留意微軟等 AI 雲端巨頭的回檔佈局機會。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.07.02 最新解析】達里歐警告 AI 產業呈現典型泡沫特徵，預期未來 5 至 10 年美股實質報酬率可能轉負。不過橋水基金近期仍持續佈局半導體與科技巨頭，展現靈活輪動策略。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "建議將部分資金（約 10-15%）配置於黃金以避險，並對 AI 科技股的高波動風險保持警戒。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.07.02 最新解析】市場披露 Druckenmiller 大幅調整 AI 佈局，減持 Alphabet 等巨頭，轉投 Nvidia 競爭對手 Etched 及 Broadcom，尋找次世代 AI 硬體潛力。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "建議適度獲利了結漲多之 AI 核心股，並關注資金輪動至次世代 AI 晶片或硬體基建標的之機會。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.07.02 最新解析】Kobeissi 指出標普500第二季大漲，但半導體跑贏大盤達 85 個百分點，偏離差距超越達康泡沫。同時觀察到 AI 產業鏈就業萎縮，央行避險需求帶動黃金創紀錄。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "鑑於半導體板塊漲幅創歷史新高，建議適度逢高獲利了結，並轉入黃金以提升抗風險能力。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.07.03 最新解析】黃仁勳近期持續強調「物理 AI」與機器人為下個兆元商機，並擴張南韓工程團隊佈局，推動開放權重模型策略。此外媒體熱議其無免費午餐的節儉文化。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "建議持續追蹤輝達在機器人領域及南韓市場的實質擴張進度，以評估相關供應鏈機會。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.07.03 最新解析】截至 7/3 早晨，馬斯克並未針對 Tesla Q2 超乎預期的交付數據發表新推文。其近期發言仍專注於 AI、機器人與自動駕駛戰略。",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "交付數據超預期帶動利好，建議關注後續 AI 與自駕戰略實質進展，靜待回檔伺機佈局。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.07.01 最新解析】ARK Invest 於 6月底持續調整投資組合，加碼佈局數位資產與金融科技，買入 Circle (CRCL) 與 SoFi；同時減碼生技股 Twist Bioscience。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "可關注其逢低加碼的數位資產與金融科技板塊，並留意生技類股的減碼風險。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.07.02 最新解析】Dan Ives 於 7/1 盤中給予 SpaceX「優於大盤」評級與目標價 190 美元。他認為結合星鏈與 AI 基礎設施，該公司已非單純太空企業，而是深具潛力的 AI 巨頭。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "建議可將 SpaceX 視為長期的 AI 基礎設施核心概念股，於合理估值時逢低佈局。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.07.02 最新解析】截至今日，Keith Gill 於 6月底至 7/1 期間並未發布任何實質持倉更新或新發言。近期論壇上的討論皆純屬散戶對股東大會等事件的猜測，並無官方動作。",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "建議暫勿根據網路謠言盲目跟單相關迷因股，應保持觀望並等待其官方確切動態。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.07.02 最新解析】7/1 節目中 Cramer 建議買進 GEV 與 TEL；認為 UCTT 太貴並看空 VYGR。他指出華爾街資金正轉向美光 (Micron) 等 AI 硬體供應鏈。",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "優先佈局受惠於 AI 基礎建設的硬體供應商與優質工業股，避開未獲利的投機企業。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.07.03 最新解析】7/1~7/2最新影片探討NVDA化身「AI央行」；提及Michael Burry警告半導體偏離均線65%，並分析MU記憶體短缺及多檔科技巨頭走勢。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "留意半導體板塊乖離率過高的回調風險，AI概念股（如NVDA、MU）切勿盲目追高，應嚴設停利停損。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.25 真實觀點】我們持續重點追蹤 Nvidia、Palantir 等 AI 核心企業的財報與技術落地情況，評估市場泡沫。同時，我也高度關注美聯儲政策變化、債務危機及地緣政治（如荷莫茲海峽局勢）對美股的風險傳導。這是一個考驗估值邏輯與抗壓能力的時刻。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "逢低佈局具備實質盈利與算力護城河的 AI 龍頭，警惕地緣與宏觀風險，保留現金彈性。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.25 真實觀點】AI 投資邏輯已發生深刻切換！市場焦點正從單純追捧 GPU，轉向具備訂單能見度的『瓶頸資產』與基礎設施組件（如儲存、電力、液冷等）。例如美光已轉型為核心的 AI 基建資產。全球資產定價正圍繞 AI 時代全面重估。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "逐步獲利了結漲幅已大的純 GPU 概念股，資金輪動至儲存、電力、液冷等具訂單能見度的瓶頸資產。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.07.03 最新解析】7/1~7/2連續發布影片。探討Meta外賣算力事件及AI軟硬體板塊的資金輪動，並針對美國獨立日假期前夕的市場波動進行深度解析。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "節前市場波動加劇且AI板塊輪動頻繁，建議投資人謹慎控管倉位以防禦風險。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.25 真實觀點】支撐 AI 兆級估值的主因深受大國地緣政治博弈影響，而非純粹的財報基本面。輝達等企業內部已浮現減速訊號，甚至未來可能淪為『硬碟公司』，硬體繁榮背後潛藏長期的泡沫破裂風險。市場需密切關注聯準會政策對宏觀流動性的吸血效應。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "面對 AI 高估值與未來潛在的巨型 IPO 浪潮，應保持警戒並控制倉位，避免成為華爾街的退出流動性。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.25 真實觀點】我們認為，2026 年 6 月至 11 月是佈局未來五年『AI 超級大牛市』的關鍵窗口期。龐大資金將持續湧入 AI 基礎設施領域，包含 GPU、HBM、先進封裝及光通訊。短期美光、博通的波動是正常現象，並不改變 AI 時代的大趨勢。",
        entryPoint: "新手建議定期定額（DCA）買進 SMH、QQQ、VOO 等 ETF，資深者可逢低佈局 AI 供應鏈龍頭。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.25 真實觀點】哈囉大家！近期必須密切關注聯準會政策動向帶來的市場逆風，以及潛在的金融風暴風險。在產業面，AI 領域已進入關鍵分水嶺，科技巨頭間的戰略競爭白熱化。針對近期美股震盪，像 Google 等優質科技股在特定支撐點位將浮現修正下的潛在機會。",
        entryPoint: "面對市場波動，耐心等待優質科技股回測至關鍵支撐點位後，再行逢低佈局並嚴控風險。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.25 真實觀點】華爾街策略師近期紛紛示警！科技巨頭龐大的 AI 資本支出已改變了投資邏輯，使美股對利率的敏感度大增。目前大盤過度集中於半導體板塊，扣除 AI 概念股後，整體市場幾乎持平。這種極高的投機性暗示著美股可能已經處於波段高點。",
        entryPoint: "面對 AI 板塊高集中度的風險，採取多元資產配置分散部位，並密切觀察油價與利率動向。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.07.03 獅公傳奇最新解析】台股大盤持續震盪走高，但受韓國記憶體股大跌影響，擔憂高檔需求承接力不足。未來漲價空間恐受壓縮，短線資金轉趨保守，需密切關注經濟數據。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "現階段建議採取「少量操作」原則，以「低進高出」的短線操作為主，並居高思危避免過度投入資金。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.07.02 最新解析】近期無更新。最新觀點維持 6月初的強烈示警：台股已進入「末升段」，他自曝「零持股」，並呼籲「不要賺最後一滴水」，提醒留意高檔回落風險。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "考量其末升段警告，建議見好就收，適度提高現金水位以規避高檔風險。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.07.02 最新解析】陸行之近期聚焦高通計畫以低價 LPDDR 取代 HBM，並將 CoWoS 簡化為 Chiplet 進軍 AI 資料中心。此外，他點出美光高毛利率暗示記憶體漲價週期恐近尾聲。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "密切觀察高通新架構對 HBM 及 CoWoS 供應鏈的衝擊，並建議逢高調節記憶體族群以規避觸頂風險。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.07.03 週末前最新解析】今日早報主題為「川普晶圓夢又點台積電？非農降溫通膨下得去？」。分析川普對台積電潛在影響與通膨降溫實效，市場面臨政策與總經雙重考驗。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "留意美國選情政策雜音與通膨數據變化，控制持股水位並持續關注半導體權值股。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。需警戒科技股泡沫，以「企業資本支出」為反轉指標。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "避免重壓單一個股或產業，建議將部分獲利轉入債券與大盤型 ETF 以分散風險。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.07.03 盤勢追蹤】吳嘉隆指出 AI 是 5 到 6 年產業革命，基礎建設期無泡沫疑慮。看好台灣迎來黃金 5 年，台股有望翻倍，並點名「無人機」為潛在的第三座護國神山。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "建議捨棄短期循環思維，長線佈局 AI 硬體設施與無人機概念股。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.07.03 盤勢追蹤】杜金龍指出，台股創高後震盪加劇，需防範回測風險。資金恐轉向低基期「便當股」與記憶體轉機股，呼籲留意高檔爆量與融資餘額過高警訊。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "震盪行情中應買黑不買紅，將資金適度轉佈局低位階具基本面的銅板轉機股。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.07.03 最新解析】胡睿涵表示台股正進行高檔健康籌碼清洗，切勿預設止跌點。止跌需觀察外資期貨空單降至6萬口以下且單日買超逾千億。AI 資金應從硬體轉向應用層面。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "稍安勿躁，待外資籌碼轉多且出現止跌訊號後，再將資金轉向 AI 應用及軟體族群。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.07.03 週末前最新解析】台股 7/3 開低走高，但電子權值股仍持續承受外資沉重賣壓。中小型股輪動速度加快，資金轉向離岸風電與綠能題材，須特別留意高檔補跌風險。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "避開遭外資提款的電子權值股，短線操作須提防中小型股高檔補跌，切勿過度追高。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.07.03 盤勢追蹤】賴建承近期分析重點聚焦於成熟製程漲價受惠股、封測族群行情，並探討了 AI 算力板塊（如 Meta 雜音）對相關供應鏈的波段影響。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "建議聚焦成熟製程與封測族群等具漲價題材個股，並留意 AI 供應鏈動態伺機佈局。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.07.03 盤勢追蹤】近期節目聚焦台股 7 月展望，深度解析外資賣超策略，並探討半導體設備、PCB、被動元件及機器人題材的下半年佈局機會。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "關注外資動向，趁大盤震盪回檔時，逢低佈局具漲價題材的被動元件與半導體設備股。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.07.03 盤勢追蹤】朱家泓於近期節目指出，預期台股 7 月將呈「蛇行向上」並續創新高，特別看好封測與低價 IC 設計族群，呼籲投資人把握拉回機會。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "大盤蛇行向上，鎖定封測與低價 IC 族群，待拉回後逢低進場。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。強調追蹤主力動能與均線結構。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "持續觀察法人籌碼流向，順勢操作不預設立場並嚴設停損。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.29 週末深度解析】週末覆盤上週五重點：聚焦台股史詩級崩跌後的止跌條件與外資空單動向，探討美股是否假摔。產業面關注台積電七月法說預期、設備概念股與聯電 2.0 翻身契機。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "觀察大盤止跌訊號與外資空單動向，短線可逢低留意台積電設備概念股與聯電。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.07.03 週末前最新解析】哲哲指出外資高達 8.3 萬口空單實為正價差套利。大盤將整理 1 至 2 週消化利空，後續聚焦 7/16 台積電法說會，有望帶動指數站上 5 萬點！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "建議趁大盤整理期間分批進場佈局優質個股，嚴禁使用融資。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.07.03 盤勢追蹤】近期警告投資人面對外資空單與記憶體弱勢「小心抄底變抄家」。但 7/3 最新觀點指出「坦克線再現」，預告下週盤勢將迎來關鍵轉折。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "面對高空單與崩跌風險切勿盲目抄底，應靜待下週趨勢確認後再行佈局。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.07.03 盤勢追蹤】7月初指出下半年聚焦供給衝擊、央行政策與 AI 資本支出三大變數。高利率環境持續，全球經濟軟著陸機率五成。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "建議佈局現金流穩健的龍頭企業及中短天期高評級債券，以因應高利率環境。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.07.03 週末前最新解析】主委近期並未發布新的週末動態，觀點維持 7/1 分析。強調以均線判斷趨勢，提醒投資人在劇震中首重情緒與部位控管。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "面對劇烈震盪的盤勢，確實做好部位管理並以均線為趨勢判斷基準，切勿讓情緒影響投資計畫。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.07.03 盤勢追蹤】7/2 探討康寧 GlassBridge 光互連技術對傳統 CPO 供應鏈的潛在衝擊。同時指出 Meta 出租算力旨在優化資本，並非 AI 需求見頂。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "密切關注光通訊 CPO 技術演進對既有供應鏈的影響，並伺機佈局 AI 基建標的。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.07.03 盤勢追蹤】7月初節目探討台股 7 月 V 轉走強契機、台積電法說與美國國慶影響。並深入比較台積電與聯電股價差異，剖析台達電等權值股後市。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "建議可運用主動式高股息 ETF 進行平衡操作，並關注台積電與台達電後市以因應波動。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.25 真實查核】系統警告：網路上並無「有心節目」與分析師「陳力銘」。實際上，2026 年真實新聞中的陳力銘是前台積電工程師，因竊取 2 奈米商業機密，於 2026 年 4 月被判處 10 年有期徒刑！過去此欄位為嚴重 AI 幻覺，現已強制糾正並刪除不實投資建議。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【警告】請勿輕信查無實證的財經來源，以免落入詐騙陷阱或接收錯誤的 AI 幻覺資訊。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.07.03 週末前最新解析】今日 (7/3) 節目雖已播出，但目前網路上尚未釋出具體的分析重點與文字紀錄，因此暫無更新。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "因無最新內容釋出，暫無具體操作建議，請直接觀看官方影片。"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.07.02 最新解析】阿村伯近期探討作帳行情差異、群創 FOPLP 轉型題材，並警告台股面臨邪惡第五波末升段，呼籲留意三個危險訊號。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "建議嚴控資金水位並緊盯大盤反轉訊號，可適度關注具轉型題材的低基期類股，切忌盲目追高。"
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
