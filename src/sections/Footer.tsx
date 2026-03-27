import { useState } from 'react';
import { footerConfig } from '@/config';
import { Send, Facebook, Instagram, Music } from 'lucide-react';

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Facebook,
  Instagram,
  Music,
};

export function Footer() {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail('');
      setTimeout(() => setSubscribed(false), 3000);
    }
  };

  const getIcon = (iconName: string) => {
    const Icon = iconMap[iconName];
    return Icon ? <Icon className="w-5 h-5" /> : null;
  };

  return (
    <footer className="relative w-full py-16 lg:py-24 border-t border-white/5">
      {/* Top gradient line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#39FF14]/50 to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="grid lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="font-space font-bold text-2xl text-white mb-4">
              {footerConfig.logo}
            </div>
            <p className="text-body max-w-md mb-6">
              {footerConfig.description}
            </p>

            {/* Social Links */}
            <div className="flex gap-3">
              {footerConfig.socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-lg glass-light flex items-center justify-center text-[#A7B0BC] hover:text-[#39FF14] hover:border-[#39FF14]/30 transition-all"
                  aria-label={link.label}
                >
                  {getIcon(link.iconName)}
                </a>
              ))}
            </div>
          </div>

          {/* Link Columns */}
          {footerConfig.columns.map((column) => (
            <div key={column.title}>
              <h4 className="font-space font-semibold text-white mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-[#A7B0BC] hover:text-[#39FF14] transition-colors text-sm"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Newsletter */}
        <div className="glass-card rounded-2xl p-8 mb-12">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h4 className="font-space font-semibold text-white mb-2">
                {footerConfig.newsletterHeading}
              </h4>
              <p className="text-body text-sm">
                {footerConfig.newsletterDescription}
              </p>
            </div>
            <form onSubmit={handleSubscribe} className="flex gap-3">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={footerConfig.newsletterPlaceholder}
                className="input-futuristic flex-1"
                required
              />
              <button
                type="submit"
                className="btn-primary px-5 py-3 rounded-xl flex items-center gap-2"
              >
                {subscribed ? (
                  '¡Listo!'
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    <span className="hidden sm:inline">{footerConfig.newsletterButtonText}</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 pt-8 border-t border-white/5">
          <p className="text-[#A7B0BC] text-sm text-center md:text-left">
            {footerConfig.copyright}
          </p>
          <p className="text-[#A7B0BC]/60 text-xs">
            {footerConfig.credit}
          </p>
        </div>
      </div>
    </footer>
  );
}
