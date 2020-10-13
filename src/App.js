import React, { useState , useEffect  } from 'react';
import logo from './logo.svg';
import './App.css';
import Principal from './componets/Principal';
import Visual from './componets/Visual';




function App() {

  const [estado,setState]=useState(0);

  function variador(tipo){
    if(tipo=="series"){
      setState(1);
    }else{
      setState(2); 
    }
  }


  const  tokker=(estado)=>{
    if(estado==0){

    }else if(estado==1){

      return ( <Visual info="serie"></Visual>)

    } else if(estado==2){

      return ( <Visual info="movie"></Visual>)
    }

 }


  return (
      <div>
        <Principal name="Series"  info="series" variador={variador}></Principal>
        <Principal name="Peliculas" info="movie" variador={variador}></Principal>
        {tokker(estado)}
        
     


      </div>
    
  );
}

export default App;
