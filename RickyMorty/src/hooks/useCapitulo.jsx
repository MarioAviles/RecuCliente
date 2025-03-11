import { useEffect, useState } from "react";
import { getCapitulo } from "../servicios/getCapitulo";

const useCapitulo = (capituloSeleccionado) =>  {
    
    // Estado con la lista de gifs que recuperamos de la REST API
    const [capitulo, setCapitulo] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    // Estado para controlar la página por la que vamos

    function obtenerCapitulo(){
        if (!capituloSeleccionado) return;
        setBuscando(true);

        getCapitulo(capituloSeleccionado).then(datos => { //aqui actualizo el id que se le pasa a la url
            setCapitulo(datos);
            setBuscando(false);
        });
    }

    // Llamamos a la función de cargar página siempre
    // que la página cambie.
    useEffect(obtenerCapitulo, []);

    console.log(capitulo)
    return {buscando, capitulo}
}

export default useCapitulo;