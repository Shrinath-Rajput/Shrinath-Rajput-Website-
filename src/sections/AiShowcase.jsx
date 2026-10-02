import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import {
  Brain,
  Sparkles,
  Eye,
  Bot,
  Database,
  Cpu,
  Layers,
  Server,
  Code2,
  Workflow,
  CheckCircle2,
  ArrowUpRight,
} from 'lucide-react';

export const AiShowcase = () => {
  const [activeCard, setActiveCard] = useState(null);

  // Existing 5 Core AI Domains strictly preserved
  const aiDomains = [
    {
      id: 'vision',
      icon: Eye,
      title: 'Computer Vision & Real-Time Telemetry',
      tag: 'EDGE INFERENCE // ZERO LATENCY',
      desc: 'Deploying optimized YOLOv8 architectures, sub-millisecond facial landmark telemetry, eye aspect ratio (EAR) fatigue calculations, and edge-accelerated surveillance analytics.',
      technologies: ['YOLO', 'OpenCV', 'PyTorch', 'TensorFlow', 'Real-Time Edge'],
      accent: '#38bdf8',
    },
    {
      id: 'agentic',
      icon: Bot,
      title: 'Agentic AI & Multi-Agent Orchestration',
      tag: 'AUTONOMOUS REASONING & TOOLS',
      desc: 'Architecting multi-agent networks with cyclical planning, dynamic tool-calling protocols, self-reflection evaluation loops, and vernacular query comprehension for mission-critical workflows.',
      technologies: ['Agentic AI', 'LangChain', 'FastAPI', 'Autonomous Loops'],
      accent: '#c8ff00',
    },
    {
      id: 'genai',
      icon: Sparkles,
      title: 'Generative AI & Enterprise RAG',
      tag: 'SYNTHESIS & STRUCTURED REASONING',
      desc: 'Designing production-grade retrieval-augmented generation pipelines, vector database embeddings, low-latency structured JSON generation, and intelligent document summarization engines.',
      technologies: ['RAG Pipelines', 'Vector Search', 'Prompt Architecture', 'FastAPI'],
      accent: '#a78bfa',
    },
    {
      id: 'ml',
      icon: Brain,
      title: 'Statistical & Deep Machine Learning',
      tag: 'PREDICTIVE MODELLING & CLASSIFICATION',
      desc: 'Developing medical urgency scoring models, multi-class risk classification, anomaly detection algorithms, and agricultural crop disease predictors trained on real-world datasets.',
      technologies: ['scikit-learn', 'TensorFlow', 'Keras', 'NumPy', 'Pandas'],
      accent: '#f59e0b',
    },
    {
      id: 'data',
      icon: Database,
      title: 'High-Throughput Data Intelligence',
      tag: 'ANALYTICAL EXTRACTION & DUCKDB',
      desc: 'Constructing robust analytical pipelines capable of parsing massive unstructured corpora, tabular analytics, and low-latency database queries across DuckDB, MongoDB, and MySQL.',
      technologies: ['DuckDB', 'Pandas', 'MongoDB', 'MySQL', 'Data Pipelines'],
      accent: '#10b981',
    },
  ];

  // Dedicated Full Stack Engineering Groups strictly matching user specification
  const fullStackGroups = [
    {
      title: 'FRONTEND',
      technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
      accent: '#38bdf8',
      icon: Code2,
    },
    {
      title: 'BACKEND',
      technologies: ['Node.js', 'Express.js', 'Java', 'Spring Boot', 'Flask'],
      accent: '#c8ff00',
      icon: Server,
    },
    {
      title: 'DATABASE',
      technologies: ['MongoDB', 'SQL'],
      accent: '#10b981',
      icon: Database,
    },
    {
      title: 'STACK',
      technologies: ['MERN Stack'],
      accent: '#a78bfa',
      icon: Layers,
    },
  ];

  // Core Full Stack Architecture & Engineering Capabilities
  const fullStackCapabilities = [
    'Frontend Development',
    'Backend Development',
    'REST APIs',
    'Database Integration',
    'Authentication',
    'API Integration',
    'Responsive Web Applications',
    'Full Stack Architecture',
  ];

  return (
    <section
      id="ai-showcase"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 15% 15%, rgba(200, 255, 0, 0.045) 0%, transparent 50%),
          radial-gradient(circle at 85% 40%, rgba(56, 189, 248, 0.04) 0%, transparent 55%),
          radial-gradient(circle at 20% 75%, rgba(168, 85, 247, 0.035) 0%, transparent 50%),
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

      {/* Floating Ambient Glow Light Diffusers */}
      <div
        style={{
          position: 'absolute',
          top: '5%',
          left: '10%',
          width: '550px',
          height: '550px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.04) 0%, transparent 65%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 2 }}>
        {/* Section Heading */}
        <SectionHeading
          number="05"
          subtitle="AI FRONTIER LAB"
          title="I BUILD WITH AI."
        />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 1.4vw, 1.18rem)',
            color: 'var(--text-muted)',
            maxWidth: '1000px',
            lineHeight: 1.7,
            marginTop: '-1.5rem',
            marginBottom: 'clamp(2.5rem, 5vh, 4rem)',
          }}
        >
          Operating across foundational and applied machine intelligence: from raw neural weights and mathematical
          loss functions to autonomous agent loops, computer vision telemetry, and full-stack software production.
        </p>

        {/* ========================================================
            PART 1: 5 CORE AI/ML FRONTIER DOMAINS (100% REAL GLASS)
            ======================================================== */}
        <div className="ailab-cards-grid">
          {aiDomains.map((domain, index) => {
            const Icon = domain.icon;
            const isHovered = activeCard === index;

            return (
              <div
                key={domain.id}
                onMouseEnter={() => setActiveCard(index)}
                onMouseLeave={() => setActiveCard(null)}
                className="ailab-glass-card"
                style={{
                  padding: 'clamp(1.6rem, 2.8vw, 2.35rem)',
                  borderColor: isHovered ? `${domain.accent}70` : 'rgba(255, 255, 255, 0.16)',
                  boxShadow: isHovered
                    ? `0 28px 75px rgba(0, 0, 0, 0.6), 0 0 30px ${domain.accent}25, inset 0 1.5px 0 rgba(255, 255, 255, 0.35)`
                    : '0 20px 60px rgba(0, 0, 0, 0.40), inset 0 1.5px 0 rgba(255, 255, 255, 0.20)',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                }}
              >
                {/* Subtle Ambient Color Flare in Card Corner */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-35px',
                    right: '-35px',
                    width: '120px',
                    height: '120px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${domain.accent}25 0%, transparent 70%)`,
                    filter: 'blur(30px)',
                    pointerEvents: 'none',
                    zIndex: 1,
                  }}
                />

                <div style={{ position: 'relative', zIndex: 3 }}>
                  {/* Card Header: Icon Badge & Monospace Domain Tag */}
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      marginBottom: '1.4rem',
                    }}
                  >
                    <div
                      className="matrix-icon-box"
                      style={{
                        borderColor: isHovered ? `${domain.accent}80` : 'rgba(255, 255, 255, 0.16)',
                        color: domain.accent,
                        boxShadow: `0 0 18px ${domain.accent}20, inset 0 1px 0 rgba(255, 255, 255, 0.22)`,
                      }}
                    >
                      <Icon size={22} />
                    </div>

                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: domain.accent,
                        letterSpacing: '0.12em',
                        fontWeight: 700,
                      }}
                    >
                      {domain.tag}
                    </span>
                  </div>

                  {/* Domain Title */}
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '1.32rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      marginBottom: '0.85rem',
                      lineHeight: 1.25,
                      textShadow: '0 2px 14px rgba(0, 0, 0, 0.45)',
                    }}
                  >
                    {domain.title}
                  </h3>

                  {/* Domain Description */}
                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.92rem',
                      lineHeight: 1.7,
                      color: 'var(--text-muted)',
                      marginBottom: '1.75rem',
                    }}
                  >
                    {domain.desc}
                  </p>
                </div>

                {/* Technology Chips */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', position: 'relative', zIndex: 3 }}>
                  {domain.technologies.map((t) => (
                    <span key={t} className="matrix-skill-pill">
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* ========================================================
            PART 2: NEW FULL STACK DEVELOPMENT SESSION (100% GLASS)
            ======================================================== */}
        <div>
          {/* Subheading Technical Label Sequence */}
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
                06 // FULL STACK DEVELOPMENT
              </h3>
            </div>

            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.12em',
                fontWeight: 600,
              }}
            >
              MODERN WEB APPLICATION ENGINEERING
            </span>
          </div>

          {/* Large Featured Glass Session Card for Full Stack Development */}
          <div
            className="ailab-fullstack-card"
            style={{
              padding: 'clamp(2rem, 4vw, 3.5rem)',
            }}
          >
            {/* Top Glass Header Area */}
            <div style={{ position: 'relative', zIndex: 3, marginBottom: '2.5rem' }}>
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
                    width: '50px',
                    height: '50px',
                    borderColor: 'rgba(200, 255, 0, 0.45)',
                    color: 'var(--accent-lime)',
                    boxShadow: '0 0 20px rgba(200, 255, 0, 0.18)',
                  }}
                >
                  <Workflow size={24} />
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
                    06 // FULL STACK
                  </span>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: 'clamp(1.8rem, 3.5vw, 2.75rem)',
                      fontWeight: 800,
                      letterSpacing: '-0.025em',
                      color: '#ffffff',
                      margin: 0,
                      lineHeight: 1.1,
                      textShadow: '0 2px 18px rgba(0, 0, 0, 0.5)',
                    }}
                  >
                    Full Stack Development
                  </h3>
                </div>
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.98rem, 1.25vw, 1.12rem)',
                  lineHeight: 1.75,
                  color: 'var(--text-muted)',
                  maxWidth: '1000px',
                  margin: 0,
                }}
              >
                Building responsive, scalable and production-ready web applications across frontend, backend, APIs and databases.
              </p>
            </div>

            {/* Architecture Capabilities Chips */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                marginBottom: '2.75rem',
                padding: '1.25rem 1.5rem',
                borderRadius: '18px',
                background: 'rgba(255, 255, 255, 0.035)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: '1px solid rgba(255, 255, 255, 0.10)',
              }}
            >
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  letterSpacing: '0.12em',
                  color: 'var(--accent-lime)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '0.85rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <CheckCircle2 size={14} />
                FULL STACK ENGINEERING DISCIPLINES
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {fullStackCapabilities.map((capability) => (
                  <span
                    key={capability}
                    className="matrix-skill-pill"
                    style={{
                      backgroundColor: 'rgba(200, 255, 0, 0.05)',
                      borderColor: 'rgba(200, 255, 0, 0.22)',
                      color: '#f8fafc',
                      fontSize: '0.74rem',
                    }}
                  >
                    {capability}
                  </span>
                ))}
              </div>
            </div>

            {/* Technology Groups Matrix Grid: FRONTEND, BACKEND, DATABASE, STACK */}
            <div
              style={{
                position: 'relative',
                zIndex: 3,
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 230px), 1fr))',
                gap: 'clamp(1rem, 2vw, 1.5rem)',
              }}
            >
              {fullStackGroups.map((group) => {
                const GroupIcon = group.icon;
                return (
                  <div
                    key={group.title}
                    style={{
                      padding: '1.35rem',
                      borderRadius: '18px',
                      background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 100%)',
                      backdropFilter: 'blur(18px)',
                      WebkitBackdropFilter: 'blur(18px)',
                      border: '1px solid rgba(255, 255, 255, 0.12)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                      transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
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
                            width: '32px',
                            height: '32px',
                            borderRadius: '10px',
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            border: `1px solid ${group.accent}40`,
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            color: group.accent,
                          }}
                        >
                          <GroupIcon size={16} />
                        </div>
                        <h4
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.82rem',
                            fontWeight: 700,
                            letterSpacing: '0.1em',
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
                          <span key={tech} className="matrix-skill-pill">
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
    </section>
  );
};
