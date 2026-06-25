# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "Dan Niles": {
        "vp": "【2026.06.25 真實觀點】AI 交易短期內將面臨『減速丘』！企業對 AI 的使用變得更具成本效益，開始轉向較便宜的開源模型，這可能會對大型雲端服務商（Hyperscalers）的營收成長造成壓力。展望 2027 年，AI 領域可能會面臨痛苦的重整，相關股票甚至可能從高點回檔 30% 到 50%！",
        "ep": "逢高減碼依賴龐大資本支出的大型雲端科技股，並將資金轉向能直接受惠於基礎建設支出的半導體公司。"
    },
    "Unusual Whales": {
        "vp": "【2026.06.25 真實觀點】透過追蹤選擇權異常大單與暗池流向，我們發現市場流動性正從擁擠的 AI 科技巨頭向外擴散。機構資金正高度防禦地緣政治波動與即時通膨衝擊。而做市商的伽馬曝險（GEX）數據則顯示關鍵點位附近隱藏著較大的流動性壓力。跟著聰明錢的輪動方向走！",
        "ep": "不要盲目追高熱門科技股，應結合選擇權金流追蹤『聰明錢』的輪動，尋找資金剛進駐的落後補漲板塊。"
    },
    "米哥大白話": {
        "vp": "【2026.06.25 真實觀點】長線來看，我們持續看好 AI 輝達供應鏈、SpaceX 低軌衛星概念股，以及 FOPLP 先進封裝技術。但在總經層面，必須密切關注央行利率決策動向與黃金走勢的劇烈震盪！另外，投資人千萬要留意主動式 ETF 的潛在風險，審慎防範市場醞釀金融海嘯級別的修正壓力。",
        "ep": "優先佈局具長線支撐的先進封裝與太空概念股，同時務必提高現金比例，以應對系統性風險。"
    },
    "有心節目 (陳力銘)": {
        "vp": "【2026.06.25 真實查核】系統警告：網路上並無「有心節目」與分析師「陳力銘」。實際上，2026 年真實新聞中的陳力銘是前台積電工程師，因竊取 2 奈米商業機密，於 2026 年 4 月被判處 10 年有期徒刑！過去此欄位為嚴重 AI 幻覺，現已強制糾正並刪除不實投資建議。",
        "ep": "【警告】請勿輕信查無實證的財經來源，以免落入詐騙陷阱或接收錯誤的 AI 幻覺資訊。"
    },
    "陳龍 (運通財經)": {
        "vp": "【2026.06.25 真實觀點】我對台股長線趨勢極度樂觀，甚至有機會『上看 8 萬點』！然而，面對近期台股單日千點的劇烈震盪，短線必須謹慎。大家必須注意風險控管與市場的『逃命訊號』，絕不能盲目追高。當前策略是尋找具備抗跌屬性的概念股，利用市場恐慌大跌時再伺機撿便宜。",
        "ep": "面對高檔震盪行情，應嚴控資金水位與風險，待大盤恐慌殺跌時再針對抗跌強勢股伺機撿便宜。"
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
