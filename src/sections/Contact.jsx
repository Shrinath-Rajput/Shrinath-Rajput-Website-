import React, { useState } from 'react';
import {
  Mail,
  FileText,
  ArrowUpRight,
  Copy,
  Check,
  MapPin,
  Clock,
  Sparkles,
  MessageSquare,
  ShieldCheck,
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import { personalInfo } from '../data/experience';
import { getAssetPath } from '../utils/assets';

export const Contact = () => {
  const [copied, setCopied] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 50% 12%, rgba(200, 255, 0, 0.05) 0%, transparent 60%),
          radial-gradient(circle at 50% 55%, rgba(56, 189, 248, 0.045) 0%, transparent 60%),
          radial-gradient(circle at 80% 85%, rgba(16, 185, 129, 0.035) 0%, transparent 55%),
          linear-gradient(180deg, #05070a 0%, #080b11 50%, #05070a 100%)
        `,
        overflow: 'hidden',
      }}
    >
      {/* Background Depth Grid Texture */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.35,
          pointerEvents: 'none',
        }}
      />

      {/* Atmospheric Ambient Glow behind Title & Glass Panel */}
      <div
        style={{
          position: 'absolute',
          top: '15%',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(380px, 60vw, 820px)',
          height: 'clamp(320px, 45vw, 600px)',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.065) 0%, rgba(56, 189, 248, 0.035) 45%, transparent 70%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Centered Main Content Container: Full-Width 94vw System */}
      <div
        className="contact-container"
        style={{
          width: 'min(94vw, 1820px)',
          maxWidth: '1820px',
          marginInline: 'auto',
          position: 'relative',
          zIndex: 10,
          textAlign: 'center',
        }}
      >
        {/* ========================================================
            1. AVAILABILITY STATUS BADGE (CENTERED)
            ======================================================== */}
        <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.75rem' }}>
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.42rem 1.15rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(200, 255, 0, 0.08)',
              border: '1px solid rgba(200, 255, 0, 0.28)',
              backdropFilter: 'blur(14px)',
              WebkitBackdropFilter: 'blur(14px)',
              boxShadow: '0 0 20px rgba(200, 255, 0, 0.12), inset 0 1px 0 rgba(255, 255, 255, 0.2)',
            }}
          >
            <span
              style={{
                width: '7px',
                height: '7px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 10px var(--accent-lime)',
                display: 'inline-block',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.12em',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              09 // INITIATE TRANSMISSION
            </span>
            <span style={{ color: 'rgba(255, 255, 255, 0.3)' }}>•</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#ffffff',
                letterSpacing: '0.1em',
                fontWeight: 600,
              }}
            >
              AVAILABLE FOR HIGH-IMPACT ROLES
            </span>
          </div>
        </div>

        {/* ========================================================
            2. HERO TITLE (EXACTLY CENTERED HORIZONTALLY)
            ======================================================== */}
        <h2
          className="text-metallic"
          style={{
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(2.75rem, 8.5vw, 6.8rem)',
            fontWeight: 800,
            lineHeight: 0.95,
            letterSpacing: '-0.03em',
            textTransform: 'uppercase',
            textAlign: 'center',
            marginInline: 'auto',
            marginBottom: '1.75rem',
            maxWidth: '1200px',
            textShadow: '0 4px 28px rgba(0, 0, 0, 0.65)',
          }}
        >
          LET'S
          <br />
          BUILD
          <br />
          SOMETHING
          <br />
          <span style={{ color: 'var(--accent-lime)', WebkitTextFillColor: 'initial', textShadow: '0 0 35px rgba(200, 255, 0, 0.25)' }}>
            INTELLIGENT.
          </span>
        </h2>

        {/* ========================================================
            3. CONTACT INTRO TEXT (CENTERED)
            ======================================================== */}
        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.02rem, 1.6vw, 1.2rem)',
            color: 'var(--text-muted)',
            lineHeight: 1.75,
            maxWidth: '850px',
            marginInline: 'auto',
            textAlign: 'center',
            marginBottom: 'clamp(2.5rem, 5vh, 3.5rem)',
          }}
        >
          Whether you are building next-generation agentic workflows, deploying deep learning models to production, or architecting cutting-edge AI software — let’s connect.
        </p>

        {/* ========================================================
            4. MAIN CONTACT GLASS PANEL (100% PREMIUM GLASS)
            ======================================================== */}
        <div
          className="contact-glass-panel"
          style={{
            maxWidth: '1280px',
            marginInline: 'auto',
            padding: 'clamp(1.75rem, 3.5vw, 3rem)',
            textAlign: 'left',
            marginBottom: 'clamp(2rem, 4vh, 3rem)',
          }}
        >
          <div
            className="contact-main-grid"
            style={{
              display: 'grid',
              gridTemplateColumns: 'minmax(0, 1.15fr) minmax(0, 1fr)',
              gap: 'clamp(2rem, 3.5vw, 3rem)',
              alignItems: 'center',
              position: 'relative',
              zIndex: 3,
            }}
          >
            {/* LEFT COLUMN: AVAILABILITY & DIRECT CHANNELS */}
            <div>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: 'var(--accent-lime)',
                  fontWeight: 700,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginBottom: '0.75rem',
                }}
              >
                <Sparkles size={14} />
                LET'S CONNECT
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.3vw, 1.95rem)',
                  fontWeight: 750,
                  color: '#ffffff',
                  lineHeight: 1.25,
                  margin: '0 0 1rem 0',
                }}
              >
                DIRECT CHANNELS & AVAILABILITY
              </h3>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <MapPin size={16} color="#38bdf8" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    {personalInfo.location} • Open to Global & Remote Roles
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <Clock size={16} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    Typically responds within 24 hours
                  </span>
                </div>

                <div style={{ display: 'flex', alignItems: 'center', gap: '9px' }}>
                  <ShieldCheck size={16} color="#a78bfa" style={{ flexShrink: 0 }} />
                  <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.84rem', color: '#cbd5e1' }}>
                    Accepting AI/ML consulting & high-scale engineering roles
                  </span>
                </div>
              </div>
            </div>

            {/* RIGHT COLUMN: EMAIL CAPSULE + PRIMARY ACTION */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
              {/* Direct Email Glass Capsule with Clipboard Copy */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  gap: '12px',
                  padding: '0.85rem 1.25rem',
                  borderRadius: '16px',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.14)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px', minWidth: 0 }}>
                  <Mail size={18} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
                  <div style={{ minWidth: 0 }}>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.68rem',
                        color: '#94a3b8',
                        letterSpacing: '0.08em',
                        display: 'block',
                      }}
                    >
                      DIRECT INBOX
                    </span>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: 'clamp(0.82rem, 1.4vw, 0.98rem)',
                        color: '#ffffff',
                        fontWeight: 600,
                        wordBreak: 'break-all',
                      }}
                    >
                      {personalInfo.email}
                    </span>
                  </div>
                </div>

                <button
                  onClick={copyEmail}
                  aria-label={copied ? 'Email address copied' : 'Copy email address to clipboard'}
                  title={copied ? 'Copied!' : 'Copy to clipboard'}
                  style={{
                    position: 'relative',
                    background: copied ? 'rgba(200, 255, 0, 0.18)' : 'rgba(255, 255, 255, 0.08)',
                    border: copied ? '1px solid var(--accent-lime)' : '1px solid rgba(255, 255, 255, 0.18)',
                    borderRadius: '10px',
                    padding: '0.45rem 0.85rem',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    color: copied ? 'var(--accent-lime)' : '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 700,
                    cursor: 'pointer',
                    transition: 'all 0.2s ease',
                    flexShrink: 0,
                  }}
                >
                  {copied ? (
                    <>
                      <Check size={14} />
                      COPIED!
                    </>
                  ) : (
                    <>
                      <Copy size={14} />
                      COPY
                    </>
                  )}
                </button>
              </div>

              {/* Primary Direct Email Button */}
              <a
                href={personalInfo.socials.email}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: '10px',
                  padding: '1rem 2rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-lime)',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.92rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  textDecoration: 'none',
                  boxShadow: '0 0 30px rgba(200, 255, 0, 0.35)',
                  transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                  width: '100%',
                  boxSizing: 'border-box',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px) scale(1.01)';
                  e.currentTarget.style.boxShadow = '0 0 40px rgba(200, 255, 0, 0.55)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0) scale(1)';
                  e.currentTarget.style.boxShadow = '0 0 30px rgba(200, 255, 0, 0.35)';
                }}
              >
                SEND DIRECT EMAIL
                <ArrowUpRight size={18} />
              </a>
            </div>
          </div>
        </div>

        {/* ========================================================
            5. CONTACT METHODS & PROFILES (CENTERED GLASS PILLS)
            ======================================================== */}
        <div>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: '#94a3b8',
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              marginBottom: '1.25rem',
            }}
          >
            VERIFIED PROFILES & NETWORK
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: 'clamp(0.75rem, 1.8vw, 1.25rem)',
            }}
          >
            {/* LinkedIn */}
            <a
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-btn"
              aria-label="Connect with Shrinath Rajput on LinkedIn"
            >
              <LinkedinIcon size={18} />
              LINKEDIN
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </a>

            {/* GitHub */}
            <a
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-btn"
              aria-label="View Shrinath Rajput's GitHub repositories"
            >
              <GithubIcon size={18} />
              GITHUB
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </a>

            {/* WhatsApp */}
            <a
              href={personalInfo.socials.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-method-btn"
              aria-label="Chat with Shrinath Rajput on WhatsApp"
            >
              <MessageSquare size={18} />
              WHATSAPP
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </a>

            {/* Resume */}
            <a
              href="/resume"
              className="contact-method-btn"
              aria-label="View Shrinath Rajput's Resume page"
            >
              <FileText size={18} />
              VIEW RESUME
              <ArrowUpRight size={14} style={{ opacity: 0.6 }} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
