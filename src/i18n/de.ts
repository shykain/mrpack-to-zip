export default {
  nav: {
    converter: "Konverter",
    about: "Über",
    howItWorks: "Funktionsweise",
    guide: "Anleitung",
    faq: "FAQ",
    launchers: "Launcher",
    privacy: "Datenschutz",
    contact: "Kontakt",
    convertNow: "Jetzt konvertieren",
  },
  theme: {
    light: "Hell",
    dark: "Dunkel",
  },
  hero: {
    badge: "100% Browserseitig · Keine Uploads",
    title: "MRPack to ZIP Konverter",
    subtitle:
      "Konvertiert Modrinth-Modpack-Dateien in das Standard-ZIP-Format mit optionaler Mod-Datei-Download-Funktion. Schnell, privat und kostenlos.",
    privacyNote: "Dateien verlassen niemals deinen Browser",
    freeNote: "Keine Registrierung erforderlich",
  },
  converter: {
    optionsTitle: "Konvertierungsoptionen",
    tip: 'Tipp: Aktiviere „Mod-Dateien herunterladen", um alle JAR-Dateien vom Modrinth-CDN herunterzuladen und ein vollständiges, einsatzbereites Modpack zu erhalten.',
    processing: "Verarbeitung läuft — bei großen Modpacks kann das einen Moment dauern.",
    convertBtn: "Zu ZIP konvertieren",
  },
  packInfo: {
    title: "Modpack erkannt",
    subtitle: "Klicke auf Konvertieren, um die Verarbeitung zu starten",
    replace: "Ersetzen",
    replaceFile: "Datei ersetzen",
    name: "Name",
    version: "Version",
    minecraft: "Minecraft",
    loader: "Loader",
    mods: "Mods",
    modFilesDetected: "{{count}} Mod-Dateien erkannt",
  },
  urlInput: {
    steps: [
      "Füge eine Modrinth-Projektseiten-URL ein (z. B. modrinth.com/project/...)",
      'Oder füge einen direkten .mrpack-Download-Link aus dem Tab „Versions" ein',
      "Der automatische Download startet nach dem Einfügen",
      "Warte, bis das Modpack konvertiert wurde",
    ],
    placeholder: "https://modrinth.com/project/... oder https://cdn.modrinth.com/...",
    downloading: "Wird heruntergeladen...",
    downloadBtn: "Von URL herunterladen",
    supported: "Sowohl Modrinth-Projektseiten-URLs als auch direkte .mrpack-Download-Links werden unterstützt.",
  },
  projectInput: {
    steps: [
      "Gehe zu einem Modrinth-Modpack-Projekt",
      "Kopiere die Projekt-ID, den Slug oder die vollständige URL",
      "Füge sie unten ein und der automatische Abruf startet",
      "Warte, bis das Modpack konvertiert wurde",
    ],
    placeholder: "z. B. fabulously-optimized oder 1KVo5zza oder vollständige URL",
    fetching: "Wird abgerufen...",
    fetchBtn: "Von Modrinth abrufen",
    browseModpacks: "Modpacks auf Modrinth durchsuchen",
  },
  dropZone: {
    steps: [
      "Besorge eine .mrpack-Datei (z. B. von Modrinth)",
      "Lade sie unten hoch (verarbeitet in deinem Browser)",
      "Wähle deine Konvertierungsoptionen",
      "Klicke auf Konvertieren und lade die ZIP-Datei herunter",
    ],
    mrpackFile: ".mrpack-Datei",
    removeFile: "Datei entfernen",
    dropHere: ".mrpack-Datei hier ablegen",
    dragDrop: ".mrpack-Datei per Drag & Drop hier ablegen",
    or: "oder",
    browseFiles: "Dateien durchsuchen",
    privacyNote: "Dateien werden vollständig in deinem Browser verarbeitet — nichts wird auf einen Server hochgeladen.",
  },
  fileStructure: {
    uploadToView: "Lade eine .mrpack-Datei hoch, um die Struktur anzuzeigen",
    fileStructure: "Dateistruktur",
    packInfo: "Modpack-Info",
    files: "{{count}} Dateien",
    selectedFile: "Ausgewählte Datei",
    mrpackFile: ".mrpack-Datei",
    parsing: "Struktur wird analysiert...",
    name: "Name",
    version: "Version",
    minecraft: "Minecraft",
    modLoader: "Mod-Loader",
    mods: "{{count}} Mods",
    noFiles: "Keine Dateien gefunden",
    onlyUpload: "Die Dateistruktur ist nur beim Hochladen lokaler Dateien verfügbar",
  },
  progress: {
    parsing: "Modpack wird analysiert...",
    downloading: "Mod-Dateien werden heruntergeladen...",
    packaging: "ZIP-Archiv wird gepackt...",
    done: "Konvertierung abgeschlossen!",
    error: "Konvertierung fehlgeschlagen",
    errorFallback: "Fehler",
    mods: "{{processed}}/{{total}} Mods",
    skipped: "{{count}} übersprungen",
    modsReady: "{{count}} Mods bereit",
  },
  inputMode: {
    project: { label: "Projekt-ID", desc: "Von Modrinth" },
    url: { label: "Von URL", desc: "Download-Link einfügen" },
    file: { label: "Datei hochladen", desc: "Lokale .mrpack-Datei" },
  },
  result: {
    ready: "Deine ZIP-Datei ist bereit!",
    mods: "{{count}} Mods · ",
    skipped: "{{count}} übersprungen · ",
    download: "ZIP herunterladen",
    convertAnother: "Weitere konvertieren",
  },
  options: {
    downloadMods: {
      label: "Mod-Dateien herunterladen",
      desc: "Alle JAR-Dateien, die im Modpack-Index referenziert sind, vom Modrinth-CDN herunterladen",
    },
    keepStructure: {
      label: "Ordnerstruktur beibehalten",
      desc: "Das ursprüngliche Modpack-Verzeichnislayout beibehalten",
    },
    normalize: {
      label: "Dateinamen normalisieren",
      desc: "Dateien in ASCII-sichere Zeichen umbenennen, um die Kompatibilität zu gewährleisten",
    },
    includeIndex: {
      label: "Index-Datei einbeziehen",
      desc: "modrinth.index.json in der Ausgabe-ZIP-Datei beibehalten",
    },
  },
  stats: {
    clientSide: "Client-seitig",
    privacy: "Datenschutz",
    cost: "Kosten",
  },
  about: {
    eyebrow: "Über",
    title: "Über den MRPack to ZIP Konverter",
    description:
      "Dieses kostenlose Online-Tool konvertiert Modrinth-Modpack-Dateien (.mrpack) in das Standard-ZIP-Format für Minecraft-Mods. Keine Installation erforderlich — alles passiert in deinem Browser.",
    features: [
      {
        title: "100% Client-seitig",
        desc: "Dateien werden vollständig in deinem Browser verarbeitet und niemals auf einen Server hochgeladen, was vollständigen Datenschutz gewährleistet.",
      },
      {
        title: "Universelle ZIP-Ausgabe",
        desc: "Konvertiert .mrpack-Dateien in das Standard-ZIP-Format, das mit den meisten Mod-Loadern und Launchern kompatibel ist.",
      },
      {
        title: "Strukturkontrolle",
        desc: "Behalte die ursprüngliche Ordnerstruktur bei oder glätte sie nach Bedarf für deinen Workflow.",
      },
      {
        title: "Dateinamen-Normalisierung",
        desc: "Normalisiere optional Dateinamen in ASCII-sichere Zeichen für bessere plattformübergreifende Kompatibilität.",
      },
      {
        title: "Schnell & zuverlässig",
        desc: "Effiziente client-seitige Verarbeitung mit Fortschrittsanzeige. Keine Warteschlangen, kein Warten.",
      },
      {
        title: "Mod-Downloader",
        desc: "Lade optional alle referenzierten JAR-Dateien vom Modrinth-CDN in deine Ausgabe-ZIP herunter.",
      },
    ],
    builtFor: "Für Minecraft-Spieler gemacht",
    builtForDesc:
      "Entworfen für Minecraft-Mod-Nutzer, die Dateien zwischen verschiedenen Formaten konvertieren müssen, um sie mit verschiedenen Launchern und Mod-Loadern kompatibel zu machen.",
    worksWith: "Funktioniert mit Fabric, Forge, Quilt & mehr",
    tagsTitle: "Tags",
    tags: ["Minecraft", "Modrinth", "Modpacks", "Dateikonvertierung", "Fabric", "Forge", "Quilt"],
  },
  howItWorks: {
    eyebrow: "Funktionsweise",
    title: "Drei einfache Schritte",
    description:
      "Die Konvertierung eines Modrinth-Pakets (.mrpack) in eine Standard-ZIP-Datei umfasst mehrere Schritte, die unser Tool automatisch ausführt.",
    steps: [
      {
        title: "Hochladen",
        desc: "Lade deine .mrpack-Datei in unser Tool hoch. Die Datei wird vollständig in deinem Browser verarbeitet und niemals an einen Server gesendet.",
      },
      {
        title: "Verarbeiten",
        desc: "Unser Tool extrahiert die Datei modrinth.index.json und analysiert die Mod-Struktur, um sie für die Konvertierung in das Standard-ZIP-Format vorzubereiten.",
      },
      {
        title: "Konvertieren & Herunterladen",
        desc: "Das Tool packt alle Dateien gemäß deinen Einstellungen und erstellt eine Standard-ZIP-Datei, die zum Download bereit steht.",
      },
    ],
  },
  techDetails: {
    eyebrow: "Technische Details",
    title: "mrpack vs. Standard-ZIP",
    description:
      "Modrinth-Pakete (.mrpack) sind spezielle ZIP-Dateien, die eine JSON-Index-Datei enthalten, welche die Mod-Struktur beschreibt und Metadaten zu jeder Datei enthält.",
    mrpackStructure: ".mrpack-Struktur",
    mrpackFormat: "Modrinth-Modpack-Format",
    mrpackList: [
      "Enthält modrinth.index.json",
      "Umfasst Metadaten über Mods",
      "Verwendet das Format von Modrinth",
      "Dateien nach Projekt-IDs organisiert",
    ],
    zipStructure: "Standard-ZIP-Struktur",
    zipFormat: "Universelles Archivformat",
    zipList: [
      "Enthält Mod-Dateien direkt",
      "Einfache Ordnerstruktur",
      "Mit den meisten Launchern kompatibel",
      "Dateien nach Name/Funktion organisiert",
    ],
    keyDifference: "Wesentlicher Unterschied",
    keyDiffDesc:
      "Eine .mrpack-Datei referenziert Mods lediglich über Download-URLs in ihrem Index — sie enthält nicht die tatsächlichen JAR-Dateien (mit Ausnahme von Overrides). Unser Konverter kann optional alle herunterladen und zu einer eigenständigen ZIP-Datei bündeln.",
  },
  guide: {
    eyebrow: "Anleitung",
    title: "MRPACK-Anleitung",
    description:
      "Erfahre, wie du MRPACK-Dateien öffnest, extrahierst und Probleme behebst — mit oder ohne unseren Konverter.",
    tabs: {
      manual: "Manuell öffnen",
      jar: "JAR-Dateien extrahieren",
      troubleshoot: "Fehlerbehebung",
    },
    manual: {
      title: "So öffnest du MRPACK-Dateien manuell",
      desc: "Auch wenn MRPACK-Dateien dafür entwickelt wurden, direkt über kompatible Launcher installiert zu werden, kannst du sie auch manuell öffnen und extrahieren.",
      standardTools: "Mit Standard-Komprimierungstools",
      steps: [
        "Benenne die .mrpack-Datei in .zip um (Dateiendung ändern)",
        "Öffne sie mit einem beliebigen ZIP-Extraktionsprogramm (WinRAR, 7-Zip usw.)",
        "Entpacke den Inhalt in einen Ordner",
        "Suche nach der Datei modrinth.index.json und dem Ordner overrides",
      ],
      commandLine: "Kommandozeilen-Ansatz",
      note: "Hinweis: Das bloße Öffnen der MRPACK-Datei lädt nicht die tatsächlichen Mod-Dateien herunter. Um die Mod-Dateien zu erhalten, musst du entweder einen kompatiblen Launcher verwenden oder jeden Mod manuell von den URLs herunterladen, die in der Datei modrinth.index.json aufgeführt sind.",
    },
    jar: {
      title: "MRPACK in JAR-Dateien konvertieren",
      desc: "MRPACK-Dateien enthalten nicht direkt die JAR-Dateien deiner Mods, aber unser Konverter kann dir helfen, alle JAR-Dateien zu extrahieren.",
      automatic: "Automatische JAR-Extraktion",
      steps: [
        "Lade deine MRPACK-Datei in unseren Konverter hoch",
        'Stelle sicher, dass „Mod-Dateien herunterladen" ausgewählt ist',
        "Konvertiere in das ZIP-Format",
        "Lade die ZIP-Datei herunter und entpacke sie",
        "Alle Mod-JAR-Dateien befinden sich im Ordner mods",
      ],
      why: "Warum JAR-Dateien extrahieren?",
      reasons: [
        "Einzelne Mods manuell prüfen",
        "Ein benutzerdefiniertes Modpack aus ausgewählten Mods erstellen",
        "Mit Launchern verwenden, die MRPACK nicht unterstützen",
        "Deine Lieblings-Mods lokal sichern",
        "Bestimmte Mods vor der Installation ändern",
      ],
    },
    troubleshoot: {
      title: "Häufige MRPACK-Probleme und Lösungen",
      desc: "Leitfaden zur Fehlerbehebung für die häufigsten Probleme.",
      items: [
        {
          problem: ".mrpack-Datei lässt sich nicht öffnen",
          solutions: [
            "Stelle sicher, dass du einen kompatiblen Launcher verwendest (Prism, MultiMC, ATLauncher)",
            "Versuche, die Datei in .zip umzubenennen und manuell zu entpacken",
            "Prüfe, ob die Datei vollständig und fehlerfrei heruntergeladen wurde",
          ],
        },
        {
          problem: "Fehlende Mods nach der Installation",
          solutions: [
            "Stelle sicher, dass dein Launcher Internetzugang hat, um Mods herunterzuladen",
            "Einige Mods sind möglicherweise regional eingeschränkt oder vorübergehend nicht verfügbar",
            'Verwende unseren Konverter mit aktivierter Option „Mod-Dateien herunterladen"',
          ],
        },
        {
          problem: "Beschädigte MRPACK-Datei",
          solutions: [
            "Lade die Datei erneut von der ursprünglichen Quelle herunter",
            "Versuche es mit einem anderen Browser oder Download-Manager",
            "Die Konvertierung von MRPACK zu ZIP kann manchmal kleinere Beschädigungen reparieren",
          ],
        },
        {
          problem: "MRPACK lässt sich nicht konvertieren",
          solutions: [
            "Überprüfe deine Internetverbindung — Mod-Downloads könnten fehlschlagen",
            "Versuche einen anderen Browser (Chrome oder Firefox empfohlen)",
            "Stelle bei großen Modpacks sicher, dass dein Gerät über ausreichend Arbeitsspeicher verfügt",
            "Versuche, Browser-Erweiterungen zu deaktivieren, die stören könnten",
          ],
        },
      ],
      advanced: "Erweiterte Fehlerbehebung:",
      advancedDesc:
        "Wenn weiterhin Probleme auftreten, kannst du die Datei modrinth.index.json auf ungültige Einträge oder beschädigte URLs überprüfen. Oft lassen sich Installationsprobleme lösen, indem problematische Mods manuell heruntergeladen und in den richtigen Ordnern abgelegt werden.",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Häufig gestellte Fragen",
    description: "Alles, was du über die Konvertierung von MRPACK-Dateien in ZIP wissen musst.",
    items: [
      {
        question: "Was ist eine .mrpack-Datei?",
        answer:
          "Eine .mrpack-Datei ist das Modpack-Format von Modrinth für Minecraft. Sie enthält eine spezielle Index-Datei, die alle Mods im Paket zusammen mit ihren Metadaten und Download-Informationen auflistet.",
      },
      {
        question: "Warum muss ich in ZIP konvertieren?",
        answer:
          "Einige Minecraft-Launcher oder Mod-Manager unterstützen das .mrpack-Format möglicherweise nicht direkt. Die Konvertierung in eine Standard-ZIP ermöglicht es dir, diese Mods mit jedem Launcher zu verwenden, der reguläre ZIP-Dateien unterstützt.",
      },
      {
        question: "Sind meine Daten sicher?",
        answer:
          "Ja, die gesamte Verarbeitung erfolgt in deinem Browser. Deine Dateien werden niemals auf einen Server hochgeladen, was vollständigen Datenschutz und Sicherheit gewährleistet.",
      },
      {
        question: "Was passiert mit den Mod-Metadaten?",
        answer:
          'Standardmäßig beziehen wir die ursprüngliche Datei modrinth.index.json in die Ausgabe-ZIP ein. Du kannst sie ausschließen, wenn du die Metadaten in deiner konvertierten Datei nicht benötigst, indem du die Option „Index-Datei einbeziehen" deaktivierst.',
      },
      {
        question: "Kann ich dieses Tool offline nutzen?",
        answer:
          'Dieses Web-Tool benötigt eine Internetverbindung für das erste Laden. Wenn du die Option „Mod-Dateien herunterladen" aktivierst, ist zudem Internetzugang erforderlich, um die referenzierten Mod-Dateien herunterzuladen. Die grundlegende Dateiverarbeitung erfolgt jedoch lokal. Für eine vollständig offline-Lösung ziehe Kommandozeilen-Tools wie packwiz oder spezialisierte Mod-Manager in Betracht.',
      },
      {
        question: 'Was bewirkt die Option „Mod-Dateien herunterladen"?',
        answer:
          "Wenn aktiviert, lädt diese Option alle Mod-Dateien herunter, die in modrinth.index.json referenziert sind, und bezieht sie in die Ausgabe-ZIP ein. Dadurch entsteht ein vollständiges, einsatzbereites Mod-Paket, das mit Launchern funktioniert, die das .mrpack-Format nicht unterstützen. Ohne diese Option enthält die Ausgabe-ZIP nur Dateien, die bereits in der .mrpack-Datei vorhanden waren (in der Regel nur Konfigurationsdateien und Ressourcenpakete).",
      },
    ],
  },
  launchers: {
    eyebrow: "Kompatibilität",
    title: "Launcher-Kompatibilitätsleitfaden",
    description:
      "Nicht jeder Launcher geht gleich mit .mrpack-Dateien um. Hier findest du die vollständige Kompatibilitätsübersicht.",
    launcher: "Launcher",
    support: "MRPACK-Unterstützung",
    needZip: "ZIP nötig?",
    notes: "Hinweise",
    fullSupport: "Vollständige Unterstützung",
    partial: "Teilweise",
    notSupported: "Nicht unterstützt",
    notRequired: "Nicht erforderlich",
    sometimes: "Manchmal",
    required: "Erforderlich",
    recommended: "Empfohlen",
    scrollHint: "Scrolle die Tabelle horizontal, um alle Spalten zu sehen",
    proTip: "Pro-Tipp:",
    proTipDesc:
      'Im Zweifel bietet die Konvertierung in das ZIP-Format die universellste Kompatibilität über alle Launcher hinweg. Verwende unseren Konverter oben mit aktivierter Option „Mod-Dateien herunterladen" für ein vollständiges, einsatzbereites Modpack.',
    items: [
      { name: "Prism Launcher", notes: "Direkter Import verfügbar" },
      { name: "MultiMC", notes: 'Ab Version 5.0+ über die Funktion „Aus ZIP importieren" unterstützt' },
      { name: "Offizieller Launcher", notes: "Keine native Unterstützung für Modpacks" },
      { name: "CurseForge", notes: "Hauptsächlich für das .cf-Format ausgelegt, einige mrpack-Dateien müssen konvertiert werden" },
      { name: "ATLauncher", notes: "Direkter Import verfügbar" },
      { name: "GDLauncher", notes: "Import-Funktion verwenden" },
      { name: "Technic Launcher", notes: "Unterstützt nur das ZIP-Format" },
      { name: "HMCL", notes: 'Funktion „Modpack installieren" verwenden' },
      { name: "PCL2", notes: "ZIP-Format stabiler" },
    ],
  },
  format: {
    eyebrow: "Format",
    title: "Über das MRPACK-Format",
    description:
      "Das Modrinth-Modpack-Format (.mrpack) ist ein spezielles ZIP-Dateiformat, das für die effiziente und standardisierte Verteilung von Minecraft-Modpacks entwickelt wurde.",
    structureExample: "Strukturbeispiel",
    advantages: "MRPACK-Vorteile",
    advantageList: [
      "Kleinere Dateigrößen (Referenzen statt eingebettete Mods)",
      "Automatische Abhängigkeitsauflösung",
      "Bessere Versionskontrolle und Updates",
      "Unterstützung für Client- und Server-Setups",
      "Native Kompatibilität mit modernen Launchern",
    ],
    history: "Format-Historie",
    historyItems: [
      { title: "Erstveröffentlichung", desc: "Erste Formatspezifikation von Modrinth veröffentlicht" },
      { title: "Version 1 standardisiert", desc: "Standardisiert mit verbesserter Hash-Verifizierung" },
      { title: "Erweiterte Unterstützung", desc: "Erweiterte Launcher-Unterstützung und Client/Server-Differenzierung" },
    ],
    comparison: "Modpack-Format-Vergleich",
    feature: "Funktion",
    comparisonRows: [
      { feature: "Dateigröße", mrpack: "Klein (nur Referenzen)", curseforge: "Mittel (Manifest)", zip: "Groß (enthält alle Mods)" },
      { feature: "Integritätsprüfung", mrpack: "SHA1- & SHA512-Hashes", curseforge: "Nur Projekt-IDs", zip: "Keine integrierte" },
      { feature: "Launcher-Unterstützung", mrpack: "Die meisten modernen Launcher", curseforge: "CurseForge & einige andere", zip: "Universelle Unterstützung" },
      { feature: "Client/Server-Unterscheidung", mrpack: "Eingebaut", curseforge: "Eingeschränkt", zip: "Manuelle Trennung" },
      { feature: "Offener Standard", mrpack: "Ja (vollständig dokumentiert)", curseforge: "Teilweise", zip: "Kein Standard" },
    ],
  },
  footer: {
    description:
      "Kostenloser, privater, browserbasierter Konverter für Modrinth-Modpack-Dateien. Für die Minecraft-Community gemacht.",
    copyright: "Die gesamte Verarbeitung erfolgt in deinem Browser.",
    disclaimer: "Nicht mit Modrinth affiliiert. Mit Liebe für Minecraft-Spieler gebaut.",
  },
  footerLinks: {
    tool: {
      title: "Tool",
      converter: "Konverter",
      howItWorks: "Funktionsweise",
      technical: "Technische Details",
    },
    resources: {
      title: "Ressourcen",
      usageGuide: "Anleitung",
      faq: "FAQ",
      launcherCompat: "Launcher-Kompatibilität",
    },
    legal: {
      title: "Rechtliches",
      privacy: "Datenschutzerklärung",
      contact: "Kontakt",
    },
    external: {
      title: "Extern",
      minecraft: "Minecraft",
      modrinth: "Modrinth",
      curseforge: "CurseForge",
    },
  },
  a11y: {
    selectLanguage: "Sprache auswählen",
    toggleMenu: "Menü umschalten",
  },
  privacy: {
    title: "Datenschutzerklärung",
    lastUpdated: "Zuletzt aktualisiert: {{date}}",
    intro:
      "MRPack to ZIP verpflichtet sich, deine Privatsphäre zu schützen. Diese Datenschutzerklärung erklärt, wie wir mit Informationen umgehen, wenn du unser Tool verwendest.",
    localProcessingTitle: "100% Browserseitige Verarbeitung",
    localProcessingText:
      "Alle Dateikonvertierungen erfolgen vollständig in deinem Webbrowser. Deine .mrpack-Dateien, deren Inhalte und alle heruntergeladenen Mod-Dateien werden niemals auf unsere Server hochgeladen. Wir haben keinen Zugriff auf die Dateien, die du konvertierst.",
    dataCollectionTitle: "Daten, die wir nicht erheben",
    dataCollectionText:
      "Wir erfassen, speichern oder verarbeiten keine persönlichen Daten. Wir verwenden keine Cookies zu Tracking-Zwecken und führen keine Benutzerkonten.",
    thirdPartyTitle: "Drittanbieter-Dienste",
    thirdPartyText:
      'Wenn du die Funktionen „Projekt-ID" oder „Von URL" verwendest, kommuniziert dein Browser direkt mit den API- und CDN-Servern von Modrinth. Bitte lies die Datenschutzerklärung von Modrinth, um zu erfahren, wie diese mit Anfragen umgehen.',
    analyticsTitle: "Analyse",
    analyticsText:
      "Wir können datenschutzfreundliche Analyse-Tools einsetzen, die anonymisierte Nutzungsdaten (wie Seitenaufrufe und länderweite Standorte) erfassen, ohne einzelne Benutzer zu identifizieren.",
    changesTitle: "Änderungen an dieser Richtlinie",
    changesText:
      "Wir können diese Datenschutzerklärung von Zeit zu Zeit aktualisieren. Alle Änderungen werden auf dieser Seite mit einem aktualisierten Wirksamkeitsdatum veröffentlicht.",
    contactTitle: "Kontakt",
    contactText:
      "Wenn du Fragen zu dieser Datenschutzerklärung hast, besuche bitte unsere Kontaktseite.",
  },
  contact: {
    title: "Kontakt",
    subtitle:
      "Du hast Fragen, Feedback oder Vorschläge? Wir freuen uns darauf, von dir zu hören.",
    emailTitle: "E-Mail",
    emailText: "Für allgemeine Anfragen erreiche uns unter",
    githubTitle: "GitHub",
    githubText: "Einen Bug gefunden oder einen Beitrag leisten wollen? Besuche unser Open-Source-Repository.",
    modrinthTitle: "Modrinth",
    modrinthText: "Entdecke großartige Modpacks auf Modrinth, der Plattform, für die dieses Tool entwickelt wurde.",
    form: {
      name: "Dein Name",
      email: "Deine E-Mail",
      message: "Nachricht",
      send: "Nachricht senden",
      success: "Vielen Dank! Deine Nachricht wurde gesendet.",
    },
  },
};
