import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const RevealText = ({ children, delay = 0, className = '', tag = 'div', style = {} }) => {
  const elRef = useRef(null);
  const Tag = tag;

  useEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const anim = gsap.fromTo(
      el,
      {
        y: 40,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        delay,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 88%',
          toggleActions: 'play none none none',
        },
      }
    );

    return () => {
      anim.kill();
    };
  }, [delay]);

  return (
    <Tag ref={elRef} className={className} style={{ ...style, willChange: 'transform, opacity' }}>
      {children}
    </Tag>
  );
};
