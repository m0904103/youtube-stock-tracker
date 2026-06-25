# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "吳嘉隆": {
        "vp": "【2026.06.25 真實觀點】我對台灣經濟抱持極樂觀的『超級多頭』看法！在主權 AI 需求爆發、非紅供應鏈轉單效應及地緣政治風險下降等動能加持下，台灣正迎來『黃金五年』。這波由產業革命驅動的漲勢將打破傳統景氣循環，台股長線有機會挑戰十萬點！台積電更是驅動大盤的核心關鍵。",
        "ep": "把握 AI 產業革命的長線上升趨勢，以台積電為核心資產，逢拉回皆是長線佈局買點。"
    },
    "Stanley Druckenmiller": {
        "vp": "【2026.06.25 真實觀點】我認為市場將出現類股輪動，因此我大幅減持了 Meta 和 Alphabet 等大型科技股，轉而買入標普 500 等權重 ETF。我將資金轉向重倉基因檢測公司 Natera (NTRA) 並關注生技產業。此外，AI 資料中心的龐大耗電需求將導致能源供給吃緊，這是我極度看好的領域。",
        "ep": "適度獲利了結漲幅過大的大型科技股，將資金分散佈局於等權重 ETF、生技醫療及能源基礎設施。"
    },
    "林漢偉 (非凡)": {
        "vp": "【2026.06.25 真實觀點】近期台股的高檔震盪與回檔屬於漲多後的健康洗盤，絕非 AI 泡沫破滅！只要費半指數未現空頭訊號且台積電守住季線，多頭格局就不會改變。預期在美國國慶及台積電 7 月法說會利多帶動下，7 月上旬仍有高點可期，但需提防中旬後可能出現較大回檔。",
        "ep": "當市場盲目殺盤，優質基本面個股被錯殺回落至 5 日線或月線尋得支撐時，即可伺機彎腰撿便宜。"
    },
    "胡睿涵 (非凡)": {
        "vp": "【2026.06.25 真實觀點】台積電仍是多頭核心，但 AI 類股走勢開始分歧。資金有望輪動至歷年表現較佳的生技醫療、重電工程與內需觀光。後續須密切關注聯準會 PCE 數據、7月中旬台積電法說會，以及中東地緣政治對油價與通膨的影響。(註：本人已轉任元大投顧，絕不帶會員操作)",
        "ep": "指數高檔時應做好資金與風險控管，切莫擴大財務槓桿，可逢低布局具輪動潛力的生技或重電族群。"
    },
    "Jensen Huang (黃仁勳)": {
        "vp": "【2026.06.25 真實觀點】產業已正式邁入『代理型 AI（Agentic AI）時代』！AI 已從實驗性質轉變為能自主決策與執行複雜任務的工具。現代資料中心就是創造實質經濟價值的『AI 工廠』。我們已全面量產 Vera Rubin 架構，並強調 Vera CPU 在維持 AI 代理持續運作上的關鍵作用！",
        "ep": "投資策略應從單純的硬體算力佈局，進一步延伸至『代理型 AI 軟體生態系』及協同運算相關供應鏈。"
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
