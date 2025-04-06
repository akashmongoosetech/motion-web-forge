
import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechVentures',
    content: 'MotionWebForge transformed our business with their exceptional web development services. Their attention to detail and innovative approach exceeded our expectations. Highly recommended!',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'David Chen',
    role: 'CTO, InnovateCorp',
    content: 'Working with MotionWebForge was an excellent experience. Their team is highly skilled, responsive, and delivered our mobile app ahead of schedule. We\'re already planning our next project with them.',
    rating: 5,
    avatar: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1374&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthGenius',
    content: 'The website MotionWebForge built for us has significantly improved our conversion rates and user engagement. Their UI/UX expertise is evident in every aspect of the design.',
    rating: 4,
    avatar: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1376&auto=format&fit=crop',
  },
];

const TestimonialsSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prevIndex) => (prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setActiveIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it — hear from some of our satisfied clients.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="testimonial-carousel overflow-hidden">
            <div 
              className="testimonial-track flex transition-transform duration-500 ease-in-out"
              style={{ transform: `translateX(-${activeIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="testimonial-item w-full flex-shrink-0 px-4">
                  <div className="testimonial-card">
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
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <Star 
                            key={i} 
                            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`}
                          />
                        ))}
                      </div>
                    </div>
                    <blockquote className="text-lg italic mb-6">"{testimonial.content}"</blockquote>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-8 flex justify-center gap-2">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActiveIndex(i)}
                className={`h-3 w-3 rounded-full transition-colors ${
                  i === activeIndex ? 'bg-primary' : 'bg-gray-300 dark:bg-gray-600'
                }`}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <button
            onClick={handlePrev}
            className="absolute top-1/2 -left-4 md:-left-10 -translate-y-1/2 h-10 w-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            aria-label="Previous testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m15 18-6-6 6-6" />
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="absolute top-1/2 -right-4 md:-right-10 -translate-y-1/2 h-10 w-10 rounded-full bg-background border border-border shadow-md flex items-center justify-center text-foreground hover:bg-secondary transition-colors"
            aria-label="Next testimonial"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="m9 18 6-6-6-6" />
            </svg>
          </button>
        </div>

        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-6">
            Read more client testimonials on our review platforms.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild variant="outline" size="lg" className="rounded-full px-8">
              <Link to="/testimonials">View All Testimonials</Link>
            </Button>
            <Button asChild size="lg" className="rounded-full px-8">
              <a 
                href="https://www.google.com/business" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <span>See Reviews on Google</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                  <path d="M15 3h6v6" />
                  <path d="m10 14 11-11" />
                </svg>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
