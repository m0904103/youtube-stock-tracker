const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.13 週末深度】Fundstrat Tom Lee 將 SPCX 首日 IPO 的長上影線定性為「流動性抽離」後的自然消化，而非看空訊號。NVDA 在此背景下逆勢收紅 $205.19（+0.16%），展現 AI 主線資金黏性極強。他認為 SPCX 掛牌吸引的是新增資本，並非從 AI 股搬家，兩者互不衝突。FOMC 6/17 Warsh 首秀基調預期偏鷹但市場已提前 price in，反彈壓力將在 FOMC 後釋放。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【週末操作】SPCX 回測 $152-$155 支撐區可分批布局；NVDA 持有不動，FOMC 後若跌至 $198 可加碼。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.13 週末深度】Mike Wilson 視近期波動為「滾動式修復」的健康回調。SPCX 首日高 $176.52、收 $160.95 的長上影線是典型大型 IPO 供需失衡，不足以改變科技多頭結構。NVDA 強守 $205 更印證半導體盈利修正已達高峰。FOMC 6/17 他預期 Warsh 不變利率但措辭偏鷹，點陣圖若顯示 2026 降息次數更少，短線對成長股有壓但不改趨勢。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "【週末操作】標普 5,400 以上維持多頭偏多，NVDA $200 以下是戰略加碼區，SPCX 第二週回測前高再決策。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.13 週末深度】Bill Ackman 雖曾力推 SpaceX 透過 SPARC 構想上市，最終 IPO 採傳統路線，他仍公開看好 SPCX 長線價值。首日長上影線（高 $176.52、收 $160.95）是流通盤極小（不足 5%）下供需嚴重失衡的必然結果。NVDA 被他視為 AI 基礎建設不可或缺的底層算力，不輕易出場。Warsh FOMC 若鷹派言論超預期，將壓縮成長資產的估值空間，需保留對沖。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "【週末操作】SPCX 等鎖定期結束前保守看待，長線投資者可現價持有；NVDA 多頭不變，設 $192 為警戒線。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.13 週末深度】Ray Dalio 持續對 AI 股票泡沫化風險提出警示：「看多 AI 技術 ≠ 看多 AI 股票」，現行估值嵌入大量溢價。SPCX 首日長上影線（高 $176.52、收 $160.95）恰好印證熱度驅動的短線買盤容易快速退燒。他更擔憂美國債務高企、CPI 4.2% 迫使 Warsh 採緊縮立場，「金融壓抑」風險升溫，建議增持黃金、多元分散。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【週末操作】減少 AI 高估值個股曝險；NVDA 可持有但應設停損；增持黃金對沖 FOMC 鷹派尾部風險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.13 週末深度】Stanley Druckenmiller 在 2026 年已大幅削減包括 NVDA 在內的 AI 動能股持倉，將資金轉向基礎建設與舊經濟韌性資產。SPCX 首日的長上影線對他而言是典型「消息出盡」教科書案例：估值已反映過多情緒溢價，基本面需要時間追上。FOMC 方面，他認為通膨 CPI 4.2% 下 Warsh 無任何降息空間，若點陣圖更鷹，科技股將面臨多重估值壓縮。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【週末操作】對 SPCX 保持觀望，等股價穩定 2-3 週後再評估；已持有 NVDA 者可設 $192 停損，或兌現部分利潤。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.13 週末深度】Adam Kobeissi 詳細記錄 SPCX 首日：480 億股成交量創 IPO 歷史紀錄！$176.52 高點後的急速回落是典型 Sell the News 壓力測試，但收盤 $160.95（+19.22%）仍遠優於多數 IPO 首日表現，意味市場仍在尋求合理均衡點。NVDA 的逆勢收紅（+0.16%，$205.19）被他解讀為 AI 機構資金的「定海神針」效應，FOMC 是下週最大的 Vol 事件。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "【週末操作】SPCX 盤後 $166.85 顯示短線多方仍積極，可在 $158-$162 設置條件買單；NVDA 持倉不動。"
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
        viewpoint: "【2026.06.13 週末突發】ARK 週末報告點出兩大核彈級催化劑：第一，SPCX 閃電納入 MSCI 指數，被動資金的湧入將進一步鎖死流通籌碼；第二，輝達新推「Vera」CPU 並注資 Neura Robotics，這完美印證了 ARK 關於「實體 AI 與機器人」將成為下個兆元賽道的預測！這就是我們重倉 SPCX、NVDA 與 TSLA 的原因，顛覆性創新正在加速爆發！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【週末操作】實體 AI 時代降臨！緊抱 SPCX、TSLA 與 NVDA，逢回就是加碼買點。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.13 週末深度】Dan Ives 將 SPCX 掛牌定性為「市場里程碑時刻」！這不只是太空公司上市，更是 AI 整合型企業估值的全新參照系。他預測 Tesla 與 SpaceX 合併機率達 80-90%（目標 2027 年中），AI 協同效應將創造難以估量的商業價值。NVDA 逆勢收紅 $205.19 被他稱為 AI 超週期「第三局第一個出局數」階段的最佳佐證，牛市遠未結束。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "【週末操作】SPCX 長線必持！Tesla-SpaceX 合併消息兌現前所有回調都是機會；NVDA $210 以下繼續買。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.13 週末深度】Keith Gill（Roaring Kitty）目前無可驗證的公開貼文針對 SPCX 或 NVDA 表態。2026 年 5 月其 X 帳號曾出現涉及 Solana Meme Coin 的異常活動，被普遍研判為帳號遭入侵所致，非本人操作。Reddit 社群（r/Superstonk）對他是否會借 SPCX 大 IPO 重返市場有高度期待，但目前無實質動靜。其核心關注點仍圍繞 GameStop（GME），對 AI/太空概念股暫無公開倉位揭露。",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "【週末推演】靜待 Roaring Kitty 本人官方帳號確認回歸才具參考意義；目前以 GME 動態為主要觀察指標。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.13 週末深度】Jim Cramer 對 SPCX 首日持複雜態度：先前曾警告熱錢湧入可能引發 NVDA 等藍籌的流動性危機，首日長上影線（高 $176.52、收 $160.95）部分應驗。但 NVDA 逆勢收紅 $205.19 讓他的流動性危機論顯得過時。他認為 SPCX 流通盤極小供需失衡將支撐中長線，甚至大膽預測估值可能達 6 兆美元。Warsh FOMC 首秀是下週最大的不確定性。",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【Cramer 反向指標】他喊 SPCX 估值 6 兆？短線小心高點！NVDA $200 以下可加碼。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.13 週末深度】SPCX 首日開高走低（高 $176.52、低 $149.34、收 $160.95）形成長上影線，技術上短線偏弱，但 $149 低點快速拉回收 $160 代表空方力道有限，盤後 $166.85 更是積極訊號。NVDA 連發行史上最大 IPO 都打不動它（收 $205.19），AI 算力主線堅不可摧。Warsh FOMC 若點陣圖降息次數砍至一次甚至零，外資可能短暫撤台，但結構多頭不變。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "【週末操作】SPCX 短線觀望至 FOMC 後，NVDA 逢修正至 $195-$200 分批加碼。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.13 週末深度】SPCX 長上影線是 IPO 日正常流量（高 $176.52、收 $160.95、盤後 $166.85），不代表敘事瓦解。SpaceX=Starlink 算力平台+xAI，馬斯克把硬體工程轉換成商業閉環的能力是真實護城河。NVDA 與 SpaceX 深度繫綁（AI 衛星用 NVDA GPU），兩者互為驗證（NVDA 收 $205.19），AI 週期遠未結束。FOMC Warsh 若鷹派，是加碼 NVDA 的短暫視窗！",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【週末操作】SPCX 長期看好，首週波動正常，等 $149-$155 支撐確立後中線建倉。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.13 週末深度】SPCX 首日技術面：盤中高 $176.52、低 $149.34、收 $160.95，長上影線揭示上方賣壓，但盤後 $166.85 彌補了收盤弱勢，說明是換手非崩盤。NVDA 面對史上最大 IPO 吸金仍守住 $205.19（+0.16%），是 AI 主線最強韌的數據支撐。FOMC Warsh 首秀最大看點是點陣圖降息次數，台股防守性配置占比可略提高。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "【週末操作】SPCX 等一週後再評估籌碼是否沉澱，NVDA $200 以下為長線加碼區。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.13 週末深度】SPCX 長上影線不用過度解讀，歷史上大型 IPO 首日出現此形態後第二週反彈機率高（盤後 $166.85 已有佐證）。NVDA 抗跌 +0.16%（$205.19）完美詮釋了「AI 主線資金的選擇性」。最大懸念是 Warsh 首秀 FOMC——他不喜歡前瞻指引且可能削弱點陣圖效力，若訊息模糊市場恐短暫震盪，台股在 FOMC 前維持小步前行、不宜重押。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【週末操作】SPCX 佈局時間等 FOMC 塵埃落定，屆時若 $155 以上站穩即可建立第一筆部位。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.13 週末深度】SPCX 長上影線最直白的解讀：IPO 第一天漲太多，Part money 取走是人之常情（高 $176.52 衝到就跑），但盤後 $166.85 是真實底牌。NVDA 連 SPCX 都搶不走它的籌碼，AI 主線就是主線！Warsh FOMC 首秀市場最怕的就是「鷹派黑天鵝」，台股投資人先把風控做好，留子彈應對震盪。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "【週末操作】SPCX 短線不追高，等回測 $149-$155 箱底後才是真正的進場點。"
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
        viewpoint: "【2026.06.13 週末深度】SPCX 首日長上影線（高 $176.52、收 $160.95）是 IPO 正常換手，馬斯克保留 30% 給散戶、定價權自握，是華爾街主導地位式微的歷史信號。NVDA 逆勢收紅 $205.19（+0.16%），代表 AI 主線資金絲毫未被 SPCX 排擠，兩者互為驗證。下週 Warsh 首秀 FOMC 若點陣圖縮減降息次數，台股短線將承壓，但結構性多頭未變。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【週末操作】SPCX 回測 $149-$155 區間支撐時分批承接，NVDA 維持核心倉位不動，FOMC 前不輕易動刀。"
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
        viewpoint: "【2026.06.13 週末深度】SPCX=AI 概念股！長上影線是 IPO 蜜月期必然換手，不是主力出貨，盤後 $166.85 更證明市場信心未散。NVDA 0.16% 的抗跌是 AI 主線最強烈的宣示，資金根本沒有離場！Warsh 點陣圖若維持兩次降息預期，台股科技股將迎來一波補漲；台積電外資持股跌破 70% 是籌碼轉換，非利空！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【週末操作】SPCX 趁高點回落至 $155 附近小幅佈局，台積電逢外資賣壓逢低買進！"
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
        viewpoint: "【2026.06.13 週末深度】SPCX 首日 $176.52 高點被打下來不用驚慌，這是大型 IPO 的正常籌碼洗牌（收 $160.95，盤後 $166.85 反彈）。真正有趣的是 NVDA 在 SPCX 搶盡目光之下仍守穩 $205.19，說明 AI 主線資金黏性極強。Warsh 首秀 FOMC 是最大變數，若釋放偏鷹訊號或縮減點陣圖降息次數，美股短期震盪但別輕易降低持股比例。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【週末操作】持股不動，等 FOMC 結果明朗後再決定是否加碼 NVDA 或 SPCX，0050 定期定額繼續！"
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
        viewpoint: "【2026.06.13 週末深度】SPCX 上影線代表 $176.52 一線有大量短期獲利了結的籌碼，需要時間消化，但 IPO 熱潮的本質是換手而非出貨終結（盤後 $166.85 反彈印證）。台股低軌衛星概念股短線宜觀望。NVDA 韌性強是 AI 基建需求未減的體現（收 $205.19）。FOMC Warsh 若縮減點陣圖降息，台幣走升壓力暫歇，對出口股有利。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "【週末操作】台股衛星族群短線觀望，NVDA、台積電維持核心持股，等 FOMC 指引明確。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.13 週末深度】SPCX 長上影線反映 IPO 散戶追高後的正常獲利了結（高 $176.52、收 $160.95），盤後 $166.85 反彈則顯示基本面信仰者快速回補。NVDA 在聚光燈全打向 SPCX 時仍收紅 $205.19，是 AI 週期韌性最佳佐證。FOMC Warsh 若廢除或淡化點陣圖，台股反應初期可能過度恐慌，反而是短線進場機會。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【籌碼操作】FOMC 前維持七成倉位，Warsh 偏鴿意外驚喜時立即加碼台積電！"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.13 週末深度】SPCX 首日高達 $176.52、收 $160.95，長上影線清楚，技術面短線超買，但盤後 $166.85 顯示買盤仍強。NVDA 在 SPCX 光環下收紅 $205.19（+0.16%），但這僅是小幅拉高，若 FOMC 偏鷹將成雙重壓力。台股下週前四天宜保守，等 6/17 FOMC 結果後再決定方向，台積電守住前高支撐是關鍵。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "【週末操作】FOMC 前降低 SPCX 部位至兩成，FOMC 後視點陣圖訊號再回補。"
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
