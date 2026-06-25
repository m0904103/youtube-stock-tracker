# -*- coding: utf-8 -*-
import re
import codecs

updates = {
    "郭哲榮 (折折)": {
        "vp": "【2026.06.25 真實觀點】AI 並非泡沫，目前 AI 投資時代才剛開始！只要投資人不開槓桿，長期跟隨科技基本面，便能安然享受獲利。近期的千點級震盪只是補跌與泡沫戳小，反而提供了長線買點。特別看好美光財報帶動的記憶體族群與成熟製程。",
        "ep": "拒絕主動型與槓桿 ETF，以 0050 等市值型 ETF 為底牌，並關注基本面強勁的記憶體廠。"
    },
    "谷月涵": {
        "vp": "【2026.06.25 真實觀點】台股目前已進入『末升段牛市』。我對後市態度轉趨保守，甚至我個人目前已是『零持股』狀態。請記住『別賺最後一滴水』的原則，高檔隨時有回落風險。此外，AI 發展將大幅推升用電需求，我看好能源產業的衍生投資。",
        "ep": "居高思危，適度獲利了結入袋為安，並可考慮將資金分散配置於具 AI 題材支撐的能源產業。"
    },
    "股癌 (Gooaye)": {
        "vp": "【2026.06.25 真實觀點】台股近期的修正已經結束，大家不要因為手中部分持股轉弱就過度悲觀。AI 長線基本面依舊強勁，且趨勢正從雲端擴展至邊緣運算與 AI PC。我近期特別看好『功率半導體』族群，因為國際大廠漲價，訂單將外溢至台灣。",
        "ep": "大盤震盪勿隨意看空，建議將部分資金轉向佈局具備訂單外溢題材的功率半導體概念股。"
    },
    "米哥大白話 (李永年)": {
        "vp": "【2026.06.25 真實觀點】台股近期經歷情緒性劇烈波動，面對外資創紀錄大賣，必須提防修正風險。雖然美光財報優於預期帶動記憶體反彈，但仍須緊盯輝達動態。高檔賣壓沉重，切忌高槓桿或盲目追高漲幅過大的強勢股，別成為接盤俠。",
        "ep": "居高思危、逢高減碼，將資金轉向布局低位階、量價穩定的個股以控制風險。"
    },
    "楊應超": {
        "vp": "【2026.06.25 真實觀點】AI 雖為長期主軸，但當前科技股估值偏高，必須警戒泡沫風險。關鍵觀察指標為『企業資本支出』，若開始縮減即為反轉警訊。我也擔憂台積電赴美設廠的營運挑戰。記住，台積電再好也不能只買它，單一持股比重不應超過 10%。",
        "ep": "避免重壓單一個股或產業，建議將部分獲利轉入債券與大盤型 ETF 以分散風險。"
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
