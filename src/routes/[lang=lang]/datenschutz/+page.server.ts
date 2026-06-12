import aerial from "$img/aerials/1.avif";
import { render } from "datocms-structured-text-to-html-string";
import type { PageServerLoad } from "./$types";

const translations = {
  de: {
    meta: {
      title: "Datenschutz — SwissPlant GmbH",
      description: "Erfahren Sie, wie wir Ihre personenbezogenen Daten verwalten und schützen."
    },
    heading: "Datenschutzerklärung",
    hero: {
      images: [
        {
          src: aerial,
          alt: ""
        }
      ]
    },
    structuredText: {
      html: render({
        type: "root",
        children: [
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Allgemein" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten verarbeiten und schützen, wenn Sie diese Website oder unseren Geschäftsbetrieb nutzen (zusammen: unsere Dienstleistungen). Sofern in dieser Datenschutzerklärung nicht anders definiert, haben die verwendeten Definitionen dieselbe Bedeutung wie im Schweizer Bundesgesetz über den Datenschutz («DSG»). Soweit die DSGVO anwendbar ist, stehen betroffenen Personen die dort vorgesehenen Rechte zu."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Verantwortliche Stelle und Kontakt" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wenn Sie Fragen zu dieser Datenschutzerklärung haben, zögern Sie nicht, sich mit uns in Verbindung zu setzen:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH\nSpitzallmendweg 11c\nCH-3225 Müntschemier\n"
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [{ type: "span", value: "info@swissplant.ch" }]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Personenbezogene Daten, die wir sammeln" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wenn Sie unsere Dienstleistungen nutzen, können wir personenbezogene Daten für eine Reihe von Zwecken im Zusammenhang mit unserem Gesellschaftszweck erfassen oder erhalten."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wenn Sie uns per E-Mail oder anderweitig kontaktieren bzw. wenn ein Kunden- oder Geschäftsverhältnis besteht, bearbeiten wir die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Telefonnummer, Adresse, Bestellvolumen und sonstige im Rahmen der Kommunikation übermittelte Angaben)."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Diese Daten werden ausschliesslich für die angegebenen Gesellschaftszwecke verwendet und grundsätzlich nicht ohne Einwilligung an Dritte weitergegeben."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Es besteht keine Verpflichtung zur Angabe Ihrer personenbezogenen Daten. Bitte beachten Sie jedoch, dass unsere Dienstleistungen nicht erbracht werden können, wenn Sie die für unsere Dienstleistungen unbedingt erforderlichen Daten nicht bereitstellen."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Wie wir personenbezogene Daten sammeln" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir sammeln Informationen über unsere Nutzer, wenn sie unsere Dienstleistungen nutzen, einschliesslich bestimmter Aktionen auf unserer Website."
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Hosting" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Unsere Website wird durch " },
              {
                type: "link",
                url: "https://www.statichost.eu/",
                children: [{ type: "span", value: "statichost.eu" }]
              },
              {
                type: "span",
                value: " (Variable Object Assignment, Stockholm, Schweden) gehostet – ein europäischer Anbieter auf rein europäischer Infrastruktur. statichost.eu speichert keine Personendaten von Website-Besuchern, verwendet keine Cookies und setzt keine Drittanbieter ein."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Weitere Informationen: " },
              {
                type: "link",
                url: "https://www.statichost.eu/privacy/",
                children: [{ type: "span", value: "Datenschutzerklärung von Statichost" }]
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Webanalyse (Umami)" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Wir verwenden " },
              {
                type: "link",
                url: "https://umami.is",
                children: [{ type: "span", value: "Umami" }]
              },
              {
                type: "span",
                value: " (eu.umami.is) zur anonymen Auswertung von Website-Zugriffen. Umami setzt keine Cookies, erhebt keine personenbezogenen Daten und erstellt keine individuellen Nutzerprofile. Es werden ausschliesslich aggregierte Kennzahlen wie Seitenaufrufe und Herkunftsland erfasst. Die Daten werden auf EU-Servern verarbeitet. Ein Cookie-Banner ist nicht erforderlich."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Weitere Informationen: " },
              {
                type: "link",
                url: "https://umami.is/privacy",
                children: [{ type: "span", value: "Datenschutzerklärung von Umami" }]
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Kontaktaufnahme" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Bei einer Kontaktaufnahme per E-Mail werden Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Fotos und Bildmaterial" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Auf unserer Website veröffentlichen wir Fotos von Firmenanlässen. Erkennbare Personen können jederzeit der Veröffentlichung widersprechen – wir entfernen das entsprechende Bild."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Eingebettete Drittinhalte" }]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "YouTube" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Auf unserer Website können Videos über " },
              {
                type: "link",
                url: "https://www.youtube.com",
                children: [{ type: "span", value: "YouTube" }]
              },
              {
                type: "span",
                value: " eingebettet sein. Wir verwenden dabei die «No-Cookie»-Variante, welche erst beim aktiven Wiedergeben von Videos Cookies setzt."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Weitere Informationen: " },
              {
                type: "link",
                url: "https://policies.google.com/privacy?hl=de-CH",
                children: [{ type: "span", value: "Datenschutzerklärung von Google" }]
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Google Maps" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Unsere Website verwendet " },
              {
                type: "link",
                url: "https://www.google.com/maps",
                children: [{ type: "span", value: "Google Maps" }]
              },
              {
                type: "span",
                value: " zur Darstellung von Karteninhalten. Beim Laden des Iframes überträgt Ihr Browser automatisch Daten an Google, einschliesslich Ihrer IP-Adresse."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Weitere Informationen: " },
              {
                type: "link",
                url: "https://policies.google.com/privacy?hl=de-CH",
                children: [{ type: "span", value: "Datenschutzerklärung von Google" }]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Rechtsgrundlagen und Zwecke der Datenverarbeitung" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Unsere Rechtsgrundlage für die Erhebung und Verwendung der in dieser Datenschutzerklärung beschriebenen personenbezogenen Daten hängt von den personenbezogenen Daten ab, die wir erheben, und von den spezifischen Zwecken, für die wir sie erheben:"
              }
            ]
          },
          {
            type: "list",
            style: "bulleted",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Vertrag: Um unsere (vor-)vertraglichen Verpflichtungen zu erfüllen oder Massnahmen im Zusammenhang mit einem Vertrag mit Ihnen zu ergreifen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Einwilligung: Wir können uns auf Ihre zum Zeitpunkt der Bereitstellung Ihrer personenbezogenen Daten freiwillig erteilte Einwilligung stützen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Legitime Interessen: Wir können uns auf berechtigte Interessen berufen, die auf unserer Einschätzung beruhen, dass die Verarbeitung fair und angemessen ist und bei denen Ihre Interessen oder Grundrechte und Grundfreiheiten nicht überwiegen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Notwendigkeit zur Einhaltung gesetzlicher Verpflichtungen: Zur Erfüllung gesetzlicher und im öffentlichen Interesse liegender Verpflichtungen."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Speicherfristen" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir bewahren personenbezogene Daten so lange auf, wie sie für die Zwecke, für die sie erhoben wurden, und in Übereinstimmung mit gesetzlichen und regulatorischen Anforderungen oder vertraglichen Vereinbarungen, benötigt werden. Nach Ablauf dieser Frist löschen wir Ihre personenbezogenen Daten oder anonymisieren diese vollständig."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Datenweitergabe" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir können personenbezogene Daten offenlegen, soweit dies erforderlich ist, um gesetzlichen Verpflichtungen nachzukommen, berechtigten Anfragen von Behörden nachzukommen, die Sicherheit der Website sowie unsere Rechte oder unser Eigentum zu schützen oder mögliches Fehlverhalten im Zusammenhang mit unseren Dienstleistungen zu verhindern oder zu untersuchen."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Datensicherheit" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre personenbezogenen Daten vor Verlust, Manipulation und unbefugtem Zugriff zu schützen, und passen diese laufend an den Stand der Technik an. Mitarbeitende und beauftragte Dienstleister sind zur Vertraulichkeit sowie zur Einhaltung der geltenden Datenschutzvorschriften verpflichtet und erhalten nur soweit Zugriff auf personenbezogene Daten, wie dies zur Erfüllung ihrer Aufgaben erforderlich ist."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Alle Daten, die zwischen Ihrem Browser und unserer Website übertragen werden, sind mittels HTTPS gesichert. Trotz aller Sicherheitsmassnahmen kann keine absolute Sicherheit bei der Datenübertragung über das Internet oder der elektronischen Speicherung garantiert werden."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Ihre Rechte" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Um Ihre Datenschutzrechte auszuüben, können Sie sich an die oben genannte Adresse wenden oder eine E-Mail an "
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [{ type: "span", value: "info@swissplant.ch" }]
              },
              {
                type: "span",
                value: " senden. Bitte beachten Sie, dass wir Sie möglicherweise auffordern, Ihre Identität zu überprüfen, bevor wir auf solche Anfragen inhaltlich antworten."
              }
            ]
          },
          {
            type: "list",
            style: "bulleted",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Auskunft: Sie haben das Recht, eine Kopie Ihrer personenbezogenen Daten anzufordern, die wir Ihnen in elektronischer Form zur Verfügung stellen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Berichtigung: Sie haben das Recht, uns aufzufordern, unsere Aufzeichnungen zu korrigieren, wenn Sie glauben, dass sie falsche oder unvollständige Informationen über Sie enthalten."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Widerruf der Einwilligung: Haben Sie in die Verarbeitung Ihrer personenbezogenen Daten eingewilligt, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Nach Eingang Ihres Widerrufs verarbeiten wir Ihre Daten nicht mehr zu den betreffenden Zwecken, sofern keine andere Rechtsgrundlage besteht."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Löschung: Sie haben das Recht, von uns die Löschung Ihrer personenbezogenen Daten zu verlangen, wenn diese für die Zwecke, für die sie erhoben wurden, nicht mehr erforderlich sind oder wenn sie unrechtmässig verarbeitet wurden."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Einschränkung der Verarbeitung: Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, wenn diese unrichtig sind, die Verarbeitung unrechtmässig erfolgt oder wir die Daten nicht mehr benötigen, sie jedoch aufgrund gesetzlicher Pflichten oder auf Ihren Wunsch hin nicht löschen können."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Datenübertragbarkeit: Sie haben das Recht zu verlangen, dass wir Ihre personenbezogenen Daten in einem gängigen, maschinenlesbaren Format an Sie oder einen anderen Verantwortlichen übermitteln."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Widerspruch gegen die Verarbeitung: Beruht die Verarbeitung Ihrer personenbezogenen Daten auf unserem berechtigten Interesse, können Sie aus Gründen Ihrer besonderen Situation Widerspruch einlegen. Wir werden die Verarbeitung einstellen, sofern keine zwingenden schutzwürdigen Gründe oder rechtlichen Ansprüche eine weitere Verarbeitung erforderlich machen."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Recht auf Beschwerde bei einer Aufsichtsbehörde: Sie haben das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen das Datenschutzrecht verstösst. Die zuständige Aufsichtsbehörde in der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB), Feldeggweg 1, CH-3003 Bern ("
                      },
                      {
                        type: "link",
                        url: "https://www.edoeb.admin.ch",
                        children: [{ type: "span", value: "www.edoeb.admin.ch" }]
                      },
                      {
                        type: "span",
                        value: "). Soweit die DSGVO anwendbar ist, können Sie sich auch an die Aufsichtsbehörde an Ihrem Wohnsitz, Arbeitsplatz oder am Ort des mutmasslichen Verstosses wenden."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Änderungen dieser Datenschutzerklärung" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen daher, diese Datenschutzerklärung regelmässig auf Änderungen zu überprüfen. Änderungen treten in Kraft, wenn sie auf dieser Seite veröffentlicht werden."
              }
            ]
          },
          {
            type: "paragraph",
            children: [{ type: "span", value: "Letzte Aktualisierung: 12. Juni 2026" }]
          }
        ]
      }) ?? ""
    }
  },
  en: {
    meta: {
      title: "Privacy Policy — SwissPlant GmbH",
      description: "Learn how we handle and protect your personal data."
    },
    heading: "Privacy Policy",
    hero: {
      images: [
        {
          src: aerial,
          alt: ""
        }
      ]
    },
    structuredText: {
      html: render({
        type: "root",
        children: [
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "General" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "This privacy policy explains how we process and protect your personal data when you use this website or our business operations (collectively: our services). Unless otherwise defined herein, the definitions used have the same meaning as in the Swiss Federal Act on Data Protection (\"DSG\"). Where the GDPR is applicable, data subjects are entitled to the rights provided therein."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Responsible Party and Contact" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "If you have any questions about this privacy policy, please do not hesitate to contact us:"
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "SwissPlant GmbH\nSpitzallmendweg 11c\nCH-3225 Müntschemier\n"
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [{ type: "span", value: "info@swissplant.ch" }]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Personal Data We Collect" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "When you use our services, we may collect or receive personal data for a range of purposes related to our business activities."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "If you contact us by email or otherwise, or if a customer or business relationship exists, we process the data you provide (name, email address, telephone number, address, order volume, and other information transmitted in the context of communication)."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "This data is used exclusively for the stated business purposes and is generally not shared with third parties without your consent."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "There is no obligation to provide your personal data. Please note, however, that our services cannot be provided if you do not supply the data strictly necessary for them."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "How We Collect Personal Data" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We collect information about our users when they use our services, including certain actions on our website."
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Hosting" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Our website is hosted by " },
              {
                type: "link",
                url: "https://www.statichost.eu/",
                children: [{ type: "span", value: "statichost.eu" }]
              },
              {
                type: "span",
                value: " (Variable Object Assignment, Stockholm, Sweden) — a European provider on purely European infrastructure. statichost.eu stores no personal data from website visitors, uses no cookies, and engages no third-party services."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "For more information: " },
              {
                type: "link",
                url: "https://www.statichost.eu/privacy/",
                children: [{ type: "span", value: "Statichost Privacy Policy" }]
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Web Analytics (Umami)" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "We use " },
              {
                type: "link",
                url: "https://umami.is",
                children: [{ type: "span", value: "Umami" }]
              },
              {
                type: "span",
                value: " (eu.umami.is) for anonymous analysis of website visits. Umami sets no cookies, collects no personal data, and creates no individual user profiles. Only aggregated metrics such as page views and country of origin are recorded. Data is processed on EU servers. No cookie banner is required."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "For more information: " },
              {
                type: "link",
                url: "https://umami.is/privacy",
                children: [{ type: "span", value: "Umami Privacy Policy" }]
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Contact" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "When you contact us by email, your information is used solely to process your enquiry."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Photos and Images" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We publish photos from company events on our website. Identifiable individuals may object to publication at any time — we will remove the relevant image upon request."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Embedded Third-Party Content" }]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "YouTube" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Our website may embed videos from " },
              {
                type: "link",
                url: "https://www.youtube.com",
                children: [{ type: "span", value: "YouTube" }]
              },
              {
                type: "span",
                value: ". We use the \"No-Cookie\" variant, which restricts the setting of cookies by YouTube until active playback."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "For more information: " },
              {
                type: "link",
                url: "https://policies.google.com/privacy?hl=en",
                children: [{ type: "span", value: "Google Privacy Policy" }]
              }
            ]
          },
          {
            type: "heading",
            level: 3,
            children: [{ type: "span", value: "Google Maps" }]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "Our website uses " },
              {
                type: "link",
                url: "https://www.google.com/maps",
                children: [{ type: "span", value: "Google Maps" }]
              },
              {
                type: "span",
                value: " to display map content. When loading the iframe, your browser automatically transmits data to Google, including your IP address."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              { type: "span", value: "For more information: " },
              {
                type: "link",
                url: "https://policies.google.com/privacy?hl=en",
                children: [{ type: "span", value: "Google Privacy Policy" }]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Legal Bases and Purposes of Data Processing" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "Our legal basis for collecting and using the personal data described in this privacy policy depends on the data we collect and the specific purposes for which we collect it:"
              }
            ]
          },
          {
            type: "list",
            style: "bulleted",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Contract: To fulfil our (pre-)contractual obligations or to take steps in connection with a contract with you."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Consent: We may rely on your freely given consent at the time you provided your personal data."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Legitimate interests: We may rely on legitimate interests based on our assessment that processing is fair and reasonable and where your interests or fundamental rights and freedoms do not override those interests."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Necessity to comply with legal obligations: To fulfil legal and public-interest obligations."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Retention Periods" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We retain personal data for as long as necessary for the purposes for which it was collected and in accordance with legal, regulatory, or contractual requirements. After this period, we delete or fully anonymize your personal data."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Data Disclosure" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We may disclose personal data to the extent necessary to comply with legal obligations, respond to legitimate requests from authorities, protect the security of the website and our rights or property, or prevent or investigate potential misconduct in connection with our services."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Data Security" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We implement appropriate technical and organisational measures to protect your personal data against loss, manipulation, and unauthorised access, and continuously adapt these to the current state of the art. Employees and contracted service providers are bound to confidentiality and compliance with applicable data protection regulations, and are granted access to personal data only to the extent necessary to fulfil their tasks."
              }
            ]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "All data transmitted between your browser and our website is secured via HTTPS. Despite all security measures, absolute security during data transmission over the internet or in electronic storage cannot be guaranteed."
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Your Rights" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "To exercise your data protection rights, you may contact us at the address above or send an email to "
              },
              {
                type: "link",
                url: "mailto:info@swissplant.ch",
                children: [{ type: "span", value: "info@swissplant.ch" }]
              },
              {
                type: "span",
                value: ". Please note that we may ask you to verify your identity before responding substantively to such requests."
              }
            ]
          },
          {
            type: "list",
            style: "bulleted",
            children: [
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right of access: You have the right to request a copy of your personal data, which we will provide in electronic form."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to rectification: You have the right to ask us to correct our records if you believe they contain inaccurate or incomplete information about you."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to withdraw consent: If you have consented to the processing of your personal data, you may withdraw that consent at any time with future effect. Following receipt of your withdrawal, we will no longer process your data for the relevant purposes, unless another legal basis exists."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to erasure: You have the right to request deletion of your personal data when it is no longer necessary for the purposes for which it was collected, or when it has been processed unlawfully."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to restriction of processing: You have the right to request that we restrict the processing of your personal data if it is inaccurate, if processing is unlawful, or if we no longer need it but are unable to delete it due to legal obligations or at your request."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to data portability: You have the right to request that we transfer your personal data in a common, machine-readable format to you or another controller."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to object to processing: Where processing of your personal data is based on our legitimate interest, you may object on grounds relating to your particular situation. We will cease processing unless there are compelling legitimate grounds or legal claims that require it."
                      }
                    ]
                  }
                ]
              },
              {
                type: "listItem",
                children: [
                  {
                    type: "paragraph",
                    children: [
                      {
                        type: "span",
                        value: "Right to lodge a complaint with a supervisory authority: You have the right to lodge a complaint with a data protection supervisory authority if you believe that the processing of your personal data violates data protection law. The competent supervisory authority in Switzerland is the Federal Data Protection and Information Commissioner (FDPIC), Feldeggweg 1, CH-3003 Bern ("
                      },
                      {
                        type: "link",
                        url: "https://www.edoeb.admin.ch",
                        children: [{ type: "span", value: "www.edoeb.admin.ch" }]
                      },
                      {
                        type: "span",
                        value: "). Where the GDPR is applicable, you may also contact the supervisory authority in your place of residence, place of work, or the place of the alleged infringement."
                      }
                    ]
                  }
                ]
              }
            ]
          },
          {
            type: "heading",
            level: 2,
            children: [{ type: "span", value: "Changes to this Privacy Policy" }]
          },
          {
            type: "paragraph",
            children: [
              {
                type: "span",
                value: "We may update our privacy policy from time to time. We therefore recommend reviewing this privacy policy regularly for any changes. Changes take effect when published on this page."
              }
            ]
          },
          {
            type: "paragraph",
            children: [{ type: "span", value: "Last updated: 12 June 2026" }]
          }
        ]
      }) ?? ""
    }
  }
} satisfies App.Translations;

export const load: PageServerLoad = ({ params }) => translations[params.lang];
