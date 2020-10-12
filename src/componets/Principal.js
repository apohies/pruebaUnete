import React, { useState , useEffect  } from 'react';
import "./Principal.css";


function Principal(props) {

  return (
    <div>
        <a href="">
        <div className="target-movie">
          <div className="titulo-movie">{props.name}</div>
        </div>
      </a>
           
    </div>
  );
}

export default Principal;