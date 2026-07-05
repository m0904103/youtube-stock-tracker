import json
import codecs
import re

updates = {
    "Ray Dalio (Bridgewater)": {
        "vp": "【2026.07.02 最新解析】達里歐警告 AI 產業呈現典型泡沫特徵，預期未來 5 至 10 年美股實質報酬率可能轉負。不過橋水基金近期仍持續佈局半導體與科技巨頭，展現靈活輪動策略。",
        "ep": "建議將部分資金（約 10-15%）配置於黃金以避險，並對 AI 科技股的高波動風險保持警戒。"
    },
    "Dan Ives (Wedbush)": {
        "vp": "【2026.07.02 最新解析】Dan Ives 於 7/1 盤中給予 SpaceX「優於大盤」評級與目標價 190 美元。他認為結合星鏈與 AI 基礎設施，該公司已非單純太空企業，而是深具潛力的 AI 巨頭。",
        "ep": "建議可將 SpaceX 視為長期的 AI 基礎設施核心概念股，於合理估值時逢低佈局。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        "vp": "【2026.07.02 最新解析】7/1 節目中 Cramer 建議買進 GEV 與 TEL；認為 UCTT 太貴並看空 VYGR。他指出華爾街資金正轉向美光 (Micron) 等 AI 硬體供應鏈。",
        "ep": "優先佈局受惠於 AI 基礎建設的硬體供應商與優質工業股，避開未獲利的投機企業。"
    },
    "Adam Kobeissi": {
        "vp": "【2026.07.02 最新解析】Kobeissi 指出標普500第二季大漲，但半導體跑贏大盤達 85 個百分點，偏離差距超越達康泡沫。同時觀察到 AI 產業鏈就業萎縮，央行避險需求帶動黃金創紀錄。",
        "ep": "鑑於半導體板塊漲幅創歷史新高，建議適度逢高獲利了結，並轉入黃金以提升抗風險能力。"
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

print(f"Successfully updated {count} influencers with batch 3 Q3 mid-day updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
