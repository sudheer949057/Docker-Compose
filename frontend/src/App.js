import React, { useState } from 'react';

function App() {
  const [response, setResponse] = useState('');

  const callBackend = async () => {
    try {
      const res = await fetch(`${process.env.REACT_APP_BACKEND_URL}/update`);
      const data = await res.json();
      setResponse(JSON.stringify(data));
    } catch (err) {
      setResponse('Error contacting backend');
    }
  };

  return (
    <div style={{ padding: 20 }}>
      <h1>Hello World from React!</h1>
      <button onClick={callBackend}>Call Backend</button>
      <p>Response: {response}</p>
    </div>
  );
}

export default App;
