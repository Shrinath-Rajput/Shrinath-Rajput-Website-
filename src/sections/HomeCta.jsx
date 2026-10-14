import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Mail } from 'lucide-react';
import { SocialIcon } from '../components/SocialIcons';

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
      className="home-section-container"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '0 auto 1.25rem',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="home-split-card glass-reflection"
        style={{
          width: '100%',
          borderRadius: '22px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 18, 30, 0.55) 50%, rgba(6, 10, 18, 0.75) 100%)',
          backdropFilter: 'blur(30px) saturate(160%)',
          WebkitBackdropFilter: 'blur(30px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.55), 0 0 40px rgba(200, 255, 0, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
          padding: 'clamp(1.6rem, 2.6vw, 2.8rem)',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1.1fr) minmax(0, 2fr)',
          gap: 'clamp(1.5rem, 3vw, 3.5rem)',
          alignItems: 'center',
          boxSizing: 'border-box',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        {/* Ambient Glow in the right corner */}
        <div
          style={{
            position: 'absolute',
            top: '20%',
            right: '10%',
            width: '450px',
            height: '350px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(200, 255, 0, 0.06) 0%, rgba(56, 189, 248, 0.05) 50%, transparent 70%)',
            filter: 'blur(75px)',
            pointerEvents: 'none',
            zIndex: 0,
          }}
        />

        {/* Left Side: Label & Monumental Heading */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(200, 255, 0, 0.08)',
                border: '1px solid rgba(200, 255, 0, 0.40)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#c8ff00',
                letterSpacing: '0.08em',
                fontWeight: 700,
              }}
            >
              04 // LET'S CONNECT
            </div>
          </div>

          <h2
            className="home-cta-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 3.8vw, 3.6rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              textTransform: 'uppercase',
              lineHeight: 1.02,
              wordBreak: 'break-word',
            }}
          >
            LET'S BUILD<br />
            SOMETHING<br />
            <span style={{ color: '#c8ff00' }}>INTELLIGENT.</span>
          </h2>
        </div>

        {/* Right Side: Supporting text + Buttons + Social Icons */}
        <div style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.88rem, 1.1vw, 1.02rem)',
              color: '#cbd5e1',
              lineHeight: 1.55,
              margin: 0,
              maxWidth: '560px',
            }}
          >
            Have an AI, ML, automation, computer vision or full-stack idea? Let's turn it into something real.
          </p>

          {/* Action Buttons & Social Icons Row matching reference */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            {/* Buttons */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem', alignItems: 'center' }}>
              <Link
                to="/work"
                className="glass-reflection"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.75rem 1.65rem',
                  borderRadius: '9999px',
                  backgroundColor: '#c8ff00',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  boxShadow: '0 0 25px rgba(200, 255, 0, 0.45)',
                  border: '1px solid rgba(200, 255, 0, 0.8)',
                  transition: 'all 0.25s ease',
                }}
              >
                VIEW MY WORK <ArrowUpRight size={15} />
              </Link>

              <Link
                to="/contact"
                className="glass-pill glass-reflection"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.75rem 1.55rem',
                  borderRadius: '9999px',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                  backdropFilter: 'blur(20px)',
                  WebkitBackdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.20)',
                  color: '#ffffff',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  letterSpacing: '0.04em',
                  textDecoration: 'none',
                  boxShadow: '0 6px 20px rgba(0, 0, 0, 0.35)',
                  transition: 'all 0.25s ease',
                }}
              >
                GET IN TOUCH
              </Link>
            </div>

            {/* Social Icons row */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '10px',
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
                    width: '38px',
                    height: '38px',
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
                  {item.isEmail ? <Mail size={16} /> : <SocialIcon id={item.id} size={16} />}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
