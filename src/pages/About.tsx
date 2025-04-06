
import { ArrowRight, CheckCircle, Code, Users, Briefcase, Award } from 'lucide-react';
import Layout from '@/components/layout/Layout';

const About = () => {
  return (
    <Layout>
      <div className="pt-24 md:pt-32">
        {/* Hero Section */}
        <section className="py-12 md:py-20 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                About <span className="text-gradient">MotionWebForge</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                We're a team of passionate developers, designers, and digital strategists dedicated to creating exceptional digital experiences.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <img 
                  src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?q=80&w=1471&auto=format&fit=crop" 
                  alt="Our mission"
                  className="rounded-xl shadow-2xl"
                />
              </div>
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Mission & Vision</h2>
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Mission</h3>
                    <p className="text-muted-foreground">
                      To empower businesses with innovative digital solutions that drive growth, enhance user experience, and create meaningful connections with their audience.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Vision</h3>
                    <p className="text-muted-foreground">
                      To be the leading software company known for creating transformative digital experiences that set new standards in innovation, quality, and client satisfaction.
                    </p>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">Values</h3>
                    <ul className="space-y-3 mt-4">
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span><strong>Innovation:</strong> We constantly explore new technologies and methodologies to deliver cutting-edge solutions.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span><strong>Quality:</strong> We are committed to excellence in every aspect of our work.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span><strong>Collaboration:</strong> We believe in the power of teamwork and partnership with our clients.</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle className="h-5 w-5 text-primary mt-0.5" />
                        <span><strong>Integrity:</strong> We operate with transparency, honesty, and ethical business practices.</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Journey */}
        <section className="py-16 bg-secondary/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Our Journey</h2>
              <p className="text-muted-foreground">
                From a small startup to an industry leader, our journey has been defined by innovation, growth, and a commitment to excellence.
              </p>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="space-y-12">
                <div className="relative pl-10 md:pl-0">
                  <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2"></div>
                  
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-10">
                      <div className="hidden md:block absolute right-0 top-5 w-10 h-0.5 bg-border"></div>
                      <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full border-4 border-primary bg-background translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold mb-2">2014</h3>
                      <p>Founded as a small web development agency with just 3 team members.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-10"></div>
                  </div>
                </div>

                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-10 md:order-1 md:col-start-2">
                      <div className="hidden md:block absolute left-0 top-5 w-10 h-0.5 bg-border"></div>
                      <div className="hidden md:block absolute left-0 top-0 w-3 h-3 rounded-full border-4 border-primary bg-background -translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold mb-2">2016</h3>
                      <p>Expanded services to include mobile app development and UI/UX design.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:order-0"></div>
                  </div>
                </div>

                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-10">
                      <div className="hidden md:block absolute right-0 top-5 w-10 h-0.5 bg-border"></div>
                      <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full border-4 border-primary bg-background translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold mb-2">2018</h3>
                      <p>Reached a milestone of 100+ completed projects and opened a second office.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-10"></div>
                  </div>
                </div>

                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-10 md:order-1 md:col-start-2">
                      <div className="hidden md:block absolute left-0 top-5 w-10 h-0.5 bg-border"></div>
                      <div className="hidden md:block absolute left-0 top-0 w-3 h-3 rounded-full border-4 border-primary bg-background -translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold mb-2">2020</h3>
                      <p>Adapted to remote work and helped businesses navigate digital transformation during the pandemic.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:order-0"></div>
                  </div>
                </div>

                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-10">
                      <div className="hidden md:block absolute right-0 top-5 w-10 h-0.5 bg-border"></div>
                      <div className="hidden md:block absolute right-0 top-0 w-3 h-3 rounded-full border-4 border-primary bg-background translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold mb-2">2023</h3>
                      <p>Celebrated our 500th project and expanded to international markets.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:pl-10"></div>
                  </div>
                </div>

                <div className="relative pl-10 md:pl-0">
                  <div className="md:grid md:grid-cols-2 md:gap-8 items-center relative">
                    <div className="md:text-right md:pr-10 md:order-1 md:col-start-2">
                      <div className="hidden md:block absolute left-0 top-5 w-10 h-0.5 bg-border"></div>
                      <div className="hidden md:block absolute left-0 top-0 w-3 h-3 rounded-full border-4 border-primary bg-background -translate-x-1.5"></div>
                      <h3 className="text-xl font-semibold mb-2">2025</h3>
                      <p>Looking ahead to new technologies and continued growth in the digital landscape.</p>
                    </div>
                    <div className="mt-4 md:mt-0 md:order-0"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-muted-foreground">
                Our diverse team of talented professionals is the heart of our company.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  name: 'Alex Morgan',
                  role: 'Founder & CEO',
                  image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1287&auto=format&fit=crop',
                  bio: 'With over 15 years of experience in software development, Alex leads the company with a focus on innovation and growth.',
                },
                {
                  name: 'Sarah Chen',
                  role: 'Creative Director',
                  image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1287&auto=format&fit=crop',
                  bio: 'Sarah brings 10+ years of design experience, ensuring our projects feature exceptional user experiences and visual appeal.',
                },
                {
                  name: 'Michael Torres',
                  role: 'Lead Developer',
                  image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1287&auto=format&fit=crop',
                  bio: 'Michael specializes in full-stack development and leads our technical team with expertise in multiple frameworks.',
                },
                {
                  name: 'Jessica Lee',
                  role: 'Project Manager',
                  image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&w=1287&auto=format&fit=crop',
                  bio: 'Jessica ensures projects are delivered on time and within budget while maintaining high quality standards.',
                },
              ].map((member, index) => (
                <div key={index} className="bg-card rounded-xl shadow-md overflow-hidden border border-border transition-transform duration-300 hover:-translate-y-2">
                  <div className="aspect-square overflow-hidden">
                    <img 
                      src={member.image} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{member.name}</h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Recognition Section */}
        <section className="py-16 bg-primary text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl font-bold mb-4">Recognition & Achievements</h2>
              <p className="text-white/80">
                Our commitment to excellence has been recognized with numerous awards and accolades.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Award className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Best Web Design Agency</h3>
                <p className="text-white/80">Web Excellence Awards, 2023</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Code className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Innovation in Technology</h3>
                <p className="text-white/80">Tech Innovator Awards, 2022</p>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-8 text-center">
                <div className="flex justify-center mb-4">
                  <Users className="h-12 w-12" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Employer of the Year</h3>
                <p className="text-white/80">Business Excellence Awards, 2021</p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default About;
