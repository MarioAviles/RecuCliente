import './FiltroOrden.css'

const FiltroOrden = (props) => {

    return (
        <div className="filtroOrden">
            <label>Ordenar por fecha</label>
            <select onChange={(e) => props.setOrdenFecha(e.target.value)}>
                <option value="sinOrden">Sin orden</option>
                <option value="reciente">Más reciente primero</option>
                <option value="antiguo">Más antiguo primero</option>
            </select>
        </div>
    )
}
export default FiltroOrden;