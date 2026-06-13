import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('198.50', '160.95')
content = content.replace('198', '160')
content = content.replace('47%', '19%')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Prices corrected successfully!')
