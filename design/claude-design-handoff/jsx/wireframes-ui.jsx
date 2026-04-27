// Shared wireframe primitives for Pulse
// - Sketch / clean mode, annotations, accent color — all driven by CSS vars
//   set on document.documentElement. Keeps props tidy across 30+ artboards.

const wfCss = `
:root {
  --wf-ink: #17140f;
  --wf-ink-2: #3a342b;
  --wf-ink-3: #6b6459;
  --wf-ink-4: #a59e91;
  --wf-line: #1c1815;
  --wf-line-soft: rgba(28,24,21,0.22);
  --wf-line-softer: rgba(28,24,21,0.12);
  --wf-paper: #fafaf7;
  --wf-paper-2: #f2efe8;
  --wf-paper-3: #e8e4da;
  --wf-accent: #6e1320;
  --wf-accent-ink: #fff;
  --wf-accent-soft: #f3dfe2;
  --wf-note: #b89968;
  --wf-stroke-w: 1.25px;
  --wf-radius: 8px;
  --wf-radius-sm: 6px;
  --wf-font-ui: "Inter", ui-sans-serif, system-ui, -apple-system, sans-serif;
  --wf-font-hand: "Caveat", "Segoe Print", "Bradley Hand", cursive;
  --wf-font-mono: "JetBrains Mono", ui-monospace, Menlo, monospace;
}
/* sketch mode: slightly wobbly edges via filter + tilt on lines */
.wf-root { font-family: var(--wf-font-ui); color: var(--wf-ink); }
.wf-root.sketch .wf-box,
.wf-root.sketch .wf-line,
.wf-root.sketch .wf-chip,
.wf-root.sketch .wf-btn,
.wf-root.sketch .wf-pill,
.wf-root.sketch .wf-card,
.wf-root.sketch .wf-dot {
  filter: url(#wfRough);
}
.wf-root.sketch .wf-hand { font-family: var(--wf-font-hand); }
.wf-root.clean .wf-hand { font-family: var(--wf-font-ui); font-style: italic; color: var(--wf-ink-3); }

.wf-root .wf-box { border: var(--wf-stroke-w) solid var(--wf-line); border-radius: var(--wf-radius); background: var(--wf-paper); }
.wf-root .wf-card { border: var(--wf-stroke-w) solid var(--wf-line); border-radius: var(--wf-radius); background: #fff; }
.wf-root .wf-soft { border: var(--wf-stroke-w) dashed var(--wf-line-soft); border-radius: var(--wf-radius); background: transparent; }
.wf-root .wf-fill { background: var(--wf-ink); color: #fff; }
.wf-root .wf-accent-fill { background: var(--wf-accent); color: var(--wf-accent-ink); }
.wf-root .wf-accent-ink { color: var(--wf-accent); }
.wf-root .wf-accent-line { border-color: var(--wf-accent) !important; }
.wf-root .wf-accent-soft { background: var(--wf-accent-soft); color: var(--wf-accent); }
.wf-root .wf-chip { border: var(--wf-stroke-w) solid var(--wf-line); border-radius: 999px; padding: 3px 10px; font-size: 11px; display: inline-flex; align-items: center; gap: 6px; background: #fff; }
.wf-root .wf-pill { border: var(--wf-stroke-w) solid var(--wf-line); border-radius: 999px; padding: 8px 16px; font-size: 13px; background: #fff; display: inline-flex; align-items: center; gap: 8px; }
.wf-root .wf-btn { border-radius: 10px; padding: 11px 18px; font-size: 14px; font-weight: 500; font-family: "Inter", ui-sans-serif, system-ui, sans-serif; letter-spacing: -0.01em; display: inline-flex; align-items: center; gap: 8px; }
.wf-root .wf-btn.solid { background: var(--wf-ink); color: #fff; border: var(--wf-stroke-w) solid var(--wf-ink); }
.wf-root .wf-btn.ghost { background: transparent; color: var(--wf-ink); border: var(--wf-stroke-w) solid var(--wf-line); }
.wf-root .wf-btn.accent { background: var(--wf-accent); color: #fff; border: var(--wf-stroke-w) solid var(--wf-accent); }
.wf-root .wf-divider { height: 1px; background: var(--wf-line-softer); width: 100%; }
.wf-root .wf-hr { height: var(--wf-stroke-w); background: var(--wf-line); width: 100%; }

/* placeholder image/video box — faint hatched */
.wf-ph {
  background:
    repeating-linear-gradient(135deg, transparent 0 10px, rgba(28,24,21,0.07) 10px 11px),
    var(--wf-paper-2);
  border: var(--wf-stroke-w) solid var(--wf-line);
  border-radius: var(--wf-radius);
  display: flex; align-items: center; justify-content: center;
  font-family: var(--wf-font-mono); font-size: 10.5px; color: var(--wf-ink-3); text-align: center;
  letter-spacing: 0.02em;
}
.wf-ph.dashed { border-style: dashed; border-color: var(--wf-line-soft); color: var(--wf-ink-4); }
.wf-ph.fg { background:
    repeating-linear-gradient(135deg, transparent 0 10px, rgba(28,24,21,0.10) 10px 11px),
    var(--wf-paper-3);
}

/* annotation layer */
.wf-annot {
  position: absolute;
  font-family: var(--wf-font-hand);
  color: var(--wf-note);
  font-size: 15px;
  line-height: 1.15;
  pointer-events: none;
  z-index: 3;
  display: flex; align-items: flex-start; gap: 4px;
}
.wf-root.no-annot .wf-annot { display: none; }
.wf-annot svg { flex-shrink: 0; margin-top: 2px; color: var(--wf-note); }

/* big type wireframe heading */
.wf-h1 { font-size: 56px; line-height: 1.04; font-weight: 600; letter-spacing: -0.03em; color: var(--wf-ink); }
.wf-h2 { font-size: 34px; line-height: 1.08; font-weight: 600; letter-spacing: -0.02em; color: var(--wf-ink); }
.wf-h3 { font-size: 20px; line-height: 1.2; font-weight: 600; color: var(--wf-ink); }
.wf-eyebrow { font-size: 11px; letter-spacing: 0.14em; text-transform: uppercase; color: var(--wf-ink-3); font-weight: 500; }
.wf-body { font-size: 14px; line-height: 1.5; color: var(--wf-ink-2); }
.wf-muted { color: var(--wf-ink-3); }

/* scribble lines (placeholders for body paragraphs) */
.wf-root .wf-scrib { height: 9px; border-radius: 2px; background: rgba(28,24,21,0.14); }
.wf-root .wf-scrib.short { width: 60%; }
.wf-root .wf-scrib.xs { width: 30%; }

.wf-dot { width: 8px; height: 8px; border-radius: 50%; background: var(--wf-ink); display: inline-block; }
.wf-dot.accent { background: var(--wf-accent); }
.wf-dot.hollow { background: #fff; border: 1.5px solid var(--wf-ink); }

/* shared nav bar */
.wf-nav { display: flex; align-items: center; justify-content: space-between; padding: 14px 32px; border-bottom: var(--wf-stroke-w) solid var(--wf-line); background: var(--wf-paper); }
.wf-nav .links { display: flex; gap: 22px; font-size: 13px; color: var(--wf-ink-2); }
.wf-nav .brand { display: flex; align-items: center; gap: 8px; font-weight: 600; font-size: 14px; }

.wf-logo { width: 22px; height: 22px; border: var(--wf-stroke-w) solid var(--wf-line); border-radius: 5px; display: grid; place-items: center; background: var(--wf-paper); position: relative; }
.wf-logo::before { content: ''; width: 10px; height: 10px; border: 1.5px solid var(--wf-accent); border-radius: 50%; }
.wf-logo::after { content: ''; position: absolute; width: 10px; height: 1.5px; background: var(--wf-accent); }

/* Persona icons — three drawn glyphs: owner / consultant / contractor */
.wf-persona { width: 44px; height: 44px; border: var(--wf-stroke-w) solid var(--wf-line); border-radius: 50%; background: #fff; display: grid; place-items: center; }
.wf-persona.sm { width: 28px; height: 28px; }
.wf-persona.lg { width: 64px; height: 64px; }

/* the ASCII-ish connection between nodes */
.wf-link-dashed { stroke: var(--wf-line); stroke-width: 1.2; stroke-dasharray: 3 3; fill: none; }
.wf-link-solid { stroke: var(--wf-line); stroke-width: 1.2; fill: none; }

/* subtle page backdrop variant */
.wf-page { background: var(--wf-paper); color: var(--wf-ink); font-family: var(--wf-font-ui); position: relative; }

/* ticker row */
.wf-ticker { display: flex; gap: 48px; align-items: center; opacity: 0.65; }

/* table-like rows for dashboards */
.wf-row { display: grid; align-items: center; padding: 10px 14px; border-bottom: 1px solid var(--wf-line-softer); font-size: 12px; color: var(--wf-ink-2); }
.wf-row:last-child { border-bottom: 0; }
`;

if (typeof document !== 'undefined' && !document.getElementById('wf-styles')) {
  const s = document.createElement('style');
  s.id = 'wf-styles';
  s.textContent = wfCss;
  document.head.appendChild(s);
}

// SVG filter (used by sketch mode) — inject once
if (typeof document !== 'undefined' && !document.getElementById('wf-rough')) {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.id = 'wf-rough';
  svg.setAttribute('width', '0');svg.setAttribute('height', '0');
  svg.style.position = 'absolute';
  svg.innerHTML = `
    <defs>
      <filter id="wfRough">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3"/>
        <feDisplacementMap in="SourceGraphic" scale="1.2"/>
      </filter>
    </defs>
  `;
  document.body.appendChild(svg);
}

// ── Primitives ─────────────────────────────────────────────────────────────

const Placeholder = ({ label, style, className = '', fg = false, dashed = false }) =>
<div className={`wf-ph ${fg ? 'fg' : ''} ${dashed ? 'dashed' : ''} ${className}`} style={style}>
    {label}
  </div>;


const Scribble = ({ lines = 3, width = '100%', style }) =>
<div style={{ display: 'flex', flexDirection: 'column', gap: 7, width, ...style }}>
    {Array.from({ length: lines }).map((_, i) =>
  <div key={i} className={`wf-scrib ${i === lines - 1 ? 'short' : ''}`} />
  )}
  </div>;


const Annot = ({ children, style, arrow = 'left' }) =>
<div className="wf-annot" style={style}>
    {arrow === 'left' &&
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M15 14 Q 6 12, 3 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M3 4 l 4 1 M3 4 l 1 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
  }
    <span>{children}</span>
    {arrow === 'right' &&
  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
        <path d="M3 14 Q 12 12, 15 4" stroke="currentColor" strokeWidth="1.2" fill="none" strokeLinecap="round" />
        <path d="M15 4 l -4 1 M15 4 l -1 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
      </svg>
  }
  </div>;


// Persona glyph — abstract hand-drawn icons
const PersonaGlyph = ({ type, size = 44, accent = false }) => {
  const s = size;
  const color = accent ? 'var(--wf-accent)' : 'var(--wf-ink)';
  const common = { stroke: color, strokeWidth: 1.4, fill: 'none', strokeLinecap: 'round', strokeLinejoin: 'round' };
  const wrap = { width: s, height: s, border: '1.25px solid var(--wf-line)', borderRadius: '50%', background: '#fff', display: 'grid', placeItems: 'center' };
  if (type === 'owner') {
    return (
      <div style={wrap}>
        <svg width={s * 0.55} height={s * 0.55} viewBox="0 0 22 22">
          {/* crown / suit — owner */}
          <circle cx="11" cy="8" r="3.2" {...common} />
          <path d="M4 18c1.5-3.5 4-5 7-5s5.5 1.5 7 5" {...common} />
        </svg>
      </div>);

  }
  if (type === 'consultant') {
    return (
      <div style={wrap}>
        <svg width={s * 0.55} height={s * 0.55} viewBox="0 0 22 22">
          {/* compass — consultant */}
          <circle cx="11" cy="11" r="7" {...common} />
          <path d="M11 5 L13 11 L11 17 L9 11 Z" {...common} />
        </svg>
      </div>);

  }
  // contractor — hardhat
  return (
    <div style={wrap}>
      <svg width={s * 0.58} height={s * 0.58} viewBox="0 0 22 22">
        <path d="M3 15 h16 v2 H3z" {...common} />
        <path d="M5 15 C 5 9, 8 7, 11 7 C 14 7, 17 9, 17 15" {...common} />
        <path d="M11 4 v3" {...common} />
      </svg>
    </div>);

};

// Pulse AI mark — rounded tile + heartbeat line with two endpoint dots.
// Matches the delivered logo: two small circles flank a jagged pulse stroke.
const PulseLogo = ({ size = 22, accent = 'var(--wf-accent)', tile = 'fill' }) => {
  // tile: 'fill' = filled accent tile with white line
  //       'outline' = white tile, accent line
  //       'bare' = just the heartbeat mark (for when parent already provides a tile)
  const bare = tile === 'bare';
  const filled = tile === 'fill';
  const bg = filled ? accent : '#fff';
  const stroke = bare ? accent : filled ? '#fff' : accent;
  const border = filled ? accent : 'var(--wf-line)';
  return (
    <svg width={size} height={size} viewBox="0 0 40 40" style={{ display: 'block' }}>
      {!bare && <rect x="1.5" y="1.5" width="37" height="37" rx="9" fill={bg} stroke={border} strokeWidth="1.25" />}
      {/* heartbeat: left dot · flat · up · down spike · up · flat · right dot */}
      <circle cx="8.5" cy="20" r="2.1" fill={stroke} />
      <path
        d="M 8.5 20 L 13.5 20 L 16.5 14 L 20 27 L 23.5 14 L 26.5 20 L 31.5 20"
        fill="none"
        stroke={stroke}
        strokeWidth="2.1"
        strokeLinecap="round"
        strokeLinejoin="round" />
      
      <circle cx="31.5" cy="20" r="2.1" fill={stroke} />
    </svg>);

};

// ── NavBar ────────────────────────────────────────────────────────────────
// Glass sticky header with thin top band ("what's new" announcement), active
// section indicator, dropdown carets, command-k search affordance, and a
// clear primary CTA. Variant controls which link is active.
const NavBar = ({ variant = 'A', dark = false, active }) => {
  const items = [
  { label: 'Product', hasMenu: false, key: 'platform' },
  { label: 'Solutions', hasMenu: true, key: 'solutions' },
  { label: 'Resources', hasMenu: true, key: 'resources' },
  { label: 'Customers', hasMenu: false, key: 'customers' },
  { label: 'Add Project', hasMenu: false, key: 'pricing' }];

  const activeKey = active || (variant === 'A' ? 'platform' : variant === 'B' ? 'platform' : 'platform');
  const ink = dark ? '#fff' : 'var(--wf-ink)';
  const mutedInk = dark ? 'rgba(255,255,255,0.72)' : 'var(--wf-ink-2)';
  const subtleLine = dark ? 'rgba(255,255,255,0.14)' : 'var(--wf-line-softer)';
  const band = dark ? 'rgba(255,255,255,0.05)' : 'rgba(24,20,16,0.035)';

  return (
    <div style={{ position: 'relative', zIndex: 20 }}>
      {/* Main nav */}
      <div className="wf-nav" style={{ ...(dark ? { background: 'rgba(20,16,12,0.55)', color: '#fff', borderColor: 'rgba(255,255,255,0.12)', backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)' } : { background: 'rgba(250,248,245,0.55)', backdropFilter: 'blur(20px) saturate(160%)', WebkitBackdropFilter: 'blur(20px) saturate(160%)' }), padding: '14px 80px', borderColor: "rgba(23, 20, 15, 0.19)" }}>
        <div className="brand" style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <PulseLogo size={26} tile={dark ? 'outline' : 'fill'} accent={dark ? '#fff' : 'var(--wf-accent)'} />
          <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1 }}>
            <span style={{ color: ink, fontWeight: 600, fontSize: 15, letterSpacing: '-0.01em' }}>Pulse</span>
            <span style={{ color: mutedInk, fontSize: 9, fontFamily: 'var(--wf-font-mono)', letterSpacing: '0.14em', marginTop: 2 }}>PROJECT INTELLIGENCE</span>
          </div>
        </div>

        <div className="links" style={{ display: 'flex', gap: 4, alignItems: 'center', color: mutedInk }}>
          {items.map((it) => {
            const isActive = it.key === activeKey;
            return (
              <span key={it.key} style={{
                position: 'relative',
                display: 'inline-flex', alignItems: 'center', gap: 4,
                padding: '8px 12px',
                fontSize: 13.5,
                fontWeight: isActive ? 600 : 500,
                color: isActive ? ink : mutedInk,
                cursor: 'pointer',
                borderRadius: 6,
                transition: 'background .15s, color .15s'
              }}>
                {it.label}
                {it.hasMenu &&
                <svg width="9" height="9" viewBox="0 0 9 9" fill="none" stroke="currentColor" strokeWidth="1.4" style={{ opacity: 0.55 }}>
                    <path d="M1.5 3 L4.5 6 L7.5 3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                }
                {isActive &&
                <span style={{
                  position: 'absolute',
                  left: 12, right: 12, bottom: -2,
                  height: 2, background: 'var(--wf-accent)', borderRadius: 2
                }} />
                }
              </span>);

          })}
        </div>

        <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
          {/* Theme circle — sun/moon glyph, only the active state */}
          <div title={dark ? 'Dark mode' : 'Light mode'} style={{
            width: 30, height: 30, borderRadius: '50%',
            border: `1px solid ${subtleLine}`,
            background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)',
            display: 'grid', placeItems: 'center',
            color: ink, cursor: 'pointer'
          }}>
            {dark ?
            // Moon
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
              </svg> :

            // Sun
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="4" />
                <path d="M12 2v2M12 20v2M4.93 4.93l1.41 1.41M17.66 17.66l1.41 1.41M2 12h2M20 12h2M4.93 19.07l1.41-1.41M17.66 6.34l1.41-1.41" />
              </svg>
            }
          </div>
          {/* Locale circle — single working glyph */}
          <div title="English" style={{
            width: 30, height: 30, borderRadius: '50%',
            border: `1px solid ${subtleLine}`,
            background: dark ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.6)',
            display: 'grid', placeItems: 'center',
            color: ink, cursor: 'pointer',
            fontFamily: 'var(--wf-font-mono)', fontSize: 10, fontWeight: 500, letterSpacing: '0.04em'
          }}>EN</div>
          <span style={{ fontSize: 13, color: mutedInk, padding: '6px 8px', cursor: 'pointer' }}>Sign in</span>
          <div className="wf-btn solid" style={{ ...(dark ?
            { background: '#fff', borderColor: '#fff', color: 'var(--wf-ink)', fontSize: 13, padding: '9px 14px' } :
            { fontSize: 13, padding: '9px 14px', boxShadow: '0 1px 0 rgba(24,20,16,0.06)' }), backgroundColor: "rgb(110, 19, 32)" }}>
            Request Demo →
          </div>
        </div>
      </div>
    </div>);

};

// dotted connector SVG for hero
const Connector = ({ from, to, curve = 0.3 }) => {
  const [x1, y1] = from,[x2, y2] = to;
  const mx = (x1 + x2) / 2;
  const my = (y1 + y2) / 2 - Math.abs(x2 - x1) * curve;
  return <path d={`M ${x1} ${y1} Q ${mx} ${my} ${x2} ${y2}`} className="wf-link-dashed" />;
};

// ── Rotating "Trusted by" strip — UAE developers ─────────────────────────
// Horizontal marquee; duplicated track so it loops seamlessly.
// Intended to sit between the 3-problem grid and the Platform section on all
// four landing variations.
const UAE_DEVELOPERS = [
{ name: 'ALDAR',          src: 'logos/aldar.svg' },
{ name: 'EMAAR',          src: 'logos/emaar.svg' },
{ name: 'NAKHEEL',        src: 'logos/nakheel.svg' },
{ name: 'SOBHA REALTY',   src: 'logos/sobha.svg',         scale: 1.25 },
{ name: 'ORA DEVELOPERS', src: 'logos/ora.svg',          scale: 0.6 },
{ name: 'DUBAI HOLDING',  src: 'logos/dubai-holding.svg' },
{ name: 'MUBADALA',       src: 'logos/mubadala.svg' },
{ name: 'ADNOC',          src: 'logos/adnoc.svg',        scale: 0.72 },
{ name: 'ADCB',           src: 'logos/adcb.svg',          scale: 0.90 },
{ name: 'DUBAI MUNICIPALITY', src: 'logos/dm.svg',         scale: 0.85 }];


function ClientStrip({ dark = false, label = 'Trusted by developers across the UAE' }) {
  const ink = dark ? 'rgba(255,255,255,0.85)' : 'var(--wf-ink-2)';
  const muted = dark ? 'rgba(255,255,255,0.55)' : 'var(--wf-ink-3)';
  const line = dark ? 'rgba(255,255,255,0.15)' : 'var(--wf-line)';
  const fade = dark ? 'var(--wf-ink)' : 'var(--wf-paper)';
  const track = [...UAE_DEVELOPERS, ...UAE_DEVELOPERS]; // duplicated for seamless loop
  return (
    <div style={{
      borderTop: `1.25px solid ${line}`,
      borderBottom: `1.25px solid ${line}`,
      background: dark ? 'transparent' : 'var(--wf-paper)',
      padding: '28px 0',
      overflow: 'hidden',
      position: 'relative'
    }}>
      <style>{`
        @keyframes wfClientScroll {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .wf-client-track {
          display: flex;
          gap: 72px;
          width: max-content;
          animation: wfClientScroll 55s linear infinite;
          will-change: transform;
          align-items: center;
        }
        .wf-client-strip:hover .wf-client-track { animation-play-state: paused; }
        .wf-client-logo {
          height: 44px;
          width: auto;
          max-width: 180px;
          object-fit: contain;
          opacity: 0.85;
          ${dark ? 'filter: brightness(1.05);' : ''}
          transition: opacity 0.2s;
          flex-shrink: 0;
        }
        .wf-client-strip:hover .wf-client-logo { opacity: 1; }
      `}</style>
      <div style={{
        textAlign: 'center',
        fontFamily: 'var(--wf-font-mono)',
        fontSize: 10.5,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: muted,
        marginBottom: 22
      }}>
        {label}
      </div>
      <div className="wf-client-strip" style={{ position: 'relative', maskImage: `linear-gradient(90deg, transparent 0, ${fade} 60px, ${fade} calc(100% - 60px), transparent 100%)`, WebkitMaskImage: `linear-gradient(90deg, transparent 0, #000 60px, #000 calc(100% - 60px), transparent 100%)` }}>
        <div className="wf-client-track">
          {track.map((logo, i) =>
          <img key={i} src={logo.src} alt={logo.name} className="wf-client-logo" style={{ height: `${44 * (logo.scale || 1)}px` }} />
          )}
        </div>
      </div>
    </div>);

}

// ── Count-up number — animates from 0 to target when scrolled into view ───
// Reads target from `value` prop. Accepts string prefixes/suffixes via
// `prefix`/`suffix` (kept outside the animated portion). For non-numeric
// "targets" like "+2d", pass numeric={2} prefix="+" suffix="d".
function CountUp({ numeric, prefix = '', suffix = '', duration = 1400, decimals = 0, style, format }) {
  const [val, setVal] = React.useState(0);
  const ref = React.useRef(null);
  const startedRef = React.useRef(false);

  React.useEffect(() => {
    if (!ref.current) return;
    const el = ref.current;
    const start = () => {
      if (startedRef.current) return;
      startedRef.current = true;
      const t0 = performance.now();
      const tick = (t) => {
        const p = Math.min(1, (t - t0) / duration);
        // easeOutCubic
        const eased = 1 - Math.pow(1 - p, 3);
        setVal(numeric * eased);
        if (p < 1) requestAnimationFrame(tick);else
        setVal(numeric);
      };
      requestAnimationFrame(tick);
    };
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {if (e.isIntersecting) start();});
    }, { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, [numeric, duration]);

  const display = format ?
  format(val) :
  decimals > 0 ? val.toFixed(decimals) : Math.round(val).toLocaleString();
  return <span ref={ref} style={{ ...style, fontSize: "35px", color: "rgb(110, 22, 35)" }}>{prefix}{display}{suffix}</span>;
}

// ── TiltCard — 3D hover tilt that tracks cursor position ─────────────────
// Wraps any child card. On mouse move, computes normalized offset from card
// center and applies rotateX/rotateY + subtle lift. Returns to rest on leave.
function TiltCard({ children, max = 8, lift = 6, style, className }) {
  const ref = React.useRef(null);
  const [t, setT] = React.useState({ rx: 0, ry: 0, tz: 0, mx: 50, my: 50, active: false });
  const onMove = (e) => {
    const r = ref.current?.getBoundingClientRect();
    if (!r) return;
    const x = (e.clientX - r.left) / r.width; // 0..1
    const y = (e.clientY - r.top) / r.height; // 0..1
    const ry = (x - 0.5) * 2 * max;
    const rx = -(y - 0.5) * 2 * max;
    setT({ rx, ry, tz: lift, mx: x * 100, my: y * 100, active: true });
  };
  const onLeave = () => setT((s) => ({ ...s, rx: 0, ry: 0, tz: 0, active: false }));
  return (
    <div ref={ref}
    onMouseMove={onMove}
    onMouseLeave={onLeave}
    className={className}
    style={{
      perspective: 900,
      transformStyle: 'preserve-3d',
      transition: 'transform 220ms cubic-bezier(.2,.7,.2,1)',
      transform: `translateZ(0)`,
      ...style
    }}>
      <div style={{
        transform: `rotateX(${t.rx}deg) rotateY(${t.ry}deg) translateZ(${t.tz}px)`,
        transition: t.active ? 'transform 80ms linear' : 'transform 420ms cubic-bezier(.2,.7,.2,1)',
        transformStyle: 'preserve-3d',
        willChange: 'transform',
        position: 'relative'
      }}>
        {/* cursor-tracking sheen */}
        <div style={{
          position: 'absolute', inset: 0, borderRadius: 'inherit', pointerEvents: 'none',
          background: `radial-gradient(260px circle at ${t.mx}% ${t.my}%, rgba(110,19,32,0.08), transparent 60%)`,
          opacity: t.active ? 1 : 0,
          transition: 'opacity 300ms',
          zIndex: 2
        }} />
        {children}
      </div>
    </div>);

}

// ────────────────────────────────────────────────────────────────────────────
// Floating AI Companion — ambient, not a chatbot.
// Glassy orb that bobs with "gravity" at the bottom of a wf-page; every
// ~10s it auto-opens a glass insight card beside it with a new fact.
// Parent must be position: relative (wf-page is).
// ────────────────────────────────────────────────────────────────────────────
const COMPANION_INSIGHTS = [
{ tag: 'PROACTIVE', title: '3 drawings just became stale',
  body: 'A new RFI answer on L07 supersedes sheets A-212 and A-213. I\'ve flagged the affected trades.' },
{ tag: 'RISK', title: 'Concrete pour slipping 2 days',
  body: 'Delivery window for zone B clashes with rebar inspection. Owner and MEP both affected.' },
{ tag: 'MONEY', title: 'Variation 14 has no BoQ match',
  body: 'AED 412,000 claimed against VO-14. I couldn\'t find a corresponding line. Consultant should review.' },
{ tag: 'DECISION', title: 'Façade material still open',
  body: 'Minutes from 4 meetings reference the choice. No decision recorded. I drafted one — 30s to review.' },
{ tag: 'PEOPLE', title: 'Karim is a bottleneck this week',
  body: '11 open items assigned, 4 overdue. Two can be reassigned to Layla without impact.' },
{ tag: 'SCAN', title: 'Scanned 214 new emails, 38 whatsapp threads',
  body: 'Surfaced 6 commitments, 2 risks, and 1 contractual flag. All linked to the right work packages.' },
{ tag: 'PROACTIVE', title: 'Client wants a site walk Thursday',
  body: 'Pulled from Ahmed\'s inbox. Prepped a 1-page status brief in your voice.' },
{ tag: 'MONEY', title: 'This month tracking 4.2% over baseline',
  body: 'Mostly MEP rework. Drivers and owners identified. Recommend escalation by Friday.' }];


// Suggested first prompts shown as chips. The currently-selected chip becomes
// the "user question"; its `answer` is rendered as the AI bubble. We rotate
// through these on a timer so the wireframe is alive without user input, and
// clicking a chip pins it.
const COMPANION_PROMPTS = [
{ q: 'What changed this week?',
  answer: 'Pulse found 6 new commitments, 2 late review items, and 1 commercial risk tied to VO-14.' },
{ q: 'Show project risks',
  answer: '3 active risks: rebar RFI (Tower B, 11d open), façade material undecided, and concrete pour Zone B at risk of slipping 2 days.' },
{ q: 'Who needs action?',
  answer: 'Karim has 11 open items (4 overdue). Layla can absorb 2 without impact. The Owner has 3 unsigned approvals.' },
{ q: 'Book a demo',
  answer: 'I can hand you off to the Pulse team — what timezone works best, and which role fits you (Owner, Consultant, Contractor)?' }];


function FloatingAICompanion({
  variant = 'light',
  bottom = 28,
  right = 28,
  intervalMs = 9000,
  startOpen = true
}) {
  const [open, setOpen] = React.useState(startOpen);
  const [promptIdx, setPromptIdx] = React.useState(0);
  const [hidden, setHidden] = React.useState(false);
  const [pinned, setPinned] = React.useState(false); // user clicked a chip → stop auto-rotation
  const rootRef = React.useRef(null);
  const messagesRef = React.useRef(null);

  // Hide when a footer is in view (don't obscure contact info).
  React.useEffect(() => {
    const root = rootRef.current;
    if (!root) return;
    const scope = root.closest('.wf-root') || document.body;
    const footer = scope.querySelector('footer');
    if (!footer) return;
    const io = new IntersectionObserver(
      (entries) => {setHidden(entries.some((e) => e.isIntersecting));},
      { threshold: 0.01 }
    );
    io.observe(footer);
    return () => io.disconnect();
  }, []);

  // Auto-rotate through prompts so the wireframe demos motion. Pauses once the
  // user pins a question by clicking a chip.
  React.useEffect(() => {
    if (pinned || !open) return;
    const t = setInterval(() => {
      setPromptIdx((i) => (i + 1) % COMPANION_PROMPTS.length);
    }, intervalMs);
    return () => clearInterval(t);
  }, [intervalMs, pinned, open]);

  // When the answer changes, fade-in the new bubble.
  const [bubbleKey, setBubbleKey] = React.useState(0);
  React.useEffect(() => {setBubbleKey((k) => k + 1);}, [promptIdx]);

  const dark = variant === 'dark';
  const cardBg = dark ? 'rgba(28,24,22,0.92)' : '#fbf8f4';
  const cardInk = dark ? '#fff' : 'var(--wf-ink)';
  const cardSub = dark ? 'rgba(255,255,255,0.62)' : 'var(--wf-ink-3)';
  const cardBorder = dark ? 'rgba(255,255,255,0.10)' : 'rgba(23,20,15,0.08)';
  const divider = dark ? 'rgba(255,255,255,0.08)' : 'rgba(23,20,15,0.06)';
  const userPillBg = dark ? 'rgba(255,255,255,0.06)' : 'rgba(23,20,15,0.04)';
  const aiBubbleBg = dark ? 'rgba(155,20,38,0.18)' : 'rgba(155,20,38,0.07)';
  const aiBubbleBorder = dark ? 'rgba(155,20,38,0.30)' : 'rgba(155,20,38,0.14)';
  const chipBg = dark ? 'rgba(255,255,255,0.04)' : '#fff';
  const chipBorder = dark ? 'rgba(255,255,255,0.12)' : 'rgba(23,20,15,0.10)';

  // Squircle gradient — deep pulse red with subtle inner gloss
  const squircleBg =
  'radial-gradient(circle at 32% 28%, rgba(200,80,95,1) 0%, rgba(150,28,45,1) 38%, rgba(95,15,28,1) 100%)';

  const keyframes = `
    @keyframes wfCompCardIn {
      from { opacity: 0; transform: translateY(10px) scale(0.97); }
      to   { opacity: 1; transform: translateY(0)    scale(1);    }
    }
    @keyframes wfCompBubbleIn {
      from { opacity: 0; transform: translateY(4px); }
      to   { opacity: 1; transform: translateY(0);   }
    }
    @keyframes wfCompPulseHalo {
      0%,100% { box-shadow: 0 10px 28px rgba(95,15,28,0.30), 0 0 0 0   rgba(155,20,38,0.45); }
      50%     { box-shadow: 0 10px 28px rgba(95,15,28,0.30), 0 0 0 14px rgba(155,20,38,0);    }
    }
  `;

  const current = COMPANION_PROMPTS[promptIdx];

  // Squircle button — used both as the closed-state launcher and as the
  // header avatar inside the open card.
  const Squircle = ({ size = 56, glyph = 22, halo = false, onClick, ariaLabel, style }) =>
  <button
    onClick={onClick}
    aria-label={ariaLabel}
    style={{
      width: size, height: size,
      borderRadius: Math.round(size * 0.30),
      border: 'none',
      cursor: onClick ? 'pointer' : 'default',
      padding: 0,
      background: squircleBg,
      display: 'grid', placeItems: 'center',
      boxShadow: halo ?
      '0 10px 28px rgba(95,15,28,0.30), 0 0 0 0 rgba(155,20,38,0.45)' :
      '0 4px 12px rgba(95,15,28,0.25), inset 0 1px 0 rgba(255,255,255,0.18)',
      animation: halo ? 'wfCompPulseHalo 2.4s ease-in-out infinite' : 'none',
      position: 'relative',
      overflow: 'hidden',
      ...style
    }}>
      {/* glossy top highlight */}
      <div style={{
      position: 'absolute', top: size * 0.10, left: size * 0.18,
      width: size * 0.45, height: size * 0.22,
      borderRadius: '50%',
      background: 'radial-gradient(ellipse, rgba(255,255,255,0.35) 0%, rgba(255,255,255,0) 70%)',
      pointerEvents: 'none'
    }} />
      <PulseLogo size={glyph} tile="bare" accent="#fff" />
    </button>;


  return (
    <div ref={rootRef} style={{
      position: 'absolute', bottom, right, zIndex: 40,
      opacity: hidden ? 0 : 1,
      transform: hidden ? 'translateY(16px) scale(0.96)' : 'translateY(0) scale(1)',
      transition: 'opacity 320ms ease, transform 320ms ease',
      visibility: hidden ? 'hidden' : 'visible',
      pointerEvents: hidden ? 'none' : 'auto'
    }}>
      <style>{keyframes}</style>

      {/* Open chat card — sits above the launcher */}
      {open &&
      <div style={{
        position: 'absolute',
        right: 0,
        bottom: 76, // launcher (56) + 20 gap
        width: 320,
        background: cardBg,
        color: cardInk,
        borderRadius: 18,
        border: `1px solid ${cardBorder}`,
        boxShadow: dark ?
        '0 24px 64px rgba(0,0,0,0.45), 0 4px 12px rgba(0,0,0,0.20)' :
        '0 24px 64px rgba(23,20,15,0.14), 0 4px 12px rgba(23,20,15,0.06)',
        overflow: 'hidden',
        animation: 'wfCompCardIn 380ms cubic-bezier(.2,.8,.2,1) both'
      }}>
          {/* Header */}
          <div style={{
          display: 'flex', alignItems: 'center', gap: 10,
          padding: '14px 14px 12px'
        }}>
            <Squircle size={32} glyph={14} />
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ fontSize: 13, fontWeight: 600, letterSpacing: '-0.005em', lineHeight: 1.2 }}>
                Pulse AI
              </div>
              <div style={{ fontSize: 10.5, color: cardSub, lineHeight: 1.3, marginTop: 1 }}>
                Project intelligence assistant
              </div>
            </div>
            <button
            onClick={() => setOpen(false)}
            aria-label="Minimize"
            style={{
              width: 22, height: 22, borderRadius: 6, border: 'none',
              background: 'transparent', color: cardSub, cursor: 'pointer',
              display: 'grid', placeItems: 'center', padding: 0
            }}>
              <svg width="10" height="2" viewBox="0 0 10 2"><line x1="0.5" y1="1" x2="9.5" y2="1" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" /></svg>
            </button>
          </div>

          <div style={{ height: 1, background: divider }} />

          {/* Conversation */}
          <div ref={messagesRef} style={{ padding: '12px 14px 4px', display: 'flex', flexDirection: 'column', gap: 8 }}>
            {/* User question */}
            <div key={`q-${bubbleKey}`} style={{
            alignSelf: 'flex-start',
            maxWidth: '92%',
            padding: '8px 12px',
            borderRadius: 10,
            background: userPillBg,
            fontSize: 12, lineHeight: 1.4,
            color: cardInk,
            animation: 'wfCompBubbleIn 320ms ease both'
          }}>
              {current.q}
            </div>

            {/* AI answer */}
            <div key={`a-${bubbleKey}`} style={{
            alignSelf: 'flex-start',
            maxWidth: '95%',
            padding: '10px 12px',
            borderRadius: 10,
            background: aiBubbleBg,
            border: `1px solid ${aiBubbleBorder}`,
            fontSize: 12, lineHeight: 1.45,
            color: cardInk,
            animation: 'wfCompBubbleIn 480ms ease both',
            animationDelay: '120ms'
          }}>
              {current.answer}
            </div>
          </div>

          {/* Quick-reply chips */}
          <div style={{
          padding: '10px 14px 14px',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: 8
        }}>
            {COMPANION_PROMPTS.map((p, i) =>
          <button
            key={i}
            onClick={() => {setPromptIdx(i);setPinned(true);}}
            style={{
              textAlign: 'left',
              padding: '8px 10px',
              fontSize: 11,
              lineHeight: 1.3,
              fontFamily: 'inherit',
              color: cardInk,
              background: chipBg,
              border: `1px solid ${i === promptIdx ? 'var(--wf-accent)' : chipBorder}`,
              borderRadius: 8,
              cursor: 'pointer',
              transition: 'border-color 160ms ease, transform 120ms ease',
              outline: 'none'
            }}>
                {p.q}
              </button>
          )}
          </div>
        </div>
      }

      {/* Launcher — squircle with pulse glyph, always visible */}
      <Squircle
        size={56}
        glyph={22}
        halo={!open}
        onClick={() => setOpen((v) => !v)}
        ariaLabel={open ? 'Minimize Pulse AI' : 'Open Pulse AI'} />
    </div>);

}

Object.assign(window, { Placeholder, Scribble, Annot, PersonaGlyph, PulseLogo, NavBar, Connector, ClientStrip, CountUp, UAE_DEVELOPERS, TiltCard, FloatingAICompanion });