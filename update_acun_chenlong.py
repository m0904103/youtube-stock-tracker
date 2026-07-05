import json
import codecs
import re

updates = {
    "阿村伯": {
        "vp": "【2026.07.02 最新解析】阿村伯近期探討作帳行情差異、群創 FOPLP 轉型題材，並警告台股面臨邪惡第五波末升段，呼籲留意三個危險訊號。",
        "ep": "建議嚴控資金水位並緊盯大盤反轉訊號，可適度關注具轉型題材的低基期類股，切忌盲目追高。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        "vp": "【2026.07.02 最新解析】最新節目已於今日播出，但目前尚未有具體的文字解盤重點與更新內容釋出。",
        "ep": "請維持原策略觀望，或留意官方最新影片。"
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

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=125', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
