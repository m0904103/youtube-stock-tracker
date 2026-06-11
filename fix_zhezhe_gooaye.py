import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 用 regex 找 折折 和 Gooaye 的 name，再直接替換 viewpoint 和 entryPoint
# 用 Gooaye 定位股癌
# 用 折折 定位郭哲榮

ZHEZHE_VP = "【2026.06 盤後更新】台積電 24 秒填息展現 AI 產業長線信心！今日台股盤中最低殺至 42,006 點，後收 43,149——百貨公司週年慶折扣最低點！SpaceX 明日掛牌（$135，市值 $1.77 兆），與 AI 概念並不對立，甚至帶動整體科技熱情！重點關注個股：世界先進、南亞科、群聯、環球晶。外資空單 63,168 口是多頭未來的火箭燃料——回補之日即是多頭大反攻！等 FOMC（6/17）神兵臨，勝負見！千萬不要融資！"
ZHEZHE_EP = "【盤後操作】43,000 點以下分批加碼台積電、AI 供應鏈。SpaceX 6/12 掛牌後壓力緩解！等外資空單開始大量回補（降至 55,000 口以下），多頭大反攻啟動！持閒錢、不融資！"

GOOAYE_VP = "【2026.06 盤後更新】市場瘋狂時最需要保持紀律！今日台股盤中殺至 42,006 點，外資空單暴增至 63,168 口（+1,219 口），但長線趨勢未改！記憶體（南亞科、群聯）與 AI 基礎設施趨勢看法不變。SpaceX（$135 定價）是歷史性時刻，但不要被 IPO 炒作分心。FOMC（6/17）Warsh 首秀點陣圖是最大變數——若偏鷹，科技股估值需重新評估。長線投資者繼續定期定額，不因短線恐慌改變策略！"
GOOAYE_EP = "【盤後操作】股癌式紀律：持股不超過七成，剩餘現金等 FOMC（6/17）後方向明確再決定加減碼。0050、台積電定期定額繼續！"

# 用 Gooaye 找股癌
m2 = re.search(r'(name:\s*"[^"]*Gooaye[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m2:
    content = content[:m2.start(1)] + m2.group(1) + '"' + GOOAYE_VP + '"' + content[m2.end():]
    print('Gooaye viewpoint updated')
else:
    print('Gooaye viewpoint NOT FOUND')

m2ep = re.search(r'(name:\s*"[^"]*Gooaye[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m2ep:
    content = content[:m2ep.start(1)] + m2ep.group(1) + '"' + GOOAYE_EP + '"' + content[m2ep.end():]
    print('Gooaye entryPoint updated')

# 用 折折 找郭哲榮
m1 = re.search(r'(name:\s*"[^"]*折[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m1:
    content = content[:m1.start(1)] + m1.group(1) + '"' + ZHEZHE_VP + '"' + content[m1.end():]
    print('折折 viewpoint updated')
else:
    print('折折 viewpoint NOT FOUND')

m1ep = re.search(r'(name:\s*"[^"]*折[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m1ep:
    content = content[:m1ep.start(1)] + m1ep.group(1) + '"' + ZHEZHE_EP + '"' + content[m1ep.end():]
    print('折折 entryPoint updated')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
print('Done!')
