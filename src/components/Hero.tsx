
import React, { useEffect, useRef } from 'react';
import { personalInfo, socialLinks } from '@/data';
import { Github, Linkedin, FileText, Mail, ChevronDown } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Skip parallax effect on mobile for better performance
    if (isMobile) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const { clientX, clientY } = e;
      const rect = heroRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const deltaX = (clientX - centerX) / 30;
      const deltaY = (clientY - centerY) / 30;

      const layers = heroRef.current.querySelectorAll('.parallax-layer');
      layers.forEach((layer: Element, index) => {
        const htmlLayer = layer as HTMLElement;
        const speed = index + 1;
        const x = deltaX * speed * -1;
        const y = deltaY * speed * -1;
        htmlLayer.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      });
    };

    document.addEventListener('mousemove', handleMouseMove);
    return () => document.removeEventListener('mousemove', handleMouseMove);
  }, [isMobile]);

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Github':
        return <Github className="w-5 h-5" />;
      case 'Linkedin':
        return <Linkedin className="w-5 h-5" />;
      case 'FileText':
        return <FileText className="w-5 h-5" />;
      case 'Mail':
        return <Mail className="w-5 h-5" />;
      default:
        return null;
    }
  };

  return (
    <section className="relative min-h-[calc(100vh-1rem)] flex flex-col justify-center items-center py-16 sm:py-20 px-4 overflow-hidden" id="home" ref={heroRef}>
      {/* Background Elements */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-neon-blue/10 rounded-full blur-[100px] parallax-layer" />
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-64 h-48 sm:h-64 bg-neon-purple/10 rounded-full blur-[100px] parallax-layer" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 bg-dark-300/50 rounded-full blur-[60px] parallax-layer" />
      </div>

      <div className="container mx-auto max-w-7xl z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12 lg:gap-16">
          {/* Profile Image */}
          <div className="order-1 lg:order-2 lg:w-2/5 flex justify-center">
            <div className="relative">
              <div className="w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 lg:w-80 lg:h-80 rounded-full overflow-hidden border-4 border-dark-300 shadow-2xl parallax-layer">
                <img 
                  src={personalInfo.profileImage} 
                  alt={personalInfo.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-neon-blue via-neon-purple to-neon-blue opacity-30 blur-sm animate-rotate-slow" />
            </div>
          </div>

          {/* Content */}
          <div className="order-2 lg:order-1 lg:w-3/5 text-center lg:text-left mt-8 lg:mt-0">
            <div className="blue-glassmorphism inline-block px-3 py-1.5 sm:px-4 sm:py-2 rounded-full mb-4 parallax-layer">
              <p className="text-neon-blue font-medium text-xs sm:text-sm">Full-Stack Developer</p>
            </div>
            
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-4 parallax-layer">
              Hello, I'm <span className="text-gradient">{personalInfo.name}</span>
            </h1>
            
            <p className="text-gray-300 text-base sm:text-lg mb-6 sm:mb-8 max-w-2xl mx-auto lg:mx-0 parallax-layer">
              {personalInfo.about}
            </p>
            
            <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 mb-6 sm:mb-8 justify-center lg:justify-start parallax-layer">
              <a 
                href="#contact" 
                className="bg-neon-blue text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:bg-neon-blue/90 transition-all duration-300 w-full sm:w-auto text-center text-sm sm:text-base"
              >
                Contact Me
              </a>
              <a 
                href="#projects" 
                className="blue-glassmorphism text-white px-5 py-2.5 sm:px-6 sm:py-3 rounded-md hover:bg-dark-300/50 transition-all duration-300 w-full sm:w-auto text-center text-sm sm:text-base mt-3 sm:mt-0"
              >
                View My Work
              </a>
            </div>
            
            {/* Social Links */}
            <div className="flex items-center justify-center lg:justify-start space-x-3 sm:space-x-4 parallax-layer">
              {socialLinks.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="blue-glassmorphism p-2.5 sm:p-3 rounded-full hover:bg-neon-blue/10 transition-all duration-300 group"
                  aria-label={link.platform}
                >
                  <span className="text-gray-300 group-hover:text-neon-blue transition-colors duration-300">
                    {renderSocialIcon(link.icon)}
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Down Indicator */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-pulse-slow">
        <span className="text-gray-400 text-xs sm:text-sm mb-1 sm:mb-2">Scroll Down</span>
        <ChevronDown className="text-neon-blue w-5 h-5 sm:w-6 sm:h-6 animate-bounce" />
      </div>
    </section>
  );
};

export default Hero;
