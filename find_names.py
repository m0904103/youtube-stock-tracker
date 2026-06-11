import re

# 找出 script.js 裡面 折折 和 Gooaye 的精確名稱
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()

# 找折折
m1 = re.search(r'name:\s*"([^"]*折[^"]*)"', content)
# 找股癌
m2 = re.search(r'name:\s*"([^"]*Gooaye[^"]*)"', content)

print('折折 name:', repr(m1.group(1)) if m1 else 'NOT FOUND')
print('Gooaye name:', repr(m2.group(1)) if m2 else 'NOT FOUND')
