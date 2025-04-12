import { useTranslation } from 'react-i18next';
import { useRef } from 'react';
import { motion } from 'framer-motion';
import { useScrollEffect } from '@/hooks/useScrollEffect';
import { SECTION_IDS, EMAIL, PHONE, LOCATION } from '@/lib/constants';
import educationData from '@/data/educationData';
import { Book, MapPin, Mail, Phone, User } from 'lucide-react';

const About = () => {
  const { t } = useTranslation();
  const sectionRef = useRef<HTMLElement>(null);
  const isVisible = useScrollEffect(sectionRef, { threshold: 0.1 });

  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section 
      id={SECTION_IDS.ABOUT} 
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
          <h2 className="text-3xl font-bold mb-4">{t('about.title')}</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <p className="text-lg mb-6">{t('about.description1')}</p>
            <p className="text-lg mb-6">{t('about.description2')}</p>
            <p className="text-lg mb-8">{t('about.description3')}</p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-medium mb-4">{t('about.personalInfo')}</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <User className="text-primary mt-1 w-6" />
                    <div className="ml-3">
                      <span className="font-medium">{t('about.name')}:</span> Thanh Doan
                    </div>
                  </li>
                  <li className="flex items-start">
                    <MapPin className="text-primary mt-1 w-6" />
                    <div className="ml-3">
                      <span className="font-medium">{t('about.location')}:</span> {LOCATION}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Mail className="text-primary mt-1 w-6" />
                    <div className="ml-3">
                      <span className="font-medium">{t('about.email')}:</span> {EMAIL}
                    </div>
                  </li>
                  <li className="flex items-start">
                    <Phone className="text-primary mt-1 w-6" />
                    <div className="ml-3">
                      <span className="font-medium">{t('about.phone')}:</span> {PHONE}
                    </div>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-medium mb-4">{t('about.interests')}</h3>
                <div className="flex flex-wrap gap-2">
                  {t('about.interestsList', { returnObjects: true }).map((interest: string, index: number) => (
                    <span key={index} className="bg-slate-100 px-3 py-1 rounded-full text-sm">
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2"
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            variants={fadeInUpVariants}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="bg-slate-50 p-8 rounded-lg shadow-lg">
              <h3 className="text-xl font-medium mb-6">{t('about.education')}</h3>
              <div className="space-y-6">
                {educationData.map((education, index) => (
                  <motion.div 
                    key={education.id}
                    className="bg-white p-6 rounded-lg shadow-sm"
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                    variants={fadeInUpVariants}
                    transition={{ duration: 0.4, delay: 0.5 + (index * 0.1) }}
                  >
                    <div className="flex justify-between items-start flex-wrap gap-2">
                      <div>
                        <h4 className="text-lg font-medium">{t(`educationItems.${index}.institution`)}</h4>
                        <p className="text-zinc-600">{t(`educationItems.${index}.degree`)}</p>
                      </div>
                      <span className="text-sm bg-primary/20 text-primary px-3 py-1 rounded-full">
                        {t(`educationItems.${index}.period`)}
                      </span>
                    </div>
                    {education.gpa && (
                      <p className="mt-3 text-sm">{t(`educationItems.${index}.gpa`)}</p>
                    )}
                    <p className="mt-2 text-sm">{t(`educationItems.${index}.description`)}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
