<script lang="ts">
  import ContactLink from "#lib/components/contact-link.svelte";
  import Content from "#lib/components/content.svelte";
  import Hero from "#lib/components/hero.svelte";
  import aerial from "#lib/img/aerials/1.avif";
</script>

<svelte:head>
  <title>Datenschutz — SwissPlant GmbH</title>
  <meta name="description" content="Erfahren Sie, wie wir Ihre personenbezogenen Daten verwalten und schützen." />
</svelte:head>

<Hero images={[{ src: aerial, alt: "" }]} />
<Content>
  <h1>Datenschutzerklärung</h1>
  <h2>Allgemein</h2>
  <p>
    Diese Datenschutzerklärung erläutert, wie wir Ihre personenbezogenen Daten verarbeiten und schützen, wenn Sie diese Website oder unseren Geschäftsbetrieb nutzen (zusammen: unsere Dienstleistungen). Sofern in dieser Datenschutzerklärung nicht anders definiert, haben die verwendeten Definitionen dieselbe Bedeutung wie im Schweizer Bundesgesetz über den Datenschutz («DSG»). Soweit die DSGVO anwendbar ist, stehen betroffenen Personen die dort vorgesehenen Rechte zu.
  </p>
  <h2>Verantwortliche Stelle und Kontakt</h2>
  <p>
    Wenn Sie Fragen zu dieser Datenschutzerklärung haben, zögern Sie nicht, sich mit uns in Verbindung zu setzen:
  </p>
  <p>
    SwissPlant GmbH<br />
    Spitzallmendweg 11c<br />
    CH-3225 Müntschemier<br />
    <ContactLink kind="email" parts={["info", "swissplant.ch"]} />
  </p>
  <h2>Personenbezogene Daten, die wir sammeln</h2>
  <p>
    Wenn Sie unsere Dienstleistungen nutzen, können wir personenbezogene Daten für eine Reihe von Zwecken im Zusammenhang mit unserem Gesellschaftszweck erfassen oder erhalten.
  </p>
  <p>
    Wenn Sie uns per E-Mail oder anderweitig kontaktieren bzw. wenn ein Kunden- oder Geschäftsverhältnis besteht, bearbeiten wir die von Ihnen mitgeteilten Daten (Name, E-Mail-Adresse, Telefonnummer, Adresse, Bestellvolumen und sonstige im Rahmen der Kommunikation übermittelte Angaben).
  </p>
  <p>
    Diese Daten werden ausschliesslich für die angegebenen Gesellschaftszwecke verwendet und grundsätzlich nicht ohne Einwilligung an Dritte weitergegeben.
  </p>
  <p>
    Es besteht keine Verpflichtung zur Angabe Ihrer personenbezogenen Daten. Bitte beachten Sie jedoch, dass unsere Dienstleistungen nicht erbracht werden können, wenn Sie die für unsere Dienstleistungen unbedingt erforderlichen Daten nicht bereitstellen.
  </p>
  <h2>Wie wir personenbezogene Daten sammeln</h2>
  <p>
    Wir sammeln Informationen über unsere Nutzer, wenn sie unsere Dienstleistungen nutzen, einschliesslich bestimmter Aktionen auf unserer Website.
  </p>
  <h3>Hosting</h3>
  <p>
    Unsere Website wird durch <a href="https://www.statichost.eu/">statichost.eu</a> (Variable Object Assignment, Stockholm, Schweden) gehostet – ein europäischer Anbieter auf rein europäischer Infrastruktur. statichost.eu speichert keine Personendaten von Website-Besuchern, verwendet keine Cookies und setzt keine Drittanbieter ein.
  </p>
  <p>
    Weitere Informationen: <a href="https://www.statichost.eu/privacy/">Datenschutzerklärung von Statichost</a>
  </p>
  <h3>Kontaktaufnahme</h3>
  <p>
    Bei einer Kontaktaufnahme per E-Mail werden Ihre Angaben ausschliesslich zur Bearbeitung Ihrer Anfrage verwendet.
  </p>
  <h2>Fotos und Bildmaterial</h2>
  <p>
    Auf unserer Website veröffentlichen wir Fotos von Firmenanlässen. Erkennbare Personen können jederzeit der Veröffentlichung widersprechen – wir entfernen das entsprechende Bild.
  </p>
  <h2>Eingebettete Drittinhalte</h2>
  <h3>YouTube</h3>
  <p>
    Auf unserer Website können Videos über <a href="https://www.youtube.com">YouTube</a> eingebettet sein. Wir verwenden dabei die «No-Cookie»-Variante, welche erst beim aktiven Wiedergeben von Videos Cookies setzt.
  </p>
  <p>
    Weitere Informationen: <a href="https://policies.google.com/privacy?hl=de-CH">Datenschutzerklärung von Google</a>
  </p>
  <h3>Google Maps</h3>
  <p>
    Unsere Website verwendet <a href="https://www.google.com/maps">Google Maps</a> zur Darstellung von Karteninhalten. Beim Laden des Iframes überträgt Ihr Browser automatisch Daten an Google, einschliesslich Ihrer IP-Adresse.
  </p>
  <p>
    Weitere Informationen: <a href="https://policies.google.com/privacy?hl=de-CH">Datenschutzerklärung von Google</a>
  </p>
  <h2>Rechtsgrundlagen und Zwecke der Datenverarbeitung</h2>
  <p>
    Unsere Rechtsgrundlage für die Erhebung und Verwendung der in dieser Datenschutzerklärung beschriebenen personenbezogenen Daten hängt von den personenbezogenen Daten ab, die wir erheben, und von den spezifischen Zwecken, für die wir sie erheben:
  </p>
  <ul>
    <li>Vertrag: Um unsere (vor-)vertraglichen Verpflichtungen zu erfüllen oder Massnahmen im Zusammenhang mit einem Vertrag mit Ihnen zu ergreifen.</li>
    <li>Einwilligung: Wir können uns auf Ihre zum Zeitpunkt der Bereitstellung Ihrer personenbezogenen Daten freiwillig erteilte Einwilligung stützen.</li>
    <li>Legitime Interessen: Wir können uns auf berechtigte Interessen berufen, die auf unserer Einschätzung beruhen, dass die Verarbeitung fair und angemessen ist und bei denen Ihre Interessen oder Grundrechte und Grundfreiheiten nicht überwiegen.</li>
    <li>Notwendigkeit zur Einhaltung gesetzlicher Verpflichtungen: Zur Erfüllung gesetzlicher und im öffentlichen Interesse liegender Verpflichtungen.</li>
  </ul>
  <h2>Speicherfristen</h2>
  <p>
    Wir bewahren personenbezogene Daten so lange auf, wie sie für die Zwecke, für die sie erhoben wurden, und in Übereinstimmung mit gesetzlichen und regulatorischen Anforderungen oder vertraglichen Vereinbarungen, benötigt werden. Nach Ablauf dieser Frist löschen wir Ihre personenbezogenen Daten oder anonymisieren diese vollständig.
  </p>
  <h2>Datenweitergabe</h2>
  <p>
    Wir können personenbezogene Daten offenlegen, soweit dies erforderlich ist, um gesetzlichen Verpflichtungen nachzukommen, berechtigten Anfragen von Behörden nachzukommen, die Sicherheit der Website sowie unsere Rechte oder unser Eigentum zu schützen oder mögliches Fehlverhalten im Zusammenhang mit unseren Dienstleistungen zu verhindern oder zu untersuchen.
  </p>
  <h2>Datensicherheit</h2>
  <p>
    Wir treffen angemessene technische und organisatorische Massnahmen, um Ihre personenbezogenen Daten vor Verlust, Manipulation und unbefugtem Zugriff zu schützen, und passen diese laufend an den Stand der Technik an. Mitarbeitende und beauftragte Dienstleister sind zur Vertraulichkeit sowie zur Einhaltung der geltenden Datenschutzvorschriften verpflichtet und erhalten nur soweit Zugriff auf personenbezogene Daten, wie dies zur Erfüllung ihrer Aufgaben erforderlich ist.
  </p>
  <p>
    Alle Daten, die zwischen Ihrem Browser und unserer Website übertragen werden, sind mittels HTTPS gesichert. Trotz aller Sicherheitsmassnahmen kann keine absolute Sicherheit bei der Datenübertragung über das Internet oder der elektronischen Speicherung garantiert werden.
  </p>
  <h2>Ihre Rechte</h2>
  <p>
    Um Ihre Datenschutzrechte auszuüben, können Sie sich an die oben genannte Adresse wenden oder eine E-Mail an <ContactLink kind="email" parts={["info", "swissplant.ch"]} /> senden. Bitte beachten Sie, dass wir Sie möglicherweise auffordern, Ihre Identität zu überprüfen, bevor wir auf solche Anfragen inhaltlich antworten.
  </p>
  <ul>
    <li>Recht auf Auskunft: Sie haben das Recht, eine Kopie Ihrer personenbezogenen Daten anzufordern, die wir Ihnen in elektronischer Form zur Verfügung stellen.</li>
    <li>Recht auf Berichtigung: Sie haben das Recht, uns aufzufordern, unsere Aufzeichnungen zu korrigieren, wenn Sie glauben, dass sie falsche oder unvollständige Informationen über Sie enthalten.</li>
    <li>Recht auf Widerruf der Einwilligung: Haben Sie in die Verarbeitung Ihrer personenbezogenen Daten eingewilligt, können Sie diese Einwilligung jederzeit mit Wirkung für die Zukunft widerrufen. Nach Eingang Ihres Widerrufs verarbeiten wir Ihre Daten nicht mehr zu den betreffenden Zwecken, sofern keine andere Rechtsgrundlage besteht.</li>
    <li>Recht auf Löschung: Sie haben das Recht, von uns die Löschung Ihrer personenbezogenen Daten zu verlangen, wenn diese für die Zwecke, für die sie erhoben wurden, nicht mehr erforderlich sind oder wenn sie unrechtmässig verarbeitet wurden.</li>
    <li>Recht auf Einschränkung der Verarbeitung: Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer personenbezogenen Daten zu verlangen, wenn diese unrichtig sind, die Verarbeitung unrechtmässig erfolgt oder wir die Daten nicht mehr benötigen, sie jedoch aufgrund gesetzlicher Pflichten oder auf Ihren Wunsch hin nicht löschen können.</li>
    <li>Recht auf Datenübertragbarkeit: Sie haben das Recht zu verlangen, dass wir Ihre personenbezogenen Daten in einem gängigen, maschinenlesbaren Format an Sie oder einen anderen Verantwortlichen übermitteln.</li>
    <li>Recht auf Widerspruch gegen die Verarbeitung: Beruht die Verarbeitung Ihrer personenbezogenen Daten auf unserem berechtigten Interesse, können Sie aus Gründen Ihrer besonderen Situation Widerspruch einlegen. Wir werden die Verarbeitung einstellen, sofern keine zwingenden schutzwürdigen Gründe oder rechtlichen Ansprüche eine weitere Verarbeitung erforderlich machen.</li>
    <li>Recht auf Beschwerde bei einer Aufsichtsbehörde: Sie haben das Recht auf Beschwerde bei einer Datenschutzaufsichtsbehörde, wenn Sie der Ansicht sind, dass die Verarbeitung Ihrer personenbezogenen Daten gegen das Datenschutzrecht verstösst. Die zuständige Aufsichtsbehörde in der Schweiz ist der Eidgenössische Datenschutz- und Öffentlichkeitsbeauftragte (EDÖB), Feldeggweg 1, CH-3003 Bern (<a href="https://www.edoeb.admin.ch">www.edoeb.admin.ch</a>). Soweit die DSGVO anwendbar ist, können Sie sich auch an die Aufsichtsbehörde an Ihrem Wohnsitz, Arbeitsplatz oder am Ort des mutmasslichen Verstosses wenden.</li>
  </ul>
  <h2>Änderungen dieser Datenschutzerklärung</h2>
  <p>
    Wir können unsere Datenschutzerklärung von Zeit zu Zeit aktualisieren. Wir empfehlen Ihnen daher, diese Datenschutzerklärung regelmässig auf Änderungen zu überprüfen. Änderungen treten in Kraft, wenn sie auf dieser Seite veröffentlicht werden.
  </p>
  <p>
    Letzte Aktualisierung: 12. Juni 2026
  </p>
</Content>
