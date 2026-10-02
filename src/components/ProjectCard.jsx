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
      className="project-glass-card"
      style={{
        padding: 'clamp(1.75rem, 4vw, 3.25rem)',
        position: 'relative',
      }}
    >
      <div
        className={`project-showcase-grid ${isReversed ? 'reversed' : ''}`}
        style={{
          display: 'grid',
          gridTemplateColumns: isReversed ? '1fr 1.2fr' : '1.2fr 1fr',
          gap: 'clamp(2rem, 4vw, 3.5rem)',
          alignItems: 'center',
          position: 'relative',
          zIndex: 3,
        }}
      >
        {/* Left or Right Content depending on alternation */}
        <div
          className="project-card-content"
          style={{
            order: isReversed ? 2 : 1,
            display: 'flex',
            flexDirection: 'column',
          }}
        >
          {/* 1. Category Badge & Award */}
          <div
            className="project-card-header"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              gap: '10px',
              marginBottom: '1.25rem',
            }}
          >
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
              {project.number} / 35 // {project.category}
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
                  backdropFilter: 'blur(12px)',
                  WebkitBackdropFilter: 'blur(12px)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  color: '#38bdf8',
                  fontSize: '0.72rem',
                  fontFamily: 'var(--font-mono)',
                  fontWeight: 600,
                  boxShadow: '0 4px 12px rgba(56, 189, 248, 0.15)',
                }}
              >
                <Sparkles size={12} />
                {project.award}
              </span>
            )}
          </div>

          {/* 2. Project Title & Tagline */}
          <div className="project-card-title-group">
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.85rem, 4vw, 3.4rem)',
                fontWeight: 800,
                letterSpacing: '-0.025em',
                lineHeight: 1.08,
                color: '#ffffff',
                marginBottom: '0.5rem',
                textShadow: '0 2px 18px rgba(0, 0, 0, 0.45)',
              }}
            >
              {project.title}
            </h3>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 1.2vw, 0.95rem)',
                color: 'var(--accent-lime)',
                fontWeight: 500,
                marginBottom: '1.25rem',
                textShadow: '0 2px 12px rgba(200, 255, 0, 0.15)',
              }}
            >
              {project.tagline}
            </p>
          </div>

          {/* 4. Description */}
          <p
            className="project-card-desc"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.92rem, 1.1vw, 1rem)',
              lineHeight: 1.75,
              color: 'var(--text-muted)',
              marginBottom: '1.75rem',
            }}
          >
            {project.description}
          </p>

          {/* 5. Technology Metadata Pills */}
          <div
            className="project-card-tech"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: '2rem',
            }}
          >
            {project.technologies.map((tech) => (
              <span key={tech} className="project-tech-pill">
                {tech}
              </span>
            ))}
          </div>

          {/* 6. Verified Action CTAs */}
          <div
            className="project-card-actions"
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '1rem',
            }}
          >
            {project.github && (
              <MagneticButton
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="project-source-btn"
              >
                <GithubIcon size={16} />
                VIEW SOURCE
                <ArrowUpRight size={14} style={{ opacity: 0.8 }} />
              </MagneticButton>
            )}

            {project.liveDemo && (
              <MagneticButton
                href={project.liveDemo}
                target="_blank"
                rel="noopener noreferrer"
                className="project-demo-btn"
              >
                LIVE DEMO
                <ArrowUpRight size={16} />
              </MagneticButton>
            )}
          </div>
        </div>

        {/* Visual Preview Canvas - Layered Glass Frame */}
        <div
          className="project-image-glass-frame project-card-visual"
          style={{
            order: isReversed ? 1 : 2,
            aspectRatio: '16/11',
            width: '100%',
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
              display: 'block',
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
              backgroundColor: 'rgba(6, 7, 9, 0.65)',
              backdropFilter: 'blur(12px)',
              WebkitBackdropFilter: 'blur(12px)',
              border: '1px solid rgba(255, 255, 255, 0.16)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.72rem',
              color: 'var(--accent-lime)',
              fontWeight: 600,
              boxShadow: '0 4px 16px rgba(0, 0, 0, 0.4)',
              zIndex: 4,
            }}
          >
            SYS-ACTIVE
          </div>
        </div>
      </div>
    </article>
  );
};
