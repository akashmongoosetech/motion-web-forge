
import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      const centerX = container.offsetWidth / 2;
      const centerY = container.offsetHeight / 2;
      const moveX = (clientX - centerX) / 25;
      const moveY = (clientY - centerY) / 25;

      const elements = container.querySelectorAll('.parallax-element');
      
      elements.forEach((el) => {
        const htmlEl = el as HTMLElement;
        const speed = parseFloat(htmlEl.getAttribute('data-speed') || '1');
        htmlEl.style.transform = `translate(${moveX * speed}px, ${moveY * speed}px)`;
      });
    };

    container.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative overflow-hidden bg-gradient-to-br from-background to-secondary/50 pt-20 md:pt-16"
    >
      {/* Background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
        <div className="parallax-element absolute top-1/4 right-1/4 w-72 h-72 rounded-full bg-primary/10 blur-3xl" data-speed="-1.5"></div>
        <div className="parallax-element absolute bottom-1/3 left-1/4 w-96 h-96 rounded-full bg-blue-500/10 blur-3xl" data-speed="1.2"></div>
        <div className="parallax-element absolute top-1/3 right-1/3 w-64 h-64 rounded-full bg-accent/10 blur-3xl" data-speed="-0.8"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 text-center lg:text-left">
            <h1 className="text-5xl md:text-6xl font-bold leading-tight md:leading-tight animate-slide-right">
              <span className="block">Where Innovation</span>
              <span className="text-gradient">Meets Excellence</span>
            </h1>
            
            <p className="mt-6 text-lg md:text-xl text-foreground/80 max-w-xl mx-auto lg:mx-0 animate-slide-right" style={{ animationDelay: '0.2s' }}>
              We craft cutting-edge software solutions that transform businesses. Our expert team delivers innovative, scalable, and user-centric digital experiences.
            </p>
            
            <div className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Get Started</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8 group">
                <Link to="/services" className="flex items-center gap-2">
                  Explore Services 
                  <ChevronRight className="size-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="lg:w-1/2 relative animate-scale-in">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-blue-500/20 rounded-2xl -rotate-6 scale-95"></div>
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-accent/20 rounded-2xl rotate-3 scale-95"></div>
              <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img 
                  src="https://images.unsplash.com/photo-1664575599736-c5197c684128?q=80&w=1470&auto=format&fit=crop"
                  alt="Software development team"
                  className="w-full h-auto object-cover aspect-video"
                  loading="eager"
                />
              </div>
            </div>

            <div className="absolute -bottom-6 -right-6 parallax-element" data-speed="1">
              <div className="bg-card shadow-lg rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm font-medium">Project Status: Live</span>
                </div>
              </div>
            </div>

            <div className="absolute -top-6 -left-6 parallax-element" data-speed="1.3">
              <div className="bg-card shadow-lg rounded-xl p-4 border border-border">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm font-medium">Client Satisfaction: 100%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-background to-transparent"></div>
    </div>
  );
};

export default HeroSection;
