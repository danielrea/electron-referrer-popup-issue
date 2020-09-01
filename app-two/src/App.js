import React from 'react';
import './App.css';

function App() {
  console.log('document.referrer:', document.referrer)
  return (
    <div className="App">
      <div>
        document.referrer = {document.referrer ? document.referrer : 'undefined'}
      </div>
      <div>
        should equal "http://localhost:3003"
      </div>
    </div>
  );
}

export default App;
