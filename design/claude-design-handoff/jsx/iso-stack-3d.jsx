// ── IsoStack3D — wireframe isometric 3D illustration on dark card ──────────
// Variants: 'stack' (layered sheets), 'cubes' (exploded cubes), 'fan' (fanned sheets)
// Responds to cursor parallax + subtle idle orbit.
function IsoStack3D({ variant = 'stack', caption, label }) {
  const wrap = React.useRef(null);
  const [tx, setTx] = React.useState({ rx: 0, ry: 0, hover: false });
  const onMove = (e) => {
    const r = wrap.current.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    setTx({ rx: (0.5 - py) * 10, ry: (px - 0.5) * 14, hover: true });
  };
  const onLeave = () => setTx({ rx: 0, ry: 0, hover: false });

  return (
    <div
      ref={wrap}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      style={{
        position: 'relative', width: '100%', height: '100%',
        minHeight: 320,
        background: '#0b0b0c',
        color: '#fff',
        overflow: 'hidden',
        display: 'grid', placeItems: 'center',
        cursor: 'crosshair',
      }}
    >
      {/* grid tick */}
      <div style={{ position: 'absolute', top: 16, left: 16, fontFamily: 'var(--wf-font-mono)', fontSize: 10, letterSpacing: '0.15em', color: 'rgba(255,255,255,0.35)' }}>
        {label || 'FIG 0.1'}
      </div>
      {/* caption bottom-right */}
      {caption && (
        <div style={{ position: 'absolute', bottom: 16, right: 16, fontFamily: 'var(--wf-font-mono)', fontSize: 10, color: 'rgba(255,255,255,0.35)', textAlign: 'right', maxWidth: 180, lineHeight: 1.5 }}>
          {caption}
        </div>
      )}

      <style>{`
        @keyframes isoOrbit { 0%, 100% { transform: rotateX(var(--rx,0deg)) rotateY(var(--ry,0deg)) rotateZ(0deg); }
                              50%      { transform: rotateX(calc(var(--rx,0deg) + 2deg)) rotateY(calc(var(--ry,0deg) + 4deg)) rotateZ(0.5deg); } }
        @keyframes isoFloat { 0%, 100% { transform: translateY(0); }
                              50%      { transform: translateY(-6px); } }
      `}</style>

      <div style={{
        width: 320, height: 240,
        position: 'relative',
        perspective: 1400,
        transformStyle: 'preserve-3d',
      }}>
        <div style={{
          position: 'absolute', inset: 0,
          transformStyle: 'preserve-3d',
          // classic iso angle plus cursor response
          transform: `rotateX(${55 + tx.rx}deg) rotateZ(${-45 + tx.ry}deg)`,
          transition: tx.hover ? 'transform 120ms ease-out' : 'transform 700ms cubic-bezier(.2,.8,.2,1)',
          animation: tx.hover ? 'none' : 'isoFloat 5s ease-in-out infinite',
        }}>
          {variant === 'stack' && <IsoStackLayers/>}
          {variant === 'cubes' && <IsoCubes/>}
          {variant === 'fan'   && <IsoFan/>}
          {variant === 'graph' && <IsoGraph/>}
        </div>
      </div>
    </div>
  );
}

// Plane stack — rows of nested squares (like FIG 0.2)
function IsoStackLayers() {
  const strokes = ['rgba(255,255,255,0.9)', 'rgba(255,255,255,0.7)', 'rgba(255,255,255,0.55)', 'rgba(255,255,255,0.4)', 'rgba(255,255,255,0.3)'];
  return (
    <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
      {[0, 1, 2, 3, 4, 5].map((i) => {
        const z = (5 - i) * 22;
        const s = 1 - i * 0.04;
        const stroke = strokes[Math.min(i, strokes.length - 1)];
        return (
          <div key={i} style={{
            position: 'absolute', left: '50%', top: '50%',
            width: 200 * s, height: 200 * s,
            transform: `translate(-50%, -50%) translateZ(${z}px)`,
            border: `1.25px solid ${stroke}`,
            boxShadow: i === 0 ? '0 0 0 1px rgba(255,255,255,0.06)' : 'none',
          }}>
            {/* interior rings (only on top layer) */}
            {i === 0 && (
              <div style={{ position: 'absolute', inset: 30, border: '1px solid rgba(255,255,255,0.5)' }}>
                <div style={{ position: 'absolute', inset: 16, border: '1px solid rgba(255,255,255,0.45)', borderRadius: '50%' }}/>
              </div>
            )}
          </div>
        );
      })}
      {/* vertical corner posts connecting layers */}
      {[[-100,-100], [100,-100], [100,100], [-100,100]].map(([x,y], i) => (
        <div key={'p'+i} style={{
          position: 'absolute', left: '50%', top: '50%',
          width: 1, height: 132,
          transform: `translate(${x}px, ${y}px) rotateX(-90deg) translateZ(-66px)`,
          background: 'rgba(255,255,255,0.25)',
          borderLeft: '1px dashed rgba(255,255,255,0.28)',
        }}/>
      ))}
    </div>
  );
}

// Exploded cubes — multiple small cubes at staggered positions
function IsoCubes() {
  const cubes = [
    { x: -40, y: -40, z: 40, s: 42 },
    { x:  50, y: -30, z: 20, s: 32 },
    { x:  60, y:  40, z: 10, s: 36 },
    { x: -30, y:  50, z:  0, s: 30 },
    { x:   0, y:   0, z: 70, s: 28 },
  ];
  return (
    <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
      {cubes.map((c, i) => <WireCube key={i} {...c}/>)}
    </div>
  );
}

function WireCube({ x, y, z, s }) {
  const faceStyle = {
    position: 'absolute', width: s, height: s,
    border: '1.25px solid rgba(255,255,255,0.75)',
    background: 'rgba(0,0,0,0.2)',
  };
  return (
    <div style={{
      position: 'absolute', left: '50%', top: '50%',
      width: s, height: s,
      transform: `translate(-50%, -50%) translate3d(${x}px, ${y}px, ${z}px)`,
      transformStyle: 'preserve-3d',
    }}>
      {/* top */}
      <div style={{ ...faceStyle, transform: `translateZ(${s / 2}px)`, background: 'rgba(255,255,255,0.04)' }}/>
      {/* bottom */}
      <div style={{ ...faceStyle, transform: `rotateX(180deg) translateZ(${s / 2}px)` }}/>
      {/* front */}
      <div style={{ ...faceStyle, transform: `rotateX(90deg) translateZ(${s / 2}px)` }}/>
      {/* back */}
      <div style={{ ...faceStyle, transform: `rotateX(-90deg) translateZ(${s / 2}px)` }}/>
      {/* left */}
      <div style={{ ...faceStyle, transform: `rotateY(-90deg) translateZ(${s / 2}px)` }}/>
      {/* right */}
      <div style={{ ...faceStyle, transform: `rotateY(90deg) translateZ(${s / 2}px)` }}/>
    </div>
  );
}

// Fan — sheets fanning out (like FIG 0.4)
function IsoFan() {
  return (
    <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
      {[0, 1, 2, 3, 4, 5, 6].map((i) => {
        const rot = i * 6;
        const offset = i * 12;
        const opacity = 0.85 - i * 0.08;
        return (
          <div key={i} style={{
            position: 'absolute', left: '50%', top: '50%',
            width: 170, height: 60,
            transform: `translate(-50%, -50%) rotateZ(${rot}deg) translateX(${offset}px) translateZ(${-i * 4}px)`,
            border: `1.25px solid rgba(255,255,255,${opacity})`,
            background: 'rgba(0,0,0,0.12)',
          }}/>
        );
      })}
    </div>
  );
}

// Graph — nodes + edges flat on iso plane (for document-graph/risk-radar)
function IsoGraph() {
  const nodes = [
    { x: -60, y: -60 }, { x: 50, y: -50 }, { x: -40, y: 50 },
    { x: 70, y: 40 },   { x: 0, y: 0 },    { x: -70, y: 10 },
    { x: 30, y: -10 },
  ];
  const edges = [[4,0],[4,1],[4,2],[4,3],[4,5],[4,6],[0,5],[1,6],[2,3]];
  return (
    <div style={{ position: 'absolute', inset: 0, transformStyle: 'preserve-3d' }}>
      <svg viewBox="-120 -120 240 240" style={{
        position: 'absolute', left: '50%', top: '50%',
        width: 240, height: 240, transform: 'translate(-50%,-50%)', overflow: 'visible',
      }}>
        {edges.map((e, i) => (
          <line key={i}
                x1={nodes[e[0]].x} y1={nodes[e[0]].y}
                x2={nodes[e[1]].x} y2={nodes[e[1]].y}
                stroke="rgba(255,255,255,0.35)" strokeWidth="0.8" strokeDasharray="2 3"/>
        ))}
      </svg>
      {nodes.map((n, i) => (
        <div key={i} style={{
          position: 'absolute', left: '50%', top: '50%',
          width: i === 4 ? 28 : 14, height: i === 4 ? 28 : 14,
          transform: `translate(-50%,-50%) translate(${n.x}px, ${n.y}px) translateZ(${i === 4 ? 20 : 0}px)`,
          background: i === 4 ? 'rgba(110,19,32,0.85)' : 'rgba(255,255,255,0.08)',
          border: i === 4 ? '1px solid rgba(255,255,255,0.5)' : '1px solid rgba(255,255,255,0.6)',
          boxShadow: i === 4 ? '0 0 20px rgba(110,19,32,0.7)' : 'none',
        }}/>
      ))}
    </div>
  );
}

Object.assign(window, { IsoStack3D });
