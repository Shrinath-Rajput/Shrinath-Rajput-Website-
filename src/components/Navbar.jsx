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
      setScrolled(window.scrollY > 40);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Dedicated page routes matching requirement
  const navLinks = [
    { label: 'ABOUT', path: '/about' },
    { label: 'SERVICES', path: '/services' },
    { label: 'STACK', path: '/stack' },
    { label: 'WORK', path: '/work' },
    { label: 'AI LAB', path: '/ai-lab' },
    { label: 'CONTACT', path: '/contact' },
  ];

  return (
    <>
      <header
        className="glass-navbar glass-reflection"
        style={{
          position: 'fixed',
          top: scrolled ? '12px' : '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(94vw, 1820px)',
          height: 'clamp(68px, 8vh, 76px)',
          zIndex: 9000,
          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          padding: '0 clamp(1.5rem, 2.8vw, 3rem)',
          borderRadius: '9999px',
          background:
            'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 14, 20, 0.52) 40%, rgba(10, 14, 20, 0.44) 100%)',
          backdropFilter: 'blur(28px) saturate(180%)',
          WebkitBackdropFilter: 'blur(28px) saturate(180%)',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          boxShadow:
            '0 15px 50px rgba(0, 0, 0, 0.45), 0 0 35px rgba(200, 255, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.20), inset 0 0 30px rgba(255, 255, 255, 0.02)',
        }}
      >
        {/* Brand Logo - Routes back to Home */}
        <Link
          to="/"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            fontFamily: 'var(--font-display)',
            fontWeight: 800,
            fontSize: 'clamp(1.2rem, 1.45vw, 1.4rem)',
            letterSpacing: '0.04em',
            color: '#ffffff',
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <span
            style={{
              width: '8px',
              height: '8px',
              backgroundColor: 'var(--accent-lime)',
              borderRadius: '50%',
              boxShadow: '0 0 10px var(--accent-lime)',
              display: 'inline-block',
            }}
          />
          SHRINATH<span style={{ color: 'var(--accent-lime)' }}>.</span>
        </Link>

        {/* Center Desktop Navigation: Dedicated Page Route Links */}
        <nav
          className="nav-desktop-links"
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: 'clamp(0.8rem, 1.8vw, 2.2rem)',
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
                  fontSize: 'clamp(0.84rem, 1vw, 0.94rem)',
                  fontWeight: isActive ? 700 : 500,
                  letterSpacing: '0.12em',
                  color: isActive ? '#ffffff' : '#cbd5e1',
                  position: 'relative',
                  textDecoration: 'none',
                  padding: '0.52rem 1.15rem',
                  borderRadius: '9999px',
                  backgroundColor: isActive ? 'rgba(200, 255, 0, 0.12)' : 'transparent',
                  border: isActive
                    ? '1px solid rgba(200, 255, 0, 0.40)'
                    : '1px solid transparent',
                  boxShadow: isActive ? '0 0 20px rgba(200, 255, 0, 0.15)' : 'none',
                  transition: 'all 0.25s ease',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '7px',
                }}
                onMouseEnter={(e) => {
                  if (!isActive) {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.18)';
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
                {isActive && (
                  <span
                    style={{
                      width: '5px',
                      height: '5px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-lime)',
                      boxShadow: '0 0 8px var(--accent-lime)',
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Right CTA Button & Mobile Trigger */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexShrink: 0 }}>
          <MagneticButton
            to="/contact"
            className="glass-pill hide-on-mobile glass-reflection"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.68rem 1.65rem',
              fontSize: '0.86rem',
              fontFamily: 'var(--font-mono)',
              color: '#ffffff',
              fontWeight: 700,
              letterSpacing: '0.08em',
              borderRadius: '9999px',
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.12) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              backdropFilter: 'blur(20px)',
              boxShadow: '0 6px 20px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.22)',
              transition: 'all 0.3s ease',
              textDecoration: 'none',
            }}
          >
            CONNECT
            <ArrowUpRight size={16} color="var(--accent-lime)" />
          </MagneticButton>

          {/* Mobile Hamburger Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="nav-mobile-toggle glass-pill"
            style={{
              display: 'none',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
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

      {/* Mobile Drawer Navigation with frosted glass styling */}
      {mobileMenuOpen && (
        <div
          style={{
            position: 'fixed',
            top: '5.2rem',
            left: '5%',
            right: '5%',
            zIndex: 8999,
            borderRadius: '24px',
            background: 'rgba(10, 15, 18, 0.94)',
            backdropFilter: 'blur(24px)',
            WebkitBackdropFilter: 'blur(24px)',
            border: '1px solid rgba(255, 255, 255, 0.16)',
            boxShadow: '0 20px 50px rgba(0, 0, 0, 0.65), 0 0 30px rgba(200, 255, 0, 0.06)',
            padding: '2rem',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            gap: '1.5rem',
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
                  fontSize: '1.1rem',
                  fontWeight: 600,
                  color: isActive ? 'var(--accent-lime)' : '#ffffff',
                  letterSpacing: '0.08em',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                {isActive && (
                  <span
                    style={{
                      width: '6px',
                      height: '6px',
                      borderRadius: '50%',
                      backgroundColor: 'var(--accent-lime)',
                    }}
                  />
                )}
                {link.label}
              </Link>
            );
          })}
          <Link
            to="/contact"
            onClick={() => setMobileMenuOpen(false)}
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.75rem 2rem',
              borderRadius: '9999px',
              backgroundColor: 'var(--accent-lime)',
              color: '#000000',
              fontFamily: 'var(--font-mono)',
              fontWeight: 700,
              fontSize: '0.85rem',
              textDecoration: 'none',
              marginTop: '0.5rem',
            }}
          >
            LET'S TALK <ArrowUpRight size={16} />
          </Link>
        </div>
      )}
    </>
  );
};
