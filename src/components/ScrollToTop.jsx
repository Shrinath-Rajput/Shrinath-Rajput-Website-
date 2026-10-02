import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Reset browser window scroll position immediately
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant',
    });

    // Reset Lenis scroll instance if active globally
    if (window.__lenis) {
      window.__lenis.scrollTo(0, { immediate: true });
    }

    // Refresh ScrollTrigger calculations for new page layout
    const timer = setTimeout(() => {
      ScrollTrigger.refresh();
    }, 80);

    return () => clearTimeout(timer);
  }, [pathname]);

  return null;
};
