
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    content: 'MotionWebForge transformed our business with their exceptional web development services. Their attention to detail and innovative approach exceeded our expectations. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop',
    project: 'E-commerce Platform',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CTO, InnovateCorp',
    content: 'Working with MotionWebForge was an excellent experience. Their team is highly skilled, responsive, and delivered our mobile app ahead of schedule. We\'re already planning our next project with them.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop',
    project: 'Healthcare Mobile App',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthGenius',
    content: 'The website MotionWebForge built for us has significantly improved our conversion rates and user engagement. Their UI/UX expertise is evident in every aspect of the design.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop',
    project: 'Marketing Website',
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'Founder, StartupBoost',
    content: 'MotionWebForge took our vague concept and turned it into a stunning, functional application. Their team asked the right questions and provided valuable insights throughout the development process.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=1470&auto=format&fit=crop',
    project: 'SaaS Dashboard',
  },
  {
    id: 5,
    name: 'Lisa Wang',
    role: 'Product Manager, TechInnovate',
    content: 'We\'ve worked with several development agencies in the past, but MotionWebForge stands out for their technical expertise and commitment to quality. They don\'t just build what you ask for—they improve upon your ideas.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1361&auto=format&fit=crop',
    project: 'Inventory Management System',
  },
  {
    id: 6,
    name: 'James Wilson',
    role: 'Director of IT, Enterprise Solutions',
    content: 'MotionWebForge helped us modernize our legacy systems with minimal disruption to our operations. Their team took the time to understand our complex requirements and delivered a solution that exceeded our expectations.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1374&auto=format&fit=crop',
    project: 'Enterprise Software Migration',
  },
];

const clientLogos = [
  { name: 'TechVentures', logo: 'https://via.placeholder.com/150x80?text=TechVentures' },
  { name: 'InnovateCorp', logo: 'https://via.placeholder.com/150x80?text=InnovateCorp' },
  { name: 'GrowthGenius', logo: 'https://via.placeholder.com/150x80?text=GrowthGenius' },
  { name: 'StartupBoost', logo: 'https://via.placeholder.com/150x80?text=StartupBoost' },
  { name: 'TechInnovate', logo: 'https://via.placeholder.com/150x80?text=TechInnovate' },
  { name: 'Enterprise Solutions', logo: 'https://via.placeholder.com/150x80?text=EnterpriseSolutions' },
];

const Testimonials = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  return (
    <Layout>
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Client Testimonials</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Don't just take our word for it. Read what our clients have to say about working with MotionWebForge.
            </p>
          </div>
        </div>

        {/* Client Logos */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            Trusted by Innovative Companies
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
            {clientLogos.map((client) => (
              <div key={client.name} className="flex justify-center">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="max-h-16 opacity-70 hover:opacity-100 transition-opacity"
                />
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials Grid */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card animate-fade-in">
                <div className="mb-6 flex justify-between items-center">
                  <div className="flex items-center gap-4">
                    <Avatar className="h-14 w-14 border-2 border-primary/20">
                      <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                      <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                    />
                  ))}
                </div>
                <blockquote className="text-lg italic mb-6">"{testimonial.content}"</blockquote>
                <div className="mt-auto pt-4 border-t border-border">
                  <p className="text-sm text-muted-foreground">
                    <strong>Project:</strong> {testimonial.project}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Google Reviews CTA */}
        <div className="bg-gradient-to-r from-primary/90 to-blue-600/90 py-16 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">See Our Reviews on Google</h2>
            <p className="mb-8 text-white/80 max-w-2xl mx-auto">
              Check out our verified Google Business reviews from satisfied clients around the world.
            </p>
            <a 
              href="https://www.google.com/business" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-white text-primary px-8 py-3 rounded-full font-medium hover:bg-white/90 transition-colors"
            >
              <span>Google Reviews</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <path d="M15 3h6v6" />
                <path d="m10 14 11-11" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Testimonials;
