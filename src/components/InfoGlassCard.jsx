import React from 'react';

export const InfoGlassCard = ({
  title,
  icon: Icon,
  badge,
  children,
  className = '',
  style = {},
}) => {
  return (
    <div
      className={`real-glass-card ${className}`}
      style={{
        padding: '1.15rem 1.25rem',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        height: '100%',
        boxSizing: 'border-box',
        ...style,
      }}
    >
      {/* Header with Title and Optional Icon / Badge */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: '0.85rem',
          paddingBottom: '0.55rem',
          borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
          position: 'relative',
          zIndex: 3,
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-lime)',
              boxShadow: '0 0 8px var(--accent-lime)',
              display: 'inline-block',
              flexShrink: 0,
            }}
          />
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 700,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              color: '#ffffff',
            }}
          >
            {title}
          </span>
        </div>

        {Icon && (
          <Icon
            size={14}
            color="var(--accent-lime)"
            style={{ opacity: 0.85, flexShrink: 0 }}
          />
        )}
        {badge && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              color: 'var(--accent-lime)',
              letterSpacing: '0.06em',
              background: 'rgba(200, 255, 0, 0.08)',
              padding: '0.15rem 0.45rem',
              borderRadius: '4px',
              border: '1px solid rgba(200, 255, 0, 0.20)',
            }}
          >
            {badge}
          </span>
        )}
      </div>

      {/* Card Content Area */}
      <div
        style={{
          position: 'relative',
          zIndex: 3,
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
};
