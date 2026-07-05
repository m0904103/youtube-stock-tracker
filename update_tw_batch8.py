import json
import codecs
import re

updates = {
    "游庭皓": {
        "vp": "【2026.07.03 週末前最新解析】今日早報主題為「川普晶圓夢又點台積電？非農降溫通膨下得去？」。分析川普對台積電潛在影響與通膨降溫實效，市場面臨政策與總經雙重考驗。",
        "ep": "留意美國選情政策雜音與通膨數據變化，控制持股水位並持續關注半導體權值股。"
    },
    "郭哲榮 (折折)": {
        "vp": "【2026.07.03 週末前最新解析】哲哲指出外資高達 8.3 萬口空單實為正價差套利。大盤將整理 1 至 2 週消化利空，後續聚焦 7/16 台積電法說會，有望帶動指數站上 5 萬點！",
        "ep": "建議趁大盤整理期間分批進場佈局優質個股，嚴禁使用融資。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.07.03 週末前最新解析】主委近期並未發布新的週末動態，觀點維持 7/1 分析。強調以均線判斷趨勢，提醒投資人在劇震中首重情緒與部位控管。",
        "ep": "面對劇烈震盪的盤勢，確實做好部位管理並以均線為趨勢判斷基準，切勿讓情緒影響投資計畫。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        "vp": "【2026.07.03 週末前最新解析】今日 (7/3) 節目雖已播出，但目前網路上尚未釋出具體的分析重點與文字紀錄，因此暫無更新。",
        "ep": "因無最新內容釋出，暫無具體操作建議，請直接觀看官方影片。"
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

print(f"Successfully updated {count} influencers with Batch 8 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
