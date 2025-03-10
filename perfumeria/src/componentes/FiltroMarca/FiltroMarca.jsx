import './FiltroMarca.css'

const FiltroMarca = (props) => {

    function obtenerMarcas(perfumes) {
        const marcasUnicas = [...new Set(perfumes.map(perfume => perfume.marca))]; //me recoge una única vez todas las marcas
        return marcasUnicas;
    }

    const marcas = obtenerMarcas(props.perfumes)

    return (
        
        <div className="filtroMarca">
            <label>Marca</label>
            <select onChange={(e) => props.setMarcaSeleccionada(e.target.value)}>
                <option value="">Todas</option>
                {marcas.map((marca, index) => (
                    <option key={index} value={marca}>{marca}</option>
                ))}
            </select>
        </div>
    )
}
export default FiltroMarca;