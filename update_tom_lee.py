# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.06.25 真實觀點】我們正式將 2026 年底標普 500 的目標價從 7,700 點上調至 8,000 點！這主要是基於對 2027 年企業獲利 (EPS) 更強勁的預期，特別是 AI 與能源基礎建設帶來的結構性成長。儘管短期可能會有劇烈震盪，但每一次回檔都是『Buy the dip』的絕佳買點。",
        "ep": "標普年底目標上看 8000 點，無懼短期震盪，逢低大膽加碼 AI 與能源基礎建設族群。"
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

print(f"Successfully updated {count} US influencers with REAL data.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
