import json
import codecs
import re

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    data = json.load(f)

data["last_updated"] = "2026-07-02 00:20:00"
data["derivatives"]["date"] = "2026-07-01 (美股盤中)"

data["nlp_sentiment"]["retail_forums"] = [
    {
        "name": "Reddit r/stocks (美股)",
        "score": 35,
        "label": "科技股回檔 (NVDA跌)",
        "color": "#e74c3c"
    },
    {
        "name": "Macro News",
        "score": 50,
        "label": "就業降溫 (降息預期升)",
        "color": "#f39c12"
    },
    {
        "name": "PTT Stock (台股)",
        "score": 40,
        "label": "觀望美股科技股殺盤",
        "color": "#f39c12"
    }
]

data["nlp_sentiment"]["macro_confidence"] = {
        "score": 40,
        "label": "Q3首日盤中呈現板塊輪動，科技巨頭(NVDA/AMD)大跌逾2%，道瓊逆勢收紅，製造業與就業數據降溫推升降息預期"
}

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'最後自動更新:\s*2026-07-\d{2}\s*\d{2}:\d{2}', '最後自動更新: 2026-07-02 00:20', html)
html = re.sub(r'script\.js\?v=\d+', 'script.js?v=122', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
