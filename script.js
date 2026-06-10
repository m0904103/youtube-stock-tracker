const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 週三盤後更新】CPI 確認 4.2%，符合預期但創 2023 年以來新高。台股 -1,479 點正是我說的「第二階段震盪期」！CPI 沒有超預期反而是「利空出盡」的正面訊號。我對年底標普 7,700 點目標毫不動搖，此時逢低布局才是真正的聰明錢！",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【盤後操作】CPI 符合預期，今晚美股若跌幅小於1%可視為利空出盡！分批布局 QQQ，目標持有至年底反彈。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 落地、台股大跌 1,479 點收 43,225——市場正在進行痛苦但必要的估值重置。聯準會 6/17 FOMC 幾乎確定維持利率不動，鷹派措辭將繼續壓制情緒。短期需更多時間消化通膨與地緣政治雙重風險，等待明確轉折訊號後再大舉進場。",
        stocks: ["MSFT (微軟)", "AAPL (蘋果)", "GOOGL (Alphabet)"],
        entryPoint: "【盤後操作】等待 FOMC（6/17）確認後才是真正布局時機。標普跌至 7,100 以下小量累積 MSFT、AAPL。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 確認，通膨頑固，聯準會陷入「不升息等於失職，升息等於衰退」的兩難。台股 -1,479 點、美伊衝突持續讓我繼續維持高現金部位。MSFT、AMZN 核心持倉依然在手，但不在此時加碼。等待地緣政治轉折點出現，才是重新大舉進場的時機。",
        stocks: ["MSFT (微軟)", "META (Meta)", "AMZN (亞馬遜)"],
        entryPoint: "【盤後操作】維持高現金。等待地緣政治轉折（停火訊號）或 FOMC 釋出鴿派訊號，才考慮加碼 MSFT 與 AMZN。"
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
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 確認，完全符合我的預測！台股 -1,479 點、美伊衝突、SpaceX 吸金三重壓力如約而至。根據數據模型，FOMC 結果出爐（6/17）前美股不具備大幅反彈條件。最佳策略：持有現金，等待 FOMC 後方向確認，再分批進場 TSMC ADR 與 AVGO。",
        stocks: ["TSMC (台積電)", "AMD (超微)", "AVGO (博通)"],
        entryPoint: "【盤後操作】CPI 落地，FOMC 前維持觀望。標普若跌逾 2%，明日逢低試單 TSM（台積電 ADR）與 AVGO。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 週三盤後更新】CPI 數字、美伊衝突這些都影響不了 AI 基礎建設的長期需求！台積電今日雖然下跌，但其 CoWoS 封裝技術的供應滿足率仍不到需求的 60%。我們的 Blackwell 平台訂單已排到 2027 年底。短期市場波動對我們的商業計劃毫無影響，AI 的算力革命才正要開始。",
        stocks: ["NVDA", "TSM", "ARM"],
        entryPoint: "【盤後操作】NVDA 下跌是買點！繼續長線持有。若 NVDA 跌至 90 美元以下，是非常有吸引力的長線加碼機會。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 週三盤後更新】SpaceX 後天（6/12）就要上市了！全球市場的動盪反而更顯示出「舊世界」金融體系的脆弱。特斯拉的 FSD 今日在德國的許可通過，Optimus 機器人預計在 2026 年底開始量產交付。忽略市場雜訊，投資改變未來的公司。",
        stocks: ["TSLA", "GOOGL", "ASTS"],
        entryPoint: "【盤後操作】等待 SpaceX（SPCX）6/12 的歷史性上市！這才是本週最重要的事情。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 週三盤後更新】台股大跌、CPI 4.2%——ARK 的機會來了！我們在今日市場恐慌中繼續執行買入計劃，加碼 PONY AI 與 COIN。技術通縮（AI 驅動的生產力提升）長期必然壓制通膨，市場對短期 CPI 數據的過度恐慌，正是長線加碼破壞性創新的最佳時機。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【盤後操作】今日繼續逢低加碼 PONY 與 COIN。ARK 策略的核心就是對市場恐慌的逆向操作。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 落地符合預期，市場可以稍微喘口氣！最重要的是蘋果 WWDC 就在這週（6/9~13），AI on iPhone 的消費端落地故事即將正式揭幕，這是科技牛市下一波的核心催化劑。市場對 CPI 的恐慌是短暫的，抓住 AAPL 在下跌中建倉的機會，才是正確的做法。",
        stocks: ["AAPL", "MSFT", "AVGO"],
        entryPoint: "【盤後操作】WWDC 本週登場！若今日 AAPL 因市場恐慌跌逾 3%，可開始分批建倉，目標持有至 AI 功能全面落地。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 週三盤後更新】市場越跌，我越興奮！CPI 4.2%、台股崩盤、美伊衝突——這種極度恐慌的市場，往往是迷因股最大行情的前夜。散戶的心態已經崩潰，但真正的 Diamond Hands 知道：恐慌底部正是財富重分配的時刻。繼續持有，等待逆轉。",
        stocks: ["GME", "CHWY", "KOSS"],
        entryPoint: "【盤後操作】市場極度恐慌往往是迷因股大爆發的前哨。密切觀察 GME 成交量異動，等待社群情緒的再度聚焦。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2%！台股崩了！我說得沒錯吧！現在全部現金！買 GLD（黃金）、XLE（能源 ETF）、BRK.B（波克夏）！科技股完蛋了！（記住：Cramer 是最準確的反向指標，他說賣的時候，往往是最佳買點！）",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【盤後操作】立刻全部出場！買入 GLD、XLE、BRK.B！（Cramer 反向指標：請反向操作，他賣的時候買！）"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06 週三盤後最新更新】CPI 4.2% 落地！結果：符合預期。小左最新解讀：這是一個「靴子落地但還沒摘鞋」的訊號——通膨確認高檔，但因為「沒有比預期更壞」，市場的極度悲觀情緒可能稍微喘一口氣。🔑 下一個最大的關卡是 6/17 FOMC！新任聯準會主席 Kevin Warsh 的首次決策，才是決定美股方向的真正裁判。若 Warsh 偏鷹（升息暗示）→ 科技股再殺；若偏中性（維持利率不變且不暗示升息）→ 市場將出現較大的軋空反彈。技術面：NVDA 目前股價約 $208，30 日均線位於 $210~215，股價已在均線下方震盪。關鍵心理支撐在 $200——若跌破 $200，下一個支撐在 $190。今晚美股開盤，密切觀察 NVDA 的量能表現，這是判斷市場情緒是否真正恐慌見底的最佳指標。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "【盤後更新操作】NVDA 目前 $208，關鍵支撐 $200。觀察 $200 能否守穩：守穩 → FOMC（6/17）後確認方向再進場；若跌破 $200 → 繼續等待，目標買點 $190 左右。FOMC 前維持低倉位！"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06 週三盤後更新】CPI 4.2% 落地，台股 -1,479 點，我的判斷再次應驗！NVDA 的 30 日均線已被跌破，費半技術面破位確認。接下來的關鍵事件：6/12 SpaceX IPO 吸金效應、6/16~17 FOMC 鷹派確認。在這些事件結束前，市場將持續承壓。繼續保持高現金，等待底部訊號。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【盤後操作】NVDA 30日均線已破位，繼續觀望。等 FOMC（6/17）後方向明確，才開始重建倉位。"
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
        viewpoint: "【2026.06 週三盤後更新】好消息：CPI 4.2% 符合預期，沒有更壞！壞消息：台股 -1,479 點，美股今晚必然開低。NVDA 今日跌破 30 日均線，這是我一直警告的風險點。接下來要觀察 6/17 FOMC 後 Powell 的措辭，才能決定下一步。繼續多現金、少操作！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【盤後操作】等待 FOMC（6/17）。若聯準會措辭偏中性，NVDA 30日均線重新站穩時才開始第一批布局，不超過總倉位 15%。"
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
        entryPoint: "【盤後操作】台積電除息後 740 元以下開始第一批；700 元以下加大第二批。AI 供應鏈基本面未變，逢低布局。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06 週三盤後更新】台股今日重挫 1,479 點，景氣循環的震盪期正如我所說！CPI 4.2% 符合預期，是「壞消息確認但沒有更壞」的訊號。持有 0050 的投資人今日帳面損失是短期的。明日台積電除息（-6元）後若能逐步填息，將是牛市繼續的信心指標。繼續定期定額，逢低加碼機會正在成熟。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【盤後操作】繼續定期定額 0050。觀察台積電明日除息後的填息速度，若一週內填息可提高投入金額。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 週三盤後更新】台股 -1,479 點，我在三週前就將持倉降至三成——今日的帳面損失對我影響降到最低！CPI 4.2% 確認，聯準會 6/17 FOMC 將採取鷹派立場。台積電今日收 2,255 元，明日除息後約 2,249 元參考價。約 21 倍本益比，接近合理估值下緣，但短線仍有下行壓力。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【盤後操作】等待三個條件同時出現才進場：①CPI 開始下滑；②FOMC 措辭偏中性；③台積電守穩除息後 740 元之上。"
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
        viewpoint: "【2026.06 週三盤後緊急更新】台股今日收 43,225 點，重挫 1,479 點！我的波浪理論正在應驗！台股自 46,552 歷史高點下來，已進入「第四波修正」。最新底部目標：已跌破月線，下一關鍵支撐在 42,000 點。若 42,000 守不住（搭配 FOMC 鷹派 + 美伊衝突持續），波浪理論計算的第四波底部區間為 40,000 點（強支撐）至 36,000~38,000 點（0.382 黃金比例回撤，從46,552計算）。存股族台積電策略：明日除息後看 740 元以下開始分批，700 元以下大力加碼！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【杜大師底部地圖】42,000點試單 → 40,000點大加碼 → 36,000~38,000點傾巢而出！台積電：除息後740元以下分批；700元以下全力買進。"
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
        viewpoint: "【2026.06 週三盤後更新】台股今日重挫 1,479 點，月線正式失守！但請冷靜——這是「老天爺送給大家的禮物」，不是末日！從趨勢面看，AI 的多頭格局沒有改變，五萬點、六萬點都是有可能的。這波下跌是「泡沫早期階段的修正」，不是 2008 年金融海嘯的崩盤。今日外資空單 61,871 口，這麼大量的空單存在，反而是未來「軋空大反攻」的燃料！郭哲榮今日盤後解盤核心觀點：月線（43,950）已失守，下一個技術支撐為季線（42,500）。但若你是閒錢投資，今日的下跌反而是布局機會。最重要的是：千萬不要融資！清空融資，以閒錢分批買入優質標的，才能在這種市況中笑到最後！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【盤後操作】等待「爆量長下影線」底部確認訊號出現才進場。台積電除息後填息走勢是後市最重要的方向指引。"
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
        viewpoint: "【2026.06 週三盤後更新】台股今日 -1,479 點，我的 0050、NVDA、台積電一股都沒動！這就是長線投資的真諦——你根本不需要預測每日的漲跌。歷史上每一次市場崩盤，都是長線投資者的機會。台積電明日除息（-6元），這是現金回饋給股東的好事，不需要恐慌。幾年後回頭看，今日的恐慌只是笑談。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【盤後操作】長線投資者繼續持有，定期定額繼續執行。台積電除息後若跌至 700 元以下，是超低價的長線買進機會，不要被恐慌蒙蔽眼睛。"
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
        entryPoint: "【杜金龍底部操作地圖】🗺️ 42,000點：小量試單；40,000點：確認支撐後大幅加碼；36,000~38,000點：清倉現金最大化買進。台積電：除息後740元以下開始分批；700元以下全力買進！"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06 週三盤後緊急更新】🚨 今日最關鍵數字：外資台指期空單 61,871 口！今日減少 2,388 口，這是一個值得高度關注的訊號！空單開始回補意味著什麼？上週最高峰時曾達到歷史天量 69,476 口，本週持續下滑（61,871→65,501→61,871），代表部分空方正在陸續獲利了結。但別誤會——還有將近 6.2 萬口的空單懸在那裡！這些空單若被迫回補（軋空），台股將出現暴力反彈；若空單繼續增加，下行壓力不消。台股今日 -1,479 點收 43,225，外資今日現貨賣超仍大。三個關鍵觀察：①空單是否繼續回補；②外資現貨是否開始買超；③台積電除息後填息速度。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【籌碼操作邏輯】外資空單從 69,476 口降至 61,871 口，減少 7,605 口！若空單回補速度加快，台股將出現「軋空行情」！觀察外資空單降至 50,000 口以下時，是最強烈的多頭買進訊號。現階段繼續觀望，等待籌碼面的明確轉折。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06 週三盤後緊急更新】台股今日重挫 1,479 點，外資空單仍維持 61,871 口高水位！從國際金融趨勢的角度看，這波下跌的核心驅動力是「去槓桿」——融資、質押、信貸、房貸四貸同堂的問題正在被市場強制解除。CPI 4.2% 確認通膨頑固，聯準會 6/17 FOMC 將維持鷹派。但從飆股操作的角度看：崩盤後往往是下一波主流輪動的起點！等待外資空單回補（軋空）的訊號出現，主流股將率先大漲。密切關注：①AI 供應鏈中的低位階個股；②記憶體族群（美光、南亞科）的 HBM 需求能否重燃；③台積電除息後的填息速度作為底部確認信號。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "【盤後操作】等待外資空單回補訊號！若台指期夜盤反彈且空單開始快速減少，明日可小量試單 AI 供應鏈低位階股。台積電除息後 740 元以下是長線布局的第一目標位。"
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
