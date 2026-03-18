function AdminPanel() {
  // TODO: Fetch pending uploads from Firestore
  const pendingUploads = [
    { id: 1, title: 'New Mining Report', uploader: 'student123', dept: 'Mining', fileUrl: '#' },
  ];

  const handleApprove = (id) => {
    // TODO: Update status to approved
    console.log('Approved:', id);
  };

  const handleReject = (id) => {
    // TODO: Update status to rejected, delete file
    console.log('Rejected:', id);
  };

  return (
    <div className="p-6 bg-white/10 rounded-xl mt-6">
      <h3 className="text-2xl font-bold mb-4">Pending Uploads for Approval</h3>
      <div className="space-y-2">
        {pendingUploads.map((upload) => (
          <div key={upload.id} className="p-4 bg-white/5 rounded-lg flex justify-between items-center">
            <div>
              <p className="font-semibold">{upload.title}</p>
              <p className="text-sm opacity-75">By {upload.uploader} - {upload.dept}</p>
            </div>
            <div className="space-x-2">
              <button 
                onClick={() => handleApprove(upload.id)}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-all"
              >
                Approve
              </button>
              <button 
                onClick={() => handleReject(upload.id)}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-all"
              >
                Reject
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AdminPanel;
