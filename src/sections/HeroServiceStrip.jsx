import React from 'react';
import { Zap, Box, Database, Rocket } from 'lucide-react';

export const HeroServiceStrip = () => {
  const services = [
    {
      num: '01',
      title: 'AI / ML Engineering',
      desc: 'Designing intelligent systems for real-world impact.',
      icon: Zap,
      accent: '#c8ff00',
      badgeBg: 'rgba(200, 255, 0, 0.12)',
      badgeBorder: '#c8ff00',
      glow: 'rgba(200, 255, 0, 0.40)',
    },
    {
      num: '02',
      title: 'Full Stack Development',
      desc: 'Building scalable and modern web applications.',
      icon: Box,
      accent: '#38bdf8',
      badgeBg: 'rgba(56, 189, 248, 0.12)',
      badgeBorder: '#38bdf8',
      glow: 'rgba(56, 189, 248, 0.40)',
    },
    {
      num: '03',
      title: 'Computer Vision & Deep Learning',
      desc: 'Solving real-world challenges with AI models.',
      icon: Database,
      accent: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.12)',
      badgeBorder: '#10b981',
      glow: 'rgba(16, 185, 129, 0.40)',
    },
    {
      num: '04',
      title: 'Agentic AI & Automation',
      desc: 'Creating autonomous agents for next-generation technology.',
      icon: Rocket,
      accent: '#a855f7',
      badgeBg: 'rgba(168, 85, 247, 0.12)',
      badgeBorder: '#a855f7',
      glow: 'rgba(168, 85, 247, 0.40)',
    },
  ];

  return (
    <div
      className="hero-service-strip-container"
      style={{
        width: '100%',
        margin: 0,
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="glass-service-strip glass-reflection"
        style={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
          alignItems: 'center',
          borderRadius: '20px',
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 16, 26, 0.60) 50%, rgba(6, 10, 18, 0.82) 100%)',
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          border: '1px solid rgba(0, 240, 255, 0.28)',
          boxShadow:
            '0 20px 50px rgba(0, 0, 0, 0.60), 0 0 35px rgba(0, 240, 255, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.20)',
          overflow: 'hidden',
          boxSizing: 'border-box',
        }}
      >
        {services.map((item, index) => {
          const IconComponent = item.icon;
          const isNotLast = index < services.length - 1;

          return (
            <div
              key={item.num}
              className="service-strip-col"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '14px',
                padding: '1.15rem clamp(1rem, 1.6vw, 1.8rem)',
                position: 'relative',
                borderRight: isNotLast ? '1px solid rgba(255, 255, 255, 0.09)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Distinct Neon-Glowing Icon Circle */}
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: item.badgeBg,
                  border: `1.5px solid ${item.badgeBorder}`,
                  boxShadow: `0 0 16px ${item.glow}`,
                  flexShrink: 0,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <IconComponent size={20} color={item.accent} />
              </div>

              {/* Text Info: Numbered label, bold title, short description */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.70rem',
                    color: item.accent,
                    letterSpacing: '0.08em',
                    fontWeight: 700,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.88rem, 1.05vw, 1.02rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: 0,
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.76rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.35,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    margin: 0,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
