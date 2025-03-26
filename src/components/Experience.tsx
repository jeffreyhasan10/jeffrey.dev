
import React, { useEffect, useRef } from 'react';
import { experience } from '@/data';
import ExperienceCard from './ExperienceCard';

const Experience: React.FC = () => {
  const experienceRef = useRef<HTMLDivElement>(null);
  
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

    if (experienceRef.current) {
      observer.observe(experienceRef.current);
    }

    return () => {
      if (experienceRef.current) {
        observer.unobserve(experienceRef.current);
      }
    };
  }, []);

  return (
    <section id="experience" className="section-container" ref={experienceRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">WORK HISTORY</p>
      </div>
      <h2 className="section-title">Professional Experience</h2>
      
      <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-6">
        {experience.map((exp) => (
          <ExperienceCard key={exp.id} experience={exp} />
        ))}
      </div>
    </section>
  );
};

export default Experience;
