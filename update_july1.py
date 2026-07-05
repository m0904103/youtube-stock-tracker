import json
import codecs
import re

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    data = json.load(f)

data["last_updated"] = "2026-07-01 18:50:00"
data["derivatives"]["date"] = "2026-07-01 (Q3 開局盤前)"

data["nlp_sentiment"]["retail_forums"] = [
    {
        "name": "PTT Stock (台股)",
        "score": 35,
        "label": "獲利了結 (居高思危)",
        "color": "#f39c12"
    },
    {
        "name": "Reddit r/stocks (美股)",
        "score": 40,
        "label": "Q3 審慎開局 (科技股盤前偏弱)",
        "color": "#f39c12"
    },
    {
        "name": "Macro News",
        "score": 30,
        "label": "靜待 Fed (Kevin Warsh) 談話",
        "color": "#f39c12"
    }
]

data["nlp_sentiment"]["macro_confidence"] = {
        "score": 45,
        "label": "Q3 開局投資人轉趨謹慎，納指期貨盤前跌幅逾 0.5%，靜待製造業數據與 Fed 談話"
}

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'最後自動更新:\s*2026-07-\d{2}\s*\d{2}:\d{2}', '最後自動更新: 2026-07-01 18:50', html)
html = re.sub(r'script\.js\?v=\d+', 'script.js?v=120', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
