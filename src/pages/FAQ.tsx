
import { useEffect } from 'react';
import Layout from '@/components/layout/Layout';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const FAQ = () => {
  useEffect(() => {
    // Scroll to top on page load
    window.scrollTo(0, 0);
  }, []);

  const faqCategories = [
    {
      title: 'General Questions',
      faqs: [
        {
          question: 'What services does MotionWebForge offer?',
          answer: 'MotionWebForge offers a comprehensive range of digital services including web development, mobile app development, UI/UX design, digital marketing, web hosting, and SEO optimization. We provide end-to-end solutions to help businesses establish and enhance their digital presence.',
        },
        {
          question: 'What industries do you specialize in?',
          answer: 'We have experience working with clients across various industries including healthcare, finance, e-commerce, education, real estate, SaaS, and more. Our diverse portfolio allows us to bring cross-industry insights to every project.',
        },
        {
          question: 'How do I request a quote for my project?',
          answer: 'You can request a quote by filling out the form on our "Hire Us" page or by contacting us directly via email or phone. We\'ll schedule a consultation to discuss your project requirements and provide a detailed proposal.',
        },
      ],
    },
    {
      title: 'Project & Development',
      faqs: [
        {
          question: 'How long does it take to complete a project?',
          answer: 'Project timelines vary depending on the scope, complexity, and specific requirements. A simple website might take 2-4 weeks, while a complex web application or mobile app could take 3-6 months. During our initial consultation, we\'ll provide you with a more accurate timeline based on your project needs.',
        },
        {
          question: 'What is your development process?',
          answer: 'Our development process typically follows these stages: Discovery & Planning, Design & Prototyping, Development, Testing & QA, Deployment, and Post-launch Support. We follow agile methodologies and provide regular updates throughout the development process.',
        },
        {
          question: 'Do you provide ongoing maintenance and support?',
          answer: 'Yes, we offer various support and maintenance packages to ensure your digital products continue to run smoothly after launch. Our support services include regular updates, security monitoring, performance optimization, content updates, and technical support.',
        },
        {
          question: 'What technologies do you specialize in?',
          answer: 'Our team has expertise in a wide range of technologies including React, Angular, Vue.js, Node.js, PHP, Python, WordPress, Shopify, React Native, Flutter, and more. We stay up-to-date with the latest technologies and best practices to deliver cutting-edge solutions.',
        },
      ],
    },
    {
      title: 'Pricing & Billing',
      faqs: [
        {
          question: 'What is your pricing structure?',
          answer: 'We offer flexible pricing options tailored to your specific project requirements. This includes fixed-price projects, hourly rates, and retainer-based arrangements. We\'ll work with you to determine the most suitable pricing structure based on your budget and project scope.',
        },
        {
          question: 'Do you require a deposit before starting a project?',
          answer: 'Yes, we typically require a deposit of 30-50% of the total project cost before commencing work. The remainder is billed at predefined milestones or upon project completion, depending on the agreement.',
        },
        {
          question: 'What payment methods do you accept?',
          answer: 'We accept various payment methods including bank transfers, credit cards, and PayPal. For international clients, we can also accommodate other payment methods as needed.',
        },
      ],
    },
    {
      title: 'Working Together',
      faqs: [
        {
          question: 'How do you communicate during projects?',
          answer: 'We believe in transparent and regular communication. Depending on your preference, we can communicate via email, phone, video calls, or project management tools like Slack, Trello, or Asana. We provide weekly progress updates and schedule regular meetings to discuss the project status.',
        },
        {
          question: 'Can I make changes to the project scope after we\'ve started?',
          answer: 'Yes, we understand that requirements may evolve during the project. We have a change request process in place to accommodate modifications to the project scope. Any changes that affect the timeline or budget will be discussed and agreed upon before implementation.',
        },
        {
          question: 'Do you sign NDAs?',
          answer: 'Yes, we are happy to sign Non-Disclosure Agreements (NDAs) to protect your confidential information and intellectual property. We take the confidentiality of our clients\' projects very seriously.',
        },
        {
          question: 'What if I\'m not satisfied with the deliverables?',
          answer: 'Client satisfaction is our top priority. If you\'re not satisfied with any aspect of our deliverables, well work closely with you to understand your concerns and make the necessary revisions until you are completely satisfied with the results.',
        },
      ],
    },
  ];

  return (
    <Layout>
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="bg-primary py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Frequently Asked Questions</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Find answers to common questions about our services, processes, and working with us.
            </p>
          </div>
        </div>

        {/* FAQ Categories */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="grid grid-cols-1 gap-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">{category.title}</h2>
                <Accordion type="single" collapsible className="w-full">
                  {category.faqs.map((faq, faqIndex) => (
                    <AccordionItem key={faqIndex} value={`${categoryIndex}-${faqIndex}`}>
                      <AccordionTrigger className="text-left text-lg font-medium">
                        {faq.question}
                      </AccordionTrigger>
                      <AccordionContent className="text-muted-foreground">
                        {faq.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>

        {/* Still Have Questions */}
        <div className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold mb-6">Still Have Questions?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              We're here to help. Contact us for personalized assistance with your specific inquiries.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button asChild size="lg" className="rounded-full px-8">
                <Link to="/contact">Contact Us</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="rounded-full px-8">
                <Link to="/hire-us">Request a Consultation</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQ;
