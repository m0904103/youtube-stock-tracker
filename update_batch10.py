import json
import codecs
import re

updates = {
    "米哥大白話 (李永年)": {
        "vp": "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。留意長線 AI 與太空概念股，防範市場系統性修正壓力。",
        "ep": "優先佈局具長線支撐的先進封裝與太空概念股，同時務必提高現金比例以應對風險。"
    },
    "楊應超": {
        "vp": "【2026.07.03 盤勢追蹤】經查近期無重大更新，維持 6/25 策略。需警戒科技股泡沫，以「企業資本支出」為反轉指標。",
        "ep": "避免重壓單一個股或產業，建議將部分獲利轉入債券與大盤型 ETF 以分散風險。"
    },
    "吳嘉隆": {
        "vp": "【2026.07.03 盤勢追蹤】吳嘉隆指出 AI 是 5 到 6 年產業革命，基礎建設期無泡沫疑慮。看好台灣迎來黃金 5 年，台股有望翻倍，並點名「無人機」為潛在的第三座護國神山。",
        "ep": "建議捨棄短期循環思維，長線佈局 AI 硬體設施與無人機概念股。"
    },
    "杜金龍 (下班經濟學)": {
        "vp": "【2026.07.03 盤勢追蹤】杜金龍指出，台股創高後震盪加劇，需防範回測風險。資金恐轉向低基期「便當股」與記憶體轉機股，呼籲留意高檔爆量與融資餘額過高警訊。",
        "ep": "震盪行情中應買黑不買紅，將資金適度轉佈局低位階具基本面的銅板轉機股。"
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

print(f"Successfully updated {count} influencers with Batch 10 updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
