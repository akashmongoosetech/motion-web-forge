
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, Calendar, Clock, Send } from 'lucide-react';

const HireUs = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    projectType: '',
    budget: '',
    timeframe: '',
    description: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Request Submitted",
        description: "We'll get back to you within 24 hours.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        company: '',
        projectType: '',
        budget: '',
        timeframe: '',
        description: '',
      });
    }, 1500);
  };

  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern frameworks',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 3a3 3 0 0 0-3 3v12a3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3H6a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3V6a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 3 3 0 0 0-3-3z"></path></svg>,
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><path d="M12 18h.01"></path></svg>,
    },
    {
      title: 'UI/UX Design',
      description: 'User-centered design that enhances engagement',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="13.5" cy="6.5" r=".5"></circle><circle cx="17.5" cy="10.5" r=".5"></circle><circle cx="8.5" cy="7.5" r=".5"></circle><circle cx="6.5" cy="12.5" r=".5"></circle><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.826-.076 2.697-.221"></path><path d="M17.218 14.005A2.25 2.25 0 0 0 21.4 13.9l-1.3-1.3a.75.75 0 0 0-1.1 0l-1.782 1.782a2.25 2.25 0 0 0 0 3.182l3.9 3.9a.75.75 0 0 0 1.1 0l1.3-1.3a2.25 2.25 0 0 0 .1-3.075M14.018 19.012 6.3 21.4a.75.75 0 0 1-.988-.988l2.388-7.718"></path></svg>,
    },
    {
      title: 'Digital Marketing',
      description: 'Strategic marketing campaigns to drive growth',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m12 14 4-4"></path><path d="M3.34 19a10 10 0 1 1 17.32 0"></path></svg>,
    },
  ];

  return (
    <Layout>
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary to-blue-600 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Hire Us for Your Next Project</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Let's collaborate to bring your vision to life. Our expert team is ready to help you achieve your goals.
            </p>
          </div>
        </div>

        {/* Why Choose Us */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose <span className="text-gradient">MotionWebForge</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              With a proven track record of delivering exceptional digital solutions, we're the partner you can trust for your next project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Expert Team</CardTitle>
                <CardDescription>Skilled professionals dedicated to your success</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Senior developers with 10+ years experience', 'UI/UX specialists', 'Project managers', 'Quality assurance experts'].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Our Approach</CardTitle>
                <CardDescription>A collaborative process focused on results</CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3">
                  {['Thorough requirements gathering', 'Agile development methodology', 'Regular progress updates', 'Comprehensive testing', 'Ongoing support'].map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Services Section */}
        <div className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Our Services</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {services.map((service, index) => (
                <Card key={index} className="service-card h-full">
                  <CardContent className="p-6 flex flex-col h-full">
                    <div className="mb-4 text-primary">{service.icon}</div>
                    <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Project Timeline */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">How We Work</h2>
          <div className="relative">
            <div className="absolute left-1/2 -ml-0.5 w-0.5 h-full bg-gradient-to-b from-primary to-blue-600 hidden md:block"></div>
            <div className="space-y-12 relative">
              {[
                { title: 'Discovery & Planning', description: 'We start by understanding your business goals, target audience, and project requirements.', icon: <Calendar className="h-6 w-6" /> },
                { title: 'Design & Prototyping', description: 'Our designers create wireframes and interactive prototypes to visualize the solution.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3v7a6 6 0 0 0 6 6 6 6 0 0 0 6-6V3"></path><circle cx="18" cy="6" r="3"></circle><circle cx="6" cy="6" r="3"></circle></svg> },
                { title: 'Development', description: 'Our development team brings the designs to life using the latest technologies.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg> },
                { title: 'Testing & Launch', description: 'We thoroughly test the solution before launch to ensure everything works perfectly.', icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg> },
                { title: 'Ongoing Support', description: 'Our relationship doesn\'t end at launch. We provide ongoing support and maintenance.', icon: <Clock className="h-6 w-6" /> }
              ].map((step, index) => (
                <div key={index} className="flex flex-col md:flex-row items-center md:items-start gap-4">
                  <div className="order-1 md:order-none md:flex-1 md:text-right pr-0 md:pr-8">
                    {index % 2 === 0 ? (
                      <div className="bg-card rounded-xl p-6 shadow-md md:ml-auto md:mr-0 max-w-md">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    ) : <div className="hidden md:block" />}
                  </div>
                  
                  <div className="z-10 bg-gradient-to-br from-primary to-blue-600 text-white rounded-full p-3 flex-shrink-0">
                    {step.icon}
                  </div>
                  
                  <div className="order-2 md:order-none md:flex-1 pl-0 md:pl-8">
                    {index % 2 === 1 ? (
                      <div className="bg-card rounded-xl p-6 shadow-md md:mr-auto md:ml-0 max-w-md">
                        <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                        <p className="text-muted-foreground">{step.description}</p>
                      </div>
                    ) : <div className="md:hidden" />}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Get in Touch</h2>
              <Card>
                <CardContent className="p-6 md:p-8">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium mb-2">Full Name</label>
                        <Input
                          id="name"
                          name="name"
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium mb-2">Email Address</label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="company" className="block text-sm font-medium mb-2">Company Name</label>
                        <Input
                          id="company"
                          name="company"
                          placeholder="Your Company"
                          value={formData.company}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="projectType" className="block text-sm font-medium mb-2">Project Type</label>
                        <Select
                          value={formData.projectType}
                          onValueChange={(value) => handleSelectChange('projectType', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select project type" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="website">Website</SelectItem>
                            <SelectItem value="webapp">Web Application</SelectItem>
                            <SelectItem value="mobileapp">Mobile Application</SelectItem>
                            <SelectItem value="design">UI/UX Design</SelectItem>
                            <SelectItem value="other">Other</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="budget" className="block text-sm font-medium mb-2">Budget Range</label>
                        <Select
                          value={formData.budget}
                          onValueChange={(value) => handleSelectChange('budget', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select budget range" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<5k">Less than $5,000</SelectItem>
                            <SelectItem value="5k-10k">$5,000 - $10,000</SelectItem>
                            <SelectItem value="10k-25k">$10,000 - $25,000</SelectItem>
                            <SelectItem value="25k-50k">$25,000 - $50,000</SelectItem>
                            <SelectItem value=">50k">More than $50,000</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      <div>
                        <label htmlFor="timeframe" className="block text-sm font-medium mb-2">Timeframe</label>
                        <Select
                          value={formData.timeframe}
                          onValueChange={(value) => handleSelectChange('timeframe', value)}
                        >
                          <SelectTrigger>
                            <SelectValue placeholder="Select timeframe" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="<1month">Less than 1 month</SelectItem>
                            <SelectItem value="1-3months">1-3 months</SelectItem>
                            <SelectItem value="3-6months">3-6 months</SelectItem>
                            <SelectItem value=">6months">More than 6 months</SelectItem>
                            <SelectItem value="ongoing">Ongoing / Retainer</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="description" className="block text-sm font-medium mb-2">Project Description</label>
                      <Textarea
                        id="description"
                        name="description"
                        placeholder="Tell us about your project and requirements..."
                        rows={5}
                        value={formData.description}
                        onChange={handleChange}
                        required
                      />
                    </div>
                    
                    <Button 
                      type="submit" 
                      className="w-full" 
                      size="lg"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Submitting...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-5 w-5" />
                          Submit Request
                        </span>
                      )}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default HireUs;
