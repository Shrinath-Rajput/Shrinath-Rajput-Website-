import React, { useState, useEffect, useMemo } from 'react';
import {
  Award,
  ExternalLink,
  X,
  Search,
  CheckCircle2,
  ShieldCheck,
  ArrowUpRight,
  Filter,
  Sparkles,
} from 'lucide-react';
import { certificatesData } from '../data/certificates';
import { getAssetPath } from '../utils/assets';

export const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');

  const filterTabs = [
    'ALL',
    'ACADEMIC',
    'WORKSHOPS',
    'TECH EVENTS',
    'COMPETITIONS',
    'PROFESSIONAL',
  ];

  // Dynamically filter and search certificates
  const filteredCertificates = useMemo(() => {
    return certificatesData.filter((cert) => {
      const matchesFilter =
        activeFilter === 'ALL' ||
        cert.category === activeFilter ||
        (cert.tags && cert.tags.includes(activeFilter));

      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        cert.title.toLowerCase().includes(query) ||
        cert.issuer.toLowerCase().includes(query) ||
        cert.desc.toLowerCase().includes(query) ||
        (cert.category && cert.category.toLowerCase().includes(query));

      return matchesFilter && matchesSearch;
    });
  }, [activeFilter, searchQuery]);

  // Close modal on Escape key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedCert(null);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent background scroll when modal is open
  useEffect(() => {
    if (selectedCert) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [selectedCert]);

  return (
    <section
      id="certificates"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 85% 15%, rgba(200, 255, 0, 0.045) 0%, transparent 55%),
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
          width: '580px',
          height: '580px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.045) 0%, transparent 65%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
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
        {/* ========================================================
            EDITORIAL HEADER
            ======================================================== */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'flex-end',
            marginBottom: 'clamp(2.5rem, 5vh, 3.75rem)',
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
                08 // ACHIEVEMENTS & CERTIFICATIONS
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
                VERIFIED CREDENTIALS
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
              CERTIFICATES
            </h1>

            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: 'clamp(0.85rem, 1.2vw, 1.05rem)',
                color: 'var(--accent-lime)',
                letterSpacing: '0.08em',
                textTransform: 'uppercase',
                marginTop: '0.85rem',
                marginBottom: 0,
                fontWeight: 600,
              }}
            >
              Professional Learning, Achievements & Recognitions
            </p>
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
              Documented record of academic distinctions, professional machine learning accreditations, embedded IoT workshops, and national hackathon achievements.
            </p>
          </div>
        </div>

        {/* ========================================================
            FILTER & SEARCH BAR (100% REAL GLASS)
            ======================================================== */}
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: '1.25rem',
            marginBottom: 'clamp(2rem, 3.5vh, 2.75rem)',
            width: '100%',
          }}
        >
          {/* Glass Filter Tabs */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              alignItems: 'center',
            }}
          >
            {filterTabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveFilter(tab)}
                className={`glass-filter-btn ${activeFilter === tab ? 'active' : ''}`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Glass Search Input */}
          <div style={{ position: 'relative', width: 'min(100%, 340px)' }}>
            <Search
              size={16}
              style={{
                position: 'absolute',
                left: '14px',
                top: '50%',
                transform: 'translateY(-50%)',
                color: 'var(--accent-lime)',
                pointerEvents: 'none',
              }}
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search certificates..."
              className="glass-search-input"
              aria-label="Search certificates"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                style={{
                  position: 'absolute',
                  right: '12px',
                  top: '50%',
                  transform: 'translateY(-50%)',
                  background: 'none',
                  border: 'none',
                  color: '#94a3b8',
                  cursor: 'pointer',
                  padding: 0,
                  display: 'flex',
                }}
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>
        </div>

        {/* ========================================================
            CERTIFICATE GALLERY GRID: 4-COLUMN DESKTOP (100% GLASS)
            ======================================================== */}
        {filteredCertificates.length > 0 ? (
          <div className="cert-grid" style={{ width: '100%' }}>
            {filteredCertificates.map((cert) => (
              <div
                key={cert.id}
                className="cert-glass-card"
                onClick={() => setSelectedCert(cert)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    setSelectedCert(cert);
                  }
                }}
                aria-label={`View certificate: ${cert.title}`}
              >
                {/* Image Frame with contain object-fit (never cropped) */}
                <div className="cert-img-wrapper">
                  <img
                    src={cert.image}
                    alt={cert.title}
                    loading="lazy"
                    onError={(e) => {
                      if (!e.target.src.includes('public/images')) {
                        e.target.src = getAssetPath(`images/${cert.image.split('/').pop()}`);
                      }
                    }}
                  />

                  {/* Small Category Glass Badge */}
                  <div
                    style={{
                      position: 'absolute',
                      top: '12px',
                      left: '12px',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '5px',
                      padding: '0.28rem 0.75rem',
                      borderRadius: '9999px',
                      background: 'rgba(10, 14, 22, 0.85)',
                      backdropFilter: 'blur(12px)',
                      WebkitBackdropFilter: 'blur(12px)',
                      border: '1px solid rgba(255, 255, 255, 0.20)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: '#38bdf8',
                      fontWeight: 700,
                      letterSpacing: '0.05em',
                      zIndex: 4,
                    }}
                  >
                    <ShieldCheck size={12} />
                    {cert.category}
                  </div>
                </div>

                {/* Content Area */}
                <div
                  style={{
                    padding: '1.35rem',
                    display: 'flex',
                    flexDirection: 'column',
                    flex: 1,
                    justifyContent: 'space-between',
                    gap: '0.85rem',
                    position: 'relative',
                    zIndex: 4,
                  }}
                >
                  <div>
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        marginBottom: '0.45rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: 'var(--accent-lime)',
                          letterSpacing: '0.1em',
                          fontWeight: 700,
                          textTransform: 'uppercase',
                        }}
                      >
                        {cert.issuer}
                      </span>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          color: '#94a3b8',
                        }}
                      >
                        {cert.date}
                      </span>
                    </div>

                    <h3
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.15rem',
                        fontWeight: 750,
                        color: '#ffffff',
                        lineHeight: 1.3,
                        margin: '0 0 0.45rem 0',
                      }}
                    >
                      {cert.title}
                    </h3>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.86rem',
                        color: '#94a3b8',
                        lineHeight: 1.5,
                        margin: 0,
                      }}
                    >
                      {cert.desc}
                    </p>
                  </div>

                  {/* Card Bottom: Verified Credential & VIEW Button */}
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <span
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: '#cbd5e1',
                        display: 'inline-flex',
                        alignItems: 'center',
                        gap: '5px',
                      }}
                    >
                      <CheckCircle2 size={13} color="var(--accent-lime)" />
                      Verified
                    </span>

                    <button
                      className="view-cert-btn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedCert(cert);
                      }}
                    >
                      VIEW
                      <ArrowUpRight size={13} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div
            className="resume-glass-card"
            style={{
              padding: '4rem 2rem',
              textAlign: 'center',
              width: '100%',
            }}
          >
            <Sparkles size={32} color="var(--accent-lime)" style={{ margin: '0 auto 1rem' }} />
            <h3 style={{ fontFamily: 'var(--font-display)', fontSize: '1.4rem', color: '#ffffff', marginBottom: '0.5rem' }}>
              No Certificates Match "{searchQuery}"
            </h3>
            <p style={{ fontFamily: 'var(--font-body)', color: '#94a3b8', marginBottom: '1.5rem' }}>
              Try searching with another keyword or resetting the filter category.
            </p>
            <button
              onClick={() => {
                setActiveFilter('ALL');
                setSearchQuery('');
              }}
              className="glass-filter-btn active"
            >
              Reset Filters
            </button>
          </div>
        )}
      </div>

      {/* ========================================================
          FULL-SCREEN GLASS LIGHTBOX MODAL (NO BOOTSTRAP)
          ======================================================== */}
      {selectedCert && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
          onClick={() => setSelectedCert(null)}
          style={{
            position: 'fixed',
            inset: 0,
            zIndex: 9999,
            backgroundColor: 'rgba(4, 6, 10, 0.88)',
            backdropFilter: 'blur(28px) saturate(160%)',
            WebkitBackdropFilter: 'blur(28px) saturate(160%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: 'clamp(1rem, 3vw, 2.5rem)',
            animation: 'fadeInPage 0.25s cubic-bezier(0.16, 1, 0.3, 1)',
          }}
        >
          <div
            onClick={(e) => e.stopPropagation()}
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '1080px',
              maxHeight: '92vh',
              borderRadius: '26px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(15, 20, 30, 0.88) 100%)',
              backdropFilter: 'blur(32px)',
              WebkitBackdropFilter: 'blur(32px)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              boxShadow: '0 30px 90px rgba(0, 0, 0, 0.85), inset 0 1.5px 0 rgba(255, 255, 255, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              overflow: 'hidden',
            }}
          >
            {/* Modal Header */}
            <div
              style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                padding: '1.25rem clamp(1.25rem, 2.5vw, 2rem)',
                borderBottom: '1px solid rgba(255, 255, 255, 0.12)',
                backgroundColor: 'rgba(10, 14, 22, 0.75)',
              }}
            >
              <div>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.12em',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    display: 'block',
                  }}
                >
                  {selectedCert.issuer} // {selectedCert.category}
                </span>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.2rem, 2.2vw, 1.6rem)',
                    fontWeight: 750,
                    color: '#ffffff',
                    margin: 0,
                  }}
                >
                  {selectedCert.title}
                </h3>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <a
                  href={selectedCert.image}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hide-on-mobile"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0.5rem 1rem',
                    borderRadius: '9999px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.18)',
                    color: '#ffffff',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    textDecoration: 'none',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.16)')}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)')}
                >
                  OPEN ORIGINAL
                  <ExternalLink size={13} />
                </a>

                <button
                  onClick={() => setSelectedCert(null)}
                  style={{
                    width: '40px',
                    height: '40px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    border: '1px solid rgba(255, 255, 255, 0.22)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#ffffff',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(200, 255, 0, 0.2)';
                    e.currentTarget.style.borderColor = 'var(--accent-lime)';
                    e.currentTarget.style.color = 'var(--accent-lime)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.08)';
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.22)';
                    e.currentTarget.style.color = '#ffffff';
                  }}
                  aria-label="Close modal"
                >
                  <X size={20} />
                </button>
              </div>
            </div>

            {/* Modal Body: Large readable image view (never cropped) */}
            <div
              style={{
                padding: 'clamp(1rem, 2vw, 1.75rem)',
                overflowY: 'auto',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'rgba(5, 7, 10, 0.94)',
              }}
            >
              <img
                src={selectedCert.image}
                alt={selectedCert.title}
                style={{
                  maxWidth: '100%',
                  maxHeight: '74vh',
                  objectFit: 'contain',
                  borderRadius: '14px',
                  boxShadow: '0 12px 40px rgba(0, 0, 0, 0.8)',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                }}
              />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
