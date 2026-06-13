import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

ZHEZHE_VP = "【2026.06.13 週末結算】各位投資朋友！我早就說過 SpaceX 上市絕對是史詩級行情，你有沒有賺到！週五首日 SPCX 收 $198.50 大漲證明了我的看法完全正確！下週 FOMC 是 Warsh 的第一次登場，大家都在怕點陣圖，但我告訴你，這就是千載難逢的拉回上車機會！不管 Warsh 說什麼，AI 與太空科技的超級大趨勢是不會變的！"
ZHEZHE_EP = "【週末推演】SpaceX 只要有拉回就是買點，下週 FOMC 若引發震盪，閉著眼睛用力買進！"

GOOAYE_VP = "【2026.06.13 週末結算】SpaceX掛牌首日那個動能確實很猛，收盤 $198.50 馬斯克的吸金能力沒話說，但這種 IPO 首日籌碼很亂，沒買到的不用去追高當韭菜。下週 6/17 FOMC 有 Warsh 首秀和點陣圖，老實說市場早就對降息路徑有一定預期，除非點陣圖給出超級意外的指引，不然影響就是幾天的震盪。大家把眼光放長遠。"
GOOAYE_EP = "【週末推演】指數大盤 0050 持續定期定額，SpaceX 等籌碼沉澱後再觀察，不要亂追高。"

JEFF_VP = "【2026.06.13 週末結算】SpaceX 的掛牌吸走了市場大量流動性（NVDA 跌 3.15% 就是明證），其目前的市值反映了極度樂觀的太空壟斷預期，存在過度定價風險。下週的重點在於 Warsh 主導的 6/17 FOMC，若點陣圖確認了結構性通膨導致中性利率上移，美債殖利率勢必再度飆升，屆時這波資金面推動的科技股熱潮將面臨嚴峻修正。"
JEFF_EP = "【週末推演】避開估值過高的熱門 IPO (SPCX)，轉向防禦性板塊或受惠於高利率的價值股。"

# 股癌 (Gooaye)
m2 = re.search(r'(name:\s*"[^"]*Gooaye[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m2:
    content = content[:m2.start(1)] + m2.group(1) + '"' + GOOAYE_VP + '"' + content[m2.end():]
m2ep = re.search(r'(name:\s*"[^"]*Gooaye[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m2ep:
    content = content[:m2ep.start(1)] + m2ep.group(1) + '"' + GOOAYE_EP + '"' + content[m2ep.end():]

# 郭哲榮 (折折)
m1 = re.search(r'(name:\s*"[^"]*折[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m1:
    content = content[:m1.start(1)] + m1.group(1) + '"' + ZHEZHE_VP + '"' + content[m1.end():]
m1ep = re.search(r'(name:\s*"[^"]*折[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m1ep:
    content = content[:m1ep.start(1)] + m1ep.group(1) + '"' + ZHEZHE_EP + '"' + content[m1ep.end():]

# 傑夫
m3 = re.search(r'(name:\s*"[^"]*傑夫[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m3:
    content = content[:m3.start(1)] + m3.group(1) + '"' + JEFF_VP + '"' + content[m3.end():]
m3ep = re.search(r'(name:\s*"[^"]*傑夫[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m3ep:
    content = content[:m3ep.start(1)] + m3ep.group(1) + '"' + JEFF_EP + '"' + content[m3ep.end():]

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('Remaining influencers updated!')
