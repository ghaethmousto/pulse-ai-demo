// ConnectTheDots — dark editorial hero visual.
// Dense grid of faint dots. White radiating lines from center to every dot,
// with opacity falling off with distance. Interactive: as the cursor moves,
// a subtle second layer of brighter lines traces from cursor to nearby dots.
// (Close to the Linear Agent reference.)

function ConnectTheDots({ rows = 10, cols = 30, height = 520 }) {
  const wrapRef = React.useRef(null);
  const [size, setSize] = React.useState({ w: 1000, h: height });
  const [mouse, setMouse] = React.useState({ x: -1, y: -1, inside: false });
  const [visible, setVisible] = React.useState(false);
  const [activated, setActivated] = React.useState(0);

  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const io = new IntersectionObserver(e => setVisible(e[0]?.isIntersecting ?? false), { rootMargin: '100px' });
    io.observe(el); return () => io.disconnect();
  }, []);
  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const ro = new ResizeObserver(entries => {
      const r = entries[0].contentRect;
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(el); return () => ro.disconnect();
  }, []);

  // Reveal: lines fan in from center outward, ~1.6s total
  React.useEffect(() => {
    if (!visible) return;
    const start = performance.now();
    let raf;
    const step = (now) => {
      const t = Math.min(1, (now - start) / 1600);
      setActivated(t);
      if (t < 1) raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, [visible]);

  const { w, h } = size;
  const cx = w / 2, cy = h / 2;

  const pts = React.useMemo(() => {
    const list = [];
    const padX = 30, padY = 40;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        const x = padX + (c / (cols - 1)) * (w - padX * 2);
        const y = padY + (r / (rows - 1)) * (h - padY * 2);
        list.push({ x, y });
      }
    }
    return list;
  }, [rows, cols, w, h]);

  const maxDist = Math.hypot(w / 2, h / 2);

  return (
    <div
      ref={wrapRef}
      onMouseMove={(e) => {
        const r = wrapRef.current.getBoundingClientRect();
        setMouse({ x: e.clientX - r.left, y: e.clientY - r.top, inside: true });
      }}
      onMouseLeave={() => setMouse({ x: -1, y: -1, inside: false })}
      style={{
        position: 'relative', width: '100%', height,
        background: '#08050f', overflow: 'hidden',
      }}
    >
      <svg width={w} height={h} style={{ position: 'absolute', inset: 0, display: 'block' }}>
        {/* Layer 1: radiating lines from CENTER — always on */}
        <g stroke="rgba(255,255,255,0.55)" strokeWidth="0.55" strokeLinecap="round">
          {pts.map((p, i) => {
            const dx = p.x - cx, dy = p.y - cy;
            const dist = Math.hypot(dx, dy);
            // Close lines stronger. Entry reveal: lines grow from 0→1 based on stagger.
            const reveal = Math.max(0, Math.min(1, activated * 2.2 - (dist / maxDist) * 1.4));
            const endX = cx + dx * reveal;
            const endY = cy + dy * reveal;
            // Attenuate base opacity with distance (a little)
            const baseOp = 0.25 + 0.75 * (1 - Math.min(1, dist / maxDist) * 0.35);
            return (
              <line key={`c${i}`} x1={cx} y1={cy} x2={endX} y2={endY} opacity={baseOp * activated}/>
            );
          })}
        </g>

        {/* Layer 2: brighter accent lines from CURSOR to near dots — hover only */}
        {mouse.inside && (
          <g stroke="var(--wf-accent, #6e1320)" strokeWidth="0.8" strokeLinecap="round">
            {pts.map((p, i) => {
              const dx = p.x - mouse.x, dy = p.y - mouse.y;
              const dist = Math.hypot(dx, dy);
              if (dist > 260) return null; // only nearby dots
              const op = Math.max(0, 1 - dist / 260) * 0.9;
              return (
                <line key={`m${i}`} x1={mouse.x} y1={mouse.y} x2={p.x} y2={p.y} opacity={op}/>
              );
            })}
          </g>
        )}

        {/* Dots */}
        <g fill="rgba(255,255,255,0.6)">
          {pts.map((p, i) => (
            <circle key={i} cx={p.x} cy={p.y} r="1.5"/>
          ))}
        </g>

        {/* Center core */}
        <g>
          <circle cx={cx} cy={cy} r="30" fill="rgba(255,255,255,0.04)"/>
          <circle cx={cx} cy={cy} r="18" fill="rgba(255,255,255,0.08)"/>
          <circle cx={cx} cy={cy} r="4.5" fill="#fff"/>
        </g>

        {/* Cursor crosshair (subtle) */}
        {mouse.inside && (
          <g stroke="var(--wf-accent, #6e1320)" strokeWidth="1" opacity="0.5">
            <circle cx={mouse.x} cy={mouse.y} r="8" fill="none"/>
          </g>
        )}
      </svg>

      {/* Corner eyebrow */}
      <div style={{
        position: 'absolute', top: 20, left: 24,
        fontFamily: 'var(--wf-font-mono)', fontSize: 10.5,
        letterSpacing: '0.14em', textTransform: 'uppercase',
        color: 'rgba(255,255,255,0.45)',
      }}>
        Now · Practices
      </div>

      {/* Caption beneath the figure */}
      <div style={{
        position: 'absolute', left: 0, right: 0, bottom: 26, textAlign: 'center',
        fontFamily: 'var(--wf-font-mono)', fontSize: 11,
        letterSpacing: '0.08em',
        color: 'rgba(255,255,255,0.5)',
      }}>
        Every artifact. One point of truth. <span style={{ color: 'rgba(255,255,255,0.3)' }}>· Rhea Purohit · April 10, 2026</span>
      </div>
    </div>
  );
}

// ─── ReconciliationFlow ───────────────────────────────────────────────────
// Horizontal flow: N disparate inputs (left) → pulse hub (center) → N outputs (right).
// Orthogonal routing, arrowheads, some lines dashed (different data kinds).
// Hovering an input lights its path through the hub.
function ReconciliationFlow({ height = 420 }) {
  const wrapRef = React.useRef(null);
  const [size, setSize] = React.useState({ w: 1000, h: height });
  const [hovered, setHovered] = React.useState(null);

  React.useEffect(() => {
    const el = wrapRef.current; if (!el) return;
    const ro = new ResizeObserver(entries => {
      const r = entries[0].contentRect;
      setSize({ w: r.width, h: r.height });
    });
    ro.observe(el); return () => ro.disconnect();
  }, []);

  const inputs = [
    { id: 'email',   label: 'Email threads',   dashed: false },
    { id: 'rfi',     label: 'RFIs',            dashed: false },
    { id: 'drawings',label: 'Drawings',        dashed: true  },
    { id: 'costs',   label: 'Cost reports',    dashed: false },
    { id: 'sched',   label: 'Schedule',        dashed: true  },
    { id: 'field',   label: 'Daily reports',   dashed: false },
    { id: 'chat',    label: 'Chat',            dashed: true  },
    { id: 'specs',   label: 'Specs',           dashed: false },
  ];
  const outputs = [
    { id: 'owner',   label: 'Owner briefing' },
    { id: 'cons',    label: 'Consultant queue' },
    { id: 'contr',   label: 'Contractor plan' },
    { id: 'audit',   label: 'Audit trail' },
    { id: 'ai',      label: 'AI answers' },
    { id: 'board',   label: 'Board report' },
  ];

  const { w, h } = size;
  const hubX = w / 2, hubY = h / 2;
  const leftLabelX = 20;
  const rightLabelX = w - 20;
  const pinchLeft = hubX - 70;
  const pinchRight = hubX + 70;

  const leftPath = (x1, y1, x2, y2) => {
    const bend = pinchLeft - 20;
    return `M${x1} ${y1} L${bend} ${y1} Q${pinchLeft} ${y1} ${pinchLeft} ${(y1 + y2) / 2} Q${pinchLeft} ${y2} ${x2} ${y2}`;
  };
  const rightPath = (x1, y1, x2, y2) => {
    const bend = pinchRight + 20;
    return `M${x1} ${y1} L${bend} ${y1} Q${pinchRight} ${y1} ${pinchRight} ${(y1 + y2) / 2} Q${pinchRight} ${y2} ${x2} ${y2}`;
  };

  return (
    <div ref={wrapRef} style={{
      position: 'relative', width: '100%', height,
      background: '#0b0612', borderRadius: 12, overflow: 'hidden',
      border: '1px solid rgba(255,255,255,0.06)',
    }}>
      <svg width={w} height={h} style={{ position: 'absolute', inset: 0, display: 'block' }}>
        <defs>
          <marker id="rfArrowL" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="rgba(255,255,255,0.6)"/>
          </marker>
          <marker id="rfArrowR" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="rgba(255,255,255,0.6)"/>
          </marker>
          <marker id="rfArrowHot" markerWidth="8" markerHeight="8" refX="7" refY="4" orient="auto">
            <path d="M0 0 L8 4 L0 8 Z" fill="var(--wf-accent, #6e1320)"/>
          </marker>
        </defs>

        {inputs.map((inp, i) => {
          const y = 40 + i * ((h - 80) / (inputs.length - 1));
          const isHot = hovered === inp.id;
          return (
            <g key={inp.id}
              onMouseEnter={() => setHovered(inp.id)}
              onMouseLeave={() => setHovered(hh => hh === inp.id ? null : hh)}
              style={{ cursor: 'pointer' }}
            >
              <rect x={leftLabelX - 4} y={y - 10} width={pinchLeft - leftLabelX} height={20} fill="transparent"/>
              <path
                d={leftPath(leftLabelX + 90, y, pinchLeft, hubY)}
                stroke={isHot ? 'var(--wf-accent, #6e1320)' : 'rgba(255,255,255,0.5)'}
                strokeWidth={isHot ? 1.8 : 1}
                strokeDasharray={inp.dashed ? '2 4' : 'none'}
                fill="none"
                markerEnd={isHot ? 'url(#rfArrowHot)' : 'url(#rfArrowL)'}
                style={{ transition: 'stroke 240ms ease, stroke-width 240ms ease' }}
              />
              <text x={leftLabelX} y={y + 4}
                fontSize="11" fontFamily="var(--wf-font-mono)"
                fill={isHot ? 'var(--wf-accent, #6e1320)' : 'rgba(255,255,255,0.65)'}
                style={{ transition: 'fill 240ms ease', pointerEvents: 'none' }}>
                {inp.label}
              </text>
            </g>
          );
        })}

        {outputs.map((out, i) => {
          const y = 60 + i * ((h - 120) / (outputs.length - 1));
          const isHot = hovered === out.id;
          return (
            <g key={out.id}
              onMouseEnter={() => setHovered(out.id)}
              onMouseLeave={() => setHovered(hh => hh === out.id ? null : hh)}
              style={{ cursor: 'pointer' }}
            >
              <rect x={pinchRight} y={y - 10} width={rightLabelX - pinchRight + 4} height={20} fill="transparent"/>
              <path
                d={rightPath(pinchRight, hubY, rightLabelX - 110, y)}
                stroke={isHot ? 'var(--wf-accent, #6e1320)' : 'rgba(255,255,255,0.5)'}
                strokeWidth={isHot ? 1.8 : 1}
                fill="none"
                markerEnd={isHot ? 'url(#rfArrowHot)' : 'url(#rfArrowR)'}
                style={{ transition: 'stroke 240ms ease, stroke-width 240ms ease' }}
              />
              <text x={rightLabelX} y={y + 4}
                fontSize="11" fontFamily="var(--wf-font-mono)"
                fill={isHot ? 'var(--wf-accent, #6e1320)' : 'rgba(255,255,255,0.65)'}
                textAnchor="end"
                style={{ transition: 'fill 240ms ease', pointerEvents: 'none' }}>
                {out.label}
              </text>
            </g>
          );
        })}

        <g>
          <circle cx={hubX} cy={hubY} r="26" fill="rgba(110,19,32,0.18)"/>
          <circle cx={hubX} cy={hubY} r="14" fill="var(--wf-accent, #6e1320)"/>
          <text x={hubX} y={hubY + 4}
            textAnchor="middle" fontSize="10" fontWeight="700" fill="#fff"
            fontFamily="var(--wf-font-mono)" letterSpacing="0.08em">
            ⇄
          </text>
        </g>
      </svg>

      <div style={{ position: 'absolute', top: 14, left: 16, fontFamily: 'var(--wf-font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
        Fig. 08 · Reconciliation flow
      </div>
      <div style={{ position: 'absolute', top: 14, right: 16, fontFamily: 'var(--wf-font-mono)', fontSize: 10, letterSpacing: '0.1em', textTransform: 'uppercase', color: 'rgba(255,255,255,0.4)' }}>
        Hover a stream to trace its path
      </div>
    </div>
  );
}

Object.assign(window, { ConnectTheDots, ReconciliationFlow });
