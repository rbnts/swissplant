import barbara from "#lib/img/employees/barbara.avif";
import hansPeter from "#lib/img/employees/hans-peter.avif";
import ivan from "#lib/img/employees/ivan.avif";
import mariusz from "#lib/img/employees/mariusz.avif";
import markus from "#lib/img/employees/markus.avif";
import martin from "#lib/img/employees/martin.avif";
import miguel from "#lib/img/employees/miguel.avif";
import muhamet from "#lib/img/employees/muhamet.avif";
import sandro from "#lib/img/employees/sandro.avif";
import shpend from "#lib/img/employees/shpend.avif";
import telja from "#lib/img/employees/telja.avif";
import tinu from "#lib/img/photoshoot/tinu.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Team — SwissPlant GmbH",
      description: "Erfahren Sie, wer bei der SwissPlant GmbH angestellt ist."
    },
    heading: "Team",
    hero: {
      images: [
        {
          src: tinu,
          alt: "Martin Löffel, der Gründer der SwissPlant GmbH."
        }
      ]
    },
    teamGrid: {
      members: [
        {
          name: "Martin Löffel",
          position: "Geschäftsführer",
          image: {
            src: martin,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          },
          contact: {
            email: "m.loeffel@swissplant.ch",
            phone: "+41 79 631 45 59"
          }
        },
        {
          name: "Sandro Löffel",
          position: "Stv. Geschäftsführer",
          image: {
            src: sandro,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          },
          contact: {
            email: "s.loeffel@swissplant.ch",
            phone: "+41 79 641 52 10"
          }
        },
        {
          name: "Telja Baumann",
          position: "Empfang & Administration",
          image: {
            src: telja,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          },
          contact: {
            email: "t.baumann@swissplant.ch",
            phone: "+41 79 815 38 35"
          }
        },
        {
          name: "Ivan Gross",
          position: "Leiter Gewächshaus",
          image: {
            src: ivan,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Shpend Thaqi",
          position: "Leiter Produktion",
          image: {
            src: shpend,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Hans-Peter Schwab",
          position: "Transport",
          image: {
            src: hansPeter,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Mariusz Wronski",
          position: "Transport",
          image: {
            src: mariusz,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Muhamet Duraku",
          position: "Produktion",
          image: {
            src: muhamet,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Barbara Dubler",
          position: "Transport",
          image: {
            src: barbara,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Markus Niklaus",
          position: "Maschinenführer",
          image: {
            src: markus,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Miguel Pereira",
          position: "Maschinenführer",
          image: {
            src: miguel,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        }
      ]
    }
  },
  en: {
    meta: {
      title: "Team — SwissPlant GmbH",
      description: "Meet the team behind SwissPlant GmbH. Learn more about our expertise and passion for plants."
    },
    heading: "Team",
    hero: {
      images: [
        {
          src: tinu,
          alt: "Martin Löffel, founder of SwissPlant GmbH."
        }
      ]
    },
    teamGrid: {
      members: [
        {
          name: "Martin Löffel",
          position: "CEO & Sales",
          image: {
            src: martin,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          },
          contact: {
            email: "m.loeffel@swissplant.ch",
            phone: "+41 79 631 45 59"
          }
        },
        {
          name: "Sandro Löffel",
          position: "Deputy CEO & Sales",
          image: {
            src: sandro,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          },
          contact: {
            email: "s.loeffel@swissplant.ch",
            phone: "+41 79 641 52 10"
          }
        },
        {
          name: "Telja Baumann",
          position: "Reception & Administration",
          image: {
            src: telja,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          },
          contact: {
            email: "t.baumann@swissplant.ch",
            phone: "+41 79 815 38 35"
          }
        },
        {
          name: "Ivan Gross",
          position: "Greenhouse Manager",
          image: {
            src: ivan,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Shpend Thaqi",
          position: "Production Manager",
          image: {
            src: shpend,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Hans-Peter Schwab",
          position: "Transport",
          image: {
            src: hansPeter,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Mariusz Wronski",
          position: "Transport",
          image: {
            src: mariusz,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Muhamet Duraku",
          position: "Production",
          image: {
            src: muhamet,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Barbara Dubler",
          position: "Transport",
          image: {
            src: barbara,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Markus Niklaus",
          position: "Machine Operator",
          image: {
            src: markus,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        },
        {
          name: "Miguel Pereira",
          position: "Machine Operator",
          image: {
            src: miguel,
            alt: "",
            loading: "lazy",
            fetchpriority: "low"
          }
        }
      ]
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
