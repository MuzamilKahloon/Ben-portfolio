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
      profile_alt: "Profile picture of Ben Jarman",
      welcome: "Welcome",
      commitment_text: "Experience Matters: A Commitment to Justice and Human Rights",
      experience_description:
        "With over 15 years of experience as a criminal defense attorney, 5 years as a law professor, and a growing focus on comparative criminal law and human rights, I bring a unique perspective to the pursuit of justice.",
      explore_website:
        "Explore my website to learn more about my work, my research on comparative criminal law, and my efforts to promote justice on a global scale.",
      email: "Email",
      linkedin: "LinkedIn",
      orcid: "ORCID",
      zotero: "Zotero",
      google_scholar: "Google Scholar",
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
      profile_alt: "Foto de perfil de Ben Jarman",
      welcome: "Bienvenido",
      commitment_text: "La experiencia importa: un compromiso con la justicia y los derechos humanos",
      experience_description:
        "Con más de 15 años de experiencia como abogado defensor penal, 5 años como profesor de derecho y un enfoque creciente en el derecho penal comparado y los derechos humanos, aporto una perspectiva única a la búsqueda de justicia.",
      explore_website:
        "Explore mi sitio web para obtener más información sobre mi trabajo, mi investigación sobre derecho penal comparado y mis esfuerzos para promover la justicia a nivel mundial.",
      email: "Correo electrónico",
      linkedin: "LinkedIn",
      orcid: "ORCID",
      zotero: "Zotero",
      google_scholar: "Google Scholar",
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
      profile_alt: "Photo de profil de Ben Jarman",
      welcome: "Bienvenue",
      commitment_text: "L'expérience compte : un engagement pour la justice et les droits de l'homme",
      experience_description:
        "Avec plus de 15 ans d'expérience en tant qu'avocat de la défense pénale, 5 ans en tant que professeur de droit et un intérêt croissant pour le droit pénal comparé et les droits de l'homme, j'apporte une perspective unique à la quête de justice.",
      explore_website:
        "Explorez mon site Web pour en savoir plus sur mon travail, mes recherches sur le droit pénal comparé et mes efforts pour promouvoir la justice à l'échelle mondiale.",
      email: "E-mail",
      linkedin: "LinkedIn",
      orcid: "ORCID",
      zotero: "Zotero",
      google_scholar: "Google Scholar",
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
      profile_alt: "Immagine del profilo di Ben Jarman",
      welcome: "Benvenuto",
      commitment_text: "L'esperienza conta: un impegno per la giustizia e i diritti umani",
      experience_description:
        "Con oltre 15 anni di esperienza come avvocato penalista, 5 anni come professore di diritto e un interesse crescente per il diritto penale comparato e i diritti umani, offro una prospettiva unica nella ricerca della giustizia.",
      explore_website:
        "Esplora il mio sito web per saperne di più sul mio lavoro, le mie ricerche sul diritto penale comparato e i miei sforzi per promuovere la giustizia a livello globale.",
      email: "E-mail",
      linkedin: "LinkedIn",
      orcid: "ORCID",
      zotero: "Zotero",
      google_scholar: "Google Scholar",
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
