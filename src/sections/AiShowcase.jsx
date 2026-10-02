import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { Brain, Sparkles, Eye, Bot, Database, Cpu, ArrowUpRight } from 'lucide-react';

export const AiShowcase = () => {
  const [activeCard, setActiveCard] = useState(0);

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

  return (
    <section id="ai-showcase" className="section-padding" style={{ position: 'relative', backgroundColor: '#060709' }}>
      <div className="site-container">
        <SectionHeading
          number="05"
          subtitle="AI FRONTIER LAB"
          title="I BUILD WITH AI."
        />

        <p
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1rem, 2vw, 1.25rem)',
            color: 'var(--text-muted)',
            maxWidth: '750px',
            marginBottom: ' clamp(2.5rem, 5vh, 4rem)',
            lineHeight: 1.7,
          }}
        >
          Operating across foundational and applied machine intelligence: from raw neural weights and mathematical loss functions to autonomous agent loops and production inference pipelines.
        </p>

        {/* High-Tech Experimental Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '1.75rem',
          }}
        >
          {aiDomains.map((domain, index) => {
            const Icon = domain.icon;
            const isHovered = activeCard === index;

            return (
              <div
                key={domain.id}
                onMouseEnter={() => setActiveCard(index)}
                className="glass-panel"
                style={{
                  padding: 'clamp(1.75rem, 3.5vw, 2.5rem)',
                  borderRadius: '24px',
                  border: isHovered ? `1px solid ${domain.accent}` : '1px solid rgba(255, 255, 255, 0.08)',
                  background: isHovered
                    ? `linear-gradient(180deg, rgba(16, 21, 30, 0.9) 0%, rgba(8, 10, 14, 0.98) 100%)`
                    : 'linear-gradient(180deg, rgba(12, 15, 20, 0.6) 0%, rgba(7, 9, 12, 0.9) 100%)',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                  boxShadow: isHovered ? `0 14px 34px ${domain.accent}15` : 'none',
                  transform: isHovered ? 'translateY(-4px)' : 'translateY(0)',
                }}
              >
                {/* Top Subtle Aura */}
                <div
                  style={{
                    position: 'absolute',
                    top: '-30px',
                    right: '-30px',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: `radial-gradient(circle, ${domain.accent}20 0%, transparent 70%)`,
                    filter: 'blur(25px)',
                    pointerEvents: 'none',
                  }}
                />

                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '1.5rem',
                  }}
                >
                  <div
                    style={{
                      width: '48px',
                      height: '48px',
                      borderRadius: '14px',
                      backgroundColor: 'rgba(255, 255, 255, 0.04)',
                      border: `1px solid ${domain.accent}40`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: domain.accent,
                    }}
                  >
                    <Icon size={24} />
                  </div>

                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: domain.accent,
                      letterSpacing: '0.1em',
                      fontWeight: 700,
                    }}
                  >
                    {domain.tag}
                  </span>
                </div>

                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.35rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    marginBottom: '0.85rem',
                    lineHeight: 1.25,
                  }}
                >
                  {domain.title}
                </h3>

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

                {/* Tech Pills */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {domain.technologies.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        padding: '0.3rem 0.65rem',
                        borderRadius: '6px',
                        backgroundColor: 'rgba(255, 255, 255, 0.03)',
                        border: '1px solid rgba(255, 255, 255, 0.07)',
                        color: '#cbd5e1',
                      }}
                    >
                      {t}
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
