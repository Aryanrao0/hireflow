import { lazy, Suspense } from "react";
import { Loader2Icon, PlayIcon } from "lucide-react";
import { LANGUAGE_CONFIG } from "../data/problems";

const Editor = lazy(() => import("@monaco-editor/react"));

function CodeEditorPanel({
  selectedLanguage,
  code,
  isRunning,
  onLanguageChange,
  onCodeChange,
  onRunCode,
}) {
  return (
    <div className="h-full bg-base-300 flex flex-col">
      <div className="flex items-center justify-between px-4 py-3 bg-base-100 border-t border-base-300">
        <div className="flex items-center gap-2 sm:gap-3">
          <img
            src={LANGUAGE_CONFIG[selectedLanguage].icon}
            alt={LANGUAGE_CONFIG[selectedLanguage].name}
            className="size-5 sm:size-6"
            loading="lazy"
          />
          <select className="select select-sm" value={selectedLanguage} onChange={onLanguageChange}>
            {Object.entries(LANGUAGE_CONFIG).map(([key, lang]) => (
              <option key={key} value={key}>
                {lang.name}
              </option>
            ))}
          </select>
        </div>

        <button className="group btn btn-primary btn-xs sm:btn-sm gap-1 sm:gap-2 hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary/50 relative overflow-hidden" disabled={isRunning} onClick={onRunCode}>
          {!isRunning && (
            <div className="absolute inset-0 bg-gradient-to-r from-accent to-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          )}
          {isRunning ? (
            <>
              <Loader2Icon className="size-4 animate-spin relative z-10" />
              <span className="relative z-10">Running...</span>
            </>
          ) : (
            <>
              <PlayIcon className="size-4 group-hover:scale-110 relative z-10 transition-transform duration-300" />
              <span className="relative z-10">Run Code</span>
            </>
          )}
        </button>
      </div>

      <div className="flex-1">
        <Suspense fallback={
          <div className="flex items-center justify-center h-full bg-base-300">
            <Loader2Icon className="size-8 animate-spin text-primary" />
          </div>
        }>
          <Editor
            height={"100%"}
            language={LANGUAGE_CONFIG[selectedLanguage].monacoLang}
            value={code}
            onChange={onCodeChange}
            theme="vs-dark"
            options={{
              fontSize: 16,
              lineNumbers: "on",
              scrollBeyondLastLine: false,
              automaticLayout: true,
              minimap: { enabled: false },
              scrollbar: {
                vertical: 'auto',
                horizontal: 'auto',
              },
            }}
          />
        </Suspense>
      </div>
    </div>
  );
}
export default CodeEditorPanel;
