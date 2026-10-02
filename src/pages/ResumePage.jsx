import React from 'react';
import { Resume } from '../sections/Resume';

export const ResumePage = () => {
  return (
    <div className="page-transition-wrapper" style={{ paddingTop: 'clamp(2.5rem, 5vh, 4rem)' }}>
      <Resume />
    </div>
  );
};
