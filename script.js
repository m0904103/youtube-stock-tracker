const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.14 盤前備戰】SpaceX成功IPO將馬斯克推上兆美元神壇，這證明了美國創新週期的超級動能依然強勁。市場目前對Warsh主導的首場FOMC會議過於擔憂。通膨正朝正確方向前進，聯準會沒有理由破壞這場派對。週日晚間期指若因避險情緒回調，將是極佳的買點。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "逢低買進科技巨頭與羅素2000，切勿做空美股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.14 盤前備戰】馬斯克成為兆美元富豪佔據了頭條，但這標誌著市場情緒的極端頂部。SpaceX的巨額IPO吸乾了流動性。本週Warsh的FOMC面臨政治壓力，若他為展現獨立性而釋出鷹派訊號，高估值科技股將首當其衝。週日夜盤應保持警戒，市場已無完美定價的空間。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "逢高減碼科技股，轉向高品質防禦性類股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.14 盤前備戰】馬斯克的成就是歷史性的，但我們必須關注宏觀風險。Warsh在首次FOMC會議上必須頂住要求降息的政治壓力以維持信譽。如果他屈服，長期通膨預期將失控，導致長天期殖利率飆升。期指開盤可能反映這種不確定性，我們已為利率曲線變陡做好準備。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "透過選擇權對沖長期利率上行風險，做空長天期美債。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.14 盤前備戰】馬斯克財富破兆反映了當前貨幣體系下財富極度集中的晚期週期特徵。Warsh面臨著經濟成長放緩與通膨黏性的艱難權衡，聯準會的政策空間已被巨額美國國債壓縮。本週的FOMC難以提供完美解答，週日晚間期指將在流動性擔憂與債務重組壓力下震盪。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "均衡配置全天候策略，增持黃金與抗通膨資產避險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.14 盤前備戰】從AI到太空基建，這是我見過最強的創新浪潮，馬斯克破兆只是副產品。雖然Warsh的首次FOMC可能會帶來短期流動性衝擊，但他無法改變科技巨頭強大的基本面。我不會因為聯準會的噪音做空這場革命，若期指因恐慌下跌，我會大舉加倉。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "趁FOMC前的波動回調，集中押注AI與基礎設施的領導企業。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.14 盤前備戰】市場情緒已達到荒謬的極端。就在馬斯克成為兆美元富翁之際，散戶瘋狂加槓桿。與此同時，Warsh即將主持極具爭議的首次FOMC。市場降息預期與通膨現實完全脫節，這是一場等待發生的車禍。週日夜盤若衝高，將是完美的流動性陷阱。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "關注VIX做多機會，嚴格設立停損，防範多頭踩踏。"
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
        viewpoint: "【2026.06.13 週末突發】隨著 SPCX 以 $2.1 兆美元的估值掛牌，馬斯克身價突破 $1.1 兆美元，正式成為人類史上首位「兆美元富豪（Trillionaire）」！更震撼的是，MSCI 宣布 SPCX 立即納入 MSCI World 與 ACWI 指數，這將引爆全球被動基金的強制買盤。籌集的資金將全數投入星艦量產與火星基地。這不是短期股價，而是人類文明未來！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "【週末推演】MSCI 強制買盤進駐，長線 (Diamond Hands) 抱緊 SPCX 與 TSLA。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.14 盤前備戰】馬斯克晉升兆美元富豪，印證了顛覆性創新正以指數級創造財富。SpaceX與AI的結合才剛開始發酵。對於Warsh主導的FOMC，傳統宏觀指標已無法衡量通縮型的科技創新力量。即使短期利率有變，也不會阻礙資金湧向改變世界的企業。堅持信仰。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "堅定加倉太空探索、自動駕駛與基因組學等顛覆性創新資產。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.14 盤前備戰】SpaceX的IPO和馬斯克的兆美元里程碑，是太空與AI領域的『1995時刻』。儘管華爾街對Warsh的FOMC首秀感到焦慮，但這不過是噪音。第四次工業革命列車已離站，任何因聯準會會議造成的期指回調，都是給長線投資者的黃金上車機會。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "買入微軟、蘋果，並積極佈局太空科技供應鏈。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.14 盤前備戰】（發布戴太空頭盔的貓盯著印鈔機的迷因圖）當大家仰望馬斯克的火星夢時，別忘了地球上Warsh的印鈔機。市場像個瘋狂賭場，但若仔細看，深層價值依然存在。繫好安全帶，週日晚間的過山車準備啟動了，只要你有鑽石手，我們月球見！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "尋找被嚴重做空、具備爆發潛力的深度價值股（Diamond Hands）。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.14 盤前備戰】馬斯克是我們這個時代的達文西！SpaceX IPO徹底改變了遊戲規則！不要因為Warsh即將召開的FOMC會議被洗出場。Warsh是個聰明人，他不會破壞美國創新的偉大力量。如果週日晚間期指因為對聯準會的恐懼下跌，這是老天賜給你的買入禮物！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "買入馬斯克概念股與頂級科技巨頭，不要與聯準會作對！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.14 盤前備戰】兄弟們，SPCX進MSCI這波被動買盤太香了，資金肯定會去蹭熱度，小心其他科技股被抽血！輝達Vera這消息算利多，但週一早盤如果大盤沒撐住，台股AI也容易軟掉。明天開盤先看Vera概念股有沒有買盤承接。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "短線緊盯SPCX動能，AI股若跌破支撐果斷停損。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.14 盤前備戰】SPCX火速進MSCI會引發市場流動性緊縮，被動基金被迫買入會讓大盤波動加劇。輝達Vera晶片的中國訂單雖是利好，但能否抵銷宏觀面的資金排擠還有待觀察。週一開盤建議多看少做，保留現金彈性。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "提高現金水位，耐心等待AI硬體股的估值回落。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.14 盤前備戰】SPCX納入MSCI將帶來龐大被動買盤，預期短期內將對科技板塊產生資金虹吸效應。同時，輝達Vera架構拓展中國市場，展現了其硬體霸權的韌性。週一開盤需密切關注兩者之間的資金博弈。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "長線持有Nvidia，短期避開與SPCX有資金競爭的二線科技股。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.14 盤前備戰】各位小夥伴，週末SPCX被MSCI納入的消息非常振奮，但可能會讓台股的其他科技股承壓喔！不過輝達Vera晶片順利推進中國市場，顯示AI需求依舊強勁。明天開盤大家記得保持耐心，不要FOMO。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "採定時定額策略，遇回調可小量加碼Nvidia及Vera概念股。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.14 盤前備戰】大白話告訴你，SPCX進MSCI會讓美股和台股的流動性瞬間重分配，明天科技股一定會震盪。輝達Vera晶片賣到中國是護城河的延伸，但短線難敵SPCX的吸血效應。週一早盤別急著出手，看清楚資金往哪跑。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "等待開盤半小時後資金方向明確再動作。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 收盤盤後】美股收盤：S&P 7,267（-1.62%），費半 -3.57%，TSM ADR $410.84（-4.48%）。今日最重要消息：台積電 5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%）！這是台積電最強的護城河。高盛撤除 2026 降息預期雖然利空，但台積電的 AI 晶片需求完全不受影響。明日除息（-6元，參考價 2,249 元），若有護盤資金承接是多頭未死的確認信號。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "【收盤操作】台積電 5 月營收史上最高是最強基本面支撐。明日除息後 2,200 元以下分批布局，配合成交量判斷市場信心。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 收盤盤後】台積電 ADR 收 $410.84（-4.48%），但 5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%）！基本面與股價走勢出現背離——這正是逢低布局的絕佳機會。美股費半 -3.57%，高盛撤除 2026 全年降息預期，短線壓力仍在。但 CoWoS 先進封裝需求遠超供應，NVDA Blackwell 排到 2027 年底，台積電 AI 算力龍頭地位不可撼動。明日除息（2,249元），2,200 元以下是長線布局黃金時機！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【收盤操作】台積電月營收史上最高！除息後 2,200 元以下第一批，2,100 元以下第二批加碼。ADR $410 以下也可開始分批。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.14 盤前備戰】明天台股開盤受週末SPCX納入MSCI的資金排擠效應影響，大盤恐有震盪。但輝達Vera晶片進軍中國，台灣AI代工與散熱供應鏈仍是長線保護短線。不要被指數綁架，關注Vera受惠股。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "逢回低接AI伺服器與散熱，避開流動性受壓的大型權值股。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 收盤盤後】美股收盤：S&P -1.62%，高盛撤除 2026 全年降息預期——這正是我三週前降低持倉至三成的原因！今日帳面損失對組合影響極小。台積電 ADR -4.48%，明日除息（2,249元），本益比約 21 倍，接近合理估值下緣。重入市三個條件仍然適用：①CPI 連續兩個月下滑；②FOMC 措辭偏中性；③台積電守穩除息後 2,200 元之上。三條件同時出現才是全面重建倉位的時機！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【收盤操作】維持三條件等待策略：①CPI下滑②FOMC鴿派③台積電守2,200元。目前繼續低倉位，FOMC（6/17）前不動。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，高盛撤除 2026 全年降息預期，美元衝破 100，10 年債 4.55%——從總體經濟角度看，這是典型的「利率高原期延長」訊號！打破惡性循環的條件：①美伊停火協議（油價下跌）；②FOMC 釋放鴿派訊號。在此之前，台股仍面臨向下壓力。台積電明日除息（2,249元），外資現貨連日賣超，籌碼面仍在承壓。等美元指數走弱才是真正轉折。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "【收盤操作】觀察美元指數是否開始走弱（從 ~100 回落至 98 以下）與外資期貨空單回補，兩者同步出現才是真正轉折訊號。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06 收盤盤後緊急更新】美股 S&P 7,267（-1.62%），道瓊跌 953 點，費半 -3.57%，高盛撤除 2026 全年降息預期！波浪理論持續應驗——台股第四波修正仍在進行中。台積電明日除息（2,249元），ADR 已跌至 $410.84。底部地圖不變：【第一道防線】42,000 點試單；【第二道防線】40,000 點大加碼；【極端情境】36,000~38,000 點傾巢而出。台積電：除息後 2,200 元以下分批，2,100 元以下全力買進！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【杜大師底部地圖不變】42,000點試單 → 40,000點大加碼 → 36,000~38,000點傾巢而出！台積電除息後 2,200 元以下分批；2,100 元以下全力買進！"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，費半 -3.57%，VIX 21.71（中度恐慌）。高盛撤除 2026 全年降息預期，10 年債 4.55%，美元 ~100。台積電 ADR -4.48%，明日除息（2,249元）。但台積電 5 月營收史上最高 4,170 億台幣（年增 30.1%）！跌時重質的原則依然適用——持有台積電、台達電的投資人相對受保護。明日填息速度是多頭信心的關鍵測試。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "【收盤操作】跌時重質！台積電明日除息（2,249元）觀察填息動能。持有核心持股（台積電、台達電）不動，靜待理性回歸。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，費半 -3.57%。AI 概念股全面承壓，但今日有一個重要訊號：資金明顯轉入營建股（央行楊金龍宣布「選擇性信用管制到此為止」），顯示資金從「高成長」轉向「高股息+低本益比」防禦配置！高盛撤降息預期進一步強化這個輪動邏輯。台積電明日除息（2,249元），觀察量能是否有護盤資金進場。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "【收盤操作】資金輪動！防禦型配置（0056、00878、營建股）成為避風港。台積電除息後觀察量能，有低接才考慮電子股布局。"
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
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，外資台指期空單升至 60,472 口（夜盤再加空 777 口！）。今日外資現貨賣超 935 億台幣（史上第 8 大），三大法人合計賣超 1,173 億。高盛撤 2026 全年降息預期是最大利空！台積電 ADR -4.48%，明日除息（2,249元）。若明日外資現貨賣超縮減至 300 億以下，可視為賣壓趨緩的轉折訊號，屆時才考慮小量試單。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "【收盤操作】外資空單 60,472 口仍在增加！等外資賣超縮至 300 億以下才試單。台積電除息後 2,200 元以下才考慮承接。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，費半 -3.57%，VIX 21.71。台股今日收 43,225（-1,479點），月線（43,950）已失守！技術面：下一支撐為季線（42,500）。台積電明日除息（-6元），指數將因此自動降約 100 點，需特別注意！高盛撤降息預期是大熊訊號。FOMC（6/17）前，技術面偏空——等季線（42,500）出現支撐確認才進場，切勿在技術面破位時逆勢接刀。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "【收盤操作】月線（43,950）已失守！下一關卡：台股季線（42,500）。等季線附近支撐確認再進場。FOMC（6/17）前持現金。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 收盤盤後】期貨今日再度大賺！S&P -1.62%，費半 -3.57%，外資台指期夜盤再加空 777 口 → 60,472 口！空方完全掌控！台積電明日除息（2,249元），期指將自動調整結算點。操作策略：空方倉位部分獲利了結（已達預期目標），明日觀察台積電填息動能作為短多觸發點。若無填息跡象，繼續偏空，下一個空方目標 42,000 點。高盛撤降息 = 空方邏輯強化！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "【收盤操作】空單部分獲利了結。明日觀察台積電填息動能——有填息則短多試單；無填息則繼續偏空，目標 42,000 點！"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06 收盤盤後緊急更新】美股收盤：S&P 7,267（-1.62%），道瓊跌 953 點，費半 -3.57%，VIX 21.71！今日五重利空同步確認：①CPI 4.2%（通膨頑固）②高盛撤除 2026 全年降息預期（最大震撼！）③美伊衝突持續④外資台指期空單升至 60,472 口⑤SpaceX IPO 6/12 吸金。台股月線（43,950）失守，下一支撐季線（42,500）。台積電明日除息（2,249元），填息速度是多頭信心的最關鍵指標！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【收盤操作】五重利空！高盛撤降息是今日最震撼消息。觀察台積電除息後填息情況。FOMC（6/17）前保守操作，季線（42,500）附近再評估。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.14 盤前備戰】各位投資朋友！週末最大消息就是輝達Vera晶片8月登陸中國！這對台股AI供應鏈是超級大利多！SPCX納入MSCI雖然會吸走一點資金，但外資最終還是會回來買台股的AI！明天開低就是給你買的！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "相信哲哲！AI相關的廣達、緯創拉回就是買點！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，高盛宣布 2026 全年不降息（最早 2027 才降！）——這完全符合我的「利率週期高原期延長」框架。從數據模型看，轉折點觸發條件：①CPI 連續兩個月下降；或②中東停火協議達成油價下跌；或③FOMC（6/17）釋出鴿派驚喜。在轉折點出現前，持有防禦型資產（高殖利率、低本益比）是最佳策略。台積電除息後 2,200 元附近具備長線價值。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "【收盤操作】持有防禦型配置：高殖利率股（0056、00878）與美債 ETF（00679B）。等 CPI 連續下滑或 FOMC 釋鴿，才切換回成長型。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06 收盤盤後】今日全球市場「完美風暴」正式確認：美股 S&P -1.62%，道瓊跌 953 點，費半 -3.57%，高盛撤除 2026 全年降息預期（最早 2027）！五大事件疊加：①CPI 4.2%（通膨高原）②美伊衝突（油價 $88-90）③外資空單 60,472 口④SpaceX IPO 吸金 6/12⑤FOMC 6/17。美元衝破 100，10 年債 4.55%，黃金 GLD $398.69，VIX 21.71。資金最終出口仍是：美元現金、黃金、能源股。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "【收盤操作】完美風暴確認！持現金、黃金（GLD）、能源（XLE）。FOMC（6/17）Warsh 鴿派聲明 + 美伊停火 = 唯一的正面催化劑組合。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.14 盤前備戰】諸君，週末SPCX被MSCI快速納入，被動資金買盤一定很兇，小心科技股資金被抽走。至於輝達Vera晶片出貨中國，老黃這招很溜，但供應鏈實際營收還要看。週一開盤就是看戲，別亂接刀，讓子彈飛一下。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "觀察SPCX吸金效應，AI硬體股先觀望不追高。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06 收盤盤後】美股 S&P -1.62%，TSM ADR $410.84（-4.48%），台積電明日除息（2,249元）。從基本面評估台積電：5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%）！以 EPS 預估 2026 年約 50 元，乘以歷史合理本益比 20~22 倍，合理估值區間 1,000~1,100 元（ADR 換算約 185~200 美元）。但高盛撤降息預期使本益比受壓，短線估值重置仍在進行中。除息後 2,200 元以下具備長線吸引力。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "【收盤操作】台積電月營收史上最高 + 除息後 2,200 元以下 = 長線買點。廣達（2382）與聯發科（2454）若本益比低於歷史均值，可試探性布局。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.14 盤前備戰】投資人如何超前部署？本週末SPCX納入MSCI勢必引發被動基金大換股，台股恐遭短線提款。但輝達Vera晶片8月出貨中國，為AI伺服器與散熱族群注入強心針！週一若遇錯殺，正是尋找長線績優股的好時機。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "挑選Vera供應鏈中具備高殖利率與成長性的錯殺股。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.14 盤前備戰】週末最熱話題莫過於SPCX火速納入MSCI與輝達Vera的中國佈局。這兩股力量將在週一開盤拉扯台股資金。Vera概念股有基本面支撐，但短線需防SPCX的資金排擠，操作上建議回歸公司核心價值，有心經營的企業終會表態。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "鎖定Vera供應鏈業績成長股，分批佈局。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.14 盤前備戰】投資人注意！SPCX納入MSCI會導致外資被動賣出台股去換股，明天大盤壓力沉重！輝達Vera晶片利多早就在高檔反應完畢，主力就是趁週末發利多準備出貨！明天開高千萬不要追，小心套在歷史高點！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "逢高減碼AI概念股，嚴控資金水位。"
    },
  {
    name: "Alan Chen",
    style: "具身智能與量化交易",
    viewpoint: "【2026.06.14 盤前備戰】綜合週末資訊，SPCX納入MSCI將導致指數型基金調整權重，短期對台股與美股半導體板塊有資金排擠效應。但輝達Vera架構的中國出貨進度優於預期，基本面依舊穩健。週一盤勢若因資金面錯殺，反而是優質AI股的佈局良機。",
    stocks: ["2330 (台積電)", "低軌衛星", "具身智能概念股"],
    entryPoint: "鎖定Vera架構核心受惠股，分批建立長期部位。"
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
