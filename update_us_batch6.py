import json
import codecs
import re

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.07.03 最新解析】Tom Lee 於 7/2 震撼宣佈將標普年底目標由 7000 上調至 8000 點！強調多頭格局不變，持續看好科技、金融、工業、小型股及能源原物料。",
        "ep": "建議逢低佈局科技、金融、小型股及 AI 基礎建設受惠板塊。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.07.03 最新解析】Mike Wilson 於 7/2 指出美股漲勢正從熱門科技股擴散至更廣泛板塊。他警告科技股波動加劇，強調市場低估了其他板塊的獲利復甦潛力。",
        "ep": "降低 AI 科技股比重，轉向佈局非必需消費品、運輸及區域型銀行等獲利復甦板塊。"
    },
    "Elon Musk": {
        "vp": "【2026.07.03 最新解析】截至 7/3 早晨，馬斯克並未針對 Tesla Q2 超乎預期的交付數據發表新推文。其近期發言仍專注於 AI、機器人與自動駕駛戰略。",
        "ep": "交付數據超預期帶動利好，建議關注後續 AI 與自駕戰略實質進展，靜待回檔伺機佈局。"
    },
    "Jensen Huang (黃仁勳)": {
        "vp": "【2026.07.03 最新解析】黃仁勳近期持續強調「物理 AI」與機器人為下個兆元商機，並擴張南韓工程團隊佈局，推動開放權重模型策略。此外媒體熱議其無免費午餐的節儉文化。",
        "ep": "建議持續追蹤輝達在機器人領域及南韓市場的實質擴張進度，以評估相關供應鏈機會。"
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

print(f"Successfully updated {count} influencers with Batch 6 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=127', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
