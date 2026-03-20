import { useState } from 'react';
import { signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth';
import { auth, googleProvider } from '../lib/firebase';
import { useAuth } from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const { user } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    try {
      await signInWithEmailAndPassword(auth, email, password);
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
    setLoading(false);
  };

  const handleGoogleLogin = async () => {
    setLoading(true);
    setError('');
    try {
      await signInWithPopup(auth, googleProvider);
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

  return (
    <div className="flex min-h-screen items-center justify-center p-8">
      <div className="w-full max-w-md bg-green/10 backdrop-blur-lg rounded-2xl p-8 shadow-2xl">
        <h2 className="text-2xl font-bold mb-6 text-center">Login to IMAKS</h2>
        {error && <p className="text-red-400 mb-4 text-center">{error}</p>}
        <form onSubmit={handleLogin} className="space-y-4">
          <input
            type="email"
            placeholder="UMaT Index/Staff ID @st.umat.edu.gh"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-3 bg-white/20 rounded-xl text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-umat-gold"
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-3 bg-white/20 rounded-xl text-white placeholder-white/70 border border-white/30 focus:outline-none focus:ring-2 focus:ring-umat-gold"
            required
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full p-3 bg-umat-gold text-black font-bold rounded-xl hover:bg-yellow-400 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50"
          >
            {loading ? 'Logging in...' : 'Email Login'}
          </button>
          <button
            type="button"
            onClick={handleGoogleLogin}
            disabled={loading}
            className="w-full p-3 bg-white text-black font-bold rounded-xl hover:bg-gray-100 transition-all duration-200 shadow-lg hover:shadow-xl disabled:opacity-50 flex items-center justify-center gap-2"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="currentColor" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
            </svg>
            Continue with Google
          </button>
        </form>
        <p className="mt-4 text-sm text-center text-white/70">
          Don't have an account? <a href="/signup" className="text-umat-gold hover:underline font-semibold">Sign Up</a>
        </p>
        <p className="text-sm text-center text-white/70">
          Demo: Use any email/password. Firebase config required for real auth.
        </p>
      </div>
    </div>
  );
}

export default Login;
