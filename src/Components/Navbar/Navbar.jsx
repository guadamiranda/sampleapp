import { Link } from 'react-router-dom'
import './navbar.scss'

const Navbar = () => {
    return(
        <div className='navbarContainer'>
            <Link className='navbarContainer__linkStyle' to='/hooks'><b>UseEffect/UseState</b></Link>
            <Link className='navbarContainer__linkStyle'><b>Llamada a APIS</b></Link>
            <Link className='navbarContainer__linkStyle'><b>Otros</b></Link>
            <Link className='navbarContainer__linkStyle'><b>Otros</b></Link>
        </div>
    )
}

export default Navbar