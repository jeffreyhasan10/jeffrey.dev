
import React from 'react';
import { socialLinks } from '@/data';
import { Github, Linkedin, FileText, Mail, ChevronUp } from 'lucide-react';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const renderSocialIcon = (icon: string) => {
    switch (icon) {
      case 'Github':
        return <Github className="w-4 h-4" />;
      case 'Linkedin':
        return <Linkedin className="w-4 h-4" />;
      case 'FileText':
        return <FileText className="w-4 h-4" />;
      case 'Mail':
        return <Mail className="w-4 h-4" />;
      default:
        return null;
    }
  };

  return (
    <footer className="bg-dark-200/50 backdrop-blur-lg border-t border-dark-300/50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col items-center">
          <button
            onClick={scrollToTop}
            className="blue-glassmorphism p-3 rounded-full hover:bg-neon-blue/10 transition-all duration-300 mb-8 group"
            aria-label="Scroll to top"
          >
            <ChevronUp className="w-5 h-5 text-gray-300 group-hover:text-neon-blue transition-colors" />
          </button>
          
          <div className="flex space-x-4 mb-6">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-neon-blue transition-colors duration-300"
                aria-label={link.platform}
              >
                {renderSocialIcon(link.icon)}
              </a>
            ))}
          </div>
          
          <div className="text-center">
            <p className="text-gray-400 text-sm mb-2">
              © {new Date().getFullYear()} Jeffrey Hasan C | All Rights Reserved
            </p>
            <p className="text-gray-500 text-xs">
              Designed and built with precision and passion
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
