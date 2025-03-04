import { useEffect, useState } from "react";
import { getRecetas } from "../servicios/getRecetas";
import { getRecetaId } from "../servicios/getRecetaId";

const useRecetas = () => {
    const [recetas, setRecetas] = useState([]);
    const [buscando, setBuscando] = useState(false);
    const [id, setId] = useState(""); // Letra por defecto

    function obtenerComida(IdSeleccionado){
        setBuscando(true);
        setId(IdSeleccionado); // Guarda la letra seleccionada

        getRecetaId(IdSeleccionado).then(datos => { //aqui actualizo el id que se le pasa a la url
            setRecetas(datos);
            setBuscando(false);
        });
    }

    useEffect(() => { obtenerComida(id);
    }, [id]); // Se ejecuta cuando cambia el id para poder volver a obtener las recetas

    return { recetas, buscando, obtenerComida };
}

export default useRecetas;
