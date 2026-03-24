import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';
import { auth, db } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('student');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      // Save user profile to Firestore
      await setDoc(doc(db, 'users', userCredential.user.uid), {
        email,
        role,
        createdAt: new Date().toISOString()
      });
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  if (user) {
    navigate('/');
    return null;
  }

  const roles = ['student', 'lecturer'];

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-md bg-white/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up for IMAKS</h2>
        {error && <p className="text-orange-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleSignup} className="space-y-4">
          <input
            type="email"
            placeholder="UMaT Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/20 rounded-xl text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-umatGold"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/20 rounded-xl text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-umatGold"
            minLength={6}
            required
          />
          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="w-full p-3 bg-white/20 rounded-xl text-white border border-white/30 focus:ring-2 focus:ring-umatGold"
          >
            {roles.map(r => <option key={r} value={r}>{r.charAt(0).toUpperCase() + r.slice(1)}</option>)}
          </select>
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-umatGold text-black font-bold rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {loading ? 'Creating Account...' : 'Sign Up'}
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-white/70">
          Already have account? <a href="/login" className="text-umatGold hover:underline font-semibold">Login</a>
        </p>
      </div>
    </div>
  );
}

export default Signup;
