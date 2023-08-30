import React from 'react';

function MiComponente(props){
    return  (
        <div>
            <h1> Hola, {props.user.nombre} {props.user.apellido}!</h1>
        </div>
    )
}
export default MiComponente;

