import re

def process_entry_point(match):
    original_ep = match.group(1)
    original_ep = re.sub(r'【.*?】', '', original_ep).strip()

    if '逢低' in original_ep or '撿便宜' in original_ep or '分批承接' in original_ep or '長線績優' in original_ep or '承接優質龍頭' in original_ep:
        new_text = "【週三操作】台股狂飆千點確認底部，美股期指偏多。持股續抱，空手者不宜再追高，等待 CPI 震盪時再行佈局。"
    elif '保守' in original_ep or '現金' in original_ep or '觀望' in original_ep or '多看少做' in original_ep or 'FOMC' in original_ep or '減碼' in original_ep:
        new_text = "【週三操作】強勁反彈可能只是死貓反彈 (Dead-cat bounce)，CPI 與 FOMC 決策前夕切勿興奮追價，趁反彈適度獲利了結。"
    elif '大戶' in original_ep or '籌碼' in original_ep or '暗池' in original_ep:
        new_text = "【週三操作】大戶在週一接走的籌碼今日已拉開成本，緊盯莊家 Gamma 值變化，若逼近極端值需提防軋空後的急速獲利了結。"
    else:
        new_text = f"【週三操作】反彈行情延續，{original_ep}"
        
    return f'entryPoint: "{new_text}"'

def process_viewpoint_us(match):
    original_vp = match.group(1)
    original_vp = re.sub(r'【.*?】', '', original_vp).strip()
    
    if '洗盤' in original_vp or '反彈' in original_vp or '抄底' in original_vp or '底部' in original_vp:
        new_text = "【2026.06 週二盤前更新】亞股（如台股）今日瘋狂大漲千點，完全帶動了美股期指的樂觀情緒！週一的長下影線正式確認大戶洗盤結束。但請注意，週三即將迎來關鍵的 CPI 與 FOMC 會議，這波報復性反彈將面臨通膨數據的壓力測試。"
    else:
        new_text = f"【2026.06 週二盤前更新】亞股大爆發帶動美股期指，{original_vp}"
        
    return f'viewpoint: "{new_text}"'

def process_viewpoint_tw(match):
    original_vp = match.group(1)
    original_vp = re.sub(r'【.*?】', '', original_vp).strip()
    
    if '洗盤' in original_vp or '反彈' in original_vp or '長線' in original_vp or '護城河' in original_vp or '底部' in original_vp:
        new_text = "【2026.06 週二盤後更新】台股週二暴力狂飆 1,201 點，收復 44,000 大關！這完全印證了我們所說的『長下影線大戶抄底』理論。昨日敢於在恐慌中撿鑽石的投資人，今天已經豐收。但請注意，真正的主戰場在明晚的美國 CPI 數據發布。"
    elif '變數' in original_vp or '二次回測' in original_vp or '保留現金' in original_vp:
        new_text = "【2026.06 週二盤後更新】台股雖然報復性大漲千點，但成交量未能完全跟上，且外資期貨空單並未大幅回補。這可能只是跌深後的技術性反彈，本週真正的考驗是即將到來的聯準會 FOMC 會議與四巫日結算，切忌在此時追高。"
    else:
        new_text = f"【2026.06 週二盤後更新】台股狂飆1200點，{original_vp}"
        
    return f'viewpoint: "{new_text}"'

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Separate US and TW
parts = content.split('const twInfluencersData')
us_part = parts[0]
tw_part = 'const twInfluencersData' + parts[1]

us_part = re.sub(r'viewpoint:\s*"(.*?)"', process_viewpoint_us, us_part)
us_part = re.sub(r'entryPoint:\s*"(.*?)"', process_entry_point, us_part)

tw_part = re.sub(r'viewpoint:\s*"(.*?)"', process_viewpoint_tw, tw_part)
tw_part = re.sub(r'entryPoint:\s*"(.*?)"', process_entry_point, tw_part)

new_content = us_part + tw_part

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(new_content)

print("Successfully updated all influencers for Tuesday evening.")
