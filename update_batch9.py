import json
import codecs
import re

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.07.03 週末前最新解析】Tom Lee 將標普年底目標上調至 8000 點！看好 AI 與基建雙引擎，點名科技、金融、工業、小型股及能源板塊，並認為非農數據前的波動是長線極佳買點。",
        "ep": "維持「逢低買進」策略，趁半導體等強勢板塊震盪時分批佈局科技與小型股。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.07.03 週末前最新解析】大摩警告半導體動能已近見頂，高波動率增加持倉難度。市場正經歷「滾動復甦」，資金正從擁擠的 AI 科技股流出，轉往落後補漲板塊。",
        "ep": "建議減碼擁擠的科技動能股，並將資金轉向非必需消費品、運輸及區域性銀行等防禦板塊。"
    },
    "林漢偉 (非凡)": {
        "vp": "【2026.07.03 週末前最新解析】台股 7/3 開低走高，但電子權值股仍持續承受外資沉重賣壓。中小型股輪動速度加快，資金轉向離岸風電與綠能題材，須特別留意高檔補跌風險。",
        "ep": "避開遭外資提款的電子權值股，短線操作須提防中小型股高檔補跌，切勿過度追高。"
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

print(f"Successfully updated {count} influencers with Batch 9 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update alt_data.json
with codecs.open('alt_data.json', 'r', 'utf-8') as f:
    alt = json.load(f)

alt["last_updated"] = "2026-07-03 20:30 (美股盤前 / 非農之夜)"
alt["derivatives"]["dix"]["value"] = 43.1
alt["derivatives"]["dix"]["status"] = "中立偏保守 (非農前觀望)"
alt["derivatives"]["gex"]["value"] = 3.2
alt["derivatives"]["gex"]["status"] = "弱勢防禦"
alt["nlp_sentiment"]["macro_confidence"]["score"] = "45 / 100"
alt["nlp_sentiment"]["macro_confidence"]["label"] = "非農前觀望與避險"

with codecs.open('alt_data.json', 'w', 'utf-8') as f:
    json.dump(alt, f, ensure_ascii=False, indent=4)

# Update index.html version
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=130', html)
html = re.sub(r'alt_data\.json\?v=\d+', 'alt_data.json?v=130', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
