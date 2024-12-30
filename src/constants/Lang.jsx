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
      language: "Language",
      footer: {
        copyright: "\u00a9 Paolo Sartorio 2024 | Privacy Policy | Terms & Conditions | All Rights Reserved.",
        view_source: "View source",
        report_issue: "Report an issue",
      },
    },
  },
  es: {
    translation: {
      home: "Inicio",
      about: "Acerca de",
      research: "Investigaci\u00f3n",
      publications: "Publicaciones",
      cv: "CV",
      language: "Idioma",
      footer: {
        copyright: "\u00a9 Paolo Sartorio 2024 | Pol\u00edtica de Privacidad | T\u00e9rminos y Condiciones | Todos los derechos reservados.",
        view_source: "Ver c\u00f3digo fuente",
        report_issue: "Reportar un problema",
      },
    },
  },
  fr: {
    translation: {
      home: "Accueil",
      about: "\u00c0 propos",
      research: "Recherche",
      publications: "Publications",
      cv: "CV",
      language: "Langue",
      footer: {
        copyright: "\u00a9 Paolo Sartorio 2024 | Politique de confidentialit\u00e9 | Conditions g\u00e9n\u00e9rales | Tous droits r\u00e9serv\u00e9s.",
        view_source: "Voir la source",
        report_issue: "Signaler un probl\u00e8me",
      },
    },
  },
  it: {
    translation: {
      home: "Home",
      about: "Chi siamo",
      research: "Ricerca",
      publications: "Pubblicazioni",
      cv: "CV",
      language: "Lingua",
      footer: {
        copyright: "\u00a9 Paolo Sartorio 2024 | Politica sulla privacy | Termini e condizioni | Tutti i diritti riservati.",
        view_source: "Visualizza sorgente",
        report_issue: "Segnala un problema",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en", // Default language
    fallbackLng: "en",
    interpolation: {
      escapeValue: false,
    },
  });
  

export default i18n;
