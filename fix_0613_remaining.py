import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

PATCHES = {
    'Unusual Whales': {
        'vp': "【2026.06.13 週末深度】Unusual Whales 追蹤到 SPCX 首日成交量高達 480 億股，選擇權流量顯示機構大量買入 30-60 天到期的 Call，隱含波動率（IV）居高不下。NVDA 方面，Max Pain 與 Gamma Exposure（GEX）數據顯示做市商在 $200-$205 區間存在大量對沖壓力，但期限溢價並未崩潰，說明機構仍在增倉而非出場。FOMC 前一週通常是 Vol 被壓縮的時期，6/17 後若措辭超鷹可能引發 Vol 急速擴張。",
        'ep': "【週末操作】SPCX 可留意 7 月到期 $170 Call；NVDA 持股者可賣出 6/20 $210 Call 收保護性權利金。",
        'key': 'Unusual'
    },
    'Dan Niles': {
        'vp': "【2026.06.13 週末深度】Dan Niles 對 SPCX 首日（高 $176.52、收 $160.95）的長上影線持審慎態度：市場對 SpaceX 28.5 兆美元 TAM 的定價過於樂觀，投資者需區分「AI 基礎設施平台」與「火箭公司」的根本估值邏輯差異。NVDA 雖長線看多 AI 基礎建設週期，但對估值拉升過快後的泡沫化風險保持高度警惕。FOMC 方面，CPI 4.2% 配合地緣緊張是影響風險資產的雙重頭風。",
        'ep': "【週末操作】SPCX 等基本面驗證後再進場，觀察第一份財報；NVDA 在 $195-$200 為多空分水嶺，守則持、破則減。",
        'key': 'Niles'
    }
}

# Fix Unusual Whales and Dan Niles
for name, p in PATCHES.items():
    key = re.escape(p['key'])
    m = re.search(r'(name:\s*"[^"]*' + key + r'[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
    if m:
        content = content[:m.start(1)] + m.group(1) + '"' + p['vp'] + '"' + content[m.end():]
    m2 = re.search(r'(name:\s*"[^"]*' + key + r'[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
    if m2:
        content = content[:m2.start(1)] + m2.group(1) + '"' + p['ep'] + '"' + content[m2.end():]

# Fix 折折 (郭哲榮)
ZHEZHE_VP = "【2026.06.13 週末深度】SPCX=AI 概念股！長上影線是 IPO 蜜月期必然換手，不是主力出貨，盤後 $166.85 更證明市場信心未散。NVDA 0.16% 的抗跌是 AI 主線最強烈的宣示，資金根本沒有離場！Warsh 點陣圖若維持兩次降息預期，台股科技股將迎來一波補漲；台積電外資持股跌破 70% 是籌碼轉換，非利空！"
ZHEZHE_EP = "【週末操作】SPCX 趁高點回落至 $155 附近小幅佈局，台積電逢外資賣壓逢低買進！"

m1 = re.search(r'(name:\s*"[^"]*折[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m1:
    content = content[:m1.start(1)] + m1.group(1) + '"' + ZHEZHE_VP + '"' + content[m1.end():]
m1ep = re.search(r'(name:\s*"[^"]*折[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m1ep:
    content = content[:m1ep.start(1)] + m1ep.group(1) + '"' + ZHEZHE_EP + '"' + content[m1ep.end():]

# Fix 股癌 (Gooaye)
GOOAYE_VP = "【2026.06.13 週末深度】SPCX 首日 $176.52 高點被打下來不用驚慌，這是大型 IPO 的正常籌碼洗牌（收 $160.95，盤後 $166.85 反彈）。真正有趣的是 NVDA 在 SPCX 搶盡目光之下仍守穩 $205.19，說明 AI 主線資金黏性極強。Warsh 首秀 FOMC 是最大變數，若釋放偏鷹訊號或縮減點陣圖降息次數，美股短期震盪但別輕易降低持股比例。"
GOOAYE_EP = "【週末操作】持股不動，等 FOMC 結果明朗後再決定是否加碼 NVDA 或 SPCX，0050 定期定額繼續！"

m2 = re.search(r'(name:\s*"[^"]*Gooaye[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m2:
    content = content[:m2.start(1)] + m2.group(1) + '"' + GOOAYE_VP + '"' + content[m2.end():]
m2ep = re.search(r'(name:\s*"[^"]*Gooaye[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m2ep:
    content = content[:m2ep.start(1)] + m2ep.group(1) + '"' + GOOAYE_EP + '"' + content[m2ep.end():]

# Fix 傑夫
JEFF_VP = "【2026.06.13 週末深度】SPCX 首日技術解讀：開 $150、高 $176.52、低 $149.34、收 $160.95，長上影線是上方套牢賣壓的明確警訊，短期壓力區落在 $170-$176.52。但盤後 $166.85 顯示買盤仍在。NVDA 在 SPCX 搶版面下仍收 +0.16%（$205.19），代表 AI 主線法人不動如山。FOMC Warsh 點陣圖若維持 2026 年降息 2 次，台股多頭可望延伸；若縮至 1 次，短線修正但 AI 族群率先回補。"
JEFF_EP = "【週末操作】SPCX 空手者等回測 $155 支撐確認後進場，持有者設 $149 嚴格停損線。"

m3 = re.search(r'(name:\s*"[^"]*傑夫[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
if m3:
    content = content[:m3.start(1)] + m3.group(1) + '"' + JEFF_VP + '"' + content[m3.end():]
m3ep = re.search(r'(name:\s*"[^"]*傑夫[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
if m3ep:
    content = content[:m3ep.start(1)] + m3ep.group(1) + '"' + JEFF_EP + '"' + content[m3ep.end():]

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print('All remaining influencers updated!')
