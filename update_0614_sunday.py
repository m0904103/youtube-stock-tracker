# -*- coding: utf-8 -*-
import re

US_UPDATES = [
  {
    "name": "Tom Lee",
    "viewpoint": "【2026.06.14 週日兵推】AI與太空雙引擎正推動美股進入史詩級超漲期。儘管CPI達4.2%，但Warsh首度FOMC不會冒險破壞市場動能，點陣圖料將溫和。MSCI納入SPCX與NVDA新CPU將引爆被動買盤與FOMO情緒。",
    "entryPoint": "逢低買進標普500指數與AI基礎設施概念股，無視通膨雜音。"
  },
  {
    "name": "Mike Wilson",
    "viewpoint": "【2026.06.14 週日兵推】市場對SPCX與NVDA的狂熱完全掩蓋了宏觀風險。4.2%的CPI加上Warsh的鷹派壓力，週三點陣圖極可能意外上調終點利率。MSCI納入SPCX是情緒強弩之末，隨時引發流動性修正。",
    "entryPoint": "減碼高估值科技股，增持防禦性板塊與現金以應對FOMC震盪。"
  },
  {
    "name": "Bill Ackman",
    "viewpoint": "【2026.06.14 週日兵推】馬斯克達成兆美元里程碑是資本市場奇蹟，但聯準會正面臨信譽危機。Warsh必須在週三對4.2%的通膨展現鐵腕，否則通膨預期將失控。雖然AI長期抗通膨，但短期必須應對物價壓力。",
    "entryPoint": "利用短期公債殖利率曲線的倒掛或利率選擇權進行避險操作。"
  },
  {
    "name": "Ray Dalio",
    "viewpoint": "【2026.06.14 週日兵推】我們正處於典範轉移節點。NVDA的Vera CPU代表代理式AI進入實體經濟，將徹底改變生產力。然而，高通膨與Warsh新政可能引發短期債務與流動性錯配，須平衡科技與實體資產。",
    "entryPoint": "建立全天候投資組合，同時配置頂尖AI企業與抗通膨實體資產。"
  },
  {
    "name": "Stanley Druckenmiller",
    "viewpoint": "【2026.06.14 週日兵推】NVDA量產Vera CPU證明了他們在代理式AI時代的絕對護城河。雖然4.2%的CPI讓Warsh的FOMC充滿變數，可能導致市場劇烈波動，但在技術革命面前，做空這些偉大公司是愚蠢的。",
    "entryPoint": "抱緊NVDA等AI核心標的，並透過做空長期美債來對沖FOMC風險。"
  },
  {
    "name": "Adam Kobeissi",
    "viewpoint": "【2026.06.14 週日兵推】SPCX近20%的漲幅與MSCI緊急納入顯示投機情緒達極點。下週焦點完全在Warsh的點陣圖與4.2% CPI。歷史顯示，新任主席面對高通膨首秀，VIX往往會出現兩位數的飆升。",
    "entryPoint": "買入VIX買權或跨式選擇權以對沖下週二與週三的極端波動。"
  },
  {
    "name": "Jim Cramer",
    "viewpoint": "【2026.06.14 週日兵推】馬斯克成為兆美元富豪！MSCI納入SPCX是史無前例的催化劑！黃仁勳的Vera和Neura證明AI剛開始。別管那見鬼的4.2% CPI和Warsh，聯準會不敢摧毀這偉大的牛市！",
    "entryPoint": "趁週一開盤直接敲進SPCX與NVDA，別被宏觀數據嚇跑！"
  },
  {
    "name": "Cathie Wood",
    "viewpoint": "【2026.06.14 週日兵推】NVDA進軍實體機器人與SPCX壯舉，完美印證了破壞性創新。代理式AI將帶來指數級生產力爆發。4.2%的CPI只是滯後數據，科技通縮海嘯即將到來，Warsh的緊縮終將轉向。",
    "entryPoint": "大舉加碼ARK系列基金中的AI機器人與太空探索核心持股。"
  },
  {
    "name": "Dan Ives",
    "viewpoint": "【2026.06.14 週日兵推】這是科技史的「蒙娜麗莎時刻」。馬斯克的兆美元光環與SPCX將點燃被動資金狂歡，NVDA的Vera則是AI最新烈酒。對於FOMC，Warsh的吠聲會大於咬人，AI超級循環勢不可擋。",
    "entryPoint": "將科技巨頭視為避風港，全力做多SPCX與NVDA。"
  },
  {
    "name": "Unusual Whales",
    "viewpoint": "【2026.06.14 週日兵推】期權市場瘋了。SPCX有大量末日Call異常買盤，暗池湧入。同時針對FOMC，聰明錢正大量佈局SPY防禦性Put。市場預期Warsh面對4.2% CPI會給出極端鷹派點陣圖，多空將極度劇烈交戰。",
    "entryPoint": "緊盯SPCX的Gamma擠壓效應，並利用SPY的Put期權進行尾部風險保護。"
  },
  {
    "name": "Roaring Kitty",
    "viewpoint": "【2026.06.14 週日兵推】（附上一張貓咪穿著太空衣，駕駛搭載輝達標誌機器人盯著聯準會印鈔機的梗圖）火星風景不錯，機器人已準備好接管工作。誰在乎那個叫Warsh畫的點陣圖？我只喜歡這檔股票。🚀🐱🤖",
    "entryPoint": "鑽石手抱緊SPCX和散戶熱門股，不要被市場的恐慌洗下車。"
  },
  {
    "name": "Dan Niles",
    "viewpoint": "【2026.06.14 週日兵推】NVDA的Vera CPU確實擴大邊緣AI優勢，SPCX也有被動買盤。但我對下週極度謹慎，4.2%的CPI意味著Warsh沒有鴿派空間，點陣圖恐顯示更長高利率。高估值科技股將面臨無風險利率上升壓力。",
    "entryPoint": "採取長短多空策略，做多NVDA等真AI受惠者，放空估值過高的SaaS股。"
  }
]

TW_UPDATES = [
  {
    "name": "游庭皓",
    "viewpoint": "【2026.06.14 週日兵推】台股四萬三千點高檔震盪，台積電秒填息展現韌性，但下週 Warsh 首秀的 FOMC 才是關鍵。SPCX 納入 MSCI 與輝達 Vera 晶片是長線利多，但短線需防獲利了結，指數空間有限，選股才是核心。",
    "entryPoint": "逢高適度減碼，保留現金等 FOMC 會後方向確認再加碼。"
  },
  {
    "name": "郭哲榮(折折)",
    "viewpoint": "【2026.06.14 週日兵推】我早就說過了嘛！輝達佈局機器人、SPCX大漲還要納入MSCI，這就是大趨勢！台股四萬三算什麼？台積電秒填息就是最強護城河，不要被 FOMC 嚇到，AI 跟低軌衛星才是王道，現在不上車要等何時？",
    "entryPoint": "閉著眼睛買進 SPCX 概念股跟輝達機器人供應鏈就對了！"
  },
  {
    "name": "股癌",
    "viewpoint": "【2026.06.14 週日兵推】週末新聞有夠多，SPCX 噴快 20% 又進 MSCI，輝達 Vera 晶片跟砸錢投 Neura，這都是 Agentic AI 真正落地的訊號。台股大家都在怕 FOMC，但好公司拉回就是給你撿的，少在那邊猜大盤漲跌。",
    "entryPoint": "挑選有實質受惠 Vera 晶片或機器人的標的，分批打散佈局。"
  },
  {
    "name": "有心節目",
    "viewpoint": "【2026.06.14 週日兵推】週末兩大重磅：SPCX 閃電納入 MSCI 必引發被動資金狂潮；輝達 Vera 晶片問世宣告代理式 AI 元年展開，搭配 14 億注資 Neura，AI 機器人產業鏈成定局。Warsh 的 FOMC 若放鴿，台股將再攻新高。",
    "entryPoint": "鎖定 SPCX 供應鏈及 AI 機器人概念股，逢回勇敢承接。"
  },
  {
    "name": "陳龍",
    "viewpoint": "【2026.06.14 週日兵推】各位投資朋友，雖然 SPCX 與輝達週末利多頻傳，台積電也強勢填息，但務必注意下週 FOMC 變數。指數來到四萬三千點歷史天價區，追高風險極大。利多往往是主力出貨的掩護，切勿盲目追高。",
    "entryPoint": "嚴控持股水位在五成以下，避開漲幅過大的 AI 股，轉進防禦型標的。"
  },
  {
    "name": "米哥大白話",
    "viewpoint": "【2026.06.14 週日兵推】大白話告訴你，週末消息就是資金方向！SPCX 納入 MSCI 肯定有被動買盤，輝達搞 Vera 晶片跟機器人，AI 還是主旋律。別管 Warsh 講什麼，台積電填息就代表外資沒跑，跟著大資金走準沒錯。",
    "entryPoint": "鎖定有實績的低軌衛星與 AI 機器人強勢股，短線順勢操作。"
  },
  {
    "name": "鈔錢部署",
    "viewpoint": "【2026.06.14 週日兵推】台股站穩 43,000，台積電秒填息顯示長線護國神山屹立不搖。週末輝達在代理式 AI 與機器人的佈局，及 SPCX 納入 MSCI，都彰顯科技趨勢不可逆。面對下週 FOMC，定期定額 ETF 才是最穩健策略。",
    "entryPoint": "持續定期定額台股半導體市值型 ETF 及美股科技 ETF，長線抱牢。"
  },
  {
    "name": "美股研究社",
    "viewpoint": "【2026.06.14 週日兵推】SPCX 暴漲且火速納入 MSCI，將帶來龐大被動買盤。NVDA 推出 Vera 晶片並重金投資 Neura，顯示護城河已從算力延伸至 Agentic AI 與實體機器人。下週 Warsh 的前瞻指引將是科技股估值重塑的關鍵。",
    "entryPoint": "逢低買入 NVDA 買權，並密切關注 SPCX 納入 MSCI 後的流動性溢價。"
  },
  {
    "name": "美股小左",
    "viewpoint": "【2026.06.14 週日兵推】技術面來看，SPCX 跳空突破盤整，MSCI 消息提供下檔支撐；NVDA 雖僅微漲，但 Vera 晶片與機器人是強烈基本面催化劑。下週 Warsh 的 FOMC 是最大變數，大盤若遇壓回撤，將是絕佳建倉時機。",
    "entryPoint": "等待 FOMC 會議後的大盤明確方向，突破關鍵壓力位後右側追擊。"
  },
  {
    "name": "NaNa說美股",
    "viewpoint": "【2026.06.14 週日兵推】週末美股圈都被 SPCX 和 NVDA 洗版啦！SPCX 納入 MSCI 絕對是大事件。NVDA 的 Vera 晶片和機器人佈局讓 AI 故事繼續發燒！雖然下週有 Warsh 的 FOMC 考驗，但科技巨頭的底氣還是很足的喔！",
    "entryPoint": "利用選擇權 Sell Put 策略在支撐位佈局 NVDA，穩健收取權利金。"
  },
  {
    "name": "霍比特小灰",
    "viewpoint": "【2026.06.14 週日兵推】市場情緒被 SPCX 和輝達的利多點燃。SPCX 入 MSCI 帶來流動性狂歡，而輝達 Vera 晶片精準卡位 Agentic AI 賽道，投資德國機器人是戰略大棋。不過 Warsh 首次 FOMC 勢必給出新指引，需防震盪。",
    "entryPoint": "核心倉位續抱 NVDA，衛星倉位可短打 SPCX 相關動能股並對沖大盤。"
  },
  {
    "name": "貝拉聊財經",
    "viewpoint": "【2026.06.14 週日兵推】週末最重磅就是 SPCX 獲 MSCI 納入，將強制被動基金建倉。NVDA 推出 Vera 晶片並投資 Neura，象徵 AI 從軟體走向硬體實體化。下週三 Warsh 首秀 FOMC，貨幣政策基調將決定科技股估值能否維持。",
    "entryPoint": "留意 FOMC 前的避險情緒，可利用 VIX 相關產品做短期保護。"
  },
  {
    "name": "陽光財經",
    "viewpoint": "【2026.06.14 週日兵推】週末兩大主線：太空與AI。SPCX 大漲並納入 MSCI，確立商業航太投資地位；NVDA 針對代理式 AI 推出 Vera 晶片並佈局機器人，生態系更強大。下週雖有 FOMC 變數，但代表未來生產力的科技股不怕震盪。",
    "entryPoint": "逢回分批佈局 NVDA 與太空 ETF，無懼 FOMC 短線擾動。"
  },
  {
    "name": "傑夫(美股)",
    "viewpoint": "【2026.06.14 週日兵推】SPCX 的暴漲與 MSCI 納入，反映市場對顛覆性科技的追捧。NVDA 宣佈的 Vera 晶片和 Neura 投資，鞏固其在 Agentic AI 時代的壟斷地位。下週 FOMC 若能穩定利率預期，科技股將迎來新主升段。",
    "entryPoint": "聚焦 NVDA 生態系與 SPCX 強勢突破口，採取逢低買入策略。"
  }
]

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

def get_base(name):
    if '折' in name: return '折'
    if '癌' in name: return 'Gooaye'
    if 'Unusual' in name: return 'Unusual'
    if 'Niles' in name: return 'Niles'
    if 'Roaring' in name: return 'Keith'
    if '傑夫' in name: return '傑夫'
    return name

success = 0
for d in US_UPDATES + TW_UPDATES:
    base = get_base(d['name'])
    key = re.escape(base)
    
    # VP
    vp_pat = r'(name:\s*"[^"]*' + key + r'[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"'
    m = re.search(vp_pat, content)
    if m:
        content = content[:m.start(1)] + m.group(1) + '"' + d['viewpoint'] + '"' + content[m.end():]
        success += 1
    
    # EP
    ep_pat = r'(name:\s*"[^"]*' + key + r'[^"]*".*?entryPoint:\s*)"[^"]*"'
    m2 = re.search(ep_pat, content, re.DOTALL)
    if m2:
        content = content[:m2.start(1)] + m2.group(1) + '"' + d['entryPoint'] + '"' + content[m2.end():]

# ADD ALAN CHEN
if 'Alan Chen' not in content:
    alan_entry = """  },
  {
    name: "Alan Chen",
    style: "具身智能與量化交易",
    viewpoint: "【2026.06.14 週日兵推】SPCX 納入 MSCI 將驅動百億美元被動資金重置；NVDA 發布 Vera 晶片並戰略投資 Neura Robotics，標誌算力正式跨入 Agentic AI 與具身智能領域，這是變現模式的典範轉移。總經擾動不改產業巨輪方向。",
    entryPoint: "針對具身智能與低軌衛星供應鏈進行 Alpha 策略配置，無視 Beta 震盪。"
  }
];"""
    content = re.sub(r'  \}\n\];(?:(?!  \}\n\];).)*$', alan_entry, content, count=1, flags=re.DOTALL)
    print("Added Alan Chen!")

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Updates applied: {success}/26')

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'(?<=最後自動更新: )[\d\- :]+', '2026-06-14 09:01', c)
c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)
