import React from 'react';
import logo from './logo.svg';
import './App.css';

import Principal from './componets/Principal';

function App() {
  return (
    <div className="App">
      <p>peliculas</p>
      <Principal name="SERIES"></Principal>
      <Principal name="MOVIES"></Principal>
    
    </div>
  );
}

export default App;
