import React from 'react';
import { Certificates } from '../sections/Certificates';

export const CertificatesPage = () => {
  return (
    <div className="page-transition-wrapper" style={{ paddingTop: 'clamp(2.5rem, 5vh, 4rem)' }}>
      <Certificates />
    </div>
  );
};
