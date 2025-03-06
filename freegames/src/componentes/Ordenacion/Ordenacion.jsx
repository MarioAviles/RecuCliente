import { useState } from "react";
import './Ordenacion.css';

const Ordenacion = (props) => {    

    const [orden, setOrden] = useState(props.orden);

    function asignarOrdenacion(event){

        // A través de la función que recibe el componente como props, devolvemos el idioma seleccionado
        // al componente padre para que lo modifique en el contexto y llegue a todos los consumidores 
        // de dicho
        props.manejarSeleccion(event.target.value);        
        setOrden(event.target.value);
    }

    console.log(orden);
    
    return (
        <div>
            <label>Título</label>
            <select id="ordenacion" value={props.orden} onChange={asignarOrdenacion}>
                <option value="A">A...Z</option>
                <option value="Z">Z...A</option>
            </select> 
        </div>
    )


}

export default Ordenacion;