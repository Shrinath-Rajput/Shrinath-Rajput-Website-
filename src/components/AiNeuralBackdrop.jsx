import React from 'react';

export const AiNeuralBackdrop = ({
  className = '',
  style = {},
}) => {
  return (
    <div
      className={className}
      style={{
        position: 'absolute',
        top: '5%',
        right: '4%',
        width: '520px',
        height: '480px',
        pointerEvents: 'none',
        zIndex: 1,
        opacity: 0.85,
        ...style,
      }}
    >
      <svg
        viewBox="0 0 520 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%' }}
      >
        <defs>
          <radialGradient id="neuralGlow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.35" />
            <stop offset="60%" stopColor="#22c55e" stopOpacity="0.12" />
            <stop offset="100%" stopColor="#000000" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="cyanLine" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#c8ff00" stopOpacity="0.15" />
          </linearGradient>
          <linearGradient id="barGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="rgba(56, 189, 248, 0.15)" />
            <stop offset="100%" stopColor="rgba(56, 189, 248, 0.75)" />
          </linearGradient>
        </defs>

        {/* Ambient Neural Glow */}
        <circle cx="260" cy="220" r="160" fill="url(#neuralGlow)" />

        {/* Holographic Neural Brain Synapse Node Cluster */}
        <g opacity="0.65" transform="translate(180, 140)">
          {/* Brain Contour Lines */}
          <path
            d="M 40 70 Q 10 30 50 10 Q 90 -5 120 20 Q 150 40 140 80 Q 130 110 80 120 Q 40 110 40 70 Z"
            stroke="rgba(56, 189, 248, 0.45)"
            strokeWidth="1.2"
            strokeDasharray="4 3"
            fill="none"
          />
          <path
            d="M 50 25 Q 75 10 110 25 M 65 45 Q 90 35 125 50 M 45 65 Q 85 55 130 75 M 55 90 Q 95 85 120 100"
            stroke="rgba(56, 189, 248, 0.35)"
            strokeWidth="1"
            fill="none"
          />

          {/* Synapse Nodes */}
          {[
            { cx: 50, cy: 30, r: 2.5, c: '#38bdf8' },
            { cx: 85, cy: 18, r: 3, c: '#c8ff00' },
            { cx: 120, cy: 35, r: 2, c: '#38bdf8' },
            { cx: 70, cy: 50, r: 2.5, c: '#38bdf8' },
            { cx: 105, cy: 60, r: 3.5, c: '#c8ff00' },
            { cx: 135, cy: 75, r: 2, c: '#38bdf8' },
            { cx: 55, cy: 80, r: 2.5, c: '#38bdf8' },
            { cx: 90, cy: 95, r: 3, c: '#c8ff00' },
            { cx: 115, cy: 105, r: 2, c: '#38bdf8' },
          ].map((pt, i) => (
            <circle
              key={i}
              cx={pt.cx}
              cy={pt.cy}
              r={pt.r}
              fill={pt.c}
              filter="drop-shadow(0 0 6px currentColor)"
            />
          ))}

          {/* Interconnecting Synapse Lines */}
          <line x1="50" y1="30" x2="85" y2="18" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="85" y1="18" x2="120" y2="35" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="50" y1="30" x2="70" y2="50" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="70" y1="50" x2="105" y2="60" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="105" y1="60" x2="135" y2="75" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="70" y1="50" x2="55" y2="80" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="55" y1="80" x2="90" y2="95" stroke="url(#cyanLine)" strokeWidth="0.9" />
          <line x1="90" y1="95" x2="115" y2="105" stroke="url(#cyanLine)" strokeWidth="0.9" />
        </g>

        {/* Cyber Telemetry Data Bars (Right Side) */}
        <g opacity="0.55" transform="translate(390, 240)">
          <rect x="0" y="30" width="4" height="25" rx="2" fill="url(#barGrad)" />
          <rect x="8" y="15" width="4" height="40" rx="2" fill="url(#barGrad)" />
          <rect x="16" y="5" width="4" height="50" rx="2" fill="url(#barGrad)" />
          <rect x="24" y="22" width="4" height="33" rx="2" fill="url(#barGrad)" />
          <rect x="32" y="10" width="4" height="45" rx="2" fill="url(#barGrad)" />
        </g>

        {/* Cyber Telemetry Bracket Marks */}
        <g opacity="0.45" stroke="rgba(56, 189, 248, 0.6)" strokeWidth="1" fill="none">
          <path d="M 60 160 L 45 160 L 45 190" />
          <path d="M 440 160 L 455 160 L 455 190" />
          <path d="M 60 360 L 45 360 L 45 330" />
          <path d="M 440 360 L 455 360 L 455 330" />
        </g>
      </svg>
    </div>
  );
};
