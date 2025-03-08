import { useEffect, useState } from "react";
import { getGifById } from "../servicios/getGifById";

// CUSTOM HOOK. Recibe un id de un gif y devuelve la información completa (un array) de dicho GIF junto
// con un boleano que nos indica cuando estamos buscando la información (true) y cuando no
// la estamos buscando (false)

const useGif = (id) =>  {    

    // Estado con la lista de gifs que recuperamos de la REST API
    const [gif, setGif] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    function obtenerGif(){

        //Marcamos que estamos buscando los datos
        setBuscando(true);

        // Usamos el servicio de obtención de posts que hemos creado
        getGifById(id).then(gif => {

            //Cargamos los post en el estado del componente
            setGif(gif);

            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);
        });                    
    }

    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerGif, [id]);

    return {buscando, gif}
}
export default useGif;