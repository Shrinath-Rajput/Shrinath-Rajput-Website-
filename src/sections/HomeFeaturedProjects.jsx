import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { getAssetPath } from '../utils/assets';

export const HomeFeaturedProjects = () => {
  const featured = [
    {
      id: 'dociq-rag',
      title: 'DOCIQ',
      desc: 'AI powered document intelligence system',
      tech: ['React', 'FastAPI', 'AI'],
      image: '/assets/projects/dociq.jpg',
      fallbackImage: '/assets/projects/loan.png',
      link: '/work',
    },
    {
      id: 'clinsense-ai',
      title: 'ClinSense AI',
      desc: 'Medical image analysis platform',
      tech: ['Python', 'CNN', 'OpenCV'],
      image: '/assets/projects/clinsense.jpg',
      fallbackImage: '/assets/projects/Ai.jpeg',
      link: '/work',
    },
    {
      id: 'arogyamitra-ai',
      title: 'Aarogyamitra',
      desc: 'Healthcare assistant for rural areas',
      tech: ['ML', 'NLP', 'Web App'],
      image: '/assets/projects/arogyamitra.jpg',
      fallbackImage: '/assets/projects/home.png',
      link: '/work',
    },
    {
      id: 'ai-smart-city',
      title: 'AI Smart City Surveillance',
      desc: 'Real-time monitoring and threat detection',
      tech: ['YOLO', 'CV', 'React'],
      image: '/assets/projects/surveillance.jpg',
      fallbackImage: '/assets/projects/DR.jpeg',
      link: '/work',
    },
  ];

  return (
    <section
      id="home-projects"
      className="home-section-container"
      style={{
        width: 'min(98vw, 1860px)',
        margin: '0 auto 1.25rem',
        position: 'relative',
        zIndex: 10,
        boxSizing: 'border-box',
      }}
    >
      <div
        className="home-split-card glass-reflection"
        style={{
          width: '100%',
          borderRadius: '22px',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.07) 0%, rgba(10, 16, 26, 0.45) 50%, rgba(6, 10, 18, 0.65) 100%)',
          backdropFilter: 'blur(28px) saturate(150%)',
          WebkitBackdropFilter: 'blur(28px) saturate(150%)',
          border: '1px solid rgba(255, 255, 255, 0.14)',
          boxShadow: '0 20px 50px rgba(0, 0, 0, 0.45), 0 0 30px rgba(200, 255, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
          padding: 'clamp(1.5rem, 2.4vw, 2.4rem)',
          display: 'grid',
          gridTemplateColumns: 'minmax(260px, 1fr) minmax(0, 3fr)',
          gap: 'clamp(1.5rem, 2.5vw, 3rem)',
          alignItems: 'center',
          boxSizing: 'border-box',
        }}
      >
        {/* Left Side: Header info */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem' }}>
          <div>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.35rem 0.95rem',
                borderRadius: '9999px',
                background: 'rgba(200, 255, 0, 0.08)',
                border: '1px solid rgba(200, 255, 0, 0.35)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                color: '#c8ff00',
                letterSpacing: '0.08em',
                fontWeight: 700,
              }}
            >
              03 // FEATURED WORK
            </div>
          </div>

          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 3.2vw, 3rem)',
              fontWeight: 900,
              letterSpacing: '-0.02em',
              color: '#ffffff',
              margin: 0,
              textTransform: 'uppercase',
              lineHeight: 1.05,
            }}
          >
            SELECTED<br />
            <span style={{ color: '#c8ff00' }}>PROJECTS</span>
          </h2>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.85rem, 1vw, 0.94rem)',
              color: 'var(--text-muted)',
              lineHeight: 1.55,
              margin: 0,
              maxWidth: '380px',
            }}
          >
            A showcase of my recent work in AI, full-stack development, and computer vision.
          </p>
        </div>

        {/* Right Side: 4 Horizontal Project Cards matching reference */}
        <div
          className="home-projects-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, minmax(0, 1fr))',
            gap: 'clamp(0.75rem, 1.2vw, 1.15rem)',
          }}
        >
          {featured.map((item) => (
            <Link
              key={item.id}
              to={item.link}
              className="project-glass-card glass-reflection"
              style={{
                position: 'relative',
                borderRadius: '16px',
                background: 'linear-gradient(145deg, rgba(255, 255, 255, 0.06) 0%, rgba(14, 20, 32, 0.55) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(0, 240, 255, 0.20)',
                boxShadow: '0 10px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.12)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                textDecoration: 'none',
                transition: 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)',
                boxSizing: 'border-box',
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
                  src={getAssetPath(item.image)}
                  alt={item.title}
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                  }}
                  onError={(e) => {
                    e.currentTarget.src = getAssetPath(item.fallbackImage);
                  }}
                />
              </div>

              {/* Card Body */}
              <div
                style={{
                  padding: '0.95rem',
                  display: 'flex',
                  flexDirection: 'column',
                  flexGrow: 1,
                  justifyContent: 'space-between',
                  gap: '8px',
                }}
              >
                <div>
                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontSize: '0.94rem',
                      fontWeight: 700,
                      color: '#ffffff',
                      margin: '0 0 4px',
                      lineHeight: 1.25,
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.72rem',
                      color: 'var(--text-muted)',
                      lineHeight: 1.35,
                      margin: 0,
                      display: '-webkit-box',
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {item.desc}
                  </p>
                </div>

                {/* Bottom Row: Tech Tags on left + Circular Arrow Button on right */}
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginTop: '4px',
                  }}
                >
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '4px' }}>
                    {item.tech.map((t) => (
                      <span
                        key={t}
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          color: '#e2e8f0',
                          padding: '2px 7px',
                          borderRadius: '4px',
                          backgroundColor: 'rgba(255, 255, 255, 0.06)',
                          border: '1px solid rgba(255, 255, 255, 0.10)',
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>

                  {/* Circular Arrow Button */}
                  <div
                    className="project-arrow-btn"
                    style={{
                      width: '24px',
                      height: '24px',
                      borderRadius: '50%',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(0, 240, 255, 0.40)',
                      color: '#38bdf8',
                      flexShrink: 0,
                      transition: 'all 0.25s ease',
                      marginLeft: '6px',
                    }}
                  >
                    <ArrowUpRight size={13} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
