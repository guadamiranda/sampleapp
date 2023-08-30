import React from 'react';
import MiComponente from '../Components/MiComponente/MiComponente';
import Card from '../Components/Card/Card';
import './MiComponente.css';


function MiComponentePage(){
    const user = {
        nombre: 'Mundo',
        apellido: 'Feliz'
    }; 
    return (
        <div className='componentes'>
            <MiComponente user={user} />
            <Card 
                image='https://www.w3schools.com/howto/img_avatar.png'
                name='Poder Judicial'
                description='Aca vemos la composicion de componentes...'
            />
        </div>
    )
}
export default MiComponentePage;