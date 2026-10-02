import React from 'react';
import { Hero } from '../sections/Hero';
import { About } from '../sections/About';
import { WhatIDo } from '../sections/WhatIDo';
import { Skills } from '../sections/Skills';
import { Projects } from '../sections/Projects';
import { AiShowcase } from '../sections/AiShowcase';
import { Achievements } from '../sections/Achievements';
import { Contact } from '../sections/Contact';

export const HomePage = ({ isReady }) => {
  return (
    <div className="page-transition-wrapper">
      <Hero isReady={isReady} />
      <About />
      <WhatIDo />
      <Skills />
      <Projects />
      <AiShowcase />
      <Achievements />
      <Contact />
    </div>
  );
};
