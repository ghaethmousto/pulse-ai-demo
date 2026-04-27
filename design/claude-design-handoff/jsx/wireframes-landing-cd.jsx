// Novel landing variations C (vertical stacked "spine") + D (editorial)

// ── 3D Tilt Card — responds to cursor position with perspective transform ───
function TiltCard3D({ children, index = 0 }) {
  const ref = React.useRef(null);
  const [tx, setTx] = React.useState({ rx: 0, ry: 0, lx: 50, ly: 50, hover: false });
  const onMove = (e) => {
    const r = ref.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width; // 0..1
    const py = (e.clientY - r.top) / r.height;
    const ry = (px - 0.5) * 16; // rotateY
    const rx = (0.5 - py) * 12; // rotateX
    setTx({ rx, ry, lx: px * 100, ly: py * 100, hover: true });
  };
  const onLeave = () => setTx({ rx: 0, ry: 0, lx: 50, ly: 50, hover: false });
  // idle sway — gentle multi-axis oscillation when not hovering
  const swayDur = 7 + index * 0.9;
  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative',
        transformStyle: 'preserve-3d',
        transform: `perspective(1200px) rotateX(${tx.rx}deg) rotateY(${tx.ry}deg) translateZ(0)`,
        transition: tx.hover ? 'transform 120ms ease-out' : 'transform 700ms cubic-bezier(.2,.8,.2,1)',
        animation: tx.hover ? 'none' : `wfSway${index} ${swayDur}s ease-in-out infinite`,
        willChange: 'transform'
      }}>
      
      <style>{`
        @keyframes wfSway${index} {
          0%, 100% { transform: perspective(1200px) rotateX(${1.5 - index}deg) rotateY(${-3 + index * 2}deg); }
          50%      { transform: perspective(1200px) rotateX(${-1 + index}deg) rotateY(${3 - index * 2}deg); }
        }
      `}</style>
      <div className="wf-card" style={{
        padding: 36, minHeight: 260, position: 'relative', overflow: 'hidden',
        background: 'var(--wf-paper)',
        boxShadow: tx.hover ?
        '0 30px 60px -20px rgba(0,0,0,0.18), 0 0 0 1.25px var(--wf-line)' :
        '0 12px 24px -14px rgba(0,0,0,0.12), 0 0 0 1.25px var(--wf-line)',
        transition: 'box-shadow 300ms ease',
        transformStyle: 'preserve-3d'
      }}>
        {/* specular sheen following cursor */}
        <div style={{
          position: 'absolute', inset: 0, pointerEvents: 'none',
          background: `radial-gradient(260px circle at ${tx.lx}% ${tx.ly}%, rgba(110,19,32,0.08), transparent 60%)`,
          opacity: tx.hover ? 1 : 0,
          transition: 'opacity 260ms'
        }} />
        {/* content lifted on Z */}
        <div style={{ position: 'relative', transform: 'translateZ(30px)', transformStyle: 'preserve-3d' }}>
          {children}
        </div>
      </div>
    </div>);

}

// ── Glass Card Shuffle — stack of frosted-glass cards that auto-cycle ───────
function SpineRow({ index, item }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    if (!ref.current) return;
    const io = new IntersectionObserver(
      ([entry]) => {if (entry.isIntersecting) setVisible(true);},
      { threshold: 0.25 }
    );
    io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const ease = 'cubic-bezier(.22,.9,.2,1)';
  const cardStyle = (side) => ({
    width: 300, height: 170,
    transition: `transform 800ms ${ease}, opacity 700ms ${ease}, filter 800ms ${ease}`,
    transitionDelay: `${index * 90}ms`,
    transform: visible ?
    'translateX(0) scale(1)' :
    `translateX(${side === 'left' ? -80 : 80}px) scale(0.94)`,
    opacity: visible ? 1 : 0,
    filter: visible ? 'blur(0)' : 'blur(6px)'
  });
  return (
    <div ref={ref} style={{ display: 'grid', gridTemplateColumns: '1fr 120px 1fr', gap: 24, alignItems: 'center', position: 'relative' }}>
      {/* LEFT card */}
      <div style={{ justifySelf: 'end' }}>
        <Placeholder label={item.mock} style={cardStyle('left')} />
      </div>
      {/* CENTER — node + label + description */}
      <div style={{ textAlign: 'center', position: 'relative' }}>
        <div style={{
          width: 28, height: 28, borderRadius: 28, background: 'var(--wf-paper)', border: '1.25px solid var(--wf-line)',
          display: 'grid', placeItems: 'center', fontFamily: 'var(--wf-font-mono)', fontSize: 10,
          margin: '0 auto', position: 'relative', zIndex: 2,
          boxShadow: visible ? '0 0 0 6px var(--wf-paper)' : 'none',
          transition: 'box-shadow 400ms ease'
        }}>
          0{index + 1}
        </div>
        <div className="wf-h2" style={{ fontSize: 22, marginTop: 14 }}>{item.t}</div>
        <div className="wf-body wf-muted" style={{ marginTop: 8, fontSize: 12, lineHeight: 1.5, maxWidth: 200, margin: '8px auto 0' }}>{item.d}</div>
      </div>
      {/* RIGHT card — mirrored */}
      <div style={{ justifySelf: 'start' }}>
        <Placeholder label={item.mock} style={cardStyle('right')} />
      </div>
    </div>);

}

// ── Glass Card Shuffle — stack of frosted-glass cards that auto-cycle ───────
function GlassCardShuffle({ items }) {
  const [active, setActive] = React.useState(0);
  const n = items.length;
  React.useEffect(() => {
    const id = setInterval(() => setActive((a) => (a + 1) % n), 3200);
    return () => clearInterval(id);
  }, [n]);
  // Subtle ambient gradient behind the stack
  return (
    <div style={{ position: 'relative', maxWidth: 680, margin: '0 auto', height: 360 }}>
      {/* ambient accent glow */}
      <div style={{
        position: 'absolute', inset: '-20% -10%', zIndex: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse at 30% 40%, rgba(110,19,32,0.35), transparent 60%), radial-gradient(ellipse at 80% 70%, rgba(255,255,255,0.06), transparent 55%)',
        filter: 'blur(40px)'
      }} />
      {/* stack */}
      <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center' }}>
        {items.map((it, i) => {
          const delta = (i - active + n) % n; // 0 = top, 1 = behind, 2 = further back, ...
          const shown = delta < 3;
          const scale = 1 - delta * 0.06;
          const y = delta * 14;
          const opacity = delta === 0 ? 1 : delta === 1 ? 0.55 : delta === 2 ? 0.22 : 0;
          const blur = delta === 0 ? 0 : 2 + delta * 2;
          return (
            <div key={i} style={{
              position: 'absolute', width: 560, minHeight: 220, padding: '30px 36px',
              borderRadius: 18,

              border: '1px solid rgba(255,255,255,0.18)',
              backdropFilter: 'blur(22px) saturate(140%)',
              WebkitBackdropFilter: 'blur(22px) saturate(140%)',
              boxShadow: delta === 0 ?
              '0 24px 60px -12px rgba(0,0,0,0.6), 0 0 0 1px rgba(255,255,255,0.06) inset' :
              '0 12px 32px -10px rgba(0,0,0,0.5)',
              transform: `translateY(${y}px) scale(${scale})`,
              opacity: shown ? opacity : 0,
              filter: `blur(${blur}px)`,
              transition: 'transform 700ms cubic-bezier(.2,.8,.2,1), opacity 700ms, filter 700ms',
              zIndex: 10 - delta,
              pointerEvents: delta === 0 ? 'auto' : 'none',
              display: 'flex', flexDirection: 'column', background: "linear-gradient(145deg, rgba(255, 255, 255, 0.1), rgba(255, 255, 255, 0.04)) 0% 0% / auto", gap: "100px", justifyContent: "space-between"
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 12, color: 'rgba(235,190,120,0.9)', letterSpacing: '0.08em' }}>{it.n}</div>
                <div style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 11, color: 'rgba(255,255,255,0.4)' }}>{String(active + 1).padStart(2, '0')} / {String(n).padStart(2, '0')}</div>
              </div>
              <div style={{ fontSize: 36, fontWeight: 500, letterSpacing: '-0.02em', color: '#fff', lineHeight: 1.1 }}>{it.t}</div>
              <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.72)', lineHeight: 1.55, maxWidth: 440 }}>{it.d}</div>
            </div>);

        })}
      </div>
      {/* progress pips */}
      <div style={{ position: 'absolute', left: 0, right: 0, bottom: -36, display: 'flex', gap: 6, justifyContent: 'center', zIndex: 20 }}>
        {items.map((_, i) =>
        <button key={i} onClick={() => setActive(i)} style={{
          border: 0, padding: 0, cursor: 'pointer',
          width: i === active ? 22 : 6, height: 6, borderRadius: 3,
          background: i === active ? 'rgba(235,190,120,0.9)' : 'rgba(255,255,255,0.25)',
          transition: 'width 400ms, background 400ms'
        }} />
        )}
      </div>
    </div>);

}

// ── MotionLayer — animated banner inside each "What X sees" card.
// Each persona has a distinct ambient animation that reflects their biased
// view of the project: Owner = smooth upward curve (rosy dashboard), Consultant
// = paperwork stacking up with alerts pinging, Contractor = crane on site with
// a delay counter climbing. Rendered in an accent-tinted wash above the copy.
// ─────────────────────────────────────────────────────────────────────────────
function MotionLayer({ role, height = 120 }) {
  const keyframes = `
    /* OWNER — gently sweeping line */
    @keyframes mlOwnerSweep { from { stroke-dashoffset: 600; } to { stroke-dashoffset: 0; } }
    @keyframes mlOwnerBob   { 0%,100% { transform: translateY(0); } 50% { transform: translateY(-3px); } }
    @keyframes mlOwnerBlip  { 0%,80%,100% { transform: scale(1); opacity: 1; } 85% { transform: scale(1.6); opacity: 0.4; } }

    /* CONSULTANT — papers stacking + alert ping */
    @keyframes mlDocIn      { 0% { opacity: 0; transform: translate(var(--tx,0),-12px) rotate(var(--rz,0deg)); }
                              20%,100% { opacity: 1; transform: translate(var(--tx,0), 0) rotate(var(--rz,0deg)); } }
    @keyframes mlAlertPing  { 0%,70%,100% { transform: scale(1); opacity: 1; }
                              80% { transform: scale(1.35); opacity: 0.3; } }
    @keyframes mlStamp      { 0%,92%,100% { transform: scale(1) rotate(-8deg); opacity: 0; }
                              95%         { transform: scale(1.25) rotate(-8deg); opacity: 1; }
                              99%         { transform: scale(1) rotate(-8deg); opacity: 0.9; } }

    /* CONTRACTOR — crane swings, counter climbs */
    @keyframes mlCraneSwing { 0%,100% { transform: rotate(-3deg); } 50% { transform: rotate(4deg); } }
    @keyframes mlLoadDrop   { 0%,25% { transform: translateY(0); }
                              50%    { transform: translateY(16px); }
                              75%,100% { transform: translateY(0); } }
    @keyframes mlGroundShift{ 0%,100% { transform: translateX(0); } 50% { transform: translateX(-6px); } }
    @keyframes mlWarnBlink  { 0%,45%,100% { opacity: 0.35; } 50%,95% { opacity: 1; } }
  `;

  const common = {
    position: 'relative',
    height,
    borderRadius: 10,
    overflow: 'hidden',
    border: '1px solid var(--wf-line-softer)',
    marginTop: 14
  };

  if (role === 'owner') {
    return (
      <div style={{ ...common, background: 'linear-gradient(180deg, #f4efe6 0%, #e9e4d8 100%)' }}>
        <style>{keyframes}</style>
        {/* grid backdrop */}
        <svg width="100%" height="100%" viewBox="0 0 300 120" preserveAspectRatio="none"
        style={{ position: 'absolute', inset: 0 }}>
          <defs>
            <pattern id="mlGrid1" width="30" height="24" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 24" fill="none" stroke="rgba(23,20,15,0.06)" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="300" height="120" fill="url(#mlGrid1)" />
          {/* smooth upward trend (looks reassuring) */}
          <path d="M 0 95 C 40 88, 80 80, 120 75 S 200 60, 240 50 S 290 38, 300 32"
          fill="none" stroke="var(--wf-accent)" strokeWidth="1.8" opacity="0.22" />
          <path d="M 0 95 C 40 88, 80 80, 120 75 S 200 60, 240 50 S 290 38, 300 32"
          fill="none" stroke="var(--wf-accent)" strokeWidth="2.2"
          strokeDasharray="600" strokeLinecap="round"
          style={{ animation: 'mlOwnerSweep 4.5s linear infinite' }} />
          {/* filled area under curve, subtle */}
          <path d="M 0 95 C 40 88, 80 80, 120 75 S 200 60, 240 50 S 290 38, 300 32 L 300 120 L 0 120 Z"
          fill="var(--wf-accent)" opacity="0.08" />
        </svg>
        {/* "all good" badge */}
        <div style={{
          position: 'absolute', top: 10, left: 12,
          fontFamily: 'var(--wf-font-mono)', fontSize: 9,
          letterSpacing: '0.12em', color: 'var(--wf-ink-3)'
        }}>BUDGET · SCHEDULE</div>
        <div style={{
          position: 'absolute', top: 10, right: 12, display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--wf-font-mono)', fontSize: 10, color: '#2d6a3a', fontWeight: 600
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: '#2d6a3a',
            animation: 'mlOwnerBlip 3s ease-in-out infinite' }} />
          ON TRACK
        </div>
        {/* gentle float of the current-value dot */}
        <div style={{
          position: 'absolute', right: 18, bottom: 40,
          animation: 'mlOwnerBob 3.5s ease-in-out infinite'
        }}>
          <div style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--wf-accent)',
            boxShadow: '0 0 0 4px rgba(110,19,32,0.18)' }} />
        </div>
      </div>);

  }

  if (role === 'consultant') {
    return (
      <div style={{ ...common, background: 'repeating-linear-gradient(135deg, #eee8dd 0 10px, #e8e2d5 10px 20px)' }}>
        <style>{keyframes}</style>
        {/* stack of papers — staggered, each fading in */}
        {[
        { w: 92, h: 62, x: 26, y: 26, rot: -6, dly: 0, color: '#fff' },
        { w: 92, h: 62, x: 44, y: 32, rot: 3, dly: 0.4, color: '#fdfaf2' },
        { w: 92, h: 62, x: 62, y: 38, rot: -2, dly: 0.8, color: '#fff' },
        { w: 92, h: 62, x: 80, y: 44, rot: 5, dly: 1.2, color: '#fdfaf2' }].
        map((p, i) =>
        <div key={i} style={{
          position: 'absolute', left: p.x, top: p.y, width: p.w, height: p.h,
          background: p.color, border: '1px solid rgba(23,20,15,0.15)', borderRadius: 2,
          boxShadow: '0 2px 4px rgba(23,20,15,0.08)',
          '--tx': 0, '--rz': `${p.rot}deg`,
          transform: `rotate(${p.rot}deg)`,
          animation: `mlDocIn 4s ease-out ${p.dly}s infinite both`
        }}>
            {/* paper lines */}
            <div style={{ position: 'absolute', inset: 6, display: 'flex', flexDirection: 'column', gap: 4 }}>
              <div style={{ height: 2, background: 'rgba(23,20,15,0.18)', width: '60%' }} />
              <div style={{ height: 1, background: 'rgba(23,20,15,0.12)', width: '85%' }} />
              <div style={{ height: 1, background: 'rgba(23,20,15,0.12)', width: '75%' }} />
              <div style={{ height: 1, background: 'rgba(23,20,15,0.12)', width: '82%' }} />
              <div style={{ height: 1, background: 'rgba(23,20,15,0.12)', width: '55%' }} />
            </div>
            {/* tiny stamp on top doc only */}
            {i === 3 &&
          <div style={{
            position: 'absolute', top: 8, right: 6,
            fontFamily: 'var(--wf-font-mono)', fontSize: 7.5,
            letterSpacing: '0.12em', color: 'var(--wf-accent)',
            border: '1px solid var(--wf-accent)', padding: '1px 4px',
            animation: 'mlStamp 4s ease-in-out infinite'
          }}>RFI</div>
          }
          </div>
        )}
        {/* alert badge top-right */}
        <div style={{
          position: 'absolute', top: 10, right: 12,
          display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--wf-font-mono)', fontSize: 10, color: 'var(--wf-accent)', fontWeight: 600
        }}>
          <span style={{
            width: 9, height: 9, borderRadius: '50%', background: 'var(--wf-accent)',
            animation: 'mlAlertPing 1.8s ease-in-out infinite',
            boxShadow: '0 0 0 3px rgba(110,19,32,0.2)'
          }} />
          23 OPEN
        </div>
        <div style={{
          position: 'absolute', top: 10, left: 12,
          fontFamily: 'var(--wf-font-mono)', fontSize: 9,
          letterSpacing: '0.12em', color: 'var(--wf-ink-3)'
        }}>INBOX · APPROVALS</div>
      </div>);

  }

  if (role === 'contractor') {
    return (
      <div style={{ ...common, background: 'linear-gradient(180deg, #e8e2d3 0%, #d4c9b0 100%)' }}>
        <style>{keyframes}</style>
        {/* horizon / site ground */}
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0, height: 28,
          background: 'repeating-linear-gradient(90deg, rgba(23,20,15,0.25) 0 6px, transparent 6px 14px)',
          opacity: 0.45,
          animation: 'mlGroundShift 4s ease-in-out infinite'
        }} />
        {/* crane */}
        <div style={{
          position: 'absolute', left: 22, bottom: 22,
          transformOrigin: 'bottom center',
          animation: 'mlCraneSwing 6s ease-in-out infinite'
        }}>
          <svg width="120" height="80" viewBox="0 0 120 80">
            {/* tower */}
            <rect x="22" y="8" width="6" height="64" fill="var(--wf-ink)" />
            {/* horizontal arm */}
            <rect x="4" y="8" width="110" height="3" fill="var(--wf-ink)" />
            {/* counterweight */}
            <rect x="0" y="4" width="16" height="11" fill="var(--wf-ink)" />
            {/* cable */}
            <line x1="90" y1="11" x2="90" y2="46" stroke="var(--wf-ink)" strokeWidth="0.8" />
          </svg>
          {/* load swings separately */}
          <div style={{
            position: 'absolute', left: 84, top: 54,
            width: 12, height: 12,
            background: 'var(--wf-accent)',
            border: '1px solid var(--wf-ink)',
            animation: 'mlLoadDrop 3.5s ease-in-out infinite'
          }} />
        </div>
        {/* warning sign */}
        <div style={{
          position: 'absolute', right: 14, bottom: 22,
          width: 22, height: 22,
          background: 'var(--wf-accent)',
          clipPath: 'polygon(50% 0, 100% 100%, 0 100%)',
          animation: 'mlWarnBlink 1.4s steps(2) infinite',
          display: 'grid', placeItems: 'center'
        }}>
          <span style={{ color: '#fff', fontSize: 9, fontWeight: 700, marginTop: 4 }}>!</span>
        </div>
        {/* counters */}
        <div style={{
          position: 'absolute', top: 10, left: 12,
          fontFamily: 'var(--wf-font-mono)', fontSize: 9,
          letterSpacing: '0.12em', color: 'var(--wf-ink-3)'
        }}>SITE · ZONE B</div>
        <div style={{
          position: 'absolute', top: 10, right: 12, display: 'flex', alignItems: 'center', gap: 6,
          fontFamily: 'var(--wf-font-mono)', fontSize: 10, color: 'var(--wf-accent)', fontWeight: 600
        }}>
          <span style={{ width: 7, height: 7, borderRadius: '50%', background: 'var(--wf-accent)',
            animation: 'mlWarnBlink 1.4s steps(2) infinite' }} />
          −14d
        </div>
      </div>);

  }

  return null;
}

// ── Variation C: Novel — vertical "spine" timeline hero ─────────────────────
function LandingC() {
  return (
    <div className="wf-page" style={{ width: 1280, minHeight: 4500 }}>
      <NavBar />

      {/* HERO — editorial-scale canvas: even more vertical breathing room so
                     the animated 3D scene commands the page before text arrives.
                     Per Ghaeth: taller hero + more empty space for a larger 3D element. */}
      <section style={{ padding: '0', position: 'relative', borderBottom: '1.25px solid var(--wf-line)' }}>
        <div style={{
          position: 'relative',
          minHeight: 2640,
          padding: '200px 0 0',
          background: 'var(--wf-ink)',
          overflow: 'hidden'
        }}>
          <Annot style={{ top: 36, right: 32, color: 'rgba(235,190,120,0.9)' }} arrow="down">animated 3D scene fills the empty canvas — much more vertical breathing room above the headline (per Ghaeth)</Annot>

          {/* Sparse grid — anchors the otherwise-empty canvas without filling it */}
          <svg width="100%" height="1740" style={{ position: 'absolute', top: 80, left: 0, opacity: 0.08, pointerEvents: 'none' }}>
            <defs>
              <pattern id="c-grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <path d="M 80 0 L 0 0 0 80" fill="none" stroke="#fff" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#c-grid)" />
          </svg>

          {/* 3D stage — full-bleed, even taller, dominates the hero with generous empty space */}
          <div style={{
            position: 'relative',
            marginTop: 0,
            height: 1760,
            overflow: 'hidden',
            zIndex: 1
          }}>
            <IsoStack3D variant="stack" label="" caption="three versions — one project\nmouse over to pivot the stack" />
            {/* bottom-fade so headline reads cleanly over the 3D scene */}
            <div style={{
              position: 'absolute', left: 0, right: 0, bottom: 0, height: 480,
              background: 'linear-gradient(180deg, rgba(23,20,15,0) 0%, rgba(23,20,15,0.85) 70%, var(--wf-ink) 100%)',
              pointerEvents: 'none'
            }} />
          </div>

          {/* Headline — anchored bottom-left */}
          <div style={{ position: 'relative', zIndex: 3, padding: '0 80px 140px', color: '#fff', marginTop: -300 }}>
            <h1 style={{ fontSize: 112, lineHeight: 0.98, fontWeight: 500, letterSpacing: '-0.035em', marginTop: 0, maxWidth: 1040, color: '#fff' }}>
              Every project<br />
              has <span style={{ color: 'var(--wf-accent)' }}>three</span> versions<br />
              of the truth.
            </h1>
            <div className="wf-body" style={{ fontSize: 18, marginTop: 36, maxWidth: 560, color: 'rgba(255,255,255,0.72)' }}>
              The Owner sees numbers. The Consultant sees drawings. The Contractor
              sees the site. Three stories of the same project, never fully aligned.
              This is where budget and schedule go to die.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 36 }}>
              <div className="wf-btn accent">Request Demo →</div>
              <div className="wf-btn ghost" style={{ borderColor: 'rgba(255,255,255,0.5)', color: '#fff' }}>Read the thesis</div>
            </div>
          </div>
        </div>

        {/* Three versions diagram — 3D tilt cards */}
        <Annot style={{ top: 6, right: 20 }} arrow="down">3D tilt · perspective cards respond to cursor · gentle idle sway</Annot>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, padding: '80px 80px 0', perspective: 1400 }}>
          {[
          { t: 'What the Owner sees', role: 'owner', items: ['Budget: 847M AED', 'Schedule: on track', '"Looks fine from here."'] },
          { t: 'What the Consultant sees', role: 'consultant', items: ['23 open RFIs', '12 unsigned submittals', '"Waiting on decisions."'] },
          { t: 'What the Contractor sees', role: 'contractor', items: ['14 blockers on site', 'Concrete pour delayed', '"We are 2 weeks behind."'] }].
          map((c, i) =>
          <TiltCard3D key={i} index={i}>
              <PersonaGlyph type={c.role} size={40} />
              <MotionLayer role={c.role} />
              <div className="wf-h3" style={{ marginTop: 16 }}>{c.t}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 16 }}>
                {c.items.map((it, j) =>
              <div key={j} style={{ fontFamily: j === 2 ? 'var(--wf-font-hand)' : 'var(--wf-font-mono)', fontSize: j === 2 ? 18 : 12.5, color: j === 2 ? 'var(--wf-accent)' : 'var(--wf-ink-2)' }}>{it}</div>
              )}
              </div>
            </TiltCard3D>
          )}
        </div>
      </section>

      {/* TRUSTED BY — rotating UAE developer strip (between problem + thesis) */}
      <ClientStrip />

      {/* THESIS section — huge pull quote */}
      <section style={{ padding: '120px 80px', borderBottom: '1.25px solid var(--wf-line)' }}>
        <div className="wf-eyebrow">The Thesis</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 80, marginTop: 40, alignItems: 'start' }}>
          <div className="wf-body wf-muted" style={{ fontSize: 14, lineHeight: 1.6 }}>
            Projects don't fail because people do bad work. They fail because no
            one is working from the same facts.
            <br /><br />
            We built Pulse because a megaproject doesn't need another
            dashboard — it needs a reconciled reality.
          </div>
          <div style={{ fontSize: 56, lineHeight: 1.08, fontWeight: 500, letterSpacing: '-0.02em' }}>
            Turn fragmented information into <span className="wf-accent-ink">one reliable project reality</span> — shared by Owner, Consultant, and Contractor.
          </div>
        </div>

        {/* Outcome metrics — count up from 0 on scroll */}
        <Annot style={{ top: 40, right: 80 }} arrow="down">numbers count up from 0 on scroll · same metric set as A</Annot>
        <div className="wf-card" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', padding: 0, marginTop: 80 }}>
          {[
          { numeric: 42, prefix: '', suffix: '%', label: 'fewer RFIs' },
          { numeric: 3.1, prefix: '', suffix: 'x', label: 'faster decisions', decimals: 1 },
          { numeric: 18, prefix: '–', suffix: ' days', label: 'schedule saved' },
          { numeric: 1, prefix: '', suffix: '', label: 'source of truth' }].
          map((s, i) =>
          <div key={i} style={{ padding: 32, borderRight: i < 3 ? '1px solid var(--wf-line-softer)' : 0, textAlign: 'center' }}>
              <div style={{ fontSize: 40, fontWeight: 500, letterSpacing: '-0.02em', fontFamily: 'var(--wf-font-mono)' }}>
                <CountUp numeric={s.numeric} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals || 0} duration={1600} />
              </div>
              <div className="wf-eyebrow" style={{ marginTop: 10 }}>{s.label}</div>
            </div>
          )}
        </div>
      </section>

      {/* PLATFORM — interactive feature cards with live UI overlays */}
      <section style={{ padding: '100px 80px', borderBottom: '1.25px solid var(--wf-line)' }}>
        <div className="wf-eyebrow">The Platform</div>
        <h2 className="wf-h2" style={{ marginTop: 10 }}>Four surfaces. One operating layer.</h2>
        <div className="wf-body wf-muted" style={{ marginTop: 10, maxWidth: 560 }}>
          Hover a card to preview the live surface. Tap the expand arrow to open
          the full demo.
        </div>
        <Annot style={{ top: 50, right: 80 }} arrow="down">interactive demo cards · live mini UIs · expandable to focus view</Annot>
        <div style={{ marginTop: 50 }}>
          <InteractiveFeatureCards />
        </div>
      </section>

      {/* PERSONAS — three columns full-bleed */}
      <section style={{ borderBottom: '1.25px solid var(--wf-line)' }}>
        <div style={{ padding: '80px 80px 40px' }}>
          <div className="wf-eyebrow">Three Views</div>
          <h2 className="wf-h2" style={{ marginTop: 10 }}>One platform. Three first-class experiences.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)' }}>
          {[
          { t: 'Owner', glyph: 'owner', what: 'Executive oversight', tags: ['Budget', 'Decisions', 'Board reports'] },
          { t: 'Consultant', glyph: 'consultant', what: 'Technical coordination', tags: ['RFIs', 'Submittals', 'Compliance'] },
          { t: 'Contractor', glyph: 'contractor', what: 'Execution clarity', tags: ['Daily plan', 'Blockers', 'Delivery'] }].
          map((p, i) =>
          <div key={i} style={{ padding: 40, borderRight: i < 2 ? '1.25px solid var(--wf-line)' : 0, minHeight: 420, display: 'flex', flexDirection: 'column' }}>
              <PersonaGlyph type={p.glyph} size={56} />
              <div className="wf-eyebrow" style={{ marginTop: 22 }}>Role</div>
              <div className="wf-h2" style={{ fontSize: 32, marginTop: 6 }}>{p.t}</div>
              <div className="wf-body wf-muted" style={{ marginTop: 8 }}>{p.what}</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginTop: 18 }}>
                {p.tags.map((tg, j) => <div key={j} className="wf-chip">{tg}</div>)}
              </div>
              <Placeholder label={`[ ${p.t} view · preview ]`} style={{ height: 160, marginTop: 'auto' }} />
            </div>
          )}
        </div>
      </section>

      {/* INTELLIGENCE — AI transcript mockup */}
      <section style={{ padding: '100px 80px', borderBottom: '1.25px solid var(--wf-line)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60 }}>
          <div>
            <div className="wf-eyebrow">Intelligence</div>
            <h2 className="wf-h2" style={{ marginTop: 10 }}>Ask your project anything.</h2>
            <div className="wf-body wf-muted" style={{ marginTop: 16, maxWidth: 440 }}>
              Pulse reads every document, decision, and message on the project. It
              answers with citations — so every claim ties back to the source.
            </div>
          </div>
          <div className="wf-card" style={{ padding: 20, fontFamily: 'var(--wf-font-mono)', fontSize: 12, lineHeight: 1.5 }}>
            <div style={{ color: 'var(--wf-ink-3)', fontSize: 11, marginBottom: 14 }}>› pulse · marina-tower-ph2</div>
            <div style={{ padding: 10, background: 'var(--wf-paper-2)', borderRadius: 6, marginBottom: 10 }}>
              ? What is blocking the concrete pour on Tower B?
            </div>
            <div style={{ padding: 10, borderLeft: '2px solid var(--wf-accent)', marginBottom: 6 }}>
              RFI-124 (rebar detailing) is open since 11 days. It blocks pour sequence 4–7 on Tower B.
            </div>
            <div style={{ color: 'var(--wf-ink-3)', fontSize: 10.5 }}>
              Sources: RFI-124.pdf · schedule.p6 · daily-report-2026-04-21
            </div>
          </div>
        </div>
      </section>

      {/* PROOF */}
      <section style={{ padding: '80px 80px' }}>
        <div className="wf-eyebrow">Proof</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 30 }}>
          {[
          { numeric: 42, prefix: '', suffix: '%', tail: ' fewer RFIs' },
          { numeric: 3.1, prefix: '', suffix: 'x', tail: ' faster decisions', decimals: 1 },
          { numeric: 18, prefix: '–', suffix: 'd', tail: ' schedule saved' }].
          map((s, i) =>
          <div key={i} className="wf-card" style={{ padding: 28 }}>
              <div style={{ fontSize: 32, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', letterSpacing: '-0.01em' }}>
                <CountUp numeric={s.numeric} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals || 0} duration={1600} />
                <span style={{ fontWeight: 500, color: 'var(--wf-ink-2)' }}>{s.tail}</span>
              </div>
              <div className="wf-body wf-muted" style={{ marginTop: 8, fontSize: 12 }}>From pilot data · Q1 2026</div>
            </div>
          )}
        </div>
      </section>

      {/* RESOURCE ALBUM — "What's happening" */}
      <ResourceAlbum />

      {/* CTA */}
      <section style={{ padding: '0 80px 80px' }}>
        <div style={{ padding: '80px 40px', borderTop: '1.25px solid var(--wf-line)', textAlign: 'center' }}>
          <h2 className="wf-h2" style={{ fontSize: 48 }}>One project. One truth.</h2>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <div className="wf-btn accent">Request Demo →</div>
            <div className="wf-btn ghost">Read whitepaper</div>
          </div>
        </div>
      </section>

      <FloatingAICompanion bottom={28} right={28} />
    </div>);

}

// ── QuoteBackdrop — slowly drifting field of "before/after" fragments
// The pull quote sits on top of it; low opacity, soft blur, layered parallax.
function QuoteBackdrop() {
  const keyframes = `
    @keyframes qb-drift-l { from { transform: translateX(0); } to { transform: translateX(-50%); } }
    @keyframes qb-drift-r { from { transform: translateX(-50%); } to { transform: translateX(0); } }
    @keyframes qb-pulse   { 0%,100% { opacity: 0.22; } 50% { opacity: 0.32; } }
  `;
  const beforeTerms = [
  'emails', 'spreadsheets', 'drawings v27_FINAL_v3', 'inbox 04:12am', 'RFI-0142',
  'variance log', 'scan_resend', 'PDF markup', 'Monday reconciling', '11pm call',
  'which version?', 'Sunday catch-up', 'bcc legal', 'revision missed', '{pending}'];

  const afterTerms = ['→ decided', '→ reconciled', '→ cited', '→ signed', '→ closed', '→ approved'];

  // Build a long marquee row
  const Row = ({ direction = 'l', top, speed = 60, accent = false, blur = 0 }) => {
    const items = [...beforeTerms, ...beforeTerms];
    return (
      <div style={{
        position: 'absolute',
        top,
        left: 0, right: 0,
        whiteSpace: 'nowrap',
        pointerEvents: 'none',
        filter: blur ? `blur(${blur}px)` : 'none'
      }}>
        <div style={{
          display: 'inline-block',
          animation: `qb-drift-${direction} ${speed}s linear infinite`,
          fontFamily: 'var(--wf-font-mono)',
          fontSize: 13,
          color: accent ? 'rgba(235,190,120,0.35)' : 'rgba(255,255,255,0.22)',
          letterSpacing: '0.02em'
        }}>
          {items.map((t, i) =>
          <span key={i} style={{ margin: '0 28px', textDecoration: accent ? 'none' : 'line-through' }}>{t}</span>
          )}
        </div>
      </div>);

  };

  const AfterRow = ({ top, speed }) => {
    const items = [...afterTerms, ...afterTerms, ...afterTerms];
    return (
      <div style={{ position: 'absolute', top, left: 0, right: 0, whiteSpace: 'nowrap', pointerEvents: 'none' }}>
        <div style={{
          display: 'inline-block',
          animation: `qb-drift-r ${speed}s linear infinite`,
          fontFamily: 'var(--wf-font-mono)',
          fontSize: 14,
          color: 'rgba(235,190,120,0.38)',
          letterSpacing: '0.02em'
        }}>
          {items.map((t, i) =>
          <span key={i} style={{ margin: '0 36px' }}>{t}</span>
          )}
        </div>
      </div>);

  };

  return (
    <div aria-hidden style={{ position: 'absolute', inset: 0, overflow: 'hidden', pointerEvents: 'none', zIndex: 1 }}>
      <style>{keyframes}</style>

      {/* faint grid */}
      <svg width="100%" height="100%" style={{ position: 'absolute', inset: 0, opacity: 0.06 }}>
        <defs>
          <pattern id="qb-grid" width="64" height="64" patternUnits="userSpaceOnUse">
            <path d="M 64 0 L 0 0 0 64" fill="none" stroke="#fff" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#qb-grid)" />
      </svg>

      {/* drifting "before" fragments — several rows, varied blur + speed */}
      <Row direction="l" top={40} speed={120} blur={0.5} />
      <Row direction="r" top={96} speed={160} blur={1.2} />
      <Row direction="l" top={340} speed={140} blur={0.5} />
      <Row direction="r" top={396} speed={180} blur={1.5} />

      {/* the "after" row — accent, sharper, slower — rises up like signal through noise */}
      <AfterRow top={220} speed={90} />

      {/* soft radial vignette focuses attention in the center-left where the quote lives */}
      <div style={{
        position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse 60% 80% at 30% 55%, rgba(23,20,15,0) 0%, rgba(23,20,15,0.7) 60%, var(--wf-ink) 100%)',
        animation: 'qb-pulse 8s ease-in-out infinite'
      }} />
    </div>);

}

// ── Variation D: Novel — dark editorial + tabbed persona switcher ───────────
function PulseTrace() {
  // ECG/heartbeat path — a repeating heartbeat segment tiled across width.
  // Uses stroke-dashoffset animation to sweep a bright head along the line.
  const beat = 'l 28 0 l 6 -6 l 10 40 l 10 -70 l 10 34 l 8 0 l 6 -6 l 8 12 l 10 -8';
  // Build one long path: flat lead-in, beat, flat, beat, flat, beat, flat
  const segments = [
  'M 0 80',
  'l 120 0',
  beat, 'l 140 0',
  beat, 'l 140 0',
  beat, 'l 140 0',
  beat, 'l 140 0',
  beat, 'l 140 0',
  beat, 'l 200 0'];

  const d = segments.join(' ');
  return (
    <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 1, opacity: 0.9 }}>
      <style>{`
        @keyframes pulseSweep {
          0%   { stroke-dashoffset: 2400; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes pulseFade {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 0.28; }
        }
        .pulse-trace-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .pulse-base { stroke: var(--wf-accent); opacity: 0.18; animation: pulseFade 4s ease-in-out infinite; }
        .pulse-head {
          stroke: var(--wf-accent);
          stroke-dasharray: 260 2400;
          animation: pulseSweep 4.2s linear infinite;
          filter: drop-shadow(0 0 8px var(--wf-accent)) drop-shadow(0 0 16px var(--wf-accent));
        }
      `}</style>
      <svg className="pulse-trace-svg" viewBox="0 0 1280 160" preserveAspectRatio="none" style={{ top: '38%', height: 160 }}>
        <path d={d} className="pulse-base" fill="none" strokeWidth="1.2" />
        <path d={d} className="pulse-head" fill="none" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>);

}

function LandingD() {
  return (
    <div className="wf-page" style={{ width: 1280, minHeight: 2800, background: 'var(--wf-ink)', color: '#fff' }}>
      <NavBar dark />

      {/* HERO — full-bleed dark */}
      <section style={{ padding: '80px 80px 80px', position: 'relative', borderBottom: '1px solid rgba(255,255,255,0.15)', overflow: 'hidden' }}>
        {/* Live ECG/pulse trace sweeping across the hero */}
        <PulseTrace />

        {/* Glowing brand mark above the headline */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', justifyContent: 'center', marginBottom: 60 }}>
          <div style={{ position: 'relative', width: 180, height: 140, display: 'grid', placeItems: 'center' }}>
            {/* soft outer glow */}
            <div style={{
              position: 'absolute', inset: -80,
              background: 'radial-gradient(circle, rgba(110,19,32,0.7), rgba(110,19,32,0.2) 40%, transparent 70%)',
              filter: 'blur(18px)',
              animation: 'brandGlow 3.4s ease-in-out infinite',
              pointerEvents: 'none'
            }} />
            <style>{`
              @keyframes brandGlow {
                0%, 100% { opacity: 0.7; transform: scale(1); }
                50%      { opacity: 1;   transform: scale(1.1); }
              }
            `}</style>
            {/* the actual logo — black shapes on transparent bg, inverted to white */}
            <img
              src="assets/pulse-logo-clean.svg"
              alt="Pulse AI"
              style={{
                width: 180, height: 'auto', position: 'relative', zIndex: 2,
                filter: 'invert(1) drop-shadow(0 0 18px rgba(110,19,32,0.9)) drop-shadow(0 0 32px rgba(110,19,32,0.55))'
              }} />
            
          </div>
          <Annot style={{ top: -12, right: 60, color: 'rgba(235,190,120,0.9)' }} arrow="down">glowing brand mark · ambient red halo</Annot>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'end', position: 'relative', zIndex: 2 }}>
          <div>
            <div className="wf-chip" style={{ background: 'transparent', borderColor: 'rgba(255,255,255,0.3)', color: 'rgba(255,255,255,0.85)' }}>
              <span className="wf-dot accent" /> New · Pulse 2.0
            </div>
            <h1 style={{ fontSize: 88, lineHeight: 0.98, fontWeight: 500, letterSpacing: '-0.03em', marginTop: 28, color: '#fff' }}>
              One reality<br />
              for every<br />
              project role.
            </h1>
          </div>
          <div style={{ paddingBottom: 20 }}>
            <div style={{ fontSize: 15, color: 'rgba(255,255,255,0.75)', lineHeight: 1.6, maxWidth: 420 }}>
              Pulse AI is the project intelligence platform that reconciles work across
              Owners, Consultants, and Contractors — so the whole project operates from
              a single source of truth.
            </div>
            <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
              <div className="wf-btn accent">Request Demo →</div>
              <div className="wf-btn ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Platform tour</div>
            </div>
          </div>
        </div>

        {/* Horizontal relationship strip */}
        <div style={{ marginTop: 80, display: 'grid', gridTemplateColumns: '1fr 80px 1fr 80px 1fr', alignItems: 'center', gap: 0 }}>
          {[
          { t: 'OWNER', s: 'Decides', glyph: 'owner' },
          null,
          { t: 'PULSE', s: 'Reconciles', glyph: 'pulse' },
          null,
          { t: 'TEAM', s: 'Executes', glyph: 'team' }].
          map((n, i) => {
            if (!n) return (
              <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg width="60" height="20"><path d="M0 10 L55 10 M50 5 L55 10 L50 15" stroke="rgba(255,255,255,0.4)" strokeWidth="1" strokeDasharray="3 3" fill="none" /></svg>
              </div>);

            const isPulse = n.glyph === 'pulse';
            const isTeam = n.glyph === 'team';
            return (
              <div key={i} style={{ padding: 28, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6, background: isPulse ? 'var(--wf-accent)' : 'transparent', borderColor: isPulse ? 'var(--wf-accent)' : 'rgba(255,255,255,0.2)' }}>
                <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                  {isPulse ?
                  <div style={{ width: 32, height: 32, borderRadius: 8, background: '#fff', display: 'grid', placeItems: 'center' }}>
                      <PulseLogo size={22} tile="bare" accent="var(--wf-accent)" />
                    </div> :
                  isTeam ?
                  <div style={{ display: 'flex', gap: -6 }}>
                      <div style={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.5)', borderRadius: 16, background: 'rgba(255,255,255,0.1)' }} />
                      <div style={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.5)', borderRadius: 16, background: 'rgba(255,255,255,0.1)', marginLeft: -10 }} />
                    </div> :

                  <div style={{ width: 32, height: 32, border: '1px solid rgba(255,255,255,0.5)', borderRadius: 16 }} />
                  }
                  <div>
                    <div className="wf-eyebrow" style={{ color: 'rgba(255,255,255,0.75)' }}>{n.t}</div>
                    <div style={{ fontSize: 13, marginTop: 2 }}>{n.s}</div>
                  </div>
                </div>
              </div>);

          })}
        </div>
        <Annot style={{ top: 40, right: 60, color: 'rgba(235,190,120,0.9)' }} arrow="right">dark, editorial, quiet confidence</Annot>
      </section>

      {/* TRUSTED BY — dark variant */}
      <ClientStrip dark />

      {/* TABBED PERSONA SWITCHER */}
      <section style={{ padding: '100px 80px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>
        <div style={{ display: 'flex', gap: 20, alignItems: 'end', justifyContent: 'space-between', marginBottom: 40 }}>
          <div>
            <div className="wf-eyebrow" style={{ color: 'rgba(255,255,255,0.6)' }}>Switch perspective</div>
            <h2 className="wf-h2" style={{ color: '#fff', marginTop: 10 }}>Same project. Three purpose-built views.</h2>
          </div>
          <div style={{ display: 'flex', gap: 4, padding: 4, border: '1px solid rgba(255,255,255,0.2)', borderRadius: 6 }}>
            {['Owner', 'Consultant', 'Contractor'].map((t, i) =>
            <div key={i} style={{ padding: '8px 18px', fontSize: 13, background: i === 0 ? '#fff' : 'transparent', color: i === 0 ? 'var(--wf-ink)' : 'rgba(255,255,255,0.7)', borderRadius: 6 }}>{t}</div>
            )}
          </div>
        </div>
        <div style={{ background: '#fff', color: 'var(--wf-ink)', borderRadius: 6, overflow: 'hidden' }}>
          <div style={{ padding: 14, borderBottom: '1px solid var(--wf-line-softer)', display: 'flex', gap: 8 }}>
            <span className="wf-dot hollow" style={{ width: 10, height: 10 }} />
            <span className="wf-dot hollow" style={{ width: 10, height: 10 }} />
            <span className="wf-dot hollow" style={{ width: 10, height: 10 }} />
            <span style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 11, marginLeft: 16, color: 'var(--wf-ink-3)' }}>pulse.ai / owner · marina-tower-ph2</span>
          </div>
          <Placeholder label="[ OWNER VIEW · executive dashboard · portfolio rollup · risk summary ]" style={{ height: 500, borderRadius: 0, borderWidth: 0 }} />
        </div>
      </section>

      {/* NUMBERED CAPABILITIES — moved to Landing B (the glass-card shuffle lives there now) */}

      {/* INTEGRATIONS — orchestration diagram on dark background */}
      <IntegrationDiagram />

      {/* CTA */}
      <section style={{ padding: '100px 80px', textAlign: 'center' }}>
        <h2 style={{ fontSize: 56, fontWeight: 500, letterSpacing: '-0.02em', lineHeight: 1.05 }}>
          The operating layer for<br />modern construction.
        </h2>
        <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 32 }}>
          <div className="wf-btn accent">Request Demo →</div>
          <div className="wf-btn ghost" style={{ borderColor: 'rgba(255,255,255,0.4)', color: '#fff' }}>Read thesis</div>
        </div>
      </section>

      <FloatingAICompanion variant="dark" bottom={28} right={28} />
    </div>);

}

Object.assign(window, { LandingC, LandingD, GlassCardShuffle });