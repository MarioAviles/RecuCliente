import useArea from "../../hooks/useArea"
import './FiltroArea.css'
import { useState } from "react";

const FiltroArea = (props) => {

    const {recetas} = useArea();

    function recorrerAreas(receta) {
        return <option key={receta.area} value={receta.area}>{receta.area}</option>
    }

    function asignarArea(event){

        props.manejarAreaSeleccionada(event.target.value);
    }

    

    return (
        <div className="filtroArea">
            <label>Areas</label>
            <select value={recetas.area} onChange={asignarArea}>
                <option value= "Todas">
                    Selecciona un área
                </option>
                {recetas.map(recorrerAreas)}
            </select> 
        </div>
    )

}
export default FiltroArea;