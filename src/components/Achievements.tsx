
import React, { useEffect, useRef } from 'react';
import { achievements } from '@/data';
import AchievementCard from './AchievementCard';

const Achievements: React.FC = () => {
  const achievementsRef = useRef<HTMLDivElement>(null);
  
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

    if (achievementsRef.current) {
      observer.observe(achievementsRef.current);
    }

    return () => {
      if (achievementsRef.current) {
        observer.unobserve(achievementsRef.current);
      }
    };
  }, []);

  return (
    <section id="achievements" className="section-container" ref={achievementsRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">MY ACCOMPLISHMENTS</p>
      </div>
      <h2 className="section-title">Achievements</h2>
      
      <div className="max-w-3xl mx-auto mt-12">
        {achievements.map((achievement) => (
          <AchievementCard key={achievement.id} achievement={achievement} />
        ))}
      </div>
    </section>
  );
};

export default Achievements;
