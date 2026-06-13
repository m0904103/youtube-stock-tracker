# -*- coding: utf-8 -*-
# 2026-06-13 Weekend Deep Update - All 26 influencers
import re

US_UPDATES = [
  {
    "name": "Tom Lee",
    "base": "Tom Lee",
    "viewpoint": "【2026.06.13 週末深度】Fundstrat Tom Lee 將 SPCX 首日 IPO 的長上影線定性為「流動性抽離」後的自然消化，而非看空訊號。NVDA 在此背景下逆勢收紅 $205.19（+0.16%），展現 AI 主線資金黏性極強。他認為 SPCX 掛牌吸引的是新增資本，並非從 AI 股搬家，兩者互不衝突。FOMC 6/17 Warsh 首秀基調預期偏鷹但市場已提前 price in，反彈壓力將在 FOMC 後釋放。",
    "entryPoint": "【週末操作】SPCX 回測 $152-$155 支撐區可分批布局；NVDA 持有不動，FOMC 後若跌至 $198 可加碼。"
  },
  {
    "name": "Mike Wilson",
    "base": "Mike Wilson",
    "viewpoint": "【2026.06.13 週末深度】Mike Wilson 視近期波動為「滾動式修復」的健康回調。SPCX 首日高 $176.52、收 $160.95 的長上影線是典型大型 IPO 供需失衡，不足以改變科技多頭結構。NVDA 強守 $205 更印證半導體盈利修正已達高峰。FOMC 6/17 他預期 Warsh 不變利率但措辭偏鷹，點陣圖若顯示 2026 降息次數更少，短線對成長股有壓但不改趨勢。",
    "entryPoint": "【週末操作】標普 5,400 以上維持多頭偏多，NVDA $200 以下是戰略加碼區，SPCX 第二週回測前高再決策。"
  },
  {
    "name": "Bill Ackman",
    "base": "Bill Ackman",
    "viewpoint": "【2026.06.13 週末深度】Bill Ackman 雖曾力推 SpaceX 透過 SPARC 構想上市，最終 IPO 採傳統路線，他仍公開看好 SPCX 長線價值。首日長上影線（高 $176.52、收 $160.95）是流通盤極小（不足 5%）下供需嚴重失衡的必然結果。NVDA 被他視為 AI 基礎建設不可或缺的底層算力，不輕易出場。Warsh FOMC 若鷹派言論超預期，將壓縮成長資產的估值空間，需保留對沖。",
    "entryPoint": "【週末操作】SPCX 等鎖定期結束前保守看待，長線投資者可現價持有；NVDA 多頭不變，設 $192 為警戒線。"
  },
  {
    "name": "Ray Dalio",
    "base": "Ray Dalio",
    "viewpoint": "【2026.06.13 週末深度】Ray Dalio 持續對 AI 股票泡沫化風險提出警示：「看多 AI 技術 ≠ 看多 AI 股票」，現行估值嵌入大量溢價。SPCX 首日長上影線（高 $176.52、收 $160.95）恰好印證熱度驅動的短線買盤容易快速退燒。他更擔憂美國債務高企、CPI 4.2% 迫使 Warsh 採緊縮立場，「金融壓抑」風險升溫，建議增持黃金、多元分散。",
    "entryPoint": "【週末操作】減少 AI 高估值個股曝險；NVDA 可持有但應設停損；增持黃金對沖 FOMC 鷹派尾部風險。"
  },
  {
    "name": "Stanley Druckenmiller",
    "base": "Stanley Druckenmiller",
    "viewpoint": "【2026.06.13 週末深度】Stanley Druckenmiller 在 2026 年已大幅削減包括 NVDA 在內的 AI 動能股持倉，將資金轉向基礎建設與舊經濟韌性資產。SPCX 首日的長上影線對他而言是典型「消息出盡」教科書案例：估值已反映過多情緒溢價，基本面需要時間追上。FOMC 方面，他認為通膨 CPI 4.2% 下 Warsh 無任何降息空間，若點陣圖更鷹，科技股將面臨多重估值壓縮。",
    "entryPoint": "【週末操作】對 SPCX 保持觀望，等股價穩定 2-3 週後再評估；已持有 NVDA 者可設 $192 停損，或兌現部分利潤。"
  },
  {
    "name": "Adam Kobeissi",
    "base": "Adam Kobeissi",
    "viewpoint": "【2026.06.13 週末深度】Adam Kobeissi 詳細記錄 SPCX 首日：480 億股成交量創 IPO 歷史紀錄！$176.52 高點後的急速回落是典型 Sell the News 壓力測試，但收盤 $160.95（+19.22%）仍遠優於多數 IPO 首日表現，意味市場仍在尋求合理均衡點。NVDA 的逆勢收紅（+0.16%，$205.19）被他解讀為 AI 機構資金的「定海神針」效應，FOMC 是下週最大的 Vol 事件。",
    "entryPoint": "【週末操作】SPCX 盤後 $166.85 顯示短線多方仍積極，可在 $158-$162 設置條件買單；NVDA 持倉不動。"
  },
  {
    "name": "Jim Cramer",
    "base": "Jim Cramer",
    "viewpoint": "【2026.06.13 週末深度】Jim Cramer 對 SPCX 首日持複雜態度：先前曾警告熱錢湧入可能引發 NVDA 等藍籌的流動性危機，首日長上影線（高 $176.52、收 $160.95）部分應驗。但 NVDA 逆勢收紅 $205.19 讓他的流動性危機論顯得過時。他認為 SPCX 流通盤極小供需失衡將支撐中長線，甚至大膽預測估值可能達 6 兆美元。Warsh FOMC 首秀是下週最大的不確定性。",
    "entryPoint": "【Cramer 反向指標】他喊 SPCX 估值 6 兆？短線小心高點！NVDA $200 以下可加碼。"
  },
  {
    "name": "Cathie Wood",
    "base": "Cathie Wood",
    "viewpoint": "【2026.06.13 週末深度】ARK Invest 的 Cathie Wood 在 SPCX 上市首日即透過 ARKK、ARKQ、ARKW、ARKX 四支 ETF 合計買入超過 329 萬股（約 4.44 億美元），直接用真金白銀表態！她認為首日長上影線（高 $176.52、收 $160.95）是市場給長線投資者的「禮物」——未來 Starlink 的全球覆蓋率與 AI 算力整合將重新定義太空經濟。她同期持續增持 NVDA，AI 主線的高度確信不動搖。",
    "entryPoint": "【週末操作】ARK 示範操作即最佳參考：SPCX 首日高點不追，逢回至 $155-$160 分批買入；NVDA 繼續持有。"
  },
  {
    "name": "Dan Ives",
    "base": "Dan Ives",
    "viewpoint": "【2026.06.13 週末深度】Dan Ives 將 SPCX 掛牌定性為「市場里程碑時刻」！這不只是太空公司上市，更是 AI 整合型企業估值的全新參照系。他預測 Tesla 與 SpaceX 合併機率達 80-90%（目標 2027 年中），AI 協同效應將創造難以估量的商業價值。NVDA 逆勢收紅 $205.19 被他稱為 AI 超週期「第三局第一個出局數」階段的最佳佐證，牛市遠未結束。",
    "entryPoint": "【週末操作】SPCX 長線必持！Tesla-SpaceX 合併消息兌現前所有回調都是機會；NVDA $210 以下繼續買。"
  },
  {
    "name": "Unusual Whales",
    "base": "Unusual Whales",
    "viewpoint": "【2026.06.13 週末深度】Unusual Whales 追蹤到 SPCX 首日成交量高達 480 億股，選擇權流量顯示機構大量買入 30-60 天到期的 Call，隱含波動率（IV）居高不下。NVDA 方面，Max Pain 與 Gamma Exposure（GEX）數據顯示做市商在 $200-$205 區間存在大量對沖壓力，但期限溢價並未崩潰，說明機構仍在增倉而非出場。FOMC 前一週通常是 Vol 被壓縮的時期，6/17 後若措辭超鷹可能引發 Vol 急速擴張。",
    "entryPoint": "【週末操作】SPCX 可留意 7 月到期 $170 Call；NVDA 持股者可賣出 6/20 $210 Call 收保護性權利金。"
  },
  {
    "name": "Keith Gill",
    "base": "Keith Gill",
    "viewpoint": "【2026.06.13 週末深度】Keith Gill（Roaring Kitty）目前無可驗證的公開貼文針對 SPCX 或 NVDA 表態。2026 年 5 月其 X 帳號曾出現涉及 Solana Meme Coin 的異常活動，被普遍研判為帳號遭入侵所致，非本人操作。Reddit 社群（r/Superstonk）對他是否會借 SPCX 大 IPO 重返市場有高度期待，但目前無實質動靜。其核心關注點仍圍繞 GameStop（GME），對 AI/太空概念股暫無公開倉位揭露。",
    "entryPoint": "【週末推演】靜待 Roaring Kitty 本人官方帳號確認回歸才具參考意義；目前以 GME 動態為主要觀察指標。"
  },
  {
    "name": "Dan Niles",
    "base": "Dan Niles",
    "viewpoint": "【2026.06.13 週末深度】Dan Niles 對 SPCX 首日（高 $176.52、收 $160.95）的長上影線持審慎態度：市場對 SpaceX 28.5 兆美元 TAM 的定價過於樂觀，投資者需區分「AI 基礎設施平台」與「火箭公司」的根本估值邏輯差異。NVDA 雖長線看多 AI 基礎建設週期，但對估值拉升過快後的泡沫化風險保持高度警惕。FOMC 方面，CPI 4.2% 配合地緣緊張是影響風險資產的雙重頭風。",
    "entryPoint": "【週末操作】SPCX 等基本面驗證後再進場，觀察第一份財報；NVDA 在 $195-$200 為多空分水嶺，守則持、破則減。"
  }
]

TW_UPDATES = [
  {
    "name": "游庭皓",
    "base": "游庭皓",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日長上影線（高 $176.52、收 $160.95）是 IPO 正常換手，馬斯克保留 30% 給散戶、定價權自握，是華爾街主導地位式微的歷史信號。NVDA 逆勢收紅 $205.19（+0.16%），代表 AI 主線資金絲毫未被 SPCX 排擠，兩者互為驗證。下週 Warsh 首秀 FOMC 若點陣圖縮減降息次數，台股短線將承壓，但結構性多頭未變。",
    "entryPoint": "【週末操作】SPCX 回測 $149-$155 區間支撐時分批承接，NVDA 維持核心倉位不動，FOMC 前不輕易動刀。"
  },
  {
    "name": "郭哲榮",
    "base": "郭哲榮",
    "viewpoint": "【2026.06.13 週末深度】SPCX=AI 概念股！長上影線是 IPO 蜜月期必然換手，不是主力出貨，盤後 $166.85 更證明市場信心未散。NVDA 0.16% 的抗跌是 AI 主線最強烈的宣示，資金根本沒有離場！Warsh 點陣圖若維持兩次降息預期，台股科技股將迎來一波補漲；台積電外資持股跌破 70% 是籌碼轉換，非利空！",
    "entryPoint": "【週末操作】SPCX 趁高點回落至 $155 附近小幅佈局，台積電逢外資賣壓逢低買進！"
  },
  {
    "name": "股癌",
    "base": "股癌",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日 $176.52 高點被打下來不用驚慌，這是大型 IPO 的正常籌碼洗牌（收 $160.95，盤後 $166.85 反彈）。真正有趣的是 NVDA 在 SPCX 搶盡目光之下仍守穩 $205.19，說明 AI 主線資金黏性極強。Warsh 首秀 FOMC 是最大變數，若釋放偏鷹訊號或縮減點陣圖降息次數，美股短期震盪但別輕易降低持股比例。",
    "entryPoint": "【週末操作】持股不動，等 FOMC 結果明朗後再決定是否加碼 NVDA 或 SPCX，0050 定期定額繼續！"
  },
  {
    "name": "有心節目",
    "base": "有心節目",
    "viewpoint": "【2026.06.13 週末深度】SPCX 長上影線反映 IPO 散戶追高後的正常獲利了結（高 $176.52、收 $160.95），盤後 $166.85 反彈則顯示基本面信仰者快速回補。NVDA 在聚光燈全打向 SPCX 時仍收紅 $205.19，是 AI 週期韌性最佳佐證。FOMC Warsh 若廢除或淡化點陣圖，台股反應初期可能過度恐慌，反而是短線進場機會。",
    "entryPoint": "【籌碼操作】FOMC 前維持七成倉位，Warsh 偏鴿意外驚喜時立即加碼台積電！"
  },
  {
    "name": "陳龍",
    "base": "陳龍",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日高達 $176.52、收 $160.95，長上影線清楚，技術面短線超買，但盤後 $166.85 顯示買盤仍強。NVDA 在 SPCX 光環下收紅 $205.19（+0.16%），但這僅是小幅拉高，若 FOMC 偏鷹將成雙重壓力。台股下週前四天宜保守，等 6/17 FOMC 結果後再決定方向，台積電守住前高支撐是關鍵。",
    "entryPoint": "【週末操作】FOMC 前降低 SPCX 部位至兩成，FOMC 後視點陣圖訊號再回補。"
  },
  {
    "name": "米哥大白話",
    "base": "米哥大白話",
    "viewpoint": "【2026.06.13 週末深度】SPCX 長上影線最直白的解讀：IPO 第一天漲太多，Part money 取走是人之常情（高 $176.52 衝到就跑），但盤後 $166.85 是真實底牌。NVDA 連 SPCX 都搶不走它的籌碼，AI 主線就是主線！Warsh FOMC 首秀市場最怕的就是「鷹派黑天鵝」，台股投資人先把風控做好，留子彈應對震盪。",
    "entryPoint": "【週末操作】SPCX 短線不追高，等回測 $149-$155 箱底後才是真正的進場點。"
  },
  {
    "name": "鈔錢部署",
    "base": "鈔錢部署",
    "viewpoint": "【2026.06.13 週末深度】SPCX 上影線代表 $176.52 一線有大量短期獲利了結的籌碼，需要時間消化，但 IPO 熱潮的本質是換手而非出貨終結（盤後 $166.85 反彈印證）。台股低軌衛星概念股短線宜觀望。NVDA 韌性強是 AI 基建需求未減的體現（收 $205.19）。FOMC Warsh 若縮減點陣圖降息，台幣走升壓力暫歇，對出口股有利。",
    "entryPoint": "【週末操作】台股衛星族群短線觀望，NVDA、台積電維持核心持股，等 FOMC 指引明確。"
  },
  {
    "name": "美股研究社",
    "base": "美股研究社",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日技術面：盤中高 $176.52、低 $149.34、收 $160.95，長上影線揭示上方賣壓，但盤後 $166.85 彌補了收盤弱勢，說明是換手非崩盤。NVDA 面對史上最大 IPO 吸金仍守住 $205.19（+0.16%），是 AI 主線最強韌的數據支撐。FOMC Warsh 首秀最大看點是點陣圖降息次數，台股防守性配置占比可略提高。",
    "entryPoint": "【週末操作】SPCX 等一週後再評估籌碼是否沉澱，NVDA $200 以下為長線加碼區。"
  },
  {
    "name": "美股小左",
    "base": "美股小左",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日開高走低（高 $176.52、低 $149.34、收 $160.95）形成長上影線，技術上短線偏弱，但 $149 低點快速拉回收 $160 代表空方力道有限，盤後 $166.85 更是積極訊號。NVDA 連發行史上最大 IPO 都打不動它（收 $205.19），AI 算力主線堅不可摧。Warsh FOMC 若點陣圖降息次數砍至一次甚至零，外資可能短暫撤台，但結構多頭不變。",
    "entryPoint": "【週末操作】SPCX 短線觀望至 FOMC 後，NVDA 逢修正至 $195-$200 分批加碼。"
  },
  {
    "name": "NaNa說美股",
    "base": "NaNa說美股",
    "viewpoint": "【2026.06.13 週末深度】SPCX 長上影線不用過度解讀，歷史上大型 IPO 首日出現此形態後第二週反彈機率高（盤後 $166.85 已有佐證）。NVDA 抗跌 +0.16%（$205.19）完美詮釋了「AI 主線資金的選擇性」。最大懸念是 Warsh 首秀 FOMC——他不喜歡前瞻指引且可能削弱點陣圖效力，若訊息模糊市場恐短暫震盪，台股在 FOMC 前維持小步前行、不宜重押。",
    "entryPoint": "【週末操作】SPCX 佈局時間等 FOMC 塵埃落定，屆時若 $155 以上站穩即可建立第一筆部位。"
  },
  {
    "name": "霍比特小灰",
    "base": "霍比特小灰",
    "viewpoint": "【2026.06.13 週末深度】SPCX 長上影線是 IPO 日正常流量（高 $176.52、收 $160.95、盤後 $166.85），不代表敘事瓦解。SpaceX=Starlink 算力平台+xAI，馬斯克把硬體工程轉換成商業閉環的能力是真實護城河。NVDA 與 SpaceX 深度繫綁（AI 衛星用 NVDA GPU），兩者互為驗證（NVDA 收 $205.19），AI 週期遠未結束。FOMC Warsh 若鷹派，是加碼 NVDA 的短暫視窗！",
    "entryPoint": "【週末操作】SPCX 長期看好，首週波動正常，等 $149-$155 支撐確立後中線建倉。"
  },
  {
    "name": "貝拉聊財經",
    "base": "貝拉聊財經",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日長上影線（高 $176.52、收 $160.95）詮釋：短期追高者在高點獲利出場，但盤後 $166.85 已收復大部分失地，籌碼換手未完成。NVDA 在史上最熱 IPO 旁邊紋絲不動（收 $205.19，+0.16%），AI 信仰者根本沒打算換股。Warsh FOMC 首秀若偏鷹，台積電外資跌破 70% 後本土 ETF 接盤，跌深即是加碼機會。",
    "entryPoint": "【週末操作】台積電每逢外資大額賣超時逢低買進，SPCX 等 FOMC 後確認方向再進場。"
  },
  {
    "name": "陽光財經",
    "base": "陽光財經",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日長上影線（高 $176.52、收 $160.95）在 AI/太空概念高潮後屬正常修正，盤後 $166.85 顯示場外資金仍積極。NVDA 韌性代表輝達的 AI 算力護城河不因新 IPO 而動搖（收 $205.19）。下週 Warsh FOMC 重點：CPI 年增 4.2% 背景下，若點陣圖暗示全年僅一次降息，台幣有升值壓力，外資恐短線回流美元資產，台積電與 AI 供應鏈短線需防。",
    "entryPoint": "【週末操作】FOMC 前降低整體曝險，Warsh 鴿派意外時快速加回台積電與 NVDA 倉位。"
  },
  {
    "name": "傑夫",
    "base": "傑夫",
    "viewpoint": "【2026.06.13 週末深度】SPCX 首日技術解讀：開 $150、高 $176.52、低 $149.34、收 $160.95，長上影線是上方套牢賣壓的明確警訊，短期壓力區落在 $170-$176.52。但盤後 $166.85 顯示買盤仍在。NVDA 在 SPCX 搶版面下仍收 +0.16%（$205.19），代表 AI 主線法人不動如山。FOMC Warsh 點陣圖若維持 2026 年降息 2 次，台股多頭可望延伸；若縮至 1 次，短線修正但 AI 族群率先回補。",
    "entryPoint": "【週末操作】SPCX 空手者等回測 $155 支撐確認後進場，持有者設 $149 嚴格停損線。"
  }
]

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

success = 0

def update_influencer(content, base_name, viewpoint, entry_point):
    escaped = re.escape(base_name)
    v_pattern = r'(name:\s*"[^"]*' + escaped + r'[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"'
    new = re.sub(v_pattern, lambda m, val=viewpoint: m.group(1) + '"' + val + '"', content)
    changed = new != content
    content = new
    ep_pattern = r'(name:\s*"[^"]*' + escaped + r'[^"]*".*?entryPoint:\s*)"[^"]*"'
    new = re.sub(ep_pattern, lambda m, val=entry_point: m.group(1) + '"' + val + '"', content, flags=re.DOTALL)
    content = new
    return content, changed

all_updates = US_UPDATES + TW_UPDATES
for item in all_updates:
    content, changed = update_influencer(content, item['base'], item['viewpoint'], item['entryPoint'])
    if changed:
        success += 1
    else:
        print(f'WARN: {item["name"]}')

# Special patches for encoded names
SPECIALS = [
    ('折', TW_UPDATES[1]),  # 折折
    ('Gooaye', TW_UPDATES[2]),  # 股癌
]
for key, item in SPECIALS:
    # viewpoint
    m = re.search(r'(name:\s*"[^"]*' + key + r'[^"]*",\s*\n\s*style:\s*"[^"]*",\s*\n\s*viewpoint:\s*)"[^"]*"', content)
    if m:
        content = content[:m.start(1)] + m.group(1) + '"' + item['viewpoint'] + '"' + content[m.end():]
        success += 1
    # entryPoint
    m2 = re.search(r'(name:\s*"[^"]*' + key + r'[^"]*".*?entryPoint:\s*)"[^"]*"', content, re.DOTALL)
    if m2:
        content = content[:m2.start(1)] + m2.group(1) + '"' + item['entryPoint'] + '"' + content[m2.end():]

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

print(f'script.js: {success}/{len(all_updates)} updated')

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()
c = re.sub(r'(?<=最後自動更新: )[\d\- :]+', '2026-06-13 21:33', c)
c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)
print('index.html updated')
