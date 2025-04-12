import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { ExperienceItem } from '@/types';
import { Briefcase } from 'lucide-react';

interface TimelineItemProps {
  data: ExperienceItem;
  index: number;
  isVisible: boolean;
}

const TimelineItem = ({ data, index, isVisible }: TimelineItemProps) => {
  const { t } = useTranslation();
  const { title, company, period, description, technologies } = data;

  return (
    <motion.div
      className="relative pl-10 md:pl-16 pb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5, delay: 0.1 * index }}
    >
      {/* Timeline dot */}
      <div className="absolute left-0 top-1.5 w-12 h-12 flex items-center justify-center">
        <div className="w-3.5 h-3.5 bg-primary rounded-full z-10 border-2 border-white"></div>
      </div>
      
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex flex-col md:flex-row justify-between mb-4">
          <div>
            <h3 className="text-xl font-bold text-primary">
              {t(`experienceItems.${index}.title`)}
            </h3>
            <h4 className="text-lg font-medium">
              {t(`experienceItems.${index}.company`)}
            </h4>
          </div>
          <div className="text-sm font-medium bg-primary/20 text-primary px-3 py-1 rounded-full h-fit mt-2 md:mt-0">
            {t(`experienceItems.${index}.period`)}
          </div>
        </div>
        <p className="mb-4">{t(`experienceItems.${index}.description`)}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, techIndex) => (
            <span key={techIndex} className="bg-slate-100 px-3 py-1 rounded-full text-xs">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default TimelineItem;
