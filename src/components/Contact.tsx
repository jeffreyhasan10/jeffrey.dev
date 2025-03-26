
import React, { useState, useEffect, useRef } from 'react';
import { personalInfo, socialLinks } from '@/data';
import { Github, Linkedin, FileText, Mail, Send, Phone, MapPin } from 'lucide-react';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';
import { useIsMobile } from '@/hooks/use-mobile';
import GoogleMapComponent from './GoogleMap';
import AppointmentScheduler from './AppointmentScheduler';

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const isMobile = useIsMobile();
  
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

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Insert contact message into Supabase
      const { error } = await supabase
        .from('contacts')
        .insert([
          { name, email, message }
        ]);
        
      if (error) throw error;
      
      setIsSubmitSuccess(true);
      toast({
        title: "Message sent!",
        description: "Thank you for your message. I'll get back to you soon.",
      });
      
      // Reset form
      setName('');
      setEmail('');
      setMessage('');
      
      // Reset success message after a delay
      setTimeout(() => {
        setIsSubmitSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Error submitting form:', error);
      toast({
        title: "Failed to send message",
        description: "Please try again later.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

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
    <section id="contact" className="section-container" ref={contactRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">GET IN TOUCH</p>
      </div>
      <h2 className="section-title">Contact Me</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 mt-8 md:mt-12">
        <div className="flex flex-col gap-6">
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Send a Message</h3>
            
            {isSubmitSuccess ? (
              <div className="bg-green-500/20 border border-green-500/30 text-green-400 p-3 sm:p-4 rounded-lg mb-4 sm:mb-6 text-sm sm:text-base">
                Thanks for your message! I'll get back to you soon.
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="name" className="block text-gray-300 mb-1 sm:mb-2 text-sm">Name</label>
                  <input
                    type="text"
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm sm:text-base"
                    placeholder="Your Name"
                    required
                  />
                </div>
                
                <div className="mb-3 sm:mb-4">
                  <label htmlFor="email" className="block text-gray-300 mb-1 sm:mb-2 text-sm">Email</label>
                  <input
                    type="email"
                    id="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white text-sm sm:text-base"
                    placeholder="Your Email"
                    required
                  />
                </div>
                
                <div className="mb-4 sm:mb-6">
                  <label htmlFor="message" className="block text-gray-300 mb-1 sm:mb-2 text-sm">Message</label>
                  <textarea
                    id="message"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    className="w-full px-3 sm:px-4 py-2 sm:py-3 bg-dark-300/50 border border-dark-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-neon-blue/50 text-white h-24 sm:h-32 text-sm sm:text-base"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-gradient text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg flex items-center justify-center transition-all duration-300 text-sm sm:text-base ${
                    isSubmitting ? 'opacity-70 cursor-not-allowed' : ''
                  }`}
                >
                  {isSubmitting ? (
                    <span>Sending...</span>
                  ) : (
                    <>
                      <Send className="w-3.5 h-3.5 sm:w-4 sm:h-4 mr-1.5 sm:mr-2" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            )}
          </div>
          
          {/* Appointment Scheduler */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Schedule a Meeting</h3>
            <p className="text-gray-300 mb-4 text-sm sm:text-base">Want to discuss a project or opportunity? Schedule a time that works for you.</p>
            <AppointmentScheduler />
          </div>
        </div>
        
        <div className="flex flex-col justify-between gap-6">
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Contact Information</h3>
            
            <div className="space-y-4 sm:space-y-6">
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="blue-glassmorphism p-2 sm:p-3 rounded-lg">
                  <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-white hover:text-neon-blue transition-colors text-sm sm:text-base break-all">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="blue-glassmorphism p-2 sm:p-3 rounded-lg">
                  <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-white hover:text-neon-blue transition-colors text-sm sm:text-base">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start space-x-3 sm:space-x-4">
                <div className="blue-glassmorphism p-2 sm:p-3 rounded-lg">
                  <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-neon-blue" />
                </div>
                <div>
                  <h4 className="text-gray-400 text-xs sm:text-sm mb-0.5 sm:mb-1">Location</h4>
                  <p className="text-white text-sm sm:text-base">{personalInfo.location}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6">
              <h4 className="text-lg font-display font-bold mb-3">Connect With Me</h4>
              <div className="flex flex-wrap gap-2 sm:gap-4">
                {socialLinks.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="blue-glassmorphism p-2.5 sm:p-3 rounded-lg hover:bg-neon-blue/10 transition-all duration-300 group"
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
          
          {/* Google Map */}
          <div className="glass-card p-4 sm:p-6 md:p-8 rounded-xl">
            <h3 className="text-xl sm:text-2xl font-display font-bold mb-4 sm:mb-6">Find Me</h3>
            <GoogleMapComponent />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
