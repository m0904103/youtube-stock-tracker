import json
import codecs
import re

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.06.29 深度解析】Tom Lee 認為近期半導體股回調屬「教科書級別」的週期中段修正，是極佳的買入機會而非崩盤。他強調 2026 年美股上漲由企業獲利驅動，大盤估值比年初更便宜；同時看好加密貨幣為 AI 後續受惠者。",
        "ep": "可將半導體板塊短期的回調視為逢低買進的機會，並關注由獲利驅動的優質標的。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.06.29 深度解析】大摩最新報告指出，長期牛市趨勢不變，但受限於流動性緊縮及新任聯準會主席 Kevin Warsh 的政策陣痛期，短期美股將面臨震盪。板塊方面，偏好工業、金融與非必需消費等週期股，並下調醫療保健評級。",
        "ep": "短期操作應避開防禦型的醫療保健板塊，逢低佈局工業與金融等優質週期股以安度震盪期。"
    },
    "Jensen Huang (黃仁勳)": {
        "vp": "【2026.06.29 深度解析】黃仁勳近期發表新代 AI 平台「Vera Rubin」，並於股東會宣告「具用處的AI」時代來臨，基礎建設轉向全面商業化。他強調國安優先、嚴拒晶片走私，並承諾將過半現金流回饋股東。",
        "ep": "著眼 AI 基礎建設商業化紅利，長線布局相關供應鏈，但需留意地緣政治出口管制風險。"
    },
    "Elon Musk": {
        "vp": "【2026.06.29 深度解析】馬斯克週末宣布 xAI 的 Grok 4.5 已於 Tesla 和 SpaceX 內部測試。該模型達 1.5 兆參數，並預告 2026 年起每月發布新模型。暗示 AI 競賽進入白熱化階段。",
        "ep": "密切關注 Tesla 及 AI 基礎設施板塊，把握 Grok 迭代升級帶動的潛在行情。"
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
