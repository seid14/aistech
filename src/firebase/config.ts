
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.PROD
    ? "AIzaSyAYj8IUMB_3fjAQh7DMYrMHdHE2sddA_uU" // Production API key
    : import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.PROD
    ? "aistech-b9c86.firebaseapp.com"
    : import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.PROD
    ? "aistech-b9c86"
    : import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.PROD
    ? "aistech-b9c86.firebasestorage.app"
    : import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: import.meta.env.PROD
    ? "686730869542"
    : import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.PROD
    ? "1:686730869542:web:13e8c8ca7edc5ef1111fe7"
    : import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456",
  measurementId: import.meta.env.PROD
    ? "G-5DG7X0CRK2"
    : import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Debug: Check if environment variables are loaded
console.log('Firebase Config Debug:', {
  hasApiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
  hasProjectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'NOT SET',
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ? 'SET' : 'NOT SET',
  environment: import.meta.env.MODE,
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD
});

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
