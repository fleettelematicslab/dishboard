import React, { useState, useEffect, useCallback } from 'react';
import {
  Satellite, RefreshCw, AlertTriangle, Info, Wifi, WifiOff,
  MapPin, TrendingDown, Bell, ChevronRight, X, Activity,
  Zap, Clock, BarChart2
} from 'lucide-react';
import {
  LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer, ReferenceLine
} from 'recharts';
import './App.css';

const INITIAL_TERMINALS = [
  { id: 1, name: 'Construction Site A', loc: 'Hwaseong, Gyeonggi', dl: 213, ul: 18, snr: 92, uptime: 99.8, latency: 24, status: 'online',  obstruction: 2 },
  { id: 2, name: 'Construction Site B', loc: 'Asan, Chungnam',     dl: 89,  ul: 7,  snr: 61, uptime: 94.2, latency: 48, status: 'degraded', obstruction: 18 },
  { id: 3, name: 'Farm C-1',            loc: 'Gimje, Jeonbuk',     dl: 198, ul: 15, snr: 88, uptime: 99.1, latency: 29, status: 'online',  obstruction: 3 },
  { id: 4, name: 'Farm C-2',            loc: 'Jeongeup, Jeonbuk',  dl: 0,   ul: 0,  snr: 0,  uptime: 97.3, latency: 0,  status: 'offline', obstruction: 31 },
  { id: 5, name: 'Fishing Fleet A',     loc: 'Gijang, Busan',      dl: 241, ul: 21, snr: 95, uptime: 98.6, latency: 22, status: 'online',  obstruction: 1 },
  { id: 6, name: 'Resort D',            loc: 'Yangyang, Gangwon',  dl: 176, ul: 14, snr: 83, uptime: 99.5, latency: 31, status: 'online',  obstruction: 5 },
];

function makeSignalHistory(base, status) {
  return Array.from({ length: 24 }, (_, i) => ({
    h: `${i}시`,
    snr: status === 'offline' ? 0 : Math.max(0, Math.min(100,
      Math.round(base + (Math.random() - 0.5) * 14 + (i >= 3 && i <= 5 ? -22 : 0))
    )),
  }));
}

function StatusBadge({ status }) {
  const map = { online: ['Online', 'badge-online'], degraded: ['Degraded', 'badge-degraded'], offline: ['Offline', 'badge-offline'] };
  const [label, cls] = map[status] || ['알수없음', ''];
  return <span className={`badge ${cls}`}><span className="badge-dot" />{label}</span>;
}

function Bar({ value, max = 100 }) {
  const pct = Math.min(100, Math.round((value / max) * 100));
  const color = pct > 70 ? '#22d3a0' : pct > 40 ? '#f59e0b' : '#ef4444';
  return (
    <div className="mini-bar-track">
      <div className="mini-bar-fill" style={{ width: `${pct}%`, background: color }} />
    </div>
  );
}

function ObstructionRing({ pct }) {
  const r = 36, cx = 44, cy = 44;
  const circ = 2 * Math.PI * r;
  const filled = (pct / 100) * circ;
  return (
    <svg width="88" height="88" viewBox="0 0 88 88">
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#1a2a22" strokeWidth="8" />
      <circle cx={cx} cy={cy} r={r} fill="none" stroke="#22d3a0" strokeWidth="8"
        strokeDasharray={`${circ - filled} ${filled}`}
        strokeLinecap="round" transform={`rotate(-90 ${cx} ${cy})`} />
      <text x={cx} y={cy - 4} textAnchor="middle" fill="#e2e8f0" fontSize="13" fontFamily="'IBM Plex Mono', monospace" fontWeight="500">{100 - pct}%</text>
      <text x={cx} y={cy + 12} textAnchor="middle" fill="#64748b" fontSize="9" fontFamily="'IBM Plex Mono', monospace">clear</text>
    </svg>
  );
}

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="chart-tooltip">
        <div className="chart-tooltip-label">{label}</div>
        <div className="chart-tooltip-val">{payload[0].value}%</div>
      </div>
    );
  }
  return null;
};

export default function App() {
  const [terminals, setTerminals] = useState(INITIAL_TERMINALS);
  const [selected, setSelected] = useState(null);
  const [filter, setFilter] = useState('all');
  const [histories, setHistories] = useState({});
  const [refreshed, setRefreshed] = useState(false);
  const [alertDismissed, setAlertDismissed] = useState([]);

  useEffect(() => {
    const h = {};
    INITIAL_TERMINALS.forEach(t => { h[t.id] = makeSignalHistory(t.snr, t.status); });
    setHistories(h);
  }, []);

  const refresh = useCallback(() => {
    setTerminals(prev => prev.map(t => t.status === 'online' ? {
      ...t,
      dl: Math.max(50, Math.round(t.dl + (Math.random() - 0.5) * 20)),
      snr: Math.min(100, Math.max(50, Math.round(t.snr + (Math.random() - 0.5) * 4))),
      latency: Math.max(10, Math.round(t.latency + (Math.random() - 0.5) * 6)),
    } : t));
    setRefreshed(true);
    setTimeout(() => setRefreshed(false), 800);
  }, []);

  const filtered = terminals.filter(t =>
    filter === 'all' ? true : filter === 'online' ? t.status === 'online' : t.status !== 'online'
  );

  const onlineCount = terminals.filter(t => t.status === 'online').length;
  const avgDl = Math.round(terminals.filter(t => t.status === 'online').reduce((a, t) => a + t.dl, 0) / onlineCount);
  const selectedT = terminals.find(t => t.id === selected);

  const alerts = [
    { id: 1, type: 'warn', text: 'Construction Site B — Signal loss detected. NE azimuth 18° blocked by obstruction.' },
    { id: 2, type: 'warn', text: 'Farm C-2 — Downtime at 03:42 (7 min). Auto-reconnect successful.' },
    { id: 3, type: 'info', text: 'Fishing Fleet A — Firmware update available (v3.12.1).' },
  ].filter(a => !alertDismissed.includes(a.id));

  return (
    <div className="app">
      <aside className="sidebar">
        <div className="sidebar-logo">
          <Satellite size={20} />
          <span>Dishboard</span>
        </div>
        <nav className="sidebar-nav">
          <a className="nav-item active" href="#"><BarChart2 size={16} />Dashboard</a>
          <a className="nav-item" href="#"><Activity size={16} />Signal Analysis</a>
          <a className="nav-item" href="#"><Bell size={16} />Alerts <span className="nav-badge">{alerts.length}</span></a>
          <a className="nav-item" href="#"><Zap size={16} />API Connect</a>
        </nav>
        <div className="sidebar-footer">
          <div className="sidebar-status">
            <span className="online-dot" />
            <span>Live connection</span>
          </div>
        </div>
      </aside>

      <main className="main">
        <header className="topbar">
          <div>
            <h1 className="page-title">Terminal Status</h1>
            <p className="page-sub">Monitoring {terminals.length} terminals</p>
          </div>
          <button className={`btn-refresh ${refreshed ? 'spin' : ''}`} onClick={refresh}>
            <RefreshCw size={14} /> Refresh
          </button>
        </header>

        <div className="metrics">
          {[
            { label: 'Total Terminals', value: terminals.length, sub: 'managed', icon: <Satellite size={18} /> },
            { label: 'Online', value: onlineCount, sub: `${Math.round(onlineCount / terminals.length * 100)}% uptime`, icon: <Wifi size={18} />, accent: 'teal' },
            { label: 'Avg Download', value: `${avgDl}`, sub: 'Mbps (online avg)', icon: <TrendingDown size={18} /> },
            { label: "Today's Alerts", value: alerts.length, sub: 'unread', icon: <Bell size={18} />, accent: alerts.length > 0 ? 'amber' : '' },
          ].map((m, i) => (
            <div key={i} className={`metric-card ${m.accent ? `accent-${m.accent}` : ''}`}>
              <div className="metric-icon">{m.icon}</div>
              <div>
                <div className="metric-label">{m.label}</div>
                <div className="metric-value">{m.value}</div>
                <div className="metric-sub">{m.sub}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="section-header">
          <h2 className="section-title">Terminals</h2>
          <div className="filter-tabs">
            {[['all', 'All'], ['online', 'Online'], ['issue', 'Issues']].map(([k, v]) => (
              <button key={k} className={`filter-tab ${filter === k ? 'active' : ''}`} onClick={() => setFilter(k)}>{v}</button>
            ))}
          </div>
        </div>

        <div className="terminal-list">
          <div className="terminal-header">
            <span>Terminal / Location</span>
            <span>Download</span>
            <span>Signal</span>
            <span>Uptime</span>
            <span>Latency</span>
            <span>Status</span>
          </div>
          {filtered.map(t => (
            <div key={t.id} className={`terminal-row ${selected === t.id ? 'selected' : ''}`}
              onClick={() => setSelected(selected === t.id ? null : t.id)}>
              <div>
                <div className="t-name">{t.name}</div>
                <div className="t-loc"><MapPin size={10} />{t.loc}</div>
              </div>
              <div>
                <div className="t-val mono">{t.status === 'offline' ? '—' : `${t.dl} Mbps`}</div>
                <Bar value={t.dl} max={300} />
              </div>
              <div>
                <div className="t-val mono">{t.status === 'offline' ? '—' : `${t.snr}%`}</div>
                <Bar value={t.snr} />
              </div>
              <div>
                <div className="t-val mono">{t.uptime}%</div>
                <div className="t-sub">30d</div>
              </div>
              <div>
                <div className="t-val mono">{t.status === 'offline' ? '—' : `${t.latency}ms`}</div>
                <div className="t-sub">{t.latency < 35 ? 'Good' : t.latency < 60 ? 'Fair' : t.status === 'offline' ? '' : 'Slow'}</div>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                <StatusBadge status={t.status} />
                <ChevronRight size={14} className={`row-chevron ${selected === t.id ? 'open' : ''}`} />
              </div>
            </div>
          ))}
        </div>

        {selectedT && (
          <div className="detail-panel">
            <div className="detail-header">
              <div>
                <h3 className="detail-title">{selectedT.name} <span className="detail-loc"><MapPin size={12} />{selectedT.loc}</span></h3>
              </div>
              <button className="detail-close" onClick={() => setSelected(null)}><X size={16} /></button>
            </div>
            <div className="detail-grid">
              <div className="detail-card">
                <div className="detail-card-title">Obstruction Map</div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
                  <ObstructionRing pct={selectedT.obstruction} />
                  <div>
                    <div className="obs-stat"><span>Blocked</span><span className="mono" style={{ color: '#ef4444' }}>{selectedT.obstruction}%</span></div>
                    <div className="obs-stat"><span>Clear</span><span className="mono" style={{ color: '#22d3a0' }}>{100 - selectedT.obstruction}%</span></div>
                    <div className="obs-stat"><span>Recommended</span><span className="mono">±20° vertical</span></div>
                  </div>
                </div>
              </div>
              <div className="detail-card">
                <div className="detail-card-title">Signal Quality — 24h</div>
                <ResponsiveContainer width="100%" height={130}>
                  <LineChart data={histories[selectedT.id] || []}>
                    <XAxis dataKey="h" tick={{ fontSize: 10, fill: '#475569' }} tickLine={false} axisLine={false} interval={5} />
                    <YAxis domain={[0, 100]} tick={{ fontSize: 10, fill: '#475569' }} tickLine={false} axisLine={false} width={28} />
                    <Tooltip content={<CustomTooltip />} />
                    <ReferenceLine y={70} stroke="#1e3a2a" strokeDasharray="3 3" />
                    <Line type="monotone" dataKey="snr" stroke="#22d3a0" strokeWidth={2} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
              <div className="detail-card">
                <div className="detail-card-title">Live Metrics</div>
                {[
                  ['Download', selectedT.dl ? `${selectedT.dl} Mbps` : 'Offline', <Activity size={14} />],
                  ['Upload', selectedT.ul ? `${selectedT.ul} Mbps` : 'Offline', <TrendingDown size={14} />],
                  ['Latency', selectedT.latency ? `${selectedT.latency} ms` : 'Offline', <Clock size={14} />],
                  ['30d Uptime', `${selectedT.uptime}%`, <Zap size={14} />],
                ].map(([label, val, icon]) => (
                  <div key={label} className="live-row">
                    <span className="live-label">{icon}{label}</span>
                    <span className="live-val mono">{val}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        )}

        {alerts.length > 0 && (
          <div className="alerts-section">
            <h2 className="section-title" style={{ marginBottom: '0.75rem' }}>Alerts</h2>
            {alerts.map(a => (
              <div key={a.id} className={`alert-item alert-${a.type}`}>
                <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  {a.type === 'warn' ? <AlertTriangle size={15} style={{ flexShrink: 0, marginTop: 1 }} /> : <Info size={15} style={{ flexShrink: 0, marginTop: 1 }} />}
                  <span>{a.text}</span>
                </div>
                <button className="alert-dismiss" onClick={() => setAlertDismissed(p => [...p, a.id])}><X size={13} /></button>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}
