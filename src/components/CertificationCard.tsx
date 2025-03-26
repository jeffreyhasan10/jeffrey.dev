
import React, { useState } from 'react';
import { Certification } from '@/types';
import { tiltEffect, resetTilt } from '@/utils/animation';
import { Award, CalendarDays, BarChart } from 'lucide-react';

interface CertificationCardProps {
  certification: Certification;
}

const CertificationCard: React.FC<CertificationCardProps> = ({ certification }) => {
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
        <div className="flex items-center mb-3">
          <Award className="w-5 h-5 mr-3 text-neon-blue" />
          <h3 className="text-lg font-display font-bold text-white">{certification.name}</h3>
        </div>
        
        <p className="text-gray-300 mb-4 text-sm">
          Issued by <span className="text-white">{certification.issuer}</span>
        </p>
        
        <div className="flex items-center gap-4 mt-4 text-sm text-gray-300">
          <div className="flex items-center">
            <CalendarDays className="w-4 h-4 mr-2 text-neon-blue" />
            <span>{certification.date}</span>
          </div>
          
          {certification.score && (
            <div className="flex items-center">
              <BarChart className="w-4 h-4 mr-2 text-neon-blue" />
              <span>Score: {certification.score}</span>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CertificationCard;
