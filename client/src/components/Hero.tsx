import { useTranslation } from 'react-i18next';
import { motion } from 'framer-motion';
import { useScrollToSection } from '@/hooks/useScrollEffect';
import { downloadCV } from '@/lib/downloadCV';
import { useLanguage } from '@/hooks/useLanguage';
import { useGitHubUser } from '@/hooks/useGitHubData';
import { SECTION_IDS, GITHUB_USERNAME, SOCIAL_LINKS, EMAIL } from '@/lib/constants';
import { formatGitHubActivity } from '@/lib/github';
import { Github, Linkedin, Mail, Download, Send } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Hero = () => {
  const { t } = useTranslation();
  const { language } = useLanguage();
  const scrollToSection = useScrollToSection();
  const { toast } = useToast();
  const { data: githubUser, isLoading, isError } = useGitHubUser();

  const handleDownloadCV = async () => {
    try {
      await downloadCV(language);
    } catch (error) {
      toast({
        title: 'Error',
        description: 'Failed to download CV. Please try again later.',
        variant: 'destructive',
      });
    }
  };

  return (
    <section id={SECTION_IDS.HERO} className="min-h-screen flex items-center pt-20 pb-10">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-10">
          <motion.div 
            className="lg:w-1/2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight mb-4">
              <span>{t('hero.greeting')}</span>
              <br />
              <span>
                {t('hero.intro')} <span className="text-primary">{t('hero.name')}</span>
              </span>
            </h1>
            <h2 className="text-2xl sm:text-3xl font-medium text-zinc-700 mb-6">
              {t('hero.title')}
            </h2>
            <p className="text-lg text-zinc-700 mb-8 max-w-lg">
              {t('hero.description')}
            </p>
            <div className="flex flex-wrap gap-4">
              <button 
                onClick={() => scrollToSection(SECTION_IDS.CONTACT)}
                className="bg-primary hover:bg-primary/90 text-white px-6 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                <Send className="mr-2 h-4 w-4" /> {t('hero.contact')}
              </button>
              <button 
                onClick={handleDownloadCV}
                className="bg-white hover:bg-slate-100 border border-primary text-primary px-6 py-3 rounded-lg transition-colors inline-flex items-center"
              >
                <Download className="mr-2 h-4 w-4" /> {t('hero.downloadCV')}
              </button>
            </div>
            <div className="flex mt-8 gap-4">
              <a 
                href={SOCIAL_LINKS.GITHUB(GITHUB_USERNAME)} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-700 hover:text-primary transition-colors text-2xl"
                aria-label="GitHub"
              >
                <Github className="h-6 w-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.LINKEDIN('thanhdt7')} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="text-zinc-700 hover:text-primary transition-colors text-2xl"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a 
                href={SOCIAL_LINKS.EMAIL(EMAIL)} 
                className="text-zinc-700 hover:text-primary transition-colors text-2xl"
                aria-label="Email"
              >
                <Mail className="h-6 w-6" />
              </a>
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="relative">
              <div className="w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-4 border-white shadow-xl">
                <img 
                  src="https://avatars.githubusercontent.com/u/63105759"
                  alt="Đặng Trọng Thành" 
                  className="w-full h-full object-cover"
                />
              </div>
              
              {!isLoading && !isError && githubUser && (
                <motion.div 
                  className="absolute -bottom-4 -right-4 bg-white p-4 rounded-lg shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.5 }}
                >
                  <div className="flex items-center gap-2">
                    <Github className="h-5 w-5" />
                    <div>
                      <div className="text-sm font-semibold">GitHub</div>
                      <div className="text-xs text-zinc-600">
                        {formatGitHubActivity(githubUser)}
                      </div>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
