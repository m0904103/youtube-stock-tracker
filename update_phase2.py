import json
import codecs
import re

updates = {
    "郭哲榮 (折折)": {
        "vp": "【2026.07.05 週末最新解析】最新非農僅增5.7萬人遠低預期，有利寬鬆氣氛。折折指出台股近期震盪及外資空單屬正價差套利的正常現象。7/16台積電法說將是續攻關鍵，大盤沉澱後有望再衝刺。",
        "ep": "多頭格局切勿逆勢做空，建議逢低佈局低基期優質股，並靜待台積電法說會帶動的下一波攻勢。"
    },
    "游庭皓": {
        "vp": "【2026.07.05 週末最新解析】游庭皓指出 6 月非農數據爆冷，但市場出現反差，道瓊創高且黃金受追捧。他提醒 AI 投資已進入看重實質獲利的「挑選時代」。",
        "ep": "投資人不應只看單一數據，應綜合非農、CPI與聯準會政策推演下半年配置，嚴格篩選 AI 標的。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.07.05 週末最新解析】7/4 發布 EP676 探討投資配置。近期 6 月非農數據疲軟雖降溫升息預期，卻引發科技股賣壓。節目提醒保持冷靜，依據宏觀總經理性應對市場波動。",
        "ep": "面對科技股震盪應維持紀律，審視資產配置，避免隨短期數據盲目殺低。"
    },
    "林漢偉 (非凡)": {
        "vp": "【2026.07.05 週末最新解析】非農低於預期引發衰退疑慮。林漢偉指出，受費半重挫與外資偏空拖累，台股面臨回檔壓力並持續測試月線支撐，須嚴防中小型股高檔補跌與權值股後續止跌訊號。",
        "ep": "反彈時切忌盲目追高，請落實汰弱留強，逢低佈局具基本面支撐的AI瓶頸族群與防禦型個股。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        "vp": "【2026.07.05 週末最新解析】經搜尋確認，週末期間陳龍並未發布最新的盤勢分析，最新進度停留在週五。目前尚無針對非農數據的最新評論。",
        "ep": "週末無新節目更新，建議投資人先以週五盤後分析為基準，靜待週一開盤後的最新籌碼變化與節目解析。"
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

print(f"Successfully updated {count} influencers with Phase 2 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
