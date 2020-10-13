import React, { useState , useEffect  } from 'react';
import axios from 'axios';
import Tablero from './Tablero';


function Visual(props) {

  
    const [datos,setDatos]=useState([]);

    async function getElements() {
      try {
        const response = await axios.get('https://run.mocky.io/v3/b3dc9e1b-165f-4648-ab73-1a75e82fd899');
        
        for(var i=0  ;  i <25 ;i++)
        {
          setDatos(oldArray => [...oldArray, response.data.entries[i]]);
        }
      } catch (error) {
        console.error(error);
      }
    }
   
    
    useEffect(() => {  

      getElements();
     
    },[]);

    
    return (
      
      <div>
     
      {datos.map(elementos=><Tablero title={elementos.title} direccion={elementos.images['Poster Art'].url} ></Tablero>)}
   
    </div>
  );
}

export default Visual;