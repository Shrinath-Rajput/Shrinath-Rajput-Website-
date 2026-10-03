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
      badgeBg: 'rgba(200, 255, 0, 0.14)',
      badgeBorder: 'rgba(200, 255, 0, 0.45)',
    },
    {
      num: '02',
      title: 'Full Stack Development',
      desc: 'Building scalable & modern web applications.',
      icon: Box,
      accent: '#38bdf8',
      badgeBg: 'rgba(56, 189, 248, 0.14)',
      badgeBorder: 'rgba(56, 189, 248, 0.45)',
    },
    {
      num: '03',
      title: 'Computer Vision & Deep Learning',
      desc: 'Solving real-world challenges with AI models.',
      icon: Database,
      accent: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.14)',
      badgeBorder: 'rgba(16, 185, 129, 0.45)',
    },
    {
      num: '04',
      title: 'Agentic AI & Automation',
      desc: 'Creating autonomous agents for next-gen tech.',
      icon: Rocket,
      accent: '#a855f7',
      badgeBg: 'rgba(168, 85, 247, 0.14)',
      badgeBorder: 'rgba(168, 85, 247, 0.45)',
    },
  ];

  return (
    <div
      className="hero-service-strip-container"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '1.25rem auto 1.75rem',
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
          alignItems: 'stretch',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 18, 28, 0.48) 50%, rgba(6, 10, 18, 0.65) 100%)',
          backdropFilter: 'blur(28px) saturate(150%)',
          WebkitBackdropFilter: 'blur(28px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(200, 255, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
          overflow: 'hidden',
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
                gap: '16px',
                padding: '1.45rem clamp(1.2rem, 1.8vw, 2.2rem)',
                position: 'relative',
                borderRight: isNotLast ? '1px solid rgba(255, 255, 255, 0.10)' : 'none',
                transition: 'all 0.3s ease',
              }}
            >
              {/* Circular Glowing Icon Badge */}
              <div
                style={{
                  width: '46px',
                  height: '46px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: item.badgeBg,
                  border: `1px solid ${item.badgeBorder}`,
                  boxShadow: `0 0 18px ${item.badgeBg}`,
                  flexShrink: 0,
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease',
                }}
              >
                <IconComponent size={22} color={item.accent} />
              </div>

              {/* Text Info */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', minWidth: 0 }}>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: item.accent,
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                  }}
                >
                  {item.num}
                </div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.25,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--text-muted)',
                    lineHeight: 1.4,
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
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
