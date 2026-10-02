import React, { useRef } from 'react';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { MagneticButton } from './MagneticButton';
import { getAssetPath } from '../utils/assets';
import gsap from 'gsap';

export const ProjectCard = ({ project, index }) => {
  const cardRef = useRef(null);
  const imageRef = useRef(null);
  const isReversed = index % 2 === 1;

  const handleMouseEnter = () => {
    gsap.to(imageRef.current, {
      scale: 1.05,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    gsap.to(imageRef.current, {
      scale: 1.0,
      duration: 0.6,
      ease: 'power2.out',
    });
  };

  return (
    <article
      ref={cardRef}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      className="glass-panel"
      style={{
        padding: 'clamp(1.75rem, 4vw, 3.25rem)',
        borderRadius: '28px',
        border: '1px solid rgba(255, 255, 255, 0.08)',
        background: 'linear-gradient(180deg, rgba(14, 17, 23, 0.75) 0%, rgba(8, 10, 14, 0.9) 100%)',
        position: 'relative',
        overflow: 'hidden',
        transition: 'border-color 0.35s ease, box-shadow 0.35s ease',
      }}
    >
      <div
        className="project-showcase-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: isReversed ? '1fr 1.2fr' : '1.2fr 1fr',
          gap: 'clamp(2.5rem, 4.5vw, 4rem)',
          alignItems: 'center',
        }}
      >
        {/* Left or Right Content depending on alternation */}
        <div style={{ order: isReversed ? 2 : 1 }}>
          {/* Category Badge & Award */}
          <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '10px', marginBottom: '1.25rem' }}>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.75rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.12em',
                fontWeight: 700,
                textTransform: 'uppercase',
              }}
            >
              {project.number} // {project.category}
            </span>

            {project.award && (
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  padding: '0.3rem 0.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'rgba(56, 189, 248, 0.12)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#38bdf8',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                }}
              >
                <Sparkles size={12} />
                {project.award}
              </span>
            )}
          </div>

          {/* Project Title */}
          <h3
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)',
              fontWeight: 800,
              letterSpacing: '-0.025em',
              lineHeight: 1.05,
              color: '#ffffff',
              marginBottom: '0.5rem',
            }}
          >
            {project.title}
          </h3>

          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.95rem',
              color: 'var(--accent-lime)',
              fontWeight: 500,
              marginBottom: '1.25rem',
            }}
          >
            {project.tagline}
          </p>

          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              marginBottom: '2rem',
            }}
          >
            {project.description}
          </p>

          {/* Technology Metadata Pills */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginBottom: '2.5rem' }}>
            {project.technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '0.35rem 0.85rem',
                  borderRadius: '6px',
                  backgroundColor: 'rgba(255, 255, 255, 0.04)',
                  border: '1px solid rgba(255, 255, 255, 0.08)',
                  color: '#e2e8f0',
                  letterSpacing: '0.04em',
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Verified Action CTAs */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            {project.liveDemo && (
              <MagneticButton
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.75rem 1.6rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-lime)',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.05em',
                  boxShadow: '0 0 20px rgba(200, 255, 0, 0.25)',
                }}
              >
                LIVE ARCHITECTURE
                <ArrowUpRight size={16} />
              </MagneticButton>
            )}

            {project.github && (
              <MagneticButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-pill"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.75rem 1.4rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                  fontWeight: 600,
                }}
              >
                <GithubIcon size={16} />
                SOURCE CODE
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Visual Preview Canvas */}
        <div
          style={{
            order: isReversed ? 1 : 2,
            position: 'relative',
            borderRadius: '20px',
            overflow: 'hidden',
            aspectRatio: '16/11',
            background: 'radial-gradient(circle at 50% 50%, rgba(20, 25, 35, 0.9) 0%, rgba(8, 10, 14, 0.95) 100%)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            ref={imageRef}
            src={getAssetPath(project.image)}
            alt={project.title}
            loading="lazy"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              transition: 'transform 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
            }}
          />

          {/* Vignette Shadow Overlay */}
          <div
            style={{
              position: 'absolute',
              inset: 0,
              background: 'linear-gradient(to top, rgba(6, 7, 9, 0.65) 0%, transparent 55%)',
              pointerEvents: 'none',
            }}
          />

          {/* Technical Status Badge */}
          <div
            style={{
              position: 'absolute',
              top: '1.25rem',
              right: '1.25rem',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              backgroundColor: 'rgba(6, 7, 9, 0.85)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-lime)',
              fontWeight: 600,
            }}
          >
            SYS-ACTIVE
          </div>
        </div>
      </div>
    </article>
  );
};
