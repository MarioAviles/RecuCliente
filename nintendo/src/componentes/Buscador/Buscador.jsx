import './Buscador.css'

const Buscador = (props) => {
    return (
        <div className='buscador'>
            <input
                type="text"
                placeholder="Buscar juego..."
                value={props.skeyword}
                onChange={(e) => props.setKeyword(e.target.value)}
            />
            <button onClick={props.aplicarBusqueda}>Buscar</button>
        </div>

    )
}
export default Buscador;