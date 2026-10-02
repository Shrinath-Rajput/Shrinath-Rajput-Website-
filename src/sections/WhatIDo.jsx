import React, { useState } from 'react';
import {
  ArrowUpRight,
  Sparkles,
  Cpu,
  Bot,
  Layers,
  CheckCircle2,
  Code2,
  Server,
  Database,
  Workflow,
  Wrench,
  Globe,
} from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const WhatIDo = () => {
  const [activeItem, setActiveItem] = useState(null);

  // 1. AI & Machine Learning Engineering
  const mlService = {
    num: '01',
    title: 'AI & MACHINE LEARNING ENGINEERING',
    tag: 'DEEP LEARNING & PREDICTIVE INTELLIGENCE',
    desc: 'Architecting practical machine learning and deep learning systems, structuring reproducible training and evaluation pipelines, performing feature engineering and data preprocessing, and deploying intelligent models into production applications.',
    focus: [
      'Machine Learning',
      'Deep Learning',
      'Predictive Modeling',
      'Model Training',
      'Model Evaluation',
      'Feature Engineering',
      'Data Preprocessing',
    ],
    technologies: [
      'Python',
      'Scikit-learn',
      'TensorFlow',
      'Keras',
      'PyTorch',
      'Pandas',
      'NumPy',
      'OpenCV',
      'YOLO',
    ],
    icon: Cpu,
    accent: '#38bdf8',
  };

  // 2. Agentic AI & Autonomous LLM Systems
  const agenticService = {
    num: '02',
    title: 'AGENTIC AI & AUTONOMOUS LLM SYSTEMS',
    tag: 'MULTI-AGENT SYSTEMS & ENTERPRISE RAG',
    desc: 'Engineering practical autonomous AI agent frameworks, RAG-powered knowledge retrieval systems, multi-agent coordination loops, dynamic tool calling, and automated LLM-based production workflows.',
    focus: [
      'Agentic AI',
      'Generative AI',
      'Multi-Agent Systems',
      'LLM Applications',
      'RAG',
      'Autonomous Workflows',
      'Tool Calling',
      'AI Automation',
    ],
    technologies: [
      'LangChain',
      'FastAPI',
      'LLM APIs',
      'Vector Search',
      'RAG Pipelines',
      'Prompt Engineering',
      'Python',
    ],
    icon: Bot,
    accent: '#c8ff00',
  };

  // 3. Full Stack Architecture & Scalable Backends (Enhanced with complete requested skills)
  const fullStackService = {
    num: '03',
    title: 'FULL STACK ARCHITECTURE & SCALABLE BACKENDS',
    subtitle: 'MODERN WEB APPLICATION ENGINEERING',
    desc: 'Building responsive, scalable and production-ready web applications across frontend, backend, APIs and databases.',
    icon: Layers,
    accent: '#10b981',
    whatIBuild: [
      'Responsive web applications',
      'Full stack business applications',
      'REST API backends',
      'Database-driven applications',
      'Authentication systems',
      'Admin dashboards',
      'AI-integrated web applications',
      'Scalable backend services',
    ],
    groups: [
      {
        title: 'FRONTEND',
        technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'React Native', 'Bootstrap', 'Tailwind CSS'],
        icon: Code2,
        accent: '#38bdf8',
      },
      {
        title: 'BACKEND',
        technologies: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Python', 'Flask', 'FastAPI'],
        icon: Server,
        accent: '#c8ff00',
      },
      {
        title: 'DATABASE',
        technologies: ['MySQL', 'MongoDB', 'SQLite', 'PostgreSQL', 'Supabase', 'DuckDB'],
        icon: Database,
        accent: '#10b981',
      },
      {
        title: 'FULL STACK',
        technologies: ['MERN Stack', 'REST APIs', 'API Integration', 'Authentication', 'Database Integration', 'Responsive Web Applications'],
        icon: Workflow,
        accent: '#a78bfa',
      },
      {
        title: 'DEVELOPMENT',
        technologies: ['Git', 'GitHub', 'Vite', 'Docker'],
        icon: Wrench,
        accent: '#f59e0b',
      },
    ],
  };

  return (
    <section
      id="services"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 85% 12%, rgba(200, 255, 0, 0.045) 0%, transparent 55%),
          radial-gradient(circle at 10% 45%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 80% 80%, rgba(16, 185, 129, 0.035) 0%, transparent 50%),
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

      {/* Atmospheric Ambient Glow diffusers */}
      <div
        style={{
          position: 'absolute',
          top: '6%',
          right: '8%',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.045) 0%, transparent 65%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '52%',
          left: '4%',
          width: '620px',
          height: '620px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="services-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Editorial Section Header */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(3rem, 7vh, 5rem)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '2.5rem',
            width: '100%',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(200, 255, 0, 0.08)',
                border: '1px solid rgba(200, 255, 0, 0.25)',
                marginBottom: '1rem',
              }}
            >
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--accent-lime)',
                  letterSpacing: '0.12em',
                }}
              >
                02 // CAPABILITIES
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  color: '#ffffff',
                  letterSpacing: '0.15em',
                }}
              >
                CORE DISCIPLINES
              </span>
            </div>

            <h2
              className="text-metallic"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.5rem, 6.5vw, 5.5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              WHAT I DO
            </h2>
          </div>

          <div style={{ maxWidth: '640px', marginTop: '1.5rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                margin: 0,
              }}
            >
              Specializing in the convergence of machine intelligence and production engineering. Designing algorithms that solve real operational bottlenecks.
            </p>
          </div>
        </div>

        {/* ========================================================
            SERVICES STACK: 100% REAL GLASS SERVICE PANELS
            ======================================================== */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 'clamp(1.75rem, 3.5vh, 2.75rem)', width: '100%' }}>
          {/* SERVICE 01: AI & Machine Learning Engineering */}
          {[mlService, agenticService].map((service, index) => {
            const isHovered = activeItem === index;
            const Icon = service.icon;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                className="service-glass-panel"
                style={{
                  width: '100%',
                  boxSizing: 'border-box',
                  padding: 'clamp(2rem, 3.5vw, 3rem)',
                  borderColor: isHovered ? `${service.accent}65` : 'rgba(255, 255, 255, 0.16)',
                }}
              >
                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1.25fr)',
                    gap: 'clamp(2rem, 3.5vw, 3.5rem)',
                    alignItems: 'start',
                    position: 'relative',
                    zIndex: 3,
                  }}
                  className="service-panel-grid"
                >
                  {/* Left Column: Number, Title, Description */}
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <div
                        className="matrix-icon-box"
                        style={{
                          width: '46px',
                          height: '46px',
                          borderColor: isHovered ? `${service.accent}80` : 'rgba(255, 255, 255, 0.16)',
                          color: service.accent,
                          boxShadow: `0 0 18px ${service.accent}20, inset 0 1px 0 rgba(255, 255, 255, 0.22)`,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <div>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.75rem',
                            color: service.accent,
                            letterSpacing: '0.14em',
                            fontWeight: 700,
                            textTransform: 'uppercase',
                            display: 'block',
                          }}
                        >
                          {service.num} // SERVICE
                        </span>
                        <span
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.72rem',
                            color: 'var(--text-muted)',
                            letterSpacing: '0.08em',
                          }}
                        >
                          {service.tag}
                        </span>
                      </div>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.6rem, 2.8vw, 2.4rem)',
                        fontWeight: 750,
                        letterSpacing: '-0.02em',
                        color: '#ffffff',
                        lineHeight: 1.15,
                        marginBottom: '1.25rem',
                        textShadow: '0 2px 16px rgba(0, 0, 0, 0.45)',
                      }}
                    >
                      {service.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.96rem',
                        lineHeight: 1.75,
                        color: 'var(--text-muted)',
                        margin: 0,
                      }}
                    >
                      {service.desc}
                    </p>
                  </div>

                  {/* Right Column: Focus Areas & Technologies */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>
                    {/* Focus Area Badges */}
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: service.accent,
                          letterSpacing: '0.12em',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          marginBottom: '0.85rem',
                          display: 'flex',
                          alignItems: 'center',
                          gap: '6px',
                        }}
                      >
                        <CheckCircle2 size={13} />
                        CORE FOCUS DISCIPLINES
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.focus.map((item) => (
                          <span
                            key={item}
                            className="matrix-skill-pill"
                            style={{
                              backgroundColor: 'rgba(255, 255, 255, 0.05)',
                              borderColor: 'rgba(255, 255, 255, 0.14)',
                              fontSize: '0.74rem',
                            }}
                          >
                            {item}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Technologies */}
                    <div>
                      <div
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: '#ffffff',
                          letterSpacing: '0.12em',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          marginBottom: '0.85rem',
                        }}
                      >
                        ENGINEERING STACK
                      </div>

                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {service.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="matrix-skill-pill"
                            style={{
                              backgroundColor: 'rgba(200, 255, 0, 0.04)',
                              borderColor: 'rgba(200, 255, 0, 0.22)',
                              color: '#ffffff',
                              fontSize: '0.76rem',
                            }}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}

          {/* SERVICE 03: FULL STACK ARCHITECTURE & SCALABLE BACKENDS (FEATURED GLASS PANEL) */}
          <div
            onMouseEnter={() => setActiveItem(2)}
            onMouseLeave={() => setActiveItem(null)}
            className="service-glass-panel"
            style={{
              width: '100%',
              boxSizing: 'border-box',
              padding: 'clamp(2.25rem, 4vw, 3.5rem)',
              borderColor: activeItem === 2 ? 'rgba(200, 255, 0, 0.65)' : 'rgba(255, 255, 255, 0.18)',
            }}
          >
            <div style={{ position: 'relative', zIndex: 3 }}>
              {/* Header: Badge, Title, Subtitle, Description */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'flex-start',
                  flexWrap: 'wrap',
                  gap: '1.5rem',
                  marginBottom: '2rem',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '2rem',
                }}
              >
                <div style={{ flex: '1 1 650px', minWidth: 'min(100%, 300px)', maxWidth: '980px' }}>
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '12px',
                      marginBottom: '1rem',
                    }}
                  >
                    <div
                      className="matrix-icon-box"
                      style={{
                        width: '48px',
                        height: '48px',
                        borderColor: 'rgba(200, 255, 0, 0.45)',
                        color: 'var(--accent-lime)',
                        boxShadow: '0 0 20px rgba(200, 255, 0, 0.16)',
                      }}
                    >
                      <Layers size={24} />
                    </div>

                    <div>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.75rem',
                          color: 'var(--accent-lime)',
                          letterSpacing: '0.14em',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                          display: 'block',
                        }}
                      >
                        03 // SERVICE
                      </span>
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: '#38bdf8',
                          letterSpacing: '0.1em',
                          fontWeight: 600,
                        }}
                      >
                        {fullStackService.subtitle}
                      </span>
                    </div>
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 3.4vw, 2.75rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.02em',
                      color: '#ffffff',
                      lineHeight: 1.15,
                      marginBottom: '1rem',
                      textShadow: '0 2px 18px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    {fullStackService.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.96rem, 1.25vw, 1.08rem)',
                      lineHeight: 1.75,
                      color: 'var(--text-muted)',
                      margin: 0,
                    }}
                  >
                    "{fullStackService.desc}"
                  </p>
                </div>

                {/* Top Action Badge */}
                <div
                  className="hide-on-mobile"
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    padding: '0.5rem 1.15rem',
                    borderRadius: '9999px',
                    background: 'rgba(200, 255, 0, 0.08)',
                    border: '1px solid rgba(200, 255, 0, 0.35)',
                    color: 'var(--accent-lime)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 700,
                    letterSpacing: '0.08em',
                  }}
                >
                  PRODUCTION READY
                  <ArrowUpRight size={15} />
                </div>
              </div>

              {/* Information Block: WHAT I BUILD */}
              <div
                style={{
                  marginBottom: '2.5rem',
                  padding: '1.5rem',
                  borderRadius: '20px',
                  background: 'rgba(255, 255, 255, 0.035)',
                  backdropFilter: 'blur(16px)',
                  WebkitBackdropFilter: 'blur(16px)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  boxShadow: 'inset 0 1px 0 rgba(255, 255, 255, 0.14)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.14em',
                    color: 'var(--accent-lime)',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '1rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                  }}
                >
                  <Sparkles size={14} />
                  WHAT I BUILD
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
                    gap: '0.85rem 1.5rem',
                  }}
                >
                  {fullStackService.whatIBuild.map((item) => (
                    <div
                      key={item}
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '9px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        color: '#e2e8f0',
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
                      {item}
                    </div>
                  ))}
                </div>
              </div>

              {/* Structured Skill Matrix Grid: FRONTEND, BACKEND, DATABASE, FULL STACK, DEVELOPMENT */}
              <div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.14em',
                    color: '#38bdf8',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    marginBottom: '1.25rem',
                  }}
                >
                  STRUCTURED FULL STACK SKILL MATRIX
                </div>

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 220px), 1fr))',
                    gap: 'clamp(1rem, 2vw, 1.4rem)',
                  }}
                >
                  {fullStackService.groups.map((group) => {
                    const GroupIcon = group.icon;
                    return (
                      <div
                        key={group.title}
                        style={{
                          padding: '1.35rem',
                          borderRadius: '18px',
                          background:
                            'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%)',
                          backdropFilter: 'blur(18px)',
                          WebkitBackdropFilter: 'blur(18px)',
                          border: '1px solid rgba(255, 255, 255, 0.12)',
                          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div
                            style={{
                              display: 'flex',
                              alignItems: 'center',
                              gap: '8px',
                              marginBottom: '1rem',
                            }}
                          >
                            <div
                              style={{
                                width: '30px',
                                height: '30px',
                                borderRadius: '10px',
                                backgroundColor: 'rgba(255, 255, 255, 0.05)',
                                border: `1px solid ${group.accent}40`,
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                color: group.accent,
                              }}
                            >
                              <GroupIcon size={15} />
                            </div>

                            <h4
                              style={{
                                fontFamily: 'var(--font-mono)',
                                fontSize: '0.8rem',
                                fontWeight: 700,
                                letterSpacing: '0.12em',
                                color: group.accent,
                                margin: 0,
                                textTransform: 'uppercase',
                              }}
                            >
                              {group.title}
                            </h4>
                          </div>

                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                            {group.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="matrix-skill-pill"
                                style={{
                                  fontSize: '0.74rem',
                                  padding: '0.35rem 0.8rem',
                                }}
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
