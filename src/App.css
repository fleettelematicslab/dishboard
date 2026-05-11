*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg: #080c0a;
  --bg-surface: #0f1610;
  --bg-card: #111a13;
  --bg-hover: #162019;
  --border: #1e2e22;
  --border-bright: #2a4030;
  --text-primary: #e2ede6;
  --text-secondary: #7a9e85;
  --text-muted: #3d5e47;
  --accent: #22d3a0;
  --accent-dim: #0f6e54;
  --amber: #f59e0b;
  --red: #ef4444;
  --font-display: 'Syne', sans-serif;
  --font-mono: 'IBM Plex Mono', monospace;
}

body {
  background: var(--bg);
  color: var(--text-primary);
  font-family: var(--font-display);
  font-size: 14px;
  line-height: 1.5;
  min-height: 100vh;
}

.app {
  display: flex;
  min-height: 100vh;
}

/* Sidebar */
.sidebar {
  width: 220px;
  min-height: 100vh;
  background: var(--bg-surface);
  border-right: 1px solid var(--border);
  display: flex;
  flex-direction: column;
  padding: 1.5rem 0;
  position: sticky;
  top: 0;
  height: 100vh;
}

.sidebar-logo {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 0 1.25rem 1.5rem;
  font-size: 15px;
  font-weight: 700;
  color: var(--accent);
  border-bottom: 1px solid var(--border);
  margin-bottom: 1rem;
  letter-spacing: 0.02em;
}

.sidebar-nav { flex: 1; padding: 0 0.75rem; }

.nav-item {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 9px 12px;
  border-radius: 8px;
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 13px;
  font-weight: 500;
  transition: all 0.15s;
  margin-bottom: 2px;
  position: relative;
}

.nav-item:hover { background: var(--bg-hover); color: var(--text-primary); }
.nav-item.active { background: #0d2a1e; color: var(--accent); }
.nav-item.active::before {
  content: '';
  position: absolute;
  left: 0;
  top: 25%;
  height: 50%;
  width: 3px;
  background: var(--accent);
  border-radius: 0 2px 2px 0;
}

.nav-badge {
  margin-left: auto;
  background: var(--amber);
  color: #000;
  font-size: 10px;
  font-weight: 700;
  padding: 1px 6px;
  border-radius: 10px;
  font-family: var(--font-mono);
}

.sidebar-footer { padding: 1rem 1.25rem 0; border-top: 1px solid var(--border); }
.sidebar-status { display: flex; align-items: center; gap: 8px; font-size: 12px; color: var(--text-muted); }
.online-dot {
  width: 7px; height: 7px; border-radius: 50%; background: var(--accent);
  box-shadow: 0 0 0 3px rgba(34,211,160,0.15);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%, 100% { box-shadow: 0 0 0 3px rgba(34,211,160,0.15); }
  50% { box-shadow: 0 0 0 5px rgba(34,211,160,0.05); }
}

/* Main */
.main { flex: 1; padding: 2rem; overflow-y: auto; }

.topbar {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.75rem;
}

.page-title { font-size: 22px; font-weight: 700; letter-spacing: -0.02em; }
.page-sub { font-size: 13px; color: var(--text-secondary); margin-top: 2px; }

.btn-refresh {
  display: flex;
  align-items: center;
  gap: 7px;
  background: var(--bg-card);
  border: 1px solid var(--border-bright);
  color: var(--text-secondary);
  padding: 8px 16px;
  border-radius: 8px;
  font-size: 13px;
  font-family: var(--font-display);
  cursor: pointer;
  transition: all 0.15s;
}
.btn-refresh:hover { border-color: var(--accent-dim); color: var(--accent); }
.btn-refresh.spin svg { animation: spin 0.6s linear; }
@keyframes spin { to { transform: rotate(360deg); } }

/* Metrics */
.metrics {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
  margin-bottom: 2rem;
}

.metric-card {
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 12px;
  padding: 1.1rem 1.25rem;
  display: flex;
  align-items: center;
  gap: 14px;
  transition: border-color 0.15s;
}
.metric-card:hover { border-color: var(--border-bright); }
.metric-card.accent-teal { border-color: var(--accent-dim); }
.metric-card.accent-amber { border-color: #7a4f00; }

.metric-icon { color: var(--text-muted); flex-shrink: 0; }
.metric-card.accent-teal .metric-icon { color: var(--accent); }
.metric-card.accent-amber .metric-icon { color: var(--amber); }

.metric-label { font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 3px; }
.metric-value { font-size: 24px; font-weight: 700; font-family: var(--font-mono); line-height: 1; }
.metric-card.accent-teal .metric-value { color: var(--accent); }
.metric-card.accent-amber .metric-value { color: var(--amber); }
.metric-sub { font-size: 11px; color: var(--text-secondary); margin-top: 3px; }

/* Section */
.section-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
}
.section-title { font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); }

.filter-tabs { display: flex; gap: 4px; }
.filter-tab {
  font-size: 12px;
  padding: 5px 14px;
  border-radius: 6px;
  border: 1px solid var(--border);
  background: transparent;
  color: var(--text-muted);
  font-family: var(--font-display);
  cursor: pointer;
  transition: all 0.15s;
}
.filter-tab:hover { color: var(--text-secondary); border-color: var(--border-bright); }
.filter-tab.active { background: #0d2a1e; color: var(--accent); border-color: var(--accent-dim); }

/* Terminal list */
.terminal-list { margin-bottom: 1.5rem; }

.terminal-header {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.2fr 1fr 1fr 1.2fr;
  gap: 12px;
  padding: 0 1rem 8px;
  font-size: 11px;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}

.terminal-row {
  display: grid;
  grid-template-columns: 2fr 1.2fr 1.2fr 1fr 1fr 1.2fr;
  gap: 12px;
  padding: 14px 1rem;
  background: var(--bg-card);
  border: 1px solid var(--border);
  border-radius: 10px;
  margin-bottom: 6px;
  cursor: pointer;
  transition: all 0.15s;
  align-items: center;
}
.terminal-row:hover { border-color: var(--border-bright); background: var(--bg-hover); }
.terminal-row.selected { border-color: var(--accent-dim); background: #0a1f16; }

.t-name { font-size: 14px; font-weight: 500; }
.t-loc { display: flex; align-items: center; gap: 4px; font-size: 11px; color: var(--text-muted); margin-top: 3px; }
.t-val { font-size: 13px; font-weight: 500; }
.t-sub { font-size: 11px; color: var(--text-muted); margin-top: 2px; }
.mono { font-family: var(--font-mono); }

.mini-bar-track { height: 4px; background: var(--border); border-radius: 2px; margin-top: 5px; overflow: hidden; }
.mini-bar-fill { height: 100%; border-radius: 2px; transition: width 0.4s ease; }

/* Badges */
.badge { display: inline-flex; align-items: center; gap: 5px; font-size: 11px; padding: 3px 10px; border-radius: 6px; font-weight: 500; }
.badge-dot { width: 5px; height: 5px; border-radius: 50%; background: currentColor; }
.badge-online { background: #0d2a1e; color: var(--accent); }
.badge-degraded { background: #2a1f00; color: var(--amber); }
.badge-offline { background: #2a0f0f; color: var(--red); }

.row-chevron { color: var(--text-muted); transition: transform 0.2s; }
.row-chevron.open { transform: rotate(90deg); }

/* Detail Panel */
.detail-panel {
  background: var(--bg-card);
  border: 1px solid var(--accent-dim);
  border-radius: 12px;
  padding: 1.25rem;
  margin-bottom: 1.5rem;
  animation: slideIn 0.2s ease;
}
@keyframes slideIn { from { opacity: 0; transform: translateY(-8px); } to { opacity: 1; transform: translateY(0); } }

.detail-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 1.25rem;
}
.detail-title {
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  gap: 10px;
  flex-wrap: wrap;
}
.detail-loc {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  font-size: 12px;
  color: var(--text-secondary);
  font-weight: 400;
}
.detail-close {
  background: transparent;
  border: 1px solid var(--border);
  color: var(--text-muted);
  width: 28px;
  height: 28px;
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  transition: all 0.15s;
}
.detail-close:hover { border-color: var(--red); color: var(--red); }

.detail-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}

.detail-card {
  background: var(--bg-surface);
  border: 1px solid var(--border);
  border-radius: 10px;
  padding: 1rem;
}
.detail-card-title { font-size: 11px; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 12px; font-weight: 700; }

.obs-stat { display: flex; justify-content: space-between; font-size: 12px; padding: 4px 0; color: var(--text-secondary); }

.live-row { display: flex; justify-content: space-between; align-items: center; padding: 6px 0; border-bottom: 1px solid var(--border); }
.live-row:last-child { border-bottom: none; }
.live-label { display: flex; align-items: center; gap: 6px; font-size: 12px; color: var(--text-secondary); }
.live-val { font-size: 13px; font-weight: 500; }

/* Chart tooltip */
.chart-tooltip {
  background: #0f1e16;
  border: 1px solid var(--border-bright);
  border-radius: 6px;
  padding: 6px 10px;
  font-family: var(--font-mono);
}
.chart-tooltip-label { font-size: 10px; color: var(--text-muted); }
.chart-tooltip-val { font-size: 14px; color: var(--accent); font-weight: 500; }

/* Alerts */
.alerts-section { margin-bottom: 1.5rem; }
.alert-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 14px;
  border-radius: 8px;
  margin-bottom: 6px;
  font-size: 13px;
  border: 1px solid;
  animation: fadeIn 0.2s ease;
}
@keyframes fadeIn { from { opacity: 0; } to { opacity: 1; } }
.alert-warn { background: #1a1200; border-color: #3d2f00; color: #d4a017; }
.alert-info { background: #0a1520; border-color: #0f2a40; color: #60a5fa; }
.alert-dismiss {
  background: transparent;
  border: none;
  cursor: pointer;
  color: inherit;
  opacity: 0.5;
  padding: 2px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  transition: opacity 0.15s;
}
.alert-dismiss:hover { opacity: 1; }

@media (max-width: 1100px) {
  .metrics { grid-template-columns: repeat(2, 1fr); }
  .detail-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .sidebar { display: none; }
  .metrics { grid-template-columns: repeat(2, 1fr); }
  .terminal-header { display: none; }
  .terminal-row { grid-template-columns: 1fr 1fr; gap: 8px; }
  .detail-grid { grid-template-columns: 1fr; }
}
