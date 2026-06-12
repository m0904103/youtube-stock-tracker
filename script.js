const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.12 盤後更新】隨著 6/11 美股強勢反彈（S&P 回升至 7,350），證明了我們對經濟軟著陸的樂觀預期。SpaceX 今日的掛牌（SPCX）為市場注入巨大的流動性與科技成長動能，盤前飆上 $180 展現極高的風險偏好！展望 6/17 FOMC，我相信聯準會將釋出偏鴿派訊號，這是下半年股市繼續衝高的完美催化劑。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【盤後操作】逢低買進小型股與高 Beta 科技股，參與這波至年底的資金行情。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.12 盤後更新】雖然 6/11 大盤反彈，但我們警告市場可能已處於超買階段。SpaceX 今天的狂熱上市（盤前溢價 30%+）反映了散戶的非理性繁榮，估值已經脫離基本面。考量到 6/17 FOMC 即將到來，聯準會可能會為了抑制這種投機泡沫而維持鷹派論調。企業獲利預期正在下修，現在不是盲目追高的時候。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "【盤後操作】將資金轉向防禦型類股，並針對高估值科技股進行獲利了結或避險。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.12 盤後更新】6/11 的股市反彈顯示市場對流動性仍有依賴。SpaceX 的成功上市是美國資本市場的勝利，我對其長期潛力感到震撼。然而，面對 6/17 FOMC，我認為聯準會面臨極大挑戰，若過早降息恐引發二次通膨。我們透過選擇權保護了下行風險，但持續看好真正具備定價能力的獨佔企業。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "【盤後操作】建立高品質、具備護城河的大型股核心部位，同時買入短期利率避險工具。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.12 盤後更新】從 6/11 的收盤結構來看，我們仍處於一個典型的晚期債務週期。SpaceX 的上市吸納了大量資本，代表創新科技的繁榮，但掩蓋了實體經濟的結構性隱患。6/17 的 FOMC 決策將是關鍵，決策者在經濟成長與通膨間走鋼索。現金依然不是垃圾，過度集中於單一國家的股市風險極高。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【盤後操作】貫徹全天候（All Weather）策略，分散配置黃金、通膨連結債券及具備創新顛覆力的科技資產。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.12 盤後更新】6/11 NVDA 強勢回升至 $208，再次確認由 AI 與前沿科技帶動的趨勢並未結束。SpaceX 的掛牌是歷史性時刻，我對這種改變人類進程的公司抱持濃厚興趣，創新會帶來生產力的躍升。對於 6/17 的 FOMC，我不在乎他們說什麼，而在於市場如何定價。如果 Fed 繼續容忍通膨，大宗商品和顛覆性科技將是最大贏家。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【盤後操作】集中火力做多最具顛覆性的前沿科技龍頭，並放空表現落後的傳統產業。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.12 盤後更新】6/11 大盤守穩關鍵支撐。今日 SpaceX 的 IPO（SPCX 定價 $135，盤前狂飆）引發史詩級散戶狂潮，期權看漲買盤創下歷史新高——這通常是短期見頂的訊號！市場目前已完全定價 6/17 FOMC 會給出友善的點陣圖，一旦 Warsh 講話出現任何鷹派意外，我們將看到劇烈的多殺多回調。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "【盤後操作】緊盯 VIX 指數的變化，考慮在 FOMC（6/17）前建立跨式選擇權以應對潛在的巨大波動。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.12 盤後更新】恭喜 Elon 與 SpaceX 團隊達成這個不可思議的里程碑！AI 與航太技術的結合將為人類帶來無限可能。輝達很榮幸能為 SpaceX 的星艦與衛星網路提供最強大的算力支持。昨晚輝達股價強彈至 $208，顯示市場對 AI 基礎設施的需求依然強勁。未來的太空探索將高度依賴數位孿生與自主導航技術！",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "【盤後操作】長期持有 NVDA 與 SPCX，AI 基礎建設是邁向多行星物種的核心動力。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.12 盤後更新】SpaceX 終於迎來這歷史性的一天！我們將正式開啟人類前往火星的新紀元。感謝所有支持者的信任，昨晚 TSLA 強彈至 $397 為今天的掛牌創造了完美的氛圍。SPCX 籌集的 750 億美元將全數投入星艦量產與火星基地的初期建設。未來的旅程還很長，但我們已邁出最關鍵的一步。讓我們一起讓生命多行星化！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "【盤後操作】Buy and hold for Mars. (做多 SPCX 與 TSLA，這是人類未來的雙引擎。)"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.12 盤後更新】SpaceX 是顛覆性創新的極致體現！ARK 已為 SPCX 預留大量倉位。從星鏈的全球通訊壟斷到星際運輸，潛在市場規模無可限量。隨著昨晚 TSLA（$397）與 NVDA（$208）強勢上漲，科技股正進入新一輪爆發期。SPCX 絕對是 2026 年華爾街最大亮點，其市值未來五年內將達數兆美元，目前 $135 定價完全被低估！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【盤後操作】全力買進 SPCX 與 TSLA！SpaceX 掛牌的 $1.77 兆市值將徹底印證馬斯克願景的變現能力。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.12 盤後更新】這是華爾街期待已久的『超巨型科技派對』！昨晚納斯達克與費半的狂飆只是前菜，今天 SpaceX 的 IPO 才是真正主菜。SpaceX 每股 $135 的定價過於保守，盤前高達 30% 以上的溢價顯示出市場的極度渴望與 FOMO 情緒。這不僅是航太公司，更是未來的終極科技與通訊生態系平台，將與 TSLA 產生強大協同！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "【盤後操作】強力買進 (Strong Buy) SPCX 與 TSLA！我預測 2027 年兩家公司合併的機率高達 80%！"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.12 盤後更新】大家繫好安全帶了嗎？火箭準備升空了！🚀 昨晚的大盤只是熱身，今天我們要搭乘 SpaceX 真正『To the Moon』！這支股票的散戶熱度已經打破了所有傳統華爾街指標的認知。機構們可能還在死板地計算估值模型，但我們已經準備好讓這檔股票一飛衝天。這不只是一筆交易，這是屬於我們的星際革命！💎🙌",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "【盤後操作】YOLO (All in)！🚀🌕 SPCX 是散戶的新信仰，鑽石手抱緊處理！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.12 盤後更新】看看 6/11 的收盤，多頭氣勢如虹！而今天 SpaceX 的上市絕對是本世紀最偉大的 IPO，馬斯克再次改變了世界，買進並持有！對於下週的 6/17 FOMC，Warsh 知道他在做什麼，經濟表現良好，他不會破壞這個派對。不要被那些末日論者嚇跑，這是一個充滿機會的市場！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【Cramer 反向指標】聽 Cramer 喊買 SpaceX？小心短線高點！反向操作：趁 IPO 狂熱逢高減碼部分科技股。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.12 盤後更新】昨晚美股尾盤拉升，NVDA 重回 $208，但我認為這是暴風雨前的寧靜。今晚 SpaceX 上市（$135 定價，盤前溢價），全市場流動性都會被這隻巨獸吸走。我已經把部分高估值的科技股部位獲利了結。今晚我不打算去擠 SpaceX 的首日行情，那裡全是演算法跟高頻交易的戰場。我反而會去盯那些因為資金排擠而被錯殺的優質軟體股。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "【盤後操作】避開今晚 SpaceX 的多空雙殺，準備資金低接被流動性錯殺的非熱門優質美股。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.12 盤後更新】從選擇權未平倉數據看，昨晚美股已有資金佈局波動率上升的部位。台股今日的平靜（外資空單降至 5.1 萬口）只是表象。今晚 SpaceX 的上市將極大程度擾亂那斯達克的盤中流動性。宏觀數據 CPI 4.2% 不支持無腦做多，FOMC Warsh 的隱憂仍在。面對這種情緒極度高漲的 IPO，利用選擇權進行跨式策略比直接買現股安全。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【盤後操作】利用期權賣出寬跨式策略收取高額權利金，或買入大盤 Put 進行下檔保護，不建議重倉追多 SPCX。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.12 盤後更新】昨晚美股 NVDA 強彈至 $208，化解破線危機。今晚 SpaceX 的 IPO 無疑是資本市場的核彈級事件（定價 $135）。從估值模型來看，SpaceX 已經隱含了未來五年的極高增長預期。我們關注的焦點不僅是今晚的漲幅，而是其星鏈計畫的現金流轉正速度。這將對傳統電信商與航太軍工股產生深遠的板塊排擠效應。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "【盤後操作】建議等待 SpaceX 上市後的三個交易日，觀察機構資金建倉成本區間後再行佈局。NVDA 守穩 $200 可安心持有。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.12 盤後更新】哈囉大家好！昨晚 NVDA（$208）、TSLA（$397）表現穩健，帶動今天台股也完美收盤（43,500）。所有的重頭戲都在今晚！SpaceX 終於要敲鐘了，這不僅是馬斯克的勝利，更是全人類的一大步！雖然 IPO 首日肯定會飛到月球上，但對於信仰長線成長的投資人來說，這絕對是必須擁有的核心資產！FOMC（6/17）前市場熱度將達到頂峰。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【盤後操作】若 SpaceX 開盤溢價在合理範圍內可建立基本底倉，若溢價過高（超過 $180）則等待首週回調後分批買入。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.12 盤後更新】大白話告訴各位，昨晚美股和今天台股就是在「等開獎」。散戶現在滿腦子都是今晚的 SpaceX，這就像一場全球的財富派對。但你要知道，IPO 首日往往是機構割韭菜的最佳時機。大資金早就卡位了，你今晚才要進場去搶，風險太高！FOMC（6/17）Warsh 的態度還是最大的未爆彈。看懂大趨勢，別被短期的新聞沖昏頭。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "【盤後操作】不要參與 SpaceX 首日的瘋狂博弈！台股手上持股若無基本面支撐應趁利多出一趟。黃金 GLD 繼續抱牢。"
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
        viewpoint: "【2026.06.12 盤後更新】昨日美股雖然高檔震盪，但今日台股展現韌性，加權收 43,500（+351點）守穩重要均線。外資空單更從 6.3 萬口大降至 5.1 萬口！今晚全球矚目的 SpaceX 上市，勢必會吸走大量短線資金，甚至引發太空概念股的比價效應。對於長線投資人來說，不需跟風追逐首日 IPO 溢價，反而可留意被大盤震盪錯殺的績優權值股。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【盤後操作】維持大股東思維，逢低佈局 0050 等低基期高息 ETF 與台積電（2,280元），不追高 SpaceX 蜜月行情。"
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
        viewpoint: "【2026.06.12 盤後更新】我早就說過了吧！台股今天大漲 351 點就是準備迎接今晚美股的超級大戲。昨晚美股洗盤根本不用怕，因為資金都在等 SpaceX！SpaceX 上市絕對是歷史級別的事件，外資空單也被迫回補了 1.2 萬口！這會帶動整個台灣的低軌衛星概念股（昇達科等）噴出！接下來行情還會繼續熱，不要被輕易洗下車！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【盤後操作】瞄準低軌衛星與網通概念股，SpaceX 上市若大漲，台股相關供應鏈明天直接噴出，拉回就是買點！"
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
        viewpoint: "【2026.06.12 盤後更新】美股昨晚反彈，台股今天也就順順地走完（收 43,500）。大家現在眼睛都盯著今晚 SpaceX 的 IPO，這肯定是今年最大的一場戲。馬斯克的公司向來自帶流量，開盤價絕對是被散戶跟機構推到天上。但老實說，這種剛上市的巨獸波動極大，沒事不要去當別人的流動性。市場的錢自然會輪動，長線抱好你手上的大盤指數即可。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【盤後操作】想參與 SpaceX 建議用極小資金當買樂透，主力仍應放在大盤與強勢科技股。0050 定期定額繼續！"
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
        viewpoint: "【2026.06.12 盤後更新】今日台股收 43,500，完全符合杜大師的波浪理論推演，目前已確認第四波底部，進入主升段延伸！昨晚美股平穩，為今晚重頭戲鋪路。盧燕俐提醒，SpaceX 上市是科技發展里程碑，但不代表散戶必須單押個股。投資人可以透過持有含括太空與通訊相關成分股的美股 ETF 來參與行情，既能分散單一個股首日劇震風險，又能享受紅利。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "【盤後操作】透過定期定額買進太空/通訊主題 ETF，取代直接追高 SpaceX。台積電 2,280 元附近站穩，主升段正式確認！"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.12 盤後更新】最新籌碼快報：台股今日大漲收 43,500，最關鍵的是外資空單從 63,168 口「大幅回補」至 51,000 口左右！這確認了空方力道衰竭。主力資金正為今晚 SpaceX 掛牌做準備。SpaceX 的上市不僅是籌碼面的吸金黑洞，更會重新定義科技股的估值模型。台股衛星通訊板塊今日已有蠢動跡象，緊盯今晚美股開盤資金流向！",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【籌碼操作】外資空單降至 5.5 萬口以下，轉折訊號出現！緊盯今晚 SpaceX 開盤熱度，明日可順勢切入台股太空供應鏈。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.12 盤後更新】大家都在瘋 SpaceX，我告訴你，這就是標準的擦鞋童理論！昨晚美股跟今天台股（大漲 351 點）的上漲，都是主力在拉高出貨。今晚 SpaceX 上市絕對會吸乾其他科技股的資金，造成市場劇烈震盪。歷史上這種超級 IPO 往往是波段見頂的訊號。你現在去追那些所謂的太空概念股，根本就是把錢往水裡丟。準備好現金才是贏家。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "【盤後操作】避開所有過度炒作的太空概念股與高位階科技股，逢高減碼增加現金比重，靜待 IPO 狂熱後的泡沫破裂。"
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
