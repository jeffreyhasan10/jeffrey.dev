
import React, { useEffect, useRef } from 'react';
import { education } from '@/data';
import EducationCard from './EducationCard';

const Education: React.FC = () => {
  const educationRef = useRef<HTMLDivElement>(null);
  
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

    if (educationRef.current) {
      observer.observe(educationRef.current);
    }

    return () => {
      if (educationRef.current) {
        observer.unobserve(educationRef.current);
      }
    };
  }, []);

  return (
    <section id="education" className="section-container" ref={educationRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">MY EDUCATION</p>
      </div>
      <h2 className="section-title">Academic Background</h2>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-12">
        {education.map((edu) => (
          <EducationCard key={edu.id} education={edu} />
        ))}
      </div>
    </section>
  );
};

export default Education;
