import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MagneticButton } from './MagneticButton';
import { Menu, X, ArrowUpRight } from 'lucide-react';

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 25);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Complete page routes in ALL CAPS
  const navLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'STACK', path: '/stack' },
    { label: 'WORK', path: '/work' },
    { label: 'AI LAB', path: '/ai-lab' },
    { label: 'CERTIFICATES', path: '/certificates' },
    { label: 'RESUME', path: '/resume' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className="glass-navbar glass-reflection"
        style={{
          position: 'sticky',
          top: '12px',
          margin: '12px auto 0',
          width: 'min(96vw, 1780px)',
          maxWidth: '1780px',
          height: 'clamp(56px, 6.5vh, 62px)',
          zIndex: 9000,
          transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1.2rem, 2.2vw, 2.4rem)',
          borderRadius: '9999px',
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 15, 24, 0.70) 40%, rgba(6, 10, 18, 0.85) 100%)',
          backdropFilter: 'blur(28px) saturate(160%)',
          WebkitBackdropFilter: 'blur(28px) saturate(160%)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow:
            scrolled
              ? '0 15px 45px rgba(0, 0, 0, 0.75), 0 0 30px rgba(0, 240, 255, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.20)'
              : '0 10px 35px rgba(0, 0, 0, 0.50), 0 0 20px rgba(0, 240, 255, 0.03), inset 0 1px 0 rgba(255, 255, 255, 0.18)',
          boxSizing: 'border-box',
        }}
      >
        {/* Brand Logo matching SHRINATH • */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.05rem, 1.25vw, 1.25rem)',
            letterSpacing: '0.08em',
            color: '#ffffff',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          SHRINATH
          <span
            style={{
              width: '6px',
              height: '6px',
              backgroundColor: 'var(--accent-lime)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--accent-lime)',
              display: 'inline-block',
            }}
          />
        </Link>

        {/* Center Desktop Navigation */}
        <nav
          className="nav-desktop-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.6rem, 1.4vw, 1.8rem)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: 'clamp(0.78rem, 0.90vw, 0.86rem)',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.08em',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  position: 'relative',
                  textDecoration: 'none',
                  padding: '0.40rem 0.82rem',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'transparent',
                  border: isActive
                    ? '1px solid rgba(255, 255, 255, 0.18)'
                    : '1px solid transparent',
                  boxShadow: isActive ? '0 0 16px rgba(255, 255, 255, 0.08)' : 'none',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.06)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.14)';
                    e.currentTarget.style.color = '#ffffff';
                  }
                }}
                onMouseLeave={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'transparent';
                    e.currentTarget.style.borderColor = 'transparent';
                    e.currentTarget.style.color = '#cbd5e1';
                  }
                }}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.85rem', flexShrink: 0 }}>
          <MagneticButton
            to="/contact"
            className="glass-pill hide-on-mobile glass-reflection"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.50rem 1.35rem',
              fontSize: '0.80rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '0.06em',
              borderRadius: '9999px',
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.03) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.20)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.65)';
              e.currentTarget.style.boxShadow = '0 0 25px rgba(200, 255, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.35)';
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.boxShadow = '0 4px 18px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.20)';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            CONNECT
            <ArrowUpRight size={14} color="#ffffff" />
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle glass-pill"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '42px',
              height: '42px',
              borderRadius: '50%',
              backgroundColor: 'rgba(255, 255, 255, 0.06)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#ffffff',
              cursor: 'pointer',
            }}
            aria-label="Toggle Navigation"
          >
            {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </header>

      {/* Mobile Drawer Navigation Backdrop Overlay */}
      {mobileMenuOpen && (
        <div
          onClick={() => setMobileMenuOpen(false)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 8998,
            backgroundColor: 'rgba(0, 0, 0, 0.7)',
            backdropFilter: 'blur(10px)',
            WebkitBackdropFilter: 'blur(10px)',
            transition: 'opacity 0.3s ease',
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Floating Glass Navigation Panel */}
      {mobileMenuOpen && (
        <div
          className="mobile-nav-panel glass-reflection"
          style={{
            position: 'fixed',
            top: '4.8rem',
            left: 'clamp(14px, 4vw, 24px)',
            right: 'clamp(14px, 4vw, 24px)',
            maxWidth: '520px',
            margin: '0 auto',
            zIndex: 8999,
            borderRadius: '24px',
            background:
              'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(14, 20, 32, 0.65) 50%, rgba(8, 12, 20, 0.82) 100%)',
            backdropFilter: 'blur(32px) saturate(170%)',
            WebkitBackdropFilter: 'blur(32px) saturate(170%)',
            border: '1px solid rgba(255, 255, 255, 0.20)',
            boxShadow:
              '0 25px 70px rgba(0, 0, 0, 0.8), 0 0 35px rgba(0, 240, 255, 0.10), inset 0 1px 0 rgba(255, 255, 255, 0.28)',
            padding: '1.5rem 1.25rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'stretch',
            gap: '0.5rem',
            animation: 'fadeInDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.label}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.92rem',
                  fontWeight: isActive ? 700 : 500,
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '0.70rem 1.15rem',
                  borderRadius: '12px',
                  backgroundColor: isActive ? 'rgba(255, 255, 255, 0.08)' : 'rgba(255, 255, 255, 0.02)',
                  border: isActive
                    ? '1px solid rgba(255, 255, 255, 0.18)'
                    : '1px solid rgba(255, 255, 255, 0.05)',
                  transition: 'all 0.25s ease',
                  minHeight: '44px',
                }}
              >
                <span>{link.label}</span>
                <ArrowUpRight size={14} style={{ opacity: isActive ? 1 : 0.4 }} color="#ffffff" />
              </Link>
            );
          })}

          <div style={{ paddingTop: '0.5rem' }}>
            <Link
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
              className="glass-reflection"
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px',
                padding: '0.78rem 1.5rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.14) 0%, rgba(255, 255, 255, 0.05) 100%)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontWeight: 700,
                fontSize: '0.86rem',
                letterSpacing: '0.06em',
                textDecoration: 'none',
                minHeight: '46px',
                border: '1px solid rgba(255, 255, 255, 0.25)',
              }}
            >
              CONNECT <ArrowUpRight size={15} />
            </Link>
          </div>
        </div>
      )}
    </>
  );
};
