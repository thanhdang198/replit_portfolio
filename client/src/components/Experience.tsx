import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { SECTION_IDS } from '@/lib/constants';
import experienceData from '@/data/experienceData';
import TimelineItem from './TimelineItem';

const Experience = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollEffect(sectionRef, { threshold: 0.1 });

  return (
    <section 
      id={SECTION_IDS.EXPERIENCE} 
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
          <h2 className="text-3xl font-bold mb-4">{t('experience.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="timeline-container mx-auto max-w-4xl relative">
          {/* Timeline vertical line */}
          <div className="absolute w-0.5 bg-slate-200 top-0 bottom-0 left-6 md:left-8"></div>
          
          {experienceData.map((item, index) => (
            <TimelineItem 
              key={item.id}
              data={item}
              index={index}
              isVisible={isVisible}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
