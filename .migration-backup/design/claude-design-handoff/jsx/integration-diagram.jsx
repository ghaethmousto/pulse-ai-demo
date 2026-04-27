// Integration Diagram — dark "connect to existing systems" graphic
// Central Pulse node, branching out to ERP / scheduling / accounting / field tools.
// Inspired by Stripe's orchestration diagram: clean pill-shaped nodes on a grid.

function IntegrationDiagram() {
  // Node positions are in a 1200x520 viewBox
  // Layers (top→bottom):
  //   row A (top)    — source-of-record systems: ERP, Cost, Scheduling, Permits, Procurement
  //   row B          — connector layer: SDK, Event Destinations
  //   row C (center) — Pulse hub, with App Marketplace left + Data Pipeline right
  //   row D (bottom) — Orchestration → downstream: Daily Reports, BI, Archive

  const nodes = {
    // row A
    erp: { x: 210, y: 60, w: 78, h: 34, label: 'ERP' },
    cost: { x: 312, y: 60, w: 110, h: 34, label: 'Cost system' },
    sched: { x: 446, y: 60, w: 110, h: 34, label: 'Scheduling' },
    permits: { x: 580, y: 60, w: 92, h: 34, label: 'Permits' },
    procure: { x: 696, y: 60, w: 120, h: 34, label: 'Procurement' },
    bim: { x: 840, y: 60, w: 92, h: 34, label: 'BIM / CDE' },

    // row B (connectors)
    sdk: { x: 360, y: 150, w: 80, h: 34, label: 'SDK', kind: 'accent' },
    events: { x: 720, y: 150, w: 180, h: 34, label: 'Event destinations', kind: 'accent' },

    // row C — center
    marketplace: { x: 130, y: 240, w: 170, h: 34, label: 'App Marketplace →', kind: 'accent' },
    pulse: { x: 520, y: 226, w: 130, h: 62, label: 'pulse', kind: 'hub' },
    pipeline: { x: 770, y: 240, w: 170, h: 34, label: 'Data Pipeline', kind: 'accent' },

    // left icon cluster + right icon
    azure: { x: 1010, y: 236, w: 44, h: 44, label: 'A', kind: 'icon-right' },

    // row D
    orch: { x: 544, y: 330, w: 140, h: 34, label: 'Orchestration', kind: 'accent' },
    daily: { x: 380, y: 420, w: 120, h: 34, label: 'Daily reports' },
    bi: { x: 540, y: 420, w: 90, h: 34, label: 'BI' },
    archive: { x: 670, y: 420, w: 120, h: 34, label: 'Archive' }
  };

  // Connections (pairs of node keys, with optional path hint)
  const edges = [
  // top → SDK
  ['erp', 'sdk'],
  ['cost', 'sdk'],
  ['sched', 'sdk'],
  // top → Event destinations
  ['permits', 'events'],
  ['procure', 'events'],
  ['bim', 'events'],
  // SDK / Events → Pulse
  ['sdk', 'pulse'],
  ['events', 'pulse'],
  // Pulse ↔ marketplace / pipeline
  ['marketplace', 'pulse'],
  ['pulse', 'pipeline'],
  ['pipeline', 'azure'],
  // Pulse → Orchestration → downstream
  ['pulse', 'orch'],
  ['orch', 'daily'],
  ['orch', 'bi'],
  ['orch', 'archive']];


  const getAnchor = (n, side) => {
    switch (side) {
      case 'top':return { x: n.x + n.w / 2, y: n.y };
      case 'bottom':return { x: n.x + n.w / 2, y: n.y + n.h };
      case 'left':return { x: n.x, y: n.y + n.h / 2 };
      case 'right':return { x: n.x + n.w, y: n.y + n.h / 2 };
    }
  };

  // Orthogonal path between two nodes
  const pathFor = (a, b) => {
    // Decide anchor sides based on relative position
    let aSide, bSide;
    const aCx = a.x + a.w / 2,aCy = a.y + a.h / 2;
    const bCx = b.x + b.w / 2,bCy = b.y + b.h / 2;
    const dx = bCx - aCx,dy = bCy - aCy;
    if (Math.abs(dy) > Math.abs(dx)) {
      aSide = dy > 0 ? 'bottom' : 'top';
      bSide = dy > 0 ? 'top' : 'bottom';
    } else {
      aSide = dx > 0 ? 'right' : 'left';
      bSide = dx > 0 ? 'left' : 'right';
    }
    const p1 = getAnchor(a, aSide);
    const p2 = getAnchor(b, bSide);

    // Use a single 90° bend in the middle (orthogonal, CRT-style)
    const midY = (p1.y + p2.y) / 2;
    const midX = (p1.x + p2.x) / 2;
    if (aSide === 'bottom' || aSide === 'top') {
      return `M${p1.x} ${p1.y} L${p1.x} ${midY} L${p2.x} ${midY} L${p2.x} ${p2.y}`;
    } else {
      return `M${p1.x} ${p1.y} L${midX} ${p1.y} L${midX} ${p2.y} L${p2.x} ${p2.y}`;
    }
  };

  // Left icon cluster — 4 small tool squares
  const iconCluster = [
  { c: '#1a1a1a', g: 'scissors' },
  { c: '#3a7ed4', g: 'xero' },
  { c: '#ffd733', g: 'box' },
  { c: '#e08a1f', g: 'deck' }];


  return (
    <section style={{
      padding: '100px 80px', position: 'relative',
      background: 'linear-gradient(180deg, #0e0b24 0%, #14102e 100%)',
      color: '#e8e3ff', overflow: 'hidden'
    }}>
      {/* faint dot grid */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.25,
        backgroundImage: 'radial-gradient(rgba(180,160,255,0.35) 1px, transparent 1px)',
        backgroundSize: '24px 24px' }} />

      <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ fontSize: 11, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(200,190,255,0.65)', fontFamily: 'var(--wf-font-mono)' }}>
          Integrations
        </div>
        <h2 style={{
          margin: '12px 0 0', maxWidth: 900,
          fontSize: 44, lineHeight: 1.15, fontWeight: 500, letterSpacing: '-0.02em',
          color: '#fff'
        }}>
          <span style={{ color: '#fff' }}>Connect to existing systems.</span>{' '}
          <span style={{ color: 'rgba(255,255,255,0.55)' }}>
            Orchestrate data across ERPs, schedulers, accounting, and BIM — and pipe it into
            Pulse with APIs, partner apps, or prebuilt integrations.
          </span>
        </h2>
      </div>

      {/* Diagram */}
      <div style={{ marginTop: 60, position: 'relative', width: "600px" }}>
        <svg viewBox="0 0 1200 520" width="100%" style={{ display: 'block', overflow: 'visible', height: "200px", width: "700px" }}>
          <defs>
            <marker id="dot" markerWidth="6" markerHeight="6" refX="3" refY="3">
              <circle cx="3" cy="3" r="1.8" fill="#6e4bb4" />
            </marker>
          </defs>

          {/* edges */}
          {edges.map(([a, b], i) =>
          <path key={i}
          d={pathFor(nodes[a], nodes[b])}
          stroke="rgba(180,160,255,0.38)" strokeWidth="1"
          strokeDasharray="2 4"
          fill="none" />

          )}

          {/* left icon cluster box */}
          <g transform="translate(30, 222)">
            <rect width="80" height="80" rx="8" fill="rgba(255,255,255,0.06)" stroke="rgba(180,160,255,0.25)" />
            {iconCluster.map((ic, i) => {
              const col = i % 2,row = Math.floor(i / 2);
              return (
                <rect key={i}
                x={8 + col * 36} y={8 + row * 36}
                width="28" height="28" rx="5"
                fill={ic.c} stroke="rgba(0,0,0,0.3)" />);

            })}
          </g>
          {/* line from cluster to marketplace */}
          <path d={`M110 262 L130 262`} stroke="rgba(180,160,255,0.4)" strokeDasharray="2 4" fill="none" />

          {/* nodes */}
          {Object.entries(nodes).map(([k, n]) => {
            const isHub = n.kind === 'hub';
            const isAccent = n.kind === 'accent';
            const isIcon = n.kind === 'icon-right';
            if (isIcon) {
              return (
                <g key={k}>
                  <rect x={n.x} y={n.y} width={n.w} height={n.h} rx="6"
                  fill="#2b7cc9" stroke="rgba(255,255,255,0.3)" />
                  <text x={n.x + n.w / 2} y={n.y + n.h / 2 + 5}
                  fontSize="18" fontWeight="700" fill="#fff" textAnchor="middle"
                  fontFamily="system-ui">{n.label}</text>
                </g>);

            }
            const fill = isHub ? '#6e4bb4' : isAccent ? '#4a3a88' : 'rgba(110,75,180,0.55)';
            const stroke = 'rgba(180,160,255,0.55)';
            return (
              <g key={k}>
                <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={isHub ? 10 : 6}
                fill={fill} stroke={stroke} strokeWidth="1" />
                <text x={n.x + n.w / 2} y={n.y + n.h / 2 + (isHub ? 6 : 5)}
                fontSize={isHub ? 20 : 12}
                fontWeight={isHub ? 600 : 500}
                fill="#fff" textAnchor="middle"
                fontFamily={isHub ? 'inherit' : 'var(--wf-font-mono)'}
                letterSpacing={isHub ? '-0.01em' : '0'}>
                  {n.label}
                </text>
              </g>);

          })}
        </svg>
      </div>

      {/* Legend row */}
      <div style={{ display: 'flex', gap: 40, marginTop: 40, fontSize: 12, color: 'rgba(200,190,255,0.7)', fontFamily: 'var(--wf-font-mono)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: '#6e4bb4' }} />
          Pulse hub
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: '#4a3a88' }} />
          Pulse-managed connector
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 14, height: 14, borderRadius: 3, background: 'rgba(110,75,180,0.55)', border: '1px solid rgba(180,160,255,0.55)' }} />
          Your existing system
        </div>
      </div>
    </section>);

}

Object.assign(window, { IntegrationDiagram });