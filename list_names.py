import re
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()
names = re.findall(r'name:\s*"([^"]+)"', content)
for n in names:
    print(repr(n))
