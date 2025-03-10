import './MostrarMas.css';

const MostrarMas = ({setLimite , limite}) => {

    function mostrarMas() {
        setLimite(limite + 20);
    }

    return (
        <div className='row'>
            <div className='col-md-12 mostrarMas'>
                <button className="botonMostrarMas" onClick={mostrarMas}>Mostrar mas</button>
            </div>
        </div>
    )
}

export default MostrarMas;