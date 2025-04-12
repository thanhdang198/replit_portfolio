import { useLanguage } from '@/hooks/useLanguage';
import { Switch } from '@/components/ui/switch';
import { LANGUAGES } from '@/lib/constants';

const LanguageSwitcher = () => {
  const { language, toggleLanguage, isVietnamese } = useLanguage();

  return (
    <div className="flex items-center">
      <span className={`mr-2 text-sm ${language === LANGUAGES.EN ? 'font-medium' : ''}`}>EN</span>
      <Switch 
        checked={isVietnamese}
        onCheckedChange={toggleLanguage}
        className="data-[state=checked]:bg-primary"
      />
      <span className={`ml-2 text-sm ${language === LANGUAGES.VI ? 'font-medium' : ''}`}>VI</span>
    </div>
  );
};

export default LanguageSwitcher;
