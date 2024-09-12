import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function LanguageSelector() {
  const { i18n } = useTranslation();
  const [selectedLang, setSelectedLang] = useState("KA");
  const languages = [
    {
      code: "EN",
      lang: "EN",
      icon: "public/Screenshot 2024-09-12 at 1.01.54 PM.png",
    },
    {
      code: "KA",
      lang: "KA",
      icon: "public/Screenshot 2024-09-12 at 1.03.27 PM.png",
    },
  ];

  useEffect(() => {
    const storedLang = localStorage.getItem("language") || "KA";
    setSelectedLang(storedLang);
    i18n.changeLanguage(storedLang);
  }, [i18n]);

  const toggleLanguage = () => {
    const newLang = selectedLang === "KA" ? "EN" : "KA";
    i18n.changeLanguage(newLang);
    setSelectedLang(newLang);
    localStorage.setItem("language", newLang);
  };

  const currentLang = languages.find((lang) => lang.code === selectedLang);

  return (
    <div className="flex items-center">
      <motion.div
        className="relative cursor-pointer w-[60px] h-[32px]"
        key={selectedLang}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        onClick={toggleLanguage}
      >
        <img
          src={currentLang?.icon}
          alt={`${currentLang?.lang} flag`}
          className="w-full h-full object-cover rounded-[2px]"
        />
      </motion.div>
    </div>
  );
}
