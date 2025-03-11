import './PersonajesCapitulo.css';
import { useParams } from 'react-router-dom';
import ajaxLoader from '../../assets/ajax-loader.gif'
import useCapitulo from '../../hooks/useCapitulo';



const PersonajesCapitulo = () => {

    const { cap } = useParams()
    console.log(cap)
    const { capitulo, buscando } = useCapitulo(cap)
    console.log(capitulo)



    if (!capitulo || capitulo.length === 0) {
        return "No hay resultados";
    }


    return (


        <div className="recetas">

            {buscando && <img src={ajaxLoader} />}

            {capitulo.length > 0 ? (
                capitulo.map((cap) => (
                    <div key={cap.id} className="receta">
                        <h3>{cap.nombre}</h3>
                        <p>{cap.personajes}</p>
                    </div>
                ))
            ) : (
                !buscando && <p>No hay recetas disponibles.</p>
            )}
        </div>
    )
}
export default PersonajesCapitulo;