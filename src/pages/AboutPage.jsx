import React from 'react';
import { About } from '../sections/About';

export const AboutPage = () => {
  return (
    <div className="page-transition-wrapper" style={{ paddingTop: 'clamp(2.5rem, 5vh, 4rem)' }}>
      <About />
    </div>
  );
};
