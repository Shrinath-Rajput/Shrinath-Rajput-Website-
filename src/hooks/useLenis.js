import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useLenis = () => {
  const lenisRef = useRef(null);

  useEffect(() => {
    // Only initialize smooth scroll on non-touch or modern desktop/laptop browsers
    const isMobile = window.innerWidth <= 768;
    
    const lenis = new Lenis({
      duration: isMobile ? 0.9 : 1.35,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 0.88,
      touchMultiplier: 1.1,
      infinite: false,
    });

    lenisRef.current = lenis;
    window.__lenis = lenis;

    // Connect Lenis to GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    return () => {
      gsap.ticker.remove(updateTicker);
      delete window.__lenis;
      lenis.destroy();
    };
  }, []);

  return lenisRef;
};
