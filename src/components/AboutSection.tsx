import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Code, Palette, Zap, Heart } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Development',
      description: 'Full-stack development with modern technologies and best practices.',
      technologies: ['React', 'TypeScript', 'Node.js', 'Python']
    },
    {
      icon: Palette,
      title: 'Design',
      description: 'Creating beautiful and intuitive user interfaces and experiences.',
      technologies: ['Figma', 'UI/UX', 'Prototyping', 'Design Systems']
    },
    {
      icon: Zap,
      title: 'Performance',
      description: 'Optimizing applications for speed, scalability, and accessibility.',
      technologies: ['Optimization', 'Testing', 'CI/CD', 'Cloud Deployment']
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Dedicated to continuous learning and delivering exceptional results.',
      technologies: ['Problem Solving', 'Innovation', 'Teamwork', 'Leadership']
    }
  ];

  return (
    <section id="about" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            I'm a passionate developer who loves turning complex problems into simple, 
            beautiful, and intuitive solutions. When I'm not coding, you'll find me 
            exploring new technologies and design trends.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-6">
            <h3 className="text-3xl font-semibold text-foreground">My Journey</h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              With over 5 years of experience in web development, I've had the privilege 
              of working with diverse teams and clients to bring innovative digital 
              solutions to life. My expertise spans across front-end and back-end 
              development, with a keen eye for design and user experience.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              I believe in writing clean, maintainable code and creating applications 
              that not only function flawlessly but also provide delightful user experiences. 
              Every project is an opportunity to learn something new and push the boundaries 
              of what's possible.
            </p>
            <Button variant="outline" size="lg" className="mt-4">
              Learn More About My Experience
            </Button>
          </div>
          
          <div className="relative">
            <div className="w-full h-96 bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl flex items-center justify-center">
              <div className="text-center">
                <div className="w-32 h-32 bg-primary/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                  <Code className="h-16 w-16 text-primary" />
                </div>
                <p className="text-muted-foreground">Profile Image Placeholder</p>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-glass-border bg-glass-bg/50 backdrop-blur-sm">
              <CardContent className="p-6 text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-primary/20 transition-colors duration-300">
                  <skill.icon className="h-8 w-8 text-primary" />
                </div>
                <h4 className="text-xl font-semibold text-foreground mb-3">{skill.title}</h4>
                <p className="text-muted-foreground mb-4">{skill.description}</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {skill.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;