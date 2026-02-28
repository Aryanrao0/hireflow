function OutputPanel({ output }) {
  return (
    <div className="h-full bg-base-100 flex flex-col">
      <div className="px-4 py-2 bg-base-200 border-b border-base-300 font-semibold text-sm">
        Output
      </div>
      <div className="flex-1 overflow-auto p-4 space-y-3">
        {output === null ? (
          <p className="text-base-content/50 text-sm">Click "Run Code" to see the output here...</p>
        ) : output.success ? (
          <>
            <div>
              <p className="text-xs text-base-content/50 mb-1 uppercase tracking-wide">Your Output</p>
              <pre className={`text-sm font-mono whitespace-pre-wrap ${output.testsPassed ? "text-success" : "text-warning"}`}>
                {output.output}
              </pre>
            </div>
            {output.testsPassed === false && output.expectedOutput && (
              <div>
                <p className="text-xs text-base-content/50 mb-1 uppercase tracking-wide">Expected Output</p>
                <pre className="text-sm font-mono text-success whitespace-pre-wrap">
                  {output.expectedOutput}
                </pre>
              </div>
            )}
          </>
        ) : (
          <div>
            {output.output && (
              <pre className="text-sm font-mono text-base-content whitespace-pre-wrap mb-2">
                {output.output}
              </pre>
            )}
            <pre className="text-sm font-mono text-error whitespace-pre-wrap">{output.error}</pre>
          </div>
        )}
      </div>
    </div>
  );
}
export default OutputPanel;
