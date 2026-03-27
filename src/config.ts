// Site configuration - NEXORA DIGITAL SOLUTIONS
// Futuristic portfolio for Juan David Florian Amador

export interface SiteConfig {
  language: string;
  title: string;
  description: string;
}

export const siteConfig: SiteConfig = {
  language: "es",
  title: "NEXORA DIGITAL SOLUTIONS | Juan David Florian Amador",
  description: "Especialista en automatización de procesos y desarrollo full-stack. Construyo bots, sistemas empresariales y soluciones digitales que optimizan tareas y aumentan la eficiencia.",
};

// Navigation configuration
export interface NavLink {
  label: string;
  href: string;
}

export interface NavigationConfig {
  logo: string;
  links: NavLink[];
  contactLabel: string;
  contactHref: string;
}

export const navigationConfig: NavigationConfig = {
  logo: "NEXORA",
  links: [
    { label: "Inicio", href: "#hero" },
    { label: "Sobre mí", href: "#about" },
    { label: "Habilidades", href: "#skills" },
    { label: "Proyectos", href: "#projects" },
    { label: "Servicios", href: "#services" },
    { label: "Contacto", href: "#contact" },
  ],
  contactLabel: "Hablemos",
  contactHref: "#contact",
};

// Hero section configuration
export interface HeroConfig {
  name: string;
  roles: string[];
  backgroundImage: string;
  headline: string;
  subheadline: string;
  ctaPrimary: string;
  ctaSecondary: string;
}

export const heroConfig: HeroConfig = {
  name: "NEXORA",
  roles: ["Full-Stack Developer", "Automation Specialist"],
  backgroundImage: "/images/hero-bg.jpg",
  headline: "ESPECIALISTA EN AUTOMATIZACIÓN",
  subheadline: "Desarrollo soluciones tecnológicas que optimizan tareas, reducen costos y aumentan la eficiencia empresarial.",
  ctaPrimary: "Ver proyectos",
  ctaSecondary: "Contactar",
};

// Floating Tech Icons configuration
export interface TechIcon {
  name: string;
  icon: string;
  color: string;
  glowColor: string;
  description: string;
}

export const techIconsConfig: TechIcon[] = [
  {
    name: "Python",
    icon: "/images/icon-python.png",
    color: "#306998",
    glowColor: "rgba(48, 105, 152, 0.6)",
    description: "Automatización, análisis de datos y backend.",
  },
  {
    name: "HTML5",
    icon: "/images/icon-html.png",
    color: "#E34F26",
    glowColor: "rgba(227, 79, 38, 0.6)",
    description: "Estructura web semántica y moderna.",
  },
  {
    name: "JavaScript",
    icon: "/images/icon-javascript.png",
    color: "#F7DF1E",
    glowColor: "rgba(247, 223, 30, 0.6)",
    description: "Interactividad y lógica del frontend.",
  },
  {
    name: "TypeScript",
    icon: "/images/icon-typescript.png",
    color: "#3178C6",
    glowColor: "rgba(49, 120, 198, 0.6)",
    description: "Tipado estático para escalabilidad.",
  },
  {
    name: "React",
    icon: "/images/icon-react.png",
    color: "#61DAFB",
    glowColor: "rgba(97, 218, 251, 0.6)",
    description: "Interfaces dinámicas y componentes.",
  },
  {
    name: "Node.js",
    icon: "/images/icon-nodejs.png",
    color: "#339933",
    glowColor: "rgba(51, 153, 51, 0.6)",
    description: "JavaScript en el servidor.",
  },
];

// About section configuration
export interface AboutStat {
  value: string;
  label: string;
}

export interface AboutImage {
  src: string;
  alt: string;
}

export interface AboutConfig {
  label: string;
  headline: string;
  description: string;
  experienceValue: string;
  experienceLabel: string;
  stats: AboutStat[];
  images: AboutImage[];
  cta: string;
}

export const aboutConfig: AboutConfig = {
  label: "SOBRE MÍ",
  headline: "Juan David Florian Amador",
  description: "Soy desarrollador enfocado en automatización de procesos y soluciones full-stack. Construyo bots, sistemas empresariales y experiencias digitales que ahorran tiempo y escalan. Mi pasión es transformar problemas complejos en soluciones elegantes y eficientes.",
  experienceValue: "3+",
  experienceLabel: "Años de\nExperiencia",
  stats: [
    { value: "15+", label: "Proyectos\nCompletados" },
    { value: "100%", label: "Compromiso\nGarantizado" },
  ],
  images: [
    { src: "/images/about-1.jpg", alt: "Juan David trabajando" },
    { src: "/images/about-2.jpg", alt: "Desarrollo de código" },
    { src: "/images/about-3.jpg", alt: "Automatización" },
    { src: "/images/about-4.jpg", alt: "Soluciones digitales" },
  ],
  cta: "Descargar CV",
};

// Skills section configuration
export interface SkillsConfig {
  label: string;
  headline: string;
  description: string;
  skills: string[];
}

export const skillsConfig: SkillsConfig = {
  label: "HABILIDADES",
  headline: "Stack Tecnológico",
  description: "Tecnologías y herramientas que uso para construir soluciones robustas y escalables.",
  skills: [
    "Python",
    "JavaScript / TypeScript",
    "React & Next.js",
    "Node.js & Express",
    "PostgreSQL & MongoDB",
    "Git & GitHub",
    "APIs REST & GraphQL",
    "Automatización de procesos",
  ],
};

// Services section configuration
export interface ServiceItem {
  iconName: string;
  title: string;
  description: string;
  image: string;
}

export interface ServicesConfig {
  label: string;
  heading: string;
  description: string;
  services: ServiceItem[];
}

export const servicesConfig: ServicesConfig = {
  label: "SERVICIOS",
  heading: "Soluciones Digitales",
  description: "Servicios diseñados para escalar tu negocio y optimizar procesos.",
  services: [
    {
      iconName: "Code",
      title: "Desarrollo Web Full-Stack",
      description: "Aplicaciones modernas con React, Node.js y bases de datos escalables. Desde landing pages hasta sistemas empresariales complejos.",
      image: "/images/service-web.jpg",
    },
    {
      iconName: "Workflow",
      title: "Automatización de Procesos",
      description: "Reduzco tareas repetitivas con scripts, integraciones y flujos inteligentes que ahorran tiempo y recursos.",
      image: "/images/service-automation.jpg",
    },
    {
      iconName: "Bot",
      title: "Bots y Chatbots",
      description: "Atención automatizada 24/7 para WhatsApp, Telegram o web. Respuestas inteligentes y personalizadas.",
      image: "/images/service-bot.jpg",
    },
  ],
};

// Portfolio section configuration
export interface ProjectItem {
  title: string;
  category: string;
  year: string;
  image: string;
  featured?: boolean;
  description: string;
  tags: string[];
  demoLink: string;
  codeLink: string;
}

export interface PortfolioCTA {
  label: string;
  heading: string;
  linkText: string;
  linkHref: string;
}

export interface PortfolioConfig {
  label: string;
  heading: string;
  description: string;
  projects: ProjectItem[];
  cta: PortfolioCTA;
  viewAllLabel: string;
}

export const portfolioConfig: PortfolioConfig = {
  label: "PROYECTOS",
  heading: "Trabajos Destacados",
  description: "Una selección de proyectos que demuestran mi experiencia en desarrollo y automatización.",
  projects: [
    {
      title: "Sistema de Facturación",
      category: "Web App",
      year: "2024",
      image: "/images/project-facturacion.jpg",
      featured: true,
      description: "Plataforma web para gestión de facturas, clientes y reportes en tiempo real. Diseñada para PYMES con enfoque en velocidad y claridad.",
      tags: ["React", "Node.js", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Bot de WhatsApp",
      category: "Automatización",
      year: "2024",
      image: "/images/project-bot.jpg",
      description: "Bot inteligente para atención al cliente con respuestas automáticas, pedidos y seguimiento.",
      tags: ["Python", "WhatsApp API", "MongoDB"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Dashboard Analytics",
      category: "Data Visualization",
      year: "2023",
      image: "/images/project-dashboard.jpg",
      description: "Panel de control con métricas en tiempo real, gráficos interactivos y reportes automatizados.",
      tags: ["React", "D3.js", "Firebase"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "E-commerce API",
      category: "Backend",
      year: "2023",
      image: "/images/project-api.jpg",
      description: "API REST completa para tienda online con autenticación, pagos y gestión de inventario.",
      tags: ["Node.js", "Express", "PostgreSQL"],
      demoLink: "#",
      codeLink: "#",
    },
    {
      title: "Automatización de Reportes",
      category: "Automatización",
      year: "2024",
      image: "/images/project-reports.jpg",
      description: "Sistema que genera y envía reportes automáticos desde múltiples fuentes de datos.",
      tags: ["Python", "Pandas", "SMTP"],
      demoLink: "#",
      codeLink: "#",
    },
  ],
  cta: {
    label: "¿Tienes un proyecto?",
    heading: "Trabajemos juntos",
    linkText: "Contactar ahora",
    linkHref: "#contact",
  },
  viewAllLabel: "Ver todos los proyectos",
};

// Testimonials section configuration
export interface TestimonialItem {
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  rating: number;
}

export interface TestimonialsConfig {
  label: string;
  heading: string;
  testimonials: TestimonialItem[];
}

export const testimonialsConfig: TestimonialsConfig = {
  label: "TESTIMONIOS",
  heading: "Lo que dicen mis clientes",
  testimonials: [
    {
      quote: "Juan David entregó un sistema que redujo nuestro tiempo de facturación a la mitad. Rápido, claro y confiable. Superó todas nuestras expectativas.",
      author: "María López",
      role: "CEO",
      company: "TechStart",
      image: "/images/testimonial-1.jpg",
      rating: 5,
    },
    {
      quote: "El bot de WhatsApp transformó nuestra atención al cliente. Ahora respondemos 24/7 sin esfuerzo. Increíble trabajo.",
      author: "Carlos Ruiz",
      role: "Director de Operaciones",
      company: "ServiPlus",
      image: "/images/testimonial-2.jpg",
      rating: 5,
    },
    {
      quote: "Profesional, comprometido y con gran conocimiento técnico. Su automatización nos ahorra 20 horas semanales.",
      author: "Ana Martínez",
      role: "Gerente",
      company: "DataFlow",
      image: "/images/testimonial-3.jpg",
      rating: 5,
    },
  ],
};

// CTA section configuration
export interface CTAConfig {
  tags: string[];
  heading: string;
  description: string;
  buttonText: string;
  buttonHref: string;
  email: string;
  backgroundImage: string;
}

export const ctaConfig: CTAConfig = {
  tags: ["Full-Stack Developer", "Automation Specialist", "Bot Developer"],
  heading: "¿Listo para automatizar tu negocio?",
  description: "Cuéntame tu idea y te ayudo a convertirla en realidad. Respuesta garantizada en menos de 24 horas.",
  buttonText: "Iniciar proyecto",
  buttonHref: "#contact",
  email: "hola@nexora.dev",
  backgroundImage: "/images/cta-bg.jpg",
};

// Contact section configuration
export interface ContactConfig {
  label: string;
  headline: string;
  description: string;
  formFields: {
    name: string;
    email: string;
    message: string;
  };
  submitButton: string;
  contactInfo: {
    email: string;
    phone: string;
    location: string;
  };
  socialLinks: {
    name: string;
    url: string;
    icon: string;
  }[];
}

export const contactConfig: ContactConfig = {
  label: "CONTACTO",
  headline: "Hablemos",
  description: "Cuéntame tu idea. Respondo en menos de 24 horas.",
  formFields: {
    name: "Nombre",
    email: "Email",
    message: "Mensaje",
  },
  submitButton: "Enviar mensaje",
  contactInfo: {
    email: "hola@nexora.dev",
    phone: "+57 300 000 0000",
    location: "Colombia",
  },
  socialLinks: [
    { name: "Facebook", url: "https://facebook.com", icon: "Facebook" },
    { name: "Instagram", url: "https://instagram.com", icon: "Instagram" },
    { name: "TikTok", url: "https://tiktok.com", icon: "Music" },
  ],
};

// Footer section configuration
export interface FooterLinkColumn {
  title: string;
  links: { label: string; href: string }[];
}

export interface SocialLink {
  iconName: string;
  href: string;
  label: string;
}

export interface FooterConfig {
  logo: string;
  description: string;
  columns: FooterLinkColumn[];
  socialLinks: SocialLink[];
  newsletterHeading: string;
  newsletterDescription: string;
  newsletterButtonText: string;
  newsletterPlaceholder: string;
  copyright: string;
  credit: string;
}

export const footerConfig: FooterConfig = {
  logo: "NEXORA",
  description: "Automatizando el futuro, optimizando el presente. Desarrollo soluciones tecnológicas que transforman negocios.",
  columns: [
    {
      title: "Navegación",
      links: [
        { label: "Inicio", href: "#hero" },
        { label: "Sobre mí", href: "#about" },
        { label: "Proyectos", href: "#projects" },
        { label: "Contacto", href: "#contact" },
      ],
    },
    {
      title: "Servicios",
      links: [
        { label: "Desarrollo Web", href: "#services" },
        { label: "Automatización", href: "#services" },
        { label: "Bots", href: "#services" },
        { label: "Consultoría", href: "#contact" },
      ],
    },
  ],
  socialLinks: [
    { iconName: "Facebook", href: "https://facebook.com", label: "Facebook" },
    { iconName: "Instagram", href: "https://instagram.com", label: "Instagram" },
    { iconName: "Music", href: "https://tiktok.com", label: "TikTok" },
  ],
  newsletterHeading: "Mantente actualizado",
  newsletterDescription: "Recibe consejos sobre automatización y desarrollo.",
  newsletterButtonText: "Suscribirse",
  newsletterPlaceholder: "tu@email.com",
  copyright: "© 2026 NEXORA DIGITAL SOLUTIONS. Todos los derechos reservados.",
  credit: "Diseñado y desarrollado por Juan David Florian Amador",
};
