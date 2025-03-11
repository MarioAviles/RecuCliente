import { useEffect, useState } from "react";
import { getTodosCapitulos } from "../servicios/getTodosCapitulos";

const paginaInicial = 0;


const useTodosCapitulos = () =>  {
    
    // Estado con la lista de gifs que recuperamos de la REST API
    const [listaCapitulos, setListaCapitulos] = useState([]);

    // Estado para controlar si estamos cargando los datos o hemos finalizado
    // de cargarlos
    const [buscando, setBuscando] = useState(false);

    // Estado para controlar la página por la que vamos
    const [page, setPage] = useState(paginaInicial);

    function obtenerCaps() {

        //Marcamos que estamos buscando los datos solo en la primera página
        // página para conseguir el efecto buscado
        if(page===0) setBuscando(true);

        getTodosCapitulos({page:page}).then(nextCaps => {

            setListaCapitulos(prevCaps => prevCaps.concat(nextCaps));
            
            //Indicamos que hemos terminado de cargar los datos solo en la primera
            // página para conseguir el efecto buscado
            if(page===0)setBuscando(false);
        });
    }

    // Llamamos a la función de cargar página siempre
    // que la página cambie.
    useEffect(obtenerCaps, [page, setListaCapitulos]);

    return {buscando, listaCapitulos, setPage}
}

export default useTodosCapitulos;