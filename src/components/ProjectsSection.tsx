import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github, Eye } from 'lucide-react';

const ProjectsSection = () => {
  const projects = [
    {
      title: 'Voting System',
      description: 'Create your own election for any event by using this voting System',
      image: '/placeholder.svg',
      technologies: ['Python', 'Django', 'CSS', 'JavaScript'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Charan090407/Voting-system',
      featured: true
    },
    {
      title: 'Plant disease prediction and classification using AI',
      description: 'A Plant Disease Prediction and Classification System using AI integrated chatbot for real-time assistance.',
      image: '/placeholder.svg',
      technologies: ['python', 'streamlit', 'TensorFlow', 'OpenCV'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Charan090407/Plant-disease-prediction-using-AI',
      featured: true
    },
    {
      title: 'Quick Ryder - Ride sharing Application',
      description: 'A Ride sharing application with integrated Drowsiness detection system for safety',
      image: '/placeholder.svg',
      technologies: ['Python', 'Flask', 'Django', 'PostgreSQL','Java'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Charan090407/QuickRydrr',
      featured: false
    },
    {
      title: 'YT and spotify AI Assistant',
      description: 'A voice command assisted music player that integrates with YouTube and Spotify for seamless music streaming.',
      image: '/placeholder.svg',
      technologies: ['python','pywhatkit', 'Spotify API'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Charan090407/YT-AI-Assistant',
      featured: false
    },
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio website showcasing projects and skills with smooth animations and responsive design.',
      image: '/placeholder.svg',
      technologies: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MDX'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Charan090407/Portfolio-',
      featured: false
    },
    {
      title: 'FriensCorner-A Blog Website',
      description: 'A cross-platform mobile application for fitness tracking with workout plans and progress monitoring.',
      image: '/placeholder.svg',
      technologies: ['React Native', 'Firebase', 'Redux', 'Expo'],
      liveUrl: '#',
      githubUrl: 'https://github.com/Charan090407/FriendsCorner',
      featured: false
    }
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="py-20 bg-section-bg">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">My Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A collection of projects that showcase my skills in web development, 
            design, and problem-solving. Each project represents a unique challenge 
            and learning experience.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">Featured Projects</h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {featuredProjects.map((project, index) => (
              <Card key={index} className="group overflow-hidden hover:shadow-2xl transition-all duration-500 border-glass-border bg-glass-bg/50 backdrop-blur-sm">
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                    <Eye className="h-16 w-16 text-primary/50" />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <div className="flex space-x-4">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                      <Button size="sm" variant="secondary" className="bg-white/90 text-foreground hover:bg-white">
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </Button>
                      </a>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Button size="sm" variant="outline" className="border-white/30 text-white hover:bg-white/10">
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </Button>
                      </a>
                    </div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h4 className="text-2xl font-semibold text-foreground mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">Other Projects</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-glass-border bg-glass-bg/50 backdrop-blur-sm">
                <CardContent className="p-6">
                  <div className="w-full h-32 bg-gradient-to-br from-primary/10 to-accent/10 rounded-lg flex items-center justify-center mb-4">
                    <Eye className="h-8 w-8 text-primary/50" />
                  </div>
                  <h4 className="text-xl font-semibold text-foreground mb-3">{project.title}</h4>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 3).map((tech, techIndex) => (
                      <Badge key={techIndex} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="outline" className="text-xs">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>
                  <div className="flex space-x-2">
                    <Button size="sm" variant="outline" className="flex-1">
                      <ExternalLink className="h-3 w-3 mr-2" />
                      Demo
                    </Button>
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button size="sm" variant="outline">
                      <Github className="h-3 w-3" />
                    </Button>
                    </a>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
