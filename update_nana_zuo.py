import json
import codecs
import re

updates = {
    "NaNa說美股": {
        "vp": "【2026.07.02 最新解析】6/30 最新影片「強撸出牛市」盤點上半年行情。核心釐清養老金季末調倉的拋售真相，並解析輝達做空傳聞、特斯拉交付預測，以及財報季前的結構性變化。",
        "ep": "財報季前夕應密切關注機構資金調倉動向，並對熱門科技股做好風險控管。"
    },
    "美股小左": {
        "vp": "【2026.07.02 最新解析】6月底最新影片聚焦晶片業「去壟斷化」趨勢，深入探討 OpenAI 與博通(AVGO)客製化晶片合作、蘋果與英特爾代工佈局，並解析美光財報及記憶體週期。",
        "ep": "關注博通與美光後續動能，留意 AI 晶片與代工板塊的資金輪動機會。"
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

print(f"Successfully updated {count} influencers with specific requested updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=124', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
