import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SocialIcon } from '../components/SocialIcons';
import { HolographicGlobe } from '../components/HolographicGlobe';

export const HomeCta = () => {
  const socialIcons = [
    { id: 'github', url: 'https://github.com/Shrinath-Rajput', label: 'GitHub' },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/shrinath-rajput-91b437253/', label: 'LinkedIn' },
    { id: 'email', isEmail: true, url: 'mailto:rajputshrinath349@gmail.com', label: 'Email' },
    { id: 'whatsapp', url: 'https://wa.me/919699510445', label: 'WhatsApp' },
    { id: 'instagram', url: 'https://www.instagram.com/shrinath.rajput14', label: 'Instagram' },
    { id: 'youtube', url: 'https://www.youtube.com/@ShrinathRajput-A14k', label: 'YouTube' },
  ];

  return (
    <section
      id="home-cta"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '0 auto 3rem',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="glass-reflection"
        style={{
          width: '100%',
          borderRadius: '28px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 18, 30, 0.60) 50%, rgba(6, 10, 18, 0.80) 100%)',
          backdropFilter: 'blur(30px) saturate(160%)',
          WebkitBackdropFilter: 'blur(30px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow: '0 25px 70px rgba(0, 0, 0, 0.55), 0 0 45px rgba(200, 255, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.20)',
          padding: 'clamp(2.5rem, 5vw, 4.5rem) clamp(1.5rem, 3vw, 3rem)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Subtle Ambient Radial Lighting in Center */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '600px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(56, 189, 248, 0.12) 0%, rgba(200, 255, 0, 0.06) 40%, transparent 70%)',
            filter: 'blur(80px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Holographic Globe Arc in background */}
        <div
          style={{
            position: 'absolute',
            top: '50%',
            right: '-10%',
            transform: 'translateY(-50%)',
            opacity: 0.25,
            pointerEvents: 'none',
            zIndex: 0,
          }}
        >
          <HolographicGlobe size={550} showRings={true} speed={0.002} />
        </div>

        {/* Content Container (Centered) */}
        <div style={{ position: 'relative', zIndex: 2, maxWidth: '780px', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '1.25rem' }}>
          {/* Label Badge */}
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.42rem 1.15rem',
                borderRadius: '9999px',
                background: 'rgba(200, 255, 0, 0.08)',
                border: '1px solid rgba(200, 255, 0, 0.40)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.76rem',
                color: '#c8ff00',
                letterSpacing: '0.14em',
                fontWeight: 700,
                boxShadow: '0 0 16px rgba(200, 255, 0, 0.12)',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-lime)',
                  boxShadow: '0 0 8px var(--accent-lime)',
                }}
              />
              04 // LET'S CONNECT
            </div>
          </div>

          {/* Monumental Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.4rem, 5vw, 4.4rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              textTransform: 'uppercase',
              lineHeight: 1.05,
              textShadow: '0 4px 30px rgba(0, 0, 0, 0.7), 0 0 40px rgba(200, 255, 0, 0.15)',
            }}
          >
            LET'S BUILD<br />
            SOMETHING<br />
            <span
              style={{
                color: 'transparent',
                WebkitTextStroke: '2px #ffffff',
                filter: 'drop-shadow(0 0 16px rgba(200, 255, 0, 0.35))',
              }}
            >
              INTELLIGENT.
            </span>
          </h2>

          {/* Supporting Text */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.25vw, 1.15rem)',
              color: '#cbd5e1',
              lineHeight: 1.6,
              maxWidth: '560px',
              margin: '0.25rem 0 0.85rem',
            }}
          >
            Have an AI, ML, automation, computer vision or full-stack idea? Let's turn it into something real.
          </p>

          {/* Action Buttons */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', alignItems: 'center' }}>
            <Link
              to="/work"
              className="glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.95rem 2.2rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent-lime)',
                color: '#000000',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                boxShadow: '0 0 30px rgba(200, 255, 0, 0.45)',
                border: '1px solid rgba(200, 255, 0, 0.8)',
                transition: 'all 0.25s ease',
              }}
            >
              VIEW MY WORK <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="glass-pill glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.95rem 2.1rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.86rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                transition: 'all 0.25s ease',
              }}
            >
              GET IN TOUCH <ArrowUpRight size={17} color="var(--accent-lime)" />
            </Link>
          </div>

          {/* Social Icons Below */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '1.25rem',
            }}
          >
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label={item.label}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#cbd5e1',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(200, 255, 0, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.55)';
                  e.currentTarget.style.color = '#c8ff00';
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(200, 255, 0, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.isEmail ? <Mail size={17} /> : <SocialIcon id={item.id} size={17} />}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
