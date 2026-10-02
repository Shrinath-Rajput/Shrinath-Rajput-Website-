import React from 'react';
import { Hero } from '../sections/Hero';

export const HomePage = ({ isReady }) => {
  return (
    <div
      className="page-transition-wrapper"
      style={{
        minHeight: '100vh',
        width: '100%',
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      <Hero isReady={isReady} />
    </div>
  );
};
