
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const faqItems = [
  {
    question: 'What services does MotionWebForge offer?',
    answer: 'MotionWebForge offers a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, web hosting, and SEO optimization. We provide end-to-end solutions to help businesses establish and enhance their digital presence.',
  },
  {
    question: 'How long does it take to complete a project?',
    answer: 'Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we\'ll provide you with a more accurate timeline based on your project needs.',
  },
  {
    question: 'What is your pricing structure?',
    answer: 'We offer flexible pricing options tailored to your specific project requirements. This includes fixed-price projects, hourly rates, and retainer-based arrangements. We\'ll work with you to determine the most suitable pricing structure based on your budget and project scope.',
  },
  {
    question: 'Do you provide ongoing support after project completion?',
    answer: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to run smoothly after launch. Our support services include regular updates, security monitoring, performance optimization, content updates, and technical support.',
  },
  {
    question: 'What technologies do you specialize in?',
    answer: 'Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, PHP, Python, WordPress, Shopify, React Native, Flutter, and more. We stay up-to-date with the latest technologies and best practices to deliver cutting-edge solutions.',
  },
];

const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Frequently Asked <span className="text-gradient">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqItems.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent>
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="mb-6 text-muted-foreground">
            Don't see your question here? Contact us for more information.
          </p>
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/faq">View All FAQs</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
