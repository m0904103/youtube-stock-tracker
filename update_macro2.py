import json
import codecs
import re

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    data = json.load(f)

data["last_updated"] = "2026-06-27 02:00:00"
data["derivatives"]["date"] = "2026-06-26"
data["nlp_sentiment"]["retail_forums"] = [
    {
        "name": "PTT Stock (台股)",
        "score": 40,
        "label": "AI基建成本疑慮 (觀望)",
        "color": "#f39c12"
    },
    {
        "name": "Reddit r/stocks (美股)",
        "score": 30,
        "label": "科技股賣壓 (NVDA $194)",
        "color": "#e74c3c"
    },
    {
        "name": "Xueqiu (中概股)",
        "score": 25,
        "label": "錯失恐懼 (FOMO)",
        "color": "#f39c12"
    }
]
data["nlp_sentiment"]["macro_confidence"] = {
        "score": 28,
        "label": "AI資料中心成本擔憂引發獲利了結"
}

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'最後自動更新:\s*2026-06-\d{2}\s*\d{2}:\d{2}', '最後自動更新: 2026-06-27 02:00', html)
html = re.sub(r'script\.js\?v=\d+', 'script.js?v=115', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
