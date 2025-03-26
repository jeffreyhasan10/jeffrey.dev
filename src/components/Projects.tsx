
import React, { useEffect, useRef } from 'react';
import { projects } from '@/data';
import ProjectCard from './ProjectCard';

const Projects: React.FC = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
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

    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }

    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);

  // Get featured projects
  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <section id="projects" className="section-container" ref={projectsRef}>
      <div className="blue-glassmorphism inline-block px-3 py-1 rounded-full mb-2">
        <p className="text-neon-blue font-medium text-xs">MY WORK</p>
      </div>
      <h2 className="section-title">Featured Projects</h2>
      
      {featuredProjects.length > 0 && (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      )}
      
      {otherProjects.length > 0 && (
        <>
          <h3 className="text-2xl font-display font-bold mt-16 mb-8">Other Projects</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index + featuredProjects.length} />
            ))}
          </div>
        </>
      )}
    </section>
  );
};

export default Projects;
