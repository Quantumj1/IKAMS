import { createContext, useContext, useEffect, useState } from 'react';
import { onAuthStateChanged } from 'firebase/auth';
import { auth, db } from '../lib/firebase';
import { doc, onSnapshot } from 'firebase/firestore';

const AuthContext = createContext({});

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }
  return context;
};

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [role, setRole] = useState(null); // 'student' | 'lecturer' | 'admin'

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (firebaseUser) => {
      setUser(firebaseUser);
      setRole(null);
      if (firebaseUser) {
        const userRef = doc(db, 'users', firebaseUser.uid);
        const roleUnsub = onSnapshot(userRef, (doc) => {
          setRole(doc.exists() ? doc.data().role : 'student');
        }, (err) => {
          console.error('Error fetching user role:', err);
          setRole('student');
        });
        // Cleanup previous role listener
        return roleUnsub;
      }
    });
    setLoading(false);
    return unsubscribe;
  }, []);

  const value = {
    user,
    role,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}
