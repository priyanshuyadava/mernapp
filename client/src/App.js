import React, { useEffect, useState } from 'react';

function App() {
  const [status, setStatus] = useState('checking...');

  useEffect(() => {
    fetch('/api/health')
      .then((res) => res.json())
      .then((data) => setStatus(data.mongoConnected ? 'Connected to MongoDB' : 'Backend up, MongoDB not connected'))
      .catch(() => setStatus('Backend not reachable'));
  }, []);

  return (
    <div style={{ fontFamily: 'sans-serif', textAlign: 'center', marginTop: '50px' }}>
      <h1>MERN App</h1>
      <p>Backend status: {status}</p>
    </div>
  );
}

export default App;
