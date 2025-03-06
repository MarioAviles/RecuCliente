import { useState } from "react";
import './FiltroGenero.css';
import generos from '../../mock-genero.js';

const FiltroGenero = (props) => {    

    const [generoSeleccionado, setGeneroSeleccionado] = useState(props.genero);

    function generarGeneros(genero, index) {

        return <option key={index} value={genero}>{genero}</option>
    }

    function asignarGenero(event){
    
        // A través de la función que recibe el componente como props, devolvemos el idioma seleccionado
        // al componente padre para que lo modifique en el contexto y llegue a todos los consumidores 
        // de dicho
        props.manejarSeleccion(event.target.value);        
        setGeneroSeleccionado(event.target.value);
    }

    return (
        <div>
            <label>Género</label>
            <select id="filtroGenero" size ="7" value={props.genero} onChange={asignarGenero}>
                {generos.map(generarGeneros)}
            </select> 
        </div>
    )
}

export default FiltroGenero;