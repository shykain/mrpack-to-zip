export default {
  nav: {
    converter: "Convertisseur",
    about: "À propos",
    howItWorks: "Comment ça marche",
    guide: "Guide",
    faq: "FAQ",
    launchers: "Lanceurs",
    privacy: "Confidentialité",
    contact: "Contact",
    convertNow: "Convertir maintenant",
  },
  theme: {
    light: "Clair",
    dark: "Sombre",
  },
  hero: {
    badge: "100 % côté navigateur · Aucun téléversement",
    title: "Convertisseur MRPack to ZIP",
    subtitle:
      "Convertissez les fichiers de pack de mods Modrinth au format ZIP standard avec téléchargement optionnel des mods. Rapide, privé et gratuit.",
    privacyNote: "Les fichiers ne quittent jamais votre navigateur",
    freeNote: "Aucune inscription requise",
  },
  converter: {
    optionsTitle: "Options de conversion",
    tip: "Astuce : activez « Télécharger les fichiers de mod » pour récupérer tous les fichiers JAR depuis le CDN de Modrinth afin d'obtenir un pack complet et prêt à l'emploi.",
    processing: "Traitement en cours — cela peut prendre un certain temps pour les grands packs de mods.",
    convertBtn: "Convertir en ZIP",
  },
  packInfo: {
    title: "Pack reconnu",
    subtitle: "Cliquez sur Convertir pour démarrer le traitement",
    replace: "Remplacer",
    replaceFile: "Remplacer le fichier",
    name: "Nom",
    version: "Version",
    minecraft: "Minecraft",
    loader: "Chargeur",
    mods: "Mods",
    modFilesDetected: "{{count}} fichiers de mod détectés",
  },
  urlInput: {
    steps: [
      "Collez l'URL d'une page de projet Modrinth (par ex. modrinth.com/project/...)",
      "Ou collez un lien de téléchargement direct .mrpack depuis l'onglet Versions",
      "Le téléchargement automatique démarre après le collage",
      "Patientez pendant la conversion du pack",
    ],
    placeholder: "https://modrinth.com/project/... ou https://cdn.modrinth.com/...",
    downloading: "Téléchargement...",
    downloadBtn: "Télécharger depuis l'URL",
    supported: "Les URL de page de projet Modrinth et les liens de téléchargement direct .mrpack sont pris en charge.",
  },
  projectInput: {
    steps: [
      "Accédez à un projet de pack de mods Modrinth",
      "Copiez l'ID du projet, le slug ou l'URL complète",
      "Collez-le ci-dessous et la récupération automatique démarre",
      "Patientez pendant la conversion du pack",
    ],
    placeholder: "par ex. fabulously-optimized ou 1KVo5zza ou l'URL complète",
    fetching: "Récupération...",
    fetchBtn: "Récupérer depuis Modrinth",
    browseModpacks: "Parcourir les packs de mods sur Modrinth",
  },
  dropZone: {
    steps: [
      "Obtenez un fichier .mrpack (par ex. depuis Modrinth)",
      "Téléversez-le ci-dessous (traité dans votre navigateur)",
      "Choisissez vos options de conversion",
      "Cliquez sur Convertir et téléchargez le ZIP",
    ],
    mrpackFile: "Fichier .mrpack",
    removeFile: "Supprimer le fichier",
    dropHere: "Déposez votre fichier .mrpack ici",
    dragDrop: "Glissez-déposez votre fichier .mrpack ici",
    or: "ou",
    browseFiles: "Parcourir les fichiers",
    privacyNote: "Les fichiers sont traités entièrement dans votre navigateur — rien n'est téléversé vers aucun serveur.",
  },
  fileStructure: {
    uploadToView: "Téléversez un fichier .mrpack pour voir sa structure",
    fileStructure: "Structure des fichiers",
    packInfo: "Infos du pack",
    files: "{{count}} fichiers",
    selectedFile: "Fichier sélectionné",
    mrpackFile: "Fichier .mrpack",
    parsing: "Analyse de la structure...",
    name: "Nom",
    version: "Version",
    minecraft: "Minecraft",
    modLoader: "Chargeur de mods",
    mods: "{{count}} mods",
    noFiles: "Aucun fichier trouvé",
    onlyUpload: "La structure des fichiers n'est disponible qu'en téléversant des fichiers locaux",
  },
  progress: {
    parsing: "Analyse du pack de mods...",
    downloading: "Téléchargement des fichiers de mod...",
    packaging: "Création de l'archive ZIP...",
    done: "Conversion terminée !",
    error: "Échec de la conversion",
    errorFallback: "Erreur",
    mods: "{{processed}}/{{total}} mods",
    skipped: "{{count}} ignorés",
    modsReady: "{{count}} mods prêts",
  },
  inputMode: {
    project: { label: "ID de projet", desc: "Depuis Modrinth" },
    url: { label: "Depuis une URL", desc: "Collez le lien de téléchargement" },
    file: { label: "Téléverser un fichier", desc: "Fichier .mrpack local" },
  },
  result: {
    ready: "Votre fichier ZIP est prêt !",
    mods: "{{count}} mods · ",
    skipped: "{{count}} ignorés · ",
    download: "Télécharger le ZIP",
    convertAnother: "Convertir un autre fichier",
  },
  options: {
    downloadMods: {
      label: "Télécharger les fichiers de mod",
      desc: "Récupérer tous les fichiers JAR référencés dans l'index du pack de mods depuis le CDN de Modrinth",
    },
    keepStructure: {
      label: "Conserver la structure des dossiers",
      desc: "Préserver la disposition originale des dossiers du pack de mods",
    },
    normalize: {
      label: "Normaliser les noms de fichiers",
      desc: "Renommer les fichiers en caractères ASCII sécurisés pour la compatibilité",
    },
    includeIndex: {
      label: "Inclure le fichier d'index",
      desc: "Conserver modrinth.index.json dans le ZIP de sortie",
    },
  },
  stats: {
    clientSide: "Côté client",
    privacy: "Confidentialité",
    cost: "Coût",
  },
  about: {
    eyebrow: "À propos",
    title: "À propos du convertisseur MRPack to ZIP",
    description:
      "Cet outil en ligne gratuit convertit les fichiers de pack de mods Modrinth (.mrpack) au format ZIP standard pour les mods Minecraft. Aucune installation requise — tout se passe dans votre navigateur.",
    features: [
      {
        title: "100 % côté client",
        desc: "Les fichiers sont traités entièrement dans votre navigateur et ne sont jamais téléversés vers aucun serveur, garantissant une confidentialité totale.",
      },
      {
        title: "Sortie ZIP universelle",
        desc: "Convertissez les fichiers .mrpack au format ZIP standard, compatible avec la plupart des chargeurs de mods et des lanceurs.",
      },
      {
        title: "Contrôle de la structure",
        desc: "Conservez la structure originale des dossiers ou aplatissez-la selon les besoins de votre flux de travail.",
      },
      {
        title: "Normalisation des noms de fichiers",
        desc: "Normalisez optionnellement les noms de fichiers en caractères ASCII sécurisés pour une meilleure compatibilité multiplateforme.",
      },
      {
        title: "Rapide et fiable",
        desc: "Traitement côté client efficace avec suivi de la progression. Aucune file d'attente, aucune attente.",
      },
      {
        title: "Téléchargeur de mods",
        desc: "Récupérez optionnellement tous les fichiers JAR référencés depuis le CDN de Modrinth dans votre ZIP de sortie.",
      },
    ],
    builtFor: "Conçu pour les joueurs de Minecraft",
    builtForDesc:
      "Conçu pour les utilisateurs de mods Minecraft qui ont besoin de convertir des fichiers entre différents formats pour la compatibilité avec divers lanceurs et chargeurs de mods.",
    worksWith: "Compatible avec Fabric, Forge, Quilt et plus",
    tagsTitle: "Étiquettes",
    tags: ["Minecraft", "Modrinth", "Packs de mods", "Conversion de fichiers", "Fabric", "Forge", "Quilt"],
  },
  howItWorks: {
    eyebrow: "Comment ça marche",
    title: "Trois étapes simples",
    description:
      "La conversion d'un package Modrinth (.mrpack) en un fichier ZIP standard implique plusieurs étapes que notre outil gère automatiquement.",
    steps: [
      {
        title: "Téléverser",
        desc: "Téléversez votre fichier .mrpack vers notre outil. Le fichier est traité entièrement dans votre navigateur et n'est jamais envoyé à aucun serveur.",
      },
      {
        title: "Traiter",
        desc: "Notre outil extrait le fichier modrinth.index.json et analyse la structure des mods, en la préparant pour la conversion au format ZIP standard.",
      },
      {
        title: "Convertir et télécharger",
        desc: "L'outil regroupe tous les fichiers selon vos paramètres et crée un fichier ZIP standard prêt à être téléchargé.",
      },
    ],
  },
  techDetails: {
    eyebrow: "Détails techniques",
    title: "mrpack vs ZIP standard",
    description:
      "Les packages Modrinth (.mrpack) sont des fichiers ZIP spéciaux contenant un fichier d'index JSON qui décrit la structure des mods et inclut des métadonnées sur chaque fichier.",
    mrpackStructure: "Structure .mrpack",
    mrpackFormat: "Format de pack de mods Modrinth",
    mrpackList: [
      "Contient modrinth.index.json",
      "Inclut des métadonnées sur les mods",
      "Utilise le format de Modrinth",
      "Fichiers organisés par IDs de projet",
    ],
    zipStructure: "Structure ZIP standard",
    zipFormat: "Format d'archive universel",
    zipList: [
      "Contient les fichiers de mod directement",
      "Structure de dossiers simple",
      "Compatible avec la plupart des lanceurs",
      "Fichiers organisés par nom/fonction",
    ],
    keyDifference: "Différence clé",
    keyDiffDesc:
      "Un fichier .mrpack ne fait que référencer les mods via des URL de téléchargement dans son index — il ne contient pas les fichiers JAR réels (à l'exception des overrides). Notre convertisseur peut optionnellement les télécharger tous et les regrouper dans un ZIP autonome.",
  },
  guide: {
    eyebrow: "Guide d'utilisation",
    title: "Guide d'utilisation MRPACK",
    description:
      "Apprenez à ouvrir, extraire et dépanner des fichiers MRPACK — avec ou sans notre convertisseur.",
    tabs: {
      manual: "Ouvrir manuellement",
      jar: "Extraire les fichiers JAR",
      troubleshoot: "Dépannage",
    },
    manual: {
      title: "Comment ouvrir les fichiers MRPACK manuellement",
      desc: "Bien que les fichiers MRPACK soient conçus pour être installés directement via des lanceurs compatibles, vous pouvez également les ouvrir et les extraire manuellement.",
      standardTools: "Utiliser des outils de compression standards",
      steps: [
        "Renommez le fichier .mrpack en .zip (changez l'extension)",
        "Ouvrez-le avec n'importe quel outil d'extraction ZIP (WinRAR, 7-Zip, etc.)",
        "Extrayez le contenu dans un dossier",
        "Cherchez le fichier modrinth.index.json et le dossier overrides",
      ],
      commandLine: "Approche en ligne de commande",
      note: "Remarque : se contenter d'ouvrir le fichier MRPACK ne téléchargera pas les fichiers de mod réels. Pour obtenir les fichiers de mod, vous devrez soit utiliser un lanceur compatible, soit télécharger manuellement chaque mod depuis les URL listées dans le fichier modrinth.index.json.",
    },
    jar: {
      title: "Convertir MRPACK en fichiers JAR",
      desc: "Les fichiers MRPACK ne contiennent pas directement les fichiers JAR de vos mods, mais notre convertisseur peut vous aider à extraire tous les fichiers JAR.",
      automatic: "Extraction automatique des JAR",
      steps: [
        "Téléversez votre fichier MRPACK dans notre convertisseur",
        "Assurez-vous que « Télécharger les fichiers de mod » est sélectionné",
        "Convertissez au format ZIP",
        "Téléchargez et extrayez le ZIP",
        "Tous les fichiers JAR de mod se trouveront dans le dossier mods",
      ],
      why: "Pourquoi extraire les fichiers JAR ?",
      reasons: [
        "Inspecter manuellement les mods individuels",
        "Créer un pack de mods personnalisé en sélectionnant des mods spécifiques",
        "Utiliser avec des lanceurs qui ne prennent pas en charge MRPACK",
        "Sauvegarder vos mods préférés localement",
        "Modifier des mods spécifiques avant l'installation",
      ],
    },
    troubleshoot: {
      title: "Problèmes MRPACK courants et solutions",
      desc: "Guide de dépannage pour les problèmes les plus fréquents.",
      items: [
        {
          problem: "Impossible d'ouvrir le fichier .mrpack",
          solutions: [
            "Assurez-vous d'utiliser un lanceur compatible (Prism, MultiMC, ATLauncher)",
            "Essayez de le renommer en .zip et de l'extraire manuellement",
            "Vérifiez si le fichier a été téléchargé complètement sans erreurs",
          ],
        },
        {
          problem: "Mods manquants après l'installation",
          solutions: [
            "Assurez-vous que votre lanceur a accès à Internet pour télécharger les mods",
            "Certains mods peuvent être restreints par région ou temporairement indisponibles",
            "Utilisez notre convertisseur avec « Télécharger les fichiers de mod » activé",
          ],
        },
        {
          problem: "Fichier MRPACK corrompu",
          solutions: [
            "Re-téléchargez le fichier depuis la source originale",
            "Essayez d'utiliser un autre navigateur ou gestionnaire de téléchargement",
            "La conversion de MRPACK en ZIP peut parfois réparer des corruptions mineures",
          ],
        },
        {
          problem: "Impossible de convertir MRPACK",
          solutions: [
            "Vérifiez votre connexion Internet — les téléchargements de mods peuvent échouer",
            "Essayez d'utiliser un autre navigateur (Chrome ou Firefox recommandés)",
            "Pour les grands packs de mods, assurez-vous que votre appareil dispose de suffisamment de mémoire",
            "Essayez de désactiver les extensions de navigateur qui pourraient interférer",
          ],
        },
      ],
      advanced: "Dépannage avancé :",
      advancedDesc:
        "Si vous continuez à rencontrer des problèmes, vous pouvez examiner le fichier modrinth.index.json pour y chercher des entrées invalides ou des URL corrompues. Souvent, le téléchargement manuel des mods problématiques et leur placement dans les bons dossiers peuvent résoudre les problèmes d'installation.",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Questions fréquemment posées",
    description: "Tout ce que vous devez savoir sur la conversion de fichiers MRPACK en ZIP.",
    items: [
      {
        question: "Qu'est-ce qu'un fichier .mrpack ?",
        answer:
          "Un fichier .mrpack est le format de pack de mods de Modrinth pour Minecraft. Il contient un fichier d'index spécial qui répertorie tous les mods du pack avec leurs métadonnées et informations de téléchargement.",
      },
      {
        question: "Pourquoi aurais-je besoin de convertir en ZIP ?",
        answer:
          "Certains lanceurs ou gestionnaires de mods Minecraft pourraient ne pas prendre en charge directement le format .mrpack. La conversion en ZIP standard vous permet d'utiliser ces mods avec n'importe quel lanceur qui prend en charge les fichiers ZIP standards.",
      },
      {
        question: "Mes données sont-elles en sécurité ?",
        answer:
          "Oui, tout le traitement se fait entièrement dans votre navigateur. Vos fichiers ne sont jamais téléversés vers aucun serveur, garantissant une confidentialité et une sécurité totales.",
      },
      {
        question: "Qu'arrive-t-il aux métadonnées des mods ?",
        answer:
          "Par défaut, nous incluons le fichier modrinth.index.json original dans le ZIP de sortie. Vous pouvez choisir de l'exclure si vous n'avez pas besoin des métadonnées dans votre fichier converti en désactivant l'option « Inclure le fichier d'index ».",
      },
      {
        question: "Puis-je utiliser cet outil hors ligne ?",
        answer:
          "Cet outil web nécessite une connexion Internet pour se charger initialement. Si vous activez l'option « Télécharger les fichiers de mod », il aura également besoin d'un accès Internet pour télécharger les fichiers de mod référencés. Cependant, le traitement de base des fichiers se fait localement. Pour une solution entièrement hors ligne, envisagez des outils en ligne de commande comme packwiz ou des gestionnaires de mods spécialisés.",
      },
      {
        question: "Que fait l'option « Télécharger les fichiers de mod » ?",
        answer:
          "Lorsqu'elle est activée, cette option télécharge tous les fichiers de mod référencés dans le modrinth.index.json et les inclut dans le ZIP de sortie. Cela crée un pack de mods complet et prêt à l'emploi qui fonctionne avec les lanceurs qui ne prennent pas en charge le format .mrpack. Sans cette option, le ZIP de sortie ne contiendra que les fichiers qui étaient déjà dans le fichier .mrpack (généralement juste les fichiers de configuration et les packs de ressources).",
      },
    ],
  },
  launchers: {
    eyebrow: "Compatibilité",
    title: "Guide de compatibilité des lanceurs",
    description:
      "Tous les lanceurs ne gèrent pas les fichiers .mrpack de la même manière. Voici le détail complet de la compatibilité.",
    launcher: "Lanceur",
    support: "Prise en charge MRPACK",
    needZip: "Besoin de ZIP ?",
    notes: "Remarques",
    fullSupport: "Pris en charge totalement",
    partial: "Partiel",
    notSupported: "Non pris en charge",
    notRequired: "Non requis",
    sometimes: "Parfois",
    required: "Requis",
    recommended: "Recommandé",
    scrollHint: "Faites défiler le tableau horizontalement pour voir toutes les colonnes",
    proTip: "Astuce de pro :",
    proTipDesc:
      "En cas de doute, la conversion au format ZIP offre la compatibilité la plus universelle entre tous les lanceurs. Utilisez notre convertisseur ci-dessus avec « Télécharger les fichiers de mod » activé pour un pack complet et prêt à l'emploi.",
    items: [
      { name: "Prism Launcher", notes: "Import direct disponible" },
      { name: "MultiMC", notes: "Version 5.0+ prise en charge via la fonctionnalité « Importer depuis zip »" },
      { name: "Launcher officiel", notes: "Pas de prise en charge native des packs de mods" },
      { name: "CurseForge", notes: "Principalement conçu pour le format .cf, certains fichiers mrpack peuvent nécessiter une conversion" },
      { name: "ATLauncher", notes: "Import direct disponible" },
      { name: "GDLauncher", notes: "Utiliser la fonction d'import" },
      { name: "Technic Launcher", notes: "Prend uniquement en charge le format ZIP" },
      { name: "HMCL", notes: "Utiliser la fonctionnalité « Installer un pack de mods »" },
      { name: "PCL2", notes: "Format ZIP plus stable" },
    ],
  },
  format: {
    eyebrow: "Format",
    title: "À propos du format MRPACK",
    description:
      "Le format de pack de mods Modrinth (.mrpack) est un format de fichier ZIP spécialisé conçu pour distribuer des packs de mods Minecraft de manière efficace et standardisée.",
    structureExample: "Exemple de structure",
    advantages: "Avantages MRPACK",
    advantageList: [
      "Tailles de fichiers plus petites (références au lieu d'intégrer les mods)",
      "Résolution automatique des dépendances",
      "Meilleur contrôle des versions et mises à jour",
      "Prise en charge des configurations client et serveur",
      "Compatibilité native avec les lanceurs modernes",
    ],
    history: "Historique du format",
    historyItems: [
      { title: "Version initiale", desc: "Spécification initiale du format publiée par Modrinth" },
      { title: "Version 1 standardisée", desc: "Standardisée avec vérification améliorée des hachages" },
      { title: "Prise en charge améliorée", desc: "Prise en charge améliorée des lanceurs et différenciation client/serveur" },
    ],
    comparison: "Comparaison des formats de packs de mods",
    feature: "Fonctionnalité",
    comparisonRows: [
      { feature: "Taille du fichier", mrpack: "Petit (références uniquement)", curseforge: "Moyen (manifeste)", zip: "Grand (contient tous les mods)" },
      { feature: "Vérification d'intégrité", mrpack: "Hachages SHA1 et SHA512", curseforge: "IDs de projet uniquement", zip: "Aucun intégré" },
      { feature: "Prise en charge des lanceurs", mrpack: "La plupart des lanceurs modernes", curseforge: "CurseForge et quelques autres", zip: "Prise en charge universelle" },
      { feature: "Distinction client/serveur", mrpack: "Prise en charge intégrée", curseforge: "Prise en charge limitée", zip: "Séparation manuelle" },
      { feature: "Standard ouvert", mrpack: "Oui (entièrement documenté)", curseforge: "Partiellement", zip: "Pas de standard" },
    ],
  },
  footer: {
    description:
      "Convertisseur gratuit, privé et basé sur navigateur pour les fichiers de pack de mods Modrinth. Conçu pour la communauté Minecraft.",
    copyright: "Tout le traitement se fait dans votre navigateur.",
    disclaimer: "Non affilié à Modrinth. Conçu avec amour pour les joueurs de Minecraft.",
  },
  footerLinks: {
    tool: {
      title: "Outil",
      converter: "Convertisseur",
      howItWorks: "Comment ça marche",
      technical: "Détails techniques",
    },
    resources: {
      title: "Ressources",
      usageGuide: "Guide d'utilisation",
      faq: "FAQ",
      launcherCompat: "Compatibilité des lanceurs",
    },
    legal: {
      title: "Mentions légales",
      privacy: "Politique de confidentialité",
      contact: "Nous contacter",
    },
    external: {
      title: "Externe",
      minecraft: "Minecraft",
      modrinth: "Modrinth",
      curseforge: "CurseForge",
    },
  },
  a11y: {
    selectLanguage: "Sélectionner la langue",
    toggleMenu: "Basculer le menu",
  },
  privacy: {
    title: "Politique de confidentialité",
    lastUpdated: "Dernière mise à jour : {{date}}",
    intro:
      "MRPack to ZIP s'engage à protéger votre confidentialité. Cette Politique de confidentialité explique comment nous traitons les informations lorsque vous utilisez notre outil.",
    localProcessingTitle: "Traitement 100 % côté navigateur",
    localProcessingText:
      "Toutes les conversions de fichiers se font entièrement dans votre navigateur. Vos fichiers .mrpack, leur contenu et tous les fichiers de mod téléchargés ne sont jamais téléversés vers nos serveurs. Nous n'avons pas accès aux fichiers que vous convertissez.",
    dataCollectionTitle: "Données que nous ne collectons pas",
    dataCollectionText:
      "Nous ne collectons, ne stockons ni ne traitons aucune information personnelle. Nous n'utilisons pas de cookies à des fins de suivi et ne maintenons pas de comptes utilisateurs.",
    thirdPartyTitle: "Services tiers",
    thirdPartyText:
      "Lorsque vous utilisez les fonctionnalités ID de projet ou Depuis une URL, votre navigateur communique directement avec les serveurs API et CDN de Modrinth. Veuillez consulter la Politique de confidentialité de Modrinth pour savoir comment ils traitent les requêtes.",
    analyticsTitle: "Analytique",
    analyticsText:
      "Nous pouvons utiliser des outils d'analytique axés sur la confidentialité qui collectent des données d'utilisation anonymisées (telles que les vues de pages et la localisation au niveau du pays) sans identifier les utilisateurs individuels.",
    changesTitle: "Modifications de cette politique",
    changesText:
      "Nous pouvons mettre à jour cette Politique de confidentialité de temps à autre. Toute modification sera publiée sur cette page avec une date d'entrée en vigueur mise à jour.",
    contactTitle: "Nous contacter",
    contactText:
      "Si vous avez des questions concernant cette Politique de confidentialité, veuillez visiter notre page Contact.",
  },
  contact: {
    title: "Nous contacter",
    subtitle:
      "Vous avez des questions, des retours ou des suggestions ? Nous serions ravis de vous entendre.",
    emailTitle: "E-mail",
    emailText: "Pour toute demande générale, veuillez nous contacter à",
    githubTitle: "GitHub",
    githubText: "Vous avez trouvé un bug ou souhaitez contribuer ? Visitez notre dépôt open source.",
    modrinthTitle: "Modrinth",
    modrinthText: "Découvrez d'incroyables packs de mods sur Modrinth, la plateforme pour laquelle cet outil est conçu.",
    form: {
      name: "Votre nom",
      email: "Votre e-mail",
      message: "Message",
      send: "Envoyer le message",
      success: "Merci ! Votre message a été envoyé.",
    },
  },
};
