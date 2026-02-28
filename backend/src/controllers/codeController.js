// Code execution using Node.js built-in modules — no external APIs needed
import vm from "vm";
import { exec } from "child_process";
import { writeFileSync, mkdirSync, rmSync } from "fs";
import { join } from "path";
import { promisify } from "util";
import os from "os";
import { randomUUID } from "crypto";

const execAsync = promisify(exec);

// Run JavaScript safely in a sandboxed vm context
function runJavaScript(code) {
  const logs = [];

  const safeConsole = {
    log: (...args) => {
      const line = args
        .map((a) => {
          if (Array.isArray(a)) return JSON.stringify(a);
          if (a !== null && typeof a === "object") return JSON.stringify(a);
          return String(a);
        })
        .join(" ");
      logs.push(line);
    },
    error: (...args) => logs.push(args.map(String).join(" ")),
    warn:  (...args) => logs.push(args.map(String).join(" ")),
  };

  const context = vm.createContext({
    console: safeConsole,
    Array, Object, Math, JSON, Number, String, Boolean, Symbol,
    parseInt, parseFloat, isNaN, isFinite,
    Map, Set, WeakMap, WeakSet, Promise, RegExp, Error, Date,
    setTimeout: () => {}, clearTimeout: () => {},
    setInterval: () => {}, clearInterval: () => {},
    Infinity, NaN, undefined,
  });

  vm.runInContext(code, context, { timeout: 10000 });
  return logs.join("\n") || "No output";
}

// Run a shell command asynchronously (non-blocking)
async function runWithProcess(command) {
  try {
    const { stdout, stderr } = await execAsync(command, {
      timeout: 15000,
      encoding: "utf8",
    });
    // Some programs write to stderr even on success, treat as error only if no stdout
    if (stderr && !stdout) {
      return { success: false, error: stderr };
    }
    return { success: true, output: stdout || "No output" };
  } catch (err) {
    // err.stdout contains output before crash, err.stderr has the error
    const errMsg = err.stderr || err.stdout || err.message || "Unknown error";
    return { success: false, error: errMsg };
  }
}

export const executeCode = async (req, res) => {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.status(400).json({ success: false, error: "Language and code are required" });
  }

  // ── JavaScript (vm — sandboxed, always works, no subprocess needed) ──────────
  if (language === "javascript") {
    try {
      const output = runJavaScript(code);
      return res.json({ success: true, output });
    } catch (err) {
      return res.json({ success: false, error: err.message });
    }
  }

  // ── Python / Java / C++ (async child_process on Render's Ubuntu env) ─────────
  const tmpDir = join(os.tmpdir(), randomUUID());
  try {
    mkdirSync(tmpDir, { recursive: true });

    if (language === "python") {
      const file = join(tmpDir, "main.py");
      writeFileSync(file, code, "utf8");
      const result = await runWithProcess(`python3 "${file}"`);
      return res.json(result);
    }

    if (language === "java") {
      const file = join(tmpDir, "Main.java");
      writeFileSync(file, code, "utf8");
      // Check javac exists first
      const check = await runWithProcess("which javac");
      if (!check.success) {
        return res.json({ success: false, error: "Java runtime is not available on this server. Please use JavaScript or Python." });
      }
      const compile = await runWithProcess(`javac "${file}"`);
      if (!compile.success) return res.json({ success: false, error: compile.error });
      const run = await runWithProcess(`java -cp "${tmpDir}" Main`);
      return res.json(run);
    }

    if (language === "cpp") {
      const src = join(tmpDir, "main.cpp");
      const bin = join(tmpDir, "main");
      writeFileSync(src, code, "utf8");
      // Check g++ exists first
      const check = await runWithProcess("which g++");
      if (!check.success) {
        return res.json({ success: false, error: "C++ compiler is not available on this server. Please use JavaScript or Python." });
      }
      const compile = await runWithProcess(`g++ -o "${bin}" "${src}"`);
      if (!compile.success) return res.json({ success: false, error: compile.error });
      const run = await runWithProcess(`"${bin}"`);
      return res.json(run);
    }

    return res.status(400).json({ success: false, error: `Unsupported language: ${language}` });

  } catch (err) {
    console.error("Code execution error:", err);
    return res.json({ success: false, error: err.message });
  } finally {
    try { rmSync(tmpDir, { recursive: true, force: true }); } catch (_) {}
  }
};
