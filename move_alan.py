# -*- coding: utf-8 -*-
import json
import re

with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

# Alan Chen object representation in code
alan_chen_str = '''  {
    name: "Alan Chen",
    style: "裸K與量價分析",
    viewpoint: "【2026.06.16 盤前備戰】從標普500的裸K來看，昨晚這根帶上影線的黑K，展現了高檔強大的獲利了結賣壓。配合今晚的FOMC不確定性，多頭動能已被破壞。明天若不能跳空開高，將確認M頭成型。",
    stocks: ["SPY (標普500)", "QQQ (納斯達克100)", "VIX (恐慌指數)"],
    entryPoint: "等待回測下檔支撐位再進場，嚴格設定停損。"
  }'''

# Extract out the old Alan Chen from script.js
# We need to find his block and remove it.
match = re.search(r'\s*\{\s*name:\s*"Alan Chen".*?\}\s*,?', text, re.DOTALL)
if match:
    old_str = match.group(0)
    text = text.replace(old_str, '')

# Now insert him into usInfluencersData
us_match = re.search(r'const usInfluencersData = \[(.*?)\];\s*const twInfluencersData', text, re.DOTALL)
if us_match:
    us_array_content = us_match.group(1)
    if us_array_content.rstrip().endswith('}'):
        new_us_array_content = us_array_content.rstrip() + ',\n' + alan_chen_str + '\n'
    else:
        new_us_array_content = us_array_content + alan_chen_str + '\n'
    
    text = text.replace(us_array_content, new_us_array_content)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(text)

print('Moved Alan Chen to US list!')
