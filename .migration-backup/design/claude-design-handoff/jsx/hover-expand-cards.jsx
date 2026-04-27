// Hover-Expand Customer Story Cards
// Horizontal scroll row of cards that grow wider when hovered.
// Each card has: image/visual area + wordmark overlay + caption below.
// Matches Stripe's customer stories pattern.

function StoryCard({ story, isHovered, isAnyHovered, onHover, onLeave }) {
  // widths: normal 260, hovered 440, dimmed (another hovered) 200
  const width = isHovered ? 440 : isAnyHovered ? 220 : 300;
  return (
    <div
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      style={{
        flex: `0 0 ${width}px`,
        transition: 'flex-basis 520ms cubic-bezier(.22,.9,.2,1)',
        display: 'flex', flexDirection: 'column', gap: 12,
      }}
    >
      <div style={{
        position: 'relative',
        width: '100%', height: 380,
        borderRadius: 16, overflow: 'hidden',
        background: story.bg,
        transition: 'transform 520ms cubic-bezier(.22,.9,.2,1), box-shadow 520ms',
        transform: isHovered ? 'translateY(-4px)' : 'none',
        boxShadow: isHovered
          ? '0 30px 60px -20px rgba(20,10,40,0.35)'
          : '0 10px 30px -15px rgba(20,10,40,0.15)',
      }}>
        {/* Custom visual per story */}
        {story.visual}

        {/* Darkening gradient at bottom for wordmark */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(180deg, transparent 60%, rgba(0,0,0,0.55) 100%)',
          pointerEvents: 'none',
        }}/>

        {/* Wordmark */}
        <div style={{
          position: 'absolute', left: 20, bottom: 18,
          display: 'flex', alignItems: 'center', gap: 8,
          color: '#fff', fontWeight: 600, fontSize: 19,
          letterSpacing: '-0.01em',
        }}>
          {story.icon}
          <span>{story.name}</span>
        </div>
      </div>
      {/* Caption + link below card */}
      <div style={{ padding: '0 4px', minHeight: 80 }}>
        <div style={{ fontSize: 13.5, lineHeight: 1.45, color: 'var(--wf-ink-2)', minHeight: 40, display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
          {story.caption}
        </div>
        <div style={{
          marginTop: 10, fontSize: 13,
          color: 'var(--wf-accent)', fontWeight: 500,
          display: 'inline-flex', alignItems: 'center', gap: 6,
          cursor: 'pointer',
        }}>
          {story.cta || `Read ${story.name}'s story`}
          <svg width="11" height="11" viewBox="0 0 11 11" stroke="currentColor" strokeWidth="1.5" fill="none">
            <path d="M1 5.5h9M6 1l4.5 4.5L6 10" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
      </div>
    </div>
  );
}

// ─── Per-story visuals (placeholder-quality, styled to feel distinct) ─────

const StoryVisuals = {
  // Abstract glow — concentric arcs
  marina: (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
      background: 'radial-gradient(120% 80% at 50% 90%, #1b2c5e 0%, #0c1230 60%, #05081c 100%)' }}>
      <svg width="220" height="220" viewBox="0 0 220 220">
        <defs>
          <radialGradient id="mg1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#ff7b6a" stopOpacity="0.9"/>
            <stop offset="60%" stopColor="#b84fff" stopOpacity="0.5"/>
            <stop offset="100%" stopColor="#6e4bb4" stopOpacity="0"/>
          </radialGradient>
        </defs>
        {[80, 66, 52, 38, 24].map((r, i) => (
          <circle key={i} cx="110" cy="110" r={r} stroke="rgba(255,255,255,0.12)" strokeWidth="1" fill="none"/>
        ))}
        <circle cx="110" cy="110" r="80" fill="url(#mg1)"/>
      </svg>
    </div>
  ),

  // Topo / contour — horizontal lines with displacement
  arcadia: (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #e6d7c1 0%, #b89b7a 50%, #6b5a40 100%)' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 380" preserveAspectRatio="none">
        {Array.from({ length: 18 }).map((_, i) => {
          const y = 30 + i * 20;
          const d = `M0 ${y} Q100 ${y - 14 + Math.sin(i) * 8} 200 ${y} T400 ${y}`;
          return <path key={i} d={d} stroke="rgba(30,20,10,0.35)" strokeWidth="1" fill="none"/>;
        })}
      </svg>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', textAlign: 'center' }}>
        <div style={{
          fontFamily: '"Times New Roman", Georgia, serif',
          fontWeight: 300,
          color: '#1a120a',
          fontSize: 76,
          letterSpacing: '0.04em',
          lineHeight: 1
        }}>ORA</div>
        <div style={{
          marginTop: 8,
          fontFamily: 'var(--wf-font-mono, "JetBrains Mono", monospace)',
          fontSize: 9,
          letterSpacing: '0.62em',
          textIndent: '0.62em',
          color: 'rgba(26,18,10,0.7)'
        }}>DEVELOPERS</div>
      </div>
    </div>
  ),

  // EMAAR — actual logo on dark
  emaar: (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(145deg, #151428 0%, #2b1c4a 100%)' }}>
      <div style={{ position: 'absolute', inset: 0,
        backgroundImage: 'radial-gradient(rgba(255,255,255,0.18) 1px, transparent 1px)',
        backgroundSize: '22px 22px', opacity: 0.5 }}/>
      <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', width: '70%', textAlign: 'center' }}>
        <img src="logos/emaar.svg" alt="Emaar" style={{ width: '100%', maxHeight: 90, objectFit: 'contain', filter: 'invert(1) brightness(2)', opacity: 0.92 }} />
      </div>
      <div style={{ position: 'absolute', top: 24, right: 40, color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>▸</div>
      <div style={{ position: 'absolute', bottom: 90, left: 24, color: 'rgba(255,255,255,0.4)', fontSize: 11 }}>▸</div>
    </div>
  ),

  // Flowing water texture — layered waves
  nakheel: (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #2d3f52 0%, #445870 50%, #1a2738 100%)' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 380" preserveAspectRatio="none">
        {Array.from({ length: 12 }).map((_, i) => {
          const y = 30 + i * 30;
          const d = `M-20 ${y} Q80 ${y - 22} 180 ${y} T420 ${y}`;
          return <path key={i} d={d} stroke={`rgba(255,255,255,${0.12 + i * 0.015})`} strokeWidth={1 + i * 0.15} fill="none"/>;
        })}
      </svg>
    </div>
  ),

  // Gradient haze + vertical bars wordmark shape
  omniyat: (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
      background: '#1a1410' }}>
      {/* subtle warm vignette */}
      <div style={{ position: 'absolute', inset: 0,
        background: 'radial-gradient(ellipse at 50% 60%, rgba(180,140,90,0.18) 0%, transparent 60%)' }}></div>
      <div style={{ position: 'relative', textAlign: 'center' }}>
        {/* monogram — stacked O bars */}
        <svg width="54" height="54" viewBox="0 0 54 54" style={{ display: 'block', margin: '0 auto 14px' }}>
          <rect x="4"  y="6" width="6" height="42" fill="#c9a875"/>
          <rect x="14" y="6" width="6" height="42" fill="#c9a875"/>
          <rect x="24" y="6" width="6" height="42" fill="#c9a875"/>
          <rect x="34" y="6" width="6" height="42" fill="#c9a875"/>
          <rect x="44" y="6" width="6" height="42" fill="#c9a875"/>
        </svg>
        <div style={{
          fontFamily: 'Georgia, "Times New Roman", serif',
          fontWeight: 300,
          color: '#c9a875',
          fontSize: 38,
          letterSpacing: '0.32em',
          textIndent: '0.32em',
          lineHeight: 1
        }}>OMNIYAT</div>
      </div>
    </div>
  ),

  // ALDAR — actual logo on warm cream
  aldar: (
    <div style={{ position: 'absolute', inset: 0, display: 'grid', placeItems: 'center',
      background: '#f4ede0' }}>
      <div style={{ width: '60%', textAlign: 'center' }}>
        <img src="logos/aldar.svg" alt="Aldar" style={{ width: '100%', maxHeight: 110, objectFit: 'contain' }} />
      </div>
    </div>
  ),

  // Blue geometric pattern
  damac: (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(145deg, #6fa8f0 0%, #4a72d8 60%, #2e4aa8 100%)' }}>
      <svg width="100%" height="100%" viewBox="0 0 400 380" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.2)" strokeWidth="1" fill="none">
          {Array.from({ length: 10 }).map((_, i) => (
            <path key={i} d={`M${-50 + i * 60} 0 Q${50 + i * 60} 190 ${-50 + i * 60} 380`}/>
          ))}
        </g>
      </svg>
    </div>
  ),
};

// Simple icon set for wordmarks
const Ico = {
  square: <div style={{ width: 16, height: 16, borderRadius: 3, background: '#fff', border: '1px solid rgba(255,255,255,0.4)' }}/>,
  dot:    <div style={{ width: 16, height: 16, borderRadius: 8, background: '#fff' }}/>,
  bolt:   (<svg width="16" height="16" viewBox="0 0 16 16" fill="#fff"><path d="M9 1L3 9h4l-1 6 6-8H8l1-6z"/></svg>),
  ring:   (<svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="#fff" strokeWidth="1.5"><circle cx="8" cy="8" r="6"/><circle cx="8" cy="8" r="2" fill="#fff"/></svg>),
  hex:    (<svg width="16" height="16" viewBox="0 0 16 16" fill="#fff"><path d="M8 1l6 3.5v7L8 15 2 11.5v-7z"/></svg>),
};

function HoverExpandStories() {
  const [hovered, setHovered] = React.useState(null);
  const scrollRef = React.useRef(null);

  const stories = [
    { id: 'vision',  name: 'Pulse Vision',   icon: Ico.dot,    visual: StoryVisuals.marina,   caption: 'Pulse Vision — upcoming. 24/7 computer vision on every site cam, fed into the project graph.', bg: '#0c1230', cta: 'Get early access to Pulse Vision' },
    { id: 'ora',     name: 'ORA Developers', icon: Ico.square, visual: StoryVisuals.arcadia,  caption: 'ORA Developers recently doubled its land bank in Bayn and Ghantoot — and runs Pulse across the entire portfolio.', bg: '#6b5a40' },
    { id: 'emaar',   name: 'Emaar Group',    icon: Ico.bolt,   visual: StoryVisuals.emaar,    caption: 'Emaar rolled Pulse across 14 projects in 9 months — one source of truth, three views.', bg: '#151428' },
    { id: 'aldar',   name: 'Aldar',          icon: Ico.square, visual: StoryVisuals.aldar,    caption: 'Aldar reconciled three capital projects against one shared decision ledger.', bg: '#f4ede0' },
    { id: 'omniyat', name: 'OMNIYAT',        icon: Ico.square, visual: StoryVisuals.omniyat,  caption: 'OMNIYAT uses Pulse as the spine of its luxury developments portfolio.', bg: '#8e63b8' },
    { id: 'nakheel', name: 'Nakheel',        icon: Ico.ring,   visual: StoryVisuals.nakheel,  caption: 'Nakheel cut end-of-month reconciliation from 6 days to 6 hours.', bg: '#1a2738' },
    { id: 'damac',   name: 'DAMAC',          icon: Ico.hex,    visual: StoryVisuals.damac,    caption: 'DAMAC adopted Pulse for live variance across 400+ units in development.', bg: '#2e4aa8' },
  ];

  const scrollBy = (dx) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dx, behavior: 'smooth' });
  };

  return (
    <div>
      {/* Header row with nav arrows */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
        <div>
          <div className="wf-eyebrow">Proof</div>
          <h2 className="wf-h2" style={{ marginTop: 10 }}>Teams ship projects on Pulse.</h2>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scrollBy(-320)} aria-label="Scroll left" style={navArrowStyle}>
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M9 1L3 7l6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
          <button onClick={() => scrollBy(320)} aria-label="Scroll right" style={navArrowStyle}>
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" fill="none">
              <path d="M5 1l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Horizontal scroll row */}
      <div
        ref={scrollRef}
        onMouseLeave={() => setHovered(null)}
        style={{
          display: 'flex', gap: 16,
          overflowX: 'auto', overflowY: 'hidden',
          paddingBottom: 16, paddingRight: 40,
          scrollbarWidth: 'none',
          msOverflowStyle: 'none',
          WebkitMaskImage: 'linear-gradient(90deg, #000 0, #000 calc(100% - 60px), transparent 100%)',
        }}
      >
        <style>{`
          .hover-row::-webkit-scrollbar { display: none; }
        `}</style>
        {stories.map(s => (
          <StoryCard
            key={s.id}
            story={s}
            isHovered={hovered === s.id}
            isAnyHovered={hovered !== null}
            onHover={() => setHovered(s.id)}
            onLeave={() => {}}
          />
        ))}
        <CTAStoryCard isAnyHovered={hovered !== null}/>
      </div>
    </div>
  );
}

// Dark CTA card shaped to match StoryCard footprint.
// Sits at the end of the horizontal story row.
function CTAStoryCard({ isAnyHovered }) {
  const width = isAnyHovered ? 320 : 440;
  return (
    <div style={{
      flex: `0 0 ${width}px`,
      transition: 'flex-basis 520ms cubic-bezier(.22,.9,.2,1)',
      display: 'flex', flexDirection: 'column', gap: 12,
    }}>
      <div style={{
        position: 'relative',
        width: '100%', height: 380,
        borderRadius: 16, overflow: 'hidden',
        background: 'radial-gradient(120% 80% at 20% 10%, #241015 0%, #0f0809 55%, #050203 100%)',
        border: '1px solid rgba(255,255,255,0.06)',
        boxShadow: '0 20px 60px -25px rgba(110,19,32,0.4)',
        display: 'flex', flexDirection: 'column',
        padding: 28,
      }}>
        {/* Faint pulse trace */}
        <svg style={{ position: 'absolute', left: 0, right: 0, top: '52%', width: '100%', height: 60, opacity: 0.5 }}
             viewBox="0 0 400 60" preserveAspectRatio="none">
          <path d="M0 30 L110 30 L130 10 L150 50 L170 22 L185 38 L200 30 L400 30"
                stroke="rgba(200,60,90,0.55)" strokeWidth="1.2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>

        {/* Eyebrow */}
        <div style={{
          fontFamily: 'var(--wf-font-mono)', fontSize: 10, letterSpacing: '0.18em',
          color: 'rgba(235,190,120,0.85)', textAlign: 'center', marginTop: 4,
        }}>
          <span style={{ marginRight: 6 }}>◆</span>
          BUILT FOR THE FUTURE. AVAILABLE TODAY.
        </div>

        {/* Headline */}
        <div style={{
          marginTop: 22, color: '#fff',
          fontSize: 26, lineHeight: 1.15, letterSpacing: '-0.02em', fontWeight: 500,
          textAlign: 'center',
        }}>
          See Pulse AI running on a{' '}
          <span style={{ color: '#d6466a', fontStyle: 'italic', fontFamily: 'var(--wf-font-serif, Georgia, serif)' }}>
            real project scenario.
          </span>
        </div>

        {/* Subcopy */}
        <div style={{
          marginTop: 'auto', color: 'rgba(255,255,255,0.7)',
          fontSize: 13, lineHeight: 1.5, textAlign: 'center',
        }}>
          Explore the Al Reem Tower demo or request a private walkthrough for your team.
        </div>

        {/* Buttons */}
        <div style={{ display: 'flex', gap: 10, marginTop: 18, justifyContent: 'center' }}>
          <div style={{
            padding: '10px 16px', borderRadius: 8,
            background: 'var(--wf-accent)', color: '#fff',
            fontSize: 13, fontWeight: 600,
            display: 'inline-flex', alignItems: 'center', gap: 6,
          }}>
            Launch Live Demo →
          </div>
          <div style={{
            padding: '10px 16px', borderRadius: 8,
            background: 'transparent', color: '#fff',
            border: '1px solid rgba(255,255,255,0.25)',
            fontSize: 13, fontWeight: 500,
          }}>
            Request Pilot
          </div>
        </div>
      </div>
      {/* empty caption slot to align heights with StoryCard */}
      <div style={{ padding: '0 4px', minHeight: 80 }}/>
    </div>
  );
}

const navArrowStyle = {
  width: 40, height: 40, borderRadius: 10,
  background: '#fff',
  border: '1px solid var(--wf-line)',
  color: 'var(--wf-ink)',
  cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
  fontFamily: 'inherit',
};

Object.assign(window, { HoverExpandStories });
