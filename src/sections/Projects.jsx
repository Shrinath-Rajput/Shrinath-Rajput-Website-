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
    { label: 'HEALTHCARE AI', value: 'Healthcare AI & Machine Learning' },
    { label: 'AGENTIC & GEN AI', value: 'Generative AI & Data Analytics' },
    { label: 'COMPUTER VISION', value: 'Computer Vision & Edge AI' },
  ];

  const filteredProjects =
    filter === 'all'
      ? projectsData
      : projectsData.filter((p) => p.category.toLowerCase().includes(filter.toLowerCase()));

  return (
    <section id="projects" className="section-padding" style={{ position: 'relative', backgroundColor: '#080a0e' }}>
      <div className="site-container">
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '3.5rem' }}>
          <SectionHeading
            number="04"
            subtitle="FEATURED CASE STUDIES"
            title="SELECTED SYSTEMS & AI DEPLOYMENTS"
          />

          {/* Category Filter Pills */}
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              gap: '8px',
              marginBottom: ' clamp(1.5rem, 3vh, 3rem)',
            }}
          >
            {categories.map((cat) => (
              <button
                key={cat.value}
                onClick={() => setFilter(cat.value)}
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  padding: '0.5rem 1rem',
                  borderRadius: '9999px',
                  backgroundColor: filter === cat.value ? 'var(--accent-lime)' : 'rgba(255, 255, 255, 0.04)',
                  color: filter === cat.value ? '#000000' : 'var(--text-muted)',
                  border: filter === cat.value ? '1px solid var(--accent-lime)' : '1px solid rgba(255, 255, 255, 0.08)',
                  fontWeight: 600,
                  transition: 'all 0.25s ease',
                  cursor: 'pointer',
                }}
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
