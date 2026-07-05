import json
import codecs
import re

updates = {
    "朱家泓 (東森)": {
        "vp": "【2026.07.03 盤勢追蹤】朱家泓於近期節目指出，預期台股 7 月將呈「蛇行向上」並續創新高，特別看好封測與低價 IC 設計族群，呼籲投資人把握拉回機會。",
        "ep": "大盤蛇行向上，鎖定封測與低價 IC 族群，待拉回後逢低進場。"
    },
    "賴建承 (非凡)": {
        "vp": "【2026.07.03 盤勢追蹤】賴建承近期分析重點聚焦於成熟製程漲價受惠股、封測族群行情，並探討了 AI 算力板塊（如 Meta 雜音）對相關供應鏈的波段影響。",
        "ep": "建議聚焦成熟製程與封測族群等具漲價題材個股，並留意 AI 供應鏈動態伺機佈局。"
    },
    "李兆華 (東森)": {
        "vp": "【2026.07.03 盤勢追蹤】近期節目聚焦台股 7 月展望，深度解析外資賣超策略，並探討半導體設備、PCB、被動元件及機器人題材的下半年佈局機會。",
        "ep": "關注外資動向，趁大盤震盪回檔時，逢低佈局具漲價題材的被動元件與半導體設備股。"
    },
    "股期龍哥 (東森)": {
        "vp": "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。強調追蹤主力動能與均線結構。",
        "ep": "持續觀察法人籌碼流向，順勢操作不預設立場並嚴設停損。"
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

print(f"Successfully updated {count} influencers with Batch 11 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
