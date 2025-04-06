
import { useState } from 'react';
import Layout from '@/components/layout/Layout';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { useToast } from '@/hooks/use-toast';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { CheckCircle, Upload } from 'lucide-react';

const Careers = () => {
  const { toast } = useToast();
  const [resumeFile, setResumeFile] = useState<File | null>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    position: '',
    coverLetter: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setResumeFile(e.target.files[0]);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!resumeFile) {
      toast({
        title: "Resume Required",
        description: "Please upload your resume to apply.",
        variant: "destructive",
      });
      return;
    }
    
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Application Submitted",
        description: "We'll review your application and get back to you soon.",
      });
      setIsSubmitting(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        position: '',
        coverLetter: '',
      });
      setResumeFile(null);
    }, 1500);
  };

  const openPositions = [
    {
      title: 'Senior React Developer',
      type: 'Full-time',
      location: 'Remote / San Francisco, CA',
      description: 'We\'re looking for an experienced React developer to join our team and work on cutting-edge web applications for our clients.',
    },
    {
      title: 'UI/UX Designer',
      type: 'Full-time',
      location: 'Remote / New York, NY',
      description: 'Join our design team to create beautiful and intuitive user interfaces and experiences for web and mobile applications.',
    },
    {
      title: 'Mobile App Developer',
      type: 'Full-time',
      location: 'Remote',
      description: 'We need a skilled mobile developer with experience in React Native or Flutter to build cross-platform mobile applications.',
    },
    {
      title: 'Digital Marketing Specialist',
      type: 'Part-time',
      location: 'Remote',
      description: 'Help our clients grow their online presence through strategic digital marketing campaigns and SEO optimization.',
    },
    {
      title: 'Project Manager',
      type: 'Full-time',
      location: 'Remote / San Francisco, CA',
      description: 'Oversee the planning, execution, and delivery of client projects to ensure they meet quality standards and deadlines.',
    },
  ];

  const benefits = [
    {
      title: 'Flexible Work Environment',
      description: 'Work remotely or from our offices with flexible hours.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 7h-3a2 2 0 0 1-2-2V2"></path><path d="M9 18a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h7l4 4v10a2 2 0 0 1-2 2Z"></path><path d="M3 7v10a2 2 0 0 0 2 2h4"></path><circle cx="11" cy="18" r="3"></circle><path d="m17 15 3 3-3 3"></path></svg>,
    },
    {
      title: 'Competitive Compensation',
      description: 'Salary packages that recognize your skills and experience.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 18V6"></path></svg>,
    },
    {
      title: 'Professional Growth',
      description: 'Opportunities for learning, development, and career advancement.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path><path d="M15.5 7.5c.28.57.5 1.15.5 2"></path></svg>,
    },
    {
      title: 'Health & Wellness',
      description: 'Comprehensive health insurance and wellness programs.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 2v5h5"></path><path d="M21 6v6.5c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5v-9c0-.8.7-1.5 1.5-1.5H17l4 4z"></path><path d="M3 12.5v-9c0-.8.7-1.5 1.5-1.5h7c.8 0 1.5.7 1.5 1.5v9c0 .8-.7 1.5-1.5 1.5h-7c-.8 0-1.5-.7-1.5-1.5z"></path><path d="M3 14.5v6c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5v-6c0-.8-.7-1.5-1.5-1.5h-7c-.8 0-1.5.7-1.5 1.5z"></path><path d="M13 15.5v5c0 .8.7 1.5 1.5 1.5h7c.8 0 1.5-.7 1.5-1.5v-9c0-.8-.7-1.5-1.5-1.5H17"></path></svg>,
    },
    {
      title: 'Work-Life Balance',
      description: 'Generous PTO, holidays, and parental leave policies.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 5a4 4 0 0 1 4-4h8a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4h-4L8 22v-3H8a4 4 0 0 1-4-4V5z"></path><circle cx="12" cy="11" r="1"></circle><circle cx="8" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle></svg>,
    },
    {
      title: 'Team Events',
      description: 'Regular team building activities and company retreats.',
      icon: <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>,
    },
  ];

  return (
    <Layout>
      <div className="pt-16 pb-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-br from-primary to-blue-600 py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">Join Our Team</h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto">
              Build your career with us. We're looking for talented individuals to help us create amazing digital experiences.
            </p>
          </div>
        </div>

        {/* Why Work With Us */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Work With <span className="text-gradient">MotionWebForge</span>?
            </h2>
            <p className="text-lg text-muted-foreground">
              We're building a team of passionate individuals who are committed to excellence and innovation. Here's why you should join us:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <Card key={index} className="h-full">
                <CardContent className="pt-6">
                  <div className="mb-4 text-primary">{benefit.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                  <p className="text-muted-foreground">{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Open Positions */}
        <div className="bg-secondary/30 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold text-center mb-12">Open Positions</h2>
            <div className="grid grid-cols-1 gap-6">
              {openPositions.map((position, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex flex-col md:flex-row justify-between md:items-center gap-4">
                      <div>
                        <CardTitle>{position.title}</CardTitle>
                        <CardDescription className="mt-2">
                          <span className="inline-block bg-primary/10 text-primary text-xs font-medium rounded-full px-3 py-1 mr-2">
                            {position.type}
                          </span>
                          <span className="inline-block bg-secondary text-secondary-foreground text-xs font-medium rounded-full px-3 py-1">
                            {position.location}
                          </span>
                        </CardDescription>
                      </div>
                      <Button 
                        onClick={() => {
                          setFormData(prev => ({
                            ...prev,
                            position: position.title
                          }));
                          document.getElementById('application-form')?.scrollIntoView({ behavior: 'smooth' });
                        }}
                        className="md:w-auto w-full"
                      >
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{position.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>

        {/* Core Values */}
        <div className="container mx-auto px-4 md:px-6 py-16">
          <h2 className="text-3xl font-bold text-center mb-12">Our Core Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: 'Innovation', description: 'We constantly seek new ideas and approaches to solve complex problems and deliver exceptional results.' },
              { title: 'Excellence', description: 'We are committed to delivering the highest quality work in everything we do, exceeding expectations at every turn.' },
              { title: 'Collaboration', description: 'We believe that the best solutions come from working together, sharing knowledge, and combining diverse perspectives.' },
              { title: 'Integrity', description: 'We conduct business with honesty, transparency, and respect, building trust with our clients and team members.' },
            ].map((value, index) => (
              <div key={index} className="flex items-start gap-4">
                <CheckCircle className="h-6 w-6 text-primary mt-1" />
                <div>
                  <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Application Form */}
        <div id="application-form" className="bg-primary/5 py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Apply Now</h2>
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
                        <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number</label>
                        <Input
                          id="phone"
                          name="phone"
                          placeholder="(123) 456-7890"
                          value={formData.phone}
                          onChange={handleChange}
                        />
                      </div>
                      <div>
                        <label htmlFor="position" className="block text-sm font-medium mb-2">Position</label>
                        <Input
                          id="position"
                          name="position"
                          placeholder="Position you're applying for"
                          value={formData.position}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="resume" className="block text-sm font-medium mb-2">Resume/CV</label>
                      <div className="flex items-center justify-center w-full">
                        <label htmlFor="resume" className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed rounded-lg cursor-pointer bg-card border-border hover:bg-secondary">
                          <div className="flex flex-col items-center justify-center pt-5 pb-6">
                            <Upload className="w-8 h-8 mb-3 text-muted-foreground" />
                            <p className="mb-2 text-sm text-foreground">
                              <span className="font-semibold">Click to upload</span> or drag and drop
                            </p>
                            <p className="text-xs text-muted-foreground">PDF, DOC, or DOCX (MAX. 5MB)</p>
                          </div>
                          <Input
                            id="resume"
                            type="file"
                            accept=".pdf,.doc,.docx"
                            className="hidden"
                            onChange={handleFileChange}
                            required
                          />
                        </label>
                      </div>
                      {resumeFile && (
                        <p className="mt-2 text-sm text-muted-foreground">
                          Selected file: {resumeFile.name}
                        </p>
                      )}
                    </div>
                    
                    <div>
                      <label htmlFor="coverLetter" className="block text-sm font-medium mb-2">Cover Letter (Optional)</label>
                      <Textarea
                        id="coverLetter"
                        name="coverLetter"
                        placeholder="Tell us why you're interested in this position and what makes you a good fit..."
                        rows={5}
                        value={formData.coverLetter}
                        onChange={handleChange}
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
                        <span>Submit Application</span>
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

export default Careers;
