import React, { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/test/')
      .then((response) => response.json())
      .then((data) => setMessage(data.message));
  }, []);

  return (
    <div className="App">
      <h1>hello</h1>
      <Login />
    </div>
  );
}

export default App;
