import React from 'react';

export const HomeTechStack = () => {
  const technologies = [
    {
      name: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    },
    {
      name: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    },
    {
      name: 'React',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
    },
    {
      name: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
    },
    {
      name: 'Express.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg',
      filterInvert: true,
    },
    {
      name: 'MongoDB',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg',
    },
    {
      name: 'TensorFlow',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tensorflow/tensorflow-original.svg',
    },
    {
      name: 'PyTorch',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pytorch/pytorch-original.svg',
    },
    {
      name: 'OpenCV',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/opencv/opencv-original.svg',
    },
    {
      name: 'YOLO',
      icon: null,
      fallbackText: 'YOLO',
      accent: '#c8ff00',
    },
    {
      name: 'Scikit-learn',
      icon: 'https://upload.wikimedia.org/wikipedia/commons/0/05/Scikit_learn_logo_small.svg',
    },
    {
      name: 'Pandas',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/pandas/pandas-original.svg',
    },
    {
      name: 'NumPy',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/numpy/numpy-original.svg',
    },
    {
      name: 'FastAPI',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    },
    {
      name: 'LangChain',
      icon: null,
      fallbackText: '🦜🔗',
    },
    {
      name: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
    },
    {
      name: 'Git & GitHub',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
    },
    {
      name: 'and more...',
      icon: null,
      isMore: true,
    },
  ];

  return (
    <section
      id="home-stack"
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
                background: 'rgba(56, 189, 248, 0.08)',
                border: '1px solid rgba(56, 189, 248, 0.35)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: '#38bdf8',
                letterSpacing: '0.12em',
                fontWeight: 700,
              }}
            >
              02 // TECH STACK
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
            TECH<br />STACK
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
            Tools and technologies I use to build intelligent and scalable solutions.
          </p>
        </div>

        {/* Right Side: Multiple rows of technology pills */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '10px 12px',
            alignItems: 'center',
          }}
        >
          {technologies.map((tech) => (
            <div
              key={tech.name}
              className="glass-tech-chip glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.55rem 1.15rem',
                borderRadius: '9999px',
                background: tech.isMore
                  ? 'rgba(200, 255, 0, 0.08)'
                  : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(14, 20, 32, 0.55) 100%)',
                backdropFilter: 'blur(16px)',
                WebkitBackdropFilter: 'blur(16px)',
                border: tech.isMore
                  ? '1px dashed rgba(200, 255, 0, 0.45)'
                  : '1px solid rgba(255, 255, 255, 0.14)',
                boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25)',
                transition: 'all 0.25s ease',
                cursor: 'default',
              }}
            >
              {tech.icon && (
                <img
                  src={tech.icon}
                  alt={tech.name}
                  style={{
                    width: '18px',
                    height: '18px',
                    objectFit: 'contain',
                    filter: tech.filterInvert ? 'invert(1)' : 'none',
                  }}
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';
                  }}
                />
              )}
              {tech.fallbackText && !tech.icon && (
                <span style={{ fontSize: '0.8rem', color: tech.accent || '#38bdf8', fontWeight: 700 }}>
                  {tech.fallbackText}
                </span>
              )}
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 600,
                  color: tech.isMore ? 'var(--accent-lime)' : '#f1f5f9',
                  letterSpacing: '0.04em',
                }}
              >
                {tech.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
