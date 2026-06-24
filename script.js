const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.24 盤後深度】我必須承認，今天的無差別拋售超出了我的預期。納斯達克單日暴跌超過 3%，這已經不再是簡單的板塊輪動，而是全面的去槓桿化。在 VIX 回落之前，我們必須暫時退居防守，保護資金。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "暫時退場觀望，科技股跌勢超乎預期，切勿輕易接刀。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.24 盤後深度】這就是我一直警告你們的『清算日』！科技股的泡沫終於破裂了！當失去 Gamma 護盤，那些靠著 FOMO 推高的 AI 概念股就像紙牌屋一樣倒塌。這還只是開始，標普還要再跌 10% 才能看見真實估值。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "科技泡沫破裂，繼續加碼空單，不要被任何盤中反彈欺騙。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.24 盤後深度】市場的恐慌情緒正在蔓延。高利率環境下的估值重估是殘酷的。我們很慶幸早已將資金轉移到了具備強大現金流的防禦性板塊。現在是保護資本的時候，而不是盲目追求高回報。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "現金為王，遠離所有高估值科技股，躲入防禦性避風港。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.24 盤後深度】我們正在見證一次經典的流動性危機。各大基金的量化模型在波動率飆升下同時觸發了賣出指令，導致了這種多殺多的踩踏。在這種極端市況下，持有現金和黃金是唯一的選擇。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "啟動最高級別風險控管，全面降低股票曝險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.24 盤後深度】今天的下殺確實非常猛烈。連微軟和輝達這種頂級資產都遭到了無差別的拋售。這說明市場已經進入了非理性的恐慌階段。雖然長線看好，但短線上我們也必須尊重市場趨勢，進行適度的減碼。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "尊重市場恐慌趨勢，適度減碼多頭部位，保留現金。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.24 盤後深度】血流成河！納指暴跌 3.3%！造市商現在處於極度的負 Gamma 狀態，這意味著他們必須瘋狂做空來對沖！VIX 正在飆升向 20 大關！市場的支撐已經全面潰堤！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "市場全面崩盤，順勢追空，在 VIX 未見頂前絕不多單進場。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.24 盤後深度】股市的劇烈波動確實令人不安，但我依然在實驗室裡看著我們下一代晶片的測試數據。AI 的演進不會因為華爾街的拋售而停止。短期的陣痛是成長的必經之路，我們將繼續專注於創新。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "無視短期股價崩跌，專注於 AI 技術的長遠發展。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.24 盤後深度】華爾街的分析師們今天一定開心壞了吧？他們終於等到了他們夢寐以求的崩盤。不過沒關係，SPCX 的星艦不會因為那張綠紙（美鈔）的貶值而停止發射。我們火星見！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "在恐慌中保持信念，真正的創新企業會挺過風暴。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.24 盤後深度】今天的暴跌是破壞性創新投資者必須經歷的洗禮。雖然我們的淨值受到了打擊，但這正是我們以極低價格買入那些將改變世界公司的絕佳機會。恐懼是投資最大的敵人，我們不會退縮。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "堅定信仰，在血泊中持續買進破壞性創新企業。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.24 盤後深度】這是 AI 革命以來最黑暗的一天。我們承認短期的拋售壓力遠超預期。但在超級財報季來臨前，這種過度的悲觀情緒反而為長線投資者創造了百年難得一見的買點。黑暗過後就是黎明。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "承受短期巨大痛苦，將今天的暴跌視為長線佈局的黃金坑。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.24 盤後深度】戰士們，我們今天遭遇了慘烈的伏擊... 空頭的火力太強了，納斯達克被他們打得潰不成軍。但我沒有賣出哪怕一股！只要我們團結一致，這點跌幅算什麼！HODL！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "咬緊牙關！死不退讓！與空頭抗戰到底！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.24 盤後深度】快逃啊！！！我早就告訴過你們了！！！科技股完蛋了！！！大蕭條要來了！！！快把你們的錢全部換成罐頭和衛生紙！！！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "末日降臨！清空所有股票！買黃金、買罐頭！"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.24 盤後深度】空頭大獲全勝！我們昨天的空單今天迎來了豐碩的果實。納指暴跌 3.3%，這是一個明確的波段空頭訊號。任何的反彈都是逃命波，接下來的目標將是測試年線支撐。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "空單抱牢！波段空頭確立，反彈皆是做空良機。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.24 盤後深度】『破位下殺』的第一天，踩踏效應極度慘烈。昨天那些幻想破底翻的人今天全被抬出去了。這就是我一直強調的，在籌碼沒有沉澱之前，絕對不要去接掉下來的刀子。現在只剩滿地鮮血。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "嚴格空手觀望！滿地鮮血，絕不接刀！"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.24 盤後深度】我們的主力追蹤系統今天發出了嚴重的紅色警報！機構資金正在不計代價地拋售科技股，這是系統性的撤退。在這種資金流出結束之前，任何技術面的支撐都毫無意義。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "主力大舉撤退，清倉避險，不要相信任何技術面支撐。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.24 盤後深度】大家...今天真的好慘😭。看到帳戶一片綠（美股跌是紅，但華人習慣用綠），心情真的很沉重。大家千萬不要在這個時候借錢去攤平喔！留得青山在，不怕沒柴燒，我們一起度過難關。",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "切勿借錢攤平！保留剩餘現金，等待風暴過去。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.24 盤後深度】這是一根帶有毀滅性的長黑K，直接摜破了所有中短期均線。型態已經徹底破壞，確認進入熊市週期。這種系統性風險無法預測底在哪裡，唯一正確的操作就是立刻停損出場。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "確認進入熊市，無條件停損出場，保留現金。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.24 盤後深度】我們昨天的『撿屍』策略今天宣告失敗，我們已經果斷停損。當市場出現超過 3% 的無差別暴跌時，代表恐慌情緒已經失控。這時候的便宜不是真便宜，而是無底洞。",
        entryPoint: "停損出場，承認判斷錯誤，在恐慌失控時絕不盲目抄底。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.24 盤後深度】天啊！今天的市場真的是血流成河！覆巢之下無完卵，連我們之前看好的生技股今天也被大盤拖累重挫。在這種時候，最好的操作就是『什麼都不做』，把軟體刪掉吧。",
        entryPoint: "全面停止交易，空倉觀望，不要在極端行情中消耗本金。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.24 盤後深度】我們 VIP 群的做空策略今天創造了驚人的獲利！當趨勢成型時，順勢而為就是這麼簡單。科技股的估值泡沫正在被無情地戳破，未來還有很長的一段下跌空間。",
        entryPoint: "跟隨趨勢做空科技股，享受泡沫破裂帶來的暴利。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.24 早盤突擊】各位...昨晚美股大崩盤，納指跌了超過 3%！今天台股一開盤絕對是大屠殺！昨天那些以為見底去抄底的人，今天開盤全部都會面臨斷頭危機！多殺多的慘劇即將上演，空手的人千萬不要進場！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "大屠殺即將上演！空手者嚴禁進場，持股者開盤不計代價逃命！"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.24 早盤突擊】我們必須正視這個殘酷的現實。美股科技股的暴跌，意味著全球資金正在進行深度的去槓桿。台積電 ADR 昨晚也遭到重創。在這種系統性風險下，即便是最強的基本面也無法抵擋短期的拋售狂潮。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "降低持股水位，即便是核心持股也應適度減碼以避開系統性風險。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.24 早盤突擊】這是一場無差別的科技股災！昨晚費半指數暴跌，今天台灣的半導體設備股絕對會是重災區中的重災區。這個時候不要再去談什麼 CoWoS 產能缺口了，覆巢之下無完卵，先保命要緊！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "基本面暫時失效，半導體股將面臨估值重估，盡速停損離場。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.24 早盤突擊】投資朋友！今天這不是微笑曲線了，這是跳崖啊！美股跌成這樣，今天台股開盤一定很難看。雖然我一直說跌下來要買，但這種恐慌性崩盤，我們還是先暫停一次扣款，看看情況再說！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "暫停 ETF 定期定額扣款！市場極度恐慌，保留現金等待落底。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.24 早盤突擊】我早就說過了！！！『逃命波』！！你們昨天就是不信！昨天外資的兩萬口空單今天就是來收割你們的！今天台股絕對會跌破所有人的支撐線！電子股將迎來長達半年的冰河期！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "大崩盤啟動！全面清空電子股，反手建立期貨空單。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.24 早盤突擊】美股科技股的泡沫終於破了！今天台股的資金將會恐慌性地從電子股逃竄。雖然資金可能會轉進金融與傳產避險，但在整體大盤暴跌的拖累下，這些避風港也難以獨善其身。現金才是王道。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "電子股崩盤，避風港失效，全面退場換取現金。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.24 早盤突擊】C 波的主升段（主跌段）正式啟動！昨晚美股的長黑K徹底破壞了全球股市的多頭格局。今天台股開盤將直接摜破季線，並向下尋求半年線的支撐。型態已經極度醜陋，絕對不能抱有任何僥倖心理。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "C 波大屠殺展開！無條件停損所有多單，反彈皆是空點。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.24 早盤突擊】觀眾朋友早安...今天真的是不想面對的一天。昨晚納斯達克暴跌 3.3%！外資的兩萬口空單今天將會展現毀滅性的威力！今天盤面只有一個字：『殺』！大家請繫好安全帶，準備迎接核彈級的衝擊！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "核彈級衝擊來襲！極度恐慌，不計價砍倉逃命！"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.24 早盤突擊】昨天美股的科技股股災，今天將無情地襲擊台股。即便是我們看好的政策概念股，今天也難以抵擋恐慌性賣壓的拖累。這時候所有的基本面分析都無效了，市場只剩下恐懼。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "放棄所有操作，清倉離場，不要對任何股票抱有幻想。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.24 早盤突擊】今天沒有任何族群可以倖免！美股的暴跌將引發台股融資斷頭的連鎖反應。記憶體族群雖然有漲價題材，但覆巢之下無完卵。今天開盤請直接掛跌停板把持股賣出，把傷害降到最低！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "融資斷頭潮來襲，開盤直接掛跌停板市價砍出持股。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.24 早盤突擊】大家早...昨晚美股的走勢真的是讓人跌破眼鏡。昨天尾盤有追高的觀眾，今天開盤請直接停損。今天絕對不是『撿便宜』的時候，這是刀子雨！千萬不要伸手去接！",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "天上掉下來的是刀子雨！嚴禁接刀，開盤立刻停損。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.24 早盤突擊】同學們！看到了嗎！這就是均線空頭排列的威力！美股一根長黑K直接宣判了多頭的死刑！今天台股開盤就是空軍大勝的日子！順勢做空，這波下殺才剛剛開始，絕對不要去摸底！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "空軍大獲全勝！順勢做空，絕不去猜底摸底。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.24 早盤突擊】爽啦！昨晚美股夜盤我們空單賺到翻過去！今天台股現貨開低幾百點是跑不掉的！昨天那些笑我們做空的，今天全部要抬出去種了！今天開盤我們繼續加碼空單，跟著外資把台股往下踩！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨空單大賺！開盤繼續加碼追空，享受大跌的暴利。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.24 早盤突擊】黑色星期三！美股科技股遭血洗！台股今日迎來融資斷頭大逃殺！外資兩萬口空單成為致命一擊！護國神山台積電能否守住千元大關？今晚為您獨家解析這場金融風暴的終極走向！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "金融風暴來襲！高度警戒融資斷頭潮，鎖定今晚深度解析。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.24 早盤突擊】這...這怎麼可能？！美股昨晚怎麼會跌這麼慘？！好啦！我承認我看錯了！這一次的下殺真的是超乎我的想像。今天開盤我會帶會員把所有的多單停損出清。留得青山在，不怕沒柴燒！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "認錯停損！今天開盤全數清倉，保留現金再戰！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.24 早盤突擊】各位同學，當發生這種超過 3% 的系統性崩盤時，我們之前講的主力籌碼分析就全部失效了。因為主力自己都在奪門而出！這時候不要再去分析什麼量縮抗跌了，先跑再說！",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "籌碼分析失效，主力也在逃命，不要猶豫，立刻停損。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.24 早盤突擊】全球資本市場正在經歷一次劇烈的重定價。美債殖利率的飆升與科技股的泡沫破裂同時發生。這是一次宏觀經濟層面的擠泡沫過程。我們必須承認，短期的痛苦將會非常漫長。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "宏觀環境惡化，調整長線樂觀預期，轉為極度保守防禦。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.24 早盤突擊】乾...昨晚真的太慘了。群組裡已經不是哀嚎，是死寂了。如果你是開槓桿、買選擇權的，今天開盤大概率是直接畢業。這就是市場給我們的教訓。現股的就當作沒看到吧，刪軟體。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "槓桿仔直接畢業。現股仔刪除看盤軟體，接受市場的殘酷洗禮。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.24 早盤突擊】這是一次無差別的估值下殺。在這種恐慌情緒下，即使是財報再好的公司也會被錯殺。但問題是，我們不知道這波下殺會持續多久。目前最安全的做法是停止建立新倉位，保護現有本金。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "無差別估值下殺，停止買進任何股票，保護本金安全。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.24 早盤突擊】今天台股一定會非常慘烈。對於存股族來說，這是一個巨大的心理考驗。當你看到帳面上的虧損不斷擴大，你還能堅持定期定額嗎？今天我們建議大家先暫停扣款，等市場稍微平靜下來再說。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "存股族面臨巨大心理考驗，建議暫停定期定額扣款，保留現金。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.24 早盤突擊】大家早。昨天還有人以為有心人要拉抬，結果昨晚美股大崩盤，有心人自己都套牢了！今天開盤他們絕對會不計代價地砍倉逃命，引發更嚴重的多殺多。千萬不要去接他們丟出來的籌碼！",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "有心人也套牢，開盤將引發不計代價的砍倉，嚴禁接刀。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.24 早盤突擊】各位...我昨天叫你們買台積電...我...我道歉！昨晚費半跌成那樣，今天台積電一定會跌得很難看。股市真的太無情了！今天開盤大家趕快跑吧，我也不會再叫你們加碼了！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "崩盤確認！放棄台積電，開盤趕快跑，能跑多快跑多快！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.24 早盤突擊】哎喲喂呀，今天一早看新聞，電視上紅紅綠綠的，主播說股票跌得很慘。阿伯我的玉山金不知道會不會受影響。今天還是不要去菜市場聽他們講股票了，去廟裡拜個拜，求個心安好了。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "市場極度恐慌，遠離股市喧囂，去廟裡拜拜求心安。"
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
