const usInfluencersData = [
    {
        name: "小左美股第一视角",
        style: "價格行為 / 技術分析",
        viewpoint: "【2026.06 盤後更新】緊盯盤後巨頭財報動向，特別解析 AVGO (博通) 財報後的劇烈波動以及 DELL 等科技股走勢。強調掌握 NVDA 日內交易機會，並開始將視角擴大至大宗商品（黃金、原油）的避險作用。",
        stocks: ["AVGO (博通)", "NVDA (輝達)", "DELL (戴爾)", "黃金/原油"],
        entryPoint: "利用價格行為分析尋找強勢股的回調支撐位，強烈建議觀察財報後波動，在關鍵頸線或均線放量突破時才進場，嚴格守住停損。"
    },
    {
        name: "老李玩钱 (Your Favorite ⭐️)",
        style: "理性長線 / 帳戶實盤",
        viewpoint: "【2026.06 最新更新】發布「6月必買3支股票」與美股3大風險預警。針對近期市場，深入點評熱門科技股（AVGO、NVDA、GOOG、META、MRVL）及金融科技股（SOFI），並詳細解讀輝達財報後的佈局點位。",
        stocks: ["AVGO (博通)", "NVDA (輝達)", "GOOG (谷歌)", "META (Meta)", "SOFI (SoFi)", "MRVL (邁威爾)"],
        entryPoint: "建議逢低佈局。具體買入價格與加倉點位通常在會員頻道展示，強調在波動中做好倉位控管。"
    },
    {
        name: "NaNa說美股",
        style: "幽默犀利 / 大眾視角",
        viewpoint: "【2026.06 盤後更新】最新影片直呼「老錢們也被狂割啊！」以及「信了價值投資的邪」。指出油價上漲但美股走自己的路，點出價值投資近期的痛點與市場資金的極端分化。",
        stocks: ["NVDA (輝達)", "GOOGL (谷歌)", "XOM (埃克森美孚)"],
        entryPoint: "強烈建議不盲目追高，應耐心等待個股回調至關鍵技術支撐（如年線附近）再考慮介入。"
    },
    {
        name: "美股研究社",
        style: "財報基本面 / 華爾街動向",
        viewpoint: "【2026.06 深度覆核】指出市場焦點已從「AI 巨頭」轉向「AI 基礎設施」（算力、儲存，尤其是電力與能源）。同時建議在能源板塊保持防禦性倉位以應對地緣風險。",
        stocks: ["MRVL (邁威爾)", "GOOGL (谷歌)", "XOM (埃克森美孚)"],
        entryPoint: "推薦採取槓鈴策略 (Barbell Strategy)：一端抱緊具備結構成長的 AI 標的，一端配置防禦型資產平衡風險。"
    },
    {
        name: "游庭皓的財經皓角",
        style: "總體經濟 / 景氣循環",
        viewpoint: "【2026.06 深度覆核】認為 AI 牛市已進入「打群架」階段，特徵是廣泛的板塊輪動，不再僅由大型權值股獨秀。維持樂觀但建議採取「右側交易」邏輯。",
        stocks: ["2330 (台積電)", "2454 (聯發科)"],
        entryPoint: "依循景氣循環投資法，於半導體庫存去化完成及資本支出上升期進行波段價差操作。"
    },
    {
        name: "尼可拉斯楊Live精",
        style: "量化指標 / 非主流視角",
        viewpoint: "【2026.06 深度覆核】對 AI 革命極度樂觀，將市場劃分為「價值型 AI」與「成長型 AI」(如記憶體、先進封裝)。指出高檔出現分化，但視恐慌性回檔為絕佳買點。",
        stocks: ["NVDA (輝達)", "MU (美光)", "AMZN (亞馬遜)"],
        entryPoint: "利用量化指標如 AAII（散戶情緒）與 NAAIM（投資經理敞口）尋找賣點與避風港，在市場貪婪時保持冷靜。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "華爾街大多頭 / 宏觀量化",
        viewpoint: "【2026.06 最新覆核】長線極度樂觀（標普年底上看7,700），但警告今年夏季可能有 15%-20% 的劇烈回調洗盤。看好『稀缺資產』。",
        stocks: ["XLE (能源ETF)", "XLB (原物料ETF)", "VRT (維諦技術)"],
        entryPoint: "建議保留現金等待夏季 <span class='highlight'>15%-20% 回調</span>時，大力抄底能源與 AI 基建板塊。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新 / 高貝塔成長",
        viewpoint: "【2026.06 最新覆核】無視短期波動，堅信 5 年以上的技術折現率。大舉加倉被錯殺的 AI 軟體股，並堅信比特幣為新興市場終極防禦機制。",
        stocks: ["PLTR (Palantir)", "BTC (比特幣上看 75萬)", "ARK 創新基金"],
        entryPoint: "在市場因估值擔憂拋售時逆勢 <span class='highlight'>大買 1115 萬美元的 Palantir</span>，展現極致成長流派的韌性與定海神針作用。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴 / 反向指標",
        viewpoint: "【2026.06 最新覆核】在電視節目上頻繁推薦短線熱點，被散戶與量化演算法視為標準的「反向指標」。曾強烈呼籲在比特幣 4 萬美元時拋售。",
        stocks: ["SJIM (反向 ETF)", "GEV (奇異能源)", "VRT (維諦技術)"],
        entryPoint: "其推薦往往出現 <span class='highlight'>拉升後迅速回落</span> 的現象，儘管反向 ETF 已清算，但他仍是散戶測試市場水溫的最佳反指標。"
    },
    {
        name: "Dan Niles (華爾街頂級科技投資人)",
        style: "科技股分析 / 宏觀避險",
        viewpoint: "【2026.06 最新覆核】看好 Agentic AI (代理型AI) 應用端，但預警 2027 年初 AI 泡沫可能迎來 30%-50% 的破裂與重置。",
        stocks: ["AAPL (蘋果)", "AMZN (亞馬遜)", "CSCO (思科)", "BA (波音)"],
        entryPoint: "看好 AAPL 與 AMZN 等科技巨頭的應用層落地，同時佈局波音 (BA) 等轉機股。"
    },
    {
        name: "JC財經女孩 Jenny",
        style: "財報基本面 / 價值投資",
        viewpoint: "【2026.06 最新覆核】以系統性邏輯與財報數據判斷公司護城河，近期深度覆盤 COMPUTEX 展會與輝達、台積電的前景。",
        stocks: ["NVDA (輝達)", "TSM (台積電)", "DELL (戴爾)", "QCOM (高通)", "MU (美光)"],
        entryPoint: "依據最新季報與競爭優勢評估，不盲從市場追高，尋找具有長期護城河的優質科技股。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "草根巨鯨 / 事件驅動",
        viewpoint: "【2026.06 最新覆核】以深度的價值分析與強大的社群迷因號召力，策動散戶資金與華爾街空頭對作。展現出跨板塊的事件驅動與演算法前置交易效應。",
        stocks: ["GME (遊戲驛站)", "CHWY (Chewy)"],
        entryPoint: "利用符號化與密碼學式的社群溝通機制（如推文圖片）引發散戶與演算法 <span class='highlight'>瘋狂追價與伽馬擠壓</span>。"
    },
    {
        name: "Unusual Whales",
        style: "數據武裝 / 宏觀追蹤",
        viewpoint: "【2026.06 最新覆核】打破數據不對稱。揭露前10%高淨值家庭財富集中對市場波動率的影響，並實時追蹤國會議員內線交易與暗池期權流動。",
        stocks: ["NANC (民主黨ETF)", "KRUZ (共和黨ETF)", "VIX (恐慌指數)"],
        entryPoint: "透過即時追蹤 <span class='highlight'>政客交易紀錄與期權異常流動</span> 作為事件驅動的量化交易訊號（Alpha）。"
    },
    {
        name: "All-In Podcast (Chamath 等)",
        style: "矽谷擴音器 / 創投前沿",
        viewpoint: "【2026.06 最新覆核】主導 SaaS 軟體、創投一級市場與前沿科技的定價敘事。精準解構 SpaceX 估值模型與聯準會政策對軟體股的毀滅性打擊。",
        stocks: ["DXYZ (未上市基金)", "TSLA (特斯拉)", "CRM (Salesforce)"],
        entryPoint: "作為一二級市場的敘事橋樑，為華爾街機構在評估新興獨角獸時提供 <span class='highlight'>強而有力的內部定價基準</span>。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "首席策略師 / 總經預判",
        viewpoint: "【2026.06 最新覆核】從大空頭華麗轉身為超級多頭。認為市場已消化地緣風險，在「三重再平衡」與強勁 EPS 支撐下，將標普年底目標價大幅上調。",
        stocks: ["SPY (標普500)", "IWV (羅素3000)", "IWM (羅素2000)"],
        entryPoint: "強調在強勁企業定價能力下，美股 <span class='highlight'>不需依賴降息即可維持漲勢</span>，給予被動基金放膽買進的理論基礎。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技大多頭 / 衍生受益者",
        viewpoint: "【2026.06 深度覆核】極度看多！堅稱目前的 AI 革命大戲只走到「第三局」。焦點開始轉向 AI 浪潮成功從硬體晶片蔓延至軟體應用與網路資安領域的受益者。",
        stocks: ["PLTR (Palantir)", "DDOG (Datadog)", "CRWD (CrowdStrike)"],
        entryPoint: "尋找具備軟體整合與資安護城河的 <span class='highlight'>AI 第二波衍生受益者 (Derivative Beneficiaries)</span>。"
    },
    {
        name: "Adam Kobeissi & Marko Kolanovic",
        style: "量化防禦 / 宏觀看空",
        viewpoint: "【2026.06 最新覆核】警告市場頂部集中風險。點出億萬富豪投資指數與標普比率創新低，且中東能源危機可能提早引發「五月賣出走人」魔咒。",
        stocks: ["SH (做空標普)", "SLV (看空白銀)", "VIX (恐慌指數)"],
        entryPoint: "透過 <span class='highlight'>內部動能衰竭數據</span> 佐證科技股反彈逼近極限，提醒資金即將向中小型股流動或撤出。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "深度價值 / 極端集中",
        viewpoint: "【2026.06 最新覆核】極致的集中投資（僅持10-12檔），善於利用市場短期恐慌或槓桿清算引發的錯殺進行逢低佈局，發掘企業隱藏價值。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "META (Meta)"],
        entryPoint: "趁微軟面臨季度深度回檔、前瞻本益比降至 21 倍時 <span class='highlight'>大舉建倉</span>，看好其 Azure 與 OpenAI 股權的隱含價值。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀動能 / 板塊漂移",
        viewpoint: "【2026.06 最新覆核】完美詮釋「板塊漂移」智慧。認為 AI 基礎設施擴張速度可能超越實體採用曲線，精準進行獲利了結與賽道轉換以規避泡沫。",
        stocks: ["AVGO (博通)", "INTC (英特爾)", "ARM (安謀)"],
        entryPoint: "徹底清倉 Nvidia，資金大規模轉向 <span class='highlight'>解決算力瓶頸（客製化晶片與高速記憶體）</span> 的半導體基建企業。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "百年週期 / 全天候避險",
        viewpoint: "【2026.06 最新覆核】基於百年債務週期進行全天候防禦轉移。徹底規避中國政策風險與中美脫鉤，並警告當前與布雷頓森林體系瓦解時極為相似。",
        stocks: ["NEM (Newmont 黃金)", "TIPS (抗通膨債)"],
        entryPoint: "大幅減持美國大盤 ETF 與清倉中概股，轉向以 <span class='highlight'>黃金等無法被隨意印製的實體資產</span> 作為購買力基準。"
    },
    {
        name: "Elon Musk",
        style: "超級實體 / 資本循環",
        viewpoint: "【2026.06 最新覆核】創造互相支撐、難以做空的龐大帝國（SpaceX 收購 xAI）。透過旗下企業互相採購消化庫存，展現極限跨界與資源調度能力。",
        stocks: ["TSLA (特斯拉)", "SpaceX (未上市)", "xAI (未上市)"],
        entryPoint: "華爾街預估其旗下企業可能在 2027 年迎來 <span class='highlight'>3.6 兆美元的終極合併</span>，放空其任何一家企業的風險呈指數級增加。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "算力霸權 / 生態系綁定",
        viewpoint: "在 COMPUTEX 2026 宣告進入「代理式 AI」時代並首度亮相 Vera Rubin 架構。除了台廠供應鏈，特別點名邁威爾 (Marvell) 將是下一家具備潛力的兆美元巨頭。",
        stocks: ["NVDA (輝達)", "TSM (台積電)", "SMCI (美超微)", "MRVL (邁威爾)"],
        entryPoint: "一句「供應鏈產能無虞」即可瞬間消弭市場不確定性，其 <span class='highlight'>營收指引與產能宣示</span> 具備一錘定音的定價權。"
    },
    {
        name: "霍比特小灰 (UponlyTech)",
        style: "宏觀深度 / 產業鏈解構",
        viewpoint: "【2026.06 最新覆核】深度解讀華爾街大老觀點，剖析 K 型經濟下的美股結構。看好 AI 產業鏈與大數據軟體的長線應用，並警示地緣政治對宏觀通膨的干擾。",
        stocks: ["PLTR (Palantir)", "TSLA (特斯拉)", "NVDA (輝達)", "BTC (比特幣)"],
        entryPoint: "建議透過解析宏觀政策與產業鏈邏輯，尋找 <span class='highlight'>被市場錯殺或具備長期顛覆性</span> 的優質資產，不盲從短期情緒。"
    }
];

const twInfluencersData = [
    {
        name: "獅公 (李永年)",
        style: "資深分析 / 總體指標",
        viewpoint: "【2026.06 深度覆核】警告市場因短線急拉已進入「高風險區」。強烈建議不要使用槓桿，投資人應保留閒置資金，等待有感回檔時再行佈局。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "大盤技術性回檔是正常現象，建議選擇具靈活性的 <span class='highlight'>主動式 ETF</span> 搭配高息金融股防禦。"
    },
    {
        name: "杜金龍 (老先覺)",
        style: "波浪理論 / 數據精算",
        viewpoint: "【2026.06 最新覆核】市場已出現「短期過熱」訊號，預期大盤可能進入高達 4000~6000 點的震盪修正階段。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "現金部位 (50%)"],
        entryPoint: "精算台積電合理價在 1960~2000 元，建議 <span class='highlight'>拉回至 2135 以下</span> 再加碼。大盤操作建議買黑不買紅，留五成現金。"
    },
    {
        name: "郭哲榮 (摩爾投顧 - 折折)",
        style: "極度張狂 / 散戶反指標(時準時不準)",
        viewpoint: "【2026.06 盤後更新】針對6月初大盤震盪，定調為多頭市場的「緩漲急跌」，強調「拉回就是買」！持續看好股東會行情與台積電資本支出受惠股，並點名聯發科與群聯的後市潛力。",
        stocks: ["2317 (鴻海)", "2330 (台積電)", "3374 (精材)", "6196 (帆宣)", "2454 (聯發科)", "8299 (群聯)"],
        entryPoint: "總是喊出「哲哲帶你飛」並在高點買進，常在崩盤時呼籲加碼（著名的「千點萬點哲哲買點」）。"
    },
    {
        name: "老王 (老王愛說笑)",
        style: "技術分析 / 嚴格紀律",
        viewpoint: "【2026.06 深度覆核】承認牛市格局但警告高檔震盪。強調不可盲目追高，必須運用技術指標（如均線）與籌碼分析來設立嚴格停損。",
        stocks: ["2303 (聯電)", "2408 (南亞科)", "2382 (廣達)"],
        entryPoint: "建議設定買進當日收盤價 <span class='highlight'>跌破 5% 即減碼</span>，或跌破 5 日線減碼一半。強調查確認收盤價跌破後再動作。"
    },
    {
        name: "陳龍 (股市尊龍)",
        style: "盤後解盤 / 產業追蹤",
        viewpoint: "【2026.06 最新覆核】跟隨 AI 熱潮推動的多頭馬車，資金在電子與 AI 相關族群間流動。但也提醒投資人必須注意籌碼面的潛在風險。",
        stocks: ["6669 (緯穎)", "3017 (奇鋐)", "3324 (雙鴻)", "高殖利率股"],
        entryPoint: "持續看好 AI 輪動，但強烈提醒需注意 <span class='highlight'>融資暴增與外資空單</span> 的殺盤風險，不可無腦追高。"
    },
    {
        name: "權證小哥",
        style: "籌碼分析 / 雙刀戰法",
        viewpoint: "【2026.06 最新覆核】大盤屢創新高且強勢股全面亮燈，已進入「瘋子盤」。提醒千萬不能盲目追高，必須看懂主力動向與資金流向。",
        stocks: ["2609 (陽明)", "2603 (長榮)", "3661 (世芯-KY)"],
        entryPoint: "即將進入除權息旺季，建議利用 <span class='highlight'>雙刀戰法</span> (多空對鎖) 在波動中賺取領息與價差。利用籌碼軟體追蹤分點券商動作。"
    },
    {
        name: "阮慕驊",
        style: "總體經濟 / 穩健配置",
        viewpoint: "台股 2026 狂飆，個人選擇在 5 月底進行適度的「獲利了結」，確保流動性，應對可能的高位震盪。",
        stocks: ["2882 (國泰金)", "0056 (高股息)", "現金部位 (30%)"],
        entryPoint: "已賣出約 <span class='highlight'>1/3 漲多持股變現</span>；但對於長線看好的 ETF，利用收回的現金反而提高定期定額扣款額度。"
    },
    {
        name: "塗敏峰 (超越巔峰)",
        style: "技術型態 / 中小型股",
        viewpoint: "【2026.06 最新覆核】強調投資人不應僅憑大盤指數進行交易，而應根據個股的未來趨勢與技術面（如 KD 指標）進行「順勢而為」的佈局。",
        stocks: ["2317 (鴻海)", "3481 (群創)", "2408 (南亞科)", "8358 (金居)"],
        entryPoint: "不看大盤，專注於中小型股的輪動機會，利用 <span class='highlight'>型態學與 KD 指標</span> 判讀短線支撐與壓力，靈活進出。"
    },
    {
        name: "股癌 Gooaye (謝孟恭)",
        style: "產業趨勢 / 散戶指標",
        viewpoint: "【2026.06.05 盤前更新】最新 EP667「開始品到土味」。持續透過產業鏈推導資金流向，近期重點觀察軟體 SaaS 族群的復甦，以及光通訊與被動元件的訂單動態。提醒留意大盤融資過高的修正風險。",
        stocks: ["3363 (上詮)", "2327 (國巨)", "6214 (精誠)"],
        entryPoint: "建議緊盯 <span class='highlight'>光通訊與軟體</span> 的訂單復甦動態。提醒投資人預留現金，防範台股大盤可能出現的健康回調。"
    },
    {
        name: "財報狗 (Statementdog)",
        style: "基本面 / 數據驅動",
        viewpoint: "受惠於代理式 AI 加速資料產生，預期 2026 年下半年 HDD、先進製程 DRAM 與半導體設備將迎來強勁需求。",
        stocks: ["3060 (銘異)", "2408 (南亞科)", "3131 (弘塑)", "3583 (辛耘)"],
        entryPoint: "完全客觀數據驅動。建議透過營收年增率與產業供需變化，尋找 <span class='highlight'>量價齊漲</span> 的轉機股或績優股，不看明牌。"
    },
    {
        name: "股魚 (不看盤投資)",
        style: "價值投資 / ETF 存股",
        viewpoint: "【2026.06 最新覆核】警告目前台股處於高基期，「100% 押注股票的風險極高」。建議投資人務必重新檢視股債配置，降低投資組合波動度。",
        stocks: ["0050 (台灣50)", "00679B (美債20年)", "00724B (投資級債)"],
        entryPoint: "提倡不看盤投資法。建議透過 <span class='highlight'>主動式與市值型 ETF</span> 的搭配來分散風險，並透過紀律性定期定額掌握長線機會。"
    },
    {
        name: "朱家泓 (K線大師)",
        style: "技術分析 / 嚴格紀律",
        viewpoint: "【2026.06 最新覆核】選股重於大盤，無論大盤位階如何，市場上總有機會。強調透過技術線圖判斷均線位階（如 5/10/20MA）與量能進出。",
        stocks: ["1513 (中興電)", "1519 (華城)", "1503 (士電)"],
        entryPoint: "不提供具體明牌，強調「選線圖，不是選公司」。建議建立自己的交易 SOP，設定好目標獲利點與 <span class='highlight'>風險停損點</span> 並嚴格執行。"
    },
    {
        name: "蔡明彰 (萬寶投顧 蔡總)",
        style: "產業輪動 / 宏觀總經",
        viewpoint: "【2026.06 最新覆核】敏銳觀察到資金正從台積電外溢至聯發科、台達電等其他權值股。特別警告中國記憶體廠破盤價傾銷對台廠的殺傷力。",
        stocks: ["2454 (聯發科)", "2308 (台達電)", "3363 (上詮)", "2408 (南亞科) 看空"],
        entryPoint: "建議避開面臨價格反轉壓力的 DRAM/NAND 族群，資金可轉向 <span class='highlight'>矽光子 (CPO) 或金融股</span> 等具備實質獲利支撐與補漲潛力的板塊。"
    },
    {
        name: "李兆華 (理財達人秀)",
        style: "東森電視 / 題材熱點",
        viewpoint: "【2026.06 最新覆核】跟隨黃仁勳 COMPUTEX 效應，鎖定「仁勳密碼」帶動的供應鏈行情。同時提醒注意 FED 動向與大盤過熱震盪。",
        stocks: ["2382 (廣達)", "3231 (緯創)", "2359 (所羅門)", "2327 (國巨)"],
        entryPoint: "提供「碗型底」、「W底」等技術面教學。建議在震盪洗盤中尋找具備<span class='highlight'>底型結構</span>的翻身股切入。"
    },
    {
        name: "錢線百分百 (非凡電視)",
        style: "非凡電視 / 產業深度",
        viewpoint: "【2026.06 最新覆核】處於 AI 牛市爆發期，市場資金聚焦於 AI 伺服器、先進封裝及機器人。但也需留意技術指標過熱與均線乖離過大。",
        stocks: ["3017 (奇鋐)", "3324 (雙鴻)", "2308 (台達電)"],
        entryPoint: "除了 AI 伺服器，建議關注 <span class='highlight'>高速傳輸與漲價題材</span>。並留意投信季末作帳行情與跨國主動式 ETF 的佈局機會。"
    },
    {
        name: "阿村伯的退休生活",
        style: "穩健波段 / 數據分析",
        viewpoint: "最新盤後實戰：焦點轉向台積電供應鏈、二極體族群，並強調 AI 伺服器代工廠與記憶體板塊的輪動。在大盤高檔震盪中，建議運用大數據挑選具備實質營收的中小型與低基期輪動股。",
        stocks: ["2330 (台積電)", "3231 (緯創)", "2344 (華邦電)", "3583 (辛耘)", "2481 (強茂)"],
        entryPoint: "建議透過 <span class='highlight'>月營收成長、法人買超</span> 等大數據規律進行佈局，避開年線以下的弱勢股。"
    },
    {
        name: "陳嘉偉 (股市總司令)",
        style: "趨勢轉折 / 運通財經",
        viewpoint: "【2026.06 最新覆核】以「精準研判趨勢轉折」聞名，近期對 6 月台股走勢持極度謹慎態度，屢次警告崩盤風險。",
        stocks: ["3443 (創意)", "3035 (智原)"],
        entryPoint: "強烈提醒留意大盤波動與崩盤風險。建議透過 <span class='highlight'>均線與扣抵位置</span> 尋找空點或避開過熱標的，作風犀利兩極。"
    },
    {
        name: "股海老船長 (王軒中)",
        style: "系統指標 / 光通訊",
        viewpoint: "【2026.06 最新覆核】主打「王冠AI頂級智能指標系統」，強調減少人性情緒干擾。近期極度看好 CPO 光通訊族群，喊出「CPO非漲不可」。",
        stocks: ["3363 (上詮)", "3450 (聯鈞)", "6442 (光聖)"],
        entryPoint: "利用專屬的 <span class='highlight'>智能指標系統</span> 輔助辨識多空趨勢，近期對上詮 (3363) 的法說與營收抱持強烈樂觀態度。"
    },
    {
        name: "張濬安 (航海王)",
        style: "散戶巨鯨 / 極致槓桿",
        viewpoint: "【2026.06 最新覆核】打破法人階級壁壘的傳奇。精準預判總經趨勢與黑天鵝事件，利用全市場、全工具（個股期、墊丙）進行極端槓桿押注。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "在特定宏觀趨勢下重倉 All-in。近期操作轉向高淨值人士的 <span class='highlight'>資本套利與貸賣節稅</span> 策略，單一持股動輒數十億元。"
    },
    {
        name: "菲比斯 (菲神)",
        style: "籌碼定價 / 價值投機",
        viewpoint: "【2026.06 最新覆核】提倡「獲利金三角」：從宏觀事件驅動尋找實體經濟供需失衡，並結合股權籌碼結構的流動性溢價進行投機避險。",
        stocks: ["2618 (長榮航)", "2610 (華航)", "3481 (群創)"],
        entryPoint: "極度重視營收年增率大於 10% 且具備低本益比優勢。利用 <span class='highlight'>籌碼供給稀缺性</span> (如小股本或興櫃) 預判價格擠壓效應。"
    },
    {
        name: "巨人傑",
        isDayTrader: true,
        style: "高頻當沖 / 微觀流動性",
        viewpoint: "【2026.06 最新覆核】將台股當沖推向物理極限（月交易量800億）。操作邏輯脫離主觀預測，更接近造市商與統計套利。",
        stocks: ["6117 (迎廣)", "2359 (所羅門)", "2365 (昆盈)"],
        entryPoint: "不提供具體買點。以極高勝率在訂單簿中博殺，展示了短線交易在 <span class='highlight'>高昂摩擦成本</span> 下所能達到的資本周轉極限。"
    },
    {
        name: "葛瀚中 (Mgk)",
        isDayTrader: true,
        style: "短線周轉 / 投機社會學",
        viewpoint: "【2026.06 最新覆核】主張「富人靠報酬率，窮人靠周轉率」。將投機交易昇華為年輕世代打破階級固化的實質抗爭途徑。",
        stocks: ["1503 (士電)", "3017 (奇鋐)"],
        entryPoint: "強烈提倡不盲求統一盤感，必須建立屬於個人的 <span class='highlight'>「觀察、驗證、執行、記錄」</span> 適性策略與嚴格紀律。"
    },
    {
        name: "谷月涵 (Peter Kurz)",
        style: "總經外資 / 大國博弈",
        viewpoint: "【2026.06 深度覆核】短線極度看空！斷言市場處於「末升段」，並已將部位全數清倉至「零持股」，建議投資人落袋為安。若非買不可，僅推薦記憶體與能源相關之 AI 衍生題材。",
        stocks: ["現金 (零持股)", "記憶體族群", "能源族群"],
        entryPoint: "建議機構法人在 AI 泡沫隱憂下，準備資金流向 <span class='highlight'>防禦型與具實質獲利</span> 的板塊。關注 Fed 降息與大選週期的疊加效應。"
    },
    {
        name: "陸行之",
        style: "半導體權威 / 產業戰略",
        viewpoint: "【2026.06 深度覆核】對輝達與聯發科的 AI PC 晶片合作 (N1/N1X) 極度看好。抨擊市場分析師隨意調高目標價的行為，建議長線抱緊基本面強勁的公司。",
        stocks: ["2454 (聯發科)", "2330 (台積電)", "AVGO (博通)"],
        entryPoint: "傳授「登山高手」心法：長線持有，絕不擇時殺進殺出，且 <span class='highlight'>台積電部位必須超過投資組合 50%</span> 才能穿越多空牛熊。"
    },
    {
        name: "楊應超",
        style: "科技硬體 / 產業鏈洞察",
        viewpoint: "【2026.06 最新覆核】深諳美台企業文化，點出台灣半導體在國際地緣政治談判桌上的弱勢與「高 IQ 低 EQ」的隱憂。",
        stocks: ["2330 (台積電)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "從跨國企業財報與實質訂單拆解科技股價值。建議投資人認清 <span class='highlight'>國際政治博弈</span> 對毛利率的長遠稀釋效應，不宜盲目追逐政治正確。"
    },
    {
        name: "黃仁勳 (Jensen Huang)",
        style: "算力造物主 / 絕對牽引力",
        viewpoint: "【2026.06 深度覆核】在 COMPUTEX 2026 大力推廣 Vera Rubin 架構、AI PC 晶片 (RTX Spark) 與機器人技術。強調水冷散熱與終端 AI 設備是下一波爆發性成長的關鍵引擎。",
        stocks: ["2454 (聯發科)", "3324 (雙鴻)", "2474 (可成)"],
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
    document.getElementById('modal-title').innerHTML = `💡 量化綜合評估 (Quant Summary)`;
    const tbody = document.getElementById('modal-body');
    
    if (!window.altData) {
        tbody.innerHTML = `<p style="color: #ccc; text-align: center; padding: 20px;">資料載入中，請稍候...</p>`;
        document.getElementById('top-modal').style.display = 'block';
        return;
    }

    const dix = window.altData.derivatives.dix.value;
    const gex = window.altData.derivatives.gex.value;
    
    let signalText = "";
    let color = "";
    let desc = "";

    if (dix >= 45 && gex > 0) {
        signalText = "【積極買進 / 續抱】";
        color = "#2ecc71";
        desc = "大戶狂買且波動收斂，大盤有強大支撐，逢低大膽加碼。";
    } else if (dix <= 40 && gex < 0) {
        signalText = "【高危險 / 減碼】";
        color = "#e74c3c";
        desc = "流動性枯竭且波動放大，無人護盤，強烈建議降低持股。";
    } else if (dix <= 40 && gex > 0) {
        signalText = "【逢高減碼 / 觀望】";
        color = "#f39c12";
        desc = "大戶縮手但莊家撐盤，上漲動能耗盡，建議獲利了結。";
    } else if (dix >= 45 && gex < 0) {
        signalText = "【暴力 V 轉潛力】";
        color = "#e67e22";
        desc = "大戶吸籌但盤面波動劇烈，可能伴隨恐慌下殺後的暴力反彈。";
    } else {
        signalText = "【中性 / 依紀律操作】";
        color = "#3498db";
        desc = "無極端數據，回歸個股基本面與均線操作。";
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
