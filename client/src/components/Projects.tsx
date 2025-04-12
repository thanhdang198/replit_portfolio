import { useTranslation } from 'react-i18next';
import { useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { SECTION_IDS, PROJECT_FILTERS, GITHUB_USERNAME, SOCIAL_LINKS } from '@/lib/constants';
import projectsData from '@/data/projectsData';
import GitHubCalendar from './GitHubCalendar';
import { ExternalLink, Github, ArrowRight } from 'lucide-react';
import { useGitHubRepos } from '@/hooks/useGitHubData';

const Projects = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollEffect(sectionRef, { threshold: 0.1 });
  const [activeFilter, setActiveFilter] = useState('All');
  
  const { repos, isLoading, isError } = useGitHubRepos();

  // Combine GitHub repos with project data when available
  const displayProjects = activeFilter === 'All'
    ? projectsData
    : projectsData.filter(project => project.category === activeFilter);

  return (
    <section 
      id={SECTION_IDS.PROJECTS} 
      ref={sectionRef} 
      className="py-20"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t('projects.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        {/* GitHub Contributions */}
        <motion.div 
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h3 className="text-xl font-medium mb-8">{t('projects.contributions')}</h3>
          <GitHubCalendar username={GITHUB_USERNAME} />
        </motion.div>
        
        {/* Projects Filter */}
        <div className="flex flex-wrap justify-between mb-12">
          <motion.h3 
            className="text-xl font-medium mb-6"
            initial={{ opacity: 0, x: -20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            {t('projects.featured')}
          </motion.h3>
          <motion.div 
            className="flex items-center mb-6"
            initial={{ opacity: 0, x: 20 }}
            animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span className="mr-3 text-sm text-zinc-600">{t('projects.filter')}:</span>
            <div className="flex flex-wrap gap-2">
              {PROJECT_FILTERS.map((filter, index) => (
                <button
                  key={index}
                  className={`px-3 py-1 rounded-lg text-sm transition-colors ${
                    activeFilter === filter 
                      ? 'bg-primary text-white' 
                      : 'bg-slate-100 hover:bg-slate-200'
                  }`}
                  onClick={() => setActiveFilter(filter)}
                >
                  {filter}
                </button>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
            >
              <div className="relative h-48 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={t(`projectItems.${index}.title`)} 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 py-2 px-4 bg-gradient-to-t from-black/70 to-transparent text-white">
                  <span className="text-xs bg-primary px-2 py-1 rounded">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-bold text-lg">{t(`projectItems.${index}.title`)}</h4>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a 
                        href={project.githubUrl} 
                        className="text-zinc-600 hover:text-primary transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="View on GitHub"
                      >
                        <Github className="h-5 w-5" />
                      </a>
                    )}
                    {project.demoUrl && (
                      <a 
                        href={project.demoUrl} 
                        className="text-zinc-600 hover:text-primary transition-colors" 
                        target="_blank" 
                        rel="noopener noreferrer"
                        aria-label="Live Demo"
                      >
                        <ExternalLink className="h-5 w-5" />
                      </a>
                    )}
                  </div>
                </div>
                <p className="text-zinc-600 mb-4">{t(`projectItems.${index}.description`)}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="bg-slate-100 px-2 py-1 rounded text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
        
        {/* View More Link */}
        <motion.div 
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a 
            href={SOCIAL_LINKS.GITHUB(GITHUB_USERNAME)} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            <span className="mr-2">{t('projects.viewMore')}</span>
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
