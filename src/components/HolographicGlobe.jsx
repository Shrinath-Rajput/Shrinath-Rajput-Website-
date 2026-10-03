import React, { useEffect, useRef } from 'react';

export const HolographicGlobe = ({
  size = 460,
  showRings = true,
  ringColor = '#c8ff00',
  glowColor = '#38bdf8',
  speed = 0.004,
  className = '',
  style = {},
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    const dpr = window.devicePixelRatio || 1;
    canvas.width = size * dpr;
    canvas.height = size * dpr;
    ctx.scale(dpr, dpr);

    let rotation = 0;
    const radius = size * 0.36;
    const cx = size / 2;
    const cy = size / 2;

    const render = () => {
      rotation += speed;
      ctx.clearRect(0, 0, size, size);

      // 1. Soft atmospheric outer glow
      const atmosphereGrad = ctx.createRadialGradient(cx, cy, radius * 0.7, cx, cy, radius * 1.35);
      atmosphereGrad.addColorStop(0, 'rgba(56, 189, 248, 0.15)');
      atmosphereGrad.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      atmosphereGrad.addColorStop(1, 'rgba(56, 189, 248, 0)');
      ctx.fillStyle = atmosphereGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius * 1.35, 0, Math.PI * 2);
      ctx.fill();

      // 2. Globe dark sphere body
      const bodyGrad = ctx.createRadialGradient(cx - radius * 0.3, cy - radius * 0.3, 10, cx, cy, radius);
      bodyGrad.addColorStop(0, 'rgba(14, 28, 48, 0.85)');
      bodyGrad.addColorStop(0.7, 'rgba(8, 14, 24, 0.95)');
      bodyGrad.addColorStop(1, 'rgba(4, 7, 12, 0.98)');
      ctx.fillStyle = bodyGrad;
      ctx.beginPath();
      ctx.arc(cx, cy, radius, 0, Math.PI * 2);
      ctx.fill();

      // 3. Glowing rim stroke
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.55)';
      ctx.lineWidth = 1.5;
      ctx.shadowColor = glowColor;
      ctx.shadowBlur = 12;
      ctx.stroke();
      ctx.shadowBlur = 0; // reset shadow

      // 4. Draw Latitudes (horizontal rings on sphere)
      const latCount = 7;
      ctx.strokeStyle = 'rgba(56, 189, 248, 0.22)';
      ctx.lineWidth = 1;

      for (let i = 1; i < latCount; i++) {
        const phi = (i / latCount) * Math.PI - Math.PI / 2;
        const y = cy + radius * Math.sin(phi);
        const rLat = radius * Math.cos(phi);

        ctx.beginPath();
        ctx.ellipse(cx, y, rLat, rLat * 0.28, 0, 0, Math.PI * 2);
        ctx.stroke();
      }

      // 5. Draw Longitudes (vertical meridians rotating)
      const lonCount = 10;
      for (let i = 0; i < lonCount; i++) {
        const angle = rotation + (i * Math.PI) / lonCount;
        const xOffset = Math.sin(angle) * radius;
        const isFacing = Math.cos(angle);

        ctx.beginPath();
        // project meridian ellipse
        ctx.ellipse(cx, cy, Math.abs(xOffset), radius, 0, 0, Math.PI * 2);
        ctx.strokeStyle = isFacing > 0 ? 'rgba(56, 189, 248, 0.28)' : 'rgba(56, 189, 248, 0.08)';
        ctx.stroke();

        // Glowing points along meridian
        if (isFacing > 0.2) {
          const ptCount = 4;
          for (let p = 1; p < ptCount; p++) {
            const py = cy + ((p - ptCount / 2) / ptCount) * radius * 1.5;
            const px = cx + xOffset * Math.cos(((py - cy) / radius) * (Math.PI / 2));
            ctx.fillStyle = (i + p) % 3 === 0 ? 'rgba(200, 255, 0, 0.85)' : 'rgba(56, 189, 248, 0.75)';
            ctx.beginPath();
            ctx.arc(px, py, 1.4, 0, Math.PI * 2);
            ctx.fill();
          }
        }
      }

      // 6. Concentric Holographic Orbit Rings (matching reference image)
      if (showRings) {
        // Orbit Ring 1: Neon Lime large angled ellipse
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(-0.35); // tilt angle
        ctx.strokeStyle = 'rgba(200, 255, 0, 0.85)';
        ctx.lineWidth = 1.6;
        ctx.shadowColor = 'rgba(200, 255, 0, 0.95)';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.85, radius * 0.65, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Orbit dot on lime ring
        const orbitAngle1 = rotation * 1.8;
        const ox1 = Math.cos(orbitAngle1) * (radius * 1.85);
        const oy1 = Math.sin(orbitAngle1) * (radius * 0.65);
        ctx.fillStyle = '#c8ff00';
        ctx.shadowBlur = 16;
        ctx.beginPath();
        ctx.arc(ox1, oy1, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();

        // Orbit Ring 2: Electric Cyan secondary ellipse
        ctx.save();
        ctx.translate(cx, cy);
        ctx.rotate(0.52); // reverse tilt angle
        ctx.strokeStyle = 'rgba(56, 189, 248, 0.75)';
        ctx.lineWidth = 1.4;
        ctx.shadowColor = 'rgba(56, 189, 248, 0.9)';
        ctx.shadowBlur = 12;
        ctx.beginPath();
        ctx.ellipse(0, 0, radius * 1.65, radius * 0.52, 0, 0, Math.PI * 2);
        ctx.stroke();

        // Orbit dot on cyan ring
        const orbitAngle2 = -rotation * 2.2;
        const ox2 = Math.cos(orbitAngle2) * (radius * 1.65);
        const oy2 = Math.sin(orbitAngle2) * (radius * 0.52);
        ctx.fillStyle = '#38bdf8';
        ctx.shadowBlur = 14;
        ctx.beginPath();
        ctx.arc(ox2, oy2, 3.5, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [size, showRings, ringColor, glowColor, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        width: `${size}px`,
        height: `${size}px`,
        pointerEvents: 'none',
        ...style,
      }}
    />
  );
};
