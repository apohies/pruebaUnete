import React from 'react';
import  "./Tablero.css";


function Tablero(props) {


    return (
        <div>
       
            <div className="content-movie">
                    <div className="imagen-movie" style={{ backgroundImage:`url(${props.direccion})` }}>
            </div>
    <div className="titulo">{props.title}</div>
            </div>
        </div>
    )
}



export default Tablero

