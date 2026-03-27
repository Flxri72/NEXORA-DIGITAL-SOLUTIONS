import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { skillsConfig } from '@/config';
import { Check, Sparkles } from 'lucide-react';

export function Skills() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="skills"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={cn(
              'text-label text-[#39FF14] mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {skillsConfig.label}
          </div>
          <h2
            className={cn(
              'font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {skillsConfig.headline}
          </h2>
          <p
            className={cn(
              'text-body text-lg max-w-2xl mx-auto transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {skillsConfig.description}
          </p>
        </div>

        {/* Skills Grid */}
        <div
          className={cn(
            'grid sm:grid-cols-2 gap-4 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          )}
          style={{ transitionDelay: '300ms' }}
        >
          {skillsConfig.skills.map((skill, index) => (
            <div
              key={skill}
              className={cn(
                'group flex items-center gap-4 p-5 rounded-xl glass-light transition-all duration-500',
                'hover:border-[#39FF14]/30 hover:bg-[#39FF14]/5 hover:shadow-[0_0_30px_rgba(57,255,20,0.1)]'
              )}
              style={{
                transitionDelay: `${400 + index * 50}ms`,
                opacity: isVisible ? 1 : 0,
                transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
              }}
            >
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#39FF14]/20 to-[#2EEEFE]/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                <Sparkles className="w-5 h-5 text-[#39FF14]" />
              </div>
              <span className="text-white font-medium text-lg group-hover:text-[#39FF14] transition-colors">
                {skill}
              </span>
              <Check className="w-5 h-5 text-[#39FF14] ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
          ))}
        </div>

        {/* Bottom decoration */}
        <div
          className={cn(
            'mt-16 flex justify-center transition-all duration-700',
            isVisible ? 'opacity-100' : 'opacity-0'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="flex items-center gap-4">
            <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#39FF14]/50" />
            <div className="w-2 h-2 rounded-full bg-[#39FF14] animate-pulse" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#39FF14]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
