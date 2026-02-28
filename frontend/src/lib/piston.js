// Code execution via backend proxy (Judge0 API)
import axiosInstance from "./axios.js";

const SUPPORTED_LANGUAGES = ["javascript", "python", "java", "cpp"];

/**
 * @param {string} language - programming language
 * @param {string} code - source code to execute
 * @returns {Promise<{success:boolean, output?:string, error?: string}>}
 */
export async function executeCode(language, code) {
  if (!SUPPORTED_LANGUAGES.includes(language)) {
    return {
      success: false,
      error: `Unsupported language: ${language}`,
    };
  }

  try {
    const response = await axiosInstance.post("/code/execute", {
      language,
      code,
    });

    return response.data;
  } catch (error) {
    if (error.response?.data) {
      return error.response.data;
    }

    return {
      success: false,
      error: "Unable to execute code. Please try again later.",
    };
  }
}
