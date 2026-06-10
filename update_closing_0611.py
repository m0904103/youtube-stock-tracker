# -*- coding: utf-8 -*-
import re, json

UPDATES = {
    "Tom Lee (Fundstrat)": {
        "viewpoint": "【2026.06 收盤盤後】S&P 500 收 7,267（-1.62%），NASDAQ -1.98%，費半 -3.57%。Tom Lee 維持牛市基調：今日下跌屬「三階段走勢」中的短期震盪，SpaceX IPO（6/12）抽走流動性是主因。市場仍有約 7 兆美元現金在場外觀望！NVDA 收 $205.47，AI 需求基本面完全未變。SMCI -27.98% 是個別事件（增資稀釋）非系統性風險。年底 S&P 7,700 目標不動搖，今日的下跌正是逢低布局的機會！",
        "entryPoint": "【收盤操作】S&P 7,267 逢低分批布局 QQQ。NVDA $205 守穩可開始第一批。持有至年底目標 7,700。FOMC（6/17）前不加槓桿。"
    },
    "Mike Wilson (Morgan Stanley)": {
        "viewpoint": "【2026.06 收盤盤後】S&P 收 7,267（-1.62%），費半 -3.57%。Wilson 將半導體領跌定性為「健康的倉位重置」。SMCI -27.98%（70億增資稀釋）、AVGO -5.12%（AI 指引保守），皆為個別事件。企業年回購＋股息達 1.7 兆美元，底部流動性充裕。維持 S&P 年底 8,000 目標，「滾動式復甦」架構完整——AI 基建、去監管與財政刺激三大驅動力未變。",
        "entryPoint": "【收盤操作】維持年底 8,000 目標。趁本週波動分批建倉優質成長股。資金從過熱 AI 龍頭輪動至金融（XLF）、工業（XLI）。"
    },
    "Adam Kobeissi": {
        "viewpoint": "【2026.06 收盤盤後】S&P -1.62%，NASDAQ -1.98%，道瓊跌 953 點——Sell the News 完全兌現！「Magnificent 7」員工人均營收 27 萬美元（+20%），小型股卻持續萎縮，市場集中度風險極高！能源自 2 月大漲 50% 透過「油價→CPI 傳遞」推升通膨，美元指數衝破 100。SMCI -27.98% 的爆雷式個股風險將越來越多。FOMC（6/17）前現金為王！",
        "entryPoint": "【收盤操作】現金為王！FOMC（6/17）前不動。配置能源股（XLE）對沖通膨。SMCI 式爆雷風險持續存在，嚴格設停損。"
    },
    "Jensen Huang (黃仁勳)": {
        "viewpoint": "【2026.06 收盤盤後】NVDA 收 $205.47，費半 -3.57%，SMCI -27.98%，AVGO -5.12%——這些都是短期市場情緒，不代表 AI 需求有任何問題！台積電 5 月合併營收 4,170 億台幣（史上單月最高，年增 30.1%），完全驗證 AI 算力需求持續爆炸性成長。Blackwell 平台訂單排到 2027 年底，CoWoS 封裝技術供不應求。NVDA $200 是強力支撐，這是長線加碼的絕佳時機！",
        "entryPoint": "【收盤操作】NVDA $205，支撐在 $200。台積電明日除息（2,249元）基本面強健。長線投資者視今日下跌為加碼機會。"
    },
    "Cathie Wood (ARK木頭姐)": {
        "viewpoint": "【2026.06 收盤盤後】S&P -1.62%，NASDAQ -1.98%！ARK 今日繼續逢低加碼——這正是我等待的時機！SMCI -27.98% 的崩跌反而說明 AI 硬體投機性泡沫在破裂，而真正的 AI 應用（自動駕駛、加密金融）更值得長期持有。技術通縮必然長期壓制通膨，CPI 4.2% 是化石能源造成的過渡現象。繼續加碼 PONY AI 與 COIN！",
        "entryPoint": "【收盤操作】繼續逢低加碼 PONY 與 COIN。NVDA $205 以下試探性布局。恐慌時買，繁榮時賣，ARK 核心哲學不變。"
    },
    "Dan Ives (Wedbush)": {
        "viewpoint": "【2026.06 收盤盤後】S&P -1.62%，但 AI 超級週期最重磅消息到來：OpenAI 已秘密提交 IPO 申請！這是「AI 時代分水嶺時刻」，更多 AI 獨角獸即將公開上市。AVGO -5.12% 是短暫的 AI 指引保守措辭，非基本面問題。AAPL $289.57，WWDC 催化劑未結束，AI on iPhone 故事仍在揭幕。台積電 5 月月營收史上最高（4,170 億台幣）是 AI 超級週期最強驗證！",
        "entryPoint": "【收盤操作】維持超配 AI 基建：MSFT（$397）、PLTR（$132）、Oracle 逢低加碼。AAPL $289 是 WWDC 買點，目標 AI 功能全面落地。"
    },
    "Jim Cramer (瘋狂錢坑)": {
        "viewpoint": "【2026.06 收盤盤後】S&P -1.62%！道瓊跌 953 點！費半 -3.57%！SMCI -28%！我早就說了！三重壓力：CPI 4.2% 讓 Fed 降息無望、SpaceX IPO 抽走流動性、美伊衝突持續！Warsh 首次 FOMC（6/17）前不確定性巨大！建議持現金等 6/17！（⚠️ Cramer 反向指標：他叫你跑的時候，NVDA $205 附近往往是買點！）",
        "entryPoint": "【Cramer 反向指標】他說全部跑！記得反向操作——NVDA $200 附近，或許才是真正的底部！謹慎驗證後再行動。"
    },
    "Keith Gill (Roaring Kitty)": {
        "viewpoint": "【2026.06 收盤盤後】S&P -1.62%，NASDAQ -1.98%，SMCI -27.98%——Diamond Hands 的時刻！GME 今日收 ~$22，整體市場暴跌中相對穩健。外資台指期空單 60,472 口是一顆等待引爆的炸彈。費半 -3.57% 讓散戶心態崩潰，但這正是逆向機會的前夜！軋空行情最可能在 FOMC（6/17）後爆發！繼續持有，等待逆轉！",
        "entryPoint": "【收盤操作】GME $22 繼續持有。FOMC（6/17）後若外資空單大量回補，軋空行情將爆發！持有等待，嚴控倉位，不加槓桿。"
    },
    "美股小左": {
        "viewpoint": "【2026.06 收盤盤後】美股三大指數全面收黑：S&P 7,267（-1.62%），NASDAQ -1.98%，費半 -3.57% 為重災區！NVDA 收 $205.47，SMCI -27.98%，AVGO -5.12%。高盛宣布撤除 2026 全年降息預期！這比 CPI 本身更有殺傷力。10 年債殖利率 4.55%，美元 ~100，科技股估值雙重受壓。核心 CPI 月增 0.2% 是今日唯一亮點。明日台積電除息（2,249元），NVDA $200 支撐是本週最關鍵的技術防線！",
        "entryPoint": "【收盤操作】高盛撤降息預期 = 最大震撼！FOMC（6/17）前維持低倉位。NVDA 守 $200 才進場；台積電除息後守 2,200 才加碼。"
    },
    "霍比特小灰": {
        "viewpoint": "【2026.06 收盤盤後】美股確認收盤：S&P -1.62%，NASDAQ -1.98%，道瓊 -953 點，費半 -3.57%，VIX 21.71（中度恐慌）！NVDA $205，SMCI -27.98%。外資台指期空單夜盤再加空 777 口升至 60,472 口！台積電 ADR 跌 4.48%，明日除息（-6元），參考價 2,249 元。台股季線 42,500 點是下一個關鍵支撐。NVDA $200 的防守戰是本週技術面最重要的一役，失守則看 $190！",
        "entryPoint": "【收盤操作】台積電明日除息 2,249 元，觀察是否快速填息。NVDA 守 $200 才布局；台股季線 42,500 是多空分水嶺。等 FOMC（6/17）。"
    },
    "NaNa說美股": {
        "viewpoint": "【2026.06 收盤盤後】確認收盤：S&P 7,267（-1.62%），NASDAQ -1.98%，費半 -3.57%。NVDA $205，SMCI -27.98%，AVGO -5.12%，台積電 ADR $410.84（-4.48%）！高盛撤除 2026 全年降息預期是今日最震撼消息。10 年債 4.55%，美元破 100。但台積電 5 月營收史上最高 4,170 億台幣（+30.1%）！基本面完全沒問題。納斯達克仍在長期趨勢線之上。等那指收復 25,500 點確認反彈後再加碼。",
        "entryPoint": "【收盤操作】等那斯達克收復 25,500 點才加碼科技 ETF。台積電除息（2,249元）後若能填息，是加碼台積電的訊號。勿在 FOMC 前躁進！"
    },
    "游庭皓": {
        "viewpoint": "【2026.06 收盤盤後】美股收盤：S&P -1.62%，NASDAQ -1.98%，費半 -3.57%。高盛宣布 2026 全年不降息，最早 2027 才有空間！這是今日最重要的訊號。台積電 ADR -4.48%，明日除息（2,249元）。台積電 5 月營收史上最高 4,170 億台幣（年增 30.1%），基本面強健。台股月線已面臨考驗，但不宜過度悲觀——台積電明日填息速度，是判斷台股多頭信仰是否鬆動的關鍵指標！",
        "entryPoint": "【收盤操作】6/17 FOMC（Warsh 首秀）前降低槓桿。以台積電明日填息速度作為加碼台股先行訊號。定期定額族可擴大加碼。"
    },
    "郭哲榮 (折折)": {
        "viewpoint": "【2026.06 收盤盤後】美股收盤：S&P -1.62%，道瓊跌 953 點跌破 50,000！費半 -3.57%，SMCI -27.98%！郭哲榮最新：這是「打折」不是「骨折」——屬短期籌碼震盪非空頭反撲！CPI + SpaceX IPO + 美伊衝突 + FOMC 四重壓力同時爆發才造成如此跌幅。6/17 FOMC 後不確定性消除，市場有機會大反攻！台積電明日除息（2,249元），除息缺口即是最佳布局點，填息可期！千萬不要融資！",
        "entryPoint": "【收盤操作】台積電明日除息 2,249 元附近逢低分批買進，目標填息。FOMC（6/17）是最大轉折點——老天爺的禮物！持閒錢不融資！"
    },
    "股癌 (Gooaye)": {
        "viewpoint": "【2026.06 收盤盤後（EP669更新）】S&P -1.62%，NASDAQ -1.98%，SMCI -27.98%——這就是股市的「殺戮戰場」！但長線投資者根本不需要在意。台積電 5 月營收史上最高 4,170 億台幣（年增 30.1%），明日除息（-6元）是現金回饋股東，值得慶祝而非恐慌。高盛撤降息預期、CPI 4.2%，幾年後回頭看只是歷史長河中的小漣漪。0050、NVDA、台積電一股都沒動，定期定額繼續執行！",
        "entryPoint": "【收盤操作】長線族繼續持有，定期定額不停扣！台積電除息後若有機會跌至 2,000 元以下是千載難逢機會。短線高風險者等 FOMC 後再動。"
    },
    "有心節目": {
        "viewpoint": "【2026.06 收盤籌碼盤後快報】美股收盤：S&P -1.62%，費半 -3.57%，VIX 21.71！外資台指期空單最新：夜盤再加空 777 口 → 總計 60,472 口！CPI 後空方不退反進！台積電 ADR -4.48%，明日除息（2,249元）。三個轉折觀察指標：①外資台指期空單是否開始大量回補（目前仍在加空！）；②台積電明日填息速度；③FOMC（6/17）Warsh 措辭。空單降至 50,000 口以下才是真正的軋空轉折訊號！",
        "entryPoint": "【籌碼操作】外資空單 60,472 口仍在加空！暫不進場！等外資空單降至 50,000 口以下才是多頭轉折訊號。台積電除息日若外資淨買超 3 萬張，是短多訊號。"
    },
    "陳龍 (股市尊龍·運通財經)": {
        "viewpoint": "【2026.06 收盤盤後】美股收盤：S&P 7,267（-1.62%），NASDAQ -1.98%，費半 -3.57%，NVDA $205，SMCI -27.98%！台積電 ADR 收 $410.84（-4.48%）。明日台積電除息（-6元），參考價 2,249 元。歷史統計：台積電 27 次季除息有 21 次當日填息（78% 機率）！高盛撤 2026 全年降息預期是今日最重磅消息。等待外資空單從 60,472 口開始回補，是台股下一波反攻的起點！",
        "entryPoint": "【收盤操作】台積電明日除息（2,249元），歷史 78% 機率當日填息！若終場跌幅壓縮至 2% 以內（高於 2,204元），可小量承接。停損設 2,150 元。"
    }
}

with open('alt_data.json', 'r', encoding='utf-8') as f:
    d = json.load(f)
d['last_updated'] = '2026-06-11 06:10:00'
d['derivatives']['dix']['value'] = 35.8
d['derivatives']['dix']['status'] = '極度偏空 (S&P -1.62% / 費半 -3.57% / SMCI -28%)'
d['derivatives']['dix']['color'] = '#e74c3c'
d['derivatives']['gex']['value'] = -1.24
d['derivatives']['gex']['status'] = '波動爆炸 (VIX 21.71 / 道瓊跌953點)'
d['derivatives']['gex']['color'] = '#e74c3c'
d['nlp_sentiment']['retail_forums'][0]['score'] = 6
d['nlp_sentiment']['retail_forums'][0]['label'] = '史詩崩跌！費半-3.57% / SMCI-28% / NVDA $205'
d['nlp_sentiment']['retail_forums'][0]['color'] = '#e74c3c'
d['nlp_sentiment']['retail_forums'][1]['score'] = 5
d['nlp_sentiment']['retail_forums'][1]['label'] = '極度悲觀 (高盛撤除2026全年降息預期！)'
d['nlp_sentiment']['retail_forums'][1]['color'] = '#e74c3c'
d['nlp_sentiment']['macro_confidence']['score'] = 6
d['nlp_sentiment']['macro_confidence']['label'] = '10Y債4.55% / 美元DXY≈100 / VIX21.71'
with open('alt_data.json', 'w', encoding='utf-8') as f:
    json.dump(d, f, ensure_ascii=False, indent=4)
print('alt_data OK')

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()
success = 0
for name, fields in UPDATES.items():
    escaped = re.escape(name)
    if 'viewpoint' in fields:
        v = fields['viewpoint']
        pattern = r'(name:\s*"' + escaped + r'",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=v: m.group(1) + '"' + val + '"', content)
        if new != content:
            content = new
            success += 1
        else:
            print(f'WARN: {name}')
    if 'entryPoint' in fields:
        ep = fields['entryPoint']
        pattern = r'(name:\s*"' + escaped + r'".*?entryPoint:\s*)"[^"]*"'
        new = re.sub(pattern, lambda m, val=ep: m.group(1) + '"' + val + '"', content, flags=re.DOTALL)
        if new != content:
            content = new
with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
print(f'script.js: {success}/{len(UPDATES)} updated')
