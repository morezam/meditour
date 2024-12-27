import React, { createContext, useContext, useState } from "react";
import { translations } from "./translations";

type Language = "ar" | "en" | "fa";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  dir: "rtl" | "ltr";
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined,
);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>("ar");

  const dir = language === "en" ? "ltr" : "rtl";

  const t = (key: string) => {
    const keys = key.split(".");
    let value = translations[language];
    for (const k of keys) {
      if (value === undefined) return key;
      value = value[k];
    }
    return value || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, dir, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
