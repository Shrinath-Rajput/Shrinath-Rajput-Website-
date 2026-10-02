import React from 'react';
import { Contact } from '../sections/Contact';

export const ContactPage = () => {
  return (
    <div className="page-transition-wrapper" style={{ paddingTop: 'clamp(2.5rem, 5vh, 4rem)' }}>
      <Contact />
    </div>
  );
};
