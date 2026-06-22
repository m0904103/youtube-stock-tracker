const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.22 盤前備戰】週五的期權結算賣壓已經消化完畢。從盤前走勢看，資金正沿著我們預期的軌跡，從擁擠的大型科技股流向羅素2000。這是一個極為健康的板塊輪動，將支撐標普繼續挑戰 5600 點。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "持續加碼中小型股與週期性板塊，避開估值過高的科技巨頭。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.22 盤前備戰】不要把盤前的反彈誤認為是逢低買盤！失去 Gamma 支撐後，市場的脆弱性將在今天開盤後展露無遺。我們觀察到流動性正在快速枯竭，科技股將迎來至少 10% 的估值修正。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "趁盤前小幅反彈，堅決出清所有高貝他(High Beta)科技股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.22 盤前備戰】市場正在重新定價『長期高息』的現實。當期權狂熱褪去，實體經濟的疲軟數據將成為主導。我們已經在週末完成了防禦性倉位的佈局，準備迎接一個波動率大幅上升的夏季。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "增持現金與短期國債，耐心等待市場真正見底。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.22 盤前備戰】去槓桿化的過程總是痛苦的。週五的尾盤跳水只是序幕，許多採用風險平價策略的基金將在今天被迫降低股票曝險。這將引發連鎖的被動賣盤。黃金依然是目前唯一的避風港。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "嚴格執行風控，降低股票部位，持有黃金與抗通膨債券。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.22 盤前備戰】華爾街的分析師總是喜歡把技術性回調說成世界末日。我在盤前看到了輝達與微軟出現了極具吸引力的買點。當別人因為結算效應而恐慌時，正是我們長線資金貪婪的時刻。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "無視短期震盪，大口吞噬被錯殺的頂級 AI 資產。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.22 盤前備戰】警報！市場已經進入真正的『無造市商護盤真空期』！VIX 盤前正在蠢蠢欲動。今天開盤後的第一個小時將決定本週的基調：是確認跌破 5500 點支撐，還是上演死貓反彈？",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "開盤後先保持觀望，若跌破盤前低點則順勢建立空單。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.22 盤前備戰】新的一週開始了！我們正在與全球前五大的主權基金洽談次世代 AI 基礎設施的建設。股價的短期波動無法衡量運算能力的指數級增長。我們的願景不是幾天，而是未來十年。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "做時間的朋友，與引領運算革命的企業一起成長。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.22 盤前備戰】聽說週末有一群分析師在唱衰科技股？他們大概不知道我們剛完成了星艦的新一輪靜態點火測試。SPCX 的目標是星辰大海，不是華爾街的季度財報。準備好迎接震撼吧！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "鑽石手！緊抱 SPCX，我們即將向空頭展示真正的推力。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.22 盤前備戰】我們在盤前看到了令人振奮的跡象：資金正在從傳統的 AI 硬體，流向我們長期佈局的『AI 軟體與基因編輯』板塊。這是破壞性創新全面擴散的明確信號！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "資金開始輪動，加碼被低估的次世代創新軟體與生技股。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.22 盤前備戰】不要被週五的幽靈嚇倒！科技股的超級財報季即將到來。今天盤前的疲軟是絕佳的『黃金進場點』。我們預期微軟與蘋果將在本週發布震撼市場的 AI 應用整合消息。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "將今天的任何下跌視為買進機會，重倉科技巨頭。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.22 盤前備戰】週末休息夠了嗎？戰士們！空頭以為週五的偷襲就能打敗我們？他們錯了！我們已經重新集結！今天開盤就是我們反擊的時刻！讓他們看看什麼叫作散戶的力量！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "HODL 到底！開盤直接用市價買單把空頭逼到牆角！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.22 盤前備戰】快逃！快逃！我週末看了一堆報告，情況比我們想的還糟！科技股的泡沫正在破裂！趕快把錢拿去買強生、買沃爾瑪！我們需要那些就算世界末日大家也會買的東西！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "清倉所有高估值科技股，全面轉入防禦性傳產與消費股。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.22 盤前備戰】盤前納斯達克期指在週五低點附近徘徊。這是一個非常關鍵的頸線位置。如果今天開盤後無法站回五日線，我將會把剩下的多單全數獲利了結，並反手建立小量空單。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "嚴格防守週五低點，跌破則多單全出並反手做空。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.22 盤前備戰】結算後的『黑色星期一』魔咒正在盤前發酵。許多在週五來不及跑的籌碼，今天開盤勢必會出現恐慌性的多殺多。千萬不要在今天早盤去接刀子，讓子彈飛一會兒。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "開盤嚴禁接刀，耐心等待恐慌殺盤結束後的底部爆量訊號。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.22 盤前備戰】我們的主力追蹤系統顯示，盤前有大資金在暗中承接半導體設備股。這說明週五的下跌確實是洗盤。今天只要早盤能挺住賣壓，尾盤就有機會拉出長紅吞噬。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "密切關注早盤抗跌的半導體個股，這些將是下一波的領頭羊。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.22 盤前備戰】大家早安呀！週末過得好嗎？雖然盤前看起來紅通通的有點嚇人，但這就是股市的日常節奏啦！大家不要被氣氛影響，按照自己的紀律，該停損停損，該加碼加碼喔！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "保持平常心，嚴格執行預先設定好的交易計畫。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.22 盤前備戰】從量價結構來看，週五的下殺帶有巨大的成交量，這是一個短線頭部的警訊。今天開盤必須立刻觀察『跳空缺口』是否被封閉。若開低走低，則波段空頭成型。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "保守應對，跌破關鍵支撐則毫不猶豫停損出場。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.22 盤前備戰】盤前的弱勢反映了市場對結算後缺乏流動性的擔憂。但我們要注意，很多優質科技股已經回到了極具性價比的支撐位。今天如果出現急跌，反而是我們進場『撿屍』的好機會。",
        entryPoint: "等待盤中恐慌性急跌，逢低分批買進優質科技龍頭。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.22 盤前備戰】早安！新的一週！雖然盤前氣氛偏空，但特斯拉在盤前展現了極強的韌性。資金明顯在尋找新的避風港。今天我們要把焦點放在那些『尚未過度炒作』且具備實質利多的個股上。",
        entryPoint: "避開擁擠的熱門股，尋找底部剛起漲且具備題材的潛力股。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.22 盤前備戰】正如我們週末在 VIP 群裡預告的，今天盤前市場出現了明顯的『板塊輪動』特徵。資金正從科技巨頭撤出，轉向估值更合理的傳統行業。今天順勢做空科技，做多傳產是勝率最高的策略。",
        entryPoint: "進行配對交易：做空高估值科技股，同時做多低估值價值股。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.22 盤後解析】各位，今天早盤那個殺聲震天，是不是把大家嚇壞了？這就是標準的『恐慌性多殺多』！但你們看尾盤，國家隊和投信硬是把指數拉出了一根長下影線！這表示下方支撐極強，洗盤結束了！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "長下影線確認底部，明天準備迎接報復性反彈，逢低勇敢買。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.22 盤後解析】今天台股的早盤重挫，完全是受到美股四巫日的遞延效應影響。但我們看到台積電在低檔有非常強勁的長線買盤承接。這種能扛住全球系統性賣壓的股票，才是真正的核心資產。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "無懼大盤震盪，趁恐慌殺盤時持續累積台積電持股。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.22 盤後解析】今天雖然大盤跌，但半導體設備與檢測廠卻逆勢拉出半根停板！這印證了我週末的說法，資金正在尋找真正有實質獲利保護的避風港。先進封裝的產能缺口，是任何金融結算都改變不了的。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "資金集中化，重倉持有具備實質業績支撐的半導體設備股。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.22 盤後解析】投資朋友！今天早盤跌兩百多點，有沒有人在那邊哭天喊地？我說過幾百次了，跌下來就是給你買更便宜 ETF 的機會啊！你今天如果不敢買，明天漲上去你又要後悔了！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "跌越深買越多，享受微笑曲線帶來的豐厚報酬。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.22 盤後解析】今天早盤的跳空大跌證實了我週末的警告。雖然尾盤有黑手護盤拉抬，但這無法掩飾外資大舉匯出、新台幣重貶的殘酷事實。反彈皆是逃命波，千萬不要被尾盤的假象騙進去接刀。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "趁尾盤反彈或明日早盤，盡速出清手中弱勢電子股，保留現金。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.22 盤後解析】今天外資雖然賣超，但主要是被動型基金在調整權重。我們反而看到內資法人在今天趁亂大舉加碼了金融與航運等非電族群。這代表資金並非撤離台灣，而是進行了『健康的板塊輪動』。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "順應資金流向，將持股重心從電子轉移至金融與傳產龍頭。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.22 盤後解析】今天台股完美回測了十日線支撐，並拉出了標準的『鎚子線』。從技術面來看，短線的修正已經一步到位。只要明天能夠開高越過今天的長黑K一半，第五波的延伸行情就將再次啟動。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "十日線支撐確認，明日若開高則全力做多，跌破今日低點則停損。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.22 盤後解析】觀眾朋友晚安！今天早盤真的是一場大屠殺！但最可怕的不是跌勢，而是外資今天在期貨市場『加碼了兩萬口空單』！這表示他們認為今天的下殺只是前菜！大家千萬不要掉以輕心！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "外資空單大增，行情極度凶險，嚴格控制持股水位在三成以下。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.22 盤後解析】今天盤面上可以說是一面倒！電子股成了提款機，但大家有沒有注意到，重電族群今天有幾檔甚至亮燈漲停！這就是我週末強調的『政策避風港』！接下來的選股邏輯，就是跟著政策走！",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "果斷放棄弱勢電子股，將資金全面轉進重電與綠能族群。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.22 盤後解析】今天大盤血流成河，但我週末點名的記憶體族群卻異常抗跌！群聯甚至逆勢收紅！這就是基本面護體的威力。當大盤恐慌時，聰明錢自然會往有第三季漲價題材的記憶體板塊集中。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "記憶體族群展現抗跌韌性，持續逢低佈局，等待第三季發酵。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.22 盤後解析】大家晚安！今天早盤有聽話去『撿便宜』的觀眾，現在是不是笑得很開心？這就是股市的節奏！別人恐慌殺出，就是我們優雅進場的時刻。不過今天尾盤拉太快，明天不建議再去追高囉。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "早盤撿便宜者抱牢獲利，空手者明日切忌追高，等待下一次拉回。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.22 盤後解析】同學們！看圖表！今天雖然留了長下影線，但實體是一根黑K，而且跌破了五日線！這代表短線多頭已經轉弱，進入了『高檔震盪』格局。這時候操作難度極高，沒有把握就先退出觀望！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "短線技術面轉弱，嚴格執行停利停損，多看少做。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.22 盤後解析】今天期貨早盤的急殺，我們帶會員直接空在最高點！賺了三百點價差！尾盤看到撐住了，我們又反手做多！在這種高波動的盤勢裡，只有靈活的期貨當沖才能真正賺到錢！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "放棄死抱股票的思維，利用期貨雙向操作賺取高波動財。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.22 盤後解析】黑色星期一驚魂記！台股早盤大地震，尾盤神秘資金強力拉抬！這究竟是國家隊護盤成功，還是外資的『死貓反彈』誘多陷阱？今晚我們獨家解析外資期貨空單的真實意圖！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "行情撲朔迷離，密切鎖定今晚外資籌碼動向與美股開盤表現。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.22 盤後解析】哈哈哈哈哈！今天早盤跌下來，一堆人又在酸我了！結果呢？尾盤拉起來了吧！我帶會員在早盤恐慌的時候『彎腰撿了一地的鑽石』！那些停損在最低點的，現在只能看著我們賺錢！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "大獲全勝！早盤撿鑽石成功，繼續滿倉抱牢，目標兩萬四！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.22 盤後解析】各位同學，今天這種恐慌盤最能看出『主力籌碼』的虛實。今天早盤大跌但卻『量縮抗跌』的中小型網通股，就是主力洗盤惜售的鐵證。這些個股將是明天大盤反彈的領頭羊。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "利用今日大跌檢視持股，汰弱留強，集中資金於量縮抗跌的好股。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.22 盤後解析】今天台股的波動只是全球資金在全球供應鏈重組過程中的微小漣漪。當我們著眼於未來十年的 AI 產業趨勢，今天早盤的下殺根本微不足道。外資的短期進出不改變台灣在 AI 時代的樞紐地位。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "堅定長線信念，不受短期震盪干擾，持續看好台灣 AI 供應鏈。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.22 盤後解析】今天群組裡一堆人在哀嚎，說什麼早盤畢業了。我就問，你買好公司為什麼要因為一天的跌幅去停損？如果你連這點波動都受不了，那真的不適合投資股票。把軟體刪掉，好好去上班啦。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "停止無謂的頻繁交易，好公司買著就去睡覺，不要自己嚇自己。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.22 盤後解析】今天大盤的泥沙俱下，讓許多『五月營收創新高』且『本益比偏低』的績優股出現了非常甜美的買點。這正是價值投資者最喜歡的時刻。我們已經在盤後更新了最新的低估值買進名單。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "無視大盤恐慌，專注於基本面，勇敢買進被錯殺的營收成長股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.22 盤後解析】今天大盤像坐雲霄飛車，但我們高股息 ETF 的投資人心情卻很平靜。因為我們知道，大盤跌下來，ETF 的殖利率反而變高了！這就是我們一直推廣的『存股心法』，跌越多，存越快！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "大跌就是存股好時機，逢低加碼高股息 ETF，擴大張數。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.22 盤後解析】今天早盤的下殺，大家看清楚了嗎？這就是有心人利用美股的利空，刻意製造恐慌來『吃散戶的豆腐』。尾盤特定券商的大量買單已經暴露了他們的行蹤。好戲明天才要上場。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "跟隨尾盤特定券商的神秘買盤，鎖定有心人即將發動的標的。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.22 盤後解析】各位！我週末是不是叫你們今天開低閉著眼睛買台積電！？有沒有買！早盤買的，尾盤直接現賺三十塊！這就是趨勢的力量！你現在還在猶豫？明天台積電就要噴出去了！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "聽我的準沒錯！台積電繼續買！不要被外資的假動作騙了！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.22 盤後解析】哎喲，今天去菜市場買菜，聽到大家都在說股票大跌很可怕。阿伯我看了一下我的玉山金，也才跌了兩毛錢嘛。大家不要這麼緊張，日子還是要過，晚餐多吃一碗飯壓壓驚就好啦。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "保持心情平靜，不要被市場恐慌傳染，穩穩領股息就好。"
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
