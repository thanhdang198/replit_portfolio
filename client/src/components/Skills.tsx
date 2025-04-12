import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { SECTION_IDS } from '@/lib/constants';
import SkillBar from './SkillBar';
import { technicalSkills, developmentTools, frontendLibraries, buildTools, testingTools, languages } from '@/data/skillsData';
import { FaGitAlt, FaGithub, FaCodeBranch, FaTerminal, FaLaptopCode, 
         FaReact, FaVuejs, FaJs, FaBootstrap, FaWind, FaCube,
         FaNodeJs, FaBolt, FaTasks, FaVial, FaCheckCircle, FaBug } from 'react-icons/fa';

const Skills = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollEffect(sectionRef, { threshold: 0.1 });

  // Map icon names to components
  const getIcon = (iconName: string, className = "mr-2") => {
    const icons: Record<string, React.ReactNode> = {
      'git-alt': <FaGitAlt className={className} />,
      'github': <FaGithub className={className} />,
      'code-branch': <FaCodeBranch className={className} />,
      'terminal': <FaTerminal className={className} />,
      'laptop-code': <FaLaptopCode className={className} />,
      'react': <FaReact className={className} />,
      'vuejs': <FaVuejs className={className} />,
      'js': <FaJs className={className} />,
      'bootstrap': <FaBootstrap className={className} />,
      'wind': <FaWind className={className} />,
      'cube': <FaCube className={className} />,
      'node-js': <FaNodeJs className={className} />,
      'bolt': <FaBolt className={className} />,
      'tasks': <FaTasks className={className} />,
      'vial': <FaVial className={className} />,
      'check-circle': <FaCheckCircle className={className} />,
      'bug': <FaBug className={className} />
    };
    
    return icons[iconName] || null;
  };

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id={SECTION_IDS.SKILLS} 
      ref={sectionRef} 
      className="py-20 bg-white"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold mb-4">{t('skills.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* Technical Skills */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-6">{t('skills.technicalSkills')}</h3>
            
            {technicalSkills.map((skill, index) => (
              <SkillBar 
                key={skill.id} 
                skill={skill} 
                index={index} 
                isVisible={isVisible}
              />
            ))}
          </motion.div>
          
          {/* Tools & Other Skills */}
          <motion.div
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <h3 className="text-xl font-medium mb-6">{t('skills.toolsAndOther')}</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div 
                className="col-span-2"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.4, delay: 0.4 }}
              >
                <h4 className="font-medium mb-4">{t('skills.developmentTools')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {developmentTools.map(tool => (
                    <span key={tool.id} className="bg-slate-100 px-4 py-2 rounded-lg flex items-center">
                      {getIcon(tool.icon, "text-primary mr-2")} {tool.name}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div 
                className="col-span-2"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.4, delay: 0.5 }}
              >
                <h4 className="font-medium mb-4">{t('skills.frontendLibraries')}</h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                  {frontendLibraries.map(lib => (
                    <span key={lib.id} className="bg-slate-100 px-4 py-2 rounded-lg flex items-center">
                      {getIcon(lib.icon, "text-primary mr-2")} {lib.name}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="col-span-1 md:col-span-1"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.4, delay: 0.6 }}
              >
                <h4 className="font-medium mb-4">{t('skills.buildTools')}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {buildTools.map(tool => (
                    <span key={tool.id} className="bg-slate-100 px-4 py-2 rounded-lg flex items-center">
                      {getIcon(tool.icon, "text-primary mr-2")} {tool.name}
                    </span>
                  ))}
                </div>
              </motion.div>
              
              <motion.div
                className="col-span-1 md:col-span-1"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                <h4 className="font-medium mb-4">{t('skills.testing')}</h4>
                <div className="grid grid-cols-1 gap-3">
                  {testingTools.map(tool => (
                    <span key={tool.id} className="bg-slate-100 px-4 py-2 rounded-lg flex items-center">
                      {getIcon(tool.icon, "text-primary mr-2")} {tool.name}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        
        {/* Languages */}
        <motion.div 
          className="mt-16"
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          variants={fadeInUpVariants}
          transition={{ duration: 0.5, delay: 0.8 }}
        >
          <h3 className="text-xl font-medium mb-6 text-center">{t('skills.languages')}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {languages.map((language, index) => (
              <motion.div 
                key={language.id} 
                className="bg-slate-100 px-6 py-4 rounded-lg"
                initial="hidden"
                animate={isVisible ? "visible" : "hidden"}
                variants={fadeInUpVariants}
                transition={{ duration: 0.4, delay: 0.9 + (index * 0.1) }}
              >
                <h4 className="font-medium mb-1">{t(`languages.${index}.name`)}</h4>
                <p className="text-sm text-zinc-600">{t(`languages.${index}.description`)}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills;
