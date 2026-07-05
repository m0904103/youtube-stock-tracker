import json
import codecs
import re

updates = {
    "美股小左": {
        "vp": "【2026.07.03 最新解析】7/1~7/2最新影片探討NVDA化身「AI央行」；提及Michael Burry警告半導體偏離均線65%，並分析MU記憶體短缺及多檔科技巨頭走勢。",
        "ep": "留意半導體板塊乖離率過高的回調風險，AI概念股（如NVDA、MU）切勿盲目追高，應嚴設停利停損。"
    },
    "NaNa說美股": {
        "vp": "【2026.07.03 最新解析】7/1~7/2連續發布影片。探討Meta外賣算力事件及AI軟硬體板塊的資金輪動，並針對美國獨立日假期前夕的市場波動進行深度解析。",
        "ep": "節前市場波動加劇且AI板塊輪動頻繁，建議投資人謹慎控管倉位以防禦風險。"
    },
    "游庭皓": {
        "vp": "【2026.07.03 最新解析】依據最新觀點，AI投資已正式進入「挑選時代」，不再是閉眼買就能上漲。科技與晶片族群面臨獲利了結壓力，資金正逐漸輪動至傳統板塊。",
        "ep": "建議停止無腦追高AI概念股，精選具備實質獲利支撐的標的，並適度將資金分散配置。"
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

print(f"Successfully updated {count} influencers with July 3 morning updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=126', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
