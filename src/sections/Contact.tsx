import { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';
import { contactConfig } from '@/config';
import { Mail, Phone, MapPin, Send, Facebook, Instagram, Music } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  Music,
};

export function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
    
    // Reset submitted state after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full py-24 lg:py-32"
    >
      {/* Background glow */}
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-[#39FF14]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/4 right-0 w-[400px] h-[400px] bg-[#2EEEFE]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <div
            className={cn(
              'text-label text-[#39FF14] mb-4 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
            )}
          >
            {contactConfig.label}
          </div>
          <h2
            className={cn(
              'font-space font-bold text-3xl md:text-4xl lg:text-5xl text-white mb-6 transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '100ms' }}
          >
            {contactConfig.headline}
          </h2>
          <p
            className={cn(
              'text-body text-lg max-w-2xl mx-auto transition-all duration-700',
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
            )}
            style={{ transitionDelay: '200ms' }}
          >
            {contactConfig.description}
          </p>
        </div>

        {/* Contact Grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          {/* Form */}
          <div
            className={cn(
              'transition-all duration-1000',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="glass-card rounded-2xl p-8">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name */}
                <div>
                  <label className="block text-sm font-medium text-[#A7B0BC] mb-2">
                    {contactConfig.formFields.name}
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="input-futuristic"
                    placeholder="Tu nombre"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-medium text-[#A7B0BC] mb-2">
                    {contactConfig.formFields.email}
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="input-futuristic"
                    placeholder="tu@email.com"
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium text-[#A7B0BC] mb-2">
                    {contactConfig.formFields.message}
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-futuristic textarea-futuristic"
                    placeholder="Cuéntame sobre tu proyecto..."
                    required
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={cn(
                    'btn-primary w-full flex items-center justify-center gap-2 py-4 rounded-xl',
                    isSubmitting && 'opacity-70 cursor-not-allowed'
                  )}
                >
                  {isSubmitting ? (
                    <div className="w-5 h-5 border-2 border-[#05060B] border-t-transparent rounded-full animate-spin" />
                  ) : submitted ? (
                    <>¡Mensaje enviado!</>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      {contactConfig.submitButton}
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>

          {/* Contact Info */}
          <div
            className={cn(
              'space-y-6 transition-all duration-1000',
              isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
            style={{ transitionDelay: '400ms' }}
          >
            {/* Info Card */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-space font-bold text-xl text-white mb-6">
                Información de contacto
              </h3>

              <div className="space-y-4">
                {/* Email */}
                <a
                  href={`mailto:${contactConfig.contactInfo.email}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass-light hover:border-[#39FF14]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#39FF14]/10 flex items-center justify-center text-[#39FF14] group-hover:scale-110 transition-transform">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A7B0BC]">Email</div>
                    <div className="text-white font-medium">{contactConfig.contactInfo.email}</div>
                  </div>
                </a>

                {/* Phone */}
                <a
                  href={`tel:${contactConfig.contactInfo.phone}`}
                  className="flex items-center gap-4 p-4 rounded-xl glass-light hover:border-[#39FF14]/30 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#2EEEFE]/10 flex items-center justify-center text-[#2EEEFE] group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A7B0BC]">Teléfono</div>
                    <div className="text-white font-medium">{contactConfig.contactInfo.phone}</div>
                  </div>
                </a>

                {/* Location */}
                <div className="flex items-center gap-4 p-4 rounded-xl glass-light">
                  <div className="w-12 h-12 rounded-xl bg-[#B56BFF]/10 flex items-center justify-center text-[#B56BFF]">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="text-sm text-[#A7B0BC]">Ubicación</div>
                    <div className="text-white font-medium">{contactConfig.contactInfo.location}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-8">
              <h3 className="font-space font-bold text-xl text-white mb-6">
                Sígueme
              </h3>

              <div className="flex gap-4">
                {contactConfig.socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-xl glass-light flex items-center justify-center text-[#A7B0BC] hover:text-[#39FF14] hover:border-[#39FF14]/30 transition-all hover:scale-110"
                    aria-label={link.name}
                  >
                    {getIcon(link.icon)}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA Card */}
            <div className="glass-card rounded-2xl p-8 relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#39FF14]/10 rounded-full blur-2xl" />
              <div className="relative z-10">
                <h3 className="font-space font-bold text-lg text-white mb-2">
                  ¿Tienes una idea?
                </h3>
                <p className="text-body text-sm mb-4">
                  Hablemos sobre cómo puedo ayudarte a hacerla realidad.
                </p>
                <a
                  href={`mailto:${contactConfig.contactInfo.email}`}
                  className="text-[#39FF14] text-sm font-medium hover:underline inline-flex items-center gap-1"
                >
                  Enviar email directo
                  <Send className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
