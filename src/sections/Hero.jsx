import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { Volume2, VolumeX } from 'lucide-react';
import newVideo from '../new.mp4';
import { HeroServiceStrip } from './HeroServiceStrip';

export const Hero = ({ isReady }) => {
  const heroRef = useRef(null);
  const nameBlockRef = useRef(null);
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  // Reliable Autoplay inline on mount
  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.defaultMuted = true;
      video.muted = true;
      video.setAttribute('playsinline', '');
      video.setAttribute('webkit-playsinline', 'true');
      const playPromise = video.play();
      if (playPromise !== undefined) {
        playPromise.catch((err) => {
          console.warn('Hero video auto-play handled:', err);
        });
      }
    }
  }, []);

  // Sound Toggle Control for Audio Track
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

  // Entrance GSAP Animation for Monumental Name
  useEffect(() => {
    if (!isReady) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        nameBlockRef.current,
        { opacity: 0, x: -35 },
        { opacity: 1, x: 0, duration: 1.2, ease: 'power4.out', delay: 0.15 }
      );
    }, heroRef);

    return () => ctx.revert();
  }, [isReady]);

  return (
    <section
      ref={heroRef}
      id="hero"
      className="hero-cinematic-stage"
      style={{
        position: 'relative',
        width: '100%',
        height: 'calc(100vh - 82px)',
        minHeight: 'clamp(620px, 86vh, 940px)',
        maxHeight: '1040px',
        overflow: 'hidden',
        backgroundColor: '#05070a',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      {/* 1. Full-Width Background Video (Uncropped & Centered, Starts Safely Below Navbar) */}
      <div
        className="hero-video-stage-wrapper"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          zIndex: 1,
          overflow: 'hidden',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          pointerEvents: 'none',
        }}
      >
        <video
          ref={videoRef}
          src={newVideo}
          autoPlay
          muted={isMuted}
          loop
          playsInline
          webkit-playsinline="true"
          preload="auto"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'contain',
            objectPosition: 'center center',
            display: 'block',
          }}
        />

        {/* Soft edge fade for ultra-wide monitors */}
        <div
          style={{
            position: 'absolute',
            inset: 0,
            background:
              'radial-gradient(ellipse 96% 88% at 50% 40%, transparent 60%, rgba(5, 7, 10, 0.45) 85%, #05070a 100%)',
            pointerEvents: 'none',
            zIndex: 2,
          }}
        />
      </div>


      {/* 3. Ambient Cyan Backlight on the Left behind typography */}
      <div
        style={{
          position: 'absolute',
          top: '30%',
          left: '2%',
          width: 'clamp(360px, 32vw, 600px)',
          height: 'clamp(360px, 32vw, 600px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(0, 240, 255, 0.12) 0%, rgba(200, 255, 0, 0.04) 40%, transparent 70%)',
          filter: 'blur(75px)',
          pointerEvents: 'none',
          zIndex: 2,
        }}
      />

      {/* 4. Functional Sound Control Toggle (Floating Glass Pill in Top Right) */}
      <div
        className="hero-audio-toggle"
        style={{
          position: 'absolute',
          top: '18px',
          right: 'clamp(20px, 3.5vw, 48px)',
          zIndex: 30,
        }}
      >
        <button
          type="button"
          onClick={toggleSound}
          className="glass-pill glass-reflection"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            padding: '0.40rem 0.90rem',
            borderRadius: '9999px',
            backgroundColor: isMuted ? 'rgba(8, 14, 22, 0.70)' : 'rgba(200, 255, 0, 0.20)',
            border: isMuted ? '1px solid rgba(255, 255, 255, 0.20)' : '1px solid rgba(200, 255, 0, 0.60)',
            color: '#ffffff',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.72rem',
            fontWeight: 700,
            letterSpacing: '0.06em',
            cursor: 'pointer',
            backdropFilter: 'blur(16px)',
            WebkitBackdropFilter: 'blur(16px)',
            boxShadow: '0 4px 15px rgba(0, 0, 0, 0.35)',
            transition: 'all 0.25s ease',
          }}
          title={isMuted ? 'Turn Sound On' : 'Mute'}
          aria-label={isMuted ? 'Turn sound on' : 'Mute sound'}
        >
          {isMuted ? <VolumeX size={14} color="#cbd5e1" /> : <Volume2 size={14} color="var(--accent-lime)" />}
          <span>{isMuted ? 'SOUND OFF' : 'SOUND ON'}</span>
        </button>
      </div>

      {/* 5. MONUMENTAL NAME OVERLAY — LEFT SIDE OVER COMPOSITION */}
      <div
        className="hero-name-overlay-container"
        style={{
          position: 'absolute',
          top: '44%',
          transform: 'translateY(-50%)',
          left: 'clamp(24px, 4.5vw, 72px)',
          zIndex: 10,
          pointerEvents: 'none',
        }}
      >
        <div
          ref={nameBlockRef}
          className="hero-name-content"
          style={{
            display: 'inline-flex',
            alignItems: 'stretch',
            gap: 'clamp(14px, 1.8vw, 24px)',
          }}
        >
          {/* Narrow Cyan-to-Neon-Lime Vertical Accent Line */}
          <div
            className="hero-name-accent-line"
            style={{
              width: '4.5px',
              borderRadius: '2.5px',
              background: 'linear-gradient(180deg, #00f0ff 0%, #c8ff00 100%)',
              boxShadow: '0 0 18px rgba(0, 240, 255, 0.75), 0 0 10px rgba(200, 255, 0, 0.5)',
              flexShrink: 0,
            }}
          />

          {/* Monumental Typography: SHRINATH (solid) / RAJPUT (outline) */}
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              userSelect: 'none',
            }}
          >
            <h1
              className="hero-title-line hero-title-solid"
              style={{
                fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                fontSize: 'clamp(2.8rem, 5.8vw, 6.2rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: 0,
                color: '#ffffff',
                textShadow: '0 4px 30px rgba(0, 0, 0, 0.85), 0 0 45px rgba(0, 240, 255, 0.32)',
                wordBreak: 'break-word',
              }}
            >
              SHRINATH
            </h1>
            <h1
              className="hero-title-line hero-title-outline"
              style={{
                fontFamily: "'Space Grotesk', 'Syne', sans-serif",
                fontSize: 'clamp(2.8rem, 5.8vw, 6.2rem)',
                fontWeight: 900,
                lineHeight: 0.9,
                letterSpacing: '-0.02em',
                textTransform: 'uppercase',
                margin: 0,
                color: 'transparent',
                WebkitTextStroke: '2.2px #ffffff',
                filter: 'drop-shadow(0 0 18px rgba(0, 240, 255, 0.35)) drop-shadow(0 4px 25px rgba(0, 0, 0, 0.85))',
                wordBreak: 'break-word',
              }}
            >
              RAJPUT
            </h1>
          </div>
        </div>
      </div>

      {/* 6. WIDE GLASS SERVICE STRIP ALONG THE BOTTOM EDGE OF THE HERO */}
      <div
        className="hero-service-strip-floating"
        style={{
          position: 'absolute',
          bottom: 'clamp(14px, 2.2vh, 24px)',
          left: '50%',
          transform: 'translateX(-50%)',
          width: 'min(96vw, 1780px)',
          zIndex: 20,
          boxSizing: 'border-box',
        }}
      >
        <HeroServiceStrip />
      </div>
    </section>
  );
};
