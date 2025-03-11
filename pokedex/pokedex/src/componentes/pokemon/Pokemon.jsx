import './Pokemon.css';
import { Link } from 'react-router-dom';

const Pokemon = (props) => {

    return (
        <div className="col-md-2 pokemon">
            <h2>{props.id}</h2>
            <Link className="link" to={`/pokemon/${props.id}`}>
                <img className='poke' src={props.imagen} alt=""/>
            </Link>
            <h3>{props.nombre}</h3>
            <ul>
                {props.tipos.map((tipo, index) => (
                    <li key={index}>{tipo}</li>
                ))}
            </ul>
        </div>
    );
}

export default Pokemon;