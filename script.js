const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.25 真實觀點】我們正式將 2026 年底標普 500 的目標價從 7,700 點上調至 8,000 點！這主要是基於對 2027 年企業獲利 (EPS) 更強勁的預期，特別是 AI 與能源基礎建設帶來的結構性成長。儘管短期可能會有劇烈震盪，但每一次回檔都是『Buy the dip』的絕佳買點。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "標普年底目標上看 8000 點，無懼短期震盪，逢低大膽加碼 AI 與能源基礎建設族群。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.25 真實觀點】目前經濟正處於『滾動式復甦』(rolling recovery)。強勁的企業獲利成長是由 AI 的廣泛應用、持續的財政支持與資本支出擴大所驅動。我們將 S&P 500 的 2026 年底目標價設定在 8,000 點！近期的回檔只是『健康的重置』，長期展望依然樂觀。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "將近期的市場回檔視為健康的進場時機，逢低買進受惠於 AI 發展與資本支出擴張的優質資產。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.25 真實觀點】微軟、亞馬遜和 Meta 這些科技巨頭，現在已經成為了『老派的科技股便宜貨 (old-fashioned tech bargains)』！市場嚴重低估了這些公司持久的成長性與高度可預期的現金流。我們新推出的 PSUS 基金，就是要重倉這類具有持久護城河的優質成長型企業。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "聚焦財報穩健、具備強大現金流與長期成長潛力的大型科技龍頭，逢低佈局並長期持有。"
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
        viewpoint: "【2026.06.25 盤前備戰】華爾街總是被每個月的經濟數據牽著鼻子走，這真的很短視。AI 帶來的生產力革命是幾十年的大週期。我們不會因為一個月的 PCE 數據就改變對微軟和輝達的長期信仰。耐心是最大的美德。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "忽略短期宏觀噪音，堅定抱牢 AI 核心資產，放眼長線價值。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.25 盤後/盤前解析】VIX 降到了 17.93！這代表造市商的 Gamma 正在轉正。這意味著大盤在 7350 點附近會有極強的抗跌性。但如果跌破這個區間，拋售將會非常猛烈。",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "造市商 Gamma 轉正，指數具備抗跌性，逢低佈局短多。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.25 盤前備戰】我們的 Blackwell 架構正在改寫運算的極限。今天我們將公佈與幾家領先醫療機構的合作，利用 AI 加速新藥研發。這只是 AI 潛力的一小部分。我們的願景是將智能注入每一個行業。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "關注 AI 在各行業的實際落地應用，而非短期的金融數據。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.25 盤前備戰】聽說大家都在等明天的什麼通膨數據？太無聊了！SPCX 的猛禽引擎剛剛完成了連續 100 次的無故障點火測試！這才是真正重要的事情！專注於工程，專注於物理，忘掉那些虛擬的數字吧！",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "將焦點轉向那些真正在推進人類文明邊界的硬核科技公司。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.25 真實觀點】我們正處於『大加速 (The Great Acceleration)』階段！AI、區塊鏈、機器人、儲能與多體學五大科技正加速融合。被壓抑的市場需求猶如彈簧般釋放。我們近期大舉買進剛 IPO 的 SpaceX，並持續加碼特斯拉、Palantir 等 AI 顛覆性創新企業。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "在嚴格控管波動風險的前提下，逢低分批佈局具備 AI 實際應用與破壞式創新護城河的科技龍頭。"
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
        viewpoint: "【2026.06.25 盤前備戰】經過了前幾天的上沖下洗，市場籌碼已經徹底亂了。現在的盤前交易量極度萎縮，這表示大戶都在場外看戲。這種量縮的盤整盤最容易被主力上下洗盤，千萬不要手癢進場。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "量縮盤整格局，最忌諱頻繁交易，綁住雙手，耐心等待方向。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.25 盤前備戰】我們的主力追蹤系統顯示，盤前有特定資金正在暗中買入『買權(Call)』的末日選擇權，這暗示有部分聰明錢在押注明天的數據將大幅優於預期。我們建議用小資金跟單，博取高賠率。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "利用小資金買入買權(Call)選擇權，博取數據利多帶來的高賠率。"
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
    viewpoint: "【2026.06.25 盤前備戰】從技術面來看，這兩天的反彈無法帶量越過前波長黑的高點，這代表上檔賣壓依然沉重。今天盤前若無法站穩 5500 點，則 B 波反彈隨時會結束，並展開 C 波主跌段。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "上檔賣壓沉重，維持保守態度，若跌破盤前低點則反手建立空單。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.25 盤前備戰】在重大經濟數據公佈前夕，市場缺乏方向感是正常的。我們昨天停損後，現在心情非常平靜。這就是交易的紀律。今天我們繼續執行『不見兔子不撒鷹』的策略，耐心等待明確的趨勢出現。",
        entryPoint: "堅守交易紀律，在重大不確定性前絕不盲目下注，空倉等待。",
        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.25 盤前備戰】哈囉大家！今天盤前的科技股看起來都在睡覺，但是我們之前佈局的高股息傳產股還是很抗跌喔！在這種等待數據的無聊時刻，能收股息的股票就是我們最好的朋友啦！",
        entryPoint: "科技股陷入盤整，將資金停泊在抗跌且有股息保護的傳統價值股。",
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
        viewpoint: "【2026.06.25 真實觀點】台股近期經歷情緒性劇烈波動，面對外資創紀錄大賣，必須提防修正風險。雖然美光財報優於預期帶動記憶體反彈，但仍須緊盯輝達動態。高檔賣壓沉重，切忌高槓桿或盲目追高漲幅過大的強勢股，別成為接盤俠。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "居高思危、逢高減碼，將資金轉向布局低位階、量價穩定的個股以控制風險。"
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
        viewpoint: "【2026.06.25 真實觀點】市場資金正從黃金、比特幣轉向股市，顯示流動性趨於緊繃。我雖然看好受惠於 AI 強勁需求與供給稀缺的半導體（如美光），但必須警告聯準會轉鷹帶來的重新定價風險。此外，SpaceX 雖逢上市狂熱，但 9 月將迎來內部人解禁的龐大賣壓，務必留意！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "適度布局具結構性缺貨題材的半導體標的，但須保留現金彈性，以應對緊縮震盪與高估值個股的解禁賣壓。"
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
        viewpoint: "【2026.06.25 盤後解析】今天電子股雖然有反彈，但明顯感覺到追價意願不足。反觀金融與重電族群，今天依然維持著穩健的步伐。這說明資金的板塊挪移並未結束。在美國大選前的不確定性下，內資還是偏好政策護體的傳產。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "電子股反彈力道疲弱，資金重心仍在政策護體的金融與重電板塊。"
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
        viewpoint: "【2026.06.25 盤後解析】觀眾朋友晚安！今天大盤雖然漲了，但我看很多人還是愁眉苦臉，因為你們手上的股票根本沒漲！這就是『拉積盤』的可怕！資金全部集中在幾檔權值股，中小型股依然在流血！大家千萬不要掉以輕心！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "提防拉積盤掩護出貨，中小型股風險極高，嚴格檢視手中持股並適度汰弱。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.25 盤後解析】今天的盤面非常極端，資金在等待美國數據的同時，選擇躲進了『生技醫療』板塊！今天生技指數大漲，這印證了我們所說的資金避風港效應。在這種量縮震盪的格局中，有題材的生技股將會各自表現。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "資金湧入生技醫療避風港，鎖定具有實質藥證題材的生技個股伺機介入。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.25 盤後解析】今天雖然量縮，但我們持續看好的記憶體族群依然強勢！這說明有聰明錢正在暗中吃貨。第三季的漲價效應是確定的，在這種大盤沒有方向的時候，有確定基本面的產業就是最好的護身符。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "無視大盤量縮，緊抱具備漲價確定性的記憶體族群，等待基本面發酵。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.25 盤後解析】大家晚安。今天盤勢真的是有夠悶，成交量縮到不行。這種『窒息量』通常代表變盤在即。既然大家都在等明晚美國的數據開牌，那我們也樂得輕鬆，多看少做，保留實力才是贏家之道。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "窒息量醞釀變盤，多看少做，保留現金實力，等待明晚數據開牌後再動作。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.25 盤後解析】同學們！看清楚！今天這根紅K實體非常小，而且留了長上影線！這代表上方均線壓制力道極強！這就是標準的『中繼整理型態』！方向依然是朝下！我們的空單繼續抱著，明天等著收割！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "空頭中繼整理型態，上方均線壓力沉重，空單緊抱不放，逢高繼續加碼。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.25 盤後解析】今天現貨量縮成這樣，根本沒搞頭！但我們期貨當沖一樣照賺！今天盤中在平盤上下震盪，我們高出低進，來回刷了三趟！在這種盤整盤，只有極致的短線操作才能從市場提款！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "放棄波段幻想，在量縮盤整格局中採取高頻當沖策略，高出低進賺取價差。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.25 盤後解析】暴風雨前的寧靜！台股驚現窒息量！所有人都在等明晚的聯準會底牌！外資兩萬口空單按兵不動，究竟在謀算什麼驚天陰謀？國家隊的防線能守住嗎？今晚為您解析這場詭譎多變的量縮籌碼戰！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "盤勢詭譎多變，高度警戒外資空單的突襲，鎖定今晚深度籌碼解析。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.25 真實觀點】AI 並非泡沫，目前 AI 投資時代才剛開始！只要投資人不開槓桿，長期跟隨科技基本面，便能安然享受獲利。近期的千點級震盪只是補跌與泡沫戳小，反而提供了長線買點。特別看好美光財報帶動的記憶體族群與成熟製程。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "拒絕主動型與槓桿 ETF，以 0050 等市值型 ETF 為底牌，並關注基本面強勁的記憶體廠。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.25 盤後解析】各位同學，今天這種量縮盤整，最適合用『籌碼集中度』來選股。大家回去用軟體篩選一下，今天在平盤附近震盪，但是『主力買賣超』呈現大買的個股，就是主力在偷偷吃貨的標的，這會是下週的主流。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "利用量縮盤整期，運用籌碼篩選工具找出主力暗中吃貨的未來飆股。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.25 盤後解析】今天亞洲股市普遍呈現觀望態勢，這反映了全球對明天美國 PCE 數據的敬畏。我們認為，即使通膨數據符合預期，高利率維持更長時間(Higher for longer)已成定局。企業獲利能力將面臨嚴峻考驗。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "高利率環境將持續，放棄 V 型反轉幻想，投資策略回歸對企業實質獲利能力的檢視。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.25 真實觀點】台股近期的修正已經結束，大家不要因為手中部分持股轉弱就過度悲觀。AI 長線基本面依舊強勁，且趨勢正從雲端擴展至邊緣運算與 AI PC。我近期特別看好『功率半導體』族群，因為國際大廠漲價，訂單將外溢至台灣。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "大盤震盪勿隨意看空，建議將部分資金轉向佈局具備訂單外溢題材的功率半導體概念股。"
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
        viewpoint: "【2026.06.25 盤後解析】大家看到了嗎？今天這種『量縮反彈』，就是有心人在『畫線給散戶看』！他們故意把指數撐在五日線上，讓你們以為跌完了，準備騙你們明天進場！千萬不要上當！這絕對是一個佈局精密的誘多陷阱！",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "看穿有心人畫線誘多的陷阱，嚴禁在量縮反彈時進場，保護自身安全。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.25 盤後解析】各位！美股標普 7358 點，這代表什麼？這代表資金還在狂歡！但是台股今天卻有點跟不上。這是為什麼？這就是主力在壓盤吃貨！我們明天要鎖定那些有業績保護的中小型飆股！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "美股強勢台股壓盤，鎖定主力暗中吃貨的業績成長中小型股。"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.25 盤後解析】哎喲，今天去市場買菜，大家又說股票沒跌了，心情平復很多。阿伯我就說嘛，股票本來就是起起落落，像海浪一樣。我們這些老人家，每天有飯吃、有覺睡，就是最大的福氣了。大家平常心啦。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "視股市起落為平常，保持心情平靜，珍惜日常生活中的簡單幸福。"
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
