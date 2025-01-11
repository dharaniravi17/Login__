import React, { useEffect, useState } from 'react';
import Login from './components/Login';

function App() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('https://login-backend-xaj6.onrender.com/api/test/')
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
