import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { testimonialsConfig } from '@/config';
import { Quote, Star, ChevronLeft, ChevronRight } from 'lucide-react';

export function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

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

  // Auto-advance testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonialsConfig.testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, []);

  const goToPrev = () => {
    setActiveIndex((prev) => (prev - 1 + testimonialsConfig.testimonials.length) % testimonialsConfig.testimonials.length);
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev + 1) % testimonialsConfig.testimonials.length);
  };

  return (
    <section
      ref={sectionRef}
      id="testimonials"
      className="relative w-full py-24 lg:py-32 overflow-hidden"
    >
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={cn(
              'text-label text-[#39FF14] mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {testimonialsConfig.label}
          </div>
          <h2
            className={cn(
              'font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {testimonialsConfig.heading}
          </h2>
        </div>

        {/* Testimonial Slider */}
        <div
          className={cn(
            'relative transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ transitionDelay: '200ms' }}
        >
          {/* Main Quote Card */}
          <div className="glass-card rounded-3xl p-8 md:p-12 relative">
            {/* Quote Icon */}
            <div className="absolute -top-6 left-8 w-12 h-12 rounded-full bg-[#39FF14] flex items-center justify-center">
              <Quote className="w-6 h-6 text-[#05060B]" />
            </div>

            {/* Testimonials */}
            <div className="relative min-h-[280px] md:min-h-[240px]">
              {testimonialsConfig.testimonials.map((testimonial, index) => (
                <div
                  key={testimonial.author}
                  className={cn(
                    'absolute inset-0 transition-all duration-500',
                    index === activeIndex
                      ? 'opacity-100 translate-x-0'
                      : 'opacity-0 translate-x-8 pointer-events-none'
                  )}
                >
                  {/* Stars */}
                  <div className="flex gap-1 mb-6">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-5 h-5 fill-[#39FF14] text-[#39FF14]" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="text-xl md:text-2xl text-white leading-relaxed mb-8 font-light">
                    "{testimonial.quote}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-4">
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#39FF14]/30 to-[#2EEEFE]/30 flex items-center justify-center text-white font-bold text-lg">
                      {testimonial.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-space font-semibold text-white">
                        {testimonial.author}
                      </div>
                      <div className="text-sm text-[#A7B0BC]">
                        {testimonial.role}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-between mt-8 pt-6 border-t border-white/10">
              {/* Dots */}
              <div className="flex gap-2">
                {testimonialsConfig.testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      'w-2 h-2 rounded-full transition-all duration-300',
                      index === activeIndex
                        ? 'w-8 bg-[#39FF14]'
                        : 'bg-white/20 hover:bg-white/40'
                    )}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>

              {/* Arrows */}
              <div className="flex gap-2">
                <button
                  onClick={goToPrev}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={goToNext}
                  className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:border-[#39FF14] hover:text-[#39FF14] transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* All testimonials cards (desktop) */}
        <div
          className={cn(
            'hidden lg:grid grid-cols-3 gap-6 mt-8 transition-all duration-1000',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'
          )}
          style={{ transitionDelay: '400ms' }}
        >
          {testimonialsConfig.testimonials.map((testimonial, index) => (
            <button
              key={testimonial.author}
              onClick={() => setActiveIndex(index)}
              className={cn(
                'glass-light rounded-xl p-4 text-left transition-all duration-300',
                index === activeIndex
                  ? 'border-[#39FF14]/50 bg-[#39FF14]/5'
                  : 'border-transparent hover:border-white/10'
              )}
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#39FF14]/30 to-[#2EEEFE]/30 flex items-center justify-center text-white font-bold text-sm">
                  {testimonial.author.charAt(0)}
                </div>
                <div>
                  <div className="font-space font-medium text-white text-sm">
                    {testimonial.author}
                  </div>
                  <div className="text-xs text-[#A7B0BC]">
                    {testimonial.company}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
