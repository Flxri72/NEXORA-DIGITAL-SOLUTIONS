import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { aboutConfig } from '@/config';
import { Download, Code, Bot, Zap } from 'lucide-react';

export function About() {
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
      id="about"
      className="relative w-full min-h-screen py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Image Grid */}
          <div
            className={cn(
              'relative transition-all duration-1000',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-16'
            )}
          >
            <div className="grid grid-cols-2 gap-4">
              {aboutConfig.images.slice(0, 4).map((image, index) => (
                <div
                  key={index}
                  className={cn(
                    'relative aspect-[4/5] rounded-2xl overflow-hidden glass-card',
                    'transition-all duration-700',
                    isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                  )}
                  style={{ transitionDelay: `${200 + index * 100}ms` }}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback to gradient if image fails
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = `linear-gradient(135deg, ${
                          ['#306998', '#E34F26', '#F7DF1E', '#61DAFB'][index]
                        }40, transparent)`;
                      }
                    }}
                  />
                  {/* Overlay icon */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    {[<Code key="code" />, <Zap key="zap" />, <Bot key="bot" />, <Code key="code2" />][index]}
                  </div>
                </div>
              ))}
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border border-[#39FF14]/20 rounded-full" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 border border-[#2EEEFE]/20 rounded-full" />
          </div>

          {/* Right: Content */}
          <div className="space-y-8">
            {/* Label */}
            <div
              className={cn(
                'text-label text-[#39FF14] transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              )}
              style={{ transitionDelay: '100ms' }}
            >
              {aboutConfig.label}
            </div>

            {/* Headline */}
            <h2
              className={cn(
                'font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white leading-tight transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '200ms' }}
            >
              {aboutConfig.headline}
            </h2>

            {/* Description */}
            <p
              className={cn(
                'text-body text-lg leading-relaxed transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '300ms' }}
            >
              {aboutConfig.description}
            </p>

            {/* Stats */}
            <div
              className={cn(
                'grid grid-cols-3 gap-6 pt-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '400ms' }}
            >
              <div className="text-center">
                <div className="font-space font-bold text-3xl md:text-4xl text-[#39FF14]">
                  {aboutConfig.experienceValue}
                </div>
                <div className="text-sm text-[#A7B0BC] mt-1 whitespace-pre-line">
                  {aboutConfig.experienceLabel}
                </div>
              </div>
              {aboutConfig.stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="font-space font-bold text-3xl md:text-4xl text-[#2EEEFE]">
                    {stat.value}
                  </div>
                  <div className="text-sm text-[#A7B0BC] mt-1 whitespace-pre-line">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div
              className={cn(
                'pt-4 transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              )}
              style={{ transitionDelay: '500ms' }}
            >
              <button className="btn-primary flex items-center gap-3 px-6 py-4 rounded-xl">
                <Download className="w-5 h-5" />
                <span>{aboutConfig.cta}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
