
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Globe, Smartphone, Palette, BarChart, Server } from 'lucide-react';

const services = [
  {
    id: 1,
    title: 'Web Development',
    description: 'Custom web applications built with modern frameworks and cutting-edge technologies.',
    icon: <Code className="h-8 w-8" />,
    link: '/services/web-development',
  },
  {
    id: 2,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android devices.',
    icon: <Smartphone className="h-8 w-8" />,
    link: '/services/mobile-development',
  },
  {
    id: 3,
    title: 'UI/UX Design',
    description: 'User-centered design that enhances user experience and engagement.',
    icon: <Palette className="h-8 w-8" />,
    link: '/services/ui-ux-design',
  },
  {
    id: 4,
    title: 'Digital Marketing',
    description: 'Strategic marketing campaigns to boost your online presence and drive growth.',
    icon: <BarChart className="h-8 w-8" />,
    link: '/services/digital-marketing',
  },
  {
    id: 5,
    title: 'Web Hosting',
    description: 'Reliable and secure hosting solutions for your websites and applications.',
    icon: <Server className="h-8 w-8" />,
    link: '/services/web-hosting',
  },
  {
    id: 6,
    title: 'SEO Optimization',
    description: 'Improve your search engine rankings and drive more traffic to your website.',
    icon: <Globe className="h-8 w-8" />,
    link: '/services/seo-optimization',
  },
];

const ServicesSection = () => {
  const [hoveredId, setHoveredId] = useState<number | null>(null);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive range of digital services to help your business grow and succeed in the digital landscape.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.id}
              className="service-card h-full"
              onMouseEnter={() => setHoveredId(service.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="service-card-content relative z-10 flex flex-col h-full p-8 bg-card transition-colors duration-300">
                <div className="flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 text-primary mb-6">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="mb-6 text-muted-foreground">{service.description}</p>
                <div className="mt-auto pt-4">
                  <Button asChild variant="outline" size="sm" className="group">
                    <Link to={service.link} className="flex items-center gap-1">
                      Learn More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:translate-x-1"
                      >
                        <path d="M5 12h14" />
                        <path d="m12 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
