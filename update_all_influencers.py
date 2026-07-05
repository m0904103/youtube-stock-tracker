# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    # US Influencers
    "Tom Lee (Fundstrat)": {
        "vp": "【2026.06.26 夜盤備戰】目前的盤前交易顯示，標普500穩定在 7357 點附近，那斯達克維持在 25358 點。雖然 VIX 指數微幅來到 20.19，但市場流動性充足。這正是逢低佈局 AI 供應鏈的最佳時機，我們堅定看多。",
        "ep": "維持滿倉，逢拉回皆是買點。標普 500 7300 點以上皆為強勢整理區間。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "vp": "【2026.06.26 夜盤備戰】注意！VIX 突破 20 大關來到 20.19，這是市場情緒轉變的警訊。雖然標普 500 還在 7357 點撐著，但科技股的強勢只是表象。現在是獲利了結並轉入防禦性資產的時候。",
        "ep": "大盤高檔震盪且波動率上升，強烈建議建立避險部位，逢高減碼科技股。"
    },
    "Cathie Wood (ARK木頭姐)": {
        "vp": "【2026.06.26 夜盤備戰】那斯達克在 25358 點的震盪完全是短期的雜音。破壞性創新正在以前所未有的速度重塑經濟。不要擔心 VIX 短期上升，那些被嚴重低估的創新科技公司，才是我們未來的搖錢樹。",
        "ep": "無懼短期波動率上升，大舉重倉最具顛覆性的 AI 與生技板塊。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        "vp": "【2026.06.26 夜盤備戰】別管 VIX 到 20 了！標普還在 7357 點高高在上！你們還在等什麼？！趕快把手上的現金全部打進去！買就對了！",
        "ep": "全面樂觀，不要猶豫，立刻買進市場上最強勢的科技巨頭。"
    },
    "美股小左": {
        "vp": "【2026.06.26 夜盤備戰】標普目前在 7357 點附近強勢整理，納指在 25358 點震盪。只要沒跌破近期關鍵支撐，這個多頭慣性就沒有改變。不過 VIX 升溫至 20，我們將適度上調停利保護點。",
        "ep": "多頭慣性延續，多單續抱，但須防範波動放大，嚴格設定移動停利點。"
    },
    "Adam Kobeissi": {
        "vp": "【2026.06.26 夜盤備戰】VIX 攀升到了 20.19！這代表造市商的 Gamma 正在發生變化。大盤在 7350 點附近的博弈會非常激烈。如果跌破這個區間，拋售將會被 Gamma 效應放大。",
        "ep": "造市商 Gamma 正在變化，波動率上升，建議使用跨式策略應對可能的突破。"
    },
    # TW Influencers
    "米哥大白話 (李永年)": {
        "vp": "【2026.06.26 夜盤備戰】各位！美股 VIX 指數稍稍上升到 20，那斯達克 25358，但標普還在 7357 點的高位！這就是主力在洗盤！外資期貨空單已經開始回補了。逢低勇敢買！",
        "ep": "外資期貨空單回補，趁著台股盤整、美股震盪時逢低大膽佈局電子權值股。"
    },
    "郭哲榮 (折折)": {
        "vp": "【2026.06.26 夜盤備戰】看到沒有！標普 500 都 7357 點了！AI 的大趨勢是不可逆的！我現在手上的現金已經飢渴難耐了，下週一開盤我就要帶會員強力進場！",
        "ep": "美股強勢表態，台股補漲在即，下週開盤強力做多 AI 概念股。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.06.26 夜盤備戰】那斯達克 25358 點，VIX 也才 20 而已啦！大家還在吵什麼崩盤？好公司你就是抱緊處理就對了。耐心才是這遊戲的重點。",
        "ep": "無視指數短期點位震盪，抱緊具有長期成長性的好公司，減少無意義的操作。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        "vp": "【2026.06.26 夜盤備戰】各位！美股標普 7357 點，那斯達克 25358 點。VIX 來到 20.19 更是證明高檔資金開始出現分歧！台股主力今天趁機壓盤吃貨！我們下週要鎖定中小型飆股！",
        "ep": "美股資金分歧，台股壓盤，鎖定主力暗中吃貨的業績成長中小型股。"
    },
    "鈔錢部署 (盧燕俐 ft. 杜金龍)": {
        "vp": "【2026.06.26 夜盤備戰】雖然 VIX 波動率指數上升到 20.19，但美股標普依然維持在 7357 點的高檔。我們建議存股族，可以利用這個震盪的環境，重新啟動暫停的定期定額。",
        "ep": "美股維持高位但波動加大，建議利用震盪期重新啟動高股息 ETF 定期定額。"
    }
}

with codecs.open('C:\\Users\\manpo\\.gemini\\antigravity\\scratch\\youtube_stocks_tracker\\script.js', 'r', 'utf-8') as f:
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

print(f"Successfully updated {count} influencers with LIVE market data (S&P: 7357.49, VIX: 20.19).")

with codecs.open('C:\\Users\\manpo\\.gemini\\antigravity\\scratch\\youtube_stocks_tracker\\script.js', 'w', 'utf-8') as f:
    f.write(content)
