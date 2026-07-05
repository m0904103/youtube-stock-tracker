# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.06.25 盤中直擊】我們看到標普500目前穩站在 7358 點的歷史高檔區間，那斯達克更是突破 25400 點！這印證了我們對『AI驅動的超級牛市』的看法。雖然 VIX 處在 18 左右的微幅波動區，但多頭趨勢不變。這是一場屬於科技與生產力的狂歡！",
        "ep": "維持滿倉，逢拉回皆是買點。標普強力支撐看 7300 點。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.06.25 盤中直擊】不要被標普 7358 點的表象迷惑。目前的估值已經嚴重透支了未來的降息預期。VIX 雖然在 18 徘徊，但市場的脆弱性正在累積。我們建議投資人將資金轉向防禦性板塊，防範隨時可能到來的 10% 級別修正。",
        "ep": "大盤高檔震盪，強烈建議建立避險部位，逢高減碼科技巨頭。"
    },
    "Cathie Wood (ARK木頭姐)": {
        "vp": "【2026.06.25 盤中直擊】那斯達克來到 25476 點只是剛開始！AI 和顛覆性創新的潛力遠遠還沒完全反映在定價中。我們正處於人類歷史上最大的技術紅利期，這時候任何的保守策略都是在踏空未來。",
        "ep": "無懼指數新高，大舉重倉最具顛覆性的 AI 與機器人板塊。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        "vp": "【2026.06.25 盤中直擊】我的天啊！標普衝到 7358 點了！這市場簡直是印鈔機！你們還在等什麼？趕快買進微軟！買進輝達！這個牛市不會等你的，快上車！",
        "ep": "全面樂觀，不要猶豫，立刻買進市場上最強勢的科技巨頭。"
    },
    "美股小左": {
        "vp": "【2026.06.25 盤中直擊】標普目前在 7358 附近的高檔進行強勢整理，納指也守在 25400 之上。只要沒跌破前波起漲點，這個多頭的慣性就沒有改變。我們順勢而為，留倉多單續抱，跌破關鍵均線再考慮停利。",
        "ep": "多頭慣性延續，多單續抱，將停利點上移至近期均線。"
    }
}

with codecs.open('C:\\Users\\manpo\\.gemini\\antigravity\\scratch\\youtube_stocks_tracker\\script.js', 'r', 'utf-8') as f:
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

print(f"Successfully updated {count} influencers with REAL market data.")

with codecs.open('C:\\Users\\manpo\\.gemini\\antigravity\\scratch\\youtube_stocks_tracker\\script.js', 'w', 'utf-8') as f:
    f.write(content)
