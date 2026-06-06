const usInfluencersData = [
    {
        name: "小左美股第一视角",
        style: "價格行為 / 技術分析",
        viewpoint: "【2026.06 最新更新】警告科技股高位風險，認為市場空頭力量積蓄，切勿盲目抄底。對 SpaceX 估值泡沫提出質疑，並深入點評 DELL 的回調風險與 AAPL 轉向 AI 眼鏡的戰略。",
        stocks: ["NVDA (輝達)", "DELL (戴爾)", "AAPL (蘋果)", "AVGO (博通)"],
        entryPoint: "強調勿憑感覺抄底，嚴格依賴價格行為與關鍵支撐阻力區操作，並務必設好止損點。"
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
        viewpoint: "【2026.06 最新更新】精闢點評 6 月初半導體大震盪，分析 AI 伺服器與電力供應鏈的板塊快速輪動。特別提醒散戶留意 MSCI 權重調整帶來的流動性錯殺與潛在的「黃金坑」機會。",
        stocks: ["NVDA (輝達)", "INTC (英特爾)", "AI 電力板塊"],
        entryPoint: "關注因機構被動調倉造成的錯殺機會，跟隨主動型資金佈局黃金坑。"
    },
    {
        name: "美股研究社",
        style: "美股分析 / 價值發現",
        viewpoint: "【2026.06 深度覆核】標普500歷經強勁反彈後，6月市場對潛在回調存在分歧，但歷史顯示行情尚未結束。資金流向分化，AI基礎設施與半導體硬體鏈表現突出，而純應用軟體族群承壓。投資人應關注地緣政治與Fed政策，區分市場雜訊與基本面，只要獲利未大幅下修，多頭趨勢依然有強大支撐。",
        stocks: ["MRVL (邁威爾)", "AVGO (博通)", "SPY (標普500 ETF)"],
        entryPoint: "避免重倉估值過高的純軟體股，將資金轉向具實質獲利支撐的AI硬體基礎設施與大盤ETF。"
    },
    {
        name: "游庭皓的財經皓角",
        style: "總體經濟 / 產業分析",
        viewpoint: "【2026.06 深度覆核】台韓股市受費半帶動領漲全球，資金集中於半導體與AI基礎建設。雖然6月晶片股面臨賣壓，台積電短期跑輸大盤，但獲利成長與基本面仍有支撐。市場呈現類股輪動，有利多頭延續。投資人不應盲目追價，需以EPS成長為核心進行資產配置，並留意缺乏AI題材的弱勢市場風險。",
        stocks: ["2330 (台積電)", "0050 (元大台灣50)", "2317 (鴻海)"],
        entryPoint: "遇大盤回檔且基本面不變時分批低接，並利用類股輪動佈局具EPS成長潛力的半導體鏈。"
    },
    {
        name: "尼可拉斯楊Live精",
        style: "宏觀經濟 / 科技鏈分析",
        viewpoint: "【2026.06 深度覆核】6月波動性較大，面臨地緣政治與流動性壓力。儘管市場擔憂AI需求放緩，但AI長期投資故事未結束，6至11月反而是一個重要的開倉窗口。焦點應放在GPU算力、ASIC自研晶片、HBM及先進封裝等核心領域。切忌全倉買入，應保留資金彈性應對震盪，把握下跌時的建倉機會。",
        stocks: ["SMH (半導體ETF)", "2330 (台積電)", "2454 (聯發科)", "3711 (日月光投控)"],
        entryPoint: "將資金分為5至8份，利用6月至11月的市場波動與下跌，分批建倉AI核心供應鏈龍頭。"
    },
    {
        name: "Tom Lee (Fundstrat)",
        style: "數據驅動 / 策略輪動",
        viewpoint: "【2026.06 深度覆核】Lee 提出當前市場正處於「三階段週期」的第二階段，即美國期中選舉前的「消化期」或回調期。他警告，聯準會政策不確定性、IPO 與大量股票解禁帶來的籌碼供應壓力，以及能源價格引發的通膨逆風，將在短期內為股市帶來壓力。然而，他對 2026 年之後的長期走勢極度樂觀。因應當前震盪，其基金的策略已轉向防禦，重點增持具備高品質、持久增長力與抗跌韌性的藍籌股與醫療保健巨頭。",
        stocks: ["LLY (禮來)", "ORCL (甲骨文)", "UNH (聯合健康)"],
        entryPoint: "短期採取防禦姿態應對市場消化期，聚焦具備持久增長力與抗跌韌性的優質藍籌股。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞創新 / 長線押注",
        viewpoint: "【2026.06 深度覆核】美國經濟正步入生產力大爆發的「黃金時代」，如同壓縮的彈簧般釋放積壓需求。隨著 AI、機器人與區塊鏈技術的快速演進，將帶來強烈的通縮壓力並推動實質 GDP 大幅成長。儘管市場偶有波動，我們仍將大舉加碼大型科技股與數位金融，並積極汰弱留強，將資金集中於具有長期顛覆性潛力的創新企業，以迎接未來數年的爆發性成長。",
        stocks: ["GOOGL (Alphabet)", "META (Meta)", "AVGO (博通)", "COIN (Coinbase)"],
        entryPoint: "趁市場震盪時加碼 AI 軟體平台與區塊鏈資產，專注於長線具備破壞性創新的標的。"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "趨勢跟隨 / 逆向指標",
        viewpoint: "【2026.06 深度覆核】Cramer 在2026年6月警告目前的市場環境相當「險惡」，企業必須達到14%的獲利成長才能支撐現有估值。他強烈關注AI板塊，警告科技巨頭可能陷入由自尊心驅動的「魯莽」資料中心資本支出競賽，並指出市場對財報不如預期的容忍度極低。在具體選股上，他近期仍強烈看多輝達（NVDA），但對美國銀行（BAC）等傳統金融股給出了不建議買進的評價。",
        stocks: ["NVDA (輝達)", "BAC (美國銀行)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "參考其對核心AI龍頭的看多觀點作為市場情緒參考，但對於其強烈看空或不推薦的標的，可反向尋找潛在的錯殺反彈機會。"
    },
    {
        name: "Dan Niles (華爾街頂級科技投資人)",
        style: "超級循環 / 科技多頭",
        viewpoint: "【2026.06 深度覆核】AI 革命目前才剛進入「第三局上半」，市場對於科技板塊的預期仍有龐大的上行空間。近期 Anthropic 等 AI 巨頭的 IPO 申請將重新激發市場活力，為停滯的初次上市市場打開大門。無論是半導體硬體還是雲端軟體，資本支出超級循環仍在持續，這標誌著美國三十年來在科技領導力上的絕對優勢，建議投資人持續擁抱這波 AI 狂潮。",
        stocks: ["MSFT (微軟)", "AMD (超微)", "IBM (國際商業機器)", "PL (行星實驗室)"],
        entryPoint: "看好 AI 應用從硬體擴散至軟體服務，建議在財報季雜音引發回檔時逢低買進。"
    },
    {
        name: "JC財經女孩 Jenny",
        style: "美股投資 / 趨勢成長",
        viewpoint: "【2026.06 深度覆核】美股主軸仍圍繞AI基礎設施與大型科技股的資本支出回報。雖然市場對高估值與降息預期反覆感到擔憂，但只要企業獲利未見下修，趨勢成長股仍將維持動能。6月蘋果WWDC大會提升了邊緣AI期待值。投資人應過濾總經雜訊，專注於財報優於預期、具備強大護城河的龍頭企業。",
        stocks: ["AAPL (蘋果)", "NVDA (輝達)", "MSFT (微軟)", "QQQ (納斯達克100 ETF)"],
        entryPoint: "鎖定財報亮眼且具定價權的科技巨頭，在市場因短期利空回調至重要支撐線時建立長期部位。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因驅動 / 價值投資",
        viewpoint: "【2026.06 深度覆核】雖然自2024年後保持相對低調，但他在五月於社群媒體發布又迅速刪除的神秘貼文（包括戴著紅色頭巾的貓咪圖片），仍引發了市場對遊戲驛站（GameStop）的劇烈投機與股價波動。目前他尚未公開揭露2026年最新的持倉變化，但散戶社群仍在積極推測他的下一步行動。市場分析師警告，跟隨這種基於迷因猜測的投資存在極高風險，投資人應警惕由社群情緒而非基本面驅動的市場劇烈震盪。",
        stocks: ["GME (遊戲驛站)", "AMC (AMC娛樂)", "CHWY (Chewy)"],
        entryPoint: "密切追蹤其社群媒體的暗示與異常選擇權活動。在迷因股爆發高波動性前，尋找具備軋空潛力的技術面突破點。"
    },
    {
        name: "Unusual Whales",
        style: "數據驅動 / 籌碼分析",
        viewpoint: "【2026.06 深度覆核】平台持續追蹤2026年6月的「巨鯨」機構資金動向與暗池交易。他們特別強調觀察六月份到期選擇權中「成交量（Volume）遠大於未平倉合約（OI）」的異常現象，這通常預示大戶正在建立新的關鍵部位。透過分析合約是在買入價或賣出價成交，他們協助散戶判斷「聰明錢」的看多或看空情緒，從而在波動的夏季市場中尋找潛在的趨勢反轉與重大方向性突破訊號。",
        stocks: ["SPY (標普500指數ETF)", "QQQ (納斯達克100指數ETF)", "NVDA (輝達)"],
        entryPoint: "利用平台篩選器鎖定成交量異常放大且方向明確的期權合約。跟隨機構大戶的資金流向進行順勢波段操作。"
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
        style: "華爾街多頭 / 盈利驅動",
        viewpoint: "【2026.06 深度覆核】Wilson 持續看好美股後市，近期將標普500指數的2026年底目標價上調至 8,000 點，並給出 2027 年中 8,300 點的預期。他強調這是一場由「企業獲利」驅動的多頭行情，而非單純的估值擴張。儘管市場面臨地緣政治風險、AI 顛覆與私募信貸疑慮，但他認為這些利空已充分反映在定價中，近期的震盪屬於健康的技術性回調。在板塊配置上，他強烈建議超配工業、金融與非必需消費品等週期性股票。",
        stocks: ["XLI (工業板塊ETF)", "XLF (金融板塊ETF)", "XLY (非必需消費品ETF)"],
        entryPoint: "把握大盤震盪回調的機會，逢低買入具有強勁獲利支撐的週期性類股與金融股。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "超級循環 / 科技多頭",
        viewpoint: "【2026.06 深度覆核】AI 革命目前才剛進入「第三局上半」，市場對於科技板塊的預期仍有龐大的上行空間。近期 Anthropic 等 AI 巨頭的 IPO 申請將重新激發市場活力，為停滯的初次上市市場打開大門。無論是半導體硬體還是雲端軟體，資本支出超級循環仍在持續，這標誌著美國三十年來在科技領導力上的絕對優勢，建議投資人持續擁抱這波 AI 狂潮。",
        stocks: ["MSFT (微軟)", "AMD (超微)", "IBM (國際商業機器)", "PL (行星實驗室)"],
        entryPoint: "看好 AI 應用從硬體擴散至軟體服務，建議在財報季雜音引發回檔時逢低買進。"
    },
    {
        name: "Adam Kobeissi & Marko Kolanovic",
        style: "總經分析 / 波段操作",
        viewpoint: "【2026.06 深度覆核】Kobeissi 近期指出市場正經歷重大的資金輪動，機構為籌集 SpaceX IPO 資金，正將獲利了結的資金從AI半導體領頭羊轉向傳統藍籌股。他認為科技板塊可能面臨5-10%的健康回檔，並視為絕佳買點。此外，面對6月初強勁就業數據引發的聯準會延後降息擔憂，他提醒投資人應將焦點轉移至AI基礎設施與能源瓶頸等長線發展議題，以應對可能加劇的市場波動。",
        stocks: ["NVDA (輝達)", "AVGO (博通)", "MRVL (邁威爾)", "XOM (埃克森美孚)"],
        entryPoint: "耐心等待AI半導體族群出現5-10%的健康回檔時分批承接，同時佈局受惠於資金輪動與AI基建需求的高股息藍籌股。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "高度集中 / 品質至上",
        viewpoint: "【2026.06 深度覆核】Ackman 認為當前市場對晶片與能源等「熱門新事物」的盲目追逐，重現了2000年網路泡沫的羊群效應，導致資金過度集中。他堅信市場錯殺了真正具備高品質的大型科技巨頭，這些基石企業的估值正處於被低估的狀態。與此同時，他對部分依賴壟斷定價的軟體股抱持謹慎態度，認為 AI 浪潮帶來了潛在的顛覆風險。整體而言，其策略是避開短線炒作，專注於少數具有長期護城河且被市場低估的科技權值股。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "META (Meta)"],
        entryPoint: "趁市場資金過度追逐晶片板塊時，逢低吸納被錯殺的高品質大型科技巨頭。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀流動性 / 靈活輪動",
        viewpoint: "【2026.06 深度覆核】Druckenmiller 強調市場的驅動力來自流動性而非單純的盈利。他對高企的債務水平與緊縮的流動性提出警告，認為市場隨時面臨劇烈波動。在投資組合上，他已大幅減持或清倉估值過高的大型科技股（如 Alphabet 及 Amazon），並將資金轉向基礎設施及代理式 AI（Agentic AI）所需的 CPU 相關企業，同時重倉基因檢測等精準醫療板塊與能源股，在「殘酷」且充滿不確定性的市場中尋求不對稱的回報機會。",
        stocks: ["INTC (英特爾)", "ARM (安謀)", "NTRA (Natera)"],
        entryPoint: "避開估值過高的傳統科技巨頭，轉向佈局代理式AI硬體設施與具備爆發潛力的醫療股。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀防禦 / 避險至上",
        viewpoint: "【2026.06 深度覆核】Dalio 對美國經濟與股市表達了強烈的防禦性悲觀態度，直指當前 AI 投資熱潮展現出「典型的泡沫特徵」。他警告美國國債已越過「不歸路」，無以為繼的財政擴張將如同「動脈斑塊」般阻礙經濟。他預期聯準會最終可能被迫重演1930年代的「金融壓抑」政策以壓低殖利率。因此，他呼籲投資者看透名目收益的假象，將目光轉向全球市場（如中國）以及能夠對抗法幣貶值與債務危機的實體避險資產。",
        stocks: ["GLD (黃金ETF)", "MCHI (MSCI中國ETF)", "VWO (新興市場ETF)"],
        entryPoint: "將資金撤出過熱的美國科技泡沫，防禦性配置黃金及非美市場資產以對抗法幣貶值。"
    },
    {
        name: "Elon Musk",
        style: "顛覆未來 / 破壞創新",
        viewpoint: "【2026.06 深度覆核】重點已轉向推動 SpaceX 創紀錄的 IPO 案與太空 AI 數據中心的願景，致力於將企業打造成重塑人類文明的科技巨獸。針對特斯拉，市場的焦點不應只局限於短期電動車銷量與獲利，而必須看重其在全自動駕駛（FSD）、人形機器人與 AI 領域的龐大潛力。未來經濟增長將由 AI 與永續能源驅動，高資本支出的顛覆性科技仍是最值得押注的方向。",
        stocks: ["TSLA (特斯拉)", "DELL (戴爾)", "SMCI (美超微)"],
        entryPoint: "無視短期財務數據波動，鎖定具有改變人類生活方式潛力的高資本支出科技龍頭。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "AI教父 / 算力霸權",
        viewpoint: "【2026.06 深度覆核】目前 AI 基礎設施的建置正在加速而非放緩，這場「新運算革命」仍處於早期階段。下半年的供應鏈產能已經翻倍以應對極度緊缺的需求，預計到 2027 年的市場需求將遠比 2026 年龐大。軟體公司也將迎來前所未有的黃金時代。全球資本投資將持續湧入，AI 晶片供應鏈與生態系（特別是台灣的合作夥伴）將扮演不可或缺的關鍵角色。",
        stocks: ["NVDA (輝達)", "MRVL (邁威爾)", "TSM (台積電)", "ARM (安謀)"],
        entryPoint: "以AI基礎設施為核心，逢低佈局晶片製造與高階封裝等關鍵供應鏈，長線持有。"
    },
    {
        name: "霍比特小灰 (UponlyTech)",
        style: "美股宏觀 / 投資人解讀",
        viewpoint: "【2026.06 深度覆核】市場高度聚焦AI概念是否過熱，多位知名投資人對AI真實需求與集中度風險提出警告。6月焦點在於半導體的季節性波動及蘋果WWDC帶來的轉折，同時SpaceX動態揭示了AI時代的能源瓶頸。市場情緒高昂但伴隨脆弱性，投資者需在參與科技創新的同時，對宏觀環境保持警惕。",
        stocks: ["AAPL (蘋果)", "TSLA (特斯拉)", "NVDA (輝達)"],
        entryPoint: "保持居高思危的心態，不盲目追逐熱點，配置具防禦性或受益於AI基礎設施瓶頸解決方案的標的。"
    }
];

const twInfluencersData = [
    {
        name: "杜金龍 (下班經濟學)",
        style: "技術分析 / 歷史籌碼",
        viewpoint: "【2026.06 下班經濟學追蹤】從歷史波段與乖離率判斷，大盤雖在兩萬點之上震盪，但長線資金仍充裕。目前屬於技術面的強勢整理期，提醒投資人注意月線乖離過大時的拉回風險，並善用波段高低點來回操作。",
        stocks: ["2330 (台積電)", "0050 (台灣50)", "2317 (鴻海)"],
        entryPoint: "利用歷史均線乖離率抓波段高低點，避開乖離過大的過熱股。"
    },
    {
        name: "楊應超 (下班經濟學)",
        style: "外資視角 / 科技硬體",
        viewpoint: "【2026.06 下班經濟學追蹤】以外資視角分析 Computex 展會，強調台灣在 AI 硬體製造上的不可取代性。看好台積電與鴻海在輝達供應鏈中的吃重角色，但提醒投資人須關注 AI 應用端的實際營收轉化率，而非僅停留在伺服器建置。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "抱緊具備國際競爭力的 AI 供應鏈龍頭，並觀察下一波 AI 應用軟體落地。"
    },
    {
        name: "吳嘉隆 (下班經濟學)",
        style: "總體經濟 / 地緣政治",
        viewpoint: "【2026.06 下班經濟學追蹤】分析聯準會降息預期反覆與中美地緣政治角力。認為美國高利率環境將成為常態，這會壓抑部分無獲利支撐的科技股。台灣夾在兩大強權中，必須尋找具備去中化與國防自主題材的「韌性產業」。",
        stocks: ["2618 (長榮航)", "1515 (力山)", "國防軍工板塊"],
        entryPoint: "宏觀環境下重資產與高利息題材，避開中美衝突敏感的地緣政治高風險股。"
    },
    {
        name: "股海老牛 (下班經濟學)",
        style: "價值投資 / 高股息",
        viewpoint: "【2026.06 下班經濟學追蹤】推崇「步步高升」的存股哲學。針對 6 月的高股息 ETF 換股潮，建議投資人不要盲目追逐高殖利率，而是要檢視成分股的 EPS 成長性與填息能力。尋找被錯殺的價值型金控與冷門成長股。",
        stocks: ["00878 (國泰永續高股息)", "2891 (中信金)", "2882 (國泰金)"],
        entryPoint: "鎖定具備穩定配息與 EPS 成長的價值股，在除權息前逢低卡位。"
    },
    {
        name: "陳唯泰 (下班經濟學)",
        style: "籌碼分析 / 產業趨勢",
        viewpoint: "【2026.06 下班經濟學追蹤】透視三大法人進出與主力籌碼。指出 6 月投信作帳行情已提前開跑，建議跟隨「投信連買且均線多頭」的內資偏好股。特別看好因 AI 電力吃緊而受惠的重電與綠能族群。",
        stocks: ["1519 (華城)", "1503 (士電)", "2308 (台達電)"],
        entryPoint: "緊盯投信與外資的同步買超清單，尋找主力底部建倉的轉機股。"
    },
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
        viewpoint: "【2026.06 最新更新】認為目前台股僅是「泡沫初期」，崩盤危機尚未浮現。強烈看好記憶體 (DRAM/NAND) 報價上漲，但也警告投資人必須嚴守紀律，切勿重蹈航運股覆轍。",
        stocks: ["2408 (南亞科)", "8299 (群聯)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "記憶體族群以技術面為進出依歸，AI 組裝廠則觀察資金回流與量能變化。"
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
        viewpoint: "【2026.06 廣泛巡檢】維持既有長線邏輯，未發布重大策略轉向。台股 2026 狂飆，個人選擇在 5 月底進行適度的「獲利了結」，確保流動性，應對可能的高位震盪。",
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
        viewpoint: "【2026.06 最新更新】(EP667) 討論 Computex 期間老黃點名 Marvell 的光纖共識，以及 AI 戰場從資料中心正式延伸至 AIPC (地端模型運算)。認為被動元件進入橫盤整理屬健康狀態。",
        stocks: ["MRVL (邁威爾)", "AIPC 概念股", "功率半導體"],
        entryPoint: "觀察 AI 基礎建設的第二波挑戰與資金擴散效應，尋找尚未完全爆發的地端 AI 應用。"
    },
    {
        name: "財報狗 (Statementdog)",
        style: "基本面 / 數據驅動",
        viewpoint: "【2026.06 廣泛巡檢】維持既有長線邏輯，未發布重大策略轉向。受惠於代理式 AI 加速資料產生，預期 2026 年下半年 HDD、先進製程 DRAM 與半導體設備將迎來強勁需求。",
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
        viewpoint: "【2026.06 廣泛巡檢】維持既有長線邏輯，未發布重大策略轉向。最新盤後實戰：焦點轉向台積電供應鏈、二極體族群，並強調 AI 伺服器代工廠與記憶體板塊的輪動。在大盤高檔震盪中，建議運用大數據挑選具備實質營收的中小型與低基期輪動股。",
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
        style: "AI教父 / 算力霸權",
        viewpoint: "【2026.06 深度覆核】目前 AI 基礎設施的建置正在加速而非放緩，這場「新運算革命」仍處於早期階段。下半年的供應鏈產能已經翻倍以應對極度緊缺的需求，預計到 2027 年的市場需求將遠比 2026 年龐大。軟體公司也將迎來前所未有的黃金時代。全球資本投資將持續湧入，AI 晶片供應鏈與生態系（特別是台灣的合作夥伴）將扮演不可或缺的關鍵角色。",
        stocks: ["NVDA (輝達)", "MRVL (邁威爾)", "TSM (台積電)", "ARM (安謀)"],
        entryPoint: "以AI基礎設施為核心，逢低佈局晶片製造與高階封裝等關鍵供應鏈，長線持有。"
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
