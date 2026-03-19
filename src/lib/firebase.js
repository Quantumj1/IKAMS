import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
  // === INSTRUCTIONS ===
  // 1. Go to https://console.firebase.google.com → New project or select existing
  // 2. Project settings (gear icon) → General → Your apps → Web icon (</>)
  // 3. Register app (name: IMAKS), copy firebaseConfig object here:
  // 4. Authentication → Sign-in method → Enable Google (add authorized domains: localhost)
  // 5. Firestore Database → Create if needed
  apiKey: "AIzaSyXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
  authDomain: "your-project.firebaseapp.com",
  projectId: "your-project-id",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:abcdef123456"
  // Paste your real config above, delete these placeholders
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);

export default app;
