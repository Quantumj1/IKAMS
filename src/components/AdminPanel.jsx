import { useEffect, useState } from 'react';
import { db } from '../lib/firebase';
import { collection, query, onSnapshot, doc, updateDoc, deleteDoc, serverTimestamp } from 'firebase/firestore';
import { useAuth } from '../contexts/AuthContext';
import { deleteObject, ref } from 'firebase/storage';
import { storage } from '../lib/firebase';

function AdminPanel() {
  const [pendingUploads, setPendingUploads] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const q = query(collection(db, 'pending-uploads'));
    const unsubscribe = onSnapshot(q, (snapshot) => {
      const uploads = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setPendingUploads(uploads);
    });
    return unsubscribe;
  }, []);

  const handleApprove = async (upload) => {
    try {
      // Move to approved 'papers' collection
      await updateDoc(doc(db, 'pending-uploads', upload.id), {
        status: 'approved',
        approvedBy: user.email,
        approvedAt: serverTimestamp()
      });
      // Or create in papers and delete pending
      console.log('Approved:', upload.id);
    } catch (error) {
      console.error('Approve error:', error);
    }
  };

  const handleReject = async (upload) => {
    try {
      // Delete from pending and storage
      if (upload.filePath) {
        const fileRef = ref(storage, upload.filePath);
        await deleteObject(fileRef);
      }
      await deleteDoc(doc(db, 'pending-uploads', upload.id));
      console.log('Rejected:', upload.id);
    } catch (error) {
      console.error('Reject error:', error);
    }
  };

  if (pendingUploads.length === 0) {
    return (
      <div className="p-8 bg-yellow-100/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-emerald-400/30 text-center">
        <h3 className="text-2xl font-bold mb-4 text-umat-white">No Pending Uploads</h3>
        <p className="text-green-600">All uploads approved or no new submissions.</p>
      </div>
    );
  }

  return (
    <div className="bg-white/20 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/30">
      <div className="p-8">
        <h3 className="text-3xl font-bold mb-8 bg-gradient-to-r from-umat-yellow to-umat-green bg-clip-text text-transparent">
          Pending Approvals ({pendingUploads.length})
        </h3>
        <div className="space-y-4">
          {pendingUploads.map((upload) => (
            <div key={upload.id} className="p-6 bg-white/10 rounded-2xl border border-white/20 hover:bg-white/20 transition-all">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <h4 className="text-xl font-bold text-white">{upload.title}</h4>
                  <p className="text-umat-yellow font-semibold">{upload.category}</p>
                  <p className="text-sm text-green-300">Dept: {upload.dept} | By: {upload.uploaderEmail}</p>
                </div>
                <span className="text-sm bg-emerald-900 px-3 py-1 rounded-full mt-2 md:mt-0">
                  Uploaded {upload.createdAt?.toDate ? upload.createdAt.toDate().toLocaleDateString() : 'recently'}
                </span>
              </div>
              <div className="flex gap-3">
                <button 
                  onClick={() => handleApprove(upload)}
                  className="flex-1 bg-umat-green hover:bg-emerald-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  ✅ Approve
                </button>
                <button 
                  onClick={() => handleReject(upload)}
                  className="flex-1 bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg hover:shadow-xl"
                >
                  ❌ Reject & Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminPanel;

