import { useState } from "react";
import { Folder, FolderOpen, FileCode, File, Package, ChevronDown, ChevronRight, Loader2, FileBox } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useConvertStore } from "@/lib/store";
import { formatBytes } from "@/lib/converter";

interface TreeNodeData {
  name: string;
  path: string;
  type: "file" | "folder";
  children?: TreeNodeData[];
  isMod?: boolean;
  size?: number;
}

function TreeNode({
  node,
  depth = 0,
}: {
  node: TreeNodeData;
  depth?: number;
}) {
  const [expanded, setExpanded] = useState(false);

  if (node.type === "folder") {
    const hasChildren = node.children && node.children.length > 0;
    return (
      <div>
        <div
          className="flex items-center gap-1 py-1 px-1 rounded cursor-pointer hover:bg-cream-900/20 transition-colors"
          onClick={() => hasChildren && setExpanded(!expanded)}
          style={{ paddingLeft: `${depth * 16 + 8}px` }}
        >
          {hasChildren ? (
            expanded ? (
              <ChevronDown className="w-3.5 h-3.5 text-cream-200/50" />
            ) : (
              <ChevronRight className="w-3.5 h-3.5 text-cream-200/50" />
            )
          ) : (
            <span className="w-3.5" />
          )}
          {expanded ? (
            <FolderOpen className="w-4 h-4 text-ember-400" />
          ) : (
            <Folder className="w-4 h-4 text-ember-400" />
          )}
          <span className="text-sm text-cream-200/80">{node.name}</span>
          {node.children && (
            <span className="text-xs text-cream-200/40 ml-auto">
              {node.children.length}
            </span>
          )}
        </div>
        {hasChildren && expanded && (
          <div>
            {node.children.map((child) => (
              <TreeNode key={child.path} node={child} depth={depth + 1} />
            ))}
          </div>
        )}
      </div>
    );
  }

  const isJson = node.name.endsWith(".json");
  const isJar = node.name.endsWith(".jar");

  return (
    <div
      className="flex items-center gap-1 py-1 px-1 rounded hover:bg-cream-900/20 transition-colors"
      style={{ paddingLeft: `${depth * 16 + 8}px` }}
    >
      <span className="w-3.5" />
      {isJar ? (
        <Package className="w-4 h-4 text-grass-400" />
      ) : isJson ? (
        <FileCode className="w-4 h-4 text-amber-400" />
      ) : (
        <File className="w-4 h-4 text-cream-200/40" />
      )}
      <span
        className={`text-sm ${
          node.isMod
            ? "text-grass-300 font-medium"
            : "text-cream-200/70"
        }`}
      >
        {node.name}
      </span>
      {node.size && (
        <span className="text-xs text-cream-200/40 ml-auto">
          {formatBytes(node.size)}
        </span>
      )}
    </div>
  );
}

export function FileStructure() {
  const { t } = useTranslation();
  const fileTree = useConvertStore((s) => s.fileTree);
  const packInfo = useConvertStore((s) => s.packInfo);
  const isParsingStructure = useConvertStore((s) => s.isParsingStructure);
  const totalFiles = useConvertStore((s) => s.totalFiles);
  const modCount = useConvertStore((s) => s.modCount);
  const inputMode = useConvertStore((s) => s.inputMode);
  const selectedFile = useConvertStore((s) => s.selectedFile);
  const showFileList = inputMode === "file";

  const hasFile = Boolean(selectedFile);

  if (!packInfo && !hasFile) {
    return (
      <div className="pixel-card p-6 h-full flex flex-col justify-center items-center">
        <div className="text-center">
          <div className="w-16 h-16 mx-auto mb-4 rounded-lg bg-cream-800/50 flex items-center justify-center">
            <Folder className="w-8 h-8 text-cream-200/30" />
          </div>
          <p className="text-sm text-cream-200/40">
            {t("fileStructure.uploadToView")}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="pixel-card p-6 h-full flex flex-col">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-sm font-semibold text-cream-200/80 uppercase tracking-wider">
          {showFileList ? t("fileStructure.fileStructure") : t("fileStructure.packInfo")}
        </h3>
        {showFileList && packInfo && (
          <span className="text-xs text-cream-200/50">{t("fileStructure.files", { count: totalFiles })}</span>
        )}
      </div>

      {selectedFile && !packInfo && (
        <div className="mb-4 p-3 rounded-lg bg-cream-800/30 border border-cream-700/30">
          <div className="flex items-center gap-3">
            <div className="shrink-0 w-10 h-10 rounded-lg bg-grass-700/60 border border-grass-500/40 flex items-center justify-center">
              <FileBox className="w-5 h-5 text-grass-300" />
            </div>
            <div className="flex-1 min-w-0">
              <span className="text-cream-200/50 text-xs">{t("fileStructure.selectedFile")}</span>
              <div className="text-cream-200 font-medium text-sm truncate">
                {selectedFile.name}
              </div>
              <div className="text-xs text-cream-200/60">
                {formatBytes(selectedFile.size)} · {t("fileStructure.mrpackFile")}
              </div>
            </div>
          </div>
          {isParsingStructure && (
            <div className="mt-3 flex items-center gap-2 text-xs text-cream-200/60">
              <Loader2 className="w-3.5 h-3.5 text-grass-400 animate-spin" />
              {t("fileStructure.parsing")}
            </div>
          )}
        </div>
      )}

      {packInfo && (
        <div className="mb-4 p-3 rounded-lg bg-cream-800/30 border border-cream-700/30">
          <div className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs">
            <div>
              <span className="text-cream-200/50">{t("fileStructure.name")}</span>
              <div className="text-cream-200 font-medium truncate">
                {packInfo.name}
              </div>
            </div>
            <div>
              <span className="text-cream-200/50">{t("fileStructure.version")}</span>
              <div className="text-cream-200 font-medium truncate">
                {packInfo.versionId}
              </div>
            </div>
            {packInfo.minecraftVersion && (
              <div>
                <span className="text-cream-200/50">{t("fileStructure.minecraft")}</span>
                <div className="text-grass-300 font-medium">
                  {packInfo.minecraftVersion}
                </div>
              </div>
            )}
            {packInfo.modLoader && (
              <div>
                <span className="text-cream-200/50">{t("fileStructure.modLoader")}</span>
                <div className="text-ember-300 font-medium">
                  {packInfo.modLoader}
                </div>
              </div>
            )}
          </div>
          {packInfo.summary && (
            <div className="mt-2 text-xs text-cream-200/50 line-clamp-2">
              {packInfo.summary}
            </div>
          )}
        </div>
      )}

      {showFileList && (
        <>
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3 text-xs">
              <span className="flex items-center gap-1">
                <Package className="w-3.5 h-3.5 text-grass-400" />
                <span className="text-cream-200/50">{t("fileStructure.mods", { count: modCount })}</span>
              </span>
            </div>
          </div>

          <div className="flex-1 overflow-y-auto pr-2 custom-scrollbar">
            {isParsingStructure ? (
              <div className="flex items-center justify-center h-32">
                <Loader2 className="w-5 h-5 text-grass-400 animate-spin" />
              </div>
            ) : fileTree.length === 0 ? (
              <p className="text-sm text-cream-200/40 text-center">
                {t("fileStructure.noFiles")}
              </p>
            ) : (
              fileTree.map((node) => <TreeNode key={node.path} node={node} />)
            )}
          </div>
        </>
      )}

      {!showFileList && (
        <div className="flex-1 flex items-center justify-center">
          <p className="text-sm text-cream-200/40 text-center">
            {t("fileStructure.onlyUpload")}
          </p>
        </div>
      )}
    </div>
  );
}
