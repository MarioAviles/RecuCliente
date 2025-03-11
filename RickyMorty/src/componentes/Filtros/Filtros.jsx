import './Filtros.css'
import FiltroMes from '../FiltroMes/FiltroMes';

const Filtros = (props) => {
    return (
        <div className='filtros'>
            <FiltroMes listaCapitulos = {props.listaCapitulos} manejarMesSeleccionado = {props.manejarMesSeleccionado}></FiltroMes>
        </div>
    )
}
export default Filtros;