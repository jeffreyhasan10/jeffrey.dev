
import React, { useState } from 'react';
import { Project } from '@/types';
import { tiltEffect, resetTilt } from '@/utils/animation';
import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);

  const getGradient = (index: number) => {
    const gradients = [
      'from-neon-blue/30 to-neon-purple/10',
      'from-neon-purple/30 to-neon-pink/10',
      'from-neon-pink/30 to-neon-blue/10'
    ];
    return gradients[index % gradients.length];
  };

  return (
    <div 
      className={`tilt-card glass-card rounded-xl overflow-hidden transition-all duration-300 h-full flex flex-col ${
        isHovered ? 'shadow-lg' : ''
      } ${project.featured ? 'border border-neon-blue/30' : 'border border-white/5'}`}
      onMouseMove={tiltEffect}
      onMouseLeave={resetTilt}
      onMouseEnter={() => setIsHovered(true)}
      onMouseOut={() => setIsHovered(false)}
    >
      <div className="tilt-card-shine"></div>
      
      {/* Project Card Header */}
      <div className={`p-1 bg-gradient-to-r ${getGradient(index)}`}>
        <div className="h-1"></div>
      </div>
      
      <div className="p-6 flex-1 flex flex-col tilt-card-content">
        {project.featured && (
          <div className="mb-3">
            <span className="px-2 py-1 rounded-full text-xs font-medium bg-neon-blue/20 text-neon-blue border border-neon-blue/20">
              Featured Project
            </span>
          </div>
        )}
        
        <h3 className="text-xl font-display font-bold mb-3">{project.title}</h3>
        
        <p className="text-gray-300 mb-4 flex-1">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-2 py-1 rounded-md text-xs font-medium bg-dark-300/50 text-gray-300 border border-white/10"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex items-center gap-3 mt-auto">
          <a 
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark-300/50 text-gray-300 hover:bg-neon-blue/20 hover:text-neon-blue transition-colors"
            aria-label="View GitHub Repository"
          >
            <Github className="w-5 h-5" />
          </a>
          
          {project.live && (
            <a 
              href={project.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-dark-300/50 text-gray-300 hover:bg-neon-blue/20 hover:text-neon-blue transition-colors"
              aria-label="View Live Demo"
            >
              <ExternalLink className="w-5 h-5" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
