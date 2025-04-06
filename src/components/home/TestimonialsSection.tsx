
import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Star, ArrowLeft, ArrowRight, Quote } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Johnson',
    role: 'CEO, TechStart',
    content: 'MotionWebForge transformed our business with their innovative solutions. Their team was professional, responsive, and delivered our project on time and within budget.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: 2,
    name: 'Michael Chen',
    role: 'CTO, InnovateCorp',
    content: 'Working with MotionWebForge was a game-changer for our company. Their expertise in web development and UX design helped us create a platform that our users love.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: 3,
    name: 'Emily Rodriguez',
    role: 'Marketing Director, GrowthBrand',
    content: 'The team at MotionWebForge exceeded our expectations. They didn\'t just build a website; they created a strategic digital presence that has significantly increased our conversion rates.',
    rating: 5,
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1287&auto=format&fit=crop',
  },
  {
    id: 4,
    name: 'David Wilson',
    role: 'Founder, EcoSolutions',
    content: 'MotionWebForge brought our vision to life with their creative approach and technical expertise. They were true partners throughout the process, and we couldn\'t be happier with the results.',
    rating: 4,
    image: 'https://images.unsplash.com/photo-1566492031773-4f4e44671857?q=80&w=1287&auto=format&fit=crop',
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const slideRef = useRef<HTMLDivElement>(null);

  const visibleTestimonials = 3;
  const maxIndex = testimonials.length - visibleTestimonials;

  const nextSlide = () => {
    if (currentIndex < maxIndex && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex + 1);
    }
  };

  const prevSlide = () => {
    if (currentIndex > 0 && !isAnimating) {
      setIsAnimating(true);
      setCurrentIndex(currentIndex - 1);
    }
  };

  useEffect(() => {
    const handleTransitionEnd = () => {
      setIsAnimating(false);
    };

    const slideElement = slideRef.current;
    slideElement?.addEventListener('transitionend', handleTransitionEnd);

    return () => {
      slideElement?.removeEventListener('transitionend', handleTransitionEnd);
    };
  }, []);

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <Star 
        key={index} 
        className={`h-4 w-4 ${index < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`} 
      />
    ));
  };

  return (
    <section className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Client <span className="text-gradient">Testimonials</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. Here's what our clients have to say about working with us.
          </p>
        </div>

        <div className="relative overflow-hidden">
          <div 
            ref={slideRef}
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentIndex * (100 / testimonials.length)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <div 
                key={testimonial.id} 
                className="testimonial-card min-w-[calc(100%/3-1rem)] md:min-w-[calc(100%/3-1rem)] p-6 mx-2"
                style={{ flex: `0 0 calc(100%/${visibleTestimonials} - 1rem)` }}
              >
                <div className="mb-4">
                  <Quote className="h-8 w-8 text-primary/20" />
                </div>
                <p className="mb-6 text-sm md:text-base">{testimonial.content}</p>
                <div className="flex items-center gap-3">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
                <div className="mt-4 flex">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center items-center mt-10 gap-4">
            <Button 
              variant="outline" 
              size="icon" 
              onClick={prevSlide} 
              disabled={currentIndex === 0 || isAnimating}
              className="rounded-full"
            >
              <ArrowLeft className="h-4 w-4" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              onClick={nextSlide} 
              disabled={currentIndex >= maxIndex || isAnimating}
              className="rounded-full"
            >
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/testimonials">View All Testimonials</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
