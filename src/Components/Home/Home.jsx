import './home.scss'
import Loader from '../Loader/Loader'

const HomeComponent = () => {
    return(
        <div className='homeContainer'>
           <span> ♡(•ө•) <b>¡Hola!</b> Soy una página de prueba (•ө•)♡</span>
           <span>El contenido se encuentra en las secciones del <b>Navbar</b></span>
           <Loader></Loader>
        </div>
    )
}

export default HomeComponent