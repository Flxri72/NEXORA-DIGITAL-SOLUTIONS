import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { portfolioConfig } from '@/config';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';

export function Projects() {
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

  const featuredProject = portfolioConfig.projects.find(p => p.featured);
  const otherProjects = portfolioConfig.projects.filter(p => !p.featured);

  return (
    <section
      ref={sectionRef}
      id="projects"
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
            {portfolioConfig.label}
          </div>
          <h2
            className={cn(
              'font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {portfolioConfig.heading}
          </h2>
          <p
            className={cn(
              'text-body text-lg max-w-2xl mx-auto transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {portfolioConfig.description}
          </p>
        </div>

        {/* Featured Project */}
        {featuredProject && (
          <div
            className={cn(
              'mb-16 transition-all duration-1000',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
            )}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="card-project group">
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image */}
                <div className="relative aspect-video lg:aspect-auto overflow-hidden">
                  <img
                    src={featuredProject.image}
                    alt={featuredProject.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const parent = target.parentElement;
                      if (parent) {
                        parent.style.background = 'linear-gradient(135deg, #30699840, #39FF1420)';
                      }
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#0B0E16]/50 lg:block hidden" />
                </div>

                {/* Content */}
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <span className="text-label text-[#2EEEFE]">{featuredProject.category}</span>
                    <span className="text-[#A7B0BC] text-sm">•</span>
                    <span className="text-[#A7B0BC] text-sm">{featuredProject.year}</span>
                  </div>

                  <h3 className="font-space font-bold text-2xl md:text-3xl text-white mb-4">
                    {featuredProject.title}
                  </h3>

                  <p className="text-body mb-6 leading-relaxed">
                    {featuredProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {featuredProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs font-mono bg-[#39FF14]/10 text-[#39FF14] border border-[#39FF14]/20"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* CTAs */}
                  <div className="flex flex-wrap gap-4">
                    <a
                      href={featuredProject.demoLink}
                      className="btn-primary flex items-center gap-2 px-5 py-3 rounded-lg text-sm"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Ver demo
                    </a>
                    <a
                      href={featuredProject.codeLink}
                      className="btn-secondary flex items-center gap-2 px-5 py-3 rounded-lg text-sm"
                    >
                      <Github className="w-4 h-4" />
                      Ver código
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {otherProjects.map((project, index) => (
            <div
              key={project.title}
              className={cn(
                'card-project group transition-all duration-700',
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
              )}
              style={{ transitionDelay: `${400 + index * 100}ms` }}
            >
              {/* Image */}
              <div className="relative aspect-video overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.style.background = `linear-gradient(135deg, ${
                        ['#E34F26', '#F7DF1E', '#3178C6', '#61DAFB'][index % 4]
                      }30, transparent)`;
                    }
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B0E16] via-transparent to-transparent" />
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-label text-[#2EEEFE] text-[10px]">{project.category}</span>
                  <span className="text-[#A7B0BC] text-xs">•</span>
                  <span className="text-[#A7B0BC] text-xs">{project.year}</span>
                </div>

                <h3 className="font-space font-bold text-xl text-white mb-2 group-hover:text-[#39FF14] transition-colors">
                  {project.title}
                </h3>

                <p className="text-body text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.slice(0, 2).map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-full text-[10px] font-mono bg-white/5 text-[#A7B0BC] border border-white/10"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4">
                  <a
                    href={project.demoLink}
                    className="text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors flex items-center gap-1"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Demo
                  </a>
                  <a
                    href={project.codeLink}
                    className="text-sm text-[#A7B0BC] hover:text-[#39FF14] transition-colors flex items-center gap-1"
                  >
                    <Github className="w-4 h-4" />
                    Código
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Card */}
        <div
          className={cn(
            'mt-12 transition-all duration-700',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ transitionDelay: '800ms' }}
        >
          <div className="glass-card p-8 md:p-12 text-center relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-[#39FF14]/10 rounded-full blur-3xl" />
            
            <div className="relative z-10">
              <span className="text-label text-[#A7B0BC] mb-4 block">{portfolioConfig.cta.label}</span>
              <h3 className="font-space font-bold text-2xl md:text-3xl text-white mb-6">
                {portfolioConfig.cta.heading}
              </h3>
              <a
                href={portfolioConfig.cta.linkHref}
                className="inline-flex items-center gap-2 text-[#39FF14] hover:underline font-medium"
              >
                {portfolioConfig.cta.linkText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
