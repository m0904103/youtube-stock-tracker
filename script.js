const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06 下週一展望】雖然強勁就業數據引發降息預期落空與科技股重挫，但這完全符合我預測的「2026年三階段」短期陣痛期。短線回檔只是牛市中的正常顛簸，並未改變基本面。我依然維持標普500年底上看7,700點的目標。這波拋售反而為長線投資者提供了絕佳的佈局良機，不必因一時的震盪而恐慌。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，利用短期市場恐慌情緒逢低買入，鎖定年底目標價耐心持有。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06 下週一展望】這次由就業數據超預期引發的「好消息就是壞消息」市場修正，是利率預期重估的必然結果。然而，我們近期才將標普500目標價上調至8,300點。人工智慧的資本支出與企業獲利增長才是真正的長期驅動力。這次科技股的估值修正，正好消化了過熱的市場情緒，未來的本益比擴張將成為今年最大驚喜。",
        stocks: ["MSFT (微軟)", "AAPL (蘋果)", "GOOGL (Alphabet)"],
        entryPoint: "【下週一操作】下週一開盤策略：關注具有實質AI獲利能力的大型優質股，在估值合理時逐步建倉。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06 下週一展望】當前市場狂熱追逐晶片等「最新鮮事物」，讓我聯想到2000年的達康泡沫。6月5日的重挫只是資金過度集中的後遺症。我們應避免盲目追高概念股，而是回歸商業本質。我們專注於那些在AI時代佔據優勢且具備強大現金流的高品質企業。當市場因恐慌錯殺這些優質資產時，正是長線佈局的良機。",
        stocks: ["MSFT (微軟)", "META (Meta)", "AMZN (亞馬遜)"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，避開估值過高的熱門硬體股，買進現金流強勁且被市場忽視的優質科技巨頭。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06 下週一展望】這次股市重挫印證了我的警告：AI驅動的高估值正形成類似網路泡沫的風險。危險不在於科技本身，而在於脆弱的金融結構。當投資者面臨流動性需求與債務壓力，被迫將「帳面財富」變現時，就會引發拋售。在宏觀層面，我們仍處於債務週期與地緣政治衝突的「大週期」中，投資人應保持高度警惕。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "【下週一操作】下週一開盤策略：透過黃金與國債等避險資產進行多元化配置，以防範流動性危機與結構性風險。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06 下週一展望】6月5日標普與納指的劇烈回調，反映了市場對降息的過度樂觀被強勁就業數據無情打破。我一直強調，美國龐大的債務規模與央行流動性緊縮，將導致市場極度脆弱。當前的高利率環境不容忽視，任何通膨重燃的跡象都可能成為壓垮市場的稻草。投資者絕不能忽視美國財政赤字帶來的長期結構性尾部風險。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "【下週一操作】下週一開盤策略：保持高度敏銳的宏觀視角，適度降低槓桿並聚焦於具備長期稀缺性的優質資產。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06 下週一展望】市場將這次大跌稱為「崩盤」是過度反應了。根據我們的「六層蛋糕」AI基礎設施框架分析，這只是一次從AI半導體領頭羊向優質藍籌股的正常資金輪動。AI交易只是暫時喘息，這類5%至10%的溫和回撤，反而為市場提供了健康的消化空間。強勁的就業數據顯示經濟底氣仍在，這明確是一個買入機會。",
        stocks: ["TSMC (台積電)", "AMD (超微)", "AVGO (博通)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，視5-10%的市場回調為買入良機，重點佈局AI產業鏈中被錯殺的核心基礎設施股。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06 下週一展望】儘管6月5日因Broadcom財測與高就業數據引發科技股暴跌，輝達單日重挫逾6%，但這不影響AI的長線需求。我正在台韓穩固供應鏈，已確認下半年產能翻倍。短期修正僅是情緒波動，AI基建剛性需求不變，我們將加速推進。",
        stocks: ["NVDA", "TSM", "ARM"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，趁市場恐慌時逢低佈局AI基礎建設核心標的，長期持有不隨短線波動起舞。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06 下週一展望】這次大跌不過是利率預期與AI泡沫擔憂的短線陣痛。當華爾街為就業數據與晶片財測驚慌時，SpaceX正準備迎接750億美元的歷史性IPO，並與Google深化合作。跨星系擴張遠勝股市跳動，缺乏護城河的公司終將淘汰。",
        stocks: ["TSLA", "GOOGL", "ASTS"],
        entryPoint: "【下週一操作】下週一開盤策略：無視短期總經數據干擾，專注投資具有壟斷性技術與顛覆性未來的硬核科技公司。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06 下週一展望】市場對就業數據產生嚴重誤判，將好消息視為壞消息。AI帶來的生產力爆發長期將抑制通膨。在6月5日的拋售中，ARK積極再平衡，減碼超漲的AMD，並大舉買進Pony AI與Kodiak AI。短期波動是逢低承接破壞性創新贏家的好時機。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，趁市場錯殺成長股時積極調倉。加碼具備顛覆性技術且估值合理的創新領域。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06 下週一展望】科技股血洗只是AI狂奔中的一次現實檢驗。Broadcom財測引發高估值股獲利了結，但絕非AI革命終點。儘管就業數據讓利率承壓，企業端AI支出仍在加速。這是汰弱留強的過程，蘋果等核心巨頭具強大防禦力，短線回調即黃金買點。",
        stocks: ["AAPL", "MSFT", "AVGO"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，將此次回調視為優質科技股的現實檢驗。鎖定具備強大現金流與AI變現能力的大廠買入。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06 下週一展望】華爾街正為科技股暴跌哭天喊地，但我依舊神隱。雖然社群極度期待我能在 6 月 7 日兩週年回歸直播，但目前這僅是市場的猜測。不管那斯達克跌多慘，只要散戶團結一致堅持信仰，這波因我而起的波動就還沒結束。我的目光緊盯著 GameStop 等標的，我們能在混亂中找到屬於我們的深層價值。",
        stocks: ["GME", "CHWY", "KOSS"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，提防迷因股因預期落空帶來的劇烈震盪，但逢低仍可關注具備軋空潛力的散戶共識股。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06 下週一展望】科技股大屠殺太可怕了！Broadcom的財測加上過熱就業數據，這就是我警告過的殘酷市場！未能達標的高估值公司正受嚴厲懲罰。比特幣也跟著跳水，Saylor的拋售打擊了信心。現在應轉向防禦性股票和現金，別徒手接掉下來的刀子！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，避開未能達成高預期的AI概念股與高風險資產。立即將資金轉移至傳統防禦型價值股避險。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06 下週一展望】我先前就不斷警告席勒本益比已經來到 40 倍的歷史高危險區。這次非農數據引爆的拋售，證實了市場對 AI 資本支出能否變現的嚴重質疑。目前大盤還在消化高估值泡沫，真正的底部還沒出現。大家現在最重要的是『保留現金流』，千萬不要急著去逆勢攤平接刀，等待大盤出現明確的止跌訊號再行動。",
        stocks: ["NVDA (輝達)", "META (Meta)", "TSLA (特斯拉)"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，多看少做，保留最高現金水位。等待 AI 泡沫質疑聲浪消退與大盤止穩訊號。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06 下週一展望】這次的股災印證了我們對『宏觀流動性收緊』與『市場分化』的預判。未來的行情將從 AI 的『芯片層』逐漸轉移到『落地應用層』。大家必須注意，後續像 SpaceX 這類超級巨頭的 IPO，可能會像是『市場大殺器』一樣吸走科技股的流動性。現在要回歸底層邏輯，只投資有真實獲利護城河的企業，拋棄純炒作的標的。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "【下週一操作】下週一開盤策略：關注宏觀流動性變化，將資金從純芯片硬體轉向具有實質應用落地的 AI 企業。"
    }
];

const twInfluencersData = [
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06 下週一展望】此次6月股災驗證了我先前對台股『末升段牛市』的示警。市場劇烈修正印證了『別賺最後一滴水』的鐵則。我早已全數出清股票，保持零持股避開殺盤。目前市場信心潰散，建議投資人切勿急於進場接刀。在明確止跌訊號出現前，應保持高度警戒並優先保留現金，靜待落底。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，保持空手或極低持股，靜待市場落底，優先保留現金水位。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06 下週一展望】這次股災是市場過熱後的必然修正，我先前就提醒過大家別太嗨。然而從產業基本面來看，半導體與AI供應鏈的長期成長動能依舊強勁，NVIDIA與台積電的競爭力未因暴跌而改變。投資人不應被外資目標價牽著走，這波殺盤洗清了浮額，現在正是檢視核心持股，專注於AI基礎設施的時刻。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，趁恐慌殺盤時，分批承接具備核心技術與穩定資本支出的半導體龍頭股。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06 下週一展望】這波股災呼應了我對市場輪動與回調的預期，AI敘事正從巨頭領漲轉向實質獲利。從景氣投資法來看，半導體仍有強勁EPS支撐，這並非泡沫破裂而是估值修正。台灣在AI基礎建設扮演關鍵角色，只要總經數據未衰退，股災急跌就是長期景氣波段投資人的絕佳進場點，應趁機逢低分批佈局。",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "【下週一操作】下週一開盤策略：運用景氣投資法，在市場恐慌急跌時分批佈局大盤市值型ETF與AI權值股。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06 下週一展望】台股崩跌印證了市場『完美定價』後的脆弱性。我先前已將持股降至三成以應對過熱風險。這次股災是估值的合理回歸，當股價脫離基本面，任何風吹草動都會引發震盪。投資人應重新計算合理股價，勿盲目抄底，維持股債平衡配置，鎖定具穩定現金流的科技龍頭，耐心等待安全邊際出現。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "【下週一操作】下週一開盤策略：嚴守估值紀律與安全邊際，將資金平均配置於高殖利率優質股與避險美債。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06 下週一展望】這兩日的急殺僅是情緒過熱與槓桿過高引發的短期陣痛，絕非泡沫破裂。全球正處於AI基礎建設初期，長線多頭趨勢不變。雖然貨幣政策與地緣風險帶來波動，但台積電核心地位無可取代。不要因短期大跌恐慌殺出甚至拉高現金，回檔洗盤正是用合理價格上車的好時機，長線仍上看五萬點。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，無視短期波動，鎖定AI產業革命核心的台積電及相關供應鏈，逢低勇敢買進。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06 下週一展望】台股進入主升段的長期多頭架構未變，長線有機會挑戰 47,000 點甚至更高！這波急殺清理了過熱籌碼，屬於中級修正。投資人應關注『兆元成交量』的過熱警訊，並緊盯台積電、聯發科等領頭羊。操作上可採取『右下角選股術』，趁大盤震盪挑選跌破淨值的價值股與具轉機題材的記憶體族群，穩穩抱住優質權值股。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，觀察集中市場與櫃買合計成交量是否達兆元警戒，運用右下角選股術逢低布局權值股。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06 下週一展望】面對近期美股費半下挫引發的台指期夜盤狂瀉逾三千點，市場極度恐慌。但股市漲多必有技術修正，我們強調「跌時重質」，趁史詩級震盪正是檢視持股體質的好時機。巴菲特說別人恐懼你要貪婪，AI基本面未變，建議汰弱留強，資金轉往具備實質獲利的優質權值股，才能在風暴中持盈保泰。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，趁恐慌性殺盤時，分批承接長線獲利穩定的優質權值股。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06 下週一展望】台股從四萬六千點高檔回落，主要受美科技股財報影響，導致AI硬體股湧現獲利了結賣壓。這屬於漲多後的健康資金輪動，並非無差別崩盤。操作上切勿盲目追高殺低，應密切觀察五日線支撐與外資籌碼變化。建議避開漲幅過大的個股，尋找低檔轉強的機器人及矽光子概念股，防守兼備才能抓住機會。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，觀察大盤五日線支撐，拉回時布局低位階、有基本面護體的防守型個股。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06 下週一展望】雖台股出現劇烈修正，但AI產業長線紅利與基本面需求依然強勁，多頭架構並未破壞。電腦展帶動的伺服器與AI商機真實存在，此次下殺是洗盤換手的絕佳時機。堅持基本面、籌碼面與技術面三合一選股，投資人勿信崩盤論，應鎖定獲利強的記憶體與AI供應鏈，逢低卡位法人布局的潛力股迎接反彈。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "【下週一操作】週一開盤若遇恐慌下殺，鎖定AI供應鏈及記憶體族群，待法人籌碼沉澱且技術面落底後逢低布局。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06 下週一展望】台指期夜盤創下狂瀉三千點的最大跌點，市場恐慌蔓延。但歷史統計六七月上漲機率高，這次急跌主要是AI熱潮後的短線籌碼換手。請嚴控資金部位，避免情緒性追殺。重點觀察電子龍頭權值股是否止穩及美股止跌訊號。資金有望輪動到轉機題材的重電與散熱族群，保持冷靜才能在危機中看見選股機會。",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，嚴控資金水位，等待台積電等權值股止穩後，再介入散熱與重電轉機股。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06 下週一展望】大盤從高點急殺，震盪劇烈，技術分析不預設立場，一切以線圖說話！指數跌破短均線顯示空方力道強，務必嚴守停損停利紀律，果斷出場且不逆勢接刀。今年選股重於大盤，透過走圖研判，尋找維持「頭頭高、底底高」多頭排列的個股。大賺小賠是核心，耐心等待底部型態確立與轉折訊號出現後再進場。",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，嚴守停損紀律，不預測低點，等待日K線出現「底底高」多頭轉折訊號再進場。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06 下週一展望】台股受國際科技股拖累與外資空單積壓，引發千點下殺。這巨幅波動正是期現貨雙刀流發揮的時機。多單務必做好部位控管與避險，切勿凹單；空手者可利用期權進行靈活操作。現貨方面，留意大盤是否在關鍵支撐收腳，等待籌碼清洗乾淨並配合操盤系統訊號，我們再順勢切入底部成型的強勢股。",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "【下週一操作】下週一開盤策略：利用期貨選擇權避險，現貨待大盤關鍵支撐不破且籌碼沉澱後，順勢切入。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06 下週一展望】面對史上最大單日跌幅，錢線百分百多位來賓達成共識：這波是多頭總修正，主要來自日圓套利平倉與美股科技股財報不如預期。恐慌指數VIX雖飆高，但AI長線基本面未變。短線大盤需觀察半年線支撐與融資減肥狀況。切忌盲目摸底，保留現金，待量縮止跌、權值股（如台積電、聯發科）不再破底後，才是中長線投資人進場的好時機。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "【下週一操作】週一盤中密切監控大盤與權值股，觀察半年線支撐與融資減肥，待權值股不再破底、爆量收下影線時再分批進場。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06 下週一展望】我之前就說過台股有回檔風險，不排除跌幅達到六千點！這次千點下殺、多殺多的恐慌盤已經應驗我的預警。大家千萬不要『無腦多』去接刀！雖然長線看好 AI 與 HBM（高頻寬記憶體）的產能排擠效應，但現在一定要嚴守紀律。以技術線型為進出依據，保留現金，等恐慌落底後再布局有爆發力的記憶體族群。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "【下週一操作】週一開盤切忌追高或盲目接刀，嚴格執行停損停利，不無腦接刀。待技術線型止穩後，再進場布局受惠於 HBM 排擠效應的記憶體族群。"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06 下週一展望】這次股災完全印證了我們事前針對『宏觀數據轉折』與『市場高點循環』的警告。通膨壓力、能源價格與科技股信心動搖，是這波劇烈修正的主因。接下來市場將面臨 6 月中旬聯準會 (FOMC) 會議及四巫日結算的雙重變數。請嚴格控管資金與槓桿風險，切忌在恐慌中盲目殺低，但也絕不可隨意接刀，避免將資金重壓單一題材。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "【下週一操作】週一盤中密切監控大盤與權值股，嚴格控管資金與槓桿，靜待 FOMC 會議與四巫日變數釐清後再行動作。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06 下週一展望】此次「黑色星期五」拋售並非結構性金融危機，而是市場在長期高點後，對流動性預期與 AI 估值邏輯的「秩序重定價」。美國就業與製造業 PMI 顯示經濟基本面仍具韌性。本週市場的真正考驗在於即將公布的 CPI、PPI 通膨數據，以及聯準會新主席 Kevin Warsh 的政策表態。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "【下週一操作】週一盤中密切監控大盤與權值股，在 CPI 與聯準會態度明朗前，避免過度押注單一方向，留意美元與美債殖利率的波動指引。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06 下週一展望】恐慌性殺盤當下往往伴隨著籌碼清洗。這波急跌主要來自非農數據帶來的升息擔憂，但長期投資邏輯不變。不要單純去猜底，也不要被市場短期的恐慌洗出去。現在是檢視持股體質的好時機，把資金集中在真正有護城河的優質公司上。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "【下週一操作】週一開盤切忌跟著恐慌盲目砍在低點，應回歸『跌時重質』的原則，專注於基本面強健的龍頭股。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06 下週一展望】此次半導體與 AI 族群的回檔，源於漲多後的估值修正與部分記憶體觸頂疑慮。但從基本面來看，AI 基礎建設的需求並未消失。這波史詩級修正反而讓那些具有長線成長動能的產業（如 AI 伺服器與半導體設備）估值回到合理區間。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "【下週一操作】週一盤中密切監控大盤與權值股，保留現金彈性，切勿急著逆勢攤平，待市場止穩後再重新布局錯殺的長線績優股。"
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
