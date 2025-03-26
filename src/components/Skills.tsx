
import React, { useEffect, useRef } from 'react';
import { skills } from '@/data';
import SkillCard from './SkillCard';

const Skills: React.FC = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
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

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <section id="skills" className="section-container" ref={skillsRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">MY EXPERTISE</p>
      </div>
      <h2 className="section-title">Technical Skills</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
        {skills.map((skillGroup, index) => (
          <SkillCard 
            key={skillGroup.category} 
            category={skillGroup.category} 
            skills={skillGroup.skills}
            index={index}
          />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <div className="glass-card p-8 rounded-xl max-w-3xl mx-auto">
          <h3 className="text-2xl font-display font-bold mb-4">My Approach to Development</h3>
          <p className="text-gray-300">
            I believe in writing clean, maintainable code and staying current with industry best practices. 
            My development philosophy emphasizes user-centered design, performance optimization, and 
            creating scalable solutions that solve real-world problems.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Skills;
