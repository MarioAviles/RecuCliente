import './Buscador.css'

const Buscador = (props) => {

    function actualizarBusqueda(event) {
        props.setKeyword(event.target.value)
    }

    return (
        <div className='buscador'>
            <input
                type="text"
                placeholder="Buscar juego..."
                value={props.keyword}
                onChange={actualizarBusqueda}
            />
            <button onClick={props.aplicarBusqueda}>Buscar</button>
        </div>

    )
}
export default Buscador;