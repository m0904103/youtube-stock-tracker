import json
import codecs
import re

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.07.05 週末最新解析】Tom Lee 針對疲軟非農數據表示，儘管市場可能面臨 15-20% 回調，但牛市基礎依舊穩固。Fundstrat 將標普年底目標價上調至 8000 點，持續看多。",
        "ep": "面對非農數據引發的潛在波動，建議保留資金彈性，伺機在回調時逢低佈局科技與小型股。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.07.05 週末最新解析】目前尚未發布全新報告，但他近期強烈警告科技與半導體動能已達歷史極端，面臨耗盡與震盪風險，並指出美股正進入廣泛的輪動階段。",
        "ep": "建議降低高動能科技股曝險，將資金輪動至可選消費、運輸與區域銀行等循環性板塊。"
    },
    "Elon Musk": {
        "vp": "【2026.07.05 週末最新解析】馬斯克週末強調 AI 能實現全民高收入。同時 Grok 4.5 傳進入內測，特斯拉限制第三方 AI 支出以扶持該模型；他亦預警 Optimus 初期量產將極慢。",
        "ep": "建議關注特斯拉自研 AI 生態系發展，短期留意機器人量產預期降溫帶來的股價波動。"
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

print(f"Successfully updated {count} influencers with Phase 3 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    alt = json.load(f)

alt["last_updated"] = "2026-07-05 10:00 (週末非農後重估)"
alt["derivatives"]["dix"]["value"] = 39.5
alt["derivatives"]["dix"]["status"] = "塊陶啊 / 現金為王"
alt["derivatives"]["dix"]["color"] = "#e74c3c"
alt["derivatives"]["gex"]["value"] = -1.2
alt["derivatives"]["gex"]["status"] = "塊陶啊 / 現金為王"
alt["derivatives"]["gex"]["color"] = "#e74c3c"
alt["nlp_sentiment"]["macro_confidence"]["score"] = "32 / 100"
alt["nlp_sentiment"]["macro_confidence"]["label"] = "極度悲觀 (非農爆冷恐慌)"

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(alt, f, ensure_ascii=False, indent=4)

# Update index.html version
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=133', html)
html = re.sub(r'alt_data\.json\?v=\d+', 'alt_data.json?v=133', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
