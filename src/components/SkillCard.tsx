
import React, { useState } from 'react';
import { tiltEffect, resetTilt } from '@/utils/animation';

interface SkillCardProps {
  category: string;
  skills: string[];
  index: number;
}

const SkillCard: React.FC<SkillCardProps> = ({ category, skills, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  const getBgColor = (index: number) => {
    const colors = [
      'from-neon-blue/20 to-neon-purple/10',
      'from-neon-purple/20 to-neon-pink/10',
      'from-neon-pink/20 to-neon-blue/10',
      'from-neon-blue/20 to-neon-pink/10',
      'from-neon-purple/20 to-neon-blue/10'
    ];
    return colors[index % colors.length];
  };

  return (
    <div 
      className={`tilt-card glass-card rounded-xl bg-gradient-to-br ${getBgColor(index)} border border-white/5 transition-all duration-300 ${isHovered ? 'shadow-lg' : ''}`}
      onMouseMove={tiltEffect}
      onMouseLeave={resetTilt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="tilt-card-shine"></div>
      <div className="p-6 tilt-card-content">
        <h3 className="text-xl font-display font-bold mb-4">{category}</h3>
        <div className="flex flex-wrap gap-2">
          {skills.map((skill, i) => (
            <span 
              key={i}
              className="px-3 py-1 rounded-full text-sm font-medium bg-dark-300/50 border border-white/10 text-gray-300"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SkillCard;
