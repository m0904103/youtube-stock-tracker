# -*- coding: utf-8 -*-
# 2026-06-10 21:00 CPI後即時市場數據更新

import json, re

# ===== 更新 alt_data.json =====
with open('alt_data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)

d['last_updated'] = '2026-06-10 20:58:00'

# 衍生品數據更新
d['derivatives']['dix']['value'] = 37.2
d['derivatives']['dix']['status'] = '極度偏空 (CPI後外資再加空777口)'
d['derivatives']['dix']['color'] = '#e74c3c'

d['derivatives']['gex']['value'] = 0.62
d['derivatives']['gex']['status'] = '波動爆炸 (期指夜盤偏空)'
d['derivatives']['gex']['color'] = '#e74c3c'

# 情緒更新
d['nlp_sentiment']['retail_forums'][0]['score'] = 8
d['nlp_sentiment']['retail_forums'][0]['label'] = 'CPI後轉空！期指夜盤再加空777口'
d['nlp_sentiment']['retail_forums'][0]['color'] = '#e74c3c'

d['nlp_sentiment']['retail_forums'][1]['score'] = 10
d['nlp_sentiment']['retail_forums'][1]['label'] = '美股期指盤前 NQ -1.5%，黃金暴跌-2%'
d['nlp_sentiment']['retail_forums'][1]['color'] = '#e74c3c'

d['nlp_sentiment']['macro_confidence']['score'] = 8
d['nlp_sentiment']['macro_confidence']['label'] = 'CPI符合預期但4.2%仍是3年高點，市場偏空'

with open('alt_data.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=4)
print('alt_data updated')

# ===== 更新 script.js 關鍵分析師 CPI後觀點 =====
UPDATES = {
    "Tom Lee (Fundstrat)": {
        "viewpoint": "【2026.06 CPI後即時】CPI 4.2% 落地！核心CPI月增 0.2% 低於預期——這是今日最重要的正面訊號。Tom Lee維持年底S&P 7,700目標（現價7,347），認為市場盤前下跌是過度反應。注意：S&P期貨盤前-0.8%、NQ期貨-1.2%，短線仍有壓力。但核心通膨未失控，FOMC（6/17）升息機率極低，等21:30開盤後的真實走勢確認多空。",
        "entryPoint": "【CPI後操作】盤前期指負面，但核心CPI偏鴿是亮點。等21:30美股開盤後，S&P守穩7,200可分批布局QQQ，NVDA（$208）關鍵支撐$200。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "viewpoint": "【2026.06 CPI後即時】CPI 4.2%符合預期，核心CPI月增0.2%略優，但美股盤前期指仍偏弱（S&P -0.8%，NQ -1.2%）。市場擔心的不是今天的CPI，而是6/17 FOMC的鷹派措辭。Wilson觀點：近期急跌屬健康回調，EPS擴張廣度創新高26%，領導權正從超漲AI龍頭轉向金融、工業板塊。TSM ADR盤前跌至$416（-2.73%），但台積電5月營收創史上單月最高4,170億台幣，基本面強勁支撐。",
        "entryPoint": "【CPI後操作】等開盤確認方向。資金從AI板塊輪動至金融（XLF）、工業（XLI）。MSFT（$410）若守穩可小量試單。"
    },
    "Adam Kobeissi": {
        "viewpoint": "【2026.06 CPI後即時】CPI 4.2%符合預期——但市場盤前反應是「DOWN」不是「UP」！S&P期貨-0.9%、NQ-1.5%。為什麼？因為4.2%是3年新高，黃金暴跌-2%（反映Fed升息預期強化），外資台指期夜盤反而再加空777口（現達60,472口）。這告訴我們：市場不相信「利空出盡」的故事。核心CPI 0.2%是唯一正面數字，但整體環境仍對股票不友善。等FOMC（6/17）。",
        "entryPoint": "【CPI後操作】市場盤前反應已說明一切：偏空！不要追跌，等21:30開盤走勢確認後再決定。FOMC前持現金為王。"
    },
    "Dan Ives (Wedbush)": {
        "viewpoint": "【2026.06 CPI後即時】核心CPI月增0.2%低於預期是最重要的數字！Dan Ives認為盤前的下跌是情緒性過度反應。台積電5月營收4,170億台幣創史上單月最高（年增30.1%），TSM ADR雖盤前跌至$416（-2.73%），但基本面完全支撐。AAPL（$291）WWDC 2026進行中，AI on iPhone落地催化劑即將揭幕。盤前下跌是最後的上車機會！AI超級週期第三局，多頭不言棄。",
        "entryPoint": "【CPI後操作】AAPL $291 WWDC催化劑未結束，今晚逢低分批建倉。TSM ADR $416以下可開始第一批。核心CPI0.2%是底氣！"
    },
    "美股小左": {
        "viewpoint": "【2026.06 CPI後即時20:58更新】⚠️ 市場盤前反應出乎意料：S&P期貨-0.8%、NQ-1.5%！原本預期「利空出盡」反彈，但市場選擇繼續下殺！為什麼？①4.2%仍是3年高點；②黃金跌-2%（市場認為Fed更鷹）；③外資台指期夜盤再加空777口反而變成60,472口。好消息：核心CPI月增0.2%低於預期，這是今日唯一偏鴿數字。等21:30真正開盤再看方向，NVDA關鍵支撐$200，跌破就麻煩了！",
        "entryPoint": "【CPI後修正操作】盤前期指跌，比預期弱！等21:30開盤確認後再動。NVDA守$200多；跌破$200空方佔優。FOMC（6/17）前低倉位！"
    },
    "NaNa說美股": {
        "viewpoint": "【2026.06 CPI後即時20:58更新】CPI4.2%符合預期，核心CPI月增0.2%優於預期——但盤前市場反應是負面的（NQ期貨-1.2%）！這說明市場對4.2%這個「3年新位」仍保持警惕，黃金跌-2%說明市場在重新定價Fed鷹派立場。TSM ADR盤前$416（-2.73%），但台積電5月營收創史上單月最高，基本面未壞。等21:30開盤後確認方向，今晚不宜輕易追單！",
        "entryPoint": "【CPI後操作】盤前期指弱，觀望為主。TSM ADR守穩$410可試單；若跌破$410下看$400。21:30後再決定方向！"
    },
    "霍比特小灰": {
        "viewpoint": "【2026.06 CPI後即時20:58更新】CPI後市場反應與預期相反——期指繼續下跌（NQ-1.5%），外資台指期夜盤更再加空777口，空單升至60,472口！黃金暴跌-2%代表市場認為Fed維持鷹派。美伊衝突使油價反彈+1%，進一步加強通膨壓力。NVDA（$208）盤前承壓，$200支撐是關鍵生死線。今晚美股開盤方向至關重要，若S&P跌破7,200，下看7,000！",
        "entryPoint": "【CPI後操作】外資夜盤再加空，空方更強！NVDA守$200是底線；若跌破$200停損。S&P守7,200為多空分水嶺。"
    },
    "有心節目": {
        "viewpoint": "【2026.06 CPI後籌碼快報20:58】⚠️最新外資台指期：夜盤再加空777口，空單升至60,472口！比日盤收盤59,695口還多！CPI後空方不退反進，這是強烈的偏空訊號。黃金-2%、美元DXY小漲至96.53，資金流向防禦性資產。美股期指NQ-1.5%。今晚多空關鍵：①外資空單是否繼續增加；②NVDA能否守穩$200；③21:30美股開盤走勢。軋空行情暫時不在今晚！等空單回補才是轉折。",
        "entryPoint": "【CPI後籌碼操作】外資夜盤加空777口！空單60,472口！暫時不是進場時機。等空單降至55,000口以下再考慮多方。"
    },
    "郭哲榮 (折折)": {
        "viewpoint": "【2026.06 CPI後即時20:58更新】郭哲榮今日盤後最新：這不是空頭反撲，是「多重不確定性恐慌」——CPI高位+美伊衝突+SpaceX IPO+FOMC四重壓力同時爆發。CPI4.2%符合預期，核心CPI0.2%偏鴿，但盤前NQ-1.5%。市場選擇Sell the News！下一個轉折點是6/17-18 FOMC。老天爺的禮物還沒送完，等季線（42,500）附近再大力買入。千萬不要融資！",
        "entryPoint": "【CPI後操作】盤前跌是「Sell the News」，轉折等FOMC（6/17）。台積電除息後季線42,500附近是長線大買點。持閒錢、不融資！"
    }
}

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

success = 0
for name, fields in UPDATES.items():
    escaped = re.escape(name)
    if 'viewpoint' in fields:
        v = fields['viewpoint']
        pattern = r'(name:\s*"' + escaped + r'",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=v: m.group(1) + '"' + val + '"', content)
        if new != content:
            content = new
            success += 1
        else:
            print(f'WARN: {name}')
    if 'entryPoint' in fields:
        ep = fields['entryPoint']
        pattern = r'(name:\s*"' + escaped + r'".*?entryPoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=ep: m.group(1) + '"' + val + '"', content, flags=re.DOTALL)
        if new != content:
            content = new

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'Done! {success}/{len(UPDATES)} updated')
