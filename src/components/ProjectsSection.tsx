import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExternalLink, Github } from 'lucide-react';
import { PROJECTS } from '../constants';
import { ProjectType } from '../types';

const ProjectCard: React.FC<{ project: ProjectType; index: number }> = ({ project, index }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative overflow-hidden rounded-xl dark:bg-space-800 bg-space-200 shadow-xl"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-video overflow-hidden">
        <motion.img
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.4 }}
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 dark:text-white text-space-900">{project.title}</h3>
        <p className="dark:text-space-300 text-space-700 mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech, i) => (
            <span 
              key={i}
              className="px-3 py-1 text-xs rounded-full dark:bg-cosmic-900/40 bg-cosmic-100 dark:text-cosmic-300 text-cosmic-700"
            >
              {tech}
            </span>
          ))}
        </div>
        
        <div className="flex gap-4">
          {project.demoLink && (
            <a 
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg dark:bg-nebula-600 bg-nebula-500 text-white font-medium hover:dark:bg-nebula-700 hover:bg-nebula-600 transition-colors duration-300"
            >
              <ExternalLink size={16} />
              Live Demo
            </a>
          )}
          
          {project.githubLink && (
            <a 
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-lg dark:bg-space-700 bg-space-300 dark:text-white text-space-900 font-medium hover:dark:bg-space-600 hover:bg-space-400 transition-colors duration-300"
            >
              <Github size={16} />
              Code
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const ProjectsSection: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section id="projects" className="py-20 dark:bg-space-900 bg-space-100">
      <div className="container mx-auto px-4">
        <motion.div
          ref={ref}
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : { opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-5xl mx-auto"
        >
          <div className="flex flex-col items-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-2 dark:text-white text-space-900">
              Project Dock
            </h2>
            <div className="w-24 h-1 bg-cosmic-600 rounded"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {PROJECTS.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;