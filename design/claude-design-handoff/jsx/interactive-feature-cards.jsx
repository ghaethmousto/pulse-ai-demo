// Interactive Feature Cards — Stripe/MGX-style demo cards.
// Each card has: title + live animated backdrop + mini product UI overlay
// + expand button that opens a fullscreen focus view of the same card.
//
// Four cards map to Pulse's core capabilities:
//   01 · AI Briefing (chat + citations)
//   02 · Decision Ledger (approved / deferred / rejected rows)
//   03 · Variance Radar (live metric + pulse dots)
//   04 · Document Graph (connected nodes, drifting)

// ─── Particle Burst ──────────────────────────────────────────────────────
// Radial spray of tiny dots that orbit outward. Canvas-driven, lightweight.
function ParticleField({ hue = 260, count = 160, paused = false, variant = 'burst' }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  // Pause raf when the canvas is off-screen. Critical — design canvas lays
  // out all 4 landing variants side by side, but we don't want every card
  // running particle loops simultaneously.
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((entries) => {
      setVisible(entries[0]?.isIntersecting ?? false);
    }, { rootMargin: '100px', threshold: 0.01 });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    if (!visible) return;
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    let w = 0, h = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      w = r.width; h = r.height;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };
    resize();
    const ro = new ResizeObserver(resize); ro.observe(canvas);

    // seed particles
    const parts = Array.from({ length: count }, () => {
      const a = Math.random() * Math.PI * 2;
      const r = Math.random();
      return {
        a, r,
        speed: 0.0005 + Math.random() * 0.002,
        size: 0.6 + Math.random() * 1.8,
        hOff: (Math.random() - 0.5) * 40,
        life: Math.random(),
      };
    });

    let raf, t0 = performance.now();
    const draw = (now) => {
      const dt = paused ? 0 : (now - t0); t0 = now;
      ctx.clearRect(0, 0, w, h);
      const cx = w * 0.5, cy = h * 0.85;   // origin near bottom (burst up+out)
      const maxR = Math.max(w, h) * 0.9;
      for (const p of parts) {
        p.life += p.speed * dt;
        if (p.life > 1) p.life = 0;
        const eased = Math.pow(p.life, 0.6);
        let x, y;
        if (variant === 'burst') {
          // Spray upward fan: bias angle to upper hemisphere
          const ang = p.a * 0.6 - Math.PI / 2;  // fan up
          x = cx + Math.cos(ang) * eased * maxR * p.r;
          y = cy + Math.sin(ang) * eased * maxR * p.r;
        } else if (variant === 'orbit') {
          const ang = p.a + p.life * Math.PI * 2;
          const rr = 30 + eased * maxR * 0.45 * p.r;
          x = cx + Math.cos(ang) * rr;
          y = cy + Math.sin(ang) * rr * 0.5 - 30;
        } else {
          // drift — gentle float
          x = cx + Math.cos(p.a) * eased * maxR * p.r;
          y = cy + Math.sin(p.a) * eased * maxR * p.r * 0.6 - 40;
        }
        const alpha = Math.sin(p.life * Math.PI) * 0.85;
        const hue2 = hue + p.hOff;
        ctx.fillStyle = `hsla(${hue2}, 80%, 55%, ${alpha.toFixed(3)})`;
        ctx.beginPath();
        ctx.arc(x, y, p.size, 0, Math.PI * 2);
        ctx.fill();
      }
      raf = requestAnimationFrame(draw);
    };
    raf = requestAnimationFrame(draw);
    return () => { cancelAnimationFrame(raf); ro.disconnect(); };
  }, [count, hue, paused, variant]);
  return <canvas ref={ref} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%' }}/>;
}

// ─── Mini UIs inside cards ───────────────────────────────────────────────

// 1 · AI briefing chat
function MiniBriefing({ compact }) {
  const [step, setStep] = React.useState(0);
  React.useEffect(() => {
    const i = setInterval(() => setStep(s => (s + 1) % 3), 2600);
    return () => clearInterval(i);
  }, []);
  return (
    <div style={{
      background: '#fff', borderRadius: 4, padding: compact ? 14 : 20,
      boxShadow: '0 2px 0 var(--wf-line-softer)',
      border: '1.25px solid var(--wf-line)',
      display: 'flex', flexDirection: 'column', gap: 10,
      width: compact ? 260 : 340,
      fontFamily: 'var(--wf-font-ui, Inter, system-ui, sans-serif)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <div style={{ background: 'var(--wf-paper-2)', color: 'var(--wf-ink)', padding: '8px 12px', borderRadius: 4, border: '1px solid var(--wf-line-softer)', fontSize: compact ? 11 : 12.5, maxWidth: '80%' }}>
          What's blocking us on Marina Tower this week?
        </div>
      </div>
      <div style={{ background: 'var(--wf-paper)', borderLeft: '2px solid var(--wf-accent)', padding: compact ? 10 : 12, borderRadius: 2, fontSize: compact ? 10.5 : 12, lineHeight: 1.5, color: 'var(--wf-ink)' }}>
        {step >= 0 && <div>Two open RFIs on Tower B are blocking the concrete pour:</div>}
        {step >= 1 && (
          <div style={{ marginTop: 8, display: 'flex', flexDirection: 'column', gap: 6 }}>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: 'var(--wf-accent)' }}/>
              <span style={{ fontFamily: 'var(--wf-font-mono)', fontSize: compact ? 10 : 11, color: 'var(--wf-ink-2)' }}>RFI-124 · rebar detailing · 11d open</span>
            </div>
            <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
              <div style={{ width: 6, height: 6, borderRadius: 3, background: '#a66a0a' }}/>
              <span style={{ fontFamily: 'var(--wf-font-mono)', fontSize: compact ? 10 : 11, color: 'var(--wf-ink-2)' }}>RFI-118 · MEP routing · 6d open</span>
            </div>
          </div>
        )}
        {step >= 2 && (
          <div style={{ marginTop: 8, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', fontSize: compact ? 9.5 : 10.5 }}>
            Sources: RFI-124.pdf · schedule.p6 · daily-2026-04-21
          </div>
        )}
      </div>
    </div>
  );
}

// 2 · Decision Ledger
function MiniLedger({ compact }) {
  const rows = [
    { status: 'approved', t: 'Switch to post-tensioned slabs — L14+', who: 'Owner · 12 Apr', color: '#2a6f4a' },
    { status: 'deferred', t: 'Facade fin color — pending mock-up', who: 'Consultant · 08 Apr', color: '#a66a0a' },
    { status: 'rejected', t: 'Change elevator supplier', who: 'Owner · 02 Apr', color: '#8b1f1f' },
    { status: 'approved', t: 'Extend B2 waterproofing spec', who: 'Consultant · 31 Mar', color: '#2a6f4a' },
  ];
  const [pulse, setPulse] = React.useState(0);
  React.useEffect(() => { const i = setInterval(() => setPulse(p => p + 1), 1800); return () => clearInterval(i); }, []);
  return (
    <div style={{
      background: '#fff', borderRadius: 4,
      boxShadow: '0 2px 0 var(--wf-line-softer)',
      border: '1.25px solid var(--wf-line)',
      width: compact ? 280 : 360, overflow: 'hidden',
      fontFamily: 'var(--wf-font-ui, Inter, system-ui, sans-serif)',
    }}>
      <div style={{ padding: compact ? '10px 14px' : '12px 16px', borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: compact ? 10.5 : 11.5 }}>
        <span style={{ fontWeight: 600, color: 'var(--wf-ink)' }}>Decision ledger</span>
        <span style={{ color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)' }}>124 this quarter</span>
      </div>
      {rows.map((r, i) => (
        <div key={i} style={{
          display: 'flex', alignItems: 'flex-start', gap: 10,
          padding: compact ? '9px 14px' : '11px 16px',
          borderBottom: i < rows.length - 1 ? '1px solid var(--wf-line-softer)' : 0,
          background: (pulse % rows.length === i) ? 'rgba(110,19,32,0.06)' : 'transparent',
          transition: 'background 800ms ease',
        }}>
          <div style={{ width: 6, height: 6, borderRadius: 3, background: r.color, marginTop: 6 }}/>
          <div style={{ flex: 1, minWidth: 0 }}>
            <div style={{ fontSize: compact ? 11 : 12, color: 'var(--wf-ink)', fontWeight: 500, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{r.t}</div>
            <div style={{ fontSize: compact ? 9.5 : 10.5, color: 'var(--wf-ink-3)', marginTop: 2, fontFamily: 'var(--wf-font-mono)' }}>{r.who}</div>
          </div>
          <div style={{
            fontSize: compact ? 9 : 10, textTransform: 'uppercase', letterSpacing: '0.08em',
            color: r.color, fontFamily: 'var(--wf-font-mono)', marginTop: 2,
          }}>{r.status}</div>
        </div>
      ))}
    </div>
  );
}

// 3 · Variance Radar — live metric stack with tick pulses
function MiniVariance({ compact }) {
  const [tick, setTick] = React.useState(0);
  React.useEffect(() => { const i = setInterval(() => setTick(t => t + 1), 900); return () => clearInterval(i); }, []);
  // Tiny rolling bar sparkline, deterministic but animates
  const bars = Array.from({ length: 24 }, (_, i) => {
    const v = 0.3 + 0.7 * Math.abs(Math.sin((i + tick) * 0.6 + i * 0.3));
    return v;
  });
  return (
    <div style={{
      background: '#fff', borderRadius: 4, padding: compact ? 14 : 18,
      boxShadow: '0 2px 0 var(--wf-line-softer)',
      border: '1.25px solid var(--wf-line)',
      width: compact ? 260 : 340,
      fontFamily: 'var(--wf-font-ui, Inter, system-ui, sans-serif)',
    }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
        <div style={{ fontSize: compact ? 10.5 : 11.5, color: 'var(--wf-ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--wf-font-mono)' }}>Budget variance</div>
        <div style={{ fontSize: compact ? 10 : 11, color: 'var(--wf-accent)', fontFamily: 'var(--wf-font-mono)' }}>● live</div>
      </div>
      <div style={{ display: 'flex', alignItems: 'baseline', gap: 8, marginTop: 10 }}>
        <div style={{ fontSize: compact ? 30 : 38, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', letterSpacing: '-0.02em', color: 'var(--wf-ink)' }}>+2.4<span style={{ fontSize: '0.55em' }}>%</span></div>
        <div style={{ fontSize: compact ? 10 : 11, color: 'var(--wf-ink-3)' }}>vs. baseline · last 7d</div>
      </div>
      {/* sparkline */}
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: 2, height: compact ? 40 : 50, marginTop: 12 }}>
        {bars.map((v, i) => (
          <div key={i} style={{
            flex: 1, height: `${v * 100}%`,
            background: i === bars.length - 1 ? 'var(--wf-accent)' : `rgba(23,20,15,${0.25 + v * 0.35})`,
            borderRadius: 1.5,
            transition: 'height 400ms ease',
          }}/>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: compact ? 10 : 11, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-ink-3)' }}>
        <span>RFI response · 3.2d</span>
        <span>Schedule slip · −1d</span>
      </div>
    </div>
  );
}

// 4 · Document Graph — nodes connected with gently drifting positions
function MiniGraph({ compact }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current; if (!el) return;
    const io = new IntersectionObserver((e) => setVisible(e[0]?.isIntersecting ?? false), { rootMargin: '100px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  const nodes = [
    { x: 0.5,  y: 0.35, label: 'Drawings',  big: true },
    { x: 0.2,  y: 0.2,  label: 'Contract' },
    { x: 0.82, y: 0.25, label: 'Specs' },
    { x: 0.18, y: 0.7,  label: 'RFIs' },
    { x: 0.82, y: 0.7,  label: 'Submittals' },
    { x: 0.5,  y: 0.85, label: 'Schedule' },
  ];
  const edges = [[0,1],[0,2],[0,3],[0,4],[0,5],[1,3],[2,4]];
  const [t, setT] = React.useState(0);
  React.useEffect(() => {
    if (!visible) return;
    let raf; const loop = () => { setT(performance.now() / 1200); raf = requestAnimationFrame(loop); };
    raf = requestAnimationFrame(loop); return () => cancelAnimationFrame(raf);
  }, [visible]);
  const W = compact ? 260 : 340, H = compact ? 190 : 240;
  const pos = nodes.map((n, i) => ({
    x: n.x * W + Math.sin(t + i) * 4,
    y: n.y * H + Math.cos(t * 0.8 + i) * 4,
    ...n,
  }));
  return (
    <div ref={ref} style={{
      background: '#fff', borderRadius: 4, padding: compact ? 12 : 16,
      boxShadow: '0 2px 0 var(--wf-line-softer)',
      border: '1.25px solid var(--wf-line)',
      width: W + (compact ? 28 : 32),
      fontFamily: 'var(--wf-font-ui, Inter, system-ui, sans-serif)',
    }}>
      <div style={{ fontSize: compact ? 10.5 : 11.5, color: 'var(--wf-ink-3)', letterSpacing: '0.08em', textTransform: 'uppercase', fontFamily: 'var(--wf-font-mono)' }}>Document graph · live</div>
      <svg width={W} height={H} style={{ display: 'block', marginTop: 8 }}>
        {edges.map(([a, b], i) => (
          <line key={i} x1={pos[a].x} y1={pos[a].y} x2={pos[b].x} y2={pos[b].y}
            stroke="var(--wf-ink-3)" strokeWidth="1" opacity="0.45" />
        ))}
        {pos.map((n, i) => (
          <g key={i}>
            <circle cx={n.x} cy={n.y} r={n.big ? 10 : 6}
              fill={n.big ? 'var(--wf-accent)' : '#fff'}
              stroke={n.big ? 'var(--wf-accent)' : 'var(--wf-ink)'} strokeWidth={n.big ? 0 : 1.25}/>
            <text x={n.x} y={n.y + (n.big ? 24 : 20)}
              fontSize={compact ? 9.5 : 10.5}
              textAnchor="middle"
              fill="var(--wf-ink)"
              style={{ fontFamily: 'var(--wf-font-mono)' }}>
              {n.label}
            </text>
          </g>
        ))}
      </svg>
    </div>
  );
}

// ─── Card shell ──────────────────────────────────────────────────────────
// Linear-style dark editorial card: near-black background, FIG caption top-left,
// animated demo floating in the upper two-thirds, caption block pinned bottom.
function InteractiveCard({ title, eyebrow, hue, variant, children, accent = false, onExpand, fig }) {
  return (
    <div style={{
      position: 'relative', borderRadius: 6, overflow: 'hidden',
      background: '#0b0b10',
      border: '1px solid rgba(255,255,255,0.06)',
      minHeight: 520, display: 'flex', flexDirection: 'column',
    }}>
      {/* subtle vignette wash */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: 'radial-gradient(ellipse at 80% 0%, rgba(110,19,32,0.18), transparent 55%), radial-gradient(ellipse at 10% 100%, rgba(70,90,170,0.10), transparent 60%)',
      }}/>

      {/* fine grid texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, opacity: 0.4,
        backgroundImage: 'linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)',
        backgroundSize: '40px 40px',
      }}/>

      {/* particle wash — very low opacity, warm hue shift */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1,
        filter: 'saturate(0.7) brightness(0.85)', opacity: 0.35,
      }}>
        <ParticleField hue={hue} variant={variant} count={50}/>
      </div>

      {/* FIG label (top-left) */}
      <div style={{
        position: 'absolute', top: 22, left: 26, zIndex: 4,
        fontFamily: 'var(--wf-font-mono)', fontSize: 10.5,
        letterSpacing: '0.18em', color: 'rgba(255,255,255,0.32)',
        textTransform: 'uppercase',
      }}>{fig || 'FIG. —'}</div>

      {/* expand button (top-right) */}
      <button onClick={onExpand} title="Open full view"
        style={{
          position: 'absolute', top: 18, right: 18, zIndex: 4,
          width: 30, height: 30, borderRadius: '50%',
          background: 'rgba(255,255,255,0.04)', color: 'rgba(255,255,255,0.55)',
          border: '1px solid rgba(255,255,255,0.10)', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          transition: 'all 180ms',
        }}
        onMouseEnter={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.12)'; e.currentTarget.style.color = '#fff'; }}
        onMouseLeave={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.04)'; e.currentTarget.style.color = 'rgba(255,255,255,0.55)'; }}>
        <svg width="11" height="11" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.4">
          <path d="M9 1h4v4M13 1L8 6M5 13H1V9M1 13l5-5" strokeLinecap="round"/>
        </svg>
      </button>

      {/* Demo pane — takes upper 2/3, centers child */}
      <div style={{
        position: 'relative', zIndex: 2,
        flex: 1,
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        padding: '60px 32px 32px',
      }}>
        {children}
      </div>

      {/* Caption block, bottom-anchored — headline in accent color, body muted */}
      <div style={{
        position: 'relative', zIndex: 2,
        padding: '0 28px 32px',
      }}>
        {eyebrow && (
          <div style={{
            fontSize: 9.5, letterSpacing: '0.14em', textTransform: 'uppercase',
            color: 'rgba(255,255,255,0.32)', fontFamily: 'var(--wf-font-mono)',
            marginBottom: 14,
          }}>{eyebrow}</div>
        )}
        <h3 style={{
          margin: 0, fontSize: 17, lineHeight: 1.35, fontWeight: 600,
          letterSpacing: '-0.005em',
          color: '#ffffff',
        }}>{title}</h3>
      </div>
    </div>
  );
}

// ─── Expanded focus modal ────────────────────────────────────────────────
function CardFocus({ card, onClose }) {
  if (!card) return null;
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, zIndex: 1000,
      background: 'rgba(15,8,35,0.72)', backdropFilter: 'blur(6px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40,
      animation: 'fcFade 240ms ease',
    }}>
      <style>{`
        @keyframes fcFade { from { opacity: 0 } to { opacity: 1 } }
        @keyframes fcPop { from { opacity: 0; transform: scale(0.96) translateY(20px) } to { opacity: 1; transform: none } }
      `}</style>
      <div onClick={e => e.stopPropagation()} style={{
        width: 'min(920px, 92vw)', height: 'min(640px, 88vh)',
        position: 'relative', borderRadius: 6, overflow: 'hidden',
        background: 'var(--wf-paper)',
        border: '1.25px solid var(--wf-line)',
        boxShadow: '0 40px 100px -20px rgba(0,0,0,0.5)',
        animation: 'fcPop 320ms cubic-bezier(.22,.9,.2,1)',
        display: 'flex', flexDirection: 'column',
      }}>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: 'radial-gradient(ellipse at 10% 0%, rgba(110,19,32,0.06), transparent 60%)',
        }}/>
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          filter: 'hue-rotate(80deg) saturate(0.4) contrast(0.9)', opacity: 0.5,
        }}>
          <ParticleField hue={card.hue} variant={card.variant} count={120}/>
        </div>
        <div style={{ position: 'relative', padding: '40px 48px 0', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', zIndex: 2 }}>
          <div style={{ maxWidth: '70%' }}>
            <div style={{
              fontSize: 10.5, letterSpacing: '0.14em', textTransform: 'uppercase',
              color: 'var(--wf-accent)', fontFamily: 'var(--wf-font-mono)', fontWeight: 600,
              display: 'flex', alignItems: 'center', gap: 8,
            }}>
              <span style={{ width: 18, height: 1, background: 'var(--wf-accent)' }}/>
              {card.eyebrow}
            </div>
            <h2 style={{ margin: '14px 0 0', fontSize: 42, lineHeight: 1.05, fontWeight: 500, letterSpacing: '-0.02em', color: 'var(--wf-ink)' }}>{card.title}</h2>
            <div style={{ marginTop: 16, fontSize: 14, lineHeight: 1.6, color: 'var(--wf-ink-2)', maxWidth: 500 }}>{card.longDesc}</div>
          </div>
          <button onClick={onClose} style={{
            width: 38, height: 38, borderRadius: '50%',
            background: 'var(--wf-ink)', color: '#fff',
            border: 'none', cursor: 'pointer',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }} title="Close">
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M2 2l10 10M12 2L2 12" strokeLinecap="round"/>
            </svg>
          </button>
        </div>
        <div style={{ position: 'relative', flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 40, zIndex: 2 }}>
          {React.cloneElement(card.demo, { compact: false })}
        </div>
      </div>
    </div>
  );
}

// ─── The Grid ────────────────────────────────────────────────────────────
function InteractiveFeatureCards() {
  const [focused, setFocused] = React.useState(null);
  const cards = [
    {
      id: 'briefing',
      eyebrow: '01 · Intelligence',
      title: 'Ask your project anything, with citations.',
      longDesc: 'Pulse reads every drawing, contract, RFI, email, and daily report — then answers with citations back to source. No hallucination, no "it depends."',
      hue: 280, variant: 'burst',
      demo: <MiniBriefing compact/>,
    },
    {
      id: 'ledger',
      eyebrow: '02 · Governance',
      title: 'A living ledger of every decision.',
      longDesc: 'Every approval, deferral, and rejection — captured with owner, rationale, and downstream impact. Audit-ready on day one.',
      hue: 320, variant: 'orbit',
      demo: <MiniLedger compact/>,
    },
    {
      id: 'variance',
      eyebrow: '03 · Early Warning',
      title: 'See variance the week it appears.',
      longDesc: 'Budget, schedule, and RFI response time — all tracked against baseline, all alerting before the owner gets the call at 11pm.',
      hue: 250, variant: 'drift',
      demo: <MiniVariance compact/>,
    },
    {
      id: 'graph',
      eyebrow: '04 · Document Graph',
      title: 'Files that know their neighbours.',
      longDesc: 'Drawings, specs, RFIs, and submittals connected by context — not folder paths. Change one thing, Pulse tells you what breaks.',
      hue: 265, variant: 'drift',
      demo: <MiniGraph compact/>,
    },
  ];

  return (
    <>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 20 }}>
        {cards.map(c => (
          <InteractiveCard key={c.id}
            eyebrow={c.eyebrow} title={c.title} hue={c.hue} variant={c.variant}
            onExpand={() => setFocused(c)}>
            {c.demo}
          </InteractiveCard>
        ))}
      </div>
      <CardFocus card={focused} onClose={() => setFocused(null)}/>
    </>
  );
}

Object.assign(window, { InteractiveFeatureCards });
