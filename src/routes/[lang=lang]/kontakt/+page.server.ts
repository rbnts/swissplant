import aerial from "$img/aerials/1.avif";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Kontakt — SwissPlant GmbH",
      description: "Erfahren Sie, wie Sie am schnellsten zu uns finden oder uns am einfachsten erreichen."
    },
    heading: "Kontakt",
    hero: {
      images: [
        {
          src: aerial,
          alt: ""
        }
      ]
    },
    structuredText: {
      document: {
        type: "root",
        children: [
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Von Bern her"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Autobahn Bern-Neuenburg Ausfahrt Kerzers anschliessend Richtung Neuenburg. In Müntschemier Richtung Bahnhof. Firmenwegweiser beachten."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "Von Neuchâtel her"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Richtung Ins-Müntschemier anschliessend in Müntschemier Richtung Bahnhof. Firmenwegweiser beachten."
              }
            ]
          }
        ]
      }
    }
  },
  en: {
    meta: {
      title: "Contact — SwissPlant GmbH",
      description: "Learn how to best get in touch with us. Or get directions to get to our site."
    },
    heading: "Contact",
    hero: {
      images: [
        {
          src: aerial,
          alt: ""
        }
      ]
    },
    structuredText: {
      document: {
        type: "root",
        children: [
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "From Bern"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Take the Bern-Neuchâtel freeway and exit at Kerzers, then follow the signs to Neuchâtel. In Müntschemier, follow the signs to the train station."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [
              {
                type: "span",
                value: "From Neuchâtel"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Follow the signs to Ins-Müntschemier, then in Müntschemier follow the signs to the train station."
              }
            ]
          }
        ]
      }
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
