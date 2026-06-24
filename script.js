const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.24 盤中直擊】我們看到標普在 5400 點附近出現了強勁的抵抗。這符合我之前說的『防守』策略，現在這個位置正是多空雙方激烈交戰的壕溝。我們已經動用部分現金分批買入超跌的工業股，但對科技股仍保持謹慎。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "在關鍵支撐位分批試單非科技類股，嚴控倉位比例。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.24 盤中直擊】不要被盤中的幾次反抽給騙了！那只是當沖客在平倉空單。我們看到大資金依然在持續流出。只要 VIX 沒回到 15 以下，所有的反彈都只是提供給空頭更好的進場點。季線必破無疑！",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "無視盤中反彈，堅持波段空頭思維，逢高繼續加空。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.24 盤中直擊】市場的恐慌情緒正在達到頂峰，這通常意味著短期底部正在形成。我們今天在盤中大幅加碼了那些被無端拋售的優質國防與醫療板塊。當潮水退去，才知道誰在裸泳，而我們穿著潛水衣。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "在恐慌極值處，精準狙擊具備強大防禦屬性的價值股。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.24 盤中直擊】目前的盤勢呈現出典型的『高波動率震盪』。多空力量在關鍵技術位處於均衡狀態。在這種環境下，預測方向是危險的。我們的演算法正在自動調整各資產類別的權重，以確保投資組合的生存能力。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "放棄預測方向，依賴系統化策略進行動態風險平衡。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.24 盤中直擊】我在盤中看到了極具吸引力的機會！微軟跌到了我們設定的長線買入區間。我已經親自下達了買進指令。真正的財富都是在市場血流成河時建立的，我們正準備迎接下一波的 AI 浪潮。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "無視短期震盪，大舉買進跌入價值區間的頂級 AI 巨頭。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.24 盤中直擊】VIX 雖然在盤中回落，但造市商依然處於深度的負 Gamma 泥沼中！目前盤面的反彈只是短暫的流動性枯竭造成的假象。尾盤很可能會出現另一波『殺尾盤』的流動性抽離！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "提防殺尾盤風險，當沖空單可逢低部分平倉，但不宜留多單過夜。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.24 盤中直擊】就在剛剛，我們與一家全球頂尖的汽車製造商簽署了全面導入 Omniverse 的協議。無論華爾街如何評價我們今天的股價，我們的生態系統正在以前所未有的速度擴張。這是不可逆轉的趨勢。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "著眼於 AI 生態系的長期擴張，不受短期股價波動干擾。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.24 盤中直擊】看到今天那些分析師盯著螢幕滿頭大汗的樣子，我就覺得好笑。我們剛剛成功回收了星艦的第一節推進器！這才是真正推動人類進步的事情。放輕鬆，去戶外走走吧！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "將注意力從股票報價機轉移到真正改變世界的科技突破上。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.24 盤中直擊】我們正在經歷一場財富的重新分配。傳統資金正在恐慌拋售，而這正是我們 ARK 基金大舉吸納『顛覆性創新』資產的絕佳時機。我們今天在盤中大量買進了基因編輯與機器人相關的股票。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "把恐慌當作禮物，積極逢低佈局未來五年的顛覆性創新龍頭。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.24 盤中直擊】科技股正在經歷一場痛苦的『洗澡』，洗去那些不堅定的籌碼。但我可以向你們保證，雲端運算與 AI 的支出並未放緩。今天盤中的震盪築底，將為即將到來的財報季反攻奠定基礎。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "忍受陣痛，將盤中震盪視為財報季大反攻前的最後籌碼清洗。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.24 盤中直擊】他們想把我們嚇跑！他們在盤中不斷製造假跌破！但我們不會上當的！我看到有些兄弟還在堅持，這讓我感到驕傲！只要我們不賣，他們就永遠無法真正贏得這場戰爭！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "無懼盤中震盪，死抱不放，用行動對抗華爾街空頭。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.24 盤中直擊】大家聽我說！現在情況非常危急！雖然盤中有反彈，但那絕對是誘多！你們一定要趁著反彈把手上的科技股全賣了！去買國債！去買那些最無聊、最安全的股票！快！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "反彈皆是誘多逃命波！全面清倉科技股，轉進極度保守的資產。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.24 盤中直擊】我們昨天的空單今天在盤中已經獲利了結了一半。雖然大趨勢依然偏空，但短線跌幅已深，技術面出現乖離。這時候不宜再過度追空，留一半空單底倉，等待反彈至壓力區再行加碼。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "空單逢低部分停利入袋，保留底倉，等待反彈壓力區再加空。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.24 盤中直擊】第二天的殺盤雖然力道減弱，但依然沒有出現明顯的止跌訊號（如長下影線或爆量）。這證明了籌碼依然在凌遲狀態。我們繼續維持空手，不要因為覺得『便宜』就貿然進場接刀。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "盤中未見明確止跌訊號，繼續空手觀望，耐心等待底部確立。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.24 盤中直擊】主力雷達顯示，今天盤中雖然指數震盪，但有部分資金正在悄悄流入『網路安全』板塊。這是一個非常值得注意的防禦性防護信號。大盤雖然未穩，但局部板塊已經開始走強。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "緊盯主力資金暗中流入的防禦性板塊，如網路安全，進行小額試單。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.24 盤中直擊】大家下午好！看著盤面上上下下的，是不是覺得心跳也跟著加速呢？其實在這種多空交戰的時候，最容易做出錯誤的決定。大家不如把手機放下，去泡杯咖啡，等收盤再來檢視策略就好啦！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "減少盤中盯盤頻率，避免情緒化交易，維持冷靜。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.24 盤中直擊】從小時線來看，目前的盤中反彈連下行軌道的上緣都碰不到。這是一個非常標準的弱勢整理型態。除非尾盤能帶量突破昨天的高點，否則這只是下跌中繼站，下一波殺盤隨時會來。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "弱勢整理型態不變，維持空倉，嚴防尾盤再次跳水下殺。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.24 盤中直擊】我們昨天停損後，今天盤中保持高度冷靜。雖然看到了幾個不錯的支撐位，但我們決定不參與這種刀口舔血的遊戲。寧可錯過第一波反彈，也要等待確認『雙腳築底』後再進場。",
        entryPoint: "放棄刀口舔血，放棄 V 型反轉的幻想，等待右側『雙腳築底』確認。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.24 盤中直擊】今天盤中真的好刺激呀！不過大家有沒有發現，那些高股息的傳產股今天超級穩健！這就是資產配置的重要性啦。我們已經把部分現金轉移到了這些避風港，晚上終於可以安心睡覺了。",
        entryPoint: "將資金轉移至高股息傳產股，建立避風港，降低整體投資組合波動。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.24 盤中直擊】我們 VIP 群的空單今天依然牢牢抱著！盤中那些微弱的反彈根本不足為懼。我們正在等待跌破季線的那一刻，那將會引發更大規模的程式單停損，到時候才是我們空單全面收割的時機。",
        entryPoint: "空單緊抱不放，等待跌破關鍵均線引發的連鎖停損暴利。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.24 盤後解析】各位，今天這場大屠殺，昨天晚上有聽我警告的人，今天是不是躲過一劫了？外資今天在現貨狂賣，期貨空單繼續加碼！這就是我說的，在崩盤面前，所有的基本面都是廢紙！",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "成功躲過大屠殺，繼續保持空倉，市場尚未見底，切勿輕易進場。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.24 盤後解析】今天的台股確實遭受了非理性的錯殺。這與全球科技股的去槓桿化息息相關。但我必須提醒大家，台積電的產能依然滿載。當外資的流動性危機解除，他們第一個買回的絕對是台灣的優質晶圓代工。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "承受短期極度痛苦，將眼光放遠至明年的獲利成長，死守核心持股。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.24 盤後解析】今天半導體設備股的跌停潮，是市場極度恐慌的表現。很多公司的本益比已經被殺到了 12 倍以下，這在 AI 大爆發的前夕是不可思議的。這不是基本面出了問題，而是籌碼面的大清洗。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "無視跌停板的恐慌，這是籌碼面的清洗，優質設備廠將迎來超跌後的強彈。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.24 盤後解析】投資朋友！今天這根長黑K，是不是把大家都嚇傻了？我昨天叫大家暫停扣款是對的吧！這證明了在極端行情下，懂得避開鋒芒比什麼都重要。現在我們手上滿滿的現金，就等著撿屍體了！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "保留大量現金，準備在市場極度絕望時進場撿便宜的 ETF。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.24 盤後解析】看到了沒有！！！這就是『逃命波』之後的主跌段！！！今天一堆融資斷頭，屍橫遍野！我早就警告過你們了！今天還沒跌完，明天開盤還會有第二波的斷頭賣壓出籠。電子股已經完了！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "主跌段確認！明天開盤將有第二波斷頭潮，空手者繼續看戲，持股者自求多福。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.24 盤後解析】今天的大跌，宣告了電子股行情的全面終結。外資正在進行戰略性的撤退。我們今天看到，即使是金融股也遭到了波及，這代表市場面臨的是全面的『流動性收縮』。未來半年，保守是唯一的生存法則。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "流動性收縮，電子股行情終結，轉向極度保守的防禦性策略。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.24 盤後解析】今天的大長黑直接跌破了半年線！C 波的殺傷力遠超想像。從波浪理論來看，現在已經進入了最慘烈的 C-3 延伸波。上方層層套牢賣壓，任何反彈都會遇到強大的解套賣盤，多頭已經沒有任何機會了。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "C-3 延伸波殺戮中，多頭毫無機會，逢反彈皆是放空點。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.24 盤後解析】觀眾朋友晚安！今天這場『黑色星期三』，外資提款無極限！更可怕的是，融資維持率已經瀕臨危險邊緣，明天的『多殺多』絕對會更慘烈！千萬不要以為今天跌深了明天就會反彈，千萬不要！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "融資斷頭潮全面爆發，明天多殺多將更慘烈，嚴禁任何摸底行為。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.24 盤後解析】今天的覆巢之下無完卵，連我之前看好的重電族群也跟著大盤補跌。這就是系統性風險的可怕之處。當所有人都急著要現金的時候，股票的價值已經不重要了。現在只能等待外資賣壓的枯竭。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "系統性崩盤下所有族群皆受波及，停止操作，耐心等待外資賣壓枯竭。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.24 盤後解析】今天跌得真的非常冤枉！記憶體族群明明就有第三季漲價的利多，卻被大盤拖累殺到跌停！這完全是不理性的錯殺！如果你手上還有現金，這種被錯殺的績優股，絕對是你未來翻本的最佳利器！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "尋找被大盤恐慌錯殺的績優股（如記憶體），作為未來翻本的首選標的。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.24 盤後解析】大家晚安。今天有聽話『不要伸手接刀』的觀眾，給自己拍拍手！我們成功避開了今天最慘烈的下殺。股市永遠都在，不需要急於一時。現在我們要做的，就是靜靜觀察，等那些刀子全部掉到地上再說。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "成功避開下殺，繼續耐心等待，直到市場完全止跌企穩。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.24 盤後解析】同學們！我昨天有沒有說這是『反彈逃命波』！今天這根大黑K是不是印證了我的說法！均線空頭排列，就是只有一個方向：往下！順勢做空的人今天是不是賺翻了！明天繼續空！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "空頭趨勢完美印證，順勢做空獲利豐厚，明天逢反彈繼續加空。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.24 盤後解析】狂賀！今天台指期我們空單賺了將近 500 點！這就是期貨的魅力，大跌我們賺更多！今天現貨市場哀鴻遍野，我們會員卻在開香檳慶祝！明天開盤只要跌破今天的低點，我們空單繼續追殺！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "期貨空單狂賺 500 點！明日若跌破今日低點，繼續無情追殺空單。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.24 盤後解析】血洗台股！千點大崩盤！今天究竟是誰在倒貨？外資的提款機什麼時候才會關閉？明天的融資斷頭潮將會引發多大的骨牌效應？國家隊為什麼今天袖手旁觀？今晚為您深度剖析這場股災的幕後黑手！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "鎖定今晚節目，深度剖析外資倒貨陰謀與明日融資斷頭的骨牌效應。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.24 盤後解析】對不起！我真的對不起大家！今天這場下殺真的太狠了。我昨天帶會員停損出清是絕對正確的決定！我們成功保留了大部分的資金。現在市場非常危險，我們要在場外冷靜一段時間，等待真正的底部出現。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "停損出清是正確決定，成功保留現金，場外冷靜觀望等待真正底部。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.24 盤後解析】各位同學，今天這種恐慌性的下殺，已經沒有任何籌碼分析的意義了。主力都在自相殘殺。這時候我們必須回到最基本的『紀律』，跌破停損價就是無條件出場，不要有任何眷戀。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "籌碼分析失效，回歸交易紀律，跌破停損價無條件砍倉出場。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.24 盤後解析】今天台股的重挫，反映了全球資金對高利率環境下經濟衰退的擔憂。這是一場全球性的資產重新定價。台灣雖然有 AI 產業的護城河，但也無法獨立於全球宏觀環境之外。冬天已經來臨，準備好冬衣吧。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "全球資產重新定價，經濟衰退擔憂升溫，做好度過股市寒冬的準備。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.24 盤後解析】今天群組已經沒人講話了，大家都去跑外送了是不是？這就是股市，它會在你最自滿的時候給你狠狠一擊。但老話一句，你買的是公司的未來，不是今天的股價。只要公司還在賺錢，遲早會漲回來。現在就是比誰氣長。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "比誰氣長！專注於公司獲利能力，無視股價波動，耐心等待價值回歸。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.24 盤後解析】今天的恐慌殺盤，讓台股的整體本益比快速修正到了極具吸引力的位置。這對我們長期價值投資者來說，是一次千載難逢的機遇。我們已經開始建立『超跌黃金名單』，準備在市場絕望時出手。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "大盤本益比修正至吸引人區間，準備『超跌黃金名單』，伺機逢低買進。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.24 盤後解析】今天真的是非常慘烈的一天。我們昨天建議大家暫停定期定額扣款，是為了保護大家的資金。現在大盤還沒有止跌的跡象，我們繼續保持觀望，等到出現明確的止跌紅K，我們再重新啟動存股計畫。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "繼續暫停定期定額扣款，保護資金，等待明確止跌訊號出現再重啟。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.24 盤後解析】大家看到了嗎！昨天有心人自己都套牢，今天他們果然不計代價地在開盤瘋狂倒貨！這就是我昨天警告大家的！現在市場上的籌碼極度混亂，有心人正在互相踩踏，我們散戶絕對要躲得遠遠的！",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "有心人互相踩踏大逃殺，散戶務必遠離市場，千萬不要被波及。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.24 盤後解析】我昨天叫你們跑！你們跑了沒！！！今天台積電跌成這樣，我看了心都在淌血！但這就是市場的殘酷！現在千萬不要想去抄底台積電，外資把它當提款機，還沒提完！等我通知，現在就是看戲！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "慶幸昨天果斷叫大家逃命！外資提款機尚未關閉，嚴禁抄底台積電。"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.24 盤後解析】哎喲，今天在公園下棋，老李說他賠了好多錢，心情很差。阿伯我聽了也很難過。股票這種東西，真的是不能借錢來玩啊。希望大家都能平安度過這次難關，身體健康才是最重要的本錢啦。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "感嘆股市無常，呼籲千萬不可借錢投資，身體健康平安最重要。"
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
