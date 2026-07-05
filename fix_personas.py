# -*- coding: utf-8 -*-
import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix 游庭皓
you_vp = "【2026.06.15 收盤盤後】大家晚安！今天大盤漲1200點，站上4.5萬點。這就是我一直強調的『景氣擴張期主升段』的威力！美伊和平協議讓油價回落、通膨疑慮大減，加上輝達Vera晶片帶來強勁基本面。不要因為短線漲多就想下車，只要景氣對策信號沒有連續亮紅燈，這波多頭我們就是抱緊處理，讓獲利奔跑！"
you_ep = "順應景氣擴張，堅定抱緊台積電多單與市值型ETF，享受多頭盛宴。"

# Fix 陳龍
chen_vp = "【2026.06.15 收盤盤後】各位投資朋友！我早就跟你們說我轉多了！你看今天大漲1200點，我叫你們買的台積電是不是噴到2365元！美伊和平協議加上Vera晶片，這盤絕對還會再創歷史新高！不要再跟我提什麼大C波，現在做空就是找死！跟著我全力做多就對了！"
chen_ep = "空頭不死多頭不止！全面看多，拉回就是買進台積電與AI強勢股！"

def replace_influencer(name, new_vp, new_ep, text):
    match = re.search(r'name:\s*"[^"]*' + re.escape(name) + r'[^"]*"', text)
    if match:
        name_str = match.group(0)
        vp_pat = re.compile(r'(' + re.escape(name_str) + r'.*?viewpoint:\s*)"([^"]*)"', re.DOTALL)
        text = vp_pat.sub(r'\1"' + new_vp.replace('"', '\\"') + '"', text, count=1)
        ep_pat = re.compile(r'(' + re.escape(name_str) + r'.*?entryPoint:\s*)"([^"]*)"', re.DOTALL)
        text = ep_pat.sub(r'\1"' + new_ep.replace('"', '\\"') + '"', text, count=1)
    return text

content = replace_influencer('游庭皓', you_vp, you_ep, content)
content = replace_influencer('陳龍', chen_vp, chen_ep, content)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
