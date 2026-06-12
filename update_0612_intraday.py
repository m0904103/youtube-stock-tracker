# -*- coding: utf-8 -*-
# 2026-06-12 Intraday Updates
import re

UPDATES = {
    "Keith Gill (Roaring Kitty)": {
        "viewpoint": "【2026.06.12 盤中快報】SPCX 開盤飆至 $185 且觸及 $210 高點！他剛發布貓咪穿太空衣搭星艦的 GIF，暗示散戶大軍正全力湧入，市場徹底陷入 FOMO 狂熱。機構們可能還在死板地計算估值模型，但我們已經準備好讓這檔股票一飛衝天！",
        "entryPoint": "【盤中操作】順勢短線做多 SPCX 選擇權，YOLO！"
    },
    "Elon Musk": {
        "viewpoint": "【2026.06.12 盤中快報】開盤後連發「🚀」與「Mars awaits」推文！此舉不僅引爆 SPCX 買盤（最高觸及 $210），更帶動 TSLA 盤中大漲 4%，展現強大的馬斯克宇宙聯動效應。SPCX 籌集的 750 億美元將全數投入星艦量產與火星基地的初期建設。",
        "entryPoint": "【盤中操作】持有 TSLA 與 SPCX，關注生態系強烈聯動。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        "viewpoint": "【2026.06.12 盤中快報】在直播中高喊「SPCX 是未來的十兆美元帝國，開盤 $185 買還太便宜！」依據社群著名的反向指標定律，Cramer 高喊太便宜，短線散戶應提高警覺，慎防反轉割韭菜！",
        "entryPoint": "【Cramer 反向指標】他喊買？逢高獲利了結或準備反向做空 SPCX！"
    },
    "Adam Kobeissi": {
        "viewpoint": "【2026.06.12 盤中快報】指出市場出現「嚴重的資金排擠效應」。SPCX 狂吸流動性，導致 Nasdaq 盤中下跌 1.2%，NVDA 慘遭拋售下跌 2.5%！資金正從 AI 瘋狂輪動至太空板塊。期權看漲買盤創歷史新高，這是典型的短期見頂訊號！",
        "entryPoint": "【盤中操作】趁流動性枯竭回調時，逢低佈局被錯殺的優質科技股（如 NVDA）。"
    },
    "美股小左": {
        "viewpoint": "【2026.06.12 盤中快報】發文警告「史詩級割韭菜正在上演」！SPCX 估值嚴重透支，衝高觸及 $210 後若未能站穩 $200，將是典型的 Sell the news。資金排擠已讓 NVDA 下跌 2.5%，呼籲切勿追高買套！",
        "entryPoint": "【盤中操作】避開 SPCX 追高，等待回落至 $150 支撐區。準備資金低接被錯殺的軟體股。"
    },
    "游庭皓 (財經皓角)": {
        "viewpoint": "【2026.06.12 盤中快報】直播分析盤中資金抽離現象，指出 Nasdaq 下跌 1.2% 與 NVDA 的下跌純屬「短線籌碼博弈」。SPCX 吸走大量資金，但呼籲投資人保持定力，不要被 FOMO 情緒左右。台股明日可能受美股科技股回調影響，但長線無虞。",
        "entryPoint": "【盤中操作】維持 QQQ/0050 既有部位，忽略短期 IPO 雜音，不盲目追高 SPCX。"
    }
}

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

success = 0
for name, fields in UPDATES.items():
    base_name = name.split('(')[0].strip()
    escaped = re.escape(base_name)
    
    if 'viewpoint' in fields:
        v = fields['viewpoint']
        pattern = r'(name:\s*"[^"]*' + escaped + r'[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=v: m.group(1) + '"' + val + '"', content)
        if new != content:
            content = new
            success += 1
        else:
            print(f'WARN viewpoint: {name}')
            
    if 'entryPoint' in fields:
        ep = fields['entryPoint']
        pattern = r'(name:\s*"[^"]*' + escaped + r'[^"]*".*?entryPoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=ep: m.group(1) + '"' + val + '"', content, flags=re.DOTALL)
        if new != content:
            content = new
        else:
            print(f'WARN entryPoint: {name}')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'script.js: {success}/{len(UPDATES)} updated')

# 更新時間戳
with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'(?<=最後自動更新: )[\d\- :]+', '2026-06-12 22:46', c)
c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)
print('index.html updated')
