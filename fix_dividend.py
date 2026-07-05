# -*- coding: utf-8 -*-
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

replacements = {
    "明日除息（-6元，參考價 2,249 元）": "日前強勢填息",
    "明日除息（2,249元）": "日前強勢填息",
    "明日除息（-6元）": "日前強勢填息",
    "明日除息": "日前除息",
    "除息後 2,200 元以下": "回檔 2,200 元以下",
    "除息後 2,100 元以下": "回檔 2,100 元以下",
    "明日填息速度": "後續量能",
    "除息後觀察量能": "回檔後觀察量能",
    "填息情況": "後續量能",
    "填息動能": "量能",
    "觀察量能是否有護盤資金進場": "觀察是否有買盤進場"
}

for old, new in replacements.items():
    content = content.replace(old, new)

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)
