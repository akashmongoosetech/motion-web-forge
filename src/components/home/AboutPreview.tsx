
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';

const features = [
  'Experienced team of developers',
  'Custom software solutions',
  'Agile development methodology',
  'Ongoing technical support',
];

const AboutPreview = () => {
  return (
    <section className="py-20 overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2 relative">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-blue-500/10 rounded-2xl rotate-3"></div>
              <div className="relative bg-card rounded-2xl shadow-xl overflow-hidden border border-border">
                <img 
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=1470&auto=format&fit=crop"
                  alt="Our team collaborating"
                  className="w-full h-auto object-cover aspect-video"
                />
              </div>
            </div>

            <div className="absolute -top-6 -right-6">
              <div className="animate-float">
                <div className="flex items-center gap-2 bg-card shadow-lg rounded-xl p-4 border border-border">
                  <span className="font-semibold text-primary">10+ Years Experience</span>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-6">
              <div className="animate-float" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2 bg-card shadow-lg rounded-xl p-4 border border-border">
                  <span className="font-semibold text-primary">200+ Projects Delivered</span>
                </div>
              </div>
            </div>
          </div>

          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              About <span className="text-gradient">MotionWebForge</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              Founded in 2014, MotionWebForge has been at the forefront of digital innovation, 
              helping businesses of all sizes transform their ideas into powerful digital solutions.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start gap-2">
                  <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
            
            <p className="text-muted-foreground mb-8">
              Our mission is to deliver exceptional software solutions that drive business growth, 
              improve operational efficiency, and create outstanding user experiences.
            </p>
            
            <Button asChild size="lg" className="rounded-full px-8">
              <Link to="/about">Learn More About Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;
