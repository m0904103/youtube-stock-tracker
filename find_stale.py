# -*- coding: utf-8 -*-
import re

with open('script.js', 'r', encoding='utf-8') as f:
    lines = f.readlines()

for i, line in enumerate(lines, 1):
    if 'name:' in line:
        m = re.search(r'name:\s*"([^"]+)"', line)
        if m:
            name = m.group(1)
            ctx = ''.join(lines[i:i+3])
            if '週三盤後更新' in ctx or '週三盤後緊急' in ctx:
                print(f'L{i}: STALE -> {name}')
