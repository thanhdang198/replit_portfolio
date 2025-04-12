import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { TechnicalSkill } from '@/types';

interface SkillBarProps {
  skill: TechnicalSkill;
  index: number;
  isVisible: boolean;
}

const SkillBar = ({ skill, index, isVisible }: SkillBarProps) => {
  const { t } = useTranslation();
  const { name } = skill;

  return (
    <motion.div 
      className="mb-4"
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
    >
      <div className="flex items-center">
        <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
        <h4 className="font-medium">{t(`technicalSkills.${index}.name`)}</h4>
      </div>
    </motion.div>
  );
};

export default SkillBar;
