import { useLanguage } from "@/context/LanguageContext";
import translations from "@/lib/translations";

type TranslationKey = keyof typeof translations.en | string;

// Add an index signature to the translations type
type TranslationsType = typeof translations.en & {
  [key: string]: string;
};

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey, params?: Record<string, string>) => {
    const currentTranslations = translations[language] as TranslationsType;
    const fallbackTranslations = translations.en as TranslationsType;
    
    let text = currentTranslations[key] || fallbackTranslations[key] || String(key);

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }

    return text;
  };

  return { t, language };
}
