const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 週三盤中緊急更新】中東局勢急轉直下（美軍對伊打擊）疊加費半重挫8%，這正是我預告「第二階段震盪期」的精準演繹！但請記住我的三段論：現在的痛苦是為了10月後的巨大反彈鋪路。今晚 20:30 的 CPI 若如預期在 4.2% 上下，反而是「利空出盡」的最佳買點。我對標普年底 7,700 點的目標一字不改！",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【CPI 日操作】中東衝突帶來的恐慌是千載難逢的買點！等待今晚 CPI 落地後，若市場出現恐慌性超賣（標普跌逾 2%），這就是分批加碼 QQQ 的訊號。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 週三盤中緊急更新】費半單日重挫逾 8%、中東局勢惡化、台指期夜盤大跌 800 點——市場正在消化多重風險的疊加。這仍是一次「倉位重置」而非基本面崩壞。等待今晚 CPI 數據落地，若結果符合預期，市場有機會階段性止穩。我的年底標普 8,000 點目標維持不變，但短期波動將持續。",
        stocks: ["MSFT (微軟)", "AAPL (蘋果)", "GOOGL (Alphabet)"],
        entryPoint: "【CPI 日操作】今日嚴格觀望，等待 CPI 結果。若數據符合預期且市場反應溫和，可小量布局 MSFT、AAPL 等基本面紮實的大型科技股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 週三盤中緊急更新】中東局勢爆發新衝突，油價反彈直接給 CPI 升溫火上澆油！這讓今晚 20:30 的 CPI 數據充滿了更大的不確定性。我繼續持有核心倉位（MSFT、AMZN），但已將現金比例提升至近年最高。若今晚 CPI 超過 4.5%，我將進一步大規模減碼。",
        stocks: ["MSFT (微軟)", "META (Meta)", "AMZN (亞馬遜)"],
        entryPoint: "【CPI 日操作】現金比例保持在歷史最高位。若 CPI 低於 4.2%，可開始少量回補 MSFT；若超過 4.5%，繼續等待更大的恐慌底部出現。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06 週三盤中緊急更新】美軍對伊朗動武——這正是我最擔心的「黑天鵝」風險！中東衝突直接推升油價，進而惡化通膨，讓聯準會陷入更深的兩難困境。黃金今日必然成為最大的受益資產。我長期以來警告的「多重危機疊加」正在同步發生：地緣政治衝突 + 通膨頑固 + 高估值股市 = 系統性風險最高點。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【CPI 日操作】今日加倉黃金（GLD）與能源股，受益於中東衝突帶動的油價上漲。TIPS 通膨保值債券也是今日必須增持的核心配置。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06 週三盤中緊急更新】中東衝突爆發讓今日市場充滿了地緣政治的極端不確定性！費半跌超 8%，這不是普通的回調。我已大幅降低股票倉位，將資金轉至大宗商品與黃金。今晚 CPI 若超預期，加上中東衝突升溫，市場恐面臨「完美風暴」。保持超低槓桿，等待塵埃落定。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【CPI 日操作】今日所有股票倉位暫停操作，大量現金待命。若 CPI 超預期引發市場崩盤，明日再評估逢低機會。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06 週三盤中緊急更新】三重衝擊同時來襲：①美軍對伊打擊 → 油價飆升 → CPI 必超預期；②SpaceX IPO 吸金效應排擠科技股資金；③費半暴跌8%技術面破位。這是典型的「完美風暴」前兆。根據我的數據分析，今晚 CPI 超預期幾乎已是定局，建議今日嚴格控制倉位，等待 CPI 落地後確認方向。",
        stocks: ["TSMC (台積電)", "AMD (超微)", "AVGO (博通)"],
        entryPoint: "【CPI 日操作】今日全面觀望，不做任何操作。等待今晚 CPI 數據落地，若市場崩跌超過 3%，第二天才開始分批建倉 TSMC ADR 與 AVGO。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 週三盤中緊急更新】不論中東如何動盪，AI 算力的需求是實實在在的。台韓供應鏈出貨不受地緣政治的短期影響。SpaceX IPO 對 NVDA 而言是一個潛在的利多——太空探索需要大量 AI 算力。費半的短期大跌只是情緒恐慌，絕非供應鏈基本面的改變。",
        stocks: ["NVDA", "TSM", "ARM"],
        entryPoint: "【CPI 日操作】長線持有 NVDA 不動搖。NVDA 30日均線若在今日恐慌中獲得支撐，這是長線加碼的絕佳時機。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 週三盤中緊急更新】SpaceX 6/12 就要掛牌了！這才是本週最重要的歷史時刻。那些被市場波動嚇到的人，是因為他們看不到星際文明的未來。TSLA 與 SpaceX 的協同效應將在 IPO 後正式釋放。中東衝突？聯準會？這些都是舊世界的問題，我們專注在新世界的建造。",
        stocks: ["TSLA", "GOOGL", "ASTS"],
        entryPoint: "【CPI 日操作】本週最重要的事：等待 SpaceX（SPCX）6/12 的歷史性上市！中東？CPI？這些都是舊世界的焦慮。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 週三盤中緊急更新】中東衝突爆發短期帶來的恐慌，正好讓我得以以更低的價格累積 ARK 的核心持倉。SpaceX IPO 本身就是對人類太空文明與破壞性創新的巨大信心宣言。今日費半重挫讓我更有信心——錯殺的創新型科技公司正在創造最佳的長期買點。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【CPI 日操作】市場恐慌性拋售是 ARK 逢低加碼的好機會！繼續累積 PONY、COIN 與 PLTR，靜待創新浪潮重回主流。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 週三盤中緊急更新】今日的市場混亂並不影響科技基本面！蘋果 WWDC 本週登場，AI on iPhone 的故事即將揭幕，這是 AAPL 的一個重大催化劑。中東衝突只是短期雜訊，大型科技公司的訂閱與雲端收入不受戰爭影響。SpaceX IPO 反而是科技圈的歡慶時刻，提振整體科技股的投資氛圍。",
        stocks: ["AAPL", "MSFT", "AVGO"],
        entryPoint: "【CPI 日操作】WWDC 本週即將揭幕，AAPL 的 AI 故事是今日最值得買入的理由！若今日 AAPL 因市場恐慌跌逾 3%，可開始分批建倉。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 週三盤中緊急更新】中東打仗了、費半崩了、台積電要除息了……散戶的恐慌指數已經飆到最高！但正是這種時候，才是真正的信仰者與懦弱者分道揚鑣的時刻。GME 在市場恐慌下往往會有反向上漲的動能。我繼續靜觀其變，等待今晚 CPI 後最大的機會。",
        stocks: ["GME", "CHWY", "KOSS"],
        entryPoint: "【CPI 日操作】市場的極度恐慌往往是迷因股大爆發的前哨。密切觀察 GME 的成交量異動，等待社群情緒的再度聚焦。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 週三盤中緊急更新】天啊！美軍打伊朗了！費半跌超8%！今晚還有 CPI！我必須誠實地說——現在全部出場、持有現金，才是最安全的選擇。黃金（GLD）、公用事業（XLU）、和醫療保健（JNJ）是今日的避風港。（再次提醒：Cramer 是散戶最佳的反向指標，請謹慎參考！）",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【CPI 日操作】立刻全部出場！買入 GLD、XLU（公用事業）與 JNJ！今日不是抄底的時候！（Cramer 反向指標，請謹慎！）"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06 週三盤中緊急更新】中東衝突這顆炸彈真的引爆了！費半單日暴跌超過 8%、台指期夜盤大跌 800 點，這是我最擔心的地緣政治黑天鵝事件。今日我的操作策略非常明確：**全面觀望，不做任何操作！** 等待今晚 20:30 CPI 數據後，再根據市場反應決定下一步。此刻任何進場都是在高度不確定性中冒險，沒必要。",
        stocks: ["NVDA (輝達)", "META (Meta)", "TSLA (特斯拉)"],
        entryPoint: "【CPI 日操作】今日全面觀望，不做任何操作！等待 20:30 CPI 數據後，根據市場第一反應決定方向，不提前冒險進場。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06 週三盤中緊急更新】中東爆發衝突、油價飆升——這直接意味著今晚 CPI 將大機率超預期！我先前對市場底部尚未確立的判斷完全正確。費半的 8% 暴跌告訴我們：市場遠比想像的脆弱。今日台積電（6/11 除息）的承接力道將是今日台股最重要的觀察指標。一切等 CPI 落地後再說。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【CPI 日操作】現金為王，等待 CPI 落地。若 CPI 超預期引發進一步大跌，可在今晚或明日逢低小量試單 NVDA，嚴格設置3%停損。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06 週三盤中緊急更新】本週市場三重衝擊來臨：①中東衝突爆發 ②台積電明日除息 ③今晚 CPI 大魔王。費半盤中重挫8%，顯示機構資金正在快速撤出高估值科技股。社長建議：今日是觀望日，不做任何主動操作。等待 CPI 結果後，再評估 MSFT 與 AMZN 雲端核心股的買點。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "【CPI 日操作】今日不操作，靜候 20:30 CPI。若數據低於預期市場反彈，可在明日分批進場 MSFT 與 AMZN；若超預期，再等一到兩個交易日。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06 週三最新緊急更新】今天真的很瘋！中東突然爆發衝突、費半大跌8%、台積電明天除息……我知道大家很慌，但先深呼吸！現在最重要的三件事：①今晚 20:30 CPI 是最大關鍵；②台積電今日是最後買進日（明日除息6元），有打算存股的可以評估；③費半跌8%讓 NVDA 的 30 日均線面臨壓力測試。等 CPI 數據出來，我再給大家分析接下來的走勢！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【CPI 日操作】等待今晚 CPI 落地後市場穩定！觀察 NVDA 能否在 30 日均線守穩，確認後才開始第一批試單，不超過總倉位的 15%。"
    }
];

const twInfluencersData = [
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 週三盤前緊急更新】今日台股開盤承受三重壓力：①美軍對伊朗動武，中東衝突升溫；②台指期夜盤大跌800點；③今晚 CPI 公布前市場普遍觀望。外資已連四日賣超台股逾3,600億元，籌碼面壓力極大。台積電今日是除息前最後買進日（明日除息6元），若今日台積電無法撐住，大盤將面臨極大下行風險。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "【CPI 日操作】今日台股謹慎觀望，等待 CPI 結果。若台積電今日收盤守穩 760 元，明日除息後可視為長線布局機會。以 0050 等市值型 ETF 持續定期定額。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 週三盤前緊急更新】中東衝突爆發是今日最大的黑天鵝！費半昨夜盤中一度重挫超過8%，台積電今日是6月11日除息前的最後買進日，每股配息6元。從產業面看，中東衝突短期不影響台灣半導體供應鏈，但油價飆升會惡化通膨，進而影響聯準會態度。建議：台積電今日若跌破760元，可視為長線加碼的最佳時機。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【CPI 日操作】台積電今日若跌破 760 元，可小量承接第一批（除息後相當於 754 元的持有成本）。等待 CPI 結果後，若低於預期，明日再加碼第二批。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06 週三盤前緊急更新】今日市場呈現三重不確定性：地緣政治（美伊衝突）、經濟數據（CPI）、技術事件（台積電除息）三重夾擊！外資連四日大賣超，籌碼面嚴峻。從景氣循環角度看，這種恐慌性賣壓往往是逢低分批承接的機會，但時機選在今晚 CPI 公布後更為安全。持有 0050 者無需恐慌，定期定額投資者繼續執行計劃。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【CPI 日操作】今日定期定額 0050 的投資人照常執行，不需理會短期波動。等待 CPI 後若確認守穩半年線，再考慮提高單次投入金額。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 週三盤前緊急更新】今日是最危險的一天！中東爆發衝突直接惡化通膨預期，讓今晚 CPI 幾乎確定超預期。我先前將持倉降至三成的決策再度被驗證是正確的。台積電明日除息（每股6元），今日股價將自然扣除6元，加上市場恐慌，台積電今日可能出現較大波動。嚴守估值紀律，不要在恐慌中追高或盲目抄底。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【CPI 日操作】今日完全不進場，保留高現金。等 CPI 數據出來後，若低於預期，明日再評估台積電除息後的填息潛力作為切入點。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 週三盤前緊急更新】美軍對伊朗的軍事行動是今日最大的地緣政治衝擊！油價直接反彈，這將進一步加劇通膨壓力，為今晚的 CPI 數據增添更多不確定性。從總體經濟角度：美元走強、油價飆升，對台灣出口與進口成本均形成壓力。今日台股需密切觀察外資期貨動向，若空單再度大幅增加，需提防大盤進一步下探。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "【CPI 日操作】今日多看少做，以外資期貨籌碼方向作為操作依據。若外資繼續加碼空單，繼續保留高現金；若空單回補，才考慮跟進布局。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06 週三盤前緊急更新】波浪理論的計算告訴我：台股的底部還沒到！中東衝突爆發只是加速了這個過程。今日台積電是除息前最後買進日，除息後股價將自動扣除6元，加上市場恐慌，今日台積電技術面極為關鍵。若大盤今日再度崩跌，本波下跌的 C 波目標可能延伸至 41,500 點甚至 40,000 點。嚴格控管風險！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【CPI 日操作】嚴格停損！若手上有台積電且今日跌破760元，執行部分停損，保留子彈等待更低的進場點（目標740元以下）。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06 週三盤前緊急更新】今日台股開盤面臨三重利空！中東衝突、夜盤大跌、CPI 觀望效應。台積電今日是除息前最後買進日（明日除息6元），若只是為了領股息而在今日承接，需考慮除息後的填息風險。「跌時重質」策略不變，但今日建議盡量觀望，等 CPI 後再做決定，避免在最高不確定性時進場。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "【CPI 日操作】今日完全觀望，不做任何操作。若台積電今日收盤守穩，明日除息後評估是否為長線買進機會，跌時重質策略不變。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 週三盤前緊急更新】今日台股的資金輪動邏輯出現重大變數：中東衝突爆發讓原本的科技股資金輪動邏輯全面失效，因為地緣政治衝突讓市場進入全面避險模式。外資連四日大賣超代表籌碼面極度嚴峻。今日建議：①觀察台積電今日是否守穩760元；②等待今晚 CPI 後再決定方向；③嚴格停損觀念不可放棄。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "【CPI 日操作】今日避免所有操作。若大盤今日收盤守住43,500點半年線，明日可小量布局低位階的重電與散熱股；若跌破則繼續等待。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06 週三盤前緊急更新】今日台股在多重利空夾擊下，IC 設計與記憶體族群將再度承壓！但值得注意的是，台積電明日除息（每股6元），今日是最後買進日，這可能吸引部分長線存股資金進場承接，形成一定的護盤效果。記憶體股（南亞科、威剛）今日仍需觀察量能，若縮量跌幅收斂，可視為止跌訊號。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "【CPI 日操作】記憶體族群今日繼續觀察量能。若南亞科、威剛今日出現縮量下跌（量縮代表賣盤減少），可視為止跌訊號，明日小量試單。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06 週三盤前緊急更新】中東衝突爆發是今日台股最大的黑天鵝！外資籌碼面連四日大賣，夜盤已反映出市場的恐慌情緒。今日關鍵觀察：台積電除息前承接力道（今日最後買進日，明日除息6元）、外資現貨是否繼續賣超、以及美股 SpaceX IPO 的吸金效應對科技資金的排擠程度。謹慎觀望，不輕易進場。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "【CPI 日操作】今日全面觀望，等待今晚 CPI 結果。特別觀察台積電今日成交量，若出現爆量（代表大量承接），則為正面訊號。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 週三盤前緊急更新】技術線型出現中東地緣政治引發的「外力破壞」！這種外力衝擊往往會讓原本的技術分析暫時失效。台積電明日除息（6元），今日是最後買進日，股價應自然反映6元的除息折讓。若今日大盤能守住 43,500 點半年線，則仍有反彈空間；若跌破，下一支撐在 42,000 點。今日宜觀望。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "【CPI 日操作】技術面：今日守住43,500半年線是多方最後防線。CPI 低於預期 → 43,500守穩可小量布局；CPI 超預期 → 繼續等待，下一支撐42,000點。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 週三盤前緊急更新】期貨市場夜盤已大跌約800點，今日台指期開盤將面臨跳空下跌！操作策略：空方可在高點加碼空單，多方等待今晚 CPI 後確認方向。台積電今日除息前最後買進，明日開盤將自然下降6元，加上夜盤已跌，期現貨操作需特別注意除息的影響。嚴格停損，倉位控制在平時的一半以下。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "【CPI 日操作】今日期貨倉位控制在平時的30%以下。以小倉位試探空方（短線放空），等待CPI落地後確認方向，再決定是否擴大倉位。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06 週三盤前緊急更新】三大衝擊齊發：①美軍對伊朗動武油價飆升；②台積電今日最後買進日（明日除息6元）；③今晚 CPI 超預期幾乎確定。外資連四日超級大賣超（累計逾3,600億元），這是非常不正常的賣壓！建議今日操作：持股者嚴控停損、空手者不輕易進場，等 CPI 後再說。半年線（43,500點）是今日最後防線。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【CPI 日操作】今日最重要：觀察台積電是否守穩760元（除息前最後一日）。半年線43,500是大盤最後防線。CPI超預期 → 繼續觀望；CPI低於預期 → 明日評估加碼。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06 週三盤前緊急更新】中東衝突讓整個技術分析的前提都需要重新評估！當外力（地緣政治）介入時，趨勢動能往往會被打斷並重設。台積電今日是除息前最後買進日，明日除息6元，今日台積電的走勢將直接決定大盤的信心指標。我的操作守則一如既往：寧可錯過，不可做錯。今日全面觀望！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【CPI 日操作】今日完全觀望，不做任何操作。台積電今日是除息前最後買進日，明日除息後的填息走勢，才是判斷後市真正多空的關鍵信號。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06 週三盤前緊急更新】從宏觀數據的週期角度看，今日三大事件同時爆發（中東衝突、台積電除息、CPI）是典型的「事件密度超高期」，此時所有的技術面分析都是次要的。今晚 CPI 若超預期，利率週期的尾聲將再度延後，資金將持續從成長股輪出，台積電明日除息後的填息能力，將是判斷後市是否真正落底的最重要觀察指標。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "【CPI 日操作】台積電明日除息（每股6元），今日是最後買進日。從週期角度，CPI後的市場方向才是真正的信號。今日等待，明日根據CPI結果與台積電除息後走勢再做決定。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06 週三盤前緊急更新】🚨 今日是本週最高風險時刻！美軍對伊朗發動自衛性打擊，油價直接反彈，讓今晚 20:30 的 CPI 雪上加霜！三個事件疊加：①美伊衝突 → 油價 → 通膨惡化；②台積電今日最後買進日（明日除息6元）；③SpaceX 6/12 IPO 吸金效應。全球資金正在快速轉向避險資產（黃金、美元）。本週是2026年上半年最關鍵的72小時！",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "【CPI 日操作】今日所有操作暫停！等待台北時間20:30的CPI數據，這是本週決定全球市場方向的最終裁決。中東衝突 + CPI = 本週最大的雙重不確定性。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06 週三盤前緊急更新】中東打仗、CPI 要公布、台積電要除息……身為長期投資者，我只想說一件事：這些短期的混亂，在十年後回頭看，都只是一個小波動。我的 0050、NVDA、台積電核心倉位一股都沒動。台積電今日除息前最後買進日，每股配6元，長線投資者可以評估。繼續持有優質資產，等待市場恢復理性！",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【CPI 日操作】長期投資者繼續持有，定期定額繼續執行。台積電存股者可評估今日是否為長線加碼時機（明日除息6元，等同於今日多了一個6元的安全邊際）。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06 週三盤前緊急更新】今日台股最重要的基本面事件：台積電（2330）今日是 6 月 11 日除息前的最後買進日，配息每股 6 元。從基本面看，台積電的 AI 晶片需求持續強勁，存股投資者可評估今日是否為長線累積的好時機。短線而言，中東衝突與 CPI 數據是今日最大的風險因子，建議以台積電760元以下為目標價，分批承接。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "【CPI 日操作】台積電今日（6/10）是除息前最後買進日，明日除息6元。從本益比看，若今日台積電跌至760元以下，已接近歷史合理估值下緣，可開始小量布局第一批。"
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
function calculateTopStocks(data, filterFn = null) {
    const counts = {};
    const filteredData = filterFn ? data.filter(filterFn) : data;
    filteredData.forEach(inf => {
        inf.stocks.forEach(stock => {
            counts[stock] = (counts[stock] || 0) + 1;
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
