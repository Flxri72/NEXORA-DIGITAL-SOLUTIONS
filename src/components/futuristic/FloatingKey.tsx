import { useState } from 'react';
import { cn } from '@/lib/utils';
import { X } from 'lucide-react';

interface FloatingKeyProps {
  name: string;
  icon: string;
  color: string;
  glowColor: string;
  description: string;
  delay?: number;
  className?: string;
}

export function FloatingKey({
  name,
  icon,
  color,
  glowColor,
  description,
  delay = 0,
  className,
}: FloatingKeyProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    setIsExpanded(!isExpanded);
  };

  const handleClose = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsExpanded(false);
  };

  return (
    <>
      {/* Normal State - Icon Card */}
      <div
        className={cn(
          'relative cursor-pointer transition-all duration-500',
          isExpanded && 'opacity-0 pointer-events-none scale-0',
          className
        )}
        onClick={handleClick}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        style={{
          animationDelay: `${delay}s`,
        }}
      >
        <div
          className={cn(
            'relative w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-2xl',
            'flex flex-col items-center justify-center p-3',
            'transition-all duration-300',
            'border border-white/10 backdrop-blur-sm'
          )}
          style={{
            background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.02))`,
            boxShadow: isHovered
              ? `0 20px 50px rgba(0,0,0,0.5), 0 0 40px ${glowColor}, inset 0 1px 0 rgba(255,255,255,0.2)`
              : `0 15px 40px rgba(0,0,0,0.4), 0 0 20px ${glowColor}40, inset 0 1px 0 rgba(255,255,255,0.1)`,
            transform: isHovered ? 'translateY(-8px) scale(1.05)' : 'translateY(0) scale(1)',
          }}
        >
          {/* Icon Image */}
          <img 
            src={icon} 
            alt={name}
            className="w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 object-contain drop-shadow-lg"
          />
          
          {/* Bottom glow */}
          <div
            className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-2/3 h-6 rounded-full blur-xl transition-opacity duration-300"
            style={{
              background: glowColor,
              opacity: isHovered ? 0.8 : 0.4,
            }}
          />
        </div>
      </div>

      {/* Expanded State - Modal Overlay */}
      {isExpanded && (
        <div 
          className="fixed inset-0 z-[100] flex items-center justify-center p-4"
          onClick={handleClose}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-sm animate-fade-in" />
          
          {/* Expanded Card */}
          <div 
            className="relative z-10 animate-expand-card"
            onClick={(e) => e.stopPropagation()}
          >
            <div
              className="relative w-[320px] md:w-[400px] rounded-3xl p-8 md:p-10"
              style={{
                background: `linear-gradient(145deg, rgba(255,255,255,0.1), rgba(255,255,255,0.03))`,
                border: `2px solid ${color}`,
                boxShadow: `0 0 80px ${glowColor}, 0 25px 50px rgba(0,0,0,0.5), inset 0 1px 0 rgba(255,255,255,0.2)`,
              }}
            >
              {/* Close Button */}
              <button
                onClick={handleClose}
                className="absolute top-4 right-4 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-white/20 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Large Icon */}
              <div className="flex justify-center mb-6">
                <div 
                  className="w-28 h-28 md:w-36 md:h-36 rounded-2xl flex items-center justify-center"
                  style={{
                    background: `linear-gradient(145deg, ${color}30, ${color}10)`,
                    boxShadow: `0 0 40px ${glowColor}`,
                  }}
                >
                  <img 
                    src={icon} 
                    alt={name}
                    className="w-20 h-20 md:w-24 md:h-24 object-contain drop-shadow-2xl animate-spin-slow"
                  />
                </div>
              </div>

              {/* Title - Beautiful Typography */}
              <h3 
                className="text-center font-space font-bold text-3xl md:text-4xl mb-4"
                style={{
                  background: `linear-gradient(135deg, ${color}, #fff)`,
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                  textShadow: `0 0 30px ${glowColor}`,
                }}
              >
                {name}
              </h3>

              {/* Decorative Line */}
              <div 
                className="w-24 h-1 mx-auto mb-6 rounded-full"
                style={{
                  background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
                }}
              />

              {/* Description - Elegant Typography */}
              <p className="text-center text-[#A7B0BC] text-base md:text-lg leading-relaxed font-light">
                {description}
              </p>

              {/* Tech Badge */}
              <div className="mt-6 flex justify-center">
                <span 
                  className="px-4 py-2 rounded-full text-xs font-mono uppercase tracking-wider"
                  style={{
                    background: `${color}20`,
                    color: color,
                    border: `1px solid ${color}50`,
                  }}
                >
                  Tecnología Principal
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        @keyframes expand-card {
          0% {
            opacity: 0;
            transform: scale(0.5) rotateY(-180deg);
          }
          50% {
            transform: scale(1.1) rotateY(-90deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotateY(0deg);
          }
        }
        
        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        
        .animate-fade-in {
          animation: fade-in 0.3s ease-out forwards;
        }
        
        .animate-expand-card {
          animation: expand-card 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
        
        .animate-spin-slow {
          animation: spin-slow 8s linear infinite;
        }
      `}</style>
    </>
  );
}
