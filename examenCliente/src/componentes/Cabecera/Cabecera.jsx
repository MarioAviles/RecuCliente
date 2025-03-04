import {Link} from 'react-router-dom'
import logo from '../../assets/logoRestaurante.png'
import './Cabecera.css'

const Cabecera = () => {
    return (
        <div>
            <Link to="/" className='cabecera'>
                <img src={logo} alt="" />
                <h4>preparatucomida.com</h4>
            </Link>
        </div>
    )
}
export default Cabecera;