import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const PageLoader = ({ onComplete }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const counterRef = useRef(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const counterObj = { val: 0 };

    const tl = gsap.timeline({
      onComplete: () => {
        // Slide up the loader overlay smoothly
        gsap.to(containerRef.current, {
          yPercent: -100,
          duration: 0.85,
          ease: 'power4.inOut',
          onComplete: () => {
            if (onComplete) onComplete();
          },
        });
      },
    });

    // Animate percentage count quickly
    tl.to(counterObj, {
      val: 100,
      duration: 1.15,
      ease: 'power2.inOut',
      onUpdate: () => {
        setProgress(Math.floor(counterObj.val));
      },
    });

    // Animate text reveal
    tl.fromTo(
      textRef.current,
      { y: 25, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.65, ease: 'power3.out' },
      0.15
    );

    return () => tl.kill();
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      style={{
        position: 'fixed',
        inset: 0,
        backgroundColor: '#060709',
        zIndex: 99990,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 'clamp(2rem, 5vw, 4rem)',
        color: '#f8fafc',
        borderBottom: '1px solid rgba(200, 255, 0, 0.2)',
      }}
    >
      {/* Top Header Tag */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            letterSpacing: '0.15em',
            color: 'var(--accent-lime)',
            textTransform: 'uppercase',
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              borderRadius: '50%',
              backgroundColor: 'var(--accent-lime)',
              display: 'inline-block',
              animation: 'pulseGlow 1.5s infinite',
            }}
          />
          SYSTEM INITIALIZATION
        </span>
        <span
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.85rem',
            color: 'var(--text-muted)',
          }}
        >
          AI/ML SPEC 2026
        </span>
      </div>

      {/* Center Branding */}
      <div ref={textRef} style={{ textAlign: 'center' }}>
        <h1
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 8vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.02em',
            lineHeight: 1,
            marginBottom: '1rem',
          }}
          className="text-metallic"
        >
          SHRINATH RAJPUT
        </h1>
        <p
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: 'clamp(0.85rem, 1.8vw, 1.25rem)',
            letterSpacing: '0.3em',
            color: 'var(--accent-lime)',
            textTransform: 'uppercase',
          }}
        >
          AI / ML ENGINEER & FULL STACK DEVELOPER
        </p>
      </div>

      {/* Bottom Counter Bar */}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-end',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          paddingTop: '1.5rem',
        }}
      >
        <div style={{ maxWidth: '300px' }}>
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
            }}
          >
            GENERATIVE AI // AGENTIC SYSTEMS // COMPUTER VISION // DEEP LEARNING
          </p>
        </div>

        <div
          ref={counterRef}
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.5rem, 6vw, 5rem)',
            fontWeight: 800,
            lineHeight: 0.9,
            color: 'var(--text-primary)',
          }}
        >
          {progress.toString().padStart(2, '0')}
          <span style={{ color: 'var(--accent-lime)', fontSize: '0.5em', marginLeft: '4px' }}>%</span>
        </div>
      </div>
    </div>
  );
};
