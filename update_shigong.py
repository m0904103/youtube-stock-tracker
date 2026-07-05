import json
import codecs
import re

updates = {
    "米哥大白話 (李永年)": {
        "vp": "【2026.07.03 獅公傳奇最新解析】台股大盤持續震盪走高，但受韓國記憶體股大跌影響，擔憂高檔需求承接力不足。未來漲價空間恐受壓縮，短線資金轉趨保守，需密切關注經濟數據。",
        "ep": "現階段建議採取「少量操作」原則，以「低進高出」的短線操作為主，並居高思危避免過度投入資金。"
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

print(f"Successfully updated {count} influencers with Shigong updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html version
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=132', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
