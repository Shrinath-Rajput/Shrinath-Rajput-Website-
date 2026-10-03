import React from 'react';
import { Hero } from '../sections/Hero';
import { HeroServiceStrip } from '../sections/HeroServiceStrip';
import { HomeRoles } from '../sections/HomeRoles';
import { HomeTechStack } from '../sections/HomeTechStack';
import { HomeFeaturedProjects } from '../sections/HomeFeaturedProjects';
import { HomeCta } from '../sections/HomeCta';

export const HomePage = ({ isReady }) => {
  return (
    <div
      className="page-transition-wrapper home-page-layout"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        backgroundColor: '#05070a',
        overflowX: 'hidden',
      }}
    >
      {/* Background Continuous Tech Grid */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          backgroundImage: 'radial-gradient(rgba(255, 255, 255, 0.04) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          opacity: 0.45,
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Global Ambient Radial Depth Glows (Extending throughout full scroll) */}
      <div
        style={{
          position: 'fixed',
          top: '15%',
          right: '5%',
          width: '700px',
          height: '700px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.07) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          top: '50%',
          left: '3%',
          width: '650px',
          height: '650px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.045) 0%, transparent 65%)',
          filter: 'blur(95px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'fixed',
          bottom: '15%',
          right: '8%',
          width: '750px',
          height: '750px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(16, 185, 129, 0.05) 0%, rgba(56, 189, 248, 0.03) 40%, transparent 70%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* 1. Hero Section (Untouched & Preserved) */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <Hero isReady={isReady} />
      </div>

      {/* 2. Feature / Service Strip (01 AI/ML, 02 Full Stack, 03 Vision, 04 Agentic AI) */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HeroServiceStrip />
      </div>

      {/* 3. Section 01 // MY ROLES — WHAT I DO */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HomeRoles />
      </div>

      {/* 4. Section 02 // TECH STACK — TECH STACK */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HomeTechStack />
      </div>

      {/* 5. Section 03 // FEATURED WORK — SELECTED PROJECTS */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HomeFeaturedProjects />
      </div>

      {/* 6. Section 04 // FINAL CTA — LET'S BUILD SOMETHING INTELLIGENT */}
      <div style={{ position: 'relative', zIndex: 2 }}>
        <HomeCta />
      </div>
    </div>
  );
};
