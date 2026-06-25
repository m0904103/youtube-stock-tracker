# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "美股小左": {
        "vp": "【2026.06.25 真實觀點】近期我們必須高度警惕 AI 板塊的泡沫化與劇烈回調風險。請特別關注 NVIDIA 的減產訊號、HBM4 擴產放緩，以及 SpaceX 上市後的資金排擠效應。當市場對高估值敘事感到恐慌時，我們更應該透過『價格行為 (Price Action)』與技術形態來追蹤大戶的真實籌碼動向。",
        "ep": "面對科技股高位回調風險，嚴格依賴技術面支撐阻力進行防守，避免盲目追高。"
    },
    "NaNa說美股": {
        "vp": "【2026.06.25 真實觀點】大家注意啦！近期美股情緒轉換非常快，季末即將迎來高達 1650 億美元的養老金『砸盤再平衡』，科技七巨頭將面臨龐大的獲利了結清算壓力！此外，我們也在密切留意裴洛西買入 Intel 選擇權背後的政治動向。大盤隨時有劇烈震盪與流動性踩踏的風險！",
        "ep": "面對季末機構大舉調倉，對漲幅過高的科技巨頭保持觀望，嚴控倉位以防範踩踏回檔。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        "vp": "【2026.06.25 真實觀點】聽好！強勁的 5 月就業數據讓降息的希望徹底破滅！當前的市場極度缺乏廣度，危險至極！華爾街對財報不如預期的企業懲罰是毫不留情的。除非你手上抱的是少數那幾檔『真正的 AI 贏家』，否則持有其他股票在任何價位都不安全！",
        "ep": "極度謹慎！僅集中持有具備實質獲利的頂尖 AI 贏家，其餘資金保持防禦並耐心觀望。"
    },
    "Keith Gill (Roaring Kitty)": {
        "vp": "【2026.06.25 真實觀點】(近期無公開發言，維持沉默)。根據真實紀錄，他最後一次核實的核心部位仍是 900 萬股 GME。今年除了 3 月發布過一張隱晦的迷因圖外，他已完全淡出公眾視線。散戶社群普遍將他的『未宣布減持』解讀為對 GameStop 長期看好的無聲表態。",
        "ep": "真實動向成謎，迷因股極易受網路情緒操弄暴漲暴跌，切勿依賴網路臆測，應嚴控風險。"
    },
    "傑夫 (美股)": {
        "vp": "【2026.06.25 真實觀點】華爾街策略師近期紛紛示警！科技巨頭龐大的 AI 資本支出已改變了投資邏輯，使美股對利率的敏感度大增。目前大盤過度集中於半導體板塊，扣除 AI 概念股後，整體市場幾乎持平。這種極高的投機性暗示著美股可能已經處於波段高點。",
        "ep": "面對 AI 板塊高集中度的風險，採取多元資產配置分散部位，並密切觀察油價與利率動向。"
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
