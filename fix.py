# -*- coding: utf-8 -*-
import codecs
import re

with codecs.open('script.js', 'r', 'utf-8') as f:
    content = f.read()

# Add stocks to the 3 newly added influencers if missing
content = re.sub(r'(name:\s*"陽光財經.*?entryPoint:.*?)(\n\s*})', r'\1,\n        stocks: ["SPY (標普500)", "QQQ (納斯達克100)"]\2', content, flags=re.DOTALL)
content = re.sub(r'(name:\s*"貝拉聊財經.*?entryPoint:.*?)(\n\s*})', r'\1,\n        stocks: ["TSLA (特斯拉)", "MSFT (微軟)"]\2', content, flags=re.DOTALL)
content = re.sub(r'(name:\s*"傑夫.*?entryPoint:.*?)(\n\s*})', r'\1,\n        stocks: ["QQQ (納斯達克100)", "NVDA (輝達)"]\2', content, flags=re.DOTALL)

# Now twInfluencersData has these 3 appended incorrectly at the end of its array.
# The `twInfluencersData` ends after '阿村伯'. We can find the second occurrence of these 3 influencers and remove them.
# The easiest way is to split the content by `twInfluencersData = [`
parts = content.split('const twInfluencersData = [')
us_part = parts[0]
tw_part = parts[1]

# In tw_part, we want to remove the block starting from the extra `陽光財經` to the end of the array.
# Let's find '阿村伯' and the closing `}` after it.
match = re.search(r'name:\s*"阿村伯".*?entryPoint:.*?\n\s*}', tw_part, flags=re.DOTALL)
if match:
    end_of_acun = match.end()
    # The array should end right after 阿村伯
    # The rest before `];` is the wrongly appended items.
    # We can just construct the new tw_part:
    new_tw_part = tw_part[:end_of_acun] + '\n];'
    # Wait, there's also the rest of the file after `];`
    rest_of_file = tw_part.split('];', 1)[1]
    # Wait, my regex appended it to the end of the array, so it replaced `];` with the items + `];`
    # So `new_tw_part` + `rest_of_file_after_the_LAST_bracket`
    # Actually, it's safer to just do a string replacement on tw_part to remove the extra names.
    extra_names = ['陽光財經 \\(尼可拉斯陽\\)', '貝拉聊財經 \\(Bella\\)', '傑夫 \\(美股\\)']
    for name in extra_names:
        tw_part = re.sub(r',\s*{\s*name:\s*"' + name + r'".*?stocks:.*?}', '', tw_part, flags=re.DOTALL)
        tw_part = re.sub(r',\s*{\s*name:\s*"' + name + r'".*?entryPoint:.*?}', '', tw_part, flags=re.DOTALL)
    
    content = us_part + 'const twInfluencersData = [' + tw_part

with codecs.open('script.js', 'w', 'utf-8') as f:
    f.write(content)

print("Fixed stocks and removed duplicates!")
