# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "Bill Ackman (Pershing Square)": {
        "vp": "【2026.06.25 真實觀點】微軟、亞馬遜和 Meta 這些科技巨頭，現在已經成為了『老派的科技股便宜貨 (old-fashioned tech bargains)』！市場嚴重低估了這些公司持久的成長性與高度可預期的現金流。我們新推出的 PSUS 基金，就是要重倉這類具有持久護城河的優質成長型企業。",
        "ep": "聚焦財報穩健、具備強大現金流與長期成長潛力的大型科技龍頭，逢低佈局並長期持有。"
    },
    "Ray Dalio (Bridgewater)": {
        "vp": "【2026.06.25 真實觀點】全球正處於地緣政治秩序重構的『現代重商主義』時代。由 AI 帶動的科技股狂飆已經出現了『泡沫化』的跡象。各國高築的債務負擔風險正在累積。在這些錯綜複雜的壓力下，傳統的投資組合將面臨極具挑戰性的環境，難以產生過去的預期回報。",
        "ep": "在科技股泡沫疑慮與地緣政治風險升溫下，降低傳統股債配置比例，轉而增持實體黃金或多元化資產避險。"
    },
    "游庭皓": {
        "vp": "【2026.06.25 真實觀點】市場資金正從黃金、比特幣轉向股市，顯示流動性趨於緊繃。我雖然看好受惠於 AI 強勁需求與供給稀缺的半導體（如美光），但必須警告聯準會轉鷹帶來的重新定價風險。此外，SpaceX 雖逢上市狂熱，但 9 月將迎來內部人解禁的龐大賣壓，務必留意！",
        "ep": "適度布局具結構性缺貨題材的半導體標的，但須保留現金彈性，以應對緊縮震盪與高估值個股的解禁賣壓。"
    },
    "財報狗 (StatementDog)": {
        "vp": "【2026.06.25 真實觀點】我們近期深度剖析晶圓代工與記憶體產業，特別關注 AI 伺服器需求激增下的量價走勢。從美光等大廠財報可以看出高頻寬記憶體（HBM）的受惠程度。此外，我們也將視野延伸至綠電與功率半導體等熱門題材，但強調必須透過客觀的基本面與財務數據來驗證市場熱度。",
        "ep": "優先布局具備實質 AI 伺服器與 HBM 訂單支撐的半導體績優股，嚴格以實際財報轉化率作為進出場依據。"
    },
    "鈔錢部署 (盧燕俐 ft. 杜金龍)": {
        "vp": "【2026.06.25 真實觀點】近期大跌正是抄底的好時機！我們特別探討了富邦金挑戰 200 元的潛力（需具備高 EPS 成長與 4.5% 殖利率等條件），以及鴻海重返 300 元後挑戰 500 元的可能。同時，台積電低檔佈局時機與低軌衛星題材也是近期的資金行情焦點。",
        "ep": "進場必須以客觀數據為依歸，標的站穩季線（MA60）才可防守反擊，切勿憑題材追高，並設好停損與保留兩成現金。"
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
