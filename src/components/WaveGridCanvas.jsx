import React, { useEffect, useRef } from 'react';

export const WaveGridCanvas = ({
  className = '',
  style = {},
  opacity = 0.85,
}) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let time = 0;

    const resize = () => {
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      const width = canvas.parentElement ? canvas.parentElement.clientWidth : window.innerWidth;
      const height = canvas.parentElement ? canvas.parentElement.clientHeight : 420;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.scale(dpr, dpr);
    };

    resize();
    window.addEventListener('resize', resize);

    // Grid parameters
    const rows = 28;
    const cols = 55;

    const render = () => {
      time += 0.012;
      const width = canvas.width / (Math.min(window.devicePixelRatio || 1, 2));
      const height = canvas.height / (Math.min(window.devicePixelRatio || 1, 2));

      ctx.clearRect(0, 0, width, height);

      // Perspective transformation for 3D wave plane
      const horizonY = height * 0.42;
      const bottomY = height * 1.05;
      const points = [];

      for (let r = 0; r < rows; r++) {
        const rowPoints = [];
        const progressY = r / (rows - 1);
        // non-linear depth perspective (lines closer together in the distance)
        const pyNorm = Math.pow(progressY, 1.6);
        const yBase = horizonY + (bottomY - horizonY) * pyNorm;
        const spread = 0.55 + pyNorm * 0.85;

        for (let c = 0; c < cols; c++) {
          const progressX = c / (cols - 1); // 0 to 1
          const xNorm = (progressX - 0.5) * 2; // -1 to 1
          const x = width * 0.5 + xNorm * (width * 0.65 * spread);

          // Wave equation: combination of multiple harmonic sines and cosines
          const wave1 = Math.sin(progressX * 7.5 + time * 1.2 + progressY * 4.5);
          const wave2 = Math.cos(progressX * 4.2 - time * 0.8 + progressY * 3.0);
          const wave3 = Math.sin(progressX * 11.0 + time * 1.5) * 0.4;
          const waveHeight = (wave1 * 14 + wave2 * 10 + wave3 * 6) * (0.35 + pyNorm * 0.85);

          const y = yBase + waveHeight;

          // Color calculation: neon lime green near center/peaks, electric cyan on slopes/depth
          const greenCyanFactor = (Math.sin(progressX * 5 + time) + 1) * 0.5;
          const alpha = (0.12 + pyNorm * 0.55) * (1 - Math.abs(xNorm) * 0.35);

          rowPoints.push({
            x,
            y,
            alpha: Math.max(0, Math.min(1, alpha)),
            greenCyanFactor,
            isPeak: waveHeight > 8,
          });
        }
        points.push(rowPoints);
      }

      // Draw horizontal wave lines
      for (let r = 0; r < rows; r++) {
        const row = points[r];
        if (!row || row.length === 0) continue;

        ctx.beginPath();
        ctx.moveTo(row[0].x, row[0].y);

        for (let c = 1; c < cols; c++) {
          ctx.lineTo(row[c].x, row[c].y);
        }

        const avgAlpha = row[Math.floor(cols / 2)].alpha;
        const grad = ctx.createLinearGradient(0, 0, width, 0);
        grad.addColorStop(0, `rgba(56, 189, 248, ${avgAlpha * 0.15})`);
        grad.addColorStop(0.35, `rgba(200, 255, 0, ${avgAlpha * 0.8})`);
        grad.addColorStop(0.65, `rgba(34, 197, 94, ${avgAlpha * 0.85})`);
        grad.addColorStop(1, `rgba(56, 189, 248, ${avgAlpha * 0.2})`);

        ctx.strokeStyle = grad;
        ctx.lineWidth = 0.8 + (r / rows) * 0.8;
        ctx.stroke();
      }

      // Draw vertical perspective lines (connecting across rows)
      for (let c = 0; c < cols; c += 2) {
        ctx.beginPath();
        ctx.moveTo(points[0][c].x, points[0][c].y);

        for (let r = 1; r < rows; r++) {
          ctx.lineTo(points[r][c].x, points[r][c].y);
        }

        const pt = points[Math.floor(rows / 2)][c];
        const isCenter = Math.abs(c / cols - 0.5) < 0.25;
        const color = isCenter ? '200, 255, 0' : '56, 189, 248';
        ctx.strokeStyle = `rgba(${color}, ${pt.alpha * 0.35})`;
        ctx.lineWidth = 0.65;
        ctx.stroke();
      }

      // Draw glowing node particles at selected grid intersections
      for (let r = 2; r < rows; r += 3) {
        for (let c = 2; c < cols; c += 3) {
          const pt = points[r][c];
          if (pt.alpha > 0.3) {
            const isGreen = pt.greenCyanFactor > 0.5;
            ctx.fillStyle = isGreen ? 'rgba(200, 255, 0, 0.85)' : 'rgba(56, 189, 248, 0.85)';
            ctx.beginPath();
            ctx.arc(pt.x, pt.y, 1.2 + (r / rows) * 1.2, 0, Math.PI * 2);
            ctx.fill();

            // Occasional glow halo on peaks
            if (pt.isPeak && r > rows * 0.5) {
              ctx.fillStyle = 'rgba(200, 255, 0, 0.18)';
              ctx.beginPath();
              ctx.arc(pt.x, pt.y, 4.5, 0, Math.PI * 2);
              ctx.fill();
            }
          }
        }
      }

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener('resize', resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={className}
      style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        width: '100%',
        height: '100%',
        pointerEvents: 'none',
        opacity,
        zIndex: 2,
        ...style,
      }}
    />
  );
};
