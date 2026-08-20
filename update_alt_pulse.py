# -*- coding: utf-8 -*-
import json

with open('alt_data.json', 'r', encoding='utf-8') as f:
    data = json.load(f)

data['last_updated'] = "2026-08-20 15:50:00"

data['alt_fundamentals'] = [
    {
        "ticker": "MSFT",
        "sector": "雲端與 AI 軟體",
        "signal": "Similarweb 網頁流量 (Web Traffic)",
        "probability": "高",
        "description": "Copilot 企業版與 Azure AI 服務登入流量在 8 月初創下歷史新高，SaaS 訂閱與雲端業務超預期。"
    },
    {
        "ticker": "NVDA / 2330 (台積電)",
        "sector": "AI 算力與先進封裝",
        "signal": "Panjiva 海關提單 (Bill of Lading)",
        "probability": "高",
        "description": "台廠 ODM (廣達/緯創) 8 月最新海關出口北美 AI 伺服器貨櫃總噸數月增 +42%，Blackwell 產能與 CoWoS 出貨極度強勁。"
    },
    {
        "ticker": "SBUX / Retail",
        "sector": "非必需消費",
        "signal": "Earnest 信用卡消費 (CC Data)",
        "probability": "高",
        "description": "8 月 MCC 5812 (餐飲) 數據顯示平價連鎖餐飲消費頻次進一步降溫，中低收入客群消費縮減。"
    },
    {
        "ticker": "WMT / COST",
        "sector": "零售百貨與量販",
        "signal": "Planet Labs 衛星車流 (Satellite)",
        "probability": "中",
        "description": "8 月上旬全美賣場停車場車流年增 +3.5%，反映消費者轉向平價量販店之「消費降級」效益。"
    },
    "Cybersecurity / CPO",
    {
        "ticker": "Cybersecurity / 矽光子",
        "sector": "資安與光通訊",
        "signal": "ADS-B 私人飛機航跡 (Jet Tracking)",
        "probability": "中",
        "description": "科技巨頭 CEO 專機在 8 月頻繁降落於資安與 CPO 新創總部附近，潛在戰略併購補強熱絡。"
    },
    {
        "ticker": "SaaS Cloud",
        "sector": "軟體即服務",
        "signal": "Thinknum 職缺爬蟲 (Job Postings)",
        "probability": "中",
        "description": "8 月全球 SaaS 企業前瞻研發職缺小幅回升 +5%，人力裁撤完畢，AI 賦能研發需求增長。"
    },
    {
        "ticker": "HOOD / COIN",
        "sector": "數位金融 / 券商",
        "signal": "Sensor Tower 榜單 (App Intelligence)",
        "probability": "高",
        "description": "8 月初股市暴跌與強勁反彈帶動 Robinhood / Coinbase 免費榜排名衝回前 15，散戶交投與抄底熱度爆發。"
    }
]

# Ensure cybersecurity item formatting is valid dict
data['alt_fundamentals'] = [x for x in data['alt_fundamentals'] if isinstance(x, dict)]

with open('alt_data.json', 'w', encoding='utf-8') as f:
    json.dump(data, f, ensure_ascii=False, indent=4)

print("Updated alt_data.json successfully!")
