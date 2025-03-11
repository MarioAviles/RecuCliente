

const FiltroNombre = ({setFiltroNombres}) => {

    function filtrarPorNombre(e) {
        setFiltroNombres(e.target.value);
    }

    return (
        <div className="row">
            <div className="col-md-6">
                <h2>Nombre</h2>
                <input type="text" onChange={filtrarPorNombre}></input>
            </div>
        </div>
    )
}

export default FiltroNombre;