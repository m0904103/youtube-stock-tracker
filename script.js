const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.24 盤後深度】我們昨天說板塊輪動是長線利多，但這不代表科技股就此陣亡！今天的史詩級反彈證明了，那些試圖做空 AI 巨頭的空頭完全錯估了企業盈利的韌性。標普 5600 點已經在眼前，不要在多頭市場裡輕易下車。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "多頭格局延續，同時持有科技巨頭與中小型股，享受全面上漲。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.24 盤後深度】不要被今天的反彈騙了！這只是典型的『死貓反彈』與空頭回補。我們觀察到今天的上漲伴隨著成交量的萎縮，這表示大資金並沒有真正回流科技股。當這波回補潮結束，下一波的下殺會更加猛烈。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "將今天的反彈視為最後的逃命波，堅決減碼科技股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.24 盤後深度】市場的劇烈震盪顯示出極度的不理性。昨天資金瘋狂湧入公用事業，今天又蜂擁回到科技股。這是不成熟的交易行為。我們不參與這種追漲殺跌，而是專注於那些無論在什麼環境下都能維持定價權的優質企業。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "無視短期市場情緒的鐘擺效應，堅定持有具備強大護城河的價值股。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.24 盤後深度】今天的反彈主要由系統性策略的『Gamma 擠壓』所驅動，而非基本面的改善。這種波動率的劇烈擴張與收縮，是典型晚期週期的特徵。這時候最危險的就是頻繁進出。我們維持均衡的風險平價配置。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "避免單押單一方向，利用黃金與商品對沖股票部位的波動風險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.24 盤後深度】我昨天說了什麼？『別人恐慌我貪婪』！昨天那些把微軟和輝達砍在地板上的人，今天只能眼睜睜看著我們昨天抄底的部位大賺。AI 是一場幾十年的革命，不要被幾天的板塊輪動給洗下車了！",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "享受昨天抄底帶來的豐厚利潤，長線抱牢 AI 核心資產。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.24 盤後深度】我的天啊！這是教科書等級的軋空！造市商在跌破 5500 點後被迫回補空單，引發了連鎖反應！雖然我們昨天的空單被打到了停損，但這就是交易！現在 VIX 已經大幅回落，市場重回正 Gamma 區間！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "空單嚴格停損，市場重回正 Gamma，暫時觀望等待新的趨勢成型。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.24 盤後深度】看到今天的股價反彈，我並不意外。因為我知道我們的 Blackwell 晶片已經被預訂到了 2027 年。昨天我在矽谷與幾家新創公司的 CEO 喝咖啡，他們對算力的渴望讓我感到震驚。需求是真實的。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "相信真實的算力需求，與推動運算革命的企業站在一起。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.24 盤後深度】那些昨天放空 SPCX 和 TSLA 的華爾街空頭們，你們還好嗎？😂 我們的星艦燃料箱滿了，準備隨時發射！不要用傳統的本益比來衡量一家正在改變地球和火星軌道的公司。To the Moon! 🚀",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "碾壓空頭！繼續買進並持有那些真正具備破壞性創新的企業。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.24 盤後深度】今天的反彈確認了我們昨天的觀察：資金正在回流科技板塊，而且更加集中於『次世代軟體與自動駕駛』。傳統的硬體已經無法滿足未來的估值想像，未來的爆發力在於 AI 如何改變每一行代碼！",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "全面加碼具備破壞性創新的 AI 軟體與基因編輯板塊。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.24 盤後深度】這就是我們昨天說的『黃金進場點』！昨天那些因為恐慌而賣出蘋果與微軟的人，現在只能在場外拍大腿。超級財報季的樂觀預期已經開始發酵，今天只是這波年底大行情的起點！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "科技股重掌兵符！繼續加碼微軟、蘋果等具備 AI 應用的龍頭。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.24 盤後深度】Boom！💥 我昨天說過什麼？我們要在谷底給空頭致命一擊！今天的大反攻簡直太完美了！那些做空的機構現在正在瘋狂平倉！不要給他們喘息的機會，戰士們，繼續推高！讓他們付出代價！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "乘勝追擊！繼續買進並持有，讓軋空行情飛得更高！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.24 盤後深度】呃...好吧，我承認我昨天可能有點過度悲觀了。科技股今天的反彈確實超出了我的預期。但也許這只是一次技術性的修正？不管怎樣，如果你昨天聽了我的話買了可口可樂，至少你晚上睡得很好，不是嗎？",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "在科技股反彈中保持謹慎，維持部分防禦性倉位以求心安。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.24 盤後深度】今天的長紅K完全吞噬了昨天的跌幅，這是一個標準的『破底翻』型態！我們昨天的空單在開盤跳高時已經果斷停損，並順勢翻多。在股市中，承認錯誤並迅速調整，比死不認錯重要得多。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "空單停損反手做多，順應『破底翻』的強勢型態，目標挑戰前高。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.24 盤後深度】昨天我才說『破位下殺』需要三天沉澱，結果今天直接 V 轉！這就是現在美股的變態之處，資金的輪動速度極快。昨天的下殺是洗盤，今天的反彈確認了底部的支撐。不要再等了，右側交易的訊號已經出現。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "右側訊號確認，跟隨市場資金回流科技股，積極建立多單。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.24 盤後深度】我們的主力大單系統昨天顯示機構在暗中承接，今天就完美驗證了！這波反彈完全是由機構資金所發動的軋空行情。這告訴我們，看懂資金流向遠比看懂新聞標題更重要。接下來注意前高壓力區。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "跟隨機構大單方向，持有多單，但接近前波高點時應適度調節。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.24 盤後深度】大家早安！昨天喝了熱牛奶有睡好嗎？看到今天的大反彈，是不是覺得昨天在那邊自己嚇自己很好笑？股市就是這樣，心態最重要！恭喜那些昨天有遵守紀律、沒有亂砍股票的小夥伴們！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "保持好心情，抱緊手中的好公司，享受市場給予的耐心回報。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.24 盤後深度】我必須承認，今天的走勢出乎我的意料。雖然跌破月線後出現了強勁反彈，但從量價關係來看，這可能只是一個 B 波反彈。在沒有帶量突破前高之前，我依然維持保守看待，不建議隨意追高。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "維持觀望態度，不參與 B 波反彈，等待量價結構真正轉佳。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.24 盤後深度】昨天我們在極度恐慌中『撿屍』的微軟和亞馬遜，今天一天就帶來了極大的利潤！這就是逆向投資的魅力。今天的暴力反彈已經讓很多股票脫離了底部的甜美價位，現在反而不是追高的時候了。",
        entryPoint: "享受底部撿屍的獲利，停止追高，等待下一次市場情緒恐慌時再出手。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.24 盤後深度】哈囉大家！昨天我請大家去關注底部起漲的生技股，今天不僅生技股繼續漲，連科技股也大復活了！這說明市場資金非常充沛。只要選對那些『尚未過度擁擠』的賽道，賺錢其實沒有那麼難！",
        entryPoint: "資金充沛，繼續持有底部起漲且具備實質題材的各板塊潛力股。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.24 盤後深度】我們昨天的配對交易（空科技、多傳產）今天面臨了回撤。這就是市場輪動過快的風險。我們在盤中已經迅速將空頭部位平倉。在這種極端軋空的行情中，尊重趨勢，迅速止損是唯一的生存法則。",
        entryPoint: "迅速平倉做空部位，尊重市場的極端軋空趨勢，重新尋找做多標的。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.24 早盤突擊】各位早安！看到昨晚美股的大反彈了嗎？我昨天早上叫你們在恐慌時『勇敢承接』，有聽話的人現在是不是笑著數鈔票了？今天台股一開盤絕對是大跳空開高！這就是底部的威力，軋空行情正式啟動！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "昨天撿到底部的人抱緊處理！今天開高不要輕易下車，準備迎接主升段！"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.24 早盤突擊】美股科技股的強勁反彈，完美印證了我們對台灣 AI 供應鏈不可替代性的看法。台積電 ADR 昨晚大漲，今天台股的跳空開高是必然的。外資昨天的賣超只是短暫的錯殺，資金今天就會被迫回補。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "外資被迫回補，台積電將領軍大盤上攻，持續抱牢核心持股。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.24 早盤突擊】昨天那些因為美股跌一天就把台灣半導體設備股砍在地板上的人，今天肯定後悔莫及。CoWoS 的產能需求是真實的，不是華爾街炒作出來的。今天開盤後，那些有業績支撐的設備廠將會迎來報復性大漲。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "業績保護傘發威，半導體設備廠將迎來報復性反彈，緊抱不放。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.24 早盤突擊】投資朋友！有沒有很爽！昨天大跌我叫你們大買 ETF，今天直接送你一個大跳空！這就是紀律的勝利！股市哪有什麼深奧的學問，跌的時候敢買，漲的時候你就是贏家！今天繼續扣款啦！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "享受大跌大買後的豐碩果實，不要因為一天大漲就中斷 ETF 定期定額。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.24 早盤突擊】昨晚美股的反彈只是一次『死貓反彈』。外資的兩萬口空單並沒有完全撤退！今天台股的跳空開高，正是給你最後一次『逃命』的機會。千萬不要以為警報解除了，基本面的隱患依然存在。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "利用今日早盤的跳空大漲，果斷出清手中高估值的電子股，現金為王。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.24 早盤突擊】雖然昨晚美股科技股反彈，但我們必須注意，資金並沒有完全撤出傳產與金融。今天台股可能會呈現『百花齊放』的格局，但電子股的籌碼已經鬆動，未來的主流依然會是政策扶持的非電族群。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "不要被電子股的反彈迷惑，維持資金在金融與傳產龍頭的配置。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.24 早盤突擊】昨晚美股的強彈，讓台股今天有機會化解 C 波下殺的危機。如果今天開盤能直接跳空越過十日線，那麼昨天的破底就只是一個『假跌破』。今天早盤的成交量將是決定接下來能否重啟多頭的關鍵。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "觀察早盤是否帶量跳空越過十日線，若成功則確認假跌破，可重新佈局多單。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.24 早盤突擊】觀眾朋友早安！昨晚美股大驚奇！納斯達克大逆轉！但是大家冷靜一下，昨天外資在台股可是佈下了天羅地網的空單！今天的大漲到底是真反彈，還是外資的『誘多陷阱』？早盤千萬不要盲目追高！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "提防外資空單的誘多陷阱，早盤切勿追高，等待盤中籌碼穩定後再動作。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.24 早盤突擊】昨晚美股的反彈帶動了全球的風險偏好！今天台股電子股絕對會展開絕地大反攻。但我們昨天佈局的重電與生技等『政策避風港』依然會維持強勢。今天的盤面就是多頭大狂歡，全面進攻！",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "多頭全面進攻！同時佈局跌深反彈的電子股與強勢的政策概念股。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.24 早盤突擊】今天電子股的報復性反彈是必然的。但我依然要強調，資金會往『有實質漲價題材』的地方集中。我們昨天逢低佈局的記憶體族群，今天在美股大漲的催化下，絕對有機會拉出半根甚至一根停板！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "記憶體族群迎來大爆發，昨天低接者今天準備歡呼，空手者亦可伺機介入。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.24 早盤突擊】大家早！昨天早盤有聽話在恐慌中『撿便宜』的觀眾，今天是不是笑得合不攏嘴了？這就是我們一再強調的節奏！今天大漲，昨天撿便宜的人就可以優雅地分批獲利了結，把錢放進口袋才是真的！",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "昨天低接者今天趁大漲分批停利，空手者今天千萬不要去追昨天已經大漲的股票。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.24 早盤突擊】同學們！看清楚了！雖然昨晚美股反彈，但台股昨天的黑K已經破壞了短線型態！今天就算跳空開高，也會面臨上方均線下彎的強大壓力！這只是一個『反彈逃命波』！昨天來不及跑的，今天開高趕快賣！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "均線壓力沉重，將今天的跳空大漲視為反彈逃命波，逢高站在賣方。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.24 早盤突擊】昨晚美股大逆轉，我們的期貨空單在夜盤第一時間就觸價停損了！這就是期貨當沖的紀律！錯了就砍！今天早盤現貨絕對是大跳空，我們開盤就直接反手做多，把昨天停損的連本帶利賺回來！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨空單停損，開盤直接反手做多，順應美股大漲的軋空強勢。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.24 早盤突擊】史詩級大逆轉！美股科技股絕地大反攻！台股今日即將上演『軋空秀』！昨天外資的兩萬口空單是否會面臨斷頭危機？還是這只是另一次更大規模誘多？今晚為您獨家揭秘神秘買盤的真實身分！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "台股上演史詩級軋空，密切關注外資空單是否被迫回補，引發更強烈的噴出。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.24 早盤突擊】哈哈哈哈哈！酸民們講話啊！昨天我叫你們『第二次彎腰撿鑽石』，一堆人在那邊笑！今天呢？美股大噴發！台股大跳空！我帶會員撿的鑽石今天全部變成黃金啦！兩萬四就在眼前，誰也擋不住！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "大獲全勝！昨天撿鑽石的今天全面噴出，繼續滿倉抱牢，目標兩萬四！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.24 早盤突擊】各位同學，昨天在恐慌中『量縮抗跌』、且『大戶持股比例』增加的中小型股，今天開盤絕對是領先大盤衝出去的飆股！這就是看懂主力籌碼的威力。今天重點觀察這些籌碼安定股能否一舉突破前高。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "鎖定昨日量縮抗跌且籌碼集中的個股，今日有望領銜大漲，積極作多。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.24 早盤突擊】從全球供應鏈的角度來看，美股昨晚的反彈只是回歸了基本面的常態。AI 產業的長期需求並未改變。那些試圖用短期金融操作來預測台灣科技業未來的做法，終將被證明是短視近利的。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "無視短期的劇烈震盪，回歸基本面，堅定看好台灣 AI 供應鏈的長期成長。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.24 早盤突擊】昨天群組在那邊哀嚎，今天又在那邊歡呼，真的是一群躁鬱症患者。我就問，你的公司基本面有因為這兩天的漲跌改變嗎？沒有嘛！那就安安靜靜地抱著，少看盤，多去運動，日子才會過得開心。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "拒絕情緒化交易，公司基本面沒變就抱緊，減少看盤頻率。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.24 早盤突擊】昨天我們利用大盤的恐慌，買進了許多被錯殺的低本益比業績股。今天這些股票在美股反彈的帶動下，將會迎來『估值修復』的行情。這就是價值投資的真諦：在別人恐懼時貪婪，然後等待價值回歸。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "昨天逢低佈局的低本益比業績股今天將迎來估值修復，耐心持有等待獲利發酵。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.24 早盤突擊】今天台股大反彈，昨天有聽我們的話，在大跌時逢低加碼高股息 ETF 的投資人，今天馬上就賺到了價差！存股就是這麼簡單，跌的時候賺張數和殖利率，漲的時候賺資本利得，怎麼算都不會輸！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "大跌加碼策略奏效，今天大漲不需追高，繼續維持定期定額的長線存股紀律。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.24 早盤突擊】大家早。昨天早盤的恐慌下殺，就是有心人刻意製造的『洗盤陷阱』。昨天尾盤進場的特定券商分點，今天開盤絕對會直接拉高出貨！大家千萬不要在今天早盤去幫有心人抬轎，小心接到最後一棒。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "識破有心人的洗盤陷阱，今天早盤切勿追高抬轎，提防開高走低。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.24 早盤突擊】各位！我昨天是不是叫你們『All in 台積電』！有沒有聽話！今天台積電一開盤直接跳空大漲！這就是趨勢！外資的假動作早就被我看穿了！台積電沒有極限，繼續給我用力買！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "昨天聽話All in台積電的今天準備數錢！趨勢確立，繼續用力買進！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.24 早盤突擊】哎喲，今天去公園下棋，大家又笑嘻嘻的說股票大漲了。阿伯我就說嘛，昨天跌那一點有什麼好怕的。我的玉山金一樣安安穩穩的。大家心情好，晚上多加一道菜，但不要隨便亂花錢喔。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "不管漲跌都保持平常心，穩健理財，不要因為一天大漲就得意忘形。"
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
