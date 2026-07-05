# -*- coding: utf-8 -*-
import re
with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()

new_obj = '''    {
        name: "阿村伯",
        style: "存股與生活",
        viewpoint: "【2026.06.16 盤後解析】哎喲，今天這個盤真的嚇死人！早上跟著美國跌，下午又拉起來。我都跟鄉親說，台積電是台灣的寶，美國人半夜跌他們的，我們抱著好股票就對了！",
        stocks: ["2330 (台積電)", "0056 (元大高股息)", "2884 (玉山金)"],
        entryPoint: "好股票不要隨便賣，繼續抱著等領股息。"
    }'''

if 'name: "阿村伯"' not in text:
    match = re.search(r'const twInfluencersData = \[.*?\];', text, re.DOTALL)
    if match:
        old_array = match.group(0)
        new_array = old_array[:-2] + ',\n' + new_obj + '\n];'
        text = text.replace(old_array, new_array)
        with open('script.js', 'w', encoding='utf-8') as f:
            f.write(text)
        print('Added via regex!')
    else:
        print('Regex match failed.')
else:
    print('Already exists')
