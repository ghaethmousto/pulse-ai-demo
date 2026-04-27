// Onboarding, Features page, and Mobile screens

// ── HoverParallaxCard ─────────────────────────────────────────────────────
// Feature card whose interior content reacts to cursor — subtle 3D tilt on
// the card body + parallax shift on foreground / background layers of the
// in-card mock. Built to feel alive on the Platform features grid.
function HoverParallaxCard({ n, title, desc, kind }) {
  const ref = React.useRef(null);
  const [m, setM] = React.useState({ x: 0.5, y: 0.5, active: false });

  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    setM({ x: (e.clientX - r.left) / r.width, y: (e.clientY - r.top) / r.height, active: true });
  };
  const onLeave = () => setM({ x: 0.5, y: 0.5, active: false });

  const dx = (m.x - 0.5) * 2; // -1..1
  const dy = (m.y - 0.5) * 2;
  const tiltX = -dy * 4; // deg
  const tiltY = dx * 5;
  const liftShadow = m.active ?
  '0 24px 60px rgba(24,20,16,0.12), 0 4px 12px rgba(24,20,16,0.06)' :
  '0 1px 0 rgba(24,20,16,0.02)';

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="wf-card"
      style={{
        padding: 28, minHeight: 340, position: 'relative',
        transformStyle: 'preserve-3d',
        perspective: 1200,
        transform: `perspective(1200px) rotateX(${tiltX}deg) rotateY(${tiltY}deg)`,
        transition: m.active ? 'box-shadow .2s, border-color .2s' : 'transform .4s cubic-bezier(.2,.7,.3,1), box-shadow .3s',
        boxShadow: liftShadow,
        borderColor: m.active ? 'var(--wf-ink-3)' : undefined,
        willChange: 'transform'
      }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', transform: `translateZ(${m.active ? 20 : 0}px)` }}>
        <div className="wf-eyebrow" style={{ color: 'var(--wf-ink-3)' }}>{n}</div>
        <div className="wf-chip">Feature</div>
      </div>
      <div className="wf-h2" style={{ fontSize: 26, marginTop: 12, transform: `translate(${dx * 3}px, ${dy * 2}px) translateZ(${m.active ? 28 : 0}px)`, transition: m.active ? 'none' : 'transform .4s' }}>{title}</div>
      <div className="wf-body wf-muted" style={{ marginTop: 10, maxWidth: 440, transform: `translate(${dx * 2}px, ${dy * 1.5}px) translateZ(${m.active ? 14 : 0}px)`, transition: m.active ? 'none' : 'transform .4s' }}>{desc}</div>
      <div style={{ marginTop: 20, height: 140, position: 'relative', overflow: 'hidden', background: 'var(--wf-paper-2)', border: '1px dashed var(--wf-line)', borderRadius: 4, transform: `translateZ(${m.active ? 10 : 0}px)` }}>
        <ParallaxMock kind={kind} dx={dx} dy={dy} active={m.active} />
      </div>
    </div>);

}

// Each "kind" gets its own layered mock — bg layer moves opposite to cursor,
// fg layer moves with cursor → parallax depth illusion. Keep it schematic
// (this is still a wireframe) but live.
function ParallaxMock({ kind, dx, dy, active }) {
  const bg = (amt) => ({ transform: `translate(${-dx * amt}px, ${-dy * amt}px)`, transition: active ? 'none' : 'transform .45s cubic-bezier(.2,.7,.3,1)' });
  const fg = (amt) => ({ transform: `translate(${dx * amt}px, ${dy * amt}px)`, transition: active ? 'none' : 'transform .45s cubic-bezier(.2,.7,.3,1)' });

  if (kind === 'graph') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 140" style={{ position: 'absolute', inset: 0 }}>
        <g style={bg(8)} stroke="var(--wf-line)" strokeWidth="1" fill="none">
          {Array.from({ length: 10 }).map((_, i) =>
          <line key={i} x1={40 + i * 35} y1="20" x2={60 + i * 30} y2="120" />
          )}
        </g>
        <g style={fg(14)}>
          {[[80, 40], [160, 80], [240, 30], [300, 90], [120, 100], [200, 50], [280, 110]].map(([x, y], i) =>
          <circle key={i} cx={x} cy={y} r={i === 2 ? 8 : 5} fill={i === 2 ? 'var(--wf-accent)' : 'var(--wf-ink)'} />
          )}
        </g>
      </svg>);

  }
  if (kind === 'ledger') {
    return (
      <div style={{ position: 'absolute', inset: 0, padding: 14, fontFamily: 'var(--wf-font-mono)', fontSize: 10 }}>
        <div style={{ ...bg(6), position: 'absolute', inset: 14, display: 'flex', flexDirection: 'column', gap: 10, color: 'var(--wf-ink-3)' }}>
          {['DEC · 11  approved', 'DEC · 09  deferred', 'DEC · 07  approved', 'DEC · 04  rejected', 'DEC · 02  approved'].map((r, i) =>
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--wf-line)', paddingBottom: 4 }}>
              <span>{r}</span><span>·····</span>
            </div>
          )}
        </div>
        <div style={{ ...fg(10), position: 'absolute', left: 20, top: 46, width: 180, height: 20, background: 'var(--wf-accent)', opacity: 0.15, border: '1.5px solid var(--wf-accent)', borderRadius: 2 }} />
      </div>);

  }
  if (kind === 'schedule') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 140" style={{ position: 'absolute', inset: 0 }}>
        <g style={bg(6)} fill="var(--wf-paper-3)">
          {[20, 40, 60, 80, 100].map((y, i) => <rect key={i} x="20" y={y} width={200 + i * 20} height="10" />)}
        </g>
        <g style={fg(12)} stroke="var(--wf-accent)" strokeWidth="2" fill="none">
          <path d="M 20 70 L 80 70 L 80 50 L 180 50 L 180 90 L 300 90 L 300 60 L 380 60" />
          <circle cx="180" cy="90" r="5" fill="var(--wf-accent)" />
        </g>
      </svg>);

  }
  if (kind === 'radar') {
    return (
      <svg width="100%" height="100%" viewBox="0 0 400 140" style={{ position: 'absolute', inset: 0 }}>
        <g style={bg(6)} stroke="var(--wf-line)" fill="none">
          {[20, 40, 60].map((r, i) => <circle key={i} cx="200" cy="70" r={r} />)}
          <line x1="200" y1="0" x2="200" y2="140" />
          <line x1="60" y1="70" x2="340" y2="70" />
        </g>
        <g style={fg(16)}>
          {[[230, 50, 4], [170, 90, 3], [260, 95, 5], [140, 60, 3], [210, 40, 6]].map(([x, y, r], i) =>
          <circle key={i} cx={x} cy={y} r={r} fill={i === 4 ? 'var(--wf-accent)' : 'var(--wf-ink)'} />
          )}
        </g>
      </svg>);

  }
  if (kind === 'rfi') {
    return (
      <div style={{ position: 'absolute', inset: 0, padding: 14 }}>
        <div style={{ ...bg(6), display: 'flex', flexDirection: 'column', gap: 8 }}>
          {['RFI-0142 · Slab rebar clash', 'RFI-0141 · MEP coordination', 'RFI-0140 · Curtain wall anchor', 'RFI-0139 · Stair tread detail'].map((r, i) =>
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '6px 10px', background: 'var(--wf-paper)', border: '1px solid var(--wf-line-softer)', borderRadius: 3, fontSize: 10, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-2)' }}>
              <span style={{ width: 6, height: 6, borderRadius: 3, background: i === 0 ? 'var(--wf-accent)' : 'var(--wf-ink-3)' }} />
              {r}
            </div>
          )}
        </div>
        <div style={{ ...fg(14), position: 'absolute', top: 14, right: 14, background: 'var(--wf-ink)', color: '#fff', padding: '4px 8px', fontSize: 9, fontFamily: 'var(--wf-font-mono)', borderRadius: 2 }}>DUE 2d</div>
      </div>);

  }
  // chat
  return (
    <div style={{ position: 'absolute', inset: 0, padding: 14, display: 'flex', flexDirection: 'column', gap: 6 }}>
      <div style={{ ...bg(5), alignSelf: 'flex-end', maxWidth: '70%', padding: '6px 10px', background: 'var(--wf-paper-3)', fontSize: 10, borderRadius: 3 }}>Why did the concrete pour slip?</div>
      <div style={{ ...fg(10), alignSelf: 'flex-start', maxWidth: '80%', padding: '8px 10px', background: 'var(--wf-ink)', color: '#fff', fontSize: 10, borderRadius: 3, fontFamily: 'var(--wf-font-mono)' }}>Weather delay on Nov 4. Source: Daily Report #237, Field Memo 0212. →</div>
      <div style={{ ...bg(8), alignSelf: 'flex-end', marginTop: 'auto', fontSize: 9, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)' }}>· cites 2 sources ·</div>
    </div>);

}

// ── ONBOARDING FLOW ─────────────────────────────────────────────────────────
function OnboardingStep({ n, total, title, children, footer, height = 820 }) {
  return (
    <div className="wf-page" style={{ width: 1280, height: height, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '16px 32px', borderBottom: '1.25px solid var(--wf-line)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><PulseLogo /><span style={{ fontSize: 13, fontWeight: 600 }}>Pulse AI</span></div>
        <div style={{ display: 'flex', gap: 6, alignItems: 'center', fontSize: 11, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>
          Step {n} of {total}
          <div style={{ width: 200, height: 3, background: 'var(--wf-paper-3)', marginLeft: 10 }}>
            <div style={{ width: `${n / total * 100}%`, height: '100%', background: 'var(--wf-ink)' }} />
          </div>
        </div>
        <div style={{ fontSize: 12, color: 'var(--wf-ink-3)' }}>Skip setup</div>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', minWidth: 0, overflow: 'hidden', padding: "30px 80px 50px" }}>
        <div className="wf-h2" style={{ maxWidth: 700 }}>{title}</div>
        <div style={{ flex: 1, marginTop: 30, height: "740.466px" }}>{children}</div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid var(--wf-line-softer)', paddingTop: 20 }}>
          <div className="wf-btn ghost">← Back</div>
          <div className="wf-btn accent">Finish →</div>
        </div>
      </div>
    </div>);

}

// ── Step 1: redesigned role selection ──────────────────────────────────────
// Two-column composition. Left: role chooser as a vertical list of rich rows
// (glyph + role + JTBD + the surfaces the role lives in). Right: live
// "what you'll see first" preview panel that reflects the selected role —
// gives the user something concrete before they commit. Below the chooser:
// a quiet alternative path ("join an existing project") so first-run users
// who were invited don't get pushed down the wrong fork.

function RolePreviewMini({ role }) {
  // Tiny schematic of the dashboard that role lands on. Wire-style, not pixel.
  const common = { fontFamily: 'var(--wf-font-mono)', fontSize: 9.5, color: 'var(--wf-ink-3)' };
  if (role === 'owner') {
    return (
      <div style={{ position: 'absolute', inset: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', ...common }}><span>PORTFOLIO · 84 PROJECTS</span><span>14.2B AED</span></div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 6 }}>
          {['On track', 'At risk', 'Slipping', 'Stalled'].map((l, i) =>
          <div key={i} style={{ border: '1px solid var(--wf-line-softer)', padding: '8px 6px', background: 'var(--wf-paper)' }}>
              <div style={{ fontSize: 9, color: 'var(--wf-ink-3)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{l}</div>
              <div style={{ fontSize: 18, fontWeight: 600, marginTop: 2, color: i === 2 ? 'var(--wf-accent)' : 'var(--wf-ink)' }}>{[52, 18, 9, 5][i]}</div>
            </div>
          )}
        </div>
        <div style={{ flex: 1, border: '1px dashed var(--wf-line)', position: 'relative', background: 'var(--wf-paper)' }}>
          <svg width="100%" height="100%" viewBox="0 0 280 90" preserveAspectRatio="none" style={{ position: 'absolute', inset: 0 }}>
            <path d="M 0 70 L 40 60 L 80 65 L 120 50 L 160 35 L 200 45 L 240 30 L 280 25" stroke="var(--wf-ink)" strokeWidth="1.5" fill="none" />
            <path d="M 0 80 L 40 75 L 80 82 L 120 70 L 160 78 L 200 65 L 240 60 L 280 58" stroke="var(--wf-accent)" strokeWidth="1.5" fill="none" strokeDasharray="3 2" />
            <circle cx="160" cy="78" r="3" fill="var(--wf-accent)" />
          </svg>
          <div style={{ position: 'absolute', top: 6, left: 8, ...common }}>EARNED VALUE · ACTUAL vs PLAN</div>
        </div>
        <div style={{ ...common, display: 'flex', gap: 12 }}><span>· 9 decisions awaiting</span><span>· 3 risks</span><span>· cashflow forecast</span></div>
      </div>);

  }
  if (role === 'consultant') {
    return (
      <div style={{ position: 'absolute', inset: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', ...common }}><span>RFI · SUBMITTAL · COORD</span><span>47 OPEN</span></div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
          {[
          ['RFI-0142', 'Slab rebar clash · Block C', 'due 2d', 'accent'],
          ['SUB-0089', 'Curtain wall mock-up', 'review', 'ink'],
          ['RFI-0141', 'MEP coord · L18-24', 'due 4d', 'ink'],
          ['SUB-0088', 'Stair tread spec', 'approved', 'muted'],
          ['RFI-0140', 'Anchor detail · core', 'due 6d', 'ink']].
          map(([id, t, s, tone], i) =>
          <div key={i} style={{ display: 'grid', gridTemplateColumns: '64px 1fr 70px', gap: 6, fontFamily: 'var(--wf-font-mono)', fontSize: 9.5, padding: '4px 6px', background: 'var(--wf-paper)', border: '1px solid var(--wf-line-softer)', alignItems: 'center' }}>
              <span style={{ color: 'var(--wf-ink-3)' }}>{id}</span>
              <span style={{ color: 'var(--wf-ink-2)' }}>{t}</span>
              <span style={{ textAlign: 'right', color: tone === 'accent' ? 'var(--wf-accent)' : tone === 'muted' ? 'var(--wf-ink-3)' : 'var(--wf-ink)' }}>{s}</span>
            </div>
          )}
        </div>
        <div style={{ ...common, marginTop: 'auto' }}>· cycle time vs benchmark · response heatmap ·</div>
      </div>);

  }
  // contractor
  return (
    <div style={{ position: 'absolute', inset: 16, display: 'flex', flexDirection: 'column', gap: 10 }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', ...common }}><span>TODAY · 14 NOV</span><span>SHIFT 06:00</span></div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 5 }}>
        {[
        ['Slab pour · Block C L4', 'crew of 24', '9h'],
        ['Rebar tie · L5', 'crew of 12', 'rolling'],
        ['MEP rough · L3', 'blocked · RFI-0142', '—'],
        ['Curtain wall · north', 'crew of 8', 'ongoing']].
        map(([t, sub, h], i) =>
        <div key={i} style={{ padding: '6px 8px', background: 'var(--wf-paper)', border: '1px solid var(--wf-line-softer)', borderLeft: i === 2 ? '2px solid var(--wf-accent)' : '1px solid var(--wf-line-softer)' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 10.5, fontWeight: 600 }}>
              <span>{t}</span><span style={{ fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)', fontSize: 9.5 }}>{h}</span>
            </div>
            <div style={{ fontSize: 9.5, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', marginTop: 1 }}>{sub}</div>
          </div>
        )}
      </div>
      <div style={{ ...common, marginTop: 'auto' }}>· schedule · open RFIs · daily report ·</div>
    </div>);

}

function OnbStep1() {
  // Selected role (visual selection only — no real state). Default: Owner.
  const selected = 'owner';
  const roles = [
  {
    id: 'owner',
    glyph: 'owner',
    title: 'Owner / Developer',
    jtbd: 'I need to know which projects are slipping — and why — before they hit my desk.',
    surfaces: ['Portfolio dashboard', 'Decision ledger', 'Cashflow & EVM', 'Risk radar'],
    sees: 'Portfolio Health'
  },
  {
    id: 'consultant',
    glyph: 'consultant',
    title: 'Consultant / Designer',
    jtbd: 'I coordinate RFIs, submittals, and design across disciplines without losing the thread.',
    surfaces: ['RFI cycle board', 'Submittal log', 'Coordination viewer', 'Document graph'],
    sees: 'RFI & Submittal Queue'
  },
  {
    id: 'contractor',
    glyph: 'contractor',
    title: 'Contractor / Builder',
    jtbd: 'I execute on site and need clear, today-shaped priorities — not yesterday\u2019s status.',
    surfaces: ['Today on site', 'Daily report', 'Open blockers', 'Schedule slip'],
    sees: 'Today on Site'
  }];

  const sel = roles.find((r) => r.id === selected);

  return (
    <OnboardingStep n={1} total={5} height={820} title="Welcome. Let's connect your project.">
      <Annot style={{ top: -20, right: 40 }}>first-run · no template · 90s setup</Annot>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 460px', gap: 36, marginTop: 28, alignItems: 'start' }}>
        {/* Role chooser column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          <div className="wf-eyebrow" style={{ color: 'var(--wf-ink-3)' }}>I'm primarily a…</div>
          {roles.map((r) => {
            const isSel = r.id === selected;
            return (
              <div
                key={r.id}
                className="wf-card"
                style={{
                  padding: '18px 20px',
                  display: 'grid',
                  gridTemplateColumns: '56px 1fr auto',
                  gap: 18,
                  alignItems: 'center',
                  borderColor: isSel ? 'var(--wf-accent)' : undefined,
                  borderWidth: isSel ? 1.5 : 1.25,
                  background: isSel ? 'var(--wf-paper)' : undefined,
                  position: 'relative',
                  boxShadow: isSel ? '0 1px 0 rgba(110,19,32,0.06)' : undefined
                }}>
                {/* Selected accent rail */}
                {isSel && <div style={{ position: 'absolute', left: -1.5, top: 12, bottom: 12, width: 3, background: 'var(--wf-accent)' }} />}
                <PersonaGlyph type={r.glyph} size={52} />
                <div>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 10 }}>
                    <div className="wf-h3" style={{ fontSize: 17 }}>{r.title}</div>
                    {isSel && <div className="wf-chip" style={{ background: 'var(--wf-accent)', color: '#fff', borderColor: 'var(--wf-accent)' }}>Selected</div>}
                  </div>
                  <div className="wf-body wf-muted" style={{ marginTop: 4, fontSize: 12.5, fontStyle: 'italic', maxWidth: 520 }}>
                    "{r.jtbd}"
                  </div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: 5, marginTop: 10 }}>
                    {r.surfaces.map((s, i) =>
                    <span key={i} className="wf-chip" style={{ fontSize: 10.5, padding: '3px 8px' }}>{s}</span>
                    )}
                  </div>
                </div>
                <div style={{ width: 18, height: 18, borderRadius: 9, border: '1.25px solid', borderColor: isSel ? 'var(--wf-accent)' : 'var(--wf-line)', display: 'grid', placeItems: 'center', alignSelf: 'center' }}>
                  {isSel && <div style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--wf-accent)' }} />}
                </div>
              </div>);

          })}

          {/* Alternate path — invited users */}
          <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginTop: 6 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--wf-line-softer)' }} />
            <div className="wf-eyebrow" style={{ color: 'var(--wf-ink-3)' }}>or</div>
            <div style={{ flex: 1, height: 1, background: 'var(--wf-line-softer)' }} />
          </div>
          <div className="wf-soft" style={{ padding: '14px 18px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 16 }}>
            <div>
              <div style={{ fontSize: 13, fontWeight: 600 }}>Were you invited to a project?</div>
              <div className="wf-body wf-muted" style={{ fontSize: 12, marginTop: 2 }}>Skip setup. Open the invite link or paste a project code.</div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <div className="wf-soft" style={{ padding: '8px 12px', fontFamily: 'var(--wf-font-mono)', fontSize: 12, color: 'var(--wf-ink-3)', background: 'var(--wf-paper)', border: '1px dashed var(--wf-line)', minWidth: 140 }}>PROJECT-CODE</div>
              <div className="wf-btn ghost" style={{ fontSize: 12 }}>Join →</div>
            </div>
          </div>
        </div>

        {/* Live preview column */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10, position: 'sticky', top: 0 }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
            <div className="wf-eyebrow" style={{ color: 'var(--wf-ink-3)' }}>Tuned for {sel.title.split(' /')[0]}</div>
            <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>preview · day 1</div>
          </div>
          <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
            {/* mini chrome */}
            <div style={{ padding: '8px 12px', borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--wf-paper-2)' }}>
              <div style={{ display: 'flex', gap: 5 }}>
                <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--wf-line)' }} />
                <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--wf-line)' }} />
                <span style={{ width: 8, height: 8, borderRadius: 4, background: 'var(--wf-line)' }} />
              </div>
              <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>pulse.ai / your-first-view</div>
              <div style={{ width: 24 }} />
            </div>
            <div style={{ padding: '14px 18px 4px', borderBottom: '1px solid var(--wf-line-softer)' }}>
              <div className="wf-h3" style={{ fontSize: 18 }}>{sel.sees}</div>
              <div className="wf-body wf-muted" style={{ fontSize: 11.5, marginTop: 2 }}>This is what you'll land on after setup.</div>
            </div>
            <div style={{ position: 'relative', height: 320, background: 'var(--wf-paper-2)' }}>
              <RolePreviewMini role={sel.id} />
            </div>
            <div style={{ padding: '12px 18px', display: 'flex', gap: 10, fontSize: 11, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', borderTop: '1px solid var(--wf-line-softer)', flexWrap: 'wrap' }}>
              <span>others on your team can pick a different role</span>
            </div>
          </div>

          <div style={{ display: 'flex', gap: 10, marginTop: 4 }}>
            <div className="wf-soft" style={{ flex: 1, padding: '10px 12px' }}>
              <div className="wf-eyebrow">Up next</div>
              <div style={{ fontSize: 11.5, marginTop: 4, color: 'var(--wf-ink-2)', lineHeight: 1.5 }}>Project basics → invite counterparts → connect tools → confirm.</div>
            </div>
            <div className="wf-soft" style={{ flex: 1, padding: '10px 12px' }}>
              <div className="wf-eyebrow">Privacy</div>
              <div style={{ fontSize: 11.5, marginTop: 4, color: 'var(--wf-ink-2)', lineHeight: 1.5 }}>Your data stays in your tenant. Role tunes views, not access.</div>
            </div>
          </div>
        </div>
      </div>
    </OnboardingStep>);

}

function OnbStep2() {
  return (
    <OnboardingStep n={2} total={5} title="Name your project & invite counterparts.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 380px', gap: 40 }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
          <div>
            <div className="wf-eyebrow">Project name</div>
            <div className="wf-soft" style={{ padding: '12px 14px', marginTop: 6, fontFamily: 'var(--wf-font-mono)', fontSize: 13 }}>Marina Tower Phase 2|</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
            <div><div className="wf-eyebrow">Contract value</div><div className="wf-soft" style={{ padding: '12px 14px', marginTop: 6, fontFamily: 'var(--wf-font-mono)', fontSize: 13 }}>847,000,000 AED</div></div>
            <div><div className="wf-eyebrow">Duration</div><div className="wf-soft" style={{ padding: '12px 14px', marginTop: 6, fontFamily: 'var(--wf-font-mono)', fontSize: 13 }}>28 months</div></div>
          </div>
          <div>
            <div className="wf-eyebrow">Invite counterparts</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 8 }}>
              {[['Consultant (Lead)', 'Arup · r.iyer@arup.com', 'consultant'], ['Main Contractor', 'Mace · m.khan@mace.com', 'contractor'], ['+ Add stakeholder', '', null]].map((r, i) =>
              <div key={i} className="wf-soft" style={{ padding: 10, display: 'flex', gap: 12, alignItems: 'center' }}>
                  {r[2] ? <PersonaGlyph type={r[2]} size={32} /> : <div style={{ width: 32, height: 32, display: 'grid', placeItems: 'center', fontSize: 18, color: 'var(--wf-ink-3)' }}>+</div>}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 12.5, fontWeight: 600 }}>{r[0]}</div>
                    {r[1] && <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)' }}>{r[1]}</div>}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
        <div className="wf-soft" style={{ padding: 24, background: 'var(--wf-paper-2)' }}>
          <div className="wf-eyebrow">Why invite now?</div>
          <div className="wf-body" style={{ marginTop: 10, fontSize: 13, lineHeight: 1.55 }}>
            Pulse only delivers a single source of truth when every party sees the same project. Your counterparts get their own portal — they don't have to use your view.
          </div>
          <Annot style={{ position: 'static', marginTop: 20 }}>each party owns their lens, shares one truth</Annot>
        </div>
      </div>
    </OnboardingStep>);

}

function OnbStep3() {
  const tools = [
  { group: 'Project tools', items: [
    { n: 'Autodesk Construction Cloud', d: 'Drawings · models · submittals', state: 'Connected', tag: 'AC' },
    { n: 'Procore', d: 'RFIs · daily logs · meetings', state: 'Connected', tag: 'PC' },
    { n: 'Primavera P6', d: 'Schedule · baseline', state: 'Connected', tag: 'P6' },
    { n: 'Aconex', d: 'Comms · transmittals', state: 'Connect →', tag: 'AX' },
    { n: 'SharePoint', d: 'Legacy files · contracts', state: 'Connect →', tag: 'SP' },
    { n: 'SAP', d: 'Cost · procurement · payroll', state: 'Connect →', tag: 'SA' }]
  },
  { group: 'Communication', items: [
    { n: 'Outlook / Exchange', d: 'Project mailboxes (read-only)', state: 'Connect →', tag: 'OL' },
    { n: 'Microsoft Teams', d: 'Channels · meeting transcripts', state: 'Connect →', tag: 'TM' },
    { n: 'WhatsApp Business', d: 'Field comms · daily updates', state: 'Connect →', tag: 'WA' }]
  }];


  return (
    <OnboardingStep n={3} total={5} title="Connect your tools and documents.">
      <Annot style={{ top: -20, right: 40 }}>read-only · we never write back without permission</Annot>
      <div className="wf-body wf-muted" style={{ maxWidth: 640 }}>No migration. No new logins for your team. Pulse reads from where work already lives.


      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', gap: 32, marginTop: 28, alignItems: 'start' }}>
        {/* Left: tool groups + uploader */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 22, minWidth: 0 }}>
          {tools.map((g, gi) =>
          <div key={gi}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div className="wf-eyebrow">{g.group}</div>
                <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>
                  {g.items.filter((i) => i.state === 'Connected').length} of {g.items.length} connected
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,minmax(0,1fr))', gap: 12, marginTop: 10 }}>
                {g.items.map((i, k) => {
                const connected = i.state === 'Connected';
                return (
                  <div key={k} className="wf-card" style={{ padding: 14, display: 'flex', alignItems: 'center', gap: 12, borderColor: connected ? 'var(--wf-ink-3)' : undefined }}>
                      <div style={{ width: 38, height: 38, border: '1.25px solid var(--wf-line)', borderRadius: 6, background: 'var(--wf-paper-2)', display: 'grid', placeItems: 'center', fontFamily: 'var(--wf-font-mono)', fontSize: 11, fontWeight: 600, color: 'var(--wf-ink-2)', flexShrink: 0 }}>{i.tag}</div>
                      <div style={{ flex: 1, minWidth: 0 }}>
                        <div style={{ fontSize: 12.5, fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{i.n}</div>
                        <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', marginTop: 2, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{i.d}</div>
                      </div>
                      <div className="wf-chip" style={{ background: connected ? 'var(--wf-paper-2)' : 'var(--wf-ink)', color: connected ? 'var(--wf-ink)' : '#fff', borderColor: connected ? 'var(--wf-line)' : 'var(--wf-ink)', fontSize: 10.5, padding: '3px 8px' }}>
                        {connected ? '✓' : 'Connect →'}
                      </div>
                    </div>);

              })}
              </div>
            </div>
          )}

          {/* Contract pack uploader */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="wf-eyebrow">Contract pack</div>
              <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>FIDIC · NEC · bespoke — Pulse will figure it out</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr', gap: 12, marginTop: 10, minWidth: 0 }}>
              <div className="wf-soft" style={{ padding: '20px 22px', border: '1.5px dashed var(--wf-line)', display: 'flex', flexDirection: 'column', gap: 10, background: 'var(--wf-paper)' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                  <div style={{ width: 36, height: 36, border: '1.25px solid var(--wf-ink-2)', borderRadius: 4, display: 'grid', placeItems: 'center', fontFamily: 'var(--wf-font-mono)', fontSize: 14 }}>↑</div>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 600 }}>Drop the contract here</div>
                    <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 2 }}>PDFs, Word, scans, ZIPs · we'll do the OCR</div>
                  </div>
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 5, marginTop: 4 }}>
                  {[
                  ['Conditions of contract.pdf', '2.1 MB', 'parsing'],
                  ['Particular conditions.pdf', '892 KB', 'parsed'],
                  ['BOQ – signed.xlsx', '4.4 MB', 'parsed']].
                  map(([nm, sz, st], i) =>
                  <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr auto auto', gap: 10, padding: '6px 8px', background: 'var(--wf-paper-2)', border: '1px solid var(--wf-line-softer)', alignItems: 'center', fontFamily: 'var(--wf-font-mono)', fontSize: 10.5 }}>
                      <span style={{ color: 'var(--wf-ink-2)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{nm}</span>
                      <span style={{ color: 'var(--wf-ink-3)' }}>{sz}</span>
                      <span style={{ color: st === 'parsing' ? 'var(--wf-accent)' : 'var(--wf-ink-3)' }}>{st === 'parsing' ? '· parsing' : '✓ parsed'}</span>
                    </div>
                  )}
                </div>
              </div>
              <div className="wf-soft" style={{ padding: 16, background: 'var(--wf-paper-2)' }}>
                <div className="wf-eyebrow">What Pulse extracts</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 10, fontSize: 11.5, lineHeight: 1.5 }}>
                  {[
                  'Variation & EOT clauses → routed to decision ledger',
                  'Liquidated damages curves → fed to risk model',
                  'Notice periods → calendared with reminders',
                  'Payment milestones → linked to schedule'].
                  map((t, i) =>
                  <div key={i} style={{ display: 'flex', gap: 8, color: 'var(--wf-ink-2)' }}>
                      <span style={{ color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)' }}>·</span><span>{t}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right rail: trust + permissions + what next */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, position: 'sticky', top: 0 }}>
          <div className="wf-card" style={{ padding: 18 }}>
            <div className="wf-eyebrow">Permissions, by default</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 12 }}>
              {[
              ['Read', 'Drawings, RFIs, schedules, mail, files', true],
              ['Mirror', 'Pulse keeps a synced copy in your tenant', true],
              ['Write back', 'Off — you turn this on per-tool when ready', false],
              ['Train models', 'Off — your data is never used to train others', false]].
              map(([k, v, on], i) =>
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '60px 1fr 32px', gap: 10, alignItems: 'start', borderTop: i === 0 ? 'none' : '1px solid var(--wf-line-softer)', paddingTop: i === 0 ? 0 : 10 }}>
                  <div style={{ fontSize: 11, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-2)' }}>{k}</div>
                  <div style={{ fontSize: 11.5, color: 'var(--wf-ink-2)', lineHeight: 1.45 }}>{v}</div>
                  <div style={{ width: 26, height: 14, borderRadius: 8, background: on ? 'var(--wf-ink)' : 'var(--wf-paper-3)', position: 'relative', justifySelf: 'end' }}>
                    <div style={{ position: 'absolute', top: 1, [on ? 'right' : 'left']: 1, width: 12, height: 12, borderRadius: 6, background: '#fff' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="wf-card" style={{ padding: 18 }}>
            <div className="wf-eyebrow">From what's connected, Pulse already sees</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12, fontFamily: 'var(--wf-font-mono)', fontSize: 11 }}>
              {[
              ['3,482', 'documents indexed'],
              ['142', 'open RFIs · 9 over 30 days'],
              ['28 mo', 'schedule · 4 critical-path tasks slipping'],
              ['847M AED', 'contract value · 38% drawn']].
              map(([n, l], i) =>
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px dashed var(--wf-line-softer)', paddingBottom: 6 }}>
                  <span style={{ color: 'var(--wf-ink)', fontWeight: 600 }}>{n}</span>
                  <span style={{ color: 'var(--wf-ink-3)' }}>{l}</span>
                </div>
              )}
            </div>
          </div>

          <div className="wf-soft" style={{ padding: 14 }}>
            <div className="wf-eyebrow">Don't see your tool?</div>
            <div className="wf-body wf-muted" style={{ fontSize: 12, marginTop: 6, lineHeight: 1.5 }}>
              We support 40+ systems and add new ones every month. <span style={{ color: 'var(--wf-ink)', textDecoration: 'underline' }}>Request an integration</span> or use email-in.
            </div>
          </div>
        </div>
      </div>
    </OnboardingStep>);

}

function OnbStep4() {
  return (
    <OnboardingStep n={4} total={5} title="Pulse is reading your project.">
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 20 }}>
        <div>
          <div className="wf-body wf-muted" style={{ maxWidth: 500 }}>
            We're indexing documents, reconciling tasks, and building your project graph. This takes a few minutes.
          </div>
          <div style={{ marginTop: 30, display: 'flex', flexDirection: 'column', gap: 12 }}>
            {[
            ['Reading 3,482 documents', 'done', 100],
            ['Linking decisions to drawings', 'done', 100],
            ['Reconciling task trackers', 'active', 62],
            ['Building risk model', 'pending', 0],
            ['Generating first insights', 'pending', 0]].
            map((r, i) =>
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                <div style={{ width: 18, height: 18, borderRadius: 9, border: '1.25px solid var(--wf-line)', background: r[1] === 'done' ? 'var(--wf-ink)' : r[1] === 'active' ? '#fff' : 'var(--wf-paper-2)', display: 'grid', placeItems: 'center', fontSize: 10, color: '#fff' }}>{r[1] === 'done' ? '✓' : ''}</div>
                <div style={{ fontSize: 12.5, flex: 1, color: r[1] === 'pending' ? 'var(--wf-ink-4)' : 'var(--wf-ink)' }}>{r[0]}</div>
                <div style={{ width: 120, height: 3, background: 'var(--wf-paper-3)' }}>
                  <div style={{ width: `${r[2]}%`, height: '100%', background: 'var(--wf-ink)' }} />
                </div>
              </div>
            )}
          </div>
        </div>
        <div className="wf-card" style={{ padding: 20, background: 'var(--wf-paper-2)' }}>
          <div className="wf-eyebrow">Pulse is already learning</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 14 }}>
            {[
            'Found 4 unresolved RFIs older than 30 days',
            'Detected 3 duplicate submittals across Procore + Aconex',
            'Schedule has 2 tasks with no predecessors — likely orphaned'].
            map((t, i) =>
            <div key={i} style={{ padding: 12, background: '#fff', border: '1px dashed var(--wf-line-soft)', borderRadius: 6, fontSize: 12, color: 'var(--wf-ink-2)' }}>◆ {t}</div>
            )}
          </div>
        </div>
      </div>
    </OnboardingStep>);

}

function OnbStep5() {
  return (
    <OnboardingStep n={5} total={5} height={1080} title="You're ready. Here's your first briefing.">
      <Annot style={{ top: -20, right: 40 }}>lands on an AI-generated briefing, not a blank dashboard</Annot>
      <div className="wf-body wf-muted" style={{ maxWidth: 640 }}>
        Pulse spent the last few minutes reading 3,482 documents and 28 months of schedule. Here's what it
        thinks deserves your attention first — every claim links back to its source.
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'minmax(0,1fr) 360px', gap: 32, marginTop: 24, alignItems: 'stretch' }}>
        {/* Left: the briefing */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16, minWidth: 0 }}>
          <div className="wf-card" style={{ padding: 24 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="wf-eyebrow">Monday briefing · 14 NOV 2026 · generated by Pulse</div>
              <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>5-min read · audio version 4:12</div>
            </div>
            <div className="wf-h3" style={{ marginTop: 10, fontSize: 22 }}>3 things need your attention this week.</div>
            <div className="wf-body wf-muted" style={{ fontSize: 12.5, marginTop: 6, maxWidth: 600 }}>
              Drawn from this week's RFI activity, schedule slip vs baseline, and contract obligations coming due.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10, marginTop: 18 }}>
              {[
              { rank: '01', t: 'Approve MEP variation (+1.2M AED)', d: 'Consultant review complete. Waiting on your signature for 2 days.', meta: ['VAR-018', 'cites 4 sources', 'value 1.2M AED'], cta: 'Review decision', tone: 'accent' },
              { rank: '02', t: 'Escalate RFI-124 to consultant', d: 'Blocking concrete pour on Tower B. Open 11 days.', meta: ['RFI-124', 'cites 7 sources', 'crit-path · 2d'], cta: 'Open RFI', tone: 'ink' },
              { rank: '03', t: 'Review risk: rebar delivery delay', d: 'Pulse projects +3 day critical path impact if unmitigated.', meta: ['RISK-007', 'cites 5 sources', 'mitigation drafted'], cta: 'View risk', tone: 'ink' }].
              map((r, i) =>
              <div key={i} className="wf-soft" style={{ padding: 16, display: 'grid', gridTemplateColumns: '36px minmax(0,1fr) auto', gap: 16, alignItems: 'center' }}>
                  <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 11, color: 'var(--wf-ink-3)' }}>{r.rank}</div>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 14, fontWeight: 600 }}>{r.t}</div>
                    <div style={{ fontSize: 12, color: 'var(--wf-ink-3)', marginTop: 4 }}>{r.d}</div>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 8 }}>
                      {r.meta.map((m, j) =>
                    <span key={j} style={{ fontSize: 10, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)', padding: '2px 7px', border: '1px solid var(--wf-line-softer)', borderRadius: 2, background: 'var(--wf-paper)' }}>{m}</span>
                    )}
                    </div>
                  </div>
                  <div className="wf-chip" style={{ background: r.tone === 'accent' ? 'var(--wf-accent)' : 'var(--wf-ink)', color: '#fff', borderColor: r.tone === 'accent' ? 'var(--wf-accent)' : 'var(--wf-ink)', fontSize: 11, padding: '6px 11px' }}>{r.cta} →</div>
                </div>
              )}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 18, paddingTop: 14, borderTop: '1px solid var(--wf-line-softer)', fontSize: 11.5, color: 'var(--wf-ink-3)' }}>
              <span>Briefings arrive Monday 06:00 — adjust in <span style={{ color: 'var(--wf-ink)', textDecoration: 'underline' }}>Settings → Cadence</span></span>
              <div style={{ display: 'flex', gap: 8 }}>
                <span className="wf-chip" style={{ fontSize: 10.5 }}>↓ Export</span>
                <span className="wf-chip" style={{ fontSize: 10.5 }}>✦ Adjust priorities</span>
              </div>
            </div>
          </div>

          {/* What changed since you started setup */}
          <div className="wf-card" style={{ padding: 20 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
              <div className="wf-eyebrow">Since you started setup, Pulse has</div>
              <div style={{ fontSize: 10.5, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>4 min 12 sec elapsed</div>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,minmax(0,1fr))', gap: 10, marginTop: 14 }}>
              {[
              ['3,482', 'documents indexed', 'across ACC, Procore, P6'],
              ['142', 'RFIs reconciled', '9 over 30 days'],
              ['38', 'decisions extracted', 'from emails + minutes'],
              ['12', 'risks surfaced', '3 critical-path']].
              map(([n, l, sub], i) =>
              <div key={i} className="wf-soft" style={{ padding: '12px 14px', background: 'var(--wf-paper-2)' }}>
                  <div style={{ fontSize: 22, fontWeight: 600, fontFamily: 'var(--wf-font-mono)' }}>{n}</div>
                  <div style={{ fontSize: 11.5, fontWeight: 600, marginTop: 2 }}>{l}</div>
                  <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', marginTop: 2, fontFamily: 'var(--wf-font-mono)' }}>{sub}</div>
                </div>
              )}
            </div>
          </div>

        </div>

        {/* Right rail: project summary card + cadence + handoff */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14, height: '100%' }}>
          <div className="wf-card" style={{ padding: 18 }}>
            <div className="wf-eyebrow">Your project</div>
            <div className="wf-h3" style={{ fontSize: 17, marginTop: 8 }}>Marina Tower Phase 2</div>
            <div style={{ fontSize: 11.5, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', marginTop: 2 }}>847M AED · 28 months · started Jan 2026</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
              {[
              ['Role', 'Owner / Developer'],
              ['Counterparts', 'Arup · Mace · 4 more'],
              ['Tools connected', 'ACC · Procore · P6'],
              ['Contract', 'FIDIC Red 1999 + bespoke']].
              map(([k, v], i) =>
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', gap: 10, fontSize: 11.5, paddingBottom: 6, borderBottom: i === 3 ? 'none' : '1px dashed var(--wf-line-softer)' }}>
                  <span style={{ color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', fontSize: 10.5, textTransform: 'uppercase', letterSpacing: '0.06em' }}>{k}</span>
                  <span style={{ color: 'var(--wf-ink)', fontWeight: 500, textAlign: 'right' }}>{v}</span>
                </div>
              )}
            </div>
            <div style={{ marginTop: 14, paddingTop: 14, borderTop: '1px solid var(--wf-line-softer)', fontSize: 11, color: 'var(--wf-ink-3)' }}>
              <span style={{ color: 'var(--wf-ink)', textDecoration: 'underline' }}>Edit setup</span> · anytime, no re-onboarding
            </div>
          </div>

          <div className="wf-card" style={{ padding: 18 }}>
            <div className="wf-eyebrow">Choose your cadence</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 12 }}>
              {[
              ['Daily morning brief', '06:00 · weekdays', false],
              ['Weekly briefing', 'Mon 06:00', true],
              ['Real-time alerts', 'critical only', true],
              ['Mobile push (field)', 'blockers + RFIs', false]].
              map(([k, v, on], i) =>
              <div key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 32px', gap: 10, alignItems: 'center', padding: '6px 0', borderBottom: i === 3 ? 'none' : '1px solid var(--wf-line-softer)' }}>
                  <div style={{ minWidth: 0 }}>
                    <div style={{ fontSize: 12, fontWeight: 600 }}>{k}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', marginTop: 1 }}>{v}</div>
                  </div>
                  <div style={{ width: 26, height: 14, borderRadius: 8, background: on ? 'var(--wf-ink)' : 'var(--wf-paper-3)', position: 'relative', justifySelf: 'end' }}>
                    <div style={{ position: 'absolute', top: 1, [on ? 'right' : 'left']: 1, width: 12, height: 12, borderRadius: 6, background: '#fff' }} />
                  </div>
                </div>
              )}
            </div>
          </div>

          <div className="wf-soft" style={{ padding: 14, flex: '1 1 auto', display: 'flex', flexDirection: 'column' }}>
            <div className="wf-eyebrow">Need a hand?</div>
            <div style={{ fontSize: 11.5, color: 'var(--wf-ink-2)', marginTop: 6, lineHeight: 1.5 }}>
              A Pulse architect will walk your team through the dashboard in the first week — no charge.
            </div>
            <div className="wf-chip" style={{ marginTop: 'auto', alignSelf: 'flex-start', fontSize: 11 }}>Book a 30-min walkthrough →</div>
          </div>
        </div>
      </div>
    </OnboardingStep>);

}

// ── FEATURES / SOLUTIONS PAGE ───────────────────────────────────────────────
function FeaturesPage() {
  return (
    <div className="wf-page" style={{ width: 1280, minHeight: 2130 }}>
      <NavBar />
      <section style={{ padding: '80px 80px 40px', textAlign: 'center' }}>
        <div className="wf-eyebrow">The Platform</div>
        <h1 className="wf-h1" style={{ fontSize: 64, marginTop: 14 }}>Every layer of the project, reconciled.</h1>
        <div className="wf-body" style={{ maxWidth: 620, margin: '20px auto 0' }}>
          Pulse is built as six deeply connected surfaces. Each one becomes more valuable because of the others.
        </div>
      </section>

      {/* TRUSTED BY — rotating UAE developer strip */}
      <ClientStrip />

      <section style={{ padding: '0 80px', marginTop: 40 }}>
        <Annot style={{ top: -30, right: 0 }} arrow="down">each card reacts to cursor · content layers tilt + parallax on hover</Annot>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {[
          { n: '01', t: 'Document Graph', d: 'Drawings, specs, contracts, submittals — connected by project context, not folder paths. Every document knows its dependencies.', kind: 'graph' },
          { n: '02', t: 'Decision Ledger', d: 'Every decision captured with owner, rationale, and downstream impact. Regulator-grade audit trail.', kind: 'ledger' },
          { n: '03', t: 'Schedule Intelligence', d: 'Pulse reconciles master schedule with daily field reports. Root-cause analysis for every slip.', kind: 'schedule' },
          { n: '04', t: 'Risk Radar', d: 'AI reads drawings, comms, and schedule to flag risk before impact. Every risk has an owner.', kind: 'radar' },
          { n: '05', t: 'RFI & Submittals', d: 'Purpose-built for consultant workflows. Route, review, return — with SLAs and escalations baked in.', kind: 'rfi' },
          { n: '06', t: 'Ask Pulse', d: 'Natural-language interface to the project. Answers cite the source every time.', kind: 'chat' }].
          map((f, i) =>
          <HoverParallaxCard key={i} n={f.n} title={f.t} desc={f.d} kind={f.kind} />
          )}
        </div>
      </section>

      {/* Comparison matrix */}
      <section style={{ padding: '80px 80px' }}>
        <div className="wf-eyebrow">How roles use Pulse</div>
        <h2 className="wf-h2" style={{ marginTop: 10 }}>The same surfaces, three different jobs.</h2>
        <div className="wf-card" style={{ marginTop: 30 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.2fr 1fr 1fr 1fr', borderBottom: '1.25px solid var(--wf-line)' }}>
            {['', 'Owner', 'Consultant', 'Contractor'].map((h, i) =>
            <div key={i} style={{ padding: '14px 18px', fontSize: 12, fontWeight: 600, color: i === 0 ? 'var(--wf-ink-3)' : 'var(--wf-ink)', borderLeft: i ? '1px solid var(--wf-line-softer)' : 0 }}>{h}</div>
            )}
          </div>
          {[
          ['Document Graph', 'Search & audit', 'Author & review', 'Access by task'],
          ['Decision Ledger', 'Approve & sign', 'Propose', 'View decisions'],
          ['Risk Radar', 'Portfolio risk', 'Risk review', 'Site risk'],
          ['Schedule', 'Milestones', 'Baseline review', 'Daily plan'],
          ['RFI & Submittals', 'Summary', 'Full workflow', 'Raise & track'],
          ['Ask Pulse', 'Board reports', 'Coordination', 'Today\'s blockers']].
          map((r, i) =>
          <div key={i} className="wf-row" style={{ gridTemplateColumns: '1.2fr 1fr 1fr 1fr', padding: 0 }}>
              {r.map((c, j) =>
            <div key={j} style={{ padding: '14px 18px', fontSize: 12.5, color: j === 0 ? 'var(--wf-ink)' : 'var(--wf-ink-2)', fontWeight: j === 0 ? 600 : 400, borderLeft: j ? '1px solid var(--wf-line-softer)' : 0 }}>{c}</div>
            )}
            </div>
          )}
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '40px 80px 80px' }}>
        <div className="wf-card" style={{ padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>
          <div>
            <div className="wf-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Become the next story</div>
            <div style={{ fontSize: 24, fontWeight: 600, marginTop: 8, letterSpacing: '-0.01em' }}>Book a 30-min walkthrough on your project.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div className="wf-btn" style={{ background: '#fff', color: 'var(--wf-ink)', fontSize: 13 }}>Request Demo</div>
            <div className="wf-btn ghost" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontSize: 13 }}>Talk to founders</div>
          </div>
        </div>
      </section>
    </div>);

}
function MobileFrame({ children, label }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <div style={{ width: 300, height: 640, border: '2px solid var(--wf-line)', borderRadius: 32, padding: 10, background: '#fff', position: 'relative' }}>
        <div style={{ width: '100%', height: '100%', borderRadius: 22, overflow: 'hidden', background: 'var(--wf-paper)', position: 'relative', display: 'flex', flexDirection: 'column' }}>
          <div style={{ padding: '10px 16px 6px', display: 'flex', justifyContent: 'space-between', fontSize: 10, fontFamily: 'var(--wf-font-mono)', flex: '0 0 auto' }}>
            <span>09:41</span><span>●●●  ◐</span>
          </div>
          <div style={{ flex: '1 1 auto', minHeight: 0, overflow: 'hidden' }}>{children}</div>
        </div>
      </div>
      <div className="wf-eyebrow" style={{ marginTop: 12 }}>{label}</div>
    </div>);

}

function MobileScreens() {
  return (
    <div className="wf-page" style={{ width: 1280, padding: 40, background: 'var(--wf-paper-2)' }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 30, justifyItems: 'center' }}>
        {/* 1 · Today */}
        <MobileFrame label="Today on site">
          <div style={{ padding: 16 }}>
            <div className="wf-eyebrow">Tuesday</div>
            <div style={{ fontSize: 22, fontWeight: 600, letterSpacing: '-0.02em' }}>Today on site</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 14 }}>
              <div className="wf-chip" style={{ fontSize: 10, background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>7 tasks</div>
              <div className="wf-chip" style={{ fontSize: 10, background: 'var(--wf-accent)', color: '#fff', borderColor: 'var(--wf-accent)' }}>2 blockers</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
              {[['Rebar fixing L14', 'Crew A · in prog', true], ['Pour prep L13', 'Crew B · ready', false], ['MEP rough-in', 'Blocked · RFI-124', false, true]].map((t, i) =>
              <div key={i} className="wf-card" style={{ padding: 10, borderColor: t[3] ? 'var(--wf-accent)' : undefined }}>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>{t[0]}</div>
                  <div style={{ fontSize: 10, color: 'var(--wf-ink-3)', marginTop: 2 }}>{t[1]}</div>
                </div>
              )}
            </div>
          </div>
        </MobileFrame>

        {/* 2 · Blocker detail */}
        <MobileFrame label="Blocker · escalate">
          <div style={{ padding: 16 }}>
            <div style={{ fontSize: 10, color: 'var(--wf-ink-3)' }}>← Today</div>
            <div className="wf-eyebrow wf-accent-ink" style={{ marginTop: 12 }}>Blocker</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 6, lineHeight: 1.2 }}>RFI-124 blocks pour · Tower B</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 8 }}>Open 11 days · Consultant review</div>
            <div className="wf-soft" style={{ padding: 10, marginTop: 14, fontSize: 11 }}>
              <div className="wf-eyebrow">Pulse suggests</div>
              <div style={{ marginTop: 6, color: 'var(--wf-ink-2)' }}>Escalate to R. Iyer — owner already cc'd this week.</div>
            </div>
            <div style={{ marginTop: 14, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="wf-btn accent" style={{ justifyContent: 'center', fontSize: 12 }}>Escalate to Consultant</div>
              <div className="wf-btn ghost" style={{ justifyContent: 'center', fontSize: 12 }}>Add note + photo</div>
            </div>
          </div>
        </MobileFrame>

        {/* 3 · Ask Pulse */}
        <MobileFrame label="Ask Pulse">
          <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="wf-eyebrow">Ask Pulse</div>
            <div style={{ flex: 1, marginTop: 12, display: 'flex', flexDirection: 'column', gap: 8 }}>
              <div className="wf-card" style={{ padding: 10, fontSize: 11, alignSelf: 'flex-end', maxWidth: '85%', fontFamily: 'var(--wf-font-mono)' }}>What's blocking pour on B?</div>
              <div style={{ padding: 10, borderLeft: '2px solid var(--wf-accent)', fontSize: 11, color: 'var(--wf-ink-2)', background: 'var(--wf-paper-2)', lineHeight: 1.4 }}>
                RFI-124 (rebar detailing) has been open 11 days. Blocks pour sequence 4–7 on Tower B.
                <div style={{ marginTop: 6, color: 'var(--wf-ink-3)', fontSize: 9.5 }}>RFI-124.pdf · schedule.p6</div>
              </div>
              <div className="wf-chip" style={{ alignSelf: 'flex-start', fontSize: 10 }}>Escalate RFI-124 →</div>
            </div>
            <div className="wf-soft" style={{ padding: 10, fontSize: 11, color: 'var(--wf-ink-4)' }}>Type or dictate…</div>
          </div>
        </MobileFrame>

        {/* 4 · Owner approve */}
        <MobileFrame label="Owner · approve">
          <div style={{ padding: 16 }}>
            <div className="wf-eyebrow">Awaiting you</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 6 }}>MEP variation</div>
            <div style={{ fontSize: 12, color: 'var(--wf-ink-3)', marginTop: 4 }}>+1.2M AED · Consultant approved</div>
            <Placeholder label="[ variation summary ]" style={{ height: 100, marginTop: 14 }} />
            <div className="wf-soft" style={{ padding: 10, marginTop: 12, fontSize: 11 }}>
              <div className="wf-eyebrow">Pulse impact</div>
              <div style={{ marginTop: 6 }}>Budget variance would rise to +0.8%. Still within contingency.</div>
            </div>
            <div style={{ marginTop: 14, display: 'flex', gap: 8 }}>
              <div className="wf-btn accent" style={{ flex: 1, justifyContent: 'center', fontSize: 11 }}>Approve</div>
              <div className="wf-btn ghost" style={{ flex: 1, justifyContent: 'center', fontSize: 11 }}>Defer</div>
            </div>
          </div>
        </MobileFrame>

        {/* 5 · Daily report */}
        <MobileFrame label="Daily report">
          <div style={{ padding: 16 }}>
            <div className="wf-eyebrow">Capture</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 6 }}>Daily report</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginTop: 12 }}>
              <Placeholder label="[ photo ]" style={{ height: 70 }} />
              <Placeholder label="[ photo ]" style={{ height: 70 }} />
              <Placeholder label="[ photo ]" style={{ height: 70 }} />
              <div className="wf-soft" style={{ height: 70, display: 'grid', placeItems: 'center', fontSize: 20, color: 'var(--wf-ink-3)' }}>+</div>
            </div>
            <div className="wf-soft" style={{ padding: 10, marginTop: 12, fontSize: 11 }}>
              <div className="wf-eyebrow">Voice note · 0:42</div>
              <div style={{ display: 'flex', gap: 2, marginTop: 8, alignItems: 'end', height: 20 }}>
                {Array.from({ length: 30 }).map((_, i) => <div key={i} style={{ flex: 1, height: `${30 + Math.random() * 70}%`, background: 'var(--wf-ink-3)' }} />)}
              </div>
            </div>
            <div className="wf-btn accent" style={{ marginTop: 14, justifyContent: 'center', fontSize: 12 }}>Submit report</div>
          </div>
        </MobileFrame>

        {/* 6 · Risk */}
        <MobileFrame label="Risk alert">
          <div style={{ padding: 16 }}>
            <div className="wf-chip" style={{ background: 'var(--wf-accent)', color: '#fff', borderColor: 'var(--wf-accent)', fontSize: 10 }}>● High risk</div>
            <div style={{ fontSize: 18, fontWeight: 600, marginTop: 10, lineHeight: 1.2 }}>Rebar delivery delay</div>
            <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>Procurement · ETA +3 days</div>
            <Placeholder label="[ critical-path chart ]" style={{ height: 90, marginTop: 14 }} />
            <div className="wf-soft" style={{ padding: 10, marginTop: 12, fontSize: 11, color: 'var(--wf-ink-2)', lineHeight: 1.4 }}>
              <div className="wf-eyebrow">Mitigations</div>
              <div style={{ marginTop: 6 }}>→ Resequence pours 4–5</div>
              <div>→ Source alternate supplier (Pulse found 2)</div>
            </div>
          </div>
        </MobileFrame>

        {/* 7 · Notifications */}
        <MobileFrame label="Inbox">
          <div style={{ padding: 16 }}>
            <div style={{ fontSize: 22, fontWeight: 600 }}>Inbox</div>
            <div style={{ display: 'flex', gap: 6, marginTop: 12 }}>
              <div className="wf-chip" style={{ fontSize: 10, background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>All</div>
              <div className="wf-chip" style={{ fontSize: 10 }}>Mentions</div>
              <div className="wf-chip" style={{ fontSize: 10 }}>Decisions</div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 6, marginTop: 12 }}>
              {[['◆', 'RFI-124 escalated by M. Khan', '2m'], ['●', 'Risk flagged: rebar delay', '1h'], ['✓', 'Submittal SB-88 approved', '3h'], ['◆', 'Owner approved MEP variation', '5h']].map((n, i) =>
              <div key={i} style={{ padding: 10, borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', gap: 10, alignItems: 'center' }}>
                  <div style={{ fontSize: 12, color: 'var(--wf-accent)' }}>{n[0]}</div>
                  <div style={{ flex: 1, fontSize: 11.5 }}>{n[1]}</div>
                  <div style={{ fontSize: 10, color: 'var(--wf-ink-3)' }}>{n[2]}</div>
                </div>
              )}
            </div>
          </div>
        </MobileFrame>

        {/* 8 · Onboarding mobile */}
        <MobileFrame label="Mobile onboarding">
          <div style={{ padding: 16, height: '100%', display: 'flex', flexDirection: 'column' }}>
            <div className="wf-eyebrow">Step 1 / 3</div>
            <div style={{ fontSize: 20, fontWeight: 600, marginTop: 8, lineHeight: 1.2 }}>What's your role on site?</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 18 }}>
              {[['owner', 'Owner'], ['consultant', 'Consultant'], ['contractor', 'Contractor']].map(([g, t], i) =>
              <div key={i} className="wf-card" style={{ padding: 12, display: 'flex', gap: 12, alignItems: 'center', borderColor: i === 2 ? 'var(--wf-accent)' : undefined }}>
                  <PersonaGlyph type={g} size={32} />
                  <div style={{ fontSize: 13, fontWeight: 600 }}>{t}</div>
                  {i === 2 && <div style={{ marginLeft: 'auto', color: 'var(--wf-accent)' }}>✓</div>}
                </div>
              )}
            </div>
            <div style={{ flex: 1 }} />
            <div className="wf-btn accent" style={{ justifyContent: 'center', fontSize: 13 }}>Continue →</div>
          </div>
        </MobileFrame>
      </div>
    </div>);

}

// ── SOLUTIONS PAGE ──────────────────────────────────────────────────────────
// By-role page. Three vertical bands (Owner / Consultant / Contractor), each
// with a job-to-be-done headline, outcome metric, mini wireflow, and the
// surfaces of Pulse used. Different shape from FeaturesPage on purpose.
function SolutionsPage() {
  const SOLUTIONS = [
  {
    role: 'Owner',
    tag: '01',
    jtbd: 'Hand the board a defensible report in 5 minutes.',
    desc: 'Pulse turns a quarter of project chatter into a one-page brief — every number sourced, every risk owned. No more chasing consultants on Sunday night.',
    outcome: ['12hrs', 'reporting prep saved · monthly'],
    surfaces: ['Decision Ledger', 'Portfolio KPIs', 'Risk Radar', 'Ask Pulse'],
    kind: 'owner'
  },
  {
    role: 'Consultant',
    tag: '02',
    jtbd: 'Cut RFI cycle from 14 days to 4.',
    desc: 'Pulse drafts the response, finds the precedent, routes for sign-off, and tracks SLAs by discipline. Your team reviews — Pulse types.',
    outcome: ['−71%', 'median RFI turnaround'],
    surfaces: ['RFI & Submittals', 'Document Graph', 'Schedule Intelligence'],
    kind: 'consultant'
  },
  {
    role: 'Contractor',
    tag: '03',
    jtbd: 'See the slip three weeks before it happens.',
    desc: 'Pulse reconciles master programme with daily field reports, weather, deliveries, and crew availability. Surfaces the root cause — not just the symptom.',
    outcome: ['+19d', 'avg. early-warning lead time'],
    surfaces: ['Schedule Intelligence', 'Risk Radar', 'Mobile Field App'],
    kind: 'contractor'
  }];


  return (
    <div className="wf-page" style={{ width: 1280, minHeight: 2380 }}>
      <NavBar variant="A" active="solutions" />

      {/* HERO */}
      <section style={{ padding: '80px 80px 50px', textAlign: 'center', position: 'relative' }}>
        <Annot style={{ top: 90, right: 60 }} arrow="left">vertical = role · horizontal = outcome</Annot>
        <div className="wf-eyebrow">Solutions · by role</div>
        <h1 className="wf-h1" style={{ fontSize: 64, marginTop: 14, maxWidth: 900, marginInline: 'auto' }}>
          Pick your job. We've already mapped the work.
        </h1>
        <div className="wf-body" style={{ maxWidth: 620, margin: '20px auto 0' }}>
          The same six surfaces, three different jobs. Pick the one that wakes you up at 3am.
        </div>
        <div style={{ display: 'flex', gap: 8, justifyContent: 'center', marginTop: 24 }}>
          {SOLUTIONS.map((s, i) =>
          <div key={i} className="wf-chip" style={{ borderColor: 'var(--wf-ink)', padding: '6px 14px', fontSize: 12 }}>
              <span style={{ fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)', marginRight: 8 }}>{s.tag}</span>
              {s.role}
            </div>
          )}
        </div>
      </section>

      {/* OUTCOME STRIP */}
      <section style={{ padding: '0 80px' }}>
        <div className="wf-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)' }}>
          {SOLUTIONS.map((s, i) =>
          <div key={i} style={{ padding: '28px 32px', borderLeft: i ? '1px solid var(--wf-line-softer)' : 0 }}>
              <div className="wf-eyebrow">{s.role} · outcome</div>
              <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 44, fontWeight: 600, marginTop: 10, letterSpacing: '-0.02em' }}>{s.outcome[0]}</div>
              <div style={{ fontSize: 12, color: 'var(--wf-ink-3)', marginTop: 4 }}>{s.outcome[1]}</div>
            </div>
          )}
        </div>
      </section>

      {/* PER-ROLE BANDS */}
      {SOLUTIONS.map((s, i) =>
      <section key={i} style={{ padding: '70px 80px', borderTop: i ? '1px solid var(--wf-line-softer)' : 0, marginTop: i === 0 ? 60 : 0 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'start' }}>
            <div>
              <div style={{ display: 'flex', gap: 12, alignItems: 'baseline' }}>
                <div className="wf-eyebrow" style={{ color: 'var(--wf-accent)' }}>{s.tag} · {s.role}</div>
              </div>
              <h2 className="wf-h2" style={{ fontSize: 40, marginTop: 14, lineHeight: 1.05, letterSpacing: '-0.02em' }}>{s.jtbd}</h2>
              <div className="wf-body wf-muted" style={{ marginTop: 16, maxWidth: 480 }}>{s.desc}</div>
              <div style={{ marginTop: 22 }}>
                <div className="wf-eyebrow">Surfaces used</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 10 }}>
                  {s.surfaces.map((x, j) =>
                <div key={j} className="wf-chip" style={{ fontSize: 11.5 }}>{x}</div>
                )}
                </div>
              </div>
              <div style={{ marginTop: 26, display: 'flex', gap: 10 }}>
                <div className="wf-btn accent" style={{ fontSize: 12.5 }}>Read the {s.role.toLowerCase()} playbook →</div>
                <div className="wf-btn ghost" style={{ fontSize: 12.5 }}>Book demo</div>
              </div>
            </div>

            {/* Right column: a custom mini-mock per role */}
            <SolutionMock kind={s.kind} />
          </div>
        </section>
      )}

      {/* COMPARISON / STITCH */}
      <section style={{ padding: '80px', borderTop: '1px solid var(--wf-line-softer)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div>
            <div className="wf-eyebrow">One platform</div>
            <h2 className="wf-h2" style={{ marginTop: 10, fontSize: 32 }}>Three lenses on the same project.</h2>
          </div>
          <div className="wf-body wf-muted" style={{ maxWidth: 360, fontSize: 13 }}>
            Owners, consultants, and contractors see the same source of truth — filtered for what they need to do today.
          </div>
        </div>
        <div style={{ marginTop: 30, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14 }}>
          {[
          ['Owner sees', 'Decisions awaiting them, portfolio KPIs, capital flow, board-ready brief.'],
          ['Consultant sees', 'RFI queue, submittal SLAs, clash matrix, discipline coordination.'],
          ['Contractor sees', 'Today on site, blockers, daily reports, schedule slip alerts.']].
          map((r, i) =>
          <div key={i} className="wf-soft" style={{ padding: 20 }}>
              <div className="wf-eyebrow">{r[0]}</div>
              <div style={{ fontSize: 13, color: 'var(--wf-ink-2)', marginTop: 10, lineHeight: 1.5 }}>{r[1]}</div>
            </div>
          )}
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: '40px 80px 80px' }}>
        <div className="wf-card" style={{ padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>
          <div>
            <div className="wf-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Become the next story</div>
            <div style={{ fontSize: 24, fontWeight: 600, marginTop: 8, letterSpacing: '-0.01em' }}>Book a 30-min walkthrough on your project.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div className="wf-btn" style={{ background: '#fff', color: 'var(--wf-ink)', fontSize: 13 }}>Request Demo</div>
            <div className="wf-btn ghost" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontSize: 13 }}>Talk to founders</div>
          </div>
        </div>
      </section>
    </div>);

}

// Per-role mini mock for SolutionsPage right column.
function SolutionMock({ kind }) {
  if (kind === 'owner') {
    return (
      <div className="wf-card" style={{ padding: 22, position: 'relative' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
          <div className="wf-eyebrow">Monday brief · Q3</div>
          <div className="wf-chip" style={{ fontSize: 10 }}>Auto · 06:00</div>
        </div>
        <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 14, lineHeight: 1.7 }}>
          <div>BUDGET   · 847M AED · 62% spent</div>
          <div>SCHEDULE · +2d variance · amber</div>
          <div>DECISIONS · 3 awaiting you</div>
          <div>RISKS    · 4 high · 2 mitigated</div>
        </div>
        <Placeholder label="[ trend · 90d · sourced ]" style={{ height: 110, marginTop: 16 }} />
        <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
          <div className="wf-chip" style={{ background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>Approve all</div>
          <div className="wf-chip">Forward to board</div>
        </div>
      </div>);

  }
  if (kind === 'consultant') {
    return (
      <div className="wf-card" style={{ padding: 0, overflow: 'hidden', position: 'relative' }}>
        <div style={{ padding: '14px 18px', borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', justifyContent: 'space-between' }}>
          <div className="wf-h3">RFI cycle · last 30 days</div>
          <div style={{ fontSize: 11, color: 'var(--wf-accent)', fontFamily: 'var(--wf-font-mono)' }}>−71%</div>
        </div>
        {/* Two stacked tracks: before (slow) vs after (fast) */}
        <div style={{ padding: 22 }}>
          {[
          { label: 'Before Pulse', days: '14d', frac: 1.0, accent: false },
          { label: 'With Pulse', days: '4d', frac: 0.28, accent: true }].
          map((row, i) =>
          <div key={i} style={{ marginTop: i ? 18 : 0 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 11, color: 'var(--wf-ink-3)', marginBottom: 6 }}>
                <span>{row.label}</span>
                <span style={{ fontFamily: 'var(--wf-font-mono)' }}>{row.days}</span>
              </div>
              <div style={{ height: 18, background: 'var(--wf-paper-2)', border: '1px solid var(--wf-line-softer)', position: 'relative' }}>
                <div style={{ width: `${row.frac * 100}%`, height: '100%', background: row.accent ? 'var(--wf-accent)' : 'var(--wf-ink-3)' }} />
              </div>
            </div>
          )}
          <div className="wf-hr" style={{ margin: '20px 0 16px' }} />
          <div className="wf-eyebrow">RFI-124 · this morning</div>
          <div style={{ fontSize: 12, color: 'var(--wf-ink-2)', marginTop: 8, lineHeight: 1.5 }}>
            Pulse drafted 3 candidate responses citing precedent RFI-091 + sheet A-212. Routed to D. Patel for sign-off.
          </div>
          <div style={{ display: 'flex', gap: 8, marginTop: 14 }}>
            <div className="wf-chip" style={{ background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>Send draft</div>
            <div className="wf-chip">Edit</div>
            <div className="wf-chip">Cite source</div>
          </div>
        </div>
      </div>);

  }
  // contractor — schedule slip early-warning
  return (
    <div className="wf-card" style={{ padding: 22, position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div className="wf-h3">Tower B · pour 4–7</div>
        <div className="wf-chip" style={{ background: 'var(--wf-accent)', color: '#fff', borderColor: 'var(--wf-accent)', fontSize: 10 }}>● slip risk</div>
      </div>
      {/* schematic timeline */}
      <svg viewBox="0 0 540 180" width="100%" height={180} style={{ marginTop: 16 }}>
        {/* lanes */}
        {[40, 75, 110, 145].map((y, i) =>
        <line key={i} x1="0" y1={y} x2="540" y2={y} stroke="var(--wf-line-softer)" strokeDasharray="2 4" />
        )}
        {/* baseline bars */}
        <rect x="20" y="32" width="120" height="14" fill="var(--wf-ink-3)" opacity="0.35" />
        <rect x="160" y="67" width="160" height="14" fill="var(--wf-ink-3)" opacity="0.35" />
        <rect x="340" y="102" width="180" height="14" fill="var(--wf-ink-3)" opacity="0.35" />
        {/* actual */}
        <rect x="20" y="32" width="120" height="14" fill="var(--wf-ink)" />
        <rect x="160" y="67" width="100" height="14" fill="var(--wf-ink)" />
        {/* slip prediction */}
        <rect x="260" y="67" width="80" height="14" fill="var(--wf-accent)" opacity="0.18" />
        <line x1="260" y1="60" x2="260" y2="90" stroke="var(--wf-accent)" strokeWidth="1.5" strokeDasharray="3 3" />
        <text x="266" y="58" fontFamily="var(--wf-font-mono)" fontSize="10" fill="var(--wf-accent)">+19d early warning</text>
        {/* labels */}
        <text x="20" y="24" fontFamily="var(--wf-font-mono)" fontSize="9" fill="var(--wf-ink-3)">Rebar fixing</text>
        <text x="160" y="59" fontFamily="var(--wf-font-mono)" fontSize="9" fill="var(--wf-ink-3)">MEP rough-in</text>
        <text x="340" y="94" fontFamily="var(--wf-font-mono)" fontSize="9" fill="var(--wf-ink-3)">Pour 4–7</text>
        {/* root cause callout */}
        <circle cx="260" cy="74" r="5" fill="var(--wf-accent)" />
      </svg>
      <div className="wf-soft" style={{ padding: 12, marginTop: 14 }}>
        <div className="wf-eyebrow">Root cause</div>
        <div style={{ fontSize: 12, color: 'var(--wf-ink-2)', marginTop: 6, lineHeight: 1.5 }}>
          RFI-124 (rebar detailing) blocks rebar fixing on L14 → cascades to pours 4–7. Resequence pours 5–6 saves 11 days.
        </div>
      </div>
    </div>);

}

// ── CUSTOMERS PAGE ──────────────────────────────────────────────────────────
// Customer-evidence layout — featured story hero, logo wall, stats band,
// quote grid, and a "by industry" filter. Shape and rhythm differ from
// FeaturesPage and SolutionsPage on purpose.
function CustomersPage() {
  const STORIES = [
  { co: 'EMAAR', line: 'Cut board-pack prep from 18hrs to 90min across 14 active projects.', metric: '−92%', metricLabel: 'reporting prep' },
  { co: 'ALDAR', line: 'Caught a 4-week schedule slip on Yas Heights tower 23 days early.', metric: '23d', metricLabel: 'early warning' },
  { co: 'SOBHA REALTY', line: 'Closed 312 RFIs with full audit trail. Zero contract disputes this year.', metric: '0', metricLabel: 'disputes · YTD' }];

  const QUOTES = [
  { who: 'F. Al Mansouri', role: 'Director of Development, Owner', org: 'Tier-1 UAE developer',
    q: 'Pulse is the first tool that gives me a board pack I can actually defend. Every number knows where it came from.' },
  { who: 'R. Iyer', role: 'Lead Consultant, Structural', org: 'Multi-disciplinary practice',
    q: 'My team stopped writing the same RFI response three times. Pulse drafts; we review. That alone is two days a week.' },
  { who: 'M. Khan', role: 'Project Director, Contractor', org: 'Top-10 GCC contractor',
    q: 'It surfaces the slip before the slip — that\'s the whole game. We resequenced two pours and saved a month.' }];

  const INDUSTRIES = ['All', 'Residential', 'Mixed-use', 'Hospitality', 'Infrastructure', 'Healthcare'];

  return (
    <div className="wf-page" style={{ width: 1280, minHeight: 2300 }}>
      <NavBar variant="A" active="customers" />

      {/* HERO + featured story */}
      <section style={{ padding: '60px 80px 30px', position: 'relative' }}>
        <Annot style={{ top: 70, right: 60 }} arrow="left">featured story · rotates monthly</Annot>
        <div className="wf-eyebrow">Customers</div>
        <h1 className="wf-h1" style={{ fontSize: 64, marginTop: 14, maxWidth: 900, lineHeight: 1.02 }}>
          The teams shipping at the front of the region.
        </h1>
        <div className="wf-body wf-muted" style={{ maxWidth: 560, marginTop: 18 }}>
          Pulse runs on 84 active projects across the GCC — 14B AED in scope, 6,200 daily users, one source of truth per project.
        </div>

        <div className="wf-card" style={{ marginTop: 40, padding: 0, overflow: 'hidden', display: 'grid', gridTemplateColumns: '1.1fr 1fr' }}>
          {/* left: editorial */}
          <div style={{ padding: 40, borderRight: '1px solid var(--wf-line-softer)' }}>
            <div className="wf-eyebrow">Featured · 04 / 2026</div>
            <div style={{ fontFamily: 'var(--wf-font-mono)', letterSpacing: '0.18em', fontSize: 13, color: 'var(--wf-ink)', marginTop: 18 }}>EMAAR · DOWNTOWN VIEWS III</div>
            <div className="wf-h2" style={{ fontSize: 32, marginTop: 16, letterSpacing: '-0.02em', lineHeight: 1.1 }}>
              How Emaar's owner team replaced Sunday-night reporting with a 06:00 brief.
            </div>
            <div className="wf-body wf-muted" style={{ marginTop: 14, maxWidth: 460 }}>
              Across 14 active towers, project directors stopped chasing consultants for status. Pulse drafts the brief, sources every figure, and waits in their inbox before coffee.
            </div>
            <div style={{ display: 'flex', gap: 8, marginTop: 22 }}>
              <div className="wf-btn accent" style={{ fontSize: 12.5 }}>Read the case study →</div>
              <div className="wf-btn ghost" style={{ fontSize: 12.5 }}>Watch · 6 min</div>
            </div>
          </div>
          {/* right: quote + outcome panel */}
          <div style={{ padding: 40, background: 'var(--wf-paper-2)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div className="wf-eyebrow">Outcome</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18, marginTop: 14 }}>
                {[['−92%', 'reporting prep'], ['18→1.5h', 'monthly board pack'], ['14', 'projects · live'], ['0', 'disputes · YTD']].map((m, i) =>
                <div key={i}>
                    <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 26, fontWeight: 600, letterSpacing: '-0.02em' }}>{m[0]}</div>
                    <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 4 }}>{m[1]}</div>
                  </div>
                )}
              </div>
            </div>
            <div style={{ borderTop: '1px solid var(--wf-line-softer)', paddingTop: 20, marginTop: 28 }}>
              <div style={{ fontSize: 14, color: 'var(--wf-ink)', lineHeight: 1.5, fontStyle: 'italic' }}>
                "We replaced four spreadsheets, a status email, and one Sunday call. The board now reads our pack like a newspaper."
              </div>
              <div style={{ display: 'flex', gap: 10, marginTop: 16, alignItems: 'center' }}>
                <div style={{ width: 32, height: 32, borderRadius: 16, background: 'var(--wf-ink)', color: '#fff', display: 'grid', placeItems: 'center', fontSize: 11, fontFamily: 'var(--wf-font-mono)' }}>FA</div>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 600 }}>F. Al Mansouri</div>
                  <div style={{ fontSize: 11, color: 'var(--wf-ink-3)' }}>Director of Development, Emaar</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLIENT STRIP */}
      <ClientStrip label="Live on 84 projects across the GCC" />

      {/* INDUSTRY FILTER + STORIES */}
      <section style={{ padding: '60px 80px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
          <div>
            <div className="wf-eyebrow">More stories</div>
            <h2 className="wf-h2" style={{ marginTop: 10, fontSize: 32 }}>Outcomes, not testimonials.</h2>
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {INDUSTRIES.map((it, i) =>
            <div key={i} className="wf-chip" style={{ fontSize: 11.5, ...(i === 0 ? { background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' } : {}) }}>{it}</div>
            )}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18, marginTop: 28 }}>
          {STORIES.map((s, i) =>
          <div key={i} className="wf-card" style={{ padding: 0, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              <Placeholder label={`[ ${s.co.toLowerCase()} · hero shot ]`} style={{ height: 160 }} />
              <div style={{ padding: 20, flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 11, letterSpacing: '0.16em', color: 'var(--wf-ink)' }}>{s.co}</div>
                <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--wf-ink)', marginTop: 12, lineHeight: 1.4 }}>{s.line}</div>
                <div style={{ flex: 1 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', marginTop: 22, paddingTop: 14, borderTop: '1px solid var(--wf-line-softer)' }}>
                  <div>
                    <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 22, fontWeight: 600, color: 'var(--wf-accent)' }}>{s.metric}</div>
                    <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', marginTop: 2 }}>{s.metricLabel}</div>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--wf-ink-3)' }}>Read →</div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* PORTFOLIO STATS BAND */}
      <section style={{ padding: '50px 80px' }}>
        <div className="wf-card" style={{ padding: 0, display: 'grid', gridTemplateColumns: 'repeat(4,1fr)' }}>
          {[
          ['84', 'projects · live'],
          ['14B', 'AED in scope'],
          ['6,200', 'daily active users'],
          ['312k', 'decisions logged']].
          map((s, i) =>
          <div key={i} style={{ padding: '32px 28px', borderLeft: i ? '1px solid var(--wf-line-softer)' : 0 }}>
              <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 36, fontWeight: 600, letterSpacing: '-0.02em' }}>{s[0]}</div>
              <div style={{ fontSize: 12, color: 'var(--wf-ink-3)', marginTop: 6 }}>{s[1]}</div>
            </div>
          )}
        </div>
      </section>

      {/* QUOTES GRID */}
      <section style={{ padding: '40px 80px 80px' }}>
        <div className="wf-eyebrow">In their words</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18, marginTop: 24 }}>
          {QUOTES.map((q, i) =>
          <div key={i} className="wf-soft" style={{ padding: 22, display: 'flex', flexDirection: 'column' }}>
              <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 38, color: 'var(--wf-ink-3)', lineHeight: 1, marginBottom: 6 }}>“</div>
              <div style={{ fontSize: 14, color: 'var(--wf-ink)', lineHeight: 1.5 }}>{q.q}</div>
              <div style={{ flex: 1 }} />
              <div style={{ marginTop: 24, paddingTop: 16, borderTop: '1px dashed var(--wf-line-soft)' }}>
                <div style={{ fontSize: 12.5, fontWeight: 600 }}>{q.who}</div>
                <div style={{ fontSize: 11, color: 'var(--wf-ink-3)', marginTop: 2 }}>{q.role}</div>
                <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', marginTop: 6, fontFamily: 'var(--wf-font-mono)', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{q.org}</div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* CTA STRIP */}
      <section style={{ padding: "90px 80px 80px" }}>
        <div className="wf-card" style={{ padding: '32px 36px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--wf-ink)', color: '#fff', borderColor: 'var(--wf-ink)' }}>
          <div>
            <div className="wf-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Become the next story</div>
            <div style={{ fontSize: 24, fontWeight: 600, marginTop: 8, letterSpacing: '-0.01em' }}>Book a 30-min walkthrough on your project.</div>
          </div>
          <div style={{ display: 'flex', gap: 10 }}>
            <div className="wf-btn" style={{ background: '#fff', color: 'var(--wf-ink)', fontSize: 13 }}>Request Demo</div>
            <div className="wf-btn ghost" style={{ borderColor: 'rgba(255,255,255,0.3)', color: '#fff', fontSize: 13 }}>Talk to founders</div>
          </div>
        </div>
      </section>
    </div>);

}

Object.assign(window, { OnbStep1, OnbStep2, OnbStep3, OnbStep4, OnbStep5, FeaturesPage, SolutionsPage, CustomersPage, MobileScreens });