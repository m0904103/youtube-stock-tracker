const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 收盤盤後】S&P 500 收 7,267（-1.62%），NASDAQ -1.98%，費半 -3.57%。Tom Lee 維持牛市基調：今日下跌屬「三階段走勢」中的短期震盪，SpaceX IPO（6/12）抽走流動性是主因。市場仍有約 7 兆美元現金在場外觀望！NVDA 收 $205.47，AI 需求基本面完全未變。SMCI -27.98% 是個別事件（增資稀釋）非系統性風險。年底 S&P 7,700 目標不動搖，今日的下跌正是逢低布局的機會！",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【收盤操作】S&P 7,267 逢低分批布局 QQQ。NVDA $205 守穩可開始第一批。持有至年底目標 7,700。FOMC（6/17）前不加槓桿。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 收盤盤後】S&P 收 7,267（-1.62%），費半 -3.57%。Wilson 將半導體領跌定性為「健康的倉位重置」。SMCI -27.98%（70億增資稀釋）、AVGO -5.12%（AI 指引保守），皆為個別事件。企業年回購＋股息達 1.7 兆美元，底部流動性充裕。維持 S&P 年底 8,000 目標，「滾動式復甦」架構完整——AI 基建、去監管與財政刺激三大驅動力未變。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "【收盤操作】維持年底 8,000 目標。趁本週波動分批建倉優質成長股。資金從過熱 AI 龍頭輪動至金融（XLF）、工業（XLI）。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 收盤盤後】S&P 7,267（-1.62%），道瓊跌 953 點，費半 -3.57%。高盛撤除 2026 全年降息預期！這完全驗證了我維持高現金部位的決策。MSFT（$397）、AMZN 核心持倉繼續持有，但 FOMC（6/17）前絕不輕舉妄動。SMCI -27.98% 的爆雷式增資是市場估值過度的警鐘。美元衝破 100，10 年債 4.55%——聯準會的「不升等於失職、升息等於衰退」兩難正式確認，等 Warsh 主席首次 FOMC 裁決後再決定。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "【收盤操作】高盛撤降息確認熊市邏輯！維持高現金。FOMC（6/17）Warsh 表態後才加碼 MSFT（$397）或 AMZN。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06 收盤盤後】今日市場完整驗證我的多重危機警告：S&P -1.62%，道瓊跌 953 點，高盛撤除 2026 全年降息預期！美元衝破 100，10 年債殖利率 4.55%，WTI 原油 $88-90（美伊衝突持續），CPI 4.2%——供給端通膨螺旋完全確認！黃金 GLD $398.69 表現相對抗跌。VIX 21.71 顯示中度恐慌。TIPS 通膨保值債與黃金是當前最佳避風港，股票配置降至歷史低點！",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【收盤操作】黃金 GLD $398 繼續持有，原油能源股（XLE）加倉對沖通膨。TIPS 維持。股票大幅降低配置。等 FOMC（6/17）重新定價。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06 收盤盤後】S&P -1.62%，NASDAQ -1.98%，費半 -3.57%，NVDA $205——去泡沫化正在進行中！高盛撤除 2026 全年降息預期，美元衝破 100，10 年債 4.55%。幾週前大幅降低股票倉位的決定完全正確，今日下跌對整體組合影響有限。黃金與大宗商品倉位錄得正收益。FOMC（6/17）Warsh 首次主持後才重新評估股票配置比例——鷹派則繼續防禦；鴿派則重建科技股倉位。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【收盤操作】繼續持有黃金與大宗商品。股票配置維持低位。FOMC（6/17）後若 Warsh 偏中性，才考慮重建 NVDA（$205）等科技股倉位。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06 收盤盤後】S&P -1.62%，NASDAQ -1.98%，道瓊跌 953 點——Sell the News 完全兌現！「Magnificent 7」員工人均營收 27 萬美元（+20%），小型股卻持續萎縮，市場集中度風險極高！能源自 2 月大漲 50% 透過「油價→CPI 傳遞」推升通膨，美元指數衝破 100。SMCI -27.98% 的爆雷式個股風險將越來越多。FOMC（6/17）前現金為王！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "【收盤操作】現金為王！FOMC（6/17）前不動。配置能源股（XLE）對沖通膨。SMCI 式爆雷風險持續存在，嚴格設停損。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 收盤盤後】NVDA 收 $205.47，費半 -3.57%，SMCI -27.98%，AVGO -5.12%——這些都是短期市場情緒，不代表 AI 需求有任何問題！台積電 5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%），完全驗證 AI 算力需求持續爆炸性成長。Blackwell 平台訂單排到 2027 年底，CoWoS 封裝技術供不應求。NVDA $200 是強力支撐，這是長線加碼的絕佳時機！",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "【收盤操作】NVDA $205，支撐在 $200。台積電明日除息（2,249元）基本面強健。長線投資者視今日下跌為加碼機會。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 收盤盤後】S&P -1.62%，道瓊跌 953 點！但 SpaceX 明天（6/12）就要上市了——這才是改變世界的歷史性時刻！TSLA 今日收 $384.80，在整體市場暴跌中相對承壓，但 FSD 德國已獲批、Optimus 機器人年底量產交付，長線故事未變。高盛撤降息預期？「舊世界」金融體系的問題！投資改變未來的公司才是正確方向。明天 SpaceX IPO！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "【收盤操作】TSLA $384 短線壓力仍在。SpaceX（SPCX）6/12 上市是本週最大催化劑，TSLA 情緒有望受帶動！持有等待。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 盤後更新】TSLA 盤中反彈逾 4.5%（歐洲 FSD 核准）！ARK 維持對 TSLA 的極度樂觀與「逢低買進」策略。TSLA 正轉型為實體 AI（Physical AI）與 Robotaxi 壟斷平台。明日 SpaceX IPO 是重磅利多：馬斯克集團生態系（Starlink 聯網 + TSLA 自駕）將產生強大協同效應。SpaceX 掛牌的 $1.77 兆市值將徹底印證馬斯克願景的變現能力，為 TSLA 帶來連帶的估值信心支撐！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【盤後操作】繼續加碼 TSLA！SpaceX 掛牌成功將帶動集團連動行情，TSLA 目前股價被極度低估，ARK 核心哲學不變。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 盤後更新】TSLA 的「AI 篇章」才剛開始！我看好 TSLA 具備挑戰 3 兆美元市值的潛力。明日 SpaceX 以 $135 定價、$1.77 兆市值掛牌，這極可能是未來與 Tesla 進行世紀合併的「前奏」！我大膽預估兩家公司在 2027 年合併的機率高達 80% 以上！屆時 TSLA 將與 SpaceX 共享資本與頂尖 AI 技術，這將徹底重塑 TSLA 的估值天花板，無視短期逆風！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "【盤後操作】維持 TSLA 「跑贏大盤」評級。買入 TSLA 就是在買未來的「馬斯克終極帝國」。SpaceX 掛牌是 TSLA 的隱藏催化劑！"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 收盤盤後】S&P -1.62%，NASDAQ -1.98%，SMCI -27.98%——Diamond Hands 的時刻！GME 今日收 ~$22，整體市場暴跌中相對穩健。外資台指期空單 60,472 口是一顆等待引爆的炸彈。費半 -3.57% 讓散戶心態崩潰，但這正是逆向機會的前夜！軋空行情最可能在 FOMC（6/17）後爆發！繼續持有，等待逆轉！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "【收盤操作】GME $22 繼續持有。FOMC（6/17）後若外資空單大量回補，軋空行情將爆發！持有等待，嚴控倉位，不加槓桿。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 收盤盤後】S&P -1.62%！道瓊跌 953 點！費半 -3.57%！SMCI -28%！我早就說了！三重壓力：CPI 4.2% 讓 Fed 降息無望、SpaceX IPO 抽走流動性、美伊衝突持續！Warsh 首次 FOMC（6/17）前不確定性巨大！建議持現金等 6/17！（⚠️ Cramer 反向指標：他叫你跑的時候，NVDA $205 附近往往是買點！）",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【Cramer 反向指標】他說全部跑！記得反向操作——NVDA $200 附近，或許才是真正的底部！謹慎驗證後再行動。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06 盤後更新】SpaceX IPO 抽血效應確認：NVDA 跌至 $201，機構正拋售 AI 股籌資！明日 SPCX 掛牌（$135，市值 $1.77 兆）。針對 TSLA：市場正為其「高資本支出燒錢」與「實體 AI 敘事」進行激烈多空辯論。需留意兩點：①SpaceX 資金狂熱是否對 TSLA 產生短期資金排擠；②即便有集團光環，TSLA 仍需面對 Robotaxi 落地時間點的嚴格檢視。FOMC（6/17）前市場高波動風險極大！",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "【盤後操作】觀察 SPCX 首日收盤是否站穩 $140+。NVDA $200 守住才進場。TSLA 短線不追高，留意資金排擠與基本面落地風險！"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06 盤後更新】今日重大警訊：外資台指期空單暴增至 63,168 口（+1,219 口！），空方力量不退反進！NVDA 跌至 $201，逼近 $200 生死線。黃金盤中一度跌至 $4,023，亞洲盤空頭回補後回升至 $4,100。美元 DXY ~100.10 維持高位，壓制科技股估值。FOMC（6/17）Warsh 首秀＋點陣圖，若偏鷹則市場恐劇烈震盪。SpaceX $1.77 兆估值類比 2021 SPAC 狂熱——零售投資者分配比例高達 30%，風險極高！現金倉位建議維持 15~20%。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【盤後操作】能源 ETF（XLE）油價 $82+ 可配置避險。等 FOMC（6/17）後確認方向再加碼科技股。NVDA $200 是最後防線，跌破觀望。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06 盤後更新】三大壓力齊發：美伊衝突避險、CPI 4.2% 鷹派強化、SpaceX 龐大 IPO 抽走流動性。NVDA 跌至 $201（-3.39%），SMCI 暴跌衝擊 AI 板塊信心。外資台指期空單暴增至 63,168 口（+1,219口！）——外資不退反進加碼空單！6/17 FOMC 是 Warsh 首秀＋附點陣圖，若點陣圖偏鷹，市場恐有劇烈反應。AI 長線趨勢未破，但需靜待 FOMC 後再行布局，勿輕易追多！",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "【盤後操作】等 6/17 FOMC 點陣圖明朗，再評估 NVDA $195~200 支撐。外資空單 63,168 口未回補前，不宜重倉！"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06 盤後更新】台積電今日 24 秒閃速填息（第 22 次），但 TSM ADR 仍跌 4.48% 至 $408.75——外資「現貨賣、期貨空」組合策略確認！外資台指期淨空單暴增至 63,168 口（+1,219 口），顯示外資對台灣市場仍極度偏空。NVDA 跌至 $201，距 $200 關口僅一步之遙！SpaceX IPO 資金退潮後，流動性預計重新流回 AI 核心標的——NVDA 和 TSM ADR 是最大受益者。耐心等待是關鍵！FOMC（6/17）Warsh 點陣圖是轉折催化劑。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【盤後操作】SpaceX 6/12 掛牌後觀察資金退潮方向。TSM ADR $400~408 可小量試單。NVDA 守穩 $200 才加碼，破 $200 再等。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06 盤後更新】外資台指期空單暴增至 63,168 口——驗證我的判斷！今日盤中殺至 42,006 點雖然回補，但我不認為最低點已到！空方力道依然強勁。CPI 4.2% 讓降息夢碎，升息風險反而升溫。FOMC（6/17）Warsh 首秀點陣圖若偏鷹，股市將再度大跌！技術面需等週 K 確認守穩 43,000 才動作。融資戶必須立刻降槓桿！持股降至三到五成！黃金 $4,100（一度跌至 $4,023）仍是最佳避風港！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "【盤後操作】融資戶立即降槓桿至三成以下！等週 K 確認守穩 43,000 才加碼。黃金 GLD $4,000 附近繼續持有或加碼。FOMC（6/17）前不追高任何標的！"
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
        viewpoint: "【2026.06 盤後更新】今日台股盤中重挫千點後 V 型反轉留長下影線——這是多空洗盤型態，但需謹慎！外資台指期淨空單暴增至 63,168 口（+1,219 口！），外資加碼看空力道不減。CPI 4.2% 讓 Warsh 首場 FOMC（6/17）偏鷹風險大增，點陣圖若顯示升息預期，市場恐有劇烈反應。短線建議先觀察 42,800~43,000 能否守穩，SpaceX（SPCX）明日掛牌後若 NQ 期指繼續反彈，才考慮加倉台股 AI 供應鏈。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【盤後操作】台股守穩 43,000 點才分批加碼 0050。SpaceX 6/12 掛牌後觀察 NQ 走勢，FOMC（6/17）前維持保守！"
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
        viewpoint: "【2026.06 盤後更新】台積電 24 秒填息展現 AI 產業長線信心！今日台股盤中最低殺至 42,006 點，後收 43,149——百貨公司週年慶折扣最低點！SpaceX 明日掛牌（$135，市值 $1.77 兆），與 AI 概念並不對立，甚至帶動整體科技熱情！重點關注個股：世界先進、南亞科、群聯、環球晶。外資空單 63,168 口是多頭未來的火箭燃料——回補之日即是多頭大反攻！等 FOMC（6/17）神兵臨，勝負見！千萬不要融資！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【盤後操作】43,000 點以下分批加碼台積電、AI 供應鏈。SpaceX 6/12 掛牌後壓力緩解！等外資空單開始大量回補（降至 55,000 口以下），多頭大反攻啟動！持閒錢、不融資！"
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
        viewpoint: "【2026.06 盤後更新】市場恐慌時最需保持紀律！外資空單 63,168 口壓境。但別忽視明日 SpaceX 的巨無霸 IPO！全球太空經濟爆發，馬斯克集團的整體聲量提升將對 TSLA 投資人情緒產生潛在帶動作用。台股方面，記憶體（南亞科、群聯）與 AI 基礎設施長線看法不變。FOMC（6/17）Warsh 首秀點陣圖是最大變數——若偏鷹科技股需重新評估。長線繼續定期定額！",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【盤後操作】股癌式紀律：持股不超過七成，剩現金等 FOMC（6/17）。0050、台積電定期定額繼續！可留意 SpaceX 上市對 TSLA 的情緒帶動。"
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
        viewpoint: "【2026.06 盤後更新】外資空單暴增至 63,168 口（+1,219 口！）——盧燕俐：今日台股盤中殺至 42,006 點後 V 轉，技術上留長下影線，低接力道確認！杜金龍波浪理論更新：第四波修正目標可能提前至 42,000 點完成，若 FOMC（6/17）偏鷹則看 40,000 點大加碼機會！SpaceX 明日掛牌（$135，市值 $1.77 兆），6/13 後壓力大幅緩解！台積電收 2,250 元，守穩 2,200 元是長線加碼線。00981A 季配息 ETF 繼續持有！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "【最新底部地圖】42,000點已初步觸底試單→40,000點大加碼→36,000~38,000點傾巢而出！SpaceX 6/13後布局視窗開啟，00981A持有等配息。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06 盤後最新籌碼快報】⚠️ 重大警訊：外資台指期淨空單暴增至 63,168 口（+1,219 口！），空方繼續加碼！外資現貨賣超 357.79 億。台股今日盤中最低 42,006 點，但 V 型反轉收 43,149（-76點）。SpaceX 明日（6/12）掛牌（定價 $135，市值 $1.77 兆），資金吸金效應今日仍在！FOMC（6/17）Warsh 首秀＋點陣圖是本週最大地雷。轉折三訊號更新：①外資空單降至 55,000 口以下；②台積電守穩 2,200 元；③FOMC 鴿派聲明。三者同時出現才是多頭訊號！",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【籌碼操作】外資空單 63,168 口仍在加碼！現在不是進場時機！等空單降至 55,000 口以下才是轉折！SpaceX 6/13 後壓力緩解。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06 盤後更新】今日台股留長下影線（低點 42,006 點後收 43,149），技術面出現支撐訊號！但外資台指期淨空單暴增至 63,168 口（+1,219 口！），現貨賣超 357.79 億——外資策略：現貨減碼、期貨加空，對後市仍極度偏空。SpaceX（SPCX）明日掛牌（$135，市值 $1.77 兆），台灣衛星供應鏈（昇達科、華通）持續受關注。主流飆股動能轉弱，建議防禦型、高殖利率個股為過渡策略，等外資空單縮減才積極做多！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "【盤後操作】等外資空單降至 55,000 口以下再積極做多。防禦型高殖利率股（0056、00878）為當前最佳過渡配置。台積電守穩 2,200 元再加碼。"
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
