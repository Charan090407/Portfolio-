import { Button } from '@/components/ui/button';
import { ArrowDown, Download, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
<section
  id="hero"
  className="min-h-screen flex items-center justify-center relative overflow-hidden group"
>
  {/* Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-hero-gradient-start to-hero-gradient-end transition-all duration-500 group-hover:from-indigo-500 group-hover:to-purple-600"></div>
  
  {/* Animated Background Elements */}
  <div className="absolute inset-0">
    <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-xl animate-float transition-all duration-500 group-hover:bg-indigo-400/20"></div>
    <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-xl animate-float transition-all duration-500 group-hover:bg-purple-400/10" style={{ animationDelay: '2s' }}></div>
    <div className="absolute top-1/2 left-1/3 w-64 h-64 bg-white/10 rounded-full blur-xl animate-float transition-all duration-500 group-hover:bg-pink-400/20" style={{ animationDelay: '4s' }}></div>
  </div>

  <div className="container mx-auto px-6 text-center text-hero-text relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-white">MAJJIGA CHARAN YADAV</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90">
            Python Backend Developer | Web Developer | Open Source Enthusiast
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white/80">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through code and design.
          </p>
        </div>

        <div className="animate-slide-in-right flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
          <Button 
              size="lg" 
              variant="secondary"
              className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm"
              onClick={() => scrollToSection('projects')}
            >
              View My Work
            </Button>
            <a
              href="/MajjigaCharanYadav_CV.pdf"
              download
              className="w-full sm:w-auto"
            >
              <Button 
                size="lg" 
                variant="secondary"
                className="bg-white/20 text-white border-white/30 hover:bg-white/30 backdrop-blur-sm flex items-center justify-center"
              >
                <Download className="mr-2 h-4 w-4" />
                Download CV
              </Button>
            </a>
          </div>

        {/* Social Links */}
          <div className="animate-fade-in flex justify-center space-x-6 mb-16" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/Charan090407"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="https://www.linkedin.com/in/m-charan-yadav-5595b8268/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a
              href="mailto:mcharanyadav09358@gmail.com"
            >
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Mail className="h-6 w-6" />
              </Button>
            </a>
          </div>

        {/* Scroll Indicator */}
        <div className="animate-bounce">
          <Button 
            variant="ghost" 
            size="sm"
            className="text-white/60 hover:text-white/80"
            onClick={() => scrollToSection('about')}
          >
            <ArrowDown className="h-6 w-6" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;