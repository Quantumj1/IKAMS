import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { initializeFirestore, persistentLocalCache } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  // === INSTRUCTIONS ===
  // 1. Go to https://console.firebase.google.com → New project or select existing
  // 2. Project settings (gear icon) → General → Your apps → Web icon (</>)
  // 3. Register app (name: IMAKS), copy firebaseConfig object here:
  // 4. Authentication → Sign-in method → Enable Google (add authorized domains: localhost)
  // 5. Firestore Database → Create if needed
  apiKey: "AIzaSyC1cbvEssUccf5jq8ZSNZWthFtbqMyLJ1g",
  authDomain: "ikams-647cc.firebaseapp.com",
  projectId: "ikams-647cc",
  storageBucket: "ikams-647cc.firebasestorage.app",
  messagingSenderId: "455758407870",
  appId: "1:455758407870:web:e1c55f7d36000c8fd556ef",
  measurementId: "G-FQGF4Q9T18"
  // Paste your real config above, delete these placeholders
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const db = initializeFirestore(app, {
  localCache: persistentLocalCache({ cacheSizeBytes: 10485760 })
});

export const storage = getStorage(app);
export const analytics = getAnalytics(app);

export default app;
