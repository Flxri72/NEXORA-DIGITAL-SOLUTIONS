import { useEffect, useRef } from 'react';

export function TunnelRails() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let offset = 0;
    let animationId: number;

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;
      const maxRadius = Math.max(canvas.width, canvas.height) * 0.8;

      // Draw tunnel rings
      for (let i = 0; i < 12; i++) {
        const radius = ((i * 80 + offset) % maxRadius) + 50;
        const opacity = 1 - (radius / maxRadius);

        // Outer ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(46, 238, 254, ${opacity * 0.15})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Inner ring
        ctx.beginPath();
        ctx.arc(centerX, centerY, radius * 0.7, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(181, 107, 255, ${opacity * 0.1})`;
        ctx.lineWidth = 0.5;
        ctx.stroke();
      }

      // Draw radial lines
      for (let i = 0; i < 8; i++) {
        const angle = (i * Math.PI) / 4 + offset * 0.001;
        const x = centerX + Math.cos(angle) * maxRadius;
        const y = centerY + Math.sin(angle) * maxRadius;

        ctx.beginPath();
        ctx.moveTo(centerX, centerY);
        ctx.lineTo(x, y);
        ctx.strokeStyle = `rgba(57, 255, 20, ${0.05})`;
        ctx.lineWidth = 1;
        ctx.stroke();
      }

      offset += 0.5;
      animationId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ 
        opacity: 0.4,
        background: 'radial-gradient(ellipse at center, transparent 0%, var(--nexora-bg-primary) 70%)'
      }}
    />
  );
}
