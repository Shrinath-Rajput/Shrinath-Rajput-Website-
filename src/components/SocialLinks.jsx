import React from 'react';
import { SocialIcon } from './SocialIcons';
import { Mail, ArrowUpRight } from 'lucide-react';

export const SocialLinks = ({ socials = [] }) => {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '6px',
        alignItems: 'center',
      }}
    >
      {socials.map((item) => {
        const isExternal = !item.url.startsWith('mailto:') && !item.url.startsWith('tel:');
        return (
          <a
            key={item.id}
            href={item.url}
            target={isExternal ? '_blank' : undefined}
            rel={isExternal ? 'noopener noreferrer' : undefined}
            title={`${item.name} (${item.label})`}
            className="glass-pill glass-reflection"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              padding: '0.36rem 0.72rem',
              borderRadius: '9999px',
              background:
                'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.035) 50%, rgba(255, 255, 255, 0.015) 100%)',
              backdropFilter: 'blur(20px) saturate(160%)',
              WebkitBackdropFilter: 'blur(20px) saturate(160%)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow:
                '0 4px 16px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              fontWeight: 500,
              color: '#e2e8f0',
              textDecoration: 'none',
              letterSpacing: '0.04em',
              transition: 'all 0.22s ease',
              whiteSpace: 'nowrap',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.55)';
              e.currentTarget.style.boxShadow =
                '0 0 16px rgba(200, 255, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.22)';
              e.currentTarget.style.color = '#ffffff';
              e.currentTarget.style.transform = 'translateY(-1px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
              e.currentTarget.style.boxShadow =
                '0 4px 14px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)';
              e.currentTarget.style.color = '#e2e8f0';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            {item.id === 'email' ? (
              <Mail size={13} color="var(--accent-lime)" />
            ) : (
              <SocialIcon id={item.id} size={13} color="var(--accent-lime)" />
            )}
            <span>{item.name}</span>
            <ArrowUpRight
              size={11}
              color="var(--accent-lime)"
              style={{ opacity: 0.65 }}
            />
          </a>
        );
      })}
    </div>
  );
};
