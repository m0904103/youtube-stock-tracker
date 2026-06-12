import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

ZHEZHE_VP = "【2026.06.12 盤後更新】我早就說過了吧！台股今天大漲 351 點就是準備迎接今晚美股的超級大戲。昨晚美股洗盤根本不用怕，因為資金都在等 SpaceX！SpaceX 上市絕對是歷史級別的事件，外資空單也被迫回補了 1.2 萬口！這會帶動整個台灣的低軌衛星概念股（昇達科等）噴出！接下來行情還會繼續熱，不要被輕易洗下車！"
ZHEZHE_EP = "【盤後操作】瞄準低軌衛星與網通概念股，SpaceX 上市若大漲，台股相關供應鏈明天直接噴出，拉回就是買點！"

GOOAYE_VP = "【2026.06.12 盤後更新】美股昨晚反彈，台股今天也就順順地走完（收 43,500）。大家現在眼睛都盯著今晚 SpaceX 的 IPO，這肯定是今年最大的一場戲。馬斯克的公司向來自帶流量，開盤價絕對是被散戶跟機構推到天上。但老實說，這種剛上市的巨獸波動極大，沒事不要去當別人的流動性。市場的錢自然會輪動，長線抱好你手上的大盤指數即可。"
GOOAYE_EP = "【盤後操作】想參與 SpaceX 建議用極小資金當買樂透，主力仍應放在大盤與強勢科技股。0050 定期定額繼續！"

JEFF_VP = "【2026.06.12 盤後更新】檢視昨晚美股與今日台股，市場其實在進行微妙的板塊輪動。今晚的 SpaceX 是一場資本的狂歡（盤前溢價 30%+），但回到價值投資本質，我們必須思考它目前 $1.77 兆的估值是否已透支未來十年現金流？馬斯克執行力毋庸置疑，但好公司也需要好價格。與其在今晚去跟狂熱的市場博弈，不如耐心等待幾個月後的第一份財報。"
JEFF_EP = "【盤後操作】堅守價值投資原則，放棄首日參與 SPCX，等待上市後首份財報公佈，市場回歸理智後再尋找安全邊際。"

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
