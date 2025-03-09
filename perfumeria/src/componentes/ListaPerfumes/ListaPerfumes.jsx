import fotoPerfume from '../../assets/fotoPerfume.jpg'
import ajaxLoader from '../../assets/ajax-loader.gif'
import { useNavigate } from 'react-router-dom'
import './ListaPerfumes.css'

const ListaPerfumes = (props) => {

    const navigate = useNavigate();

    return (
        <div className="datos-container">
            <h1>Perfumes</h1>

            {props.buscando && <img src={ajaxLoader} />}

            <div className="perfumes">
                {props.perfumes.length > 0 ? (
                    props.perfumes.map((perfumes) => (
                        <div key={perfumes.id} className="perfume" onClick={() => navigate(`/perfume/${perfumes.id}`)}>
                            <h4 className='perfume-nombre'>{perfumes.nombre}</h4>
                            <img src={fotoPerfume} alt={perfumes.nombre} className="perfume-img" />
                            <p className="perfume-categoria"><strong>Categoría:</strong> {perfumes.categoria}</p>
                            <p className="perfume-categoria"><strong>Marca:</strong> {perfumes.marca}</p>
                        </div>
                    ))

                ) : (
                    !props.buscando && <p>No hay perfumes disponibles.</p>
                )}
            </div>
        </div >
    )
}
export default ListaPerfumes;