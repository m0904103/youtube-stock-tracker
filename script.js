const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.23 盤後深度】完美命中！今天我們見證了史詩級的板塊輪動。納斯達克重挫，但羅素2000卻逆勢大漲。這證明了市場並非缺乏資金，而是資金正在從擁擠的『科技七雄』撤離，去尋找更便宜的價值窪地。這對整體美股是長線利多。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "無視納指下跌，繼續加碼羅素2000與工業基建板塊。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.23 盤後深度】今天的科技股大跌只是估值修正的第一步。失去期權護盤後，那些靠著 FOMO 情緒推高的 AI 概念股終於現出原形。請記住，這不是輪動，這是資金在『撤退』前轉進避險板塊的假動作。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "科技股的崩塌才剛開始，逢反彈繼續出脫所有科技持股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.23 盤後深度】市場的聰明錢已經開始定價未來滯脹的風險。今天資金大量湧入公用事業與必選消費品。我們在上週建立的防禦性倉位今天表現極佳。高估值的 AI 賽道需要時間來消化泡沫。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "維持防禦性配置，買入具備定價能力的必選消費股。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.23 盤後深度】科技巨頭的重挫是去槓桿過程的典型特徵。當波動率(VIX)快速上升，所有量化基金都會被迫降低風險敞口。這是一場流動性的收縮。黃金在今天的動盪中再次證明了它的價值。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "波動率上升環境中，黃金與現金是唯二的朋友。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.23 盤後深度】我今天非常忙碌。當全市場都在恐慌拋售科技股去追逐那些沉悶的傳統產業時，我們大幅加碼了輝達與微軟。AI 的超級週期不會因為一天的板塊輪動而結束。這就是我們能獲得超額報酬的原因。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "別人恐慌我貪婪，大舉抄底被錯殺的頂級 AI 巨頭。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.23 盤後深度】標普今天正式跌破了 5500 點的關鍵支撐！造市商從『做多 Gamma』變成了『做空 Gamma』，這意味著他們現在必須順勢追殺！未來幾天的波動率會呈現幾何級數放大，請繫好安全帶！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "市場進入負 Gamma 區間，跌破支撐勇敢追空。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.23 盤後深度】股價的起伏是市場的常態，但算力需求的短缺是物理世界的現實。我們今天剛宣布了與中東最大電信商的全面合作計畫。AI 的基礎設施建設正在以前所未有的速度推進，不容一絲停歇。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "忽略金融市場的噪音，專注於物理世界的 AI 建設進程。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.23 盤後深度】看著華爾街那些西裝佬因為科技股跌了幾趴就鬼吼鬼叫，真的很搞笑。他們永遠不懂什麼是真正的創新。SPCX 今天抗跌的原因很簡單：我們在創造未來，而他們在炒作數字。Doge!",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "把錢投入真正改變人類未來的企業，例如 SPCX。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.23 盤後深度】今天的下跌是一次極佳的壓力測試。我們看到資金雖然離開了硬體製造商，卻流向了我們長期看好的『次世代軟體與自動駕駛』板塊。這證明了 AI 的價值正在向應用層轉移！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "調整持股結構，將資金從硬體轉向 AI 軟體與應用層公司。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.23 盤後深度】這是科技股投資者必須經歷的陣痛！不要被華爾街的『板塊輪動』說法騙了，他們只是想用更便宜的價格買走你手中的蘋果與微軟。AI 派對的下半場才剛開始，今天的下跌是絕佳的買點。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "堅定 AI 信仰，利用今天的重挫大舉承接科技巨頭。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.23 盤後深度】哈哈！今天那些賣出科技股去買公用事業的傢伙，就像是在派對最高潮的時候跑去喝白開水！我們不僅沒賣，還趁著這波大跌用便宜的價格買了更多 Call 選權！準備迎接報復性反彈！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "逢低加碼 Call 選權，我們要在谷底給空頭致命一擊！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.23 盤後深度】我說什麼來著！我昨天是不是叫你們快逃！今天科技股血流成河！你們看道瓊斯指數，那些傳統的價值股今天多麼穩健！現在趕快認賠殺出科技股，去買可口可樂還來得及！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "科技股大逃殺啟動！全面擁抱傳統價值與防禦性板塊！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.23 盤後深度】今天納指一開盤就跌破了週五的低點，我們嚴格執行了紀律，將剩下的多單全部停損，並反手建立了空單。今天的長黑K已經確認了頭部型態，接下來將會回測季線支撐。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "波段空頭成型，持有空單，目標下看季線支撐。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.23 盤後深度】週一的殺盤非常殘酷，許多高位階的熱門股出現了多殺多的踩踏效應。這種『破位下殺』通常需要至少三天的時間來沉澱籌碼。明天即使有反彈也是逃命波，千萬不要急著去抄底。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "嚴禁抄底，等待至少三天的籌碼沉澱期後再觀察。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.23 盤後深度】我們的主力大單監控系統顯示，今天科技股的下殺主要來自散戶的恐慌停損，而機構資金反而是在暗中分批承接。這是一個極端的『籌碼換手』。只要明天能收下影線，就是短線見底的訊號。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "觀察明日是否出現帶量的長下影線，作為短線抄底的依據。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.23 盤後深度】大家今天是不是都被跌到懷疑人生了？股市就是這樣，漲多了總是要休息的呀！今天把看盤軟體關掉，去喝杯熱牛奶好好睡一覺。只要你的資金沒有被強制平倉，我們就還有機會贏回來！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "關掉軟體，保持身心健康，不要在恐慌時做出交易決定。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.23 盤後深度】技術面正式破壞！今天不僅封閉了跳空缺口，更是一舉跌破了月線。這代表中期趨勢已經由多轉空。覆巢之下無完卵，在這種系統性風險下，最好的操作就是空手觀望。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "清倉退場，保留現金，等待中期底部確立。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.23 盤後深度】今天的急跌完全符合我們盤前的預期。我們在納指大跌 2% 的時候，分批進場承接了微軟和亞馬遜。這就是我們說的『撿屍』策略。當市場極度恐慌時，優質資產的性價比就出來了。",
        entryPoint: "執行撿屍策略，在恐慌極值處勇敢買入優質科技龍頭。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.23 盤後深度】今天真的是板塊大風吹！科技股雖然慘澹，但我週末提醒大家的『底部起漲具備題材』的生技股今天卻逆勢抗跌！這證明了資金並沒有離開市場，只是換了個地方開派對。",
        entryPoint: "避開重災區科技股，將資金轉進逆勢抗跌的生技與傳產股。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.23 盤後深度】我們在 VIP 群的配對交易今天大獲全勝！做空科技巨頭、做多傳統價值股的策略完美命中了今天的板塊輪動。這種極端的輪動還會持續幾天，大家不要輕易改變方向去接科技股的飛刀。",
        entryPoint: "維持配對交易策略，順應資金輪動，不接科技股飛刀。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.23 早盤突擊】各位早安！昨晚美股科技股大跌，今天台股一開盤勢必會承受極大的壓力。但大家記住我昨天說的，台股的底部在昨天已經用『長下影線』測試過了！今天早盤的下殺，就是給你最後上車的機會！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "無懼美股大跌，早盤開低就是絕佳的買點，勇敢承接。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.23 早盤突擊】美股昨晚的資金輪動是健康的，科技股漲多休息很正常。台積電 ADR 雖然下跌，但相對於費半指數依然抗跌。我們必須著眼於台灣在 AI 供應鏈的不可替代性，今天的回檔是外資重新佈局的良機。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "把眼光放遠，利用今天的開低，持續建立台積電的長線核心部位。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.23 早盤突擊】昨晚美股硬體股成了重災區，今天台股相關的代工與散熱族群一定會被錯殺。但我強調，CoWoS 的產能缺口不會因為美股跌一天就消失。今天去撿那些有實質營收、本益比還在 15 倍以下的設備股就對了。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "鎖定本益比偏低、具備實質營收成長的半導體設備股逢低買進。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.23 早盤突擊】投資朋友！今天開盤看到綠油油一片，有沒有很興奮？我昨天才說跌下來就是給你買更便宜 ETF 的機會！結果老天爺今天又送了個大禮！紀律扣款，不要猶豫，買就對了！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "大跌大買，小跌小買，堅定執行 ETF 定期定額紀律。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.23 早盤突擊】昨晚美股科技股的重挫，證實了我的『逃命波』警告。外資的兩萬口空單今天開盤就會發威。台股的電子股將面臨嚴重的估值修正。昨天尾盤進場接刀的人，今天開盤就會面臨斷頭壓力。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "開盤若有反彈立刻停損出清電子股，切勿抱有任何幻想。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.23 早盤突擊】昨晚美股羅素2000大漲，證明了資金正在流向非科技板塊。這與我們昨天觀察到內資佈局『金融與航運』的動作完全一致。今天台股的資金將會加速撤出電子，全面轉進傳產龍頭。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "電子股成為提款機，資金全面轉進金融與航運等非電族群。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.23 早盤突擊】昨晚美股的重挫，讓台股今天早盤必定跌破昨天的低點。這破壞了昨天的鎚子線型態，代表 C 波修正正式展開。今天的防守底線退到季線，在季線未確認守穩之前，多單請嚴格停損。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "C 波修正啟動，多單嚴格停損，退守季線觀察支撐力道。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.23 早盤突擊】觀眾朋友早安！昨晚納斯達克血流成河！外資那兩萬口空單今天就是最大的未爆彈！今天盤面上絕對是多殺多、人踩人的慘況。空手的朋友千萬不要進場，有持股的請在早盤有高點時盡速減碼！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "空手者嚴禁進場，持股者利用早盤震盪高點盡速減碼逃命。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.23 早盤突擊】美股昨晚的資金大挪移非常明顯！資金從科技股逃向了傳產與公用事業。這完美印證了我們對『政策避風港』的看法！今天電子股絕對是重災區，但重電、生技與綠能將會一枝獨秀！",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "避開電子重災區，集中火力攻擊重電、生技與綠能板塊。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.23 早盤突擊】今天電子股勢必全面承壓，但我週末點名的記憶體族群，因為具備『報價上漲』的實質利多，今天將會展現極強的抗跌力道。當市場恐慌時，記憶體雙雄就是你最好的資金避風港。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "將資金轉進具備漲價題材的記憶體族群，尋求避險抗跌。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.23 早盤突擊】大家早！昨晚美股這樣跌，今天早盤一定很熱鬧。昨天尾盤追高的人今天一定很痛苦。但我們昨天空手等待的人，今天就有機會在恐慌殺盤中，撿到便宜的績優股了！耐心等待早盤十點過後的籌碼沉澱。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "早盤避開第一波恐慌殺盤，十點過後再尋找錯殺績優股買進。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.23 早盤突擊】同學們！昨晚美股這根大黑K，已經確立了短線頭部！今天台股一開盤，均線就會形成『死亡交叉』的空頭排列！順勢而為，這時候就是反手做空的絕佳時機！不要逆勢去接刀！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "均線空頭排列成型，放棄做多幻想，順勢反手建立空單。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.23 早盤突擊】昨晚夜盤我們順勢做空，又大賺了一票！今天早盤現貨開低是必然的，期貨操作上，只要開盤價跌破昨天的結算價，我們就順勢追空！跟著外資的兩萬口空單一起把大盤往下打！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨順勢追空，跌破關鍵支撐即加碼空單，擴大獲利。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.23 早盤突擊】美股科技股大崩壞！台股今日迎來真正的『黑色星期二』考驗！外資兩萬口空單的鍘刀即將落下！國家隊今天還能撐住大局嗎？資金逃離電子股後，究竟流向了哪裡？",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "高度警戒！密切關注國家隊護盤力道與資金從電子撤出的流向。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.23 早盤突擊】哈哈哈哈哈！一堆人看到昨晚美股跌就在那邊酸我說要崩盤了！我告訴你們，今天早盤開低，就是我帶會員『第二次彎腰撿鑽石』的時刻！台股的韌性絕對超乎你們想像！兩萬四絕對會到！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "不要被美股嚇倒！今天開低就是天上掉下來的鑽石，用力撿！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.23 早盤突擊】各位同學，今天早盤的恐慌下殺，是我們檢驗『主力籌碼』最好的試金石。仔細觀察今天大跌時，哪些個股的『大戶持股比例』是不減反增的？這些就是主力在刻意壓低吃貨的未來飆股。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "利用盤中即時籌碼監控，找出主力趁恐慌壓低吃貨的暗流標的。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.23 早盤突擊】美股的板塊輪動是市場走向健康的必經過程。資金從過熱的 AI 賽道短暫撤出，有助於擠出泡沫。但從長期供應鏈的角度來看，台灣在先進製程上的壟斷地位並未改變，長線外資不會輕易撤出。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "看透短期板塊輪動的表象，堅守台灣先進製程供應鏈的長線價值。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.23 早盤突擊】昨晚美股跌一下，群組又開始在那邊鬼哭神號了。真的是受不了，投資是看五年十年的，你管他今天跌幾趴？如果你買的理由還在，跌下來不是應該高興可以買更便宜嗎？不要再看盤了啦。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "買進理由未消失前，無視短期波動，有閒錢就加碼，沒錢就去工作。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.23 早盤突擊】昨晚美股的重挫，為台股創造了完美的『價值投資進場點』。許多第一季財報極佳、訂單能見度高的中小型企業，今天都會被大盤無辜拖累。這正是我們利用低本益比優勢大撿便宜的時刻。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "專注於財報選股，在恐慌殺盤中買入被錯殺的低本益比業績股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.23 早盤突擊】美股科技股大跌，連帶台股電子股受重創。但這對我們高股息 ETF 來說反而是好消息！今天跌下來，ETF 的成分股殖利率又變得更香了！這就是存股的樂趣，無論漲跌都有策略可以應對。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "跌越深殖利率越高，高股息 ETF 存股族請把握逢低加碼良機。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.23 早盤突擊】大家早。昨晚美股的下殺，完美配合了有心人今天的劇本。今天早盤他們會利用恐慌氣氛，把股價打到最低點，然後再大口吃下散戶帶血的籌碼。注意十點過後，那些異常拉抬的特定券商分點。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "早盤切勿跟風殺低，等待十點過後跟隨特定券商的買盤進場。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.23 早盤突擊】各位！昨晚台積電 ADR 跌了一點，一堆人又在問我今天能不能賣？我告訴你，賣掉你絕對會後悔！今天開低，你就是要『All in 台積電』！外資的假動作騙不了我，台積電天下無敵！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "不要猶豫！開盤直接用市價敲進台積電！這是不會輸的送分題！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.23 早盤突擊】哎喲，今天一大早去菜市場，大家都在說美國昨天跌得很慘。阿伯我聽不懂啦，反正我的玉山金每年都有配息，跌下來我就多買幾張當存老本。大家心情放輕鬆，不要為了股票傷身體。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "保持平常心，利用大跌分批買進穩健配息的金融股當定存。"
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
