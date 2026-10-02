import React from 'react';
import { ArrowUp, Mail, Heart } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { MagneticButton } from './MagneticButton';
import { personalInfo } from '../data/experience';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer
      style={{
        borderTop: '1px solid rgba(255, 255, 255, 0.08)',
        backgroundColor: '#050608',
        padding: 'clamp(3rem, 6vh, 5rem) 0 2.5rem',
        position: 'relative',
        zIndex: 10,
      }}
    >
      <div className="site-container">
        {/* Upper Footer: Signature & Quick Back to Top */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '2rem',
            paddingBottom: '2.5rem',
            borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
          }}
        >
          <div>
            <div
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.5rem, 3vw, 2.2rem)',
                fontWeight: 800,
                color: '#ffffff',
                letterSpacing: '-0.01em',
              }}
            >
              SHRINATH RAJPUT
            </div>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.85rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.15em',
                marginTop: '4px',
              }}
            >
              AI / ML ENGINEER & FULL STACK DEVELOPER
            </div>
          </div>

          {/* Back to top magnetic button */}
          <MagneticButton
            onClick={scrollToTop}
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '10px',
              padding: '0.75rem 1.5rem',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              fontWeight: 600,
              letterSpacing: '0.1em',
            }}
          >
            BACK TO TOP
            <ArrowUp size={16} color="var(--accent-lime)" />
          </MagneticButton>
        </div>

        {/* Lower Footer: Details & Socials */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.5rem',
            paddingTop: '2rem',
          }}
        >
          {/* Copyright & Location */}
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.8rem',
              color: 'var(--text-muted)',
              display: 'flex',
              flexDirection: 'column',
              gap: '4px',
            }}
          >
            <div>© {new Date().getFullYear()} Shrinath Rajput. All rights reserved.</div>
            <div style={{ color: 'var(--text-dim)' }}>
              Kolhapur / Pune, Maharashtra, India
            </div>
          </div>

          {/* Social Links */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }}>
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="glass-pill"
              style={{
                width: '42px',
                height: '42px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <GithubIcon size={18} />
            </a>

            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="glass-pill"
              style={{
                width: '42px',
                height: '42px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <LinkedinIcon size={18} />
            </a>

            <a
              href={personalInfo.socials.email}
              aria-label="Send Email"
              className="glass-pill"
              style={{
                width: '42px',
                height: '42px',
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#ffffff',
              }}
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
