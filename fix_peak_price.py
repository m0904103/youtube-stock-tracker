import re

with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

content = content.replace('210', '176.52')
content = content.replace('165.50', '149.34')

with open('script.js', 'w', encoding='utf-8') as f:
    f.write(content)

with open('index.html', 'r', encoding='utf-8') as f:
    c = f.read()

c = re.sub(r'script\.js\?v=(\d+)', lambda m: f'script.js?v={int(m.group(1))+1}', c)
with open('index.html', 'w', encoding='utf-8') as f:
    f.write(c)

print('Prices corrected successfully!')
