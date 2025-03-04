import { useEffect, useState } from "react";
import { getRecetas } from "../servicios/getRecetas";
import { getRecetaId } from "../servicios/getRecetaId";

const useRecetas = () => {
    const [recetas, setRecetas] = useState([]);
    const [buscando, setBuscando] = useState(false);
    const [letra, setLetra] = useState('a'); // Letra por defecto

    function obtenerRecetas(letraSeleccionada) {
        setBuscando(true);
        setLetra(letraSeleccionada); // Guarda la letra seleccionada

        getRecetas(letraSeleccionada).then(datos => { //aqui actualizo la letra que se le pasa a la url
            setRecetas(datos);
            setBuscando(false);
        });
    }

    useEffect(() => { obtenerRecetas(letra);
    }, [letra]); // Se ejecuta cuando cambia la letra para poder volver a obtener las recetas

    return { recetas, buscando, obtenerRecetas };
}

export default useRecetas;
