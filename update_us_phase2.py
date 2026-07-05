import json
import codecs
import re

updates = {
    "Cathie Wood (ARK木頭姐)": {
        "vp": "【2026.07.05 週末最新解析】趁跌加碼近10萬股特斯拉。木頭姐認為非農放緩非衰退訊號，而是官方數據失準；實際通膨更低，市場正反映創新帶來的通縮風險，而非經濟崩盤。",
        "ep": "建議逢低分批佈局如特斯拉等具破壞性創新潛力的科技股，並留意通縮環境下的投資機會。"
    },
    "Bill Ackman (Pershing Square)": {
        "vp": "【2026.07.05 週末最新解析】本週末無針對非農數據的最新推文或言論。他近期發言主要是看好 AI 基礎設施巨頭並避開特斯拉。",
        "ep": "建議關注具備長期穩定現金流的 AI 大型科技股，逢低分批佈局。"
    },
    "Ray Dalio (Bridgewater)": {
        "vp": "【2026.07.05 週末最新解析】本週末無發布針對非農或 AI 的最新專訪。目前最新公開言論仍停留在六月初對 AI 泡沫風險的警告。",
        "ep": "在缺乏最新觀點指引下，建議暫勿盲目追高 AI 概念股，並保留現金應對不確定性。"
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

print(f"Successfully updated {count} US institutions with Phase 2 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html version
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=134', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
