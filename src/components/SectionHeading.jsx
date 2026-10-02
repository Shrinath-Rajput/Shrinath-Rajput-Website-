import React from 'react';

export const SectionHeading = ({ number, subtitle, title, alignment = 'left' }) => {
  const isRight = alignment === 'right';
  const isCenter = alignment === 'center';

  return (
    <div
      style={{
        marginBottom: 'clamp(2.5rem, 6vh, 4.5rem)',
        textAlign: isCenter ? 'center' : isRight ? 'right' : 'left',
        display: 'flex',
        flexDirection: 'column',
        alignItems: isCenter ? 'center' : isRight ? 'flex-end' : 'flex-start',
      }}
    >
      {/* Category Pill / Number */}
      <div
        style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '8px',
          padding: '0.35rem 0.85rem',
          borderRadius: '9999px',
          backgroundColor: 'rgba(200, 255, 0, 0.08)',
          border: '1px solid rgba(200, 255, 0, 0.25)',
          marginBottom: '1rem',
        }}
      >
        {number && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 700,
              color: 'var(--accent-lime)',
              letterSpacing: '0.1em',
            }}
          >
            {number}
          </span>
        )}
        {subtitle && (
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: '#f8fafc',
              letterSpacing: '0.15em',
              textTransform: 'uppercase',
            }}
          >
            {subtitle}
          </span>
        )}
      </div>

      {/* Main Massive Editorial Title */}
      <h2
        style={{
          fontFamily: 'var(--font-display)',
          fontSize: 'clamp(2.2rem, 5.5vw, 4.2rem)',
          fontWeight: 800,
          lineHeight: 1.05,
          letterSpacing: '-0.02em',
          color: '#ffffff',
          maxWidth: '900px',
        }}
        className="text-metallic"
      >
        {title}
      </h2>
    </div>
  );
};
