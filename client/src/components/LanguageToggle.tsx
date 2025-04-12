import { useLanguage } from "@/context/LanguageContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { useTranslation } from "@/hooks/useTranslation";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();
  const { t } = useTranslation();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "vi" : "en");
  };

  return (
    <Button
      variant="ghost"
      onClick={toggleLanguage}
      className="px-3 rounded-full text-sm"
      aria-label={t("language.toggle")}
    >
      <motion.span
        key={language}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        exit={{ y: 20, opacity: 0 }}
        transition={{ duration: 0.3 }}
      >
        {language === "en" ? "🇬🇧 EN" : "🇻🇳 VI"}
      </motion.span>
    </Button>
  );
}
