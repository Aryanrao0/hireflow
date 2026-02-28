import axios from "axios";

const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  withCredentials: true, // by adding this field browser will send the cookies to server automatically, on every single req
});

// Add Clerk authentication token to all requests
axiosInstance.interceptors.request.use(
  async (config) => {
    // Try to get the Clerk session token if available
    try {
      const token = await window.Clerk?.session?.getToken();
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    } catch (error) {
      // Silently fail - token will be handled by Clerk
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add response interceptor for better error messages
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Completely silence 404 errors to avoid console spam during deployment
    if (error?.response?.status === 404) {
      // Suppress the error in console
      const silentError = new Error('Backend route not deployed yet');
      silentError.response = error.response;
      silentError.config = error.config;
      return Promise.reject(silentError);
    }
    // Silently handle other errors
    return Promise.reject(error);
  }
);

export default axiosInstance;
