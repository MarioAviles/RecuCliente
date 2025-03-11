import useTipos from "../../hook/useTipos";

const FiltroTipos = ({setFiltroTipos}) => {
    
    const { tipos, buscando } = useTipos();

    function filtrarPorTipo(tipoSeleccionado){
        setFiltroTipos(tipoSeleccionado.target.value);
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Tipo</h2>
                <select onChange={filtrarPorTipo}>
                    <option value="">Todos</option>
                    {tipos.map((tipo, index) => (
                        <option key={index} value={tipo.nombre}>{tipo.nombre}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default FiltroTipos;