import Pokeball from '../../assets/pokeball.png';
import { Link } from 'react-router-dom';
import './Cabecera.css';

const Cabecera = () => {

    return (
        <div className="row">
            <div className="col-md-12 cabecera">
                <img className='logo' src={Pokeball}/>
                <Link to='' className='link'>
                    <h1 className='titulo'>Pokédex</h1>
                </Link>
                <img className='logo' src={Pokeball}/>
            </div>
        </div>
    )
}

export default Cabecera;