import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { skillsCategories } from '../data/skills';
import { Brain, Cpu, Bot, Eye, Server, Code2, Database, Terminal } from 'lucide-react';

export const Skills = () => {
  const categoryIcons = [Brain, Cpu, Bot, Eye, Server, Code2, Database, Terminal];

  return (
    <section id="skills" className="section-padding" style={{ position: 'relative', backgroundColor: '#060709' }}>
      <div className="site-container">
        <SectionHeading
          number="03"
          subtitle="CORE CAPABILITIES"
          title="TECHNICAL MATRIX & DEEP-TECH STACK"
        />

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {skillsCategories.map((cat, idx) => {
            const Icon = categoryIcons[idx] || Cpu;
            return (
              <div
                key={cat.category}
                className="glass-panel"
                style={{
                  padding: 'clamp(1.5rem, 2.5vw, 2.25rem)',
                  borderRadius: '22px',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  background: 'linear-gradient(180deg, rgba(14, 18, 24, 0.7) 0%, rgba(8, 10, 14, 0.9) 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  transition: 'all 0.35s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.35)';
                  e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0px)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                <div>
                  {/* Category Header */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.25rem',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '12px',
                        backgroundColor: 'rgba(200, 255, 0, 0.08)',
                        border: '1px solid rgba(200, 255, 0, 0.25)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: 'var(--accent-lime)',
                      }}
                    >
                      <Icon size={20} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--text-muted)',
                      }}
                    >
                      0{idx + 1} // MATRIX
                    </span>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.65rem',
                    }}
                  >
                    {cat.category}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.88rem',
                      lineHeight: 1.6,
                      color: 'var(--text-muted)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {cat.description}
                  </p>
                </div>

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.75rem',
                        padding: '0.35rem 0.75rem',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                        color: '#f1f5f9',
                        transition: 'all 0.2s ease',
                      }}
                      onMouseEnter={(e) => {
                        e.target.style.borderColor = 'var(--accent-lime)';
                        e.target.style.color = 'var(--accent-lime)';
                        e.target.style.backgroundColor = 'rgba(200, 255, 0, 0.08)';
                      }}
                      onMouseLeave={(e) => {
                        e.target.style.borderColor = 'rgba(255, 255, 255, 0.08)';
                        e.target.style.color = '#f1f5f9';
                        e.target.style.backgroundColor = 'rgba(255, 255, 255, 0.03)';
                      }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
