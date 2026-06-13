import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# Fix NVDA -3.15% drop mentions to reflect its resilience (+0.16% close at 205.19)
# Cramer
content = content.replace('例如 NVDA（週五跌 3.15%）', '例如 NVDA（週五逆勢收紅 $205.19）')
content = content.replace('小心 NVDA 繼續跌', '小心 NVDA 補跌')

# Kobeissi
content = content.replace('導致了 NVDA 等權值股的失血', '導致了部分權值股的失血，不過 NVDA 卻展現強大韌性（收 $205.19）')

# Jeff
content = content.replace('NVDA 跌 3.15% 就是明證', '雖然 NVDA 驚險守住紅盤 $205.19')

# Any trailing generic mentions of NVDA drops
content = content.replace('NVDA 下跌 2.5%', 'NVDA 盤中雖遇震盪但最終收紅')
content = content.replace('NVDA(-2.5%)', 'NVDA(+0.16%)')
content = content.replace('NVDA 跌 3.15%', 'NVDA 逆勢收紅')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('NVDA prices corrected successfully!')
