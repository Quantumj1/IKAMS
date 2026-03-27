import { collection, query, where, onSnapshot } from 'firebase/firestore';
import { db } from '../lib/firebase';
import { useState, useEffect } from 'react';

function FilesList({ onDownload }) {
  const [files, setFiles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const q = query(collection(db, 'files'), where('approved', '==', true));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const fileList = snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data()
      }));
      setFiles(fileList);
      setLoading(false);
    });
    return unsubscribe;
  }, []);

  if (loading) return <div className="p-6 text-center">Loading files...</div>;

  return (
    <div className="p-6 bg-white/10 rounded-xl mt-6">
      <h3 className="text-2xl font-bold mb-4">Approved Knowledge Assets ({files.length})</h3>
      <div className="space-y-2">
        {files.length === 0 ? (
          <p className="text-center py-8 opacity-50">No approved files yet</p>
        ) : (
          files.map((file) => (
            <div key={file.id} className="p-4 bg-white/5 rounded-lg flex justify-between items-center">
              <div>
                <p className="font-semibold">{file.title}</p>
                <p className="text-sm opacity-75">{file.department} - {file.category}</p>
              </div>
              <button 
                onClick={() => onDownload(file.storageUrl)}
                className="bg-umatGold px-6 py-2 rounded-lg text-black font-bold hover:bg-yellow-400 transition-all"
              >
                Download
              </button>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

export default FilesList;

export default FilesList;
