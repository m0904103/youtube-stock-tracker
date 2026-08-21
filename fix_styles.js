const fs = require('fs');

let css = fs.readFileSync('styles.css', 'utf8');
let lines = css.split('\n');
let cleanCss = lines.slice(0, 394).join('\n') + `

.inst-badge { font-size: 0.8rem; padding: 4px 10px; border-radius: 8px; font-weight: 700; color: #fff; display: inline-flex; align-items: center; gap: 5px; }
.inst-badge.high { background: rgba(46, 204, 113, 0.2); border: 1px solid rgba(46, 204, 113, 0.5); color: #2ecc71; }
.inst-badge.med { background: rgba(243, 156, 18, 0.2); border: 1px solid rgba(243, 156, 18, 0.5); color: #f39c12; }
.inst-badge.low { background: rgba(231, 76, 60, 0.2); border: 1px solid rgba(231, 76, 60, 0.5); color: #e74c3c; }
.sector-tag { font-size: 0.85rem; padding: 6px 12px; border-radius: 6px; font-weight: 600; color: #fff; background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); }

/* 🔍 搜尋與 Tier 篩選控制器樣式 */
.filter-controls-container {
    display: flex;
    flex-wrap: wrap;
    gap: 15px;
    margin: 10px 0 25px 0;
    align-items: center;
    justify-content: space-between;
    background: rgba(15, 23, 42, 0.7);
    padding: 16px 24px;
    border-radius: 16px;
    border: 1px solid rgba(56, 189, 248, 0.3);
    backdrop-filter: blur(12px);
    box-shadow: 0 8px 32px rgba(0, 0, 0, 0.3);
}

.search-box-wrapper {
    flex: 1;
    min-width: 260px;
}

.search-box-wrapper input {
    width: 100%;
    padding: 12px 20px;
    border-radius: 10px;
    border: 1px solid rgba(56, 189, 248, 0.3);
    background: rgba(3, 7, 18, 0.8);
    color: #f8fafc;
    font-size: 15px;
    font-family: inherit;
    outline: none;
    transition: all 0.3s ease;
    box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.4);
}

.search-box-wrapper input:focus {
    border-color: #38bdf8;
    background: rgba(15, 23, 42, 0.95);
    box-shadow: 0 0 15px rgba(56, 189, 248, 0.4);
}

.search-box-wrapper input::placeholder {
    color: #64748b;
}

.tier-buttons-group {
    display: flex;
    gap: 10px;
    flex-wrap: wrap;
}

.tier-btn {
    padding: 10px 18px;
    border-radius: 10px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(30, 41, 59, 0.8);
    color: #94a3b8;
    cursor: pointer;
    font-size: 14px;
    font-weight: 600;
    font-family: inherit;
    transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
    backdrop-filter: blur(5px);
}

.tier-btn:hover {
    color: #fff;
    transform: translateY(-2px);
    background: rgba(51, 65, 85, 0.9);
}

.tier-btn.active {
    color: #fff;
    font-weight: 700;
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
}

.tier-btn.alpha-btn.active {
    background: linear-gradient(135deg, rgba(16, 185, 129, 0.3), rgba(5, 150, 105, 0.5));
    border-color: #10b981;
    color: #34d399;
    box-shadow: 0 0 12px rgba(16, 185, 129, 0.3);
}

.tier-btn.core-btn.active {
    background: linear-gradient(135deg, rgba(59, 130, 246, 0.3), rgba(37, 99, 235, 0.5));
    border-color: #3b82f6;
    color: #60a5fa;
    box-shadow: 0 0 12px rgba(59, 130, 246, 0.3);
}

.tier-btn.noise-btn.active {
    background: linear-gradient(135deg, rgba(245, 158, 11, 0.3), rgba(217, 119, 6, 0.5));
    border-color: #f59e0b;
    color: #fbbf24;
    box-shadow: 0 0 12px rgba(245, 158, 11, 0.3);
}

/* 元素隱藏與動畫 */
.card.fade-out {
    opacity: 0;
    transform: scale(0.96) translateY(10px);
    transition: opacity 0.25s ease, transform 0.25s ease;
    pointer-events: none;
}

.card.hidden {
    display: none !important;
}

.consensus-table tbody tr.hidden {
    display: none !important;
}
`;

fs.writeFileSync('styles.css', cleanCss, 'utf8');
console.log("styles.css clean update success!");
