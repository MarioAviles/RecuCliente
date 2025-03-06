import useArea from "../../hooks/useArea"
import './FiltroArea.css'
import { useState } from "react";

const FiltroArea = (props) => {

    const {recetas} = useArea();
    const [areaElegida, setAreaElegida] =  useState("Todas");

    function recorrerAreas(receta) {
        return <option key={receta.area} value={receta.area}>{receta.area}</option>
    }

    function asignarArea(event){

        props.manejarAreaSeleccionada(event.target.value);
        setAreaElegida(event.target.value);
    }

    

    return (
        <div className="filtroArea">
            <label>Areas</label>
            <select value={areaElegida} onChange={asignarArea}>
                <option value= "Todas">
                    Selecciona un área
                </option>
                {recetas.map(recorrerAreas)}
            </select> 
        </div>
    )

}
export default FiltroArea;