import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const EducationSection = () => {
  const education = [
    {
      degree: ' Computer Science Engineering ',
      institution: 'Kalasalingam Academy of Research and Education',
      location: 'Virudhunagar, Tamil Nadu',
      period: '2022 - 2026',
      description: 'Specialized in Machine Learning and Software Engineering. Still Pursuing.',
      achievements: ['Euphoria 2k25 Owasp Hackathon Winner(2nd place)']
    },
    {
      degree: 'Intermediate Education ',
      institution: 'Sri Chaithanya collage',
      location: 'Vijayawada, Andhra Pradesh',
      period: '2008 - 2020',
      description: 'Stream studied is Mathematics, Physics and Chemistry',
      achievements: ['Board Public Examination Top ranker','JEE MAINS', 'Qualified for JEE Advance']
    }
  ];

  const certifications = [
    {
      name: 'Samgatha X Vashisht 2025🥈',
      issuer: 'IITDM, Kancheepuram',
      date: '31 March, 2025',
      icon: '♾️'
    },
    {
      name: 'Euphoria - TECH FORGE Winner🥇',
      issuer: 'IBM',
      date: '12 March, 2025',
      icon: '🌐'
    },
    {
      name: 'AI & Industry-Driven Approches to site Reliability Engineering and Microservices',
      issuer: 'ACM',
      date: '27 Dec, 2024',
      icon: '🌐'
    },
    {
      name: 'SDGATHON 2025 ',
      issuer: 'KPR Institute of Engineering and Technology',
      date: '22 March, 2025',
      icon: '♾️'
    }
  ];

  return (
    <section id="education" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A strong foundation in computer science combined with continuous learning 
            and professional development in emerging technologies.
          </p>
        </div>

        {/* Formal Education */}
        <div className="mb-16">
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">Formal Education</h3>
          <div className="space-y-8">
            {education.map((edu, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4">
                    <div className="flex items-start space-x-4 mb-4 lg:mb-0">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <GraduationCap className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold text-foreground">{edu.degree}</h4>
                        <p className="text-lg text-primary font-medium">{edu.institution}</p>
                      </div>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center space-y-2 sm:space-y-0 sm:space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-muted-foreground mb-4 leading-relaxed">{edu.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {edu.achievements.map((achievement, achIndex) => (
                      <Badge key={achIndex} variant="secondary" className="flex items-center space-x-1">
                        <Award className="h-3 w-3" />
                        <span>{achievement}</span>
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div>
          <h3 className="text-3xl font-semibold text-foreground mb-8 text-center">Certifications</h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {certifications.map((cert, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 border-glass-border bg-glass-bg/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-4">{cert.icon}</div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">{cert.name}</h4>
                  <p className="text-muted-foreground mb-2">{cert.issuer}</p>
                  <Badge variant="outline" className="text-xs">
                    {cert.date}
                  </Badge>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;