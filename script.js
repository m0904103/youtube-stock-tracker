const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.15 盤中快報】美伊和平協議的落定是超級催化劑！期指暴漲完全印證了我們對年底標普新高的預期。市場不再擔憂Warsh的FOMC，因為和平協議帶來的通膨預期降溫給了聯準會喘息空間。不要被上週的SPCX流動性恐慌洗出場，現在是加碼的絕佳時刻。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "趁著和平紅利發酵，全力買進羅素2000與科技巨頭！"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.15 盤中快報】雖然美伊和平協議讓期指出現2%的瘋狂拉升，但這掩蓋了企業盈利下修與SPCX吸血的結構性問題。Warsh明天的FOMC仍可能利用這個機會釋放鷹派訊號以打壓過熱的市場情緒。這種由地緣消息驅動的跳空缺口往往會被填補。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "趁著和平協議帶來的非理性暴漲，逢高減碼科技股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.15 盤中快報】美伊和平協議對全球供應鏈和油價是重大利多，這大幅緩解了通膨壓力。期指的暴漲反映了市場預期Warsh明天的FOMC將獲得更多轉鴿的空間。這是地緣政治風險解除的標準釋放，我們已經平倉部分空頭部位。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "回補空單，將資金轉向受惠於油價下跌的消費與工業板塊。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.15 盤中快報】美伊達成和平協議是改變宏觀格局的轉折點。油價回落將緩解全球通膨壓力，為聯準會創造政策彈性。期指的拉升反映了系統性風險的解除。但債務週期依然沉重，投資者應把握這次反彈重新平衡投資組合。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "降低抗通膨資產比例，轉向優質生產力驅動的科技股。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.15 盤中快報】這就是為什麼我從不做空創新的原因。美伊和平協議一出，加上輝達Vera晶片的利多，NQ期指直接拉升2%。空頭完全被軋飛！SPCX的流動性擔憂在宏觀利多面前不堪一擊。我會繼續抱緊AI和太空基建的核心資產。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "無懼FOMC，全倉擁抱AI硬體與基礎設施。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.15 盤中快報】這是一場史詩級的軋空！美伊和平協議讓VIX瞬間崩盤，所有押注FOMC避險的看跌期權全部歸零。但請注意，技術面上期指已經進入極度超買區間，Warsh明天仍可能出手降溫。不要在這個位置追高。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "獲利了結部分多單，嚴防FOMC會後的利多出盡回調。"
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
        viewpoint: "【2026.06.15 盤中快報】地緣政治的緩和進一步加速了全球資金向顛覆性創新的匯聚。美伊和平協議降低了傳統能源的戰略溢價，這將使得更多資本湧入AI、太空與基因編輯。期指的暴漲只是確認了我們對通縮型創新的信念。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "堅定持有並加碼ARK核心創新資產，傳統能源資金將流入科技。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.15 盤中快報】這是一場完美的風暴！美伊和平協議清除了宏觀層面的最後一朵烏雲，加上輝達Vera晶片和SPCX的成功，科技股正迎來『1995級別』的狂歡。期指上漲2%只是開胃菜，準備迎接AI超級週期的下一個高點！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "蒙眼買入微軟、蘋果與輝達，AI狂歡才剛開始。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.15 盤中快報】（發布一隻貓騎著火箭發射的迷因圖）和平鴿飛起來了！那些說SPCX會吸乾資金的空頭們，現在感覺如何？空軍正在燃燒！大戶的6.5萬口空單就是我們的火箭燃料。Hold！鑽石手！月球就在眼前！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "Diamond Hands！享受空軍燃燒的煙火秀！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.15 盤中快報】和平！和平帶來繁榮！美伊和平協議加上馬斯克的兆美元光環，這是美股歷史上最好的一天！那些上週五被SPCX嚇跑的空頭現在正哭著回補！買入！買入！不要管明天的FOMC了，聯準會也得向和平紅利低頭！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "全力做多！買入一切優質科技股和消費股！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.15 盤中快報】兄弟們，這波軋空真的太殘暴了！美伊和平的消息直接讓空軍灰飛煙滅，大盤直接拉上4.5萬點。台積電2365元，Vera概念股全面噴出。這時候千萬不要去猜哪裡是高點，外資6.5萬口空單還沒補完呢，順勢操作才是王道！",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "打不過就加入！利用台積電買權參與軋空，設好移動停利。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.15 盤中快報】從量化角度看，今天的暴漲是一次經典的『宏觀利多觸發的Gamma Squeeze』。美伊和平降低了通膨溢價，導致空單認賠回補。台積電作為流動性最好的Vera受惠股，成為回補首選，推升至2365元。這種由籌碼驅動的漲勢將持續到空單耗盡。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "不要逆勢做空，耐心持有台積電，觀察外資未平倉空單變化。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.15 盤中快報】美伊和平協議徹底扭轉了市場對FOMC的通膨擔憂。加上輝達Vera晶片的強勢出貨，台積電今天展現了無與倫比的定價權，股價來到2365元。外資的龐大空單成為推升指數的最佳燃料，短期內SPCX的資金排擠效應已被宏觀利多完全覆蓋。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "長線持有Nvidia與台積電，享受地緣政治風險解除的估值修復。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.15 盤中快報】大家午安！今天台股真的太瘋狂啦～美伊和平協議讓全球股市大舉狂歡，台積電因為Vera晶片更是衝到2365元！外資的空單變成我們上漲的動力。這說明投資真的不能只看短線的SPCX抽水，AI的長期趨勢才是真理呀！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "開心享受帳面獲利，不要隨便下車，讓獲利奔跑。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.15 盤中快報】大白話告訴你，今天就是『空頭大屠殺』！美伊和平的消息一出來，外資那6萬多口空單直接變燃料。台積電靠著Vera晶片一飛衝天到2365元。這個盤已經不是基本面能解釋的了，就是籌碼戰，散戶千萬不要去擋火車。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "空頭不死，漲勢不止。別做空，順勢抱著台積電。"
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
        viewpoint: "【2026.06.15 盤中快報】各位觀眾！美伊和平協議這隻巨大的和平鴿，直接把外資6.5萬口空單軋到九霄雲外！今天台股暴漲超過2.7%，成功站回4.5萬點。台積電在輝達Vera晶片加持下衝上2365元！這就是我說的長線保護短線，SPCX的排擠效應完全被軋空行情輾壓！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "軋空行情啟動，抱緊台積電多單，不要預設高點。"
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
        viewpoint: "【2026.06.15 盤中快報】投資人午安，盤中焦點為您掌握！今日受惠美伊達成和平協議，國際地緣政治風險降溫，台股上演大驚奇，盤中大漲超過2.7%站回4.5萬點大關！台積電在輝達Vera晶片利多帶動下飆升至2365元，外資龐大空單正上演軋空秀，市場氣氛為之一振！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "市場氣氛轉為極度樂觀，可順勢偏多操作，唯仍需留意明日FOMC變數。"
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
        viewpoint: "【2026.06.15 盤中快報】投資朋友！我有沒有說過！我說過幾次了！輝達Vera晶片的最大贏家就是台積電！今天大盤暴漲1200點，台積電衝到2365元，外資6.5萬口空單被我說中全部被軋爆！折折又稱王啦！上週五被SPCX嚇跑的，今天是不是躲在廁所哭！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "跟著折折！台積電抱緊處理，廣達、鴻海繼續衝！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.15 盤中快報】同學們，今天這根大紅K線就是標準的『跳空軋空』型態！美伊和平協議的利多讓外資猝不及防，6萬多口空單只能認賠買回。大家看台積電的K線，強勢突破2365元，這告訴我們，尊重趨勢，不要在大多頭市場裡去摸頭！",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "K線轉強，順勢加碼台積電與鴻海，設好移動停損即可。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.15 盤中快報】美伊和平協議的達成是重塑全球供應鏈的關鍵變數。這不僅壓抑了油價，也讓Warsh在明天的FOMC上有了更多轉圜餘地。期指與亞股的暴漲反映了系統性風險溢價的消退。市場正進入由流動性修復驅動的新階段。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "解除地緣避險部位，增加成長股與新興市場配置。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.15 盤中快報】諸君，今天這盤真的是太魔幻了。週末還在那邊擔心SPCX吸血，結果一早美伊和平協議出來，直接把空軍按在地上摩擦。台積電衝到2365，這就是有底氣的好公司。不要去猜頭，外資那6萬多口空單現在正痛不欲生，讓子彈飛一下。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "軋空盤就是看戲，好股抱著，別隨便放空被當燃料。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.15 盤中快報】美伊和平協議讓油價回落，這對通膨是實質降溫。期指強勢反映了這個總經利多。我們觀察到外資高達6.5萬口的空單面臨極大軋空壓力，台股大漲站回45,000點。建議順勢而為，但避開純炒作標的。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "汰弱留強，集中持股於具備基本面支撐的權值股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.15 盤中快報】觀眾朋友們，『鈔錢部署』的威力顯現了！受惠美伊和平協議與輝達Vera利多，台股大暴漲站回4.5萬點。台積電衝上2365元更是讓定期定額的投資人笑開懷。這波外資空單的軋空行情，再次證明了遇到黑天鵝利多時，市值型ETF是最穩健的選擇。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "享受軋空紅利，持續抱牢含積量高的市值型ETF。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.15 盤中快報】今日盤中資金流向極為猛烈！美伊和平協議引發的宏觀買盤，加上輝達Vera晶片的實質訂單，讓台積電領軍大盤站回45,438點。更可怕的是外資6.5萬口的空單面臨斷頭，這種被迫回補的買盤會讓指數欲罷不能。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "順應軋空趨勢，重壓台積電與Vera供應鏈（如鴻海、廣達）。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.15 盤中快報】各位投資朋友！今天大盤大漲2.7%，台積電衝到2365元，這完全是美伊和平協議的突發利多造成的『非理性軋空』！外資6.5萬口空單是被迫回補，不是真心看好！這叫無基之彈！等明天FOMC會議一開，主力就會反手下殺！千萬別追高！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "趁軋空高點逢高結帳！保留現金等待FOMC後真正的回調！"
    },
  {
    name: "Alan Chen",
    style: "具身智能與量化交易",
    viewpoint: "【2026.06.15 盤中快報】量化監控顯示，今日台股的急漲高度符合空單擠壓模型（Short Squeeze）。美伊和平協議作為外生變數，觸發了機構風控系統的強制平倉。台積電受惠Vera架構，成為多頭最具流動性的攻擊標的。在此籌碼環境下，Beta回報將遠大於Alpha策略。",
    stocks: ["2330 (台積電)", "低軌衛星", "具身智能概念股"],
    entryPoint: "暫停作空策略，切換至高Beta的半導體指數跟隨軋空。"
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
