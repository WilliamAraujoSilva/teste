import { Link } from 'react-router-dom'
import './style.css'

function ButtonHome ({texto, customClass='primary'}){


    return(
        <div className='button-container'>
            <Link  className={`button ${customClass}`} to='/pokedex'>{texto}</Link>
        </div>
    )   
}

export default ButtonHome