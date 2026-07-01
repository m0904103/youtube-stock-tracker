const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.07.01 最新解析】Tom Lee 在 7/1 指出加密貨幣正處極度悲觀的「黑暗時代」，這反而是絕佳的反向買點。美股方面，標普500由獲利成長驅動，近期半導體急跌為牛市中的逢低佈局良機。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "將半導體板塊回調與加密市場的極度恐慌視為絕佳的逢低買進機會。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.07.01 最新解析】Mike Wilson 於 6/30 指出股市漲勢正向外擴散，警告半導體板塊因獲利樂觀與波動加劇可能走弱，建議避開大型科技與動能交易，轉向看好非必需消費、運輸與區域銀行。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "建議逢高減碼半導體與熱門動能股，並將資金轉往非必需消費、運輸與區域銀行等週期板塊。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.07.01 最新解析】Ackman 於 6/30 推文看好超大型雲端供應商。Pershing Square 於 7/1 確認趁回檔建倉微軟約 20.9億美元，同時預告 Q2 將揭露四檔新投資標的。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "可密切關注其即將公布的 Q2 四檔新標的，並留意微軟等 AI 雲端巨頭的回檔佈局機會。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.25 真實觀點】全球正處於地緣政治秩序重構的『現代重商主義』時代。由 AI 帶動的科技股狂飆已經出現了『泡沫化』的跡象。各國高築的債務負擔風險正在累積。在這些錯綜複雜的壓力下，傳統的投資組合將面臨極具挑戰性的環境，難以產生過去的預期回報。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "在科技股泡沫疑慮與地緣政治風險升溫下，降低傳統股債配置比例，轉而增持實體黃金或多元化資產避險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.25 真實觀點】我認為市場將出現類股輪動，因此我大幅減持了 Meta 和 Alphabet 等大型科技股，轉而買入標普 500 等權重 ETF。我將資金轉向重倉基因檢測公司 Natera (NTRA) 並關注生技產業。此外，AI 資料中心的龐大耗電需求將導致能源供給吃緊，這是我極度看好的領域。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "適度獲利了結漲幅過大的大型科技股，將資金分散佈局於等權重 ETF、生技醫療及能源基礎設施。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.25 真實觀點】當前宏觀經濟面臨嚴峻挑戰。美國 5 月 CPI 反彈至 4.2%，加上中東局勢推升能源危機。聯準會態度強硬，市場已開始定價『升息』。加密貨幣市場暴跌，比特幣 ETF 面臨資金流出。在 AI 領域，發展瓶頸已從 GPU 硬體轉向『電力與基礎設施』的限制。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "降低對利率敏感的加密貨幣部位，轉向佈局受惠於供應鏈吃緊的能源及 AI 電力基礎設施等防禦性資產。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.29 深度解析】黃仁勳近期發表新代 AI 平台「Vera Rubin」，並於股東會宣告「具用處的AI」時代來臨，基礎建設轉向全面商業化。他強調國安優先、嚴拒晶片走私，並承諾將過半現金流回饋股東。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "著眼 AI 基礎建設商業化紅利，長線布局相關供應鏈，但需留意地緣政治出口管制風險。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.29 深度解析】馬斯克週末宣布 xAI 的 Grok 4.5 已於 Tesla 和 SpaceX 內部測試。該模型達 1.5 兆參數，並預告 2026 年起每月發布新模型。暗示 AI 競賽進入白熱化階段。",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "密切關注 Tesla 及 AI 基礎設施板塊，把握 Grok 迭代升級帶動的潛在行情。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.07.01 最新解析】ARK Invest 於 6月底持續調整投資組合，加碼佈局數位資產與金融科技，買入 Circle (CRCL) 與 SoFi；同時減碼生技股 Twist Bioscience。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "可關注其逢低加碼的數位資產與金融科技板塊，並留意生技類股的減碼風險。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.25 真實觀點】近期回檔只是 AI 革命『第三局』的試金石買點！我們看好蘋果邁向 5 兆美元市值；特斯拉今年將迎來爆發，目標價 600-800 美元，其長期價值取決於 Robotaxi 與 Optimus。我們甚至預測未來一年內特斯拉與 SpaceX 有 80% 的機率合併！",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "趁科技股近期回檔，逢低分批佈局具備定價能力的蘋果與受惠自駕突破的特斯拉，掌握 AI 成長紅利。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.25 真實觀點】(近期無公開發言，維持沉默)。根據真實紀錄，他最後一次核實的核心部位仍是 900 萬股 GME。今年除了 3 月發布過一張隱晦的迷因圖外，他已完全淡出公眾視線。散戶社群普遍將他的『未宣布減持』解讀為對 GameStop 長期看好的無聲表態。",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "真實動向成謎，迷因股極易受網路情緒操弄暴漲暴跌，切勿依賴網路臆測，應嚴控風險。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.25 真實觀點】聽好！強勁的 5 月就業數據讓降息的希望徹底破滅！當前的市場極度缺乏廣度，危險至極！華爾街對財報不如預期的企業懲罰是毫不留情的。除非你手上抱的是少數那幾檔『真正的 AI 贏家』，否則持有其他股票在任何價位都不安全！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "極度謹慎！僅集中持有具備實質獲利的頂尖 AI 贏家，其餘資金保持防禦並耐心觀望。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.25 真實觀點】近期我們必須高度警惕 AI 板塊的泡沫化與劇烈回調風險。請特別關注 NVIDIA 的減產訊號、HBM4 擴產放緩，以及 SpaceX 上市後的資金排擠效應。當市場對高估值敘事感到恐慌時，我們更應該透過『價格行為 (Price Action)』與技術形態來追蹤大戶的真實籌碼動向。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "面對科技股高位回調風險，嚴格依賴技術面支撐阻力進行防守，避免盲目追高。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.25 真實觀點】我們持續重點追蹤 Nvidia、Palantir 等 AI 核心企業的財報與技術落地情況，評估市場泡沫。同時，我也高度關注美聯儲政策變化、債務危機及地緣政治（如荷莫茲海峽局勢）對美股的風險傳導。這是一個考驗估值邏輯與抗壓能力的時刻。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "逢低佈局具備實質盈利與算力護城河的 AI 龍頭，警惕地緣與宏觀風險，保留現金彈性。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.25 真實觀點】AI 投資邏輯已發生深刻切換！市場焦點正從單純追捧 GPU，轉向具備訂單能見度的『瓶頸資產』與基礎設施組件（如儲存、電力、液冷等）。例如美光已轉型為核心的 AI 基建資產。全球資產定價正圍繞 AI 時代全面重估。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "逐步獲利了結漲幅已大的純 GPU 概念股，資金輪動至儲存、電力、液冷等具訂單能見度的瓶頸資產。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.25 真實觀點】大家注意啦！近期美股情緒轉換非常快，季末即將迎來高達 1650 億美元的養老金『砸盤再平衡』，科技七巨頭將面臨龐大的獲利了結清算壓力！此外，我們也在密切留意裴洛西買入 Intel 選擇權背後的政治動向。大盤隨時有劇烈震盪與流動性踩踏的風險！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "面對季末機構大舉調倉，對漲幅過高的科技巨頭保持觀望，嚴控倉位以防範踩踏回檔。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.25 真實觀點】支撐 AI 兆級估值的主因深受大國地緣政治博弈影響，而非純粹的財報基本面。輝達等企業內部已浮現減速訊號，甚至未來可能淪為『硬碟公司』，硬體繁榮背後潛藏長期的泡沫破裂風險。市場需密切關注聯準會政策對宏觀流動性的吸血效應。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "面對 AI 高估值與未來潛在的巨型 IPO 浪潮，應保持警戒並控制倉位，避免成為華爾街的退出流動性。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.25 真實觀點】我們認為，2026 年 6 月至 11 月是佈局未來五年『AI 超級大牛市』的關鍵窗口期。龐大資金將持續湧入 AI 基礎設施領域，包含 GPU、HBM、先進封裝及光通訊。短期美光、博通的波動是正常現象，並不改變 AI 時代的大趨勢。",
        entryPoint: "新手建議定期定額（DCA）買進 SMH、QQQ、VOO 等 ETF，資深者可逢低佈局 AI 供應鏈龍頭。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.25 真實觀點】哈囉大家！近期必須密切關注聯準會政策動向帶來的市場逆風，以及潛在的金融風暴風險。在產業面，AI 領域已進入關鍵分水嶺，科技巨頭間的戰略競爭白熱化。針對近期美股震盪，像 Google 等優質科技股在特定支撐點位將浮現修正下的潛在機會。",
        entryPoint: "面對市場波動，耐心等待優質科技股回測至關鍵支撐點位後，再行逢低佈局並嚴控風險。",
        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.25 真實觀點】華爾街策略師近期紛紛示警！科技巨頭龐大的 AI 資本支出已改變了投資邏輯，使美股對利率的敏感度大增。目前大盤過度集中於半導體板塊，扣除 AI 概念股後，整體市場幾乎持平。這種極高的投機性暗示著美股可能已經處於波段高點。",
        entryPoint: "面對 AI 板塊高集中度的風險，採取多元資產配置分散部位，並密切觀察油價與利率動向。",
        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.25 真實觀點】長線來看，我們持續看好 AI 輝達供應鏈、SpaceX 低軌衛星概念股，以及 FOPLP 先進封裝技術。但在總經層面，必須密切關注央行利率決策動向與黃金走勢的劇烈震盪！另外，投資人千萬要留意主動式 ETF 的潛在風險，審慎防範市場醞釀金融海嘯級別的修正壓力。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "優先佈局具長線支撐的先進封裝與太空概念股，同時務必提高現金比例，以應對系統性風險。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.25 真實觀點】台股目前已進入『末升段牛市』。我對後市態度轉趨保守，甚至我個人目前已是『零持股』狀態。請記住『別賺最後一滴水』的原則，高檔隨時有回落風險。此外，AI 發展將大幅推升用電需求，我看好能源產業的衍生投資。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "居高思危，適度獲利了結入袋為安，並可考慮將資金分散配置於具 AI 題材支撐的能源產業。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.25 真實觀點】2026年半導體復甦趨勢已擴及資料中心之外！受 AI 大晶片需求驅動，台積電 CoWoS 產能預計年底翻倍至每月 20 萬片，並將逐步轉向大玻璃中介層（CoPoS）技術。但我也要對記憶體市場提出警示，大廠極高的毛利率恐意味著漲價週期已接近尾聲。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "對台積電等財報利多抱持『戰戰兢兢』的態度，追蹤資本支出折舊與毛利率見頂訊號，防範利多出盡風險。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.07.01 最新解析】游庭皓今日早報解析晶片股狂潮與道瓊創歷史新高後，下半年的資金輪動方向。同時探討中日稀土貿易戰所醞釀的漲價效應，並回顧台股挑戰五萬點的龐大資金動能。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "留意下半年資金從高檔晶片股輪動之方向，並密切關注稀土貿易戰帶來的原物料漲價題材。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.25 真實觀點】AI 雖為長期主軸，但當前科技股估值偏高，必須警戒泡沫風險。關鍵觀察指標為『企業資本支出』，若開始縮減即為反轉警訊。我也擔憂台積電赴美設廠的營運挑戰。記住，台積電再好也不能只買它，單一持股比重不應超過 10%。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "避免重壓單一個股或產業，建議將部分獲利轉入債券與大盤型 ETF 以分散風險。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.25 真實觀點】我對台灣經濟抱持極樂觀的『超級多頭』看法！在主權 AI 需求爆發、非紅供應鏈轉單效應及地緣政治風險下降等動能加持下，台灣正迎來『黃金五年』。這波由產業革命驅動的漲勢將打破傳統景氣循環，台股長線有機會挑戰十萬點！台積電更是驅動大盤的核心關鍵。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "把握 AI 產業革命的長線上升趨勢，以台積電為核心資產，逢拉回皆是長線佈局買點。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.25 真實觀點】台股歷經主升段後，現已進入約 3 至 4 個月、4萬至 4萬6千點的『以盤代跌』箱型整理，屬於第 8 大循環的第 IV 波修正。若融資減肥幅度大於大盤跌幅則有望浮現底部，預期在 11 月縣市長選舉後將重回末升段。資金有轉向中低價股補漲的趨勢。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "採取買黑不買紅策略，避開除息震盪，逢回檔分批佈局中低價股以等待年底選後行情。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.25 真實觀點】台積電仍是多頭核心，但 AI 類股走勢開始分歧。資金有望輪動至歷年表現較佳的生技醫療、重電工程與內需觀光。後續須密切關注聯準會 PCE 數據、7月中旬台積電法說會，以及中東地緣政治對油價與通膨的影響。(註：本人已轉任元大投顧，絕不帶會員操作)",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "指數高檔時應做好資金與風險控管，切莫擴大財務槓桿，可逢低布局具輪動潛力的生技或重電族群。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.25 真實觀點】近期台股的高檔震盪與回檔屬於漲多後的健康洗盤，絕非 AI 泡沫破滅！只要費半指數未現空頭訊號且台積電守住季線，多頭格局就不會改變。預期在美國國慶及台積電 7 月法說會利多帶動下，7 月上旬仍有高點可期，但需提防中旬後可能出現較大回檔。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "當市場盲目殺盤，優質基本面個股被錯殺回落至 5 日線或月線尋得支撐時，即可伺機彎腰撿便宜。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.25 真實觀點】AI 資料中心算力需求激增，打破了以往四年一循環的慣性，全球記憶體市場正處於前所未見的榮景！我特別看好記憶體（DRAM、NAND Flash）、被動元件、PCB 與散熱等族群，如南亞科、威剛等台廠仍具多頭上漲空間。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "逢低布局受惠 AI 資料中心擴建的記憶體與散熱績優股，密切關注法人籌碼動向。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.25 真實觀點】我對股市抱持極樂觀預期，『6 月看 5 萬點，7 月會更強』！面對近期的急殺震盪與修正，這屬於『主流在換手』，是尋找錯殺、撿便宜的良機。我看好 AI 與半導體供應鏈、記憶體，以及被動元件、功率元件、光通訊（CPO）等族群輪動。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "嚴守汰弱留強不盲目追高，利用大盤震盪回檔之際，針對具基本面的供應鏈伺機逢低布局。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.25 真實觀點】選股重於大盤！大盤走勢已非唯一指標。我特別提出『三種位階，三種邏輯』的操盤思維，大家必須根據股票處於低、中、高等不同位階，靈活調整策略，才能精準掌握波段行情與飆股的起漲點，在變局中持盈保泰。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "依據個股當下位階嚴守對應的技術分析紀律，順勢進行波段操作並嚴格設定停損。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.25 真實觀點】近期台股受外資賣壓與投信作帳影響，呈現明顯類股輪動，特別關注欣興、南電等載板族群趨勢。我持續強調『主力動能』及均線結構與籌碼分佈的重要性，投資人必須密切追蹤法人與主力的買賣超動向，才能在震盪盤勢中掌握個股機會。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "建立中心思想，順應主力籌碼動向逢低佈局，切忌盲目追高。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.29 週末深度解析】週末覆盤上週五重點：聚焦台股史詩級崩跌後的止跌條件與外資空單動向，探討美股是否假摔。產業面關注台積電七月法說預期、設備概念股與聯電 2.0 翻身契機。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "觀察大盤止跌訊號與外資空單動向，短線可逢低留意台積電設備概念股與聯電。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.07.01 最新解析】郭哲榮昨日指出台股若持續瘋狂有突破5萬點的可能。但他同時示警記憶體報價已觸頂，將對台廠構成壓力。建議避開漲多的權值股，轉尋低基期且具防禦攻擊能力的標的。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "拉回就做多，嚴禁使用融資，務必以自有資金鎖定低基期優質股操作。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.25 真實觀點】近期創新高可能為主力拉高出貨的『誘多陷阱』！我們頻繁提醒市場即將面臨變盤與節後大回檔的風險。必須密切關注外資操作動向、日本升息影響及美股連動等宏觀變數，對後市整體態度應轉趨審慎與保守。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "面對高檔誘多與潛在變盤風險，採取防禦性策略並嚴格控管資金與持股水位。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.25 真實觀點】全球經濟呈現『溫和增長、高不確定性』。聯準會（Fed）因通膨考量釋出鷹派訊號，支撐美元指數偏強震盪。下半年市場將面臨四大變數：中東地緣局勢、國際油價波動、Fed 利率政策路徑，以及 11 月美國期中選舉對貿易秩序的影響。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "核心部位應聚焦具實質獲利的 AI 與半導體供應鏈，並適度配置強勢美元資產以防禦風險。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.07.01 最新解析】股癌於週三發布 EP675，解析季末資產再平衡尾聲，市場籌碼將回歸基本面。他重點指出被動元件與功率元件受 AI 需求帶動的漲價潮，並看好南電、台積電後續動能。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "反彈波段切忌頻繁換股以免追高殺低，建議保持耐心並適度拉高現金水位觀察。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.25 真實觀點】我們近期深度剖析晶圓代工與記憶體產業，特別關注 AI 伺服器需求激增下的量價走勢。從美光等大廠財報可以看出高頻寬記憶體（HBM）的受惠程度。此外，我們也將視野延伸至綠電與功率半導體等熱門題材，但強調必須透過客觀的基本面與財務數據來驗證市場熱度。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "優先布局具備實質 AI 伺服器與 HBM 訂單支撐的半導體績優股，嚴格以實際財報轉化率作為進出場依據。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.25 真實觀點】近期大跌正是抄底的好時機！我們特別探討了富邦金挑戰 200 元的潛力（需具備高 EPS 成長與 4.5% 殖利率等條件），以及鴻海重返 300 元後挑戰 500 元的可能。同時，台積電低檔佈局時機與低軌衛星題材也是近期的資金行情焦點。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "進場必須以客觀數據為依歸，標的站穩季線（MA60）才可防守反擊，切勿憑題材追高，並設好停損與保留兩成現金。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.25 真實查核】系統警告：網路上並無「有心節目」與分析師「陳力銘」。實際上，2026 年真實新聞中的陳力銘是前台積電工程師，因竊取 2 奈米商業機密，於 2026 年 4 月被判處 10 年有期徒刑！過去此欄位為嚴重 AI 幻覺，現已強制糾正並刪除不實投資建議。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "【警告】請勿輕信查無實證的財經來源，以免落入詐騙陷阱或接收錯誤的 AI 幻覺資訊。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.25 真實觀點】我對台股長線趨勢極度樂觀，甚至有機會『上看 8 萬點』！然而，面對近期台股單日千點的劇烈震盪，短線必須謹慎。大家必須注意風險控管與市場的『逃命訊號』，絕不能盲目追高。當前策略是尋找具備抗跌屬性的概念股，利用市場恐慌大跌時再伺機撿便宜。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "面對高檔震盪行情，應嚴控資金水位與風險，待大盤恐慌殺跌時再針對抗跌強勢股伺機撿便宜。"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.25 真實觀點】我特別看好半導體與 AI 供應鏈的延續性，例如 AI 高速傳輸、12 吋矽晶圓缺貨效應及探針卡。實戰面上，大家必須有理性的致富邏輯，教導投資人如何觀察『大戶分點籌碼』動向，藉此判斷股價的有效突破點以及辨識可操作的處置股。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "鎖定 AI 與半導體供應鏈，利用大戶籌碼數據確認有效突破，並嚴守有事件才操作的紀律。"
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
