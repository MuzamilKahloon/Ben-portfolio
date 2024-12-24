import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      home: "Home",
      about: "About",
      research: "Research",
      publications: "Publications",
      cv: "CV",
      "404": "404 - Page Not Found",
      language: "Language",
    },
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Acerca de",
      research: "Investigación",
      publications: "Publicaciones",
      cv: "CV",
      "404": "404 - Página no encontrada",
      language: "Idioma",
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "À propos",
      research: "Recherche",
      publications: "Publications",
      cv: "CV",
      "404": "404 - Page non trouvée",
      language: "Langue",
    },
  },
  it: {
    translation: {
      home: "Home",
      about: "Chi siamo",
      research: "Ricerca",
      publications: "Pubblicazioni",
      cv: "CV",
      "404": "404 - Pagina non trovata",
      language: "Lingua",
    },
  },
};

i18n
  .use(initReactI18next) // Bind i18next to React
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en", // Fallback language
    interpolation: {
      escapeValue: false, // React handles XSS
    },
  });

export default i18n;
