import './loader.css'
import img from '../../Assets/loader.png'

const Loader = () => {
    return(
        <div className='loaderContainer'>
            <div>
                <img src={img}></img>
            </div>
        </div>
    )
}

export default Loader