import { initializeApp } from 'firebase/app';
import { getAnalytics, type Analytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY || 'AIzaSyDemoKeyForAngelAIGuardian12345678',
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN || 'angel-ai-safety.firebaseapp.com',
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID || 'demo-angel-ai-guardian',
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET || 'angel-ai-safety.appspot.com',
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID || '123456789012',
  appId: import.meta.env.VITE_FIREBASE_APP_ID || '1:123456789012:web:abcdef1234567890abcdef',
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID || '',
};

// Initialize Firebase with fallback defaults
const app = initializeApp(firebaseConfig);

let analytics: Analytics | null = null;
try {
  // Only initialize Analytics if running in browser and real project IDs are provided in environment
  if (typeof window !== 'undefined' && import.meta.env.VITE_FIREBASE_PROJECT_ID && import.meta.env.VITE_FIREBASE_MEASUREMENT_ID) {
    analytics = getAnalytics(app);
  }
} catch (err) {
  console.warn('⚠️ Firebase Analytics initialization skipped or unavailable:', err);
}

const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();

export { app, analytics, auth, googleProvider };
