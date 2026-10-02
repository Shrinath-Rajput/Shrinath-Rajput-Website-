import React from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { techStackItems, skillCategories } from '../data/skills';
import {
  Code2,
  Layers,
  Layout,
  Server,
  Terminal,
  Database,
  BarChart3,
  Brain,
  Bot,
  Cpu,
  Sparkles,
  CheckCircle2,
} from 'lucide-react';

export const Skills = () => {
  // 11 Category Icons mapping strictly to the 11 Skill Categories from the source HTML
  const categoryIconMap = {
    'Languages': Code2,
    'Libraries / Frameworks': Layers,
    'Frontend': Layout,
    'Backend': Server,
    'Tools': Terminal,
    'Databases': Database,
    'Statistical & Data Skills': BarChart3,
    'Machine Learning Algorithms': Brain,
    'NLP': Bot,
    'Deep Learning': Cpu,
    'Other Skills': Sparkles,
  };

  return (
    <section
      id="skills"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 85% 15%, rgba(200, 255, 0, 0.04) 0%, transparent 55%),
          radial-gradient(circle at 10% 45%, rgba(56, 189, 248, 0.035) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
          linear-gradient(180deg, #05070a 0%, #080b11 50%, #05070a 100%)
        `,
        overflow: 'hidden',
      }}
    >
      {/* Background Subtle Depth Grid */}
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

      {/* Ambient Lighting Orbs */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '5%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.045) 0%, transparent 65%)',
          filter: 'blur(90px)',
          pointerEvents: 'none',
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: '2%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Header */}
        <SectionHeading
          number="03"
          subtitle="CORE CAPABILITIES"
          title="TECHNICAL MATRIX & DEEP-TECH STACK"
        />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.4vw, 1.15rem)',
            color: 'var(--text-muted)',
            maxWidth: '1000px',
            lineHeight: 1.7,
            marginTop: '-1.5rem',
            marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
          }}
        >
          Comprehensive technical foundation spanning machine learning algorithms, deep neural architectures,
          statistical data science, real-time computer vision, and scalable production engineering.
        </p>

        {/* ========================================================
            PART A: TECH STACK VISUAL GRID (ALL 24 ITEMS FROM SOURCE HTML)
            ======================================================== */}
        <div style={{ marginBottom: 'clamp(3.5rem, 7vh, 5.5rem)' }}>
          {/* Subheading Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.75rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-lime)',
                  boxShadow: '0 0 10px var(--accent-lime)',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                TECH STACK // 24 CORE TECHNOLOGIES
              </h3>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.1em',
              }}
            >
              SOURCE-VERIFIED ARSENAL
            </span>
          </div>

          {/* 24 Tech Stack Icon Cards Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(clamp(115px, 8.5vw, 145px), 1fr))',
              gap: 'clamp(0.85rem, 1.5vw, 1.25rem)',
            }}
          >
            {techStackItems.map((item) => (
              <div
                key={item.name}
                className="tech-icon-glass-card"
                title={item.name}
              >
                <div
                  style={{
                    width: '52px',
                    height: '52px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '14px',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid rgba(255, 255, 255, 0.08)',
                  }}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    loading="lazy"
                    onError={(e) => {
                      // Fallback in case external CDN fails
                      e.target.style.display = 'none';
                    }}
                  />
                </div>

                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.8rem',
                    fontWeight: 600,
                    letterSpacing: '0.04em',
                    color: '#f1f5f9',
                    marginTop: '2px',
                  }}
                >
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            PART B: 11 SKILL CATEGORIES (EXACTLY AS LISTED IN SOURCE HTML)
            ======================================================== */}
        <div>
          {/* Subheading Badge */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              flexWrap: 'wrap',
              gap: '1rem',
              marginBottom: '1.75rem',
              paddingBottom: '1rem',
              borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span
                style={{
                  width: '8px',
                  height: '8px',
                  borderRadius: '50%',
                  backgroundColor: '#38bdf8',
                  boxShadow: '0 0 10px #38bdf8',
                }}
              />
              <h3
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.86rem',
                  fontWeight: 700,
                  letterSpacing: '0.14em',
                  color: '#ffffff',
                  textTransform: 'uppercase',
                  margin: 0,
                }}
              >
                SPECIALIZED DISCIPLINES // 11 DOMAIN MATRICES
              </h3>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#38bdf8',
                letterSpacing: '0.1em',
              }}
            >
              100% INCLUSIVE CURATION
            </span>
          </div>

          {/* 11 Category Glass Cards Grid: 3-column responsive matrix */}
          <div className="skills-matrix-grid">
            {skillCategories.map((cat, idx) => {
              const Icon = categoryIconMap[cat.category] || Cpu;
              const formattedIndex = idx < 9 ? `0${idx + 1}` : `${idx + 1}`;

              return (
                <div
                  key={cat.category}
                  className="matrix-glass-card"
                  style={{
                    padding: 'clamp(1.6rem, 2.8vw, 2.35rem)',
                    position: 'relative',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                >
                  <div style={{ position: 'relative', zIndex: 3 }}>
                    {/* Header: Icon & Matrix Index */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.35rem',
                      }}
                    >
                      <div className="matrix-icon-box">
                        <Icon size={21} />
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--text-muted)',
                          letterSpacing: '0.12em',
                          fontWeight: 600,
                        }}
                      >
                        {formattedIndex} // MATRIX
                      </span>
                    </div>

                    {/* Category Title */}
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.35rem',
                        fontWeight: 700,
                        letterSpacing: '-0.015em',
                        color: '#ffffff',
                        marginBottom: '1.4rem',
                        textShadow: '0 2px 14px rgba(0, 0, 0, 0.4)',
                      }}
                    >
                      {cat.category}
                    </h4>
                  </div>

                  {/* Skills Pills */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative', zIndex: 3 }}>
                    {cat.skills.map((skill) => (
                      <span key={skill} className="matrix-skill-pill">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
