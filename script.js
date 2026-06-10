const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 CPI落地盤前】CPI 4.2% 完全符合預期，核心 CPI 僅 2.9%，通膨無意外驚嚇！Tom Lee 最新觀點：市場最壞的假設已解除，近期賣壓是 SpaceX IPO 籌資與半導體集中度過高的短期亂流，並非多頭終結。他維持 S&P 500 年底 7,700 目標（現價 7,347），指出 NVDA（$208）的「假敘事」賣壓已使其進入極具吸引力的買點，AI 需求未見任何減弱。今晚開盤應見反彈，布局者不應在此刻輕言放棄。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【CPI落地操作】NVDA 今晚若守穩 $200 支撐可分批加倉；S&P 守穩 7,200 以上可布局 QQQ。FOMC（6/17）前不加槓桿。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 CPI落地盤前】CPI 如預期落在 4.2%，Wilson 視此為「鬆一口氣」訊號。近期急跌是由倉位過度集中（半導體與槓桿型 ETF）所引發的健康回調，基本面並未惡化。他維持 S&P 500 年底 8,000 點目標，強調 EPS 修正廣度創週期新高達 26%，市場領導權將從超漲 AI 龍頭轉向低估標的。今晚開盤可見短暫反彈，但需觀察 FOMC 態度後再決定加碼力道。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "【CPI落地操作】標普現價 7,347，建議轉向金融（XLF）、工業（XLI）等估值合理的輪動板塊，減少對 NVDA 單一集中持股的依賴。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 確認，通膨頑固，聯準會陷入「不升息等於失職，升息等於衰退」的兩難。台股 -1,479 點、美伊衝突持續讓我繼續維持高現金部位。MSFT、AMZN 核心持倉依然在手，但不在此時加碼。等待地緣政治轉折點出現，才是重新大舉進場的時機。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "【盤後操作】維持高現金。等待地緣政治轉折（停火訊號）或 FOMC 釋出鴿派訊號，才考慮加碼 MSFT（$410）與 AMZN。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06 週三盤後更新】地緣政治危機（美伊衝突）直接驅動通膨（CPI 4.2%），這是典型的供給側通膨——貨幣政策無法解決！黃金今日大漲是市場在做正確的事。我長期警告的「多重危機疊加」正在同步發生：地緣政治 + 通膨頑固 + 高估值股市 = 系統性風險最高點。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【盤後操作】持續加碼黃金（GLD）與能源股（XLE）。TIPS 通膨保值債券繼續持有，股票配置降至歷史低點。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2%、台股重挫——一切按照最壞劇本發展。我幾週前已大幅降低股票倉位，今日跌幅對整體組合影響有限。黃金與大宗商品今日錄得正收益。等待 FOMC（6/17）後政策確定性，才重新評估股票配置比例。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【盤後操作】今日靜觀其變，黃金與大宗商品倉位繼續持有。等 FOMC（6/17）後再重新評估股票配置。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06 CPI落地盤前】4.2% 雖符合預期，但仍是近三年高點，且主要由能源價格（地緣衝突帶動）推升——這正是「Fed 的噩夢情境」，供給端通膨迫使 Fed 在壓通膨與失業率上升之間取捨。核心 CPI 月增 0.2%（低於預期）是今日唯一正面訊號。NVDA（$208）、META（$585）、AAPL（$291）等高估值科技股仍面臨利率維持高位的持續壓力，今晚的任何反彈都應保持謹慎。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "【CPI落地操作】不建議追高，可等 FOMC（6/16-17）結果明朗後再決定是否建立科技股新倉。持有現金最安全。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 CPI落地盤前】CPI 4.2% 符合預期，AI 基礎建設的長期需求與通膨數據毫無關係！台積電今日雖跌，但 CoWoS 封裝技術供應滿足率仍不到需求的 60%，Blackwell 平台訂單已排到 2027 年底。NVDA 目前 $208，30 日均線在 $210~215，短期技術面略弱，但長線基本面比任何時候都強。每投入 1 美元 NVDA 晶片，可為生態系帶來 8-10 美元乘數效應，AI 算力革命才正要開始。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "【CPI落地操作】NVDA 目前 $208，長線持有不動搖。若今晚跌至 $200 支撐，是非常有吸引力的長線加碼機會。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 週三盤後更新】SpaceX 後天（6/12）就要上市了！全球市場的動盪反而更顯示出「舊世界」金融體系的脆弱。特斯拉的 FSD 今日在德國的許可通過，Optimus 機器人預計在 2026 年底開始量產交付。忽略市場雜訊，投資改變未來的公司。",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "【盤後操作】等待 SpaceX（SPCX）6/12 的歷史性上市！TSLA 目前 $397，FSD 德國獲批是短線催化劑。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 CPI落地盤前】Cathie Wood 最新觀點：當前高通膨是過渡現象，AI 帶來的生產力提升將從根本上長期壓低物價。CPI 4.2% 符合預期未超預期，對 ARK 持倉壓力遠低於市場擔憂。核心 CPI 月增 0.2% 低於預期，更是正面訊號。繼續加倉 PONY AI（自動駕駛）與 COIN（加密貨幣基礎設施），認為 AI 基礎設施的爆炸性支出將延續數年，今晚是科技股估值修復的機會。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【CPI落地操作】長線投資者可在 NVDA（$208）、META（$585）回調時建立核心倉位。繼續加碼 PONY 與 COIN，逢市場恐慌加倉。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 CPI落地盤前】Dan Ives 最新：CPI 符合預期是重大利多，移除市場最大不確定性！他持續力挺「AI 超級週期處於第三局」，每投入 1 美元 NVDA 晶片，可帶來 8-10 美元生態系乘數效應。AAPL（$291）雖因 WWDC 2026 AI 進度疑慮承壓，但此為超跌買點——WWDC 本週持續（6/9~13），AI on iPhone 落地故事正在揭幕。META（$585）的 AI 廣告貨幣化是最具確定性的成長引擎。今晚美股開盤應有正向反應，AI 龍頭將領漲！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "【CPI落地操作】AAPL 現價 $291 具強力吸引力，今晚可逢低建倉；META（$585）持有不動；AVGO（$371）是 AI 基建次選。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 CPI落地盤前】Keith Gill 近期維持低調，無針對 CPI 的公開發言。但散戶社群對 CPI 落地後的「軋空行情」有極高期待！討論焦點集中在 GME（$22）及被大量放空的科技股。外資台指期空單仍有 61,871 口，CPI 不超預期是引爆軋空的最佳催化劑。Diamond Hands 在這種極度恐慌的市場中等待的，正是這樣的反轉時刻。整體社群情緒：樂觀，認為 CPI 落地 = 買訊！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "【CPI落地操作】GME 目前 $22，密切觀察今晚成交量異動。外資空單若大量回補，超跌散戶股將爆發軋空行情（高風險，嚴控倉位）。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 CPI落地盤前】Cramer：CPI 符合預期，避免了最壞情境！今晚開盤態度審慎樂觀。市場仍需消化美伊局勢風險，建議持有壓力較大的個股「賣半留半」。NVDA（$208）的新晶片產品給予正面評價，AI 硬體需求仍有支撐。AAPL（$291）的 AI 進度落後是短期利空，META（$585）相對強勁。今晚開盤若跌反而是機會！（⚠️ Cramer 反向指標提醒：他建議賣的時候，往往才是買點！）",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【Cramer 反向指標】NVDA 若今晚下跌超過 3% 可考慮買進一半倉位，另一半等市場確認方向。（請記得反向操作 Cramer！）"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06 CPI落地最新】CPI 年增 4.2% 完全符合預期，更重要的是核心 CPI 月增僅 0.2%、低於預期的 0.3%，這是今晚美股最大的正面驚喜！通膨黏性未繼續惡化，那斯達克期貨盤前跌幅已收窄，科技股有望今晚開盤後企穩甚至反彈。NVDA 目前 $208，關鍵支撐 $200；TSMC ADR 約 $414。短期最大障礙排除，市場可望在 FOMC（6/17）前回歸基本面驅動。台積電明日除息（-6元），ADR 今晚走勢是明日台股的最佳前瞻指標。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "【CPI落地操作】核心 CPI 低於預期是亮點！等美股開盤後那指守穩前低再分批進場，優先布局 NVDA（$208，支撐 $200）與 TSM ADR（$414）。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06 CPI落地最新】CPI 4.2% 符合預期但仍創 2023 年以來新高，市場情緒仍需消化。核心 CPI 月增 0.2% 略優於預期，代表通膨升溫主要來自能源而非廣泛需求，Fed 升息緊迫性未顯著提升——這是今日報告中最正面的訊號。台股外資今日賣超 935 億為史上第 8 大，但若美股今晚止跌，外資調節力道明日可能開始收斂。NVDA 30 日均線在 $210~215，今晚守穩 $200 是技術上最關鍵的一戰。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【CPI落地操作】台積電除息後約 2,249 元參考價，設 43,000 點為台股短線多空分水嶺。NVDA 守穩 $200 再進場，破 $200 繼續等待。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 落地與預期一致，不算意外。台股 -1,479 點告訴我們市場恐慌遠超基本面應有的反應。MSFT、AMZN 的雲端 AI 基本面未改，這種恐慌性拋售是在製造長線機會。等待 FOMC（6/17）結果確定後，才是大舉進場的時機。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "【盤後操作】持續觀察，等待 FOMC（6/17）。若聯準會措辭偏中性，MSFT、AMZN 是優先進場標的。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06 CPI落地最新】CPI 數據完美落在預期值 4.2%，核心通膨月增 0.2% 更是低於共識——對美股非常友善！「不比預期差」本身就是今晚多頭反彈的燃料。台股今日重挫 1,479 點反而有助籌碼沉澱。台積電明日除息 6 元只是指數點位的技術調整，不影響長線價值。美股今晚反彈機率大，那指有機會收復盤前失地。TSMC ADR（$414）今晚走勢，是判斷台積電明日能否快速填息的最佳前瞻指標。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【CPI落地操作】以 TSMC ADR 今晚走勢為參考，若 ADR 收漲，台積電明日除息後（~2,249元）可視為低接機會，建議分批布局。"
    }
];

const twInfluencersData = [
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 週三盤後更新】台股今日重挫 1,479 點，收 43,225 點！台積電收 2,255 元（-50元），是除息前最後買進日。CPI 4.2% 確認，聯準會鷹派立場不變。外資連五日大賣超，籌碼面極度嚴峻。明日台積電除息（-6元）。投資人應以「保留現金、等待底部」為首要任務。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "【盤後操作】明日觀察台積電除息後是否快速填息，填息成功是多頭信心指標。以 0050 定期定額繼續執行，不追殺。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 週三盤後更新】台積電今日（除息前最後一日）收 2,255 元，下跌 2.17%！台股重挫 1,479 點。CPI 4.2% 符合預期，美伊衝突持續。台積電 AI 晶片需求仍強，今日跌幅主要是市場情緒恐慌所致。明日除息後台積電股價自動降 6 元，重點是填息速度！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【盤後操作】台積電今日收 2,255 元（除息前最後日），除息後參考價約 2,249 元。分批目標：除息後 2,200 元以下開始第一批；2,100 元以下加大第二批。AI 供應鏈基本面未變，逢低布局。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06 CPI落地最新】CPI 符合預期是市場「最好的結果之一」，真正的壓力解除關鍵在核心 CPI 月增僅 0.2%，顯示通膨結構未加速。台股今日跌幅達史上第 6 大，屬於多空角力下的籌碼極端清洗，外資期貨空單 61,871 口高位加上現貨連 5 日賣超，短線籌碼面沉澱後反彈動能可期。下週 FOMC（6/17）前，市場有望在不確定性降低後逐步回穩。台積電除息日視為長線投資人低接良機。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【CPI落地操作】台積電除息後 2,249 元參考價附近視為長線低接良機，定期定額族可擴大加碼一次。標普守穩 7,200 為多空分野。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 週三盤後更新】台股 -1,479 點，我在三週前就將持倉降至三成——今日的帳面損失對我影響降到最低！CPI 4.2% 確認，聯準會 6/17 FOMC 將採取鷹派立場。台積電今日收 2,255 元，明日除息後約 2,249 元參考價。約 21 倍本益比，接近合理估值下緣，但短線仍有下行壓力。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【盤後操作】等待三個條件同時出現才進場：①CPI 開始下滑；②FOMC 措辭偏中性；③台積電守穩除息後 2,200 元之上（現價 2,255，除息後約 2,249）。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 週三盤後更新】從總體經濟角度分析：CPI 4.2% 確認通膨頑固 → 聯準會不敢降息 → 美元維持強勢 → 外資持續撤出台股。惡性循環！打破循環的條件：①美伊停火協議（油價下跌）；②FOMC 釋放鴿派訊號。在此之前，台股仍面臨向下壓力。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "【盤後操作】以美元指數走弱與外資期貨空單減少作為台股轉折的先行指標。兩者同步出現才是真正轉折。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06 週三盤後緊急更新】台股今日收 43,225 點，重挫 1,479 點！我的波浪理論正在應驗！台股自 46,552 歷史高點下來，已進入「第四波修正」。最新底部目標：已跌破月線，下一關鍵支撐在 42,000 點。若 42,000 守不住（搭配 FOMC 鷹派 + 美伊衝突持續），波浪理論計算的第四波底部區間為 40,000 點（強支撐）至 36,000~38,000 點（0.382 黃金比例回撤，從46,552計算）。存股族台積電策略：台積電今日收 2,255 元，明日除息 6 元，參考除息價 2,249 元。分批目標：除息後 2,200 元以下開始第一批，2,100 元以下大力加碼！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【杜大師底部地圖】🗺️ 42,000點試單 → 40,000點大加碼 → 36,000~38,000點傾巢而出！台積電：除息後 2,200 元以下分批；2,100 元以下全力買進。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06 週三盤後更新】台股今日重挫 1,479 點，CPI 4.2% 確認！跌時重質的原則再度被印證——持有台積電、台達電的投資人跌幅約 2~3%，相比中小型題材股的 5~10% 跌停，已是相對保護。明日台積電除息（-6元），若能快速填息，是多頭重拾信心的關鍵訊號。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "【盤後操作】明日觀察台積電除息後填息動能。持有核心持股不動，靜待市場恢復理性。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 週三盤後更新】台股重挫 1,479 點，電子股全面崩跌，AI 概念股跌停家數創本波新高！但值得注意：今日有資金明顯轉入營建股、金融股等傳統防禦型族群，顯示資金輪動從「高成長」轉向「高股息+低本益比」的防禦配置。明日台積電除息後，觀察量能是否有護盤資金進場。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "【盤後操作】今日資金轉進防禦股。明日若台積電除息後出現承接，電子股有機會止穩，屆時才考慮小量布局。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06 週三盤後更新】記憶體族群今日持續承壓，南亞科、威剛、華邦電均大跌！但基本面：HBM 需求面並未因市場下跌而改變，這次下跌純粹是市場情緒與籌碼面問題，非基本面惡化。等待大盤底部確立後，記憶體族群將是率先反彈的板塊之一，估值已大幅修正至合理甚至低估區間。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "【盤後操作】開始建立記憶體股（南亞科、威剛、華邦電）的觀察清單，等大盤底部確立後，記憶體族群是首選反彈標的。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06 週三盤後更新】台股今日量能放大且大幅下跌，是不好的訊號——恐慌性賣盤仍在！今日外資現貨賣超數字是明日盤面的最大關鍵。若今日外資賣超超過 500 億元，代表外資仍在大量減碼，明日台積電除息後的填息之路更加艱難。謹慎等待籌碼面改善。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "【盤後操作】觀察今日外資現貨賣超金額。若縮減至 300 億以下，可視為外資賣壓趨緩，小量試單台積電。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 週三盤後更新】台股今日收 43,225 點，失守月線！技術面重大訊號：月線（43,950）已跌破。下一個技術支撐：季線約 42,500 點。若季線也守不住，則下一個強支撐為 40,000 整數關卡。明日台積電除息（-6元），大盤指數將因此自動下降約 100 點，需特別注意。空手者繼續等待，有倉位者嚴格執行停損紀律。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "【盤後操作】月線（43,950）已失守，下一關卡：季線（42,500）→ 40,000整數。等待季線附近的支撐確認再進場。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 週三盤後更新】期貨今日大空！台股重挫 1,479 點，空方今日大賺！明日台積電除息（-6元），期貨將自動調整結算點數。操作策略：今日空方倉位可部分獲利了結（已達預期目標），明日觀察台積電除息後是否出現搶進填息買盤，作為短多交易的觸發點。若無填息跡象，繼續偏空，下一個空方目標 42,000 點。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "【盤後操作】空方倉位部分獲利了結。明日觀察台積電填息動能，有填息則短多；無填息則繼續偏空，目標 42,000 點。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06 週三盤後更新】台股今日重挫 1,479 點，三大利空同步確認：CPI 4.2%（通膨頑固）、美伊衝突持續（油價壓力）、外資連日大賣超（籌碼面惡化）。月線（43,950）已失守，下一個支撐為季線（42,500）。明日台積電除息（-6元），指數將自動調整——重點是觀察填息速度！CPI 符合預期可能讓市場短線喘口氣。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【盤後操作】月線失守，下一關卡季線（42,500）。明日觀察台積電除息後填息情況。FOMC（6/17）前保守操作。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06 CPI落地最新】CPI 4.2% 完全符合預期，不存在「超預期爆雷」的情境，市場最壞的情況已過！折折先前即指出此波跌勢為籌碼調整非空頭，今日台股再跌 1,479 點反而是「打折」買好股的機會。外資空單 61,871 口是未來軋空大反攻的燃料！美股今晚開盤預計見到逢低承接，科技股、AI 族群止跌後可望快速反彈。台積電除息 6 元為正常配息，長期持有邏輯不變。千萬不要融資！以閒錢逢低分批。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【CPI落地操作】打折時機到！台積電除息後 2,249 元附近可視為優先加碼點，等外資賣超縮量確認落底。持閒錢、不融資！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06 週三盤後更新】從利率週期數據看，今日台股 -1,479 點與 CPI 4.2% 的組合，是典型的「利率週期高原期」訊號——市場已完全消化了高利率，但尚未見到轉折點。轉折點的觸發條件：①CPI 連續兩個月下降；或②中東停火協議達成油價下跌。在轉折點出現前，持有防禦型資產（高殖利率、低本益比）是最佳策略。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "【盤後操作】防禦型配置：高殖利率股（0056、00878）與美債 ETF（00679B）。等待 CPI 連續下滑或 FOMC 釋鴿信號，才切換回成長型持倉。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06 週三盤後更新】今日全球市場完整的政經解讀：CPI 4.2% 確認（通膨結構性頑固）+ 美伊衝突持續（油價壓力）+ 台股 -1,479 點（亞股先行反應）+ 6/12 SpaceX IPO（資金排擠）+ 6/16~17 FOMC（利率政策確認）。這五個事件構成本週「完美風暴」的核心。全球資金的最終出口：美元現金、黃金、能源股。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "【盤後操作】美伊停火訊號 + FOMC 鴿派措辭（6/17），是市場最大的正面催化劑。兩者同時出現才能真正反轉頹勢。目前保持現金。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06 CPI落地最新（EP669更新）】CPI 4.2% 符合預期、核心 CPI 不驚爆，對指數化長期投資人來說這根本不是事，繼續定期定額！台股單日跌 1,479 點的市場恐慌已有所反映，通膨結構未惡化代表 Fed 不會在 6 月緊急升息。這次 CPI 是「靴子落地」，長期布局者不需要恐慌。台積電目前 2,255 元，明日除息後約 2,249 元。幾年後回頭看，今日的恐慌只是笑談。反而是加碼時機！",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【CPI落地操作】維持定期定額不動搖。若有子彈可趁市場恐慌時額外加碼 ETF（0050、QQQ），不要因短線波動停扣！台積電 2,000 元以下是超低價長線機會。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06 週三盤後更新】今日最重要的基本面更新：台積電今日收 2,255 元，明日除息 6 元，參考除息價約 2,249 元。從財務面評估：以 EPS 預估 2026 年約 50 元，乘以歷史合理本益比 20~22 倍，合理估值區間為 1,000~1,100 元（ADR 換算約 185~200 美元）。現在的股價已大幅修正，存股族可開始分批評估。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "【盤後操作】台積電除息後從本益比看接近合理下緣，存股族可開始分批評估。廣達（2382）與聯發科（2454）若本益比低於歷史均值，可試探性布局。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06 週三盤後緊急更新】台股今日重挫 1,479 點，收 43,225 點！CPI 確認 4.2%（符合預期）加上美伊軍事衝突持續，市場進入全面避險。杜金龍最新波浪理論研判：台股自 46,552 歷史高點下來，目前已進入「第四波修正」，修正幅度預估 4,000 至 6,000 點。推算關鍵支撐位：【第一道防線】42,000 點（心理關卡）；【第二道防線】40,000 點（大整數關）；【極端情境】若國際情勢持續惡化（中東戰爭擴大 + CPI 升息），不排除下探 36,000~38,000 點（0.382 黃金回撤，從46,552計算）。盧燕俐提醒：00981A 在 30 元以下可分批；28 元為強力支撐，可加大買進力道。核心持股「三台一發」（台積電、台達電、台光電、聯發科）走勢是底部確認的關鍵信號。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "【杜金龍底部操作地圖】🗺️ 42,000點：小量試單；40,000點：確認支撐後大幅加碼；36,000~38,000點：清倉現金最大化買進。台積電（現價 2,255，除息後約 2,249）：2,200 元以下開始分批；2,100 元以下全力買進！"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06 CPI落地最新】CPI 4.2% 符合預期，核心通膨月增 0.2% 低於預期，整體解讀偏正面！外資台指期空單仍維持 61,871 口，若 CPI 落地後空單開始快速回補，將形成「軋空行情」！今日台股還有一個重要訊號：央行楊金龍確認「選擇性信用管制到此為止」，讓營建股爆出漲停，資金開始輪動！今晚美股因 CPI 落地有機會止跌回穩，台積電明日除息（2,249 元參考價）後觀察量能是否出現低接買盤。空單降至 50,000 口以下 = 最強多頭訊號！",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【CPI落地籌碼操作】監控外資空單是否快速縮減（目前 61,871 口 → 目標觀察降至 55,000 口以下）。台積電除息後 2,200 元以下開始分批。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06 CPI落地最新】CPI 年增 4.2% 符合預期，關鍵亮點：核心 CPI 月增只有 0.2%，低於市場預期 0.3%——這對今晚美股是正面訊號，Fed 不需要在 6 月份緊急升息！台積電歷史上 27 次季除息有 21 次當日填息，明日除息後（參考價 2,249 元）基本面未變，填息行情可期。美伊衝突帶來能源波動仍需觀察，但 CPI 靴子落地後，台股有望明日在外資賣超縮量下迎來技術性反彈。等待軋空訊號，主流股率先大漲！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "【CPI落地操作】台積電除息參考價 2,249 元可視為短線支撐，配合外資期貨空單是否回補，順勢操作。AI 供應鏈低位階股等軋空確認後進場。"
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
