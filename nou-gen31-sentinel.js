/* ============================================================================
 * 🏛️ 空大六大聖殿 × 輿情排雷防追高濾網 (Gen 31 Live Sentinel)
 * 整合：《財務資訊分析》《全球經貿個案解讀》《貨幣銀行學》《顏春煌數據建模》
 *       《行動網頁製作與應用》《資訊分析與圖表化》
 * ============================================================================ */
(function () {
  const GEN31_URL = 'https://m0904103.github.io/q_quant_888/gen31_rsi_status.json';
  const STORAGE_KEY = 'yt_tracker_nou_mode';

  const REGIME_ZH = {
    RED_GEOPOLITICAL_SHOCK: { label: '🔴 高度警戒：地緣衝突與總經震盪', color: '#ff3366' },
    ORANGE_STAGFLATION_RISK: { label: '🟠 審慎防守：停滯性通膨與關稅摩擦', color: '#ffb800' },
    YELLOW_TARIFF_FRICTION: { label: '🟡 震盪觀察：政策不確定與輪動整理', color: '#fbbf24' },
    GREEN_EXPANSION: { label: '🟢 順勢偏多：總經平穩可挑多頭共振', color: '#00ff88' },
  };

  function esc(str) {
    return String(str ?? '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;');
  }

  function getSavedMode() {
    try {
      const m = localStorage.getItem(STORAGE_KEY);
      if (m === 'simple' || m === 'pro') return m;
    } catch (_) {}
    return window.innerWidth < 768 ? 'simple' : 'pro';
  }

  function saveMode(mode) {
    try { localStorage.setItem(STORAGE_KEY, mode); } catch (_) {}
  }

  function barHtml(label, val, color, tag) {
    const num = Number(val) || 0;
    const pct = Math.max(0, Math.min(100, num));
    return `
      <div style="display:flex;flex-direction:column;gap:6px;">
        <div style="display:flex;justify-content:space-between;align-items:center;font-size:13px;">
          <span style="color:#e2e8f0;font-weight:700;">${esc(label)}</span>
          <span style="font-family:monospace;font-weight:800;color:#fff;">
            ${esc(val ?? '--')} <span style="color:${color};font-size:12px;">(${esc(tag)})</span>
          </span>
        </div>
        <div role="progressbar" aria-label="${esc(label)}" aria-valuenow="${Math.round(pct)}" aria-valuemin="0" aria-valuemax="100"
             style="height:10px;width:100%;border-radius:999px;background:rgba(255,255,255,0.12);overflow:hidden;">
          <div style="height:100%;width:${pct}%;border-radius:999px;background:${color};transition:width .4s ease;"></div>
        </div>
      </div>
    `;
  }

  let latestData = null;

  function render() {
    const host = document.getElementById('nou-gen31-sentinel');
    if (!host || !latestData) return;

    const mode = getSavedMode();
    const mg = latestData.macro_geopolitics || {};
    const ml = latestData.monetary_liquidity || {};
    const ds = latestData.derivatives_shield || {};
    const sm = latestData.statistical_modeling || {};
    const fa = latestData.financial_audit || {};
    const fe = latestData.feature_engineering || {};

    const txf = ds.taifex_foreign_txf || {};
    const kelly = sm.half_kelly_position_sizing || {};
    const fatTail = sm.market_fat_tail_audit || {};
    const fisher = ml.fisher_real_rate || {};
    const sc = mg.supply_chain_tariff_audit || {};

    const oi = typeof txf.foreign_txf_net_oi === 'number' ? txf.foreign_txf_net_oi : null;
    const reg = REGIME_ZH[mg.macro_regime] || { label: '🟡 總經即時監控中', color: '#ffb800' };
    const macroColor = (mg.macro_stress_score ?? 50) >= 75 ? '#ff3366' : (mg.macro_stress_score ?? 50) >= 55 ? '#ffb800' : '#00ff88';
    const liqColor = (ml.liquidity_stress_score ?? 50) >= 70 ? '#ff3366' : (ml.liquidity_stress_score ?? 50) >= 45 ? '#ffb800' : '#00ff88';
    const breadthColor = (fatTail.below_ma60_breadth_pct ?? 50) >= 70 ? '#ff3366' : (fatTail.below_ma60_breadth_pct ?? 50) >= 50 ? '#ffb800' : '#00ff88';

    const mines = (fa.financial_landmines || []).slice(0, 6);
    const highTariff = (sc.high_tariff_exposure_list || []);
    const insulated = (sc.tariff_insulated_list || []);
    const twLeaders = (fe.robust_leaders_above_ma60?.TW || []).slice(0, 4);
    const usLeaders = (fe.robust_leaders_above_ma60?.US || []).slice(0, 4);

    // 同步更新頁首時間戳記，避免停留舊日期
    const lastUpdEl = document.getElementById('last-updated');
    if (lastUpdEl && latestData.updated_at) {
      lastUpdEl.textContent = `⏱ Gen 31 即時同步: ${latestData.updated_at}（空大六引擎排雷濾網已啟動）`;
    }

    const proHtml = mode === 'pro' ? `
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(270px,1fr));gap:14px;margin-top:14px;">
        <article style="background:rgba(15,20,30,0.85);border:1px solid rgba(255,51,102,0.3);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:8px;">
          <h3 style="margin:0;font-size:14px;color:#fda4af;font-weight:800;">🚨 聽名嘴前先排雷（《財務資訊分析》）</h3>
          <p style="margin:0;font-size:12px;color:#cbd5e1;line-height:1.55;">
            全市場掃出 <strong style="color:#00ff88;">${esc(fa.grade_a_plus_count ?? '--')} 檔財報 A+</strong> 與 <strong style="color:#ff3366;">${esc(fa.red_flag_count ?? '--')} 檔紅旗地雷</strong>（本業虧損／業外灌水／高 PE 泡沫），KOL 再怎麼吹也要先避開：
          </p>
          <details style="background:rgba(0,0,0,0.3);border-radius:8px;padding:8px 10px;font-size:12px;">
            <summary style="cursor:pointer;font-weight:700;color:#fda4af;">展開頭號財報地雷清單（${mines.length} 檔）</summary>
            <ul style="margin:8px 0 0;padding-left:18px;color:#e2e8f0;line-height:1.7;">
              ${mines.map(m => `<li><strong>${esc(m.symbol.replace(/\.TWO?$/, ''))} ${esc(m.name)}</strong>（${esc(m.fa_score)}分）— ${esc((m.red_flags || []).slice(0, 2).join('、'))}</li>`).join('')}
            </ul>
          </details>
        </article>

        <article style="background:rgba(15,20,30,0.85);border:1px solid rgba(255,184,0,0.3);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:8px;">
          <h3 style="margin:0;font-size:14px;color:#fcd34d;font-weight:800;">🌍 關稅與利率照妖鏡（《全球經貿×貨銀》）</h3>
          <p style="margin:0;font-size:12px;color:#cbd5e1;line-height:1.55;">
            美債 10Y 殖利率壓出費雪實質利率 <strong style="color:#c084fc;">${esc(fisher.fisher_real_rate_pct ?? '--')}%</strong>（合理市場 PE 上限 <strong style="color:#fff;">~${esc(fisher.implied_fair_pe_ceiling ?? '--')}x</strong>），高關稅轉口股與高 PE 題材股極易殺估值！
          </p>
          <details style="background:rgba(0,0,0,0.3);border-radius:8px;padding:8px 10px;font-size:12px;">
            <summary style="cursor:pointer;font-weight:700;color:#fcd34d;">展開高關稅曝險（${highTariff.length}）vs 絕緣盾（${insulated.length}）</summary>
            <div style="margin-top:8px;color:#e2e8f0;line-height:1.7;">
              <div>⚠️ 高曝險：${highTariff.map(x => esc(x.symbol.replace(/\.TWO?$/, '') + x.name)).join('、') || '無'}</div>
              <div style="margin-top:4px;color:#6ee7b7;">🛡️ 絕緣盾：${insulated.map(x => esc(x.symbol + ' ' + x.name)).join('、') || '無'}</div>
            </div>
          </details>
        </article>

        <article style="background:rgba(15,20,30,0.85);border:1px solid rgba(0,210,255,0.3);border-radius:12px;padding:14px;display:flex;flex-direction:column;gap:8px;">
          <h3 style="margin:0;font-size:14px;color:#7dd3fc;font-weight:800;">📐 顏老師防過擬合 × 去偏強勢對照</h3>
          <p style="margin:0;font-size:12px;color:#cbd5e1;line-height:1.55;">
            網紅連勝 3 次可能是小樣本運氣！系統用 Wilson 95% 信賴區間＋特徵工程去除大盤偏移，列出目前真站穩季線的前段班：
          </p>
          <div style="font-size:12px;color:#e2e8f0;line-height:1.7;background:rgba(0,0,0,0.25);padding:8px 10px;border-radius:8px;">
            <div>🇹🇼 <strong style="color:#6ee7b7;font-family:monospace;">${twLeaders.map(x => esc(x.symbol.replace(/\.TWO?$/, '') + x.name)).join(' · ') || '--'}</strong></div>
            <div>🇺🇸 <strong style="color:#7dd3fc;font-family:monospace;">${usLeaders.map(x => esc(x.symbol)).join(' · ') || '--'}</strong></div>
          </div>
        </article>
      </div>
    ` : '';

    host.innerHTML = `
      <section aria-labelledby="nou-sentinel-title"
               style="margin:18px 0 22px;padding:18px;border-radius:16px;background:linear-gradient(135deg,rgba(18,22,34,0.95),rgba(10,14,22,0.96));border:1px solid rgba(255,184,0,0.38);box-shadow:0 10px 30px rgba(0,0,0,0.45);">
        <div style="display:flex;flex-wrap:wrap;justify-content:space-between;align-items:center;gap:12px;padding-bottom:12px;border-bottom:1px solid rgba(255,255,255,0.1);">
          <div>
            <h2 id="nou-sentinel-title" style="margin:0;font-size:17px;font-weight:900;color:#fff;">
              🏛️ 空大六大聖殿 × 輿情排雷防追高濾網
            </h2>
            <p style="margin:4px 0 0;font-size:13px;font-weight:700;color:${reg.color};">${esc(reg.label)}</p>
          </div>
          <div role="group" aria-label="排雷濾網顯示模式" style="display:flex;gap:8px;">
            <button type="button" id="nou-btn-simple" aria-pressed="${mode === 'simple'}"
                    style="min-height:44px;padding:8px 14px;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;border:${mode === 'simple' ? '1px solid #fcd34d' : '1px solid rgba(255,255,255,0.2)'};background:${mode === 'simple' ? '#ffb800' : 'rgba(255,255,255,0.06)'};color:${mode === 'simple' ? '#090d16' : '#e2e8f0'};">
              📱 精簡防呆
            </button>
            <button type="button" id="nou-btn-pro" aria-pressed="${mode === 'pro'}"
                    style="min-height:44px;padding:8px 14px;border-radius:10px;font-size:13px;font-weight:800;cursor:pointer;border:${mode === 'pro' ? '1px solid #fcd34d' : '1px solid rgba(255,255,255,0.2)'};background:${mode === 'pro' ? '#ffb800' : 'rgba(255,255,255,0.06)'};color:${mode === 'pro' ? '#090d16' : '#e2e8f0'};">
              🔬 排雷全覽
            </button>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:10px;margin-top:14px;">
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px;">
            <div style="font-size:12px;color:#94a3b8;font-weight:700;">建議最低現金底線</div>
            <div style="font-size:24px;font-family:monospace;font-weight:900;color:#00ff88;margin-top:4px;">≥ ${esc(mg.recommended_cash_floor_pct ?? 55)}%</div>
          </div>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px;">
            <div style="font-size:12px;color:#94a3b8;font-weight:700;">跟單單檔上限（半凱利）</div>
            <div style="font-size:24px;font-family:monospace;font-weight:900;color:#00d2ff;margin-top:4px;">${esc(kelly.recommended_max_single_pos_pct ?? '--')}%</div>
          </div>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px;">
            <div style="font-size:12px;color:#94a3b8;font-weight:700;">外資台指期未平倉</div>
            <div style="font-size:20px;font-family:monospace;font-weight:900;color:#ff3366;margin-top:6px;">${oi !== null ? esc(oi.toLocaleString()) + ' 口' : '--'}</div>
          </div>
          <div style="background:rgba(255,255,255,0.04);border:1px solid rgba(255,255,255,0.08);border-radius:10px;padding:12px;">
            <div style="font-size:12px;color:#94a3b8;font-weight:700;">260檔破季線比例</div>
            <div style="font-size:24px;font-family:monospace;font-weight:900;color:#ffb800;margin-top:4px;">${esc(fatTail.below_ma60_breadth_pct ?? '--')}%</div>
          </div>
        </div>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:14px;margin-top:12px;padding:12px;border-radius:10px;background:rgba(0,0,0,0.28);">
          ${barHtml('🌍 總經關稅壓力', mg.macro_stress_score, macroColor, macroColor === '#ff3366' ? '高壓紅燈' : macroColor === '#ffb800' ? '警戒橘燈' : '平穩綠燈')}
          ${barHtml('🏦 聯準會流動性緊縮', ml.liquidity_stress_score, liqColor, liqColor === '#ff3366' ? '極度抽水' : liqColor === '#ffb800' ? '偏緊逆風' : '寬鬆順風')}
          ${barHtml('📉 破季線空頭廣度', fatTail.below_ma60_breadth_pct, breadthColor, `${fatTail.below_ma60_breadth_pct ?? '--'}% 走弱`)}
        </div>

        <div style="margin-top:12px;padding:10px 12px;border-radius:10px;background:rgba(255,184,0,0.1);border:1px solid rgba(255,184,0,0.28);font-size:13px;color:#fef3c7;line-height:1.55;">
          <strong style="color:#ffb800;">⚠️ 拾人牙慧防追高鐵律：</strong>${esc(mg.action_note || '看名嘴觀點前先確認站穩季線與財報無雷，嚴守現金底線！')}
        </div>

        ${proHtml}
      </section>
    `;

    const btnS = document.getElementById('nou-btn-simple');
    const btnP = document.getElementById('nou-btn-pro');
    if (btnS) btnS.addEventListener('click', () => { saveMode('simple'); render(); });
    if (btnP) btnP.addEventListener('click', () => { saveMode('pro'); render(); });
  }

  async function fetchGen31() {
    try {
      const res = await fetch(`${GEN31_URL}?t=${Date.now()}`, { cache: 'no-store' });
      if (res.ok) {
        const json = await res.json();
        if (json && json.macro_geopolitics) {
          latestData = json;
          render();
        }
      }
    } catch (_) {}
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', fetchGen31);
  } else {
    fetchGen31();
  }
  setInterval(fetchGen31, 60000);
})();
