import './Filtros.css'
import FiltroCategoria from '../../componentes/FiltroCategoria/FiltroCategoria';
import FiltroOrden from '../../componentes/FiltroOrden/FiltroOrden';
import FiltroOrdenNota from '../../componentes/FiltroOrdenNota/FiltroOrdenNota';

import foto from '../../assets/fotoFiltros.jpg'

const Filtros = (props) => {


    return(
        <div className='filtros'>
            <FiltroCategoria juegos={props.juegos}setCategoriaSeleccionada={props.setCategoriaSeleccionada}/>
            {/* <FiltroOrden setOrdenFecha={props.setOrdenFecha}/>
            <FiltroOrdenNota setOrdenNota={props.setOrdenNota}/> */}
        </div>
    )
}
export default Filtros;