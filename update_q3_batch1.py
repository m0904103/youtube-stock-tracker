import json
import codecs
import re

updates = {
    "郭哲榮 (折折)": {
        "vp": "【2026.07.01 最新解析】郭哲榮昨日指出台股若持續瘋狂有突破5萬點的可能。但他同時示警記憶體報價已觸頂，將對台廠構成壓力。建議避開漲多的權值股，轉尋低基期且具防禦攻擊能力的標的。",
        "ep": "拉回就做多，嚴禁使用融資，務必以自有資金鎖定低基期優質股操作。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.07.01 最新解析】股癌於週三發布 EP675，解析季末資產再平衡尾聲，市場籌碼將回歸基本面。他重點指出被動元件與功率元件受 AI 需求帶動的漲價潮，並看好南電、台積電後續動能。",
        "ep": "反彈波段切忌頻繁換股以免追高殺低，建議保持耐心並適度拉高現金水位觀察。"
    },
    "老王愛說笑": {
        "vp": "【2026.07.01 最新解析】老王在週三節目解析台股大漲後需站穩短均線，並探討面板雙虎跨足先進封裝與 ABF 籌碼。今日特別點評華邦電，並持續於官方呼籲無任何 LINE 群以防粉絲被詐騙。",
        "ep": "觀察大盤能否穩守短期均線，並切勿加入任何冒名老王的 LINE 投資詐騙群組。"
    },
    "游庭皓": {
        "vp": "【2026.07.01 最新解析】游庭皓今日早報解析晶片股狂潮與道瓊創歷史新高後，下半年的資金輪動方向。同時探討中日稀土貿易戰所醞釀的漲價效應，並回顧台股挑戰五萬點的龐大資金動能。",
        "ep": "留意下半年資金從高檔晶片股輪動之方向，並密切關注稀土貿易戰帶來的原物料漲價題材。"
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

print(f"Successfully updated {count} influencers with mid-week updates.")

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)
