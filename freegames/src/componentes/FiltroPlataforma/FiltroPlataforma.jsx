import { useState } from "react";
import './FiltroPlataforma.css';
import plataformas from "../../mock-plataforma.js";

const FiltroPlataforma = (props) => {    

    const [plataformaSeleccionada, setPlataformaSeleccionada] = useState(props.plataforma);

    function generarPlataformas(plataforma, index) {

        return <option key={index} value={plataforma}>{plataforma}</option>
    }

    function asignarPlataforma(event){
    
        // A través de la función que recibe el componente como props, devolvemos el idioma seleccionado
        // al componente padre para que lo modifique en el contexto y llegue a todos los consumidores 
        // de dicho
        props.manejarSeleccion(event.target.value);        
        setPlataformaSeleccionada(event.target.value);
    }
    
    return (
        <div>
            <label>Plataforma</label>
            <select id="filtroPlataforma" size ="3" value={props.plataforma} onChange={asignarPlataforma}>
            {plataformas.map(generarPlataformas)}
            </select> 
        </div>
    )
}

export default FiltroPlataforma;