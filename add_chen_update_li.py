import json
import codecs
import re

chen_data = {
    "name": "陳智霖 (分析師)",
    "style": "籌碼實戰",
    "viewpoint": "【2026.07.05 週末最新解析】美國6月非農就業降溫緩解升息擔憂。陳智霖週末針對台股高檔震盪指出目前呈「以盤代跌」，並提點記憶體價格與財報表現，持續關注AI供應鏈及資金流向。",
    "stocks": ["2330 (台積電)", "2408 (南亞科)", "AI 供應鏈"],
    "entryPoint": "建議透過「聰明錢」實戰邏輯與籌碼面數據，逢低佈局半導體與具基本面支撐的低估成長股。"
}

updates = {
    "米哥大白話 (李永年)": {
        "vp": "【2026.07.05 週末最新解析】週末暫無更新，最新為7/3盤後指出傳產股撐盤，並看好記憶體族群黑翻紅轉折，但提醒大盤仍須居高思危。",
        "ep": "大盤高檔震盪，建議維持少量操作，採取「低進高出」的短線策略。"
    }
}

with codecs.open('script.js', 'r', 'utf-8') as f:
    content = f.read()

# Update Li Yong Nian
for name_key, data in updates.items():
    match = re.search(r'name:\s*"([^"]*' + re.escape(name_key.split('(')[0].strip()) + r'[^"]*)"', content)
    if match:
        name_str = match.group(0)
        vp_pat = re.compile(r'(' + re.escape(name_str) + r'.*?viewpoint:\s*)"([^"]*)"', re.DOTALL)
        content = vp_pat.sub(r'\1"' + data['vp'].replace('"', '\\"') + '"', content, count=1)
        ep_pat = re.compile(r'(' + re.escape(name_str) + r'.*?entryPoint:\s*)"([^"]*)"', re.DOTALL)
        content = ep_pat.sub(r'\1"' + data['ep'].replace('"', '\\"') + '"', content, count=1)

# Check if Chen Zhi Lin is already in script.js
if '陳智霖' not in content:
    new_card_str = f"""    {{
        name: "{chen_data['name']}",
        style: "{chen_data['style']}",
        viewpoint: "{chen_data['viewpoint']}",
        stocks: {json.dumps(chen_data['stocks'], ensure_ascii=False)},
        entryPoint: "{chen_data['entryPoint']}"
    }},
"""
    # Insert right after `const twInfluencersData = [`
    content = content.replace("const twInfluencersData = [", "const twInfluencersData = [\n" + new_card_str)
    print("Added Chen Zhi Lin.")
else:
    print("Chen Zhi Lin already exists. Trying to update him...")
    name_key = "陳智霖"
    data = {"vp": chen_data["viewpoint"], "ep": chen_data["entryPoint"]}
    match = re.search(r'name:\s*"([^"]*' + re.escape(name_key.split('(')[0].strip()) + r'[^"]*)"', content)
    if match:
        name_str = match.group(0)
        vp_pat = re.compile(r'(' + re.escape(name_str) + r'.*?viewpoint:\s*)"([^"]*)"', re.DOTALL)
        content = vp_pat.sub(r'\1"' + data['vp'].replace('"', '\\"') + '"', content, count=1)
        ep_pat = re.compile(r'(' + re.escape(name_str) + r'.*?entryPoint:\s*)"([^"]*)"', re.DOTALL)
        content = ep_pat.sub(r'\1"' + data['ep'].replace('"', '\\"') + '"', content, count=1)
        
with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
