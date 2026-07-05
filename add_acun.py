# -*- coding: utf-8 -*-
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
    if '];\n\n// --- 頁面初始化與卡片渲染 ---' in text:
        text = text.replace('];\n\n// --- 頁面初始化與卡片渲染 ---', '    },\n' + new_obj + '\n];\n\n// --- 頁面初始化與卡片渲染 ---')
        with open('script.js', 'w', encoding='utf-8') as f:
            f.write(text)
        print('Added to LF')
    elif '];\r\n\r\n// --- 頁面初始化與卡片渲染 ---' in text:
        text = text.replace('];\r\n\r\n// --- 頁面初始化與卡片渲染 ---', '    },\r\n' + new_obj + '\r\n];\r\n\r\n// --- 頁面初始化與卡片渲染 ---')
        with open('script.js', 'w', encoding='utf-8') as f:
            f.write(text)
        print('Added to CRLF')
    else:
        print('Could not find injection point.')
else:
    print('Already exists')
