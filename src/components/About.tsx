
import React, { useEffect, useRef } from 'react';
import { personalInfo } from '@/data';
import { ChevronRight, Mail, Phone, MapPin } from 'lucide-react';

const About: React.FC = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
        }
      },
      { threshold: 0.1 }
    );

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <section id="about" className="section-container" ref={aboutRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">ABOUT ME</p>
      </div>
      <h2 className="section-title">Who I Am</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-12">
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-display font-bold mb-6 text-white">My Background</h3>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm a passionate Full-Stack Developer and Computer Science graduate with a deep interest in creating innovative digital solutions.
            My journey in programming began during my studies at Nehru Institute of Engineering and Technology, 
            where I developed a strong foundation in computer science principles and software development.
          </p>
          <p className="text-gray-300 mb-6 leading-relaxed">
            I specialize in building responsive, user-friendly web applications using modern technologies 
            like React, Next.js, Vue.js on the front-end, and Node.js and Java on the back-end. My approach to 
            development focuses on writing clean, maintainable code that delivers exceptional user experiences.
          </p>
          <p className="text-gray-300 leading-relaxed">
            Beyond web development, I have experience with Python, IoT technologies, and machine learning, 
            allowing me to tackle diverse technical challenges and create comprehensive solutions.
          </p>
        </div>
        
        <div className="glass-card p-8 rounded-xl">
          <h3 className="text-2xl font-display font-bold mb-6 text-white">Personal Details</h3>
          
          <div className="flex flex-col space-y-6">
            <div className="flex items-start space-x-4">
              <div className="bg-dark-400/50 p-3 rounded-xl">
                <Mail className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">Email</h4>
                <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-neon-blue transition-colors">
                  {personalInfo.email}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-dark-400/50 p-3 rounded-xl">
                <Phone className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">Phone</h4>
                <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-neon-blue transition-colors">
                  {personalInfo.phone}
                </a>
              </div>
            </div>
            
            <div className="flex items-start space-x-4">
              <div className="bg-dark-400/50 p-3 rounded-xl">
                <MapPin className="w-5 h-5 text-neon-blue" />
              </div>
              <div>
                <h4 className="text-gray-400 text-sm mb-1">Location</h4>
                <p className="text-white">{personalInfo.location}</p>
              </div>
            </div>
            
            <div className="pt-4">
              <a 
                href="#contact" 
                className="inline-flex items-center group text-neon-blue hover:underline"
              >
                <span>Contact me</span>
                <ChevronRight className="w-4 h-4 ml-1 transition-transform group-hover:translate-x-1" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
