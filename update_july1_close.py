import json
import codecs
import re

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    data = json.load(f)

data["last_updated"] = "2026-07-02 06:00:00"
data["derivatives"]["date"] = "2026-07-01 (美股收盤)"

data["nlp_sentiment"]["retail_forums"] = [
    {
        "name": "Reddit r/stocks (美股)",
        "score": 30,
        "label": "AI硬體獲利了結",
        "color": "#e74c3c"
    },
    {
        "name": "Macro News",
        "score": 55,
        "label": "通膨風險緩解 (降息預期)",
        "color": "#f39c12"
    },
    {
        "name": "PTT Stock (台股)",
        "score": 35,
        "label": "擔憂台股電子股開低",
        "color": "#e74c3c"
    }
]

data["nlp_sentiment"]["macro_confidence"] = {
        "score": 35,
        "label": "Q3首日三大指數全數收黑(納指跌0.66%)，AI硬體與記憶體板塊承壓，但聯準會言論偏鴿與製造業降溫使非科技股展現抗跌韌性"
}

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'最後自動更新:\s*2026-07-\d{2}\s*\d{2}:\d{2}', '最後自動更新: 2026-07-02 06:00', html)
html = re.sub(r'script\.js\?v=\d+', 'script.js?v=123', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
