import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Award, Trophy, Sparkles, CheckCircle2 } from 'lucide-react';
import { personalInfo } from '../data/experience';

export const Achievements = () => {
  return (
    <section id="achievements" className="section-padding" style={{ position: 'relative', backgroundColor: '#080a0e' }}>
      <div className="site-container">
        <SectionHeading
          number="06"
          subtitle="MILESTONES & VALIDATION"
          title="HONORS & RECOGNITIONS"
        />

        <div style={{ maxWidth: '900px' }}>
          {personalInfo.achievements.map((item, index) => (
            <div
              key={item.title}
              className="real-glass-card glass-reflection"
              style={{
                padding: 'clamp(2rem, 4vw, 3rem)',
                borderRadius: '24px',
                border: '1px solid rgba(200, 255, 0, 0.35)',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(20, 26, 38, 0.55) 50%, rgba(8, 12, 20, 0.75) 100%)',
                position: 'relative',
                overflow: 'hidden',
                boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(200, 255, 0, 0.08), inset 0 1.5px 0 rgba(255, 255, 255, 0.28)',
              }}
            >
              {/* Glowing Corner Aura */}
              <div
                style={{
                  position: 'absolute',
                  top: '-30%',
                  right: '-10%',
                  width: '350px',
                  height: '350px',
                  borderRadius: '50%',
                  background: 'radial-gradient(circle, rgba(200, 255, 0, 0.12) 0%, transparent 70%)',
                  filter: 'blur(50px)',
                  pointerEvents: 'none',
                }}
              />

              <div
                style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  gap: '12px',
                  marginBottom: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '42px',
                    height: '42px',
                    borderRadius: '12px',
                    backgroundColor: 'rgba(200, 255, 0, 0.1)',
                    border: '1px solid rgba(200, 255, 0, 0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--accent-lime)',
                  }}
                >
                  <Trophy size={20} />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    color: 'var(--accent-lime)',
                    fontWeight: 700,
                    letterSpacing: '0.15em',
                  }}
                >
                  HACKATHON EXCELLENCE // {item.year}
                </span>
              </div>

              <h3
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.6rem, 3.2vw, 2.4rem)',
                  fontWeight: 800,
                  color: '#ffffff',
                  marginBottom: '0.75rem',
                  letterSpacing: '-0.02em',
                }}
              >
                {item.title}
              </h3>

              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.95rem',
                  color: '#38bdf8',
                  marginBottom: '1.25rem',
                  fontWeight: 600,
                }}
              >
                {item.subtitle}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '1.05rem',
                  lineHeight: 1.75,
                  color: 'var(--text-muted)',
                }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
