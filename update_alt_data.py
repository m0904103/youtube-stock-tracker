# -*- coding: utf-8 -*-
import json

with open('alt_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

data['last_updated'] = "2026-06-16 16:40:00"

# update DIX/GEX for the "Sell the news" reality
data['derivatives']['dix']['value'] = 38.5
data['derivatives']['dix']['status'] = "機構派發 (Distribution - Selling into strength)"
data['derivatives']['dix']['color'] = "#e74c3c"

data['derivatives']['gex']['value'] = -1.2
data['derivatives']['gex']['status'] = "Gamma轉負 (Dealer Short Gamma)"
data['derivatives']['gex']['color'] = "#e74c3c"

# update NLP
data['nlp_sentiment']['retail_forums'][0]['score'] = 80
data['nlp_sentiment']['retail_forums'][0]['label'] = "護國神山信仰 (開低走高洗盤)"

data['nlp_sentiment']['retail_forums'][1]['score'] = 35
data['nlp_sentiment']['retail_forums'][1]['label'] = "FOMC前夕觀望 (利多出盡賣壓)"

data['nlp_sentiment']['retail_forums'][2]['score'] = 40
data['nlp_sentiment']['retail_forums'][2]['label'] = "資金外溢期待 (中東地緣降溫)"

data['nlp_sentiment']['macro_confidence']['score'] = 65
data['nlp_sentiment']['macro_confidence']['label'] = "通膨降溫預期 (等待Warsh表態)"

with open('alt_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)
