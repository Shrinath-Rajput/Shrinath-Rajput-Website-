import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, Cpu, Bot, Layers } from 'lucide-react';
import { SectionHeading } from '../components/SectionHeading';

export const WhatIDo = () => {
  const [activeItem, setActiveItem] = useState(null);

  const services = [
    {
      num: '01',
      title: 'AI & MACHINE LEARNING ENGINEERING',
      tag: 'DEEP LEARNING & EDGE VISION',
      desc: 'Architecting and training custom deep learning models, high-performance computer vision pipelines with YOLO and OpenCV, real-time facial telemetry, and mathematical prediction models tuned for edge and cloud deployment.',
      technologies: ['PyTorch', 'TensorFlow', 'OpenCV', 'YOLO', 'scikit-learn', 'NumPy'],
      icon: Cpu,
    },
    {
      num: '02',
      title: 'AGENTIC AI & AUTONOMOUS LLM SYSTEMS',
      tag: 'MULTI-AGENT REASONING & RAG',
      desc: 'Engineering autonomous agent frameworks equipped with cyclical reasoning, dynamic tool usage, self-correction loops, vector search indexing, and production-grade RAG architectures for healthcare and document intelligence.',
      technologies: ['Agentic AI', 'LangChain', 'FastAPI', 'Vector Search', 'Prompt Architecture'],
      icon: Bot,
    },
    {
      num: '03',
      title: 'FULL STACK ARCHITECTURE & SCALABLE BACKENDS',
      tag: 'MODERN WEB & HIGH-THROUGHPUT APIS',
      desc: 'Bridging algorithmic models with scalable production software: building asynchronous REST/WebSocket APIs, reactive micro-frontends in React/Vite, analytical database integrations with DuckDB and MongoDB, and end-to-end cloud deployments.',
      technologies: ['Python', 'FastAPI', 'React', 'Node.js', 'Express.js', 'DuckDB', 'MongoDB'],
      icon: Layers,
    },
  ];

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', backgroundColor: '#060709' }}>
      <div className="site-container">
        {/* Editorial Section Header inspired by Reference Frame 2 */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(3rem, 7vh, 5.5rem)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
            paddingBottom: '2.5rem',
          }}
        >
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.85rem',
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
                  letterSpacing: '0.1em',
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

          <div style={{ maxWidth: '420px', marginTop: '1.5rem' }}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.98rem',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
              }}
            >
              Specializing in the convergence of machine intelligence and production engineering. Designing algorithms that solve real operational bottlenecks.
            </p>
          </div>
        </div>

        {/* Editorial Rows inspired by Reference Frame 2 */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {services.map((service, index) => {
            const isHovered = activeItem === index;
            const Icon = service.icon;

            return (
              <div
                key={service.num}
                onMouseEnter={() => setActiveItem(index)}
                onMouseLeave={() => setActiveItem(null)}
                style={{
                  position: 'relative',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  padding: 'clamp(2.25rem, 4.5vh, 3.5rem) 0',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  cursor: 'pointer',
                  backgroundColor: isHovered ? 'rgba(255, 255, 255, 0.015)' : 'transparent',
                }}
              >
                {/* Accent indicator line on left */}
                <div
                  style={{
                    position: 'absolute',
                    left: 0,
                    top: 0,
                    bottom: 0,
                    width: '3px',
                    backgroundColor: 'var(--accent-lime)',
                    opacity: isHovered ? 1 : 0,
                    transform: isHovered ? 'scaleY(1)' : 'scaleY(0)',
                    transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                    boxShadow: '0 0 15px var(--accent-lime)',
                  }}
                />

                <div
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '80px 1.4fr 1.6fr 50px',
                    alignItems: 'center',
                    gap: 'clamp(1.5rem, 3vw, 3rem)',
                    paddingLeft: isHovered ? '1.5rem' : '0rem',
                    transition: 'padding-left 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                  className="what-we-do-row"
                >
                  {/* Number */}
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: 'clamp(1rem, 1.8vw, 1.4rem)',
                      fontWeight: 700,
                      color: isHovered ? 'var(--accent-lime)' : 'var(--text-dim)',
                      transition: 'color 0.3s ease',
                    }}
                  >
                    {service.num}
                  </div>

                  {/* Title & Tag */}
                  <div>
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-lime)',
                        letterSpacing: '0.12em',
                        display: 'block',
                        marginBottom: '0.35rem',
                      }}
                    >
                      {service.tag}
                    </span>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.4rem, 2.5vw, 2.2rem)',
                        fontWeight: 700,
                        color: isHovered ? '#ffffff' : '#e2e8f0',
                        letterSpacing: '-0.02em',
                        lineHeight: 1.15,
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {service.title}
                    </h3>
                  </div>

                  {/* Description & Tech Badges */}
                  <div>
                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.92rem',
                        lineHeight: 1.65,
                        color: isHovered ? '#cbd5e1' : 'var(--text-muted)',
                        marginBottom: '1rem',
                        transition: 'color 0.3s ease',
                      }}
                    >
                      {service.desc}
                    </p>

                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {service.technologies.map((tech) => (
                        <span
                          key={tech}
                          style={{
                            fontFamily: 'var(--font-mono)',
                            fontSize: '0.7rem',
                            padding: '0.25rem 0.6rem',
                            borderRadius: '4px',
                            backgroundColor: isHovered ? 'rgba(200, 255, 0, 0.06)' : 'rgba(255, 255, 255, 0.03)',
                            border: isHovered ? '1px solid rgba(200, 255, 0, 0.2)' : '1px solid rgba(255, 255, 255, 0.06)',
                            color: isHovered ? '#ffffff' : 'var(--text-muted)',
                            transition: 'all 0.3s ease',
                          }}
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Diagonal Arrow Icon */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}
                  >
                    <div
                      style={{
                        width: '44px',
                        height: '44px',
                        borderRadius: '50%',
                        backgroundColor: isHovered ? 'var(--accent-lime)' : 'rgba(255, 255, 255, 0.04)',
                        border: isHovered ? 'none' : '1px solid rgba(255, 255, 255, 0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: isHovered ? '#000000' : '#ffffff',
                        transform: isHovered ? 'translate(4px, -4px) scale(1.08)' : 'translate(0, 0) scale(1)',
                        transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                      }}
                    >
                      <ArrowUpRight size={20} />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
