import json
import codecs
import re

updates = {
    "優課李霖": {
        "vp": "【2026.07.03 盤勢追蹤】近期警告投資人面對外資空單與記憶體弱勢「小心抄底變抄家」。但 7/3 最新觀點指出「坦克線再現」，預告下週盤勢將迎來關鍵轉折。",
        "ep": "面對高空單與崩跌風險切勿盲目抄底，應靜待下週趨勢確認後再行佈局。"
    },
    "全球政經周報": {
        "vp": "【2026.07.03 盤勢追蹤】7月初指出下半年聚焦供給衝擊、央行政策與 AI 資本支出三大變數。高利率環境持續，全球經濟軟著陸機率五成。",
        "ep": "建議佈局現金流穩健的龍頭企業及中短天期高評級債券，以因應高利率環境。"
    },
    "財報狗 (StatementDog)": {
        "vp": "【2026.07.03 盤勢追蹤】7/2 探討康寧 GlassBridge 光互連技術對傳統 CPO 供應鏈的潛在衝擊。同時指出 Meta 出租算力旨在優化資本，並非 AI 需求見頂。",
        "ep": "密切關注光通訊 CPO 技術演進對既有供應鏈的影響，並伺機佈局 AI 基建標的。"
    },
    "鈔錢部署 (盧燕俐 ft. 杜金龍)": {
        "vp": "【2026.07.03 盤勢追蹤】7月初節目探討台股 7 月 V 轉走強契機、台積電法說與美國國慶影響。並深入比較台積電與聯電股價差異，剖析台達電等權值股後市。",
        "ep": "建議可運用主動式高股息 ETF 進行平衡操作，並關注台積電與台達電後市以因應波動。"
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

print(f"Successfully updated {count} influencers with Batch 12 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html version
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=131', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
