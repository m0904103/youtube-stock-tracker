with open('index.html', 'r', encoding='utf-8') as f:
    lines = f.readlines()

# The duplicate starts around line 245.
# Let's find the first `<!-- 戰情雷達 Modal -->` block.
# And keep lines up to the end of the first modal block.

cleaned_lines = []
modal_end_found = False

for i, line in enumerate(lines):
    cleaned_lines.append(line)
    if '<!-- Floating Action Button -->' in line:
        # Wait, if we just keep everything until the first Modal ends, and then append the Floating Action Button.
        pass

# Let's just delete the exact lines 245-440 (0-indexed 244-439).
# Wait, let's check exact lines:
# 243:         </div>
# 244:     </div>
# 245: 
# 246:                             </tr>

# Let's find the indices of the duplicate block
start_idx = -1
for i in range(len(lines)):
    if '<!-- Floating Action Button -->' in lines[i]:
        fab_idx = i
        break

# The lines right before FAB are empty or contain the end of the duplicate modal.
# The duplicate starts where `</tr>\n` appears right after `</div>\n`
for i in range(len(lines)-1):
    if '</div>' in lines[i] and '</tr>' in lines[i+2] and '</thead>' in lines[i+3]:
        start_idx = i + 1
        break

if start_idx != -1:
    end_idx = fab_idx
    print(f"Removing lines from {start_idx+1} to {end_idx}")
    new_lines = lines[:start_idx] + lines[end_idx:]
    with open('index.html', 'w', encoding='utf-8') as f:
        f.writelines(new_lines)
    print("Fixed!")
else:
    print("Pattern not found.")
