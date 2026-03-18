import { useState } from 'react';

function Upload() {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [dept, setDept] = useState('Mining');
  const [uploading, setUploading] = useState(false);

  const depts = ['Mining', 'Geomatics', 'Petroleum', 'Geology'];

  const handleUpload = async (e) => {
    e.preventDefault();
    if (!file) return;
    setUploading(true);
    // TODO: Upload to Firebase Storage, save metadata to Firestore with pending status
    console.log('Upload:', { title, category, dept, file });
    setUploading(false);
  };

  return (
    <div className="p-6 bg-white/10 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Upload Knowledge Asset</h3>
      <form onSubmit={handleUpload} className="space-y-4">
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-umat-gold"
          required
        />
        <input
          type="text"
          placeholder="Category / Mineral Type"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full p-3 rounded-xl border border-white/30 bg-white/20 text-white placeholder-white/70 focus:ring-2 focus:ring-umat-gold"
          required
        />
        <select
          value={dept}
          onChange={(e) => setDept(e.target.value)}
          className="w-full p-3 rounded-xl border border-white/30 bg-white/20 text-white focus:ring-2 focus:ring-umat-gold"
        >
          {depts.map(d => <option key={d} value={d}>{d}</option>)}
        </select>
        <input
          type="file"
          accept=".pdf,.cad"
          onChange={(e) => setFile(e.target.files[0])}
          className="w-full p-3 rounded-xl border border-white/30 bg-white/20 text-white file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-umat-gold file:text-black hover:file:bg-yellow-400"
          required
        />
        <button
          type="submit"
          disabled={uploading}
          className="w-full p-3 bg-umat-gold text-black font-bold rounded-xl hover:bg-yellow-400 transition-all disabled:opacity-50"
        >
          {uploading ? 'Uploading...' : 'Upload & Submit for Approval'}
        </button>
      </form>
    </div>
  );
}

export default Upload;
