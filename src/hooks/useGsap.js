import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const useGsapContext = (scope) => {
  const ctx = useRef(null);

  useEffect(() => {
    ctx.current = gsap.context(() => {}, scope);
    return () => ctx.current.revert();
  }, [scope]);

  return ctx;
};

export { gsap, ScrollTrigger };
