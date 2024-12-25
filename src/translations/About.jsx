// src/i18n.js

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
      footer: {
        copyright: "© Paolo Sartorio 2024 | Privacy Policy | Terms & Conditions | All Rights Reserved.",
        view_source: "View source",
        report_issue: "Report an issue",
      },
      about: {
        title: "About Me and My Work",
        contact: "Contact",
        email: "Email",
        linkedin: "LinkedIn",
        orcid: "ORCID",
        zotero: "Zotero",
        google_scholar: "Google Scholar",
        paragraph1:
          "I did not enter the legal field with criminal law in mind. I initially saw the legal system as a well-oiled machine that ensured only the guilty would be punished. However, my experiences soon revealed a more painful reality. Our criminal justice system, though not without merit, disproportionately targets vulnerable populations—those with limited resources who are often overrepresented behind bars and most in need of help. This systemic issue is not confined to the United States but is a global concern. It was this disparity that led me to seek change.",
        paragraph2:
          "My work is driven by the belief that justice should be focused not just on punishment but on human rights and second chances. We are more than the worst thing we have done, and how we treat the most derided individuals in our society is the truest reflection of who we are as a people. My goal is to contribute to a justice system that acknowledges human dignity and offers opportunities for redemption and rehabilitation.",
        paragraph3:
          "I am a visiting professor at IE University Law School in Spain, where I teach criminal law and human rights. I have also been teaching law and human rights at the University of Minnesota Law School since 2020. In 2023, I completed my doctorate in Law at the Universidad Carlos III de Madrid. My research focused on comparative studies of life sentence practices, particularly the reimplementation of life sentences in Spain and the U.S., and the human rights implications of such sentences.",
      },
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
      footer: {
        copyright: "© Paolo Sartorio 2024 | Política de Privacidad | Términos y Condiciones | Todos los derechos reservados.",
        view_source: "Ver código fuente",
        report_issue: "Reportar un problema",
      },
      about: {
        title: "Acerca de mí y mi trabajo",
        contact: "Contacto",
        email: "Correo electrónico",
        linkedin: "LinkedIn",
        orcid: "ORCID",
        zotero: "Zotero",
        google_scholar: "Google Scholar",
        paragraph1:
          "No ingresé al campo legal con la intención del derecho penal. Inicialmente veía el sistema legal como una máquina bien engrasada que aseguraba que solo los culpables fueran castigados. Sin embargo, mis experiencias pronto revelaron una realidad más dolorosa. Nuestro sistema de justicia penal, aunque no carece de méritos, discrimina desproporcionadamente a las poblaciones vulnerables: aquellas con recursos limitados que a menudo están sobrerrepresentadas tras las rejas y son las que más necesitan ayuda. Este problema sistémico no se limita a los Estados Unidos, sino que es una preocupación global. Fue esta disparidad la que me llevó a buscar el cambio.",
        paragraph2:
          "Mi trabajo está impulsado por la creencia de que la justicia debería centrarse no solo en el castigo sino también en los derechos humanos y las segundas oportunidades. Somos más que la peor cosa que hemos hecho, y cómo tratamos a los individuos más desdichados en nuestra sociedad es el reflejo más verdadero de quiénes somos como pueblo. Mi objetivo es contribuir a un sistema de justicia que reconozca la dignidad humana y ofrezca oportunidades para la redención y la rehabilitación.",
        paragraph3:
          "Soy profesor visitante en la Facultad de Derecho de la IE University en España, donde enseño derecho penal y derechos humanos. También he estado enseñando derecho y derechos humanos en la Facultad de Derecho de la Universidad de Minnesota desde 2020. En 2023, completé mi doctorado en Derecho en la Universidad Carlos III de Madrid. Mi investigación se centró en estudios comparativos de prácticas de cadena perpetua, particularmente la reimplementación de cadenas perpetuas en España y EE.UU., y las implicaciones de derechos humanos de tales sentencias.",
      },
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
      commitment_text: "L'expérience compte : un engagement envers la justice et les droits de l'homme",
      experience_description:
        "Avec plus de 15 ans d'expérience en tant qu'avocat de la défense pénale, 5 ans en tant que professeur de droit et un intérêt croissant pour le droit pénal comparé et les droits de l'homme, j'apporte une perspective unique à la quête de justice.",
      explore_website:
        "Explorez mon site web pour en savoir plus sur mon travail, mes recherches sur le droit pénal comparé et mes efforts pour promouvoir la justice à l'échelle mondiale.",
      email: "E-mail",
      linkedin: "LinkedIn",
      orcid: "ORCID",
      zotero: "Zotero",
      google_scholar: "Google Scholar",
      footer: {
        copyright: "© Paolo Sartorio 2024 | Politique de confidentialité | Conditions générales | Tous droits réservés.",
        view_source: "Voir la source",
        report_issue: "Signaler un problème",
      },
      about: {
        title: "À propos de moi et de mon travail",
        contact: "Contact",
        email: "E-mail",
        linkedin: "LinkedIn",
        orcid: "ORCID",
        zotero: "Zotero",
        google_scholar: "Google Scholar",
        paragraph1:
          "Je ne suis pas entré dans le domaine juridique avec le droit pénal en tête. J'ai initialement perçu le système juridique comme une machine bien huilée qui garantissait que seuls les coupables soient punis. Cependant, mes expériences ont rapidement révélé une réalité plus douloureuse. Notre système de justice pénale, bien qu'il ne soit pas dénué de mérite, cible de manière disproportionnée les populations vulnérables—celles ayant des ressources limitées qui sont souvent surreprésentées derrière les barreaux et qui ont le plus besoin d'aide. Ce problème systémique ne se limite pas aux États-Unis, mais constitue une préoccupation mondiale. C'est cette disparité qui m'a poussé à chercher le changement.",
        paragraph2:
          "Mon travail est motivé par la conviction que la justice devrait se concentrer non seulement sur la punition, mais aussi sur les droits de l'homme et les secondes chances. Nous sommes plus que la pire chose que nous ayons faite, et la façon dont nous traitons les individus les plus dédaignés de notre société est le reflet le plus vrai de qui nous sommes en tant que peuple. Mon objectif est de contribuer à un système de justice qui reconnaît la dignité humaine et offre des opportunités de rédemption et de réhabilitation.",
        paragraph3:
          "Je suis professeur invité à la faculté de droit de l'IE University en Espagne, où j'enseigne le droit pénal et les droits de l'homme. J'enseigne également le droit et les droits de l'homme à la faculté de droit de l'Université du Minnesota depuis 2020. En 2023, j'ai terminé mon doctorat en droit à l'Universidad Carlos III de Madrid. Mes recherches se sont concentrées sur des études comparatives des pratiques de peine de prison à vie, en particulier la réintroduction des peines de prison à vie en Espagne et aux États-Unis, et les implications des droits de l'homme de telles peines.",
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
      "404": "404 - Pagina non trovata",
      language: "Lingua",
      profile_alt: "Foto del profilo di Ben Jarman",
      welcome: "Benvenuto",
      commitment_text: "L'esperienza conta: un impegno per la giustizia e i diritti umani",
      experience_description:
        "Con oltre 15 anni di esperienza come avvocato penalista, 5 anni come professore di diritto e un interesse crescente per il diritto penale comparato e i diritti umani, offro una prospettiva unica nella ricerca della giustizia.",
      explore_website:
        "Esplora il mio sito web per saperne di più sul mio lavoro, le mie ricerche sul diritto penale comparato e i miei sforzi per promuovere la giustizia su scala globale.",
      email: "E-mail",
      linkedin: "LinkedIn",
      orcid: "ORCID",
      zotero: "Zotero",
      google_scholar: "Google Scholar",
      footer: {
        copyright: "© Paolo Sartorio 2024 | Politica sulla privacy | Termini e condizioni | Tutti i diritti riservati.",
        view_source: "Visualizza sorgente",
        report_issue: "Segnala un problema",
      },
      about: {
        title: "Chi sono e il mio lavoro",
        contact: "Contatto",
        email: "E-mail",
        linkedin: "LinkedIn",
        orcid: "ORCID",
        zotero: "Zotero",
        google_scholar: "Google Scholar",
        paragraph1:
          "Non sono entrato nel campo legale con il diritto penale in mente. Inizialmente vedevo il sistema legale come una macchina ben oliata che garantiva che solo i colpevoli fossero puniti. Tuttavia, le mie esperienze hanno presto rivelato una realtà più dolorosa. Il nostro sistema di giustizia penale, sebbene non privo di meriti, prende di mira in modo sproporzionato le popolazioni vulnerabili—quelle con risorse limitate che spesso sono sovrarappresentate dietro le sbarre e hanno più bisogno di aiuto. Questo problema sistemico non è confinato agli Stati Uniti, ma è una preoccupazione globale. È stata questa disparità che mi ha portato a cercare il cambiamento.",
        paragraph2:
          "Il mio lavoro è guidato dalla convinzione che la giustizia debba concentrarsi non solo sulla punizione, ma anche sui diritti umani e sulle seconde possibilità. Siamo più della peggiore cosa che abbiamo fatto, e come trattiamo gli individui più disprezzati nella nostra società è il riflesso più vero di chi siamo come popolo. Il mio obiettivo è contribuire a un sistema di giustizia che riconosca la dignità umana e offra opportunità di redenzione e riabilitazione.",
        paragraph3:
          "Sono professore visitatore presso la Facoltà di Giurisprudenza dell'IE University in Spagna, dove insegno diritto penale e diritti umani. Insegno anche diritto e diritti umani presso la Facoltà di Giurisprudenza dell'Università del Minnesota dal 2020. Nel 2023, ho completato il mio dottorato in Diritto presso l'Universidad Carlos III de Madrid. La mia ricerca si è concentrata su studi comparativi delle pratiche di condanna a vita, in particolare la reintroduzione delle condanne a vita in Spagna e negli Stati Uniti, e le implicazioni dei diritti umani di tali condanne.",
      },
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
