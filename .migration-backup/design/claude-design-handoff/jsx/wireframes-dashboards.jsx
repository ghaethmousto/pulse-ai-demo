// Dashboard wireframes — Owner, Consultant, Contractor

// ── Animated pulse line ─────────────────────────────────────────────────────
// Replaces a static separator with a continuous ECG-like trace that drifts
// across, with periodic spike clusters. Faintly tinted in the accent color.
function PulseLine({ height = 36, accent = false }) {
  // Single tile of waveform — flat with one spike cluster — repeated by the
  // <pattern> below so the line scrolls forever without seams.
  const tile = "M 0 18 L 60 18 L 70 18 L 78 12 L 84 26 L 90 6 L 96 22 L 102 18 L 240 18";
  const stroke = accent ? 'var(--wf-accent)' : 'var(--wf-ink-2)';
  // Unique IDs so multiple PulseLine instances on the same page don't share defs.
  const uid = React.useId().replace(/[:]/g, '');
  const tileId = `pulseLineTile-${uid}`;
  const fadeId = `pulseLineFade-${uid}`;
  const maskId = `pulseLineMask-${uid}`;
  return (
    <div style={{ position: 'relative', height, overflow: 'hidden', borderTop: '1px solid var(--wf-line-softer)', borderBottom: '1px solid var(--wf-line-softer)', background: accent ? 'rgba(110,19,32,0.04)' : 'transparent' }}>
      {/* baseline hairline so it still reads as a separator if motion is paused */}
      <div style={{ position: 'absolute', left: 0, right: 0, top: '50%', height: 1, background: accent ? 'rgba(110,19,32,0.18)' : 'var(--wf-line-softer)' }} />
      <svg width="100%" height={height} viewBox={`0 0 1440 ${height}`} preserveAspectRatio="none" style={{ position: 'absolute', inset: 0, display: 'block' }}>
        <defs>
          <pattern id={tileId} width="240" height={height} patternUnits="userSpaceOnUse" x="0" y="0">
            <path d={tile} fill="none" stroke={stroke} strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" opacity="0.85" style={{ transform: `translateY(${(height - 36) / 2}px)` }} />
          </pattern>
          <linearGradient id={fadeId} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0" stopColor="white" stopOpacity="0" />
            <stop offset="0.08" stopColor="white" stopOpacity="1" />
            <stop offset="0.92" stopColor="white" stopOpacity="1" />
            <stop offset="1" stopColor="white" stopOpacity="0" />
          </linearGradient>
          <mask id={maskId}><rect width="1440" height={height} fill={`url(#${fadeId})`} /></mask>
        </defs>
        <g mask={`url(#${maskId})`}>
          <rect className="wf-pulseline-track" width="2880" height={height} fill={`url(#${tileId})`}/>
        </g>
      </svg>
      <style>{`
        @keyframes wfPulseLineScroll { from { transform: translateX(0); } to { transform: translateX(-240px); } }
        .wf-pulseline-track { animation: wfPulseLineScroll 6s linear infinite; }
      `}</style>
    </div>);

}

function DashboardShell({ title, role, children, user = 'S. Al-Mansouri', tinted = false, pulse = false }) {
  // Faded burgundy band — uses the existing --wf-accent-soft token, with a
  // matching burgundy hairline so the header reads as a single calm tinted block.
  const headerStyle = tinted ?
  {
    padding: '16px 28px',
    borderBottom: pulse ? 'none' : '1.25px solid rgba(110,19,32,0.22)',
    background: 'var(--wf-accent-soft)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  } :
  {
    padding: '16px 28px',
    borderBottom: pulse ? 'none' : '1.25px solid var(--wf-line)',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center'
  };
  return (
    <div className="wf-page" style={{ width: 1440, minHeight: 900, display: 'grid', gridTemplateColumns: '220px 1fr' }}>
      {/* sidebar */}
      <aside style={{ borderRight: '1.25px solid var(--wf-line)', padding: '18px 14px', display: 'flex', flexDirection: 'column', gap: 16 }}>
        <div style={{ display: 'flex', gap: 8, alignItems: 'center', padding: '6px 8px' }}>
          <PulseLogo />
          <span style={{ fontSize: 13, fontWeight: 600 }}>Pulse AI</span>
        </div>
        <div className="wf-soft" style={{ padding: 10, fontSize: 11 }}>
          <div className="wf-eyebrow">Project</div>
          <div style={{ marginTop: 4, fontWeight: 600, fontSize: 12 }}>Marina Tower Ph2</div>
          <div style={{ color: 'var(--wf-ink-3)', marginTop: 2 }}>847M AED · 28 mo</div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {['Overview', 'Documents', 'Decisions', 'Tasks', 'RFIs', 'Submittals', 'Risks', 'Schedule', 'Intelligence', 'Team'].map((l, i) =>
          <div key={i} style={{ padding: '7px 10px', fontSize: 12.5, color: i === 0 ? 'var(--wf-ink)' : 'var(--wf-ink-2)', fontWeight: i === 0 ? 600 : 400, background: i === 0 ? 'var(--wf-paper-2)' : 'transparent', borderRadius: 6 }}>{l}</div>
          )}
        </div>
        <div style={{ marginTop: 'auto', padding: 10, borderTop: '1px solid var(--wf-line-softer)', display: 'flex', gap: 8, alignItems: 'center', fontSize: 12 }}>
          <div style={{ width: 26, height: 26, borderRadius: 13, background: 'var(--wf-paper-3)', border: '1px solid var(--wf-line)' }} />
          <div style={{ flex: 1, overflow: 'hidden' }}>
            <div style={{ fontWeight: 600, fontSize: 12 }}>{user}</div>
            <div style={{ color: 'var(--wf-ink-3)', fontSize: 11 }}>{role}</div>
          </div>
        </div>
      </aside>
      <main>
        <div style={headerStyle}>
          <div>
            <div className="wf-eyebrow" style={tinted ? { color: 'var(--wf-accent)', opacity: 0.85 } : undefined}>{role} · Overview</div>
            <div className="wf-h3" style={{ marginTop: 4, color: tinted ? 'var(--wf-accent)' : undefined }}>{title}</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div className="wf-soft" style={{ padding: '6px 12px', fontSize: 11, background: tinted ? 'rgba(255,255,255,0.55)' : undefined, borderColor: tinted ? 'rgba(110,19,32,0.28)' : undefined }}>⌕  Ask Pulse…</div>
            <div className="wf-chip" style={tinted ? { background: 'rgba(255,255,255,0.6)', borderColor: 'rgba(110,19,32,0.35)', color: 'var(--wf-accent)' } : undefined}><span className="wf-dot accent" /> Live</div>
          </div>
        </div>
        {pulse && <PulseLine accent={tinted} />}
        <div style={{ padding: 28 }}>{children}</div>
      </main>
    </div>);

}

function DashOwner() {
  return (
    <DashboardShell title="Portfolio & decisions" role="Owner" pulse>
      <Annot style={{ top: 100, right: 40 }}>Owner = numbers + decisions</Annot>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {[['Budget', '847M', 'AED · 62% spent'], ['Schedule', '+2d', 'variance · amber'], ['Open Risks', '4', 'high-severity'], ['Pending Decisions', '3', 'awaiting you']].map((k, i) =>
        <div key={i} className="wf-card wf-kpi" style={{ padding: 16 }} tabIndex={0}>
            <div className="wf-eyebrow">{k[0]}</div>
            <div style={{ fontSize: 30, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', marginTop: 8 }}>{k[1]}</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{k[2]}</div>
            <div className="wf-kpi-arrow" aria-hidden="true">→</div>
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 14, marginTop: 14, alignItems: 'start' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="wf-card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="wf-h3">Portfolio Health</div>
              <div style={{ fontSize: 11, color: 'var(--wf-ink-3)' }}>Last 90 days</div>
            </div>
            <Placeholder label="[ burn-down + forecast · multi-series chart ]" style={{ height: 220, marginTop: 14 }} />
          </div>
          <div className="wf-card" style={{ padding: 20 }}>
            <div className="wf-h3">Risk Radar · AI</div>
            <Placeholder label="[ risk heatmap · 6 categories · 4 weeks ]" style={{ height: 160, marginTop: 12 }} />
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 10 }}>3 risks elevated this week. Pulse suggests 2 mitigations.</div>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="wf-card" style={{ padding: 20 }}>
            <div className="wf-h3">Decisions awaiting you</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
              {[
              { t: 'Approve MEP variation · +1.2M AED', d: 'Consultant review complete', age: '2d' },
              { t: 'Sign off Level 14–18 structural', d: 'Ready for owner approval', age: '1d' },
              { t: 'Procurement: facade package', d: '3 bids summarised by Pulse', age: '4h' }].
              map((d, i) =>
              <div key={i} className="wf-soft" style={{ padding: 12 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{d.t}</div>
                    <div style={{ fontSize: 11, color: 'var(--wf-ink-3)' }}>{d.age}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{d.d}</div>
                  <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                    <div className="wf-chip" style={{ background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>Approve</div>
                    <div className="wf-chip">Defer</div>
                    <div className="wf-chip">Discuss</div>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="wf-card" style={{ padding: 20 }}>
            <div className="wf-h3">What Pulse noticed</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, fontSize: 12, color: 'var(--wf-ink-2)' }}>
              {['Rebar delivery delay — Tower B critical path at risk.', 'Consultant flagged 3 drawing inconsistencies in L15–L18.', 'Budget variance on MEP trending +4% against baseline.'].map((t, i) =>
              <div key={i} style={{ padding: 10, border: '1px dashed var(--wf-line-soft)', borderRadius: 6 }}><span style={{ color: 'var(--wf-ink-3)' }}>◆</span> {t}</div>
              )}
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>);

}

function DashConsultant() {
  return (
    <DashboardShell title="Coordination & review" role="Consultant" user="R. Iyer" pulse>
      <Annot style={{ top: 100, right: 40 }}>Consultant = RFIs + submittals</Annot>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {[['Open RFIs', '12', '4 overdue'], ['Submittals', '23', '6 pending review'], ['Disciplines', '7', 'coordinating'], ['Compliance', '98%', 'current']].map((k, i) =>
        <div key={i} className="wf-card" style={{ padding: 16 }}>
            <div className="wf-eyebrow">{k[0]}</div>
            <div style={{ fontSize: 30, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', marginTop: 8 }}>{k[1]}</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{k[2]}</div>
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 14, marginTop: 14 }}>
        <div className="wf-card" style={{ padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="wf-h3">RFI Queue</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <div className="wf-chip">All</div>
              <div className="wf-chip" style={{ background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>Assigned to me</div>
              <div className="wf-chip">Overdue</div>
            </div>
          </div>
          <div style={{ padding: '10px 18px', display: 'grid', gridTemplateColumns: '80px 1fr 120px 90px 90px', fontSize: 10.5, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--wf-ink-3)', borderBottom: '1px solid var(--wf-line-softer)' }}>
            <div>ID</div><div>Subject</div><div>Discipline</div><div>Status</div><div>Age</div>
          </div>
          {[
          ['RFI-124', 'Rebar detailing clash · Tower B L14', 'Structural', 'Open', '11d'],
          ['RFI-125', 'Waterproofing spec · Podium', 'Arch', 'Draft', '2d'],
          ['RFI-123', 'MEP coordination · Plant room', 'MEP', 'Review', '6d'],
          ['RFI-122', 'Facade bracket tolerance', 'Facade', 'Answered', '3d'],
          ['RFI-121', 'Curtain wall glazing type', 'Facade', 'Open', '8d']].
          map((r, i) =>
          <div key={i} className="wf-row" style={{ gridTemplateColumns: '80px 1fr 120px 90px 90px' }}>
              <div style={{ fontFamily: 'var(--wf-font-mono)' }}>{r[0]}</div>
              <div>{r[1]}</div>
              <div style={{ color: 'var(--wf-ink-3)' }}>{r[2]}</div>
              <div><span className="wf-chip" style={{ fontSize: 10, padding: '2px 8px' }}>{r[3]}</span></div>
              <div style={{ fontFamily: 'var(--wf-font-mono)', color: r[4].endsWith('1d') ? 'var(--wf-ink-3)' : 'var(--wf-accent)' }}>{r[4]}</div>
            </div>
          )}
        </div>
        <div className="wf-card" style={{ padding: 20 }}>
          <div className="wf-h3">Multi-discipline coordination</div>
          <Placeholder label="[ discipline matrix · clashes ]" style={{ height: 180, marginTop: 12 }} />
          <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 10 }}>4 clashes detected · 2 resolved this week</div>
          <div className="wf-hr" style={{ margin: '14px 0' }} />
          <div className="wf-eyebrow">Pulse suggests</div>
          <div style={{ fontSize: 12, color: 'var(--wf-ink-2)', marginTop: 8, lineHeight: 1.5 }}>
            Group RFI-124 + RFI-121 into a single coordination review — both depend on the same rebar package.
          </div>
        </div>
      </div>

      {/* Notes + Tasks row */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 14, marginTop: 14 }}>
        {/* Coordination notes */}
        <div className="wf-card" style={{ padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="wf-h3">Coordination notes</div>
            <div style={{ display: 'flex', gap: 6 }}>
              <div className="wf-chip" style={{ background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>Mine</div>
              <div className="wf-chip">Team</div>
              <div className="wf-chip">Pinned</div>
            </div>
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
            { who: 'R. Iyer', when: 'today · 10:24', tag: 'Structural', body: 'Confirmed with detailer that L14 rebar lap lengths follow ACI 318-19. Updating sheet S-214 before sending RFI-124 response.', refs: ['RFI-124', 'S-214'] },
            { who: 'A. Hossain', when: 'today · 09:02', tag: 'Façade', body: 'Bracket tolerance answer pending mock-up review on Thursday. Holding RFI-122 close-out until then.', refs: ['RFI-122'] },
            { who: 'D. Patel', when: 'yesterday', tag: 'MEP', body: 'Plant room coordination meeting moved to Wed 14:00. Need updated combined services drawing one day prior.', refs: ['RFI-123'] }].
            map((n, i) =>
            <div key={i} className="wf-soft" style={{ padding: 12 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div style={{ display: 'flex', gap: 8, alignItems: 'baseline' }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{n.who}</div>
                    <div className="wf-chip" style={{ fontSize: 10, padding: '2px 8px' }}>{n.tag}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)' }}>{n.when}</div>
                </div>
                <div style={{ fontSize: 12, color: 'var(--wf-ink-2)', marginTop: 6, lineHeight: 1.5 }}>{n.body}</div>
                <div style={{ display: 'flex', gap: 6, marginTop: 8 }}>
                  {n.refs.map((r, j) =>
                <div key={j} style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 10.5, color: 'var(--wf-ink-3)', padding: '2px 6px', border: '1px dashed var(--wf-line-soft)', borderRadius: 3 }}>↳ {r}</div>
                )}
                </div>
              </div>
            )}
            <div style={{ display: 'flex', gap: 8, marginTop: 4 }}>
              <div className="wf-soft" style={{ flex: 1, padding: '10px 12px', fontSize: 11.5, color: 'var(--wf-ink-4)' }}>Add a note · @mention to route…</div>
              <div className="wf-chip" style={{ background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>Post</div>
            </div>
          </div>
        </div>

        {/* My tasks */}
        <div className="wf-card" style={{ padding: 0 }}>
          <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="wf-h3">My tasks</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)' }}>11 open · 4 overdue</div>
          </div>
          <div style={{ padding: 18, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {[
            { t: 'Issue RFI-124 response · L14 rebar', due: 'Today', overdue: true, done: false, ref: 'RFI-124' },
            { t: 'Review submittal SB-088 — waterproofing', due: 'Today', overdue: false, done: false, ref: 'SB-088' },
            { t: 'Confirm bracket mock-up walk', due: 'Thu', overdue: false, done: false, ref: 'RFI-122' },
            { t: 'Sign off on combined services drawing', due: 'Wed', overdue: false, done: false, ref: 'RFI-123' },
            { t: 'Close out RFI-118 · podium drainage', due: '— ', overdue: false, done: true, ref: 'RFI-118' }].
            map((task, i) =>
            <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'flex-start', padding: '8px 4px', borderBottom: i < 4 ? '1px dashed var(--wf-line-soft)' : 0 }}>
                <div style={{ width: 14, height: 14, marginTop: 2, border: '1.25px solid var(--wf-ink-3)', borderRadius: 3, background: task.done ? 'var(--wf-ink)' : 'transparent', display: 'grid', placeItems: 'center', color: '#fff', fontSize: 10, flexShrink: 0 }}>{task.done ? '✓' : ''}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 12.5, fontWeight: 500, color: task.done ? 'var(--wf-ink-3)' : 'var(--wf-ink)', textDecoration: task.done ? 'line-through' : 'none' }}>{task.t}</div>
                  <div style={{ display: 'flex', gap: 8, marginTop: 4, alignItems: 'baseline' }}>
                    <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>↳ {task.ref}</div>
                    <div style={{ fontSize: 10.5, color: task.overdue ? 'var(--wf-accent)' : 'var(--wf-ink-3)', fontWeight: task.overdue ? 600 : 400 }}>{task.overdue ? '● overdue · ' : ''}due {task.due}</div>
                  </div>
                </div>
              </div>
            )}
            <div className="wf-soft" style={{ padding: '10px 12px', fontSize: 11.5, color: 'var(--wf-ink-4)', marginTop: 4, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>+ Add task · ⌘N</span>
              <span style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 10, color: 'var(--wf-ink-3)' }}>auto-link to RFI / SB</span>
            </div>
          </div>
        </div>
      </div>
    </DashboardShell>);

}

function DashContractor() {
  return (
    <DashboardShell title="Today on site" role="Contractor" user="M. Khan" pulse>
      <Annot style={{ top: 100, right: 40 }}>Contractor = today's plan + blockers</Annot>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 14 }}>
        {[['Tasks Today', '7', 'assigned to crew'], ['Blockers', '2', 'need escalation'], ['On Track', '53%', 'this week'], ['Materials', '94%', 'delivered']].map((k, i) =>
        <div key={i} className="wf-card" style={{ padding: 16 }}>
            <div className="wf-eyebrow">{k[0]}</div>
            <div style={{ fontSize: 30, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', marginTop: 8 }}>{k[1]}</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{k[2]}</div>
          </div>
        )}
      </div>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
        <div className="wf-card" style={{ padding: 20 }}>
          <div className="wf-h3">Today's plan · Tue 24 Apr</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            {[
            { t: 'Rebar fixing — L14 Tower B', crew: 'Crew A · 12', st: 'In progress', prog: 62 },
            { t: 'Pour prep — L13 slab', crew: 'Crew B · 8', st: 'Ready', prog: 0 },
            { t: 'MEP rough-in — Podium', crew: 'Crew C · 6', st: 'Blocked', prog: 30, block: true },
            { t: 'Formwork strike — L11', crew: 'Crew D · 4', st: 'Done', prog: 100 }].
            map((t, i) =>
            <div key={i} className="wf-soft" style={{ padding: 12, borderColor: t.block ? 'var(--wf-accent)' : undefined }}>
                <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{t.t}</div>
                  <div className="wf-chip" style={{ fontSize: 10, padding: '2px 8px', background: t.block ? 'var(--wf-accent)' : '#fff', color: t.block ? '#fff' : undefined, borderColor: t.block ? 'var(--wf-accent)' : undefined }}>{t.st}</div>
                </div>
                <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{t.crew}</div>
                <div style={{ height: 4, background: 'var(--wf-paper-3)', marginTop: 8, borderRadius: 6 }}>
                  <div style={{ width: `${t.prog}%`, height: '100%', background: t.block ? 'var(--wf-accent)' : 'var(--wf-ink)', borderRadius: 6 }} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="wf-card" style={{ padding: 20 }}>
          <div className="wf-h3">Blockers · escalate</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
            {[
            { t: 'RFI-124 blocks concrete pour — Tower B', d: 'Consultant review 11 days', cta: 'Escalate to Consultant' },
            { t: 'Rebar delivery delayed — ETA +3d', d: 'Procurement flagged · Pulse notified Owner', cta: 'View procurement thread' }].
            map((b, i) =>
            <div key={i} style={{ padding: 14, border: '1.25px solid var(--wf-accent)', borderRadius: 6, background: 'var(--wf-accent-soft)' }}>
                <div style={{ fontSize: 12.5, fontWeight: 600, color: 'var(--wf-accent)' }}>⚠ {b.t}</div>
                <div style={{ fontSize: 11, color: 'var(--wf-ink-2)', marginTop: 4 }}>{b.d}</div>
                <div className="wf-chip" style={{ marginTop: 10, background: 'var(--wf-accent)', color: '#fff', borderColor: 'var(--wf-accent)', fontSize: 11 }}>{b.cta} →</div>
              </div>
            )}
          </div>
          <div className="wf-hr" style={{ margin: '14px 0' }} />
          <div className="wf-eyebrow">Daily report</div>
          <div className="wf-pill" style={{ marginTop: 10 }}>📷 Add photos · voice note</div>
        </div>
      </div>

      {/* Upcoming works — 7-day look-ahead */}
      <div className="wf-card" style={{ padding: 20, marginTop: 14 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <div className="wf-h3">Upcoming works</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 2 }}>Next 7 days · 14 activities · 3 awaiting prerequisites</div>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {['Week', '2 weeks', 'Month'].map((l, i) =>
            <div key={i} className="wf-chip" style={{ fontSize: 10, background: i === 0 ? 'var(--wf-ink)' : '#fff', color: i === 0 ? '#fff' : undefined, borderColor: i === 0 ? 'var(--wf-ink)' : undefined }}>{l}</div>
            )}
          </div>
        </div>

        {/* day header strip */}
        <div style={{ display: 'grid', gridTemplateColumns: '160px repeat(7, 1fr)', marginTop: 16, borderBottom: '1.25px solid var(--wf-line)' }}>
          <div style={{ padding: '8px 10px', fontSize: 10, fontFamily: 'var(--wf-font-mono)', letterSpacing: '0.08em', color: 'var(--wf-ink-3)', textTransform: 'uppercase' }}>Activity</div>
          {[
          ['Wed', '24'], ['Thu', '25'], ['Fri', '26'], ['Sat', '27'], ['Sun', '28'], ['Mon', '29'], ['Tue', '30']].
          map((d, i) =>
          <div key={i} style={{ padding: '8px 10px', fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', textAlign: 'center', color: 'var(--wf-ink-3)', borderLeft: '1px solid var(--wf-line-softer)' }}>
              <div style={{ letterSpacing: '0.08em' }}>{d[0].toUpperCase()}</div>
              <div style={{ fontSize: 13, color: 'var(--wf-ink)', marginTop: 2 }}>{d[1]}</div>
            </div>
          )}
        </div>

        {/* gantt rows: each row's bar uses gridColumn span */}
        {[
        { t: 'Pour L13 slab', meta: 'Crew B · 8 · concrete', start: 1, span: 1, kind: 'plan' },
        { t: 'MEP rough-in — Podium', meta: 'Crew C · 6 · waiting RFI-124', start: 1, span: 3, kind: 'block' },
        { t: 'Rebar fixing — L15', meta: 'Crew A · 12 · prereq L14 done', start: 2, span: 3, kind: 'plan' },
        { t: 'Formwork strike — L13', meta: 'Crew D · 4', start: 4, span: 1, kind: 'plan' },
        { t: 'Façade dry-fit — Tower B', meta: 'Crew E · 5 · materials confirmed', start: 5, span: 3, kind: 'plan' },
        { t: 'Pour prep L14', meta: 'Crew B · 8', start: 6, span: 2, kind: 'plan' },
        { t: 'Inspection · L13 slab', meta: 'Consultant · half-day', start: 3, span: 1, kind: 'milestone' }].
        map((row, i) =>
        <div key={i} style={{ display: 'grid', gridTemplateColumns: '160px repeat(7, 1fr)', borderBottom: i === 6 ? 0 : '1px solid var(--wf-line-softer)', alignItems: 'center', minHeight: 44 }}>
            <div style={{ padding: '8px 10px' }}>
              <div style={{ fontSize: 12, fontWeight: 600, color: row.kind === 'block' ? 'var(--wf-accent)' : 'var(--wf-ink)' }}>{row.t}</div>
              <div style={{ fontSize: 10, color: 'var(--wf-ink-3)', marginTop: 2 }}>{row.meta}</div>
            </div>
            <div style={{ gridColumn: `${row.start + 1} / span ${row.span}`, margin: '0 6px', height: row.kind === 'milestone' ? 12 : 14, borderRadius: 2, background: row.kind === 'block' ? 'var(--wf-accent-soft)' : row.kind === 'milestone' ? 'transparent' : 'var(--wf-paper-3)', border: row.kind === 'block' ? '1.25px solid var(--wf-accent)' : row.kind === 'milestone' ? '1.25px dashed var(--wf-ink)' : '1px solid var(--wf-line)', position: 'relative', display: 'flex', alignItems: 'center' }}>
              <div style={{ height: '100%', width: row.kind === 'block' ? '40%' : row.kind === 'milestone' ? 0 : '100%', background: row.kind === 'block' ? 'var(--wf-accent)' : 'var(--wf-ink)', opacity: row.kind === 'block' ? 1 : 0.85, borderRadius: 1 }} />
              {row.kind === 'milestone' &&
            <div style={{ position: 'absolute', left: '50%', top: '50%', width: 10, height: 10, transform: 'translate(-50%,-50%) rotate(45deg)', background: 'var(--wf-ink)' }} />
            }
            </div>
          </div>
        )}

        {/* legend */}
        <div style={{ display: 'flex', gap: 18, marginTop: 14, fontSize: 10.5, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 14, height: 8, background: 'var(--wf-ink)', opacity: 0.85 }} />Planned</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 14, height: 8, background: 'var(--wf-accent-soft)', border: '1.25px solid var(--wf-accent)' }} />Blocked / at risk</span>
          <span style={{ display: 'flex', alignItems: 'center', gap: 6 }}><span style={{ width: 8, height: 8, background: 'var(--wf-ink)', transform: 'rotate(45deg)' }} />Inspection / milestone</span>
        </div>
      </div>
    </DashboardShell>);

}

// ── SOURCE OF TRUTH ─────────────────────────────────────────────────────────
// The central reconciled view. Documents, decisions, schedule, risks, comms —
// all unified into a single living page that all three roles share.
function SourceOfTruth() {
  return (
    <DashboardShell title="Source of truth — Marina Tower Ph2" role="All roles" user="Pulse · live" pulse>
      <Annot style={{ top: 100, right: 40 }} arrow="down">single reconciled view · same data, all stakeholders</Annot>

      {/* Hero KPI strip */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 14 }}>
        {[
        ['Project Health', '82', '/100 · improving'],
        ['Schedule', '+2d', 'vs baseline'],
        ['Budget', '62%', 'spent · on track'],
        ['Open Items', '47', '11 high priority'],
        ['Last Reconciled', '2m', 'ago · 6 changes']].
        map((k, i) =>
        <div key={i} className="wf-card" style={{ padding: 16 }}>
            <div className="wf-eyebrow">{k[0]}</div>
            <div style={{ fontSize: 28, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', marginTop: 8, letterSpacing: '-0.01em' }}>{k[1]}</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{k[2]}</div>
          </div>
        )}
      </div>

      {/* Main reconciled grid */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.6fr 1fr', gap: 14, marginTop: 14 }}>
        {/* Living timeline */}
        <div className="wf-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div className="wf-h3">Living timeline</div>
            <div style={{ display: 'flex', gap: 6 }}>
              {['Schedule', 'Decisions', 'Risks', 'Docs'].map((l, i) =>
              <div key={i} className="wf-chip" style={{ fontSize: 10, background: i === 0 ? 'var(--wf-ink)' : '#fff', color: i === 0 ? '#fff' : undefined, borderColor: i === 0 ? 'var(--wf-ink)' : undefined }}>{l}</div>
              )}
            </div>
          </div>
          <Placeholder label="[ multi-track timeline · schedule + decisions + risk events overlaid ]" style={{ height: 220, marginTop: 14 }} />
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
            {[
            { tag: 'DECISION', t: 'MEP variation approved · +1.2M AED', who: 'S. Al-Mansouri · 2h ago', src: 'min-2024-04-22.pdf' },
            { tag: 'RISK', t: 'Rebar delivery delayed — ETA +3d', who: 'Procurement · 5h ago', src: 'po-3341' },
            { tag: 'DOC', t: 'Drawing A-104 rev D issued', who: 'R. Iyer · 1d ago', src: 'a-104-rev-d.dwg' }].
            map((e, i) =>
            <div key={i} style={{ display: 'grid', gridTemplateColumns: '70px 1fr auto', gap: 12, padding: '10px 12px', borderLeft: '2px solid var(--wf-accent)', background: 'var(--wf-paper-2)' }}>
                <div className="wf-eyebrow" style={{ fontSize: 9 }}>{e.tag}</div>
                <div>
                  <div style={{ fontSize: 12.5, fontWeight: 600 }}>{e.t}</div>
                  <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', marginTop: 2 }}>{e.who} · cites <span style={{ fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-accent)' }}>{e.src}</span></div>
                </div>
                <div className="wf-chip" style={{ fontSize: 10 }}>Open →</div>
              </div>
            )}
          </div>
        </div>

        {/* Right rail · stakeholder views */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div className="wf-card" style={{ padding: 20 }}>
            <div className="wf-h3">Same truth, three lenses</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
              {[
              { r: 'Owner', f: 'Sees: budget, milestones, decisions awaiting signature' },
              { r: 'Consultant', f: 'Sees: RFI/submittal queue, drawing reviews, coordination' },
              { r: 'Contractor', f: 'Sees: today\'s plan, blockers, materials, daily report' }].
              map((x, i) =>
              <div key={i} className="wf-soft" style={{ padding: 12 }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                    <PersonaGlyph type={x.r.toLowerCase()} size={26} />
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{x.r}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 6, lineHeight: 1.4 }}>{x.f}</div>
                </div>
              )}
            </div>
          </div>

          <div className="wf-card" style={{ padding: 20 }}>
            <div className="wf-h3">Reconciliation feed</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {[
              ['Email thread → Decision', 'VO-14 owner identified'],
              ['WhatsApp → Risk', 'Façade material flagged'],
              ['Drawing rev → Schedule', 'A-104 push +1d to L13'],
              ['Site photo → Submittal', 'SB-88 evidence attached']].
              map((r, i) =>
              <div key={i} style={{ display: 'flex', gap: 10, fontSize: 11, padding: '6px 0', borderBottom: i === 3 ? 0 : '1px solid var(--wf-line-softer)' }}>
                  <div style={{ color: 'var(--wf-accent)', fontFamily: 'var(--wf-font-mono)' }}>→</div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 9.5, color: 'var(--wf-ink-3)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>{r[0]}</div>
                    <div style={{ marginTop: 2, color: 'var(--wf-ink-2)' }}>{r[1]}</div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Bottom row: document graph + decision ledger */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14, marginTop: 14 }}>
        <div className="wf-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="wf-h3">Document graph</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)' }}>1,247 docs · connected</div>
          </div>
          <Placeholder label="[ force-directed graph · drawings ↔ specs ↔ contracts ↔ submittals ]" style={{ height: 180, marginTop: 14 }} />
          <div style={{ display: 'flex', gap: 14, marginTop: 12, fontSize: 11, color: 'var(--wf-ink-3)' }}>
            <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--wf-ink)', marginRight: 6, verticalAlign: 'middle' }} />Drawings 412</span>
            <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--wf-accent)', marginRight: 6, verticalAlign: 'middle' }} />RFIs 88</span>
            <span><span style={{ display: 'inline-block', width: 8, height: 8, background: 'var(--wf-ink-3)', marginRight: 6, verticalAlign: 'middle' }} />Submittals 214</span>
          </div>
        </div>

        <div className="wf-card" style={{ padding: 20 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="wf-h3">Decision ledger</div>
            <div className="wf-chip" style={{ fontSize: 10 }}>Audit-ready</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 80px 70px', gap: 0, marginTop: 14, fontSize: 11 }}>
            {['#', 'Decision', 'Owner', 'Date'].map((h, i) =>
            <div key={i} style={{ padding: '8px 10px', fontWeight: 600, color: 'var(--wf-ink-3)', borderBottom: '1.25px solid var(--wf-line)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase' }}>{h}</div>
            )}
            {[
            ['D-041', 'MEP variation approved (+1.2M AED)', 'Owner', '22 Apr'],
            ['D-040', 'Façade panel — supplier B selected', 'Consultant', '20 Apr'],
            ['D-039', 'Pour sequence resequenced', 'Contractor', '18 Apr'],
            ['D-038', 'Substantial completion target reaffirmed', 'Owner', '15 Apr']].
            map((row, i) => row.map((c, j) =>
            <div key={`${i}-${j}`} style={{ padding: '10px', borderBottom: i === 3 ? 0 : '1px solid var(--wf-line-softer)', fontFamily: j === 0 || j === 3 ? 'var(--wf-font-mono)' : undefined, fontSize: j === 0 ? 10.5 : 11.5, color: j === 0 ? 'var(--wf-accent)' : j === 1 ? 'var(--wf-ink)' : 'var(--wf-ink-2)', fontWeight: j === 1 ? 500 : 400 }}>{c}</div>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>);

}

Object.assign(window, { DashOwner, DashConsultant, DashContractor, SourceOfTruth });