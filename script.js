const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 週三盤前更新】美股週二慘遭死貓反彈打臉！台股千點大漲之際，那斯達克竟收跌 3.5%，標普500跌 2.1%。但我的信念一分未變！今日 CPI 若如預期升至 4.2%，只是短期的「利空出盡」壓力，完全不影響年底前標普上看 7,700 點的多頭格局。美股現在每一次的下跌都是千載難逢的長線布局機會，現在才是真正的低點！",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【週三操作】等待今晚 CPI 數據，若數據符合或低於預期，視為「利空出盡」行情，可開始分批佈局 QQQ 與小型成長股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 週三盤前更新】美股週二的 -3.5% 納斯達克大跌，恰好印證了我的謹慎立場。市場從「台股大漲的虛假希望」迅速回到「美股現實」。今日 CPI 預期升至 4.2% 是市場的核心壓力，若數據確認，聯準會在 Kevin Warsh 主導下幾乎確定維持利率不動，甚至偏鷹。建議等待 CPI 落地後再做判斷，當前持倉應保守，優先配置有穩健獲利能力的大型股。",
        stocks: ["MSFT (微軟)", "AAPL (蘋果)", "GOOGL (Alphabet)"],
        entryPoint: "【週三操作】CPI 公布前多看少做，若 CPI 超預期引發拋售，趁機逢低分批買入 MSFT、AAPL 等基本面紮實的大型科技股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 週三盤前更新】死貓反彈的警告應驗了！美股週二大跌 3.5% 是明確的信號：市場尚未真正見底，CPI 與 FOMC 這兩個最大的變數仍高懸於頂。今日等待 CPI 數據後才是真正考驗：若通膨高於預期，準備好迎接進一步的去槓桿賣壓。",
        stocks: ["MSFT (微軟)", "META (Meta)", "AMZN (亞馬遜)"],
        entryPoint: "【週三操作】維持高現金水位等待 CPI 落地，若通膨再度超預期引發去槓桿賣壓，可在 MSFT 回測前低時開始加碼。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06 週三盤前更新】這正是我長期以來警告的「典範轉移」時刻。美股週二大跌 3.5%，台股千點反彈如同泡沫中的假象，全球資金正在重新定價風險。今日 CPI 若再超預期，聯準會將更加鷹派，這對持有高本益比科技股的投資人而言是致命危機。黃金、TIPS 與多元資產配置仍是當前最正確的避風港選擇。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【週三操作】持續持有黃金、TIPS 與多元資產，若 CPI 超預期帶動美元走強，可再增加黃金 (GLD) 部位以對沖通膨風險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06 週三盤前更新】美股週二崩跌 3.5% 驗證了我一直以來的謹慎立場。CPI 今日公布是本週最關鍵的風險事件，若通膨高達 4.2%，市場對降息的最後幻想將徹底破滅。我的倉位已大幅降低槓桿，切勿在這個關口追空或追多，保持靈活是現在唯一的策略。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【週三操作】今日所有操作暫停，等待 CPI 數據後再重新評估。若通膨顯示持續韌性，進一步降低股票倉位至極低水平。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06 週三盤前更新】台股大漲千點、美股隔日大跌 3.5%，完美示範了「虛假反彈」的教科書案例！今日 CPI 是最關鍵的催化劑，若 5 月核心 CPI 達到 2.9% 以上，那股債雙殺的格局將進一步延續。根據數據分析，現在是等待明確方向的時刻，等 CPI 和 FOMC 後市場才有條件重新定錨。",
        stocks: ["TSMC (台積電)", "AMD (超微)", "AVGO (博通)"],
        entryPoint: "【週三操作】CPI 公布後，若市場出現 2% 以上的大幅下跌，開始分批佈局被錯殺的 TSMC 與 AVGO 等 AI 基礎建設核心股。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 週三盤前更新】不管美股跌多少，AI 的剛需不會因此消失。NVDA 的 Blackwell 超級電腦算力需求依然爆滿，台韓供應鏈的 AI 伺服器出貨量仍持續攀升。CPI 和 FOMC 是金融市場的短期雜訊，對長線佈局毫無影響。我們看的是 2027、2028 年的 AI 基礎建設爆發。",
        stocks: ["NVDA", "TSM", "ARM"],
        entryPoint: "【週三操作】長線持有 NVDA 不動搖，CPI 震盪期是長線資金累積 AI 基建股的窗口，趁恐慌時持續逢低加碼。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 週三盤前更新】美股下跌只是暫時的。xAI 的 Grok 3.5 以及特斯拉的 Optimus 機器人正在改寫整個世界的生產力。CPI？聯準會？都只是短線的干擾因子，真正的財富創造者會把握現在的時機買進正在改變人類未來的公司。SpaceX 上市在即，這才是本週最重要的事件！",
        stocks: ["TSLA", "GOOGL", "ASTS"],
        entryPoint: "【週三操作】無視 CPI 短線雜訊，持續持有並關注 TSLA 機器人時代的長線前景，等待 SpaceX IPO 帶動科技板塊情緒改善。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 週三盤前更新】ARK 的核心論點仍是：AI 所帶來的生產力革命長期將壓制通膨，而不是加速通膨。市場對短期 CPI 數據過度反應，正好是累積破壞性創新贏家的黃金窗口。美股週二的 3.5% 大跌讓我更有機會在合理估值買入 PONY、COIN 與 PLTR。這波震盪會讓真正的信仰者與投機客分道揚鑣。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【週三操作】CPI 引發的拋售是 ARK 調倉良機，趁恐慌加碼 PONY、COIN 等破壞性創新標的，等待市場重回創新主軸。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌令人不安，但我對科技巨頭的核心判斷依舊不變。蘋果、微軟的 AI 軟體訂閱收入正以肉眼可見的速度增長，這波股價修正不反映基本面。今日 CPI 是關鍵，若高於預期，短線衝擊在所難免，但跌深正是長線資金累積的時刻。",
        stocks: ["AAPL", "MSFT", "AVGO"],
        entryPoint: "【週三操作】CPI 公布前減少頻繁操作，若蘋果和微軟跌破近期支撐位，分批逢低買入，目標一年期報酬率 25%+。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 週三盤前更新】連 GME 都在震盪！美股週二大跌，但我的信念從未改變。市場的恐慌情緒創造了散戶逢低進場的機會。今日 CPI 如果嚇崩市場，散戶社群將出現最大的恐慌底部，正是迷因信仰者逆勢進場的時機。堅持信仰，等待機會。",
        stocks: ["GME", "CHWY", "KOSS"],
        entryPoint: "【週三操作】CPI 震盪造成的市場恐慌是散戶逢低承接 GME 等迷因股的信號，緊盯成交量異動，等待社群情緒再度集結。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 週三盤前更新】我之前叫大家不要擔心，結果美股週二大跌 3.5%——抱歉，這次我看錯了！現在 CPI 是最大威脅，我建議立刻轉移到防禦性配置，如寶僑（PG）、嬌生（JNJ）等高殖利率價值股。科技股在 CPI 結果出爐前，暫時別碰！（注：Cramer 仍是散戶最佳反向指標，請謹慎參考）",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【週三操作】立刻轉移至防禦性配置，買進 PG、JNJ、WM 等高殖利率價值股，等 CPI 確認後再評估是否回歸科技股。（請注意：Cramer 為傳統反向指標）"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06 週三最新更新】美股昨晚又暴跌！納斯達克 -0.97%、費半 -1.93%，死貓反彈確認失敗。我的核心判斷沒有改變：CPI 今日就是最大的魔王關卡。以台北時間 20:30 為分水嶺，若 5 月 CPI 再度超過 4.2%，科技股將迎來第三波殺盤。我個人目前維持低倉位，讓現金為自己保留充足的子彈。這種市況，不要聽任何人叫你抄底，相信數據才是王道。",
        stocks: ["NVDA (輝達)", "META (Meta)", "TSLA (特斯拉)"],
        entryPoint: "【週三 CPI 日操作】子彈留好，等待 20:30 CPI 數據！若 CPI 低於預期 → 可開始試單 NVDA；若 CPI 超預期 → 繼續觀望，不接飛刀。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5% 完整印證了我的判斷：台股千點大漲只是過度恐慌後的自然修復，並不代表底部已正式確立。今日 CPI 若達 4.2%，市場將重新定價整個利率預期曲線，對高估值 AI 股和長天期債券將構成雙重打擊。當前首要任務是保現金、等訊號。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【週三操作】CPI 數據公布前全面觀望，現金為王。若通膨再次超預期，進一步降低槓桿，等待明確底部訊號（爆量下影線＋外資翻多）再行動。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，市場給了我們清醒的一擊。台股千點反彈沒能帶動美股，顯示外資對美股基本面的疑慮仍在。今日美東時間 8:30（台北時間 20:30）公布的 CPI 數據，預期年增率升至 4.2%，將是本週最重要的市場驅動力。若 CPI 超預期，原本持有 MSFT、AMZN 等核心雲端股者，建議暫時降低槓桿，等待數據消化後再進場。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "【週三操作】等待今晚 CPI 數據落地，若市場過度恐慌引發非理性拋售，可分批低接 MSFT 與 AMZN 等雲端 AI 核心標的，目標持有超過 12 個月。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06 週三最新更新】連續兩週科技股暴跌，好多人問我還拿得住嗎？先說結論：**不要恐慌拋售，但也不要盲目接刀！** 美股這波下跌的核心是：SpaceX IPO 前華爾街大戶在科技股高位套現騰出資金，加上 CPI 通膨壓力讓市場定價混亂。今日 CPI 數據是本週最重要的事件，我的觀察重點是 30 日均線能否守穩。若 CPI 數據落地後市場出現超賣反彈，NVDA 與 MSFT 會是最先受惠的標的。但在此之前，我仍建議大家多現金、少操作。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "【週三 CPI 日操作】等待 CPI 落地後市場情緒穩定，觀察 NVDA 是否在 30 日均線獲得支撐。若確認守穩，可開始第一批試單，不超過總倉位的 20%。"
    }
];

const twInfluencersData = [
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，台股今日開盤必然承壓，昨日千點反彈的慶功宴恐怕要提前結束。今日美東 8:30（台北時間 20:30）公布的 CPI 數據，才是真正決定本週方向的關鍵。若通膨高於預期，外資將繼續減碼台股高估值科技股。守住現金、等待 CPI 結果，是目前最正確的策略。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "【週三操作】今日台股承壓，以 0050、0056 等市值型 ETF 定期定額代替單股操作，不追殺，等待 CPI 後的市場方向確立。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，台股週三開盤需面對外資的賣壓壓力。然而，台積電、聯發科等 AI 供應鏈的基本面並未因美股下跌而改變。供應鏈數據顯示 ODM 廠 AI 伺服器貨櫃出貨量月增 35%，長線邏輯仍強。建議分批承接台積電在 760 元以下的回測機會，不必因短線雜訊改變長期佈局。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【週三操作】台積電跌破 760 元以下可考慮第一批加碼，跌破 740 元再加第二批，以基本面為依據，忽略短線雜訊。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06 週三盤前更新】台股昨日千點大漲，今日迎來美股大跌 3.5% 的現實衝擊。這正是「景氣循環中的短期震盪區間」。CPI 數據公布前，台股將在 43,000 到 45,000 點之間震盪整理。持有市值型 ETF 的投資人無需恐慌，這是持續定期定額的好機會，不必追高也不必恐慌殺低。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【週三操作】今日量縮震盪期，以定期定額 0050 繼續累積。等待 CPI 與 FOMC 後，若台股守穩 43,500 點半年線，可擴大部位。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5% 是我早就預料到的！市場從「估值過熱」走向「通膨重燃」，完全符合我先前將持倉降至三成的判斷。今日 CPI 若升至 4.2% 以上，台股開盤恐面臨大量外資賣壓。嚴守估值紀律，台積電合理價在 700 元附近，現在不是接刀的時機。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【週三操作】今日暫停進場，等待 CPI 結果。若股價進一步下跌至合理估值（台積電 700 元以下），才開始分批承接。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 週三盤前更新】從總體經濟角度看，美股週二大跌 3.5% 是全球資金重新評估「升息預期」的縮影。若今日 CPI 年增率達 4.2%，美元將進一步走強，對台灣出口與外資匯入形成雙重壓力。建議台股投資人今日謹慎觀察外資動向，短線多看少做，等待 FOMC 結果後再行動。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "【週三操作】今日多看少做，等待 CPI 數據確認，以美元指數走勢作為台股外資動向的前瞻指標，美元走強則繼續保留現金。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06 週三盤前更新】用波浪理論看，這次台股的千點反彈應只是 C 波反彈，尚未確立底部！美股週二大跌 3.5% 是市場在告訴我們：第 5 波下跌可能還在路上。今日 CPI 若超預期，台股極可能再破前低甚至下探 42,000 點。分批布局固然可行，但建議先保住子彈，等待更明確的月線支撐確立。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【週三操作】波浪理論顯示底部尚未確立，今日嚴格控制部位，若台股再破 43,000 點，停損並等待反彈再評估進場點。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，再次提醒我們：台股的千點反彈建立在相當脆弱的基礎上。今日台股開盤將面臨外資賣壓，CPI 數據將主導今晚美股走勢。現在強調「跌時重質」，建議審視持股，汰弱留強，以台積電、台達電等基本面紮實的龍頭股守住陣地。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "【週三操作】今日汰弱留強，將高本益比、缺乏實質獲利的 AI 概念股換碼至台積電、台達電等基本面強健的龍頭股。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 週三盤前更新】昨日台股千點大漲令人振奮，但今日美股大跌 3.5% 的壓力已在期指上顯現。資金輪動的邏輯仍在：高位 AI 硬體股繼續回落，資金轉進低位階的重電（士電、華城）與散熱（雙鴻、奇鋐）等族群。今日觀察台股五日線是否守穩，搭配五日均量線作為進出依據，靈活應對震盪行情。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "【週三操作】關注重電（士電、華城）與散熱（雙鴻、奇鋐）低位階轉強訊號，若五日均線扣抵向上，可考慮小量布局。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，半導體費城指數狂洩，台股 IC 設計與記憶體族群今日必然承壓。但記憶體基本面其實並未惡化，AI 對 HBM 的需求仍然強勁。今日是逢低觀察南亞科、威剛、華邦電等記憶體股的買點機會，若收盤守穩前低，可視為分批進場訊號。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "【週三操作】南亞科、威剛、華邦電若再度回測前低並出現帶量長紅，可視為記憶體族群的底部確認訊號，分批進場。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌、期指下跌，今日台股開盤承壓。籌碼面觀察：外資期貨空單在昨日反彈中並未大幅回補，顯示外資並非真的翻多，只是短線軋空後的自然回收。今日注意力應放在大盤量能與外資現貨動向，若量縮且外資繼續賣超，則維持謹慎操作，等待 CPI 結果。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "【週三操作】今日以觀察外資現貨買賣超為主，外資若轉買超，可跟進台積電與散熱龍頭，否則繼續保持觀望。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 週三盤前更新】技術線型顯示，台股昨日雖大漲千點，但 K 線尚未確立「底部型態」，今日再遭美股下跌衝擊，恐形成「兩日上漲後的假突破」。若今日台股無法守住 44,000 點，則確認為反彈後的二次探底，轉強訊號尚未出現。空手者繼續等待，有倉位者可考慮在反彈時部分獲利了結。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "【週三操作】技術面底部尚未確立，若台股今日收盤跌破 44,000 點，視為回測確認，空手者繼續等待，有倉位者部分獲利了結。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 週三盤前更新】美股大跌讓期貨市場夜盤承壓，今日台指期開盤將有跳空下跌的風險。操作上建議空方可趁高點加碼，多方需等待 CPI 數據明朗後才能確認多頭能否再次反攻。今日重點觀察：外資期貨淨部位變化、廣達與台積電的開盤走勢，作為全日方向的風向球。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "【週三操作】期貨多空雙向靈活操作，CPI 前以小倉位、嚴格停損為原則。CPI 公布後依方向快速順勢追擊，不逆勢操作。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，這是本週市場的最大震撼彈！台股昨日的千點大漲恐怕只是曇花一現。今日台股開盤方向取決於今晚台灣時間 20:30 的 CPI 數據，在此之前建議所有投資人「多看少做、保留子彈」。半年線（約 43,500 點）是最後防線，若失守則下一關卡為 42,000 點整數關。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【週三操作】今日多看少做，等待台股半年線（約 43,500 點）能否守穩。CPI 結果公布後，再決定是否加碼或繼續觀望。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌驗證了「假反彈不假」！台股今日受美股大跌拖累，昨日追高的散戶恐再次被套牢。趨勢動能指標顯示大盤多空力道仍在接近均衡，未確認反轉。今日操作守則：寧可錯過，不可做錯。等待今晚 CPI 數據後，市場方向確立，再決定佈局方向。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【週三操作】今日以現金為主，等待 CPI 後市場方向確立。若出現明顯放量收長紅的轉強訊號，再考慮進場，寧可錯過不可做錯。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06 週三盤前更新】美股週二下跌 3.5%，今日 CPI 數據發布前，台股進入「高不確定性震盪期」。從循環週期的角度看，目前處於「利率週期尾聲」的關鍵轉折點，CPI 數據將是決定市場走勢的分水嶺。若通膨持續偏高，降息時程進一步後延，資金將持續從成長股輪出至價值股與高殖利率標的。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "【週三操作】CPI 數據公布前，以高殖利率股（如 0056、00878）與美債 ETF（00679B）作為過渡配置，等待週期轉折點明確後再行動。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06 週三盤前更新】這是本週最關鍵的一天！今日美東 8:30（台北時間 20:30），美國公布 5 月 CPI 數據，市場預期年增率升至 4.2%。若符合或超越預期，聯準會 6/16~17 的 FOMC 會議幾乎確定維持鷹派立場，甚至有升息討論。美元指數走強、美債殖利率飆升，對台灣出口股與高本益比科技股將形成持續壓力。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "【週三操作】今日最重要的動作是「等待」！台北時間 20:30 CPI 數據公布是全週最大事件，在此之前所有操作都是在黑暗中射擊。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06 週三盤前更新】台股千點大漲、隔日美股大跌 3.5%！市場真的沒有輕鬆賺的機會。今日 CPI 是關鍵，身為長期投資者，這種短線波動本來就是股市的日常。我的 0050、NVDA、台積電一股都沒賣。真正的長線投資人在市場恐慌時加碼，而不是追漲殺跌。繼續持有優質資產，等待市場恢復理性。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【週三操作】長線投資者不需要對今日的震盪有任何特殊反應，繼續持有 0050、NVDA、台積電等核心倉位，若手上有閒錢可定期定額繼續買入。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06 週三盤前更新】美股週二大跌 3.5%，今日台股承壓開盤，建議從基本面角度重新審視持股。廣達、鴻海等 AI 伺服器代工廠的訂單能見度仍強，短期股價波動不代表基本面惡化。今日 CPI 公布前，建議維持低交易頻率，重新計算手中個股的安全邊際，在股價接近合理價時才考慮進場。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "【週三操作】以基本面角度評估廣達（2382）與聯發科（2454）在現有股價下的 P/E 合理性，若低於歷史均值，可開始試探性布局。"
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
