import React, { useState } from "react";
import "./styles.css"

const BuscaGifsForm = (props) => {
    
    // Identificadores de los campos del formulario, se los asignaremos al atributo id
    const KEYWORD    = "buscador";

    // Usamos el hook userState para gestionar el estado del componente
    const [keyword, setKeyword] = useState("");

    // Función encargada de asignar su valor a traves del hook
    function asignarKeyword(event){
       setKeyword(event.target.value);
    }

    // Función encargada de actualizar el hook de estado del componente y
    // devolver el coche creado al objeto padre
    function manejarFormulario(event) {

        // Evitamos el componrtamiento por defecto del onSubmmit del formulario
        event.preventDefault();

        // A través de la función que recibe el componente como props, devolvemos el nuevo coche
        // al componente padre para que lo añada a la lista de coches
        props.manejarAccion(keyword);

        // Reseteamos los campos del formulario al estado inicial
        setKeyword("");
    }
    return (
            <form id="formulario" onSubmit={manejarFormulario} className="c-search">
                <input id={KEYWORD} 
                       placeholder="Busca tus GIFS..." 
                       className="c-search-input"
                       type="text" 
                       onChange={asignarKeyword} 
                       value={keyword}></input>
                <button className ="c-boton">Buscar</button>
                
            </form>
    )
}

export default React.memo(BuscaGifsForm);
