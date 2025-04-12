import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { motion, AnimatePresence } from 'framer-motion';
import { useHeaderScroll, useScrollToSection } from '@/hooks/useScrollEffect';
import { useLanguage } from '@/hooks/useLanguage';
import { SECTION_IDS } from '@/lib/constants';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X, Moon, Sun } from 'lucide-react';

const Header = () => {
  const { t } = useTranslation();
  const { isScrolled, isVisible } = useHeaderScroll();
  const scrollToSection = useScrollToSection();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    
    // Toggle the dark class on the HTML document
    document.documentElement.classList.toggle('dark');
    
    // Save preference to local storage
    const isDark = document.documentElement.classList.contains('dark');
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  };

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId);
    closeMenu();
  };

  return (
    <header 
      className={`fixed w-full z-50 transition-all duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      } ${isScrolled ? 'bg-white shadow-sm py-2' : 'bg-transparent py-4'}`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <a 
            href="#hero" 
            className="text-xl font-bold text-primary flex items-center"
            onClick={(e) => {
              e.preventDefault();
              handleNavClick(SECTION_IDS.HERO);
            }}
          >
            <span className="mr-2">Đặng Trọng Thành</span>
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {Object.values(SECTION_IDS).slice(1).map((section) => (
              <a 
                key={section}
                href={`#${section}`}
                className="text-zinc-700 hover:text-primary transition-colors"
                onClick={(e) => {
                  e.preventDefault();
                  handleNavClick(section);
                }}
              >
                {t(`header.${section.toLowerCase()}`)}
              </a>
            ))}
          </nav>
          
          <div className="flex items-center space-x-4">
            {/* Language Switcher */}
            <LanguageSwitcher />
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-slate-100 transition-colors" 
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={toggleMenu}
              className="md:hidden p-2 rounded-lg hover:bg-slate-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>
        
        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.nav
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden pb-4 border-t border-gray-200 mt-2 overflow-hidden"
            >
              <div className="flex flex-col space-y-4 pt-4">
                {Object.values(SECTION_IDS).slice(1).map((section) => (
                  <a 
                    key={section}
                    href={`#${section}`}
                    className="text-zinc-700 hover:text-primary transition-colors"
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(section);
                    }}
                  >
                    {t(`header.${section.toLowerCase()}`)}
                  </a>
                ))}
              </div>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
};

export default Header;
