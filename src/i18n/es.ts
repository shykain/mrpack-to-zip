export default {
  nav: {
    converter: "Conversor",
    about: "Acerca de",
    howItWorks: "Cómo funciona",
    guide: "Guía",
    faq: "Preguntas frecuentes",
    launchers: "Launchers",
    privacy: "Privacidad",
    contact: "Contacto",
    convertNow: "Convertir ahora",
  },
  theme: {
    light: "Claro",
    dark: "Oscuro",
  },
  hero: {
    badge: "100% en el navegador · Sin subidas",
    title: "Conversor de MRPack a ZIP",
    subtitle:
      "Convierte archivos de pack de mods de Modrinth a formato ZIP estándar con descarga opcional de mods. Rápido, privado y gratuito.",
    privacyNote: "Los archivos nunca salen de tu navegador",
    freeNote: "No requiere registro",
  },
  converter: {
    optionsTitle: "Opciones de conversión",
    tip: 'Consejo: Activa "Descargar archivos de mod" para obtener todos los archivos JAR desde el CDN de Modrinth y tener un pack completo y listo para usar.',
    processing: "Procesando — puede tardar un poco en packs de mods grandes.",
    convertBtn: "Convertir a ZIP",
  },
  packInfo: {
    title: "Pack reconocido",
    subtitle: "Haz clic en Convertir para empezar el procesamiento",
    replace: "Reemplazar",
    replaceFile: "Reemplazar archivo",
    name: "Nombre",
    version: "Versión",
    minecraft: "Minecraft",
    loader: "Cargador",
    mods: "Mods",
    modFilesDetected: "{{count}} archivos de mod detectados",
  },
  urlInput: {
    steps: [
      "Pega una URL de página de proyecto de Modrinth (p. ej. modrinth.com/project/...)",
      "O pega un enlace directo de descarga .mrpack desde la pestaña Versions",
      "La descarga automática comienza después de pegar",
      "Espera a que el pack se convierta",
    ],
    placeholder: "https://modrinth.com/project/... o https://cdn.modrinth.com/...",
    downloading: "Descargando...",
    downloadBtn: "Descargar desde URL",
    supported: "Se admiten tanto las URL de páginas de proyecto de Modrinth como los enlaces directos de descarga .mrpack.",
  },
  projectInput: {
    steps: [
      "Ve a un proyecto de pack de mods en Modrinth",
      "Copia el ID del proyecto, slug o URL completa",
      "Pégalo a continuación y comienza la obtención automática",
      "Espera a que el pack se convierta",
    ],
    placeholder: "p. ej. fabulously-optimized o 1KVo5zza o URL completa",
    fetching: "Obteniendo...",
    fetchBtn: "Obtener de Modrinth",
    browseModpacks: "Explorar packs de mods en Modrinth",
  },
  dropZone: {
    steps: [
      "Consigue un archivo .mrpack (p. ej. desde Modrinth)",
      "Súbelo a continuación (se procesa en tu navegador)",
      "Elige tus opciones de conversión",
      "Haz clic en Convertir y descarga el ZIP",
    ],
    mrpackFile: "Archivo .mrpack",
    removeFile: "Quitar archivo",
    dropHere: "Suelta tu archivo .mrpack aquí",
    dragDrop: "Arrastra y suelta tu archivo .mrpack aquí",
    or: "o",
    browseFiles: "Explorar archivos",
    privacyNote: "Los archivos se procesan completamente en tu navegador — no se sube nada a ningún servidor.",
  },
  fileStructure: {
    uploadToView: "Sube un archivo .mrpack para ver su estructura",
    fileStructure: "Estructura de archivos",
    packInfo: "Información del pack",
    files: "{{count}} archivos",
    selectedFile: "Archivo seleccionado",
    mrpackFile: "Archivo .mrpack",
    parsing: "Analizando estructura...",
    name: "Nombre",
    version: "Versión",
    minecraft: "Minecraft",
    modLoader: "Cargador de mods",
    mods: "{{count}} mods",
    noFiles: "No se encontraron archivos",
    onlyUpload: "La estructura de archivos solo está disponible al subir archivos locales",
  },
  progress: {
    parsing: "Analizando pack de mods...",
    downloading: "Descargando archivos de mod...",
    packaging: "Empaquetando archivo ZIP...",
    done: "¡Conversión completa!",
    error: "La conversión falló",
    errorFallback: "Error",
    mods: "{{processed}}/{{total}} mods",
    skipped: "{{count}} omitidos",
    modsReady: "{{count}} mods listos",
  },
  inputMode: {
    project: { label: "ID del proyecto", desc: "Desde Modrinth" },
    url: { label: "Desde URL", desc: "Pega el enlace de descarga" },
    file: { label: "Subir archivo", desc: ".mrpack local" },
  },
  result: {
    ready: "¡Tu archivo ZIP está listo!",
    mods: "{{count}} mods · ",
    skipped: "{{count}} omitidos · ",
    download: "Descargar ZIP",
    convertAnother: "Convertir otro",
  },
  options: {
    downloadMods: {
      label: "Descargar archivos de mod",
      desc: "Obtener todos los archivos JAR referenciados en el índice del pack de mods desde el CDN de Modrinth",
    },
    keepStructure: {
      label: "Mantener estructura de carpetas",
      desc: "Conservar la disposición original de carpetas del pack de mods",
    },
    normalize: {
      label: "Normalizar nombres de archivo",
      desc: "Renombrar archivos a caracteres ASCII seguros para mayor compatibilidad",
    },
    includeIndex: {
      label: "Incluir archivo de índice",
      desc: "Conservar modrinth.index.json en el ZIP de salida",
    },
  },
  stats: {
    clientSide: "En el cliente",
    privacy: "Privacidad",
    cost: "Coste",
  },
  about: {
    eyebrow: "Acerca de",
    title: "Acerca del conversor de MRPack a ZIP",
    description:
      "Esta herramienta online gratuita convierte archivos de pack de mods de Modrinth (.mrpack) a formato ZIP estándar para mods de Minecraft. No requiere instalación — todo ocurre en tu navegador.",
    features: [
      {
        title: "100% en el cliente",
        desc: "Los archivos se procesan completamente en tu navegador y nunca se suben a ningún servidor, garantizando privacidad total.",
      },
      {
        title: "Salida ZIP universal",
        desc: "Convierte archivos .mrpack a formato ZIP estándar compatible con la mayoría de cargadores de mods y launchers.",
      },
      {
        title: "Control de estructura",
        desc: "Conserva la estructura de carpetas original o aplánala según lo necesites para tu flujo de trabajo.",
      },
      {
        title: "Normalización de nombres",
        desc: "Opcionalmente, normaliza los nombres de archivo a caracteres ASCII seguros para una mejor compatibilidad entre plataformas.",
      },
      {
        title: "Rápido y fiable",
        desc: "Procesamiento eficiente en el cliente con seguimiento de progreso. Sin colas, sin esperas.",
      },
      {
        title: "Descargador de mods",
        desc: "Opcionalmente, obtén todos los archivos JAR referenciados desde el CDN de Modrinth directamente en tu ZIP de salida.",
      },
    ],
    builtFor: "Hecho para Minecrafters",
    builtForDesc:
      "Diseñado para usuarios de mods de Minecraft que necesitan convertir archivos entre distintos formatos para asegurar la compatibilidad con varios launchers y cargadores de mods.",
    worksWith: "Compatible con Fabric, Forge, Quilt y más",
    tagsTitle: "Etiquetas",
    tags: ["Minecraft", "Modrinth", "Packs de mods", "Conversión de archivos", "Fabric", "Forge", "Quilt"],
  },
  howItWorks: {
    eyebrow: "Cómo funciona",
    title: "Tres pasos sencillos",
    description:
      "Convertir un paquete de Modrinth (.mrpack) a un archivo ZIP estándar implica varios pasos que nuestra herramienta gestiona automáticamente.",
    steps: [
      {
        title: "Subir",
        desc: "Sube tu archivo .mrpack a nuestra herramienta. El archivo se procesa completamente en tu navegador y nunca se envía a ningún servidor.",
      },
      {
        title: "Procesar",
        desc: "Nuestra herramienta extrae el archivo modrinth.index.json y analiza la estructura de mods, preparándola para la conversión a formato ZIP estándar.",
      },
      {
        title: "Convertir y descargar",
        desc: "La herramienta empaqueta todos los archivos según tu configuración y crea un archivo ZIP estándar listo para descargar.",
      },
    ],
  },
  techDetails: {
    eyebrow: "Detalles técnicos",
    title: "mrpack frente a ZIP estándar",
    description:
      "Los paquetes de Modrinth (.mrpack) son archivos ZIP especiales que contienen un archivo de índice JSON que describe la estructura de mods e incluye metadatos sobre cada archivo.",
    mrpackStructure: "Estructura .mrpack",
    mrpackFormat: "Formato de pack de mods de Modrinth",
    mrpackList: [
      "Contiene modrinth.index.json",
      "Incluye metadatos sobre los mods",
      "Usa el formato de Modrinth",
      "Archivos organizados por IDs de proyecto",
    ],
    zipStructure: "Estructura ZIP estándar",
    zipFormat: "Formato de archivo universal",
    zipList: [
      "Contiene archivos de mod directamente",
      "Estructura de carpetas sencilla",
      "Compatible con la mayoría de launchers",
      "Archivos organizados por nombre/función",
    ],
    keyDifference: "Diferencia clave",
    keyDiffDesc:
      "Un archivo .mrpack solo referencia los mods mediante URLs de descarga en su índice — no contiene los archivos JAR reales (excepto en overrides). Nuestro conversor puede, opcionalmente, descargarlos todos y empaquetarlos en un ZIP autónomo.",
  },
  guide: {
    eyebrow: "Guía de uso",
    title: "Guía de uso de MRPACK",
    description:
      "Aprende cómo abrir, extraer y solucionar problemas de archivos MRPACK — con o sin nuestro conversor.",
    tabs: {
      manual: "Abrir manualmente",
      jar: "Extraer archivos JAR",
      troubleshoot: "Solución de problemas",
    },
    manual: {
      title: "Cómo abrir archivos MRPACK manualmente",
      desc: "Aunque los archivos MRPACK están diseñados para instalarse directamente a través de launchers compatibles, también puedes abrirlos y extraerlos manualmente.",
      standardTools: "Con herramientas de compresión estándar",
      steps: [
        "Renombra el archivo .mrpack a .zip (cambia la extensión)",
        "Ábrelo con cualquier herramienta de extracción ZIP (WinRAR, 7-Zip, etc.)",
        "Extrae el contenido a una carpeta",
        "Busca el archivo modrinth.index.json y la carpeta overrides",
      ],
      commandLine: "Enfoque desde la línea de comandos",
      note: "Nota: Simplemente abrir el archivo MRPACK no descargará los archivos de mod reales. Para obtener los archivos de mod, necesitarás usar un launcher compatible o descargar manualmente cada mod desde las URLs listadas en el archivo modrinth.index.json.",
    },
    jar: {
      title: "Convertir MRPACK a archivos JAR",
      desc: "Los archivos MRPACK no contienen directamente los archivos JAR de tus mods, pero nuestro conversor puede ayudarte a extraer todos los archivos JAR.",
      automatic: "Extracción automática de JAR",
      steps: [
        "Sube tu archivo MRPACK a nuestro conversor",
        "Asegúrate de que \"Descargar archivos de mod\" esté seleccionado",
        "Conviértelo a formato ZIP",
        "Descarga y extrae el ZIP",
        "Todos los archivos JAR de mods estarán en la carpeta mods",
      ],
      why: "¿Por qué extraer archivos JAR?",
      reasons: [
        "Inspeccionar manualmente mods individuales",
        "Crear un pack de mods personalizado con mods seleccionados",
        "Usar con launchers que no admiten MRPACK",
        "Hacer copia de seguridad de tus mods favoritos localmente",
        "Modificar mods específicos antes de la instalación",
      ],
    },
    troubleshoot: {
      title: "Problemas comunes de MRPACK y soluciones",
      desc: "Guía de solución de problemas para los inconvenientes más frecuentes.",
      items: [
        {
          problem: "No se puede abrir el archivo .mrpack",
          solutions: [
            "Asegúrate de usar un launcher compatible (Prism, MultiMC, ATLauncher)",
            "Prueba a renombrarlo a .zip y extraerlo manualmente",
            "Comprueba que el archivo se haya descargado completamente sin errores",
          ],
        },
        {
          problem: "Faltan mods después de la instalación",
          solutions: [
            "Asegúrate de que tu launcher tenga acceso a internet para descargar los mods",
            "Algunos mods pueden estar restringidos por región o no disponibles temporalmente",
            "Usa nuestro conversor con \"Descargar archivos de mod\" activado",
          ],
        },
        {
          problem: "Archivo MRPACK corrupto",
          solutions: [
            "Vuelve a descargar el archivo desde la fuente original",
            "Prueba con un navegador o gestor de descargas diferente",
            "Convertir de MRPACK a ZIP a veces puede reparar una corrupción menor",
          ],
        },
        {
          problem: "No se puede convertir MRPACK",
          solutions: [
            "Comprueba tu conexión a internet — puede que las descargas de mods estén fallando",
            "Prueba con un navegador diferente (se recomienda Chrome o Firefox)",
            "Para packs de mods grandes, asegúrate de que tu dispositivo tenga memoria suficiente",
            "Prueba a desactivar las extensiones del navegador que puedan interferir",
          ],
        },
      ],
      advanced: "Solución de problemas avanzada:",
      advancedDesc:
        "Si sigues teniendo problemas, puedes examinar el archivo modrinth.index.json en busca de entradas no válidas o URLs corruptas. A menudo, descargar manualmente los mods problemáticos y colocarlos en las carpetas correctas puede resolver los problemas de instalación.",
    },
  },
  faq: {
    eyebrow: "Preguntas frecuentes",
    title: "Preguntas frecuentes",
    description: "Todo lo que necesitas saber sobre la conversión de archivos MRPACK a ZIP.",
    items: [
      {
        question: "¿Qué es un archivo .mrpack?",
        answer:
          "Un archivo .mrpack es el formato de pack de mods de Modrinth para Minecraft. Contiene un archivo de índice especial que lista todos los mods del pack junto con sus metadatos e información de descarga.",
      },
      {
        question: "¿Por qué necesitaría convertir a ZIP?",
        answer:
          "Algunos launchers o gestores de mods de Minecraft podrían no admitir directamente el formato .mrpack. Convertirlo a ZIP estándar te permite usar estos mods con cualquier launcher que admita archivos ZIP normales.",
      },
      {
        question: "¿Están seguros mis datos?",
        answer:
          "Sí, todo el procesamiento ocurre completamente en tu navegador. Tus archivos nunca se suben a ningún servidor, garantizando privacidad y seguridad totales.",
      },
      {
        question: "¿Qué ocurre con los metadatos de los mods?",
        answer:
          'Por defecto, incluimos el archivo modrinth.index.json original en el ZIP de salida. Puedes excluirlo si no necesitas los metadatos en tu archivo convertido desactivando la opción "Incluir archivo de índice".',
      },
      {
        question: "¿Puedo usar esta herramienta sin conexión?",
        answer:
          'Esta herramienta web requiere una conexión a internet para cargarse inicialmente. Si activas la opción "Descargar archivos de mod", también necesitará acceso a internet para descargar los archivos de mod referenciados. Sin embargo, el procesamiento básico de archivos ocurre localmente. Para una solución totalmente sin conexión, considera herramientas de línea de comandos como packwiz o gestores de mods especializados.',
      },
      {
        question: '¿Qué hace la opción "Descargar archivos de mod"?',
        answer:
          "Cuando se activa, esta opción descargará todos los archivos de mod referenciados en modrinth.index.json y los incluirá en el ZIP de salida. Esto crea un pack de mods completo y listo para usar que funciona con launchers que no admiten el formato .mrpack. Sin esta opción, el ZIP de salida solo contendrá los archivos que ya estaban en el archivo .mrpack (normalmente solo archivos de configuración y resource packs).",
      },
    ],
  },
  launchers: {
    eyebrow: "Compatibilidad",
    title: "Guía de compatibilidad de launchers",
    description:
      "No todos los launchers gestionan los archivos .mrpack de la misma manera. Aquí tienes el desglose completo de compatibilidad.",
    launcher: "Launcher",
    support: "Admite MRPACK",
    needZip: "¿Necesita ZIP?",
    notes: "Notas",
    fullSupport: "Compatibilidad total",
    partial: "Parcial",
    notSupported: "No admitido",
    notRequired: "No necesario",
    sometimes: "A veces",
    required: "Necesario",
    recommended: "Recomendado",
    scrollHint: "Desplaza la tabla horizontalmente para ver todas las columnas",
    proTip: "Consejo profesional:",
    proTipDesc:
      'Si tienes dudas, convertir a formato ZIP ofrece la compatibilidad más universal entre todos los launchers. Usa nuestro conversor de arriba con "Descargar archivos de mod" activado para obtener un pack completo y listo para usar.',
    items: [
      { name: "Prism Launcher", notes: "Importación directa disponible" },
      { name: "MultiMC", notes: 'La versión 5.0+ lo admite mediante la función "Importar desde zip"' },
      { name: "Official Launcher", notes: "Sin soporte nativo para packs de mods" },
      { name: "CurseForge", notes: "Diseñado principalmente para formato .cf, algunos archivos mrpack pueden requerir conversión" },
      { name: "ATLauncher", notes: "Importación directa disponible" },
      { name: "GDLauncher", notes: "Usar la función de importación" },
      { name: "Technic Launcher", notes: "Solo admite formato ZIP" },
      { name: "HMCL", notes: 'Usar la función "Install Modpack"' },
      { name: "PCL2", notes: "Formato ZIP más estable" },
    ],
  },
  format: {
    eyebrow: "Formato",
    title: "Acerca del formato MRPACK",
    description:
      "El formato de pack de mods de Modrinth (.mrpack) es un formato de archivo ZIP especializado diseñado para distribuir packs de mods de Minecraft de forma eficiente y estandarizada.",
    structureExample: "Ejemplo de estructura",
    advantages: "Ventajas de MRPACK",
    advantageList: [
      "Tamaños de archivo más pequeños (referencias en lugar de mods incrustados)",
      "Resolución automática de dependencias",
      "Mejor control de versiones y actualizaciones",
      "Soporte para configuraciones de cliente y servidor",
      "Compatibilidad nativa con launchers modernos",
    ],
    history: "Historia del formato",
    historyItems: [
      { title: "Versión inicial", desc: "Especificación inicial del formato publicada por Modrinth" },
      { title: "Versión 1 estandarizada", desc: "Estandarizada con verificación de hash mejorada" },
      { title: "Soporte mejorado", desc: "Soporte mejorado para launchers y diferenciación cliente/servidor" },
    ],
    comparison: "Comparación de formatos de pack de mods",
    feature: "Característica",
    comparisonRows: [
      { feature: "Tamaño de archivo", mrpack: "Pequeño (solo referencias)", curseforge: "Mediano (manifest)", zip: "Grande (contiene todos los mods)" },
      { feature: "Verificación de integridad", mrpack: "Hashes SHA1 y SHA512", curseforge: "Solo IDs de proyecto", zip: "Ninguno integrado" },
      { feature: "Soporte de launchers", mrpack: "La mayoría de launchers modernos", curseforge: "CurseForge y algunos otros", zip: "Soporte universal" },
      { feature: "Distinción cliente/servidor", mrpack: "Soporte integrado", curseforge: "Soporte limitado", zip: "Separación manual" },
      { feature: "Estándar abierto", mrpack: "Sí (totalmente documentado)", curseforge: "Parcialmente", zip: "Sin estándar" },
    ],
  },
  footer: {
    description:
      "Conversor gratuito, privado y basado en navegador para archivos de pack de mods de Modrinth. Hecho para la comunidad de Minecraft.",
    copyright: "Todo el procesamiento ocurre en tu navegador.",
    disclaimer: "No afiliado con Modrinth. Hecho con cariño para Minecrafters.",
  },
  footerLinks: {
    tool: {
      title: "Herramienta",
      converter: "Conversor",
      howItWorks: "Cómo funciona",
      technical: "Detalles técnicos",
    },
    resources: {
      title: "Recursos",
      usageGuide: "Guía de uso",
      faq: "Preguntas frecuentes",
      launcherCompat: "Compatibilidad de launchers",
    },
    legal: {
      title: "Legal",
      privacy: "Política de privacidad",
      contact: "Contáctanos",
    },
    external: {
      title: "Externos",
      minecraft: "Minecraft",
      modrinth: "Modrinth",
      curseforge: "CurseForge",
    },
  },
  a11y: {
    selectLanguage: "Seleccionar idioma",
    toggleMenu: "Abrir/cerrar menú",
  },
  privacy: {
    title: "Política de privacidad",
    lastUpdated: "Última actualización: {{date}}",
    intro:
      "MRPack to ZIP está comprometido con la protección de tu privacidad. Esta Política de privacidad explica cómo gestionamos la información cuando usas nuestra herramienta.",
    localProcessingTitle: "Procesamiento 100% en el navegador",
    localProcessingText:
      "Todas las conversiones de archivos ocurren completamente dentro de tu navegador web. Tus archivos .mrpack, su contenido y cualquier archivo de mod descargado nunca se suben a nuestros servidores. No tenemos acceso a los archivos que conviertes.",
    dataCollectionTitle: "Datos que no recopilamos",
    dataCollectionText:
      "No recopilamos, almacenamos ni procesamos ninguna información personal. No usamos cookies con fines de seguimiento y no mantenemos cuentas de usuario.",
    thirdPartyTitle: "Servicios de terceros",
    thirdPartyText:
      "Cuando usas las funciones de ID del proyecto o Desde URL, tu navegador se comunica directamente con la API de Modrinth y los servidores CDN. Consulta la Política de privacidad de Modrinth para información sobre cómo gestionan las solicitudes.",
    analyticsTitle: "Analítica",
    analyticsText:
      "Podemos usar herramientas de analítica enfocadas en la privacidad que recopilan datos de uso anonimizados (como vistas de página y ubicación a nivel de país) sin identificar a usuarios individuales.",
    changesTitle: "Cambios en esta política",
    changesText:
      "Podemos actualizar esta Política de privacidad de vez en cuando. Cualquier cambio se publicará en esta página con una fecha de entrada en vigor actualizada.",
    contactTitle: "Contáctanos",
    contactText:
      "Si tienes alguna pregunta sobre esta Política de privacidad, visita nuestra página de Contacto.",
  },
  contact: {
    title: "Contáctanos",
    subtitle:
      "¿Tienes preguntas, comentarios o sugerencias? Nos encantaría saber de ti.",
    emailTitle: "Correo electrónico",
    emailText: "Para consultas generales, escríbenos a",
    githubTitle: "GitHub",
    githubText: "¿Encontraste un error o quieres contribuir? Visita nuestro repositorio de código abierto.",
    modrinthTitle: "Modrinth",
    modrinthText: "Descubre packs de mods increíbles en Modrinth, la plataforma para la que está hecha esta herramienta.",
    form: {
      name: "Tu nombre",
      email: "Tu correo electrónico",
      message: "Mensaje",
      send: "Enviar mensaje",
      success: "¡Gracias! Tu mensaje ha sido enviado.",
    },
  },
};
