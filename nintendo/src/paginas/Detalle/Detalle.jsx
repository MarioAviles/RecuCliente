import './Detalle.css'
import { useParams } from "react-router-dom";
import fotoJuego from '../../assets/fotoJuego.webp'
import useJuegos from '../../hooks/useJuegos';
import ajaxLoader from "../../assets/ajax-loader.gif";

const Detalle = () => {

    const { id } = useParams()
    const { juegos, buscando } = useJuegos()

    function obtenerJuego(juegos, id) {
        const juegoSeleccionado = juegos.map(juego => juego.id === id);
        return juegoSeleccionado;
    }

    const juego = obtenerJuego(juegos, id)
    console.log("Datos del juego", juego)

    return (
        <div className="datos-container">
            <h2>Juego concreto</h2>

            {buscando && <img src={ajaxLoader} />}

            <div className="juegos">
                {juego.length > 0 ? (
                    juego.map((juego) => (
                        <div key={juego.id} className="juego">
                            <h3>{juego.nombre}</h3>
                            <p className="juego-categoria"><strong>Categoría:</strong> {juego.categoria}</p>
                            <p className="juego-categoria"><strong>Nota:</strong> {juego.nota}</p>
                        </div>
                    ))
                ) : (
                    !buscando && <p>No hay recetas disponibles.</p>
                )}
            </div>
        </div >
    )
}
export default Detalle;