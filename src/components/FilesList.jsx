function FilesList({ onDownload }) {
  // TODO: Fetch approved files from Firestore
  const files = [
    { id: 1, title: 'Technical Report - Tarkwa Gold', dept: 'Mining', category: 'Gold Deposits', fileUrl: '#' },
    { id: 2, title: 'Lecture Notes - Geomatics Surveying', dept: 'Geomatics', category: 'Survey Methods', fileUrl: '#' },
  ];

  return (
    <div className="p-6 bg-white/10 rounded-xl mt-6">
      <h3 className="text-2xl font-bold mb-4">Approved Knowledge Assets</h3>
      <div className="space-y-2">
        {files.map((file) => (
          <div key={file.id} className="p-4 bg-white/5 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">{file.title}</p>
              <p className="text-sm opacity-75">{file.dept} - {file.category}</p>
            </div>
            <button 
              onClick={() => onDownload(file.fileUrl)}
              className="bg-umat-gold px-6 py-2 rounded-lg text-black font-bold hover:bg-yellow-400 transition-all"
            >
              Download
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FilesList;
