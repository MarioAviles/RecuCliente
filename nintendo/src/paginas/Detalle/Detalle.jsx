import './Detalle.css'
import { useParams } from "react-router-dom";
import fotoJuego from '../../assets/fotoJuego.webp'
import useJuegos from '../../hooks/useJuegos';
import ajaxLoader from "../../assets/ajax-loader.gif";
import { useState, useEffect } from "react";

const Detalle = () => {

    const { id } = useParams()
    const { juegos, buscando } = useJuegos()
    const [juego, setJuego] = useState(null);

    // Esperar a que los juegos estén listos antes de buscar el juego
    useEffect(() => {
        if (juegos.length > 0) {
            console.log("Buscando juego con ID:", id);
            const juegoEncontrado = juegos.find(juego => juego.id === String(id)); //pongo string porque en esta api no esta como numero
            console.log("Juego encontrado:", juegoEncontrado);
            setJuego(juegoEncontrado);
        }
    }, [juegos, id]); // Se ejecuta cuando `juegos` cambia

    return (
        <div className="datos-container">
            <h2>Juego concreto</h2>

            {buscando && <img src={ajaxLoader} alt="Cargando..." />}

            <div className="detalle-juego">
                {juego ? (
                    <div key={juego.id} className="juego">
                        <h3>{juego.nombre}</h3>
                        <img src={fotoJuego} alt={juegos.nombre} className="juego-img" />

                        <p className="juego-categoria"><strong>Categoría:</strong> {juego.categorias}</p>
                        <p className="juego-categoria"><strong>Nota:</strong> {juego.nota}</p>
                    </div>
                ) : (
                    !buscando && <p>No se encontró el juego.</p>
                )}
            </div>
        </div>
    )
}
export default Detalle;