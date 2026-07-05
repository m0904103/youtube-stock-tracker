import json
import codecs
import re

updates = {
    "郭哲榮 (折折)": {
        "vp": "【2026.07.03 最新解析】哲哲指出短線急漲2400點後回檔屬正常休息。面對 AI 泡沫疑慮，整體策略維持「拉回就做多」，建議回檔時冷靜尋找優質低基期好股，堅持不開槓桿。",
        "ep": "秉持「拉回就做多」原則，於回檔時以自有資金布局優質低基期好股。"
    },
    "林漢偉 (非凡)": {
        "vp": "【2026.07.03 最新解析】林漢偉指出受美股費半大跌與 AI 資本支出放緩擔憂拖累，電子權值股承壓。外資期貨空單偏空，資金正轉向機器人、軍工與生技等避險題材。",
        "ep": "留意電子權值股止跌訊號並提防中小型股補跌，短線可審慎關注避險題材族群。"
    },
    "胡睿涵 (非凡)": {
        "vp": "【2026.07.03 最新解析】胡睿涵表示台股正進行高檔健康籌碼清洗，切勿預設止跌點。止跌需觀察外資期貨空單降至6萬口以下且單日買超逾千億。AI 資金應從硬體轉向應用層面。",
        "ep": "稍安勿躁，待外資籌碼轉多且出現止跌訊號後，再將資金轉向 AI 應用及軟體族群。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.07.03 最新解析】經查主委於 7/2~7/3 期間並未發布最新短評或限動，內容停留在 7/1。",
        "ep": "目前無最新指引，建議先落實 7/1 節目之提醒：管理好盤前情緒，勿隨市場波動自亂陣腳。"
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

print(f"Successfully updated {count} influencers with Batch 7 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

# Update index.html
with codecs.open('index.html', 'r', 'utf-8') as f:
    html = f.read()

html = re.sub(r'script\.js\?v=\d+', 'script.js?v=128', html)

with codecs.open('index.html', 'w', 'utf-8') as f:
    f.write(html)
