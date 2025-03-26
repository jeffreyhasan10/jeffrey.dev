
import React, { useState } from 'react';
import { tiltEffect, resetTilt } from '@/utils/animation';
import { Experience } from '@/types';
import { Briefcase, MapPin, CalendarDays, ExternalLink } from 'lucide-react';

interface ExperienceCardProps {
  experience: Experience;
}

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`tilt-card glass-card rounded-xl transition-all duration-300 ${isHovered ? 'shadow-lg' : ''} border border-white/5`}
      onMouseMove={tiltEffect}
      onMouseLeave={resetTilt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="tilt-card-shine"></div>
      <div className="p-6 tilt-card-content">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-display font-bold text-white">{experience.role}</h3>
          <div className="px-3 py-1 rounded-full text-xs font-medium bg-neon-blue/20 text-neon-blue border border-neon-blue/20">
            {experience.type}
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row sm:items-center gap-3 mb-4 text-sm text-gray-300">
          <div className="flex items-center">
            <Briefcase className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{experience.company}</span>
          </div>
          <div className="hidden sm:block text-gray-500">•</div>
          <div className="flex items-center">
            <MapPin className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{experience.location}</span>
          </div>
          <div className="hidden sm:block text-gray-500">•</div>
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{experience.duration}</span>
          </div>
        </div>
        
        <div className="mb-4">
          <ul className="space-y-2">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start">
                <span className="text-neon-blue mr-2">•</span>
                <span className="text-gray-300">{item}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {experience.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 rounded-md text-xs font-medium bg-dark-300/50 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        
        {experience.github && (
          <a 
            href={experience.github}
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

export default ExperienceCard;
