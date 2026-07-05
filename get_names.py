import re
with open('script.js', 'r', encoding='utf-8') as f:
    text = f.read()
names = re.findall(r'name:\s*"([^"]+)"', text)
print(names)
