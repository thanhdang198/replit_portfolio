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
  const { name, level } = skill;

  return (
    <motion.div 
      className="mb-6"
      initial={{ opacity: 0, y: 10 }}
      animate={isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
      transition={{ duration: 0.3, delay: 0.3 + (index * 0.1) }}
    >
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-medium">{t(`technicalSkills.${index}.name`)}</h4>
        <span className="text-sm">{level}%</span>
      </div>
      <div className="w-full bg-slate-200 rounded-full h-2.5">
        <motion.div 
          className="bg-primary h-2.5 rounded-full"
          initial={{ width: 0 }}
          animate={isVisible ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.5 + (index * 0.1) }}
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default SkillBar;
