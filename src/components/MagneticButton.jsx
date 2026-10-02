import React, { useRef } from 'react';
import gsap from 'gsap';
import { Link } from 'react-router-dom';

export const MagneticButton = ({
  children,
  className = '',
  onClick,
  href,
  to,
  strength = 0.35,
  ...props
}) => {
  const btnRef = useRef(null);

  const handleMouseMove = (e) => {
    const btn = btnRef.current;
    if (!btn) return;
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - (rect.left + rect.width / 2);
    const y = e.clientY - (rect.top + rect.height / 2);

    gsap.to(btn, {
      x: x * strength,
      y: y * strength,
      duration: 0.35,
      ease: 'power2.out',
    });
  };

  const handleMouseLeave = () => {
    const btn = btnRef.current;
    if (!btn) return;
    gsap.to(btn, {
      x: 0,
      y: 0,
      duration: 0.7,
      ease: 'elastic.out(1, 0.3)',
    });
  };

  if (to) {
    return (
      <Link
        ref={btnRef}
        to={to}
        onClick={onClick}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className={`interactive-target ${className}`}
        {...props}
      >
        {children}
      </Link>
    );
  }

  const Component = href ? 'a' : 'button';

  return (
    <Component
      ref={btnRef}
      href={href}
      onClick={onClick}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={`interactive-target ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
};
