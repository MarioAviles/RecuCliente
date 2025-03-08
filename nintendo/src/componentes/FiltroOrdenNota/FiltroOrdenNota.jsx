import './FiltroOrdenNota.css'

const FiltroOrden = (props) => {

    return (
        <div className="filtroOrdenNota">
            <label>Ordenar por nota</label>
            <select onChange={(e) => props.setOrdenNota(e.target.value)}>
                <option value="sinOrden">Sin orden</option>
                <option value="mayor">Mayor primero</option>
                <option value="menor">Menores primero</option>
            </select>
        </div>
    )
}
export default FiltroOrden;