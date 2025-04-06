
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Calendar, User, Clock } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    title: 'The Future of Web Development: Trends to Watch in 2023',
    excerpt: 'Explore the emerging technologies and methodologies that are shaping the future of web development.',
    image: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=1469&auto=format&fit=crop',
    date: 'April 2, 2023',
    author: 'David Mitchell',
    readTime: '5 min read',
  },
  {
    id: 2,
    title: 'How to Improve Your Website\'s User Experience',
    excerpt: 'Learn practical tips and strategies to enhance your website\'s user experience and increase conversion rates.',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=1470&auto=format&fit=crop',
    date: 'March 15, 2023',
    author: 'Emily Wong',
    readTime: '7 min read',
  },
  {
    id: 3,
    title: 'The Importance of Mobile-First Design',
    excerpt: 'Discover why mobile-first design is essential in today\'s digital landscape and how to implement it effectively.',
    image: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=1470&auto=format&fit=crop',
    date: 'February 28, 2023',
    author: 'Michael Johnson',
    readTime: '6 min read',
  },
];

const BlogPreview = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Latest from our <span className="text-gradient">Blog</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Insights, tips, and industry updates from our experts.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post) => (
            <div key={post.id} className="group overflow-hidden rounded-xl shadow-md border border-border bg-card transition-all duration-300 hover:shadow-lg">
              <Link to={`/blog/${post.id}`} className="block">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              </Link>
              <div className="p-6">
                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center gap-1">
                    <Calendar className="h-4 w-4" />
                    <span>{post.date}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <User className="h-4 w-4" />
                    <span>{post.author}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors line-clamp-2">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                <Link 
                  to={`/blog/${post.id}`}
                  className="inline-block text-primary font-medium hover:text-primary/80 transition-colors"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <Button asChild size="lg" className="rounded-full px-8">
            <Link to="/blog">View All Posts</Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;
