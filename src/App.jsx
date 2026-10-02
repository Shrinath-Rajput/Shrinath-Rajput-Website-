import React, { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { useLenis } from './hooks/useLenis';
import { CustomCursor } from './components/CustomCursor';
import { PageLoader } from './components/PageLoader';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { ScrollToTop } from './components/ScrollToTop';

import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { ServicesPage } from './pages/ServicesPage';
import { StackPage } from './pages/StackPage';
import { WorkPage } from './pages/WorkPage';
import { AiLabPage } from './pages/AiLabPage';
import { CertificatesPage } from './pages/CertificatesPage';
import { ResumePage } from './pages/ResumePage';
import { ContactPage } from './pages/ContactPage';

function App() {
  const [isReady, setIsReady] = useState(false);
  const location = useLocation();
  useLenis();

  const isHome =
    location.pathname === '/' ||
    location.pathname === '/Shrinath-Rajput-Website-' ||
    location.pathname === '/Shrinath-Rajput-Website-/';

  return (
    <div className="relative min-h-screen bg-[#060709] text-white selection:bg-[#c8ff00] selection:text-black">
      <CustomCursor />
      <ScrollToTop />

      {/* Cinematic Initial Loader */}
      <PageLoader onComplete={() => setIsReady(true)} />

      {/* Floating Header */}
      <Navbar />

      {/* Route-Based Dedicated Page Views */}
      <main>
        <Routes>
          <Route path="/" element={<HomePage isReady={isReady} />} />
          <Route path="/Shrinath-Rajput-Website-" element={<HomePage isReady={isReady} />} />
          <Route path="/Shrinath-Rajput-Website-/" element={<HomePage isReady={isReady} />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/stack" element={<StackPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/ai-lab" element={<AiLabPage />} />
          <Route path="/certificates" element={<CertificatesPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* Fallback route */}
          <Route path="*" element={<HomePage isReady={isReady} />} />
        </Routes>
      </main>

      {/* Branded Footer (Rendered on all inner pages; Home is an exclusive full-screen landing page) */}
      {!isHome && <Footer />}
    </div>
  );
}

export default App;
