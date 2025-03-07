import './Filtros.css'
import FiltroCategoria from '../../componentes/FiltroCategoria/FiltroCategoria';
import FiltroOrden from '../../componentes/FiltroOrden/FiltroOrden';
import foto from '../../assets/fotoFiltros.jpg'

const Filtros = (props) => {


    return(
        <div className='filtros'>
            <FiltroCategoria juegos={props.juegos}setCategoriaSeleccionada={props.setCategoriaSeleccionada}/>
            <FiltroOrden juegos={props.juegos}setOrdenFecha={props.setOrdenFecha}/>
            <h2>Disfruta del gaming!</h2>
            <img src={foto} alt="" />
        </div>
    )
}
export default Filtros;