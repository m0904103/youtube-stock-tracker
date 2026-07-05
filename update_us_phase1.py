import json
import codecs
import re

updates = {
    "霍比特小灰": {
        "vp": "【2026.07.05 週末最新解析】週末未針對 7 月非農發布專題，但近期持續探討 AI 雲端巨頭資本支出，提醒面對短期總經數據波動應保持冷靜，著眼長線。",
        "ep": "避開盲目追高，重視 AI 企業真實獲利與技術面訊號，逢低長線佈局。"
    },
    "美股研究社": {
        "vp": "【2026.07.05 週末最新解析】週末無更新。總結其七月初觀點，主要聚焦特斯拉、亞馬遜等巨頭的 AI 佈局與估值重塑，以及市場流動性與 AI 板塊的分化效應。",
        "ep": "在降息預期升溫下，建議審視手中 AI 硬體與軟體股的配置，留意科技巨頭財報前的估值波動風險。"
    },
    "Alan Chen": {
        "vp": "【2026.07.05 週末最新解析】週末期間無最新更新。近期最後更新為 7 月初關於蘋果、美光及科技股的相關討論。",
        "ep": "適逢美國獨立紀念日連假休市，建議暫時觀望並留意下週一開盤的市場情緒變化。"
    },
    "陽光財經 (尼可拉斯陽)": {
        "vp": "【2026.07.05 週末最新解析】週末並未發布最新影片，分析停留在 7/2 探討美股與川普言論。因無新內容，請防範冒名詐騙。",
        "ep": "因週末無最新盤勢分析更新，建議暫且觀望，靜待下週一開盤後的市場訊號再行操作。"
    },
    "貝拉聊財經 (Bella)": {
        "vp": "【2026.07.05 週末最新解析】7/3 發布最新影片「非農托底高開！盤中：驚雷砸盤！」。深度拆解非農數據引發的情緒波動，指出大盤雖高開卻遭遇突襲式洗盤大戲。",
        "ep": "面對非農數據發布後的劇烈洗盤震盪，建議投資人嚴格控制倉位，避免盲目追高殺跌。"
    },
    "傑夫 (美股)": {
        "vp": "【2026.07.05 週末最新解析】週末並未發布新影片。適逢美國獨立紀念日連假，其最新分析停留在 7/2 關於 META 的直播。",
        "ep": "週末無新解析，建議暫時維持現有部位，靜待連假後開盤的資金動向再作決策。"
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

print(f"Successfully updated {count} US influencers with Phase 1 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
