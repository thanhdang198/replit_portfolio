import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollEffect';
import { SECTION_IDS, GITHUB_USERNAME, LINKEDIN_USERNAME, EMAIL, SOCIAL_LINKS } from '@/lib/constants';
import { Github, Linkedin, Mail, Twitter } from 'lucide-react';

const Footer = () => {
  const { t } = useTranslation();
  const scrollToSection = useScrollToSection();

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
  };

  return (
    <footer className="bg-zinc-900 text-white py-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-2xl font-bold">Thanh Doan</h3>
            <p className="text-gray-400">Frontend Developer</p>
          </div>
          
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <nav className="flex flex-wrap justify-center gap-6">
              {Object.values(SECTION_IDS).slice(1).map((section) => (
                <a 
                  key={section}
                  href={`#${section}`}
                  className="hover:text-primary transition-colors"
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(section);
                  }}
                >
                  {t(`header.${section.toLowerCase()}`)}
                </a>
              ))}
            </nav>
            
            <div className="flex justify-center gap-4">
              <a 
                href={SOCIAL_LINKS.GITHUB(GITHUB_USERNAME)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.LINKEDIN(LINKEDIN_USERNAME)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href={SOCIAL_LINKS.EMAIL(EMAIL)} 
                className="hover:text-primary transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400">
          <p>{t('footer.copyright')}</p>
          <p className="mt-2 text-sm">{t('footer.designed')}</p>
        </div>
      </div>

      {/* Back to top button */}
      <BackToTopButton />
    </footer>
  );
};

const BackToTopButton = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <motion.button
      className="fixed bottom-6 right-6 bg-primary text-white p-3 rounded-full shadow-lg z-10"
      onClick={scrollToTop}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      aria-label="Back to top"
    >
      <svg 
        xmlns="http://www.w3.org/2000/svg" 
        width="24" 
        height="24" 
        viewBox="0 0 24 24" 
        fill="none" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      >
        <path d="m18 15-6-6-6 6"/>
      </svg>
    </motion.button>
  );
};

export default Footer;
