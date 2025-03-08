import { useEffect, useState } from "react";
import { getTrendings } from "../servicios/getTrendings";

// CUSTOM HOOK. Devuelve la información (un array) de todos los GIFS que
// son trending  con un boleano que nos indica cuando estamos buscando
// la información (true) y cuando no la estamos buscando (false)

const useTrendings = () =>  {
    
    // Estado con la lista de gifs que recuperamos de la REST API
    const [listaGifs, setListaGifs] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    function obtenerTrendings(){

        //Marcamos que estamos buscando los datos
        setBuscando(true);

        // Usamos el servicio de obtención de posts que hemos creado
        getTrendings().then(gifs => {

            //Cargamos los post en el estado del componente
            setListaGifs(gifs);

            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);

        });                    
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerTrendings, []);

    return {buscando, listaGifs}
}
export default useTrendings;