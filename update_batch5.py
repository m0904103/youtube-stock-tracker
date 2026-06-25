# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "Adam Kobeissi": {
        "vp": "【2026.06.25 真實觀點】當前宏觀經濟面臨嚴峻挑戰。美國 5 月 CPI 反彈至 4.2%，加上中東局勢推升能源危機。聯準會態度強硬，市場已開始定價『升息』。加密貨幣市場暴跌，比特幣 ETF 面臨資金流出。在 AI 領域，發展瓶頸已從 GPU 硬體轉向『電力與基礎設施』的限制。",
        "ep": "降低對利率敏感的加密貨幣部位，轉向佈局受惠於供應鏈吃緊的能源及 AI 電力基礎設施等防禦性資產。"
    },
    "貝拉聊財經 (Bella)": {
        "vp": "【2026.06.25 真實觀點】哈囉大家！近期必須密切關注聯準會政策動向帶來的市場逆風，以及潛在的金融風暴風險。在產業面，AI 領域已進入關鍵分水嶺，科技巨頭間的戰略競爭白熱化。針對近期美股震盪，像 Google 等優質科技股在特定支撐點位將浮現修正下的潛在機會。",
        "ep": "面對市場波動，耐心等待優質科技股回測至關鍵支撐點位後，再行逢低佈局並嚴控風險。"
    },
    "霍比特小灰": {
        "vp": "【2026.06.25 真實觀點】我們持續重點追蹤 Nvidia、Palantir 等 AI 核心企業的財報與技術落地情況，評估市場泡沫。同時，我也高度關注美聯儲政策變化、債務危機及地緣政治（如荷莫茲海峽局勢）對美股的風險傳導。這是一個考驗估值邏輯與抗壓能力的時刻。",
        "ep": "逢低佈局具備實質盈利與算力護城河的 AI 龍頭，警惕地緣與宏觀風險，保留現金彈性。"
    },
    "Elon Musk": {
        "vp": "【2026.06.25 真實觀點】市場對 SpaceX IPO 後估值的擔憂完全是短視的！SpaceX 在太空、星鏈與 AI 業務（包含我們近期收購的 Cursor）的總潛在市場規模高達 28.5 兆美元！短期的股價震盪改變不了物理學定律，我堅信公司年營收將在 2031 年突破 1 兆美元！",
        "ep": "忽略短期股價回調，著眼於真正推進人類文明與多行星物種願景的硬核科技長線價值。"
    },
    "陽光財經 (尼可拉斯陽)": {
        "vp": "【2026.06.25 真實觀點】我們認為，2026 年 6 月至 11 月是佈局未來五年『AI 超級大牛市』的關鍵窗口期。龐大資金將持續湧入 AI 基礎設施領域，包含 GPU、HBM、先進封裝及光通訊。短期美光、博通的波動是正常現象，並不改變 AI 時代的大趨勢。",
        "ep": "新手建議定期定額（DCA）買進 SMH、QQQ、VOO 等 ETF，資深者可逢低佈局 AI 供應鏈龍頭。"
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

print(f"Successfully updated {count} influencers with REAL data.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
