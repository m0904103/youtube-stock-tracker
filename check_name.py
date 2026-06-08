import re
with open('script.js', 'r', encoding='utf-8') as f:
    content = f.read()
matches = re.findall(r'name:\s*"(.*?)"', content)
for m in matches:
    if '美股' in m or '研究' in m or '社長' in m:
        print(m)
