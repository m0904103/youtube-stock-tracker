import yfinance as yf
import datetime

def fetch_market_summary():
    tickers = {
        "S&P 500": "^GSPC",
        "Nasdaq": "^IXIC",
        "Dow Jones": "^DJI",
        "VIX": "^VIX"
    }
    
    print("================ 最新市場真實數據 ================")
    print(f"取得時間: {datetime.datetime.now().strftime('%Y-%m-%d %H:%M:%S')}")
    print("--------------------------------------------------")
    
    for name, symbol in tickers.items():
        try:
            ticker = yf.Ticker(symbol)
            todays_data = ticker.history(period='1d')
            if not todays_data.empty:
                current_price = todays_data['Close'].iloc[0]
                print(f"{name} ({symbol}): {current_price:.2f}")
            else:
                print(f"{name} ({symbol}): 無法取得今日數據")
        except Exception as e:
            print(f"{name} ({symbol}): 發生錯誤 - {str(e)}")
            
    print("==================================================")
    print("請 AI 根據上方【真實指數點位】來生成各 KOL 的觀點，絕不可憑空捏造具體數字！")

if __name__ == "__main__":
    fetch_market_summary()
