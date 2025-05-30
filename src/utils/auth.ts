import { ADMIN_CREDENTIALS, CSRF_TOKEN_KEY, SESSION_STORAGE_KEY } from '../constants';
import { AdminCredentials } from '../types';

// Check if user is authenticated
export const isAuthenticated = (): boolean => {
  const session = sessionStorage.getItem(SESSION_STORAGE_KEY);
  return session === 'true';
};

// Log authentication attempts
export const logAuthAttempt = (username: string, success: boolean): void => {
  console.log(`Authentication attempt by ${username}: ${success ? 'Success' : 'Failed'}`);
};

// Create a new session
export const createSession = (): void => {
  sessionStorage.setItem(SESSION_STORAGE_KEY, 'true');
  generateCSRFToken(); // Generate a new CSRF token on session creation
};

// Clear the session
export const logout = (): void => {
  sessionStorage.removeItem(SESSION_STORAGE_KEY);
  localStorage.removeItem(CSRF_TOKEN_KEY);
};

// Validate admin credentials
export const validateCredentials = (credentials: AdminCredentials): boolean => {
  return (
    credentials.username === ADMIN_CREDENTIALS.username &&
    credentials.password === ADMIN_CREDENTIALS.password
  );
};

// Generate and get CSRF token
export const getCSRFToken = (): string => {
  let token = localStorage.getItem(CSRF_TOKEN_KEY);
  if (!token) {
    token = generateCSRFToken();
  }
  return token;
};

// Helper function to generate a CSRF token
const generateCSRFToken = (): string => {
  const token = Math.random().toString(36).substring(2) + Date.now().toString(36);
  localStorage.setItem(CSRF_TOKEN_KEY, token);
  return token;
};