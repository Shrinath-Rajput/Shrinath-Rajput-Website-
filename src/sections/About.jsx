import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import {
  Brain,
  Cpu,
  Sparkles,
  Bot,
  Eye,
  Code2,
  GraduationCap,
  Award,
  BookOpen,
  MapPin,
  Compass,
  Layers,
  ArrowUpRight,
  Terminal,
  Activity,
  CheckCircle2,
  FolderGit2,
  PlayCircle,
  Database,
  Radio,
} from 'lucide-react';
import { aboutInfo } from '../data/aboutInfo';
import shrinathProfileImg from '../shrinath_thumbsup.jpg';

export const About = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const portraitCardRef = useRef(null);
  const introTextRef = useRef(null);
  const eduGridRef = useRef(null);
  const coursesGridRef = useRef(null);
  const focusGridRef = useRef(null);
  const methodsGridRef = useRef(null);
  const techGridRef = useRef(null);

  // 6 Core Focus Disciplines
  const focusCards = [
    {
      num: '01',
      title: 'AI / ML',
      icon: Brain,
      desc: 'Machine Learning and applied artificial intelligence systems.',
      tags: ['Statistical Modeling', 'Predictive Engines', 'Supervised / Unsupervised'],
    },
    {
      num: '02',
      title: 'DEEP LEARNING',
      icon: Cpu,
      desc: 'Neural networks and deep learning solutions.',
      tags: ['PyTorch & TensorFlow', 'Loss Optimization', 'Custom Architectures'],
    },
    {
      num: '03',
      title: 'GENERATIVE AI',
      icon: Sparkles,
      desc: 'LLM, RAG and intelligent generation workflows.',
      tags: ['Enterprise RAG', 'Vector Search', 'Context Synthesis'],
    },
    {
      num: '04',
      title: 'AGENTIC AI',
      icon: Bot,
      desc: 'Autonomous and tool-using AI systems.',
      tags: ['Cyclical Reasoning', 'Tool Invocation', 'Dynamic Workflows'],
    },
    {
      num: '05',
      title: 'COMPUTER VISION',
      icon: Eye,
      desc: 'Image understanding, detection and vision-based systems.',
      tags: ['YOLO Real-Time', 'OpenCV Telemetry', 'Edge Inference'],
    },
    {
      num: '06',
      title: 'FULL STACK',
      icon: Code2,
      desc: 'Production-ready AI-powered web applications and APIs.',
      tags: ['FastAPI & Node.js', 'React Ecosystem', 'Microservices'],
    },
  ];

  // 3 "How I Think" Methodology Panels
  const thinkingMethods = [
    {
      num: '01',
      step: 'UNDERSTAND',
      summary: 'Understand the problem, data and real-world constraints.',
      detail:
        'Rigorous problem framing precedes any modeling. Deep-diving into feature distributions, edge-case failure modes, latency ceilings, and real-world deployment constraints before writing a single line of training code.',
      icon: Compass,
    },
    {
      num: '02',
      step: 'ENGINEER',
      summary: 'Design reliable AI models and scalable software architecture.',
      detail:
        'Selecting the optimal neural topology or heuristic model, structuring reproducible training pipelines, and embedding models within asynchronous, clean API microservices engineered for production scale.',
      icon: Layers,
    },
    {
      num: '03',
      step: 'DELIVER',
      summary: 'Turn the solution into a usable, maintainable product.',
      detail:
        'Delivering intuitive interactive client interfaces, instrumenting continuous inference telemetry, and ensuring zero-downtime maintainability across real-world operational workflows.',
      icon: Activity,
    },
  ];

  // Verified Technology Arsenal
  const techStack = [
    'Python',
    'PyTorch',
    'TensorFlow',
    'Scikit-learn',
    'OpenCV',
    'YOLO',
    'FastAPI',
    'React',
    'Node.js',
    'MongoDB',
    'MySQL',
    'Streamlit',
    'Docker',
    'Pandas',
    'NumPy',
    'Git',
    'Express.js',
    'Vite',
  ];

  // Icon selector for courses
  const getCourseIcon = (type) => {
    switch (type) {
      case 'python':
        return Code2;
      case 'ml':
        return Brain;
      case 'mlflow':
        return Activity;
      case 'iot':
        return Radio;
      case 'database':
        return Database;
      case 'udemy':
        return PlayCircle;
      default:
        return FolderGit2;
    }
  };

  // Education Icons
  const getEduIcon = (id) => {
    switch (id) {
      case 'btech':
        return GraduationCap;
      case 'diploma':
        return Award;
      default:
        return BookOpen;
    }
  };

  // GSAP Smooth Scroll Entrance Animations
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return;

    const ctx = gsap.context(() => {
      // Header reveal
      if (headingRef.current) {
        gsap.fromTo(
          headingRef.current,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: headingRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Portrait Card reveal
      if (portraitCardRef.current) {
        gsap.fromTo(
          portraitCardRef.current,
          { opacity: 0, scale: 0.95, y: 40 },
          {
            opacity: 1,
            scale: 1,
            y: 0,
            duration: 1.2,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: portraitCardRef.current,
              start: 'top 82%',
            },
          }
        );
      }

      // Intro text reveal
      if (introTextRef.current) {
        gsap.fromTo(
          introTextRef.current,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 1.1,
            ease: 'power3.out',
            scrollTrigger: {
              trigger: introTextRef.current,
              start: 'top 82%',
            },
          }
        );
      }

      // Education cards stagger
      if (eduGridRef.current) {
        gsap.fromTo(
          eduGridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.85,
            stagger: 0.14,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: eduGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Courses stagger
      if (coursesGridRef.current) {
        gsap.fromTo(
          coursesGridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.75,
            stagger: 0.08,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: coursesGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Focus cards stagger
      if (focusGridRef.current) {
        gsap.fromTo(
          focusGridRef.current.children,
          { opacity: 0, y: 35 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: focusGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Methods stagger
      if (methodsGridRef.current) {
        gsap.fromTo(
          methodsGridRef.current.children,
          { opacity: 0, y: 40 },
          {
            opacity: 1,
            y: 0,
            duration: 0.9,
            stagger: 0.16,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: methodsGridRef.current,
              start: 'top 85%',
            },
          }
        );
      }

      // Tech grid stagger
      if (techGridRef.current) {
        gsap.fromTo(
          techGridRef.current.children,
          { opacity: 0, scale: 0.9 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.5,
            stagger: 0.03,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: techGridRef.current,
              start: 'top 90%',
            },
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      style={{
        position: 'relative',
        backgroundColor: '#06070a',
        paddingTop: 'clamp(5.5rem, 11vh, 8.5rem)',
        paddingBottom: 'clamp(6rem, 12vh, 9.5rem)',
        overflow: 'hidden',
        width: '100%',
      }}
    >
      {/* Subtle Background Cyber Grid Texture visible through frosted glass */}
      <div
        style={{
          position: 'absolute',
          inset: 0,
          backgroundImage:
            'radial-gradient(rgba(255, 255, 255, 0.08) 1.2px, transparent 1.2px)',
          backgroundSize: '36px 36px',
          opacity: 0.35,
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Layered Atmospheric Glow Elements (Positioned BEHIND the Glass Panels) */}
      {/* 1. Top-Right: Lime & Cyan Radiant Orb */}
      <div
        style={{
          position: 'absolute',
          top: '4%',
          right: '2%',
          width: 'clamp(460px, 50vw, 880px)',
          height: 'clamp(460px, 50vw, 880px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(200, 255, 0, 0.085) 0%, rgba(56, 189, 248, 0.04) 45%, transparent 72%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* 2. Top-Left / Behind Portrait & Bio: Electric Azure & Indigo Aura */}
      <div
        style={{
          position: 'absolute',
          top: '18%',
          left: '-5%',
          width: 'clamp(440px, 48vw, 820px)',
          height: 'clamp(440px, 48vw, 820px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(56, 189, 248, 0.08) 0%, rgba(99, 102, 241, 0.055) 45%, transparent 75%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* 3. Mid-Section / Behind Education Cards: Emerald & Lime Glow */}
      <div
        style={{
          position: 'absolute',
          top: '45%',
          right: '15%',
          width: 'clamp(480px, 52vw, 900px)',
          height: 'clamp(380px, 40vw, 700px)',
          borderRadius: '50%',
          background:
            'radial-gradient(ellipse at center, rgba(200, 255, 0, 0.08) 0%, rgba(16, 185, 129, 0.045) 45%, transparent 70%)',
          filter: 'blur(115px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* 4. Lower-Section / Behind Courses: Violet & Cyan Atmospheric Light */}
      <div
        style={{
          position: 'absolute',
          bottom: '24%',
          left: '3%',
          width: 'clamp(460px, 48vw, 860px)',
          height: 'clamp(460px, 48vw, 860px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(99, 102, 241, 0.075) 0%, rgba(200, 255, 0, 0.04) 50%, transparent 75%)',
          filter: 'blur(120px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />
      {/* 5. Bottom Ambient Anchor: Electric Lime Accent Glow */}
      <div
        style={{
          position: 'absolute',
          bottom: '4%',
          right: '8%',
          width: 'clamp(420px, 44vw, 780px)',
          height: 'clamp(420px, 44vw, 780px)',
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(200, 255, 0, 0.065) 0%, rgba(56, 189, 248, 0.03) 48%, transparent 75%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 1,
        }}
      />

      {/* Main Full-Width About Container: Aligned with 94vw Grid */}
      <div className="about-container" style={{ position: 'relative', zIndex: 5 }}>
        {/* ========================================================
            1. ABOUT HERO SECTION
            ======================================================== */}
        <div ref={headingRef} style={{ marginBottom: 'clamp(3rem, 6vh, 4.8rem)' }}>
          {/* Top Small Capsule Label: "01 // ABOUT" */}
          <div style={{ marginBottom: '1.25rem' }}>
            <div
              className="glass-pill glass-reflection"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '9px',
                padding: '0.45rem 1.25rem',
                borderRadius: '9999px',
                background:
                  'linear-gradient(135deg, rgba(255, 255, 255, 0.09) 0%, rgba(255, 255, 255, 0.03) 50%, rgba(255, 255, 255, 0.015) 100%)',
                backdropFilter: 'blur(20px)',
                WebkitBackdropFilter: 'blur(20px)',
                border: '1px solid rgba(255, 255, 255, 0.18)',
                boxShadow:
                  '0 8px 30px rgba(0, 0, 0, 0.35), 0 0 20px rgba(200, 255, 0, 0.05), inset 0 1px 0 rgba(255, 255, 255, 0.16)',
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
                  fontSize: '0.76rem',
                  color: '#f8fafc',
                  letterSpacing: '0.14em',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                }}
              >
                01 / ABOUT
              </span>
            </div>
          </div>

          {/* Monumental Editorial Heading */}
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(3.2rem, 6.6vw, 7.8rem)',
              fontWeight: 800,
              lineHeight: 0.9,
              letterSpacing: '-0.03em',
              textTransform: 'uppercase',
              margin: '0 0 1.5rem',
              maxWidth: '1500px',
              background: 'linear-gradient(180deg, #ffffff 15%, #cbd5e1 60%, #94a3b8 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
            }}
          >
            BUILDING
            <br />
            INTELLIGENT,
            <br />
            PRACTICAL &
            <br />
            SCALABLE
            <br />
            SYSTEMS
          </h2>

          {/* Supporting Line */}
          <p
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: 'clamp(1rem, 1.35vw, 1.25rem)',
              lineHeight: 1.6,
              color: 'var(--text-muted)',
              maxWidth: '850px',
              margin: 0,
            }}
          >
            Artificial Intelligence Engineer focused on building intelligent, practical, and scalable software systems.
          </p>
        </div>

        {/* ========================================================
            2. MAIN ABOUT GRID: LEFT 45% (PORTRAIT) / RIGHT 55% (BIO)
            ======================================================== */}
        <div
          className="about-portrait-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.45fr) minmax(0, 0.55fr)',
            gap: 'clamp(2rem, 3.5vw, 4.5rem)',
            alignItems: 'stretch',
            marginBottom: 'clamp(4.5rem, 9vh, 6.5rem)',
          }}
        >
          {/* LEFT SIDE: Large Portrait Card */}
          <div
            ref={portraitCardRef}
            className="real-glass-card glass-reflection"
            style={{
              position: 'relative',
              borderRadius: '28px',
              padding: '1.25rem',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              boxSizing: 'border-box',
              minHeight: 'clamp(520px, 64vh, 720px)',
            }}
          >
            {/* Inner Image Stage */}
            <div
              style={{
                position: 'relative',
                borderRadius: '20px',
                overflow: 'hidden',
                flex: 1,
                minHeight: '380px',
                background: '#040507',
              }}
            >
              <img
                src={shrinathProfileImg}
                onError={(e) => {
                  e.target.src = '/assets/images/shrinath-master.jpg';
                }}
                alt="Shrinath Rajput Portrait"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  objectPosition: 'center 15%',
                  filter: 'contrast(1.04) brightness(0.97)',
                  display: 'block',
                }}
              />

              {/* Edge Gradient Blends for Cinematic Depth */}
              <div
                style={{
                  position: 'absolute',
                  inset: 0,
                  background:
                    'linear-gradient(to top, rgba(6, 7, 10, 0.90) 0%, rgba(6, 7, 10, 0.3) 22%, transparent 45%)',
                  pointerEvents: 'none',
                }}
              />

              {/* Top Glass Pill: Engineering Discipline */}
              <div
                style={{
                  position: 'absolute',
                  top: '1.15rem',
                  right: '1.15rem',
                  zIndex: 3,
                }}
              >
                <div
                  className="glass-pill"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '7px',
                    padding: '0.4rem 0.95rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    background: 'rgba(6, 7, 10, 0.65)',
                    backdropFilter: 'blur(16px)',
                    border: '1px solid rgba(255, 255, 255, 0.20)',
                  }}
                >
                  <Cpu size={13} color="var(--accent-lime)" />
                  AI / ML ENGINEER
                </div>
              </div>

              {/* Bottom Identity Overlay */}
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  right: 0,
                  padding: '1.25rem 1.4rem',
                  zIndex: 3,
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.4rem, 2.2vw, 1.85rem)',
                    fontWeight: 800,
                    color: '#ffffff',
                    letterSpacing: '-0.01em',
                    lineHeight: 1.1,
                  }}
                >
                  SHRINATH RAJPUT
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.12em',
                    marginTop: '4px',
                    fontWeight: 600,
                  }}
                >
                  SYSTEMS + INTELLIGENCE
                </div>
              </div>
            </div>

            {/* Bottom Technical Metadata Bar */}
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '0.75rem',
                paddingTop: '1rem',
                marginTop: '0.5rem',
                borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-muted)' }}>
                <MapPin size={13} color="var(--accent-lime)" />
                <span>PATTANKODOLI, KOLHAPUR // INDIA</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#ffffff' }}>
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
                <span style={{ color: 'var(--accent-lime)', fontWeight: 600 }}>AVAILABLE FOR INTERNSHIPS</span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Complete Professional Profile & Intro from Old About Page */}
          <div
            ref={introTextRef}
            style={{
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between',
              gap: '1.5rem',
            }}
          >
            {/* Introduction Card */}
            <div
              className="real-glass-card glass-reflection"
              style={{
                padding: 'clamp(1.5rem, 2.5vw, 2.4rem)',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.25rem',
              }}
            >
              {/* Top Technical Metadata Bar */}
              <div
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  gap: '12px',
                  flexWrap: 'wrap',
                  borderBottom: '1px solid rgba(255, 255, 255, 0.08)',
                  paddingBottom: '0.9rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.74rem',
                    letterSpacing: '0.14em',
                    color: 'var(--accent-lime)',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  <Terminal size={14} color="var(--accent-lime)" />
                  <span>01 / ABOUT / INTRODUCTION</span>
                </div>

                <div
                  className="glass-pill"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '6px',
                    padding: '0.3rem 0.85rem',
                    borderRadius: '9999px',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.68rem',
                    fontWeight: 600,
                    letterSpacing: '0.08em',
                    color: '#ffffff',
                    background: 'rgba(200, 255, 0, 0.08)',
                    border: '1px solid rgba(200, 255, 0, 0.35)',
                    boxShadow: '0 0 15px rgba(200, 255, 0, 0.08)',
                  }}
                >
                  <Cpu size={12} color="var(--accent-lime)" />
                  <span>AI / ML ENGINEER</span>
                </div>
              </div>

              {/* Monogram Name & Subtitle */}
              <div>
                <h3
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(2rem, 3.2vw, 2.75rem)',
                    fontWeight: 800,
                    letterSpacing: '-0.02em',
                    color: '#ffffff',
                    margin: '0 0 0.35rem',
                    lineHeight: 1.1,
                  }}
                >
                  Shrinath Rajput
                </h3>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    color: 'var(--accent-lime)',
                    letterSpacing: '0.10em',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                  }}
                >
                  ASPIRING ARTIFICIAL INTELLIGENCE ENGINEER & MACHINE LEARNING ENTHUSIAST
                </div>
              </div>

              {/* Exact paragraph 1 from old About HTML */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1.1rem, 1.6vw, 1.35rem)',
                  lineHeight: 1.65,
                  color: '#ffffff',
                  fontWeight: 500,
                  margin: 0,
                }}
              >
                Hi, I'm <strong style={{ color: 'var(--accent-lime)' }}>Shrinath Rajput</strong> — an aspiring Artificial Intelligence Engineer and Machine Learning enthusiast who loves turning ideas into intelligent systems.
              </p>

              {/* Exact paragraph 2 from old About HTML */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  lineHeight: 1.75,
                  color: '#cbd5e1',
                  margin: 0,
                }}
              >
                I'm deeply fascinated by how data and algorithms can shape the future of healthcare, automation, and creativity in technology.
              </p>

              {/* Exact paragraph 3 from old About HTML */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.95rem, 1.15vw, 1.05rem)',
                  lineHeight: 1.75,
                  color: '#cbd5e1',
                  margin: 0,
                }}
              >
                Beyond code, I enjoy exploring design, experimenting with motion and interaction, and finding ways to blend artistic creativity with technical precision. My goal is to build solutions that not only perform — but also inspire.
              </p>

              {/* Exact paragraph 4 & 5 from old About HTML */}
              <p
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.92rem, 1.15vw, 1.02rem)',
                  lineHeight: 1.75,
                  color: 'var(--text-muted)',
                  margin: 0,
                  paddingTop: '0.5rem',
                  borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                }}
              >
                4th-year B.Tech AI Engineering student with hands-on experience in ML & DL projects. Proficient in Python, Scikit-learn, PyTorch, TensorFlow, and data preprocessing. Seeking internship opportunities to apply skills and contribute to impactful AI solutions.
              </p>
            </div>

            {/* Quick Profile Summary Ribbon */}
            <div
              className="real-glass-card"
              style={{
                padding: '1.25rem 1.5rem',
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
                gap: '1rem',
                alignItems: 'center',
              }}
            >
              {aboutInfo.personalIntro.highlights.map((h, i) => (
                <div key={i}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.68rem',
                      color: 'var(--text-muted)',
                      textTransform: 'uppercase',
                      letterSpacing: '0.08em',
                    }}
                  >
                    {h.label}
                  </div>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.82rem',
                      color: i === 0 || i === 2 ? 'var(--accent-lime)' : '#ffffff',
                      fontWeight: 600,
                      marginTop: '3px',
                    }}
                  >
                    {h.value}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ========================================================
            3. EDUCATION SECTION (ALL 3 DEGREES / CARDS FROM OLD HTML)
            ======================================================== */}
        <div style={{ marginBottom: 'clamp(4.5rem, 9vh, 6.5rem)' }}>
          {/* Section Sub-Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.5rem',
              }}
            >
              <span>02 / EDUCATION</span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.4vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              EDUCATION
            </h3>
          </div>

          {/* 3 Real Glass Education Cards */}
          <div ref={eduGridRef} className="about-education-grid">
            {aboutInfo.education.map((edu) => {
              const Icon = getEduIcon(edu.id);
              return (
                <div
                  key={edu.id}
                  className="real-glass-card glass-reflection"
                  style={{
                    padding: 'clamp(1.5rem, 2.2vw, 2.2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '280px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    {/* Header: Icon & Badge */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        marginBottom: '1.25rem',
                        gap: '0.5rem',
                      }}
                    >
                      <div
                        style={{
                          width: '46px',
                          height: '46px',
                          borderRadius: '12px',
                          background: 'rgba(200, 255, 0, 0.08)',
                          border: '1px solid rgba(200, 255, 0, 0.25)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-lime)',
                          flexShrink: 0,
                        }}
                      >
                        <Icon size={22} />
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.68rem',
                          color: 'var(--accent-lime)',
                          letterSpacing: '0.06em',
                          background: 'rgba(200, 255, 0, 0.08)',
                          padding: '0.25rem 0.65rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(200, 255, 0, 0.22)',
                          fontWeight: 600,
                        }}
                      >
                        {edu.badge}
                      </span>
                    </div>

                    {/* Degree Title */}
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.2rem',
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        color: '#ffffff',
                        margin: '0 0 0.5rem',
                        lineHeight: 1.3,
                      }}
                    >
                      {edu.degree}
                    </h4>

                    {/* Institution & Location */}
                    <div
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        color: '#e2e8f0',
                        fontWeight: 500,
                        marginBottom: '0.5rem',
                      }}
                    >
                      {edu.institution} — {edu.location}
                    </div>

                    {/* Score / Status Metric */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.78rem',
                        color: 'var(--accent-lime)',
                        fontWeight: 600,
                        marginBottom: '0.75rem',
                      }}
                    >
                      {edu.board ? `${edu.board} | ${edu.metric}` : `${edu.status} | ${edu.metric}`}
                    </div>
                  </div>

                  {/* Highlights & Period */}
                  <div
                    style={{
                      paddingTop: '0.85rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                      display: 'flex',
                      justifyContent: 'space-between',
                      alignItems: 'center',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.74rem',
                    }}
                  >
                    <span style={{ color: 'var(--text-muted)' }}>{edu.period}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: 'var(--accent-lime)' }}>
                      <CheckCircle2 size={13} />
                      <span>VERIFIED</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            4. COURSES & LEARNING REPOSITORIES (ALL 8 CARDS)
            ======================================================== */}
        <div style={{ marginBottom: 'clamp(4.5rem, 9vh, 6.5rem)' }}>
          {/* Section Sub-Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.5rem',
              }}
            >
              <span>03 / COURSES & LEARNING</span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.4vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              COURSES & LEARNING
            </h3>
          </div>

          {/* 8 Real Glass Course Cards */}
          <div ref={coursesGridRef} className="about-courses-grid">
            {aboutInfo.courses.map((course) => {
              const Icon = getCourseIcon(course.iconType);
              const isUdemy = course.type.includes('UDEMY');
              return (
                <div
                  key={course.id}
                  className="real-glass-card glass-reflection"
                  style={{
                    padding: 'clamp(1.35rem, 1.8vw, 1.85rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '270px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    {/* Header: Icon & Platform Badge */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1rem',
                      }}
                    >
                      <div
                        style={{
                          width: '38px',
                          height: '38px',
                          borderRadius: '10px',
                          background: isUdemy ? 'rgba(245, 158, 11, 0.12)' : 'rgba(255, 255, 255, 0.05)',
                          border: isUdemy ? '1px solid rgba(245, 158, 11, 0.35)' : '1px solid rgba(255, 255, 255, 0.14)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: isUdemy ? '#f59e0b' : 'var(--accent-lime)',
                        }}
                      >
                        <Icon size={18} />
                      </div>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.64rem',
                          color: isUdemy ? '#f59e0b' : '#cbd5e1',
                          letterSpacing: '0.06em',
                          background: 'rgba(255, 255, 255, 0.03)',
                          padding: '0.2rem 0.55rem',
                          borderRadius: '4px',
                          border: '1px solid rgba(255, 255, 255, 0.10)',
                          fontWeight: 500,
                        }}
                      >
                        {course.type}
                      </span>
                    </div>

                    {/* Course / Repo Title */}
                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.08rem',
                        fontWeight: 700,
                        letterSpacing: '-0.01em',
                        color: '#ffffff',
                        margin: '0 0 0.35rem',
                        lineHeight: 1.35,
                      }}
                    >
                      {course.title}
                    </h4>

                    {/* Subtitle from old HTML */}
                    <div
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.72rem',
                        color: 'var(--accent-lime)',
                        marginBottom: '0.75rem',
                        letterSpacing: '0.02em',
                      }}
                    >
                      {course.subtitle}
                    </div>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.84rem',
                        lineHeight: 1.6,
                        color: 'var(--text-muted)',
                        margin: '0 0 1.25rem',
                      }}
                    >
                      {course.desc}
                    </p>
                  </div>

                  {/* Action Link: View Repository / View Course with Premium Glass Button */}
                  <a
                    href={course.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="premium-glass-btn"
                    style={{
                      width: '100%',
                      borderColor: isUdemy ? 'rgba(245, 158, 11, 0.40)' : 'rgba(255, 255, 255, 0.22)',
                      background: isUdemy
                        ? 'linear-gradient(135deg, rgba(245, 158, 11, 0.14) 0%, rgba(255, 255, 255, 0.03) 100%)'
                        : 'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.02) 100%)',
                    }}
                  >
                    <span>{isUdemy ? 'VIEW UDEMY COURSE' : 'VIEW REPOSITORY'}</span>
                    <ArrowUpRight size={13} color={isUdemy ? '#f59e0b' : 'var(--accent-lime)'} />
                  </a>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            5. CORE FOCUS CARDS (GRID OF 6 GLASS CARDS)
            ======================================================== */}
        <div style={{ marginBottom: 'clamp(4.5rem, 9vh, 6.5rem)' }}>
          {/* Section Sub-Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.5rem',
              }}
            >
              <span>04 / CORE FOCUS</span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.4vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              CORE FOCUS AREAS
            </h3>
          </div>

          {/* 6 Real Glass Cards */}
          <div ref={focusGridRef} className="about-focus-grid">
            {focusCards.map((card) => {
              const Icon = card.icon;
              return (
                <div
                  key={card.num}
                  className="real-glass-card glass-reflection"
                  style={{
                    padding: 'clamp(1.5rem, 2.2vw, 2rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '260px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    {/* Header: Index number and Icon */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.85rem',
                          fontWeight: 700,
                          color: 'var(--accent-lime)',
                          letterSpacing: '0.1em',
                        }}
                      >
                        {card.num}
                      </span>

                      <div
                        style={{
                          width: '42px',
                          height: '42px',
                          borderRadius: '12px',
                          background: 'rgba(255, 255, 255, 0.05)',
                          border: '1px solid rgba(255, 255, 255, 0.14)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-lime)',
                        }}
                      >
                        <Icon size={19} />
                      </div>
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: '1.25rem',
                        fontWeight: 800,
                        letterSpacing: '-0.01em',
                        color: '#ffffff',
                        margin: '0 0 0.65rem',
                      }}
                    >
                      {card.title}
                    </h4>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.88rem',
                        lineHeight: 1.6,
                        color: '#cbd5e1',
                        margin: '0 0 1.25rem',
                      }}
                    >
                      {card.desc}
                    </p>
                  </div>

                  {/* Micro Tags */}
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {card.tags.map((tag, i) => (
                      <span
                        key={i}
                        className="glass-pill"
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.67rem',
                          color: 'var(--text-muted)',
                          padding: '0.22rem 0.55rem',
                          borderRadius: '6px',
                          background: 'rgba(255, 255, 255, 0.03)',
                          border: '1px solid rgba(255, 255, 255, 0.08)',
                        }}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            6. "HOW I THINK" SECTION (3 LARGE METHODOLOGY PANELS)
            ======================================================== */}
        <div style={{ marginBottom: 'clamp(4.5rem, 9vh, 6.5rem)' }}>
          {/* Section Sub-Header */}
          <div style={{ marginBottom: '2rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.5rem',
              }}
            >
              <span>05 / HOW I THINK</span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2rem, 3.4vw, 3.2rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              HOW I THINK
            </h3>
          </div>

          {/* 3 Horizontal Panels */}
          <div ref={methodsGridRef} className="about-methods-grid">
            {thinkingMethods.map((method) => {
              const Icon = method.icon;
              return (
                <div
                  key={method.num}
                  className="real-glass-card glass-reflection"
                  style={{
                    padding: 'clamp(1.75rem, 2.8vw, 2.5rem)',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    minHeight: '300px',
                    boxSizing: 'border-box',
                  }}
                >
                  <div>
                    {/* Step Banner */}
                    <div
                      style={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        marginBottom: '1.25rem',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '1rem',
                          fontWeight: 800,
                          color: 'var(--accent-lime)',
                          letterSpacing: '0.12em',
                        }}
                      >
                        {method.num} — {method.step}
                      </span>

                      <div
                        style={{
                          width: '44px',
                          height: '44px',
                          borderRadius: '12px',
                          background: 'rgba(200, 255, 0, 0.08)',
                          border: '1px solid rgba(200, 255, 0, 0.22)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          color: 'var(--accent-lime)',
                        }}
                      >
                        <Icon size={20} />
                      </div>
                    </div>

                    <h4
                      style={{
                        fontFamily: 'var(--font-display)',
                        fontSize: 'clamp(1.2rem, 1.8vw, 1.45rem)',
                        fontWeight: 700,
                        color: '#ffffff',
                        lineHeight: 1.35,
                        margin: '0 0 1rem',
                      }}
                    >
                      {method.summary}
                    </h4>

                    <p
                      style={{
                        fontFamily: 'var(--font-body)',
                        fontSize: '0.9rem',
                        lineHeight: 1.7,
                        color: 'var(--text-muted)',
                        margin: 0,
                      }}
                    >
                      {method.detail}
                    </p>
                  </div>

                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '8px',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.72rem',
                      color: 'var(--accent-lime)',
                      marginTop: '1.5rem',
                      paddingTop: '1rem',
                      borderTop: '1px solid rgba(255, 255, 255, 0.08)',
                    }}
                  >
                    <CheckCircle2 size={14} />
                    <span>SYSTEMATIC RIGOR & SCALE</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* ========================================================
            7. TECHNOLOGY FOCUS (MINIATURE GLASS CHIPS)
            ======================================================== */}
        <div>
          {/* Section Sub-Header */}
          <div style={{ marginBottom: '1.75rem' }}>
            <div
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.74rem',
                color: 'var(--accent-lime)',
                letterSpacing: '0.14em',
                textTransform: 'uppercase',
                fontWeight: 600,
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                marginBottom: '0.5rem',
              }}
            >
              <span>06 / PRODUCTION ARSENAL</span>
              <span style={{ width: '40px', height: '1px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
            </div>
            <h3
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(1.8rem, 2.8vw, 2.6rem)',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                color: '#ffffff',
                textTransform: 'uppercase',
                margin: 0,
              }}
            >
              TECHNOLOGY FOCUS
            </h3>
          </div>

          {/* Miniature Glass Chips Grid */}
          <div
            ref={techGridRef}
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '0.75rem',
              alignItems: 'center',
            }}
          >
            {techStack.map((tech, index) => (
              <span
                key={index}
                className="glass-pill glass-reflection"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '0.52rem 1.15rem',
                  borderRadius: '9999px',
                  background:
                    'linear-gradient(135deg, rgba(255, 255, 255, 0.08) 0%, rgba(255, 255, 255, 0.035) 50%, rgba(255, 255, 255, 0.015) 100%)',
                  backdropFilter: 'blur(20px) saturate(160%)',
                  WebkitBackdropFilter: 'blur(20px) saturate(160%)',
                  border: '1px solid rgba(255, 255, 255, 0.16)',
                  boxShadow:
                    '0 4px 18px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.14)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.8rem',
                  fontWeight: 600,
                  color: '#f1f5f9',
                  letterSpacing: '0.06em',
                  transition: 'all 0.25s ease',
                  cursor: 'default',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(200, 255, 0, 0.55)';
                  e.currentTarget.style.boxShadow =
                    '0 0 20px rgba(200, 255, 0, 0.20), inset 0 1px 0 rgba(255, 255, 255, 0.22)';
                  e.currentTarget.style.color = '#ffffff';
                  e.currentTarget.style.transform = 'translateY(-2px)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.16)';
                  e.currentTarget.style.boxShadow =
                    '0 4px 18px rgba(0, 0, 0, 0.30), inset 0 1px 0 rgba(255, 255, 255, 0.14)';
                  e.currentTarget.style.color = '#f1f5f9';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                <span
                  style={{
                    width: '5px',
                    height: '5px',
                    borderRadius: '50%',
                    backgroundColor: 'var(--accent-lime)',
                    boxShadow: '0 0 6px var(--accent-lime)',
                    display: 'inline-block',
                  }}
                />
                <span>{tech}</span>
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
