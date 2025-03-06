import { useEffect, useState } from "react";
import { getRecetaId } from "../servicios/getRecetaId";

const useRecetaId = (IdSeleccionado) => {
    const [recetas, setRecetas] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerComida(){
        if (!IdSeleccionado) return;
        setBuscando(true);

        getRecetaId(IdSeleccionado).then(datos => { //aqui actualizo el id que se le pasa a la url
            setRecetas(datos);
            setBuscando(false);
        });
    }

    useEffect(obtenerComida, []);

    console.log("En el use", recetas);
    return { recetas, buscando};
}

export default useRecetaId;
