import './button.scss'

const Button = (props) => {
    return(
        <div className='buttonContainer'>
            <div className='buttonContainer__text'>
                <span>{props.nombre}</span>
                <span className='buttonContainer__icon'>{props.icono}</span>
            </div>
        </div>
    )
}

export default Button