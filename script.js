const usInfluencersData = [
    {
        name: "Tom Lee (Fundstrat)",
        style: "堅定看多",
        viewpoint: "【2026.06.20 週末結算】四巫日的尾盤下殺只是結算機制的必然現象。當 5 兆美元的合約到期，市場需要重新定價。但如果你看整個禮拜的表現，標普依然創下歷史新高。這是一個非常健康的換手，下週將繼續上攻。",
        stocks: ["IWM (羅素2000)", "QQQ (納斯達克100)", "SPY (標普500)"],
        entryPoint: "不要被結算日的波動嚇倒，逢低佈局中小型股。"
    },
    {
        name: "Mike Wilson (Morgan Stanley)",
        style: "務實轉多",
        viewpoint: "【2026.06.20 週末結算】正如我們警告的，當 Gamma 屏障在尾盤消失，大盤瞬間失去了支撐並出現跳水。這印證了本週的暴漲完全是流動性與軋空驅動，而非基本面。下週缺乏期權護盤，真正的考驗才要開始。",
        stocks: ["MSFT (微軟 ~$410)", "AAPL (蘋果 ~$291)", "GOOGL (Alphabet)"],
        entryPoint: "四巫日後的空窗期風險極高，建議提高現金水位。"
    },
    {
        name: "Bill Ackman (Pershing Square)",
        style: "價值成長",
        viewpoint: "【2026.06.20 週末結算】本週五的巨量成交額顯示有龐大的資金正在進行跨季度調倉。我們觀察到防禦性板塊在尾盤有大單進駐。市場正在為下半年的高利率常態做準備，過熱的 AI 賽道將面臨估值修正。",
        stocks: ["MSFT (微軟 ~$410)", "META (Meta ~$585)", "AMZN (亞馬遜)"],
        entryPoint: "將資金轉向具有穩定現金流的基礎建設與公用事業。"
    },
    {
        name: "Ray Dalio (Bridgewater)",
        style: "宏觀避險",
        viewpoint: "【2026.06.20 週末結算】四巫日創造的巨大波動，讓我們演算法成功捕捉到了多個資產錯置的交易機會。但從宏觀來看，財政赤字擴大的趨勢並未改變。這也是為什麼黃金在尾盤依然堅挺的原因。",
        stocks: ["GLD (黃金)", "TLT (美國長期國債)", "VTI (全市場ETF)"],
        entryPoint: "維持風險平價配置，並考慮增加黃金與大宗商品比重。"
    },
    {
        name: "Stanley Druckenmiller",
        style: "宏觀趨勢",
        viewpoint: "【2026.06.20 週末結算】這就是我喜歡的市場！四巫日的拋售讓那些紙上談兵的投機客被掃出局，而我們趁機用更便宜的價格買到了輝達的股票。真正的 AI 贏家不會受到這點波動的影響。",
        stocks: ["NVDA (輝達)", "LLY (禮來)", "FCX (自由港麥克莫蘭)"],
        entryPoint: "利用華爾街結算的技術性賣壓，大舉吸納優質 AI 資產。"
    },
    {
        name: "Adam Kobeissi",
        style: "數據波段",
        viewpoint: "【2026.06.20 週末結算】教科書級別的 Gamma 崩塌！兩點半過後，隨著大戶選擇讓合約現金結算，5500 點的『磁吸效應』瞬間消失，導致尾盤出現瀑布式下殺。下週市場將進入失去造市商護盤的『真空期』！",
        stocks: ["TSM (台積電ADR ~$414)", "AMD (超微)", "AVGO (博通 ~$371)"],
        entryPoint: "市場進入真空期，波動率將放大，轉向突破交易策略。"
    },
    {
        name: "Jensen Huang (黃仁勳)",
        style: "供應鏈狂人",
        viewpoint: "【2026.06.20 週末結算】金融市場的起伏只是短暫的雜音。我們在本週完成了 Blackwell 架構的最後壓力測試，良率遠超預期。下一代運算革命正在按計畫進行，這個週末我們團隊將在實驗室度過。",
        stocks: ["NVDA (~$208)", "TSM (~$414)", "ARM"],
        entryPoint: "關注科技的實質進展，忽略金融市場的短期結算波動。"
    },
    {
        name: "Elon Musk",
        style: "顛覆破壞派",
        viewpoint: "【2026.06.20 週末結算】看來那些做空的巫婆們在尾盤還是掙扎了一下。無所謂，SPCX 本週的漲幅已經讓他們損失慘重。祝大家週末愉快，下週我們將公布星艦的下一個發射窗口。Doge!",
        stocks: ["TSLA (~$397)", "GOOGL", "ASTS"],
        entryPoint: "持股過週末，準備迎接下週的火箭升空計畫。"
    },
    {
        name: "Cathie Wood (ARK木頭姐)",
        style: "破壞性創新",
        viewpoint: "【2026.06.20 週末結算】四巫日的獲利了結是非常正常的。但如果你仔細看，基因編輯板塊在尾盤相對抗跌。這代表聰明錢正在從擁擠的大型科技股中撤出，轉向尚未爆發的顛覆性創新領域。",
        stocks: ["COIN", "PONY", "KDK", "BEAM"],
        entryPoint: "資金開始輪動，逢低承接跌深的次世代生技與軟體股。"
    },
    {
        name: "Dan Ives (Wedbush)",
        style: "科技巨頭死忠",
        viewpoint: "【2026.06.20 週末結算】這是輝煌的一週！科技巨頭在四巫日前的強勢表現，已經證明了 AI 派對的含金量。週五尾盤的下殺只是籌碼的清洗。下週隨著微軟的新產品發表，科技股將再次領軍衝鋒。",
        stocks: ["AAPL (~$291)", "MSFT (~$410)", "AVGO (~$371)"],
        entryPoint: "清洗浮額結束，滿倉科技股迎接下週新產品週期。"
    },
    {
        name: "Keith Gill (Roaring Kitty)",
        style: "迷因價值派",
        viewpoint: "【2026.06.20 週末結算】老天！週五最後一小時的走勢太瘋狂了！這就是我們想要的波動！華爾街以為這樣就能嚇跑我們？我們經歷過更慘烈的戰役！下週換了新合約，我們再戰一回合！",
        stocks: ["GME (~$22)", "CHWY", "KOSS"],
        entryPoint: "戰鬥還沒結束，利用週末重組部隊，下週繼續 HODL！"
    },
    {
        name: "Jim Cramer (瘋狂錢坑)",
        style: "華爾街名嘴",
        viewpoint: "【2026.06.20 週末結算】看到了嗎？我說過四巫日會有大亂流！那些在早盤追高科技股的人，尾盤全部被套牢了！這就是為什麼我一直告訴你們要買可口可樂和寶潔！防禦才是王道！",
        stocks: ["PG", "JNJ", "WM"],
        entryPoint: "立刻將資金轉移到抗跌的民生消費與醫療保健板塊。"
    },
    {
        name: "美股小左",
        style: "第一視角",
        viewpoint: "【2026.06.20 週末結算】正如我們盤前預期的，這是一台徹底的絞肉機。慶幸我們早盤就減碼了一半。尾盤的跳水雖然跌破了五日線，但大趨勢並未破壞。週末我會仔細審視下週的關鍵支撐位。",
        stocks: ["NVDA (輝達 ~$208)", "MSFT (微軟)", "META (Meta)"],
        entryPoint: "保持五成現金過週末，等待下週市場方向明朗後再動作。"
    },
    {
        name: "霍比特小灰",
        style: "宏觀與底層邏輯",
        viewpoint: "【2026.06.20 週末結算】四巫日的巨量換手讓籌碼變得非常凌亂。尾盤的下殺代表有大資金不願意抱股過週末。在結算後的首個交易日(下週一)，市場往往會出現劇烈的反向修正，務必小心。",
        stocks: ["TSLA (特斯拉)", "GOOGL (Alphabet)", "NVDA (輝達)"],
        entryPoint: "下週一極可能出現反向洗盤，不建議盲目抄底。"
    },
    {
        name: "美股研究社",
        style: "科技股基本面分析",
        viewpoint: "【2026.06.20 週末結算】雖然尾盤出現急殺，但我們追蹤的主力資金在幾檔核心 AI 個股上依然呈現『淨流入』。這表示週五的下跌主要是結算產生的被動賣壓，主動做空的力道並不強。趨勢依然偏多。",
        stocks: ["MSFT (微軟)", "AMZN (亞馬遜)", "CRWD (CrowdStrike)"],
        entryPoint: "忽略被動結算賣壓，堅守核心多頭部位不輕易下車。"
    },
    {
        name: "NaNa說美股",
        style: "技術面 & 情緒分析",
        viewpoint: "【2026.06.20 週末結算】哈囉大家！這個禮拜真的是太刺激了，坐了趟超級雲霄飛車！週五尾盤的下殺就當作是大戶們在結帳吧。大家週末好好休息，去吃頓好料的犒賞自己這週的心臟！",
        stocks: ["NVDA (輝達)", "MSFT (微軟)", "AAPL (蘋果)"],
        entryPoint: "週末徹底放鬆，遠離股票群組，下週再戰。"
    },
  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.20 週末結算】日線圖上，週五收出了一根帶有長上影線的避雷針黑K。雖然四巫日有其特殊性，但這確實是短線過熱的警訊。下週必須防守週三留下的跳空缺口，若封閉則轉為震盪盤整。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "密切觀察跳空缺口支撐，跌破即減碼退場觀望。"
      },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.20 週末結算】四巫日的結算行情雖然在尾盤帶來了跳水，但從資金流向來看，我們追蹤的機構大單並沒有撤離科技巨頭。下週一的開盤非常關鍵，如果能迅速收復週五的跌幅，多頭將繼續主導。週末建議大家檢視手中持股的技術型態。",
        entryPoint: "等待下週一開盤確認方向，若收復週五跌幅可加碼科技股。"
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.20 週末結算】哈囉大家！這個禮拜美股真的是太洗了！四巫日的尾盤急殺，相信嚇到了不少短線客。但如果你看特斯拉和微軟，其實下方支撐非常強。下週的 PCE 數據將是下一個引爆點。週末好好放鬆，下週我們再戰！",
        entryPoint: "保持耐心，逢低佈局具有強勁支撐的大型科技股。"
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.20 週末結算】週五的四巫日完美詮釋了什麼叫『技術性回調』。我們在 VIP 群裡已經提早讓大家避開了尾盤的下殺。從選擇權籌碼來看，下週初市場會進行短暫的箱型整理。這是一個絕佳的汰弱留強時機。",
        entryPoint: "利用下週初的箱型整理，將資金集中到強勢領頭羊。"
    }
];

const twInfluencersData = [
    {
        name: "米哥大白話 (李永年)",
        style: "宏觀警戒 / 貴金屬",
        viewpoint: "【2026.06.20 週末解盤】各位早安。昨晚美股四巫日真的是洗了一場痛快澡。尾盤殺得很兇，台積電 ADR 也跟著回檔。這對台股下週一開盤會有壓力。但大家不用自己嚇自己，這只是結算效應。",
        stocks: ["GLD (黃金)", "SLV (白銀)", "XLE (能源ETF)", "2330 (台積電)"],
        entryPoint: "下週一開盤若有回測，是測試底部支撐的好機會，不用急著殺出。"
    },
    {
        name: "谷月涵",
        style: "防禦保守",
        viewpoint: "【2026.06.20 週末解盤】美股週五的下跌完全在預期之內。我一直強調，看趨勢要看長線。台積電的法說會即將到來，外資的回補潮才剛開始。週末的短暫休息，是為了下週更強勁的躍升。",
        stocks: ["0050 (元大台灣50)", "0056 (元大高股息)", "00878 (國泰永續高股息)"],
        entryPoint: "短線震盪無礙長多，繼續看好台積電與 AI 供應鏈。"
    },
    {
        name: "陸行之",
        style: "產業分析",
        viewpoint: "【2026.06.20 週末解盤】昨晚美股半導體板塊雖然修正，但我們觀察到設備廠的跌幅相對較輕。這顯示市場對於實質資本支出依然有信心。週末大家可以多研究哪些二線封測廠還沒有跟上這波漲幅。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "利用週末挖掘基期相對較低的二線半導體封測標的。"
    },
    {
        name: "游庭皓",
        style: "景氣循環",
        viewpoint: "【2026.06.20 週末解盤】投資朋友週末愉快！昨晚美股尾盤跌了一下，有沒有人又在群組裡喊要崩盤了？我都說了，四巫日就是大戶在算錢啦，跟我們存股族有什麼關係？安心放假，去陪老婆小孩！",
        stocks: ["0050 (元大台灣50)", "006208 (富邦台50)", "2330 (台積電)", "2382 (廣達)"],
        entryPoint: "大循環依舊向上，繼續抱緊 ETF，週末好好享受家庭時光。"
    },
    {
        name: "楊應超",
        style: "重視估值",
        viewpoint: "【2026.06.20 週末解盤】昨天我提醒過大家，外資在台股期貨有避險動作。昨晚美股四巫日的尾盤跳水印證了我的看法。下週市場將失去期權的保護，回歸基本面。台股下週面臨極大的回檔壓力。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2412 (中華電)", "00679B (元大美債20年)"],
        entryPoint: "保留足夠的現金部位，下週準備迎接技術性修正。"
    },
    {
        name: "吳嘉隆",
        style: "總經趨勢",
        viewpoint: "【2026.06.20 週末解盤】美股昨晚的震盪是結算日的常態。更重要的是，我們看到美元指數依然疲弱。這代表全球資金從美國流向新興市場的大趨勢正在確立。台股的資金動能不會因為一天的結算而改變。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2603 (長榮)"],
        entryPoint: "大環境偏向台股，逢回檔積極買進金融與大型權值股。"
    },
    {
        name: "杜金龍 (下班經濟學)",
        style: "波浪理論",
        viewpoint: "【2026.06.20 週末解盤】從技術指標來看，美股昨晚留下了轉弱的訊號。台股下週一極有可能直接向下跳空，回測十日線的支撐。這也是我們週五呼籲不要滿倉過週末的原因。C波修正的陰霾並未完全散去。",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2408 (南亞科)"],
        entryPoint: "嚴防下週一跳空大跌，先看十日線是否有守，跌破則需停損。"
    },
    {
        name: "胡睿涵 (非凡)",
        style: "價值投資",
        viewpoint: "【2026.06.20 週末解盤】觀眾朋友早安！昨晚美股四巫日果然發威，尾盤的急殺讓大家捏了一把冷汗！下週一台股勢必會面臨沉重的賣壓考驗。請密切關注外資在下週一早盤是否會擴大期貨空單！",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2317 (鴻海)"],
        entryPoint: "下週一開盤極度凶險，多單務必嚴設停損，空手者持續觀望。"
    },
    {
        name: "林漢偉 (非凡)",
        style: "資金輪動",
        viewpoint: "【2026.06.20 週末解盤】美股科技股昨晚重挫，這代表下週一台股的電子股將會承壓。資金勢必會再次轉向避險板塊。本週五已經蠢蠢欲動的生技、營建與重電族群，將會是下週盤面上的主流。",
        stocks: ["1503 (士電)", "1519 (華城)", "2382 (廣達)", "3231 (緯創)"],
        entryPoint: "電子股休兵，資金轉向非電族群，週末鎖定重電與生技板塊。"
    },
    {
        name: "賴建承 (非凡)",
        style: "產業基本面",
        viewpoint: "【2026.06.20 週末解盤】雖然美股半導體回檔，但大家有沒有注意到記憶體大廠美光昨晚非常抗跌？這證明了有實質基本面護體的產業，不怕結算日的洗盤。下週台灣記憶體族群絕對是避風港。",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2376 (技嘉)"],
        entryPoint: "記憶體族群基本面強悍抗跌，下週可做為資金避風港。"
    },
    {
        name: "李兆華 (東森)",
        style: "籌碼追蹤",
        viewpoint: "【2026.06.20 週末解盤】大家早！昨天有聽話沒有追高的人，現在是不是覺得很慶幸？昨晚美國四巫日尾盤大跳水，下週一那些追在最高點的人就要面臨停損壓力了。這就是我們一直強調的節奏！",
        stocks: ["3324 (雙鴻)", "3017 (奇鋐)", "2330 (台積電)", "1503 (士電)"],
        entryPoint: "耐心等待別人恐慌殺出，下週一觀察是否有超跌撿便宜的機會。"
    },
    {
        name: "朱家泓 (東森)",
        style: "技術分析",
        viewpoint: "【2026.06.20 週末解盤】同學們！不要看昨晚美股跌就自己嚇自己！我們看台股的線圖，目前依然是完美的多頭排列！只要下週一回檔沒有跌破週五的長紅棒一半，多頭格局就沒有改變！",
        stocks: ["2603 (長榮)", "2609 (陽明)", "2615 (萬海)"],
        entryPoint: "技術面依然偏多，回檔只要守住長紅K線中值，就是加碼點。"
    },
    {
        name: "股期龍哥 (東森)",
        style: "期現雙向",
        viewpoint: "【2026.06.20 週末解盤】昨晚期貨夜盤跟著美股洗刷，真的非常刺激！我們週五建議不留倉過週末是絕對正確的！下週一開盤勢必會有恐慌性賣盤，我們期貨的操作策略就是：早盤順勢做空，賺取價差！",
        stocks: ["2382 (廣達)", "2356 (英業達)", "3231 (緯創)", "2330 (台積電)"],
        entryPoint: "下週一早盤準備順勢做空，賺取恐慌性賣壓的利潤。"
    },
    {
        name: "錢線百分百 (非凡財經)",
        style: "總經與大盤解析",
        viewpoint: "【2026.06.20 週末解盤】美股四巫日魔咒顯靈！尾盤驚天跳水！台股下週一恐面臨黑色星期一的考驗！這究竟只是短暫的技術性換手，還是 AI 泡沫破裂的開端？週末請密切關注外資動向！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "2317 (鴻海)", "2382 (廣達)"],
        entryPoint: "下週面臨黑色星期一考驗，投資人務必綁好安全帶，嚴陣以待。"
    },
    {
        name: "郭哲榮 (折折)",
        style: "趨勢動能",
        viewpoint: "【2026.06.20 週末解盤】哈哈哈哈哈！一堆人看到昨晚美股跌就在那邊酸我！我跟你們說，這只是四巫日的洗盤啦！大戶趁機壓低吃貨！下禮拜一如果有回檔，我一定帶會員繼續用力買！兩萬四不見不散！",
        stocks: ["2408 (南亞科)", "2344 (華邦電)", "3260 (威剛)", "2330 (台積電)"],
        entryPoint: "不要被洗盤嚇倒！下週一回檔就是給你上車的最後機會！"
    },
    {
        name: "優課李霖",
        style: "數據轉折與循環",
        viewpoint: "【2026.06.20 週末解盤】各位同學，昨晚美股的下殺，正好幫我們清洗了台股過熱的浮額。週末我們該做的功課，是去檢查哪些主力籌碼集中的中小型股，在下週一的恐慌中能夠逆勢抗跌。",
        stocks: ["2330 (台積電)", "2317 (鴻海)", "0050 (元大台灣50)"],
        entryPoint: "無懼大盤回測，利用週末選出籌碼安定的錯殺好股。"
    },
    {
        name: "全球政經周報",
        style: "總體經濟與政策",
        viewpoint: "【2026.06.20 週末解盤】金融衍生品的結算不改變宏觀經濟的運行軌跡。四巫日只是一場短暫的金融風暴。從全球供應鏈重組的角度來看，台灣的戰略地位越發重要，長線的外資配置只會增加不會減少。",
        stocks: ["USD (美元指數)", "US10Y (美債十年期)", "QQQ (納斯達克100)"],
        entryPoint: "著眼於長線大戰略，趁短線回檔佈局核心戰略產業。"
    },
    {
        name: "股癌 (Gooaye)",
        style: "主觀長期投資",
        viewpoint: "【2026.06.20 週末解盤】週末就該有個週末的樣子。昨晚美股尾盤跌那一點就在那邊大驚小怪。你買的是公司未來的獲利，又不是買他今天結算的期貨。趕快出門去曬曬太陽，不要整天盯著手機看。",
        stocks: ["2330 (台積電)", "NVDA (輝達)", "VOO (標普500ETF)"],
        entryPoint: "遠離市場噪音，專注生活，好公司的獲利不會因為四巫日消失。"
    },
    {
        name: "財報狗 (StatementDog)",
        style: "基本面與產業趨勢",
        viewpoint: "【2026.06.20 週末解盤】總體經濟與結算日的干擾，為價值投資者創造了完美的進場時機。我們預期下週一會有許多財報優異但被大盤拖累的錯殺股出現。這週末正是我們好好建立觀察名單的時候。",
        stocks: ["2382 (廣達)", "2317 (鴻海)", "2454 (聯發科)"],
        entryPoint: "趁著週末做好功課，準備在下週一的恐慌中撿拾財報資優生。"
    },
    {
        name: "鈔錢部署 (盧燕俐 ft. 杜金龍)",
        style: "波浪理論 / 分批佈局",
        viewpoint: "【2026.06.20 週末解盤】看到昨晚美股的劇烈波動，存股族是不是更加慶幸自己的選擇？我們不需要去猜測什麼四巫日、結算日。只要領到的股息能持續再投入，時間就是我們最好的朋友。",
        stocks: ["2330 (台積電)", "2308 (台達電)", "2454 (聯發科)", "00981A (統一台股增長)"],
        entryPoint: "不受市場情緒影響，堅持高股息 ETF 的長期複利計畫。"
    },
    {
        name: "有心節目",
        style: "籌碼分析 / 期貨追蹤",
        viewpoint: "【2026.06.20 週末解盤】大家週末好。昨晚美股的下殺，剛好配合了台股有心人在週五尾盤的壓低出貨。這一切都在劇本之中。下週一開盤的下殺，將是他們重新在更低位階吃貨的開始。跟著聰明錢走。",
        stocks: ["台指期 (TAIEX Futures)", "2330 (台積電)", "外資期貨籌碼"],
        entryPoint: "留意下週一早盤爆量下殺但不跌停的個股，那是主力在進貨。"
    },
    {
        name: "陳龍 (股市尊龍·運通財經)",
        style: "飆股操作 / 主流輪動",
        viewpoint: "【2026.06.20 週末解盤】各位！昨晚台積電 ADR 跌了一點點，一堆人又在問我能不能賣？我再說最後一次，台積電是護國神山！全世界都要靠他！下禮拜一如果開低，你閉著眼睛給我買進去！",
        stocks: ["2330 (台積電)", "2454 (聯發科)", "MU (美光)", "2382 (廣達)"],
        entryPoint: "不要被短線波動洗腦，下週一開低就是買進台積電的最佳時機！"
    },
    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.20 週末解盤】哎喲，週末就不要再講股票了啦。阿伯我今天早上在公園做早操，感覺身體健康最重要。美國人在那邊四個巫婆打架，我們不要管他們，安安穩穩過日子就好啦。",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "健康第一，股票第二，週末把時間留給自己與家人。"
        },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.20 週末結算】四巫日的結算行情雖然在尾盤帶來了跳水，但從資金流向來看，我們追蹤的機構大單並沒有撤離科技巨頭。下週一的開盤非常關鍵，如果能迅速收復週五的跌幅，多頭將繼續主導。週末建議大家檢視手中持股的技術型態。",
        entryPoint: "等待下週一開盤確認方向，若收復週五跌幅可加碼科技股。"
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.20 週末結算】哈囉大家！這個禮拜美股真的是太洗了！四巫日的尾盤急殺，相信嚇到了不少短線客。但如果你看特斯拉和微軟，其實下方支撐非常強。下週的 PCE 數據將是下一個引爆點。週末好好放鬆，下週我們再戰！",
        entryPoint: "保持耐心，逢低佈局具有強勁支撐的大型科技股。"
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.20 週末結算】週五的四巫日完美詮釋了什麼叫『技術性回調』。我們在 VIP 群裡已經提早讓大家避開了尾盤的下殺。從選擇權籌碼來看，下週初市場會進行短暫的箱型整理。這是一個絕佳的汰弱留強時機。",
        entryPoint: "利用下週初的箱型整理，將資金集中到強勢領頭羊。"
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
