import { useAuth } from '../contexts/AuthContext';
import Search from '../components/Search';
import Upload from '../components/Upload';
import FilesList from '../components/FilesList';
import AdminPanel from '../components/AdminPanel';
import { canUpload } from '../utils/roles';

function Dashboard() {
  const { user, role } = useAuth();

  const handleDownload = (url) => {
    // TODO: Trigger download
    console.log('Download:', url);
  };

  return (
    <div className="p-8 max-w-6xl mx-auto">
      <h2 className="text-3xl font-bold mb-8 text-center">Welcome to IMAKS Dashboard</h2>
      <p className="text-xl mb-4 text-center">User: {user?.email || 'Unknown'}</p>
      <p className="text-xl mb-8 text-center">Role: {role || 'Guest'}</p>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
        <Search />
        {canUpload(role) && <Upload />}
      </div>

      <FilesList onDownload={handleDownload} />

      {role === 'admin' && <AdminPanel />}
    </div>
  );
}

export default Dashboard;
