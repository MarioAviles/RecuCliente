import {Link} from 'react-router-dom'
import logo from '../../assets/logoRM.png'
import './Cabecera.css'

const Cabecera = () => {
    return (
        <div>
            <Link to="/" className='cabecera'>
                <img src={logo} alt="" />
            </Link>
        </div>
    )
}
export default Cabecera;