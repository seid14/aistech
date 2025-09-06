
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Temporary production fix - will use env vars when working
const firebaseConfig = import.meta.env.PROD ? {
  apiKey: "AIzaSyAYj8IUMB_3fjAQh7DMYrMHdHE2sddA_uU",
  authDomain: "aistech-b9c86.firebaseapp.com",
  projectId: "aistech-b9c86",
  storageBucket: "aistech-b9c86.firebasestorage.app",
  messagingSenderId: "686730869542",
  appId: "1:686730869542:web:13e8c8ca7edc5ef1111fe7",
  measurementId: "G-5DG7X0CRK2"
} : {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || "demo-api-key",
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || "demo-project.firebaseapp.com",
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || "demo-project",
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || "demo-project.appspot.com",
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || "123456789",
  appId: import.meta.env.VITE_FIREBASE_APP_ID || "1:123456789:web:abcdef123456",
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Debug: Check configuration
console.log('Firebase Config Status:', {
  environment: import.meta.env.MODE,
  usingProductionConfig: import.meta.env.PROD,
  envVarsAvailable: {
    apiKey: !!import.meta.env.VITE_FIREBASE_API_KEY,
    projectId: !!import.meta.env.VITE_FIREBASE_PROJECT_ID,
    authDomain: !!import.meta.env.VITE_FIREBASE_AUTH_DOMAIN
  },
  activeConfig: import.meta.env.PROD ? 'production-hardcoded' : 'development-env-vars',
  projectId: import.meta.env.PROD ? 'aistech-b9c86' : (import.meta.env.VITE_FIREBASE_PROJECT_ID || 'NOT SET')
});

const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const db = getFirestore(app);

export default app;
