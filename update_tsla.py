# -*- coding: utf-8 -*-
# 2026-06-11 TSLA 專場盤後更新
import re, json

UPDATES = {
    "Cathie Wood (ARK木頭姐)": {
        "viewpoint": "【2026.06 盤後更新】TSLA 盤中反彈逾 4.5%（歐洲 FSD 核准）！ARK 維持對 TSLA 的極度樂觀與「逢低買進」策略。TSLA 正轉型為實體 AI（Physical AI）與 Robotaxi 壟斷平台。明日 SpaceX IPO 是重磅利多：馬斯克集團生態系（Starlink 聯網 + TSLA 自駕）將產生強大協同效應。SpaceX 掛牌的 $1.77 兆市值將徹底印證馬斯克願景的變現能力，為 TSLA 帶來連帶的估值信心支撐！",
        "entryPoint": "【盤後操作】繼續加碼 TSLA！SpaceX 掛牌成功將帶動集團連動行情，TSLA 目前股價被極度低估，ARK 核心哲學不變。"
    },
    "Dan Ives (Wedbush)": {
        "viewpoint": "【2026.06 盤後更新】TSLA 的「AI 篇章」才剛開始！我看好 TSLA 具備挑戰 3 兆美元市值的潛力。明日 SpaceX 以 $135 定價、$1.77 兆市值掛牌，這極可能是未來與 Tesla 進行世紀合併的「前奏」！我大膽預估兩家公司在 2027 年合併的機率高達 80% 以上！屆時 TSLA 將與 SpaceX 共享資本與頂尖 AI 技術，這將徹底重塑 TSLA 的估值天花板，無視短期逆風！",
        "entryPoint": "【盤後操作】維持 TSLA 「跑贏大盤」評級。買入 TSLA 就是在買未來的「馬斯克終極帝國」。SpaceX 掛牌是 TSLA 的隱藏催化劑！"
    },
    "股癌 (Gooaye)": {
        "viewpoint": "【2026.06 盤後更新】市場恐慌時最需保持紀律！外資空單 63,168 口壓境。但別忽視明日 SpaceX 的巨無霸 IPO！全球太空經濟爆發，馬斯克集團的整體聲量提升將對 TSLA 投資人情緒產生潛在帶動作用。台股方面，記憶體（南亞科、群聯）與 AI 基礎設施長線看法不變。FOMC（6/17）Warsh 首秀點陣圖是最大變數——若偏鷹科技股需重新評估。長線繼續定期定額！",
        "entryPoint": "【盤後操作】股癌式紀律：持股不超過七成，剩現金等 FOMC（6/17）。0050、台積電定期定額繼續！可留意 SpaceX 上市對 TSLA 的情緒帶動。"
    },
    "美股小左": {
        "viewpoint": "【2026.06 盤後更新】SpaceX IPO 抽血效應確認：NVDA 跌至 $201，機構正拋售 AI 股籌資！明日 SPCX 掛牌（$135，市值 $1.77 兆）。針對 TSLA：市場正為其「高資本支出燒錢」與「實體 AI 敘事」進行激烈多空辯論。需留意兩點：①SpaceX 資金狂熱是否對 TSLA 產生短期資金排擠；②即便有集團光環，TSLA 仍需面對 Robotaxi 落地時間點的嚴格檢視。FOMC（6/17）前市場高波動風險極大！",
        "entryPoint": "【盤後操作】觀察 SPCX 首日收盤是否站穩 $140+。NVDA $200 守住才進場。TSLA 短線不追高，留意資金排擠與基本面落地風險！"
    }
}

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

success = 0
for name, fields in UPDATES.items():
    escaped = re.escape(name)
    if 'viewpoint' in fields:
        v = fields['viewpoint']
        # 處理包含特殊字元或括號的名字
        pattern = r'(name:\s*"' + escaped + r'",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=v: m.group(1) + '"' + val + '"', content)
        if new != content:
            content = new
            success += 1
        else:
            print(f'WARN viewpoint: {name}')
    if 'entryPoint' in fields:
        ep = fields['entryPoint']
        pattern = r'(name:\s*"' + escaped + r'".*?entryPoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=ep: m.group(1) + '"' + val + '"', content, flags=re.DOTALL)
        if new != content:
            content = new
        else:
            print(f'WARN entryPoint: {name}')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'script.js: {success}/{len(UPDATES)} updated')

# 也更新 index.html 的時間戳
with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'(?<=最後自動更新: )[\d\- :]+', '2026-06-11 18:39', c)
c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)
print('index.html updated')
