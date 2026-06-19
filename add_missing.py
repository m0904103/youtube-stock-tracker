# -*- coding: utf-8 -*-
import re
import codecs

missing_influencers = """    },
    {
        name: "陽光財經 (尼可拉斯陽)",
        channel: "陽光財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=陽&background=f1c40f&color=fff",
        viewpoint: "【2026.06.20 週末結算】四巫日的結算行情雖然在尾盤帶來了跳水，但從資金流向來看，我們追蹤的機構大單並沒有撤離科技巨頭。下週一的開盤非常關鍵，如果能迅速收復週五的跌幅，多頭將繼續主導。週末建議大家檢視手中持股的技術型態。",
        entryPoint: "等待下週一開盤確認方向，若收復週五跌幅可加碼科技股。"
    },
    {
        name: "貝拉聊財經 (Bella)",
        channel: "貝拉聊財經",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=貝&background=e84393&color=fff",
        viewpoint: "【2026.06.20 週末結算】哈囉大家！這個禮拜美股真的是太洗了！四巫日的尾盤急殺，相信嚇到了不少短線客。但如果你看特斯拉和微軟，其實下方支撐非常強。下週的 PCE 數據將是下一個引爆點。週末好好放鬆，下週我們再戰！",
        entryPoint: "保持耐心，逢低佈局具有強勁支撐的大型科技股。"
    },
    {
        name: "傑夫 (美股)",
        channel: "傑夫",
        type: "us",
        avatar: "https://ui-avatars.com/api/?name=傑&background=0984e3&color=fff",
        viewpoint: "【2026.06.20 週末結算】週五的四巫日完美詮釋了什麼叫『技術性回調』。我們在 VIP 群裡已經提早讓大家避開了尾盤的下殺。從選擇權籌碼來看，下週初市場會進行短暫的箱型整理。這是一個絕佳的汰弱留強時機。",
        entryPoint: "利用下週初的箱型整理，將資金集中到強勢領頭羊。"
    }
];"""

with codecs.open('script.js', 'r', 'utf-8') as f:
    content = f.read()

if "陽光財經" not in content:
    content = re.sub(r'}\s*\];', missing_influencers, content)
    with codecs.open('script.js', 'w', 'utf-8') as f:
        f.write(content)
    print("Successfully added Nicholas Yang, Bella, and Jeff!")
else:
    print("Already added.")
