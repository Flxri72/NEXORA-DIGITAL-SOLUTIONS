import { cn } from '@/lib/utils';
import { siteConfig } from '@/config';

interface PageOverlayProps {
  isVisible: boolean;
}

export function PageOverlay({ isVisible }: PageOverlayProps) {
  return (
    <div
      className={cn(
        'fixed inset-0 z-[9999] bg-[#05060B] flex items-center justify-center transition-opacity duration-700',
        isVisible ? 'opacity-100' : 'opacity-0 pointer-events-none'
      )}
    >
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: `
              linear-gradient(rgba(57, 255, 20, 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(57, 255, 20, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px',
          }}
        />
        
        {/* Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 flex flex-col items-center gap-6">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <span className="font-space font-bold text-3xl text-white tracking-tight">
            {siteConfig.title?.split('|')[0]?.trim() || 'NEXORA'}
          </span>
          <div className="w-3 h-3 rounded-full bg-[#39FF14] animate-pulse" />
        </div>
        
        {/* Progress bar */}
        <div className="w-32 h-1 bg-white/10 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-[#39FF14] to-[#2EEEFE] animate-progress"
            style={{
              animation: 'progress 1.5s ease-in-out infinite',
            }}
          />
        </div>
        
        {/* Loading text */}
        <span className="text-xs font-mono text-[#A7B0BC] uppercase tracking-widest animate-pulse">
          Cargando experiencia...
        </span>
      </div>

      <style>{`
        @keyframes progress {
          0% { 
            width: 0%;
            transform: translateX(-100%);
          }
          50% {
            width: 100%;
            transform: translateX(0%);
          }
          100% { 
            width: 100%;
            transform: translateX(200%);
          }
        }
      `}</style>
    </div>
  );
}
