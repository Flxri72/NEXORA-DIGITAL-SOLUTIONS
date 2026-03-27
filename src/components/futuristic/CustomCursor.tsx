import { useEffect, useState } from 'react';

export function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Only show custom cursor on desktop
    const isTouchDevice = window.matchMedia('(pointer: coarse)').matches;
    if (isTouchDevice) return;

    const handleMouseMove = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);
    };

    const handleMouseLeave = () => {
      setIsVisible(false);
    };

    const handleMouseEnter = () => {
      setIsVisible(true);
    };

    // Detect hoverable elements
    const handleElementHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const isHoverable = target.closest('a, button, [role="button"], .tech-key, .card-project');
      setIsHovering(!!isHoverable);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mousemove', handleElementHover);
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mousemove', handleElementHover);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
    };
  }, []);

  // Hide on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) {
    return null;
  }

  return (
    <>
      {/* Main cursor dot */}
      <div
        className="fixed pointer-events-none z-[9999] mix-blend-difference"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 1 : 0,
          transition: 'opacity 0.2s ease, transform 0.15s ease-out',
        }}
      >
        <div
          className="rounded-full bg-[#39FF14]"
          style={{
            width: isHovering ? 40 : 8,
            height: isHovering ? 40 : 8,
            transition: 'width 0.2s ease, height 0.2s ease',
            boxShadow: '0 0 20px rgba(57, 255, 20, 0.8)',
          }}
        />
      </div>

      {/* Outer ring */}
      <div
        className="fixed pointer-events-none z-[9998]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%)',
          opacity: isVisible ? 0.5 : 0,
          transition: 'opacity 0.2s ease',
        }}
      >
        <div
          className="rounded-full border border-[#39FF14]/30"
          style={{
            width: isHovering ? 60 : 24,
            height: isHovering ? 60 : 24,
            transition: 'width 0.3s ease, height 0.3s ease',
          }}
        />
      </div>

      {/* Trail effect */}
      <div
        className="fixed pointer-events-none z-[9997]"
        style={{
          left: position.x,
          top: position.y,
          transform: 'translate(-50%, -50%) translate(-10px, -10px)',
          opacity: isVisible ? 0.2 : 0,
        }}
      >
        <div
          className="w-4 h-4 rounded-full bg-[#2EEEFE]/50 blur-sm"
        />
      </div>
    </>
  );
}
