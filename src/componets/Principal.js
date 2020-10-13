import React  from 'react';
import "./Principal.css";


function Principal(props) {

  function clicker(){

    props.variador(props.info); 
   
  }

  return (
    <div>
       
        <div className="target-movie" onClick={clicker}>
          <div className="titulo-movie">{props.name}</div>
        </div>
      
           
    </div>
  );
}

export default Principal;