import { useEffect, useState, useRef } from 'react';
import { cn } from '@/lib/utils';
import { heroConfig, techIconsConfig } from '@/config';
import { FloatingKey } from '@/components/futuristic';
import { ChevronDown } from 'lucide-react';

export function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 300);
    return () => clearTimeout(timer);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full min-h-screen overflow-hidden flex flex-col items-center justify-center"
    >
      {/* Vignette overlay */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at center, transparent 0%, rgba(5, 6, 11, 0.4) 70%, rgba(5, 6, 11, 0.8) 100%)',
        }}
      />

      {/* Main Content */}
      <div className="relative z-20 text-center px-6 max-w-5xl mx-auto pt-20">
        {/* Label */}
        <div
          className={cn(
            'text-label text-[#39FF14] mb-6 transition-all duration-700',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          NEXORA DIGITAL SOLUTIONS
        </div>

        {/* Headline */}
        <h1
          className={cn(
            'font-space font-bold text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-white mb-6 leading-tight transition-all duration-1000',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          {heroConfig.headline}
        </h1>

        {/* Subheadline */}
        <p
          className={cn(
            'text-lg md:text-xl text-[#A7B0BC] max-w-2xl mx-auto mb-10 leading-relaxed transition-all duration-1000',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '600ms' }}
        >
          {heroConfig.subheadline}
        </p>

        {/* CTA Buttons */}
        <div
          className={cn(
            'flex flex-col sm:flex-row gap-4 justify-center items-center mb-16 transition-all duration-1000',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <a
            href="#projects"
            className="btn-primary px-8 py-4 rounded-xl font-space font-semibold text-sm tracking-wide"
          >
            {heroConfig.ctaPrimary}
          </a>
          <a
            href="#contact"
            className="btn-secondary px-8 py-4 rounded-xl font-space font-semibold text-sm tracking-wide"
          >
            {heroConfig.ctaSecondary}
          </a>
        </div>

        {/* Stack Tecnológico - Iconos flotantes */}
        <div
          className={cn(
            'transition-all duration-1000',
            isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ transitionDelay: '1000ms' }}
        >
          <p className="text-label text-[#A7B0BC] mb-8">STACK TECNOLÓGICO</p>
          
          {/* Icons Grid */}
          <div className="flex flex-wrap justify-center gap-4 md:gap-6 lg:gap-8">
            {techIconsConfig.map((tech, index) => (
              <div
                key={tech.name}
                className="animate-float"
                style={{
                  animationDelay: `${index * 0.5}s`,
                  animationDuration: `${4 + index * 0.5}s`,
                }}
              >
                <FloatingKey
                  name={tech.name}
                  icon={tech.icon}
                  color={tech.color}
                  glowColor={tech.glowColor}
                  description={tech.description}
                  delay={index * 0.1}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Role labels on sides */}
      {heroConfig.roles[0] && (
        <div
          className={cn(
            'absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 transition-all duration-1000 hidden md:block',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '1200ms' }}
        >
          <span 
            className="text-label text-[#A7B0BC]"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}
          >
            {heroConfig.roles[0]}
          </span>
        </div>
      )}
      
      {heroConfig.roles[1] && (
        <div
          className={cn(
            'absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 transition-all duration-1000 hidden md:block',
            isLoaded ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '1300ms' }}
        >
          <span 
            className="text-label text-[#A7B0BC]"
            style={{ writingMode: 'vertical-rl', textOrientation: 'mixed', transform: 'rotate(180deg)' }}
          >
            {heroConfig.roles[1]}
          </span>
        </div>
      )}

      {/* Scroll indicator */}
      <div
        className={cn(
          'absolute bottom-8 left-1/2 -translate-x-1/2 z-20 transition-all duration-1000 cursor-pointer',
          isLoaded ? 'opacity-100' : 'opacity-0'
        )}
        style={{ transitionDelay: '1400ms' }}
        onClick={scrollToAbout}
      >
        <div className="flex flex-col items-center gap-2 text-[#A7B0BC] hover:text-[#39FF14] transition-colors">
          <span className="text-xs font-mono uppercase tracking-widest">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none"
        style={{
          background: 'linear-gradient(to top, #05060B 0%, transparent 100%)',
        }}
      />
    </section>
  );
}
