import React, { useState , useEffect  } from 'react';
import logo from './logo.svg';
import './App.css';
import Principal from './componets/Principal';





function App() {

  const [estado,setState]=useState(0);
  
  return (
      <div>
        <form>
        <div className="form-group col-md-4">
          <label>Buscar</label>
          <input className="form-control" />
            
        </div>
         </form>
        <Principal name="Series"  info="series" ></Principal>
        <Principal name="Series"  info="movie" ></Principal>
      </div>
    
  );
}

export default App;
