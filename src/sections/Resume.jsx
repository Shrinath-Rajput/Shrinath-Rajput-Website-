import React from 'react';
import {
  FileText,
  Download,
  ExternalLink,
  GraduationCap,
  Award,
  Briefcase,
  User,
  Mail,
  MapPin,
  Calendar,
  CheckCircle2,
  Sparkles,
} from 'lucide-react';
import { resumeData } from '../data/resumeData';

export const Resume = () => {
  const { profile, education, achievements, internships } = resumeData;

  return (
    <section
      id="resume"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 80% 10%, rgba(200, 255, 0, 0.045) 0%, transparent 50%),
          radial-gradient(circle at 15% 45%, rgba(56, 189, 248, 0.04) 0%, transparent 50%),
          radial-gradient(circle at 75% 85%, rgba(16, 185, 129, 0.035) 0%, transparent 50%),
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
          top: '8%',
          right: '10%',
          width: '560px',
          height: '560px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.04) 0%, transparent 65%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '55%',
          left: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.035) 0%, transparent 65%)',
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
            marginBottom: 'clamp(2.5rem, 6vh, 4.5rem)',
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
                07 // CURRICULUM VITAE
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
                EXPERIENCE & CREDENTIALS
              </span>
            </div>

            <h1
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
              RESUME
            </h1>
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
              Comprehensive overview of engineering education, machine learning internships, academic distinctions, and technical project achievements.
            </p>
          </div>
        </div>

        {/* ========================================================
            TOP RESUME SECTION: PROFILE, EDUCATION & ACHIEVEMENTS
            ======================================================== */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))',
            gap: 'clamp(1.5rem, 2.5vw, 2.25rem)',
            marginBottom: 'clamp(2rem, 4vh, 3rem)',
            width: '100%',
          }}
        >
          {/* PROFILE / CONTACT CARD */}
          <div className="resume-glass-card" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(200, 255, 0, 0.08)',
                  border: '1px solid rgba(200, 255, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-lime)',
                }}
              >
                <User size={22} />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  ENGINEER PROFILE
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 750,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {profile.name}
                </h2>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#94a3b8',
                    letterSpacing: '0.08em',
                    display: 'block',
                    marginBottom: '0.2rem',
                  }}
                >
                  PRIMARY SPECIALIZATION
                </span>
                <p
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.08rem',
                    fontWeight: 650,
                    color: '#38bdf8',
                    margin: 0,
                  }}
                >
                  {profile.role}
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Mail size={16} color="var(--accent-lime)" />
                <a
                  href={`mailto:${profile.email}`}
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.88rem',
                    color: '#e2e8f0',
                    textDecoration: 'none',
                    transition: 'color 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = 'var(--accent-lime)')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = '#e2e8f0')}
                >
                  {profile.email}
                </a>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MapPin size={16} color="#38bdf8" />
                <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.88rem', color: '#e2e8f0' }}>
                  {profile.location}
                </span>
              </div>
            </div>
          </div>

          {/* EDUCATION CARD */}
          <div className="resume-glass-card" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(56, 189, 248, 0.08)',
                  border: '1px solid rgba(56, 189, 248, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#38bdf8',
                }}
              >
                <GraduationCap size={22} />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#38bdf8',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  ACADEMIC FOUNDATION
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 750,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  EDUCATION
                </h2>
              </div>
            </div>

            {education.map((edu) => (
              <div key={edu.degree}>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.15rem',
                    fontWeight: 700,
                    color: '#ffffff',
                    lineHeight: 1.35,
                    marginBottom: '0.5rem',
                  }}
                >
                  {edu.degree}
                </h3>

                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.94rem',
                    color: '#94a3b8',
                    lineHeight: 1.6,
                    margin: '0 0 0.75rem 0',
                  }}
                >
                  {edu.institution}
                </p>

                <div
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(56, 189, 248, 0.08)',
                    border: '1px solid rgba(56, 189, 248, 0.25)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: '#38bdf8',
                    fontWeight: 600,
                  }}
                >
                  <Sparkles size={12} />
                  {edu.status}
                </div>
              </div>
            ))}
          </div>

          {/* ACHIEVEMENTS CARD */}
          <div className="resume-glass-card" style={{ padding: 'clamp(1.75rem, 3vw, 2.5rem)' }}>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                marginBottom: '1.5rem',
                borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                paddingBottom: '1.25rem',
              }}
            >
              <div
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  background: 'rgba(200, 255, 0, 0.08)',
                  border: '1px solid rgba(200, 255, 0, 0.35)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: 'var(--accent-lime)',
                }}
              >
                <Award size={22} />
              </div>

              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  HONORS & MILESTONES
                </span>
                <h2
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '1.5rem',
                    fontWeight: 750,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  ACHIEVEMENTS
                </h2>
              </div>
            </div>

            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {achievements.map((item) => (
                <li
                  key={item}
                  style={{
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: '10px',
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.92rem',
                    color: '#e2e8f0',
                    lineHeight: 1.5,
                  }}
                >
                  <CheckCircle2 size={16} color="var(--accent-lime)" style={{ flexShrink: 0, marginTop: '3px' }} />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* ========================================================
            INTERNSHIP EXPERIENCE (PREMIUM GLASS TIMELINE)
            ======================================================== */}
        <div style={{ marginBottom: 'clamp(2.5rem, 5vh, 4rem)', width: '100%' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              letterSpacing: '0.14em',
              color: 'var(--accent-lime)',
              fontWeight: 700,
              textTransform: 'uppercase',
              marginBottom: '1.5rem',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
            }}
          >
            <Briefcase size={16} />
            INTERNSHIP EXPERIENCE
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            {internships.map((internship) => (
              <div
                key={internship.company}
                className="resume-glass-card"
                style={{
                  padding: 'clamp(1.75rem, 3.2vw, 2.5rem)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'flex-start',
                    flexWrap: 'wrap',
                    gap: '1rem',
                    marginBottom: '1.25rem',
                    borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                    paddingBottom: '1.25rem',
                  }}
                >
                  <div>
                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.35rem, 2.2vw, 1.8rem)',
                        fontWeight: 750,
                        color: '#ffffff',
                        margin: '0 0 0.35rem 0',
                      }}
                    >
                      {internship.company}
                    </h3>

                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        flexWrap: 'wrap',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.92rem',
                          fontWeight: 700,
                          color: '#38bdf8',
                        }}
                      >
                        {internship.role}
                      </span>
                      <span style={{ color: 'rgba(255, 255, 255, 0.25)' }}>•</span>
                      <div
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          gap: '6px',
                          color: '#94a3b8',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.8rem',
                        }}
                      >
                        <Calendar size={13} />
                        {internship.period}
                      </div>
                    </div>
                  </div>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {internship.skills.map((skill) => (
                      <span
                        key={skill}
                        className="matrix-skill-pill"
                        style={{
                          fontSize: '0.74rem',
                          padding: '0.3rem 0.75rem',
                        }}
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                <ul
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '0.75rem',
                  }}
                >
                  {internship.highlights.map((bullet) => (
                    <li
                      key={bullet}
                      style={{
                        display: 'flex',
                        alignItems: 'flex-start',
                        gap: '10px',
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.94rem',
                        color: '#cbd5e1',
                        lineHeight: 1.6,
                      }}
                    >
                      <span
                        style={{
                          width: '6px',
                          height: '6px',
                          borderRadius: '50%',
                          backgroundColor: 'var(--accent-lime)',
                          boxShadow: '0 0 8px var(--accent-lime)',
                          flexShrink: 0,
                          marginTop: '9px',
                        }}
                      />
                      <span>{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* ========================================================
            RESUME PDF PREVIEW & DOWNLOAD SECTION
            ======================================================== */}
        <div className="resume-glass-card" style={{ padding: 'clamp(1.75rem, 3.5vw, 3rem)', width: '100%' }}>
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              flexWrap: 'wrap',
              gap: '1.25rem',
              marginBottom: '1.75rem',
            }}
          >
            <div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  letterSpacing: '0.14em',
                  color: 'var(--accent-lime)',
                  fontWeight: 700,
                  textTransform: 'uppercase',
                  marginBottom: '0.35rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <FileText size={15} />
                DIGITAL DOCUMENT PREVIEW
              </div>
              <h2
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: 'clamp(1.4rem, 2.5vw, 2rem)',
                  fontWeight: 750,
                  color: '#ffffff',
                  margin: 0,
                }}
              >
                Resume_shrinath_rajput.pdf
              </h2>
            </div>

            <div className="resume-action-buttons" style={{ display: 'flex', alignItems: 'center', gap: '12px', flexWrap: 'wrap' }}>
              <a
                href={profile.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="view-resume-btn"
              >
                <ExternalLink size={15} />
                VIEW RESUME ↗
              </a>

              <a
                href={profile.pdfUrl}
                download="Resume_shrinath_rajput.pdf"
                className="download-resume-btn"
              >
                <Download size={15} />
                DOWNLOAD RESUME ⬇
              </a>
            </div>
          </div>

          {/* Embedded Interactive PDF Viewer Frame */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              height: 'clamp(480px, 70vh, 720px)',
              borderRadius: '18px',
              overflow: 'hidden',
              backgroundColor: 'rgba(10, 14, 22, 0.95)',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              boxShadow: 'inset 0 2px 8px rgba(0, 0, 0, 0.6)',
            }}
          >
            <iframe
              src={`${profile.pdfUrl}#toolbar=1&navpanes=0`}
              title="Shrinath Rajput Resume PDF"
              style={{
                width: '100%',
                height: '100%',
                border: 'none',
                display: 'block',
              }}
            />
          </div>
        </div>
      </div>
    </section>
  );
};
