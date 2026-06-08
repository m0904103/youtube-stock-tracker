import re

def process_entry_point(match):
    original_ep = match.group(1)
    
    # Remove old prefix
    original_ep = original_ep.replace('【下週一操作】', '')
    original_ep = original_ep.replace('週一開盤若遇恐慌下殺，', '')
    original_ep = original_ep.replace('週一開盤切忌追高或盲目接刀，', '')
    original_ep = original_ep.replace('週一盤中密切監控大盤與權值股，', '')
    original_ep = original_ep.replace('下週一開盤策略：', '')
    original_ep = original_ep.replace('週一開盤', '')
    original_ep = original_ep.strip()

    if '逢低買入' in original_ep or '撿便宜' in original_ep or '分批承接' in original_ep or '長線績優股' in original_ep:
        new_text = "【週二操作】爆量長下影線已現，大戶進場訊號確認，可開始分批逢低進場承接優質龍頭股。"
    elif '保守' in original_ep or '現金' in original_ep or '觀望' in original_ep or '多看少做' in original_ep or '停損' in original_ep or 'FOMC' in original_ep:
        new_text = "【週二操作】雖見下影線，但 CPI 與 FOMC 變數仍在。維持高現金水位，反彈逢高適度減碼或按兵不動。"
    elif '大戶' in original_ep or '籌碼' in original_ep or '暗池' in original_ep or '散戶' in original_ep:
        new_text = "【週二操作】大戶已在昨日殺盤中接走散戶帶血的籌碼，緊盯外資與暗池動向，跟隨聰明錢進場。"
    else:
        new_text = f"【週二操作】確認底部長下影線支撐，{original_ep}"
        
    return f'entryPoint: "{new_text}"'

def process_viewpoint(match):
    original_vp = match.group(1)
    original_vp = original_vp.replace('【2026.06 下週一展望】', '')
    
    if '洗盤' in original_vp or '中級修正' in original_vp or '逢低佈局' in original_vp or '長線多頭' in original_vp:
        new_text = "【2026.06 週二盤前更新】週一盤中一度狂殺兩千多點，最終拉出史上最大下影線！這完全符合我們預期的『大戶暴力洗盤』劇本。散戶已被斷頭洗出，籌碼沉澱後將迎來強勁反彈。"
    elif '泡沫' in original_vp or '高估值' in original_vp or '避險' in original_vp or 'FOMC' in original_vp or '流動性' in original_vp:
        new_text = "【2026.06 週二盤前更新】週一的長下影線雖有抄底買盤進駐，但不可高興得太早。市場仍在等待本週 CPI 數據與聯準會 Kevin Warsh 的態度，資金仍在流出高估值 AI 區塊，需提防反彈後的二次回測。"
    else:
        new_text = f"【2026.06 週二盤前更新】週一大盤洗出長下影線，顯示市場多空交戰激烈。{original_vp}"
        
    return f'viewpoint: "{new_text}"'

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Replace viewpoint and entryPoint
content = re.sub(r'viewpoint:\s*"(.*?)"', process_viewpoint, content)
content = re.sub(r'entryPoint:\s*"(.*?)"', process_entry_point, content)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print("Successfully updated all influencers for Tuesday morning.")
