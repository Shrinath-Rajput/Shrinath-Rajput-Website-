import React from 'react';
import { InfoGlassCard } from './InfoGlassCard';
import { SocialLinks } from './SocialLinks';
import { heroInfo } from '../data/heroInfo';
import {
  Brain,
  Code2,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Share2,
  Globe2,
} from 'lucide-react';

export const HeroInfoGrid = () => {
  return (
    <div
      className="hero-info-grid"
      style={{
        position: 'relative',
        zIndex: 8,
        width: 'min(94vw, 1820px)',
        margin: '1.25rem auto 0.85rem',
        padding: '0',
        display: 'grid',
        gridTemplateColumns: 'minmax(0, 1.1fr) minmax(0, 1.3fr) minmax(0, 0.95fr) minmax(0, 0.95fr) minmax(0, 1.15fr) minmax(0, 1.55fr)',
        gap: 'clamp(0.65rem, 1vw, 1.15rem)',
        alignItems: 'stretch',
      }}
    >
      {/* 1. MY ROLES */}
      <InfoGlassCard title="My Roles" icon={Brain} badge="ENGINEERING">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {heroInfo.roles.map((role, idx) => (
            <div
              key={idx}
              className="glass-pill"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '7px',
                padding: '0.4rem 0.75rem',
                borderRadius: '8px',
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.015) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                fontSize: '0.74rem',
                fontFamily: 'var(--font-mono)',
                color: '#f1f5f9',
                letterSpacing: '0.02em',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.45)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                e.currentTarget.style.color = '#f1f5f9';
              }}
            >
              <span
                style={{
                  width: '5px',
                  height: '5px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-lime)',
                  boxShadow: '0 0 6px var(--accent-lime)',
                  flexShrink: 0,
                }}
              />
              <span style={{ fontWeight: 600, whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                {role}
              </span>
            </div>
          ))}
        </div>
      </InfoGlassCard>

      {/* 2. WHAT I DO */}
      <InfoGlassCard title="What I Do" icon={Code2} badge="DOMAINS">
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '5px',
            alignContent: 'center',
          }}
        >
          {heroInfo.whatIDo.map((item, idx) => (
            <span
              key={idx}
              className="glass-pill"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '5px',
                padding: '0.34rem 0.65rem',
                borderRadius: '7px',
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.015) 100%)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.71rem',
                color: '#cbd5e1',
                letterSpacing: '0.02em',
                transition: 'all 0.22s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.40)';
                e.currentTarget.style.color = '#ffffff';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.10)';
                e.currentTarget.style.color = '#cbd5e1';
              }}
            >
              <span
                style={{
                  color: 'var(--accent-lime)',
                  fontSize: '0.68rem',
                  lineHeight: 1,
                }}
              >
                ▹
              </span>
              <span>{item}</span>
            </span>
          ))}
        </div>
      </InfoGlassCard>

      {/* 3. EXPERTISE */}
      <InfoGlassCard title="Expertise" icon={Sparkles} badge="CORE FOCUS">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          <div
            className="glass-pill"
            style={{
              padding: '0.48rem 0.75rem',
              borderRadius: '8px',
              background:
                'linear-gradient(135deg, rgba(200, 255, 0, 0.09) 0%, rgba(255, 255, 255, 0.025) 100%)',
              border: '1px solid rgba(200, 255, 0, 0.28)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.04em',
              textAlign: 'center',
            }}
          >
            {heroInfo.expertise}
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '4px',
              justifyContent: 'center',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.64rem',
              color: 'var(--text-muted)',
              letterSpacing: '0.04em',
            }}
          >
            <span style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
              Neural Pipelines
            </span>
            <span style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
              Edge Vision
            </span>
            <span style={{ padding: '2px 6px', background: 'rgba(255,255,255,0.03)', borderRadius: '4px' }}>
              Production Scale
            </span>
          </div>
        </div>
      </InfoGlassCard>

      {/* 4. LOCATION */}
      <InfoGlassCard title="Location" icon={MapPin} badge="MAHARASHTRA">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.78rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.04em',
            }}
          >
            {heroInfo.location}
          </div>

          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.68rem',
              color: 'var(--text-muted)',
            }}
          >
            Kolhapur / Pune Tech Corridor
          </div>

          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.66rem',
              color: 'var(--accent-lime)',
              marginTop: '2px',
            }}
          >
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 8px var(--accent-lime)',
                display: 'inline-block',
              }}
            />
            Available Globally / Remote
          </div>
        </div>
      </InfoGlassCard>

      {/* 5. CONTACT */}
      <InfoGlassCard title="Contact" icon={Phone} badge="DIRECT">
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          <a
            href={heroInfo.contact.phoneHref}
            title="Call Shrinath Rajput"
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.38rem 0.68rem',
              borderRadius: '8px',
              background:
                'linear-gradient(135deg, rgba(200, 255, 0, 0.10) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(200, 255, 0, 0.28)',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.73rem',
              textDecoration: 'none',
              fontWeight: 600,
              letterSpacing: '0.04em',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-lime)';
              e.currentTarget.style.boxShadow =
                '0 0 15px rgba(200, 255, 0, 0.25)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.28)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Phone size={12} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
            <span>{heroInfo.contact.phone}</span>
          </a>

          <a
            href={heroInfo.contact.emailHref}
            title="Email Shrinath Rajput"
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.38rem 0.68rem',
              borderRadius: '8px',
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 100%)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              color: '#ffffff',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.70rem',
              textDecoration: 'none',
              fontWeight: 500,
              letterSpacing: '0.02em',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'all 0.22s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'var(--accent-lime)';
              e.currentTarget.style.boxShadow =
                '0 0 15px rgba(200, 255, 0, 0.20)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            <Mail size={12} color="var(--accent-lime)" style={{ flexShrink: 0 }} />
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis' }}>
              {heroInfo.contact.email}
            </span>
          </a>
        </div>
      </InfoGlassCard>

      {/* 6. CONNECT WITH ME */}
      <InfoGlassCard title="Connect With Me" icon={Share2} badge="10 PLATFORMS">
        <SocialLinks socials={heroInfo.socials} />
      </InfoGlassCard>
    </div>
  );
};
