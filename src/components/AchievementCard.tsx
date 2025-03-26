
import React, { useState } from 'react';
import { Achievement } from '@/types';
import { tiltEffect, resetTilt } from '@/utils/animation';
import { Trophy, ExternalLink } from 'lucide-react';

interface AchievementCardProps {
  achievement: Achievement;
}

const AchievementCard: React.FC<AchievementCardProps> = ({ achievement }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`tilt-card glass-card rounded-xl transition-all duration-300 ${isHovered ? 'shadow-lg' : ''} animated-border`}
      onMouseMove={tiltEffect}
      onMouseLeave={resetTilt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="tilt-card-shine"></div>
      <div className="p-6 tilt-card-content">
        <div className="flex items-center mb-4">
          <div className="flex items-center justify-center w-10 h-10 rounded-full bg-neon-blue/20 mr-4">
            <Trophy className="w-5 h-5 text-neon-blue" />
          </div>
          <h3 className="text-xl font-display font-bold text-white">{achievement.title}</h3>
        </div>
        
        <div className="mb-4">
          <ul className="space-y-2">
            {achievement.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-neon-blue mr-2">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        {achievement.link && (
          <a 
            href={achievement.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-sm text-neon-blue hover:text-neon-purple transition-colors"
          >
            <ExternalLink className="w-4 h-4 mr-1" />
            <span>View Project</span>
          </a>
        )}
      </div>
    </div>
  );
};

export default AchievementCard;
