import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export const HomeFeaturedProjects = () => {
  const featured = [
    {
      id: 'dociq-rag',
      title: 'DOCIQ',
      badge: 'NLP + RAG',
      desc: 'Cognitive document understanding and RAG knowledge retrieval pipeline.',
      tech: ['Python', 'FastAPI', 'LangChain', 'ChromaDB'],
      image: '/assets/projects/dociq.jpg',
      fallbackImage: '/assets/projects/loan.png',
      link: '/work',
      badgeColor: '#a855f7',
    },
    {
      id: 'clinsense-ai',
      title: 'ClinSense AI',
      badge: 'AI + Healthcare',
      desc: 'AI clinical triage and predictive scheduling system built at MumbaiHacks 2025.',
      tech: ['Python', 'Scikit-Learn', 'FastAPI', 'Streamlit'],
      image: '/assets/projects/clinsense.jpg',
      fallbackImage: '/assets/projects/Ai.jpeg',
      link: '/work',
      badgeColor: '#38bdf8',
    },
    {
      id: 'arogyamitra-ai',
      title: 'Arogyamitra',
      badge: 'Agentic AI',
      desc: 'Autonomous multilingual healthcare diagnostic assistant & cognitive routing.',
      tech: ['Agentic AI', 'Python', 'LLMs', 'Healthcare ML'],
      image: '/assets/projects/arogyamitra.jpg',
      fallbackImage: '/assets/projects/home.png',
      link: '/work',
      badgeColor: '#c8ff00',
    },
    {
      id: 'ai-smart-city',
      title: 'AI Smart City Surveillance',
      badge: 'Computer Vision',
      desc: 'Real-time vehicle detection, flow telemetry, and surveillance intelligence.',
      tech: ['YOLO', 'OpenCV', 'PyTorch', 'Deep Learning'],
      image: '/assets/projects/surveillance.jpg',
      fallbackImage: '/assets/projects/DR.jpeg',
      link: '/work',
      badgeColor: '#10b981',
    },
  ];

  return (
    <section
      id="home-projects"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '0 auto 1.75rem',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="glass-reflection"
        style={{
          width: '100%',
          borderRadius: '24px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(10, 16, 26, 0.45) 50%, rgba(6, 10, 18, 0.65) 100%)',
          backdropFilter: 'blur(28px) saturate(150%)',
          WebkitBackdropFilter: 'blur(28px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.16)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45), 0 0 30px rgba(200, 255, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
          padding: 'clamp(1.6rem, 2.5vw, 2.5rem)',
          display: 'grid',
          gridTemplateColumns: 'minmax(280px, 1fr) minmax(0, 3fr)',
          gap: 'clamp(1.5rem, 2.8vw, 3.2rem)',
          alignItems: 'center',
        }}
      >
        {/* Left Side: Header info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.38rem 1rem',
                borderRadius: '9999px',
                background: 'rgba(200, 255, 0, 0.08)',
                border: '1px solid rgba(200, 255, 0, 0.35)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#c8ff00',
                letterSpacing: '0.12em',
                fontWeight: 700,
              }}
            >
              03 // FEATURED WORK
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3vw, 2.8rem)',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}
          >
            SELECTED<br />PROJECTS
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.88rem, 1.05vw, 0.98rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.6,
              margin: 0,
              maxWidth: '380px',
            }}
          >
            A showcase of my recent work in AI, full-stack development, and computer vision.
          </p>

          <div style={{ paddingTop: '0.5rem' }}>
            <Link
              to="/work"
              className="glass-pill glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                padding: '0.55rem 1.25rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(255, 255, 255, 0.06)',
                border: '1px solid rgba(255, 255, 255, 0.16)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.78rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                transition: 'all 0.25s ease',
              }}
            >
              VIEW ALL PROJECTS <ArrowUpRight size={14} color="var(--accent-lime)" />
            </Link>
          </div>
        </div>

        {/* Right Side: 4 Premium Project Cards */}
        <div
          className="home-projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(0.85rem, 1.3vw, 1.25rem)',
          }}
        >
          {featured.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="project-glass-card glass-reflection"
              style={{
                position: 'relative',
                borderRadius: '18px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06) 0%, rgba(14, 20, 32, 0.55) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 12px 35px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
              }}
            >
              {/* Card Image Frame */}
              <div
                style={{
                  width: '100%',
                  aspectRatio: '16 / 10',
                  position: 'relative',
                  overflow: 'hidden',
                  backgroundColor: '#0c101a',
                }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = item.fallbackImage;
                  }}
                />
                <div
                  style={{
                    position: 'absolute',
                    top: '8px',
                    left: '8px',
                    padding: '0.28rem 0.65rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(5, 8, 14, 0.85)',
                    backdropFilter: 'blur(10px)',
                    border: `1px solid ${item.badgeColor}40`,
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.62rem',
                    fontWeight: 700,
                    color: item.badgeColor,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                  }}
                >
                  {item.badge}
                </div>
              </div>

              {/* Card Body */}
              <div style={{ padding: '1rem', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'space-between' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '6px' }}>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '0.98rem',
                        fontWeight: 700,
                        color: '#ffffff',
                        margin: 0,
                        lineHeight: 1.25,
                      }}
                    >
                      {item.title}
                    </h3>
                    <div
                      className="project-arrow-btn"
                      style={{
                        width: '26px',
                        height: '26px',
                        borderRadius: '50%',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        backgroundColor: 'rgba(255, 255, 255, 0.08)',
                        border: '1px solid rgba(255, 255, 255, 0.16)',
                        color: '#cbd5e1',
                        flexShrink: 0,
                        transition: 'all 0.25s ease',
                      }}
                    >
                      <ArrowUpRight size={13} />
                    </div>
                  </div>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.74rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.4,
                      margin: '0 0 10px',
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Tech Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                  {item.tech.map((t) => (
                    <span
                      key={t}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.62rem',
                        color: 'rgba(255, 255, 255, 0.7)',
                        padding: '2px 7px',
                        borderRadius: '4px',
                        backgroundColor: 'rgba(255, 255, 255, 0.05)',
                        border: '1px solid rgba(255, 255, 255, 0.08)',
                      }}
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
