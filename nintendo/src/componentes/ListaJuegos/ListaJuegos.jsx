import fotoJuego from '../../assets/fotoJuego.webp'
import ajaxLoader from '../../assets/ajax-loader.gif'
import { useNavigate } from 'react-router-dom'
import './ListaJuegos.css'

const ListaJuegos = (props) => {

    const navigate = useNavigate();

    return (
        <div className="datos-container">
            <h1>Juegos</h1>

            {props.buscando && <img src={ajaxLoader} />}

            <div className="juegos">
                {props.juegos.length > 0 ? (
                    props.juegos.map((juegos) => (
                        <div key={juegos.id} className="juego" onClick={() => navigate(`/juego/${juegos.id}`)}>
                            <h3>{juegos.nombre}</h3>
                            <img src={fotoJuego} alt={juegos.nombre} className="juego-img" />
                            <p className="juego-categoria"><strong>Categoría:</strong> {juegos.categorias}</p>
                            <p className="juego-categoria"><strong>Nota:</strong> {juegos.nota}</p>
                            <p className="juego-categoria"><strong>Fecha de Lanzamiento:</strong> {juegos.fechaLanzamiento}</p>
                        </div>
                    ))

                ) : (
                    !props.buscando && <p>No hay juegos disponibles.</p>
                )}
            </div>
        </div >
    )
}
export default ListaJuegos;