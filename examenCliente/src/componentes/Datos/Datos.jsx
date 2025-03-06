import React from "react";
import ajaxLoader from "../../assets/ajax-loader.gif";
import "./Datos.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from 'react';
import likeIcon from '../../assets/like.svg';
import unlikeIcon from '../../assets/unlike.svg';

const Datos = (props) => {

  const navigate = useNavigate();
  const [favoritos, setFavoritos] = useState([]);

  function manejarFavoritos() {

    // Cargar favoritos de localStorage

    const favoritosGuardados = JSON.parse(localStorage.getItem('favoritos')) || [];

    // Actualizar el estado de favoritos

    setFavoritos(favoritosGuardados);
  }

  // Cargar favoritos al montar el componente

  useEffect(manejarFavoritos, []);

  function eliminarFavorito(recetaId) {

    // Quitamos la receta de favoritos

    let favorito = favoritos.filter(fav => fav !== recetaId); // Filtramos el favorito que queremos eliminar

    // Retornamos el nuevo array de favoritos

    return favorito;
  };

  function añadirFavorito(recetaId) {

    // Agregamos la receta a favoritos

    let favorito = [...favoritos, recetaId]; // Agregamos el favorito

    // Retornamos el nuevo array de favoritos

    return favorito;

  };

  // Función para manejar el click en favoritos

  function manejarClickFavorito(recetaId) {

    // Si la receta está en favoritos, la quitamos

    let nuevosFavoritos;

    // Si la receta no está en favoritos, la agregamos

    if (favoritos.includes(recetaId)) {

      // Quitamos la receta de favoritos

      nuevosFavoritos = eliminarFavorito(recetaId);

    } else {

      // Agregamos la receta a favoritos

      nuevosFavoritos = añadirFavorito(recetaId);

    }
    // Actualizamos el estado de favoritos

    setFavoritos(nuevosFavoritos);

    // Guardamos en localStorage

    localStorage.setItem('favoritos', JSON.stringify(nuevosFavoritos));

  };


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
              <img
                src={favoritos.includes(receta.id) ? likeIcon : unlikeIcon}
                alt={receta.nombre}
                onClick={(event) => {
                  event.stopPropagation(); // Evita que se active el onClick del contenedor padre
                  manejarClickFavorito(receta.id);
                }}
                className="like-icon"
              />
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
