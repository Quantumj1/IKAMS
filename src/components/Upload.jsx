import { useState } from 'react';
import { useAuth } from '../contexts/AuthContext';
import { db, storage } from '../lib/firebase';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage';

function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [dept, setDept] = useState('Mining');
  const [uploading, setUploading] = useState(false);
  const [uploadStatus, setUploadStatus] = useState('');

  const { user } = useAuth();

  const depts = ['Mining', 'Geomatics', 'Petroleum', 'Geology'];

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;

    setUploading(true);
    setUploadStatus('');

    try {
      // Upload file to Storage
      const filePath = `pending-uploads/${user.uid}/${Date.now()}_${file.name}`;
      const storageRef = ref(storage, filePath);
      await uploadBytes(storageRef, file);
      const fileUrl = await getDownloadURL(storageRef);

      // Save metadata to pending-uploads
      await addDoc(collection(db, 'pending-uploads'), {
        title,
        category,
        dept,
        fileUrl,
        filePath,
        uploaderEmail: user.email,
        uploaderUid: user.uid,
        status: 'pending',
        createdAt: serverTimestamp()
      });

      setUploadStatus('✅ Upload submitted for approval!');
      // Reset form
      setTitle('');
      setCategory('');
      setDept('Mining');
      setFile(null);
    } catch (error) {
      console.error('Upload error:', error);
      setUploadStatus('❌ Upload failed. Try again.');
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-6">
      <div className="text-2xl font-bold mb-4 bg-gradient-to-r from-umat-yellow to-umat-green bg-clip-text text-transparent">
        Submit New Knowledge Asset for Approval
      </div>
      
      {uploadStatus && (
        <div className={`p-4 rounded-2xl text-center font-semibold ${
          uploadStatus.includes('✅') ? 'bg-umat-green/20 text-umat-green border-umat-green/50' : 'bg-orange-400/20 text-orange-400 border-orange-500/50'
        } border p-4 rounded-2xl`}>
          {uploadStatus}
        </div>
      )}

      <form onSubmit={handleUpload} className="space-y-4 bg-white/10 p-6 rounded-2xl">
        <input
          type="text"
          placeholder="Title (e.g. Gold Deposit Analysis - Tarkwa)"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-umat-yellow focus:border-transparent transition-all"
          required
        />
        <input
          type="text"
          placeholder="Category / Mineral Type (e.g. Gold, Surveying)"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-4 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-umat-yellow focus:border-transparent transition-all"
          required
        />
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="w-full p-4 rounded-xl border border-white/30 bg-white/20 text-white focus:ring-2 focus:ring-umat-yellow focus:border-transparent transition-all"
        >
          {depts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <input
          type="file"
          accept=".pdf,.docx,.dwg"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-4 rounded-xl border-2 border-dashed border-white/30 bg-white/10 text-white file:mr-4 file:py-3 
          file:px-6 file:rounded-xl file:border-0 file:bg-umat-yellow file:text-black 
          hover:file:bg-umat-green file:font-bold file:shadow-lg hover:file:shadow-xl transition-all"
          required
        />
        <button
          type="submit"
          disabled={uploading || !file}
          className="w-full p-4 bg-gradient-to-r from-umat-yellow to-umat-green text-black font-bold 
          rounded-2xl hover:from-umat-green hover:to-umat-yellow transition-all shadow-xl hover:shadow-2xl 
          hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed text-lg"
        >
          {uploading ? '📤 Uploading...' : '📤 Submit for Admin Approval'}
        </button>
      </form>
      
      <div className="text-xs text-green-400 text-center p-4 bg-emerald-50 rounded-xl">
        <p>Files will be reviewed by admin before added to knowledge base.</p>
      </div>
    </div>
  );
}

export default Upload;

