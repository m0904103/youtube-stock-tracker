import json
import codecs
import re

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    data = json.load(f)

data["last_updated"] = "2026-06-29 06:00:00"
data["derivatives"]["date"] = "2026-06-29 (Pre-market)"

data["nlp_sentiment"]["retail_forums"] = [
    {
        "name": "PTT Stock (台股)",
        "score": 15,
        "label": "亞股血洗 (恐慌蔓延)",
        "color": "#e74c3c"
    },
    {
        "name": "Reddit r/stocks (美股)",
        "score": 25,
        "label": "Risk-Off (避險升溫)",
        "color": "#e74c3c"
    },
    {
        "name": "Crypto Twitter",
        "score": 17,
        "label": "極度恐懼 (Extreme Fear)",
        "color": "#e74c3c"
    }
]

data["nlp_sentiment"]["macro_confidence"] = {
        "score": 20,
        "label": "科技股拋售潮與地緣政治(荷姆茲海峽)雙重打擊，黃金避險升溫"
}

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'最後自動更新:\s*2026-06-\d{2}\s*\d{2}:\d{2}', '最後自動更新: 2026-06-29 06:15', html)
html = re.sub(r'script\.js\?v=\d+', 'script.js?v=117', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
