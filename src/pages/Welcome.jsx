import { useAuth } from '../contexts/AuthContext';
import { useNavigate, Link } from 'react-router-dom';
import { useEffect } from 'react';

function Welcome() {
  const { user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (user) {
      navigate('/dashboard');
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-umatGreen via-emerald-800 to-umatGold overflow-hidden relative">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-10 w-72 h-72 bg-umatGold/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-emerald-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/4 w-48 h-48 bg-yellow-300/10 rounded-full blur-2xl animate-bounce"></div>
      </div>
      
      <div className="relative z-10 flex items-center justify-center min-h-screen p-8 text-white">
        <div className="text-center w-full">
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-black bg-gradient-to-r from-yellow-300 via-umatGold to-emerald-400 bg-clip-text text-transparent mb-12 drop-shadow-4xl leading-tight">
            IMAKS
          </h1>
          <p className="text-2xl md:text-3xl lg:text-4xl mb-16 text-white/95 max-w-4xl mx-auto leading-relaxed drop-shadow-2xl font-light tracking-wide">
            UMaT Knowledge Management System
          </p>
          <p className="text-lg md:text-xl mb-20 text-white/80 max-w-3xl mx-auto leading-relaxed drop-shadow-lg">
            Unlock specialized mining & geosciences resources. Submit research, collaborate with experts, 
            and advance UMaT's academic excellence.
          </p>
          <div className="flex flex-col lg:flex-row gap-8 justify-center items-center mb-20">
            <Link 
              to="/Login" 
              className="bg-gradient-to-r from-umatGold to-yellow-500 text-black font-black py-6 px-12 rounded-3xl text-xl hover:from-yellow-400 hover:to-umatGold hover:scale-110 transition-all duration-300 shadow-2xl hover:shadow-4xl transform hover:-translate-y-2"
            >
              🚀 Get Started
            </Link>
            <a 
              href="/Signup" 
              className="border-4 border-white/30 bg-white/5 backdrop-blur-2xl text-white font-bold py-6 px-12 rounded-3xl text-xl hover:bg-white/20 hover:border-umatGold hover:scale-105 transition-all duration-300 shadow-2xl hover:shadow-3xl"
            >
              New User? Join Now
            </a>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto opacity-80">
            <div className="text-center p-6">
              <div className="text-4xl mb-2">📚</div>
              <h3 className="text-xl font-bold mb-2 text-umatGold drop-shadow-lg">Knowledge Library</h3>
              <p className="text-sm">Curated mining and tech resources</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-2">📤</div>
              <h3 className="text-xl font-bold mb-2 text-yellow-400 drop-shadow-lg">Submit Research</h3>
              <p className="text-sm">Admin approval workflow</p>
            </div>
            <div className="text-center p-6">
              <div className="text-4xl mb-2">👥</div>
              <h3 className="text-xl font-bold mb-2 text-emerald-400 drop-shadow-lg">Collaborate</h3>
              <p className="text-sm">Faculty & students</p>
            </div>
          </div>
          <p className="mt-20 text-lg text-white/60 tracking-wide">
            Knowledge . Learning . Growth
          </p>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
