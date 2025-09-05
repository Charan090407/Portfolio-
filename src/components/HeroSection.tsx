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
  className="min-h-screen flex items-center justify-center relative overflow-hidden group bg-[#0a0f1a]"
>
  {/* Animated Gradient Background */}
  <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black animate-gradient-x opacity-90"></div>

  {/* Particle Effect */}
  <div className="absolute inset-0 overflow-hidden z-0">
    {Array.from({ length: 40 }).map((_, i) => (
      <div
        key={i}
        className="absolute w-1 h-1 bg-cyan-400 rounded-full animate-particle"
        style={{
          top: `${Math.random() * 100}%`,
          left: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 5}s`,
          animationDuration: `${5 + Math.random() * 10}s`,
          opacity: Math.random() * 0.8 + 0.2,
        }}
      />
    ))}
  </div>

  {/* Glowing Orbs */}
  <div className="absolute -top-20 -left-20 w-96 h-96 bg-cyan-400/20 rounded-full blur-[120px] animate-pulse"></div>
  <div className="absolute bottom-0 right-0 w-[32rem] h-[32rem] bg-purple-600/20 rounded-full blur-[150px] animate-pulse delay-1000"></div>

  {/* Content */}
  <div className="container mx-auto px-6 text-center text-white relative z-10">
        <div className="animate-fade-in">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Hi, I'm <span className="text-cyan-400">MAJJIGA CHARAN YADAV</span>
          </h1>
          <h2 className="text-2xl md:text-3xl font-light mb-8 text-white/90">
            Python Backend Developer | Web Developer | Open Source Enthusiast
          </h2>
          <p className="text-lg md:text-xl mb-12 max-w-2xl mx-auto leading-relaxed text-white/80">
            Passionate about creating beautiful, functional, and user-centered digital experiences. 
            I bring ideas to life through code and design.
          </p>
        </div>

        {/* Buttons */}
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
            <a href="https://github.com/Charan090407" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Github className="h-6 w-6" />
              </Button>
            </a>
            <a href="https://www.linkedin.com/in/m-charan-yadav-5595b8268/" target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="sm" className="text-white/80 hover:text-white hover:bg-white/10">
                <Linkedin className="h-6 w-6" />
              </Button>
            </a>
            <a href="mailto:mcharanyadav09358@gmail.com">
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
