import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';
import { LANGUAGES } from '@/lib/constants';

export function useLanguage() {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language || LANGUAGES.EN);

  const changeLanguage = (lang: string) => {
    i18n.changeLanguage(lang);
    setLanguage(lang);
    localStorage.setItem('i18nextLng', lang);
  };

  const toggleLanguage = () => {
    const newLang = language === LANGUAGES.EN ? LANGUAGES.VI : LANGUAGES.EN;
    changeLanguage(newLang);
  };

  const isVietnamese = language === LANGUAGES.VI;

  useEffect(() => {
    // Update state if i18n language changes externally
    setLanguage(i18n.language);
  }, [i18n.language]);

  return {
    language,
    changeLanguage,
    toggleLanguage,
    isVietnamese
  };
}
