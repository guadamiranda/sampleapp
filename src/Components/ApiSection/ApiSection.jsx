import { BsSearchHeart, BsListStars } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Button from '../Button/Button'
import './apiSection.scss'

const ApiSection = () => {
    return(
        <div className='apiSectionContainer'>
            <span>🔎 Ver un <b>listadito</b> de paises con ciertas características</span>
            <br/>
            <Link className='apiSectionContainer__linkStyle' to='/countriesList'><Button nombre='Listado de Paises'  icono={<BsListStars/>}></Button></Link>
            <br/>
            <span>🔎 <b>Buscar</b> un país en particular</span>
            <br/>
            <Link className='apiSectionContainer__linkStyle' to='/countrieSearch'><Button nombre='Buscador de Paises' icono={<BsSearchHeart/>}></Button></Link>
        </div>
    )
}

export default ApiSection