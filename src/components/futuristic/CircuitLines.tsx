import { useEffect, useRef } from 'react';

interface CircuitLine {
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  progress: number;
  speed: number;
  opacity: number;
}

export function CircuitLines() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const linesRef = useRef<CircuitLine[]>([]);
  const animationRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initLines();
    };

    const initLines = () => {
      const lines: CircuitLine[] = [];
      const numLines = 8;

      for (let i = 0; i < numLines; i++) {
        const isHorizontal = Math.random() > 0.5;
        const y = Math.random() * canvas.height;
        const x = Math.random() * canvas.width;

        if (isHorizontal) {
          lines.push({
            x1: 0,
            y1: y,
            x2: canvas.width,
            y2: y,
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.003,
            opacity: 0.1 + Math.random() * 0.2,
          });
        } else {
          lines.push({
            x1: x,
            y1: 0,
            x2: x,
            y2: canvas.height,
            progress: Math.random(),
            speed: 0.002 + Math.random() * 0.003,
            opacity: 0.1 + Math.random() * 0.2,
          });
        }
      }

      linesRef.current = lines;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      linesRef.current.forEach((line) => {
        // Update progress
        line.progress += line.speed;
        if (line.progress > 1) line.progress = 0;

        // Draw base line
        ctx.beginPath();
        ctx.moveTo(line.x1, line.y1);
        ctx.lineTo(line.x2, line.y2);
        ctx.strokeStyle = `rgba(46, 238, 254, ${line.opacity * 0.3})`;
        ctx.lineWidth = 1;
        ctx.stroke();

        // Draw moving pulse
        const pulseX = line.x1 + (line.x2 - line.x1) * line.progress;
        const pulseY = line.y1 + (line.y2 - line.y1) * line.progress;

        // Glow effect
        const gradient = ctx.createRadialGradient(
          pulseX, pulseY, 0,
          pulseX, pulseY, 20
        );
        gradient.addColorStop(0, `rgba(57, 255, 20, ${line.opacity})`);
        gradient.addColorStop(0.5, `rgba(46, 238, 254, ${line.opacity * 0.5})`);
        gradient.addColorStop(1, 'rgba(46, 238, 254, 0)');

        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 20, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(pulseX, pulseY, 3, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(57, 255, 20, ${line.opacity * 2})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none z-0"
      style={{ opacity: 0.5 }}
    />
  );
}
