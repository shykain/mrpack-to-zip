export default {
  nav: {
    converter: "Converter",
    about: "About",
    howItWorks: "How It Works",
    guide: "Guide",
    faq: "FAQ",
    launchers: "Launchers",
    privacy: "Privacy",
    contact: "Contact",
    convertNow: "Convert Now",
  },
  theme: {
    light: "Light",
    dark: "Dark",
  },
  hero: {
    badge: "100% Browser-side · No uploads",
    title: "MRPack to ZIP Converter",
    subtitle:
      "Convert Modrinth modpack files to standard ZIP format with optional mod downloading. Fast, private, and free.",
    privacyNote: "Files never leave your browser",
    freeNote: "No sign-up required",
  },
  converter: {
    optionsTitle: "Conversion Options",
    tip: 'Tip: Enable "Download mod files" to fetch all JAR files from Modrinth CDN for a complete, ready-to-use pack.',
    processing: "Processing — this may take a while for large modpacks.",
    convertBtn: "Convert to ZIP",
  },
  packInfo: {
    title: "Pack Recognized",
    subtitle: "Click Convert to start processing",
    replace: "Replace",
    replaceFile: "Replace file",
    name: "Name",
    version: "Version",
    minecraft: "Minecraft",
    loader: "Loader",
    mods: "Mods",
    modFilesDetected: "{{count}} mod files detected",
  },
  urlInput: {
    steps: [
      "Paste a Modrinth project page URL (e.g. modrinth.com/project/...)",
      "Or paste a direct .mrpack download link from the Versions tab",
      "Auto-download starts after you paste",
      "Wait for the pack to be converted",
    ],
    placeholder: "https://modrinth.com/project/... or https://cdn.modrinth.com/...",
    downloading: "Downloading...",
    downloadBtn: "Download from URL",
    supported: "Both Modrinth project page URLs and direct .mrpack download links are supported.",
  },
  projectInput: {
    steps: [
      "Go to a Modrinth modpack project",
      "Copy the project ID, slug, or full URL",
      "Paste it below and auto-fetch starts",
      "Wait for the pack to be converted",
    ],
    placeholder: "e.g. fabulously-optimized or 1KVo5zza or full URL",
    fetching: "Fetching...",
    fetchBtn: "Fetch from Modrinth",
    browseModpacks: "Browse modpacks on Modrinth",
  },
  dropZone: {
    steps: [
      "Get a .mrpack file (e.g. from Modrinth)",
      "Upload it below (processed in your browser)",
      "Choose your conversion options",
      "Click Convert and download the ZIP",
    ],
    mrpackFile: ".mrpack file",
    removeFile: "Remove file",
    dropHere: "Drop your .mrpack file here",
    dragDrop: "Drag & drop your .mrpack file here",
    or: "or",
    browseFiles: "Browse Files",
    privacyNote: "Files are processed entirely in your browser — nothing is uploaded to any server.",
  },
  fileStructure: {
    uploadToView: "Upload a .mrpack file to view its structure",
    fileStructure: "File Structure",
    packInfo: "Pack Info",
    files: "{{count}} files",
    selectedFile: "Selected file",
    mrpackFile: ".mrpack file",
    parsing: "Parsing structure...",
    name: "Name",
    version: "Version",
    minecraft: "Minecraft",
    modLoader: "Mod Loader",
    mods: "{{count}} mods",
    noFiles: "No files found",
    onlyUpload: "File structure is only available when uploading local files",
  },
  progress: {
    parsing: "Parsing modpack...",
    downloading: "Downloading mod files...",
    packaging: "Packaging ZIP archive...",
    done: "Conversion complete!",
    error: "Conversion failed",
    errorFallback: "Error",
    mods: "{{processed}}/{{total}} mods",
    skipped: "{{count}} skipped",
    modsReady: "{{count}} mods ready",
  },
  inputMode: {
    project: { label: "Project ID", desc: "From Modrinth" },
    url: { label: "From URL", desc: "Paste download link" },
    file: { label: "Upload File", desc: "Local .mrpack" },
  },
  result: {
    ready: "Your ZIP file is ready!",
    mods: "{{count}} mods · ",
    skipped: "{{count}} skipped · ",
    download: "Download ZIP",
    convertAnother: "Convert another",
  },
  options: {
    downloadMods: {
      label: "Download mod files",
      desc: "Fetch all JAR files referenced in the modpack index from Modrinth CDN",
    },
    keepStructure: {
      label: "Keep folder structure",
      desc: "Preserve the original modpack directory layout",
    },
    normalize: {
      label: "Normalize filenames",
      desc: "Rename files to ASCII-safe characters for compatibility",
    },
    includeIndex: {
      label: "Include index file",
      desc: "Keep modrinth.index.json in the output ZIP",
    },
  },
  stats: {
    clientSide: "Client-side",
    privacy: "Privacy",
    cost: "Cost",
  },
  about: {
    eyebrow: "About",
    title: "About MRPack to ZIP Converter",
    description:
      "This free online tool converts Modrinth modpack files (.mrpack) to standard ZIP format for Minecraft mods. No installation required — everything happens in your browser.",
    features: [
      {
        title: "100% Client-side",
        desc: "Files are processed entirely in your browser and never uploaded to any server, ensuring complete privacy.",
      },
      {
        title: "Universal ZIP output",
        desc: "Convert .mrpack files to standard ZIP format compatible with most mod loaders and launchers.",
      },
      {
        title: "Structure control",
        desc: "Maintain the original folder structure or flatten it as needed for your workflow.",
      },
      {
        title: "Filename normalization",
        desc: "Optionally normalize filenames to ASCII-safe characters for better cross-platform compatibility.",
      },
      {
        title: "Fast & reliable",
        desc: "Efficient client-side processing with progress tracking. No queues, no waiting.",
      },
      {
        title: "Mod downloader",
        desc: "Optionally fetch all referenced JAR files from Modrinth CDN into your output ZIP.",
      },
    ],
    builtFor: "Built for Minecrafters",
    builtForDesc:
      "Designed for Minecraft mod users who need to convert files between different formats for compatibility with various launchers and mod loaders.",
    worksWith: "Works with Fabric, Forge, Quilt & more",
    tagsTitle: "Tags",
    tags: ["Minecraft", "Modrinth", "Modpacks", "File Conversion", "Fabric", "Forge", "Quilt"],
  },
  howItWorks: {
    eyebrow: "How It Works",
    title: "Three simple steps",
    description:
      "Converting a Modrinth package (.mrpack) to a standard ZIP file involves several steps that our tool handles automatically.",
    steps: [
      {
        title: "Upload",
        desc: "Upload your .mrpack file to our tool. The file is processed entirely in your browser and never sent to any server.",
      },
      {
        title: "Process",
        desc: "Our tool extracts the modrinth.index.json file and analyzes the mod structure, preparing it for conversion to standard ZIP format.",
      },
      {
        title: "Convert & Download",
        desc: "The tool packages all files according to your settings and creates a standard ZIP file ready for download.",
      },
    ],
  },
  techDetails: {
    eyebrow: "Technical Details",
    title: "mrpack vs standard ZIP",
    description:
      "Modrinth packages (.mrpack) are special ZIP files containing a JSON index file that describes the mod structure and includes metadata about each file.",
    mrpackStructure: ".mrpack Structure",
    mrpackFormat: "Modrinth modpack format",
    mrpackList: [
      "Contains modrinth.index.json",
      "Includes metadata about mods",
      "Uses Modrinth's format",
      "Files organized by project IDs",
    ],
    zipStructure: "Standard ZIP Structure",
    zipFormat: "Universal archive format",
    zipList: [
      "Contains mod files directly",
      "Simple folder structure",
      "Compatible with most launchers",
      "Files organized by name/function",
    ],
    keyDifference: "Key difference",
    keyDiffDesc:
      "A .mrpack file only references mods via download URLs in its index — it doesn't contain the actual JAR files (except for overrides). Our converter can optionally download them all and bundle them into a self-contained ZIP.",
  },
  guide: {
    eyebrow: "Usage Guide",
    title: "MRPACK usage guide",
    description:
      "Learn how to open, extract, and troubleshoot MRPACK files — with or without our converter.",
    tabs: {
      manual: "Open Manually",
      jar: "Extract JAR Files",
      troubleshoot: "Troubleshooting",
    },
    manual: {
      title: "How to open MRPACK files manually",
      desc: "While MRPACK files are designed to be installed directly through compatible launchers, you can also manually open and extract them.",
      standardTools: "Using standard compression tools",
      steps: [
        "Rename the .mrpack file to .zip (change the extension)",
        "Open with any ZIP extraction tool (WinRAR, 7-Zip, etc.)",
        "Extract the contents to a folder",
        "Look for the modrinth.index.json file and overrides folder",
      ],
      commandLine: "Command line approach",
      note: "Note: Simply opening the MRPACK file won't download the actual mod files. To obtain the mod files, you'll need to either use a compatible launcher or manually download each mod from the URLs listed in the modrinth.index.json file.",
    },
    jar: {
      title: "Converting MRPACK to JAR files",
      desc: "MRPACK files don't directly contain the JAR files for your mods, but our converter can help you extract all the JAR files.",
      automatic: "Automatic JAR extraction",
      steps: [
        "Upload your MRPACK file to our converter",
        "Ensure \"Download mod files\" is selected",
        "Convert to ZIP format",
        "Download and extract the ZIP",
        "All mod JAR files will be in the mods folder",
      ],
      why: "Why extract JAR files?",
      reasons: [
        "Manually inspect individual mods",
        "Create a custom modpack using select mods",
        "Use with launchers that don't support MRPACK",
        "Backup your favorite mods locally",
        "Modify specific mods before installation",
      ],
    },
    troubleshoot: {
      title: "Common MRPACK issues and solutions",
      desc: "Troubleshooting guide for the most frequent problems.",
      items: [
        {
          problem: "Cannot open .mrpack file",
          solutions: [
            "Ensure you're using a compatible launcher (Prism, MultiMC, ATLauncher)",
            "Try renaming to .zip and extracting manually",
            "Check if the file downloaded completely without errors",
          ],
        },
        {
          problem: "Missing mods after installation",
          solutions: [
            "Ensure your launcher has internet access to download mods",
            "Some mods may be region-restricted or temporarily unavailable",
            "Use our converter with \"Download mod files\" enabled",
          ],
        },
        {
          problem: "Corrupted MRPACK file",
          solutions: [
            "Re-download the file from the original source",
            "Try using a different browser or download manager",
            "Convert from MRPACK to ZIP can sometimes repair minor corruption",
          ],
        },
        {
          problem: "Unable to convert MRPACK",
          solutions: [
            "Check your internet connection — mod downloads may be failing",
            "Try using a different browser (Chrome or Firefox recommended)",
            "For large modpacks, ensure your device has sufficient memory",
            "Try disabling browser extensions that might interfere",
          ],
        },
      ],
      advanced: "Advanced troubleshooting:",
      advancedDesc:
        "If you continue experiencing issues, you can examine the modrinth.index.json file for invalid entries or corrupted URLs. Often, manually downloading problematic mods and placing them in the correct folders can resolve installation problems.",
    },
  },
  faq: {
    eyebrow: "FAQ",
    title: "Frequently asked questions",
    description: "Everything you need to know about converting MRPACK files to ZIP.",
    items: [
      {
        question: "What is a .mrpack file?",
        answer:
          "A .mrpack file is Modrinth's modpack format for Minecraft. It contains a special index file that lists all the mods in the pack along with their metadata and download information.",
      },
      {
        question: "Why would I need to convert to ZIP?",
        answer:
          "Some Minecraft launchers or mod managers might not directly support the .mrpack format. Converting to a standard ZIP allows you to use these mods with any launcher that supports regular ZIP files.",
      },
      {
        question: "Is my data safe?",
        answer:
          "Yes, all processing happens entirely in your browser. Your files are never uploaded to any server, ensuring complete privacy and security.",
      },
      {
        question: "What happens to the mod metadata?",
        answer:
          'By default, we include the original modrinth.index.json file in the output ZIP. You can choose to exclude it if you don\'t need the metadata in your converted file by toggling the "Include index file" option.',
      },
      {
        question: "Can I use this tool offline?",
        answer:
          'This web tool requires an internet connection to load initially. If you enable the "Download mod files" option, it will also need internet access to download the referenced mod files. However, basic file processing happens locally. For a fully offline solution, consider command-line tools like packwiz or specialized mod managers.',
      },
      {
        question: 'What does the "Download mod files" option do?',
        answer:
          "When enabled, this option will download all mod files referenced in the modrinth.index.json and include them in the output ZIP. This creates a complete, ready-to-use mod pack that works with launchers that don't support the .mrpack format. Without this option, the output ZIP will only contain files that were already in the .mrpack file (typically just configuration files and resource packs).",
      },
    ],
  },
  launchers: {
    eyebrow: "Compatibility",
    title: "Launcher compatibility guide",
    description:
      "Not all launchers handle .mrpack files the same way. Here's the full compatibility breakdown.",
    launcher: "Launcher",
    support: "MRPACK Support",
    needZip: "Need ZIP?",
    notes: "Notes",
    fullSupport: "Full Support",
    partial: "Partial",
    notSupported: "Not Supported",
    notRequired: "Not Required",
    sometimes: "Sometimes",
    required: "Required",
    recommended: "Recommended",
    scrollHint: "Scroll the table horizontally to see all columns",
    proTip: "Pro tip:",
    proTipDesc:
      'When in doubt, converting to ZIP format provides the most universal compatibility across all launchers. Use our converter above with "Download mod files" enabled for a complete, ready-to-use pack.',
    items: [
      { name: "Prism Launcher", notes: "Direct import available" },
      { name: "MultiMC", notes: 'Version 5.0+ supports via "Import from zip" feature' },
      { name: "Official Launcher", notes: "No native support for modpacks" },
      { name: "CurseForge", notes: "Primarily designed for .cf format, some mrpack files may need conversion" },
      { name: "ATLauncher", notes: "Direct import available" },
      { name: "GDLauncher", notes: "Use import function" },
      { name: "Technic Launcher", notes: "Only supports ZIP format" },
      { name: "HMCL", notes: 'Use "Install Modpack" feature' },
      { name: "PCL2", notes: "ZIP format more stable" },
    ],
  },
  format: {
    eyebrow: "Format",
    title: "About the MRPACK format",
    description:
      "The Modrinth modpack format (.mrpack) is a specialized ZIP file format designed for distributing Minecraft modpacks in an efficient and standardized way.",
    structureExample: "Structure example",
    advantages: "MRPACK advantages",
    advantageList: [
      "Smaller file sizes (references instead of embedding mods)",
      "Automatic dependency resolution",
      "Better version control and updates",
      "Support for both client and server setups",
      "Native compatibility with modern launchers",
    ],
    history: "Format history",
    historyItems: [
      { title: "Initial release", desc: "Initial format specification released by Modrinth" },
      { title: "Version 1 standardized", desc: "Standardized with improved hash verification" },
      { title: "Enhanced support", desc: "Enhanced launcher support and client/server differentiation" },
    ],
    comparison: "Modpack format comparison",
    feature: "Feature",
    comparisonRows: [
      { feature: "File Size", mrpack: "Small (references only)", curseforge: "Medium (manifest)", zip: "Large (contains all mods)" },
      { feature: "Integrity Verification", mrpack: "SHA1 & SHA512 hashes", curseforge: "Project IDs only", zip: "None built-in" },
      { feature: "Launcher Support", mrpack: "Most modern launchers", curseforge: "CurseForge & some others", zip: "Universal support" },
      { feature: "Client/Server Distinction", mrpack: "Built-in support", curseforge: "Limited support", zip: "Manual separation" },
      { feature: "Open Standard", mrpack: "Yes (fully documented)", curseforge: "Partially", zip: "No standard" },
    ],
  },
  footer: {
    description:
      "Free, private, browser-based converter for Modrinth modpack files. Built for the Minecraft community.",
    copyright: "All processing happens in your browser.",
    disclaimer: "Not affiliated with Modrinth. Built with love for Minecrafters.",
  },
  footerLinks: {
    tool: {
      title: "Tool",
      converter: "Converter",
      howItWorks: "How It Works",
      technical: "Technical Details",
    },
    resources: {
      title: "Resources",
      usageGuide: "Usage Guide",
      faq: "FAQ",
      launcherCompat: "Launcher Compatibility",
    },
    legal: {
      title: "Legal",
      privacy: "Privacy Policy",
      contact: "Contact Us",
    },
    external: {
      title: "External",
      minecraft: "Minecraft",
      modrinth: "Modrinth",
      curseforge: "CurseForge",
    },
  },
  a11y: {
    selectLanguage: "Select language",
    toggleMenu: "Toggle menu",
  },
  privacy: {
    title: "Privacy Policy",
    lastUpdated: "Last updated: {{date}}",
    intro:
      "MRPack to ZIP is committed to protecting your privacy. This Privacy Policy explains how we handle information when you use our tool.",
    localProcessingTitle: "100% Browser-side Processing",
    localProcessingText:
      "All file conversions happen entirely within your web browser. Your .mrpack files, their contents, and any downloaded mod files are never uploaded to our servers. We do not have access to the files you convert.",
    dataCollectionTitle: "Data We Do Not Collect",
    dataCollectionText:
      "We do not collect, store, or process any personal information. We do not use cookies for tracking purposes, and we do not maintain user accounts.",
    thirdPartyTitle: "Third-party Services",
    thirdPartyText:
      "When you use the Project ID or From URL features, your browser directly communicates with Modrinth's API and CDN servers. Please refer to Modrinth's Privacy Policy for information on how they handle requests.",
    analyticsTitle: "Analytics",
    analyticsText:
      "We may use privacy-focused analytics tools that collect anonymized usage data (such as page views and country-level location) without identifying individual users.",
    changesTitle: "Changes to This Policy",
    changesText:
      "We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated effective date.",
    contactTitle: "Contact Us",
    contactText:
      "If you have any questions about this Privacy Policy, please visit our Contact page.",
  },
  contact: {
    title: "Contact Us",
    subtitle:
      "Have questions, feedback, or suggestions? We'd love to hear from you.",
    emailTitle: "Email",
    emailText: "For general inquiries, please reach out to us at",
    githubTitle: "GitHub",
    githubText: "Found a bug or want to contribute? Visit our open-source repository.",
    modrinthTitle: "Modrinth",
    modrinthText: "Discover amazing modpacks on Modrinth, the platform this tool is built for.",
    form: {
      name: "Your Name",
      email: "Your Email",
      message: "Message",
      send: "Send Message",
      success: "Thank you! Your message has been sent.",
    },
  },
};
