
import React, { useEffect, useRef } from 'react';
import { certifications } from '@/data';
import CertificationCard from './CertificationCard';

const Certifications: React.FC = () => {
  const certificationsRef = useRef<HTMLDivElement>(null);
  
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

    if (certificationsRef.current) {
      observer.observe(certificationsRef.current);
    }

    return () => {
      if (certificationsRef.current) {
        observer.unobserve(certificationsRef.current);
      }
    };
  }, []);

  return (
    <section id="certifications" className="section-container" ref={certificationsRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">MY CREDENTIALS</p>
      </div>
      <h2 className="section-title">Certifications</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {certifications.map((cert) => (
          <CertificationCard key={cert.id} certification={cert} />
        ))}
      </div>
    </section>
  );
};

export default Certifications;
