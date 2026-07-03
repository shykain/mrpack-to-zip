export default {
  nav: {
    converter: "转换器",
    about: "关于",
    howItWorks: "工作原理",
    guide: "使用指南",
    faq: "常见问题",
    launchers: "启动器",
    privacy: "隐私政策",
    contact: "联系我们",
    convertNow: "立即转换",
  },
  theme: {
    light: "浅色",
    dark: "深色",
  },
  hero: {
    badge: "100% 浏览器端处理 · 不上传文件",
    title: "MRPack 转 ZIP 转换器",
    subtitle:
      "将 Modrinth 模组包文件转换为标准 ZIP 格式，可选择下载模组文件。快速、私密、免费。",
    privacyNote: "文件不会离开您的浏览器",
    freeNote: "无需注册",
  },
  converter: {
    optionsTitle: "转换选项",
    tip: '提示：启用"下载模组文件"可从 Modrinth CDN 获取所有 JAR 文件，得到一个完整、即开即用的整合包。',
    processing: "处理中 — 大型模组包可能需要一些时间。",
    convertBtn: "转换为 ZIP",
  },
  packInfo: {
    title: "已识别整合包",
    subtitle: "点击转换开始处理",
    replace: "替换",
    replaceFile: "替换文件",
    name: "名称",
    version: "版本",
    minecraft: "Minecraft",
    loader: "加载器",
    mods: "模组",
    modFilesDetected: "检测到 {{count}} 个模组文件",
  },
  urlInput: {
    steps: [
      "粘贴 Modrinth 项目页面 URL（例如 modrinth.com/project/...）",
      "或从 Versions 标签页粘贴直接的 .mrpack 下载链接",
      "粘贴后自动开始下载",
      "等待整合包转换完成",
    ],
    placeholder: "https://modrinth.com/project/... 或 https://cdn.modrinth.com/...",
    downloading: "下载中...",
    downloadBtn: "从 URL 下载",
    supported: "支持 Modrinth 项目页面 URL 和直接的 .mrpack 下载链接。",
  },
  projectInput: {
    steps: [
      "进入一个 Modrinth 模组包项目",
      "复制项目 ID、slug 或完整 URL",
      "粘贴到下方并自动开始获取",
      "等待整合包转换完成",
    ],
    placeholder: "例如 fabulously-optimized 或 1KVo5zza 或完整 URL",
    fetching: "获取中...",
    fetchBtn: "从 Modrinth 获取",
    browseModpacks: "在 Modrinth 上浏览模组包",
  },
  dropZone: {
    steps: [
      "获取一个 .mrpack 文件（例如来自 Modrinth）",
      "在下方上传（在您的浏览器中处理）",
      "选择您的转换选项",
      "点击转换并下载 ZIP",
    ],
    mrpackFile: ".mrpack 文件",
    removeFile: "移除文件",
    dropHere: "将您的 .mrpack 文件拖放到此处",
    dragDrop: "将您的 .mrpack 文件拖放到此处",
    or: "或",
    browseFiles: "浏览文件",
    privacyNote: "文件完全在您的浏览器中处理 — 不会上传到任何服务器。",
  },
  fileStructure: {
    uploadToView: "上传 .mrpack 文件以查看其结构",
    fileStructure: "文件结构",
    packInfo: "整合包信息",
    files: "{{count}} 个文件",
    selectedFile: "已选文件",
    mrpackFile: ".mrpack 文件",
    parsing: "正在解析结构...",
    name: "名称",
    version: "版本",
    minecraft: "Minecraft",
    modLoader: "模组加载器",
    mods: "{{count}} 个模组",
    noFiles: "未找到文件",
    onlyUpload: "仅在上传本地文件时可查看文件结构",
  },
  progress: {
    parsing: "正在解析模组包...",
    downloading: "正在下载模组文件...",
    packaging: "正在打包 ZIP 归档...",
    done: "转换完成！",
    error: "转换失败",
    errorFallback: "错误",
    mods: "{{processed}}/{{total}} 个模组",
    skipped: "{{count}} 个已跳过",
    modsReady: "{{count}} 个模组就绪",
  },
  inputMode: {
    project: { label: "项目 ID", desc: "来自 Modrinth" },
    url: { label: "从 URL", desc: "粘贴下载链接" },
    file: { label: "上传文件", desc: "本地 .mrpack" },
  },
  result: {
    ready: "您的 ZIP 文件已就绪！",
    mods: "{{count}} 个模组 · ",
    skipped: "{{count}} 个已跳过 · ",
    download: "下载 ZIP",
    convertAnother: "再转一个",
  },
  options: {
    downloadMods: {
      label: "下载模组文件",
      desc: "从 Modrinth CDN 获取模组包索引中引用的所有 JAR 文件",
    },
    keepStructure: {
      label: "保留文件夹结构",
      desc: "保留原始模组包目录布局",
    },
    normalize: {
      label: "规范化文件名",
      desc: "将文件名重命名为 ASCII 安全字符以保持兼容性",
    },
    includeIndex: {
      label: "包含索引文件",
      desc: "在输出的 ZIP 中保留 modrinth.index.json",
    },
  },
  stats: {
    clientSide: "客户端",
    privacy: "隐私",
    cost: "费用",
  },
  about: {
    eyebrow: "关于",
    title: "关于 MRPack to ZIP 转换器",
    description:
      "这款免费的在线工具可将 Modrinth 模组包文件（.mrpack）转换为标准 ZIP 格式，用于 Minecraft 模组。无需安装 — 一切都在您的浏览器中完成。",
    features: [
      {
        title: "100% 客户端",
        desc: "文件完全在您的浏览器中处理，绝不上传到任何服务器，确保完全的隐私。",
      },
      {
        title: "通用 ZIP 输出",
        desc: "将 .mrpack 文件转换为标准 ZIP 格式，兼容大多数模组加载器和启动器。",
      },
      {
        title: "结构控制",
        desc: "保持原始文件夹结构或根据需要将其扁平化。",
      },
      {
        title: "文件名规范化",
        desc: "可选择将文件名规范化为 ASCII 安全字符，以获得更好的跨平台兼容性。",
      },
      {
        title: "快速且可靠",
        desc: "高效客户端处理并带有进度跟踪。无需排队，无需等待。",
      },
      {
        title: "模组下载器",
        desc: "可选地将所有引用的 JAR 文件从 Modrinth CDN 获取到输出 ZIP 中。",
      },
    ],
    builtFor: "为 Minecraft 玩家而生",
    builtForDesc:
      "为需要在各种启动器和模组加载器之间转换文件格式以保持兼容性的 Minecraft 模组用户设计。",
    worksWith: "兼容 Fabric、Forge、Quilt 等",
    tagsTitle: "标签",
    tags: ["Minecraft", "Modrinth", "模组包", "文件转换", "Fabric", "Forge", "Quilt"],
  },
  howItWorks: {
    eyebrow: "工作原理",
    title: "三个简单步骤",
    description:
      "将 Modrinth 整合包（.mrpack）转换为标准 ZIP 文件涉及多个步骤，我们的工具会自动处理这些步骤。",
    steps: [
      {
        title: "上传",
        desc: "将您的 .mrpack 文件上传到我们的工具。文件完全在您的浏览器中处理，绝不会发送到任何服务器。",
      },
      {
        title: "处理",
        desc: "我们的工具会解压 modrinth.index.json 文件并分析模组结构，为转换为标准 ZIP 格式做准备。",
      },
      {
        title: "转换并下载",
        desc: "工具会根据您的设置打包所有文件，并创建一个可下载的标准 ZIP 文件。",
      },
    ],
  },
  techDetails: {
    eyebrow: "技术细节",
    title: "mrpack 与标准 ZIP",
    description:
      "Modrinth 整合包（.mrpack）是特殊的 ZIP 文件，其中包含一个 JSON 索引文件，描述模组结构并包含每个文件的元数据。",
    mrpackStructure: ".mrpack 结构",
    mrpackFormat: "Modrinth 模组包格式",
    mrpackList: [
      "包含 modrinth.index.json",
      "包含模组的元数据",
      "使用 Modrinth 的格式",
      "按项目 ID 组织文件",
    ],
    zipStructure: "标准 ZIP 结构",
    zipFormat: "通用归档格式",
    zipList: [
      "直接包含模组文件",
      "简单的文件夹结构",
      "兼容大多数启动器",
      "按名称/功能组织文件",
    ],
    keyDifference: "关键区别",
    keyDiffDesc:
      ".mrpack 文件仅通过其索引中的下载 URL 引用模组 — 它不包含实际的 JAR 文件（overrides 除外）。我们的转换器可以选择下载所有这些文件并将它们打包成一个自包含的 ZIP。",
  },
  guide: {
    eyebrow: "使用指南",
    title: "MRPACK 使用指南",
    description:
      "了解如何打开、解压和排查 MRPACK 文件问题 — 无论是否使用我们的转换器。",
    tabs: {
      manual: "手动打开",
      jar: "提取 JAR 文件",
      troubleshoot: "故障排除",
    },
    manual: {
      title: "如何手动打开 MRPACK 文件",
      desc: "虽然 MRPACK 文件设计为通过兼容的启动器直接安装，但您也可以手动打开并解压它们。",
      standardTools: "使用标准压缩工具",
      steps: [
        "将 .mrpack 文件重命名为 .zip（更改扩展名）",
        "使用任何 ZIP 解压工具打开（WinRAR、7-Zip 等）",
        "将内容解压到文件夹",
        "查找 modrinth.index.json 文件和 overrides 文件夹",
      ],
      commandLine: "命令行方式",
      note: "注意：仅打开 MRPACK 文件不会下载实际的模组文件。要获取模组文件，您需要使用兼容的启动器或手动从 modrinth.index.json 文件中列出的 URL 下载每个模组。",
    },
    jar: {
      title: "将 MRPACK 转换为 JAR 文件",
      desc: "MRPACK 文件不直接包含模组的 JAR 文件，但我们的转换器可以帮助您提取所有 JAR 文件。",
      automatic: "自动提取 JAR",
      steps: [
        "将您的 MRPACK 文件上传到我们的转换器",
        '确保选中"下载模组文件"',
        "转换为 ZIP 格式",
        "下载并解压 ZIP",
        "所有模组 JAR 文件将位于 mods 文件夹中",
      ],
      why: "为什么要提取 JAR 文件？",
      reasons: [
        "手动检查各个模组",
        "使用精选模组创建自定义模组包",
        "与不支持 MRPACK 的启动器一起使用",
        "在本地备份您喜爱的模组",
        "在安装前修改特定模组",
      ],
    },
    troubleshoot: {
      title: "常见 MRPACK 问题及解决方案",
      desc: "最常见问题的故障排除指南。",
      items: [
        {
          problem: "无法打开 .mrpack 文件",
          solutions: [
            "确保您使用的是兼容的启动器（Prism、MultiMC、ATLauncher）",
            "尝试重命名为 .zip 并手动解压",
            "检查文件是否已完整下载且无错误",
          ],
        },
        {
          problem: "安装后缺少模组",
          solutions: [
            "确保您的启动器可以访问互联网以下载模组",
            "某些模组可能受到地区限制或暂时不可用",
            '使用我们的转换器并启用"下载模组文件"',
          ],
        },
        {
          problem: "MRPACK 文件已损坏",
          solutions: [
            "从原始来源重新下载文件",
            "尝试使用其他浏览器或下载管理器",
            "从 MRPACK 转换为 ZIP 有时可以修复轻微的损坏",
          ],
        },
        {
          problem: "无法转换 MRPACK",
          solutions: [
            "检查您的网络连接 — 模组下载可能失败",
            "尝试使用其他浏览器（推荐 Chrome 或 Firefox）",
            "对于大型模组包，请确保您的设备有足够的内存",
            "尝试禁用可能产生干扰的浏览器扩展",
          ],
        },
      ],
      advanced: "高级故障排除：",
      advancedDesc:
        "如果您仍然遇到问题，可以检查 modrinth.index.json 文件中是否存在无效条目或损坏的 URL。通常，手动下载有问题的模组并将它们放在正确的文件夹中可以解决安装问题。",
    },
  },
  faq: {
    eyebrow: "常见问题",
    title: "常见问题解答",
    description: "关于将 MRPACK 文件转换为 ZIP 所需了解的一切。",
    items: [
      {
        question: "什么是 .mrpack 文件？",
        answer:
          ".mrpack 文件是 Modrinth 为 Minecraft 提供的模组包格式。它包含一个特殊的索引文件，列出整合包中的所有模组及其元数据和下载信息。",
      },
      {
        question: "为什么我需要转换为 ZIP？",
        answer:
          "某些 Minecraft 启动器或模组管理器可能不直接支持 .mrpack 格式。转换为标准 ZIP 可以让您在任何支持常规 ZIP 文件的启动器中使用这些模组。",
      },
      {
        question: "我的数据安全吗？",
        answer:
          "是的，所有处理完全在您的浏览器中进行。您的文件绝不上传到任何服务器，确保完全的隐私和安全。",
      },
      {
        question: "模组元数据会怎样处理？",
        answer:
          '默认情况下，我们会在输出的 ZIP 中包含原始的 modrinth.index.json 文件。如果您在转换后的文件中不需要元数据，可以通过切换"包含索引文件"选项来排除它。',
      },
      {
        question: "可以离线使用这个工具吗？",
        answer:
          '此网络工具需要互联网连接才能初始加载。如果您启用"下载模组文件"选项，它还需要互联网访问来下载所引用的模组文件。但是，基本的文件处理在本地进行。如需完全离线的解决方案，请考虑使用命令行工具（如 packwiz）或专门的模组管理器。',
      },
      {
        question: '"下载模组文件"选项有什么作用？',
        answer:
          "启用后，此选项将下载 modrinth.index.json 中引用的所有模组文件，并将它们包含在输出 ZIP 中。这将创建一个完整、即开即用的模组包，适用于不支持 .mrpack 格式的启动器。如果不启用此选项，输出 ZIP 将仅包含 .mrpack 文件中已有的文件（通常只是配置文件和资源包）。",
      },
    ],
  },
  launchers: {
    eyebrow: "兼容性",
    title: "启动器兼容性指南",
    description:
      "并非所有启动器都以相同的方式处理 .mrpack 文件。以下是完整的兼容性说明。",
    launcher: "启动器",
    support: "MRPACK 支持",
    needZip: "需要 ZIP？",
    notes: "备注",
    fullSupport: "完全支持",
    partial: "部分支持",
    notSupported: "不支持",
    notRequired: "不需要",
    sometimes: "有时",
    required: "需要",
    recommended: "推荐",
    scrollHint: "水平滚动表格以查看所有列",
    proTip: "专家提示：",
    proTipDesc:
      '如有疑问，转换为 ZIP 格式可在所有启动器中提供最通用的兼容性。使用上方的转换器并启用"下载模组文件"，即可获得一个完整、即开即用的整合包。',
    items: [
      { name: "Prism Launcher", notes: "可直接导入" },
      { name: "MultiMC", notes: '5.0+ 版本通过"从 zip 导入"功能支持' },
      { name: "Official Launcher", notes: "不原生支持模组包" },
      { name: "CurseForge", notes: "主要为 .cf 格式设计，某些 mrpack 文件可能需要转换" },
      { name: "ATLauncher", notes: "可直接导入" },
      { name: "GDLauncher", notes: "使用导入功能" },
      { name: "Technic Launcher", notes: "仅支持 ZIP 格式" },
      { name: "HMCL", notes: '使用"安装整合包"功能' },
      { name: "PCL2", notes: "ZIP 格式更稳定" },
    ],
  },
  format: {
    eyebrow: "格式",
    title: "关于 MRPACK 格式",
    description:
      "Modrinth 模组包格式（.mrpack）是一种专门的 ZIP 文件格式，旨在以高效且标准化的方式分发 Minecraft 模组包。",
    structureExample: "结构示例",
    advantages: "MRPACK 优势",
    advantageList: [
      "文件体积更小（引用而非嵌入模组）",
      "自动依赖项解析",
      "更好的版本控制和更新",
      "同时支持客户端和服务器设置",
      "与现代启动器原生兼容",
    ],
    history: "格式历史",
    historyItems: [
      { title: "初始发布", desc: "Modrinth 发布初始格式规范" },
      { title: "版本 1 标准化", desc: "标准化并改进了哈希校验" },
      { title: "增强支持", desc: "增强启动器支持以及客户端/服务器区分" },
    ],
    comparison: "模组包格式对比",
    feature: "功能",
    comparisonRows: [
      { feature: "文件大小", mrpack: "小（仅引用）", curseforge: "中等（清单）", zip: "大（包含所有模组）" },
      { feature: "完整性校验", mrpack: "SHA1 和 SHA512 哈希", curseforge: "仅项目 ID", zip: "无内置校验" },
      { feature: "启动器支持", mrpack: "大多数现代启动器", curseforge: "CurseForge 及其他部分", zip: "通用支持" },
      { feature: "客户端/服务器区分", mrpack: "内置支持", curseforge: "有限支持", zip: "手动分离" },
      { feature: "开放标准", mrpack: "是（完整文档）", curseforge: "部分", zip: "无标准" },
    ],
  },
  footer: {
    description:
      "免费、私密、基于浏览器的 Modrinth 模组包文件转换器。为 Minecraft 社区打造。",
    copyright: "所有处理都在您的浏览器中进行。",
    disclaimer: "与 Modrinth 无关联。为 Minecraft 玩家用心打造。",
  },
  footerLinks: {
    tool: {
      title: "工具",
      converter: "转换器",
      howItWorks: "工作原理",
      technical: "技术细节",
    },
    resources: {
      title: "资源",
      usageGuide: "使用指南",
      faq: "常见问题",
      launcherCompat: "启动器兼容性",
    },
    legal: {
      title: "法律",
      privacy: "隐私政策",
      contact: "联系我们",
    },
    external: {
      title: "外部",
      minecraft: "Minecraft",
      modrinth: "Modrinth",
      curseforge: "CurseForge",
    },
  },
  a11y: {
    selectLanguage: "选择语言",
    toggleMenu: "切换菜单",
  },
  privacy: {
    title: "隐私政策",
    lastUpdated: "最后更新：{{date}}",
    intro:
      "MRPack to ZIP 致力于保护您的隐私。本隐私政策说明了我们如何处理您使用本工具时的信息。",
    localProcessingTitle: "100% 浏览器端处理",
    localProcessingText:
      "所有文件转换完全在您的网络浏览器内进行。您的 .mrpack 文件、其内容以及任何下载的模组文件都不会上传到我们的服务器。我们无法访问您转换的文件。",
    dataCollectionTitle: "我们不收集的数据",
    dataCollectionText:
      "我们不收集、存储或处理任何个人信息。我们不使用 Cookie 进行追踪，也不维护用户账户。",
    thirdPartyTitle: "第三方服务",
    thirdPartyText:
      "当您使用 Project ID 或 From URL 功能时，您的浏览器会直接与 Modrinth 的 API 和 CDN 服务器通信。请参阅 Modrinth 的隐私政策了解他们如何处理请求。",
    analyticsTitle: "数据分析",
    analyticsText:
      "我们可能使用注重隐私的分析工具收集匿名使用数据（例如页面浏览量和国家级位置），而不会识别单个用户。",
    changesTitle: "政策变更",
    changesText:
      "我们可能会不时更新本隐私政策。任何更改都会发布在本页面，并更新生效日期。",
    contactTitle: "联系我们",
    contactText:
      "如果您对本隐私政策有任何疑问，请访问我们的联系页面。",
  },
  contact: {
    title: "联系我们",
    subtitle:
      "有问题、反馈或建议？我们期待听到您的声音。",
    emailTitle: "电子邮件",
    emailText: "如有一般咨询，请通过以下方式联系我们",
    githubTitle: "GitHub",
    githubText: "发现 bug 或想参与贡献？请访问我们的开源仓库。",
    modrinthTitle: "Modrinth",
    modrinthText: "在 Modrinth 上发现精彩的模组包，本工具正是为其而生。",
    form: {
      name: "您的姓名",
      email: "您的邮箱",
      message: "留言内容",
      send: "发送消息",
      success: "感谢您的留言！消息已发送。",
    },
  },
};
