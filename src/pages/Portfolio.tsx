
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const categories = [
  { id: 'all', name: 'All Projects' },
  { id: 'web', name: 'Web Development' },
  { id: 'mobile', name: 'Mobile Apps' },
  { id: 'design', name: 'UI/UX Design' },
  { id: 'ecommerce', name: 'E-commerce' },
];

const projects = [
  {
    id: 1,
    title: 'E-commerce Platform',
    category: 'ecommerce',
    tags: ['React', 'Node.js', 'MongoDB'],
    image: 'https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1364&auto=format&fit=crop',
    description: 'A fully responsive e-commerce platform with payment integration and inventory management.',
    client: 'FashionTrend',
    year: '2023',
  },
  {
    id: 2,
    title: 'Healthcare Mobile App',
    category: 'mobile',
    tags: ['React Native', 'Firebase', 'Expo'],
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1470&auto=format&fit=crop',
    description: 'A mobile application for healthcare providers to manage patient information and appointments.',
    client: 'MedConnect',
    year: '2023',
  },
  {
    id: 3,
    title: 'Financial Dashboard',
    category: 'web',
    tags: ['Vue.js', 'Chart.js', 'Tailwind CSS'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    description: 'A comprehensive financial dashboard with real-time data visualization and reporting tools.',
    client: 'FinTech Solutions',
    year: '2022',
  },
  {
    id: 4,
    title: 'Restaurant Website',
    category: 'web',
    tags: ['WordPress', 'PHP', 'JavaScript'],
    image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1470&auto=format&fit=crop',
    description: 'A responsive website for a restaurant chain with online ordering and reservation system.',
    client: 'Gourmet Dining',
    year: '2022',
  },
  {
    id: 5,
    title: 'Fitness Tracking App',
    category: 'mobile',
    tags: ['Flutter', 'Firebase', 'Google Fit API'],
    image: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&w=1470&auto=format&fit=crop',
    description: 'A cross-platform fitness tracking application with personalized workout plans and progress tracking.',
    client: 'FitLife',
    year: '2022',
  },
  {
    id: 6,
    title: 'Travel Booking Platform',
    category: 'ecommerce',
    tags: ['Angular', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1470&auto=format&fit=crop',
    description: 'A comprehensive travel booking platform for flights, hotels, and activities with user reviews.',
    client: 'TravelEase',
    year: '2021',
  },
  {
    id: 7,
    title: 'Educational Website Redesign',
    category: 'design',
    tags: ['Figma', 'Adobe XD', 'Photoshop'],
    image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1470&auto=format&fit=crop',
    description: 'A complete redesign of an educational website to improve user experience and engagement.',
    client: 'Learning Hub',
    year: '2021',
  },
  {
    id: 8,
    title: 'Real Estate Platform',
    category: 'web',
    tags: ['React', 'Next.js', 'Mapbox'],
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?q=80&w=1373&auto=format&fit=crop',
    description: 'A real estate platform with property listings, map integration, and virtual tours.',
    client: 'PropertyPro',
    year: '2021',
  },
  {
    id: 9,
    title: 'Fashion E-commerce App',
    category: 'mobile',
    tags: ['React Native', 'Redux', 'Stripe'],
    image: 'https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=1365&auto=format&fit=crop',
    description: 'A mobile e-commerce application for a fashion brand with personalized recommendations.',
    client: 'StyleHub',
    year: '2020',
  },
];

const Portfolio = () => {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our <span className="text-gradient">Portfolio</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Explore our diverse portfolio of projects that showcase our expertise and creativity.
              </p>
            </div>
          </div>
        </section>

        {/* Portfolio Grid */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2 mb-16">
              {categories.map(category => (
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
              {filteredProjects.map(project => (
                <div 
                  key={project.id} 
                  className="group bg-card rounded-xl shadow-md overflow-hidden border border-border transition-all duration-300 hover:-translate-y-2 hover:shadow-lg"
                >
                  <div className="relative overflow-hidden h-60">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                      <div>
                        <p className="text-white/90 text-sm mb-2">{project.description}</p>
                        <Link 
                          to={`/portfolio/${project.id}`}
                          className="inline-flex items-center text-white font-medium text-sm hover:text-primary transition-colors"
                        >
                          View Project <ArrowUpRight className="ml-1 h-4 w-4" />
                        </Link>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.map((tag, index) => (
                        <span 
                          key={index} 
                          className="text-xs font-medium px-2 py-1 rounded-full bg-primary/10 text-primary"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      <Link 
                        to={`/portfolio/${project.id}`}
                        className="transition-colors hover:text-primary"
                      >
                        {project.title}
                      </Link>
                    </h3>
                    <div className="flex justify-between text-sm text-muted-foreground">
                      <span>Client: {project.client}</span>
                      <span>Year: {project.year}</span>
                    </div>
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
              <h2 className="text-3xl font-bold mb-6">Let's Work Together on Your Next Project</h2>
              <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                Have a project in mind? We'd love to hear about it and discuss how we can help bring your vision to life.
              </p>
              <Button asChild size="lg" variant="default" className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
                <Link to="/contact">Start a Project</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Portfolio;
