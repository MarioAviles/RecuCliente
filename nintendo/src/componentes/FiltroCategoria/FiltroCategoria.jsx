import './FiltroCategoria.css'

const FiltroCategoria = (props) => {

    function obtenerCategorias(juegos) {
        const categoriasUnicas = [...new Set(juegos.map(juego => juego.categorias))];
        return categoriasUnicas;
    }

    const categorias = obtenerCategorias(props.juegos)

    return (
        
        <div className="filtroCategoria">
            <label>Categoría</label>
            <select onChange={(e) => props.setCategoriaSeleccionada(e.target.value)}>
                <option value="">Todas</option>
                {categorias.map((categoria, index) => (
                    <option key={index} value={categoria}>{categoria}</option>
                ))}
            </select>
        </div>
    )
}
export default FiltroCategoria;