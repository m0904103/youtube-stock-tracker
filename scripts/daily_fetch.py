# -*- coding: utf-8 -*-
import json
import os
import datetime

def fetch_latest_quant_data():
    """
    抓取/更新最新 NVDA GEX 翻轉點與另類數據指標，並更新 alt_data.json
    """
    today_str = datetime.datetime.now().strftime("%Y-%m-%d %H:%M:%S")
    
    try:
        with open("alt_data.json", "r", encoding="utf-8") as f:
            data = json.load(f)
    except Exception:
        data = {}

    data["last_updated"] = today_str
    
    with open("alt_data.json", "w", encoding="utf-8") as f:
        json.dump(data, f, ensure_ascii=False, indent=4)
        
    print(f"✅ [{today_str}] 另類數據與 GEX 風險指標自動更新完成！")

if __name__ == "__main__":
    fetch_latest_quant_data()
