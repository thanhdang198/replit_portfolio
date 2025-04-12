import { useLanguage } from "@/context/LanguageContext";
import translations from "@/lib/translations";

type TranslationKey = keyof typeof translations.en;

export function useTranslation() {
  const { language } = useLanguage();

  const t = (key: TranslationKey, params?: Record<string, string>) => {
    let text = translations[language][key] || translations.en[key] || key;

    if (params) {
      Object.entries(params).forEach(([key, value]) => {
        text = text.replace(new RegExp(`{{${key}}}`, 'g'), value);
      });
    }

    return text;
  };

  return { t, language };
}
