const fs = require('fs');
let code = fs.readFileSync('script.js', 'utf8');

// Replace renderGrid
const renderGridOld = `function renderGrid(containerId, data) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = ''; 

    data.forEach(influencer => {
        const card = document.createElement('div');
        card.className = 'card';

        const stocksHtml = influencer.stocks.map(stock => 
            \`<span class="stock-tag">\${stock}</span>\`
        ).join('');

        card.innerHTML = \`
            <div class="card-header">
                <div class="influencer-name">\${influencer.name}</div>
                <div class="influencer-style">\${influencer.style}</div>
            </div>
            
            <div class="section-title">最新觀點 (2026.06)</div>
            <p>\${influencer.viewpoint}</p>

            <div class="section-title">關注標的</div>
            <div class="stock-list">
                \${stocksHtml}
            </div>

            <div class="section-title">操作與買入點位</div>
            <p>\${influencer.entryPoint}</p>
        \`;

        grid.appendChild(card);
    });
}`;

const renderGridNew = `function renderGrid(containerId, data) {
    const grid = document.getElementById(containerId);
    if (!grid) return;
    
    grid.innerHTML = ''; 

    data.forEach(influencer => {
        const card = document.createElement('div');
        card.className = 'card';

        const stocksHtml = influencer.stocks.map(stock => 
            \`<span class="stock-tag">\${stock}</span>\`
        ).join('');
        
        let instBadgeHtml = '';
        if (influencer.institutionalMatch) {
            let matchClass = 'low';
            let matchText = '⚠️ 反向指標';
            if (influencer.institutionalMatch >= 4) {
                matchClass = 'high';
                matchText = '✅ 高度吻合';
            } else if (influencer.institutionalMatch === 3) {
                matchClass = 'med';
                matchText = '➖ 中立觀察';
            }
            instBadgeHtml = \`
            <div style="margin-top: 10px; padding-top: 10px; border-top: 1px dashed rgba(255,255,255,0.1);">
                <div style="display: flex; align-items: center; justify-content: space-between;">
                    <div class="section-title" style="margin-bottom:0;">華爾街機構吻合度</div>
                    <span class="inst-badge \${matchClass}">\${matchText} (\${influencer.institutionalMatch}/5)</span>
                </div>
                <p style="font-size: 0.85rem; color: #a1a1aa; margin-top: 5px;">\${influencer.institutionalMatchDesc || ''}</p>
            </div>
            \`;
        }

        card.innerHTML = \`
            <div class="card-header">
                <div class="influencer-name">\${influencer.name}</div>
                <div class="influencer-style">\${influencer.style}</div>
            </div>
            
            <div class="section-title">最新觀點 (2026.06)</div>
            <p>\${influencer.viewpoint}</p>

            <div class="section-title">關注標的</div>
            <div class="stock-list">
                \${stocksHtml}
            </div>

            <div class="section-title">操作與買入點位</div>
            <p>\${influencer.entryPoint}</p>
            
            \${instBadgeHtml}
        \`;

        grid.appendChild(card);
    });
}`;

code = code.replace(renderGridOld, renderGridNew);

// Patch fetchAltData to render tail risk, liquidity, and sector rotation
const fetchAltOld = `        // 渲染 Alt Fundamentals
        const altTbody = document.getElementById('q-alt-tbody');
        let altHTML = '';
        data.alt_fundamentals.forEach(item => {
            let probColor = item.probability === '高' ? '#e74c3c' : '#f39c12';
            altHTML += \`
                <tr>
                    <td data-label="監控標的" class="ticker-cell">\${item.ticker}<br><small>\${item.sector}</small></td>
                    <td data-label="另類數據訊號"><span class="mentions hot">\${item.signal}</span></td>
                    <td data-label="財報異動機率"><strong style="color: \${probColor};">\${item.probability}</strong></td>
                    <td data-label="底層邏輯">\${item.description}</td>
                </tr>
            \`;
        });
        altTbody.innerHTML = altHTML;`;

const fetchAltNew = `        // 渲染 Alt Fundamentals
        const altTbody = document.getElementById('q-alt-tbody');
        let altHTML = '';
        data.alt_fundamentals.forEach(item => {
            let probColor = item.probability === '高' ? '#e74c3c' : '#f39c12';
            altHTML += \`
                <tr>
                    <td data-label="監控標的" class="ticker-cell">\${item.ticker}<br><small>\${item.sector}</small></td>
                    <td data-label="另類數據訊號"><span class="mentions hot">\${item.signal}</span></td>
                    <td data-label="財報異動機率"><strong style="color: \${probColor};">\${item.probability}</strong></td>
                    <td data-label="底層邏輯">\${item.description}</td>
                </tr>
            \`;
        });
        altTbody.innerHTML = altHTML;
        
        // Render New Dashboard Metrics
        if (data.derivatives.tail_risk) {
            document.getElementById('q-skew-val').textContent = data.derivatives.tail_risk.skew;
            document.getElementById('q-vix-val').textContent = data.derivatives.tail_risk.vix;
            document.getElementById('q-tail-status').textContent = data.derivatives.tail_risk.status;
            document.getElementById('q-tail-status').style.color = data.derivatives.tail_risk.color;
        }
        
        if (data.derivatives.liquidity_levels) {
            const liq = data.derivatives.liquidity_levels;
            document.getElementById('q-spx-val').textContent = 'SPX ' + liq.current_spx;
            document.getElementById('q-liq-status').textContent = liq.status;
            document.getElementById('q-liq-status').style.color = liq.color;
            
            // Calculate progress bar
            const min = liq.cta_sell_trigger - 100;
            const max = liq.gamma_flip + 100;
            let percent = ((liq.current_spx - min) / (max - min)) * 100;
            if (percent < 0) percent = 0;
            if (percent > 100) percent = 100;
            document.getElementById('q-liq-fill').style.width = percent + '%';
        }
        
        if (data.derivatives.sector_rotation) {
            const sec = data.derivatives.sector_rotation;
            const outHtml = sec.outflows.map(o => \`<span class="sector-tag">\${o}</span>\`).join('');
            const inHtml = sec.inflows.map(i => \`<span class="sector-tag">\${i}</span>\`).join('');
            
            document.getElementById('q-sec-out').innerHTML = outHtml;
            document.getElementById('q-sec-in').innerHTML = inHtml;
            document.getElementById('q-sec-status').textContent = sec.status;
        }`;

code = code.replace(fetchAltOld, fetchAltNew);

fs.writeFileSync('script.js', code, 'utf8');
console.log('script.js logic patched.');
