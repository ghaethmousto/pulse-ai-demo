// Landing page variations for Pulse AI wireframes.
// 4 directions: 2 conventional (A, B) + 2 novel (C, D).

// ── Variation A: Conventional hero, left type + right diagram ───────────────
function MoonIcon({ kind, label }) {
  // Tiny monochrome glyph inside a small circle, with label to the side.
  // Each kind renders a single-stroke SVG sized 11×11.
  const glyphs = {
    budget: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
               <circle cx="6" cy="6" r="3.2" /><path d="M6 4.2v3.6M4.5 6.2c.5.5 2.5.5 3 0" /></g>,
    email: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round">
               <rect x="1.5" y="3" width="9" height="6" rx="0.8" /><path d="M1.5 3.5l4.5 3 4.5-3" /></g>,
    call: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
               <path d="M2.5 2.5h2.5l.8 2.2-1.3 1c.7 1.5 1.8 2.6 3.3 3.3l1-1.3 2.2.8v2.5c0 .3-.2.5-.5.5A8 8 0 0 1 2 3c0-.3.2-.5.5-.5z" /></g>,
    drawing: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round" strokeLinejoin="round">
               <rect x="1.5" y="1.5" width="9" height="9" /><path d="M3 5h6M3 7.5h4" /></g>,
    rfi: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
               <circle cx="6" cy="6" r="4" /><path d="M4.6 4.8a1.4 1.4 0 1 1 2 1.4v.8" /><circle cx="6" cy="8.2" r="0.3" fill="currentColor" /></g>,
    specs: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round">
               <path d="M2.5 1.5h5l2 2v7H2.5z" /><path d="M7 1.5v2.5h2.5" /><path d="M4 6h4M4 8h3" /></g>,
    boq: <g stroke="currentColor" strokeWidth="1" fill="none">
               <rect x="1.5" y="2" width="9" height="8" /><path d="M1.5 4.5h9M4.5 2v8" /></g>,
    chat: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinejoin="round">
               <path d="M1.5 4.5a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v2a3 3 0 0 1-3 3H5l-2 2v-2a3 3 0 0 1-1.5-2.6z" /></g>,
    sheet: <g stroke="currentColor" strokeWidth="1" fill="none">
               <rect x="1.5" y="1.5" width="9" height="9" /><path d="M1.5 4.5h9M1.5 7.5h9M4.5 1.5v9M7.5 1.5v9" /></g>,
    minutes: <g stroke="currentColor" strokeWidth="1" fill="none" strokeLinecap="round">
               <circle cx="6" cy="6" r="4" /><path d="M6 3.5V6l1.8 1.2" /></g>
  };
  return (
    <div style={{
      width: 22, height: 22, borderRadius: '50%',
      background: 'var(--wf-paper)',
      border: '1px solid var(--wf-line)',
      display: 'grid', placeItems: 'center',
      color: 'var(--wf-ink-2)',
      boxShadow: '0 0 0 2px var(--wf-paper), 0 1px 2px rgba(23,20,15,0.06)'
    }}>
      <svg viewBox="0 0 12 12" width="13" height="13">{glyphs[kind]}</svg>
    </div>);

}

// Role-specific glyph that lives INSIDE each persona planet circle.
// Crown = Owner (who commissions), Compass/Dividers = Consultant (who designs),
// Hard hat = Contractor (who builds).
function RoleIcon({ kind, size = 52 }) {
  const glyphs = {
    owner:
    // Crown
    <g stroke="var(--wf-ink)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M5 16 L7 8 L12 13 L16 6 L20 13 L25 8 L27 16 Z" fill="rgba(110,19,32,0.08)" />
        <path d="M5 19 H27" />
        <circle cx="7" cy="8" r="0.8" fill="var(--wf-accent)" stroke="none" />
        <circle cx="16" cy="6" r="0.8" fill="var(--wf-accent)" stroke="none" />
        <circle cx="25" cy="8" r="0.8" fill="var(--wf-accent)" stroke="none" />
      </g>,

    consultant:
    // Compass / dividers (design tool)
    <g stroke="var(--wf-ink)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <circle cx="16" cy="6" r="1.6" fill="var(--wf-accent)" stroke="none" />
        <path d="M16 7.5 L9 20" />
        <path d="M16 7.5 L23 20" />
        <path d="M11.5 15 Q16 17.5 20.5 15" />
        <path d="M8 21 L10 19" />
        <path d="M24 21 L22 19" />
      </g>,

    contractor:
    // Hard hat
    <g stroke="var(--wf-ink)" strokeWidth="1.5" fill="none" strokeLinejoin="round" strokeLinecap="round">
        <path d="M5 18 Q5 9 16 9 Q27 9 27 18 Z" fill="rgba(110,19,32,0.08)" />
        <path d="M3 18 H29" />
        <path d="M13 9 V7 H19 V9" />
        <path d="M16 12 V15" />
      </g>

  };
  return (
    <div style={{
      width: size, height: size, borderRadius: '50%',
      background: '#fff',
      border: '1.25px solid var(--wf-line)',
      display: 'grid', placeItems: 'center',
      boxShadow: '0 2px 6px rgba(23,20,15,0.06)'
    }}>
      <svg viewBox="0 0 32 26" width={size * 0.7} height={size * 0.55} style={{ height: "30px", width: "25px" }}>{glyphs[kind]}</svg>
    </div>);

}

// ── Solar system diagram — Pulse sun with 3 orbiting parties + their moons ──
// Extracted so it can be reused (Landing A hero + Landing B product shot).
function SolarSystemDiagram() {
  return (
    <div style={{ position: 'relative', overflow: 'visible', fontWeight: "100", fontSize: "13px", lineHeight: "1", opacity: "0.95", width: "84px", letterSpacing: "-1px", height: "550px" }}>
      <style>{`
        @keyframes wfOrbitSpin    { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
        @keyframes wfOrbitCounter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
        @keyframes wfSunBreathe   { 0%, 100% { opacity: 0.55; transform: translate(-50%,-50%) scale(1); }
                                    50%      { opacity: 0.85; transform: translate(-50%,-50%) scale(1.12); } }
        @keyframes wfGravityPull  { 0%, 100% { transform: translate(-50%,-50%) translateX(0); }
                                    50%      { transform: translate(-50%,-50%) translateX(-4px); } }
        @keyframes wfConnDash     { to { stroke-dashoffset: -40; } }
        .wf-planet-orbit {
          position: absolute; left: 50%; top: 50%;
          width: 0; height: 0;
          animation: wfOrbitSpin var(--dur, 60s) linear infinite;
        }
        .wf-planet {
          position: absolute;
          transform: translate(-50%, -50%);
          animation: wfOrbitCounter var(--dur, 60s) linear infinite;
        }
        .wf-moon-orbit {
          position: absolute; left: 0; top: 0;
          width: 0; height: 0;
          animation: wfOrbitSpin var(--mdur, 20s) linear infinite;
        }
        .wf-moon {
          position: absolute;
          animation: wfOrbitCounter var(--mdur, 20s) linear infinite, wfGravityPull var(--mdur, 20s) ease-in-out infinite;
        }
      `}</style>

      <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
        {[
        { r: 90, angle: -90 },
        { r: 160, angle: 35 },
        { r: 230, angle: 170 }].
        map((p, i) => {
          const rad = p.angle * Math.PI / 180;
          return (
            <line key={i}
            x1="50%" y1="50%"
            x2={`calc(50% + ${Math.cos(rad) * p.r}px)`}
            y2={`calc(50% + ${Math.sin(rad) * p.r}px)`}
            stroke="var(--wf-accent)" strokeOpacity="0.25"
            strokeWidth="0.8" strokeDasharray="2 5"
            style={{ animation: `wfConnDash ${8 + i * 3}s linear infinite` }} />);

        })}
      </svg>

      {[90, 160, 230].map((r, i) =>
      <div key={i} style={{
        position: 'absolute', left: '50%', top: '50%',
        width: i === 2 ? 800 : r * 2,
        height: i === 2 ? 800 : r * 2,
        transform: 'translate(-50%,-50%)',

        border: '1px dashed var(--wf-line-soft)',
        borderWidth: "0px 0px 0px 0.640015px", borderRadius: "60px 60px 60px 61.04px", opacity: "0.9", margin: "0px"
      }} />
      )}

      <div style={{
        position: 'absolute', left: '50%', top: '50%',
        transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 3
      }}>
        <div style={{
          position: 'absolute', left: '50%', top: 46,
          width: 180, height: 180, borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(110,19,32,0.35) 0%, rgba(110,19,32,0.08) 40%, transparent 70%)',
          filter: 'blur(10px)',
          animation: 'wfSunBreathe 4.2s ease-in-out infinite',
          pointerEvents: 'none'
        }} />
        <div style={{
          position: 'relative', zIndex: 2,
          width: 92, height: 92, borderRadius: '50%',
          background: 'radial-gradient(circle at 30% 30%, rgba(178,53,72,0.85) 0%, rgba(110,19,32,0.75) 50%, rgba(74,12,23,0.55) 100%)',
          backdropFilter: 'blur(6px)',
          WebkitBackdropFilter: 'blur(6px)',
          display: 'grid', placeItems: 'center', margin: '0 auto',
          boxShadow: '0 0 0 6px rgba(110,19,32,0.08), 0 0 40px rgba(110,19,32,0.55), inset 0 0 24px rgba(255,255,255,0.12)',
          border: '1px solid rgba(255,255,255,0.18)'
        }}>
          <PulseLogo size={44} tile="bare" accent="#fff" />
        </div>
        <div style={{ marginTop: 10, fontSize: 12, fontWeight: 600, position: 'relative', zIndex: 2 }}>Pulse AI</div>
        <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', position: 'relative', zIndex: 2, fontWeight: "400" }}>One source of truth</div>
      </div>

      {[
      {
        type: 'owner', label: 'OWNER',
        radius: 90, dur: 46, startAngle: -90,
        moons: [
        { label: 'Budgets', icon: 'budget', r: 34, dur: 11, angle: 0 },
        { label: 'Emails', icon: 'email', r: 52, dur: 17, angle: 130 },
        { label: 'Calls', icon: 'call', r: 42, dur: 13, angle: 240 }]

      },
      {
        type: 'consultant', label: 'CONSULTANT',
        radius: 160, dur: 68, startAngle: 35,
        moons: [
        { label: 'Drawings', icon: 'drawing', r: 38, dur: 14, angle: 40 },
        { label: 'RFIs', icon: 'rfi', r: 56, dur: 19, angle: 160 },
        { label: 'Specs', icon: 'specs', r: 46, dur: 16, angle: 280 }]

      },
      {
        type: 'contractor', label: 'CONTRACTOR',
        radius: 230, dur: 92, startAngle: 170,
        moons: [
        { label: 'BoQ', icon: 'boq', r: 40, dur: 15, angle: 20 },
        { label: 'Whatsapp', icon: 'chat', r: 58, dur: 21, angle: 110 },
        { label: 'Sheets', icon: 'sheet', r: 48, dur: 17, angle: 200 },
        { label: 'Minutes', icon: 'minutes', r: 64, dur: 24, angle: 300 }]

      }].
      map((p, i) =>
      <div key={i} className="wf-planet-orbit"
      style={{ '--dur': `${p.dur}s`, transform: `translate(-50%,-50%) rotate(${p.startAngle}deg)` }}>
          <div className="wf-planet" style={{ '--dur': `${p.dur}s`, left: p.radius, top: 0 }}>
            <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2 }}>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'var(--wf-paper)' }} />
                <div style={{ position: 'relative', width: "30px", height: "30px" }}>
                  <RoleIcon kind={p.type} size={52} />
                </div>
              </div>
              <div className="wf-eyebrow" style={{ marginTop: 6, background: 'var(--wf-paper)', padding: '0 4px', fontSize: 9.5, backgroundColor: "rgba(250, 250, 247, 0)" }}>{p.label}</div>
            </div>

            {p.moons.map((m, j) =>
          <React.Fragment key={j}>
                <div style={{
              position: 'absolute', left: 0, top: 0,
              width: m.r * 2, height: m.r * 2,
              transform: 'translate(-50%,-50%)',

              border: '1px dashed var(--wf-line-softer)',
              opacity: "0.1", borderStyle: "none", borderRadius: "300px"
            }} />
                <div className="wf-moon-orbit"
            style={{ '--mdur': `${m.dur}s`, transform: `rotate(${m.angle}deg)` }}>
                  <div className="wf-moon" style={{ '--mdur': `${m.dur}s`, left: m.r, top: 0, transform: 'translate(-50%,-50%)' }}>
                    <MoonIcon kind={m.icon} label={m.label} />
                  </div>
                </div>
              </React.Fragment>
          )}
          </div>
        </div>
      )}
    </div>);

}

// ── Variation A: Conventional hero, left type + right diagram ───────────────
function LandingA() {
  return (
    <div className="wf-page" style={{ width: 1280 }}>
      <NavBar variant="A" />

      {/* HERO */}
      <section style={{ padding: '80px 80px 60px', display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 60, alignItems: 'center', position: 'relative' }}>
        <div>
          <div className="wf-chip" style={{ marginBottom: 24 }}>
            <span className="wf-dot accent" /> <span>Built for construction teams</span>
          </div>
          <h1 className="wf-h1">
            One project.<br />
            Three stakeholders.<br />
            <span className="wf-accent-ink">One trusted truth.</span>
          </h1>
          <div className="wf-body" style={{ marginTop: 22, maxWidth: 480 }}>
            Pulse AI connects Owners, Consultants, and Contractors around a single
            source of project truth — documents, decisions, tasks, risks, and AI
            insights in one operational layer.
          </div>
          <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
            <div className="wf-btn accent">Request Demo →</div>
            <div className="wf-btn ghost">See Platform</div>
          </div>
          <div style={{ display: 'flex', gap: 18, marginTop: 40, color: 'var(--wf-ink-3)', fontSize: 12, alignItems: 'center' }}>
            <span>◆ SOC 2</span><span>◆ ISO 27001</span><span>◆ Built for Gulf megaprojects</span>
          </div>
          <Annot style={{ top: -18, left: 340 }} arrow="right">headline carries the one-truth thesis</Annot>
        </div>

        {/* Diagram — Solar system: Pulse is the sun, 3 parties orbit as planets,
                                                                                                                                                                                                                                                                                                                                                                                                                       each party has its own moons on distinct orbits (the info fragments they carry).
                                                                                                                                                                                                                                                                                                                                                                                                                       Thin fade-lines connect everything to Pulse; the sun has a soft breathing
                                                                                                                                                                                                                                                                                                                                                                                                                       gravity halo that "pulls" nearby moons. */}
        <div style={{ position: 'relative', height: 560, marginTop: 10, overflow: 'visible' }}>
          <style>{`
            @keyframes wfOrbitSpin    { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
            @keyframes wfOrbitCounter { from { transform: rotate(0deg); } to { transform: rotate(-360deg); } }
            @keyframes wfSunBreathe   { 0%, 100% { opacity: 0.55; transform: translate(-50%,-50%) scale(1); }
                                        50%      { opacity: 0.85; transform: translate(-50%,-50%) scale(1.12); } }
            @keyframes wfGravityPull  { 0%, 100% { transform: translate(-50%,-50%) translateX(0); }
                                        50%      { transform: translate(-50%,-50%) translateX(-4px); } }
            @keyframes wfConnDash     { to { stroke-dashoffset: -40; } }
            .wf-planet-orbit {
              position: absolute; left: 50%; top: 50%;
              width: 0; height: 0;
              animation: wfOrbitSpin var(--dur, 60s) linear infinite;
            }
            .wf-planet {
              position: absolute;
              transform: translate(-50%, -50%);
              animation: wfOrbitCounter var(--dur, 60s) linear infinite;
            }
            .wf-moon-orbit {
              position: absolute; left: 0; top: 0;
              width: 0; height: 0;
              animation: wfOrbitSpin var(--mdur, 20s) linear infinite;
            }
            .wf-moon {
              position: absolute;
              animation: wfOrbitCounter var(--mdur, 20s) linear infinite, wfGravityPull var(--mdur, 20s) ease-in-out infinite;
            }
          `}</style>

          {/* Fade connection lines: sun ↔ each planet ring (dashed, slowly flowing) */}
          <svg style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', pointerEvents: 'none', zIndex: 1 }}>
            <defs>
              <radialGradient id="connFade" cx="50%" cy="50%" r="50%">
                <stop offset="0%" stopColor="var(--wf-accent)" stopOpacity="0.45" />
                <stop offset="100%" stopColor="var(--wf-accent)" stopOpacity="0" />
              </radialGradient>
            </defs>
            {/* Three radial strokes from center out to each orbit radius */}
            {[
            { r: 90, angle: -90 },
            { r: 160, angle: 35 },
            { r: 230, angle: 170 }].
            map((p, i) => {
              const cx = '50%',cy = '50%';
              const rad = p.angle * Math.PI / 180;
              return (
                <line key={i}
                x1="50%" y1="50%"
                x2={`calc(50% + ${Math.cos(rad) * p.r}px)`}
                y2={`calc(50% + ${Math.sin(rad) * p.r}px)`}
                stroke="var(--wf-accent)" strokeOpacity="0.25"
                strokeWidth="0.8" strokeDasharray="2 5"
                style={{ animation: `wfConnDash ${8 + i * 3}s linear infinite` }} />);

            })}
          </svg>

          {/* Orbit rings — absolutely positioned and centered so they match
                                                                                                                                                                                                                                                                                                                                                                                                                         the planet orbit geometry exactly (no viewBox scaling mismatch) */}
          {[90, 160, 230].map((r, i) =>
          <div key={i} style={{
            position: 'absolute', left: '50%', top: '50%',
            width: r * 2, height: r * 2,
            transform: 'translate(-50%,-50%)',
            borderRadius: '50%',
            border: '1px dashed var(--wf-line-soft)',
            opacity: 0.55
          }} />
          )}

          {/* SUN — Pulse (circular, translucent, breathing gravity halo) */}
          <div style={{
            position: 'absolute', left: '50%', top: '50%',
            transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 3
          }}>
            {/* Outer gravity halo — animates scale+opacity so moons appear pulled */}
            <div style={{
              position: 'absolute', left: '50%', top: 46,
              width: 180, height: 180, borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(110,19,32,0.35) 0%, rgba(110,19,32,0.08) 40%, transparent 70%)',
              filter: 'blur(10px)',
              animation: 'wfSunBreathe 4.2s ease-in-out infinite',
              pointerEvents: 'none'
            }} />
            {/* Sun body — translucent with inner glow */}
            <div style={{
              position: 'relative', zIndex: 2,
              width: 92, height: 92, borderRadius: '50%',
              background: 'radial-gradient(circle at 30% 30%, rgba(178,53,72,0.85) 0%, rgba(110,19,32,0.75) 50%, rgba(74,12,23,0.55) 100%)',
              backdropFilter: 'blur(6px)',
              WebkitBackdropFilter: 'blur(6px)',
              display: 'grid', placeItems: 'center', margin: '0 auto',
              boxShadow: '0 0 0 6px rgba(110,19,32,0.08), 0 0 40px rgba(110,19,32,0.55), inset 0 0 24px rgba(255,255,255,0.12)',
              border: '1px solid rgba(255,255,255,0.18)'
            }}>
              <PulseLogo size={44} tile="bare" accent="#fff" />
            </div>
            <div style={{ marginTop: 10, fontSize: 12, fontWeight: 600, position: 'relative', zIndex: 2 }}>Pulse AI</div>
            <div style={{ fontSize: 10.5, color: 'var(--wf-ink-3)', position: 'relative', zIndex: 2 }}>One source of truth</div>
          </div>

          {/* Planets + their moons (each moon on its OWN orbit radius) */}
          {[
          {
            type: 'owner', label: 'OWNER',
            radius: 90, dur: 46, startAngle: -90,
            moons: [
            { label: 'Budgets', icon: 'budget', r: 34, dur: 11, angle: 0 },
            { label: 'Emails', icon: 'email', r: 52, dur: 17, angle: 130 },
            { label: 'Calls', icon: 'call', r: 42, dur: 13, angle: 240 }]

          },
          {
            type: 'consultant', label: 'CONSULTANT',
            radius: 160, dur: 68, startAngle: 35,
            moons: [
            { label: 'Drawings', icon: 'drawing', r: 38, dur: 14, angle: 40 },
            { label: 'RFIs', icon: 'rfi', r: 56, dur: 19, angle: 160 },
            { label: 'Specs', icon: 'specs', r: 46, dur: 16, angle: 280 }]

          },
          {
            type: 'contractor', label: 'CONTRACTOR',
            radius: 230, dur: 92, startAngle: 170,
            moons: [
            { label: 'BoQ', icon: 'boq', r: 40, dur: 15, angle: 20 },
            { label: 'Whatsapp', icon: 'chat', r: 58, dur: 21, angle: 110 },
            { label: 'Sheets', icon: 'sheet', r: 48, dur: 17, angle: 200 },
            { label: 'Minutes', icon: 'minutes', r: 64, dur: 24, angle: 300 }]

          }].
          map((p, i) =>
          <div key={i} className="wf-planet-orbit"
          style={{ '--dur': `${p.dur}s`, transform: `translate(-50%,-50%) rotate(${p.startAngle}deg)` }}>
              {/* Place the planet at (radius, 0) on this rotating frame */}
              <div className="wf-planet" style={{ '--dur': `${p.dur}s`, left: p.radius, top: 0 }}>
                {/* planet body */}
                <div style={{ position: 'absolute', left: 0, top: 0, transform: 'translate(-50%,-50%)', textAlign: 'center', zIndex: 2 }}>
                  <div style={{ position: 'relative', display: 'inline-block' }}>
                    <div style={{ position: 'absolute', inset: -4, borderRadius: '50%', background: 'var(--wf-paper)' }} />
                    <div style={{ position: 'relative' }}>
                      <RoleIcon kind={p.type} size={52} />
                    </div>
                  </div>
                  <div className="wf-eyebrow" style={{ marginTop: 6, background: 'var(--wf-paper)', padding: '0 4px', fontSize: 9.5 }}>{p.label}</div>
                </div>

                {/* moons — each on its own radius ring, different durations/phases */}
                {p.moons.map((m, j) =>
              <React.Fragment key={j}>
                    {/* faint per-moon orbit ring */}
                    <div style={{
                  position: 'absolute', left: 0, top: 0,
                  width: m.r * 2, height: m.r * 2,
                  transform: 'translate(-50%,-50%)',
                  borderRadius: '50%',
                  border: '1px dashed var(--wf-line-softer)',
                  opacity: 0.45
                }} />
                    <div className="wf-moon-orbit"
                style={{ '--mdur': `${m.dur}s`, transform: `rotate(${m.angle}deg)` }}>
                      <div className="wf-moon" style={{ '--mdur': `${m.dur}s`, left: m.r, top: 0, transform: 'translate(-50%,-50%)' }}>
                        <MoonIcon kind={m.icon} label={m.label} />
                      </div>
                    </div>
                  </React.Fragment>
              )}
              </div>
            </div>
          )}

          <Annot style={{ top: 20, right: 20 }} arrow="right">solar system · parties orbit Pulse · each moon has its own orbit</Annot>
          <Annot style={{ bottom: 20, left: 20 }} arrow="right">thin fade lines connect each party to Pulse · sun glows + pulls</Annot>
        </div>
      </section>

      {/* LOGO TICKER */}
      <section style={{ padding: '0 80px 40px' }}>
        <div className="wf-body" style={{ textAlign: 'center', fontSize: 12, color: 'var(--wf-ink-3)', marginBottom: 20 }}>
          Trusted on major developments across GCC, UK, and APAC
        </div>
        <div className="wf-ticker" style={{ justifyContent: 'center', flexWrap: 'wrap' }}>
          {['ALDAR', 'EMAAR', 'MERAAS', 'ARUP', 'MACE', 'ATKINS', 'BECHTEL'].map((l, i) =>
          <div key={i} style={{ fontFamily: 'var(--wf-font-mono)', fontSize: 14, letterSpacing: '0.1em' }}>{l}</div>
          )}
        </div>
      </section>

      <div className="wf-divider" style={{ margin: '0 80px' }} />

      {/* PROBLEM */}
      <section style={{ padding: '80px 80px', position: 'relative' }}>
        <div className="wf-eyebrow">The Problem</div>
        <h2 className="wf-h2" style={{ maxWidth: 800, marginTop: 10 }}>
          Every stakeholder works from a different version of the truth.
        </h2>
        <div className="wf-body wf-muted" style={{ maxWidth: 640, marginTop: 14 }}>
          Drawings in one drive. Decisions in an inbox. Tasks in a spreadsheet. Risks in a
          slide deck. Multiplied across 3 companies — chaos is inevitable.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 40 }}>
          {[
          { t: 'Fragmented Reality', d: 'Each company maintains its own files, statuses, and numbers.' },
          { t: 'Invisible Risk', d: 'Critical decisions get buried in emails and meeting notes.' },
          { t: 'Costly Rework', d: 'By the time misalignment surfaces, budget and schedule are gone.' }].
          map((c, i) =>
          <div key={i} className="wf-card" style={{ padding: 24, minHeight: 180 }}>
              <div style={{ width: 36, height: 36, border: '1.25px solid var(--wf-line)', borderRadius: 6, marginBottom: 14, display: 'grid', placeItems: 'center', fontFamily: 'var(--wf-font-mono)', fontSize: 14 }}>{i + 1}</div>
              <div className="wf-h3">{c.t}</div>
              <div className="wf-body wf-muted" style={{ marginTop: 8 }}>{c.d}</div>
            </div>
          )}
        </div>
        <Annot style={{ top: 40, right: 80 }} arrow="right">3-up problem grid</Annot>
      </section>

      {/* TRUSTED BY — rotating UAE developer strip */}
      <section style={{ position: 'relative' }}>
        <ClientStrip />
        <Annot style={{ top: -8, right: 80 }} arrow="right">marquee · pauses on hover · UAE developer logos</Annot>
      </section>

      {/* FUTURE / TODAY — moved to Landing B */}

      <div className="wf-divider" style={{ margin: '0 80px' }} />

      {/* HOW IT WORKS */}
      <section style={{ padding: '80px 80px' }}>
        <div className="wf-eyebrow">How it works</div>
        <h2 className="wf-h2" style={{ marginTop: 10, maxWidth: 700 }}>Fragmented information, reconciled into one reality.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 18, marginTop: 40 }}>
          {[
          { n: '01', t: 'Connect', d: 'Link drives, trackers, inboxes, and models. No migration required.' },
          { n: '02', t: 'Reconcile', d: 'Pulse maps every document, decision, and task to the project graph.' },
          { n: '03', t: 'Intelligence', d: 'AI flags risk, escalates blockers, and surfaces what matters now.' },
          { n: '04', t: 'Align', d: 'Every stakeholder sees their view of a single shared truth.' }].
          map((s, i) =>
          <div key={i}>
              <div className="wf-eyebrow" style={{ color: 'var(--wf-ink-3)' }}>{s.n}</div>
              <div className="wf-h3" style={{ marginTop: 8 }}>{s.t}</div>
              <div className="wf-body wf-muted" style={{ marginTop: 8 }}>{s.d}</div>
            </div>
          )}
        </div>
      </section>

      <div className="wf-divider" style={{ margin: '0 80px' }} />

      {/* INTEGRATIONS — moved to Landing B */}

      {/* CTA */}
      <section style={{ padding: '80px 80px' }}>
        <div className="wf-card wf-fill" style={{ padding: 60, textAlign: 'center', borderColor: 'var(--wf-ink)' }}>
          <h2 className="wf-h2" style={{ color: '#fff' }}>See your project in one place.</h2>
          <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: 14, marginTop: 14, maxWidth: 480, margin: '14px auto 0' }}>
            Book a 30-minute walkthrough with your project data.
          </div>
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center', marginTop: 24 }}>
            <div className="wf-btn accent">Request Demo →</div>
            <div className="wf-btn ghost" style={{ borderColor: '#fff', color: '#fff' }}>Contact Sales</div>
          </div>
        </div>
      </section>

      {/* FOOTER — dark closer */}
      <footer style={{ position: 'relative', overflow: 'hidden', padding: '60px 80px 70px', background: 'var(--wf-ink)', color: '#fff', display: 'grid', gridTemplateColumns: '1.3fr repeat(3,1fr) 1.1fr', gap: 30, fontSize: 12 }}>
        {/* ECG pulse trace running across the footer */}
        <svg width="100%" height="60" viewBox="0 0 2400 60" preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, right: 0, bottom: 24, height: 60, pointerEvents: 'none', zIndex: 0, opacity: 0.55 }}>
          <path d="M 0 30 L 200 30 L 220 30 L 230 22 L 240 50 L 250 5 L 260 40 L 268 30 L 480 30 L 500 30 L 510 22 L 520 50 L 530 5 L 540 40 L 548 30 L 760 30 L 780 30 L 790 22 L 800 50 L 810 5 L 820 40 L 828 30 L 1040 30 L 1060 30 L 1070 22 L 1080 50 L 1090 5 L 1100 40 L 1108 30 L 1320 30 L 1340 30 L 1350 22 L 1360 50 L 1370 5 L 1380 40 L 1388 30 L 1600 30 L 1620 30 L 1630 22 L 1640 50 L 1650 5 L 1660 40 L 1668 30 L 1880 30 L 1900 30 L 1910 22 L 1920 50 L 1930 5 L 1940 40 L 1948 30 L 2160 30 L 2400 30" fill="none" stroke="var(--wf-accent, #C0392B)" strokeWidth="1.25" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div>
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: '#fff' }}><PulseLogo accent="#fff" /> Pulse AI</div>
          <div style={{ marginTop: 10, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)' }}>The operational truth layer for construction.</div>
          <div style={{ marginTop: 22, color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>© 2026 Pulse AI · All rights reserved</div>
        </div>
        {/* credit — positioned bottom-left, below the pulse trace */}
        <div style={{ position: 'absolute', left: 80, bottom: 16, color: '#fff', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em', zIndex: 2 }}>Designed and Built By: Ghaeth M Mousto</div>
        {[
        ['Platform', ['Overview', 'Owner', 'Consultant', 'Contractor']],
        ['Resources', ['Docs', 'Changelog', 'Case studies', 'Security']],
        ['Company', ['About', 'Careers', 'Press', 'Legal']]].
        map(([h, items], i) =>
        <div key={i}>
            <div style={{ fontWeight: 600, marginBottom: 10, color: '#fff' }}>{h}</div>
            {items.map((l, j) => <div key={j} style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>{l}</div>)}
          </div>
        )}
        <div>
          <div style={{ fontWeight: 600, marginBottom: 10, color: '#fff' }}>Contact</div>
          <div style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>demo@pulse-ai.com</div>
          <div style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>+971 50 381 6979</div>
          <div style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>Dubai · Abu Dhabi · Riyadh</div>
        </div>
      </footer>

      <FloatingAICompanion bottom={28} right={28} />
    </div>);

}

// ── Variation B: Conventional — centered hero, stacked sections ─────────────
// Vertical pulse trace — vertical mirror of Landing D's ECG pattern.
// Repeating heartbeat segment tiled top-to-bottom, spanning the full page.
// Base line is faint, a bright "head" sweeps along it continuously.
function VerticalPulseTrace() {
  // Vertical beat: each 'l dx dy' is a vertical stroke (dy positive = down)
  // with horizontal excursions. Mirrors LandingD's `beat` but rotated 90°.
  const beat = 'l 0 28 l -6 6 l 40 10 l -70 10 l 34 10 l 0 8 l -6 6 l 12 8 l -8 10';
  // One long path top-to-bottom: flat lead-in, beat, flat, beat, ... × 9
  const segments = ['M 80 0', 'l 0 120'];
  for (let i = 0; i < 9; i++) {
    segments.push(beat);
    segments.push('l 0 160');
  }
  const d = segments.join(' ');
  return (
    <div style={{
      position: 'absolute', inset: 0,
      pointerEvents: 'none', zIndex: 0, opacity: 0.9
    }}>
      <style>{`
        @keyframes wfPulseSweepV {
          0%   { stroke-dashoffset: 3000; }
          100% { stroke-dashoffset: 0; }
        }
        @keyframes wfPulseFadeV {
          0%, 100% { opacity: 0.15; }
          50%      { opacity: 0.28; }
        }
        .wf-pulse-trace-svg { position: absolute; inset: 0; width: 100%; height: 100%; }
        .wf-pulse-base-v { stroke: var(--wf-accent); opacity: 0.18; animation: wfPulseFadeV 4s ease-in-out infinite; }
        .wf-pulse-head-v {
          stroke: var(--wf-accent);
          stroke-dasharray: 320 3000;
          animation: wfPulseSweepV 5s linear infinite;
          filter: drop-shadow(0 0 8px var(--wf-accent)) drop-shadow(0 0 16px var(--wf-accent));
        }
      `}</style>
      <svg className="wf-pulse-trace-svg" viewBox="0 0 160 3000" preserveAspectRatio="none"
      style={{ left: '50%', width: 160, transform: 'translateX(-50%)', height: '100%' }}>
        <path d={d} className="wf-pulse-base-v" fill="none" strokeWidth="1.2"
        strokeLinecap="round" strokeLinejoin="round" />
        <path d={d} className="wf-pulse-head-v" fill="none" strokeWidth="1.8"
        strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>);

}

function LandingB() {
  return (
    <div className="wf-page" style={{ width: 1280, position: 'relative', overflow: 'hidden' }}>
      {/* pulse line runs the full page top → bottom */}
      <VerticalPulseTrace />
      <NavBar />
      {/* HERO centered */}
      <section style={{ display: 'grid', gridTemplateColumns: '1.05fr 1fr', gap: 60, alignItems: 'center', position: 'relative', padding: "50px 80px 30px" }}>
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="wf-chip" style={{ marginBottom: 24 }}>
          <span className="wf-dot accent" /> <span>Built for construction teams</span>
        </div>
        <h1 className="wf-h1" style={{ lineHeight: "1.3" }}>
          One project.<br />
          Three stakeholders.<br />
          <span className="wf-accent-ink">One trusted truth.</span>
        </h1>
        <div className="wf-body" style={{ marginTop: 22, maxWidth: 480 }}>
          Pulse AI connects Owners, Consultants, and Contractors around a single
          source of project truth — documents, decisions, tasks, risks, and AI
          insights in one operational layer.
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
          <div className="wf-btn accent" style={{ borderWidth: "0.8px", gap: "8px", padding: "11px 18px", textAlign: "center" }}>Request Demo →</div>
          <div className="wf-btn ghost">See Platform</div>
        </div>
        <div style={{ display: 'flex', gap: 18, marginTop: 40, color: 'var(--wf-ink-3)', fontSize: 12, alignItems: 'center' }}>
          <span>◆ SOC 2</span><span>◆ ISO 27001</span><span>◆ Built for Gulf megaprojects</span>
        </div>
        <Annot style={{ top: -18, left: 340 }} arrow="right">headline carries the one-truth thesis</Annot>
        </div>
        <div style={{ position: 'relative', height: 560, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <SolarSystemDiagram />
          <Annot style={{ top: -10, right: 0 }} arrow="right">solar system · parties orbit Pulse · each moon has its own orbit</Annot>
        </div>
      </section>

      {/* PROBLEM section — moved out of hero */}
      <section style={{ position: 'relative', padding: "30px 80px 60px" }}>
        <div style={{ textAlign: 'left' }}>
          <div className="wf-eyebrow">The Problem</div>
          <h2 className="wf-h2" style={{ maxWidth: 800, marginTop: 10, letterSpacing: "-0.68px", lineHeight: "1.3", padding: "0px", margin: "10px 0px 28.22px" }}>
            Every stakeholder works from a different version of the truth.
          </h2>
          <div className="wf-body wf-muted" style={{ maxWidth: 640, marginTop: 14 }}>
            Drawings in one drive. Decisions in an inbox. Tasks in a spreadsheet. Risks in a
            slide deck. Multiplied across 3 companies — chaos is inevitable.
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20, marginTop: 40 }}>
            {[
            { t: 'Fragmented Reality', d: 'Each company maintains its own files, statuses, and numbers.' },
            { t: 'Invisible Risk', d: 'Critical decisions get buried in emails and meeting notes.' },
            { t: 'Costly Rework', d: 'By the time misalignment surfaces, budget and schedule are gone.' }].
            map((c, i) =>
            <div key={i} className="wf-card" style={{ padding: 24, minHeight: 180, opacity: "0.95" }}>
                <div style={{ width: 36, height: 36, border: '1.25px solid var(--wf-line)', borderRadius: 6, marginBottom: 14, display: 'grid', placeItems: 'center', fontFamily: 'var(--wf-font-mono)', fontSize: 14 }}>{i + 1}</div>
                <div className="wf-h3">{c.t}</div>
                <div className="wf-body wf-muted" style={{ marginTop: 8 }}>{c.d}</div>
              </div>
            )}
          </div>
        </div>

        {/* TRUSTED BY — rotating UAE developer strip */}
        <div style={{ margin: '60px -80px 0' }}>
          <ClientStrip />
        </div>
      </section>

      {/* PERSONA SPLIT — moved here, sits above The Economics */}
      <section style={{ padding: "30px 80px 40px" }}>
        <div style={{ textAlign: 'center', marginBottom: 50 }}>
          <div className="wf-eyebrow">For every role on the project</div>
          <h2 className="wf-h2" style={{ marginTop: 10 }}>Three perspectives. One reality.</h2>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 20 }}>
          {[
          { t: 'Owner', icon: 'owner', lines: ['Executive dashboards', 'Budget & schedule visibility', 'Board-ready reporting', 'Decision tracking'] },
          { t: 'Consultant', icon: 'consultant', lines: ['RFIs & submittals', 'Multi-discipline review', 'Compliance & QA', 'Design coordination'] },
          { t: 'Contractor', icon: 'contractor', lines: ['Daily task execution', 'Field updates', 'Blockers & dependencies', 'Delivery tracking'] }].
          map((p, i) =>
          <TiltCard key={i} max={7} lift={8} style={{ borderRadius: 'var(--wf-radius)' }}>
              <div className="wf-card" style={{ padding: 28, minHeight: 340 }}>
                <PersonaGlyph type={p.icon} size={56} accent />
                <div className="wf-h3" style={{ marginTop: 18 }}>{p.t}</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginTop: 14 }}>
                  {p.lines.map((l, j) =>
                <div key={j} style={{ fontSize: 12.5, color: 'var(--wf-ink-2)', display: 'flex', gap: 8, alignItems: 'center' }}>
                      <span className="wf-dot" style={{ width: 5, height: 5, background: 'var(--wf-ink-3)' }} /> {l}
                    </div>
                )}
                </div>
                <div style={{ marginTop: 22, fontSize: 12, fontWeight: 600, color: 'var(--wf-ink)' }}>Enter {p.t} Portal →</div>
              </div>
            </TiltCard>
          )}
        </div>
        <Annot style={{ bottom: 20, right: 80 }}>cards tilt 3D on hover · cursor-tracked sheen</Annot>
      </section>

      {/* THE ECONOMICS — light moment (matches other light sections) */}
      <section style={{ color: 'var(--wf-ink)', textAlign: 'center', position: 'relative', height: "650px", padding: "60px 80px 100px" }}>
        <div className="wf-eyebrow">◆ The Economics</div>
        <h2 style={{ fontSize: 56, lineHeight: 1.08, fontWeight: 600, letterSpacing: '-0.025em', color: 'var(--wf-ink)', margin: '14px auto 0', maxWidth: 900 }}>
          Construction delays cost <span className="wf-accent-ink" style={{ color: 'var(--wf-accent)' }}>real money.</span><br />
          Pulse AI saves it.
        </h2>
        <div style={{ maxWidth: 640, color: 'var(--wf-ink-3)', fontSize: 15, lineHeight: 1.55, margin: "20px 240px 0px" }}>
          Average delay cost on a large UAE construction project is AED 150,000 per day.
          A typical 70-day delay translates to AED 10M+ in lost value. Pulse AI cuts that by 30%.
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 16, marginTop: 56, maxWidth: 1120, marginLeft: 'auto', marginRight: 'auto', margin: "80px 0px 0px" }}>
          {[
          { numeric: 150, prefix: 'AED ', suffix: 'K', label: 'Average delay cost', foot: 'per day on large projects' },
          { numeric: 70, prefix: '', suffix: ' days', label: 'Typical project delay', foot: 'without operational truth' },
          { numeric: 30, prefix: '', suffix: '%', label: 'Reduction with Pulse AI', foot: 'through faster decisions' },
          { numeric: 3.15, prefix: 'AED ', suffix: 'M', label: 'Saved per project', foot: 'over the project lifecycle', decimals: 2 }].
          map((s, i) =>
          <div key={i} className="wf-card" style={{
            padding: '32px 24px', textAlign: "center"
          }}>
              <div style={{ fontSize: 40, fontWeight: 600, fontFamily: 'var(--wf-font-mono)', color: 'var(--wf-accent)', letterSpacing: '-0.02em' }}>
                <CountUp numeric={s.numeric} prefix={s.prefix} suffix={s.suffix} decimals={s.decimals || 0} duration={1600} />
              </div>
              <div style={{ fontSize: 13, fontWeight: 600, marginTop: 14, color: 'var(--wf-ink)' }}>{s.label}</div>
              <div style={{ fontSize: 12, color: 'var(--wf-ink-3)', marginTop: 4 }}>{s.foot}</div>
            </div>
          )}
        </div>
        <Annot style={{ top: 40, right: 100 }} arrow="right">economics moment · accent numerals on light</Annot>
      </section>

      {/* TRUSTED BY — moved up; this block intentionally removed */}

      {/* PRODUCT PREVIEW (moved from Variation A) */}
      <section style={{ height: "741.44px", position: 'relative', padding: "40px 80px 80px" }}>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <div className="wf-eyebrow">The Platform</div>
          <h2 className="wf-h2" style={{ marginTop: 10 }}>One operational space. All project intelligence.</h2>
        </div>
        <div className="wf-card" style={{ padding: 0, overflow: 'hidden' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr 280px', minHeight: 480 }}>
            {/* sidebar */}
            <div style={{ borderRight: '1px solid var(--wf-line-softer)', padding: 20, opacity: "0.9" }}>
              <div style={{ display: 'flex', gap: 8, alignItems: 'center', marginBottom: 24 }}>
                <PulseLogo size={18} />
                <span style={{ fontSize: 13, fontWeight: 600 }}>Pulse</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 4, fontSize: 12, color: 'var(--wf-ink-2)' }}>
                {['Overview', 'Documents', 'Decisions', 'Tasks', 'Risks', 'Submittals', 'Timeline', 'Intelligence'].map((l, i) =>
                <div key={i} style={{ padding: '8px 10px', borderRadius: 6, background: i === 0 ? 'var(--wf-paper-2)' : 'transparent', fontWeight: i === 0 ? 600 : 400 }}>{l}</div>
                )}
              </div>
            </div>
            {/* main */}
            <div style={{ padding: 24, opacity: "0.95" }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                <div>
                  <div className="wf-eyebrow">Project · Marina Tower Phase 2</div>
                  <div className="wf-h3" style={{ marginTop: 6 }}>Overview</div>
                </div>
                <div style={{ display: 'flex', gap: 8 }}>
                  <div className="wf-chip"><span className="wf-dot accent" /> Live</div>
                  <div className="wf-chip">14 members</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 12, marginBottom: 20 }}>
                {[
                { label: 'Budget', numeric: 847, prefix: '', suffix: 'M', foot: 'AED' },
                { label: 'Schedule', numeric: 2, prefix: '+', suffix: 'd', foot: 'variance' },
                { label: 'RFIs', numeric: 12, prefix: '', suffix: '', foot: 'open' },
                { label: 'Risks', numeric: 4, prefix: '', suffix: '', foot: 'high' }].
                map((k, i) =>
                <div key={i} className="wf-soft" style={{ padding: 14, textAlign: 'center' }}>
                    <div className="wf-eyebrow">{k.label}</div>
                    <div style={{ fontSize: 22, fontWeight: 600, marginTop: 6, fontFamily: 'var(--wf-font-mono)' }}>
                      <CountUp numeric={k.numeric} prefix={k.prefix} suffix={k.suffix} duration={1400} />
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--wf-ink-3)' }}>{k.foot}</div>
                  </div>
                )}
              </div>
              {/* Floating activity cards — what's happening on the project right now */}
              <div style={{ position: 'relative', height: 320, borderRadius: 'var(--wf-radius-sm)', background: 'var(--wf-paper)', border: '1px solid var(--wf-line-softer)', padding: '14px 18px 12px', overflow: 'hidden' }}>
                <style>{`
                  @keyframes wfFloatA { 0%,100% { transform: translateY(0) rotate(-1.4deg); } 50% { transform: translateY(-6px) rotate(-0.8deg); } }
                  @keyframes wfFloatB { 0%,100% { transform: translateY(0) rotate(1.1deg); } 50% { transform: translateY(-7px) rotate(1.6deg); } }
                  @keyframes wfFloatC { 0%,100% { transform: translateY(0) rotate(-0.6deg); } 50% { transform: translateY(-5px) rotate(-1deg); } }
                  @keyframes wfFloatD { 0%,100% { transform: translateY(0) rotate(2deg); } 50% { transform: translateY(-8px) rotate(2.6deg); } }
                  @keyframes wfFloatE { 0%,100% { transform: translateY(0) rotate(-2.2deg); } 50% { transform: translateY(-4px) rotate(-1.6deg); } }
                  @keyframes wfFloatF { 0%,100% { transform: translateY(0) rotate(0.8deg); } 50% { transform: translateY(-6px) rotate(1.2deg); } }
                  @keyframes wfPulseDotSoft { 0%,100% { opacity: .9; transform: scale(1); } 50% { opacity: .55; transform: scale(1.25); } }
                  .wf-fcard { position: absolute; background: #fff; border: 1px solid var(--wf-line-soft); border-radius: 8px; padding: 10px 12px; box-shadow: 0 8px 22px -10px rgba(28,24,21,0.18), 0 2px 6px -2px rgba(28,24,21,0.08); font-size: 11.5px; line-height: 1.45; color: var(--wf-ink); will-change: transform; }
                  .wf-fcard .lbl { font-family: var(--wf-font-mono); font-size: 9.5px; letter-spacing: 0.08em; text-transform: uppercase; color: var(--wf-ink-3); margin-bottom: 4px; display: flex; align-items: center; gap: 6px; }
                  .wf-fcard .body { font-weight: 500; }
                  .wf-fcard .meta { font-family: var(--wf-font-mono); font-size: 9.5px; color: var(--wf-ink-3); margin-top: 4px; }
                  .wf-fcard.accent { border-color: var(--wf-accent); }
                  .wf-fcard.accent .lbl { color: var(--wf-accent); }
                `}</style>
                <div className="wf-eyebrow" style={{ position: 'absolute', top: 10, left: 18, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', zIndex: 2 }}>Live · One reconciled view</div>
                <div className="wf-eyebrow" style={{ position: 'absolute', top: 10, right: 18, color: 'var(--wf-ink-3)', fontFamily: 'var(--wf-font-mono)', zIndex: 2, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <span style={{ width: 6, height: 6, borderRadius: 999, background: 'var(--wf-accent)', display: 'inline-block', animation: 'wfPulseDotSoft 1.6s ease-in-out infinite' }} />
                  streaming
                </div>

                {/* Floating cards scattered across the canvas */}
                <div className="wf-fcard accent" style={{ left: 24, top: 50, width: 220, animation: 'wfFloatA 5.2s ease-in-out infinite' }}>
                  <div className="lbl">◆ RFI · open</div>
                  <div className="body">RFI-124 — slab edge detail clarification</div>
                  <div className="meta">blocks 3 tasks · L4 east</div>
                </div>

                <div className="wf-fcard" style={{ left: 264, top: 38, width: 200, animation: 'wfFloatB 5.8s ease-in-out infinite' }}>
                  <div className="lbl">● Submittal · approved</div>
                  <div className="body">SB-88 cladding panels</div>
                  <div className="meta">procurement unblocked</div>
                </div>

                <div className="wf-fcard" style={{ left: 506, top: 56, width: 210, animation: 'wfFloatC 6.4s ease-in-out infinite' }}>
                  <div className="lbl">▲ Schedule · variance</div>
                  <div className="body">MEP rough-in slipping +2d on L7</div>
                  <div className="meta">3 mitigations suggested</div>
                </div>

                <div className="wf-fcard" style={{ left: 758, top: 42, width: 200, animation: 'wfFloatD 5.4s ease-in-out infinite' }}>
                  <div className="lbl">■ Cost · forecast</div>
                  <div className="body">Steel package +1.4M AED vs baseline</div>
                  <div className="meta">change order CO-12 in review</div>
                </div>

                <div className="wf-fcard accent" style={{ left: 38, top: 188, width: 230, animation: 'wfFloatE 6.0s ease-in-out infinite' }}>
                  <div className="lbl">⚠ Risk · weather</div>
                  <div className="body">Wk-34 storm window — pour at risk</div>
                  <div className="meta">crane downtime estimate ~6h</div>
                </div>

                <div className="wf-fcard" style={{ left: 308, top: 196, width: 220, animation: 'wfFloatF 5.6s ease-in-out infinite' }}>
                  <div className="lbl">✎ Decision · recorded</div>
                  <div className="body">Façade vendor switch — Owner sign-off</div>
                  <div className="meta">trail · 6 docs linked</div>
                </div>

                <div className="wf-fcard" style={{ left: 568, top: 198, width: 180, animation: 'wfFloatA 6.6s ease-in-out infinite' }}>
                  <div className="lbl">◐ Daily report</div>
                  <div className="body">147 workers · 0 incidents</div>
                  <div className="meta">auto-compiled 18:02</div>
                </div>

                <div className="wf-fcard" style={{ left: 788, top: 198, width: 180, animation: 'wfFloatC 6.2s ease-in-out infinite' }}>
                  <div className="lbl">◇ Permit · cleared</div>
                  <div className="body">Civil defence — basement pour</div>
                  <div className="meta">DM ref 2026-04-22</div>
                </div>
              </div>
              <Annot style={{ top: 60, left: 24 }} arrow="down">numbers animate count-up from 0 on scroll</Annot>
            </div>
            {/* AI panel */}
            <div style={{ borderLeft: '1px solid var(--wf-line-softer)', padding: 20, background: 'var(--wf-paper)', opacity: "0.9" }}>
              <div className="wf-eyebrow">Pulse Intelligence</div>
              <div style={{ fontSize: 12, marginTop: 12, color: 'var(--wf-ink-2)', lineHeight: 1.5 }}>
                <div style={{ padding: 10, border: '1px dashed var(--wf-line-soft)', borderRadius: 6, marginBottom: 10 }}>
                  ⚠ RFI-124 blocks 3 downstream tasks. Escalate?
                </div>
                <div style={{ padding: 10, border: '1px dashed var(--wf-line-soft)', borderRadius: 6, marginBottom: 10 }}>
                  ◆ Submittal SB-88 approved — procurement can proceed.
                </div>
                <div style={{ padding: 10, border: '1px dashed var(--wf-line-soft)', borderRadius: 6 }}>
                  ● Risk: weather delay likely wk-34. 2 mitigations.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Annot style={{ bottom: 40, right: 100 }}>AI as a first-class panel, not a chatbot</Annot>
      </section>

      <div className="wf-divider" style={{ margin: '0 80px' }} />

      {/* INTEGRATIONS — moved up per note, sits right after the platform preview */}
      <section style={{ textAlign: 'center', padding: "70px 0px 80px" }}>
        <div className="wf-eyebrow">Integrations</div>
        <h2 className="wf-h2" style={{ marginTop: 10 }}>Works with the tools already on site.</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6,1fr)', gap: 12, marginTop: 40, maxWidth: 760, borderStyle: "solid", borderWidth: "0px", margin: "0px 180px 0px 230px" }}>
          <style>{`
            @keyframes wfIntegFloatIn {
              from { transform: translateY(0) scale(1); box-shadow: 0 0 0 rgba(0,0,0,0); }
              to   { transform: translateY(-3px) scale(1.03); box-shadow: 0 10px 24px -8px rgba(28,24,21,0.18), 0 2px 6px -2px rgba(28,24,21,0.10); }
            }
            .wf-integ-card {
              transition: transform 280ms cubic-bezier(.2,.8,.2,1), box-shadow 280ms cubic-bezier(.2,.8,.2,1), background 280ms ease;
              will-change: transform;
            }
            .wf-integ-card:hover {
              transform: translateY(-3px) scale(1.04);
              box-shadow: 0 12px 28px -10px rgba(28,24,21,0.22), 0 2px 8px -2px rgba(28,24,21,0.12);
              background: rgba(236,228,227,0.55) !important;
            }
          `}</style>
          {['Procore', 'Aconex', 'Autodesk', 'SAP', 'Primavera', 'Revit', 'SharePoint', 'Bluebeam', 'Slack', 'Teams', 'PowerBI', 'Outlook'].map((n, i) =>
          <div key={i} className="wf-soft wf-integ-card" style={{ padding: '16px 8px', fontSize: 11, fontFamily: 'var(--wf-font-mono)', margin: "0px", borderStyle: "double", fontWeight: "400", opacity: "0.95", borderColor: "rgb(0, 0, 0)", color: "rgb(0, 0, 0)", background: "rgba(236,228,227,0.72)", backdropFilter: "blur(10px) saturate(140%)", WebkitBackdropFilter: "blur(10px) saturate(140%)" }}>{n}</div>
          )}
        </div>
      </section>

      {/* Customer Stories — hover-expand horizontal scroll row */}
      <section style={{ padding: "35px 80px 85px" }}>
        <Annot style={{ top: 40, right: 80 }} arrow="down">hover a card to expand · arrows or drag to scroll horizontally</Annot>
        <HoverExpandStories />
      </section>

      {/* CTA — dark statement moment, moved from Landing A */}
      <section style={{ background: 'var(--wf-ink)', color: '#fff', textAlign: 'center', position: 'relative', height: "450px", padding: "80px 0px 0px" }}>
        <h2 style={{ lineHeight: 1.02, fontWeight: 600, color: '#fff', margin: 0, width: "1280px", letterSpacing: "0px", fontSize: "77px" }}>
          Built for the future.<br />Available today.
        </h2>
        <div style={{ display: 'flex', gap: 14, justifyContent: 'center', marginTop: 48, margin: "0px", padding: "50px 0px 0px", opacity: "1" }}>
          <div style={{ padding: '14px 28px', borderRadius: 999, background: '#fff', color: 'var(--wf-ink)', fontSize: 15, fontWeight: 600 }}>Get started</div>
          <div style={{ borderRadius: 999, background: '#6e1320', fontSize: 15, fontWeight: 600, color: "#fff", padding: "14px 28px", border: "0.8px solid #6e1320" }}>Contact expert</div>
        </div>
      </section>

      {/* FOOTER — dark closer (moved from Variation A) */}
      <footer style={{ position: 'relative', overflow: 'hidden', background: 'var(--wf-ink)', color: '#fff', display: 'grid', gridTemplateColumns: '1.3fr repeat(3,1fr) 1.1fr', gap: 30, fontSize: 12, height: "330px", padding: "40px 80px 30px", textAlign: "left" }}>
        {/* ECG pulse trace — animated sweep, raised above the © line */}
        <style>{`
          @keyframes wfFooterPulseSweepB {
            0%   { stroke-dashoffset: 2400; }
            100% { stroke-dashoffset: 0; }
          }
          @keyframes wfFooterPulseFadeB {
            0%, 100% { opacity: 0.22; }
            50%      { opacity: 0.42; }
          }
          .wf-footer-pulse-base-b {
            stroke: var(--wf-accent, #C0392B);
            opacity: 0.24;
            animation: wfFooterPulseFadeB 4s ease-in-out infinite;
          }
          .wf-footer-pulse-head-b {
            stroke: var(--wf-accent, #C0392B);
            stroke-dasharray: 280 2400;
            animation: wfFooterPulseSweepB 6s linear infinite;
            filter: drop-shadow(0 0 6px var(--wf-accent, #C0392B)) drop-shadow(0 0 14px var(--wf-accent, #C0392B));
          }
        `}</style>
        <svg width="100%" height="60" viewBox="0 0 2400 60" preserveAspectRatio="none"
        style={{ position: 'absolute', left: 0, right: 0, bottom: 80, height: 60, pointerEvents: 'none', zIndex: 0 }}>
          <path className="wf-footer-pulse-base-b" d="M 0 30 L 200 30 L 220 30 L 230 22 L 240 50 L 250 5 L 260 40 L 268 30 L 480 30 L 500 30 L 510 22 L 520 50 L 530 5 L 540 40 L 548 30 L 760 30 L 780 30 L 790 22 L 800 50 L 810 5 L 820 40 L 828 30 L 1040 30 L 1060 30 L 1070 22 L 1080 50 L 1090 5 L 1100 40 L 1108 30 L 1320 30 L 1340 30 L 1350 22 L 1360 50 L 1370 5 L 1380 40 L 1388 30 L 1600 30 L 1620 30 L 1630 22 L 1640 50 L 1650 5 L 1660 40 L 1668 30 L 1880 30 L 1900 30 L 1910 22 L 1920 50 L 1930 5 L 1940 40 L 1948 30 L 2160 30 L 2400 30" fill="none" strokeWidth="1.1" strokeLinecap="round" strokeLinejoin="round" />
          <path className="wf-footer-pulse-head-b" d="M 0 30 L 200 30 L 220 30 L 230 22 L 240 50 L 250 5 L 260 40 L 268 30 L 480 30 L 500 30 L 510 22 L 520 50 L 530 5 L 540 40 L 548 30 L 760 30 L 780 30 L 790 22 L 800 50 L 810 5 L 820 40 L 828 30 L 1040 30 L 1060 30 L 1070 22 L 1080 50 L 1090 5 L 1100 40 L 1108 30 L 1320 30 L 1340 30 L 1350 22 L 1360 50 L 1370 5 L 1380 40 L 1388 30 L 1600 30 L 1620 30 L 1630 22 L 1640 50 L 1650 5 L 1660 40 L 1668 30 L 1880 30 L 1900 30 L 1910 22 L 1920 50 L 1930 5 L 1940 40 L 1948 30 L 2160 30 L 2400 30" fill="none" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <div style={{ height: "200px" }}>
          <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 8, fontWeight: 600, color: '#fff' }}><PulseLogo accent="#fff" /> Pulse AI</div>
          <div style={{ marginTop: 10, lineHeight: 1.5, color: 'rgba(255,255,255,0.55)' }}>The operational truth layer for construction. Connecting Owners, Consultants, and Contractors around a single reliable reality.</div>
          <div style={{ display: 'none', color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>© 2026 Pulse AI · All rights reserved</div>
        </div>
        {/* credit — positioned bottom-left, below the pulse trace */}
        <div style={{ position: 'absolute', left: 80, bottom: 16, color: '#fff', fontSize: 11, fontWeight: 500, letterSpacing: '0.02em', zIndex: 2, padding: "0px 0px 20px" }}>Designed and Built By: Ghaeth M Mousto                                                                                                                                                                                                                           © 2026 Pulse AI. All rights reserved.</div>
        {[
        ['Platform', ['Overview', 'Owner', 'Consultant', 'Contractor']],
        ['Resources', ['Docs', 'Changelog', 'Case studies', 'Security']],
        ['Company', ['About', 'Careers', 'Press', 'Legal']]].
        map(([h, items], i) =>
        <div key={i} style={{ height: "200px", margin: "0px 0px 0px 40px" }}>
            <div style={{ fontWeight: 600, marginBottom: 10, color: '#fff' }}>{h}</div>
            {items.map((l, j) => <div key={j} style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>{l}</div>)}
          </div>
        )}
        <div style={{ height: "200px", margin: "0px" }}>
          <div style={{ fontWeight: 600, marginBottom: 10, color: '#fff' }}>Contact</div>
          <div style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>demo@pulse-ai.com</div>
          <div style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>+971 50 381 6979</div>
          <div style={{ padding: '3px 0', color: 'rgba(255,255,255,0.55)' }}>Dubai · Abu Dhabi · Riyadh</div>
        </div>
      </footer>

      <FloatingAICompanion variant="dark" bottom={28} right={28} />
    </div>);

}

Object.assign(window, { LandingA, LandingB });