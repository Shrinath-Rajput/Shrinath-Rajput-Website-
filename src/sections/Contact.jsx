import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { MagneticButton } from '../components/MagneticButton';
import { Mail, FileText, ArrowUpRight, Copy, Check } from 'lucide-react';
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
        backgroundColor: '#060709',
        overflow: 'hidden',
      }}
    >
      {/* Background Animated Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '0',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'clamp(350px, 70vw, 900px)',
          height: 'clamp(350px, 70vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.1) 0%, rgba(56, 189, 248, 0.05) 40%, transparent 70%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto', textAlign: 'center' }}>
          {/* Status Capsule */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              padding: '0.4rem 1rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(200, 255, 0, 0.08)',
              border: '1px solid rgba(200, 255, 0, 0.25)',
              marginBottom: '2rem',
            }}
          >
            <span
              style={{
                width: '8px',
                height: '8px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 10px var(--accent-lime)',
              }}
            />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.1em',
                fontWeight: 700,
              }}
            >
              NOW AVAILABLE FOR HIGH-IMPACT OPPORTUNITIES
            </span>
          </div>

          {/* Huge Final CTA Typography */}
          <h2
            className="text-metallic"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3rem, 8vw, 7.5rem)',
              fontWeight: 800,
              lineHeight: 0.95,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              marginBottom: '2rem',
            }}
          >
            LET'S BUILD
            <br />
            SOMETHING
            <br />
            <span style={{ color: 'var(--accent-lime)', WebkitTextFillColor: 'initial' }}>INTELLIGENT.</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 2vw, 1.25rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.7,
              maxWidth: '650px',
              margin: '0 auto 3.5rem',
            }}
          >
            Whether you are building next-generation agentic workflows, deploying deep learning models to production, or architecting cutting-edge AI software — let’s connect.
          </p>

          {/* Direct Email Pill with Copy Feature */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '12px',
              padding: '0.75rem 1.5rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(255, 255, 255, 0.04)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              marginBottom: '3rem',
            }}
          >
            <Mail size={18} color="var(--accent-lime)" />
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 2vw, 1.05rem)',
                color: '#ffffff',
                fontWeight: 500,
              }}
            >
              {personalInfo.email}
            </span>
            <button
              onClick={copyEmail}
              title="Copy Email Address"
              style={{
                background: 'rgba(255, 255, 255, 0.08)',
                border: 'none',
                borderRadius: '50%',
                width: '32px',
                height: '32px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: copied ? 'var(--accent-lime)' : '#ffffff',
                cursor: 'pointer',
                transition: 'all 0.2s ease',
              }}
            >
              {copied ? <Check size={16} /> : <Copy size={16} />}
            </button>
          </div>

          {/* Action CTAs & Profiles */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'center',
              gap: '1.25rem',
            }}
          >
            <MagneticButton
              href={personalInfo.socials.email}
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '1rem 2.25rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent-lime)',
                color: '#000000',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.9rem',
                fontWeight: 700,
                letterSpacing: '0.05em',
                boxShadow: '0 0 25px rgba(200, 255, 0, 0.3)',
              }}
            >
              SEND DIRECT EMAIL
              <ArrowUpRight size={18} />
            </MagneticButton>

            <MagneticButton
              href={personalInfo.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '1rem 2rem',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              <LinkedinIcon size={18} />
              LINKEDIN
            </MagneticButton>

            <MagneticButton
              href={personalInfo.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '1rem 2rem',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              <GithubIcon size={18} />
              GITHUB
            </MagneticButton>

            <MagneticButton
              href={getAssetPath('/resume/Shrinath-Rajput-Resume.pdf')}
              target="_blank"
              rel="noopener noreferrer"
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '1rem 2rem',
                fontSize: '0.9rem',
                fontFamily: 'var(--font-mono)',
                color: '#ffffff',
                fontWeight: 600,
              }}
            >
              <FileText size={18} />
              RESUME
            </MagneticButton>
          </div>
        </div>
      </div>
    </section>
  );
};
