import { useEffect, useState } from "react";
import { getArea } from "../servicios/getArea";

const useArea = () => {
    const [recetas, setRecetas] = useState([]);

    function obtenerRecetas() {

        getArea().then(datos => { //aqui actualizo la letra que se le pasa a la url
            setRecetas(datos);
        });
    }

    useEffect(obtenerRecetas, [])

    return {recetas};
}

export default useArea;
