import React, { useState } from 'react';
import { SectionHeading } from '../components/SectionHeading';
import { ProjectCard } from '../components/ProjectCard';
import { projectsData } from '../data/projects';
import { MagneticButton } from '../components/MagneticButton';
import { Sparkles } from 'lucide-react';

export const Projects = () => {
  const [filter, setFilter] = useState('all');

  const categories = [
    { label: 'ALL INITIATIVES', value: 'all' },
    { label: 'HEALTHCARE AI', value: 'healthcare' },
    { label: 'AGENTIC & GEN AI', value: 'agentic' },
    { label: 'COMPUTER VISION', value: 'vision' },
    { label: 'MACHINE LEARNING', value: 'learning' },
    { label: 'WEB / FULL STACK', value: 'web' },
    { label: 'OTHER', value: 'other' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section
      id="projects"
      className="section-padding"
      style={{
        position: 'relative',
        backgroundColor: '#06080c',
        backgroundImage: `
          radial-gradient(circle at 50% 0%, rgba(200, 255, 0, 0.04) 0%, transparent 60%),
          radial-gradient(circle at 10% 30%, rgba(56, 189, 248, 0.035) 0%, transparent 50%),
          radial-gradient(circle at 90% 65%, rgba(168, 85, 247, 0.03) 0%, transparent 50%),
          linear-gradient(180deg, #05070a 0%, #080b11 50%, #05070a 100%)
        `,
        overflow: 'hidden',
      }}
    >
      {/* Background Cinematic Lighting & Depth Grid */}
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

      {/* Hero Ambient Radial Glow behind Heading */}
      <div
        style={{
          position: 'absolute',
          top: '2%',
          left: '15%',
          width: '500px',
          height: '400px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.045) 0%, rgba(56, 189, 248, 0.03) 40%, transparent 70%)',
          filter: 'blur(80px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      {/* Floating Ambient Light Diffusers along the Page for Glass Card Refraction */}
      <div
        style={{
          position: 'absolute',
          top: '35%',
          right: '5%',
          width: '600px',
          height: '600px',
          background: 'radial-gradient(circle, rgba(56, 189, 248, 0.04) 0%, transparent 65%)',
          filter: 'blur(100px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '70%',
          left: '8%',
          width: '650px',
          height: '650px',
          background: 'radial-gradient(circle, rgba(200, 255, 0, 0.035) 0%, transparent 65%)',
          filter: 'blur(110px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <div className="site-container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
          <SectionHeading
            number="04"
            subtitle="FEATURED CASE STUDIES"
            title="SELECTED SYSTEMS & AI DEPLOYMENTS"
          />

          {/* Category Filter Pills */}
          <div
            className="project-filter-row"
            style={{
              display: 'flex',
              gap: '8px',
              marginBottom: 'clamp(1.5rem, 3vh, 3rem)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                className={`project-filter-btn ${filter === cat.value ? 'active' : ''}`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Case Studies Stack */}
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'clamp(2.5rem, 5vh, 4rem)',
          }}
        >
          {filteredProjects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} index={idx} />
          ))}
        </div>
      </div>
    </section>
  );
};
