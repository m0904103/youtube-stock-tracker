import json
import codecs
import re

updates = {
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.07.01 最新解析】Tom Lee 在 7/1 指出加密貨幣正處極度悲觀的「黑暗時代」，這反而是絕佳的反向買點。美股方面，標普500由獲利成長驅動，近期半導體急跌為牛市中的逢低佈局良機。",
        "ep": "將半導體板塊回調與加密市場的極度恐慌視為絕佳的逢低買進機會。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.07.01 最新解析】Mike Wilson 於 6/30 指出股市漲勢正向外擴散，警告半導體板塊因獲利樂觀與波動加劇可能走弱，建議避開大型科技與動能交易，轉向看好非必需消費、運輸與區域銀行。",
        "ep": "建議逢高減碼半導體與熱門動能股，並將資金轉往非必需消費、運輸與區域銀行等週期板塊。"
    },
    "Cathie Wood (ARK木頭姐)": {
        "vp": "【2026.07.01 最新解析】ARK Invest 於 6月底持續調整投資組合，加碼佈局數位資產與金融科技，買入 Circle (CRCL) 與 SoFi；同時減碼生技股 Twist Bioscience。",
        "ep": "可關注其逢低加碼的數位資產與金融科技板塊，並留意生技類股的減碼風險。"
    },
    "Bill Ackman (Pershing Square)": {
        "vp": "【2026.07.01 最新解析】Ackman 於 6/30 推文看好超大型雲端供應商。Pershing Square 於 7/1 確認趁回檔建倉微軟約 20.9億美元，同時預告 Q2 將揭露四檔新投資標的。",
        "ep": "可密切關注其即將公布的 Q2 四檔新標的，並留意微軟等 AI 雲端巨頭的回檔佈局機會。"
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

print(f"Successfully updated {count} influencers with batch 2 mid-week updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
