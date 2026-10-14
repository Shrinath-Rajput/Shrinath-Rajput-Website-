import React from 'react';
import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { SocialIcon } from './SocialIcons';

export const Footer = () => {
  const navLinks = [
    { label: 'About', path: '/about' },
    { label: 'Services', path: '/services' },
    { label: 'Stack', path: '/stack' },
    { label: 'Work', path: '/work' },
    { label: 'AI Lab', path: '/ai-lab' },
    { label: 'Certificates', path: '/certificates' },
    { label: 'Resume', path: '/resume' },
    { label: 'Contact', path: '/contact' },
  ];

  const socialIcons = [
    { id: 'github', url: 'https://github.com/Shrinath-Rajput', label: 'GitHub' },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/shrinath-rajput-91b437253/', label: 'LinkedIn' },
    { id: 'email', isEmail: true, url: 'mailto:rajputshrinath349@gmail.com', label: 'Email' },
    { id: 'whatsapp', url: 'https://wa.me/919699510445', label: 'WhatsApp' },
    { id: 'instagram', url: 'https://www.instagram.com/shrinath.rajput14', label: 'Instagram' },
    { id: 'youtube', url: 'https://www.youtube.com/@ShrinathRajput-A14k', label: 'YouTube' },
  ];

  return (
    <footer
      className="site-footer-container"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '0 auto 1.5rem',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="glass-footer glass-reflection"
        style={{
          width: '100%',
          borderRadius: '22px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(10, 16, 26, 0.45) 50%, rgba(6, 10, 18, 0.65) 100%)',
          backdropFilter: 'blur(28px) saturate(150%)',
          WebkitBackdropFilter: 'blur(28px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45), 0 0 30px rgba(200, 255, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
          padding: '1.5rem clamp(1.2rem, 2.5vw, 2.4rem)',
          display: 'flex',
          flexDirection: 'column',
          gap: '1.25rem',
          boxSizing: 'border-box',
        }}
      >
        {/* Top Section: Logo & Subtitle on left, Nav in center, Socials on right */}
        <div
          className="footer-top-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1.25rem',
          }}
        >
          {/* Left: SHRINATH • + Subtitle */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '3px' }}>
            <Link
              to="/"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                fontFamily: 'var(--font-display)',
                fontWeight: 800,
                fontSize: '1.2rem',
                letterSpacing: '0.08em',
                color: '#ffffff',
                textDecoration: 'none',
              }}
            >
              SHRINATH
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  backgroundColor: 'var(--accent-lime)',
                  borderRadius: '50%',
                  boxShadow: '0 0 8px var(--accent-lime)',
                  display: 'inline-block',
                }}
              />
            </Link>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--text-muted)',
                letterSpacing: '0.04em',
              }}
            >
              AI / ML Engineer & Full Stack Developer
            </div>
          </div>

          {/* Center: Navigation Links */}
          <nav
            className="footer-nav-links"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: 'clamp(0.75rem, 1.5vw, 1.75rem)',
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.80rem',
                  fontWeight: 500,
                  color: '#cbd5e1',
                  textDecoration: 'none',
                  transition: 'color 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#c8ff00';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#cbd5e1';
                }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right: Round Glass Social Icons */}
          <div
            className="footer-social-icons"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
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
                  width: '34px',
                  height: '34px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.14)',
                  color: '#cbd5e1',
                  backdropFilter: 'blur(10px)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(200, 255, 0, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.55)';
                  e.currentTarget.style.color = '#c8ff00';
                  e.currentTarget.style.boxShadow = '0 0 14px rgba(200, 255, 0, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.isEmail ? <Mail size={15} /> : <SocialIcon id={item.id} size={15} />}
              </a>
            ))}
          </div>
        </div>

        {/* Subtle Horizontal Divider */}
        <div style={{ width: '100%', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.07)' }} />

        {/* Bottom Section: Copyright on left, Professional Tagline on right */}
        <div
          className="footer-bottom-row"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '1rem',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.74rem',
            color: 'var(--text-muted)',
          }}
        >
          <div>© 2024 Shrinath Rajput. All rights reserved.</div>
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px' }}>
            Building intelligent solutions for a better tomorrow
            <span
              style={{
                width: '5px',
                height: '5px',
                backgroundColor: 'var(--accent-lime)',
                borderRadius: '50%',
                boxShadow: '0 0 6px var(--accent-lime)',
                display: 'inline-block',
              }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
};
