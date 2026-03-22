import { useAuth } from '../contexts/AuthContext';
import Search from '../components/Search';
import Upload from '../components/Upload';
import FilesList from '../components/FilesList';
import AdminPanel from '../components/AdminPanel';
import { getStudentComponents, getLecturerComponents, getAdminComponents, getRoleColor, isAdmin } from '../utils/roles';
import { useState } from 'react';

function Dashboard() {
  const { user, role } = useAuth();
  
  const [activeFiles, setActiveFiles] = useState([]);

  const componentsMap = {
    Search,
    Upload,
    FilesList,
    AdminPanel
  };

  const getComponents = () => {
    if (role === 'student') return getStudentComponents();
    if (role === 'lecturer') return getLecturerComponents();
    if (role === 'admin') return getAdminComponents();
    return [];
  };

  const handleDownload = (url) => {
    // TODO: Real download from storage
    window.open(url, '_blank');
  };

  const dashboardTitle = role ? `${role.charAt(0).toUpperCase() + role.slice(1)} Dashboard` : 'IMAKS';

  return (
    <div className="min-h-screen bg-green-to-br from-umat-green/10 via-white to-umat-yellow/10 p-8">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-umat-green to-umat-yellow mb-4">
            IMAKS
          </h1>
          <h2 className="text-2xl font-bold text-green-800 mb-2">{dashboardTitle}</h2>
          <p className="text-lg text-green-600 max-w-2xl mx-auto">
            Welcome <span className="font-semibold">{user?.email}</span>
          </p>
          <div className={`inline-flex mt-4 px-6 py-2 rounded-full ${getRoleColor(role)}`}>
            Role: {role || 'Guest'}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {getComponents().map((compName) => {
            const Component = componentsMap[compName];
            if (!Component) return null;
            return (
              <div key={compName} className="bg-emerald-100/20 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-yellow-400/30">
                <Component onDownload={handleDownload} />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;

