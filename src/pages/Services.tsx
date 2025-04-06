
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Code, Globe, Smartphone, Palette, BarChart, Server, Database, ShieldCheck } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const serviceCategories = [
  { id: 'all', name: 'All Services' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Development' },
  { id: 'design', name: 'Design' },
  { id: 'marketing', name: 'Marketing' },
];

const serviceItems = [
  {
    id: 1,
    title: 'Custom Web Development',
    description: 'Custom web applications built with modern frameworks like React, Angular, and Vue.js, tailored to your business needs.',
    icon: <Code className="h-10 w-10" />,
    category: 'web',
    features: [
      'Responsive Design',
      'Front-end Development',
      'Back-end Development',
      'API Integration',
      'CMS Implementation',
    ],
  },
  {
    id: 2,
    title: 'E-commerce Solutions',
    description: 'Comprehensive e-commerce platforms with secure payment gateways, inventory management, and customer portals.',
    icon: <Globe className="h-10 w-10" />,
    category: 'web',
    features: [
      'Product Management',
      'Payment Gateway Integration',
      'Inventory Management',
      'Customer Portal',
      'Order Processing',
    ],
  },
  {
    id: 3,
    title: 'Mobile App Development',
    description: 'Native and cross-platform mobile applications for iOS and Android, with a focus on performance and user experience.',
    icon: <Smartphone className="h-10 w-10" />,
    category: 'mobile',
    features: [
      'iOS Development',
      'Android Development',
      'Cross-platform Solutions',
      'Mobile UI/UX Design',
      'App Store Submission',
    ],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    description: 'User-centered design services that focus on creating intuitive, accessible, and engaging digital experiences.',
    icon: <Palette className="h-10 w-10" />,
    category: 'design',
    features: [
      'User Research',
      'Wireframing & Prototyping',
      'Visual Design',
      'Usability Testing',
      'Design Systems',
    ],
  },
  {
    id: 5,
    title: 'Digital Marketing',
    description: 'Strategic digital marketing services to increase your online visibility, drive traffic, and generate leads.',
    icon: <BarChart className="h-10 w-10" />,
    category: 'marketing',
    features: [
      'SEO Optimization',
      'Content Marketing',
      'Social Media Marketing',
      'Email Marketing',
      'Analytics & Reporting',
    ],
  },
  {
    id: 6,
    title: 'Web Hosting & Maintenance',
    description: 'Reliable hosting solutions with ongoing maintenance and support to ensure your website remains secure and up-to-date.',
    icon: <Server className="h-10 w-10" />,
    category: 'web',
    features: [
      'Cloud Hosting',
      'Server Management',
      'Performance Optimization',
      'Backup & Recovery',
      'Security Updates',
    ],
  },
  {
    id: 7,
    title: 'Database Development',
    description: 'Design and implementation of scalable, secure, and efficient database solutions for your business applications.',
    icon: <Database className="h-10 w-10" />,
    category: 'web',
    features: [
      'Database Design',
      'Data Migration',
      'Performance Optimization',
      'Security Implementation',
      'Ongoing Support',
    ],
  },
  {
    id: 8,
    title: 'Cybersecurity Services',
    description: 'Comprehensive security assessments and implementations to protect your digital assets from threats.',
    icon: <ShieldCheck className="h-10 w-10" />,
    category: 'web',
    features: [
      'Security Audits',
      'Vulnerability Assessments',
      'Penetration Testing',
      'Security Training',
      'Incident Response',
    ],
  },
];

const Services = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredServices = activeCategory === 'all' 
    ? serviceItems 
    : serviceItems.filter(service => service.category === activeCategory);

  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Services</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We offer a comprehensive range of digital services to help your business thrive in the digital landscape.
              </p>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {serviceCategories.map(category => (
                <Button
                  key={category.id}
                  variant={activeCategory === category.id ? "default" : "outline"}
                  className="rounded-full"
                  onClick={() => setActiveCategory(category.id)}
                >
                  {category.name}
                </Button>
              ))}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredServices.map(service => (
                <div 
                  key={service.id} 
                  className="bg-card rounded-xl shadow-md overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="p-8">
                    <div className="p-4 rounded-full bg-primary/10 w-fit mb-6">
                      {service.icon}
                    </div>
                    <h3 className="text-2xl font-semibold mb-4">{service.title}</h3>
                    <p className="text-muted-foreground mb-6">{service.description}</p>
                    
                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Key Features:</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <svg className="h-5 w-5 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    <Button asChild variant="outline" className="w-full group">
                      <Link to={`/services/${service.id}`} className="flex items-center justify-center gap-2">
                        Learn More
                        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Contact us today to discuss your project requirements and how we can help bring your vision to life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild size="lg" variant="outline" className="border-white text-white hover:bg-white/10 rounded-full px-8">
                  <Link to="/hire-us">Request a Quote</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Services;
