import './FiltroMes.css'
import mockMeses from '../../mocks/mock-meses'

const FiltroMes = (props) => {

    function asignarMes(event){
        props.manejarMesSeleccionado(event.target.value);
    }

    return (
        <div className='filtroMes'>
            <label>Mes</label>
            <select onChange={asignarMes}>
                {mockMeses.map((mes, index) => (
                    <option key={index} value={mes}>{mes}</option>
                ))}
            </select>
        </div>
    )
}
export default FiltroMes;