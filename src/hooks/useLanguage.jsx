import React, { createContext, useContext, useState, useEffect } from 'react';

export const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
  // Read saved language or default to 'id' (Bahasa Indonesia)
  const [lang, setLang] = useState(() => {
    return localStorage.getItem('app_lang') || 'id';
  });

  useEffect(() => {
    localStorage.setItem('app_lang', lang);
  }, [lang]);

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'id' ? 'en' : 'id'));
  };

  return (
    <LanguageContext.Provider value={{ lang, setLang, toggleLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => useContext(LanguageContext);
