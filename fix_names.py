import re

name_map = {
    '0050': '0050 (元大台灣50)',
    '0056': '0056 (元大高股息)',
    '00878': '00878 (國泰永續高股息)',
    '2330': '2330 (台積電)',
    '2454': '2454 (聯發科)',
    '2317': '2317 (鴻海)',
    '2382': '2382 (廣達)',
    '006208': '006208 (富邦台50)',
    '2308': '2308 (台達電)',
    '2412': '2412 (中華電)',
    '00679B': '00679B (元大美債20年)',
    '2603': '2603 (長榮)',
    '2881': '2881 (富邦金)',
    '1503': '1503 (士電)',
    '1519': '1519 (華城)',
    '3231': '3231 (緯創)',
    '2408': '2408 (南亞科)',
    '2344': '2344 (華邦電)',
    '3260': '3260 (威剛)',
    '2376': '2376 (技嘉)',
    '3324': '3324 (雙鴻)',
    '3017': '3017 (奇鋐)',
    '2609': '2609 (陽明)',
    '2615': '2615 (萬海)',
    '2356': '2356 (英業達)'
}

filepath = r'C:\Users\manpo\.gemini\antigravity\scratch\youtube_stocks_tracker\script.js'
with open(filepath, 'r', encoding='utf-8') as f:
    content = f.read()

def replacer(match):
    code = match.group(1)
    if code in name_map:
        return f'"{name_map[code]}"'
    return match.group(0)

start_idx = content.find('const twInfluencersData = [')
end_idx = content.find('];', start_idx) + 2

tw_data = content[start_idx:end_idx]
new_tw_data = re.sub(r'"(\d{4,6}[A-Z]*)"', replacer, tw_data)

new_content = content[:start_idx] + new_tw_data + content[end_idx:]

with open(filepath, 'w', encoding='utf-8') as f:
    f.write(new_content)

print('Success')
