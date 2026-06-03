const usInfluencersData = [
    {
        name: "小左美股第一视角",
        style: "價格行為 / 技術分析",
        viewpoint: "最新更新：黃仁勳欽點 MRVL 為下一家兆元企業，帶動光通訊板塊爆發。持續關注 AI 基礎設施行情，同時提醒留意總經通膨數據干擾。",
        stocks: ["NVDA (輝達)", "MRVL (邁威爾)", "TSLA (特斯拉)", "MU (美光)", "INTC (英特爾)"],
        entryPoint: "利用價格行為分析尋找強勢股的回調支撐位。建議在 <span class='highlight'>放量突破或回測不破</span> 時分批建倉，嚴格遵守停損紀律。"
    },
    {
        name: "老李玩钱 (Your Favorite ⭐️)",
        style: "理性長線 / 帳戶實盤",
        viewpoint: "發布了「6月必買」與下半年佈局策略。對市場高位震盪保持理性，針對 AI 與記憶體板塊進行深入解析。",
        stocks: ["MU (美光)", "INTC (英特爾)", "SNDK (新帝)", "RKLB (火箭實驗室)", "NVDA (輝達)"],
        entryPoint: "建議逢低佈局。具體買入價格與加倉點位通常在會員頻道展示，強調在波動中做好倉位控管。"
    },
    {
        name: "NaNa說美股",
        style: "幽默犀利 / 大眾視角",
        viewpoint: "以「小白語言」解構市場，近期吐槽舊科技巨頭與價值投資的窘境。認為市場展現韌性，資金正在板塊間快速輪動。",
        stocks: ["NVDA (輝達)", "GOOGL (谷歌)"],
        entryPoint: "強烈建議不盲目追高，應耐心等待個股回調至關鍵技術支撐（如年線附近）再考慮介入。"
    },
    {
        name: "美股研究社",
        style: "財報基本面 / 華爾街動向",
        viewpoint: "AI 依舊是 2026 盈利核心（貢獻標普500七成增長）。華爾街投資範式正在轉變，資金逐漸向防禦型與實體經濟板塊擴散。",
        stocks: ["NVDA (輝達)", "XLE (能源ETF)", "XLF (金融ETF)", "XLI (工業ETF)"],
        entryPoint: "推薦採取槓鈴策略 (Barbell Strategy)：一端抱緊具備結構成長的 AI 標的，一端配置防禦型資產平衡風險。"
    },
    {
        name: "游庭皓的財經皓角",
        style: "總體經濟 / 景氣循環",
        viewpoint: "探討 AI 行情是否為超級週期。分析台美韓印股市競合關係，以及半導體庫存循環對全球供應鏈的影響。",
        stocks: ["TSM (台積電)", "NVDA (輝達)", "EWT (台灣ETF)"],
        entryPoint: "依循景氣循環投資法，於半導體庫存去化完成及資本支出上升期進行波段價差操作。"
    },
    {
        name: "尼可拉斯楊Live精",
        style: "量化指標 / 非主流視角",
        viewpoint: "警告 2026 年出現「指數高位震盪、個股劇烈波動」的結構性背離。密切關注中東地緣政治對油價與聯準會政策的影響。",
        stocks: ["NVDA (輝達)", "MRVL (邁威爾)", "SMCI (美超微)"],
        entryPoint: "利用量化指標如 AAII（散戶情緒）與 NAAIM（投資經理敞口）尋找賣點與避風港，在市場貪婪時保持冷靜。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "華爾街大多頭 / 宏觀量化",
        viewpoint: "長線極度樂觀（標普年底上看7,700），但警告今年夏季可能有 15%-20% 的劇烈回調洗盤。看好『稀缺資產』。",
        stocks: ["XLE (能源ETF)", "XLB (原物料ETF)", "VRT (維諦技術)"],
        entryPoint: "建議保留現金等待夏季 <span class='highlight'>15%-20% 回調</span>時，大力抄底能源與 AI 基建板塊。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新 / 高貝塔成長",
        viewpoint: "無視短期波動，堅信 5 年以上的技術折現率。大舉加倉被錯殺的 AI 軟體股，並堅信比特幣為新興市場終極防禦機制。",
        stocks: ["PLTR (Palantir)", "BTC (比特幣上看 75萬)", "ARK 創新基金"],
        entryPoint: "在市場因估值擔憂拋售時逆勢 <span class='highlight'>大買 1115 萬美元的 Palantir</span>，展現極致成長流派的韌性與定海神針作用。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴 / 反向指標",
        viewpoint: "在電視節目上頻繁推薦短線熱點，被散戶與量化演算法視為標準的「反向指標」。曾強烈呼籲在比特幣 4 萬美元時拋售。",
        stocks: ["SJIM (反向 ETF)", "GEV (奇異能源)", "VRT (維諦技術)"],
        entryPoint: "其推薦往往出現 <span class='highlight'>拉升後迅速回落</span> 的現象，儘管反向 ETF 已清算，但他仍是散戶測試市場水溫的最佳反指標。"
    },
    {
        name: "股癌 Gooaye (謝孟恭)",
        style: "產業趨勢 / 散戶第一指標",
        viewpoint: "堅持不直接報牌，但透過產業鏈推導資金流向。近期重點觀察軟體 SaaS 族群的復甦，以及光通訊與被動元件的訂單動態。",
        stocks: ["CRM (Salesforce)", "NOW (ServiceNow)", "SNOW (Snowflake)", "OKTA (Okta)", "LITE (Lumentum)"],
        entryPoint: "觀察到資金正在輪動至跌深的軟體股 <span class='highlight'>(如 Salesforce, ServiceNow, Snowflake)</span>，提醒留意大盤融資過高的修正風險。"
    },
    {
        name: "Dan Niles (華爾街頂級科技投資人)",
        style: "科技股分析 / 宏觀避險",
        viewpoint: "看好 Agentic AI (代理型AI) 應用端，但預警 2027 年初 AI 泡沫可能迎來 30%-50% 的破裂與重置。",
        stocks: ["AAPL (蘋果)", "AMZN (亞馬遜)", "CSCO (思科)", "BA (波音)"],
        entryPoint: "看好 AAPL 與 AMZN 等科技巨頭的應用層落地，同時佈局波音 (BA) 等轉機股。"
    },
    {
        name: "JC財經女孩 Jenny",
        style: "財報基本面 / 價值投資",
        viewpoint: "以系統性邏輯與財報數據判斷公司護城河，近期深度覆盤 COMPUTEX 展會與輝達、台積電的前景。",
        stocks: ["NVDA (輝達)", "TSM (台積電)", "DELL (戴爾)", "QCOM (高通)", "MU (美光)"],
        entryPoint: "依據最新季報與競爭優勢評估，不盲從市場追高，尋找具有長期護城河的優質科技股。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "草根巨鯨 / 事件驅動",
        viewpoint: "以深度的價值分析與強大的社群迷因號召力，策動散戶資金與華爾街空頭對作。展現出跨板塊的事件驅動與演算法前置交易效應。",
        stocks: ["GME (遊戲驛站)", "CHWY (Chewy)"],
        entryPoint: "利用符號化與密碼學式的社群溝通機制（如推文圖片）引發散戶與演算法 <span class='highlight'>瘋狂追價與伽馬擠壓</span>。"
    },
    {
        name: "Unusual Whales",
        style: "數據武裝 / 宏觀追蹤",
        viewpoint: "打破數據不對稱。揭露前10%高淨值家庭財富集中對市場波動率的影響，並實時追蹤國會議員內線交易與暗池期權流動。",
        stocks: ["NANC (民主黨ETF)", "KRUZ (共和黨ETF)", "VIX (恐慌指數)"],
        entryPoint: "透過即時追蹤 <span class='highlight'>政客交易紀錄與期權異常流動</span> 作為事件驅動的量化交易訊號（Alpha）。"
    },
    {
        name: "All-In Podcast (Chamath 等)",
        style: "矽谷擴音器 / 創投前沿",
        viewpoint: "主導 SaaS 軟體、創投一級市場與前沿科技的定價敘事。精準解構 SpaceX 估值模型與聯準會政策對軟體股的毀滅性打擊。",
        stocks: ["DXYZ (未上市基金)", "TSLA (特斯拉)", "CRM (Salesforce)"],
        entryPoint: "作為一二級市場的敘事橋樑，為華爾街機構在評估新興獨角獸時提供 <span class='highlight'>強而有力的內部定價基準</span>。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "首席策略師 / 總經預判",
        viewpoint: "從大空頭華麗轉身為超級多頭。認為市場已消化地緣風險，在「三重再平衡」與強勁 EPS 支撐下，將標普年底目標價大幅上調。",
        stocks: ["SPY (標普500)", "IWV (羅素3000)", "IWM (羅素2000)"],
        entryPoint: "強調在強勁企業定價能力下，美股 <span class='highlight'>不需依賴降息即可維持漲勢</span>，給予被動基金放膽買進的理論基礎。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技大多頭 / 衍生受益者",
        viewpoint: "提出「AI 乘數效應」：Nvidia 硬體每投入1美元，將衍生出 8-10 美元的生態圈商機。市場已進入 AI 建設第二階段。",
        stocks: ["MSFT (微軟)", "AAPL (蘋果)", "TSLA (特斯拉)", "PLTR (Palantir)", "CRWD (CrowdStrike)"],
        entryPoint: "尋找具備軟體整合與資安護城河的 <span class='highlight'>AI 第二波衍生受益者 (Derivative Beneficiaries)</span>。"
    },
    {
        name: "Adam Kobeissi & Marko Kolanovic",
        style: "量化防禦 / 宏觀看空",
        viewpoint: "警告市場頂部集中風險。點出億萬富豪投資指數與標普比率創新低，且中東能源危機可能提早引發「五月賣出走人」魔咒。",
        stocks: ["SH (做空標普)", "SLV (看空白銀)", "VIX (恐慌指數)"],
        entryPoint: "透過 <span class='highlight'>內部動能衰竭數據</span> 佐證科技股反彈逼近極限，提醒資金即將向中小型股流動或撤出。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "深度價值 / 極端集中",
        viewpoint: "極致的集中投資（僅持10-12檔），善於利用市場短期恐慌或槓桿清算引發的錯殺進行逢低佈局，發掘企業隱藏價值。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "META (Meta)"],
        entryPoint: "趁微軟面臨季度深度回檔、前瞻本益比降至 21 倍時 <span class='highlight'>大舉建倉</span>，看好其 Azure 與 OpenAI 股權的隱含價值。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀動能 / 板塊漂移",
        viewpoint: "完美詮釋「板塊漂移」智慧。認為 AI 基礎設施擴張速度可能超越實體採用曲線，精準進行獲利了結與賽道轉換以規避泡沫。",
        stocks: ["AVGO (博通)", "INTC (英特爾)", "ARM (安謀)"],
        entryPoint: "徹底清倉 Nvidia，資金大規模轉向 <span class='highlight'>解決算力瓶頸（客製化晶片與高速記憶體）</span> 的半導體基建企業。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "百年週期 / 全天候避險",
        viewpoint: "基於百年債務週期進行全天候防禦轉移。徹底規避中國政策風險與中美脫鉤，並警告當前與布雷頓森林體系瓦解時極為相似。",
        stocks: ["NEM (Newmont 黃金)", "TIPS (抗通膨債)"],
        entryPoint: "大幅減持美國大盤 ETF 與清倉中概股，轉向以 <span class='highlight'>黃金等無法被隨意印製的實體資產</span> 作為購買力基準。"
    },
    {
        name: "Elon Musk",
        style: "超級實體 / 資本循環",
        viewpoint: "創造互相支撐、難以做空的龐大帝國（SpaceX 收購 xAI）。透過旗下企業互相採購消化庫存，展現極限跨界與資源調度能力。",
        stocks: ["TSLA (特斯拉)", "SpaceX (未上市)", "xAI (未上市)"],
        entryPoint: "華爾街預估其旗下企業可能在 2027 年迎來 <span class='highlight'>3.6 兆美元的終極合併</span>，放空其任何一家企業的風險呈指數級增加。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "算力霸權 / 生態系綁定",
        viewpoint: "在 COMPUTEX 2026 宣告進入「代理式 AI」時代並首度亮相 Vera Rubin 架構。除了台廠供應鏈，特別點名邁威爾 (Marvell) 將是下一家具備潛力的兆美元巨頭。",
        stocks: ["NVDA (輝達)", "TSM (台積電)", "SMCI (美超微)", "MRVL (邁威爾)"],
        entryPoint: "一句「供應鏈產能無虞」即可瞬間消弭市場不確定性，其 <span class='highlight'>營收指引與產能宣示</span> 具備一錘定音的定價權。"
    }
];

const twInfluencersData = [
    {
        name: "獅公 (李永年)",
        style: "資深分析 / 總體指標",
        viewpoint: "對於高檔走勢表示審慎，提出「是最後加碼還是最後減碼？」的疑問，提醒密切關注油價、美元及資金流向。",
        stocks: ["神達 (3706)", "00929 (科技優息)", "富邦金 (2881)"],
        entryPoint: "大盤技術性回檔是正常現象，建議選擇具靈活性的 <span class='highlight'>主動式 ETF</span> 搭配高息金融股防禦。"
    },
    {
        name: "杜金龍 (老先覺)",
        style: "波浪理論 / 數據精算",
        viewpoint: "市場已出現「短期過熱」訊號，預期大盤可能進入高達 4000~6000 點的震盪修正階段。",
        stocks: ["台積電 (2330)", "台達電 (2308)", "現金部位 (50%)"],
        entryPoint: "精算台積電合理價在 1960~2000 元，建議 <span class='highlight'>拉回至 2135 以下</span> 再加碼。大盤操作建議買黑不買紅，留五成現金。"
    },
    {
        name: "郭哲榮 (摩爾投顧 - 折折)",
        style: "話題性高 / 權值股波段",
        viewpoint: "極度看好台股與鴻海的後市，認為外資空單僅是鎖定正價差的套利。呼籲把握股東會行情，但切忌使用融資。",
        stocks: ["鴻海 (2317)", "台積電 (2330)", "廣達 (2382)"],
        entryPoint: "強烈看好鴻海「每年賺兩個股本」目標，在 20 倍本益比預期下，認為目標價上看 <span class='highlight'>400 元</span>，已進入噴出臨界點。"
    },
    {
        name: "老王 (老王愛說笑)",
        style: "技術分析 / 嚴格紀律",
        viewpoint: "AI 供應鏈仍是多頭主旋律，但在萬點高位操作中，最看重「紀律」與「停損停利機制」。",
        stocks: ["廣達 (2382)", "緯創 (3231)", "聯電 (2303)", "南亞科 (2408)"],
        entryPoint: "建議設定買進當日收盤價 <span class='highlight'>跌破 5% 即減碼</span>，或跌破 5 日線減碼一半。強調查確認收盤價跌破後再動作。"
    },
    {
        name: "陳龍 (股市尊龍)",
        style: "盤後解盤 / 產業追蹤",
        viewpoint: "跟隨 AI 熱潮推動的多頭馬車，資金在電子與 AI 相關族群間流動。但也提醒投資人必須注意籌碼面的潛在風險。",
        stocks: ["緯穎 (6669)", "奇鋐 (3017)", "雙鴻 (3324)", "高殖利率股"],
        entryPoint: "持續看好 AI 輪動，但強烈提醒需注意 <span class='highlight'>融資暴增與外資空單</span> 的殺盤風險，不可無腦追高。"
    },
    {
        name: "權證小哥",
        style: "籌碼分析 / 雙刀戰法",
        viewpoint: "大盤屢創新高且強勢股全面亮燈，已進入「瘋子盤」。提醒千萬不能盲目追高，必須看懂主力動向與資金流向。",
        stocks: ["陽明 (2609)", "長榮 (2603)", "世芯-KY (3661)"],
        entryPoint: "即將進入除權息旺季，建議利用 <span class='highlight'>雙刀戰法</span> (多空對鎖) 在波動中賺取領息與價差。利用籌碼軟體追蹤分點券商動作。"
    },
    {
        name: "阮慕驊",
        style: "總體經濟 / 穩健配置",
        viewpoint: "台股 2026 狂飆，個人選擇在 5 月底進行適度的「獲利了結」，確保流動性，應對可能的高位震盪。",
        stocks: ["國泰金 (2882)", "0056 (高股息)", "現金部位 (30%)"],
        entryPoint: "已賣出約 <span class='highlight'>1/3 漲多持股變現</span>；但對於長線看好的 ETF，利用收回的現金反而提高定期定額扣款額度。"
    },
    {
        name: "塗敏峰 (超越巔峰)",
        style: "技術型態 / 中小型股",
        viewpoint: "強調投資人不應僅憑大盤指數進行交易，而應根據個股的未來趨勢與技術面（如 KD 指標）進行「順勢而為」的佈局。",
        stocks: ["鴻海 (2317)", "群創 (3481)", "南亞科 (2408)", "金居 (8358)"],
        entryPoint: "不看大盤，專注於中小型股的輪動機會，利用 <span class='highlight'>型態學與 KD 指標</span> 判讀短線支撐與壓力，靈活進出。"
    },
    {
        name: "股癌 Gooaye (謝孟恭)",
        style: "產業趨勢 / 散戶指標",
        viewpoint: "台股資金正在進行板塊輪動，從漲多的硬體代工外溢尋找落後補漲標的。強烈警告融資開槓桿過熱，隨時有修正風險。",
        stocks: ["上詮 (3363)", "國巨 (2327)", "精誠 (6214)"],
        entryPoint: "建議緊盯 <span class='highlight'>光通訊與軟體</span> 的訂單復甦動態。提醒投資人預留現金，防範台股大盤可能出現的健康回調。"
    },
    {
        name: "財報狗 (Statementdog)",
        style: "基本面 / 數據驅動",
        viewpoint: "受惠於代理式 AI 加速資料產生，預期 2026 年下半年 HDD、先進製程 DRAM 與半導體設備將迎來強勁需求。",
        stocks: ["銘異 (3060)", "南亞科 (2408)", "弘塑 (3131)", "辛耘 (3583)"],
        entryPoint: "完全客觀數據驅動。建議透過營收年增率與產業供需變化，尋找 <span class='highlight'>量價齊漲</span> 的轉機股或績優股，不看明牌。"
    },
    {
        name: "股魚 (不看盤投資)",
        style: "價值投資 / ETF 存股",
        viewpoint: "警告目前台股處於高基期，「100% 押注股票的風險極高」。建議投資人務必重新檢視股債配置，降低投資組合波動度。",
        stocks: ["0050 (台灣50)", "00679B (美債20年)", "00724B (投資級債)"],
        entryPoint: "提倡不看盤投資法。建議透過 <span class='highlight'>主動式與市值型 ETF</span> 的搭配來分散風險，並透過紀律性定期定額掌握長線機會。"
    },
    {
        name: "朱家泓 (K線大師)",
        style: "技術分析 / 嚴格紀律",
        viewpoint: "選股重於大盤，無論大盤位階如何，市場上總有機會。強調透過技術線圖判斷均線位階（如 5/10/20MA）與量能進出。",
        stocks: ["中興電 (1513)", "華城 (1519)", "士電 (1503)"],
        entryPoint: "不提供具體明牌，強調「選線圖，不是選公司」。建議建立自己的交易 SOP，設定好目標獲利點與 <span class='highlight'>風險停損點</span> 並嚴格執行。"
    },
    {
        name: "蔡明彰 (萬寶投顧 蔡總)",
        style: "產業輪動 / 宏觀總經",
        viewpoint: "敏銳觀察到資金正從台積電外溢至聯發科、台達電等其他權值股。特別警告中國記憶體廠破盤價傾銷對台廠的殺傷力。",
        stocks: ["聯發科 (2454)", "台達電 (2308)", "上詮 (3363)", "南亞科 (2408) 看空"],
        entryPoint: "建議避開面臨價格反轉壓力的 DRAM/NAND 族群，資金可轉向 <span class='highlight'>矽光子 (CPO) 或金融股</span> 等具備實質獲利支撐與補漲潛力的板塊。"
    },
    {
        name: "李兆華 (理財達人秀)",
        style: "東森電視 / 題材熱點",
        viewpoint: "跟隨黃仁勳 COMPUTEX 效應，鎖定「仁勳密碼」帶動的供應鏈行情。同時提醒注意 FED 動向與大盤過熱震盪。",
        stocks: ["廣達 (2382)", "緯創 (3231)", "所羅門 (2359)", "國巨 (2327)"],
        entryPoint: "提供「碗型底」、「W底」等技術面教學。建議在震盪洗盤中尋找具備<span class='highlight'>底型結構</span>的翻身股切入。"
    },
    {
        name: "錢線百分百 (非凡電視)",
        style: "非凡電視 / 產業深度",
        viewpoint: "處於 AI 牛市爆發期，市場資金聚焦於 AI 伺服器、先進封裝及機器人。但也需留意技術指標過熱與均線乖離過大。",
        stocks: ["奇鋐 (3017)", "雙鴻 (3324)", "台達電 (2308)"],
        entryPoint: "除了 AI 伺服器，建議關注 <span class='highlight'>高速傳輸與漲價題材</span>。並留意投信季末作帳行情與跨國主動式 ETF 的佈局機會。"
    },
    {
        name: "阿村伯的退休生活",
        style: "穩健波段 / 數據分析",
        viewpoint: "最新盤後實戰：焦點轉向台積電供應鏈與二極體族群。在大盤高檔震盪中，建議運用大數據挑選具備實質營收的中小型輪動股。",
        stocks: ["台積電 (2330)", "聯發科 (2454)", "辛耘 (3583)", "強茂 (2481)"],
        entryPoint: "建議透過 <span class='highlight'>月營收成長、法人買超</span> 等大數據規律進行佈局，避開年線以下的弱勢股。"
    },
    {
        name: "陳嘉偉 (股市總司令)",
        style: "趨勢轉折 / 運通財經",
        viewpoint: "以「精準研判趨勢轉折」聞名，近期對 6 月台股走勢持極度謹慎態度，屢次警告崩盤風險。",
        stocks: ["創意 (3443)", "智原 (3035)"],
        entryPoint: "強烈提醒留意大盤波動與崩盤風險。建議透過 <span class='highlight'>均線與扣抵位置</span> 尋找空點或避開過熱標的，作風犀利兩極。"
    },
    {
        name: "股海老船長 (王軒中)",
        style: "系統指標 / 光通訊",
        viewpoint: "主打「王冠AI頂級智能指標系統」，強調減少人性情緒干擾。近期極度看好 CPO 光通訊族群，喊出「CPO非漲不可」。",
        stocks: ["上詮 (3363)", "聯鈞 (3450)", "光聖 (6442)"],
        entryPoint: "利用專屬的 <span class='highlight'>智能指標系統</span> 輔助辨識多空趨勢，近期對上詮 (3363) 的法說與營收抱持強烈樂觀態度。"
    },
    {
        name: "張濬安 (航海王)",
        style: "散戶巨鯨 / 極致槓桿",
        viewpoint: "打破法人階級壁壘的傳奇。精準預判總經趨勢與黑天鵝事件，利用全市場、全工具（個股期、墊丙）進行極端槓桿押注。",
        stocks: ["長榮 (2603)", "陽明 (2609)", "萬海 (2615)"],
        entryPoint: "在特定宏觀趨勢下重倉 All-in。近期操作轉向高淨值人士的 <span class='highlight'>資本套利與貸賣節稅</span> 策略，單一持股動輒數十億元。"
    },
    {
        name: "菲比斯 (菲神)",
        style: "籌碼定價 / 價值投機",
        viewpoint: "提倡「獲利金三角」：從宏觀事件驅動尋找實體經濟供需失衡，並結合股權籌碼結構的流動性溢價進行投機避險。",
        stocks: ["長榮航 (2618)", "華航 (2610)", "群創 (3481)"],
        entryPoint: "極度重視營收年增率大於 10% 且具備低本益比優勢。利用 <span class='highlight'>籌碼供給稀缺性</span> (如小股本或興櫃) 預判價格擠壓效應。"
    },
    {
        name: "巨人傑",
        isDayTrader: true,
        style: "高頻當沖 / 微觀流動性",
        viewpoint: "將台股當沖推向物理極限（月交易量800億）。操作邏輯脫離主觀預測，更接近造市商與統計套利。",
        stocks: ["迎廣 (6117)", "所羅門 (2359)", "昆盈 (2365)"],
        entryPoint: "不提供具體買點。以極高勝率在訂單簿中博殺，展示了短線交易在 <span class='highlight'>高昂摩擦成本</span> 下所能達到的資本周轉極限。"
    },
    {
        name: "葛瀚中 (Mgk)",
        isDayTrader: true,
        style: "短線周轉 / 投機社會學",
        viewpoint: "主張「富人靠報酬率，窮人靠周轉率」。將投機交易昇華為年輕世代打破階級固化的實質抗爭途徑。",
        stocks: ["士電 (1503)", "奇鋐 (3017)"],
        entryPoint: "強烈提倡不盲求統一盤感，必須建立屬於個人的 <span class='highlight'>「觀察、驗證、執行、記錄」</span> 適性策略與嚴格紀律。"
    },
    {
        name: "谷月涵 (Peter Kurz)",
        style: "總經外資 / 大國博弈",
        viewpoint: "預警台美股市估值逼近極限。指出亞洲貨幣（日圓/人民幣）競貶壓力將是引爆全球資金洗牌的關鍵宏觀指標。",
        stocks: ["富邦金 (2881)", "統一 (1216)", "台泥 (1101)"],
        entryPoint: "建議機構法人在 AI 泡沫隱憂下，準備資金流向 <span class='highlight'>防禦型與具實質獲利</span> 的板塊。關注 Fed 降息與大選週期的疊加效應。"
    },
    {
        name: "陸行之",
        style: "半導體權威 / 產業戰略",
        viewpoint: "直指台積電赴美設廠的高成本隱憂與政治妥協。但同時高度肯定 AI 晶片的底層變革與長線霸權。",
        stocks: ["台積電 (2330)", "世芯-KY (3661)", "創意 (3443)"],
        entryPoint: "傳授「登山高手」心法：長線持有，絕不擇時殺進殺出，且 <span class='highlight'>台積電部位必須超過投資組合 50%</span> 才能穿越多空牛熊。"
    },
    {
        name: "楊應超",
        style: "科技硬體 / 產業鏈洞察",
        viewpoint: "深諳美台企業文化，點出台灣半導體在國際地緣政治談判桌上的弱勢與「高 IQ 低 EQ」的隱憂。",
        stocks: ["台積電 (2330)", "廣達 (2382)", "緯創 (3231)"],
        entryPoint: "從跨國企業財報與實質訂單拆解科技股價值。建議投資人認清 <span class='highlight'>國際政治博弈</span> 對毛利率的長遠稀釋效應，不宜盲目追逐政治正確。"
    },
    {
        name: "黃仁勳 (Jensen Huang)",
        style: "算力造物主 / 絕對牽引力",
        viewpoint: "非證券分析師，但掌握台股估值天花板的絕對話語權。其所建構的 Agentic AI 生態系正引發台股資金的超級虹吸效應。",
        stocks: ["台積電 (2330)", "鴻海 (2317)", "廣達 (2382)", "所羅門 (2359)"],
        entryPoint: "只要被「兆元宴」或合作點名，該企業的股價估值模型即遭遇 <span class='highlight'>史詩級重塑 (Re-rating)</span>，形成難以抵抗的系統性爆發力。"
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
    // 隱藏所有內容
    document.getElementById('section-us').style.display = 'none';
    document.getElementById('section-tw').style.display = 'none';
    document.getElementById('section-us').classList.remove('active');
    document.getElementById('section-tw').classList.remove('active');
    
    // 取消所有按鈕的 active 狀態
    document.getElementById('btn-us').classList.remove('active');
    document.getElementById('btn-tw').classList.remove('active');

    // 顯示被點擊的內容
    const targetSection = document.getElementById('section-' + tabId);
    targetSection.style.display = 'block';
    // 強制重繪以觸發動畫
    void targetSection.offsetWidth;
    targetSection.classList.add('active');

    document.getElementById('btn-' + tabId).classList.add('active');

    // 動態更改標題與敘述
    if(tabId === 'us') {
        document.getElementById('page-title').textContent = "拾人牙慧 👁️ 美股輿情監控";
        document.getElementById('page-desc').textContent = "US Market Sentiment Radar - 匯聚傳奇巨鯨與華爾街權威的第一手洞察";
    } else {
        document.getElementById('page-title').textContent = "拾人牙慧 👁️ 台股輿情監控";
        document.getElementById('page-desc').textContent = "TW Market Sentiment Radar - 追蹤最具指標性的台股大老與草根散戶佈局";
    }
}

// 頁面載入時執行渲染
document.addEventListener('DOMContentLoaded', () => {
    renderGrid('influencers-grid-us', usInfluencersData);
    renderGrid('influencers-grid-tw', twInfluencersData);

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
