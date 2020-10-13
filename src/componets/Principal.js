import React, { useState , useEffect  }  from 'react';
import Visual from './Visual';
import "./Principal.css";


function Principal(props) {

  const [count, setCount] = useState(0);

  function clicker(){

    if(count==0){
      setCount(1);
      
    }else{
      setCount(0);
    }
      
  }

  function mostrar(){

    console.log(count);

    if(count==1){

      return (<Visual info={props.info}></Visual> )
    } else { }
  }



  return (
    <div>
    <div>
       
        <div className="target-movie" onClick={clicker}>
          <div className="titulo-movie">{props.name}</div>
        </div>


        
          
    </div>
      {mostrar()}
      </div>
  );
}

export default Principal;