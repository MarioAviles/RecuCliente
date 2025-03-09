import './Detalle.css'
import { useParams } from "react-router-dom";
import fotoPerfume from '../../assets/fotoPerfume.jpg'
import usePerfumes from '../../hooks/usePerfumes';
import ajaxLoader from "../../assets/ajax-loader.gif";
import { useState, useEffect } from "react";

const Detalle = () => {

    const { id } = useParams()
    const { perfumes, buscando } = usePerfumes()
    const [perfume, setPerfume] = useState(null);

    // Esperar a que los juegos estén listos antes de buscar el juego
    useEffect(() => {
        if (perfumes.length > 0) {
            console.log("Buscando juego con ID:", id);
            const perfumeEncontrado = perfumes.find(perfume => perfume.id === String(id)); //pongo string porque en esta api no esta como numero
            console.log("Perfume encontrado:", perfumeEncontrado);
            setPerfume(perfumeEncontrado);
        }
    }, [perfumes, id]); // Se ejecuta cuando `juegos` cambia

    return (
        <div className="datos-container">
            <h2>Perfume concreto</h2>

            {buscando && <img src={ajaxLoader} alt="Cargando..." />}

            <div className="detalle-perfume">
                {perfume ? (
                    <div key={perfume.id} className="perfume">
                        <h3>{perfume.nombre}</h3>
                        <img src={fotoPerfume} alt={perfume.nombre} className="perfume-img" />

                        <p className="perfume-categoria"><strong>Categoría:</strong> {perfume.categoria}</p>
                        <p className="perfume-categoria"><strong>Marca:</strong> {perfume.marca}</p>
                    </div>
                ) : (
                    !buscando && <p>No se encontró el perfume.</p>
                )}
            </div>
        </div>
    )
}
export default Detalle;