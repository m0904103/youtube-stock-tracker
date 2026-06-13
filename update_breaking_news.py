import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

PATCHES = {
    'Elon Musk': {
        'vp': "【2026.06.13 週末突發】隨著 SPCX 以 $2.1 兆美元的估值掛牌，馬斯克身價突破 $1.1 兆美元，正式成為人類史上首位「兆美元富豪（Trillionaire）」！更震撼的是，MSCI 宣布 SPCX 立即納入 MSCI World 與 ACWI 指數，這將引爆全球被動基金的強制買盤。籌集的資金將全數投入星艦量產與火星基地。這不是短期股價，而是人類文明未來！",
        'ep': "【週末推演】MSCI 強制買盤進駐，長線 (Diamond Hands) 抱緊 SPCX 與 TSLA。",
        'key': 'Elon Musk'
    },
    'Jensen Huang': {
        'vp': "【2026.06.13 週末突發】輝達週末釋出重磅消息！正式量產專為「代理式 AI（Agentic AI）」設計的獨立 CPU「Vera」，並積極佈局中國資料中心市場，預計 8 月交貨！同時，輝達與亞馬遜聯手注資德國機器人公司 Neura Robotics 高達 14 億美元。這標誌著 NVDA 正全面從數位算力跨足「實體 AI 與機器人」領域，算力霸權再升級！",
        'ep': "【週末操作】Vera 晶片與實體 AI 佈局將開啟新一波營收動能，NVDA 是 AI 時代唯一核心，長線必抱。",
        'key': 'Jensen'
    },
    'Cathie Wood': {
        'vp': "【2026.06.13 週末突發】ARK 週末報告點出兩大核彈級催化劑：第一，SPCX 閃電納入 MSCI 指數，被動資金的湧入將進一步鎖死流通籌碼；第二，輝達新推「Vera」CPU 並注資 Neura Robotics，這完美印證了 ARK 關於「實體 AI 與機器人」將成為下個兆元賽道的預測！這就是我們重倉 SPCX、NVDA 與 TSLA 的原因，顛覆性創新正在加速爆發！",
        'ep': "【週末操作】實體 AI 時代降臨！緊抱 SPCX、TSLA 與 NVDA，逢回就是加碼買點。",
        'key': 'Cathie Wood'
    }
}

success = 0
for name, p in PATCHES.items():
    key = re.escape(p['key'])
    m = re.search(r'(name:\s*"[^"]*' + key + r'[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
    if m:
        content = content[:m.start(1)] + m.group(1) + '"' + p['vp'] + '"' + content[m.end():]
    m2 = re.search(r'(name:\s*"[^"]*' + key + r'[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
    if m2:
        content = content[:m2.start(1)] + m2.group(1) + '"' + p['ep'] + '"' + content[m2.end():]
        success += 1

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'(?<=最後自動更新: )[\d\- :]+', '2026-06-13 22:11', c)
c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print(f'Breaking news patched: {success}/3')
