
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Debug: Check if environment variables are loaded (dev only)
if (import.meta.env.DEV) {
  console.log('Firebase Config Debug:', {
    hasApiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
    hasProjectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'NOT SET'
  });
}

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
