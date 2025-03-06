import React from "react";
import ajaxLoader from "../../assets/ajax-loader.gif";
import "./Datos.css";
import { useNavigate } from "react-router-dom";
import useRecetaId from "../../hooks/useRecetaId";

const Datos = (props) => {

  const { obtenerComida } = useRecetaId();
  const navigate = useNavigate();

  //si esta buscando muestra el ajaxloader, sino las recetas
  return (
    <div className="datos-container">
      <h2>Recetas</h2>

      {props.buscando && <img src={ajaxLoader} />}

      <div className="recetas">
        {props.recetas.length > 0 ? (
          props.recetas.map((receta) => (
            <div key={receta.id} className="receta" onClick={() => navigate(`/comida/${receta.id}`)}>
              <h3>{receta.nombre}</h3>
              <img src={receta.foto} alt={receta.nombre} className="receta-img" />
              <p className="receta-categoria"><strong>Categoría:</strong> {receta.categoria}</p>
            </div>
          ))
        ) : (
          !props.buscando && <p>No hay recetas disponibles.</p>
        )}
      </div>
    </div >
  );
};

export default Datos;
