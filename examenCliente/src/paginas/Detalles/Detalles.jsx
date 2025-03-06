import { useParams } from "react-router-dom";
import ajaxLoader from "../../assets/ajax-loader.gif";
import useRecetaId from "../../hooks/useRecetaId";
const Detalles = () => {
    const { id } = useParams()
    const {buscando, recetas} = useRecetaId(id);

    if (!recetas || recetas.length === 0) {
        return "no hay resultados"
    }

    return (
        <div className="datos-container">
              <h2>Receta concreta</h2>
        
              {buscando && <img src={ajaxLoader} />}
        
              <div className="recetas">
                {recetas.length > 0 ? (
                  recetas.map((receta) => (
                    <div key={receta.id} className="receta">
                      <h3>{receta.nombre}</h3>
                      <p className="receta-categoria"><strong>Categoría:</strong> {receta.categoria}</p>
                      <p className="receta-categoria"><strong>Área:</strong> {receta.area}</p>
                    </div>
                  ))
                ) : (
                  !buscando && <p>No hay recetas disponibles.</p>
                )}
              </div>
            </div >
    )
}
export default Detalles;