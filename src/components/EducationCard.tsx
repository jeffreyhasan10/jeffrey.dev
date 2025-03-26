
import React, { useState } from 'react';
import { Education } from '@/types';
import { tiltEffect, resetTilt } from '@/utils/animation';
import { GraduationCap, CalendarDays, BarChart } from 'lucide-react';

interface EducationCardProps {
  education: Education;
}

const EducationCard: React.FC<EducationCardProps> = ({ education }) => {
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
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-xl font-display font-bold text-white">{education.degree}</h3>
            <div className="flex items-center mt-2 text-sm text-gray-300">
              <GraduationCap className="w-4 h-4 mr-2 text-neon-blue" />
              <span>{education.institution}</span>
            </div>
          </div>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-4">
          <div className="flex items-center text-sm text-gray-300">
            <CalendarDays className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{education.duration}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-300">
            <BarChart className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{education.grade}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
