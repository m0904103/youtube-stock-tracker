import json
import codecs
import re

updates = {
    "郭哲榮 (折折)": {
        "vp": "【2026.06.29 週末深度解析】針對上週五台股暴跌，哲哲稱之為「台股週年慶」，強調恐慌僅是短期籌碼調整，拉回就是買點。他預期一兩週後將恢復大漲，並持續看好 AI 與記憶體族群如環球晶與群聯。",
        "ep": "拉回即是買點，建議趁「週年慶」大跌時逢低佈局 AI 與記憶體潛力股。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.06.29 週末深度解析】股癌 6/27 週末發布 EP674，焦點轉向電動車充電站。他強調對車主而言，站點普及度與操作順暢度比剩餘電量更關鍵，良好的充電體驗為市場真正的剛需。",
        "ep": "建議重點關注充電樁設備與基礎設施等相關概念股的佈局機會。"
    },
    "游庭皓": {
        "vp": "【2026.06.29 週末深度解析】游庭皓週末指出，美國半導體管制反而促使中國加速國產化進程，不再單純依賴進口擴廠，轉用國產設備，連日本五大設備商對中銷售也出現歷史首次下滑的警訊。",
        "ep": "投資人須密切關注中國半導體國產化概念股及全球設備廠的板塊輪動與消長。"
    },
    "錢線百分百 (非凡財經)": {
        "vp": "【2026.06.29 週末深度解析】週末覆盤上週五重點：聚焦台股史詩級崩跌後的止跌條件與外資空單動向，探討美股是否假摔。產業面關注台積電七月法說預期、設備概念股與聯電 2.0 翻身契機。",
        "ep": "觀察大盤止跌訊號與外資空單動向，短線可逢低留意台積電設備概念股與聯電。"
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

print(f"Successfully updated {count} influencers with REAL DEEP data.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
