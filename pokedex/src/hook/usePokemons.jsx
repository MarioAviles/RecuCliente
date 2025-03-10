import { useEffect, useState } from "react";
import { getPokemons } from "../servicios/getPokemons";

const usePokemons = (limite, offset) => {
    const [pokemons, setPokemons] = useState([]);
    const [buscando, setBuscando] = useState(false);

    function obtenerPokemons() {
        setBuscando(true);

        getPokemons({limit: limite , offset: offset}).then(datos => {
            setPokemons(datos);
            setBuscando(false);
        });
    }

    useEffect(obtenerPokemons, [limite])

    return {pokemons, buscando};
}

export default usePokemons;