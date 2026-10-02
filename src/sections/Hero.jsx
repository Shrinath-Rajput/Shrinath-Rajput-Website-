import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ArrowDown, Cpu, Sparkles, ArrowUpRight, Terminal, Volume2, VolumeX } from 'lucide-react';
import { MagneticButton } from '../components/MagneticButton';
import { HeroInfoGrid } from '../components/HeroInfoGrid';
import { marqueeTechnologies } from '../data/skills';
import { Link } from 'react-router-dom';

export const Hero = ({ isReady }) => {
  const heroRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const videoContainerRef = useRef(null);
  const videoRef = useRef(null);
  const badgeRef = useRef(null);
  const metaRef = useRef(null);
  const infoGridRef = useRef(null);
  const bottomBarRef = useRef(null);
  const bgGlowRef = useRef(null);

  const [currentVideo, setCurrentVideo] = useState('intro'); // 'intro' -> 'experience'
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [videoError, setVideoError] = useState(false);

  // Single audio source: ONLY the active MP4 video's original audio track
  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted) {
      video.muted = false;
      video.volume = 1.0;
      setIsMuted(false);
    } else {
      video.muted = true;
      setIsMuted(true);
    }
  };

  // Event handler for video onEnded: transitions continuously Video 1 <-> Video 2 in an infinite loop
  const handleVideoEnded = () => {
    const nextVideo = currentVideo === 'intro' ? 'experience' : 'intro';
    const nextSrc = nextVideo === 'intro'
      ? '/assets/videos/shrinath-intro.mp4'
      : '/assets/videos/shrinath-experience.mp4';

    setIsTransitioning(true);
    const video = videoRef.current;
    if (video) {
      setTimeout(() => {
        setCurrentVideo(nextVideo);
        video.src = nextSrc;
        video.loop = false; // ensure onEnded triggers for the next video as well
        video.muted = isMuted;
        video.defaultMuted = isMuted;
        video.load();
        const playPromise = video.play();
        if (playPromise !== undefined) {
          playPromise.catch((err) => {
            console.warn(`Video ${nextVideo} play error:`, err);
          });
        }
        setIsTransitioning(false);
      }, 160);
    }
  };

  // Ensure initial intro video autoplays safely when hero mounts
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      video.defaultMuted = isMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video autoplay muted fallback:', err);
        });
      }
    }
  }, []);

  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      // Step 1: Background & UI elements fade in
      tl.fromTo(
        bgGlowRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1.6, ease: 'power2.out' }
      )
        .fromTo(
          badgeRef.current,
          { y: -25, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.9 },
          0.2
        )
        // Step 2 & 3: SHRINATH typography reveals smoothly
        .fromTo(
          title1Ref.current,
          { y: 90, opacity: 0, skewY: 2 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.2 },
          0.35
        )
        // Step 4: RAJPUT outline reveals
        .fromTo(
          title2Ref.current,
          { y: 90, opacity: 0, skewY: 2 },
          { y: 0, opacity: 1, skewY: 0, duration: 1.2 },
          0.5
        )
        // Step 5: Talking-head introduction video emerges from the background
        .fromTo(
          videoContainerRef.current,
          { scale: 0.94, opacity: 0, y: 40 },
          { scale: 1, opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' },
          0.65
        )
        // Step 6: Technical labels & bottom bar
        .fromTo(
          metaRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.8 },
          0.9
        )
        .fromTo(
          infoGridRef.current,
          { opacity: 0, y: 20 },
          { opacity: 1, y: 0, duration: 0.85 },
          0.95
        )
        .fromTo(
          bottomBarRef.current,
          { opacity: 0, y: 30 },
          { opacity: 1, y: 0, duration: 0.9 },
          1.05
        );

      // Step 7: Controlled 3D perspective parallax (respects prefers-reduced-motion)
      const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      if (!prefersReducedMotion) {
        const handleMouseMove = (e) => {
          const { clientX, clientY } = e;
          const xPos = (clientX / window.innerWidth - 0.5) * 16;
          const yPos = (clientY / window.innerHeight - 0.5) * 16;

          // Video container 3D tilt & gentle translation
          if (videoContainerRef.current) {
            gsap.to(videoContainerRef.current, {
              x: xPos * 0.65,
              y: yPos * 0.65,
              rotationY: xPos * 0.18,
              rotationX: -yPos * 0.14,
              duration: 1.4,
              ease: 'power2.out',
            });
          }

          // Typography counter-shift for rich cinematic depth
          if (title1Ref.current && title2Ref.current) {
            gsap.to([title1Ref.current, title2Ref.current], {
              x: -xPos * 0.3,
              y: -yPos * 0.15,
              duration: 1.4,
              ease: 'power2.out',
            });
          }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
      }
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingTop: 'clamp(6.8rem, 12vh, 8.2rem)',
        paddingBottom: '0.75rem',
        overflow: 'hidden',
        backgroundColor: '#070708',
      }}
    >
      {/* Background Subtle Video Atmosphere with Dark Vignette */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.035,
          overflow: 'hidden',
          filter: 'blur(16px) contrast(1.1) brightness(0.65)',
        }}
      >
        <video
          src="/assets/videos/shrinath-hero.mp4"
          poster="/assets/ai/shrinath-about.png"
          autoPlay
          muted
          loop
          playsInline
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
          }}
        />
      </div>

      {/* Atmospheric Depth Lighting: Subtle Deep Blue & Lime Ambient Haze */}
      <div
        ref={bgGlowRef}
        style={{
          position: 'absolute',
          top: '30%',
          right: '15%',
          transform: 'translate(10%, -30%)',
          width: 'clamp(500px, 62vw, 950px)',
          height: 'clamp(500px, 62vw, 950px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.16) 0%, rgba(56, 189, 248, 0.08) 38%, rgba(200, 255, 0, 0.035) 65%, transparent 80%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Controlled lower ambient green light behind glass panels */}
      <div
        style={{
          position: 'absolute',
          bottom: '6%',
          left: '18%',
          width: 'clamp(450px, 55vw, 950px)',
          height: 'clamp(280px, 32vh, 480px)',
          borderRadius: '50%',
          background: 'radial-gradient(ellipse, rgba(200, 255, 0, 0.05) 0%, rgba(56, 189, 248, 0.03) 45%, transparent 70%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* Top Location Strip: Aligned with main hero content */}
      <div style={{ position: 'relative', zIndex: 10, width: 'min(94vw, 1820px)', margin: '0 auto 0.75rem', padding: '0 0.25rem' }}>
        <div
          style={{
            display: 'flex',
            justifyContent: 'flex-end',
            alignItems: 'center',
          }}
        >
          <div
            className="hide-on-mobile glass-pill glass-reflection"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.74rem',
              color: 'var(--text-muted)',
              display: 'flex',
              alignItems: 'center',
              gap: '8px',
              letterSpacing: '0.08em',
              padding: '0.45rem 1.15rem',
              borderRadius: '9999px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(18px)',
              WebkitBackdropFilter: 'blur(18px)',
              border: '1px solid rgba(255, 255, 255, 0.18)',
              boxShadow: '0 4px 20px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
            }}
          >
            <Cpu size={14} color="var(--accent-lime)" style={{ filter: 'drop-shadow(0 0 6px var(--accent-lime))' }} />
            KOLHAPUR // PUNE, MAHARASHTRA
          </div>
        </div>
      </div>

      {/* Main Two-Column Full-Width Hero Grid: Balanced 1.08fr / 0.92fr */}
      <div
        className="hero-main-grid"
        style={{
          position: 'relative',
          flex: 1,
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1.08fr) minmax(480px, 0.92fr)',
          alignItems: 'center',
          gap: 'clamp(1.5rem, 3vw, 3.5rem)',
          zIndex: 5,
          width: 'min(94vw, 1820px)',
          margin: '0 auto',
          padding: '0 0.25rem',
        }}
      >
        {/* Left Column: Personal Branding, Typography, Thesis, Actions */}
        <div
          className="hero-content"
          style={{
            position: 'relative',
            zIndex: 6,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minWidth: 0,
            overflow: 'visible',
            paddingLeft: 'clamp(4px, 1vw, 16px)',
          }}
        >
          {/* Engineering Role Badge */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div
              ref={badgeRef}
              className="glass-pill glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(255, 255, 255, 0.04) 50%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), 0 0 20px rgba(200, 255, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              }}
            >
              <span
                style={{
                  width: '7px',
                  height: '7px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-lime)',
                  boxShadow: '0 0 10px var(--accent-lime)',
                  display: 'inline-block',
                }}
              />
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  color: '#f8fafc',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                AI / ML ENGINEER & FULL STACK DEVELOPER
              </span>
            </div>
          </div>

          {/* Monumental Display Typography: SHRINATH / RAJPUT - 100% visible, zero clipping */}
          <div style={{ userSelect: 'none', marginBottom: '1.5rem', width: '100%', minWidth: 0, overflow: 'visible' }}>
            <h1
              ref={title1Ref}
              className="hero-display-title text-metallic"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.85rem, 4.8vw, 5.6rem)',
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                margin: 0,
                padding: 0,
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                display: 'block',
              }}
            >
              SHRINATH
            </h1>

            <h1
              ref={title2Ref}
              className="hero-display-title"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.85rem, 4.8vw, 5.6rem)',
                fontWeight: 800,
                lineHeight: 0.88,
                letterSpacing: '-0.03em',
                textTransform: 'uppercase',
                color: 'transparent',
                WebkitTextStroke: '2px rgba(255, 255, 255, 0.75)',
                margin: 0,
                padding: 0,
                width: '100%',
                whiteSpace: 'nowrap',
                overflow: 'visible',
                display: 'block',
              }}
            >
              RAJPUT
            </h1>
          </div>

          {/* Technical Metadata & Quick Actions */}
          <div ref={metaRef}>
            <p
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.92rem, 1.35vw, 1.08rem)',
                lineHeight: 1.7,
                color: 'var(--text-muted)',
                maxWidth: '490px',
                marginBottom: '1.85rem',
              }}
            >
              Architecting intelligent neural pipelines, autonomous agent systems, and edge computer vision software engineered for production-grade scale.
            </p>

            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center' }}>
              <MagneticButton
                to="/work"
                className="glass-reflection"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  padding: '0.85rem 1.85rem',
                  borderRadius: '9999px',
                  backgroundColor: 'var(--accent-lime)',
                  color: '#000000',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.82rem',
                  fontWeight: 700,
                  letterSpacing: '0.06em',
                  boxShadow: '0 0 30px rgba(200, 255, 0, 0.40), inset 0 1px 0 rgba(255, 255, 255, 0.45)',
                  border: '1px solid rgba(200, 255, 0, 0.8)',
                  transition: 'all 0.25s ease',
                  textDecoration: 'none',
                }}
              >
                SELECTED WORK
                <ArrowUpRight size={16} />
              </MagneticButton>

              <MagneticButton
                to="/contact"
                className="glass-pill glass-reflection"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.85rem 1.6rem',
                  fontSize: '0.82rem',
                  fontFamily: 'var(--font-mono)',
                  color: '#ffffff',
                  fontWeight: 600,
                  letterSpacing: '0.06em',
                  background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.035) 50%, rgba(255, 255, 255, 0.015) 100%)',
                  backdropFilter: 'blur(18px)',
                  WebkitBackdropFilter: 'blur(18px)',
                  border: '1px solid rgba(255, 255, 255, 0.20)',
                  boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
                  transition: 'all 250ms ease',
                  textDecoration: 'none',
                }}
              >
                GET IN TOUCH
              </MagneticButton>
            </div>

            {/* Editorial Index Indicator matching Reference Image */}
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '1.25rem',
                marginTop: '2.4rem',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.8rem',
                color: 'rgba(255, 255, 255, 0.4)',
                letterSpacing: '0.12em',
              }}
            >
              <span style={{ color: '#ffffff', fontWeight: 600 }}>01</span>
              <span style={{ width: '55px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ color: 'rgba(255, 255, 255, 0.65)', textTransform: 'uppercase', fontSize: '0.72rem' }}>
                  AI / ML ENGINEER
                </span>
                <span style={{ width: '18px', height: '2px', backgroundColor: 'var(--accent-lime)' }} />
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Full Talking-Head Video of Shrinath */}
        <div
          ref={videoContainerRef}
          className="hero-video-col"
          style={{
            position: 'relative',
            width: '100%',
            height: 'clamp(480px, 66vh, 680px)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            perspective: '1000px',
            transformStyle: 'preserve-3d',
          }}
        >
          {/* Subtle Ambient Rim Glow behind Video */}
          <div
            style={{
              position: 'absolute',
              top: '5%',
              left: '5%',
              width: '90%',
              height: '90%',
              borderRadius: '50%',
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.20) 0%, rgba(56, 189, 248, 0.08) 40%, rgba(200, 255, 0, 0.035) 60%, transparent 75%)',
              filter: 'blur(60px)',
              zIndex: 1,
              pointerEvents: 'none',
            }}
          />

          {/* Integrated Video Frame with Seamless Glassmorphism Border */}
          <div
            className="hero-video-stage video-frame glass-reflection"
            style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              borderRadius: '28px',
              overflow: 'hidden',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.035) 40%, rgba(255, 255, 255, 0.02) 100%)',
              backdropFilter: 'blur(25px) saturate(170%)',
              WebkitBackdropFilter: 'blur(25px) saturate(170%)',
              border: '1px solid rgba(255, 255, 255, 0.22)',
              boxShadow: '0 30px 100px rgba(0, 0, 0, 0.55), 0 0 60px rgba(163, 230, 53, 0.08), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
            }}
          >
            {/* The Master Talking-Head Video: Intro -> Experience continuous flow */}
            <video
              ref={videoRef}
              src={currentVideo === 'intro' ? '/assets/videos/shrinath-intro.mp4' : '/assets/videos/shrinath-experience.mp4'}
              poster="/assets/videos/shrinath-intro-poster.jpg"
              autoPlay
              muted={isMuted}
              loop={false}
              playsInline
              controls={false}
              preload="auto"
              onEnded={handleVideoEnded}
              style={{
                width: '100%',
                height: '100%',
                display: 'block',
                objectFit: 'cover',
                objectPosition: 'center 12%',
                borderRadius: '22px',
                filter: 'contrast(1.03) brightness(0.98)',
                opacity: isTransitioning ? 0.35 : 1,
                transition: 'opacity 0.2s ease-in-out',
              }}
            />

            {/* Left Edge Cinematic Gradient Blending: seamless fade into obsidian dark background */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: 0,
                width: '26%',
                background: 'linear-gradient(to right, #06070a 0%, rgba(6, 7, 10, 0.8) 40%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 4,
              }}
            />

            {/* Bottom Edge Fade into Hero Floor */}
            <div
              style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
                height: '24%',
                background: 'linear-gradient(to top, #06070a 0%, rgba(6, 7, 10, 0.75) 45%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 4,
              }}
            />

            {/* Top Subtle Edge Fade */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '14%',
                background: 'linear-gradient(to bottom, rgba(6, 7, 10, 0.45) 0%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 4,
              }}
            />

            {/* Right Subtle Edge Fade */}
            <div
              style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                width: '12%',
                background: 'linear-gradient(to left, rgba(6, 7, 10, 0.45) 0%, transparent 100%)',
                pointerEvents: 'none',
                zIndex: 4,
              }}
            />

            {/* Minimal Sound Control Glass Pill Button */}
            <button
              type="button"
              onClick={toggleSound}
              className="glass-pill interactive-target glass-reflection"
              style={{
                position: 'absolute',
                bottom: '1.25rem',
                right: '1.25rem',
                zIndex: 10,
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '0.52rem 1.15rem',
                borderRadius: '9999px',
                background: isMuted
                  ? 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(12, 16, 20, 0.6) 100%)'
                  : 'linear-gradient(135deg, rgba(200, 255, 0, 0.22) 0%, rgba(200, 255, 0, 0.08) 100%)',
                border: isMuted ? '1px solid rgba(255, 255, 255, 0.20)' : '1px solid rgba(200, 255, 0, 0.55)',
                color: isMuted ? '#cbd5e1' : '#ffffff',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                cursor: 'pointer',
                boxShadow: isMuted
                  ? '0 8px 30px rgba(0, 0, 0, 0.45), inset 0 1px 0 rgba(255, 255, 255, 0.18)'
                  : '0 0 25px rgba(200, 255, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
                transition: 'all 0.25s ease',
              }}
              title={isMuted ? 'Turn Sound ON' : 'Turn Sound OFF'}
              aria-label={isMuted ? 'Play introduction video sound' : 'Mute introduction video sound'}
            >
              {isMuted ? (
                <VolumeX size={15} color="#94a3b8" />
              ) : (
                <Volume2 size={15} color="var(--accent-lime)" />
              )}
              <span style={{ color: isMuted ? '#94a3b8' : '#ffffff' }}>
                {isMuted ? 'SOUND OFF' : 'SOUND ON'}
              </span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '3px', height: '14px', marginLeft: '3px' }}>
                {[0.1, 0.3, 0.15, 0.42, 0.2].map((delay, i) => (
                  <span
                    key={i}
                    style={{
                      width: '2.5px',
                      height: isMuted ? '4px' : '13px',
                      backgroundColor: isMuted ? '#64748b' : 'var(--accent-lime)',
                      borderRadius: '1px',
                      display: 'inline-block',
                      animation: isMuted ? 'none' : `soundWave 0.7s ease-in-out infinite alternate`,
                      animationDelay: `${delay}s`,
                      transition: 'height 0.2s ease, background-color 0.2s ease',
                    }}
                  />
                ))}
              </div>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Information Panels: Factual Personal Details in Futuristic Glass Panels */}
      <div ref={infoGridRef} style={{ width: '100%', position: 'relative', zIndex: 8 }}>
        <HeroInfoGrid />
      </div>

      {/* Bottom Tech Stack Bar: Full Premium Glassmorphism Capsule */}
      <div
        ref={bottomBarRef}
        className="glass-reflection"
        style={{
          position: 'relative',
          zIndex: 10,
          width: 'min(94vw, 1820px)',
          margin: '1.25rem auto 0.65rem',
          height: 'clamp(66px, 7.5vh, 74px)',
          borderRadius: '9999px',
          border: '1px solid rgba(255, 255, 255, 0.18)',
          background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 14, 20, 0.52) 40%, rgba(10, 14, 20, 0.44) 100%)',
          backdropFilter: 'blur(30px) saturate(180%)',
          WebkitBackdropFilter: 'blur(30px) saturate(180%)',
          boxShadow: '0 20px 60px rgba(0, 0, 0, 0.45), 0 0 35px rgba(200, 255, 0, 0.04), inset 0 1px 0 rgba(255, 255, 255, 0.20), inset 0 0 30px rgba(255, 255, 255, 0.02)',
          padding: '0 clamp(1.2rem, 2.5vw, 2.5rem)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            width: '100%',
            gap: '1.25rem',
          }}
        >
          {/* Left Title Label: TECH STACK • */}
          <div
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              paddingRight: '1.25rem',
              borderRight: '1px solid rgba(255, 255, 255, 0.12)',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.76rem',
              fontWeight: 700,
              color: '#ffffff',
              letterSpacing: '0.12em',
              whiteSpace: 'nowrap',
              flexShrink: 0,
            }}
          >
            TECH STACK
            <span
              style={{
                width: '6px',
                height: '6px',
                borderRadius: '50%',
                backgroundColor: 'var(--accent-lime)',
                boxShadow: '0 0 8px var(--accent-lime)',
                display: 'inline-block',
              }}
            />
          </div>

          {/* Marquee Technology Track */}
          <div style={{ flex: 1, overflow: 'hidden', position: 'relative' }}>
            <div className="marquee-track" style={{ display: 'flex', alignItems: 'center' }}>
              {[
                { name: 'PYTHON', icon: '🐍' },
                { name: 'PYTORCH', icon: '🔥' },
                { name: 'TENSORFLOW', icon: '⚡' },
                { name: 'REACT', icon: '⚛' },
                { name: 'NODE.JS', icon: '⬢' },
                { name: 'EXPRESS.JS', icon: 'ex' },
                { name: 'OPENCV', icon: '◎' },
                { name: 'YOLO', icon: '∞' },
                { name: 'SCIKIT-LEARN', icon: '◈' },
                { name: 'PANDAS', icon: '🐼' },
                { name: 'NUMPY', icon: '🔢' },
                { name: 'VITE', icon: '⚡' },
                { name: 'STREAMLIT', icon: '👑' },
                { name: 'FASTAPI', icon: '🚀' },
                { name: 'PYTHON', icon: '🐍' },
                { name: 'PYTORCH', icon: '🔥' },
                { name: 'TENSORFLOW', icon: '⚡' },
                { name: 'REACT', icon: '⚛' },
                { name: 'NODE.JS', icon: '⬢' },
                { name: 'EXPRESS.JS', icon: 'ex' },
                { name: 'OPENCV', icon: '◎' },
                { name: 'YOLO', icon: '∞' },
                { name: 'SCIKIT-LEARN', icon: '◈' },
                { name: 'PANDAS', icon: '🐼' },
                { name: 'NUMPY', icon: '🔢' },
                { name: 'VITE', icon: '⚡' },
                { name: 'STREAMLIT', icon: '👑' },
                { name: 'FASTAPI', icon: '🚀' },
              ].map((tech, idx) => (
                <span
                  key={`${tech.name}-${idx}`}
                  className="glass-pill glass-reflection"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '0.36rem 0.95rem',
                    borderRadius: '9999px',
                    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.035) 50%, rgba(255, 255, 255, 0.015) 100%)',
                    backdropFilter: 'blur(14px)',
                    WebkitBackdropFilter: 'blur(14px)',
                    border: '1px solid rgba(255, 255, 255, 0.16)',
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    fontWeight: 600,
                    color: '#e2e8f0',
                    letterSpacing: '0.06em',
                    marginRight: '0.85rem',
                    whiteSpace: 'nowrap',
                    flexShrink: 0,
                    transition: 'all 0.25s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.5)';
                    e.currentTarget.style.boxShadow = '0 0 20px rgba(200, 255, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.22)';
                    e.currentTarget.style.color = '#ffffff';
                    e.currentTarget.style.transform = 'translateY(-1px)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                    e.currentTarget.style.boxShadow = '0 4px 15px rgba(0, 0, 0, 0.25), inset 0 1px 0 rgba(255, 255, 255, 0.14)';
                    e.currentTarget.style.color = '#e2e8f0';
                    e.currentTarget.style.transform = 'translateY(0)';
                  }}
                >
                  <span style={{ fontSize: '0.85rem' }}>{tech.icon}</span>
                  <span>{tech.name}</span>
                </span>
              ))}
            </div>
          </div>

          {/* Right Link: AND MORE ↗ */}
          <Link
            to="/stack"
            className="glass-pill"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '6px',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.75rem',
              fontWeight: 600,
              color: 'var(--text-muted)',
              letterSpacing: '0.08em',
              whiteSpace: 'nowrap',
              padding: '0.35rem 0.85rem',
              borderRadius: '9999px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              flexShrink: 0,
              transition: 'all 0.2s ease',
              textDecoration: 'none',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = 'var(--accent-lime)';
              e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.4)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = 'var(--text-muted)';
              e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.12)';
            }}
          >
            AND MORE
            <ArrowUpRight size={13} color="var(--accent-lime)" />
          </Link>
        </div>
      </div>
    </section>
  );
};
