import React, { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';

export const CustomCursor = () => {
  const cursorDotRef = useRef(null);
  const cursorRingRef = useRef(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    // Only activate cursor on devices supporting pointer hover
    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    const dot = cursorDotRef.current;
    const ring = cursorRingRef.current;

    const moveCursor = (e) => {
      gsap.to(dot, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.08,
        ease: 'power2.out',
      });

      gsap.to(ring, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.25,
        ease: 'power2.out',
      });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isInteractive =
        target.closest('a') ||
        target.closest('button') ||
        target.closest('.interactive-target') ||
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA';

      setIsPointer(!!isInteractive);
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <div
        ref={cursorDotRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '8px',
          height: '8px',
          backgroundColor: isPointer ? '#c8ff00' : '#ffffff',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99999,
          transform: 'translate(-50%, -50%)',
          transition: 'background-color 0.2s ease, transform 0.2s ease',
          boxShadow: isPointer ? '0 0 12px #c8ff00' : 'none',
        }}
      />
      <div
        ref={cursorRingRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: isPointer ? '48px' : '32px',
          height: isPointer ? '48px' : '32px',
          border: isPointer ? '1.5px solid rgba(200, 255, 0, 0.8)' : '1px solid rgba(255, 255, 255, 0.25)',
          backgroundColor: isPointer ? 'rgba(200, 255, 0, 0.05)' : 'transparent',
          borderRadius: '50%',
          pointerEvents: 'none',
          zIndex: 99998,
          transform: 'translate(-50%, -50%)',
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease, background-color 0.2s ease',
        }}
      />
    </>
  );
};
