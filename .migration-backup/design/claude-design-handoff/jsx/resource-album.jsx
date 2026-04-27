// Resource Album — "What's happening in AEC"
// One big featured card on the left + horizontally-scrolling filmstrip
// of thinner cards on the right. Thin cards widen on hover.
// Content: industry reports, product updates, standards changes,
// conferences — the things a construction-tech audience cares about.

function ResourceAlbum() {
  const scrollRef = React.useRef(null);
  const [hoveredId, setHoveredId] = React.useState(null);

  const featured = {
    id: 'feat',
    tag: 'Benchmark report',
    title: "The 2026 AEC Productivity Report.",
    body: "How 240 construction teams cut RFI response by 38%, eliminated duplicate data entry, and pulled decision latency from 9 days to 2. Regional cuts: GCC, SE Asia, UK.",
    cta: 'Get the data',
    visual: (
      // Aerial-coast vibe — teal water meets rocky shore
      <div style={{ position: 'absolute', inset: 0,
        background: 'linear-gradient(100deg, #0f4f54 0%, #1b7a7a 35%, #8a6a3a 65%, #c9a06a 100%)' }}>
        <svg width="100%" height="100%" viewBox="0 0 720 440" preserveAspectRatio="xMidYMid slice">
          {/* water foam lines */}
          <g stroke="rgba(255,255,255,0.25)" strokeWidth="1" fill="none">
            {Array.from({ length: 16 }).map((_, i) => (
              <path key={i} d={`M-20 ${30 + i * 26} Q120 ${20 + i * 26} 300 ${40 + i * 26} T720 ${30 + i * 26}`}/>
            ))}
          </g>
          {/* rocky-shore band */}
          <g fill="rgba(255,255,255,0.08)">
            {Array.from({ length: 40 }).map((_, i) => (
              <circle key={i} cx={440 + (i % 6) * 35 + (i * 7) % 60} cy={200 + Math.floor(i / 6) * 28} r={3 + (i % 3)}/>
            ))}
          </g>
          {/* white froth along the boundary */}
          <path d="M380 0 Q430 220 460 440" stroke="rgba(255,255,255,0.45)" strokeWidth="6" fill="none"/>
        </svg>
      </div>
    ),
    wordmark: 'tidemark',
    wordmarkIcon: (
      <svg width="18" height="18" viewBox="0 0 18 18" fill="#fff"><path d="M2 14l4-4 3 3 5-6 2 2v-5H2z"/></svg>
    ),
  };

  const items = [
    { id: 'ai',      tag: 'AI',        kicker: 'Field-tested',  title: 'How AI briefings replace the Monday project meeting.', bg: '#3a2d24', visual: <VisPortrait/> },
    { id: 'stable',  tag: 'Fintech',   kicker: 'Payments',      title: 'Retention payments, settled on rails that actually clear.', bg: '#0a2b26', visual: <VisPhoneMock/> },
    { id: 'crypto',  tag: 'Treasury',  kicker: 'Opinion',       title: 'Why on-site purchasing needs its own settlement layer.', bg: '#0e1a2e', visual: <VisCoinStack/> },
    { id: 'std',     tag: 'Standards', kicker: 'Compliance',    title: 'ISO 19650 in 2026: what changed, what you can ignore.', bg: '#22143a', visual: <VisVerticalBars hue={270}/> },
    { id: 'conf',    tag: 'Event',     kicker: 'Autodesk U',    title: 'The 12 sessions worth skipping the keynote for.', bg: '#451a2e', visual: <VisVerticalBars hue={340}/> },
    { id: 'bim',     tag: 'Workflow',  kicker: 'Integrations',  title: 'Model-to-site: closing the loop between BIM and field.', bg: '#1a2d1f', visual: <VisIsoGrid hue={140}/> },
    { id: 'ledger',  tag: 'Governance',kicker: 'Case study',    title: 'How Emaar audits 14 live projects with one ledger.', bg: '#301b0f', visual: <VisIsoGrid hue={30}/> },
    { id: 'esg',     tag: 'ESG',       kicker: 'Reporting',     title: 'Embodied carbon reporting without the six-tab spreadsheet.', bg: '#1a2a1e', visual: <VisConcentric hue={150}/> },
  ];

  const scrollBy = (dx) => {
    if (scrollRef.current) scrollRef.current.scrollBy({ left: dx, behavior: 'smooth' });
  };

  return (
    <section style={{ padding: '100px 80px', borderBottom: '1.25px solid var(--wf-line)' }}>
      {/* Header */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 36 }}>
        <div>
          <div className="wf-h2" style={{ letterSpacing: '-0.02em' }}>What's happening</div>
          <div className="wf-body wf-muted" style={{ marginTop: 8, color: 'var(--wf-ink-3)', fontSize: 22 }}>
            The latest from the Pulse team and the industry around it.
          </div>
        </div>
        <div style={{ display: 'flex', gap: 8 }}>
          <button onClick={() => scrollBy(-360)} aria-label="Scroll left" style={albumArrowStyle}>
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M9 1L3 7l6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
          <button onClick={() => scrollBy(360)} aria-label="Scroll right" style={albumArrowStyle}>
            <svg width="14" height="14" viewBox="0 0 14 14" stroke="currentColor" strokeWidth="1.5" fill="none"><path d="M5 1l6 6-6 6" strokeLinecap="round" strokeLinejoin="round"/></svg>
          </button>
        </div>
      </div>

      {/* Album row: featured + filmstrip */}
      <div style={{ display: 'grid', gridTemplateColumns: '1.7fr 2fr', gap: 16, alignItems: 'stretch' }}>
        {/* Featured card */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
          <div style={{
            position: 'relative', height: 360, borderRadius: 14, overflow: 'hidden',
            boxShadow: '0 16px 40px -20px rgba(20,10,40,0.25)',
          }}>
            {featured.visual}
            <div style={{ position: 'absolute', top: 16, left: 16, padding: '4px 10px', borderRadius: 4, background: 'rgba(0,0,0,0.35)', color: '#fff', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', fontFamily: 'var(--wf-font-mono)' }}>
              {featured.tag}
            </div>
            <div style={{ position: 'absolute', bottom: 18, left: 20, display: 'flex', alignItems: 'center', gap: 8, color: '#fff', fontWeight: 600, fontSize: 22, letterSpacing: '-0.01em' }}>
              {featured.wordmarkIcon}
              <span>{featured.wordmark}</span>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, padding: '0 4px' }}>
            <div style={{ fontSize: 14.5, lineHeight: 1.5, color: 'var(--wf-ink)' }}>
              <span style={{ fontWeight: 600 }}>{featured.title}</span>{' '}
              <span style={{ color: 'var(--wf-ink-3)' }}>{featured.body}</span>
            </div>
            <div className="wf-btn ghost" style={{
              flexShrink: 0, color: 'var(--wf-accent)', borderColor: 'var(--wf-accent)',
              padding: '8px 14px', fontSize: 13, whiteSpace: 'nowrap',
            }}>
              {featured.cta} →
            </div>
          </div>
        </div>

        {/* Filmstrip — only visuals, scrollable */}
        <div>
          <div
            ref={scrollRef}
            onMouseLeave={() => setHoveredId(null)}
            style={{
              display: 'flex', gap: 12, overflowX: 'auto', overflowY: 'hidden',
              height: 360, paddingBottom: 4,
              scrollbarWidth: 'none',
              WebkitMaskImage: 'linear-gradient(90deg, #000 0%, #000 calc(100% - 40px), transparent 100%)',
            }}
          >
            <style>{`.album-strip::-webkit-scrollbar { display: none; }`}</style>
            {items.map(item => {
              const isHover = hoveredId === item.id;
              const anyHover = hoveredId !== null;
              const w = isHover ? 340 : anyHover ? 96 : 150;
              return (
                <div key={item.id}
                  onMouseEnter={() => setHoveredId(item.id)}
                  title={item.title}
                  style={{
                    flex: `0 0 ${w}px`,
                    height: '100%',
                    position: 'relative',
                    borderRadius: 14, overflow: 'hidden',
                    background: item.bg,
                    cursor: 'pointer',
                    transition: 'flex-basis 520ms cubic-bezier(.22,.9,.2,1)',
                    boxShadow: isHover ? '0 22px 44px -22px rgba(20,10,40,0.45)' : '0 10px 26px -16px rgba(20,10,40,0.2)',
                  }}>
                  {item.visual}
                  <div style={{ position: 'absolute', inset: 0,
                    background: 'linear-gradient(180deg, transparent 45%, rgba(0,0,0,0.75) 100%)',
                    pointerEvents: 'none',
                  }}/>
                  {/* Tag (always visible) */}
                  <div style={{
                    position: 'absolute', top: 12, left: 12,
                    padding: '3px 8px', borderRadius: 3,
                    background: 'rgba(0,0,0,0.35)', color: '#fff',
                    fontSize: 9.5, letterSpacing: '0.1em', textTransform: 'uppercase',
                    fontFamily: 'var(--wf-font-mono)',
                  }}>
                    {item.tag}
                  </div>
                  {/* Expanded content — revealed only when hovered */}
                  <div style={{
                    position: 'absolute', left: 14, right: 14, bottom: 14,
                    color: '#fff',
                    opacity: isHover ? 1 : 0,
                    transform: isHover ? 'translateY(0)' : 'translateY(8px)',
                    transition: 'opacity 360ms ease 140ms, transform 360ms ease 140ms',
                    pointerEvents: isHover ? 'auto' : 'none',
                  }}>
                    <div style={{ fontSize: 10.5, color: 'rgba(255,255,255,0.7)', letterSpacing: '0.05em', fontFamily: 'var(--wf-font-mono)', textTransform: 'uppercase', marginBottom: 6 }}>
                      {item.kicker}
                    </div>
                    <div style={{ fontSize: 15, lineHeight: 1.3, fontWeight: 500, letterSpacing: '-0.005em', marginBottom: 10 }}>
                      {item.title}
                    </div>
                    <div style={{ fontSize: 12, color: 'rgba(255,255,255,0.85)', display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                      Read article
                      <svg width="11" height="11" viewBox="0 0 11 11" stroke="currentColor" strokeWidth="1.5" fill="none">
                        <path d="M1 5.5h9M6 1l4.5 4.5L6 10" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

const albumArrowStyle = {
  width: 40, height: 40, borderRadius: 10,
  background: '#fff', border: '1px solid var(--wf-line)',
  color: 'var(--wf-ink)', cursor: 'pointer',
  display: 'flex', alignItems: 'center', justifyContent: 'center',
};

// ─── Tiny decorative visuals for the filmstrip ───────────────────────────

function VisPortrait() {
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #5a4432 0%, #2c1e14 100%)',
    }}>
      {/* glasses */}
      <div style={{ position: 'absolute', left: '30%', top: '38%', width: '40%', height: '8%',
        border: '3px solid rgba(255,255,255,0.35)', borderRadius: 8 }}/>
      {/* head silhouette */}
      <div style={{ position: 'absolute', left: '50%', top: '50%', transform: 'translate(-50%,-40%)',
        width: 90, height: 110, borderRadius: '45% 45% 40% 40%', background: '#8a6f56', opacity: 0.5 }}/>
    </div>
  );
}

function VisPhoneMock() {
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #1a4033 0%, #0a2b26 100%)' }}>
      <div style={{ position: 'absolute', left: '18%', top: '10%', width: '64%', height: '84%',
        borderRadius: 18, background: '#fff', padding: 10,
        boxShadow: '0 24px 40px -10px rgba(0,0,0,0.45)',
      }}>
        <div style={{ height: 8, width: '40%', background: '#e5e1ec', borderRadius: 4, marginBottom: 10 }}/>
        <div style={{ padding: 8, background: '#f6f4fa', borderRadius: 6, marginBottom: 6 }}>
          <div style={{ fontSize: 9, fontFamily: 'monospace', color: '#1b1630' }}>AED 20,000</div>
          <div style={{ fontSize: 7, color: '#888' }}>Pay Subcontractor</div>
        </div>
        <div style={{ padding: '6px 10px', background: '#2a6f4a', color: '#fff', fontSize: 9, borderRadius: 6, textAlign: 'center' }}>Pay</div>
      </div>
    </div>
  );
}

function VisCoinStack() {
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: 'linear-gradient(180deg, #101a2e 0%, #061022 100%)' }}>
      <svg width="100%" height="100%" viewBox="0 0 140 360" preserveAspectRatio="xMidYMid slice">
        {Array.from({ length: 9 }).map((_, i) => (
          <g key={i} transform={`translate(70, ${80 + i * 28})`}>
            <ellipse cx="0" cy="0" rx="36" ry="10" fill={i % 2 ? '#d4a017' : '#c9992e'} stroke="#3a2a0a"/>
          </g>
        ))}
      </svg>
    </div>
  );
}

function VisVerticalBars({ hue = 270 }) {
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, hsl(${hue}, 35%, 25%) 0%, hsl(${hue - 20}, 40%, 12%) 100%)`,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 140 360" preserveAspectRatio="none">
        {Array.from({ length: 7 }).map((_, i) => (
          <rect key={i} x={10 + i * 18} y={40} width={12} height={280}
            fill={`hsl(${hue + i * 5}, 55%, ${50 + i * 3}%)`} opacity={0.8}/>
        ))}
      </svg>
    </div>
  );
}

function VisIsoGrid({ hue = 140 }) {
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: `linear-gradient(145deg, hsl(${hue}, 30%, 20%) 0%, hsl(${hue - 20}, 45%, 10%) 100%)`,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 140 360" preserveAspectRatio="xMidYMid slice">
        <g stroke="rgba(255,255,255,0.15)" fill="none">
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1="-40" y1={i * 30} x2="180" y2={i * 30 - 60}/>
          ))}
          {Array.from({ length: 14 }).map((_, i) => (
            <line key={i} x1="-40" y1={i * 30} x2="180" y2={i * 30 + 60}/>
          ))}
        </g>
        <rect x="55" y="150" width="40" height="40" fill={`hsl(${hue}, 60%, 50%)`} transform="skewY(-30)" opacity="0.85"/>
      </svg>
    </div>
  );
}

function VisConcentric({ hue = 150 }) {
  return (
    <div style={{ position: 'absolute', inset: 0,
      background: `linear-gradient(180deg, hsl(${hue}, 30%, 15%) 0%, hsl(${hue - 15}, 25%, 8%) 100%)`,
    }}>
      <svg width="100%" height="100%" viewBox="0 0 140 360" preserveAspectRatio="xMidYMid slice">
        {[20, 40, 60, 80, 100, 120, 140].map((r, i) => (
          <circle key={i} cx="70" cy="180" r={r} stroke={`hsla(${hue}, 60%, 60%, ${0.2 + i * 0.05})`} strokeWidth="1" fill="none"/>
        ))}
      </svg>
    </div>
  );
}

Object.assign(window, { ResourceAlbum });
