import { useState, useEffect} from 'react';

// Servicios -------------------------------------------------------------
import { getAllGames } from '../servicios/getAllGames';


const useJuegos = () => {

    const [juegos, setJuegos] = useState([]);  
     
    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    function obtenerJuegos(){

        //Marcamos que estamos buscando los datos
        setBuscando(true);

        // Usamos el servicio de obtención de posts que hemos creado
        getAllGames().then(juego => {
            
            //Cargamos los post en el estado del componente
            setJuegos(juego);

            //Indicamos que hemos terminado de cargar los datos
            setBuscando(false);

            });   
                          
        }
    // Llamamos a la función de extracción de datos con un useEffect
    // para que solo se ejecute una vez
    useEffect(obtenerJuegos, []);

    return {buscando, juegos}
}
export default useJuegos;