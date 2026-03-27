import { useState } from 'react';

function Search() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    // TODO: Firestore query where title/category contains query
    console.log('Search:', query);
    setResults([ // placeholder
      { id: 1, title: 'Gold Deposits in Tarkwa', dept: 'Mining', status: 'approved' }
    ]);
  };

  return (
    <div className="p-6 bg-white/10 rounded-xl">
      <h3 className="text-2xl font-bold mb-4">Search Knowledge Base</h3>
      <form onSubmit={handleSearch} className="flex gap-2 mb-6">
        <input
          type="text"
          placeholder="Keywords, department, mineral type..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="flex-1 p-3 rounded-xl border border-white/30 focus:outline-none focus:ring-2 focus:ring-umat-gold bg-white/20 text-white placeholder-white/70"
        />
        <button
          type="submit"
          className="px-6 py-3 bg-umat-gold text-black font-bold rounded-xl hover:bg-yellow-400 transition-all"
        >
          Search
        </button>
      </form>
      <div className="space-y-2">
        {results.map((item) => (
          <div key={item.id} className="p-4 bg-white/5 rounded-lg flex justify-between items-center">
            <span>{item.title} ({item.dept})</span>
            <button className="bg-umat-gold px-4 py-1 rounded text-black font-bold" onClick={() => onDownload(item.storageUrl)}>Download</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Search;
