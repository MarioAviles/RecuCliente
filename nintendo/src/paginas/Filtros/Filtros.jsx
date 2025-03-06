import './Filtros.css'
import FiltroCategoria from '../../componentes/FiltroCategoria/FiltroCategoria';

const Filtros = (props) => {


    return(
        <div className='filtros'>
            <FiltroCategoria juegos={props.juegos}setCategoriaSeleccionada={props.setCategoriaSeleccionada}/>
        </div>
    )
}
export default Filtros;