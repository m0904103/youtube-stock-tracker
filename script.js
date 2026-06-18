const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.18 盤中快報】開盤的延續性買盤證明了昨天的 V 轉不是死貓反彈！場外還有兩兆美元的現金在尋找回報。一旦確認聯準會不會再升息，這筆錢就會湧入股市。年底 6500 點近在咫尺！",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "不要被洗掉，逢低加碼羅素2000與工業類股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.18 盤中快報】早盤的跳空開高是典型的『空頭回補 (Short Covering)』。這種由 FOMO 情緒驅動的行情缺乏基本面支撐。零售銷售數據的疲軟才是我們應該關注的焦點。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "趁著非理性的軋空行情，逢高分批減碼。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.18 盤中快報】今天開盤市場的情緒極度亢奮。但我們觀察到十年期美債殖利率並未隨之大幅回落。這意味著通膨的長尾效應仍在，目前的狂歡可能透支了未來的漲幅。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "保持警惕，佈局抗通膨的實體資產與基建。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.18 盤中快報】昨天的 V 轉與今天的跳空，是典型的流動性驅動現象。當所有人都擠在同一艘名為 AI 的船上時，任何微小的風吹草動都會引發翻船危機。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "不要參與狂熱，維持黃金與大宗商品的避險部位。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.18 盤中快報】輝達和 SPCX 早盤的強勢不容置疑。這不是軋空，這是基本面的價值重估。當你看到一個改變人類歷史的技術時，不要去計算它短期的本益比。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "讓利潤奔跑，緊抱 AI 與太空科技龍頭。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.18 盤中快報】開盤一小時，造市商的 Gamma 曝險已經徹底翻正！現在市場進入了『自動扶梯向上』的模式，波動率被極度壓縮。但在這種平靜之下，隱藏著隨時 Vanna 崩盤的風險。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "短線偏多操作，但隨時準備 VIX 買權做尾部避險。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.18 盤中快報】股市的熱情反映了產業界的共識。我們的 Vera 系統訂單已經排到了 2028 年。這不是泡沫，這是每一家企業為了不被淘汰而必須進行的基礎設施投資。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "持有引領運算革命的企業，與我們一起前進。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.18 盤中快報】SPCX 今天的表現讓那些做空的華爾街西裝佬們尿褲子了。我們不需要聯準會的廉價資金，我們有的是無盡的星際想像力與執行力。Doge!",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "鑽石手！SPCX 的極限是火星，不是華爾街。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.18 盤中快報】早盤創新科技股的全面爆發，證明了市場終於看懂了 AI 帶來的通縮效應！這是破壞性創新全面收復失土的開端。未來五年的複合增長率將超乎所有人想像。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "大舉買入被低估的基因編輯與次世代軟體公司。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.18 盤中快報】這是一場屬於 AI 的狂歡派對！早盤微軟與輝達的強勢表態，宣告了『AI 第四波浪潮』正式啟動。那些昨天還在看空的人，現在只能眼睜睜看著火車開走。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "AI 派對才剛開始，閉著眼睛買進微軟與輝達。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.18 盤中快報】哈哈哈！昨天被洗下車的韭菜們現在在想什麼？我們昨天頂住了壓力，今天就是收割的日子！但這還沒結束，讓他們繼續流血！Hold the line！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "繼續 HODL！看著空頭燃燒是世界上最美妙的事！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.18 盤中快報】我昨天說錯了！我承認！今天早盤的走勢證明 AI 是不可戰勝的！快點把那些公用事業股票丟掉，我們需要成長！我們需要輝達！現在買還來得及！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "認錯追高科技巨頭！AI 永遠是對的！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.18 盤中快報】美股開盤後直接跳空越過昨天高點，這是一個非常強勢的『跳空缺口』。只要今天收盤不回補這個缺口，波段多頭就正式確立。我已經在早盤將多單加碼至八成。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "確認波段多頭，積極加碼，以今日跳空缺口為防守。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.18 盤中快報】早盤的買盤非常急促，這是典型的軋空走勢。雖然大方向翻多，但這種由情緒驅動的急漲很容易在盤中出現獲利了結的急速回落。不要在現在去追高。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "等待盤中急跌回測支撐時再行介入，切忌追高。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.18 盤中快報】開盤科技股全面噴出，完全印證了我們昨天『主力洗盤結束』的判斷。今天早盤量能充沛，這是一個健康的攻擊量。抱緊你的 AI 核心持股，讓利潤自己奔跑。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "趨勢確立，抱緊核心持股，不輕易獲利了結。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.18 盤中快報】哈囉大家！今天美股開盤是不是超級歡樂呀！昨天去喝咖啡的人今天都笑呵呵了！不過大家還是要記得，賺錢了要適時停利一下，不要把紙上富貴又還給市場囉！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "享受多頭盛宴，但記得分批設定停利點保護獲利。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.18 盤中快報】早盤這根帶量的跳空長紅 K 線，徹底破壞了昨天的空頭型態，形成了標準的『島狀反轉』！空頭正式宣告投降。順勢而為，現在除了做多沒有別的選項。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "島狀反轉確立，無腦做多，防守線設在缺口下緣。"
  }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.18 盤後解析】各位，今天台股真的太刺激了！早盤直接跳空大漲，外資被美股昨晚的V轉嚇到，今天期貨空單瘋狂停損回補，上演了一場史詩級的軋空秀！這種盤就是強者恆強。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "大勢底定，沿著五日線偏多操作，強勢股拉回就是買。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.18 盤後解析】今天台股的大漲，完全是基本面與資金面的雙重共振。台積電的法說會預期已經開始發酵，外資今天認錯回補只是第一步，後續還會有長線被動資金進駐。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "台積電長線保護短線，逢回皆是買點。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.18 盤後解析】今天先進封裝與矽光子族群全面噴出，這證明了市場終於看懂了 CoWoS 產能吃緊的嚴重性。這不是題材炒作，這是實打實的營收爆發。不要被短線漲幅嚇到。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "緊抱半導體設備與封測族群，迎接下半年營收爆發。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.18 盤後解析】投資朋友，今天有沒有很開心？昨天被洗掉的人現在都在哭！這就是我一直強調的，景氣擴張期，任何利空都是天賜良機！買優質 ETF，死抱不放，就是這麼簡單！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "無腦存股，享受經濟擴張的紅利。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.18 盤後解析】今天的大漲確實出乎我意料。外資的認錯回補力道非常猛烈。但我們身為理性的投資人，在這種全市場 FOMO 的時候，反而要開始檢視手中持股的本益比是否過高。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "保持冷靜，不盲目追高，適度逢高獲利了結部分持股。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.18 盤後解析】今天台股的爆發，是聯準會『鷹派暫停』帶來的副產品。美元指數回落，熱錢重新湧入亞洲。只要新台幣匯率持續走強，台股的資金派對就不會這麼快結束。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "觀察台幣匯率走勢，偏多看待大型權值股。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.18 盤後解析】從技術面來看，今天這個跳空缺口非常巨大，直接突破了前高，確認了第五波的延伸。但請注意，今天的成交量有些失控，短線乖離過大，明天極可能出現劇烈震盪。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "波段看多，但短線不宜追高，提防爆量後的技術性回調。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.18 盤後解析】觀眾朋友晚安！今天真的是一場外資的大屠殺！6萬口空單被強制回補，軋空軋到天花板！但今天中小型股反而開高走低，資金出現了明顯的排擠效應！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "避開漲多的大型權值股，尋找底部剛起漲的中小型業績股。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.18 盤後解析】今天資金全面回流電子股，昨天撐盤的營建與高股息今天紛紛熄火。這就是標準的資金翹翹板。接下來的選股邏輯很簡單，跟著外資回補的腳步走，鎖定散熱與機殼。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "順著資金流向，佈局散熱、伺服器代工等 AI 硬體股。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.18 盤後解析】記憶體族群今天雖然有漲，但風頭全被台積電搶走了。不過大家不用擔心，HBM 缺貨的趨勢沒有變，當市場冷靜下來，資金終究會回到有實質獲利支撐的記憶體板塊。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "趁資金擠壓效應，逢低佈局被冷落的記憶體族群。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.18 盤後解析】大家晚安！今天大盤開超高，昨天空手的人今天一定很嘔。但我告訴你，今天這種盤去追高，很容易買在今天最高點！這叫『賺了指數賠了差價』。還是要有耐心等拉回。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "空手者切忌心急追高，耐心等待指數拉回十日線再佈局。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.18 盤後解析】同學們，看圖說故事！今天這個跳空缺口就是『突破缺口』！一根長紅帶量，把前面的壓力全部吃掉！這種強勢格局，你還在猶豫什麼？跟著趨勢走就對了！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "突破缺口成型，順勢大口咬下多頭利潤。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.18 盤後解析】今天期貨早盤就是送分題！開盤直接做多，跟著外資一起軋空！這種史詩級的趨勢盤，一年遇不到幾次。明天如果指數開平高，還會有一波嘎空尾盤的力道！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨維持偏多操作，沿著均價線做多。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.18 盤後解析】台股核彈級軋空秀！外資6萬口空單慘遭血洗！今天的大漲是真正的『利空出盡』還是『最後的煙火』？今晚我們將為您獨家揭秘外資盤後籌碼的暗盤交易！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "鎖定外資盤後買超名單，尋找下一檔軋空飆股。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.18 盤後解析】哈哈哈哈哈！有沒有！我昨天說什麼？彎腰撿鑽石！今天直接大賺特賺！那些昨天被聯準會嚇破膽的人，現在只能在下面幫我抬轎！這就是哲哲的實力啦！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "繼續滿倉抱牢，我們目標是萬二！不見不散！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.18 盤後解析】各位同學，今天這種全面大漲的盤，反而最考驗選股功力。因為『雞犬升天』之後，明天就會見真章。今天漲停板但法人卻在逢高出貨的標的，明天開盤直接市價空！",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "檢視盤後籌碼，避開『假突破真出貨』的個股。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.18 盤後解析】今天的台股表現完美詮釋了我們一直強調的『新興市場資金回流』。聯準會的底牌掀開後，全球資金再無顧忌。台股具備高殖利率與 AI 雙重優勢，將是外資的首選。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "長線大循環向上，抱緊大型電子權值股。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.18 盤後解析】今天大盤噴成這樣，群組裡一堆人在曬對帳單。這時候就是最危險的時候啦。大家冷靜點，好公司買著放就好，不要因為今天大漲就覺得自己是股神去借錢押身家。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "保持平常心，不要隨意開槓桿，好公司繼續抱著。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.18 盤後解析】今天指數大漲，但許多第一季財報優秀的中小型股並未跟上。這給了價值投資者極佳的進場點。當外資回補權值股告一段落，資金自然會流向這些被低估的業績股。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "無視指數漲跌，專注佈局低本益比且營收高成長的中小型股。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.18 盤後解析】今天看著大盤飆漲，存股族也不用羨慕。你的高股息 ETF 今天也是穩穩地向上走。投資比的是氣長，不是看誰短線衝得快。紀律扣款，你未來的自己會感謝你。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "拒絕 FOMO，堅持定期定額高股息 ETF。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.18 盤後解析】今天大家都在看台積電表演，但有心人今天趁著指數大漲，已經在悄悄出脫之前低檔佈局的熱門股了。接下來，有心人的資金將會轉向沒人關注的冷門轉機股。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "留意高檔爆大量不漲的個股，跟著有心人獲利了結。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.18 盤後解析】各位！我昨天怎麼說的？ALL IN 台積電！今天有沒有大賺？有沒有？這就是看懂產業趨勢的威力！你現在才要來問我能不能買？我只能說，你太慢了！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "抱緊台積電，不要隨便下車被洗掉！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.18 盤後解析】哎喲，今天去公園下棋，大家都在笑嘻嘻的說股票賺錢。阿伯我不懂什麼軋空啦，我只知道我的玉山金今天又漲了幾毛錢。這樣穩穩的，晚上睡得好，卡實在啦。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "不貪求暴利，穩穩抱著金融定存股。"
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
