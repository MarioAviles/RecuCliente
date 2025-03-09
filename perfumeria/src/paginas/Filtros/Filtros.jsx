import './Filtros.css'
import FiltroMarca from '../../componentes/FiltroMarca/FiltroMarca';

const Filtros = (props) => {


    return(
        <div className='filtros'>
            <FiltroMarca perfumes = {props.perfumes} setMarcaSeleccionada = {props.setMarcaSeleccionada}/>
            {/* <FiltroOrden setOrdenFecha={props.setOrdenFecha}/>
            <FiltroOrdenNota setOrdenNota={props.setOrdenNota}/> */}
        </div>
    )
}
export default Filtros;