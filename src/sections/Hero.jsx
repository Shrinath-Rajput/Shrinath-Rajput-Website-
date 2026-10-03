import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import {
  ArrowUpRight,
  Mail,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { HolographicGlobe } from '../components/HolographicGlobe';
import { WaveGridCanvas } from '../components/WaveGridCanvas';
import { AiNeuralBackdrop } from '../components/AiNeuralBackdrop';
import { SocialIcon } from '../components/SocialIcons';
import introVideo from '../gemini_generated_video_2d15ab03.mp4';
import newVideo from '../new.mp4';

export const Hero = ({ isReady }) => {
  const heroRef = useRef(null);
  const leftColRef = useRef(null);
  const rightColRef = useRef(null);
  const title1Ref = useRef(null);
  const title2Ref = useRef(null);
  const videoRef = useRef(null);

  // Exact 2-video continuous loop: INTRO (0) -> NEW (1) -> INTRO (0) -> NEW (1) -> LOOP
  const videos = [introVideo, newVideo];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isMuted, setIsMuted] = useState(true);

  // Real portfolio social links
  const socialIcons = [
    { id: 'github', url: 'https://github.com/Shrinath-Rajput', label: 'GitHub' },
    { id: 'linkedin', url: 'https://www.linkedin.com/in/shrinath-rajput-91b437253/', label: 'LinkedIn' },
    { id: 'email', isEmail: true, url: 'mailto:rajputshrinath349@gmail.com', label: 'Email' },
    { id: 'whatsapp', url: 'https://wa.me/919699510445', label: 'WhatsApp' },
    { id: 'instagram', url: 'https://www.instagram.com/shrinath.rajput14', label: 'Instagram' },
    { id: 'youtube', url: 'https://www.youtube.com/@ShrinathRajput-A14k', label: 'YouTube' },
  ];

  // Control ONLY the original audio track of the active video
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

  // Immediate sequential transition when video ends: INTRO -> NEW -> INTRO -> NEW -> LOOP
  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % videos.length);
  };

  // Automatic transition and playback
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    video.src = videos[currentVideoIndex];
    video.muted = isMuted;
    video.load();
    const playPromise = video.play();
    if (playPromise !== undefined) {
      playPromise.catch((err) => {
        console.warn('Hero video auto-transition play error:', err);
      });
    }
  }, [currentVideoIndex]);

  // Initial autoplay on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.muted = isMuted;
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero initial video play error:', err);
        });
      }
    }
  }, []);

  // GSAP Entrance
  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

      tl.fromTo(
        leftColRef.current,
        { opacity: 0, x: -30 },
        { opacity: 1, x: 0, duration: 1.1 },
        0.15
      ).fromTo(
        rightColRef.current,
        { opacity: 0, scale: 0.96 },
        { opacity: 1, scale: 1, duration: 1.2 },
        0.3
      );
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={heroRef}
      id="hero"
      style={{
        position: 'relative',
        width: '100%',
        minHeight: 'calc(100vh - 80px)',
        display: 'flex',
        alignItems: 'center',
        paddingTop: 'clamp(4.8rem, 8.5vh, 6.2rem)',
        paddingBottom: '1.5rem',
        paddingLeft: '32px',
        paddingRight: '20px',
        overflow: 'hidden',
        backgroundColor: '#05070a',
        boxSizing: 'border-box',
      }}
    >
      {/* 1. Background Cinematic 3D Undulating Wave Grid Terrain across the bottom */}
      <WaveGridCanvas opacity={0.88} style={{ height: '62%' }} />

      {/* 2. Background Glowing Wireframe Holographic Globe in Upper Right */}
      <div
        style={{
          position: 'absolute',
          top: '-12%',
          right: '-6%',
          width: 'clamp(620px, 62vw, 1020px)',
          height: 'clamp(620px, 62vw, 1020px)',
          zIndex: 1,
          pointerEvents: 'none',
          opacity: 0.95,
        }}
      >
        <HolographicGlobe size={920} showRings={true} speed={0.0028} />
      </div>

      {/* 3. Holographic AI Neural Brain & Telemetry in Center-Right Transition Zone */}
      <AiNeuralBackdrop style={{ top: '6%', left: '38%', width: '560px', height: '520px' }} />

      {/* 4. Background Subtle Radial Lighting (Ambient green and cyan depth) */}
      <div
        style={{
          position: 'absolute',
          top: '8%',
          right: '4%',
          width: 'clamp(520px, 56vw, 960px)',
          height: 'clamp(520px, 56vw, 960px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.18) 0%, rgba(34, 197, 94, 0.11) 40%, transparent 70%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      <div
        style={{
          position: 'absolute',
          bottom: '8%',
          left: '4%',
          width: 'clamp(400px, 45vw, 750px)',
          height: 'clamp(400px, 45vw, 750px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.06) 0%, transparent 65%)',
          filter: 'blur(85px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main Two-Column Hero Container: Tight Zero-Gap Desktop Grid */}
      <div
        className="hero-main-container"
        style={{
          width: '100%',
          position: 'relative',
          zIndex: 5,
          display: 'grid',
          gridTemplateColumns: '46% 54%',
          alignItems: 'center',
          gap: 0,
        }}
      >
        {/* ===================================================
            LEFT COLUMN (46%): Typography, Thesis, Actions, Socials
            =================================================== */}
        <div
          ref={leftColRef}
          className="left-content"
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '1.25rem',
            zIndex: 6,
            position: 'relative',
            width: '100%',
            alignSelf: 'center',
            paddingRight: '12px',
          }}
        >
          {/* Intense Glowing Backlight Aura behind SHRINATH RAJPUT */}
          <div
            style={{
              position: 'absolute',
              top: '10%',
              left: '-10%',
              width: '135%',
              height: '85%',
              background: 'radial-gradient(ellipse at 35% 45%, rgba(34, 197, 94, 0.42) 0%, rgba(200, 255, 0, 0.22) 35%, transparent 70%)',
              filter: 'blur(55px)',
              pointerEvents: 'none',
              zIndex: 0,
            }}
          />

          {/* Status Badge: • AI / ML ENGINEER & FULL STACK DEVELOPER */}
          <div style={{ position: 'relative', zIndex: 2 }}>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(10, 15, 22, 0.65) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(200, 255, 0, 0.50)',
                boxShadow: '0 0 20px rgba(200, 255, 0, 0.14), inset 0 1px 0 rgba(255, 255, 255, 0.22)',
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
                  color: '#ffffff',
                  letterSpacing: '0.12em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                AI / ML ENGINEER & FULL STACK DEVELOPER
              </span>
            </div>
          </div>

          {/* Monumental Editorial Display Typography: SHRINATH / RAJPUT */}
          <div style={{ userSelect: 'none', margin: '0.2rem 0 0.4rem', position: 'relative', zIndex: 2 }}>
            <h1
              ref={title1Ref}
              style={{
                fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                fontSize: 'clamp(3.8rem, 6.4vw, 7.2rem)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: 0,
                color: '#ffffff',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.6), 0 0 50px rgba(200, 255, 0, 0.28)',
              }}
            >
              SHRINATH
            </h1>
            <h1
              ref={title2Ref}
              style={{
                fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                fontSize: 'clamp(3.8rem, 6.4vw, 7.2rem)',
                fontWeight: 900,
                lineHeight: 0.88,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: 0,
                color: 'transparent',
                WebkitTextStroke: '2.5px #ffffff',
                filter: 'drop-shadow(0 0 18px rgba(200, 255, 0, 0.38))',
              }}
            >
              RAJPUT
            </h1>
          </div>

          {/* Description */}
          <p
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(0.95rem, 1.25vw, 1.08rem)',
              lineHeight: 1.65,
              color: '#cbd5e1',
              maxWidth: '560px',
              margin: '0.2rem 0 0.65rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            Architecting intelligent neural pipelines, autonomous agent systems, and edge computer vision software engineered for production-grade scale.
          </p>

          {/* Buttons: Horizontally aligned on desktop */}
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', alignItems: 'center', position: 'relative', zIndex: 2 }}>
            <Link
              to="/work"
              className="glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.88rem 1.95rem',
                borderRadius: '9999px',
                backgroundColor: 'var(--accent-lime)',
                color: '#000000',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                textDecoration: 'none',
                boxShadow: '0 0 28px rgba(200, 255, 0, 0.45)',
                border: '1px solid rgba(200, 255, 0, 0.8)',
                transition: 'all 0.25s ease',
              }}
            >
              VIEW MY WORK <ArrowUpRight size={17} />
            </Link>

            <Link
              to="/contact"
              className="glass-pill glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '8px',
                padding: '0.88rem 1.85rem',
                borderRadius: '9999px',
                background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.22)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.84rem',
                fontWeight: 600,
                letterSpacing: '0.06em',
                textDecoration: 'none',
                boxShadow: '0 8px 30px rgba(0, 0, 0, 0.35)',
                transition: 'all 0.25s ease',
              }}
            >
              GET IN TOUCH
            </Link>
          </div>

          {/* Circular Glass Social Buttons (GitHub, LinkedIn, Email, WhatsApp, Instagram, YouTube) */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginTop: '0.65rem',
              position: 'relative',
              zIndex: 2,
            }}
          >
            {socialIcons.map((item) => (
              <a
                key={item.id}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="hero-social-btn"
                aria-label={item.label}
                style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  color: '#cbd5e1',
                  backdropFilter: 'blur(12px)',
                  transition: 'all 0.25s ease',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(200, 255, 0, 0.15)';
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.55)';
                  e.currentTarget.style.color = '#c8ff00';
                  e.currentTarget.style.boxShadow = '0 0 16px rgba(200, 255, 0, 0.3)';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.color = '#cbd5e1';
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {item.isEmail ? <Mail size={17} /> : <SocialIcon id={item.id} size={17} />}
              </a>
            ))}
          </div>
        </div>

        {/* ===================================================
            RIGHT COLUMN (54%): Seamless Holographic Video Immersion & Stats
            =================================================== */}
        <div
          ref={rightColRef}
          className="hero-portrait-stage video-area"
          style={{
            position: 'relative',
            width: '100%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'flex-start',
            justifyContent: 'center',
            alignSelf: 'center',
            zIndex: 6,
            transform: 'translateX(-32px)',
          }}
        >
          {/* Seamless Holographic Video Stage (Borderless & Embedded into Cyber Environment) */}
          <div
            className="portrait-frame"
            style={{
              position: 'relative',
              width: '100%',
              maxWidth: '880px',
              height: 'clamp(540px, 75vh, 740px)',
              borderRadius: '28px',
              overflow: 'hidden',
              background: 'transparent',
              border: 'none',
              boxShadow: 'none',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              zIndex: 3,
              WebkitMaskImage: 'radial-gradient(ellipse 96% 94% at 50% 50%, black 82%, transparent 100%)',
              maskImage: 'radial-gradient(ellipse 96% 94% at 50% 50%, black 82%, transparent 100%)',
            }}
          >
            {/* The Master Continuous Video Sequence Player: INTRO -> NEW -> INTRO -> NEW -> LOOP */}
            <video
              ref={videoRef}
              src={videos[currentVideoIndex]}
              autoPlay
              muted={isMuted}
              loop={false}
              playsInline
              onEnded={handleVideoEnded}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                objectPosition: 'center 20%',
                display: 'block',
              }}
            />

            {/* Subtle Edge Vignette */}
            <div
              style={{
                position: 'absolute',
                inset: 0,
                boxShadow: 'inset 0 0 50px rgba(5, 7, 10, 0.85)',
                pointerEvents: 'none',
                zIndex: 4,
              }}
            />
          </div>

          {/* Floating Top-Right Live Controls (LIVE AI + SOUND OFF Side-by-Side matching Reference) */}
          <div
            style={{
              position: 'absolute',
              top: '18px',
              right: '24px',
              zIndex: 12,
              display: 'flex',
              gap: '10px',
              alignItems: 'center',
            }}
          >
            {/* LIVE AI Pill */}
            <div
              className="glass-pill glass-reflection"
              style={{
                padding: '0.42rem 0.95rem',
                borderRadius: '9999px',
                backgroundColor: 'rgba(8, 14, 22, 0.72)',
                border: '1px solid rgba(200, 255, 0, 0.45)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.08em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 0 15px rgba(200, 255, 0, 0.18)',
                userSelect: 'none',
              }}
            >
              <span
                style={{
                  width: '6px',
                  height: '6px',
                  borderRadius: '50%',
                  backgroundColor: 'var(--accent-lime)',
                  boxShadow: '0 0 8px var(--accent-lime)',
                  display: 'inline-block',
                  animation: 'pulseGlow 2s ease-in-out infinite',
                }}
              />
              LIVE AI
            </div>

            {/* Native Sound Toggle Pill */}
            <button
              type="button"
              onClick={toggleSound}
              className="glass-pill glass-reflection"
              style={{
                padding: '0.42rem 0.95rem',
                borderRadius: '9999px',
                backgroundColor: isMuted ? 'rgba(8, 14, 22, 0.72)' : 'rgba(200, 255, 0, 0.22)',
                border: isMuted ? '1px solid rgba(255, 255, 255, 0.22)' : '1px solid rgba(200, 255, 0, 0.65)',
                color: '#ffffff',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.06em',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '6px',
                cursor: 'pointer',
                backdropFilter: 'blur(16px)',
                boxShadow: '0 0 15px rgba(200, 255, 0, 0.15)',
                transition: 'all 0.25s ease',
              }}
              title={isMuted ? 'Turn Sound On' : 'Mute'}
              aria-label={isMuted ? 'Turn sound on' : 'Mute sound'}
            >
              {isMuted ? <VolumeX size={14} color="#cbd5e1" /> : <Volume2 size={14} color="var(--accent-lime)" />}
              <span style={{ color: '#ffffff' }}>
                {isMuted ? 'SOUND OFF' : 'SOUND ON'}
              </span>
            </button>
          </div>

          {/* Wide Integrated Glass Statistics Bar: Floating across lower edge of video (13+ PROJECTS | 5+ CERTIFICATIONS | 2+ INTERNSHIPS) */}
          <div
            className="hud-panel-bottom glass-reflection"
            style={{
              position: 'absolute',
              bottom: '16px',
              left: '50%',
              transform: 'translateX(-50%)',
              width: '92%',
              maxWidth: '720px',
              zIndex: 14,
              borderRadius: '24px',
              background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.10) 0%, rgba(8, 14, 22, 0.88) 100%)',
              backdropFilter: 'blur(28px)',
              WebkitBackdropFilter: 'blur(28px)',
              border: '1.5px solid rgba(200, 255, 0, 0.45)',
              boxShadow: '0 20px 50px rgba(0, 0, 0, 0.75), 0 0 35px rgba(200, 255, 0, 0.16), inset 0 1px 0 rgba(255, 255, 255, 0.25)',
              padding: '0.95rem 1.6rem',
              display: 'grid',
              gridTemplateColumns: '1fr 1px 1fr 1px 1fr',
              alignItems: 'center',
            }}
          >
            {/* Stat 1: 13+ PROJECTS */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                  fontSize: 'clamp(1.4rem, 1.8vw, 1.75rem)',
                  fontWeight: 900,
                  color: 'var(--accent-lime)',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                }}
              >
                13+
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#ffffff',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginTop: '5px',
                }}
              >
                PROJECTS
              </span>
            </div>

            {/* Divider */}
            <span style={{ width: '1px', height: '36px', backgroundColor: 'rgba(255, 255, 255, 0.18)', justifySelf: 'center' }} />

            {/* Stat 2: 5+ CERTIFICATIONS */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                  fontSize: 'clamp(1.4rem, 1.8vw, 1.75rem)',
                  fontWeight: 900,
                  color: 'var(--accent-lime)',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                }}
              >
                5+
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#ffffff',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginTop: '5px',
                }}
              >
                CERTIFICATIONS
              </span>
            </div>

            {/* Divider */}
            <span style={{ width: '1px', height: '36px', backgroundColor: 'rgba(255, 255, 255, 0.18)', justifySelf: 'center' }} />

            {/* Stat 3: 2+ INTERNSHIPS */}
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center' }}>
              <span
                style={{
                  fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                  fontSize: 'clamp(1.4rem, 1.8vw, 1.75rem)',
                  fontWeight: 900,
                  color: 'var(--accent-lime)',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                }}
              >
                2+
              </span>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.72rem',
                  color: '#ffffff',
                  fontWeight: 600,
                  letterSpacing: '0.12em',
                  textTransform: 'uppercase',
                  marginTop: '5px',
                }}
              >
                INTERNSHIPS
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
