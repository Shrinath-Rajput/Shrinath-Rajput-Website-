import React from 'react';
import { Brain, Settings, Network, Code2 } from 'lucide-react';

export const HomeRoles = () => {
  const roles = [
    {
      index: '01',
      title: 'Artificial Intelligence',
      subtitle: 'ML, Deep Learning, NLP, GenAI',
      icon: Brain,
      accent: '#38bdf8',
      badgeBg: 'rgba(56, 189, 248, 0.12)',
      badgeBorder: 'rgba(56, 189, 248, 0.35)',
    },
    {
      index: '02',
      title: 'Machine Learning Engineer',
      subtitle: 'Model Training, Optimization, MLOps',
      icon: Settings,
      accent: '#c8ff00',
      badgeBg: 'rgba(200, 255, 0, 0.12)',
      badgeBorder: 'rgba(200, 255, 0, 0.35)',
    },
    {
      index: '03',
      title: 'Deep Learning Engineer',
      subtitle: 'Neural Networks, Computer Vision',
      icon: Network,
      accent: '#10b981',
      badgeBg: 'rgba(16, 185, 129, 0.12)',
      badgeBorder: 'rgba(16, 185, 129, 0.35)',
    },
    {
      index: '04',
      title: 'Full Stack Developer',
      subtitle: 'Modern Web Apps, APIs, Databases',
      icon: Code2,
      accent: '#a855f7',
      badgeBg: 'rgba(168, 85, 247, 0.12)',
      badgeBorder: 'rgba(168, 85, 247, 0.35)',
    },
  ];

  return (
    <section
      id="home-roles"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '0 auto 1.75rem',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="glass-reflection"
        style={{
          width: '100%',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(10, 16, 26, 0.45) 50%, rgba(6, 10, 18, 0.65) 100%)',
          backdropFilter: 'blur(28px) saturate(150%)',
          WebkitBackdropFilter: 'blur(28px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45), 0 0 30px rgba(200, 255, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
          padding: 'clamp(1.6rem, 2.5vw, 2.5rem)',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) minmax(0, 3fr)',
          gap: 'clamp(1.5rem, 2.8vw, 3.2rem)',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Header info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          {/* Badge */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.38rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(200, 255, 0, 0.08)',
                border: '1px solid rgba(200, 255, 0, 0.35)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#c8ff00',
                letterSpacing: '0.12em',
                fontWeight: 700,
              }}
            >
              01 // MY ROLES
            </div>
          </div>

          {/* Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}
          >
            WHAT I DO
          </h2>

          {/* Subtitle */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.88rem, 1.05vw, 0.98rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '380px',
            }}
          >
            Bridging AI, full-stack development, and real-world problem solving to build scalable, impactful solutions.
          </p>
        </div>

        {/* Right Side: 4 Glass Role Cards */}
        <div
          className="home-roles-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(0.85rem, 1.3vw, 1.25rem)',
          }}
        >
          {roles.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.index}
                className="role-glass-card glass-reflection"
                style={{
                  position: 'relative',
                  borderRadius: '18px',
                  background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06) 0%, rgba(14, 20, 32, 0.55) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
                  padding: '1.35rem 1.15rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  minHeight: '154px',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                }}
              >
                {/* Top Row: Icon Badge & Index Number */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.25rem' }}>
                  <div
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: item.badgeBg,
                      border: `1px solid ${item.badgeBorder}`,
                      boxShadow: `0 0 14px ${item.badgeBg}`,
                      flexShrink: 0,
                    }}
                  >
                    <Icon size={20} color={item.accent} />
                  </div>
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'rgba(255, 255, 255, 0.35)',
                      letterSpacing: '0.08em',
                      fontWeight: 700,
                    }}
                  >
                    {item.index}
                  </span>
                </div>

                {/* Bottom Content: Title & Subtitle */}
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(0.92rem, 1.1vw, 1.05rem)',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '4px',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.35,
                      margin: 0,
                    }}
                  >
                    {item.subtitle}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
