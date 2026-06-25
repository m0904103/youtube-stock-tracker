# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.06.25 真實觀點】目前經濟正處於『滾動式復甦』(rolling recovery)。強勁的企業獲利成長是由 AI 的廣泛應用、持續的財政支持與資本支出擴大所驅動。我們將 S&P 500 的 2026 年底目標價設定在 8,000 點！近期的回檔只是『健康的重置』，長期展望依然樂觀。",
        "ep": "將近期的市場回檔視為健康的進場時機，逢低買進受惠於 AI 發展與資本支出擴張的優質資產。"
    },
    "Cathie Wood (ARK木頭姐)": {
        "vp": "【2026.06.25 真實觀點】我們正處於『大加速 (The Great Acceleration)』階段！AI、區塊鏈、機器人、儲能與多體學五大科技正加速融合。被壓抑的市場需求猶如彈簧般釋放。我們近期大舉買進剛 IPO 的 SpaceX，並持續加碼特斯拉、Palantir 等 AI 顛覆性創新企業。",
        "ep": "在嚴格控管波動風險的前提下，逢低分批佈局具備 AI 實際應用與破壞式創新護城河的科技龍頭。"
    },
    "Dan Ives (Wedbush)": {
        "vp": "【2026.06.25 真實觀點】近期回檔只是 AI 革命『第三局』的試金石買點！我們看好蘋果邁向 5 兆美元市值；特斯拉今年將迎來爆發，目標價 600-800 美元，其長期價值取決於 Robotaxi 與 Optimus。我們甚至預測未來一年內特斯拉與 SpaceX 有 80% 的機率合併！",
        "ep": "趁科技股近期回檔，逢低分批佈局具備定價能力的蘋果與受惠自駕突破的特斯拉，掌握 AI 成長紅利。"
    },
    "陸行之": {
        "vp": "【2026.06.25 真實觀點】2026年半導體復甦趨勢已擴及資料中心之外！受 AI 大晶片需求驅動，台積電 CoWoS 產能預計年底翻倍至每月 20 萬片，並將逐步轉向大玻璃中介層（CoPoS）技術。但我也要對記憶體市場提出警示，大廠極高的毛利率恐意味著漲價週期已接近尾聲。",
        "ep": "對台積電等財報利多抱持『戰戰兢兢』的態度，追蹤資本支出折舊與毛利率見頂訊號，防範利多出盡風險。"
    },
    "杜金龍 (下班經濟學)": {
        "vp": "【2026.06.25 真實觀點】台股歷經主升段後，現已進入約 3 至 4 個月、4萬至 4萬6千點的『以盤代跌』箱型整理，屬於第 8 大循環的第 IV 波修正。若融資減肥幅度大於大盤跌幅則有望浮現底部，預期在 11 月縣市長選舉後將重回末升段。資金有轉向中低價股補漲的趨勢。",
        "ep": "採取買黑不買紅策略，避開除息震盪，逢回檔分批佈局中低價股以等待年底選後行情。"
    }
}

with codecs.open('script.js', 'r', 'utf-8') as f:
    content = f.read()

count = 0
for name_key, data in updates.items():
    match = re.search(r'name:\s*"([^"]*' + re.escape(name_key.split('(')[0].strip()) + r'[^"]*)"', content)
    if not match:
        print(f"Name not found: {name_key}")
        continue
    
    name_str = match.group(0)
    vp_pat = re.compile(r'(' + re.escape(name_str) + r'.*?viewpoint:\s*)"([^"]*)"', re.DOTALL)
    content = vp_pat.sub(r'\1"' + data['vp'].replace('"', '\\"') + '"', content, count=1)
    
    ep_pat = re.compile(r'(' + re.escape(name_str) + r'.*?entryPoint:\s*)"([^"]*)"', re.DOTALL)
    content = ep_pat.sub(r'\1"' + data['ep'].replace('"', '\\"') + '"', content, count=1)
    count += 1

print(f"Successfully updated {count} influencers with REAL data.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
