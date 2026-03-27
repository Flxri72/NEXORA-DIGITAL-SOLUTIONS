import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { servicesConfig } from '@/config';
import { Code, Workflow, Bot } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Code,
  Workflow,
  Bot,
};

export function Services() {
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
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Dynamic icon component
  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-6 h-6" /> : null;
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative w-full py-24 lg:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={cn(
              'text-label text-[#39FF14] mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {servicesConfig.label}
          </div>
          <h2
            className={cn(
              'font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {servicesConfig.heading}
          </h2>
          <p
            className={cn(
              'text-body text-lg max-w-2xl mx-auto transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {servicesConfig.description}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {servicesConfig.services.map((service, index) => (
            <div
              key={service.title}
              className={cn(
                'group relative glass-card p-8 rounded-2xl transition-all duration-700',
                'hover:border-[#39FF14]/30 hover:shadow-[0_0_40px_rgba(57,255,20,0.1)]',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              )}
              style={{ transitionDelay: `${300 + index * 150}ms` }}
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#39FF14]/20 to-[#2EEEFE]/20 flex items-center justify-center mb-6 text-[#39FF14] group-hover:scale-110 transition-transform duration-300">
                {getIcon(service.iconName)}
              </div>

              {/* Title */}
              <h3 className="font-space font-bold text-xl text-white mb-4 group-hover:text-[#39FF14] transition-colors">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-body text-sm leading-relaxed">
                {service.description}
              </p>

              {/* Hover glow effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#39FF14]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

              {/* Corner accent */}
              <div className="absolute top-0 right-0 w-20 h-20 overflow-hidden rounded-tr-2xl">
                <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-[#39FF14]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
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
            <div className="w-2 h-2 rounded-full bg-[#39FF14]" />
            <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#39FF14]/50" />
          </div>
        </div>
      </div>
    </section>
  );
}
